import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  Course,
  CareerRoadmap,
  LanguageCourse,
  MockTest,
  UniversityProgram,
  Certificate,
  Project,
  UserRole,
  ShortlistItem,
  ApplicationStatus,
  University
} from '../types';
import { initialCourses } from '../data/coursesData';
import { initialRoadmaps } from '../data/roadmapsData';
import { initialLanguages } from '../data/languagesData';
import { initialUniversities, comprehensiveUniversities } from '../data/universitiesData';
import { initialMockTests } from '../data/mockTestsData';
import { initialProjects } from '../data/projectsData';

export type AppView =
  | 'dashboard'
  | 'courses'
  | 'course-player'
  | 'roadmaps'
  | 'languages'
  | 'language-player'
  | 'mock-tests'
  | 'mock-interview'
  | 'hr-interview'
  | 'masters'
  | 'universities'
  | 'projects'
  | 'certificates'
  | 'verify-certificate'
  | 'resume-portfolio'
  | 'ai-tutor'
  | 'resources'
  | 'admin';

export interface DailyPlanItem {
  id: string;
  topic: string;
  category: 'Python' | 'SQL' | 'Data Analytics' | 'German' | 'Interview Prep' | 'Project';
  durationMinutes: number;
  completed: boolean;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'deadline';
  read: boolean;
}

export interface TestAttemptRecord {
  testId: string;
  score: number;
  passed: boolean;
  answers: Record<string, number>;
  timestamp: string;
}

interface AppContextType {
  user: UserProfile;
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  selectedCourseId: string;
  setSelectedCourseId: (id: string) => void;
  selectedLessonId: string | null;
  setSelectedLessonId: (id: string | null) => void;
  selectedRoadmapId: string;
  setSelectedRoadmapId: (id: string) => void;
  selectedLanguageId: string;
  setSelectedLanguageId: (id: string) => void;
  selectedLanguageLevel: string;
  setSelectedLanguageLevel: (level: string) => void;
  selectedCountryId: string;
  setSelectedCountryId: (id: string) => void;
  programSearchFilter: string;
  setProgramSearchFilter: (filter: string) => void;
  courses: Course[];
  roadmaps: CareerRoadmap[];
  languages: LanguageCourse[];
  universities: UniversityProgram[];
  allComprehensiveUniversities: University[];
  shortlist: ShortlistItem[];
  addToShortlist: (program: UniversityProgram, status?: ApplicationStatus) => void;
  removeFromShortlist: (idOrProgramId: string) => void;
  updateShortlistStatus: (idOrProgramId: string, status: ApplicationStatus, notes?: string) => void;
  selectedUniversityForDetail: University | null;
  setSelectedUniversityForDetail: (uni: University | null) => void;
  navigateToUniversityDetail: (uniIdOrName: string) => void;
  mockTests: MockTest[];
  projects: Project[];
  certificates: Certificate[];
  dailyPlan: DailyPlanItem[];
  toggleDailyPlanItem: (id: string) => void;
  notifications: AppNotification[];
  markNotificationAsRead: (id: string) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (query: string) => void;
  completeLesson: (courseId: string, lessonId: string) => void;
  enrollInCourse: (courseId: string) => void;
  awardCertificate: (courseTitle: string, courseId: string, grade: number, skills: string[]) => Certificate;
  addXP: (amount: number) => void;
  switchRole: (role: UserRole) => void;
  speakText: (text: string, langCode?: string) => void;
  addNewCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  verifyUniversityData: (uniId: string) => void;
  revokeCertificate: (certId: string) => void;
  masterChecklist: Record<string, boolean>;
  toggleChecklistItem: (item: string) => void;
  testAttempts: Record<string, TestAttemptRecord>;
  recordTestAttempt: (testId: string, score: number, passed: boolean, answers: Record<string, number>) => void;
  navigateToLesson: (courseId: string, lessonId: string) => void;
  navigateToRoadmap: (roadmapId: string) => void;
  navigateToLanguage: (languageId: string, level?: string) => void;
  navigateToMasters: (countryId?: string, programFilter?: string) => void;
}

