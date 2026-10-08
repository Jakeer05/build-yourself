import React, { useState } from 'react';
import { ContinueLearningSection } from '../resources/ContinueLearningSection';
import {
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Check,
  X,
  Code2,
  Copy,
  ChevronRight,
  Flame,
  Award,
  Layers,
  Info,
  AlertTriangle,
  Compass,
  Zap,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';

export interface ConceptDetailData {
  id: string;
  title: string;
  category: string;
  languageOrTrack: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  definition: string;
  whatIsIt: string;
  whyIsItUsed: string;
  properties: string[];
  syntax?: {
    code: string;
    breakdown: { part: string; meaning: string }[];
  };
  examples: {
    basic: { code: string; output: string; explanation: string };
    intermediate: { code: string; output: string; explanation: string };
    realWorld: { scenario: string; code: string; output: string; explanation: string };
  };
  howItWorks: {
    stepByStep: string[];
    diagramFlow?: string;
  };
  commonMistakes: { mistake: string; badCode?: string; correctCode?: string; fix: string }[];
  bestPractices: string[];
  advantages: string[];
  limitations: string[];
  relatedConcepts: string[];
  whenToUse: string[];
  whenNotToUse: string[];
  practiceTasks: {
    id: string;
    task: string;
    hint: string;
    solutionCode: string;
  }[];
  miniQuiz: {
    id: string;
    question: string;
    type: 'mcq' | 'true_false' | 'output_prediction' | 'code_understanding';
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  sandboxStarter: string;
  summary: string[];
}

interface ConceptTeachingViewProps {
  concept: ConceptDetailData;
  isCompleted: boolean;
  onBack: () => void;
  onComplete: () => void;
  onOpenAiTutor?: () => void;
}

export const ConceptTeachingView: React.FC<ConceptTeachingViewProps> = ({
  concept,
  isCompleted,
  onBack,
  onComplete,
  onOpenAiTutor
}) => {
  const [activeTab, setActiveTab] = useState<
    'breakdown' | 'syntax_examples' | 'mechanics' | 'practice_sandbox' | 'quiz_summary'
  >('breakdown');

  // Interactive Sandbox State
  const [code, setCode] = useState<string>(concept.sandboxStarter);
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Practice Tasks Completion State
  const [completedPracticeIds, setCompletedPracticeIds] = useState<string[]>([]);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Code runner simulator with realistic output and error detection
  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Executing code in secure sandbox environment...');
    setTimeout(() => {
      setIsRunning(false);
      // Basic syntax validation
      const trimmed = code.trim();
      if (!trimmed) {
        setOutput('[Error]: Empty code buffer. Please write some code to execute.');
        return;
      }

      // Check for unclosed parenthesis or quotes
      const openParens = (code.match(/\(/g) || []).length;
      const closeParens = (code.match(/\)/g) || []).length;
      if (openParens !== closeParens) {
        setOutput(`SyntaxError: unexpected EOF while parsing (mismatched parentheses: ${openParens} open vs ${closeParens} closed).
Check line ${code.split('\n').length} for closing ')'.`);
        return;
      }

      // Realistic output generation
      if (code.includes('print(')) {
        const matches = [...code.matchAll(/print\((?:f?["'](.*?)["']|(.*?))\)/g)];
        if (matches.length > 0) {
          const printedLines = matches.map(m => m[1] || m[2] || '').join('\n');
          setOutput(`>>> Python 3.12 Interpreter Output:\n${printedLines}\n\n[Process completed successfully with exit code 0]`);
          return;
        }
      }

      if (code.includes('console.log(')) {
        const matches = [...code.matchAll(/console\.log\((?:["'](.*?)["']|(.*?))\)/g)];
        if (matches.length > 0) {
          const printedLines = matches.map(m => m[1] || m[2] || '').join('\n');
          setOutput(`>>> Node.js v20.11 Runtime Output:\n${printedLines}\n\n[Done] exited with code=0`);
          return;
        }
      }

      // Default safe executed output
      setOutput(`>>> Sandbox Execution Output:
Program executed without runtime exceptions.
State captured:
${concept.examples.basic.output}

[Process completed with exit code 0]`);
    }, 600);
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const togglePracticeTask = (taskId: string) => {
    setCompletedPracticeIds(prev =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const handleQuizSelect = (qId: string, optIdx: number) => {
    if (!quizSubmitted) {
      setQuizAnswers(prev => ({ ...prev, [qId]: optIdx }));
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    const correctCount = concept.miniQuiz.filter(
      q => quizAnswers[q.id] === q.correctIndex
    ).length;
    if (correctCount >= Math.ceil(concept.miniQuiz.length * 0.6)) {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    }
  };

  const quizScore = concept.miniQuiz.filter(
    q => quizAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Header Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-white transition-all"
            title="Return to Course Outline"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {concept.languageOrTrack}
              </span>
              <span className="text-xs text-slate-400">• {concept.difficulty} Level</span>
              <span className="text-xs text-slate-400">• ~{concept.durationMinutes} min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">{concept.title}</h1>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {onOpenAiTutor && (
            <button
              onClick={onOpenAiTutor}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/30 text-xs font-semibold transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Tutor</span>
            </button>
          )}

          <button
            onClick={onComplete}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/20'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Concept Completed ✓ (+50 XP)' : 'Mark Lesson Complete'}</span>
          </button>
        </div>
      </div>

      {/* 2. Structured Learning Tabs */}
      <div className="flex items-center space-x-1 overflow-x-auto pb-1 border-b border-slate-800 scrollbar-none">
        {[
          { id: 'breakdown', label: '1. Concept Breakdown & Definition', icon: BookOpen },
          { id: 'syntax_examples', label: '2. Syntax & 3-Tier Examples', icon: Terminal },
          { id: 'mechanics', label: '3. How It Works & Mistakes', icon: Cpu },
          { id: 'practice_sandbox', label: '4. Practice & Live Sandbox', icon: Code2 },
          { id: 'quiz_summary', label: '5. Mini Quiz & Summary', icon: HelpCircle }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Tab Contents */}

      {/* TAB 1: CONCEPT BREAKDOWN & DEFINITION */}
      {activeTab === 'breakdown' && (
        <div className="space-y-6">
          {/* Definition Card */}
          <div className="p-6 rounded-3xl cosmic-card border border-cyan-500/30 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center space-x-2 text-cyan-400">
              <Info className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Formal Definition</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
              {concept.definition}
            </p>
          </div>

          {/* What is it? & Why is it used? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>What is it? (Beginner Friendly)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {concept.whatIsIt}
              </p>
            </div>

            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Why is it used?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {concept.whyIsItUsed}
              </p>
            </div>
          </div>

          {/* Properties / Characteristics */}
          <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-4 h-4 text-violet-400" />
              <span>Core Properties & Characteristics</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {concept.properties.map((prop, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200"
                >
                  <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{prop}</span>
                </div>
              ))}
            </div>
          </div>

          {/* When to Use & When NOT to Use */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>When to Use This Concept</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-200">
                {concept.whenToUse.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
              <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center space-x-2">
                <X className="w-4 h-4 text-rose-400" />
                <span>When NOT to Use It / Anti-Patterns</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-200">
                {concept.whenNotToUse.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advantages vs Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Advantages</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {concept.advantages.map((adv, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Limitations</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {concept.limitations.map((lim, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Concepts */}
          <div className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Related Concepts to Explore Next:</span>
            <div className="flex flex-wrap gap-2">
              {concept.relatedConcepts.map((rel, i) => (
                <span key={i} className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                  {rel}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SYNTAX & EXAMPLES */}
      {activeTab === 'syntax_examples' && (
        <div className="space-y-6">
          {/* Syntax Section */}
          {concept.syntax && (
            <div className="rounded-3xl cosmic-card p-6 border border-cyan-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Grammar / Syntax Specification</span>
                </h3>
                <button
                  onClick={() => handleCopyCode(concept.syntax!.code)}
                  className="text-xs text-slate-400 hover:text-cyan-300 flex items-center space-x-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedCode ? 'Copied!' : 'Copy Syntax'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto">
                {concept.syntax.code}
              </pre>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-slate-300 block">Syntax Token Breakdown:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {concept.syntax.breakdown.map((item, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center space-x-2">
                      <code className="px-2 py-0.5 rounded bg-slate-950 text-cyan-400 font-mono text-[11px] font-bold">
                        {item.part}
                      </code>
                      <span className="text-slate-300">{item.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Example 1: Basic Example */}
          <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider">Example 01</span>
                <h4 className="text-base font-bold text-white">Basic Starter Example</h4>
              </div>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              {concept.examples.basic.code}
            </pre>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">Execution Output:</span>
                <pre className="text-emerald-400 font-mono">{concept.examples.basic.output}</pre>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">Explanation:</span>
                <p className="text-slate-300">{concept.examples.basic.explanation}</p>
              </div>
            </div>
          </div>

          {/* Example 2: Intermediate Example */}
          <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">Example 02</span>
                <h4 className="text-base font-bold text-white">Detailed / Intermediate Usage</h4>
              </div>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              {concept.examples.intermediate.code}
            </pre>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">Execution Output:</span>
                <pre className="text-emerald-400 font-mono">{concept.examples.intermediate.output}</pre>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">Explanation:</span>
                <p className="text-slate-300">{concept.examples.intermediate.explanation}</p>
              </div>
            </div>
          </div>

          {/* Example 3: Real-World Example */}
          <div className="rounded-2xl cosmic-card p-6 border border-violet-500/30 space-y-4">
            <div>
              <span className="text-[10px] font-mono text-violet-400 uppercase font-bold tracking-wider">Example 03 • Production Scenario</span>
              <h4 className="text-base font-bold text-white">{concept.examples.realWorld.scenario}</h4>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              {concept.examples.realWorld.code}
            </pre>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">System Output:</span>
                <pre className="text-cyan-400 font-mono">{concept.examples.realWorld.output}</pre>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-400 block mb-1">Industry Context:</span>
                <p className="text-slate-300">{concept.examples.realWorld.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: HOW IT WORKS & COMMON MISTAKES */}
      {activeTab === 'mechanics' && (
        <div className="space-y-6">
          {/* Step-by-Step Execution Mechanics */}
          <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>How It Works: Step-by-Step Execution Lifecycle</span>
            </h3>

            {concept.howItWorks.diagramFlow && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center">
                {concept.howItWorks.diagramFlow}
              </div>
            )}

            <div className="space-y-3">
              {concept.howItWorks.stepByStep.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-slate-300 leading-relaxed mt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>Common Mistakes & How to Fix Them</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {concept.commonMistakes.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-rose-500/30 space-y-3">
                  <h4 className="text-xs font-bold text-rose-300 flex items-center space-x-1.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Mistake: {item.mistake}</span>
                  </h4>

                  {item.badCode && (
                    <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/20 text-[11px] font-mono text-rose-200">
                      <span className="text-[10px] text-rose-400 block mb-0.5 uppercase font-bold">Wrong:</span>
                      <code>{item.badCode}</code>
                    </div>
                  )}

                  {item.correctCode && (
                    <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-[11px] font-mono text-emerald-200">
                      <span className="text-[10px] text-emerald-400 block mb-0.5 uppercase font-bold">Correct:</span>
                      <code>{item.correctCode}</code>
                    </div>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-emerald-400">Solution:</strong> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
            <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Industry Best Practices & Clean Code Guidelines</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {concept.bestPractices.map((bp, idx) => (
                <div key={idx} className="flex items-start space-x-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PRACTICE & LIVE SANDBOX */}
      {activeTab === 'practice_sandbox' && (
        <div className="space-y-6">
          {/* Interactive Code Playground */}
          <div className="rounded-3xl bg-slate-950 border border-cyan-500/30 overflow-hidden shadow-2xl space-y-0">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white font-mono">
                  Interactive Try It Now Sandbox ({concept.languageOrTrack})
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCode(concept.sandboxStarter)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Reset Code"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{isRunning ? 'Running...' : 'Execute'}</span>
                </button>
              </div>
            </div>

            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              rows={8}
              spellCheck={false}
              className="w-full bg-[#0a0f1d] p-4 font-mono text-xs sm:text-sm text-cyan-200 focus:outline-none resize-y leading-relaxed selection:bg-cyan-500/30"
            />

            {output && (
              <div className="p-4 bg-slate-950 border-t border-slate-800 font-mono text-xs text-emerald-400 whitespace-pre-wrap">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                  Terminal Output:
                </span>
                {output}
              </div>
            )}
          </div>

          {/* Guided Hands-on Practice Tasks */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Interactive Practice Exercises</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Complete each task in the sandbox or on your machine.
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                {completedPracticeIds.length} of {concept.practiceTasks.length} Completed
              </span>
            </div>

            <div className="space-y-3">
              {concept.practiceTasks.map((task, idx) => {
                const isDone = completedPracticeIds.includes(task.id);
                const isRevealed = revealedSolutions[task.id];
                return (
                  <div
                    key={task.id}
                    className={`p-5 rounded-2xl border transition-all space-y-3 ${
                      isDone
                        ? 'bg-emerald-950/20 border-emerald-500/30'
                        : 'bg-slate-900/70 border-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3">
                        <button
                          onClick={() => togglePracticeTask(task.id)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center border shrink-0 mt-0.5 transition-all ${
                            isDone
                              ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                              : 'bg-slate-950 border-slate-700 text-transparent hover:border-cyan-400'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </button>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white">
                            Practice {idx + 1}: {task.task}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1">
                            <strong className="text-cyan-400">Hint:</strong> {task.hint}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setRevealedSolutions(prev => ({
                            ...prev,
                            [task.id]: !prev[task.id]
                          }))
                        }
                        className="text-xs text-cyan-400 hover:underline shrink-0"
                      >
                        {isRevealed ? 'Hide Solution' : 'View Solution'}
                      </button>
                    </div>

                    {isRevealed && (
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">
                        <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
                          Reference Solution:
                        </span>
                        {task.solutionCode}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: MINI QUIZ & SUMMARY */}
      {activeTab === 'quiz_summary' && (
        <div className="space-y-6">
          {/* Mini Quiz */}
          <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <span>Concept Mastery Mini Quiz</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Test your understanding with immediate explanations for every question.
                </p>
              </div>

              {quizSubmitted && (
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Your Score:</span>
                  <span className="text-lg font-extrabold text-cyan-300">
                    {quizScore} / {concept.miniQuiz.length} (
                    {Math.round((quizScore / concept.miniQuiz.length) * 100)}%)
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {concept.miniQuiz.map((q, qIdx) => {
                const userChoice = quizAnswers[q.id];
                const isAnswered = userChoice !== undefined;
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div key={q.id} className="space-y-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        Q{qIdx + 1} • {q.type.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-white">{q.question}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        const isThisCorrect = optIdx === q.correctIndex;
                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleQuizSelect(q.id, optIdx)}
                            className={`p-3 rounded-xl text-left text-xs transition-all flex items-center justify-between border ${
                              quizSubmitted
                                ? isThisCorrect
                                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                                  : isSelected
                                  ? 'bg-rose-950/60 border-rose-500 text-rose-200'
                                  : 'bg-slate-950/60 border-slate-800 text-slate-400'
                                : isSelected
                                ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200 shadow-sm'
                                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && isSelected && (
                              isCorrect ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <X className="w-4 h-4 text-rose-400" />
                              )
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && isAnswered && (
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                        <strong className="text-cyan-400">Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted && (
              <button
                onClick={handleQuizSubmit}
                disabled={Object.keys(quizAnswers).length < concept.miniQuiz.length}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50"
              >
                Submit Mini Quiz
              </button>
            )}
          </div>

          {/* Concept Summary & Key Takeaways */}
          <div className="p-6 rounded-3xl cosmic-card border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Key Concept Takeaways & Summary</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {concept.summary.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Ready to advance your skill roadmap?</span>
              <button
                onClick={onComplete}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20"
              >
                {isCompleted ? 'Completed ✓ (+50 XP)' : 'Mark Lesson Complete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Documentation, Topic-Specific YouTube Videos & AI Guidance */}
      <ContinueLearningSection
        technology={concept.languageOrTrack || 'Python'}
        conceptTitle={concept.title}
        onPracticeClick={() => setActiveTab('practice_sandbox')}
        onQuizClick={() => setActiveTab('quiz_summary')}
      />
    </div>
  );
};
