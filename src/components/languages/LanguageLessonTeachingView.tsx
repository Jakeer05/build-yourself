import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Volume2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Check,
  AlertTriangle,
  Send,
  Mic,
  MicOff,
  Lightbulb,
  Award,
  ChevronRight,
  MessageSquare,
  RotateCw,
  Eye,
  EyeOff,
  Layers,
  FileText,
  Youtube
} from 'lucide-react';
import {
  LanguageLesson,
  LanguageModule,
  LanguageLevelData,
  LanguageCourse,
  LanguageUserProgress
} from '../../types';
import { YouTubeResourceCard } from '../common/YouTubeResourceCard';
import { getLanguageLessonYouTubeResources } from '../../data/youtubeResourcesRegistry';

interface LanguageLessonTeachingViewProps {
  lesson: LanguageLesson;
  module: LanguageModule;
  levelData: LanguageLevelData;
  course: LanguageCourse;
  progress: LanguageUserProgress;
  onBack: () => void;
  onNextLesson?: () => void;
  onCompleteLesson: (lessonId: string, quizScore: number) => void;
  speakText: (text: string, langCode?: string) => void;
  addXP: (amount: number) => void;
}

export const LanguageLessonTeachingView: React.FC<LanguageLessonTeachingViewProps> = ({
  lesson,
  module,
  levelData,
  course,
  progress,
  onBack,
  onNextLesson,
  onCompleteLesson,
  speakText,
  addXP
}) => {
  // Tabs: 'concept' | 'grammar' | 'vocab' | 'dialogue' | 'practice' | 'speech' | 'quiz' | 'youtube'
  const [activeTab, setActiveTab] = useState<
    'concept' | 'grammar' | 'vocab' | 'dialogue' | 'practice' | 'speech' | 'quiz' | 'youtube'
  >('concept');

  // Verified supplementary YouTube resources for this exact lesson
  const youtubeResources = getLanguageLessonYouTubeResources(
    course.name,
    lesson.level,
    lesson.title,
    lesson.grammarFocus
  );
  const primaryVideo = youtubeResources[0];

  // Audio Playback Speed
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Dialogue translation toggle
  const [showDialogueTranslation, setShowDialogueTranslation] = useState<boolean>(true);

  // Sentence Builder State
  const [selectedBuilderWords, setSelectedBuilderWords] = useState<Record<string, string[]>>({});
  const [builderChecked, setBuilderChecked] = useState<Record<string, boolean>>({});

  // Matching Pairs State
  const [selectedMatchTarget, setSelectedMatchTarget] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

  // Speech Recognition state
  const [speechTranscript, setSpeechTranscript] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [speechAccuracy, setSpeechAccuracy] = useState<number | null>(null);

  // Writing Challenge state
  const [writingInput, setWritingInput] = useState<string>('');
  const [showWritingSolution, setShowWritingSolution] = useState<boolean>(false);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(
    progress.quizScores[lesson.id] || 0
  );

  const existingScore = progress.quizScores[lesson.id] || 0;
  const isAlreadyCompleted = progress.completedLessonIds.includes(lesson.id);

  // Play audio with custom rate
  const playAudio = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = course.speechCode;
    utterance.rate = playbackSpeed;
    window.speechSynthesis.speak(utterance);
  };

  // Toggle speech recognition for pronunciation test
  const toggleSpeechRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechTranscript('Speech recognition is not supported by your browser. Please practice pronunciation aloud.');
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = course.speechCode;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsRecording(true);
      setSpeechTranscript('');
      setSpeechAccuracy(null);
    };

    recognition.onend = () => setIsRecording(false);
    recognition.onerror = () => setIsRecording(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSpeechTranscript(transcript);

      // Compare with prompt phrase
      const targetPhrase = lesson.speakingPrompt?.phraseToSpeak || lesson.title;
      const cleanTarget = targetPhrase.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
      const cleanTranscript = transcript.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');

      if (cleanTranscript.includes(cleanTarget) || cleanTarget.includes(cleanTranscript)) {
        setSpeechAccuracy(95);
      } else {
        setSpeechAccuracy(65);
      }
    };

    try {
      recognition.start();
    } catch {
      setIsRecording(false);
    }
  };

  // Sentence builder click
  const handleWordClick = (builderId: string, word: string) => {
    const current = selectedBuilderWords[builderId] || [];
    if (current.includes(word)) {
      setSelectedBuilderWords(prev => ({
        ...prev,
        [builderId]: current.filter(w => w !== word)
      }));
    } else {
      setSelectedBuilderWords(prev => ({
        ...prev,
        [builderId]: [...current, word]
      }));
    }
  };

  // Matching pair click
  const handlePairClick = (item: string, isTarget: boolean) => {
    if (isTarget) {
      setSelectedMatchTarget(item);
    } else if (selectedMatchTarget) {
      const pair = lesson.matchingPairs?.find(p => p.target === selectedMatchTarget);
      if (pair && pair.english === item) {
        setMatchedPairs(prev => [...prev, selectedMatchTarget]);
        setSelectedMatchTarget(null);
      } else {
        setSelectedMatchTarget(null);
      }
    }
  };

  // Quiz evaluation
  const handleQuizSubmit = () => {
    const questions = lesson.practiceExercises;
    let correct = 0;
    questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });

    const score = Math.round((correct / questions.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);

    if (score >= 70) {
      addXP(50);
    }
  };

  const handleCompleteButtonClick = () => {
    if (quizScore >= 70) {
      onCompleteLesson(lesson.id, quizScore);
    }
  };

  const allQuizAnswered =
    Object.keys(quizAnswers).length === lesson.practiceExercises.length;
  const canComplete = quizScore >= 70 || (isAlreadyCompleted && existingScore >= 70);

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-12">
      {/* Top Header / Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            title="Return to Modules"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">{course.flag}</span>
              <span className="text-xs font-mono font-bold text-slate-400">
                {course.name} • {levelData.level}
              </span>
              <span className="text-xs text-slate-500">/</span>
              <span className="text-xs font-semibold text-emerald-400">{module.title}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              {lesson.title}
            </h1>
          </div>
        </div>

        {/* Status and Speed Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <span className="text-slate-400 px-2 font-mono">Speed:</span>
            <button
              onClick={() => setPlaybackSpeed(0.8)}
              className={`px-2 py-1 rounded-lg font-mono font-bold transition-all ${
                playbackSpeed === 0.8
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              0.8x
            </button>
            <button
              onClick={() => setPlaybackSpeed(1.0)}
              className={`px-2 py-1 rounded-lg font-mono font-bold transition-all ${
                playbackSpeed === 1.0
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1.0x
            </button>
          </div>

          {isAlreadyCompleted && (
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Completed ({existingScore}%)</span>
            </span>
          )}
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex items-center space-x-1 overflow-x-auto p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 scrollbar-none">
        <button
          onClick={() => setActiveTab('concept')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'concept'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>1. Concept & Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('grammar')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'grammar'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>2. Grammar Rules & Tables</span>
        </button>

        <button
          onClick={() => setActiveTab('vocab')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'vocab'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>3. Vocabulary Vault ({lesson.vocabulary.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('dialogue')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'dialogue'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>4. Dialogue & Culture</span>
        </button>

        <button
          onClick={() => setActiveTab('practice')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'practice'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>5. Interactive Practice</span>
        </button>

        <button
          onClick={() => setActiveTab('speech')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'speech'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Mic className="w-3.5 h-3.5" />
          <span>6. Pronunciation Test</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'quiz'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>7. Mastery Quiz ({lesson.practiceExercises.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('youtube')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
            activeTab === 'youtube'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
              : 'text-rose-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Youtube className="w-3.5 h-3.5" />
          <span>8. YouTube Resources ({youtubeResources.length})</span>
        </button>
      </div>

      {/* Tab 1: Concept & Overview */}
      {activeTab === 'concept' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Learning Objective Card */}
          <div className="rounded-2xl cosmic-card p-6 border border-emerald-500/30 bg-emerald-500/5 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>CEFR {lesson.level} Learning Objective</span>
            </div>
            <p className="text-base text-slate-200 font-medium leading-relaxed">
              {lesson.learningObjective ||
                `Master foundational ${course.name} grammar and everyday conversational expressions for ${lesson.title}.`}
            </p>
          </div>

          {/* Section A: Concept Explanation */}
          <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>A. Concept Explanation</span>
            </h3>
            <div className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-3">
              {lesson.conceptExplanation?.split('\n\n').map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Section B: Why It Matters */}
          <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>B. Why This Is Important in {course.name}</span>
            </h3>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 text-sm leading-relaxed">
              {lesson.whyItMatters ||
                `Understanding this grammatical mechanism prevents recurring communication breakdowns in authentic interactions with native speakers.`}
            </div>
          </div>

          {/* Section G: Common Beginner Mistakes */}
          {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
            <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span>Common Beginner Mistakes to Avoid</span>
              </h3>
              <div className="space-y-3">
                {lesson.commonMistakes.map((item, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs sm:text-sm"
                  >
                    <div className="flex items-center space-x-2 text-rose-400 font-semibold">
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Mistake: {item.mistake}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Correction: {item.correction}</span>
                    </div>
                    <p className="text-slate-400 pt-1 border-t border-slate-800 text-xs">
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Recommended Video Lesson (Directly Inside Learning Path) */}
          {primaryVideo && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Youtube className="w-4 h-4" />
                <span>Recommended Video Lesson</span>
              </div>
              <YouTubeResourceCard resource={primaryVideo} lessonTitle={lesson.title} />
            </div>
          )}

          {/* Next Section prompt */}
          <div className="flex justify-end pt-4">
            <button
              onClick={() => setActiveTab('grammar')}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Continue to Grammar Rules</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Grammar Rules & Tables */}
      {activeTab === 'grammar' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                {lesson.grammarFocus}
              </div>
              <h3 className="text-xl font-bold text-white">Grammar Framework & Morphosyntax</h3>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {lesson.grammarExplanation}
            </div>

            {/* Grammar Tables */}
            {lesson.grammarSections?.map((section, sIdx) => (
              <div key={sIdx} className="space-y-4 pt-4 border-t border-slate-800">
                <h4 className="text-base font-bold text-emerald-300">{section.title}</h4>
                <p className="text-xs text-slate-400">{section.explanation}</p>

                {section.tables?.map((table, tIdx) => (
                  <div
                    key={tIdx}
                    className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60"
                  >
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-900 text-slate-300 font-bold">
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3.5 font-mono">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3.5 ${
                                  cIdx === 0
                                    ? 'font-bold text-white'
                                    : cIdx === 1
                                    ? 'text-emerald-400 font-mono'
                                    : 'text-slate-300'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}

                {/* Section examples */}
                {section.examples && section.examples.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Target Examples:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white">{ex.target}</span>
                            <button
                              onClick={() => playAudio(ex.target)}
                              className="p-1 text-slate-400 hover:text-emerald-400"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          {ex.romanization && (
                            <p className="text-xs text-emerald-400 font-mono">{ex.romanization}</p>
                          )}
                          <p className="text-xs text-slate-400">{ex.english}</p>
                          {ex.note && (
                            <p className="text-[11px] text-amber-400/90 italic pt-1">{ex.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setActiveTab('concept')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
            >
              Previous: Overview
            </button>
            <button
              onClick={() => setActiveTab('vocab')}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Explore Vocabulary Vault</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Vocabulary Vault */}
      {activeTab === 'vocab' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Target Vocabulary & Native Audio</h3>
              <p className="text-xs text-slate-400">
                Click the speaker button to hear native pronunciation at {playbackSpeed}x speed
              </p>
            </div>
            <button
              onClick={() => playAudio(lesson.vocabulary.map(v => v.word).join(', '))}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-emerald-400 flex items-center space-x-1.5 transition-all"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Play All Words</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.vocabulary.map(item => (
              <div
                key={item.id}
                className="cosmic-card rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                        {item.characterScript || item.word}
                      </h4>
                      {item.gender && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300">
                          {item.gender}
                        </span>
                      )}
                    </div>
                    {item.characterScript && (
                      <p className="text-sm text-emerald-400 font-medium">{item.word}</p>
                    )}
                    {item.phonetic && (
                      <p className="text-xs font-mono text-slate-400">[{item.phonetic}]</p>
                    )}
                    <p className="text-sm font-bold text-emerald-400">{item.translation}</p>
                  </div>
                  <button
                    onClick={() => playAudio(item.word)}
                    className="p-3 rounded-full bg-slate-900 text-slate-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/30 transition-all"
                    title="Listen to native audio"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {item.exampleTarget && (
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1">
                    <p className="font-semibold text-slate-200">{item.exampleTarget}</p>
                    <p className="text-slate-400 italic">{item.exampleTranslation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setActiveTab('grammar')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
            >
              Previous: Grammar
            </button>
            <button
              onClick={() => setActiveTab('dialogue')}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Practice Real Dialogue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Dialogue & Culture */}
      {activeTab === 'dialogue' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Authentic Dialogue Script */}
          <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Authentic Native Dialogue</h3>
                <p className="text-xs text-slate-400">
                  Listen and follow native conversational exchanges
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowDialogueTranslation(!showDialogueTranslation)}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white flex items-center space-x-1.5 transition-all"
                >
                  {showDialogueTranslation ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Hide English</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Show English</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    playAudio(lesson.dialogue.map(d => `${d.speaker}: ${d.text}`).join('. '))
                  }
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 flex items-center space-x-1.5 transition-all"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Play Full Conversation</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {lesson.dialogue.map((line, dIdx) => (
                <div
                  key={dIdx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start justify-between space-x-4 hover:border-slate-700 transition-all"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-emerald-400">
                        {line.speaker}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-white">{line.text}</p>
                    {line.romanization && (
                      <p className="text-xs text-emerald-400 font-mono">{line.romanization}</p>
                    )}
                    {showDialogueTranslation && (
                      <p className="text-xs text-slate-400 italic pt-0.5">{line.translation}</p>
                    )}
                  </div>
                  <button
                    onClick={() => playAudio(line.text)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-emerald-300 hover:bg-slate-700 transition-all"
                    title="Listen to this line"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Context Note */}
          {lesson.culturalNote && (
            <div className="rounded-2xl cosmic-card p-6 border border-amber-500/30 bg-amber-500/5 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Cultural Insight: {lesson.culturalNote.title}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lesson.culturalNote.content}
              </p>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setActiveTab('vocab')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
            >
              Previous: Vocabulary
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Go to Interactive Practice</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 5: Interactive Practice */}
      {activeTab === 'practice' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Sentence Builder */}
          {lesson.sentenceBuilders && lesson.sentenceBuilders.length > 0 && (
            <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <RotateCw className="w-4 h-4" />
                <span>Sentence Builder: Form Grammatical Sentences</span>
              </div>

              {lesson.sentenceBuilders.map(builder => {
                const selected = selectedBuilderWords[builder.id] || [];
                const isCorrect = selected.join(' ') === builder.targetSentence;
                const isChecked = builderChecked[builder.id];

                return (
                  <div key={builder.id} className="space-y-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <div>
                      <span className="text-xs text-slate-400">English prompt:</span>
                      <h4 className="text-base font-bold text-white">{builder.promptEnglish}</h4>
                    </div>

                    {/* Constructed sentence area */}
                    <div className="min-h-[50px] p-3 rounded-xl bg-slate-950 border border-slate-700/80 flex flex-wrap gap-2 items-center">
                      {selected.length === 0 ? (
                        <span className="text-xs text-slate-500 italic">
                          Click jumbled words below to assemble the sentence in correct grammar order...
                        </span>
                      ) : (
                        selected.map((w, wIdx) => (
                          <button
                            key={wIdx}
                            onClick={() => handleWordClick(builder.id, w)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all"
                          >
                            {w}
                          </button>
                        ))
                      )}
                    </div>

                    {/* Jumbled word choices */}
                    <div className="flex flex-wrap gap-2">
                      {builder.jumbledWords.map((w, wIdx) => {
                        const isUsed = selected.includes(w);
                        return (
                          <button
                            key={wIdx}
                            onClick={() => handleWordClick(builder.id, w)}
                            disabled={isUsed}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                              isUsed
                                ? 'bg-slate-950 border-slate-800 text-slate-600 line-through pointer-events-none'
                                : 'bg-slate-800 border-slate-700 text-slate-200 hover:border-emerald-500 hover:text-white'
                            }`}
                          >
                            {w}
                          </button>
                        );
                      })}
                    </div>

                    {/* Evaluation */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() =>
                          setBuilderChecked(prev => ({ ...prev, [builder.id]: true }))
                        }
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-all"
                      >
                        Check Sentence Order
                      </button>

                      {isChecked && (
                        <div className="flex items-center space-x-2 text-xs font-bold">
                          {isCorrect ? (
                            <span className="text-emerald-400 flex items-center space-x-1">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Perfect word order!</span>
                            </span>
                          ) : (
                            <span className="text-rose-400 flex items-center space-x-1">
                              <XCircle className="w-4 h-4" />
                              <span>Check position and case agreement</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {isChecked && (
                      <p className="text-xs text-slate-400 pt-1 border-t border-slate-800">
                        {builder.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Matching Pairs Game */}
          {lesson.matchingPairs && lesson.matchingPairs.length > 0 && (
            <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Matching Pairs Vocabulary Game</span>
              </h3>
              <p className="text-xs text-slate-400">
                Click a word on the left, then click its corresponding English meaning on the right
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {/* Targets */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {course.name} Term
                  </span>
                  {lesson.matchingPairs.map((p, idx) => {
                    const isMatched = matchedPairs.includes(p.target);
                    const isSelected = selectedMatchTarget === p.target;
                    return (
                      <button
                        key={idx}
                        onClick={() => !isMatched && handlePairClick(p.target, true)}
                        disabled={isMatched}
                        className={`w-full p-3 rounded-xl text-xs font-bold text-left border transition-all ${
                          isMatched
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 line-through opacity-70'
                            : isSelected
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {p.target}
                      </button>
                    );
                  })}
                </div>

                {/* English Meanings */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    English Meaning
                  </span>
                  {lesson.matchingPairs.map((p, idx) => {
                    const isMatched = matchedPairs.includes(p.target);
                    return (
                      <button
                        key={idx}
                        onClick={() => !isMatched && handlePairClick(p.english, false)}
                        disabled={isMatched}
                        className={`w-full p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                          isMatched
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 line-through opacity-70'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {p.english}
                      </button>
                    );
                  })}
                </div>
              </div>

              {matchedPairs.length === lesson.matchingPairs.length && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold text-center">
                  All pairs matched successfully! +25 XP
                </div>
              )}
            </div>
          )}

          {/* Mini Writing Challenge */}
          {lesson.writingChallenge && lesson.writingChallenge.length > 0 && (
            <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-4">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Writing Challenge: Construct Original Sentences</span>
              </div>

              {lesson.writingChallenge.map((chal, cIdx) => (
                <div key={cIdx} className="space-y-3">
                  <h4 className="text-base font-bold text-white">{chal.title}</h4>
                  <p className="text-xs text-slate-300">{chal.prompt}</p>
                  <p className="text-xs text-amber-400 italic font-mono">{chal.starterHint}</p>

                  <textarea
                    value={writingInput}
                    onChange={e => setWritingInput(e.target.value)}
                    placeholder={`Type your ${course.name} response here...`}
                    rows={3}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setShowWritingSolution(!showWritingSolution)}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      {showWritingSolution ? 'Hide Model Solution' : 'View Model Solution & Analysis'}
                    </button>
                  </div>

                  {showWritingSolution && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2 text-xs">
                      <div className="text-emerald-400 font-bold">Model Solution:</div>
                      <p className="text-white font-mono text-sm">{chal.sampleAnswer}</p>
                      <p className="text-slate-400 italic pt-1">{chal.breakdown}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setActiveTab('dialogue')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
            >
              Previous: Dialogue
            </button>
            <button
              onClick={() => setActiveTab('speech')}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Test Pronunciation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 6: Pronunciation Test (Live Web Speech API) */}
      {activeTab === 'speech' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Live Pronunciation & Speech Analysis
                </h3>
                <p className="text-xs text-slate-400">
                  Listen to native pronunciation guide, then speak into your microphone to verify speech accuracy
                </p>
              </div>
            </div>

            {/* Target phrase to speak */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                Phrase to Speak
              </span>
              <div className="flex items-center justify-center space-x-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {lesson.speakingPrompt?.phraseToSpeak || lesson.title}
                </h2>
                <button
                  onClick={() =>
                    playAudio(lesson.speakingPrompt?.phraseToSpeak || lesson.title)
                  }
                  className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all"
                  title="Listen to native pronunciation"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {lesson.speakingPrompt?.phonetic && (
                <p className="text-xs font-mono text-emerald-400">
                  [{lesson.speakingPrompt.phonetic}]
                </p>
              )}
              {lesson.speakingPrompt?.translation && (
                <p className="text-xs text-slate-400 italic">
                  "{lesson.speakingPrompt.translation}"
                </p>
              )}

              {/* Speech Recognition Trigger */}
              <div className="pt-4 flex flex-col items-center justify-center space-y-3">
                <button
                  onClick={toggleSpeechRecognition}
                  className={`p-5 rounded-full border transition-all shadow-xl ${
                    isRecording
                      ? 'bg-rose-500 text-white animate-pulse border-rose-400'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-emerald-400'
                  }`}
                >
                  {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </button>
                <span className="text-xs font-semibold text-slate-300">
                  {isRecording
                    ? 'Listening... Speak now in your microphone!'
                    : 'Click microphone to record your voice'}
                </span>

                {/* Live transcript result */}
                {speechTranscript && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md w-full space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Detected Speech:
                    </span>
                    <p className="text-sm font-bold text-white font-mono">{speechTranscript}</p>
                    {speechAccuracy !== null && (
                      <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800">
                        <span className="text-slate-400">Pronunciation Match:</span>
                        <span
                          className={`font-bold font-mono ${
                            speechAccuracy >= 80 ? 'text-emerald-400' : 'text-amber-400'
                          }`}
                        >
                          {speechAccuracy}% {speechAccuracy >= 80 ? '• Native Level' : '• Keep practicing!'}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Pronunciation Guide Items */}
            {lesson.pronunciationGuide && lesson.pronunciationGuide.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-white">Mouth & Vocal Mechanics Tips</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lesson.pronunciationGuide.map((item, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400 text-sm">
                          {item.soundOrPhrase}
                        </span>
                        <span className="font-mono text-slate-400">[{item.phoneticIpa}]</span>
                      </div>
                      <p className="text-slate-300">{item.mouthPositionTip}</p>
                      <p className="text-slate-400 italic pt-1">
                        Example: {item.exampleWord} ({item.translation})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setActiveTab('practice')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
            >
              Previous: Practice
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Take Lesson Quiz</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 7: Mastery Quiz & Completion Enforcement */}
      {activeTab === 'quiz' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Lesson Mastery Quiz ({lesson.practiceExercises.length} Questions)
                </h3>
                <p className="text-xs text-slate-400">
                  Passing requirement: 70% or higher. Only passing enables lesson completion!
                </p>
              </div>

              {quizSubmitted && (
                <div
                  className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                    quizScore >= 70
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  }`}
                >
                  Score: {quizScore}% {quizScore >= 70 ? '• PASSED' : '• RETAKE REQUIRED'}
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {lesson.practiceExercises.map((q, qIdx) => {
                const selectedOpt = quizAnswers[qIdx];
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div
                    key={qIdx}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {qIdx + 1}. {q.question}
                      </h4>
                      {quizSubmitted && (
                        <span className="flex-shrink-0 ml-2">
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <XCircle className="w-5 h-5 text-rose-400" />
                          )}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selectedOpt === optIdx;
                        const isRightAnswer = optIdx === q.correctIndex;

                        let style =
                          'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';
                        if (isChosen) {
                          style = 'bg-emerald-500/15 border-emerald-500 text-white font-bold';
                        }
                        if (quizSubmitted) {
                          if (isRightAnswer) {
                            style = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                          } else if (isChosen && !isRightAnswer) {
                            style = 'bg-rose-500/20 border-rose-500 text-rose-300';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => {
                              if (!quizSubmitted) {
                                setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
                              }
                            }}
                            disabled={quizSubmitted}
                            className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${style}`}
                          >
                            <span>{opt}</span>
                            {isChosen && !quizSubmitted && (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                        <span className="font-bold text-slate-300">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Submit or Retake */}
            <div className="pt-2 flex items-center justify-between">
              {!quizSubmitted ? (
                <button
                  onClick={handleQuizSubmit}
                  disabled={!allQuizAnswered}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 disabled:opacity-40 disabled:pointer-events-none"
                >
                  Submit Quiz for Grading
                </button>
              ) : (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-all flex items-center space-x-1.5"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>
          </div>

          {/* Section L: Strictly Enforced Complete Lesson Button */}
          <div className="rounded-2xl cosmic-card p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">Lesson Completion Status</h4>
              <p className="text-xs text-slate-400">
                {canComplete
                  ? 'Congratulations! You have satisfied all learning, practice, and quiz requirements.'
                  : 'You must achieve a quiz score of at least 70% to unlock lesson completion.'}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleCompleteButtonClick}
                disabled={!canComplete}
                className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center space-x-2 transition-all shadow-lg ${
                  canComplete
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700 opacity-60'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Complete Lesson & Earn 50 XP</span>
              </button>

              {onNextLesson && canComplete && (
                <button
                  onClick={onNextLesson}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center space-x-1.5 transition-all"
                >
                  <span>Next Lesson</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 8: Dedicated YouTube Resources Hub for this Lesson */}
      {activeTab === 'youtube' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="rounded-2xl cosmic-card p-6 border border-rose-500/30 bg-rose-950/10 space-y-2">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <Youtube className="w-4 h-4" />
              <span>Supplementary YouTube Learning • {course.name} ({lesson.level})</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Curated Video Masterclasses for: {lesson.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              These verified educational resources complement your <strong>Build Yourself</strong> lesson. If third-party embedding is disabled by the channel creator, you can use the direct "Watch on YouTube" button to open the video in a new tab without interrupting your lesson progress.
            </p>
          </div>

          <div className="space-y-6">
            {youtubeResources.map(yt => (
              <YouTubeResourceCard key={yt.id} resource={yt} lessonTitle={lesson.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
