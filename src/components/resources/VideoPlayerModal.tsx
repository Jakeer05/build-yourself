import React from 'react';
import { LearningResource } from '../../types';
import { X, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Clock, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface VideoPlayerModalProps {
  resource: LearningResource | null;
  onClose: () => void;
  onAskAi?: (topic: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ resource, onClose, onAskAi }) => {
  const { setActiveView } = useApp();

  if (!resource) return null;

  const handleAskAiAboutTopic = () => {
    onClose();
    if (onAskAi) {
      onAskAi(resource.title);
    } else {
      setActiveView('ai-tutor');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
              YouTube Tutorial
            </span>
            <h3 className="text-sm font-bold text-white truncate max-w-md">
              {resource.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {resource.embedUrl ? (
            <iframe
              src={`${resource.embedUrl}?autoplay=1&rel=0`}
              title={resource.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 space-y-3">
              <Eye className="w-12 h-12 text-slate-500 mx-auto" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-white">
                  Video unavailable. Find updated lessons on YouTube
                </p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Third-party in-app embedding was disabled by the channel creator. You can watch this verified lesson directly on YouTube.
                </p>
              </div>
              <a
                href={resource.url || `https://www.youtube.com/results?search_query=${encodeURIComponent(resource.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-md shadow-rose-600/30"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Details & Action Bar */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/40 space-y-3.5 overflow-y-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3 text-slate-400">
              {resource.channelName && (
                <span className="font-semibold text-slate-200">
                  Channel: <strong className="text-cyan-400">{resource.channelName}</strong>
                </span>
              )}
              {resource.duration && (
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{resource.duration}</span>
                </span>
              )}
              {resource.difficulty && (
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                  {resource.difficulty}
                </span>
              )}
              {resource.verified && (
                <span className="flex items-center space-x-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Curriculum Verified</span>
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleAskAiAboutTopic}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-600/20 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ask Build Yourself AI</span>
              </button>

              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-slate-700"
              >
                <span>Open YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {resource.description}
          </p>

          <div className="text-[11px] text-slate-500 flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>
              All video content remains the property of its respective YouTube creator. Build Yourself provides indexed educational reference links to support structured learning.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
