import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LanguageLesson,
  LanguageModule,
  LanguageLevelData,
  LanguageUserProgress,
  Certificate
} from '../../types';
import {
  getLanguageById,
  getStoredLanguageProgress,
  saveStoredLanguageProgress,
  markLessonCompleteWithScore,
  markAssessmentPassed
} from '../../data/languages/curriculumRegistry';
import { LanguageCourseHome } from './LanguageCourseHome';
import { LanguageLessonTeachingView } from './LanguageLessonTeachingView';
import { aiService } from '../../services/aiService';
import {
  MessageSquare,
  Sparkles,
  Send,
  Mic,
  MicOff,
  Volume2,
  X,
  RotateCw,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

export const LanguagePlayer: React.FC = () => {
  const {
    languages,
    selectedLanguageId,
    setActiveView,
    speakText,
    addXP,
    awardCertificate,
    user
  } = useApp();

  // Get current language curriculum
  const course = getLanguageById(selectedLanguageId);

  // Stored progress for this language
  const [progress, setProgress] = useState<LanguageUserProgress>(() =>
    getStoredLanguageProgress(course.id)
  );

  // Active lesson selection (null = show Course Home)
  const [activeLessonContext, setActiveLessonContext] = useState<{
    lesson: LanguageLesson;
    module: LanguageModule;
    levelData: LanguageLevelData;
  } | null>(null);

  // AI Tutor Modal State
  const [isAiTutorOpen, setIsAiTutorOpen] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<
    { sender: 'user' | 'ai'; text: string; correction?: string; tips?: string[] }[]
  >([]);
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const [isMicRecording, setIsMicRecording] = useState<boolean>(false);

  // Refresh progress when language changes
  useEffect(() => {
    setProgress(getStoredLanguageProgress(course.id));
    setActiveLessonContext(null);

    // Initial greeting in target language
    setChatHistory([
      {
        sender: 'ai',
        text: `Hello! I am your native ${course.name} AI Teacher. You can practice speaking and writing in ${course.name} with me anytime! How can I help you today?`
      }
    ]);
  }, [course.id]);

  // Handle lesson selection
  const handleSelectLesson = (
    lesson: LanguageLesson,
    module: LanguageModule,
    levelData: LanguageLevelData
  ) => {
    setActiveLessonContext({ lesson, module, levelData });
  };

  // Handle lesson completion with quiz score
  const handleCompleteLesson = (lessonId: string, quizScore: number) => {
    const wordIds = activeLessonContext?.lesson.vocabulary.map(v => v.id) || [];
    const updated = markLessonCompleteWithScore(course.id, lessonId, quizScore, wordIds);
    setProgress(updated);
    addXP(50);
  };

  // Next lesson trigger
  const handleNextLesson = () => {
    if (!activeLessonContext) return;
    const { module, lesson, levelData } = activeLessonContext;
    const currentIdx = module.lessons.findIndex(l => l.id === lesson.id);

    if (currentIdx < module.lessons.length - 1) {
      const nextLesson = module.lessons[currentIdx + 1];
      setActiveLessonContext({ lesson: nextLesson, module, levelData });
    } else {
      // Find next module in level
      const currentModIdx = levelData.modules.findIndex(m => m.id === module.id);
      if (currentModIdx < levelData.modules.length - 1) {
        const nextMod = levelData.modules[currentModIdx + 1];
        if (nextMod.lessons[0]) {
          setActiveLessonContext({
            lesson: nextMod.lessons[0],
            module: nextMod,
            levelData
          });
        }
      } else {
        // Return to course home
        setActiveLessonContext(null);
      }
    }
  };

  // Award official certificate
  const handleAwardCertificate = (cert: Certificate) => {
    awardCertificate(
      cert.courseTitle,
      cert.courseId,
      cert.finalGradePercent,
      cert.skillsAcquired
    );

    const updated = markAssessmentPassed(
      course.id,
      activeLessonContext?.levelData.level || progress.activeLevel || 'A1',
      cert.finalGradePercent,
      cert.id
    );
    setProgress(updated);
  };

  // Send AI Tutor message
  const handleSendChatMessage = async (customMessage?: string) => {
    const text = customMessage || chatInput;
    if (!text.trim()) return;

    setChatHistory(prev => [...prev, { sender: 'user', text }]);
    if (!customMessage) setChatInput('');
    setIsChatLoading(true);

    const level = activeLessonContext?.levelData.level || progress.activeLevel || 'A1';
    const result = await aiService.practiceLanguage(text, course.name, level);

    setChatHistory(prev => [
      ...prev,
      {
        sender: 'ai',
        text: result.reply,
        correction: result.grammarCorrection,
        tips: result.vocabularyTips
      }
    ]);
    setIsChatLoading(false);
    addXP(25);

    // Speak AI reply in native language
    const speechSnippet = result.reply.split('(')[0];
    speakText(speechSnippet, course.speechCode);
  };

  // Speech Recognition for AI Tutor
  const toggleMic = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setChatHistory(prev => [
        ...prev,
        {
          sender: 'ai',
          text: 'Speech recognition is not supported in this browser. Please type your message.'
        }
      ]);
      return;
    }

    if (isMicRecording) {
      setIsMicRecording(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = course.speechCode;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsMicRecording(true);
    recognition.onend = () => setIsMicRecording(false);
    recognition.onerror = () => setIsMicRecording(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      handleSendChatMessage(transcript);
    };

    try {
      recognition.start();
    } catch {
      setIsMicRecording(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* If a lesson is actively selected, show the teaching view; otherwise show the Course Home */}
      {activeLessonContext ? (
        <LanguageLessonTeachingView
          lesson={activeLessonContext.lesson}
          module={activeLessonContext.module}
          levelData={activeLessonContext.levelData}
          course={course}
          progress={progress}
          onBack={() => setActiveLessonContext(null)}
          onNextLesson={handleNextLesson}
          onCompleteLesson={handleCompleteLesson}
          speakText={speakText}
          addXP={addXP}
        />
      ) : (
        <LanguageCourseHome
          course={course}
          progress={progress}
          userName={user.name}
          onBackToAllLanguages={() => setActiveView('languages')}
          onSelectLesson={handleSelectLesson}
          onOpenAiTutor={() => setIsAiTutorOpen(true)}
          onAwardCertificate={handleAwardCertificate}
          speakText={speakText}
          addXP={addXP}
        />
      )}

      {/* Interactive AI Language Tutor Modal */}
      {isAiTutorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl cosmic-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col h-[650px] max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{course.flag}</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-bold text-white">
                      {course.name} AI Conversation Tutor
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Live
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Real-time dialogue practice, speech synthesis, and automatic grammar corrections
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAiTutorOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation History */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1 scrollbar-none">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  } space-y-1`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-500 text-slate-950 font-medium rounded-tr-none'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.sender === 'ai' && (
                      <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-800">
                        <button
                          onClick={() => speakText(msg.text.split('(')[0], course.speechCode)}
                          className="inline-flex items-center space-x-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Listen</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Grammar Correction Card */}
                  {msg.correction && (
                    <div className="max-w-[85%] p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1">
                      <div className="flex items-center space-x-1 font-bold">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Grammar Feedback:</span>
                      </div>
                      <p>{msg.correction}</p>
                    </div>
                  )}

                  {/* Vocabulary Tips */}
                  {msg.tips && msg.tips.length > 0 && (
                    <div className="max-w-[85%] flex flex-wrap gap-1.5 pt-1">
                      {msg.tips.map((tip, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 border border-slate-700 text-slate-300"
                        >
                          💡 {tip}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isChatLoading && (
                <div className="flex items-center space-x-2 text-xs text-slate-400 p-3 rounded-xl bg-slate-900/60 border border-slate-800 w-fit">
                  <RotateCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                  <span>Your native teacher is formulating feedback...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="pt-3 border-t border-slate-800 flex items-center space-x-2">
              <button
                onClick={toggleMic}
                className={`p-3 rounded-xl border transition-all ${
                  isMicRecording
                    ? 'bg-rose-500 text-white border-rose-400 animate-pulse'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                }`}
                title="Speak in your microphone"
              >
                {isMicRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendChatMessage()}
                placeholder={`Type or speak in ${course.name}...`}
                className="flex-1 p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />

              <button
                onClick={() => handleSendChatMessage()}
                disabled={!chatInput.trim() || isChatLoading}
                className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold disabled:opacity-40 disabled:pointer-events-none transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
