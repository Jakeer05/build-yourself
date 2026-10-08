import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Globe2,
  ArrowRight,
  Volume2,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Search,
  BookOpen,
  Award,
  Layers
} from 'lucide-react';
import { CEFRLevel, LearningResource } from '../../types';
import { LanguageAlphabetModal } from './LanguageAlphabetModal';
import { DuolingoPracticeCard } from '../resources/DuolingoPracticeCard';
import { getResourcesByLanguage } from '../../data/learningResourcesData';
import { ResourceCard } from '../resources/ResourceCard';
import { VideoPlayerModal } from '../resources/VideoPlayerModal';

export const LanguagesView: React.FC = () => {
  const {
    languages = [],
    setSelectedLanguageId,
    setSelectedLanguageLevel,
    setActiveView,
    speakText
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeAlphabetLang, setActiveAlphabetLang] = useState<string | null>(null);
  const [selectedLangVideo, setSelectedLangVideo] = useState<LearningResource | null>(null);

  const safeLanguages = Array.isArray(languages) ? languages : [];

  const filteredLanguages = safeLanguages.filter(
    lang =>
      !lang ? false :
      (lang.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lang.nativeName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lang.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lang.writingSystem &&
        lang.writingSystem.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const welcomeGreetings: Record<string, string> = {
    de: 'Willkommen bei Deutsch',
    fr: 'Bienvenue au cours de français',
    es: 'Bienvenido al curso de español',
    ja: '日本語コースへようこそ',
    ko: '한국어 강좌에 오신 것을 환영합니다',
    zh: '欢迎学习中文课程',
    ru: 'Добро пожаловать в курс русского языка',
    ar: 'أهلاً وسهلاً بك في دورة اللغة العربية',
    it: 'Benvenuti al corso di italiano',
    pt: 'Bem-vindo ao curso de português',
    en: 'Welcome to Professional English',
    nl: 'Welkom bij de cursus Nederlands',
    hi: 'हिन्दी भाषा पाठ्यक्रम में आपका स्वागत है',
    te: 'తెలుగు భాషా కోర్సుకు స్వాగతం'
  };

  const handleStartLanguage = (langId: string, level?: CEFRLevel) => {
    setSelectedLanguageId(langId);
    if (level) {
      setSelectedLanguageLevel(level);
    }
    setActiveView('language-player');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Complete Multilingual Platform • CEFR A1 to C2</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learn World Languages for Global Careers & Study Abroad
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Master European, Asian, and Middle Eastern languages with complete structured curricula, native audio speech synthesis, visual grammar tables, interactive sentence builders, authentic dialogues, and official CEFR certification exams.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{safeLanguages.length} Complete Languages</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>CEFR A1 to C2 Levels</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Native Audio Synthesis</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>AI Dialogue Tutor</span>
            </span>
          </div>
        </div>
      </div>

      {/* Dedicated Duolingo Daily Practice Companion */}
      <DuolingoPracticeCard />

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by language, script, or country..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <div className="text-xs font-mono text-slate-400">
          Showing <strong className="text-white">{filteredLanguages.length}</strong> of{' '}
          <strong className="text-white">{safeLanguages.length}</strong> Languages
        </div>
      </div>

      {/* Language Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLanguages.map(lang => {
          const totalModules = Object.values(lang.levelData || {}).reduce(
            (sum, lvl) => sum + (lvl?.modules?.length || 0),
            0
          );

          const welcomeText = welcomeGreetings[lang.code] || `Welcome to ${lang.name}`;

          return (
            <div
              key={lang.id}
              className="group rounded-2xl cosmic-card p-6 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5 relative"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-4xl sm:text-5xl">{lang.flag}</span>
                  <button
                    onClick={() =>
                      speakText(welcomeText, lang.speechCode || 'en-US')
                    }
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/30 transition-all"
                    title="Listen to native pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                      {lang.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-serif italic">
                      ({lang.nativeName})
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    {lang.description}
                  </p>
                </div>

                {lang.writingSystem && (
                  <div className="text-[11px] text-slate-400 font-mono bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
                    <span className="text-emerald-400 font-bold">Script: </span>
                    {lang.writingSystem}
                  </div>
                )}

                {/* CEFR Levels Pills (Clickable to jump directly to a level) */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Available CEFR Levels:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(lang.levels || ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).map(level => (
                      <button
                        key={level}
                        onClick={() => handleStartLanguage(lang.id, level as CEFRLevel)}
                        className="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 border border-slate-800 hover:border-emerald-400 transition-all cursor-pointer"
                        title={`Start ${lang.name} at Level ${level}`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{totalModules > 0 ? `${totalModules} Modules` : '18 Modules'}</span>
                  <span>CEFR Aligned</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveAlphabetLang(lang.name.toLowerCase())}
                    className="w-1/2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Alphabet & Script</span>
                  </button>

                  <button
                    onClick={() => handleStartLanguage(lang.id)}
                    className="w-1/2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <span>Start Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recommended Language Learning YouTube Tutorials */}
      <div className="pt-6 border-t border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-rose-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Supplementary Pronunciation & Cultural Masterclasses</span>
            </div>
            <h3 className="text-lg font-bold text-white">Recommended Language YouTube Tutorials</h3>
          </div>
          <button
            onClick={() => setActiveView('resources')}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Explore All Resources →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from(
            new Map(
              [
                ...(getResourcesByLanguage('German') || []),
                ...(getResourcesByLanguage('Japanese') || []),
                ...(getResourcesByLanguage('Spanish') || []),
                ...(getResourcesByLanguage('French') || [])
              ]
                .filter(r => r && r.resourceType === 'video' && r.id)
                .map(r => [r.id, r])
            ).values()
          ).slice(0, 4).map((res, idx) => (
            <ResourceCard
              key={`${res.id}-${idx}`}
              resource={res}
              onWatchVideo={setSelectedLangVideo}
              onAskAi={() => setActiveView('ai-tutor')}
              compact
            />
          ))}
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        resource={selectedLangVideo}
        onClose={() => setSelectedLangVideo(null)}
        onAskAi={() => setActiveView('ai-tutor')}
      />

      {/* Alphabet & Writing System Modal */}
      {activeAlphabetLang && (
        <LanguageAlphabetModal
          languageKey={activeAlphabetLang}
          isOpen={true}
          onClose={() => setActiveAlphabetLang(null)}
          speakText={speakText}
        />
      )}
    </div>
  );
};
