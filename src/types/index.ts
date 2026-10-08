export type UserRole = 'student' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  targetCareer: string;
  currentSkillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  targetCountry: string;
  studyHoursPerDay: number;
  education: string;
  college: string;
  graduationYear: number;
  xp: number;
  level: number;
  streakDays: number;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  completedCourseIds: string[];
  earnedCertificateIds: string[];
  activeRoadmapId?: string;
  targetIntake?: string;
  targetDegree?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  codeSnippet?: string;
}

export interface Exercise {
  id: string;
  title: string;
  instructions: string;
  starterCode?: string;
  solutionCode?: string;
  language: string;
  hints: string[];
}

export type CourseCategory =
  | 'Programming'
  | 'Web Development'
  | 'Data'
  | 'Databases'
  | 'Cloud'
  | 'Computer Science'
  | 'AI & Machine Learning'
  | 'DevOps'
  | 'Cybersecurity'
  | 'Mobile Development'
  | 'Software Engineering'
  | 'Tools & Technologies';

export interface CodeExampleItem {
  title: string;
  code: string;
  lineByLineExplanation?: string[];
  exampleOutput?: string;
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'concept' | 'video' | 'coding' | 'quiz' | 'project';
  summary: string;
  content: string;
  conceptExplanation?: string;
  beginnerExplanation?: string;
  whyUseful?: string;
  syntax?: string;
  codeExamples?: CodeExampleItem[];
  commonMistakes?: string[];
  bestPractices?: string[];
  practicalExample?: string;
  codeSnippet?: string;
  language?: string;
  quiz?: QuizQuestion[];
  exercise?: Exercise;
  resources?: { title: string; url: string; type: 'doc' | 'video' | 'article' }[];
  isCompleted?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  moduleTest?: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CourseCategory;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tagline: string;
  description: string;
  thumbnail: string;
  iconName: string;
  modulesCount: number;
  lessonsCount: number;
  durationHours: number;
  rating: number;
  enrolledStudentsCount: number;
  prerequisites: string[];
  learningOutcomes: string[];
  modules: CourseModule[];
  finalProject?: {
    title: string;
    description: string;
    starterCode?: string;
    requirements: string[];
  };
  finalMockTest?: QuizQuestion[];
  passingScorePercent: number;
  published: boolean;
  featured?: boolean;
}

export interface RoadmapStep {
  id: string;
  title: string;
  category: 'Core Language' | 'Database' | 'Framework' | 'Tooling' | 'Project' | 'Career Prep';
  durationWeeks: number;
  description: string;
  keyTopics: string[];
  recommendedCourses: string[];
  practiceProjects: string[];
  milestoneTest: string;
  status: 'locked' | 'in_progress' | 'completed';
}

export interface CareerRoadmap {
  id: string;
  title: string;
  role: string;
  category: string;
  estimatedMonths: number;
  studyHoursPerWeek: number;
  averageSalary: string;
  demandLevel: 'Very High' | 'High' | 'Growing';
  overview: string;
  targetAudience: string;
  steps: RoadmapStep[];
}

export type CareerLearningLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Projects' | 'Portfolio' | 'Interview Preparation';

export interface CareerLessonMistake {
  mistake: string;
  fix: string;
}

export interface CareerLessonPractice {
  task: string;
  hint: string;
  solutionSnippet?: string;
}

export interface CareerLessonQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CareerLessonMiniChallenge {
  title: string;
  prompt: string;
  starterCode?: string;
  solution: string;
  testCases?: { input: string; output: string }[];
}

export interface CareerLesson {
  id: string;
  milestoneId: string;
  order: number;
  title: string;
  durationMinutes: number;
  conceptExplanation: string;
  whyImportant: string;
  syntax: string;
  exampleDescription: string;
  codeSnippet: string;
  codeLanguage: string;
  codeExplanation: string[];
  realWorldExample: string;
  commonMistakes: CareerLessonMistake[];
  practiceExercises: CareerLessonPractice[];
  quizQuestions: CareerLessonQuiz[];
  miniChallenge: CareerLessonMiniChallenge;
}

export interface CareerProject {
  id: string;
  title: string;
  milestoneTitle?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Capstone';
  estimatedHours: number;
  overview: string;
  architecture: string;
  requirements: string[];
  techStack: string[];
  starterCode?: string;
  sampleOutput?: string;
  deliverables: string[];
  isCapstone?: boolean;
}

