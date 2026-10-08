import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { aiService, AiChatMessage } from '../../services/aiService';
import {
  Bot,
  Sparkles,
  Send,
  X,
  Volume2,
  Minimize2,
  Maximize2,
  RotateCcw,
  Copy,
  Check,
  Mic,
  MicOff,
  Code2,
  Globe2,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Flame,
  Zap,
  MessageSquare
} from 'lucide-react';

type AssistantMode = 'universal' | 'tech' | 'language' | 'career' | 'masters';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  followUpQuestions?: string[];
  codeSnippets?: { language: string; code: string }[];
}

const MODE_CONFIGS: {
  id: AssistantMode;
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  color: string;
  quickPrompts: string[];
}[] = [
  {
    id: 'universal',
    name: 'All-in-One',
    icon: <Sparkles className="w-3.5 h-3.5" />,
    placeholder: 'Ask anything (e.g. explain tuple in Python, German A1, 8-month roadmap)...',
    color: 'from-cyan-500 to-blue-600',
    quickPrompts: [
      'Explain tuple in Python with code examples',
      'Explain SQL INNER vs LEFT JOIN',
      'How to plan an 8-month Data Analyst path?',
      'German A1 greetings and cases overview',
      'What are Germany Master’s APS requirements?'
    ]
  },
  {
    id: 'tech',
    name: 'Code & Tech',
    icon: <Code2 className="w-3.5 h-3.5" />,
    placeholder: 'Ask a coding concept, bug fix, algorithm, or architecture...',
    color: 'from-blue-500 to-indigo-600',
    quickPrompts: [
      'Tuple vs List in Python: syntax, immutability & performance',
      'How do SQL window functions work?',
      'Explain React useEffect dependency array',
      'How does binary search work with code?',
      'Explain REST vs GraphQL with examples'
    ]
  },
  {
    id: 'language',
    name: 'Language & Speech',
    icon: <Globe2 className="w-3.5 h-3.5" />,
    placeholder: 'Practice speaking, grammar, pronunciation in 14 languages...',
    color: 'from-emerald-500 to-teal-600',
    quickPrompts: [
      'German: Nominative vs Accusative vs Dative cases',
      'Spanish: Difference between Por and Para with examples',
      'French: Passé Composé with Être vs Avoir',
      'Japanese: Hiragana vs Katakana vs Kanji basics',
      'Test my English IELTS speaking introduction'
    ]
  },
  {
    id: 'career',
    name: 'Career & Interview',
    icon: <Briefcase className="w-3.5 h-3.5" />,
    placeholder: 'Ask interview questions, resume review, career roadmaps...',
    color: 'from-amber-500 to-orange-600',
    quickPrompts: [
      'Simulate a junior Data Analyst interview question',
      'STAR method response for behavioral interviews',
      'How to structure my technical project on GitHub',
      'Plan 2 hours daily study for 8 months to land a tech job',
      'What are the most asked Python interview questions?'
    ]
  },
  {
    id: 'masters',
    name: 'Study Abroad',
    icon: <GraduationCap className="w-3.5 h-3.5" />,
    placeholder: 'Ask Germany/US/EU admissions, APS, SOP, visas...',
    color: 'from-purple-500 to-pink-600',
    quickPrompts: [
      'Germany Master’s admission step-by-step checklist',
      'What is APS certificate and how do Indian students apply?',
      'How to write a strong Statement of Purpose (SOP)?',
      'Blocked Account (Sperrkonto) requirements and amount',
      'Tuition-free public universities in Germany for MS'
    ]
  }
];

