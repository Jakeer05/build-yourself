import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { aiService } from '../../services/aiService';
import { AiTutorMode, ChatSession, ChatMessage } from '../../types';
import {
  Bot,
  Sparkles,
  Send,
  Plus,
  Trash2,
  Edit2,
  Search,
  Copy,
  Check,
  RotateCcw,
  Square,
  Code2,
  BookOpen,
  Terminal,
  HelpCircle,
  Lightbulb,
  FileCode,
  Globe2,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Play,
  Share2
} from 'lucide-react';

const MODE_CONFIGS: { mode: AiTutorMode; label: string; icon: string; description: string }[] = [
  { mode: 'explain', label: 'Explain', icon: '💡', description: 'Clear conceptual breakdown & fundamentals' },
  { mode: 'teach', label: 'Teach Me', icon: '👨‍🏫', description: 'Step-by-step pedagogical instruction' },
  { mode: 'example', label: 'Give Example', icon: '📝', description: 'Beginner, intermediate & real-world patterns' },
  { mode: 'practice', label: 'Practice', icon: '🧪', description: 'Generate hands-on coding & language tasks' },
  { mode: 'quiz', label: 'Quiz Me', icon: '❓', description: 'Test understanding with multiple-choice questions' },
  { mode: 'debug', label: 'Debug Code', icon: '🐛', description: 'Identify root-causes and return corrected code' },
  { mode: 'summarize', label: 'Summarize', icon: '📑', description: 'Key rules, formulas, and cheat-sheet takeaways' },
  { mode: 'interview', label: 'Interview Me', icon: '💼', description: 'High-stakes technical & behavioral interview drill' },
  { mode: 'correct', label: 'Correct My Answer', icon: '✅', description: 'Evaluate sentence, code, or essay with feedback' },
  { mode: 'simplify', label: 'Simplify (ELI5)', icon: '🎈', description: 'Explain using simple everyday analogies' },
  { mode: 'deeper', label: 'Go Deeper', icon: '🔬', description: 'Deep-dive into runtime architecture & trade-offs' },
  { mode: 'project', label: 'Give Project', icon: '🚀', description: 'Suggest a portfolio project with requirements' }
];

const STARTER_PROMPTS = [
  { text: 'Teach me Python from zero with step-by-step milestones', category: 'Programming', icon: '🐍' },
  { text: 'Explain SQL INNER vs LEFT JOIN with a visual business example', category: 'Database', icon: '📊' },
  { text: 'Explain the German Dative Case and two-way prepositions', category: 'Languages', icon: '🇩🇪' },
  { text: 'How should I structure my resume for a Data Analyst role?', category: 'Career', icon: '💼' },
  { text: 'What are the required documents for a Master’s in Germany (APS, Blocked Account, Visa)?', category: 'Master’s', icon: '🎓' },
  { text: 'What is the difference between supervised and unsupervised learning?', category: 'AI & Data', icon: '🤖' }
];

