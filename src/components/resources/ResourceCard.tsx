import React from 'react';
import { LearningResource } from '../../types';
import {
  Play,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
  Globe2,
  Youtube,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface ResourceCardProps {
  resource: LearningResource;
  onWatchVideo?: (resource: LearningResource) => void;
  onAskAi?: (topic: string) => void;
  compact?: boolean;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  onWatchVideo,
  onAskAi,
  compact = false
}) => {
  const { setActiveView } = useApp();

  const handleAskAi = () => {
    if (onAskAi) {
      onAskAi(resource.title);
    } else {
      setActiveView('ai-tutor');
    }
  };

  const isVideo = resource.resourceType === 'video';
  const isDoc = resource.resourceType === 'documentation';
  const isPractice = resource.resourceType === 'practice';
  const isVisa = resource.resourceType === 'visa';

  return (
    <div className={`rounded-2xl cosmic-card border transition-all duration-200 flex flex-col justify-between ${
      resource.official
        ? 'border-cyan-500/30 hover:border-cyan-500/50 bg-slate-900/80 shadow-md'
        : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
    } ${compact ? 'p-4 space-y-3' : 'p-5 space-y-4'}`}>
      {/* Top Meta Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-1.5 flex-wrap gap-1">
            {isVideo && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                <Youtube className="w-3 h-3 text-rose-400" />
                <span>YouTube Video</span>
              </span>
            )}
            {isDoc && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                <BookOpen className="w-3 h-3 text-cyan-400" />
                <span>Official Documentation</span>
              </span>
            )}
            {isPractice && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <Globe2 className="w-3 h-3 text-emerald-400" />
                <span>Daily Practice</span>
              </span>
            )}
            {isVisa && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>Visa & Government</span>
              </span>
            )}

            {resource.technology && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/60">
                {resource.technology}
              </span>
            )}
            {resource.level && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800/80 text-slate-400">
                {resource.level}
              </span>
            )}
          </div>

          {resource.official ? (
            <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
              <ShieldCheck className="w-3 h-3" />
              <span>Official Source</span>
            </span>
          ) : resource.verified ? (
            <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified</span>
            </span>
          ) : null}
        </div>

        {/* Title */}
        <h4 className={`font-bold text-white leading-snug hover:text-cyan-300 transition-colors ${compact ? 'text-xs' : 'text-sm'}`}>
          {resource.title}
        </h4>

        {/* Channel / Provider & Duration */}
        <div className="flex items-center space-x-3 text-[11px] text-slate-400 font-medium">
          {resource.channelName && (
            <span>By <strong className="text-slate-300">{resource.channelName}</strong></span>
          )}
          {resource.provider && !resource.channelName && (
            <span>Provider: <strong className="text-slate-300">{resource.provider}</strong></span>
          )}
          {resource.duration && (
            <span className="flex items-center space-x-1 text-slate-400">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>{resource.duration}</span>
            </span>
          )}
        </div>

        {/* Description */}
        <p className={`text-slate-300 leading-relaxed line-clamp-2 ${compact ? 'text-[11px]' : 'text-xs'}`}>
          {resource.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          {isVideo ? (
            <button
              onClick={() => onWatchVideo ? onWatchVideo(resource) : window.open(resource.url, '_blank')}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Watch Video</span>
            </button>
          ) : isDoc ? (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md shadow-cyan-600/20 transition-all"
            >
              <BookOpen className="w-3 h-3" />
              <span>Official Documentation</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          ) : isPractice ? (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
            >
              <Globe2 className="w-3 h-3" />
              <span>Practice on Duolingo</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          ) : (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Visit Official Source</span>
            </a>
          )}

          {isVideo && (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Open directly on YouTube"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Ask AI Context Button */}
        <button
          onClick={handleAskAi}
          className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold text-cyan-300 hover:text-white bg-slate-800/80 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/30 transition-all"
          title={`Ask Build Yourself AI about ${resource.title}`}
        >
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span className="hidden sm:inline">Ask AI</span>
        </button>
      </div>
    </div>
  );
};
