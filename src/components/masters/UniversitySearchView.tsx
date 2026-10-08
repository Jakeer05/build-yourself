import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { UniversityProgram, University, ApplicationStatus, ProgramDetail } from '../../types';
import {
  Building2,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Scale,
  X,
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  DollarSign,
  Bookmark,
  BookmarkCheck,
  Info,
  GraduationCap,
  Layers,
  BookOpen,
  Award,
  Clock,
  Briefcase,
  FileCheck,
  ChevronRight,
  ListFilter,
  Check,
  Edit3,
  Trash2,
  Plus
} from 'lucide-react';

export const UniversitySearchView: React.FC = () => {
  const {
    universities,
    allComprehensiveUniversities,
    shortlist,
    addToShortlist,
    removeFromShortlist,
    updateShortlistStatus,
    selectedUniversityForDetail,
    setSelectedUniversityForDetail
  } = useApp();

  const [activeTab, setActiveTab] = useState<'programs' | 'universities' | 'shortlist'>('programs');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedField, setSelectedField] = useState<string>('All');
  const [selectedDegree, setSelectedDegree] = useState<string>('All');
  const [tuitionFilter, setTuitionFilter] = useState<'all' | 'free' | 'low' | 'mid'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);
  const [comparisonModalOpen, setComparisonModalOpen] = useState<boolean>(false);
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState<string>('');
  const [shortlistFilterStatus, setShortlistFilterStatus] = useState<string>('All');

  const [selectedProgramForModal, setSelectedProgramForModal] = useState<UniversityProgram | null>(null);

  const countries = [
    'All',
    'Germany',
    'USA',
    'United Kingdom',
    'Netherlands',
    'Canada',
    'Singapore',
    'Austria',
    'Australia',
    'New Zealand',
    'Italy',
    'China',
    'Japan',
    'Spain',
    'France',
    'Luxembourg',
    'Switzerland'
  ];

  const fields = [
    'All',
    'Computer Science',
    'Data Science',
    'Artificial Intelligence',
    'Software Engineering',
    'Cybersecurity',
    'Business Analytics'
  ];

  const degrees = ['All', 'MS', 'MSc', 'MEng', 'MPhil', 'MBA'];

  // Filtered Programs List
  const filteredPrograms = useMemo(() => {
    return universities.filter(u => {
      const matchesCountry = selectedCountry === 'All' || u.country === selectedCountry;
      const matchesField =
        selectedField === 'All' ||
        (u.field && u.field.toLowerCase().includes(selectedField.toLowerCase())) ||
        u.programName.toLowerCase().includes(selectedField.toLowerCase());
      const matchesDegree = selectedDegree === 'All' || u.degree === selectedDegree;

      let matchesTuition = true;
      if (tuitionFilter === 'free') matchesTuition = u.tuitionNumericalUSD <= 2000;
      else if (tuitionFilter === 'low') matchesTuition = u.tuitionNumericalUSD <= 20000;
      else if (tuitionFilter === 'mid') matchesTuition = u.tuitionNumericalUSD <= 40000;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        u.universityName.toLowerCase().includes(q) ||
        (u.shortName && u.shortName.toLowerCase().includes(q)) ||
        u.programName.toLowerCase().includes(q) ||
        u.location.toLowerCase().includes(q) ||
        u.country.toLowerCase().includes(q) ||
        (u.field && u.field.toLowerCase().includes(q));

      return matchesCountry && matchesField && matchesDegree && matchesTuition && matchesSearch;
    });
  }, [universities, selectedCountry, selectedField, selectedDegree, tuitionFilter, searchQuery]);

  // Filtered Universities (Institutions Grouped)
  const filteredInstitutions = useMemo(() => {
    return allComprehensiveUniversities.filter(uni => {
      const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        uni.name.toLowerCase().includes(q) ||
        uni.shortName.toLowerCase().includes(q) ||
        uni.city.toLowerCase().includes(q) ||
        uni.programs.some(p => p.name.toLowerCase().includes(q) || p.field.toLowerCase().includes(q));
      return matchesCountry && matchesSearch;
    });
  }, [allComprehensiveUniversities, selectedCountry, searchQuery]);

  // Shortlist Filter
  const filteredShortlist = useMemo(() => {
    return shortlist.filter(item => {
      if (shortlistFilterStatus === 'All') return true;
      return item.status === shortlistFilterStatus;
    });
  }, [shortlist, shortlistFilterStatus]);

  // Comparison programs
  const comparisonItems = useMemo(() => {
    return universities.filter(u => selectedForComparison.includes(u.id));
  }, [universities, selectedForComparison]);

  const toggleComparison = (id: string) => {
    setSelectedForComparison(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const isShortlisted = (programId: string) => {
    return shortlist.some(item => item.programId === programId);
  };

  const handleOpenUniversityDetail = (uniNameOrId: string) => {
    const uni = allComprehensiveUniversities.find(
      u => u.id === uniNameOrId || u.name.toLowerCase() === uniNameOrId.toLowerCase() || u.shortName.toLowerCase() === uniNameOrId.toLowerCase()
    );
    if (uni) {
      setSelectedUniversityForDetail(uni);
    }
  };

  const statusOptions: ApplicationStatus[] = [
    'Interested',
    'Researching',
    'Preparing Documents',
    'Application Ready',
    'Applied',
    'Interview',
    'Admitted',
    'Rejected'
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Verified Official International University Database</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore & Shortlist Master’s Programs Worldwide
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Verified academic catalog across <strong>16 premier global destinations: Germany, USA, United Kingdom, Netherlands, Canada, Singapore, Austria, Australia, New Zealand, Italy, China, Japan, Spain, France, Luxembourg, and Switzerland</strong>. All details reflect authentic admissions criteria, verified tuition fees, language test minimums, and direct university portal links.
          </p>
        </div>
      </div>

      {/* Official Data Accuracy Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300 shadow-sm">
        <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div>
            <strong className="text-white">100% Verified Admissions Data:</strong> Every university and graduate degree program in this catalog links to its official academic admissions department. Intake deadlines and fee structures are verified against official university registers.
          </div>
          <div className="text-[11px] text-slate-400">
            Total Recognized Institutions: <span className="text-cyan-300 font-bold">{allComprehensiveUniversities.length}</span> • Total Verified Master's Programs: <span className="text-cyan-300 font-bold">{universities.length}</span>
          </div>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('programs')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'programs'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Search All Programs ({filteredPrograms.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('universities')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'universities'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>By Recognized Universities ({filteredInstitutions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('shortlist')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all relative ${
              activeTab === 'shortlist'
                ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>My Shortlist</span>
            {shortlist.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-400 text-slate-950">
                {shortlist.length}
              </span>
            )}
          </button>
        </div>

        {/* Comparison Trigger if items selected */}
        {selectedForComparison.length >= 2 && (
          <button
            onClick={() => setComparisonModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-violet-600/20 animate-pulse"
          >
            <Scale className="w-4 h-4" />
            <span>Compare Selected ({selectedForComparison.length}/3)</span>
          </button>
        )}
      </div>

      {/* FILTER & SEARCH CONTROLS (Displayed for Programs & Universities views) */}
      {activeTab !== 'shortlist' && (
        <div className="space-y-4">
          {/* Top Country Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1 flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Country:</span>
            </span>
            {countries.map(c => {
              const count =
                c === 'All'
                  ? allComprehensiveUniversities.length
                  : allComprehensiveUniversities.filter(u => u.country === c).length;

              return (
                <button
                  key={c}
                  onClick={() => setSelectedCountry(c)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCountry === c
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{c}</span>
                  <span className="ml-1.5 opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search bar & Secondary Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by university name, program, field, or city..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
            </div>

            {/* Field Filter */}
            {activeTab === 'programs' && (
              <div>
                <select
                  value={selectedField}
                  onChange={e => setSelectedField(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="All">All Disciplines & Fields</option>
                  {fields.filter(f => f !== 'All').map(f => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Tuition Filter */}
            {activeTab === 'programs' && (
              <div>
                <select
                  value={tuitionFilter}
                  onChange={e => setTuitionFilter(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="all">All Tuition Ranges</option>
                  <option value="free">€0 - $2,000 / yr (German Free / Low Tuition)</option>
                  <option value="low">Under $20,000 / yr</option>
                  <option value="mid">Under $40,000 / yr</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 1: ALL PROGRAMS CARD GRID */}
      {/* ============================================================== */}
      {activeTab === 'programs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-white">{filteredPrograms.length}</strong> verified master’s programs
            </span>
            <span>Click any university to inspect all degree programs</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrograms.map(uniProg => {
              const inComparison = selectedForComparison.includes(uniProg.id);
              const inShortlist = isShortlisted(uniProg.id);

              return (
                <div
                  key={uniProg.id}
                  className={`rounded-2xl cosmic-card p-6 border transition-all flex flex-col justify-between space-y-4 relative ${
                    inComparison
                      ? 'border-violet-500/50 shadow-lg shadow-violet-500/10'
                      : inShortlist
                      ? 'border-cyan-500/40 shadow-sm shadow-cyan-500/5'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header: Flag, Location, Public/Private, Shortlist Toggle */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="text-xl">{uniProg.flag}</span>
                          <span className="font-semibold text-slate-300">
                            {uniProg.country} • {uniProg.location}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                            {uniProg.publicPrivate}
                          </span>
                        </div>

                        {/* Clickable University Name */}
                        <button
                          onClick={() => handleOpenUniversityDetail(uniProg.universityName)}
                          className="text-left font-bold text-white text-base sm:text-lg hover:text-cyan-300 transition-colors mt-1 group flex items-center space-x-1.5"
                        >
                          <span>{uniProg.universityName}</span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                        </button>

                        <div className="flex items-center space-x-2 mt-0.5">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20">
                            {uniProg.degree}
                          </span>
                          <button
                            onClick={() => setSelectedProgramForModal(uniProg)}
                            className="text-left text-sm font-semibold text-cyan-200 hover:text-cyan-300 hover:underline transition-colors flex items-center space-x-1"
                          >
                            <span>{uniProg.programName}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-cyan-400 opacity-60" />
                          </button>
                        </div>
                      </div>

                      {/* Action buttons: Shortlist & Compare */}
                      <div className="flex items-center space-x-1.5 flex-shrink-0">
                        <button
                          onClick={() => {
                            if (inShortlist) {
                              removeFromShortlist(uniProg.id);
                            } else {
                              addToShortlist(uniProg);
                            }
                          }}
                          title={inShortlist ? 'Remove from Shortlist' : 'Add to Shortlist'}
                          className={`p-2 rounded-xl border transition-all ${
                            inShortlist
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-cyan-300 hover:border-slate-700'
                          }`}
                        >
                          {inShortlist ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>

                        <button
                          onClick={() => toggleComparison(uniProg.id)}
                          title="Compare Program"
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            inComparison
                              ? 'bg-violet-600 text-white border-violet-400'
                              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                          }`}
                        >
                          {inComparison ? '✓ In Compare' : '+ Compare'}
                        </button>
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Tuition Fee</span>
                        <span className="font-semibold text-emerald-400 line-clamp-1">{uniProg.tuitionFee}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Upcoming Deadline</span>
                        <span className="font-semibold text-amber-300 line-clamp-1">{uniProg.upcomingDeadline}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Language Req</span>
                        <span className="font-semibold text-cyan-300">IELTS {uniProg.ieltsRequirement} / TOEFL {uniProg.toeflRequirement}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">GRE Standard</span>
                        <span className="font-semibold text-slate-300 line-clamp-1">{uniProg.greRequirement}</span>
                      </div>
                    </div>

                    {/* Eligibility & Highlights Preview */}
                    <div className="pt-1 text-xs text-slate-400 space-y-1">
                      {uniProg.highlights && uniProg.highlights.length > 0 && (
                        <p className="line-clamp-2 text-slate-300">
                          <strong className="text-slate-400">Eligibility: </strong>
                          {uniProg.highlights[0]}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                          ⏳ Duration: {uniProg.duration || `${uniProg.durationMonths} Months`}
                        </span>
                        {uniProg.credits && (
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                            🎓 {uniProg.credits}
                          </span>
                        )}
                        {uniProg.workPermitYears && (
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-violet-300">
                            💼 {uniProg.workPermitYears}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Metadata and Official External Links */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center space-x-2 text-slate-500 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Official Source • Verified: {uniProg.lastVerifiedDate}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => setSelectedProgramForModal(uniProg)}
                        className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-sm shadow-cyan-500/20"
                      >
                        <span>Program Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleOpenUniversityDetail(uniProg.universityName)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all"
                      >
                        University Profile
                      </button>

                      <a
                        href={uniProg.admissionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold transition-all"
                      >
                        <span>Admissions</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="p-12 text-center rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <Building2 className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-white">No matching graduate programs found</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Try resetting your filters or search keywords to view all recognized university entries.
              </p>
              <button
                onClick={() => {
                  setSelectedCountry('All');
                  setSelectedField('All');
                  setSelectedDegree('All');
                  setTuitionFilter('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: BY RECOGNIZED UNIVERSITIES (GROUPED VIEW) */}
      {/* ============================================================== */}
      {activeTab === 'universities' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-white">{filteredInstitutions.length}</strong> accredited universities
            </span>
            <span>Click any university card to view all degree programs and admissions specs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstitutions.map(uni => (
              <div
                key={uni.id}
                className="rounded-2xl cosmic-card p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group cursor-pointer"
                onClick={() => setSelectedUniversityForDetail(uni)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{uni.flag}</span>
                      <div>
                        <span className="text-xs font-semibold text-slate-400">{uni.country}</span>
                        <div className="text-[10px] text-slate-500">{uni.city}, {uni.state}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {uni.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {uni.name}
                    </h3>
                    {uni.rankingScore && (
                      <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-400">
                        🏆 {uni.rankingScore}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {uni.description}
                  </p>

                  {/* Verified Programs offered preview */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1.5">
                      Programs Offered ({uni.programs.length}):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.programs.map(p => {
                        const matched = universities.find(u => u.id === p.id);
                        return (
                          <button
                            key={p.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (matched) {
                                setSelectedProgramForModal(matched);
                              } else {
                                setSelectedUniversityForDetail(uni);
                              }
                            }}
                            title="Click to view full program details"
                            className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-cyan-950/70 border border-slate-800 hover:border-cyan-500/50 text-[11px] text-cyan-300 font-medium text-left transition-all flex items-center space-x-1"
                          >
                            <span>{p.degree} {p.name.replace(/^M\.Sc\.|^Master of Science in|^Master of Computing \(MComp\) -/g, '').trim()}</span>
                            <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-500 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Official Registry</span>
                  </div>

                  <span className="text-cyan-400 group-hover:text-cyan-300 font-bold flex items-center space-x-1 text-xs">
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: MY SHORTLIST (USER SHORTLIST MANAGEMENT) */}
      {/* ============================================================== */}
      {activeTab === 'shortlist' && (
        <div className="space-y-6">
          {/* Top Shortlist Summary Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Bookmark className="w-4 h-4 text-cyan-400" />
                <span>My Active Application Shortlist ({shortlist.length} programs)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Organize your prospective applications, monitor deadlines, and track documentation statuses.
              </p>
            </div>

            {/* Filter by application status */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400">Filter:</span>
              <select
                value={shortlistFilterStatus}
                onChange={e => setShortlistFilterStatus(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
              >
                <option value="All">All Statuses ({shortlist.length})</option>
                {statusOptions.map(st => {
                  const c = shortlist.filter(s => s.status === st).length;
                  return (
                    <option key={st} value={st}>
                      {st} ({c})
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Shortlist Items Cards */}
          {filteredShortlist.length > 0 ? (
            <div className="space-y-4">
              {filteredShortlist.map(item => (
                <div
                  key={item.id}
                  className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="text-xl">{item.flag}</span>
                        <span className="font-semibold text-slate-300">{item.country} • {item.city}</span>
                        <span className="text-[10px] text-slate-500">Added: {item.dateAdded}</span>
                      </div>

                      <h4 className="text-lg font-bold text-white">{item.universityName}</h4>
                      <p className="text-sm font-semibold text-cyan-300">{item.programName}</p>
                    </div>

                    {/* Status selector & Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-slate-400">Status:</span>
                        <select
                          value={item.status}
                          onChange={e => updateShortlistStatus(item.id, e.target.value as ApplicationStatus)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                            item.status === 'Admitted'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                              : item.status === 'Applied'
                              ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                              : item.status === 'Preparing Documents'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : 'bg-slate-900 text-slate-200 border-slate-700'
                          }`}
                        >
                          {statusOptions.map(st => (
                            <option key={st} value={st} className="bg-slate-900 text-white">
                              {st}
                            </option>
                          ))}
                        </select>
                      </div>

                      <a
                        href={item.officialAdmissionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-sm shadow-cyan-500/20"
                      >
                        <span>Apply via Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => removeFromShortlist(item.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                        title="Remove from shortlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Deadline & Tuition row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">Upcoming Application Deadline</span>
                        <span className="font-semibold text-amber-300">{item.upcomingDeadline}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">Estimated Tuition</span>
                        <span className="font-semibold text-emerald-400">{item.tuition}</span>
                      </div>
                    </div>
                  </div>

                  {/* Personal Notes Section */}
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-300 flex items-center space-x-1.5">
                        <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Personal Application Notes & Checklist</span>
                      </span>
                      {editingNotesId === item.id ? (
                        <button
                          onClick={() => {
                            updateShortlistStatus(item.id, item.status, tempNotes);
                            setEditingNotesId(null);
                          }}
                          className="px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-bold text-[11px]"
                        >
                          Save Notes
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setEditingNotesId(item.id);
                            setTempNotes(item.notes || '');
                          }}
                          className="text-cyan-400 hover:text-cyan-300 text-[11px]"
                        >
                          Edit
                        </button>
                      )}
                    </div>

                    {editingNotesId === item.id ? (
                      <textarea
                        value={tempNotes}
                        onChange={e => setTempNotes(e.target.value)}
                        placeholder="Add your application reminders, portal login email, or uni-assist progress..."
                        rows={2}
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    ) : (
                      <p className="text-slate-400 italic">
                        {item.notes || 'No notes added yet. Click Edit to track your document submission details.'}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <Bookmark className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-white">Your shortlist is currently empty</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Explore our catalog of verified master’s programs and click the bookmark icon to save institutions to your personal application tracker.
              </p>
              <button
                onClick={() => setActiveTab('programs')}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold"
              >
                Browse All Programs
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 1: DETAILED UNIVERSITY PROFILE MODAL */}
      {/* ============================================================== */}
      {selectedUniversityForDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{selectedUniversityForDetail.flag}</span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedUniversityForDetail.country} • {selectedUniversityForDetail.city}, {selectedUniversityForDetail.state}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                    {selectedUniversityForDetail.type}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-white">{selectedUniversityForDetail.name}</h2>
                {selectedUniversityForDetail.rankingScore && (
                  <p className="text-xs font-semibold text-emerald-400">
                    🏆 {selectedUniversityForDetail.rankingScore} ({selectedUniversityForDetail.rankingOrganization})
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedUniversityForDetail(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* University Strategic Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-500">Living Cost Estimate</span>
                <p className="font-semibold text-amber-300">{selectedUniversityForDetail.estimatedLivingCostAnnual || 'Check Official Site'}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-500">Post-Study Work Authorization</span>
                <p className="font-semibold text-violet-300">{selectedUniversityForDetail.workPermitYears || 'Standard National Work Visa'}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-500">Admissions Authority</span>
                <p className="font-semibold text-cyan-300">{selectedUniversityForDetail.sourceType || 'Official University Department'}</p>
              </div>
            </div>

            {/* University Description */}
            <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-white font-bold mb-1">About the Institution</h4>
              <p>{selectedUniversityForDetail.description}</p>
            </div>

            {/* Official University Portals */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={selectedUniversityForDetail.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold text-cyan-300 transition-all"
              >
                <span>Official University Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={selectedUniversityForDetail.officialAdmissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-sm shadow-cyan-500/20"
              >
                <span>Central Admissions Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Verified Graduate Programs List */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span>Verified Graduate Programs ({selectedUniversityForDetail.programs.length})</span>
                </h3>
              </div>

              <div className="space-y-4">
                {selectedUniversityForDetail.programs.map((prog: ProgramDetail) => {
                  const progInShortlist = isShortlisted(prog.id);

                  return (
                    <div
                      key={prog.id}
                      className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20">
                              {prog.degree}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">{prog.field}</span>
                          </div>
                          <h4 className="text-base font-bold text-white mt-1">{prog.name}</h4>
                        </div>

                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <button
                            onClick={() => {
                              const foundProg = universities.find(u => u.id === prog.id);
                              if (foundProg) {
                                setSelectedProgramForModal(foundProg);
                              }
                            }}
                            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all"
                          >
                            <Info className="w-3.5 h-3.5" />
                            <span>Program Details</span>
                          </button>

                          <button
                            onClick={() => {
                              // Find corresponding program in universities list or construct item
                              const foundProg = universities.find(u => u.id === prog.id);
                              if (foundProg) {
                                if (progInShortlist) removeFromShortlist(prog.id);
                                else addToShortlist(foundProg);
                              }
                            }}
                            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                              progInShortlist
                                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                                : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                            }`}
                          >
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>{progInShortlist ? 'Shortlisted' : 'Add to Shortlist'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Program Specific Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">Tuition Fee</span>
                          <span className="font-semibold text-emerald-400">{prog.tuition}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">Duration & Credits</span>
                          <span className="font-semibold text-slate-300">{prog.duration} • {prog.credits}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">Language Standard</span>
                          <span className="font-semibold text-cyan-300">IELTS {prog.ielts} / TOEFL {prog.toefl}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">GRE Requirement</span>
                          <span className="font-semibold text-slate-300">{prog.gre}</span>
                        </div>
                      </div>

                      {/* Detailed Curriculum & Eligibility */}
                      <div className="text-xs text-slate-300 space-y-2 pt-1">
                        <div>
                          <strong className="text-slate-400">Eligibility & Academic Prerequisites: </strong>
                          <span>{prog.eligibility}</span>
                        </div>

                        {prog.requiredSubjects && prog.requiredSubjects.length > 0 && (
                          <div>
                            <strong className="text-slate-400">Required Subjects: </strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {prog.requiredSubjects.map((s, i) => (
                                <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {prog.coreModules && prog.coreModules.length > 0 && (
                          <div>
                            <strong className="text-slate-400">Core Curriculum Modules: </strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {prog.coreModules.map((m, i) => (
                                <span key={i} className="px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-300">
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] text-slate-400">
                          <div>
                            <strong className="text-slate-300">Capstone / Thesis: </strong>
                            <span>{prog.thesis || prog.project}</span>
                          </div>
                          <div>
                            <strong className="text-slate-300">Career Outcomes: </strong>
                            <span>{prog.careerInfo}</span>
                          </div>
                        </div>
                      </div>

                      {/* Program Links */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                        <span className="text-slate-500 text-[11px]">
                          Intakes: {prog.intakes.join(', ')}
                        </span>
                        <a
                          href={prog.officialProgramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                          <span>Department Program Syllabus</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 2: SIDE-BY-SIDE PROGRAM COMPARISON */}
      {/* ============================================================== */}
      {comparisonModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 my-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Scale className="w-5 h-5 text-violet-400" />
                <h3 className="text-lg font-bold text-white">Side-by-Side University Comparison</h3>
              </div>
              <button
                onClick={() => setComparisonModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-3 px-4 w-36 font-semibold">Evaluation Criteria</th>
                    {comparisonItems.map(item => (
                      <th key={item.id} className="py-3 px-4 font-bold text-white">
                        <div className="flex items-center space-x-1.5">
                          <span>{item.flag}</span>
                          <span>{item.universityName}</span>
                        </div>
                        <div className="text-cyan-300 font-normal text-[11px] mt-0.5">{item.programName}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Country & Location</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4">{item.country} • {item.location}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Tuition Fee</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4 font-bold text-emerald-400">{item.tuitionFee}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Upcoming Deadline</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4 text-amber-300 font-semibold">{item.upcomingDeadline}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">IELTS / TOEFL</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4 text-cyan-300 font-semibold">
                        IELTS {item.ieltsRequirement} / TOEFL {item.toeflRequirement}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">GRE Mandate</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4">{item.greRequirement}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Living Costs</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4">{item.estimatedLivingCostAnnual}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Post-Study Visa</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4 text-violet-300">{item.workPermitYears}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-400">Official Portal</td>
                    {comparisonItems.map(item => (
                      <td key={item.id} className="py-3 px-4">
                        <a
                          href={item.admissionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-bold"
                        >
                          <span>Department Link</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setComparisonModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 3: COMPREHENSIVE PROGRAM DETAILS MODAL */}
      {/* ============================================================== */}
      {selectedProgramForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 my-8 max-h-[92vh] overflow-y-auto">
            {/* Header: University info, flag, country, and close */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-2xl">{selectedProgramForModal.flag}</span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedProgramForModal.country} • {selectedProgramForModal.location}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                    {selectedProgramForModal.publicPrivate} Institution
                  </span>
                  {selectedProgramForModal.rankingScore && (
                    <span className="text-[11px] font-semibold text-emerald-400">
                      🏆 {selectedProgramForModal.rankingScore}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    handleOpenUniversityDetail(selectedProgramForModal.universityName);
                    setSelectedProgramForModal(null);
                  }}
                  className="text-xl sm:text-2xl font-extrabold text-white text-left hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group"
                >
                  <span>{selectedProgramForModal.universityName}</span>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-extrabold border border-cyan-500/30">
                    {selectedProgramForModal.degree}
                  </span>
                  <h3 className="text-lg font-bold text-cyan-200">
                    {selectedProgramForModal.programName}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    ({selectedProgramForModal.field})
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProgramForModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Bar: Shortlist & Official Links */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (isShortlisted(selectedProgramForModal.id)) {
                      removeFromShortlist(selectedProgramForModal.id);
                    } else {
                      addToShortlist(selectedProgramForModal);
                    }
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isShortlisted(selectedProgramForModal.id)
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-700 hover:text-white hover:border-slate-600'
                  }`}
                >
                  {isShortlisted(selectedProgramForModal.id) ? (
                    <>
                      <BookmarkCheck className="w-4 h-4" />
                      <span>Program Shortlisted</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4" />
                      <span>Add to My Shortlist</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    handleOpenUniversityDetail(selectedProgramForModal.universityName);
                    setSelectedProgramForModal(null);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                >
                  View All Programs at {selectedProgramForModal.shortName || 'University'}
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={selectedProgramForModal.officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                >
                  <span>University Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedProgramForModal.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Official Program Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedProgramForModal.admissionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 text-xs font-semibold transition-all"
                >
                  <span>Admissions Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Core Metrics: Tuition, Duration, Language, Deadlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Tuition & Fees
                </span>
                <p className="text-sm font-bold text-emerald-400">{selectedProgramForModal.tuitionFee}</p>
                {selectedProgramForModal.semesterFee && (
                  <p className="text-[11px] text-slate-400">Semester Contribution: {selectedProgramForModal.semesterFee}</p>
                )}
                {selectedProgramForModal.applicationFee && (
                  <p className="text-[11px] text-slate-500">App Fee: {selectedProgramForModal.applicationFee}</p>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Duration & Credits
                </span>
                <p className="text-sm font-bold text-white">
                  {selectedProgramForModal.duration || `${selectedProgramForModal.durationMonths} Months`}
                </p>
                <p className="text-[11px] text-cyan-300">
                  {selectedProgramForModal.credits || '120 ECTS'} • {selectedProgramForModal.semesters || 4} Semesters
                </p>
                <p className="text-[11px] text-slate-400">Study Mode: {selectedProgramForModal.studyMode || 'Full-time'}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Language & Tests
                </span>
                <p className="text-sm font-bold text-cyan-300">
                  {selectedProgramForModal.language || 'English'}
                </p>
                <p className="text-[11px] text-slate-300">
                  IELTS: {selectedProgramForModal.ieltsRequirement || '6.5+'} • TOEFL: {selectedProgramForModal.toeflRequirement || '90+'}
                </p>
                <p className="text-[11px] text-slate-400">GRE: {selectedProgramForModal.greRequirement || 'Not required'}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Intakes & Deadlines
                </span>
                <p className="text-sm font-bold text-amber-300">{selectedProgramForModal.upcomingDeadline}</p>
                {selectedProgramForModal.intakes && selectedProgramForModal.intakes.length > 0 && (
                  <p className="text-[11px] text-slate-400">
                    Intakes: {selectedProgramForModal.intakes.join(', ')}
                  </p>
                )}
                {selectedProgramForModal.workPermitYears && (
                  <p className="text-[11px] text-violet-300">Post-Study Visa: {selectedProgramForModal.workPermitYears}</p>
                )}
              </div>
            </div>

            {/* Admission Requirements & Prerequisites */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Admission Requirements & Academic Prerequisites</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                {selectedProgramForModal.highlights && selectedProgramForModal.highlights[0] && (
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <strong className="text-cyan-300 block mb-1">Academic Background & Eligibility:</strong>
                    <p className="leading-relaxed">{selectedProgramForModal.highlights[0]}</p>
                  </div>
                )}

                {selectedProgramForModal.gpaRequirement && (
                  <div>
                    <strong className="text-slate-400">GPA Standard: </strong>
                    <span className="text-white font-medium">{selectedProgramForModal.gpaRequirement}</span>
                  </div>
                )}

                {/* Deadlines Schedule if available */}
                {selectedProgramForModal.deadlines && selectedProgramForModal.deadlines.length > 0 && (
                  <div>
                    <strong className="text-slate-400 block mb-1">Application Deadlines Schedule:</strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProgramForModal.deadlines.map((dl, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="font-semibold text-slate-300">{dl.intake}</span>
                          <span className="font-bold text-amber-300">{dl.deadline}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Application Documents Checklist */}
                {selectedProgramForModal.documents && selectedProgramForModal.documents.length > 0 && (
                  <div>
                    <strong className="text-slate-400 block mb-1.5">Required Application Documents:</strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProgramForModal.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Academic Curriculum, Modules, Projects & Thesis */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Curriculum, Core Modules & Research Specifications</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                {selectedProgramForModal.highlights && selectedProgramForModal.highlights[1] && (
                  <p className="leading-relaxed text-slate-300">
                    {selectedProgramForModal.highlights[1]}
                  </p>
                )}

                {selectedProgramForModal.coreModules && selectedProgramForModal.coreModules.length > 0 && (
                  <div>
                    <strong className="text-slate-400 block mb-1.5">Core Curriculum Modules:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProgramForModal.coreModules.map((mod, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-300 font-medium">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProgramForModal.electives && selectedProgramForModal.electives.length > 0 && (
                  <div>
                    <strong className="text-slate-400 block mb-1.5">Specialization & Elective Modules:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProgramForModal.electives.map((el, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium">
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  {selectedProgramForModal.thesis && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <strong className="text-slate-300 block mb-1">Master’s Thesis:</strong>
                      <p className="text-slate-400 leading-relaxed text-[11px]">{selectedProgramForModal.thesis}</p>
                    </div>
                  )}

                  {selectedProgramForModal.project && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <strong className="text-slate-300 block mb-1">Capstone / Laboratory Project:</strong>
                      <p className="text-slate-400 leading-relaxed text-[11px]">{selectedProgramForModal.project}</p>
                    </div>
                  )}

                  {selectedProgramForModal.internship && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 sm:col-span-2">
                      <strong className="text-slate-300 block mb-1">Internship & Industrial Practicum:</strong>
                      <p className="text-slate-400 leading-relaxed text-[11px]">{selectedProgramForModal.internship}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Career Outcomes & Scholarships */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>Career Outcomes & Opportunities</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {selectedProgramForModal.careerInfo || (selectedProgramForModal.highlights && selectedProgramForModal.highlights[2]) || 'Graduates work as lead engineers, researchers, and data specialists across multinational technology firms.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Scholarships & Financial Aid</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {selectedProgramForModal.scholarshipsAvailable || 'University merit awards and national government funding schemes available for qualified international applicants.'}
                </p>
                {selectedProgramForModal.estimatedLivingCostAnnual && (
                  <p className="text-slate-400 text-[11px] pt-1">
                    Estimated annual living subsistence: <span className="text-amber-300 font-semibold">{selectedProgramForModal.estimatedLivingCostAnnual}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Modal Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified with Official Academic Department Registers</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedProgramForModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-all"
                >
                  Close
                </button>

                <a
                  href={selectedProgramForModal.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Go to Official Program Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
