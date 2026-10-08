import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  Map,
  Globe2,
  GraduationCap,
  Sparkles,
  Flame,
  Zap,
  Award,
  Target,
  ArrowRight,
  Play,
  CheckCircle2,
  Circle,
  Clock,
  Building2,
  ChevronRight,
  FileCheck,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    user,
    setActiveView,
    courses,
    roadmaps,
    certificates,
    dailyPlan,
    toggleDailyPlanItem,
    navigateToLesson,
    navigateToRoadmap,
    navigateToLanguage,
    navigateToMasters,
    masterChecklist
  } = useApp();

  const completedDailyItems = dailyPlan.filter(d => d.completed).length;
  const completedMinutes = dailyPlan.filter(d => d.completed).reduce((acc, curr) => acc + curr.durationMinutes, 0);
  const totalMinutes = 90;
  const remainingMinutes = Math.max(0, totalMinutes - completedMinutes);

  // Master's checklist progress calculation
  const totalChecklistItems = Object.keys(masterChecklist).length || 1;
  const completedChecklistCount = Object.values(masterChecklist).filter(Boolean).length;
  const checklistPercent = Math.round((completedChecklistCount / totalChecklistItems) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. TOP WELCOME & GOALS BANNER */}
      <div className="relative overflow-hidden rounded-3xl cosmic-card p-6 sm:p-8 border border-cyan-500/25 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Header Title & Tagline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Build Yourself • Learn. Practice. Build. Certify. Grow.</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Welcome back, <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">{user.name}</span> 👋
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Your integrated command center for technical mastery, career roadmap tracking, multilingual fluency, and international master's admissions.
              </p>
            </div>

            {/* Overall Progress Meter */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-cyan-400"
                    strokeDasharray="58, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute font-bold text-xs text-white">58%</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Overall Progress</span>
                <span className="text-xs font-semibold text-cyan-300">Phase 2: Core Competencies</span>
              </div>
            </div>
          </div>

          {/* Student Status & Goals Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Learning Goal</span>
              <span className="font-bold text-cyan-300 line-clamp-1">Python & SQL</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Career Goal</span>
              <span className="font-bold text-violet-300 line-clamp-1">{user.targetCareer}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Master's Target</span>
              <span className="font-bold text-amber-300 line-clamp-1">{user.targetCountry} 🇩🇪</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Learning Streak</span>
              <span className="font-bold text-amber-400 flex items-center space-x-1">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>{user.streakDays} Days</span>
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Experience XP</span>
              <span className="font-bold text-cyan-400 flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5 fill-cyan-400" />
                <span>{user.xp} XP</span>
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Cosmic Level</span>
              <span className="font-bold text-emerald-400">Level {user.level}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Courses Done</span>
              <span className="font-bold text-white">1 Completed</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block font-medium">Certificates</span>
              <span className="font-bold text-amber-300 flex items-center space-x-1">
                <Award className="w-3.5 h-3.5" />
                <span>{certificates.length} Earned</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FOUR LARGE PRIMARY FEATURE CARDS (Section 1) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
            <Compass className="w-5 h-5 text-cyan-400" />
            <span>Core Learning & Career Pillars</span>
          </h2>
          <span className="text-xs text-slate-400">Select any pillar to enter the full module</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD 1: LEARN */}
          <div
            onClick={() => setActiveView('courses')}
            className="group rounded-3xl cosmic-card p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Interactive Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  1. LEARN
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  "Master programming, technology and computer science from beginner to advanced."
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-400 pt-1">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Programming (Python, Java, Go, Rust, C++)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Data & Databases (SQL, Power BI, Excel)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Web Development (React 19, TypeScript)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Computer Science (DSA, System Design)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-400 group-hover:underline">Start Learning</span>
              <div className="p-2 rounded-xl bg-cyan-500 text-slate-950 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 2: ROADMAPS */}
          <div
            onClick={() => setActiveView('roadmaps')}
            className="group rounded-3xl cosmic-card p-6 border border-violet-500/30 hover:border-violet-400 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-violet-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 text-violet-400 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Map className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  Career Tracks
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-violet-300 transition-colors">
                  2. ROADMAPS
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  "Follow structured career paths from beginner to job-ready."
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-400 pt-1">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Data Analyst & BI Developer</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Data Scientist & AI Engineer</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Full Stack & Backend Developer</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>DevOps & Cybersecurity Specialist</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-violet-400 group-hover:underline">Explore Roadmaps</span>
              <div className="p-2 rounded-xl bg-violet-600 text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 3: LANGUAGES */}
          <div
            onClick={() => setActiveView('languages')}
            className="group rounded-3xl cosmic-card p-6 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-emerald-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  CEFR A1 → C2
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                  3. LANGUAGES
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  "Learn languages from alphabet/basic level to advanced communication."
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-400 pt-1">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>German (A1-C2 with Audio Speech)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Spanish, French & Italian</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Japanese, Korean & Mandarin</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Professional IELTS & Academic English</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-400 group-hover:underline">Learn Languages</span>
              <div className="p-2 rounded-xl bg-emerald-500 text-slate-950 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 4: MASTER'S & ABROAD */}
          <div
            onClick={() => setActiveView('masters')}
            className="group rounded-3xl cosmic-card p-6 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-amber-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Admissions Planner
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  4. MASTER'S & ABROAD
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  "Explore countries, universities, programs, requirements and application planning."
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-400 pt-1">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>16 Global Destinations (Germany, USA, UK, Netherlands, Canada, Singapore, Austria, Australia, NZ, Italy, China, Japan, Spain, France, Luxembourg, Switzerland)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>170+ Accredited Universities & Verified Program Search</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Tuition & Blocked Account (€11,904) Tracking</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Application Shortlist & Readiness Checklist</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-400 group-hover:underline">Explore Abroad & Universities</span>
              <div className="p-2 rounded-xl bg-amber-500 text-slate-950 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. YOUR LEARNING PROGRESS (Section 12) */}
      <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center space-x-2 text-cyan-400">
            <TrendingUp className="w-5 h-5" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Your Learning Progress</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">Real-time Competency Benchmarks</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => navigateToLesson('course-py-01', 'les-py-func')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-white group-hover:text-cyan-300">Python Programming</span>
              <span className="font-mono text-cyan-400 font-bold text-xs">67%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: '67%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Completed 4 modules • Next: Functions</p>
          </div>

          <div
            onClick={() => navigateToLesson('course-sql-02', 'les-sql-joins')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-white group-hover:text-cyan-300">Enterprise SQL</span>
              <span className="font-mono text-cyan-400 font-bold text-xs">50%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: '50%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Completed 2 modules • Next: Multi-Table Joins</p>
          </div>

          <div
            onClick={() => navigateToLesson('course-da-03', 'les-da-modeling')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-white group-hover:text-cyan-300">Power BI & Analytics</span>
              <span className="font-mono text-cyan-400 font-bold text-xs">30%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: '30%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Completed 1 module • Next: Star Schema Modeling</p>
          </div>

          <div
            onClick={() => navigateToLanguage('lang-german', 'A1')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 cursor-pointer transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-white group-hover:text-emerald-300">German Language</span>
              <span className="font-mono text-emerald-400 font-bold text-xs">A1 - 35%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400" style={{ width: '35%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Next: Accusative Case & Definite Articles</p>
          </div>
        </div>
      </div>

      {/* 4. MAIN TWO-COLUMN WORKSPACE: Continue Learning & Roadmap on Left, Master's, Daily Plan & Certificates on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (7 cols): Continue Learning & Your Roadmap */}
        <div className="lg:col-span-7 space-y-8">
          {/* CONTINUE LEARNING MODULE */}
          <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Play className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                <h3 className="text-base font-bold text-white">Continue Learning</h3>
              </div>
              <span className="text-xs text-slate-400">Jump directly to your next lesson</span>
            </div>

            <div className="space-y-3">
              {/* Item 1: Python -> Functions */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Python
                    </span>
                    <span className="text-xs text-slate-400">Module 1 • Lesson 1.5</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Python Functions, Parameters & Return Values</h4>
                  <p className="text-xs text-slate-400">Master reusable function contracts, default arguments, and type annotations.</p>
                </div>
                <button
                  onClick={() => navigateToLesson('course-py-01', 'les-py-func')}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs self-end sm:self-auto transition-all shadow-md shadow-cyan-500/20"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Continue</span>
                </button>
              </div>

              {/* Item 2: SQL -> JOINs */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      SQL
                    </span>
                    <span className="text-xs text-slate-400">Module 2 • Lesson 2.1</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Multi-Table Relational JOINs (INNER, LEFT, FULL)</h4>
                  <p className="text-xs text-slate-400">Venn logic, avoiding duplicate cartesian products, and handling null references.</p>
                </div>
                <button
                  onClick={() => navigateToLesson('course-sql-02', 'les-sql-joins')}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs self-end sm:self-auto transition-all shadow-md shadow-cyan-500/20"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Continue</span>
                </button>
              </div>

              {/* Item 3: Power BI -> Data Modeling */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Power BI
                    </span>
                    <span className="text-xs text-slate-400">Module 1 • Lesson 1.1</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Data Modeling & Star Schema Fundamentals</h4>
                  <p className="text-xs text-slate-400">Separating Fact metrics from Dimension contexts for VertiPaq compression.</p>
                </div>
                <button
                  onClick={() => navigateToLesson('course-da-03', 'les-da-modeling')}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs self-end sm:self-auto transition-all shadow-md shadow-cyan-500/20"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Continue</span>
                </button>
              </div>

              {/* Item 4: German -> Accusative Case */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      German 🇩🇪
                    </span>
                    <span className="text-xs text-slate-400">Level A1 • Grammar</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">A1: Definite Articles & Direct Object Case</h4>
                  <p className="text-xs text-slate-400">Der → Den transformation for masculine direct objects in daily dialogue.</p>
                </div>
                <button
                  onClick={() => navigateToLanguage('lang-german', 'A1')}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs self-end sm:self-auto transition-all shadow-md shadow-emerald-500/20"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Practice</span>
                </button>
              </div>
            </div>
          </div>

          {/* YOUR ROADMAP (Section 12) */}
          <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Map className="w-5 h-5 text-violet-400" />
                <h3 className="text-base font-bold text-white">Your Career Roadmap: {user.targetCareer}</h3>
              </div>
              <span className="text-xs font-mono text-violet-300 font-bold">Progress: 45%</span>
            </div>

            <div className="p-4 rounded-2xl bg-violet-950/20 border border-violet-500/30 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-violet-300 tracking-wider">Current Stage</span>
                  <p className="text-base font-extrabold text-white">Stage 6: Data Visualization & BI</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-200 text-xs font-semibold">
                  Next Task: Power BI Dashboard Project
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-600 to-indigo-500" style={{ width: '45%' }} />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Completed: Excel, SQL, Statistics, Python Basics</span>
                <span>Upcoming: Capstone, Portfolio, AI Mock Interview</span>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                onClick={() => navigateToRoadmap('roadmap-data-analyst')}
                className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center space-x-1"
              >
                <span>View Full Roadmap & Stages</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Master's Plan, Daily Learning, Certificates */}
        <div className="lg:col-span-5 space-y-8">
          {/* MASTER'S PLAN (Section 12) */}
          <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Master's Admission Plan</h3>
              </div>
              <span className="text-xs font-mono text-amber-300 font-bold">{checklistPercent}% Ready</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Degree:</span>
                  <strong className="text-white">MS Data Analytics</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Country:</span>
                  <strong className="text-amber-300">Germany 🇩🇪 (TUM & RWTH Aachen)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Application Readiness:</span>
                  <strong className="text-cyan-300">{completedChecklistCount} of {totalChecklistItems} items verified</strong>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                  <span className="text-slate-400">Next Action:</span>
                  <span className="text-emerald-300 font-semibold">Prepare IELTS / verify APS requirements</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <button
                  onClick={() => navigateToMasters('guide-germany', 'MS Data Analytics')}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-amber-500/20"
                >
                  <span>Master's Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveView('universities')}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 font-bold text-xs flex items-center space-x-1.5 transition-all"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Universities</span>
                </button>
              </div>
            </div>
          </div>

          {/* DAILY LEARNING (Section 12) */}
          <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Daily Learning Goal</h3>
              </div>
              <span className="text-xs font-mono text-cyan-300 font-bold">
                {completedMinutes} / {totalMinutes} Mins
              </span>
            </div>

            <div className="space-y-2">
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${Math.round((completedMinutes / totalMinutes) * 100)}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Completed: {completedMinutes} min</span>
                <span>Remaining: {remainingMinutes} min</span>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-2 pt-2">
              {dailyPlan.slice(0, 4).map(item => (
                <div
                  key={item.id}
                  onClick={() => toggleDailyPlanItem(item.id)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                    item.completed
                      ? 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                      : 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    {item.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    )}
                    <span className="truncate">{item.topic}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">{item.durationMinutes}m</span>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATES & MOCK TESTS (Section 12) */}
          <div className="rounded-3xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Certificates & Eligibility</h3>
              </div>
              <span className="text-xs font-mono text-amber-300">{certificates.length} Verified</span>
            </div>

            <div className="space-y-3 text-xs">
              {/* Earned Certificate */}
              <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] text-amber-400 font-bold">EDN-PY-2026-000123</span>
                  <p className="font-bold text-white">Python Programming Masterclass</p>
                  <p className="text-[10px] text-emerald-400 font-medium">Passed: 24/30 Score • Issued Sep 2026</p>
                </div>
                <button
                  onClick={() => setActiveView('certificates')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all"
                >
                  View
                </button>
              </div>

              {/* In Progress Certification */}
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200">SQL & Relational Database Mastery</span>
                  <span className="text-cyan-400 font-semibold font-mono">15/30 Pass Needed</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Requirement: Complete all modules, then pass the 30-question objective assessment.
                </p>
                <button
                  onClick={() => setActiveView('mock-tests')}
                  className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-1"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Start 30-Question Assessment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
