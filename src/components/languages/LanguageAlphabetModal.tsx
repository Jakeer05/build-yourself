import React, { useState } from 'react';
import {
  Volume2,
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Layers,
  CheckCircle2,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { LANGUAGE_ALPHABETS, AlphabetCharItem, WritingSystemGuide } from '../../data/languages/alphabetData';

interface LanguageAlphabetModalProps {
  languageKey: string;
  isOpen: boolean;
  onClose: () => void;
  speakText: (text: string, langCode?: string) => void;
}

export const LanguageAlphabetModal: React.FC<LanguageAlphabetModalProps> = ({
  languageKey,
  isOpen,
  onClose,
  speakText
}) => {
  if (!isOpen) return null;

  const normalizedKey = languageKey.toLowerCase().replace(/[^a-z]/g, '');
  const guide: WritingSystemGuide =
    LANGUAGE_ALPHABETS[normalizedKey] ||
    Object.values(LANGUAGE_ALPHABETS).find(g =>
      normalizedKey.includes(g.languageName.toLowerCase().replace(/[^a-z]/g, '')) ||
      g.languageName.toLowerCase().replace(/[^a-z]/g, '').includes(normalizedKey) ||
      normalizedKey.includes(g.code.toLowerCase())
    ) ||
    LANGUAGE_ALPHABETS.german;

  const [selectedCharIndex, setSelectedCharIndex] = useState<number>(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [practiceMode, setPracticeMode] = useState<boolean>(false);
  const [practiceRevealed, setPracticeRevealed] = useState<boolean>(false);

  const guideChars = guide?.characters || [];
  const filteredCharacters = guideChars.filter(c =>
    selectedSubCategory === 'All' || c.category === selectedSubCategory
  );

  const currentChar: AlphabetCharItem =
    filteredCharacters[selectedCharIndex] ||
    filteredCharacters[0] ||
    guideChars[0] || {
      char: 'A',
      name: 'Letter',
      sound: 'Sound',
      exampleWord: 'Example',
      exampleTranslation: 'Translation',
      speechCode: guide?.speechCode || 'en-US'
    };

  const handleNext = () => {
    setSelectedCharIndex(prev => (prev + 1) % filteredCharacters.length);
    setPracticeRevealed(false);
  };

  const handlePrev = () => {
    setSelectedCharIndex(prev => (prev - 1 + filteredCharacters.length) % filteredCharacters.length);
    setPracticeRevealed(false);
  };

  const handlePlayAudio = (textToSpeak: string) => {
    speakText(textToSpeak, currentChar.speechCode || guide.speechCode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0c1220] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-500/10 space-y-6 my-auto max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                {guide.languageName} Writing System & Pronunciation
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {guide.direction.toUpperCase()} Direction • {guide.scriptName}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              {guide.languageName} Alphabet & Interactive Phonetics
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Script Description & Key Rules */}
        <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-2">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {guide.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
            {guide.keyRules.map((rule, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                <span className="text-emerald-400 font-bold shrink-0">•</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subcategories (for languages like Japanese / Korean / Hindi) */}
        {guide.subCategories && guide.subCategories.length > 0 && (
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            <button
              onClick={() => { setSelectedSubCategory('All'); setSelectedCharIndex(0); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedSubCategory === 'All'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Symbols ({guide.characters.length})
            </button>
            {guide.subCategories.map(sub => (
              <button
                key={sub}
                onClick={() => { setSelectedSubCategory(sub); setSelectedCharIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedSubCategory === sub
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Main Interactive Stage: Highlighted Character Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Spotlight Display Card (5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950 border border-emerald-500/30 flex flex-col justify-between space-y-4 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Position {selectedCharIndex + 1} / {filteredCharacters.length}</span>
              <button
                onClick={() => setPracticeMode(!practiceMode)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  practiceMode
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {practiceMode ? 'Practice Quiz Active' : 'Self-Test Mode'}
              </button>
            </div>

            {/* Giant Character Symbol */}
            <div className="py-4">
              <div className="inline-block p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-inner">
                <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-wide">
                  {currentChar.char}
                </span>
                {currentChar.lowerChar && (
                  <span className="text-4xl sm:text-5xl font-semibold text-slate-400 ml-3">
                    {currentChar.lowerChar}
                  </span>
                )}
              </div>
            </div>

            {/* Letter Name & Sound Breakdown */}
            {!practiceMode || practiceRevealed ? (
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-xl font-bold text-white">{currentChar.name}</h3>
                  {currentChar.ipa && (
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {currentChar.ipa}
                    </span>
                  )}
                  {currentChar.transliteration && (
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {currentChar.transliteration}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-emerald-400">Pronunciation:</strong> {currentChar.sound}
                </p>
                {currentChar.pronunciationTip && (
                  <p className="text-[11px] text-slate-400 italic bg-slate-900/60 p-2 rounded-xl">
                    💡 Tip: {currentChar.pronunciationTip}
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-2 py-2">
                <p className="text-xs text-amber-300 font-semibold">
                  How do you pronounce this character?
                </p>
                <button
                  onClick={() => setPracticeRevealed(true)}
                  className="px-4 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  Reveal Pronunciation & Answer
                </button>
              </div>
            )}

            {/* Example Word with Audio button */}
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Example Word:
                </span>
                <button
                  onClick={() => handlePlayAudio(currentChar.exampleWord)}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center space-x-1.5 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Listen</span>
                </button>
              </div>
              <div className="flex items-center justify-between text-left">
                <span className="text-base font-bold text-white">{currentChar.exampleWord}</span>
                <span className="text-xs text-slate-400">({currentChar.exampleTranslation})</span>
              </div>
            </div>

            {/* Arabic / Script Cursive Forms where applicable */}
            {currentChar.forms && (
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block text-center">
                  Positional Cursive Forms (Right to Left):
                </span>
                <div className="grid grid-cols-4 gap-1 text-center font-serif text-lg text-emerald-300">
                  <div>
                    <span className="text-[9px] text-slate-500 block">Isolated</span>
                    <span>{currentChar.forms.isolated}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block">Initial</span>
                    <span>{currentChar.forms.initial}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block">Medial</span>
                    <span>{currentChar.forms.medial}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block">Final</span>
                    <span>{currentChar.forms.final}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrev}
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => handlePlayAudio(currentChar.char)}
                className="p-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                title="Listen to Letter Sound"
              >
                <Volume2 className="w-5 h-5 fill-slate-950" />
              </button>

              <button
                onClick={handleNext}
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Interactive Character Grid Matrix (7 Cols) */}
          <div className="lg:col-span-7 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 text-xs text-slate-400 font-semibold">
                <span>Click any character to inspect phonetic breakdown & sound:</span>
                <span className="font-mono text-emerald-400">{filteredCharacters.length} Characters</span>
              </div>

              {/* Grid of clickable characters */}
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-2 max-h-[50vh] overflow-y-auto pr-1">
                {filteredCharacters.map((c, idx) => {
                  const isSelected = currentChar.char === c.char;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCharIndex(idx);
                        setPracticeRevealed(false);
                      }}
                      className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center space-y-1 group ${
                        isSelected
                          ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md shadow-emerald-500/20 scale-105'
                          : 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/40 text-slate-200 hover:bg-slate-900'
                      }`}
                    >
                      <span className="text-xl sm:text-2xl font-bold group-hover:text-emerald-300 transition-colors">
                        {c.char}
                      </span>
                      <span className="text-[10px] text-slate-400 truncate max-w-full">
                        {c.transliteration || c.name.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Practice Tip */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Listen and repeat aloud to develop native muscle memory in your tongue and lips.</span>
              <button
                onClick={() => handlePlayAudio(currentChar.exampleWord)}
                className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs shrink-0 ml-3"
              >
                Listen Example
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