const STORAGE_KEYS = {
  USER: 'edunova_user_v2',
  CHECKLIST: 'edunova_checklist_v2',
  DAILY_PLAN: 'edunova_daily_plan_v2',
  TEST_ATTEMPTS: 'edunova_test_attempts_v2',
  CERTIFICATES: 'edunova_certificates_v2',
  SHORTLIST: 'edunova_shortlist_v2'
};

const initialDefaultShortlist: ShortlistItem[] = [
  {
    id: 'shortlist-tum-dea',
    universityId: 'uni-de-tum',
    universityName: 'Technical University of Munich (TUM)',
    shortName: 'TUM',
    country: 'Germany',
    city: 'Munich',
    flag: '🇩🇪',
    programId: 'tum-prog-dea',
    programName: 'M.Sc. Data Engineering and Analytics',
    degree: 'MSc',
    upcomingDeadline: 'May 31 (Winter Intake)',
    tuition: '€0 Public tuition for EU; €4,000 - €6,000/sem for non-EU',
    status: 'Preparing Documents',
    dateAdded: '2026-03-01',
    notes: 'Primary choice for data engineering. Arranging APS certificate and verifying ECTS math modules.',
    officialAdmissionsUrl: 'https://www.tum.de/en/studies/application'
  },
  {
    id: 'shortlist-rwth-cs',
    universityId: 'uni-de-rwth',
    universityName: 'RWTH Aachen University',
    shortName: 'RWTH Aachen',
    country: 'Germany',
    city: 'Aachen',
    flag: '🇩🇪',
    programId: 'rwth-prog-cs',
    programName: 'M.Sc. Computer Science (Informatik / Data Science)',
    degree: 'MSc',
    upcomingDeadline: 'July 15 (Winter) / January 15 (Summer)',
    tuition: '€0 Tuition (Semester contribution approx €320/sem)',
    status: 'Researching',
    dateAdded: '2026-03-05',
    notes: 'Top German computer science research. Preparing GRE score report for non-EU criteria.',
    officialAdmissionsUrl: 'https://www.rwth-aachen.de/go/id/egx'
  }
];

const initialDefaultUser: UserProfile = {
  id: 'user-05',
  name: 'Jakeer',
  email: 'jakeerp05@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  role: 'student',
  targetCareer: 'Data Analyst',
  currentSkillLevel: 'Beginner',
  targetCountry: 'Germany',
  studyHoursPerDay: 2,
  education: 'B.Tech in Computer Science & Engineering',
  college: 'National Institute of Technology',
  graduationYear: 2025,
  xp: 1450,
  level: 4,
  streakDays: 5,
  enrolledCourseIds: ['course-py-01', 'course-sql-02', 'course-da-03'],
  completedLessonIds: ['les-py-var', 'les-py-types'],
  completedCourseIds: [],
  earnedCertificateIds: ['cert-1'],
  activeRoadmapId: 'roadmap-data-analyst',
  targetIntake: 'Winter 2026',
  targetDegree: 'MS Data Analytics'
};

const initialDefaultCertificates: Certificate[] = [
  {
    id: 'cert-1',
    certificateNumber: 'EDN-PY-2026-000123',
    studentName: 'Jakeer',
    studentId: 'user-05',
    courseTitle: 'Python Programming Masterclass',
    courseId: 'course-py-01',
    issueDate: 'September 2026',
    verificationHash: '8f9a2c4e1b7d5e6a0c3f4e2d1a9b8c7f',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://buildyourself.org/verify/EDN-PY-2026-000123',
    skillsAcquired: ['Python 3.12', 'Variables & Types', 'Control Flow', 'Functions', 'OOP Foundations'],
    finalGradePercent: 80, // 24/30 score
    status: 'Valid',
    issuingPlatform: 'Build Yourself Academic Board',
    authorizedSignatory: 'Dr. Evelyn Vance, Academic Director',
    description: 'This certificate recognizes the successful completion of the Python Programming course including fundamentals, variables, loops, practical exercises, and passing the 30-question certification assessment with a score of 24/30.'
  }
];