export interface CareerMilestone {
  id: string;
  careerId: string;
  title: string;
  level: CareerLearningLevel;
  order: number;
  description: string;
  skillsLearned: string[];
  lessons: CareerLesson[];
  projects?: CareerProject[];
}

export interface CareerInterviewItem {
  question: string;
  category: 'Technical' | 'Coding' | 'System Design' | 'Behavioral';
  answer: string;
  tips: string;
}

export interface CareerPortfolioGuide {
  githubStructure: string[];
  resumeBullets: string[];
  linkedinTips: string[];
  interviewPrepTips: string[];
}

export interface CareerCurriculum {
  careerId: string;
  role: string;
  tagline: string;
  overview: string;
  difficulty: string;
  demandLevel: 'Very High' | 'High' | 'Growing';
  estimatedTime: string;
  averageSalary: string;
  milestones: CareerMilestone[];
  capstoneProject: CareerProject;
  portfolioGuide: CareerPortfolioGuide;
  interviewQuestions: CareerInterviewItem[];
}

export interface CareerUserProgress {
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  completedProjectIds: string[];
  lastActiveLessonId?: string;
  lastActiveMilestoneId?: string;
}

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface LanguageWord {
  id: string;
  word: string;
  translation: string;
  phonetic?: string;
  partOfSpeech: string;
  exampleTarget: string;
  exampleTranslation: string;
  audioLanguageCode: string; // e.g., 'de-DE', 'fr-FR', 'es-ES'
  gender?: 'der' | 'die' | 'das' | 'masculine' | 'feminine' | 'neuter' | string;
  characterScript?: string; // Kanji / Hanzi / Hangul / Cyrillic / Arabic script if applicable
  notes?: string;
}

export interface GrammarRuleTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface LanguageGrammarSection {
  title: string;
  explanation: string;
  formulaOrPattern?: string;
  tables?: GrammarRuleTable[];
  examples: { target: string; romanization?: string; english: string; note?: string }[];
}

export interface LanguagePracticeExercise {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  type?: 'mcq' | 'fill-gap' | 'listening' | 'translation';
}

export interface SentenceBuilderExercise {
  id: string;
  promptEnglish: string;
  targetSentence: string;
  jumbledWords: string[];
  explanation: string;
}

export interface MatchingPairItem {
  target: string;
  english: string;
}

export interface PronunciationItem {
  soundOrPhrase: string;
  phoneticIpa: string;
  mouthPositionTip: string;
  exampleWord: string;
  translation: string;
}

export interface CommonMistake {
  mistake: string;
  correction: string;
  explanation: string;
}

export interface WritingMiniChallenge {
  title: string;
  prompt: string;
  starterHint: string;
  sampleAnswer: string;
  breakdown: string;
}

export interface LanguageLesson {
  id: string;
  moduleId?: string;
  order?: number;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  durationMinutes?: number;
  learningObjective?: string;
  conceptExplanation?: string;
  whyItMatters?: string;
  grammarFocus: string;
  grammarExplanation: string;
  grammarSections?: LanguageGrammarSection[];
  pronunciationGuide?: PronunciationItem[];
  dialogue: { speaker: string; text: string; translation: string; romanization?: string }[];
  culturalNote?: { title: string; content: string };
  vocabulary: LanguageWord[];
  practiceExercises: LanguagePracticeExercise[];
  sentenceBuilders?: SentenceBuilderExercise[];
  matchingPairs?: MatchingPairItem[];
  commonMistakes?: CommonMistake[];
  writingChallenge?: WritingMiniChallenge[];
  listeningPrompt?: {
    audioText: string;
    question: string;
    options: string[];
    correctIndex: number;
  };
  speakingPrompt?: {
    phraseToSpeak: string;
    phonetic: string;
    translation: string;
    tips: string;
  };
}

export interface LanguageModule {
  id: string;
  number: number;
  title: string;
  description: string;
  level: CEFRLevel;
  icon?: string;
  focusTopics: string[];
  lessons: LanguageLesson[];
}

export interface LanguageLevelData {
  level: CEFRLevel;
  title: string;
  cefrDescription: string;
  canDoStatements: string[];
  targetVocabCount: number;
  grammarTopicsCount: number;
  modules: LanguageModule[];
  assessmentExam: {
    id: string;
    title: string;
    durationMinutes: number;
    passingScore: number;
    questions: {
      id: string;
      category: 'Vocabulary' | 'Grammar' | 'Reading' | 'Listening';
      question: string;
      contextPassage?: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }[];
  };
}

