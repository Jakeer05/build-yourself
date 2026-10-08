import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Course } from '../../types';
import { programmingLanguages, ProgrammingLanguageInfo, LanguageCurriculumTopic, LanguageProjectItem } from '../../data/programmingLanguagesData';
import { webDevelopmentPaths, dataAnalyticsPaths, computerSciencePaths, DetailedLearningPath, PathTopicItem } from '../../data/learningPathsData';
import { ConceptTeachingView } from './ConceptTeachingView';
import { buildConceptDetailData } from '../../data/conceptTeachingRegistry';
import { ProjectTeachingView } from '../roadmaps/ProjectTeachingView';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  Search,
  Filter,
  Star,
  Users,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Play,
  Terminal,
  Code2,
  Cpu,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Server,
  Wrench,
  Check,
  X,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  FolderGit2
} from 'lucide-react';

export const CoursesView: React.FC = () => {
  const { courses, user, setSelectedCourseId, setActiveView, enrollInCourse, completeLesson } = useApp();

  // 12 Requested Categories
  const categories = [
    'All',
    'PROGRAMMING',
    'WEB DEVELOPMENT',
    'DATA',
    'DATABASES',
    'CLOUD',
    'COMPUTER SCIENCE',
    'AI & MACHINE LEARNING',
    'DEVOPS',
    'CYBERSECURITY',
    'MOBILE DEVELOPMENT',
    'SOFTWARE ENGINEERING',
    'TOOLS & TECHNOLOGIES'
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('PROGRAMMING');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  // Programming Language Selection State
  const [selectedLang, setSelectedLang] = useState<ProgrammingLanguageInfo>(programmingLanguages[0]); // default Python
  const [activeLangTab, setActiveLangTab] = useState<'beginner' | 'intermediate' | 'advanced' | 'projects'>('beginner');
  
  // Interactive Lesson Modal / Drawer State
  const [activeLessonModal, setActiveLessonModal] = useState<LanguageCurriculumTopic | PathTopicItem | null>(null);
  const [activeLessonParentName, setActiveLessonParentName] = useState<string>('Python');
  const [sandboxCode, setSandboxCode] = useState<string>('');
  const [sandboxOutput, setSandboxOutput] = useState<string | null>(null);
  const [isExecutingSandbox, setIsExecutingSandbox] = useState<boolean>(false);
  const [quizSelection, setQuizSelection] = useState<Record<string, number>>({});
  const [quizChecked, setQuizChecked] = useState<boolean>(false);
  const [showExerciseSolution, setShowExerciseSolution] = useState<boolean>(false);

  // Active Project Detail Modal State
  const [activeProjectModal, setActiveProjectModal] = useState<LanguageProjectItem | null>(null);

  // Filtered Programming Languages
  const filteredLanguages = programmingLanguages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.primaryUses.some(u => u.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Filtered standard catalog courses
  const filteredCourses = courses.filter(course => {
    let catNormalized = course.category.toUpperCase();
    if (course.category === 'Programming') catNormalized = 'PROGRAMMING';
    if (course.category === 'Web Development') catNormalized = 'WEB DEVELOPMENT';
    if (course.category === 'Data') catNormalized = 'DATA';
    if (course.category === 'Computer Science') catNormalized = 'COMPUTER SCIENCE';
    if (course.category === 'Cloud') catNormalized = 'CLOUD';

    const matchesCategory = selectedCategory === 'All' || catNormalized === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  // Open Lesson Modal with full rich teaching content
  const handleOpenLesson = (topic: LanguageCurriculumTopic | PathTopicItem, parentName: string) => {
    setActiveLessonModal(topic);
    setActiveLessonParentName(parentName);
    setSandboxCode(topic.codeSnippet || topic.exercise?.starterCode || `// Practice code for ${topic.title}\nconsole.log("Ready");`);
    setSandboxOutput(null);
    setQuizSelection({});
    setQuizChecked(false);
    setShowExerciseSolution(false);
  };

  // Run Sandbox Code Simulator
  const handleRunSandbox = () => {
    setIsExecutingSandbox(true);
    setSandboxOutput('Running in secure isolated container...');
    setTimeout(() => {
      setIsExecutingSandbox(false);
      setSandboxOutput(
        activeLessonModal?.exampleOutput 
          ? `[Output]:\n${activeLessonModal.exampleOutput}\n\n[Status]: Process finished with exit code 0.`
          : `[Output]:\nExecuted successfully.\n\n[Status]: Process finished with exit code 0.`
      );
    }, 600);
  };

  // Mark Individual Lesson Complete (Does NOT mark entire course complete!)
  const handleMarkLessonDone = () => {
    if (!activeLessonModal) return;
    completeLesson('course-lang-' + selectedLang.slug, activeLessonModal.id);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 }
    });
  };

  const isLessonCompleted = activeLessonModal ? user.completedLessonIds.includes(activeLessonModal.id) : false;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-cyan-500/25 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Build Yourself Complete Learning Hub</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Master Technology, Engineering & Computer Science
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            From absolute beginner to production job-ready. Learn programming languages, web stacks, data engineering, and core CS with line-by-line concept breakdowns, live sandboxes, and verified milestone tests.
          </p>
        </div>
      </div>

      {/* 2. 12 Categories Navigation Pills */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Categories</span>
          <span className="text-xs text-cyan-400 font-mono">12 Disciplines Available</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Search and Level Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search language, technology, or concept..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          <span className="text-xs text-slate-400">Skill Level:</span>
          <select
            value={selectedLevel}
            onChange={e => setSelectedLevel(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50 cursor-pointer"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION A: PROGRAMMING CATEGORY - SCALABLE PROGRAMMING LANGUAGE CATALOG   */}
      {/* ========================================================================= */}
      {(selectedCategory === 'PROGRAMMING' || selectedCategory === 'All') && (
        <div className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Programming Language Catalog ({programmingLanguages.length} Languages)</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Scalable catalog: Select any language to inspect Beginner, Intermediate, Advanced, and 10 Capstone Projects.
              </p>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
              Admin extensible
            </span>
          </div>

          {/* 17 Language Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2.5">
            {filteredLanguages.map(lang => {
              const isSelected = selectedLang.id === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => {
                    setSelectedLang(lang);
                    setActiveLangTab('beginner');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 group ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-950/60 to-slate-900 border-cyan-400 ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-white group-hover:text-cyan-300">{lang.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{lang.yearCreated}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 line-clamp-1">{lang.paradigm[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Programming Language Detail Workspace */}
          {selectedLang && (
            <div className="rounded-3xl cosmic-card border border-cyan-500/30 overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8">
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedLang.name} Curriculum
                      </h3>
                      <p className="text-xs text-cyan-300 font-medium">{selectedLang.tagline}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {selectedLang.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[10px] font-semibold text-slate-400">Primary Uses:</span>
                    {selectedLang.primaryUses.map((use, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Stats Pill & Direct Certification Button */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center space-x-6 text-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Lessons</span>
                      <span className="text-base font-extrabold text-white">
                        {selectedLang.beginnerTopics.length + selectedLang.intermediateTopics.length + selectedLang.advancedTopics.length}
                      </span>
                    </div>
                    <div className="w-px h-8 bg-slate-800" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Projects</span>
                      <span className="text-base font-extrabold text-cyan-400">{selectedLang.projects.length} Practical</span>
                    </div>
                    <div className="w-px h-8 bg-slate-800" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Pass Score</span>
                      <span className="text-base font-extrabold text-amber-400">15 / 30</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveView('mock-tests')}
                    className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all"
                  >
                    <span>Already Know {selectedLang.name}? Take 30Q Certification Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 4 Tabs: BEGINNER, INTERMEDIATE, ADVANCED, PROJECTS */}
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 overflow-x-auto">
                <button
                  onClick={() => setActiveLangTab('beginner')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
                    activeLangTab === 'beginner'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>BEGINNER</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-slate-950/40 text-[10px]">
                    {selectedLang.beginnerTopics.length} Topics
                  </span>
                </button>

                <button
                  onClick={() => setActiveLangTab('intermediate')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
                    activeLangTab === 'intermediate'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>INTERMEDIATE</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-slate-950/40 text-[10px]">
                    {selectedLang.intermediateTopics.length} Topics
                  </span>
                </button>

                <button
                  onClick={() => setActiveLangTab('advanced')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
                    activeLangTab === 'advanced'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>ADVANCED</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-slate-950/40 text-[10px]">
                    {selectedLang.advancedTopics.length} Topics
                  </span>
                </button>

                <button
                  onClick={() => setActiveLangTab('projects')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
                    activeLangTab === 'projects'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>PROJECTS</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-slate-950/40 text-[10px]">
                    10 Practical
                  </span>
                </button>
              </div>

              {/* TAB CONTENT: BEGINNER */}
              {activeLangTab === 'beginner' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedLang.beginnerTopics.map(topic => {
                    const isDone = user.completedLessonIds.includes(topic.id);
                    return (
                      <div
                        key={topic.id}
                        onClick={() => handleOpenLesson(topic, selectedLang.name)}
                        className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all flex flex-col justify-between space-y-3 group hover:shadow-xl hover:shadow-cyan-500/10"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                              Beginner Core
                            </span>
                            <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{topic.durationMinutes} mins</span>
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {topic.title}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                            {topic.summary}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                          {isDone ? (
                            <span className="text-emerald-400 font-bold flex items-center space-x-1">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Completed</span>
                            </span>
                          ) : (
                            <span className="text-cyan-400 font-semibold group-hover:underline flex items-center space-x-1">
                              <span>Learn Concept</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                          <span className="text-[11px] text-slate-500">Includes Interactive Sandbox & Quiz</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB CONTENT: INTERMEDIATE */}
              {activeLangTab === 'intermediate' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedLang.intermediateTopics.map(topic => {
                    const isDone = user.completedLessonIds.includes(topic.id);
                    return (
                      <div
                        key={topic.id}
                        onClick={() => handleOpenLesson(topic, selectedLang.name)}
                        className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all flex flex-col justify-between space-y-3 group hover:shadow-xl hover:shadow-cyan-500/10"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                              Intermediate OOP & Structure
                            </span>
                            <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{topic.durationMinutes} mins</span>
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {topic.title}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                            {topic.summary}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                          {isDone ? (
                            <span className="text-emerald-400 font-bold flex items-center space-x-1">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Completed</span>
                            </span>
                          ) : (
                            <span className="text-cyan-400 font-semibold group-hover:underline flex items-center space-x-1">
                              <span>Learn Concept</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                          <span className="text-[11px] text-slate-500">Includes Interactive Sandbox & Quiz</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB CONTENT: ADVANCED */}
              {activeLangTab === 'advanced' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedLang.advancedTopics.map(topic => {
                    const isDone = user.completedLessonIds.includes(topic.id);
                    return (
                      <div
                        key={topic.id}
                        onClick={() => handleOpenLesson(topic, selectedLang.name)}
                        className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all flex flex-col justify-between space-y-3 group hover:shadow-xl hover:shadow-cyan-500/10"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                              Advanced Architecture & Concurrency
                            </span>
                            <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{topic.durationMinutes} mins</span>
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {topic.title}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                            {topic.summary}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                          {isDone ? (
                            <span className="text-emerald-400 font-bold flex items-center space-x-1">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Completed</span>
                            </span>
                          ) : (
                            <span className="text-cyan-400 font-semibold group-hover:underline flex items-center space-x-1">
                              <span>Learn Concept</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                          <span className="text-[11px] text-slate-500">Includes Interactive Sandbox & Quiz</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB CONTENT: 10 PRACTICAL PROJECTS */}
              {activeLangTab === 'projects' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200">
                    💡 <strong>Hands-on Capstones:</strong> Every major programming course includes 10 structured projects from simple CLI calculators to distributed microservices. Complete each to build an impressive GitHub portfolio.
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedLang.projects.map(proj => (
                      <div
                        key={proj.id}
                        onClick={() => setActiveProjectModal(proj)}
                        className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all flex flex-col justify-between space-y-3 group"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-cyan-400">
                              Project #{proj.number}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              proj.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                              proj.difficulty === 'Intermediate' ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20' :
                              'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}>
                              {proj.difficulty}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {proj.skillsLearned.map((s, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                          <span className="text-cyan-400 font-semibold group-hover:underline flex items-center space-x-1">
                            <span>Open Project Workspace</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-[11px] text-slate-500">Starter code & specs</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION B: WEB DEVELOPMENT LEARNING PATHS                                */}
      {/* ========================================================================= */}
      {(selectedCategory === 'WEB DEVELOPMENT' || selectedCategory === 'All') && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Web Development Learning Paths</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                HTML, CSS, JavaScript, TypeScript, React 19, Next.js, Node.js, Express, REST APIs, Frontend & Full Stack.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webDevelopmentPaths.map(path => (
              <div
                key={path.id}
                className="rounded-3xl cosmic-card p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {path.topicsCount} Topics • {path.estimatedHours} hrs
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{path.projects.length} Projects</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{path.title}</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{path.description}</p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Featured Lessons:</span>
                    {path.topics.map(t => (
                      <div
                        key={t.id}
                        onClick={() => handleOpenLesson(t, path.title)}
                        className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group"
                      >
                        <span className="line-clamp-1">{t.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenLesson(path.topics[0], path.title)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 hover:opacity-95 shadow-md shadow-cyan-500/20"
                  >
                    <span>Start Learning Path</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION C: DATA & DATA ANALYTICS LEARNING PATHS                           */}
      {/* ========================================================================= */}
      {(selectedCategory === 'DATA' || selectedCategory === 'DATABASES' || selectedCategory === 'All') && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
                <Database className="w-5 h-5 text-cyan-400" />
                <span>Data Analytics & Database Mastery</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Excel, Enterprise SQL, Python for Data Analysis, Pandas, NumPy, Statistics, Power BI, and Tableau.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataAnalyticsPaths.map(path => (
              <div
                key={path.id}
                className="rounded-3xl cosmic-card p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">
                      {path.topicsCount} Topics • {path.estimatedHours} hrs
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{path.projects.length} Datasets & Projects</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{path.title}</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{path.description}</p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Featured Lessons:</span>
                    {path.topics.map(t => (
                      <div
                        key={t.id}
                        onClick={() => handleOpenLesson(t, path.title)}
                        className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group"
                      >
                        <span className="line-clamp-1">{t.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenLesson(path.topics[0], path.title)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 hover:opacity-95 shadow-md shadow-violet-600/20"
                  >
                    <span>Start Data Path</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION D: COMPUTER SCIENCE FOUNDATIONS                                   */}
      {/* ========================================================================= */}
      {(selectedCategory === 'COMPUTER SCIENCE' || selectedCategory === 'All') && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Computer Science & Systems Foundations</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Data Structures, Algorithms, OOP, DBMS, Operating Systems, Computer Networks, and Architecture.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {computerSciencePaths.map(path => (
              <div
                key={path.id}
                className="rounded-3xl cosmic-card p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {path.topicsCount} Topics • {path.estimatedHours} hrs
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{path.projects.length} System Labs</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{path.title}</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{path.description}</p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Featured Lessons:</span>
                    {path.topics.map(t => (
                      <div
                        key={t.id}
                        onClick={() => handleOpenLesson(t, path.title)}
                        className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group"
                      >
                        <span className="line-clamp-1">{t.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenLesson(path.topics[0], path.title)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 hover:opacity-95 shadow-md shadow-amber-500/20"
                  >
                    <span>Explore Systems & Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION E: FULL-FEATURED COURSES CATALOG (Standard Courses)               */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Certified Course Programs ({filteredCourses.length} Programs)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Enrolled courses unlock the 30-question final mock test, AI Tutor assistance, and cryptographic certificate issuance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => {
            const isEnrolled = user.enrolledCourseIds.includes(course.id);
            const isCompleted = user.completedCourseIds.includes(course.id);
            const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

            return (
              <div
                key={course.id}
                className="group rounded-2xl cosmic-card border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/90 text-cyan-300 border border-cyan-500/30">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700">
                      {course.level}
                    </span>
                  </div>
                  {isCompleted && (
                    <div className="absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-[10px]">
                      <CheckCircle className="w-3 h-3" />
                      <span>Certified</span>
                    </div>
                  )}
                </div>

                {/* Course Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {course.tagline}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 text-center text-[11px] text-slate-400">
                    <div>
                      <span className="block font-bold text-white">{course.modulesCount}</span>
                      <span>Modules</span>
                    </div>
                    <div>
                      <span className="block font-bold text-white">{totalLessons}</span>
                      <span>Lessons</span>
                    </div>
                    <div>
                      <span className="block font-bold text-white">{course.durationHours}h</span>
                      <span>Total Time</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    {isEnrolled ? (
                      <button
                        onClick={() => {
                          setSelectedCourseId(course.id);
                          setActiveView('course-player');
                        }}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 hover:opacity-95 shadow-lg shadow-cyan-500/20"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Continue Course Player</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          enrollInCourse(course.id);
                          setSelectedCourseId(course.id);
                          setActiveView('course-player');
                        }}
                        className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center space-x-2 border border-slate-700 transition-colors"
                      >
                        <span>Enroll & Start Free</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. DEDICATED CONCEPT TEACHING VIEW                                         */}
      {/* ========================================================================= */}
      {activeLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-[#0c1220] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto max-h-[92vh] overflow-y-auto">
            <ConceptTeachingView
              concept={buildConceptDetailData(activeLessonModal, activeLessonParentName)}
              isCompleted={user.completedLessonIds.includes(activeLessonModal.id)}
              onBack={() => setActiveLessonModal(null)}
              onComplete={() => {
                completeLesson('course-lang-' + selectedLang.slug, activeLessonModal.id);
                confetti({ particleCount: 60, spread: 70, origin: { y: 0.8 } });
              }}
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. PRACTICAL PROJECT GUIDANCE TEACHING VIEW                                */}
      {/* ========================================================================= */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-[#0c1220] border border-violet-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto max-h-[92vh] overflow-y-auto">
            <ProjectTeachingView
              project={{
                id: activeProjectModal.id,
                title: activeProjectModal.title,
                difficulty: activeProjectModal.difficulty,
                estimatedHours: 15,
                overview: activeProjectModal.description,
                architecture: `Dataset Telemetry ──> Data Ingestion & Cleaning (${selectedLang.name}) ──> Indexed Relational Storage ──> Analytical KPI Engine ──> Interactive Visual Interface`,
                requirements: activeProjectModal.skillsLearned.map(s => `Implement robust, production-ready modules utilizing ${s}`),
                techStack: [selectedLang.name, 'Git', 'Terminal', 'Unit Testing Framework', 'Docker'],
                starterCode: activeProjectModal.starterCode,
                deliverables: [activeProjectModal.deliverables, 'Production README with Architecture Diagram', 'Passing Automated Test Suite']
              }}
              careerRole={selectedLang.name}
              isCompleted={false}
              onBack={() => setActiveProjectModal(null)}
              onCompleteProject={() => {
                setActiveProjectModal(null);
                confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
