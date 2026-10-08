import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { MockTest, Certificate } from '../../types';
import {
  PROGRAMMING_CERT_LANGUAGES,
  generate30QuestionCertificationTest,
  CertificationQuestion
} from '../../data/programmingCertificationsData';
import { CertificateModal } from '../common/CertificateModal';
import {
  FileCheck,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Award,
  Terminal,
  ChevronRight,
  ShieldCheck,
  Check,
  AlertTriangle,
  Zap,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MockTestsView: React.FC = () => {
  const { mockTests, addXP, awardCertificate, user } = useApp();

  // Mode: standard catalog test vs programming language 30-question certification test
  const [activeTab, setActiveTab] = useState<'programming' | 'general'>('programming');
  const [selectedLanguageSlug, setSelectedLanguageSlug] = useState<string>('python');
  const [selectedLevel, setSelectedLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');

  // General catalog test selection
  const [selectedGeneralTestId, setSelectedGeneralTestId] = useState<string>(mockTests[0].id);

  // Active testing state
  const [testActive, setTestActive] = useState<boolean>(false);
  const [isProgrammingCert, setIsProgrammingCert] = useState<boolean>(true);
  const [active30Questions, setActive30Questions] = useState<CertificationQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [scorePercent, setScorePercent] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(1800); // 30 minutes in seconds

  // Certificate Modal State
  const [earnedCert, setEarnedCert] = useState<Certificate | null>(null);

  const selectedLangConfig =
    PROGRAMMING_CERT_LANGUAGES.find(l => l.slug === selectedLanguageSlug) ||
    PROGRAMMING_CERT_LANGUAGES[0];

  const currentGeneralTest =
    mockTests.find(t => t.id === selectedGeneralTestId) || mockTests[0];

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (testActive && !testSubmitted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && testActive && !testSubmitted) {
      handleSubmitCurrentTest();
    }
    return () => clearInterval(interval);
  }, [testActive, testSubmitted, timeLeft]);

  // Start 30-Question Programming Certification Test
  const handleStartProgrammingCert = (slug: string, level: 'Beginner' | 'Intermediate' | 'Advanced') => {
    setSelectedLanguageSlug(slug);
    setSelectedLevel(level);
    setIsProgrammingCert(true);
    const questions = generate30QuestionCertificationTest(slug, level);
    setActive30Questions(questions);
    setCurrentQIndex(0);
    setUserAnswers({});
    setTestSubmitted(false);
    setCorrectCount(0);
    setScorePercent(0);
    setTimeLeft(1800); // 30 minutes
    setTestActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start General Catalog Mock Test
  const handleStartGeneralTest = (testId: string) => {
    setSelectedGeneralTestId(testId);
    setIsProgrammingCert(false);
    setCurrentQIndex(0);
    setUserAnswers({});
    setTestSubmitted(false);
    setCorrectCount(0);
    setScorePercent(0);
    setTimeLeft((currentGeneralTest.durationMinutes || 30) * 60);
    setTestActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submit and evaluate
  const handleSubmitCurrentTest = () => {
    if (isProgrammingCert) {
      let correct = 0;
      active30Questions.forEach(q => {
        if (userAnswers[q.id] === q.correctIndex) {
          correct++;
        }
      });
      const pct = Math.round((correct / active30Questions.length) * 100);
      setCorrectCount(correct);
      setScorePercent(pct);
      setTestSubmitted(true);

      // Passing requirement: minimum 15/30 (>= 50%)
      const isPassed = correct >= 15;

      if (isPassed) {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
        addXP(200);

        // Issue official certificate
        const cert = awardCertificate(
          `${selectedLangConfig.name} (${selectedLevel}) Programming Certification`,
          `course-${selectedLangConfig.slug}`,
          pct,
          selectedLangConfig.topicsCovered
        );
        setEarnedCert(cert);
      } else {
        addXP(50);
      }
    } else {
      let correct = 0;
      currentGeneralTest.questions.forEach(q => {
        if (userAnswers[q.id] === q.correctIndex) {
          correct++;
        }
      });
      const pct = Math.round((correct / currentGeneralTest.questions.length) * 100);
      setCorrectCount(correct);
      setScorePercent(pct);
      setTestSubmitted(true);

      if (pct >= currentGeneralTest.passingScore) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        addXP(150);
      } else {
        addXP(50);
      }
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const totalQuestions = isProgrammingCert
    ? active30Questions.length
    : currentGeneralTest.questions.length;

  const currentQ = isProgrammingCert
    ? active30Questions[currentQIndex]
    : currentGeneralTest.questions[currentQIndex];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Build Yourself Verified Technical Certification</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Programming Language Certification Exams
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Already know Python, Java, JavaScript, or C++? Take a direct 30-question benchmark certification exam. Score 15/30 or higher (≥50%) to earn an officially verifiable credential for your resume and portfolio.
          </p>
        </div>
      </div>

      {/* 2. Test Selection / Catalog (when test not running) */}
      {!testActive ? (
        <div className="space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <button
              onClick={() => setActiveTab('programming')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'programming'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Direct Programming Certification (17 Languages • 30 Questions)</span>
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'general'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>General Screening Tests</span>
            </button>
          </div>

          {/* TAB A: PROGRAMMING CERTIFICATION TESTS */}
          {activeTab === 'programming' && (
            <div className="space-y-6">
              {/* Level Selector Bar */}
              <div className="p-4 rounded-2xl cosmic-card border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Select Certification Difficulty Level:
                  </span>
                  <p className="text-xs text-slate-400">
                    All tests feature 30 randomized questions. Minimum passing score is 15/30.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {(['Beginner', 'Intermediate', 'Advanced'] as const).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedLevel === lvl
                          ? 'bg-amber-500 text-slate-950 shadow-sm'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Languages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROGRAMMING_CERT_LANGUAGES.map(lang => (
                  <div
                    key={lang.id}
                    className="rounded-3xl cosmic-card p-6 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{lang.icon}</span>
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          30 Questions • 30 Mins
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {lang.name} Certification
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {lang.tagline}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                          Core Topics Tested:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {lang.topicsCovered.slice(0, 4).map((t, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono">
                              {t}
                            </span>
                          ))}
                          {lang.topicsCovered.length > 4 && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-500 border border-slate-800 font-mono">
                              +{lang.topicsCovered.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleStartProgrammingCert(lang.slug, selectedLevel)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-amber-500/20"
                      >
                        <span>Already Know {lang.name}? Take 30Q Exam</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB B: GENERAL CATALOG SCREENING TESTS */}
          {activeTab === 'general' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTests.map(test => (
                <div
                  key={test.id}
                  className="rounded-3xl cosmic-card p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                        {test.category}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {test.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white line-clamp-1">{test.title}</h3>

                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{test.durationMinutes} Mins</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{test.totalQuestions} Questions</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Award className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Pass: {test.passingScore}%</span>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartGeneralTest(test.id)}
                    className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>Start Screening Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : !testSubmitted ? (
        /* 3. ACTIVE TEST ENVIRONMENT */
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Test Header with Live Timer and Progress */}
          <div className="flex items-center justify-between p-4 rounded-2xl cosmic-card border border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase font-bold">
                  {isProgrammingCert ? `${selectedLangConfig.name} (${selectedLevel})` : currentGeneralTest.title}
                </span>
                <span className="text-xs text-slate-400">Passing: 15/30 (≥50%)</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Question {currentQIndex + 1} of {totalQuestions}
              </h2>
            </div>

            <div className="flex items-center space-x-3">
              <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border ${
                timeLeft < 300
                  ? 'bg-rose-950/40 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-slate-900 border-slate-800 text-amber-300'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <button
                onClick={handleSubmitCurrentTest}
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-xs font-bold hover:brightness-110 transition-all shadow-md shadow-amber-500/20"
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* Quick Question Matrix Navigation Grid */}
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Question Quick Jumper:</span>
              <span>Answered: {Object.keys(userAnswers).length} / {totalQuestions}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: totalQuestions }).map((_, idx) => {
                const qItem = isProgrammingCert ? active30Questions[idx] : currentGeneralTest.questions[idx];
                const isAnswered = qItem && userAnswers[qItem.id] !== undefined;
                const isCurrent = idx === currentQIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950 scale-110 shadow-sm'
                        : isAnswered
                        ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Card */}
          <div className="p-6 sm:p-8 rounded-3xl cosmic-card border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
                Topic: {(currentQ as any).topic || 'Core Engineering'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

            {/* Code Snippet if applicable */}
            {currentQ.codeSnippet && (
              <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
                {currentQ.codeSnippet}
              </pre>
            )}

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                return (
                  <div
                    key={optIdx}
                    onClick={() => setUserAnswers(prev => ({ ...prev, [currentQ.id]: optIdx }))}
                    className={`p-4 rounded-2xl border text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-md shadow-amber-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQIndex === 0}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold disabled:opacity-40"
              >
                Previous
              </button>

              {currentQIndex + 1 < totalQuestions ? (
                <button
                  onClick={() => setCurrentQIndex(prev => prev + 1)}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                >
                  Next Question →
                </button>
              ) : (
                <button
                  onClick={handleSubmitCurrentTest}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20"
                >
                  Submit & Score Exam
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* 4. RESULTS & CERTIFICATE SCORECARD */
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="rounded-3xl cosmic-card p-8 border border-slate-800 text-center space-y-4 shadow-2xl relative overflow-hidden">
            <div
              className={`w-20 h-20 rounded-full mx-auto flex flex-col items-center justify-center font-bold border ${
                correctCount >= (isProgrammingCert ? 15 : 15)
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                  : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
              }`}
            >
              <span className="text-2xl">{correctCount}/{totalQuestions}</span>
              <span className="text-[10px] font-mono">({scorePercent}%)</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {correctCount >= 15
                  ? `Certification Exam Passed! Congratulations ${user.name.split(' ')[0]} 🎓`
                  : 'Certification Attempt Incomplete'}
              </h2>
              <p className="text-xs text-slate-400">
                Minimum passing requirement: <strong>15 / {totalQuestions} (≥50%)</strong> • You achieved <strong>{correctCount} / {totalQuestions}</strong>.
              </p>
            </div>

            {correctCount >= 15 ? (
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-200 max-w-lg mx-auto space-y-2">
                <span className="font-bold flex items-center justify-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Official Certificate Issued!</span>
                </span>
                <p>
                  Your performance has been verified and permanently registered to your Build Yourself credentials.
                </p>
                {earnedCert && (
                  <button
                    onClick={() => setEarnedCert(earnedCert)}
                    className="mt-2 px-4 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20"
                  >
                    View Official Certificate & Verification Hash
                  </button>
                )}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-xs text-rose-200 max-w-lg mx-auto space-y-1 text-left">
                <span className="font-bold block text-rose-300">Targeted Learning Recommendation:</span>
                <p>
                  Review weak conceptual areas including data types, syntax edge-cases, and debugging patterns in the Learn tab before re-attempting.
                </p>
              </div>
            )}

            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={() => {
                  if (isProgrammingCert) {
                    handleStartProgrammingCert(selectedLanguageSlug, selectedLevel);
                  } else {
                    handleStartGeneralTest(selectedGeneralTestId);
                  }
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold flex items-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Exam</span>
              </button>

              <button
                onClick={() => setTestActive(false)}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center space-x-1.5"
              >
                <span>Return to Certifications Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Solutions & Explanations Review */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Question-by-Question Solution Analysis ({totalQuestions} Questions)
            </h3>
            {(isProgrammingCert ? active30Questions : currentGeneralTest.questions).map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;
              return (
                <div key={q.id} className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xs font-bold text-white">
                      {idx + 1}. {q.question}
                    </h4>
                    {isCorrect ? (
                      <span className="flex items-center space-x-1 text-emerald-400 text-xs font-bold shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Correct</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1 text-rose-400 text-xs font-bold shrink-0">
                        <XCircle className="w-4 h-4" />
                        <span>Incorrect</span>
                      </span>
                    )}
                  </div>

                  {q.codeSnippet && (
                    <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                      {q.codeSnippet}
                    </pre>
                  )}

                  <div className="space-y-1 text-xs">
                    <p className="text-slate-400">
                      Your answer: <span className="font-semibold text-white">{q.options[userAns] || 'Not answered'}</span>
                    </p>
                    <p className="text-emerald-400">
                      Correct answer: <span className="font-semibold">{q.options[q.correctIndex]}</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    <strong className="text-cyan-300">Explanation:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {earnedCert && (
        <CertificateModal
          certificate={earnedCert}
          onClose={() => setEarnedCert(null)}
        />
      )}
    </div>
  );
};
