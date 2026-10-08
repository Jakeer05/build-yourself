import React, { useState } from 'react';
import { LearningResource } from '../../types';
import { getResourcesByConcept } from '../../data/learningResourcesData';
import { ResourceCard } from './ResourceCard';
import { VideoPlayerModal } from './VideoPlayerModal';
import { BookOpen, Youtube, Sparkles, Code2, HelpCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface ContinueLearningSectionProps {
  technology: string;
  conceptTitle?: string;
  onPracticeClick?: () => void;
  onQuizClick?: () => void;
}

export const ContinueLearningSection: React.FC<ContinueLearningSectionProps> = ({
  technology,
  conceptTitle,
  onPracticeClick,
  onQuizClick
}) => {
  const { setActiveView } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<LearningResource | null>(null);

  const relatedResources = getResourcesByConcept(technology, conceptTitle);
  const docResource = relatedResources.find(r => r.resourceType === 'documentation');
  const videoResources = relatedResources.filter(r => r.resourceType === 'video');

  const handleAskAi = (promptTopic?: string) => {
    setActiveView('ai-tutor');
  };

  return (
    <div className="mt-8 pt-8 border-t border-slate-800 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Continue Learning & Additional Resources</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">
            Official Documentation, YouTube Videos & AI Guidance
          </h3>
          <p className="text-xs text-slate-400">
            Reinforce your Build Yourself lesson with verified official documentation, topic tutorials, and AI practice.
          </p>
        </div>

        {/* Action Quick Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {videoResources.length > 0 && (
            <button
              onClick={() => setSelectedVideo(videoResources[0])}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-bold transition-all"
            >
              <Youtube className="w-3.5 h-3.5 text-rose-400" />
              <span>Watch Video</span>
            </button>
          )}

          {docResource && (
            <a
              href={docResource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Docs</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          <button
            onClick={() => handleAskAi(conceptTitle || technology)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-bold transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Ask AI</span>
          </button>

          {onPracticeClick && (
            <button
              onClick={onPracticeClick}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Practice</span>
            </button>
          )}

          {onQuizClick && (
            <button
              onClick={onQuizClick}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Quiz</span>
            </button>
          )}
        </div>
      </div>

      {/* Resource Cards Grid */}
      {relatedResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedResources.slice(0, 4).map(res => (
            <ResourceCard
              key={res.id}
              resource={res}
              onWatchVideo={setSelectedVideo}
              onAskAi={handleAskAi}
              compact
            />
          ))}
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Official resources for <strong>{technology}</strong> are being compiled by the Build Yourself Academic Board.</span>
          <button
            onClick={() => handleAskAi(`Explain ${technology} ${conceptTitle || ''}`)}
            className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs"
          >
            Ask AI to Explain
          </button>
        </div>
      )}

      {/* Video Modal */}
      <VideoPlayerModal
        resource={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onAskAi={handleAskAi}
      />
    </div>
  );
};
