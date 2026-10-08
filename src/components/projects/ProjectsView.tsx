import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Project } from '../../types';
import { aiService } from '../../services/aiService';
import {
  FolderGit2,
  Code2,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Sparkles,
  Play,
  Layers,
  FileCode,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProjectsView: React.FC = () => {
  const { projects, addXP } = useApp();
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);
  const currentProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const [activeCode, setActiveCode] = useState<string>(currentProject.starterCode);
  const [reviewOutput, setReviewOutput] = useState<string | null>(null);
  const [isReviewing, setIsReviewing] = useState<boolean>(false);

  const handleReviewCode = async () => {
    setIsReviewing(true);
    setReviewOutput(null);
    const analysis = await aiService.analyzeCode(activeCode, currentProject.category, currentProject.title);
    setReviewOutput(analysis);
    setIsReviewing(false);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
    addXP(75);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Production Industry Projects</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Build Real Capstone Software & Data Pipelines
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every technical track features guided, production-grade projects with starter code, architecture diagrams, step-by-step requirements, and instant AI code review.
          </p>
        </div>
      </div>

      {/* Project Selector Pills */}
      <div className="flex flex-wrap gap-2">
        {projects.map(p => (
          <button
            key={p.id}
            onClick={() => {
              setSelectedProjectId(p.id);
              setActiveCode(p.starterCode);
              setReviewOutput(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedProjectId === p.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Project Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Requirements & Architecture (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {currentProject.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentProject.difficulty} • ~{currentProject.estimatedHours} Hours
              </span>
            </div>

            <h2 className="text-xl font-bold text-white">{currentProject.title}</h2>
            <p className="text-xs text-slate-300 leading-relaxed">{currentProject.summary}</p>

            {/* Tech Stack */}
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Requirements Checklist */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Deliverable Requirements
              </span>
              <div className="space-y-2">
                {currentProject.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <strong className="text-violet-300 block font-semibold">Architectural Strategy:</strong>
              <p>{currentProject.solutionOverview}</p>
            </div>
          </div>
        </div>

        {/* Right Side: Code Workspace & AI Reviewer (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl cosmic-card border border-slate-800 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white font-mono">Project Workspace & Starter Code</span>
              </div>
              <button
                onClick={handleReviewCode}
                disabled={isReviewing}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isReviewing ? 'Analyzing Code...' : 'AI Code Review'}</span>
              </button>
            </div>

            <textarea
              value={activeCode}
              onChange={e => setActiveCode(e.target.value)}
              className="w-full h-80 bg-[#090d18] p-4 font-mono text-xs text-cyan-200 focus:outline-none resize-none leading-relaxed selection:bg-cyan-500/30"
              spellCheck={false}
            />

            {reviewOutput && (
              <div className="p-5 bg-slate-950 border-t border-slate-800 text-xs text-slate-200 space-y-2 leading-relaxed whitespace-pre-wrap animate-in fade-in">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold pb-1 border-b border-slate-800">
                  <Sparkles className="w-4 h-4" />
                  <span>Build Yourself AI Code Review & Feedback</span>
                </div>
                <div>{reviewOutput}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