export interface LanguageCourse {
  id: string;
  name: string;
  code: string; // 'de', 'fr', 'es', 'ja', 'en', 'it', 'pt', 'ko', 'zh', 'ru', 'ar', 'nl'
  flag: string;
  speechCode: string; // 'de-DE', 'fr-FR'
  nativeName: string;
  description: string;
  writingSystem?: string;
  grammarHighlights?: string[];
  levels: ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')[];
  levelData?: Partial<Record<CEFRLevel, LanguageLevelData>>;
  lessons: LanguageLesson[];
  conversationScenarios: {
    id: string;
    title: string;
    situation: string;
    partnerRole: string;
    samplePrompts: string[];
  }[];
}

export interface LanguageUserProgress {
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  completedModuleIds: string[];
  levelAssessments: Record<string, { passed: boolean; score: number; date: string; certificateId?: string }>;
  wordsLearnedIds: string[];
  activeLevel: CEFRLevel;
  dailyStreak: number;
  lastStudiedDate: string;
}

export interface MockTest {
  id: string;
  title: string;
  category: string;
  durationMinutes: number;
  totalQuestions: number;
  passingScore: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: {
    id: string;
    type: 'mcq' | 'code' | 'sql' | 'debugging';
    question: string;
    codeSnippet?: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface MockInterviewSession {
  id: string;
  jobRole: string;
  experienceLevel: 'Fresher / Intern' | '1-3 Years' | '3-5 Years' | 'Senior';
  interviewType: 'Technical' | 'HR Behavioral' | 'Mixed';
  companyType: 'Product Startup' | 'Big Tech (FAANG)' | 'Enterprise / MNC' | 'Consulting';
  questions: {
    id: string;
    question: string;
    whyInterviewerAsks: string;
    category: string;
    expectedKeyPoints: string[];
    userAnswer?: string;
    feedback?: {
      score: number;
      strengths: string[];
      missingPoints: string[];
      modelAnswer: string;
      technicalAccuracy: string;
      communicationTips: string;
    };
  }[];
  overallScore?: number;
  completedAt?: string;
}

export type ApplicationStatus =
  | 'Interested'
  | 'Researching'
  | 'Preparing Documents'
  | 'Application Ready'
  | 'Applied'
  | 'Interview'
  | 'Admitted'
  | 'Rejected'
  | 'Withdrawn';

export interface ProgramDeadline {
  intake: string;
  deadline: string;
}

export interface ProgramDetail {
  id: string;
  universityId: string;
  name: string;
  degree: 'MS' | 'MSc' | 'MEng' | 'MPhil' | 'MASc' | 'MBA' | string;
  field: string;
  duration: string;
  semesters: number;
  credits: string;
  studyMode: 'Full-time' | 'Part-time' | 'Hybrid';
  language: string;
  tuition: string;
  tuitionNumericalUSD: number;
  semesterFee: string;
  applicationFee: string;
  intakes: string[];
  deadlines: ProgramDeadline[];
  ielts: number;
  toefl: number;
  gre: string;
  gmat?: string;
  gpa: string;
  eligibility: string;
  requiredSubjects?: string[];
  workExperience?: string;
  documents: string[];
  curriculum: string;
  coreModules: string[];
  electives: string[];
  project: string;
  thesis: string;
  internship: string;
  careerInfo: string;
  scholarships: string;
  officialProgramUrl: string;
  lastVerified: string;
  sourceType: 'Official University' | 'Official Government' | 'Official Study Portal' | 'Needs Verification';
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  country: string;
  city: string;
  state: string;
  flag: string;
  type: 'Public' | 'Private' | string;
  officialWebsite: string;
  officialAdmissionsUrl: string;
  logo?: string;
  description: string;
  programs: ProgramDetail[];
  rankingScore?: string;
  rankingOrganization?: string;
  estimatedLivingCostAnnual?: string;
  workPermitYears?: string;
  lastVerified: string;
  sourceType: 'Official University' | 'Official Government' | 'Official Study Portal' | 'Needs Verification';
}

export interface ShortlistItem {
  id: string;
  universityId: string;
  universityName: string;
  shortName?: string;
  country: string;
  city: string;
  flag: string;
  programId: string;
  programName: string;
  degree: string;
  upcomingDeadline: string;
  tuition: string;
  status: ApplicationStatus;
  dateAdded: string;
  notes?: string;
  officialAdmissionsUrl: string;
}

export interface UniversityProgram {
  id: string;
  universityName: string;
  shortName?: string;
  location: string;
  city?: string;
  country: string;
  flag: string;
  programName: string;
  degree: 'MS' | 'MSc' | 'MEng' | 'MBA' | 'MPhil' | 'MASc' | string;
  field?: string;
  durationMonths: number;
  duration?: string;
  semesters?: number;
  credits?: string;
  language?: string;
  studyMode?: 'Full-time' | 'Part-time' | 'Hybrid';
  tuitionFee: string;
  tuitionNumericalUSD: number;
  semesterFee?: string;
  applicationFee: string;
  intakes: string[];
  deadlines?: ProgramDeadline[];
  upcomingDeadline: string;
  ieltsRequirement: number;
  toeflRequirement: number;
  greRequirement: 'Mandatory' | 'Optional' | 'Not Required' | 'Waiver Available' | string;
  gmatRequirement?: string;
  gpaRequirement: string;
  publicPrivate: 'Public' | 'Private';
  officialWebsiteUrl: string;
  programUrl: string;
  admissionsUrl: string;
  rankingOrganization: string;
  rankingScore: string;
  scholarshipsAvailable: string;
  estimatedLivingCostAnnual: string;
  workPermitYears: string;
  source: string;
  sourceUrl: string;
  lastVerifiedDate: string;
  verifiedStatus: 'Verified Official' | 'Pending Review' | 'Needs Verification';
  sourceType?: 'Official University' | 'Official Government' | 'Official Study Portal' | 'Needs Verification';
  highlights: string[];
  coreModules?: string[];
  electives?: string[];
  project?: string;
  thesis?: string;
  internship?: string;
  careerInfo?: string;
  documents?: string[];
  allPrograms?: { id: string; name: string; degree: string; field: string; duration: string; tuition: string; deadline: string }[];
}

export interface StudyAbroadCountryGuide {
  id: string;
  country: string;
  flag: string;
  overview: string;
  tuitionOverview: string;
  avgLivingCostPerYear: string;
  languageRequirements: string;
  blockedAccountRequired: boolean;
  blockedAccountAmount?: string;
  visaProcessSummary: string;
  postStudyWorkVisa: string;
  prEligibility: string;
  officialImmigrationUrl: string;
  keyChecklist: {
    item: string;
    category: 'Academic' | 'Language' | 'Financial' | 'Visa' | 'Special';
    requirementType: 'Required' | 'Usually Required' | 'University Specific';
    description: string;
    officialSourceUrl: string;
  }[];
}

export interface Certificate {
  id: string;
  certificateNumber: string; // e.g. EDU-2026-PY-000184
  studentName: string;
  studentId: string;
  courseTitle: string;
  courseId: string;
  issueDate: string;
  verificationHash: string;
  qrCodeUrl: string;
  skillsAcquired: string[];
  finalGradePercent: number;
  status: 'Valid' | 'Revoked';
  issuingPlatform: string;
  authorizedSignatory: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  summary: string;
  learningObjectives: string[];
  techStack: string[];
  requirements: string[];
  starterCode: string;
  solutionOverview: string;
  evaluationCriteria: string[];
}

export interface ResumeData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: { category: string; list: string[] }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    grade: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
  projects: {
    name: string;
    tech: string;
    link: string;
    description: string;
  }[];
  certifications: string[];
}

export type ResourceType = 'video' | 'documentation' | 'practice' | 'official_guide' | 'university' | 'visa';
export type ResourceCategory = 'programming' | 'web' | 'data' | 'cloud' | 'roadmap' | 'language' | 'masters' | 'visa' | 'project';

export interface LearningResource {
  id: string;
  title: string;
  description: string;
  resourceType: ResourceType;
  category: ResourceCategory;
  technology?: string;
  language?: string;
  level?: string;
  module?: string;
  concept?: string;
  roadmap?: string;
  roadmapStage?: string;
  country?: string;
  university?: string;
  url: string;
  embedUrl?: string;
  provider?: string;
  channelName?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration?: string;
  publishedDate?: string;
  official: boolean;
  verified: boolean;
  lastVerified: string;
  thumbnail?: string;
  tags: string[];
}

export type AiTutorMode =
  | 'explain'
  | 'teach'
  | 'example'
  | 'practice'
  | 'quiz'
  | 'debug'
  | 'summarize'
  | 'interview'
  | 'correct'
  | 'simplify'
  | 'deeper'
  | 'project';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  codeSnippets?: { language: string; code: string }[];
  followUpQuestions?: string[];
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  mode: AiTutorMode;
  contextTag?: string;
  messages: ChatMessage[];
}
