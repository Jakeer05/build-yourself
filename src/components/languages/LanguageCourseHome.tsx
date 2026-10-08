import React, { useState } from 'react';
import {
  Globe2,
  ArrowLeft,
  Volume2,
  Sparkles,
  BookOpen,
  Award,
  Layers,
  CheckCircle2,
  Check,
  Lock,
  ChevronRight,
  Flame,
  Star,
  Play,
  MessageSquare,
  ShieldCheck,
  RotateCw
} from 'lucide-react';
import {
  LanguageCourse,
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageLesson,
  LanguageUserProgress,
  Certificate
} from '../../types';
import { LanguageAssessmentModal } from './LanguageAssessmentModal';
import { LanguageFlashcardModal } from './LanguageFlashcardModal';
import { LanguageAlphabetModal } from './LanguageAlphabetModal';

interface LanguageCourseHomeProps {
  course: LanguageCourse;
  progress: LanguageUserProgress;
  userName: string;
  onBackToAllLanguages: () => void;
  onSelectLesson: (lesson: LanguageLesson, module: LanguageModule, levelData: LanguageLevelData) => void;
  onOpenAiTutor: () => void;
  onAwardCertificate: (cert: Certificate) => void;
  speakText: (text: string, langCode?: string) => void;
  addXP: (amount: number) => void;
}

