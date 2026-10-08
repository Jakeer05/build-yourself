import React, { useState, useMemo } from 'react';
import { initialLearningResources } from '../../data/learningResourcesData';
import { LearningResource, ResourceCategory, ResourceType } from '../../types';
import { ResourceCard } from './ResourceCard';
import { VideoPlayerModal } from './VideoPlayerModal';
import {
  Search,
  Filter,
  Youtube,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Globe2,
  GraduationCap,
  Map,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ResourcesExplorerView: React.FC = () => {
  const { setActiveView } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [officialOnly, setOfficialOnly] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<LearningResource | null>(null);

  const categories: { key: string; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Resources', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: 'programming', label: 'Programming', icon: <Code2 className="w-3.5 h-3.5" /> },
    { key: 'web', label: 'Web Dev', icon: <Globe2 className="w-3.5 h-3.5" /> },
    { key: 'data', label: 'Data & SQL', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: 'roadmap', label: 'Career Roadmaps', icon: <Map className="w-3.5 h-3.5" /> },
    { key: 'language', label: 'Languages', icon: <Globe2 className="w-3.5 h-3.5" /> },
    { key: 'masters', label: 'Master’s Abroad', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { key: 'visa', label: 'Visas & Immigration', icon: <ShieldCheck className="w-3.5 h-3.5" /> }
  ];

  const filteredResources = useMemo(() => {
    return initialLearningResources.filter(res => {
      // Category filter
      if (selectedCategory !== 'all' && res.category !== selectedCategory) {
        return false;
      }

      // Type filter
      if (selectedType !== 'all' && res.resourceType !== selectedType) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && res.difficulty !== selectedDifficulty && res.difficulty !== 'All Levels') {
        return false;
      }

      // Official only
      if (officialOnly && !res.official) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(query);
        const matchesDesc = res.description.toLowerCase().includes(query);
        const matchesTech = res.technology?.toLowerCase().includes(query);
        const matchesLang = res.language?.toLowerCase().includes(query);
        const matchesTags = res.tags.some(t => t.toLowerCase().includes(query));
        const matchesChannel = res.channelName?.toLowerCase().includes(query);

        if (!matchesTitle && !matchesDesc && !matchesTech && !matchesLang && !matchesTags && !matchesChannel) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedDifficulty, officialOnly]);

  const handleAskAiAboutTopic = (topic: string) => {
    setActiveView('ai-tutor');
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/20 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Academic & Industry Reference Library</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learning Resources & Documentation Hub
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Verified official documentation, curated topic-specific YouTube masterclasses, and external practice portals to support your <strong>Build Yourself</strong> curriculum.
          </p>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 rounded-2xl cosmic-card border border-slate-800 space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search YouTube tutorials, official documentation, German cases, Python functions, Visa guidance..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 shadow-inner"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Sub-Filters: Type, Difficulty, Official Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Type Filter */}
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">Type:</span>
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Formats</option>
                <option value="video">YouTube Videos</option>
                <option value="documentation">Official Docs</option>
                <option value="practice">Practice Tools</option>
                <option value="visa">Visa Guides</option>
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">Level:</span>
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Seniorities</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Official Only Checkbox */}
          <label className="flex items-center space-x-2 cursor-pointer text-slate-300 select-none">
            <input
              type="checkbox"
              checked={officialOnly}
              onChange={e => setOfficialOnly(e.target.checked)}
              className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0"
            />
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Primary Sources Only</span>
            </span>
          </label>
        </div>
      </div>

      {/* Results Count & Disclaimer */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Showing <strong>{filteredResources.length}</strong> verified learning resources</span>
        <span className="hidden sm:inline text-slate-500 text-[11px]">
          Always verify current visa requirements on official government websites.
        </span>
      </div>

      {/* Resources Cards Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map(res => (
            <ResourceCard
              key={res.id}
              resource={res}
              onWatchVideo={setActiveVideo}
              onAskAi={handleAskAiAboutTopic}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl cosmic-card border border-slate-800 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No matching resources found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query or selecting a broader category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedType('all');
              setOfficialOnly(false);
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Video Modal Player */}
      <VideoPlayerModal
        resource={activeVideo}
        onClose={() => setActiveVideo(null)}
        onAskAi={handleAskAiAboutTopic}
      />
    </div>
  );
};
