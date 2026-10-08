import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, X, BookOpen, Map, Building2, FileCheck, ArrowRight } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const {
    searchModalOpen,
    setSearchModalOpen,
    courses,
    roadmaps,
    universities,
    mockTests,
    setActiveView,
    setSelectedCourseId
  } = useApp();

  const [query, setQuery] = useState('');

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      if (e.key === 'Escape' && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchModalOpen, setSearchModalOpen]);

  if (!searchModalOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingCourses = q
    ? courses.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q)
      )
    : courses.slice(0, 3);

  const matchingRoadmaps = q
    ? roadmaps.filter(
        r =>
          r.title.toLowerCase().includes(q) ||
          r.role.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q)
      )
    : roadmaps.slice(0, 2);

  const matchingUniversities = q
    ? universities.filter(
        u =>
          u.universityName.toLowerCase().includes(q) ||
          u.programName.toLowerCase().includes(q) ||
          u.country.toLowerCase().includes(q)
      )
    : universities.slice(0, 2);

  const matchingTests = q
    ? mockTests.filter(t => t.title.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))
    : mockTests.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-cyan-500/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/50">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search courses, roadmaps, universities, mock tests..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Courses */}
          {matchingCourses.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                <span>Courses</span>
              </div>
              <div className="space-y-1.5">
                {matchingCourses.map(course => (
                  <div
                    key={course.id}
                    onClick={() => {
                      setSelectedCourseId(course.id);
                      setActiveView('course-player');
                      setSearchModalOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 hover:bg-cyan-950/30 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                        {course.title}
                      </p>
                      <p className="text-xs text-slate-400 line-clamp-1">{course.tagline}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {course.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roadmaps */}
          {matchingRoadmaps.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <Map className="w-3.5 h-3.5 mr-1.5 text-violet-400" />
                <span>Career Roadmaps</span>
              </div>
              <div className="space-y-1.5">
                {matchingRoadmaps.map(roadmap => (
                  <div
                    key={roadmap.id}
                    onClick={() => {
                      setActiveView('roadmaps');
                      setSearchModalOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 hover:bg-violet-950/30 border border-slate-800 hover:border-violet-500/40 cursor-pointer transition-all group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-violet-300">
                        {roadmap.title}
                      </p>
                      <p className="text-xs text-slate-400">{roadmap.estimatedMonths} Months • {roadmap.averageSalary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Universities */}
          {matchingUniversities.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                <span>Universities & Master's Programs</span>
              </div>
              <div className="space-y-1.5">
                {matchingUniversities.map(uni => (
                  <div
                    key={uni.id}
                    onClick={() => {
                      setActiveView('universities');
                      setSearchModalOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 hover:bg-emerald-950/30 border border-slate-800 hover:border-emerald-500/40 cursor-pointer transition-all group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300">
                        {uni.programName}
                      </p>
                      <p className="text-xs text-slate-400">{uni.universityName} • {uni.country} {uni.flag}</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">{uni.tuitionFee.includes('€0') ? 'Tuition Free' : uni.tuitionFee}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mock Tests */}
          {matchingTests.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <FileCheck className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                <span>Mock Tests & Assessments</span>
              </div>
              <div className="space-y-1.5">
                {matchingTests.map(test => (
                  <div
                    key={test.id}
                    onClick={() => {
                      setActiveView('mock-tests');
                      setSearchModalOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 hover:bg-amber-950/30 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-amber-300">
                        {test.title}
                      </p>
                      <p className="text-xs text-slate-400">{test.durationMinutes} Mins • {test.totalQuestions} Questions</p>
                    </div>
                    <span className="text-xs text-slate-400">{test.difficulty}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Navigate with arrows or click to jump</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