const initialDefaultDailyPlan: DailyPlanItem[] = [
  { id: 'dp-1', topic: 'Python: Functions & Keyword Arguments', category: 'Python', durationMinutes: 30, completed: true },
  { id: 'dp-2', topic: 'SQL: Multi-Table INNER & LEFT Joins', category: 'SQL', durationMinutes: 20, completed: true },
  { id: 'dp-3', topic: 'Power BI: Star Schema & Fact Tables', category: 'Data Analytics', durationMinutes: 20, completed: false },
  { id: 'dp-4', topic: 'German: A1 Accusative Case & Noun Articles', category: 'German', durationMinutes: 10, completed: false },
  { id: 'dp-5', topic: 'AI Mock Interview: STAR Method Behavioral Practice', category: 'Interview Prep', durationMinutes: 10, completed: false }
];

const initialDefaultChecklist: Record<string, boolean> = {
  'Valid Passport': true,
  'Bachelor’s Degree & Transcripts': true,
  'Academic CV': true,
  'Statement of Purpose (SOP)': false,
  'Letters of Recommendation (LORs)': false,
  'IELTS / TOEFL Official Scorecard': false,
  'APS Certificate (Akademische Prüfstelle)': false,
  'Blocked Bank Account (€11,904)': false,
  'German Statutory Health Insurance': false,
  'University Application Submission': false,
  'Visa Application & Biometrics': false,
  'Student Accommodation Booking': false
};

