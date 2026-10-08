import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lesson, CourseModule, QuizQuestion } from '../../types';
import { aiService } from '../../services/aiService';
import { CertificateModal } from '../common/CertificateModal';
import { ConceptTeachingView } from './ConceptTeachingView';
import { buildConceptDetailData } from '../../data/conceptTeachingRegistry';
import { ContinueLearningSection } from '../resources/ContinueLearningSection';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Circle,
  Play,
  Code2,
  HelpCircle,
  Sparkles,
  Bot,
  Send,
  Award,
  Terminal,
  RefreshCw,
  Lightbulb,
  Check,
  X,
  ChevronRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export const CoursePlayer: React.FC = () => {
  const {
    courses,
    selectedCourseId,
    setActiveView,
    user,
    completeLesson,
    awardCertificate
  } = useApp();

  const course = courses.find(c => c.id === selectedCourseId) || courses[0];
  const allLessons = course.modules.flatMap(m => m.lessons);

  const [currentLessonId, setCurrentLessonId] = useState<string>(allLessons[0]?.id || '');
  const currentLesson = allLessons.find(l => l.id === currentLessonId) || allLessons[0];

  // Interactive Code Playground State
  const [codeEditorText, setCodeEditorText] = useState<string>(
    currentLesson?.exercise?.starterCode || currentLesson?.codeSnippet || `# Practice code for ${currentLesson?.title}\nprint("Build Yourself Sandbox Ready")`
  );
  const [codeOutput, setCodeOutput] = useState<string | null>(null);
  const [isRunningCode, setIsRunningCode] = useState<boolean>(false);

  // AI Tutor State
  const [aiTutorOpen, setAiTutorOpen] = useState<boolean>(false);
  const [beginnerMode, setBeginnerMode] = useState<boolean>(true);
  const [tutorQuery, setTutorQuery] = useState<string>('');
  const [tutorMessages, setTutorMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    {
      sender: 'ai',
      text: `Hello ${user.name.split(' ')[0]}! I'm your AI Tutor for ${course.title}. Ask me anything, or toggle "Explain like I'm a beginner" for ultra-simple analogies.`
    }
  ]);
  const [tutorLoading, setTutorLoading] = useState<boolean>(false);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Lesson View Mode: Standard vs 23-Part Concept Teaching Page
  const [viewMode, setViewMode] = useState<'standard' | 'concept_deep_dive'>('standard');

  // Final Assessment / Certificate Modal
  const [finalAssessmentOpen, setFinalAssessmentOpen] = useState<boolean>(false);
  const [finalAnswers, setFinalAnswers] = useState<Record<string, number>>({});
  const [finalResultScore, setFinalResultScore] = useState<number | null>(null);
  const [earnedCert, setEarnedCert] = useState<any | null>(null);

  const isCurrentLessonCompleted = user.completedLessonIds.includes(currentLesson.id);

  // Run code simulation
  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput('Executing sandbox container...');
    setTimeout(() => {
      setIsRunningCode(false);
      if (course.category === 'Data' || currentLesson.language === 'sql') {
        setCodeOutput(`[SQL Result Set: 3 rows returned in 12ms]\nstudent_id | full_name | progress_pct\n-----------+-----------+-------------\n   101     | Jakeer P  |     96%\n   102     | Sarah M   |     88%\n   103     | Alex Chen |     92%\n\nStatus: Query executed successfully with 0 warnings.`);
      } else {
        setCodeOutput(`>>> Running Python 3.12 interpreter...\n>>> Program output:\nStudent Profile: JAKEER: 2H/DAY -> DATA ANALYST\nCalculated weighted competency: 94.5%\n\n[Process completed with exit code 0]`);
      }
    }, 700);
  };

  // AI Tutor Query
  const handleAskTutor = async (customPrompt?: string) => {
    const q = customPrompt || tutorQuery;
    if (!q.trim()) return;

    setTutorMessages(prev => [...prev, { sender: 'user', text: q }]);
    if (!customPrompt) setTutorQuery('');
    setTutorLoading(true);

    const reply = await aiService.askTutor(q, {
      courseTitle: course.title,
      currentLesson: currentLesson.title,
      beginnerMode
    });

    setTutorMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    setTutorLoading(false);
  };

  // Mark lesson as complete
  const handleCompleteCurrentLesson = () => {
    completeLesson(course.id, currentLesson.id);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  // Submit Final Assessment
  const handleSubmitFinalExam = () => {
    const questions = course.finalMockTest || [];
    let correct = 0;
    questions.forEach((q, idx) => {
      if (finalAnswers[q.id] === q.correctAnswerIndex) {
        correct++;
      }
    });

    const grade = Math.round((correct / (questions.length || 1)) * 100);
    setFinalResultScore(grade);

    if (grade >= course.passingScorePercent) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
      const cert = awardCertificate(
        course.title,
        course.id,
        grade,
        course.learningOutcomes.slice(0, 4)
      );
      setEarnedCert(cert);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setActiveView('courses')}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
            title="Back to Courses Catalog"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {course.category}
              </span>
              <span className="text-xs text-slate-400">• {course.level}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white line-clamp-1">{course.title}</h1>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* AI Tutor Toggle */}
          <button
            onClick={() => setAiTutorOpen(!aiTutorOpen)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              aiTutorOpen
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-cyan-300 border-cyan-500/40 hover:bg-cyan-950/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Tutor</span>
          </button>

          {/* Final Certificate Exam Button */}
          <button
            onClick={() => setFinalAssessmentOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 hover:brightness-110 transition-all"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Final Certification Exam</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar: Modules & Lessons (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="rounded-2xl cosmic-card p-4 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Course Modules</span>
              <span className="text-[11px] font-mono text-cyan-400">
                {user.completedLessonIds.filter(id => allLessons.some(l => l.id === id)).length} / {allLessons.length}
              </span>
            </div>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
              {course.modules.map((mod, modIdx) => (
                <div key={mod.id} className="space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {mod.title}
                  </p>
                  <div className="space-y-1">
                    {mod.lessons.map(lesson => {
                      const isSelected = lesson.id === currentLesson.id;
                      const isDone = user.completedLessonIds.includes(lesson.id);
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setCurrentLessonId(lesson.id);
                            if (lesson.exercise?.starterCode || lesson.codeSnippet) {
                              setCodeEditorText(lesson.exercise?.starterCode || lesson.codeSnippet || '');
                            }
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                              : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center space-x-2 line-clamp-1 pr-1">
                            {isDone ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                            )}
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono flex-shrink-0">
                            {lesson.durationMinutes}m
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Lesson Content & Code Sandbox (6 Cols, or 9 if AI closed) */}
        <div className={`${aiTutorOpen ? 'lg:col-span-6' : 'lg:col-span-9'} space-y-6`}>
          {viewMode === 'concept_deep_dive' ? (
            <div className="rounded-3xl cosmic-card p-6 border border-cyan-500/40">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  23-Part Concept Teaching Page • {currentLesson.title}
                </span>
                <button
                  onClick={() => setViewMode('standard')}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-800 transition-all"
                >
                  Switch to Compact Player ↺
                </button>
              </div>
              <ConceptTeachingView
                concept={buildConceptDetailData(currentLesson, course.title)}
                isCompleted={isCurrentLessonCompleted}
                onBack={() => setViewMode('standard')}
                onComplete={handleCompleteCurrentLesson}
                onOpenAiTutor={() => setAiTutorOpen(true)}
              />
            </div>
          ) : (
            <>
              {/* Concept Deep Dive Banner */}
              <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-2 text-cyan-200">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Learn this concept through our structured <strong>23-part learning curriculum</strong> (syntax, 3-tier examples, common pitfalls, practice & sandbox).</span>
                </div>
                <button
                  onClick={() => setViewMode('concept_deep_dive')}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 shadow-md shadow-cyan-500/20 transition-all flex items-center space-x-1"
                >
                  <span>Open 23-Part Concept Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Lesson Header Card */}
              <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">{currentLesson.type.toUpperCase()} LESSON</span>
                <h2 className="text-xl font-extrabold text-white">{currentLesson.title}</h2>
              </div>

              <button
                onClick={handleCompleteCurrentLesson}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isCurrentLessonCompleted
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isCurrentLessonCompleted ? 'Completed ✓ (+50 XP)' : 'Mark Lesson Complete'}</span>
              </button>
            </div>

            {/* Lesson Body Content */}
            <div className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-cyan-300 font-semibold">Lesson Summary:</strong> {currentLesson.summary}
              </div>

              <div className="whitespace-pre-wrap font-sans space-y-3">
                {currentLesson.content}
              </div>
            </div>

            {/* Interactive Code Playground Sandbox */}
            <div className="mt-6 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-slate-200 font-mono">
                    Interactive {currentLesson.language || 'Python'} Sandbox
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      if (currentLesson.exercise?.starterCode) {
                        setCodeEditorText(currentLesson.exercise.starterCode);
                      }
                    }}
                    className="p-1 rounded text-slate-400 hover:text-white"
                    title="Reset Code"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleRunCode}
                    disabled={isRunningCode}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20"
                  >
                    <Play className="w-3 h-3 fill-slate-950" />
                    <span>{isRunningCode ? 'Running...' : 'Execute'}</span>
                  </button>
                </div>
              </div>

              {/* Code Textarea Editor */}
              <div className="relative">
                <textarea
                  value={codeEditorText}
                  onChange={e => setCodeEditorText(e.target.value)}
                  className="w-full h-48 bg-[#0b101c] p-4 font-mono text-xs text-cyan-200 focus:outline-none resize-none leading-relaxed selection:bg-cyan-500/30"
                  spellCheck={false}
                />
              </div>

              {/* Output Panel */}
              {codeOutput && (
                <div className="p-3 bg-slate-950 border-t border-slate-800 font-mono text-xs text-slate-300">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">Terminal Output</span>
                  <pre className="whitespace-pre-wrap text-emerald-400">{codeOutput}</pre>
                </div>
              )}
            </div>

            {/* In-Lesson Quiz Section */}
            {currentLesson.quiz && currentLesson.quiz.length > 0 && (
              <div className="mt-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <HelpCircle className="w-4 h-4" />
                  <h3 className="text-sm font-bold text-white">Lesson Comprehension Quiz</h3>
                </div>

                {currentLesson.quiz.map((q, qIdx) => (
                  <div key={q.id} className="space-y-2">
                    <p className="text-xs font-semibold text-slate-200">{q.question}</p>
                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = quizAnswers[q.id] === optIdx;
                        const isCorrect = optIdx === q.correctAnswerIndex;
                        return (
                          <div
                            key={optIdx}
                            onClick={() => {
                              if (!quizSubmitted) {
                                setQuizAnswers(prev => ({ ...prev, [q.id]: optIdx }));
                              }
                            }}
                            className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                              quizSubmitted
                                ? isCorrect
                                  ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300'
                                  : isSelected
                                  ? 'bg-rose-950/40 border-rose-500 text-rose-300'
                                  : 'bg-slate-950/40 border-slate-800 text-slate-500'
                                : isSelected
                                ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200'
                                : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300'
                            }`}
                          >
                            <span className="font-semibold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </div>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 mt-2">
                        <strong className="text-cyan-300">Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  onClick={() => setQuizSubmitted(true)}
                  className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Verify Answers
                </button>
              </div>
            )}

            {/* Supplementary YouTube Videos, Official Docs & AI Guidance */}
            <ContinueLearningSection
              technology={course.title.includes('Python') ? 'Python' : course.title.includes('Java') ? 'Java' : course.title.includes('SQL') ? 'SQL' : course.title.includes('React') ? 'React' : 'Python'}
              conceptTitle={currentLesson.title}
            />
          </div>
        </>
      )}
    </div>

        {/* Right Sidebar: AI Tutor Panel (3 Cols when Open) */}
        {aiTutorOpen && (
          <div className="lg:col-span-3 rounded-2xl cosmic-card p-4 border border-cyan-500/30 flex flex-col justify-between h-[80vh] shadow-2xl">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-300">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">Build Yourself AI Tutor</span>
                </div>
                <button
                  onClick={() => setAiTutorOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Beginner Mode Toggle */}
              <div className="my-3 flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="text-slate-300 font-medium">Explain like I'm a beginner</span>
                <input
                  type="checkbox"
                  checked={beginnerMode}
                  onChange={e => setBeginnerMode(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-cyan-500 h-4 w-4 bg-slate-950 border-slate-700"
                />
              </div>

              {/* Quick Prompt Chips */}
              <div className="flex flex-wrap gap-1.5 pb-2">
                <button
                  onClick={() => handleAskTutor("Explain this topic like I am a beginner with simple examples.")}
                  className="px-2 py-0.5 rounded-full bg-slate-900 hover:bg-cyan-950 text-cyan-300 border border-slate-800 text-[10px]"
                >
                  👶 Explain simply
                </button>
                <button
                  onClick={() => handleAskTutor("Generate 3 practice questions with answers for this topic.")}
                  className="px-2 py-0.5 rounded-full bg-slate-900 hover:bg-cyan-950 text-cyan-300 border border-slate-800 text-[10px]"
                >
                  📝 Generate Quiz
                </button>
                <button
                  onClick={() => handleAskTutor("What are the most common interview questions on this topic?")}
                  className="px-2 py-0.5 rounded-full bg-slate-900 hover:bg-cyan-950 text-cyan-300 border border-slate-800 text-[10px]"
                >
                  🎯 Interview Questions
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto space-y-3 p-1 text-xs">
              {tutorMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-cyan-950/40 text-cyan-100 border border-cyan-800/40 ml-4'
                      : 'bg-slate-900 text-slate-200 border border-slate-800 mr-4'
                  }`}
                >
                  <p className="font-bold text-[10px] text-slate-400 mb-1">
                    {msg.sender === 'user' ? user.name.split(' ')[0] : 'Build Yourself AI Tutor'}
                  </p>
                  <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                </div>
              ))}
              {tutorLoading && (
                <div className="p-3 rounded-2xl bg-slate-900 text-cyan-300 border border-slate-800 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span className="text-xs">Thinking & formulating step-by-step guidance...</span>
                </div>
              )}
            </div>

            {/* Input Box */}
            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center space-x-2 bg-slate-900 rounded-xl p-1.5 border border-slate-800 focus-within:border-cyan-500/50">
                <input
                  type="text"
                  value={tutorQuery}
                  onChange={e => setTutorQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAskTutor()}
                  placeholder="Ask any question about this lesson..."
                  className="flex-1 bg-transparent px-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  onClick={() => handleAskTutor()}
                  disabled={tutorLoading}
                  className="p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Final Certification Exam Modal */}
      {finalAssessmentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-base font-bold text-white">Course Certification Assessment</h3>
                  <p className="text-xs text-slate-400">{course.title} • Passing Score: {course.passingScorePercent}%</p>
                </div>
              </div>
              <button
                onClick={() => setFinalAssessmentOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {finalResultScore === null ? (
              <div className="space-y-6">
                <p className="text-xs text-slate-300">
                  Answer the final evaluation questions below. Meeting the {course.passingScorePercent}% threshold will issue your verified, unique certificate with online QR validation.
                </p>

                {(course.finalMockTest || []).map((q, idx) => (
                  <div key={q.id} className="space-y-2">
                    <p className="text-xs font-bold text-slate-200">
                      Question {idx + 1}: {q.question}
                    </p>
                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          onClick={() => setFinalAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                          className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                            finalAnswers[q.id] === optIdx
                              ? 'bg-amber-950/40 border-amber-500 text-amber-200'
                              : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                          }`}
                        >
                          <span className="font-semibold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={handleSubmitFinalExam}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
                >
                  Submit Assessment & Verify Eligibility
                </button>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div
                  className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
                    finalResultScore >= course.passingScorePercent
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}
                >
                  {finalResultScore >= course.passingScorePercent ? (
                    <Award className="w-8 h-8" />
                  ) : (
                    <X className="w-8 h-8" />
                  )}
                </div>

                <h4 className="text-xl font-extrabold text-white">
                  Score: {finalResultScore}%
                </h4>

                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  {finalResultScore >= course.passingScorePercent
                    ? `Congratulations! You have satisfied the ${course.passingScorePercent}% threshold. Your official Build Yourself Certificate has been minted and registered.`
                    : `You scored ${finalResultScore}%, which is below the required ${course.passingScorePercent}% passing score. Review the course lessons and try again.`}
                </p>

                {earnedCert && (
                  <button
                    onClick={() => {
                      setFinalAssessmentOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs"
                  >
                    View & Download Certificate
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Render Certificate Modal if earned */}
      {earnedCert && (
        <CertificateModal
          certificate={earnedCert}
          onClose={() => setEarnedCert(null)}
          onVerifyClick={() => setActiveView('verify-certificate')}
        />
      )}
    </div>
  );
};