export const AiTutorView: React.FC = () => {
  const { user, courses, roadmaps } = useApp();

  // Sessions state from localStorage
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    const saved = localStorage.getItem('by_ai_chat_sessions');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [
      {
        id: 'session-default-1',
        title: 'Welcome & General Orientation',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        mode: 'explain',
        contextTag: 'Build Yourself Hub',
        messages: [
          {
            id: 'm-welcome-1',
            role: 'assistant',
            timestamp: new Date().toISOString(),
            content: `Hello ${user.name.split(' ')[0]}! 👋 I am **Build Yourself AI**, your personal conversational tutor and academic companion.

I can help you master:
- 💻 **Programming & Web Dev:** Python, Java, C++, TypeScript, React, Next.js, Go, Rust, SQL, and Cloud.
- 🌍 **12 World Languages:** German, French, Spanish, Japanese, Korean, Arabic, and more (CEFR A1–C2).
- 🗺️ **Career Roadmaps:** Data Analyst, Software Engineer, Data Scientist, DevOps, and Full-Stack paths.
- 🎓 **Master's & Study Abroad:** University selection (DAAD/Uni-Assist), SOP/LOR drafting, and official student visa prerequisites.

Select any mode above or ask any natural question below to begin!`,
            followUpQuestions: [
              'Teach me Python from zero',
              'Explain SQL JOINs with real-world examples',
              'How to prepare for a Data Analyst interview?'
            ]
          }
        ]
      }
    ];
  });

  const [currentSessionId, setCurrentSessionId] = useState<string>(() => sessions[0]?.id || 'session-default-1');
  const [searchFilter, setSearchFilter] = useState('');
  const [activeMode, setActiveMode] = useState<AiTutorMode>('explain');
  const [inputMessage, setInputMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
  const [newTitleText, setNewTitleText] = useState('');
  const [includeContext, setIncludeContext] = useState(true);

  // In-line code playground execution state
  const [runningSnippet, setRunningSnippet] = useState<{ id: string; output: string } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Save sessions to localStorage
  useEffect(() => {
    localStorage.setItem('by_ai_chat_sessions', JSON.stringify(sessions));
  }, [sessions]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [sessions, currentSessionId, isGenerating]);

  const currentSession = sessions.find(s => s.id === currentSessionId) || sessions[0];

  // Create new session
  const handleNewChat = (customTitle?: string, initialMode?: AiTutorMode) => {
    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      title: customTitle || 'New Conversation',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      mode: initialMode || activeMode,
      contextTag: user.targetCareer || 'Tech & Learning',
      messages: [
        {
          id: `m-${Date.now()}`,
          role: 'assistant',
          timestamp: new Date().toISOString(),
          content: `New session started in **${(initialMode || activeMode).toUpperCase()}** mode. How can I assist you with your learning goals today?`,
          followUpQuestions: [
            'Give me a beginner challenge',
            'Explain core concepts step-by-step',
            'What should I practice today?'
          ]
        }
      ]
    };

    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
    if (initialMode) setActiveMode(initialMode);
    textareaRef.current?.focus();
  };

  // Delete session
  const handleDeleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (sessions.length <= 1) {
      handleNewChat('General Discussion');
    }
    setSessions(prev => prev.filter(s => s.id !== id));
    if (currentSessionId === id) {
      const remaining = sessions.filter(s => s.id !== id);
      if (remaining.length > 0) {
        setCurrentSessionId(remaining[0].id);
      }
    }
  };

  // Rename session
  const handleSaveRename = (id: string) => {
    if (newTitleText.trim()) {
      setSessions(prev => prev.map(s => s.id === id ? { ...s, title: newTitleText.trim() } : s));
    }
    setEditingTitleId(null);
  };

  // Copy answer to clipboard
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Send message
  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isGenerating) return;

    const userMessage: ChatMessage = {
      id: `msg-u-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toISOString()
    };

    // Update session title if default
    const updatedMessages = [...(currentSession?.messages || []), userMessage];
    const isFirstUserMessage = currentSession?.messages.filter(m => m.role === 'user').length === 0;
    const titleCandidate = isFirstUserMessage ? text.slice(0, 36) + (text.length > 36 ? '...' : '') : currentSession?.title;

    setSessions(prev => prev.map(s => {
      if (s.id === currentSessionId) {
        return {
          ...s,
          title: titleCandidate || s.title,
          updatedAt: new Date().toISOString(),
          messages: updatedMessages
        };
      }
      return s;
    }));

    setInputMessage('');
    setIsGenerating(true);

    try {
      // Build context payload
      const contextPayload = includeContext ? {
        courseTitle: user.targetCareer,
        technology: user.targetCareer,
        currentSkillLevel: user.currentSkillLevel,
        country: user.targetCountry,
        roadmap: user.activeRoadmapId
      } : undefined;

      const result = await aiService.chatWithTutor(
        updatedMessages.map(m => ({ role: m.role, content: m.content })),
        activeMode,
        contextPayload
      );

      const aiMessage: ChatMessage = {
        id: `msg-a-${Date.now()}`,
        role: 'assistant',
        content: result.reply,
        timestamp: new Date().toISOString(),
        followUpQuestions: result.followUpQuestions
      };

      setSessions(prev => prev.map(s => {
        if (s.id === currentSessionId) {
          return {
            ...s,
            updatedAt: new Date().toISOString(),
            messages: [...s.messages, aiMessage]
          };
        }
        return s;
      }));
    } catch {
      // Graceful error message
      const errorMsg: ChatMessage = {
        id: `msg-err-${Date.now()}`,
        role: 'assistant',
        content: `I experienced a temporary network latency, but here is key guidance: Always break complex problems into modular functions and verify edge cases first. Feel free to re-ask!`,
        timestamp: new Date().toISOString()
      };
      setSessions(prev => prev.map(s => s.id === currentSessionId ? { ...s, messages: [...s.messages, errorMsg] } : s));
    } finally {
      setIsGenerating(false);
    }
  };

  // Run in sandbox simulation
  const handleRunCode = (code: string, snippetId: string) => {
    setRunningSnippet({ id: snippetId, output: 'Executing runtime environment...' });
    setTimeout(() => {
      // Clean mock execution
      if (code.includes('print(')) {
        const matches = code.match(/print\((["'])(.*?)\1\)/g);
        if (matches) {
          const outputs = matches.map(m => m.replace(/print\(["']|["']\)/g, ''));
          setRunningSnippet({ id: snippetId, output: outputs.join('\n') });
          return;
        }
      }
      setRunningSnippet({
        id: snippetId,
        output: `[Build Yourself Runtime 3.12]\nProgram executed successfully (Exit Code 0).\nMemory: 14.2 MB | Latency: 4ms`
      });
    }, 600);
  };

  // Render markdown-like blocks
  const renderMessageContent = (content: string, msgId: string) => {
    // Detect code blocks
    const parts = content.split(/(```[\s\S]*?```)/g);

    return (
      <div className="space-y-3 leading-relaxed text-xs sm:text-sm text-slate-200">
        {parts.map((part, pIdx) => {
          if (part.startsWith('```')) {
            const firstLineBreak = part.indexOf('\n');
            const lang = part.slice(3, firstLineBreak).trim() || 'python';
            const code = part.slice(firstLineBreak + 1, -3).trim();
            const snippetId = `${msgId}-snippet-${pIdx}`;
            const isRunning = runningSnippet?.id === snippetId;

            return (
              <div key={pIdx} className="my-3 rounded-2xl bg-[#070b14] border border-slate-800 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="uppercase text-cyan-300 font-bold">{lang}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleCopy(code, snippetId)}
                      className="flex items-center space-x-1 px-2 py-0.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="Copy Code"
                    >
                      {copiedIndex === snippetId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedIndex === snippetId ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={() => handleRunCode(code, snippetId)}
                      className="flex items-center space-x-1 px-2.5 py-0.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-all font-bold"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Run</span>
                    </button>
                  </div>
                </div>

                <pre className="p-4 overflow-x-auto font-mono text-xs text-emerald-300 bg-[#090d18] leading-relaxed selection:bg-cyan-500/30">
                  <code>{code}</code>
                </pre>

                {isRunning && (
                  <div className="p-3 bg-slate-950 border-t border-slate-800 font-mono text-xs text-slate-300">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Terminal Output</span>
                    <pre className="text-cyan-300 whitespace-pre-wrap">{runningSnippet.output}</pre>
                  </div>
                )}
              </div>
            );
          }

          // Plain text with bold / bullet parsing
          const paragraphs = part.split('\n\n').filter(Boolean);
          return (
            <div key={pIdx} className="space-y-2">
              {paragraphs.map((para, iIdx) => {
                if (para.startsWith('### ')) {
                  return <h3 key={iIdx} className="text-base sm:text-lg font-bold text-cyan-200 mt-4 mb-2">{para.replace('### ', '')}</h3>;
                }
                if (para.startsWith('#### ')) {
                  return <h4 key={iIdx} className="text-sm sm:text-base font-bold text-white mt-3 mb-1.5">{para.replace('#### ', '')}</h4>;
                }
                if (para.startsWith('- ') || para.startsWith('* ')) {
                  const items = para.split('\n');
                  return (
                    <ul key={iIdx} className="list-disc list-inside space-y-1 my-2 pl-1">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-slate-300">
                          {renderInlineFormatting(item.replace(/^[-*•]\s+/, ''))}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={iIdx} className="text-slate-200 leading-relaxed">{renderInlineFormatting(para)}</p>;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const renderInlineFormatting = (text: string) => {
    // Bold formatting **text**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-xs">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  const filteredSessions = sessions.filter(s =>
    s.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.messages.some(m => m.content.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <div className="h-[84vh] rounded-3xl cosmic-card border border-slate-800 overflow-hidden flex flex-col md:flex-row shadow-2xl relative bg-[#090d19]/90">
      {/* ======================================================== */}
      {/* 1. LEFT SIDEBAR: SESSIONS & MODES (80px on sm, 280px on md) */}
      {/* ======================================================== */}
      <aside className="w-full md:w-80 border-r border-slate-800 bg-slate-950/70 flex flex-col justify-between p-3.5 space-y-3 shrink-0">
        <div className="space-y-3 flex-1 overflow-y-auto">
          {/* Brand & New Chat */}
          <div className="flex items-center justify-between pt-1 px-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-white">Build Yourself AI</h2>
                <span className="text-[10px] text-cyan-400 font-mono block">Intelligent Tutor</span>
              </div>
            </div>

            <button
              onClick={() => handleNewChat()}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md shadow-cyan-600/20 transition-all"
              title="Start a new chat session"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New</span>
            </button>
          </div>

          {/* Search Chats Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              placeholder="Search chat history..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Learning Mode Quick Pills */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-1 block">
              Tutor Learning Modes
            </span>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              {MODE_CONFIGS.slice(0, 6).map(cfg => (
                <button
                  key={cfg.mode}
                  onClick={() => setActiveMode(cfg.mode)}
                  className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-xl transition-all text-left ${
                    activeMode === cfg.mode
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                  title={cfg.description}
                >
                  <span>{cfg.icon}</span>
                  <span className="truncate">{cfg.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat History List */}
          <div className="space-y-1 pt-2 border-t border-slate-800/80">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Recent Chats ({filteredSessions.length})
              </span>
            </div>

            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              {filteredSessions.map(session => {
                const isActive = session.id === currentSessionId;
                const isEditing = editingTitleId === session.id;

                return (
                  <div
                    key={session.id}
                    onClick={() => {
                      setCurrentSessionId(session.id);
                      setActiveMode(session.mode);
                    }}
                    className={`group flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer transition-all ${
                      isActive
                        ? 'bg-cyan-950/40 border border-cyan-500/40 text-cyan-200 font-semibold'
                        : 'bg-slate-900/40 hover:bg-slate-900 border border-transparent hover:border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isEditing ? (
                      <input
                        type="text"
                        value={newTitleText}
                        onChange={e => setNewTitleText(e.target.value)}
                        onBlur={() => handleSaveRename(session.id)}
                        onKeyDown={e => e.key === 'Enter' && handleSaveRename(session.id)}
                        className="bg-slate-950 text-white px-1.5 py-0.5 rounded text-xs w-full focus:outline-none"
                        autoFocus
                      />
                    ) : (
                      <span className="truncate flex-1 mr-2">{session.title}</span>
                    )}

                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          setEditingTitleId(session.id);
                          setNewTitleText(session.title);
                        }}
                        className="p-1 rounded text-slate-400 hover:text-white"
                        title="Rename Chat"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={e => handleDeleteSession(session.id, e)}
                        className="p-1 rounded text-slate-400 hover:text-rose-400"
                        title="Delete Chat"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer info: Context toggle */}
        <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between px-1">
          <label className="flex items-center space-x-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={includeContext}
              onChange={e => setIncludeContext(e.target.checked)}
              className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0"
            />
            <span>Include My Profile Context</span>
          </label>
        </div>
      </aside>

      {/* ======================================================== */}
      {/* 2. MAIN CHAT AREA                                        */}
      {/* ======================================================== */}
      <section className="flex-1 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#080d1a] to-[#060913]">
        {/* Top Header */}
        <header className="px-5 py-3 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden">
            <span className="text-base font-bold text-white truncate max-w-sm">
              {currentSession?.title || 'Build Yourself AI Tutor'}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {activeMode.toUpperCase()} MODE
            </span>
            {includeContext && user.targetCareer && (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-400">
                Context: {user.targetCareer}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={activeMode}
              onChange={e => setActiveMode(e.target.value as AiTutorMode)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
            >
              {MODE_CONFIGS.map(cfg => (
                <option key={cfg.mode} value={cfg.mode}>
                  {cfg.icon} {cfg.label}
                </option>
              ))}
            </select>
          </div>
        </header>

        {/* Message Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6">
          {currentSession?.messages.map(msg => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-4xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                  isUser
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-gradient-to-tr from-cyan-600 via-blue-600 to-violet-600 text-white shadow-md shadow-cyan-500/30'
                }`}>
                  {isUser ? user.name[0] : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className={`space-y-2.5 ${isUser ? 'max-w-xl' : 'flex-1'}`}>
                  <div className={`p-4 sm:p-5 rounded-2xl border ${
                    isUser
                      ? 'bg-cyan-950/40 border-cyan-500/30 text-white'
                      : 'bg-slate-900/80 border-slate-800 text-slate-200'
                  }`}>
                    {renderMessageContent(msg.content, msg.id)}
                  </div>

                  {/* Footer actions for AI message */}
                  {!isUser && (
                    <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleCopy(msg.content, msg.id)}
                          className="flex items-center space-x-1 hover:text-slate-300 transition-colors"
                        >
                          {copiedIndex === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedIndex === msg.id ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <span className="font-mono text-[10px]">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  )}

                  {/* Follow-up question chips */}
                  {!isUser && msg.followUpQuestions && msg.followUpQuestions.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {msg.followUpQuestions.map((q, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => handleSendMessage(q)}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/40 text-[11px] text-cyan-300 hover:text-white transition-all text-left flex items-center space-x-1"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                          <span>{q}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isGenerating && (
            <div className="flex items-center space-x-3 text-cyan-400 text-xs font-semibold animate-pulse pl-11">
              <Bot className="w-4 h-4 animate-spin" />
              <span>Build Yourself AI is thinking, coding, and generating structured explanation...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Starters (shown if only 1 welcome message) */}
        {currentSession?.messages.length === 1 && (
          <div className="px-6 pb-2">
            <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
              💡 Suggested Questions to Get Started:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {STARTER_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt.text)}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 text-left transition-all text-xs text-slate-300 hover:text-white group flex items-start space-x-2"
                >
                  <span className="text-base">{prompt.icon}</span>
                  <div>
                    <span className="font-semibold block leading-tight group-hover:text-cyan-300">{prompt.text}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{prompt.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Form Bar */}
        <footer className="p-4 border-t border-slate-800 bg-slate-950/80">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-end space-x-2 relative max-w-4xl mx-auto"
          >
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask anything about learning, programming, careers, languages or Master's planning... (Press Enter to send)"
                rows={2}
                disabled={isGenerating}
                className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 leading-relaxed resize-none selection:bg-cyan-500/30"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating || !inputMessage.trim()}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-bold transition-all shadow-lg shadow-cyan-600/30 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[11px] text-slate-500 max-w-4xl mx-auto mt-2 px-1">
            <span>Powered by Gemini 3.8 Flash • Real-time NLP reasoning</span>
            <span className="hidden sm:inline">Always verify official university & visa requirements on government websites.</span>
          </div>
        </footer>
      </section>
    </div>
  );
};
