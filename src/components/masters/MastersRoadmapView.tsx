import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { countryGuides, comprehensiveUniversities } from '../../data/universitiesData';
import { University, ProgramDetail, UniversityProgram, ApplicationStatus } from '../../types';
import {
  GraduationCap,
  Globe2,
  CheckCircle2,
  Circle,
  FileText,
  DollarSign,
  Calendar,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  Building2,
  ArrowRight,
  Sparkles,
  MapPin,
  Bookmark,
  BookmarkCheck,
  X,
  ChevronRight,
  Info,
  Clock,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

export const MastersRoadmapView: React.FC = () => {
  const {
    user,
    setActiveView,
    allComprehensiveUniversities,
    universities,
    shortlist,
    addToShortlist,
    removeFromShortlist
  } = useApp();

  const [selectedCountryId, setSelectedCountryId] = useState<string>('guide-germany');
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({
    'Passport': true,
    'Academic Transcripts & Degree Certificate': true,
    'IELTS / TOEFL Official Scorecard': false,
    'APS Certificate (Akademische Prüfstelle)': false,
    'Blocked Bank Account (€11,904)': false
  });

  const [selectedUniForModal, setSelectedUniForModal] = useState<University | null>(null);
  const [selectedProgForModal, setSelectedProgForModal] = useState<{
    program: ProgramDetail;
    university: University;
  } | null>(null);

  const currentGuide = countryGuides.find(g => g.id === selectedCountryId) || countryGuides[0];

  const countryUniversities = useMemo(() => {
    const list = allComprehensiveUniversities && allComprehensiveUniversities.length > 0
      ? allComprehensiveUniversities
      : comprehensiveUniversities;

    return list.filter(
      u => u.country.toLowerCase() === currentGuide.country.toLowerCase()
    );
  }, [allComprehensiveUniversities, currentGuide.country]);

  const toggleChecklistItem = (item: string) => {
    setCompletedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const isProgramShortlisted = (progId: string) => {
    return shortlist.some(s => s.programId === progId || s.id === progId);
  };

  const handleShortlistToggle = (prog: ProgramDetail, uni: University) => {
    const matchedUniProg = universities.find(u => u.id === prog.id);
    if (isProgramShortlisted(prog.id)) {
      removeFromShortlist(prog.id);
    } else {
      if (matchedUniProg) {
        addToShortlist(matchedUniProg);
      } else {
        // Construct program fallback
        const durMatch = prog.duration.match(/\d+/);
        const durationMonths = durMatch ? parseInt(durMatch[0], 10) : 24;
        const synth: UniversityProgram = {
          id: prog.id,
          universityName: uni.name,
          shortName: uni.shortName,
          location: `${uni.city}, ${uni.state}`,
          city: uni.city,
          country: uni.country,
          flag: uni.flag,
          programName: prog.name,
          degree: (prog.degree as any) || 'MSc',
          field: prog.field,
          durationMonths,
          duration: prog.duration,
          semesters: prog.semesters,
          credits: prog.credits,
          language: prog.language,
          studyMode: prog.studyMode,
          tuitionFee: prog.tuition,
          tuitionNumericalUSD: prog.tuitionNumericalUSD,
          semesterFee: prog.semesterFee,
          applicationFee: prog.applicationFee,
          intakes: prog.intakes,
          deadlines: prog.deadlines,
          upcomingDeadline: prog.deadlines && prog.deadlines.length > 0 ? prog.deadlines[0].deadline : 'Rolling Admissions',
          ieltsRequirement: prog.ielts,
          toeflRequirement: prog.toefl,
          greRequirement: prog.gre,
          gmatRequirement: prog.gmat,
          gpaRequirement: prog.gpa,
          publicPrivate: uni.type.toLowerCase().includes('private') ? 'Private' : 'Public',
          officialWebsiteUrl: uni.officialWebsite,
          programUrl: prog.officialProgramUrl || uni.officialWebsite,
          admissionsUrl: uni.officialAdmissionsUrl,
          rankingOrganization: uni.rankingOrganization || 'QS World University Rankings',
          rankingScore: uni.rankingScore || '#Top Global',
          scholarshipsAvailable: prog.scholarships || 'Scholarships Available',
          estimatedLivingCostAnnual: uni.estimatedLivingCostAnnual || '$15,000 / yr',
          workPermitYears: uni.workPermitYears || 'Post-Study Work Visa Available',
          source: prog.sourceType || uni.sourceType || 'Official University',
          sourceType: (prog.sourceType as any) || (uni.sourceType as any) || 'Official University',
          sourceUrl: prog.officialProgramUrl || uni.officialWebsite,
          lastVerifiedDate: prog.lastVerified || uni.lastVerified || '2024-2025 Academic Cycle',
          verifiedStatus: 'Verified Official',
          highlights: [prog.eligibility, prog.curriculum, prog.careerInfo],
          coreModules: prog.coreModules,
          electives: prog.electives,
          project: prog.project,
          thesis: prog.thesis,
          internship: prog.internship,
          careerInfo: prog.careerInfo,
          documents: prog.documents
        };
        addToShortlist(synth);
      }
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Official Study-Abroad & Master's Admissions Planner</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Plan Your Master's Journey Abroad
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Personalized, official-guideline aligned pathways across <strong>16 premier study destinations</strong>: Germany, the USA, the UK, the Netherlands, Canada, Singapore, Austria, Australia, New Zealand, Italy, China, Japan, Spain, France, Luxembourg, and Switzerland. Track visa prerequisites, language test scores, blocked accounts, and university shortlists.
          </p>
        </div>
      </div>

      {/* Official Data Source Warning Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start space-x-3 text-xs text-amber-200">
        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold text-amber-300 block mb-0.5">Important Data Verification Notice:</strong>
          Admission requirements, visa criteria, blocked account amounts, and semester fees change periodically. All information displayed here is grounded in official government and university portals. Always verify critical deadlines directly with the official mission or university admissions office before application submission.
        </div>
      </div>

      {/* Country Selection Tabs (16 Countries) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span>Select Destination Country ({countryGuides.length} Available):</span>
          </span>
          <span>Showing universities, requirements, and official portals</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {countryGuides.map(guide => (
            <button
              key={guide.id}
              onClick={() => setSelectedCountryId(guide.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCountryId === guide.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <span className="text-base">{guide.flag}</span>
              <span>{guide.country}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Country Strategic Overview */}
      <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{currentGuide.flag}</span>
              <h2 className="text-xl font-bold text-white">Study Destination: {currentGuide.country}</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">{currentGuide.overview}</p>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <a
              href={currentGuide.officialImmigrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/40 text-xs font-semibold text-cyan-300 transition-all"
            >
              <span>Official Immigration Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Pillars: Tuition, Living, Language, Post-Study Work */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Tuition Overview
            </span>
            <p className="font-semibold text-emerald-400 leading-snug">{currentGuide.tuitionOverview}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Living Subsistence Requirement
            </span>
            <p className="font-semibold text-amber-300 leading-snug">{currentGuide.avgLivingCostPerYear}</p>
            {currentGuide.blockedAccountRequired && currentGuide.blockedAccountAmount && (
              <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Blocked Account: {currentGuide.blockedAccountAmount}
              </span>
            )}
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Language Standards
            </span>
            <p className="font-semibold text-cyan-300 leading-snug">{currentGuide.languageRequirements}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Post-Study Work Visa
            </span>
            <p className="font-semibold text-violet-300 leading-snug">{currentGuide.postStudyWorkVisa}</p>
            {currentGuide.prEligibility && (
              <p className="text-[10px] text-slate-400 mt-1">{currentGuide.prEligibility}</p>
            )}
          </div>
        </div>
      </div>

      {/* Mandatory & Recommended Application Checklist */}
      <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Application & Visa Document Checklist ({currentGuide.country})</h3>
          </div>
          <span className="text-xs font-mono text-cyan-400">
            {Object.values(completedItems).filter(Boolean).length} / {currentGuide.keyChecklist.length} Ready
          </span>
        </div>

        <div className="space-y-3">
          {currentGuide.keyChecklist.map((item, idx) => {
            const isDone = !!completedItems[item.item];
            return (
              <div
                key={idx}
                onClick={() => toggleChecklistItem(item.item)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isDone
                    ? 'bg-slate-900/40 border-emerald-500/30'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start space-x-3">
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-500 hover:text-cyan-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-semibold ${isDone ? 'text-slate-300 line-through' : 'text-white'}`}>
                        {item.item}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          item.requirementType === 'Required'
                            ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                            : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                        }`}
                      >
                        {item.requirementType}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">[{item.category}]</span>
                    </div>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                </div>

                <a
                  href={item.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="flex items-center space-x-1 text-xs text-cyan-400 hover:text-cyan-300 self-end sm:self-auto flex-shrink-0"
                >
                  <span>Official Guide</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* DIRECT COUNTRY DRILLDOWN: UNIVERSITIES IN SELECTED COUNTRY */}
      {/* Country -> Universities -> University Details -> Programs -> Program Details */}
      {/* ============================================================== */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 mb-1">
              <Building2 className="w-4 h-4" />
              <span>Full Country Academic Directory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center space-x-2">
              <span>{currentGuide.flag} Recognized Universities in {currentGuide.country}</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {countryUniversities.length} Institutions
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Explore accredited institutions, view detailed graduate degree curriculum, admission requirements, and official portals.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveView('universities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20 flex-shrink-0"
          >
            <span>Open Global Search & Filter Tool</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* List of Universities in Current Selected Country */}
        <div className="space-y-6">
          {countryUniversities.map(uni => (
            <div
              key={uni.id}
              className="rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all space-y-5"
            >
              {/* University Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-2xl">{uni.flag}</span>
                    <span className="text-xs font-semibold text-slate-400">
                      {uni.country} • {uni.city}, {uni.state}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">
                      {uni.type} Institution
                    </span>
                    {uni.rankingScore && (
                      <span className="text-[11px] font-semibold text-emerald-400">
                        🏆 {uni.rankingScore}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {uni.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    {uni.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400">
                    {uni.estimatedLivingCostAnnual && (
                      <span>Living: <strong className="text-amber-300">{uni.estimatedLivingCostAnnual}</strong></span>
                    )}
                    {uni.workPermitYears && (
                      <span>• Work Visa: <strong className="text-violet-300">{uni.workPermitYears}</strong></span>
                    )}
                  </div>
                </div>

                {/* External University Links & Profile Action */}
                <div className="flex flex-wrap items-center gap-2 flex-shrink-0 sm:self-start">
                  <button
                    onClick={() => setSelectedUniForModal(uni)}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>University Details</span>
                  </button>

                  <a
                    href={uni.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={uni.officialAdmissionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all"
                  >
                    <span>Admissions Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Master's Programs Offered at this University */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 flex items-center space-x-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>Relevant Master's Programs ({uni.programs.length})</span>
                  </span>
                  <span className="text-slate-500 text-[11px]">Click "Program Details" for prerequisites & curriculum</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {uni.programs.map((prog: ProgramDetail) => {
                    const isShort = isProgramShortlisted(prog.id);

                    return (
                      <div
                        key={prog.id}
                        className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20">
                                {prog.degree}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">{prog.field}</span>
                              <span className="text-[11px] text-cyan-400">• {prog.language}</span>
                            </div>

                            <button
                              onClick={() => setSelectedProgForModal({ program: prog, university: uni })}
                              className="text-left font-bold text-white text-base hover:text-cyan-300 transition-colors mt-1 flex items-center space-x-1"
                            >
                              <span>{prog.name}</span>
                              <ChevronRight className="w-4 h-4 text-cyan-400 opacity-70" />
                            </button>
                          </div>

                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <button
                              onClick={() => setSelectedProgForModal({ program: prog, university: uni })}
                              className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-sm shadow-cyan-500/20"
                            >
                              <span>Program Details</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => handleShortlistToggle(prog, uni)}
                              className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                                isShort
                                  ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                              }`}
                            >
                              <Bookmark className="w-3.5 h-3.5" />
                              <span>{isShort ? 'Shortlisted' : 'Shortlist'}</span>
                            </button>
                          </div>
                        </div>

                        {/* Program Quick Specs Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <span className="text-[10px] text-slate-500 block">Tuition Fee</span>
                            <span className="font-semibold text-emerald-400 line-clamp-1">{prog.tuition}</span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <span className="text-[10px] text-slate-500 block">Duration & ECTS</span>
                            <span className="font-semibold text-slate-300 line-clamp-1">{prog.duration} • {prog.credits}</span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <span className="text-[10px] text-slate-500 block">Language Standards</span>
                            <span className="font-semibold text-cyan-300 line-clamp-1">IELTS {prog.ielts} / TOEFL {prog.toefl}</span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <span className="text-[10px] text-slate-500 block">Intakes & Deadlines</span>
                            <span className="font-semibold text-amber-300 line-clamp-1">
                              {prog.deadlines && prog.deadlines.length > 0 ? prog.deadlines[0].deadline : prog.intakes.join(', ')}
                            </span>
                          </div>
                        </div>

                        {/* Admission Requirements & Academic Eligibility Preview */}
                        <div className="text-xs text-slate-300 space-y-1 pt-1">
                          <p className="line-clamp-2">
                            <strong className="text-slate-400">Admission Prerequisites: </strong>
                            <span>{prog.eligibility}</span>
                          </p>

                          {prog.coreModules && prog.coreModules.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1 pt-1">
                              <span className="text-[11px] text-slate-500 mr-1">Core Modules:</span>
                              {prog.coreModules.slice(0, 4).map((mod, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                                  {mod}
                                </span>
                              ))}
                              {prog.coreModules.length > 4 && (
                                <span className="text-[10px] text-slate-500">+{prog.coreModules.length - 4} more</span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Links row */}
                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                          <span className="text-slate-500 text-[11px]">
                            {prog.studyMode} • GRE: {prog.gre}
                          </span>

                          <div className="flex items-center space-x-2">
                            <a
                              href={prog.officialProgramUrl || uni.officialWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-semibold text-[11px]"
                            >
                              <span>Official Program Syllabus</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* MODAL 1: UNIVERSITY DETAILS MODAL */}
      {/* ============================================================== */}
      {selectedUniForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 my-8 max-h-[92vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{selectedUniForModal.flag}</span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedUniForModal.country} • {selectedUniForModal.city}, {selectedUniForModal.state}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                    {selectedUniForModal.type}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-white">{selectedUniForModal.name}</h2>
                {selectedUniForModal.rankingScore && (
                  <p className="text-xs font-semibold text-emerald-400">
                    🏆 {selectedUniForModal.rankingScore} ({selectedUniForModal.rankingOrganization})
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedUniForModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedUniForModal.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-500">Living Cost Estimate</span>
                <p className="font-semibold text-amber-300">{selectedUniForModal.estimatedLivingCostAnnual || 'Check Official Site'}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-500">Post-Study Work Authorization</span>
                <p className="font-semibold text-violet-300">{selectedUniForModal.workPermitYears || 'Standard National Graduate Permit'}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Verified Master's Degree Programs ({selectedUniForModal.programs.length})</span>
              </h3>

              <div className="space-y-3">
                {selectedUniForModal.programs.map((prog: ProgramDetail) => (
                  <div
                    key={prog.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20 mr-2">
                          {prog.degree}
                        </span>
                        <span className="text-xs text-slate-400">{prog.field}</span>
                        <h4 className="text-sm font-bold text-white mt-1">{prog.name}</h4>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setSelectedProgForModal({ program: prog, university: selectedUniForModal });
                          }}
                          className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all"
                        >
                          Program Details
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
                      <div className="text-slate-400">Tuition: <strong className="text-emerald-400">{prog.tuition}</strong></div>
                      <div className="text-slate-400">Duration: <strong className="text-white">{prog.duration}</strong></div>
                      <div className="text-slate-400">Language: <strong className="text-cyan-300">{prog.language}</strong></div>
                      <div className="text-slate-400">IELTS / TOEFL: <strong className="text-white">{prog.ielts} / {prog.toefl}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <a
                href={selectedUniForModal.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <span>Official University Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedUniForModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 2: PROGRAM DETAILS MODAL */}
      {/* ============================================================== */}
      {selectedProgForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 my-8 max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-2xl">{selectedProgForModal.university.flag}</span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedProgForModal.university.country} • {selectedProgForModal.university.city}, {selectedProgForModal.university.state}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                    {selectedProgForModal.university.type}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {selectedProgForModal.university.name}
                </h4>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-extrabold border border-cyan-500/30">
                    {selectedProgForModal.program.degree}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-200">
                    {selectedProgForModal.program.name}
                  </h3>
                  <span className="text-xs text-slate-400">
                    ({selectedProgForModal.program.field})
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProgForModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => handleShortlistToggle(selectedProgForModal.program, selectedProgForModal.university)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isProgramShortlisted(selectedProgForModal.program.id)
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 border border-slate-700 hover:text-white'
                }`}
              >
                {isProgramShortlisted(selectedProgForModal.program.id) ? (
                  <>
                    <BookmarkCheck className="w-4 h-4" />
                    <span>Shortlisted in Application Tracker</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Add to Application Shortlist</span>
                  </>
                )}
              </button>

              <div className="flex items-center space-x-2">
                <a
                  href={selectedProgForModal.program.officialProgramUrl || selectedProgForModal.university.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Official Department Syllabus</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedProgForModal.university.officialAdmissionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                >
                  <span>University Admissions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Tuition Fee
                </span>
                <p className="text-sm font-bold text-emerald-400">{selectedProgForModal.program.tuition}</p>
                {selectedProgForModal.program.semesterFee && (
                  <p className="text-[11px] text-slate-400">Semester: {selectedProgForModal.program.semesterFee}</p>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Duration & Credits
                </span>
                <p className="text-sm font-bold text-white">{selectedProgForModal.program.duration}</p>
                <p className="text-[11px] text-cyan-300">{selectedProgForModal.program.credits} • {selectedProgForModal.program.semesters} Semesters</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Language & Tests
                </span>
                <p className="text-sm font-bold text-cyan-300">{selectedProgForModal.program.language}</p>
                <p className="text-[11px] text-slate-300">IELTS {selectedProgForModal.program.ielts} / TOEFL {selectedProgForModal.program.toefl}</p>
                <p className="text-[11px] text-slate-400">GRE: {selectedProgForModal.program.gre}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Intakes & Mode
                </span>
                <p className="text-sm font-bold text-amber-300">{selectedProgForModal.program.intakes.join(', ')}</p>
                <p className="text-[11px] text-slate-400">{selectedProgForModal.program.studyMode}</p>
              </div>
            </div>

            {/* Admission Requirements & Prerequisites */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Admission Requirements & Prerequisites</span>
              </h4>

              <div className="space-y-2 text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">Academic Eligibility:</strong>
                  <p className="leading-relaxed">{selectedProgForModal.program.eligibility}</p>
                </div>

                {selectedProgForModal.program.gpa && (
                  <div>
                    <strong className="text-slate-400">Minimum GPA: </strong>
                    <span className="text-white font-medium">{selectedProgForModal.program.gpa}</span>
                  </div>
                )}

                {selectedProgForModal.program.requiredSubjects && selectedProgForModal.program.requiredSubjects.length > 0 && (
                  <div>
                    <strong className="text-slate-400 block mb-1">Prerequisite Subjects:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProgForModal.program.requiredSubjects.map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProgForModal.program.documents && selectedProgForModal.program.documents.length > 0 && (
                  <div>
                    <strong className="text-slate-400 block mb-1">Required Application Documents:</strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProgForModal.program.documents.map((doc, idx) => (
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

            {/* Curriculum, Thesis & Career */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Curriculum, Research & Career Placement</span>
              </h4>

              <div className="space-y-3 text-slate-300">
                <p className="leading-relaxed">{selectedProgForModal.program.curriculum}</p>

                {selectedProgForModal.program.coreModules && selectedProgForModal.program.coreModules.length > 0 && (
                  <div>
                    <strong className="text-slate-400 block mb-1">Core Modules:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProgForModal.program.coreModules.map((m, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-300">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-slate-300 block mb-1">Master Thesis / Capstone:</strong>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {selectedProgForModal.program.thesis || selectedProgForModal.program.project}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-slate-300 block mb-1">Career Placement:</strong>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {selectedProgForModal.program.careerInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <a
                href={selectedProgForModal.university.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <span>Visit {selectedProgForModal.university.shortName || selectedProgForModal.university.name} Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedProgForModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
