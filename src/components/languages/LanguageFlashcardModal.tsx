import React, { useState } from 'react';
import { Volume2, RotateCw, CheckCircle, XCircle, ArrowLeft, ArrowRight, Sparkles, X } from 'lucide-react';
import { LanguageWord } from '../../types';

interface LanguageFlashcardModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: LanguageWord[];
  languageName: string;
  speechCode: string;
  speakText: (text: string, langCode?: string) => void;
}

export const LanguageFlashcardModal: React.FC<LanguageFlashcardModalProps> = ({
  isOpen,
  onClose,
  words,
  languageName,
  speechCode,
  speakText
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownWordIds, setKnownWordIds] = useState<string[]>([]);

  if (!isOpen || words.length === 0) return null;

  const currentWord = words[currentIndex] || words[0];
  const isKnown = knownWordIds.includes(currentWord.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % words.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + words.length) % words.length);
  };

  const toggleKnown = (wordId: string) => {
    setKnownWordIds(prev =>
      prev.includes(wordId) ? prev.filter(id => id !== wordId) : [...prev, wordId]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl cosmic-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">{languageName} Vocabulary Vault</h3>
              <p className="text-xs text-slate-400">
                Card {currentIndex + 1} of {words.length} • {knownWordIds.length} Mastered
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

        {/* Flashcard with Flip Animation */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="cursor-pointer min-h-[260px] rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700/60 hover:border-emerald-500/50 transition-all flex flex-col justify-between items-center text-center relative group select-none shadow-lg"
        >
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            {isFlipped ? 'English Meaning & Context' : 'Target Language Term • Click card to flip'}
          </span>

          <div className="my-auto space-y-3">
            {!isFlipped ? (
              <>
                <div className="flex items-center justify-center space-x-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
                    {currentWord.characterScript || currentWord.word}
                  </h2>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      speakText(currentWord.word, speechCode);
                    }}
                    className="p-2.5 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all"
                    title="Listen to native audio"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                {currentWord.characterScript && (
                  <p className="text-sm font-medium text-emerald-400">{currentWord.word}</p>
                )}
                {currentWord.phonetic && (
                  <p className="text-xs font-mono text-slate-400">[{currentWord.phonetic}]</p>
                )}
                {currentWord.partOfSpeech && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300">
                    {currentWord.partOfSpeech}
                  </span>
                )}
              </>
            ) : (
              <div className="space-y-4 animate-in fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300">
                  {currentWord.translation}
                </h2>
                {currentWord.exampleTarget && (
                  <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800 text-left space-y-1">
                    <p className="text-sm font-semibold text-white">{currentWord.exampleTarget}</p>
                    <p className="text-xs text-slate-400">{currentWord.exampleTranslation}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-400 group-hover:text-emerald-400 transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            <span>Click to flip card</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => toggleKnown(currentWord.id)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
              isKnown
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            {isKnown ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Mastered</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" />
                <span>Mark as Known</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-all"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