export const LanguageCourseHome: React.FC<LanguageCourseHomeProps> = ({
  course,
  progress,
  userName,
  onBackToAllLanguages,
  onSelectLesson,
  onOpenAiTutor,
  onAwardCertificate,
  speakText,
  addXP
}) => {
  // Current active level selection (default to progress.activeLevel or 'A1')
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(
    progress.activeLevel || 'A1'
  );

  // Expanded module id
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  // Modals state
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [isFlashcardOpen, setIsFlashcardOpen] = useState<boolean>(false);
  const [isAlphabetOpen, setIsAlphabetOpen] = useState<boolean>(false);

  // Level data for selected level
  const currentLevelData: LanguageLevelData | undefined =
    course.levelData?.[selectedLevel];

  // Modules for this level
  const modules = currentLevelData?.modules || [];

  // Compute stats
  const totalLessonsInLevel = modules.reduce((sum, m) => sum + (m.lessons?.length || 0), 0);
  const completedLessonsInLevel = modules.reduce((sum, m) => {
    return (
      sum +
      (m.lessons || []).filter(l => (progress.completedLessonIds || []).includes(l.id)).length
    );
  }, 0);

  const levelProgressPercent =
    totalLessonsInLevel > 0
      ? Math.round((completedLessonsInLevel / totalLessonsInLevel) * 100)
      : 0;

  const completedModulesCount = modules.filter(m =>
    (m.lessons || []).length > 0 &&
    (m.lessons || []).every(l => (progress.completedLessonIds || []).includes(l.id))
  ).length;

  const allWordsInLevel = modules.flatMap(m => (m.lessons || []).flatMap(l => l.vocabulary || []));

  // Determine skill badges based on level
  const skillProficiencyMap: Record<CEFRLevel, { speaking: string; listening: string; reading: string; writing: string }> = {
    A1: { speaking: 'Beginner (A1)', listening: 'Beginner (A1)', reading: 'A1 Foundations', writing: 'A1 Elementary' },
    A2: { speaking: 'Elementary (A2)', listening: 'Elementary (A2)', reading: 'A2 Routine', writing: 'A2 Descriptive' },
    B1: { speaking: 'Intermediate (B1)', listening: 'Intermediate (B1)', reading: 'B1 Independent', writing: 'B1 Connected' },
    B2: { speaking: 'Upper-Intermediate (B2)', listening: 'Upper-Intermediate (B2)', reading: 'B2 Professional', writing: 'B2 Academic' },
    C1: [ { speaking: 'Advanced (C1)', listening: 'Advanced (C1)', reading: 'C1 Fluent', writing: 'C1 Publication' } ][0],
    C2: [ { speaking: 'Native Mastery (C2)', listening: 'Native Mastery (C2)', reading: 'C2 Literary', writing: 'C2 Native' } ][0]
  };

  const proficiencies = skillProficiencyMap[selectedLevel] || skillProficiencyMap.A1;

  const assessmentPassedRecord = progress.levelAssessments?.[selectedLevel];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Navigation & Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToAllLanguages}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All 14 Languages</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>{progress?.dailyStreak ?? 1} Day Streak</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center space-x-3">
                <span className="text-4xl sm:text-5xl">{course.flag}</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {course.name}
                    </h1>
                    <span className="text-base sm:text-xl font-serif text-slate-400">
                      ({course.nativeName})
                    </span>
                    <button
                      onClick={() =>
                        speakText(course.nativeName, course.speechCode)
                      }
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/30 transition-all"
                      title="Listen to native speech"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                    {course.description}
                  </p>
                </div>
              </div>

              {course.writingSystem && (
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono">
                  <span className="text-emerald-400 font-bold">Writing System:</span>
                  <span>{course.writingSystem}</span>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap sm:flex-col gap-2.5">
              <button
                onClick={() => setIsAlphabetOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 hover:border-emerald-500 text-xs font-bold text-emerald-300 flex items-center space-x-2 transition-all shadow-md"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Alphabet & Phonetics</span>
              </button>

              <button
                onClick={() => setIsFlashcardOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 text-xs font-bold text-white flex items-center space-x-2 transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Flashcard Vault ({allWordsInLevel.length})</span>
              </button>

              <button
                onClick={onOpenAiTutor}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>AI Language Tutor</span>
              </button>

              <button
                onClick={() => setIsAssessmentOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/60 text-amber-300 text-xs font-bold flex items-center space-x-2 transition-all"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>CEFR {selectedLevel} Exam</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Level Proficiency Dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400">Current Level</span>
          <p className="text-xl font-extrabold text-white font-mono">{selectedLevel}</p>
          <span className="text-[10px] text-emerald-400 font-semibold">CEFR Standard</span>
        </div>

        <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400">Level Progress</span>
          <p className="text-xl font-extrabold text-emerald-400 font-mono">
            {levelProgressPercent}%
          </p>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-emerald-500"
              style={{ width: `${levelProgressPercent}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400">Modules Completed</span>
          <p className="text-xl font-extrabold text-white font-mono">
            {completedModulesCount} / {modules.length}
          </p>
          <span className="text-[10px] text-slate-400">
            {completedLessonsInLevel}/{totalLessonsInLevel} Lessons
          </span>
        </div>

        <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400">Vocabulary Mastered</span>
          <p className="text-xl font-extrabold text-amber-400 font-mono">
            {(progress?.wordsLearnedIds?.length || 0) + completedLessonsInLevel * 8}
          </p>
          <span className="text-[10px] text-slate-400">Goal: {currentLevelData?.targetVocabCount || 600}</span>
        </div>

        <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400">Grammar Mastery</span>
          <p className="text-xl font-extrabold text-white font-mono">
            {Math.min(
              completedModulesCount * 2,
              currentLevelData?.grammarTopicsCount || 16
            )}{' '}
            / {currentLevelData?.grammarTopicsCount || 16}
          </p>
          <span className="text-[10px] text-emerald-400">Structured Topics</span>
        </div>

        <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-400">CEFR Certification</span>
          <p
            className={`text-sm font-bold font-mono mt-1 ${
              assessmentPassedRecord?.passed ? 'text-emerald-400' : 'text-slate-400'
            }`}
          >
            {assessmentPassedRecord?.passed ? 'VERIFIED PASSED' : 'Ready to Test'}
          </p>
          <span className="text-[10px] text-slate-500">
            {assessmentPassedRecord?.passed
              ? `Score: ${assessmentPassedRecord.score}%`
              : 'Pass threshold: 70%'}
          </span>
        </div>
      </div>

      {/* Interactive CEFR Level Selector: A1 to C2 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>Select CEFR Proficiency Level</span>
          </h2>
          <span className="text-xs text-slate-400">
            Progressive curriculum aligned with official CEFR standards
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {course.levels.map(level => {
            const isSelected = selectedLevel === level;
            const lvlData = course.levelData?.[level];
            const hasPassed = progress?.levelAssessments?.[level]?.passed;

            return (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-extrabold font-mono tracking-tight">
                    {level}
                  </span>
                  {hasPassed ? (
                    <Award className="w-4 h-4 text-amber-400" />
                  ) : isSelected ? (
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  ) : null}
                </div>
                <p className="text-[11px] font-semibold text-slate-400 mt-1 line-clamp-1">
                  {lvlData?.title.split(':')[1]?.trim() || 'Proficiency'}
                </p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {lvlData?.modules.length || 0} Modules
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Level Overview & CEFR Can-Do Outcomes */}
      {currentLevelData && (
        <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-white">{currentLevelData.title}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  CEFR {selectedLevel}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentLevelData.cefrDescription}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400 font-mono">
                Target Vocab: <strong className="text-emerald-400">{currentLevelData.targetVocabCount}</strong>
              </span>
            </div>
          </div>

          {/* Can-Do Objectives Checklist */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              CEFR Can-Do Objectives for {selectedLevel}:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentLevelData.canDoStatements.map((statement, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{statement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Level Modules Roadmap */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">
              {course.name} {selectedLevel} Learning Curriculum ({modules.length} Modules)
            </h2>
            <p className="text-xs text-slate-400">
              Each module contains structured concept lessons, grammar breakdowns, audio flashcards, dialogues, and mastery quizzes.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {modules.map((mod, modIdx) => {
            const isExpanded = expandedModuleId === mod.id;
            const completedInModule = mod.lessons.filter(l =>
              progress.completedLessonIds.includes(l.id)
            ).length;
            const isModuleComplete =
              mod.lessons.length > 0 && completedInModule === mod.lessons.length;
            const percent =
              mod.lessons.length > 0
                ? Math.round((completedInModule / mod.lessons.length) * 100)
                : 0;

            return (
              <div
                key={mod.id}
                className="rounded-2xl cosmic-card border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
              >
                {/* Module Bar */}
                <div
                  onClick={() =>
                    setExpandedModuleId(isExpanded ? null : mod.id)
                  }
                  className="p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-800/20 transition-colors"
                >
                  <div className="flex items-start space-x-3.5">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5 ${
                        isModuleComplete
                          ? 'bg-emerald-500 text-slate-950'
                          : completedInModule > 0
                          ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-400'
                          : 'bg-slate-900 border border-slate-800 text-slate-400'
                      }`}
                    >
                      {String(mod.number).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base font-bold text-white">{mod.title}</h3>
                        {isModuleComplete && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                        {mod.description}
                      </p>

                      {/* Focus Topics Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {mod.focusTopics.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900 border border-slate-800 text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 self-end sm:self-center">
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-white">
                        {completedInModule} / {mod.lessons.length}
                      </span>
                      <p className="text-[10px] text-slate-500">Lessons Done</p>
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation();
                        if (mod.lessons[0] && currentLevelData) {
                          onSelectLesson(mod.lessons[0], mod, currentLevelData);
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <span>{completedInModule > 0 ? 'Continue' : 'Start'}</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Expanded Lessons List */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/60 space-y-2.5 animate-in slide-in-from-top-2 duration-200">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                      Lessons inside {mod.title}:
                    </span>
                    {mod.lessons.map(lesson => {
                      const isCompleted = progress.completedLessonIds.includes(lesson.id);
                      const score = progress.quizScores[lesson.id];

                      return (
                        <div
                          key={lesson.id}
                          onClick={() => {
                            if (currentLevelData) {
                              onSelectLesson(lesson, mod, currentLevelData);
                            }
                          }}
                          className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 cursor-pointer transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3">
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                isCompleted
                                  ? 'bg-emerald-500 text-slate-950'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {isCompleted ? <Check className="w-3.5 h-3.5" /> : lesson.order || 1}
                            </span>
                            <div>
                              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                                {lesson.title}
                              </h4>
                              <p className="text-xs text-slate-400">
                                {lesson.durationMinutes || 25} mins • {lesson.vocabulary.length} Vocab • {lesson.practiceExercises.length} Quiz Questions
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            {score !== undefined && (
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                  score >= 70
                                    ? 'bg-emerald-500/10 text-emerald-400'
                                    : 'bg-rose-500/10 text-rose-400'
                                }`}
                              >
                                {score}%
                              </span>
                            )}
                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Official CEFR Assessment Exam Banner Card */}
      {currentLevelData && (
        <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3.5">
              <span className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Official CEFR {selectedLevel} {course.name} Certification Exam
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 leading-relaxed">
                  Complete the comprehensive multi-section exam (Vocabulary, Grammar, Reading, and Listening). Passing with 70%+ unlocks an official Build Yourself CEFR Academic Certificate with cryptographic verification.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-500/20 self-start sm:self-auto"
            >
              <Award className="w-4 h-4" />
              <span>
                {assessmentPassedRecord?.passed
                  ? `Retake Exam (${assessmentPassedRecord.score}%)`
                  : 'Start Certification Exam'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {currentLevelData && (
        <LanguageAssessmentModal
          isOpen={isAssessmentOpen}
          onClose={() => setIsAssessmentOpen(false)}
          languageName={course.name}
          level={selectedLevel}
          levelData={currentLevelData}
          userName={userName}
          onPassExam={(cert, score) => {
            onAwardCertificate(cert);
            addXP(250);
          }}
        />
      )}

      <LanguageFlashcardModal
        isOpen={isFlashcardOpen}
        onClose={() => setIsFlashcardOpen(false)}
        words={allWordsInLevel}
        languageName={course.name}
        speechCode={course.speechCode}
        speakText={speakText}
      />

      <LanguageAlphabetModal
        languageKey={course.name}
        isOpen={isAlphabetOpen}
        onClose={() => setIsAlphabetOpen(false)}
        speakText={speakText}
      />
    </div>
  );
};
