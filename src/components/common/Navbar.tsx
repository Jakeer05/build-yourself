import React, { useState } from 'react';
import { useApp, AppView } from '../../context/AppContext';
import {
  Compass,
  BookOpen,
  Map,
  Globe2,
  FileCheck,
  Mic,
  GraduationCap,
  Building2,
  Award,
  FileText,
  Search,
  Bell,
  Sparkles,
  Shield,
  UserCheck,
  Flame,
  Zap,
  Menu,
  X,
  Bot,
  Video,
  Youtube
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    user,
    activeView,
    setActiveView,
    setSearchModalOpen,
    notifications,
    markNotificationAsRead,
    switchRole,
    shortlist
  } = useApp();

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const navItems: { view: AppView; label: string; icon: React.ReactNode }[] = [
    { view: 'dashboard', label: 'Dashboard', icon: <Compass className="w-4 h-4" /> },
    { view: 'courses', label: 'Learn', icon: <BookOpen className="w-4 h-4" /> },
    { view: 'roadmaps', label: 'Roadmaps', icon: <Map className="w-4 h-4" /> },
    { view: 'languages', label: 'Languages', icon: <Globe2 className="w-4 h-4" /> },
    { view: 'mock-tests', label: 'Mock Tests', icon: <FileCheck className="w-4 h-4" /> },
    { view: 'mock-interview', label: 'AI Interview', icon: <Mic className="w-4 h-4" /> },
    { view: 'masters', label: "Master's & Abroad", icon: <GraduationCap className="w-4 h-4" /> },
    { view: 'universities', label: 'Universities', icon: <Building2 className="w-4 h-4" /> },
    { view: 'certificates', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
    { view: 'resume-portfolio', label: 'Resume & Portfolio', icon: <FileText className="w-4 h-4" /> },
    { view: 'ai-tutor', label: 'AI Tutor', icon: <Bot className="w-4 h-4 text-cyan-400" /> },
    { view: 'resources', label: 'Resources', icon: <Youtube className="w-4 h-4 text-rose-400" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#080c15]/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setActiveView('dashboard')}
              className="flex items-center space-x-2.5 text-left group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-violet-600 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                <Sparkles className="w-5 h-5 text-white" />
                <div className="absolute inset-0 rounded-xl border border-white/20" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    Build Yourself
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium hidden sm:block">Learn. Practice. Build. Certify. Grow.</p>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map(item => {
              const isActive =
                activeView === item.view ||
                (item.view === 'courses' && activeView === 'course-player') ||
                (item.view === 'languages' && activeView === 'language-player');
              return (
                <button
                  key={item.view}
                  onClick={() => setActiveView(item.view)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.view === 'universities' && shortlist.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {shortlist.length}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Search, Streak, XP, Notifications, Role Switcher, Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick Search */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-cyan-500/40 text-slate-400 hover:text-slate-200 text-xs transition-all"
              title="Search courses, universities, roadmaps (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Streak & XP Badges */}
            <div className="hidden sm:flex items-center space-x-2">
              <div
                className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold"
                title={`${user.streakDays}-Day Learning Streak!`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                <span>{user.streakDays}d</span>
              </div>
              <div
                className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold"
                title={`Level ${user.level} • ${user.xp} XP`}
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                <span>{user.xp} XP</span>
              </div>
            </div>

            {/* Role Switcher (Student / Admin View Toggle) */}
            <div className="relative">
              <button
                onClick={() => switchRole(user.role === 'student' ? 'admin' : 'student')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-medium border transition-all ${
                  user.role === 'admin'
                    ? 'bg-purple-950/60 text-purple-300 border-purple-600/50 shadow-sm shadow-purple-500/20'
                    : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
                title="Switch between Student & Admin Dashboards"
              >
                {user.role === 'admin' ? (
                  <>
                    <Shield className="w-3.5 h-3.5 text-purple-400" />
                    <span className="hidden md:inline">Admin Mode</span>
                  </>
                ) : (
                  <>
                    <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="hidden md:inline">Student</span>
                  </>
                )}
              </button>
            </div>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 text-[10px] font-bold text-slate-950 flex items-center justify-center animate-bounce">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl p-3 z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Notifications</span>
                    <span className="text-[10px] text-slate-400">{unreadCount} unread</span>
                  </div>
                  <div className="divide-y divide-slate-800/60 max-h-72 overflow-y-auto mt-2">
                    {notifications.map(notif => (
                      <div
                        key={notif.id}
                        onClick={() => markNotificationAsRead(notif.id)}
                        className={`p-2.5 rounded-lg cursor-pointer transition-all ${
                          notif.read ? 'opacity-70 hover:opacity-100' : 'bg-cyan-950/20 border-l-2 border-cyan-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-slate-200">{notif.title}</p>
                          <span className="text-[10px] text-slate-500">{notif.timestamp}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">{notif.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Avatar / Trigger */}
            <button
              onClick={() => setActiveView('dashboard')}
              className="flex items-center space-x-2 p-1 pl-2 pr-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-6 h-6 rounded-full object-cover border border-cyan-500/40"
              />
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline">{user.name.split(' ')[0]}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-2 pb-6 space-y-1">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map(item => {
              const isActive =
                activeView === item.view ||
                (item.view === 'courses' && activeView === 'course-player') ||
                (item.view === 'languages' && activeView === 'language-player');
              return (
                <button
                  key={item.view}
                  onClick={() => {
                    setActiveView(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 p-2.5 rounded-lg text-xs font-medium text-left ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                {item.icon}
                <span className="flex-1 truncate">{item.label}</span>
                {item.view === 'universities' && shortlist.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300">
                    {shortlist.length}
                  </span>
                )}
              </button>
            );
          })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Streak: {user.streakDays} Days 🔥</span>
            <span>XP: {user.xp} ⚡</span>
            <span>Level {user.level}</span>
          </div>
        </div>
      )}
    </header>
  );
};
