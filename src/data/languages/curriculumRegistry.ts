import {
  LanguageCourse,
  LanguageLevelData,
  LanguageLesson,
  LanguageModule,
  LanguageUserProgress,
  CEFRLevel,
  Certificate
} from '../../types';

import { completeGermanCourse } from './germanCurriculum';
import { completeFrenchCourse } from './frenchCurriculum';
import { completeSpanishCourse } from './spanishCurriculum';
import { completeJapaneseCourse } from './japaneseCurriculum';
import { completeKoreanCourse } from './koreanCurriculum';
import { completeChineseCourse } from './chineseCurriculum';
import { completeRussianCourse } from './russianCurriculum';
import { completeArabicCourse } from './arabicCurriculum';
import {
  completeItalianCourse,
  completePortugueseCourse,
  completeEnglishCourse,
  completeDutchCourse
} from './europeanCurriculums';
import {
  completeHindiCourse,
  completeTeluguCourse
} from './hindiTeluguCurriculums';

export const allLanguagesList: LanguageCourse[] = [
  completeGermanCourse,
  completeFrenchCourse,
  completeSpanishCourse,
  completeJapaneseCourse,
  completeKoreanCourse,
  completeChineseCourse,
  completeRussianCourse,
  completeArabicCourse,
  completeItalianCourse,
  completePortugueseCourse,
  completeEnglishCourse,
  completeDutchCourse,
  completeHindiCourse,
  completeTeluguCourse
];

export const getLanguageById = (langIdOrCode?: string): LanguageCourse => {
  if (!langIdOrCode || typeof langIdOrCode !== 'string') {
    return allLanguagesList[0];
  }
  const clean = langIdOrCode.trim().toLowerCase();
  if (!clean) return allLanguagesList[0];
  const found = allLanguagesList.find(
    l =>
      l.id.toLowerCase() === clean ||
      l.code.toLowerCase() === clean ||
      l.name.toLowerCase().includes(clean)
  );
  return found || allLanguagesList[0];
};

export const getLanguageLevelData = (
  langId: string,
  level: CEFRLevel
): LanguageLevelData | undefined => {
  const course = getLanguageById(langId);
  if (!course.levelData) return undefined;
  return course.levelData[level];
};

export const findLessonById = (
  langId: string,
  lessonId: string
): { lesson: LanguageLesson; module: LanguageModule; levelData: LanguageLevelData } | undefined => {
  const course = getLanguageById(langId);
  if (!course.levelData) return undefined;

  for (const lvl of course.levels) {
    const levelData = course.levelData[lvl];
    if (levelData) {
      for (const mod of levelData.modules) {
        const lesson = mod.lessons.find(l => l.id === lessonId);
        if (lesson) {
          return { lesson, module: mod, levelData };
        }
      }
    }
  }

  // Check fallback course.lessons
  const fallback = course.lessons.find(l => l.id === lessonId);
  if (fallback && course.levelData[fallback.level]) {
    const lvlData = course.levelData[fallback.level]!;
    const mod = lvlData.modules[0] || {
      id: 'default-mod',
      number: 1,
      title: 'Foundations',
      description: 'Foundations',
      level: fallback.level,
      focusTopics: [],
      lessons: [fallback]
    };
    return { lesson: fallback, module: mod, levelData: lvlData };
  }

  return undefined;
};

const STORAGE_PREFIX = 'edunova_lang_prog_v3_';

export const getStoredLanguageProgress = (langId: string): LanguageUserProgress => {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${langId}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return {
          completedLessonIds: Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : [],
          quizScores: (parsed.quizScores && typeof parsed.quizScores === 'object') ? parsed.quizScores : {},
          completedModuleIds: Array.isArray(parsed.completedModuleIds) ? parsed.completedModuleIds : [],
          levelAssessments: (parsed.levelAssessments && typeof parsed.levelAssessments === 'object') ? parsed.levelAssessments : {},
          wordsLearnedIds: Array.isArray(parsed.wordsLearnedIds) ? parsed.wordsLearnedIds : [],
          activeLevel: parsed.activeLevel || 'A1',
          dailyStreak: typeof parsed.dailyStreak === 'number' ? parsed.dailyStreak : 3,
          lastStudiedDate: parsed.lastStudiedDate || new Date().toISOString().split('T')[0]
        };
      }
    }
  } catch {
    // Ignore storage parse error
  }

  return {
    completedLessonIds: [],
    quizScores: {},
    completedModuleIds: [],
    levelAssessments: {},
    wordsLearnedIds: [],
    activeLevel: 'A1',
    dailyStreak: 3,
    lastStudiedDate: new Date().toISOString().split('T')[0]
  };
};

export const saveStoredLanguageProgress = (
  langId: string,
  progress: LanguageUserProgress
): void => {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${langId}`, JSON.stringify(progress));
  } catch {
    // Ignore write error
  }
};

export const markLessonCompleteWithScore = (
  langId: string,
  lessonId: string,
  scorePercent: number,
  wordIds: string[] = []
): LanguageUserProgress => {
  const current = getStoredLanguageProgress(langId);

  const completedLessonIds = current.completedLessonIds.includes(lessonId)
    ? current.completedLessonIds
    : [...current.completedLessonIds, lessonId];

  const quizScores = {
    ...current.quizScores,
    [lessonId]: Math.max(scorePercent, current.quizScores[lessonId] || 0)
  };

  const newWords = Array.from(new Set([...current.wordsLearnedIds, ...wordIds]));

  const updated: LanguageUserProgress = {
    ...current,
    completedLessonIds,
    quizScores,
    wordsLearnedIds: newWords,
    lastStudiedDate: new Date().toISOString().split('T')[0]
  };

  saveStoredLanguageProgress(langId, updated);
  return updated;
};

export const markAssessmentPassed = (
  langId: string,
  level: CEFRLevel,
  score: number,
  certificateId: string
): LanguageUserProgress => {
  const current = getStoredLanguageProgress(langId);

  const updated: LanguageUserProgress = {
    ...current,
    levelAssessments: {
      ...current.levelAssessments,
      [level]: {
        passed: true,
        score,
        date: new Date().toISOString().split('T')[0],
        certificateId
      }
    }
  };

  saveStoredLanguageProgress(langId, updated);
  return updated;
};

export const generateLanguageCertificate = (
  userName: string,
  languageName: string,
  level: CEFRLevel,
  score: number
): Certificate => {
  const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
  const certNumber = `BY-LANG-${level}-${languageName.slice(0, 3).toUpperCase()}-2026-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    id: `cert-lang-${Date.now()}`,
    certificateNumber: certNumber,
    studentName: userName || 'Build Yourself Language Scholar',
    studentId: 'usr-student-2026',
    courseTitle: `${languageName} CEFR ${level} Multilingual Proficiency Certificate`,
    courseId: `lang-${languageName.toLowerCase()}-${level}`,
    issueDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    verificationHash: randomHex,
    qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://buildyourself.org/verify/${certNumber}`,
    skillsAcquired: [
      `CEFR ${level} ${languageName} Reading & Listening Comprehension`,
      `${languageName} Grammar & Morphosyntax Rules`,
      'Spoken Pronunciation & Interactive Dialogue',
      'Real-world Cultural Communication & Etiquette'
    ],
    finalGradePercent: score,
    status: 'Valid',
    issuingPlatform: 'Build Yourself Multilingual Academic Board',
    authorizedSignatory: 'Dr. Jean-Marc Valmont, Director of European & Asian Languages',
    description: `This certifies that the candidate has successfully demonstrated objective mastery of ${languageName} at CEFR Level ${level} with a passing examination score of ${score}%.`
  };
};
