import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { CareerRoadmap, RoadmapStep, CareerCurriculum, CareerMilestone, CareerLesson, CareerUserProgress } from '../../types';
import { aiService } from '../../services/aiService';
import { getCurriculumByRoadmapId } from '../../data/careerCurriculums/curriculumRegistry';
import { CareerLessonTeachingView } from './CareerLessonTeachingView';
import { ResourceCard } from '../resources/ResourceCard';
import { VideoPlayerModal } from '../resources/VideoPlayerModal';
import { getResourcesByRoadmap, initialLearningResources } from '../../data/learningResourcesData';
import { LearningResource } from '../../types';
import {
  Map,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Clock,
  DollarSign,
  TrendingUp,
  BrainCircuit,
  Send,
  BookOpen,
  Calendar,
  Layers,
  ChevronRight,
  ChevronDown,
  Award,
  Code2,
  FolderGit2,
  HelpCircle,
  Play,
  Briefcase,
  FileText,
  UserCheck,
  Check,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

const STORAGE_KEY = 'by_career_progress_v2';

export const RoadmapsView: React.FC = () => {
  const { roadmaps, user, setActiveView } = useApp();
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>(user.activeRoadmapId || roadmaps[0].id);

  const currentRoadmap = roadmaps.find(r => r.id === selectedRoadmapId) || roadmaps[0];
  const curriculum: CareerCurriculum = getCurriculumByRoadmapId(currentRoadmap.id, currentRoadmap.role);

  // Teaching System Navigation State
  const [activeTab, setActiveTab] = useState<'curriculum' | 'capstone' | 'portfolio' | 'resources'>('curriculum');
  const [expandedMilestoneId, setExpandedMilestoneId] = useState<string>(curriculum.milestones[0]?.id || '');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [selectedRoadmapVideo, setSelectedRoadmapVideo] = useState<LearningResource | null>(null);

  // User Progress Persistence State
  const [progress, setProgress] = useState<CareerUserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return {
      completedLessonIds: [],
      quizScores: {},
      completedProjectIds: []
    };
  });

  // Save progress changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore
    }
  }, [progress]);

  // When selected roadmap changes, reset active lesson & open first milestone
  useEffect(() => {
    setActiveLessonId(null);
    setExpandedMilestoneId(curriculum.milestones[0]?.id || '');
  }, [selectedRoadmapId]);

  // Mark Lesson Complete Handler (Gated by passing quiz score >= 70%)
  const handleCompleteLesson = (lessonId: string, score: number) => {
    setProgress(prev => {
      const updatedLessonIds = prev.completedLessonIds.includes(lessonId)
        ? prev.completedLessonIds
        : [...prev.completedLessonIds, lessonId];
      return {
        ...prev,
        completedLessonIds: updatedLessonIds,
        quizScores: {
          ...prev.quizScores,
          [lessonId]: score
        }
      };
    });
  };

  // Calculate Total Career Progress
  const allCurriculumLessons: CareerLesson[] = curriculum.milestones.flatMap(m => m.lessons);
  const totalLessonsCount = allCurriculumLessons.length;
  const completedLessonsInRole = allCurriculumLessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
  const progressPercent = totalLessonsCount > 0 ? Math.round((completedLessonsInRole / totalLessonsCount) * 100) : 0;

  // AI Personalized Roadmap Generator Form State
  const [customRole, setCustomRole] = useState<string>(currentRoadmap.role || 'Data Analyst');
  const [customLevel, setCustomLevel] = useState<string>('Beginner');
  const [customHours, setCustomHours] = useState<number>(2);
  const [customMonths, setCustomMonths] = useState<number>(8);
  const [customCountry, setCustomCountry] = useState<string>('Germany');
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Capstone Submission Simulator
  const [isCapstoneSubmitted, setIsCapstoneSubmitted] = useState<boolean>(
    progress.completedProjectIds.includes(curriculum.capstoneProject.id)
  );

  const handleCompleteCapstone = () => {
    setIsCapstoneSubmitted(true);
    setProgress(prev => ({
      ...prev,
      completedProjectIds: prev.completedProjectIds.includes(curriculum.capstoneProject.id)
        ? prev.completedProjectIds
        : [...prev.completedProjectIds, curriculum.capstoneProject.id]
    }));
  };

  // Interview Questions Category Filter & State
  const [interviewFilter, setInterviewFilter] = useState<string>('All');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  const filteredQuestions = curriculum.interviewQuestions.filter(
    q => interviewFilter === 'All' || q.category === interviewFilter
  );

  const handleGenerateCustomRoadmap = async () => {
    setIsGenerating(true);
    setGeneratedPlan(null);
    const plan = await aiService.generatePersonalizedRoadmap({
      targetCareer: customRole,
      currentSkillLevel: customLevel,
      hoursPerDay: customHours,
      targetTimelineMonths: customMonths,
      targetCountry: customCountry
    });
    setGeneratedPlan(plan);
    setIsGenerating(false);
  };

  // Find active lesson object if one is selected
  const activeLesson = allCurriculumLessons.find(l => l.id === activeLessonId);
  const activeMilestone = curriculum.milestones.find(m => m.lessons.some(l => l.id === activeLessonId)) || curriculum.milestones[0];

  // If a lesson is currently active, render the dedicated CareerLessonTeachingView
  if (activeLesson) {
    return (
      <CareerLessonTeachingView
        curriculum={curriculum}
        milestone={activeMilestone}
        lesson={activeLesson}
        completedLessonIds={progress.completedLessonIds}
        quizScores={progress.quizScores}
        onCompleteLesson={handleCompleteLesson}
        onNavigateLesson={(id) => setActiveLessonId(id)}
        onBackToMilestones={() => setActiveLessonId(null)}
      />
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Interactive Mastery & Teaching System</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personalized Career Roadmaps & Learning Paths
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Follow a proven, rigorous curriculum from beginner to job-ready professional. Click on any milestone below to access real lessons, interactive code runners, practical challenges, verified quizzes, capstone projects, and interview coaching.
          </p>
        </div>
      </div>

      {/* Roadmap Selector Tabs (All 18 Careers Preserved) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
          <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-300">
            Select Your Target Career ({roadmaps.length} Programs)
          </span>
          <span>Click any role to load complete curriculum</span>
        </div>
        <div className="flex flex-wrap gap-2 pb-2">
          {roadmaps.map(rm => {
            const isSelected = selectedRoadmapId === rm.id;
            return (
              <button
                key={rm.id}
                onClick={() => setSelectedRoadmapId(rm.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25 border border-violet-400'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{rm.role}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Roadmap Overview Card with Progress Bar */}
      <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                {currentRoadmap.category}
              </span>
              <span className="text-xs font-semibold text-emerald-400">Demand: {currentRoadmap.demandLevel}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {currentRoadmap.title}
            </h2>
            <p className="text-xs text-cyan-300 font-medium">{curriculum.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2 text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{currentRoadmap.estimatedMonths} Months ({currentRoadmap.studyHoursPerWeek} hrs/wk)</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2 text-slate-300">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Avg Salary: {currentRoadmap.averageSalary}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">{curriculum.overview}</p>

        {/* Real Progress Bar */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white">Your Career Learning Progress</span>
              <span className="text-slate-400">({completedLessonsInRole} of {totalLessonsCount} lessons mastered)</span>
            </div>
            <span className="font-mono font-bold text-emerald-400 text-sm">{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* View Tabs: Curriculum & Lessons | Capstone Project | Portfolio & Interview Prep */}
        <div className="flex border-b border-slate-800 gap-4 pt-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`pb-3 px-1 border-b-2 flex items-center space-x-2 transition-all ${
              activeTab === 'curriculum'
                ? 'border-violet-500 text-white font-extrabold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Interactive Milestones & Lessons ({curriculum.milestones.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('capstone')}
            className={`pb-3 px-1 border-b-2 flex items-center space-x-2 transition-all ${
              activeTab === 'capstone'
                ? 'border-violet-500 text-white font-extrabold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Capstone Project</span>
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`pb-3 px-1 border-b-2 flex items-center space-x-2 transition-all ${
              activeTab === 'portfolio'
                ? 'border-violet-500 text-white font-extrabold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Portfolio & Interview Preparation</span>
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`pb-3 px-1 border-b-2 flex items-center space-x-2 transition-all ${
              activeTab === 'resources'
                ? 'border-violet-500 text-white font-extrabold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>YouTube Resources & Docs</span>
          </button>
        </div>
      </div>

      {/* TAB 1: CURRICULUM & LESSONS */}
      {activeTab === 'curriculum' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-violet-400" />
              <span>{curriculum.role.toUpperCase()} CAREER ROADMAP & TEACHING PATH</span>
            </h3>
            <span className="text-xs text-slate-400">Click any milestone to open its full lesson curriculum</span>
          </div>

          <div className="space-y-4">
            {curriculum.milestones.map((ms, idx) => {
              const isExpanded = expandedMilestoneId === ms.id;
              const msLessons = ms.lessons || [];
              const completedCount = msLessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
              const isMilestoneCompleted = msLessons.length > 0 && completedCount === msLessons.length;

              return (
                <div
                  key={ms.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isMilestoneCompleted
                      ? 'bg-slate-900/50 border-emerald-500/30'
                      : isExpanded
                      ? 'bg-slate-900/90 border-violet-500/50 shadow-xl shadow-violet-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Milestone Clickable Header */}
                  <div
                    onClick={() => setExpandedMilestoneId(isExpanded ? '' : ms.id)}
                    className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="flex items-start space-x-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs ${
                          isMilestoneCompleted
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : isExpanded
                            ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}
                      >
                        {isMilestoneCompleted ? <CheckCircle2 className="w-5 h-5" /> : `M${idx + 1}`}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 flex-wrap gap-1">
                          <h4 className="text-base font-bold text-white">{ms.title}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {ms.level}
                          </span>
                          <span className="text-xs text-slate-400">
                            • {msLessons.length} Comprehensive Lessons
                          </span>
                        </div>
                        <p className="text-xs text-slate-300">{ms.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 self-end md:self-auto">
                      <div className="text-right text-xs">
                        <span className="text-slate-400">Progress: </span>
                        <span className="font-bold text-white">{completedCount}/{msLessons.length}</span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Skills Learned Badges */}
                  <div className="px-5 pb-3 flex flex-wrap gap-1.5 text-[10px]">
                    <span className="text-slate-400 font-semibold mr-1">Skills:</span>
                    {ms.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Lessons List with Click-to-Teach */}
                  {isExpanded && (
                    <div className="border-t border-slate-800/80 bg-slate-950/60 p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
                        <span className="font-semibold text-slate-300">Milestone Lessons & Teaching Content</span>
                        <span>Click any lesson to start interactive learning</span>
                      </div>

                      {msLessons.length === 0 ? (
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                          <span>This milestone culminates in the Capstone Project.</span>
                          <button
                            onClick={() => setActiveTab('capstone')}
                            className="px-3 py-1.5 rounded-lg bg-violet-600 text-white font-bold text-xs"
                          >
                            Open Capstone Project
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-2.5">
                          {msLessons.map((l, lIdx) => {
                            const isLessonCompleted = progress.completedLessonIds.includes(l.id);
                            const score = progress.quizScores[l.id];

                            return (
                              <div
                                key={l.id}
                                onClick={() => setActiveLessonId(l.id)}
                                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                  isLessonCompleted
                                    ? 'bg-slate-900/40 border-emerald-500/20 hover:border-emerald-500/40'
                                    : 'bg-slate-900/80 border-slate-800 hover:border-violet-500/50 hover:bg-slate-900'
                                }`}
                              >
                                <div className="flex items-center space-x-3">
                                  <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                                      isLessonCompleted
                                        ? 'bg-emerald-500/20 text-emerald-400 font-bold'
                                        : 'bg-slate-800 text-slate-400'
                                    }`}
                                  >
                                    {isLessonCompleted ? <Check className="w-3.5 h-3.5" /> : lIdx + 1}
                                  </div>
                                  <div>
                                    <h5 className="text-xs sm:text-sm font-bold text-white hover:text-violet-300 transition-colors">
                                      {l.title}
                                    </h5>
                                    <p className="text-[11px] text-slate-400 line-clamp-1">
                                      {l.exampleDescription}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-2 self-end sm:self-auto flex-shrink-0">
                                  <span className="text-[10px] text-slate-400 flex items-center space-x-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{l.durationMinutes}m</span>
                                  </span>

                                  {isLessonCompleted ? (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                                      Completed ({score ? `${score}%` : '✓'})
                                    </span>
                                  ) : (
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-600/10 text-violet-300 border border-violet-500/20">
                                      Start Lesson →
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: CAPSTONE PROJECT */}
      {activeTab === 'capstone' && (
        <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-xs font-bold uppercase">
                  {curriculum.capstoneProject.difficulty} Project
                </span>
                <span className="text-xs text-slate-400">• ~{curriculum.capstoneProject.estimatedHours} Hours of Building</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {curriculum.capstoneProject.title}
              </h3>
            </div>

            {isCapstoneSubmitted ? (
              <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Capstone Completed ✓</span>
              </span>
            ) : (
              <button
                onClick={handleCompleteCapstone}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 flex items-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark Capstone Completed</span>
              </button>
            )}
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {curriculum.capstoneProject.overview}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 block">
              Architectural Pipeline
            </span>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono">
              {curriculum.capstoneProject.architecture}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
                Technical Requirements
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                {curriculum.capstoneProject.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Portfolio Deliverables
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                {curriculum.capstoneProject.deliverables.map((deliv, dIdx) => (
                  <li key={dIdx} className="flex items-start space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <FolderGit2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Recommended Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {curriculum.capstoneProject.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="px-3 py-1 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {curriculum.capstoneProject.starterCode && (
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Starter Template Code
              </span>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                <pre>{curriculum.capstoneProject.starterCode}</pre>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: PORTFOLIO & INTERVIEW PREP */}
      {activeTab === 'portfolio' && (
        <div className="space-y-8">
          {/* GitHub Structure & Resume Bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center space-x-2">
                <FolderGit2 className="w-4 h-4 text-violet-400" />
                <span>GitHub Repository Architecture</span>
              </h4>
              <p className="text-xs text-slate-400">
                Recruiters judge engineering discipline by your repo structure and commit clarity.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                {curriculum.portfolioGuide.githubStructure.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="font-mono text-cyan-400 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center space-x-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Action-Oriented Resume Bullet Points</span>
              </h4>
              <p className="text-xs text-slate-400">
                Quantified bullet points formatted for Applicant Tracking Systems (ATS).
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                {curriculum.portfolioGuide.resumeBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interview Questions Section */}
          <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-indigo-400" />
                  <span>Real Technical Interview Questions & Answers</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Practiced questions asked by hiring managers at FAANG, scale-ups, and enterprise firms.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Technical', 'Coding', 'System Design', 'Behavioral'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setInterviewFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      interviewFilter === cat
                        ? 'bg-violet-600 text-white'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredQuestions.map((q, idx) => {
                const isRevealed = revealedAnswers[idx];
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-2 text-sm font-semibold text-white">
                        <span className="w-6 h-6 rounded-full bg-violet-600/30 text-violet-300 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                          Q{idx + 1}
                        </span>
                        <span>{q.question}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 flex-shrink-0">
                        {q.category}
                      </span>
                    </div>

                    <button
                      onClick={() => setRevealedAnswers(prev => ({ ...prev, [idx]: !prev[idx] }))}
                      className="text-xs text-violet-400 hover:text-violet-300 font-semibold flex items-center space-x-1"
                    >
                      <span>{isRevealed ? 'Hide Model Answer & Tips' : 'Reveal Model Answer & Coaching Tips →'}</span>
                    </button>

                    {isRevealed && (
                      <div className="space-y-3 pt-2 text-xs border-t border-slate-900">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 leading-relaxed whitespace-pre-wrap">
                          <strong className="text-emerald-400 block mb-1">Model Answer:</strong>
                          {q.answer}
                        </div>
                        {q.tips && (
                          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                            <strong>Interviewer Tip:</strong> {q.tips}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: YOUTUBE RESOURCES & OFFICIAL DOCUMENTATION */}
      {activeTab === 'resources' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-rose-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Stage-by-Stage Video Tutorials & Official Standards</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {curriculum.role} Recommended Learning Resources
              </h3>
            </div>
            <button
              onClick={() => setActiveView('resources')}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Browse Global Resource Library →
            </button>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {initialLearningResources.filter(r =>
              (r.roadmap && r.roadmap.toLowerCase().includes(currentRoadmap.role.toLowerCase())) ||
              (r.technology && currentRoadmap.role.toLowerCase().includes(r.technology.toLowerCase())) ||
              r.category === 'roadmap' ||
              (currentRoadmap.role.includes('Data') && (r.technology === 'SQL' || r.technology === 'Python' || r.technology === 'Pandas'))
            ).slice(0, 6).map(res => (
              <ResourceCard
                key={res.id}
                resource={res}
                onWatchVideo={setSelectedRoadmapVideo}
                onAskAi={() => setActiveView('ai-tutor')}
              />
            ))}
          </div>

          {/* Video Player Modal */}
          <VideoPlayerModal
            resource={selectedRoadmapVideo}
            onClose={() => setSelectedRoadmapVideo(null)}
            onAskAi={() => setActiveView('ai-tutor')}
          />
        </div>
      )}
      <div className="rounded-3xl bg-gradient-to-br from-violet-950/40 via-slate-900 to-slate-900 p-6 sm:p-8 border border-violet-500/30 shadow-2xl space-y-6">
        <div className="flex items-center space-x-3 text-violet-300">
          <BrainCircuit className="w-6 h-6 text-violet-400" />
          <div>
            <h3 className="text-lg font-bold text-white">Generate Custom AI Learning Roadmap</h3>
            <p className="text-xs text-slate-400">
              Provide your exact constraints (study hours, target timeline, target country), and our AI will formulate a customized week-by-week plan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Target Career</label>
            <input
              type="text"
              value={customRole}
              onChange={e => setCustomRole(e.target.value)}
              placeholder="e.g. Data Analyst"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-violet-500/50"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Current Skill Level</label>
            <select
              value={customLevel}
              onChange={e => setCustomLevel(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-violet-500/50"
            >
              <option value="Complete Beginner">Complete Beginner</option>
              <option value="Intermediate">Intermediate (know basics)</option>
              <option value="Advanced">Advanced (upskilling)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Study Hours / Day</label>
            <select
              value={customHours}
              onChange={e => setCustomHours(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-violet-500/50"
            >
              <option value={1}>1 hour / day</option>
              <option value={2}>2 hours / day</option>
              <option value={4}>4 hours / day</option>
              <option value={6}>6+ hours / day (Full-time)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Target Timeline</label>
            <select
              value={customMonths}
              onChange={e => setCustomMonths(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-violet-500/50"
            >
              <option value={3}>3 Months (Intensive)</option>
              <option value={6}>6 Months</option>
              <option value={8}>8 Months</option>
              <option value={12}>12 Months</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Target Country</label>
            <input
              type="text"
              value={customCountry}
              onChange={e => setCustomCountry(e.target.value)}
              placeholder="e.g. Germany, USA"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-violet-500/50"
            />
          </div>
        </div>

        <button
          onClick={handleGenerateCustomRoadmap}
          disabled={isGenerating}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center space-x-2 transition-all shadow-lg shadow-violet-600/30"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isGenerating ? 'Synthesizing Roadmap...' : 'Generate Personalized AI Plan'}</span>
        </button>

        {generatedPlan && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-violet-500/40 text-xs text-slate-200 space-y-3 leading-relaxed whitespace-pre-wrap">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-violet-300 font-bold">
              <span>Your Customized AI Curriculum</span>
              <span className="font-mono text-slate-400">Generated Just Now</span>
            </div>
            <div>{generatedPlan}</div>
          </div>
        )}
      </div>
    </div>
  );
};
