import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCw,
  Clock,
  Sparkles,
  X,
  ArrowRight,
  ShieldCheck,
  Download
} from 'lucide-react';
import { CEFRLevel, LanguageLevelData, Certificate } from '../../types';
import { generateLanguageCertificate } from '../../data/languages/curriculumRegistry';

interface LanguageAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  languageName: string;
  level: CEFRLevel;
  levelData: LanguageLevelData;
  userName: string;
  onPassExam: (cert: Certificate, score: number) => void;
}

export const LanguageAssessmentModal: React.FC<LanguageAssessmentModalProps> = ({
  isOpen,
  onClose,
  languageName,
  level,
  levelData,
  userName,
  onPassExam
}) => {
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedCert, setGeneratedCert] = useState<Certificate | null>(null);

  if (!isOpen) return null;

  const exam = levelData.assessmentExam;
  const questions = exam.questions;
  const currentQ = questions[currentQIdx] || questions[0];

  const handleSelect = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQIdx]: optionIdx }));
  };

  const handleNext = () => {
    if (currentQIdx < questions.length - 1) {
      setCurrentQIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIdx > 0) {
      setCurrentQIdx(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    setIsSubmitted(true);

    if (finalScore >= exam.passingScore) {
      const cert = generateLanguageCertificate(userName, languageName, level, finalScore);
      setGeneratedCert(cert);
      onPassExam(cert, finalScore);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQIdx(0);
    setGeneratedCert(null);
  };

  const correctAnswersCount = questions.filter(
    (q, idx) => selectedAnswers[idx] === q.correctIndex
  ).length;
  const calculatedScore = Math.round((correctAnswersCount / questions.length) * 100);
  const hasPassed = calculatedScore >= exam.passingScore;
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl cosmic-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <span className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Award className="w-6 h-6" />
            </span>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-extrabold text-white">{exam.title}</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  CEFR {level}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official Certification • Passing threshold: {exam.passingScore}% • {exam.durationMinutes} mins
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Exam Body or Result Screen */}
        {!isSubmitted ? (
          <div className="space-y-6">
            {/* Progress Bar & Question Tracker */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>
                  Question {currentQIdx + 1} of {questions.length}
                </span>
                <span className="font-mono text-emerald-400">
                  {Object.keys(selectedAnswers).length}/{questions.length} Answered
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300"
                  style={{
                    width: `${((currentQIdx + 1) / questions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Reading Passage Context if present */}
            {currentQ.contextPassage && (
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-serif italic space-y-1">
                <div className="text-[10px] font-mono not-italic uppercase tracking-wider text-emerald-400 font-semibold">
                  Reading Passage / Context
                </div>
                <p>{currentQ.contextPassage}</p>
              </div>
            )}

            {/* Question Card */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {currentQ.question}
                </h3>
                <span className="ml-3 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-800 text-slate-300">
                  {currentQ.category}
                </span>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentQIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(optIdx)}
                      className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-md shadow-emerald-500/10'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                            isSelected
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentQIdx === 0}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-all"
              >
                Previous
              </button>

              <div className="flex items-center space-x-2">
                {currentQIdx < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-all flex items-center space-x-1.5"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!allAnswered}
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-40 disabled:pointer-events-none"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Submit Exam for Evaluation</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Result & Certificate View */
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
            <div
              className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center border shadow-xl ${
                hasPassed
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'bg-rose-500/10 border-rose-500/40 text-rose-400'
              }`}
            >
              {hasPassed ? <Award className="w-10 h-10" /> : <AlertTriangle className="w-10 h-10" />}
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {hasPassed ? 'Official CEFR Certification Passed!' : 'Exam Attempt Incomplete'}
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                {hasPassed
                  ? `Outstanding! You achieved an objective score of ${calculatedScore}%, satisfying the requirements for the Build Yourself CEFR ${level} ${languageName} Diploma.`
                  : `You scored ${calculatedScore}%. The passing threshold for this official CEFR ${level} benchmark is ${exam.passingScore}%. Review the curriculum modules and try again.`}
              </p>
            </div>

            {/* Score Pill */}
            <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-sm">
              <div>
                <span className="text-slate-400 text-xs">Your Score: </span>
                <span
                  className={`font-mono font-bold text-base ${
                    hasPassed ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {calculatedScore}%
                </span>
              </div>
              <div className="w-px h-6 bg-slate-800" />
              <div>
                <span className="text-slate-400 text-xs">Passing Required: </span>
                <span className="font-mono font-bold text-base text-slate-200">
                  {exam.passingScore}%
                </span>
              </div>
            </div>

            {/* Certificate Card Preview if passed */}
            {hasPassed && generatedCert && (
              <div className="p-6 rounded-2xl cosmic-card border border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 text-left space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                      Verified Academic Credential
                    </span>
                    <h3 className="text-base font-bold text-white">{generatedCert.courseTitle}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Grade: {generatedCert.finalGradePercent}%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400">Awarded To:</span>
                    <p className="font-semibold text-white">{generatedCert.studentName}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Verification Hash:</span>
                    <p className="font-mono text-emerald-400">{generatedCert.verificationHash}</p>
                  </div>
                </div>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {generatedCert.skillsAcquired.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-3 pt-4">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center space-x-1.5"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Retake Exam</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20"
              >
                {hasPassed ? 'Save & Return to Course Home' : 'Back to Lessons'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