export const GlobalAiAssistant: React.FC = () => {
  const { user, speakText, activeView, selectedLanguageId } = useApp();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [activeMode, setActiveMode] = useState<AssistantMode>('universal');
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-init',
      sender: 'ai',
      text: `Hello ${user?.name ? user.name.split(' ')[0] : 'there'}! 👋 I am **Build Yourself AI**, your Universal Technical & Communication Assistant.

I can help you:
- 💻 **Master Code & Engineering:** Python, SQL, React, DSA, APIs, Debugging.
- 🗣️ **Learn 14 World Languages:** German, French, Spanish, Japanese, Hindi, Telugu, and more (CEFR A1–C2).
- 🗺️ **Accelerate Career:** Interview preparation, 8-month roadmaps, Resume review.
- 🎓 **Study Abroad:** Germany APS, DAAD university search, SOP drafting, and Student Visas.

Select a track above or ask any topic below!`,
      timestamp: 'Just now',
      followUpQuestions: [
        'Explain tuple in Python with code examples',
        'How to become a Data Analyst in 8 months?',
        'German A1 cases and pronunciation rules'
      ]
    }
  ]);

  // Auto-scroll chat to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, loading]);

  // Handle Send Message
  const handleSendMessage = async (customPrompt?: string) => {
    const query = (customPrompt || input).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInput('');
    setLoading(true);

    try {
      // Build conversation history for multi-turn reasoning
      const historyPayload: AiChatMessage[] = messages.slice(-8).map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      }));
      historyPayload.push({ role: 'user', content: query });

      const contextPayload = {
        courseTitle: user?.targetCareer || 'Software & Data Engineering',
        technology: user?.targetCareer,
        currentView: activeView,
        targetCountry: user?.targetCountry || 'Germany',
        language: selectedLanguageId || 'German'
      };

      const aiResponse = await aiService.chat(
        historyPayload,
        activeMode === 'tech' ? 'teach' : activeMode === 'language' ? 'explain' : 'explain',
        contextPayload
      );

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponse.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        followUpQuestions: aiResponse.followUpQuestions
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch {
      const fallbackMsg: Message = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: `### Build Yourself AI Assistant
Here is an overview of **${query}**:

- **Core Concept:** In engineering and modern languages, mastering fundamentals with deliberate practice yields high retention.
- **Next Step:** Break this question down into smaller concepts and practice writing an implementation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  // Copy code snippet helper
  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Voice speech-to-text dictation
  const toggleSpeechRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-voice-err-${Date.now()}`,
          sender: 'ai',
          text: 'Speech recognition is not supported in this browser environment. Please type your message in the chat input.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      return;
    }

    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsRecording(true);
      recognition.onend = () => setIsRecording(false);
      recognition.onerror = () => setIsRecording(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInput(prev => (prev ? `${prev} ${transcript}` : transcript));
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsRecording(false);
    }
  };

  // Clear chat
  const handleClearChat = () => {
    setMessages([
      {
        id: `msg-reset-${Date.now()}`,
        sender: 'ai',
        text: `Conversation cleared! How can I assist your learning, technical skills, or career today?`,
        timestamp: 'Just now',
        followUpQuestions: [
          'Explain tuple in Python with code examples',
          'How to plan an 8-month Data Analyst path?',
          'German A1 cases and pronunciation rules'
        ]
      }
    ]);
  };

  const currentModeConfig = MODE_CONFIGS.find(m => m.id === activeMode) || MODE_CONFIGS[0];

  // Helper to render markdown-like text with formatted code blocks
  const renderMessageContent = (text: string, msgId: string) => {
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.substring(lastIndex, match.index)
        });
      }

      parts.push({
        type: 'code',
        language: match[1] || 'code',
        code: match[2].trim(),
        blockId: `${msgId}-code-${parts.length}`
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex)
      });
    }

    return (
      <div className="space-y-3 leading-relaxed">
        {parts.map((part, pIdx) => {
          if (part.type === 'code') {
            const isCopied = copiedCodeId === part.blockId;
            return (
              <div
                key={pIdx}
                className="my-3 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 font-mono text-[11.5px]"
              >
                <div className="flex items-center justify-between px-3.5 py-1.5 bg-slate-900 border-b border-slate-800 text-slate-400">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    {part.language || 'code'}
                  </span>
                  <button
                    onClick={() => handleCopyCode(part.code || '', part.blockId || '')}
                    className="flex items-center space-x-1 text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy code to clipboard"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3.5 overflow-x-auto text-emerald-300 leading-normal selection:bg-emerald-500/30">
                  <code>{part.code}</code>
                </pre>
              </div>
            );
          }

          // Format basic Markdown headers and bold text
          const lines = (part.content || '').split('\n');
          return (
            <div key={pIdx} className="space-y-1.5">
              {lines.map((line, lIdx) => {
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={lIdx} className="text-sm font-bold text-white pt-2 pb-0.5 border-b border-slate-800/60 flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{line.replace('### ', '')}</span>
                    </h3>
                  );
                }
                if (line.startsWith('#### ')) {
                  return (
                    <h4 key={lIdx} className="text-xs font-bold text-cyan-300 pt-1.5">
                      {line.replace('#### ', '')}
                    </h4>
                  );
                }
                if (line.startsWith('- ') || line.startsWith('* ')) {
                  return (
                    <div key={lIdx} className="flex items-start space-x-2 pl-1.5 text-slate-300">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{line.substring(2)}</span>
                    </div>
                  );
                }
                if (/^\d+\.\s/.test(line)) {
                  return (
                    <div key={lIdx} className="flex items-start space-x-2 pl-1.5 text-slate-300">
                      <span className="text-violet-400 font-mono font-bold text-[10px]">
                        {line.match(/^\d+\./)?.[0]}
                      </span>
                      <span>{line.replace(/^\d+\.\s*/, '')}</span>
                    </div>
                  );
                }
                if (!line.trim()) {
                  return <div key={lIdx} className="h-1.5" />;
                }
                return (
                  <p key={lIdx} className="text-slate-200">
                    {line}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  // ==========================================
  // FLOATING BUTTON (When closed)
  // ==========================================
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Subtle breathing glow ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse pointer-events-none" />

        {/* Round Floating AI Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[2px] shadow-2xl shadow-cyan-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none"
          title="Ask Build Yourself AI"
          aria-label="Open Build Yourself AI Assistant"
        >
          <div className="w-full h-full rounded-full bg-[#0a0f1d]/90 backdrop-blur-md flex items-center justify-center group-hover:bg-[#0a0f1d]/60 transition-colors">
            <div className="relative">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 group-hover:text-white transition-colors animate-spin-slow" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-ping" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
            </div>
          </div>
        </button>

        {/* Tooltip on hover */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-white whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 hidden sm:flex items-center space-x-1.5">
          <Bot className="w-3.5 h-3.5 text-cyan-400" />
          <span>Ask Build Yourself AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAT ASSISTANT PANEL (When open)
  // ==========================================
  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 z-50 rounded-3xl cosmic-card border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 overflow-hidden flex flex-col transition-all duration-300 bg-[#090e1c]/95 backdrop-blur-xl ${
        isMinimized
          ? 'w-80 h-16'
          : 'w-[94vw] sm:w-[480px] md:w-[500px] h-[660px] max-h-[88vh]'
      }`}
    >
      {/* Assistant Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
            <Bot className="w-4 h-4" />
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border-2 border-slate-900" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h3 className="text-xs font-bold text-white tracking-tight">Build Yourself AI</h3>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Online
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Universal Technical & Communication Assistant</p>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-slate-400">
          <button
            onClick={handleClearChat}
            className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
            title="Clear Chat / New Session"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
            title="Close Assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Mode Selector Tabs */}
          <div className="px-3 py-2 bg-slate-950/70 border-b border-slate-800/80 flex items-center space-x-1 overflow-x-auto no-scrollbar">
            {MODE_CONFIGS.map(mode => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                  activeMode === mode.id
                    ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                {mode.icon}
                <span>{mode.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-slate-950/40 border-b border-slate-800/60 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[10px] uppercase font-bold text-slate-500 whitespace-nowrap">Try:</span>
            {currentModeConfig.quickPrompts.slice(0, 3).map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-0.5 rounded-full text-[10px] bg-slate-900 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 whitespace-nowrap transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map(m => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[92%] sm:max-w-[88%] shadow-md ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800/90 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[10px] text-slate-400">
                    <span className="font-semibold text-white/90 flex items-center space-x-1">
                      {m.sender === 'user' ? (
                        <span>You</span>
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>Build Yourself AI</span>
                        </>
                      )}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span>{m.timestamp}</span>
                      {m.sender === 'ai' && (
                        <button
                          onClick={() => speakText(m.text.slice(0, 250))}
                          className="hover:text-cyan-300 transition-colors p-0.5"
                          title="Listen with native audio speech"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Render content */}
                  {renderMessageContent(m.text, m.id)}

                  {/* Follow-up question chips */}
                  {m.followUpQuestions && m.followUpQuestions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-800/70 space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-cyan-400/90 tracking-wider block">
                        Suggested Next Questions:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {m.followUpQuestions.map((q, qIdx) => (
                          <button
                            key={qIdx}
                            onClick={() => handleSendMessage(q)}
                            className="text-[10px] text-left px-2.5 py-1 rounded-lg bg-slate-950/80 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-200 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center space-x-1"
                          >
                            <span>{q}</span>
                            <ChevronRight className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-300 text-xs w-max animate-pulse">
                <Sparkles className="w-4 h-4 animate-spin text-cyan-400" />
                <span>Formulating comprehensive teaching response...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input & Voice Controls */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <div className="flex items-center space-x-2 bg-slate-900/90 rounded-2xl p-1.5 border border-slate-800 focus-within:border-cyan-500/50 shadow-inner">
              <button
                type="button"
                onClick={toggleSpeechRecognition}
                className={`p-2 rounded-xl transition-all ${
                  isRecording
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800'
                }`}
                title={isRecording ? 'Listening... click to stop' : 'Voice input (Speak)'}
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder={currentModeConfig.placeholder}
                className="flex-1 bg-transparent px-2 text-xs text-white placeholder-slate-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={loading || !input.trim()}
                className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Send message (Enter)"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between px-2 pt-1 text-[10px] text-slate-500 font-mono">
              <span>Mode: <strong>{currentModeConfig.name}</strong></span>
              <span>Press Enter to send</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
