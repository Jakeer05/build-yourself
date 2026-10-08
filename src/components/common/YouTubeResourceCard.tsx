import React, { useState, useEffect } from 'react';
import { VerifiedYouTubeResource } from '../../data/youtubeResourcesRegistry';
import {
  Youtube,
  Play,
  ExternalLink,
  ShieldCheck,
  Clock,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  X,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface YouTubeResourceCardProps {
  resource: VerifiedYouTubeResource;
  lessonTitle?: string;
  className?: string;
}

export const YouTubeResourceCard: React.FC<YouTubeResourceCardProps> = ({
  resource,
  lessonTitle,
  className = ''
}) => {
  const [isPlayingInside, setIsPlayingInside] = useState<boolean>(false);
  const [embedFailed, setEmbedFailed] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<{
    videoId: string;
    url: string;
    embedUrl: string;
    title: string;
    channelName: string;
    duration: string;
  }>({
    videoId: resource.videoId,
    url: resource.url,
    embedUrl: resource.embedUrl,
    title: resource.title,
    channelName: resource.channelName,
    duration: resource.duration
  });

  // Reset when resource changes
  useEffect(() => {
    setActiveVideo({
      videoId: resource.videoId,
      url: resource.url,
      embedUrl: resource.embedUrl,
      title: resource.title,
      channelName: resource.channelName,
      duration: resource.duration
    });
    setEmbedFailed(false);
    setIsPlayingInside(false);
  }, [resource.id]);

  // Switch to alternative video if primary has an issue
  const handleTryAlternative = (alt: {
    title: string;
    channelName: string;
    videoId: string;
    url: string;
    duration: string;
  }) => {
    setActiveVideo({
      videoId: alt.videoId,
      url: alt.url,
      embedUrl: `https://www.youtube-nocookie.com/embed/${alt.videoId}`,
      title: alt.title,
      channelName: alt.channelName,
      duration: alt.duration
    });
    setEmbedFailed(false);
    setIsPlayingInside(true);
  };

  return (
    <div
      className={`rounded-2xl cosmic-card border border-rose-500/30 bg-slate-950/70 overflow-hidden transition-all shadow-lg shadow-rose-950/20 ${className}`}
    >
      {/* Top Banner / Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-950 border-b border-rose-500/20 text-xs">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-lg bg-rose-600/20 text-rose-400">
            <Youtube className="w-4 h-4" />
          </div>
          <span className="font-bold text-rose-300 uppercase tracking-wider text-[11px]">
            ▶ Learn on YouTube
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 text-[11px] truncate">
            {resource.language || 'Language'} {resource.level || 'A1'} • {resource.topic || lessonTitle || 'Lesson Masterclass'}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px]">
          <span className="inline-flex items-center space-x-1 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Educational Channel</span>
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Title and Structured Metadata */}
        <div className="space-y-2">
          <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-rose-200 transition-colors">
            {activeVideo.title}
          </h4>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {resource.language && (
              <span className="text-slate-200 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                Language: <strong className="text-white">{resource.language}</strong>
              </span>
            )}

            {resource.level && (
              <span className="text-emerald-300 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-800/40 font-mono font-bold">
                Level: {resource.level}
              </span>
            )}

            {(resource.topic || lessonTitle) && (
              <span className="text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-800/40">
                Topic: <strong className="text-amber-200">{resource.topic || lessonTitle}</strong>
              </span>
            )}

            <span className="font-semibold text-cyan-300 bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-cyan-800/40">
              Channel: {activeVideo.channelName}
            </span>

            {activeVideo.duration && (
              <span className="flex items-center space-x-1 text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                <Clock className="w-3 h-3 text-slate-500" />
                <span>{activeVideo.duration}</span>
              </span>
            )}
          </div>
        </div>

        {/* Embedded Player or Fallback Container */}
        {isPlayingInside && (
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-black animate-in fade-in duration-200">
            {!embedFailed && activeVideo.embedUrl ? (
              <div className="relative w-full aspect-video bg-slate-950">
                <iframe
                  src={`${activeVideo.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onError={() => setEmbedFailed(true)}
                />

                {/* Top Overlay Controls */}
                <div className="absolute top-2 right-2 flex items-center space-x-2 z-20">
                  <a
                    href={activeVideo.url || resource.searchFallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-rose-300 hover:text-white text-[11px] font-bold flex items-center space-x-1.5 backdrop-blur-sm border border-white/10 transition-all shadow-md"
                    title="Watch directly on YouTube in a new tab"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setIsPlayingInside(false)}
                    className="p-1.5 rounded-lg bg-black/80 hover:bg-rose-600 text-white text-xs backdrop-blur-sm transition-colors border border-white/10"
                    title="Collapse player"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Sub-bar for manual fallback in case YouTube shows in-iframe restriction */}
                <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Seeing "Video unavailable" or playback restrictions inside the frame?</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setEmbedFailed(true)}
                      className="text-amber-400 hover:underline"
                    >
                      Show Updated Search Link
                    </button>
                    <a
                      href={activeVideo.url || resource.searchFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-rose-400 hover:text-rose-300 flex items-center space-x-1"
                    >
                      <span>Open on YouTube ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Automatic Search Fallback UI - Never dead "Unavailable" */
              <div className="p-6 sm:p-8 bg-slate-950/90 text-center space-y-4">
                <div className="inline-flex p-3 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-white">
                    Video unavailable. Find updated lessons on YouTube
                  </h5>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Third-party player embedding was restricted for this specific video. We've automatically prepared a verified, working search query for <strong>{resource.language} ({resource.level}) {resource.topic || lessonTitle}</strong> on YouTube.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={resource.searchFallbackUrl || activeVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-600/30 transition-all"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {resource.alternativeVideos && resource.alternativeVideos.length > 0 && (
                    <button
                      onClick={() => handleTryAlternative(resource.alternativeVideos![0])}
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Try Alternative Channel Video</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setEmbedFailed(false);
                      setIsPlayingInside(false);
                    }}
                    className="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2">
            {/* Direct Watch on YouTube button - primary and always valid destination */}
            <a
              href={activeVideo.url || resource.searchFallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md shadow-rose-600/30 transition-all active:scale-95"
              title="Open video in a new browser tab without leaving Build Yourself"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            {/* Optional Embedded In-App Player */}
            {activeVideo.embedUrl && !isPlayingInside && (
              <button
                onClick={() => {
                  setEmbedFailed(false);
                  setIsPlayingInside(true);
                }}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Play className="w-3 h-3 fill-current text-rose-400" />
                <span>Play Inside Page</span>
              </button>
            )}

            {isPlayingInside && (
              <button
                onClick={() => setIsPlayingInside(false)}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Hide Player</span>
              </button>
            )}
          </div>

          {/* Alternative videos link if available */}
          {resource.alternativeVideos && resource.alternativeVideos.length > 0 && !isPlayingInside && (
            <div className="text-[11px] text-slate-400 flex items-center space-x-1">
              <span>Alternative channel:</span>
              <button
                onClick={() => handleTryAlternative(resource.alternativeVideos![0])}
                className="text-cyan-400 hover:underline font-medium"
              >
                {resource.alternativeVideos[0].channelName}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
