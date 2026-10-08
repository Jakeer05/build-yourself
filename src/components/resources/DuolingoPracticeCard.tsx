import React, { useState, useEffect } from 'react';
import { ExternalLink, CheckCircle2, Clock, Globe2, Sparkles, BookOpen, Volume2, Mic, Target } from 'lucide-react';

interface HabitDefinition {
  id: string;
  label: string;
  defaultDone: boolean;
}

const HABIT_DEFINITIONS: HabitDefinition[] = [
  { id: 'by-lesson', label: 'Build Yourself Structured Lesson', defaultDone: true },
  { id: 'by-vocab', label: 'Vocabulary Flashcards & Review', defaultDone: false },
  { id: 'by-speaking', label: 'Speaking & Pronunciation Drill', defaultDone: false },
  { id: 'by-listening', label: 'Listening Comprehension Activity', defaultDone: false },
  { id: 'duo-practice', label: 'Duolingo Daily Mobile/Web Practice', defaultDone: false }
];

export const DuolingoPracticeCard: React.FC<{ languageName?: string }> = ({ languageName = 'General Language' }) => {
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('by_daily_goal_minutes');
      const parsed = saved ? parseInt(saved, 10) : 20;
      return isNaN(parsed) ? 20 : parsed;
    } catch {
      return 20;
    }
  });

  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('by_daily_language_habits_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch {}
    const initial: Record<string, boolean> = {};
    HABIT_DEFINITIONS.forEach(h => {
      initial[h.id] = h.defaultDone;
    });
    return initial;
  });

  const safeCompletedMap = (completedMap && typeof completedMap === 'object') ? completedMap : {};

  useEffect(() => {
    try {
      localStorage.setItem('by_daily_goal_minutes', dailyGoalMinutes.toString());
    } catch {}
  }, [dailyGoalMinutes]);

  useEffect(() => {
    try {
      localStorage.setItem('by_daily_language_habits_v2', JSON.stringify(safeCompletedMap));
    } catch {}
  }, [safeCompletedMap]);

  const toggleHabit = (id: string) => {
    setCompletedMap(prev => {
      const safe = (prev && typeof prev === 'object') ? prev : {};
      return {
        ...safe,
        [id]: !safe[id]
      };
    });
  };

  const completedCount = HABIT_DEFINITIONS.filter(h => !!safeCompletedMap[h.id]).length;
  const progressPct = Math.round((completedCount / HABIT_DEFINITIONS.length) * 100);

  const renderIcon = (id: string) => {
    switch (id) {
      case 'by-lesson':
        return <BookOpen className="w-3.5 h-3.5 text-cyan-400" />;
      case 'by-vocab':
        return <Sparkles className="w-3.5 h-3.5 text-violet-400" />;
      case 'by-speaking':
        return <Mic className="w-3.5 h-3.5 text-emerald-400" />;
      case 'by-listening':
        return <Volume2 className="w-3.5 h-3.5 text-amber-400" />;
      case 'duo-practice':
        return <Globe2 className="w-3.5 h-3.5 text-lime-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  return (
    <div className="rounded-3xl cosmic-card p-6 border border-emerald-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/20 shadow-xl space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/10">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Practice Daily with Duolingo
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Supplementary Practice
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-xl mt-0.5">
              Use <strong>Build Yourself</strong> for structured lessons, comprehensive grammar, syntax, speaking, writing, and verified academic assessments. Use <strong>Duolingo</strong> as an additional daily practice companion for habit building and gamified repetition.
            </p>
          </div>
        </div>

        {/* Official Duolingo Link Button */}
        <a
          href="https://www.duolingo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-400 hover:to-lime-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] shrink-0"
        >
          <span>Practice on Duolingo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Daily Goal & Habits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Practice Goal Selector (5 Cols) */}
        <div className="lg:col-span-5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>Daily Language Practice Goal</span>
            </label>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {dailyGoalMinutes} min/day
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-xs">
            {[5, 10, 15, 20, 30, 45, 60].map(mins => (
              <button
                key={mins}
                type="button"
                onClick={() => setDailyGoalMinutes(mins)}
                className={`py-1.5 px-2 rounded-lg font-mono text-xs font-bold transition-all ${
                  dailyGoalMinutes === mins
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {mins}m
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Today's Routine Completed</span>
              <span className="font-bold text-emerald-400">{progressPct}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Today's Practice Checklist (7 Cols) */}
        <div className="lg:col-span-7 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Today's Practice Routine ({completedCount}/{HABIT_DEFINITIONS.length})
          </span>

          <div className="space-y-2">
            {HABIT_DEFINITIONS.map(habit => {
              const isDone = !!safeCompletedMap[habit.id];
              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    isDone
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isDone ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-600'
                      }`}
                    >
                      {isDone && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex items-center space-x-2">
                      {renderIcon(habit.id)}
                      <span className={isDone ? 'line-through text-slate-400' : 'font-medium'}>
                        {habit.label}
                      </span>
                    </div>
                  </div>

                  {habit.id === 'duo-practice' && (
                    <a
                      href="https://www.duolingo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-[11px] font-bold text-lime-400 hover:underline flex items-center space-x-1"
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
