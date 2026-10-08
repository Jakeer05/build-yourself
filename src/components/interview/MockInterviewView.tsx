import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { aiService, AiEvaluationResult } from '../../services/aiService';
import { initialInterviewQuestions, InterviewQuestionItem } from '../../data/interviewData';
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Send,
  RotateCcw,
  BarChart2,
  Award,
  Layers,
  Briefcase,
  Keyboard,
  Info,
  Check,
  X,
  TrendingUp,
  Activity,
  Lightbulb,
  FileText,
  Clock,
  Play,
  Pause,
  Sliders,
  Cpu,
  Radio,
  Gauge
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AttemptRecord {
  attemptNumber: number;
  inputMode: 'text' | 'voice';
  userAnswer: string;
  score: number;
  confidencePct?: number;
  wpm?: number;
}

export const MockInterviewView: React.FC = () => {
  const { user, speakText, addXP } = useApp();

  // 16 Required Interview Types
  const interviewTypes = [
    'Technical Interview',
    'System Design & Architecture',
    'Coding & Data Structures',
    'Behavioral & Leadership',
    'HR Interview',
    'Data Analyst Interview',
    'Data Scientist Interview',
    'Data Engineer Interview',
    'Software Engineer Interview',
    'Frontend Architecture Interview',
    'Backend API & Concurrency Interview',
    'Cloud & DevOps Infrastructure',
    'Machine Learning & AI Interview',
    'Security & Reliability Interview',
    'Master\'s Admissions Interview',
    'General Engineering Interview'
  ];

  // Requested Roles
  const targetRoles = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Data Scientist',
    'Full Stack Developer',
    'Cloud / DevOps Engineer',
    'Data Analyst',
    'Machine Learning Engineer',
    'Python Developer',
    'Java Developer',
    'Mobile Developer',
    'Cybersecurity Engineer'
  ];

  // Available Tech Stack Badges
  const techStackOptions = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 'Java',
    'Go', 'C++', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker',
    'Kubernetes', 'AWS', 'GraphQL', 'FastAPI', 'Spring Boot', 'Git'
  ];

  // Setup configuration state
  const [inSession, setInSession] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<string>('Software Engineer');
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>(['React', 'TypeScript', 'Node.js', 'PostgreSQL']);
  const [selectedInterviewType, setSelectedInterviewType] = useState<string>('Technical Interview');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Mid');
  const [targetCompany, setTargetCompany] = useState<string>('Top Tier Tech / Enterprise');

  // Active session questions
  const [questions, setQuestions] = useState<InterviewQuestionItem[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);

  // Input Mode: Text vs Voice
  const [inputMode, setInputMode] = useState<'text' | 'voice'>('voice');
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [finalTranscript, setFinalTranscript] = useState<string>('');
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluation, setEvaluation] = useState<AiEvaluationResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Voice recording & acoustic hardware telemetry state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [speechRecognitionSupported, setSpeechRecognitionSupported] = useState<boolean>(true);
  const [micPermissionDenied, setMicPermissionDenied] = useState<boolean>(false);
  const [noSpeechDetectedNotice, setNoSpeechDetectedNotice] = useState<boolean>(false);
  const [recognitionConfidence, setRecognitionConfidence] = useState<number | null>(null);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [wordsPerMinute, setWordsPerMinute] = useState<number | null>(null);
  const [liveVolume, setLiveVolume] = useState<number>(0); // 0 - 100%
  const [detectedTermMispronunciations, setDetectedTermMispronunciations] = useState<{ detected: string; expected: string; tip: string }[]>([]);

  // Recorded Audio Playback
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const finalTranscriptRef = useRef<string>('');
  const lastSpeechTimeRef = useRef<number>(0);
  const speechWatchdogTimerRef = useRef<any>(null);

  // Attempt History for the current question
  const [attempts, setAttempts] = useState<AttemptRecord[]>([]);

  // Session Completed State
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(false);
  const [sessionScores, setSessionScores] = useState<number[]>([]);

  const recognitionRef = useRef<any>(null);
  const recordingTimerRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Update default tech stacks when role changes
  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    if (role === 'Frontend Developer') {
      setSelectedTechStack(['React', 'TypeScript', 'Next.js', 'Git']);
    } else if (role === 'Backend Developer') {
      setSelectedTechStack(['Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Git']);
    } else if (role === 'Data Scientist') {
      setSelectedTechStack(['Python', 'PostgreSQL', 'FastAPI', 'Git']);
    } else if (role === 'Cloud / DevOps Engineer') {
      setSelectedTechStack(['AWS', 'Docker', 'Kubernetes', 'Python', 'Git']);
    } else if (role === 'Full Stack Developer' || role === 'Software Engineer') {
      setSelectedTechStack(['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']);
    } else if (role === 'Java Developer') {
      setSelectedTechStack(['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git']);
    } else if (role === 'Python Developer') {
      setSelectedTechStack(['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Git']);
    }
  };

  const toggleTechStack = (tech: string) => {
    setSelectedTechStack(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  // Check speech recognition support
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechRecognitionSupported(false);
    }
  }, []);

  // Timer for voice recording
  useEffect(() => {
    if (isRecording) {
      setRecordingSeconds(0);
      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
    }
    return () => {
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
    };
  }, [isRecording]);

  // Clean up media resources on unmount
  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(t => t.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Generate question pool tailored to selected role, tech stack, and difficulty
  const handleStartChamber = () => {
    const matched = initialInterviewQuestions.filter(q =>
      q.role.toLowerCase().includes(selectedRole.toLowerCase()) ||
      q.category.toLowerCase().includes(selectedInterviewType.toLowerCase().replace(' interview', ''))
    );

    const questionsList = matched.length >= 3 ? matched : initialInterviewQuestions.slice(0, 4);
    setQuestions(questionsList);
    setInSession(true);
    setCurrentQIndex(0);
    setUserAnswer('');
    setFinalTranscript('');
    setInterimTranscript('');
    finalTranscriptRef.current = '';
    setEvaluation(null);
    setSubmitError(null);
    setAttempts([]);
    setSessionCompleted(false);
    setSessionScores([]);
    setRecordedAudioUrl(null);
    setMicPermissionDenied(false);
    setNoSpeechDetectedNotice(false);
    speakText(questionsList[0].question, 'en-US');
  };

  // Switch input mode smoothly
  const handleSwitchInputMode = (mode: 'text' | 'voice') => {
    if (isRecording) {
      handleStopRecording();
    }
    setInputMode(mode);
    setSubmitError(null);
  };

  // Toggle Voice Recording with SpeechRecognition & Web Audio API
  const handleStartRecording = async () => {
    setRecordedAudioUrl(null);
    setMicPermissionDenied(false);
    setNoSpeechDetectedNotice(false);
    setSubmitError(null);
    audioChunksRef.current = [];

    // Reset current answer transcript for the new voice session
    setFinalTranscript('');
    setInterimTranscript('');
    finalTranscriptRef.current = '';
    setUserAnswer('');
    lastSpeechTimeRef.current = Date.now();

    // 1. Request microphone permission first using browser API
    let stream: MediaStream | null = null;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
      } catch (err: any) {
        console.warn('Microphone permission denied or failed:', err);
        setMicPermissionDenied(true);
        setIsRecording(false);
        return;
      }
    }

    // 2. Web Speech Recognition for Real-time Transcription
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechRecognitionSupported(false);
    } else {
      try {
        if (recognitionRef.current) {
          try { recognitionRef.current.abort(); } catch {}
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
          setIsRecording(true);
          lastSpeechTimeRef.current = Date.now();
        };

        recognition.onresult = (event: any) => {
          lastSpeechTimeRef.current = Date.now();
          setNoSpeechDetectedNotice(false);

          let currentInterim = '';
          let newlyFinalized = '';
          let confidenceAccumulator = 0;
          let confidenceCount = 0;

          // Accurately process results starting from event.resultIndex
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const res = event.results[i];
            const transcriptChunk = res[0]?.transcript || '';

            if (res.isFinal) {
              newlyFinalized += transcriptChunk + ' ';
              if (res[0]?.confidence) {
                confidenceAccumulator += res[0].confidence;
                confidenceCount++;
              }
            } else {
              currentInterim += transcriptChunk;
            }
          }

          if (newlyFinalized.trim()) {
            const updatedFinal = (finalTranscriptRef.current ? finalTranscriptRef.current + ' ' : '') + newlyFinalized.trim();
            finalTranscriptRef.current = updatedFinal.trim();
            setFinalTranscript(updatedFinal.trim());
          }

          setInterimTranscript(currentInterim.trim());

          // Complete live display: final recognized speech + interim speech
          const fullLiveText = [finalTranscriptRef.current, currentInterim.trim()].filter(Boolean).join(' ').trim();
          setUserAnswer(fullLiveText);

          if (confidenceCount > 0) {
            const avgConfidence = Math.round((confidenceAccumulator / confidenceCount) * 100);
            setRecognitionConfidence(avgConfidence);
          }
        };

        recognition.onerror = (e: any) => {
          console.warn('SpeechRecognition error:', e?.error);
          if (e?.error === 'not-allowed' || e?.error === 'permission-denied') {
            setMicPermissionDenied(true);
          }
          if (e?.error === 'no-speech') {
            setNoSpeechDetectedNotice(true);
          }
        };

        recognition.onend = () => {
          // If still marked as recording (browser auto-closed continuous stream), restart if active
          // otherwise keep transcripts intact
        };

        recognitionRef.current = recognition;
        recognition.start();
      } catch (recErr) {
        console.warn('Recognition start failed:', recErr);
      }
    }

    // 3. Real Web Audio API for Live Volume & Waveform Monitoring
    if (stream) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioContextClass();
        audioContextRef.current = audioCtx;

        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        analyserRef.current = analyser;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const checkVolume = () => {
          if (!analyserRef.current) return;
          analyserRef.current.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          const average = sum / bufferLength;
          // Scale to 0 - 100%
          const normalizedVol = Math.min(Math.round((average / 128) * 100), 100);
          setLiveVolume(normalizedVol);

          if (normalizedVol > 8) {
            lastSpeechTimeRef.current = Date.now();
            setNoSpeechDetectedNotice(false);
          }

          animFrameRef.current = requestAnimationFrame(checkVolume);
        };
        checkVolume();

        // 4. MediaRecorder for Real Playback
        if (typeof MediaRecorder !== 'undefined') {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;

          mediaRecorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) {
              audioChunksRef.current.push(e.data);
            }
          };

          mediaRecorder.onstop = () => {
            if (audioChunksRef.current.length > 0) {
              const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
              const url = URL.createObjectURL(audioBlob);
              setRecordedAudioUrl(url);
            }
          };

          mediaRecorder.start();
        }

        setIsRecording(true);
      } catch (audioErr) {
        console.warn('AudioContext / MediaRecorder setup failed:', audioErr);
        setIsRecording(true);
      }
    }

    // 5. Watchdog for "No speech detected" message
    if (speechWatchdogTimerRef.current) clearInterval(speechWatchdogTimerRef.current);
    speechWatchdogTimerRef.current = setInterval(() => {
      if (Date.now() - lastSpeechTimeRef.current > 7000 && !finalTranscriptRef.current.trim()) {
        setNoSpeechDetectedNotice(true);
      }
    }, 2000);
  };

  const handleStopRecording = () => {
    if (speechWatchdogTimerRef.current) {
      clearInterval(speechWatchdogTimerRef.current);
      speechWatchdogTimerRef.current = null;
    }

    // Stop Speech Recognition
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }

    // Stop MediaRecorder
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch {}
    }

    // Stop Audio Stream & Context
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(t => t.stop());
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setLiveVolume(0);
    setIsRecording(false);
    setNoSpeechDetectedNotice(false);

    // Finalize answer text from both final and any pending interim text
    const completeAnswer = [finalTranscriptRef.current, interimTranscript.trim()].filter(Boolean).join(' ').trim();
    if (completeAnswer) {
      setFinalTranscript(completeAnswer);
      finalTranscriptRef.current = completeAnswer;
      setUserAnswer(completeAnswer);
      setInterimTranscript('');
    }

    // Calculate real words-per-minute
    const words = completeAnswer.split(/\s+/).filter(Boolean).length;
    const durationMin = Math.max(recordingSeconds / 60, 0.1);
    const calculatedWpm = Math.round(words / durationMin);
    setWordsPerMinute(calculatedWpm);

    // Detect technical term phonetics
    detectTechnicalTerms(completeAnswer);
  };

  // Check for common phonetic slips in technical terms
  const detectTechnicalTerms = (text: string) => {
    const lower = text.toLowerCase();
    const detections: { detected: string; expected: string; tip: string }[] = [];

    const technicalDictionary = [
      { trigger: 'pandass', expected: 'Pandas', tip: 'Pronounce with crisp "Pan-das", avoid trailing hissed s.' },
      { trigger: 'sequel', expected: 'SQL', tip: 'Commonly called "S-Q-L" or "Sequel" interchangeably.' },
      { trigger: 'cube nettes', expected: 'Kubernetes', tip: 'Pronounce "Koo-ber-net-eez" (K8s).' },
      { trigger: 'post gress', expected: 'PostgreSQL', tip: 'Commonly pronounced "Post-gres-Q-L" or simply "Post-gres".' },
      { trigger: 'pie thon', expected: 'Python', tip: 'Pronounce "Py-thon" with a clean dental th.' },
      { trigger: 'dock er', expected: 'Docker', tip: 'Pronounce crisp "Dock-er".' },
      { trigger: 'rest api', expected: 'REST API', tip: 'Pronounce "Rest A-P-I".' },
      { trigger: 'micro service', expected: 'Microservices', tip: 'Stress the "Micro" and "Services".' }
    ];

    technicalDictionary.forEach(item => {
      if (lower.includes(item.trigger)) {
        detections.push({ detected: item.trigger, expected: item.expected, tip: item.tip });
      }
    });

    setDetectedTermMispronunciations(detections);
  };

  // Toggle playback of candidate's recorded answer
  const togglePlayRecordedAudio = () => {
    if (!recordedAudioUrl) return;

    if (!audioElementRef.current) {
      audioElementRef.current = new Audio(recordedAudioUrl);
      audioElementRef.current.onended = () => setIsPlayingAudio(false);
    }

    if (isPlayingAudio) {
      audioElementRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioElementRef.current.play();
      setIsPlayingAudio(true);
    }
  };

  // Evaluate Answer with AI rubric
  const handleEvaluate = async () => {
    // If still recording, stop recording first to ensure all audio is captured
    if (isRecording) {
      handleStopRecording();
    }

    const currentAnswer = userAnswer.trim();
    if (!currentAnswer) {
      setSubmitError('Please provide an answer before submitting.');
      return;
    }
    setSubmitError(null);

    setIsEvaluating(true);
    const q = questions[currentQIndex];

    // Pass voiceMetrics if voice mode was utilized
    const voiceMetrics = inputMode === 'voice' ? {
      wpm: wordsPerMinute,
      confidence: recognitionConfidence,
      durationSec: recordingSeconds,
      liveVolume
    } : null;

    const result = await aiService.evaluateInterviewAnswer(
      q.question,
      currentAnswer,
      `${selectedRole} (${selectedTechStack.join(', ')})`,
      selectedInterviewType,
      selectedDifficulty,
      voiceMetrics
    );

    setEvaluation(result);
    setSessionScores(prev => [...prev, result.score]);
    setIsEvaluating(false);

    // Record attempt
    const newAttempt: AttemptRecord = {
      attemptNumber: attempts.length + 1,
      inputMode,
      userAnswer: currentAnswer,
      score: result.score,
      confidencePct: recognitionConfidence || undefined,
      wpm: wordsPerMinute || undefined
    };
    setAttempts(prev => [...prev, newAttempt]);

    addXP(50);
  };

  // Practice Again (Retry current question)
  const handlePracticeAgain = () => {
    setUserAnswer('');
    setFinalTranscript('');
    setInterimTranscript('');
    finalTranscriptRef.current = '';
    setEvaluation(null);
    setSubmitError(null);
    setDetectedTermMispronunciations([]);
    setRecognitionConfidence(null);
    setWordsPerMinute(null);
    setRecordedAudioUrl(null);
  };

  // Next Question
  const handleNext = () => {
    if (currentQIndex + 1 < questions.length) {
      const nextIdx = currentQIndex + 1;
      setCurrentQIndex(nextIdx);
      setUserAnswer('');
      setFinalTranscript('');
      setInterimTranscript('');
      finalTranscriptRef.current = '';
      setEvaluation(null);
      setSubmitError(null);
      setAttempts([]);
      setDetectedTermMispronunciations([]);
      setRecognitionConfidence(null);
      setWordsPerMinute(null);
      setRecordedAudioUrl(null);
      speakText(questions[nextIdx].question, 'en-US');
    } else {
      setSessionCompleted(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      addXP(150);
    }
  };

  const currentQ = questions[currentQIndex] || questions[0];
  const overallAvg =
    sessionScores.length > 0
      ? Math.round(sessionScores.reduce((a, b) => a + b, 0) / sessionScores.length)
      : 85;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            <Mic className="w-3.5 h-3.5" />
            <span>AI Mock Interview Simulator • Voice & Text Input</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Stakes Technical & HR Interview Simulator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Practice real technical screening and behavioral questions with native voice input, speech recognition confidence metrics, side-by-side answer comparisons, model answers, and step-by-step actionable feedback.
          </p>
        </div>
      </div>

      {/* 2. Setup Chamber (Configuration) */}
      {!inSession ? (
        <div className="max-w-3xl mx-auto rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 space-y-6">
          <div className="flex items-center space-x-2 text-violet-400">
            <Briefcase className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">Configure Interview Chamber</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Career Role */}
            <div>
              <label className="text-slate-300 font-semibold block mb-1.5">Target Job Role</label>
              <select
                value={selectedRole}
                onChange={e => handleRoleChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-violet-500 font-medium"
              >
                {targetRoles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            {/* 16 Interview Types */}
            <div>
              <label className="text-slate-300 font-semibold block mb-1.5">Interview Type (16 Tracks)</label>
              <select
                value={selectedInterviewType}
                onChange={e => setSelectedInterviewType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-violet-500 font-medium"
              >
                {interviewTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="text-slate-300 font-semibold block mb-1.5">Seniority & Level</label>
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-violet-500 font-medium"
              >
                <option value="Junior">Junior (Entry / Intern / 0-2 YOE)</option>
                <option value="Mid">Mid (Mid-level Engineer / 2-5 YOE)</option>
                <option value="Senior">Senior (Senior Engineer / 5-8 YOE)</option>
                <option value="Lead">Lead (Staff / Principal / 8+ YOE)</option>
              </select>
            </div>

            {/* Target Company Profile */}
            <div>
              <label className="text-slate-300 font-semibold block mb-1.5">Target Company Bar</label>
              <select
                value={targetCompany}
                onChange={e => setTargetCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-violet-500 font-medium"
              >
                <option value="Top Tier Tech / Enterprise">Tier-1 Global Tech (Google, Amazon, Meta, Microsoft)</option>
                <option value="High Growth Startup">High-Growth Series B/C Unicorn Startup</option>
                <option value="Consulting / Professional Services">Top Strategy & Tech Consulting</option>
                <option value="Academic Master's Admissions">Master's Admissions Committee</option>
              </select>
            </div>
          </div>

          {/* Tech Stack Multi-Selector */}
          <div className="pt-2 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>Candidate Tech Stack Focus ({selectedTechStack.length} selected):</span>
              </label>
              <span className="text-[11px] text-slate-500">Tailors technical questions to your primary languages & tools</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {techStackOptions.map(tech => {
                const isSelected = selectedTechStack.includes(tech);
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => toggleTechStack(tech)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-violet-600 text-white border border-violet-400 shadow-sm'
                        : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="text-xs text-slate-400 space-y-0.5">
              <span>Supports both <strong>Keyboard Typing</strong> and <strong>Real-time Voice Microphone</strong> input.</span>
            </div>
            <button
              onClick={handleStartChamber}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-violet-600/30"
            >
              <span>Enter Interview Chamber</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : !sessionCompleted ? (
        /* 3. Active Interview Session */
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Progress & Header */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Question <strong className="text-white">{currentQIndex + 1}</strong> of {questions.length}
            </span>
            <div className="flex items-center space-x-2 font-mono">
              <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-violet-300 font-bold">
                {selectedInterviewType}
              </span>
              <span className="text-slate-400">• {selectedDifficulty}</span>
            </div>
          </div>

          {/* DUAL COMPARISON LAYOUT (Question on Left, Candidate Answer on Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* LEFT SIDE: Interview Question & Context (5 Cols) */}
            <div className="lg:col-span-5 rounded-3xl cosmic-card p-6 border border-violet-500/30 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                    Interviewer Prompt
                  </span>
                  <button
                    onClick={() => speakText(currentQ.question, 'en-US')}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-violet-300 hover:text-white transition-all"
                    title="Listen to question spoken aloud"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                  "{currentQ.question}"
                </h2>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <strong className="text-slate-300 block">Why the hiring manager asks this:</strong>
                  <p>{currentQ.whyInterviewerAsks}</p>
                </div>

                {currentQ.keyPointsToCover && currentQ.keyPointsToCover.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Expected Key Competencies:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {currentQ.keyPointsToCover.map((pt: string, i: number) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <Check className="w-3 h-3 text-violet-400 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {attempts.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Current Attempts: <strong>{attempts.length}</strong></span>
                  <span className="text-emerald-400 font-bold">Latest Score: {evaluation?.score || attempts[attempts.length - 1].score}%</span>
                </div>
              )}
            </div>

            {/* RIGHT SIDE: Candidate Answer (Voice / Text) (7 Cols) */}
            <div className="lg:col-span-7 rounded-3xl cosmic-card p-6 border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-3">
                {/* Input Method Switcher */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Your Response
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleSwitchInputMode('text')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                        inputMode === 'text'
                          ? 'bg-violet-600 text-white font-bold'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      <Keyboard className="w-3.5 h-3.5" />
                      <span>Type Answer</span>
                    </button>

                    <button
                      onClick={() => handleSwitchInputMode('voice')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                        inputMode === 'voice'
                          ? 'bg-violet-600 text-white font-bold'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      <Mic className="w-3.5 h-3.5" />
                      <span>Answer by Voice</span>
                    </button>
                  </div>
                </div>

                {/* Microphone / Speech Recognition Warning Banners */}
                {micPermissionDenied && (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300 flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>
                      Microphone permission was denied. Please allow microphone access in your browser settings and try again.
                    </span>
                  </div>
                )}

                {!speechRecognitionSupported && (
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-300 flex items-start space-x-2">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      Live speech recognition is not supported in this browser. Please use Chrome or Edge, or use Type Answer.
                    </span>
                  </div>
                )}

                {noSpeechDetectedNotice && isRecording && (
                  <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 flex items-center space-x-2 animate-in fade-in">
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>No speech detected. Please move closer to your microphone and speak clearly.</span>
                  </div>
                )}

                {/* Voice Controls & Acoustic Telemetry Bar */}
                {inputMode === 'voice' && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {isRecording ? (
                          <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold animate-pulse">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                            <span>Recording Audio ({recordingSeconds}s)...</span>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400">Microphone ready. Click button to speak.</span>
                        )}
                      </div>

                      {isRecording ? (
                        <button
                          onClick={handleStopRecording}
                          className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-rose-600/20"
                        >
                          <MicOff className="w-3.5 h-3.5" />
                          <span>Stop Recording</span>
                        </button>
                      ) : (
                        <button
                          onClick={handleStartRecording}
                          className="px-4 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-violet-600/20"
                        >
                          <Mic className="w-3.5 h-3.5" />
                          <span>🎤 Answer by Voice</span>
                        </button>
                      )}
                    </div>

                    {/* Real-time Web Audio API Volume Meter & Positioning Advice */}
                    {isRecording && (
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-slate-400 flex items-center space-x-1">
                            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                            <span>Mic Input Level:</span>
                          </span>
                          <span className={`font-bold ${
                            liveVolume < 15 ? 'text-amber-400' :
                            liveVolume <= 75 ? 'text-emerald-400' :
                            'text-rose-400'
                          }`}>
                            {liveVolume}% RMS Volume
                          </span>
                        </div>

                        {/* Animated Volume Meter Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                          <div
                            className={`h-full transition-all duration-75 ${
                              liveVolume < 15 ? 'bg-amber-500' :
                              liveVolume <= 75 ? 'bg-gradient-to-r from-emerald-500 to-cyan-400' :
                              'bg-rose-500'
                            }`}
                            style={{ width: `${liveVolume}%` }}
                          />
                        </div>

                        {/* Microphone Position Guidance */}
                        <div className="text-[11px] flex items-center space-x-1.5">
                          {liveVolume < 15 ? (
                            <span className="text-amber-400 font-medium">
                              ⚠️ Low acoustic pickup — move microphone 3-6 inches closer to your mouth.
                            </span>
                          ) : liveVolume <= 75 ? (
                            <span className="text-emerald-400 font-medium">
                              ✓ Optimal acoustic pickup distance & volume. Speak naturally.
                            </span>
                          ) : (
                            <span className="text-rose-400 font-medium">
                              ⚠️ Volume clipping — move microphone back slightly to avoid distortion.
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Recorded Audio Playback Option */}
                    {recordedAudioUrl && !isRecording && (
                      <div className="p-2.5 rounded-xl bg-violet-950/20 border border-violet-500/30 flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-violet-300">
                          <Volume2 className="w-4 h-4 text-violet-400" />
                          <span>Candidate Voice Recording Captured ({recordingSeconds}s)</span>
                        </div>
                        <button
                          onClick={togglePlayRecordedAudio}
                          className="px-3 py-1 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center space-x-1 transition-all"
                        >
                          {isPlayingAudio ? (
                            <>
                              <Pause className="w-3 h-3" />
                              <span>Pause Audio</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3 h-3 fill-current" />
                              <span>Play My Audio</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Speech Recognition Quality & Pacing Telemetry */}
                    {recognitionConfidence !== null && (
                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                        <div>
                          <span>Speech Clarity / Confidence: </span>
                          <strong className={recognitionConfidence >= 80 ? 'text-emerald-400' : 'text-amber-400'}>
                            {recognitionConfidence}%
                          </strong>
                        </div>
                        {wordsPerMinute !== null && (
                          <div>
                            <span>Speaking Rate: </span>
                            <strong className={
                              wordsPerMinute < 110 ? 'text-amber-400' :
                              wordsPerMinute <= 155 ? 'text-cyan-400 font-bold' :
                              'text-rose-400'
                            }>
                              {wordsPerMinute} WPM
                            </strong>
                            <span className="text-[10px] text-slate-500 block">
                              {wordsPerMinute < 110 ? ' (Slightly deliberate)' :
                               wordsPerMinute <= 155 ? ' (Ideal interview cadence)' :
                               ' (Fast — take breaths)'}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Candidate Answer Box / Transcript */}
                <div className="space-y-1.5">
                  <div className="relative">
                    <textarea
                      value={userAnswer}
                      onChange={e => {
                        setUserAnswer(e.target.value);
                        setSubmitError(null);
                        if (inputMode === 'voice') {
                          setFinalTranscript(e.target.value);
                          finalTranscriptRef.current = e.target.value;
                        }
                      }}
                      placeholder={
                        inputMode === 'voice'
                          ? 'Speech transcript will appear here in real-time as you speak...'
                          : 'Type your structured answer here using STAR (Situation, Task, Action, Result) with measurable metrics...'
                      }
                      rows={6}
                      className="w-full p-4 rounded-2xl bg-[#0a0f1d] border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 leading-relaxed resize-none font-sans"
                    />

                    {/* Live Transcript Stream Indicator inside text area when speaking */}
                    {isRecording && (
                      <div className="absolute bottom-3 right-3 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-[10px] text-violet-300 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span>Live Transcribing</span>
                      </div>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-300 flex items-center space-x-2 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 px-1 font-mono">
                    <span>{userAnswer.trim().split(/\s+/).filter(Boolean).length} words</span>
                    {inputMode === 'voice' && (
                      <span className="text-violet-400 font-medium">
                        {isRecording ? 'Listening live via microphone...' : 'Speech Transcript Captured'}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Evaluate Button */}
              {!evaluation && (
                <button
                  onClick={handleEvaluate}
                  disabled={isEvaluating}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md shadow-violet-600/20 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isEvaluating ? 'Analyzing Response with AI Rubric...' : 'Submit Answer for AI Evaluation'}</span>
                </button>
              )}
            </div>
          </div>

          {/* 4. EVALUATION REPORT & PERFECT ANSWER COMPARISON */}
          {evaluation && (
            <div className="rounded-3xl bg-slate-900/90 border border-violet-500/40 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 shadow-2xl">
              {/* Scorecard Header & Hire Recommendation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl border ${
                      evaluation.score >= 80
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                        : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                    }`}
                  >
                    {evaluation.score}%
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        AI Candidate Evaluation
                      </h3>
                      {/* Hire Recommendation Badge */}
                      {(() => {
                        const rec = evaluation.hireRecommendation || (
                          evaluation.score >= 88 ? 'Strong Hire' :
                          evaluation.score >= 78 ? 'Hire' :
                          evaluation.score >= 68 ? 'Lean Hire' :
                          'Needs More Practice'
                        );
                        const badgeColor =
                          rec === 'Strong Hire' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                          rec === 'Hire' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' :
                          rec === 'Lean Hire' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                          'bg-rose-500/20 text-rose-300 border-rose-500/40';
                        return (
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeColor}`}>
                            {rec}
                          </span>
                        );
                      })()}
                    </div>
                    <p className="text-xs text-slate-400">
                      Standardized Evaluation: Technical Accuracy • Communication • Problem Solving • Delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePracticeAgain}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Practice Again (Retry)</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <span>{currentQIndex + 1 < questions.length ? 'Next Question →' : 'Complete Session'}</span>
                  </button>
                </div>
              </div>

              {/* 6-Pillar Standardized Rubric Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {/* A. Technical Accuracy */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">A. Technical Accuracy</span>
                    <span className="font-mono font-bold text-cyan-400">
                      {evaluation.rubricScores?.technicalAccuracy ?? evaluation.score}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-cyan-400"
                      style={{ width: `${evaluation.rubricScores?.technicalAccuracy ?? evaluation.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {evaluation.rubricFeedback?.technicalAccuracy || evaluation.technicalAccuracy}
                  </p>
                </div>

                {/* B. Relevance to Question */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">B. Relevance to Question</span>
                    <span className="font-mono font-bold text-indigo-400">
                      {evaluation.rubricScores?.relevance ?? evaluation.score}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-indigo-400"
                      style={{ width: `${evaluation.rubricScores?.relevance ?? evaluation.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {evaluation.rubricFeedback?.relevance || 'Measures direct alignment with interviewer prompt.'}
                  </p>
                </div>

                {/* C. Completeness */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">C. Completeness</span>
                    <span className="font-mono font-bold text-emerald-400">
                      {evaluation.rubricScores?.completeness ?? evaluation.score}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400"
                      style={{ width: `${evaluation.rubricScores?.completeness ?? evaluation.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {evaluation.rubricFeedback?.completeness || 'Evaluates coverage of required core technical concepts.'}
                  </p>
                </div>

                {/* D. Problem Solving */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">D. Problem Solving</span>
                    <span className="font-mono font-bold text-amber-400">
                      {evaluation.rubricScores?.problemSolving ?? evaluation.score}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-amber-400"
                      style={{ width: `${evaluation.rubricScores?.problemSolving ?? evaluation.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {evaluation.rubricFeedback?.problemSolving || 'Evaluates depth of root cause diagnosis and architectural trade-offs.'}
                  </p>
                </div>

                {/* E. Communication */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">E. Communication</span>
                    <span className="font-mono font-bold text-violet-400">
                      {evaluation.rubricScores?.communication ?? evaluation.score}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-violet-400"
                      style={{ width: `${evaluation.rubricScores?.communication ?? evaluation.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {evaluation.rubricFeedback?.communication || evaluation.communicationFeedback}
                  </p>
                </div>

                {/* F. Delivery & Pace */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">F. Delivery & Pace</span>
                    <span className="font-mono font-bold text-cyan-300">
                      {evaluation.rubricScores?.deliveryPace !== null && evaluation.rubricScores?.deliveryPace !== undefined
                        ? `${evaluation.rubricScores.deliveryPace}%`
                        : evaluation.deliveryAnalysisAvailable && wordsPerMinute
                        ? `${wordsPerMinute} WPM`
                        : 'N/A (Text Answer)'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-cyan-300"
                      style={{
                        width: `${
                          evaluation.rubricScores?.deliveryPace !== null && evaluation.rubricScores?.deliveryPace !== undefined
                            ? evaluation.rubricScores.deliveryPace
                            : evaluation.deliveryAnalysisAvailable
                            ? 85
                            : 0
                        }%`
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {evaluation.rubricFeedback?.deliveryPace ||
                      (inputMode === 'voice'
                        ? 'Evaluated from live acoustic metrics and candidate cadence.'
                        : 'Voice delivery analysis is only evaluated when using Answer by Voice.')}
                  </p>
                </div>
              </div>

              {/* IDEAL ANSWER (Prominent Benchmark) */}
              <div className="p-6 rounded-2xl bg-violet-950/20 border border-violet-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-300 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    <span>IDEAL ANSWER</span>
                  </span>
                  <span className="text-[11px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                    Official Technical Benchmark
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-violet-100 leading-relaxed font-sans bg-slate-950/60 p-4 rounded-xl border border-violet-500/20">
                  {evaluation.modelAnswer}
                </p>
              </div>

              {/* WHAT YOU DID WELL & WHAT YOU SHOULD IMPROVE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WHAT YOU DID WELL */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WHAT YOU DID WELL</span>
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {evaluation.strengths.map((st, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WHAT YOU SHOULD IMPROVE */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>WHAT YOU SHOULD IMPROVE</span>
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {evaluation.improvements.map((imp, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* BETTER WAY TO ANSWER */}
              {evaluation.betterWayToAnswer && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-indigo-500/30 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center space-x-1.5">
                    <Lightbulb className="w-4 h-4" />
                    <span>BETTER WAY TO ANSWER</span>
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {evaluation.betterWayToAnswer}
                  </p>
                </div>
              )}

              {/* Submitted Answer Recap */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block">Your Evaluated Answer ({inputMode === 'voice' ? 'Voice' : 'Text'}):</span>
                <p className="italic text-slate-300">"{userAnswer}"</p>
              </div>

              {/* Specific Actionable Improvement Steps */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>5-Step Targeted Improvement Blueprint</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  {evaluation.improvements.map((imp, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voice Quality Feedback & Misrecognized Technical Terms (if Voice used) */}
              {inputMode === 'voice' && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-3">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Activity className="w-4 h-4" />
                    <span>Voice Quality & Acoustic Clarity Feedback</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-500 block mb-1">Pacing & Speed:</span>
                      <strong>{wordsPerMinute ? `${wordsPerMinute} WPM` : 'Normal'}</strong> (Optimal range: 130-160 WPM)
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-500 block mb-1">Acoustic Clarity:</span>
                      <strong>{recognitionConfidence ? `${recognitionConfidence}% Recognition` : 'Good'}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-500 block mb-1">Delivery Recommendation:</span>
                      <span>Pause 1 second between key bullet points to project executive composure.</span>
                    </div>
                  </div>

                  {detectedTermMispronunciations.length > 0 && (
                    <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-1.5">
                      <span className="text-amber-400 font-bold block">Technical Term Pronunciation Guidance:</span>
                      {detectedTermMispronunciations.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-slate-300">
                          <span>Detected: <code className="text-rose-400">{item.detected}</code> → Expected: <strong className="text-emerald-400">{item.expected}</strong></span>
                          <span className="text-slate-400 italic text-[11px]">{item.tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* 5. Comprehensive Session Summary Report */
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="rounded-3xl cosmic-card p-8 border border-slate-800 text-center space-y-4 shadow-2xl">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center font-bold text-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              {overallAvg}%
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-white">
                Mock Interview Simulation Complete! 🎓
              </h2>
              <p className="text-xs text-slate-400">
                Performance recorded for {selectedRole} ({selectedInterviewType}).
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Questions Completed</span>
                <span className="text-lg font-bold text-white">{questions.length}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Overall Score</span>
                <span className="text-lg font-bold text-emerald-400">{overallAvg}%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">XP Earned</span>
                <span className="text-lg font-bold text-amber-400">+200 XP</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 pt-4">
              <button
                onClick={handleStartChamber}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold flex items-center space-x-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Simulate Another Round</span>
              </button>
              <button
                onClick={() => setInSession(false)}
                className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center space-x-1.5"
              >
                <span>Return to Setup Chamber</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