const initialNotifications: AppNotification[] = [
  {
    id: 'notif-1',
    title: 'Python Functions Lesson Ready',
    message: 'Continue your Python path: Master functions, return values, and default arguments.',
    timestamp: '5 mins ago',
    type: 'info',
    read: false
  },
  {
    id: 'notif-2',
    title: 'TUM Application Reminder',
    message: 'Winter semester deadline is May 31. Ensure APS certificate verification is underway.',
    timestamp: '2 hours ago',
    type: 'deadline',
    read: false
  },
  {
    id: 'notif-3',
    title: '5-Day Learning Streak Active! 🔥',
    message: 'Great momentum! 30 XP awarded for daily study consistency.',
    timestamp: 'Yesterday',
    type: 'success',
    read: true
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load persistent user state
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      return saved ? JSON.parse(saved) : initialDefaultUser;
    } catch {
      return initialDefaultUser;
    }
  });

  const [activeView, setActiveView] = useState<AppView>('dashboard');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course-py-01');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>('les-py-func');
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>('roadmap-data-analyst');
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('lang-german');
  const [selectedLanguageLevel, setSelectedLanguageLevel] = useState<string>('A1');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('guide-germany');
  const [programSearchFilter, setProgramSearchFilter] = useState<string>('MS Data Analytics');

  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [roadmaps] = useState<CareerRoadmap[]>(initialRoadmaps);
  const [languages] = useState<LanguageCourse[]>(initialLanguages);
  const [universities, setUniversities] = useState<UniversityProgram[]>(initialUniversities);
  const [mockTests] = useState<MockTest[]>(initialMockTests);
  const [projects] = useState<Project[]>(initialProjects);

  const [certificates, setCertificates] = useState<Certificate[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
      return saved ? JSON.parse(saved) : initialDefaultCertificates;
    } catch {
      return initialDefaultCertificates;
    }
  });

  const [dailyPlan, setDailyPlan] = useState<DailyPlanItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DAILY_PLAN);
      return saved ? JSON.parse(saved) : initialDefaultDailyPlan;
    } catch {
      return initialDefaultDailyPlan;
    }
  });

  const [masterChecklist, setMasterChecklist] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CHECKLIST);
      return saved ? JSON.parse(saved) : initialDefaultChecklist;
    } catch {
      return initialDefaultChecklist;
    }
  });

  const [testAttempts, setTestAttempts] = useState<Record<string, TestAttemptRecord>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TEST_ATTEMPTS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [shortlist, setShortlist] = useState<ShortlistItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SHORTLIST);
      return saved ? JSON.parse(saved) : initialDefaultShortlist;
    } catch {
      return initialDefaultShortlist;
    }
  });

  const [selectedUniversityForDetail, setSelectedUniversityForDetail] = useState<University | null>(null);

  const [notifications, setNotifications] = useState<AppNotification[]>(initialNotifications);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');

  // Persist changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SHORTLIST, JSON.stringify(shortlist));
    } catch {}
  }, [shortlist]);

  // Persist changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch {}
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certificates));
    } catch {}
  }, [certificates]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.DAILY_PLAN, JSON.stringify(dailyPlan));
    } catch {}
  }, [dailyPlan]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(masterChecklist));
    } catch {}
  }, [masterChecklist]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TEST_ATTEMPTS, JSON.stringify(testAttempts));
    } catch {}
  }, [testAttempts]);

  // Deep Navigation Helpers
  const navigateToLesson = (courseId: string, lessonId: string) => {
    setSelectedCourseId(courseId);
    setSelectedLessonId(lessonId);
    setActiveView('course-player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRoadmap = (roadmapId: string) => {
    setSelectedRoadmapId(roadmapId);
    setActiveView('roadmaps');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLanguage = (languageId: string, level: string = 'A1') => {
    setSelectedLanguageId(languageId);
    setSelectedLanguageLevel(level);
    setActiveView('language-player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMasters = (countryId?: string, programFilter?: string) => {
    if (countryId) setSelectedCountryId(countryId);
    if (programFilter) setProgramSearchFilter(programFilter);
    setActiveView('masters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToUniversityDetail = (uniIdOrName: string) => {
    const found = comprehensiveUniversities.find(
      u => u.id === uniIdOrName || u.name.toLowerCase() === uniIdOrName.toLowerCase() || u.shortName.toLowerCase() === uniIdOrName.toLowerCase()
    );
    if (found) {
      setSelectedUniversityForDetail(found);
    }
    setActiveView('universities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToShortlist = (program: UniversityProgram, status: ApplicationStatus = 'Interested') => {
    setShortlist(prev => {
      if (prev.some(item => item.programId === program.id)) {
        return prev;
      }
      const newItem: ShortlistItem = {
        id: `shortlist-${Date.now()}-${program.id}`,
        universityId: program.id.split('-')[0] || 'uni-target',
        universityName: program.universityName,
        shortName: program.shortName,
        country: program.country,
        city: program.location.split(',')[0].trim(),
        flag: program.flag,
        programId: program.id,
        programName: program.programName,
        degree: program.degree,
        upcomingDeadline: program.upcomingDeadline,
        tuition: program.tuitionFee,
        status,
        dateAdded: new Date().toISOString().split('T')[0],
        notes: `Shortlisted for ${program.degree} admission planning. Target intake: ${program.intakes.join(', ')}.`,
        officialAdmissionsUrl: program.admissionsUrl
      };
      return [newItem, ...prev];
    });
    addXP(40);
  };

  const removeFromShortlist = (idOrProgramId: string) => {
    setShortlist(prev => prev.filter(item => item.id !== idOrProgramId && item.programId !== idOrProgramId));
  };

  const updateShortlistStatus = (idOrProgramId: string, status: ApplicationStatus, notes?: string) => {
    setShortlist(prev =>
      prev.map(item => {
        if (item.id === idOrProgramId || item.programId === idOrProgramId) {
          return {
            ...item,
            status,
            notes: notes !== undefined ? notes : item.notes
          };
        }
        return item;
      })
    );
  };

  const toggleDailyPlanItem = (id: string) => {
    setDailyPlan(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextState = !item.completed;
          if (nextState) {
            addXP(30);
          }
          return { ...item, completed: nextState };
        }
        return item;
      })
    );
  };

  const toggleChecklistItem = (item: string) => {
    setMasterChecklist(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const recordTestAttempt = (testId: string, score: number, passed: boolean, answers: Record<string, number>) => {
    const record: TestAttemptRecord = {
      testId,
      score,
      passed,
      answers,
      timestamp: new Date().toISOString()
    };
    setTestAttempts(prev => ({ ...prev, [testId]: record }));
    if (passed) addXP(150);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
  };

  const addXP = (amount: number) => {
    setUser(prev => {
      const nextXP = prev.xp + amount;
      const nextLevel = Math.floor(nextXP / 400) + 1;
      return { ...prev, xp: nextXP, level: nextLevel };
    });
  };

  // Crucial: Only completed when student explicitly triggers it in lesson view
  const completeLesson = (courseId: string, lessonId: string) => {
    setUser(prev => {
      if (prev.completedLessonIds.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessonIds: [...prev.completedLessonIds, lessonId],
        xp: prev.xp + 50
      };
    });
  };

  const enrollInCourse = (courseId: string) => {
    setUser(prev => {
      if (prev.enrolledCourseIds.includes(courseId)) return prev;
      return {
        ...prev,
        enrolledCourseIds: [...prev.enrolledCourseIds, courseId]
      };
    });
  };

  const awardCertificate = (courseTitle: string, courseId: string, grade: number, skills: string[]): Certificate => {
    const randomHex = Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 10);
    const shortCode = courseId.replace('course-', '').toUpperCase().slice(0, 2);
    const newCertNumber = `EDN-${shortCode}-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    const newCert: Certificate = {
      id: `cert-${Date.now()}`,
      certificateNumber: newCertNumber,
      studentName: user.name,
      studentId: user.id,
      courseTitle,
      courseId,
      issueDate: 'September 2026',
      verificationHash: randomHex,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://buildyourself.org/verify/${newCertNumber}`,
      skillsAcquired: skills,
      finalGradePercent: grade,
      status: 'Valid',
      issuingPlatform: 'Build Yourself Academic Board',
      authorizedSignatory: 'Dr. Evelyn Vance, Academic Director',
      description: `This certificate recognizes the successful completion of the ${courseTitle} curriculum, practical coding exercises, and achieving an objective mock test score of ${Math.round((grade / 100) * 30)}/30.`
    };

    setCertificates(prev => [newCert, ...prev]);
    setUser(prev => ({
      ...prev,
      earnedCertificateIds: [newCert.id, ...prev.earnedCertificateIds],
      completedCourseIds: prev.completedCourseIds.includes(courseId) ? prev.completedCourseIds : [...prev.completedCourseIds, courseId],
      xp: prev.xp + 250
    }));

    // Post to server for persistent verification
    fetch('/api/certificates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCert)
    }).catch(() => {});

    return newCert;
  };

  const switchRole = (role: UserRole) => {
    setUser(prev => ({ ...prev, role }));
  };

  const speakText = (text: string, langCode: string = 'en-US') => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  const addNewCourse = (course: Course) => {
    setCourses(prev => [course, ...prev]);
  };

  const updateCourse = (updatedCourse: Course) => {
    setCourses(prev => prev.map(c => (c.id === updatedCourse.id ? updatedCourse : c)));
  };

  const verifyUniversityData = (uniId: string) => {
    setUniversities(prev =>
      prev.map(u => (u.id === uniId ? { ...u, verifiedStatus: 'Verified Official', lastVerifiedDate: new Date().toISOString().split('T')[0] } : u))
    );
  };

  const revokeCertificate = (certId: string) => {
    setCertificates(prev =>
      prev.map(c => (c.id === certId || c.certificateNumber === certId ? { ...c, status: 'Revoked' } : c))
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        activeView,
        setActiveView,
        selectedCourseId,
        setSelectedCourseId,
        selectedLessonId,
        setSelectedLessonId,
        selectedRoadmapId,
        setSelectedRoadmapId,
        selectedLanguageId,
        setSelectedLanguageId,
        selectedLanguageLevel,
        setSelectedLanguageLevel,
        selectedCountryId,
        setSelectedCountryId,
        programSearchFilter,
        setProgramSearchFilter,
        courses,
        roadmaps,
        languages,
        universities,
        allComprehensiveUniversities: comprehensiveUniversities,
        shortlist,
        addToShortlist,
        removeFromShortlist,
        updateShortlistStatus,
        selectedUniversityForDetail,
        setSelectedUniversityForDetail,
        navigateToUniversityDetail,
        mockTests,
        projects,
        certificates,
        dailyPlan,
        toggleDailyPlanItem,
        notifications,
        markNotificationAsRead,
        searchModalOpen,
        setSearchModalOpen,
        globalSearchQuery,
        setGlobalSearchQuery,
        completeLesson,
        enrollInCourse,
        awardCertificate,
        addXP,
        switchRole,
        speakText,
        addNewCourse,
        updateCourse,
        verifyUniversityData,
        revokeCertificate,
        masterChecklist,
        toggleChecklistItem,
        testAttempts,
        recordTestAttempt,
        navigateToLesson,
        navigateToRoadmap,
        navigateToLanguage,
        navigateToMasters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
