import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

export const RUSSIAN_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can read and write the 33 letters of the Cyrillic alphabet, understand soft/hard vowels, and pronounce Russian with vowel reduction (Akan\'ye).',
    'Can identify the 3 grammatical genders (masculine, feminine, neuter) based on word endings (-а/-я, consonant, -о/-е).',
    'Can navigate basic cases: Nominative (Subject), Prepositional (Location with "в" and "на"), and Accusative (Inanimate vs Animate objects).',
    'Can greet, introduce oneself, order in a café, and ask for directions in Moscow or Saint Petersburg.'
  ],
  A2: [
    'Can handle daily interactions in Russian cities, shopping, and public transport (metro).',
    'Can use the Genitive case for possession, negation (нет + Genitive), and numbers 2-4 and 5+.',
    'Can master basic verb conjugations in present and past tenses (TORFL Basic Level).'
  ],
  B1: [
    'Can communicate with ease on personal interests, travel, and current affairs in Russian.',
    'Can master all 6 cases (Nominative, Genitive, Dative, Accusative, Instrumental, Prepositional).',
    'Can distinguish between Imperfective and Perfective verb aspects (TORFL-1 level).'
  ],
  B2: [
    'Can understand complex technical and cultural Russian texts and converse effortlessly with native speakers.',
    'Can navigate Verbs of Motion with prefixes (пойти, прийти, уйти, зайти) (TORFL-2 level).'
  ],
  C1: [
    'Can understand demanding Russian literary and academic texts, business contracts, and scientific papers (TORFL-3 level).'
  ],
  C2: [
    'Can express ideas with native nuance, rhetorical elegance, and effortless command of complex Russian syntax and literature (TORFL-4 level).'
  ]
};

export const russianA1Modules: LanguageModule[] = [
  {
    id: 'ru-a1-mod-1',
    number: 1,
    title: '01 Cyrillic Alphabet, Phonetics & Vowel Reduction',
    description: 'Master the 33 letters of the Russian Cyrillic script: "true friends" (A, O, M, T), "false friends" (B=v, P=r, H=n, C=s), and Russian letters (Ж, Ц, Ч, Ш, Щ, Ю, Я).',
    level: 'A1',
    focusTopics: ['Cyrillic Script (33 letters)', 'False Friends Letters (В, Р, С, Н)', 'Soft Sign (Ь) & Hard Sign (Ъ)', 'Vowel Reduction (O sounds like A when unstressed)'],
    lessons: [
      {
        id: 'ru-a1-l1',
        moduleId: 'ru-a1-mod-1',
        order: 1,
        title: 'The Russian Cyrillic Alphabet & The "Akan\'ye" Vowel Rule',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Read Russian Cyrillic letters with accurate stress and apply the fundamental vowel reduction rule where unstressed "O" sounds like "A".',
        conceptExplanation: 'Russian uses the Cyrillic alphabet (33 letters). It is straightforward once broken down into groups:\n1. Same as English: А (a), О (o), М (m), Т (t), К (k).\n2. False Friends (look like English, but different sound!): В = V, Р = R (rolled!), С = S, Н = N, Х = Kh (guttural H).\n3. Distinct Russian Letters: Б = B, Г = G, Д = D, Ж = Zh (like measure), З = Z, И = I (ee), П = P, Ф = F, Ц = Ts, Ч = Ch, Ш = Sh, Щ = Shch, Ы = hard "i", Э = eh, Ю = yu, Я = ya.\n\nThe Akan\'ye Rule: In Russian, when the letter "О" is UNSTRESSED, it is pronounced like a short "A"! Example: "Хорошо" (good) is stressed on the last "o", so it is pronounced [khah-rah-SHOH]!',
        whyItMatters: 'Russian is not pronounced as spelled without observing the stress mark. Knowing that unstressed "o" becomes "a" transforms beginner Russian from robotic to natural and authentic.',
        grammarFocus: 'Phonology & Gender of Nouns',
        grammarExplanation: 'All Russian nouns have one of three genders:\n- Masculine: ends in a consonant or -й (стол = table, чай = tea).\n- Feminine: ends in -а or -я (книга = book, Россия = Russia).\n- Neuter: ends in -о or -е (окно = window, море = sea).',
        grammarSections: [
          {
            title: 'Cyrillic Alphabet Letter Groups',
            explanation: 'Mastering the letters in categories.',
            tables: [
              {
                headers: ['Cyrillic', 'Sound', 'Example Word', 'English Meaning'],
                rows: [
                  ['В, в', 'V', 'вода [vah-DAH]', 'water'],
                  ['Р, р', 'Rolled R', 'Россия [rah-SEE-ya]', 'Russia'],
                  ['Н, н', 'N', 'нет [nyet]', 'no'],
                  ['С, с', 'S', 'спасибо [spah-SEE-bah]', 'thank you'],
                  ['Ж, ж', 'Zh (measure)', 'журнал [zhoor-NAHL]', 'magazine'],
                  ['Я, я', 'Ya', 'Я [yah]', 'I / me']
                ]
              }
            ],
            examples: [
              { target: 'Здравствуйте!', romanization: 'Zdravstvuyte!', english: 'Hello! (formal)', note: 'First "в" is silent in natural pronunciation: [ZDRAHS-tvuy-tye].' },
              { target: 'Спасибо большое.', romanization: 'Spasibo bol\'shoye.', english: 'Thank you very much.', note: 'Notice unstressed "o" in спасибо sounds like "a": [spah-SEE-bah].' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'Здравствуйте (Zdravstvuyte)',
            phoneticIpa: '[ˈzdraastvʊjtʲe]',
            mouthPositionTip: 'Stress on the first syllable. The first "в" is omitted in speech: say "Zdrast-vuy-tye".',
            exampleWord: 'Здравствуйте',
            translation: 'Hello (formal)'
          }
        ],
        dialogue: [
          { speaker: 'Ivan', text: 'Здравствуйте! Меня зовут Иван. А как вас зовут?', romanization: 'Zdravstvuyte! Menya zovut Ivan. A kak vas zovut?', translation: 'Hello! My name is Ivan. And what is your name?' },
          { speaker: 'Elena', text: 'Здравствуйте! Очень приятно, меня зовут Елена. Я студентка.', romanization: 'Zdravstvuyte! Ochen\' priyatno, menya zovut Elena. Ya studentka.', translation: 'Hello! Very nice to meet you, my name is Elena. I am a student.' }
        ],
        culturalNote: {
          title: 'The Russian Patronymic & Middle Name (Отчество)',
          content: 'In formal Russian culture, adults are addressed not just by their first name, but by their First Name + Patronymic (father\'s name with -ович / -овна). For example: "Владимир Владимирович" or "Анна Ивановна". Using this in academic or professional life shows deep cultural respect.'
        },
        vocabulary: [
          {
            id: 'ru-v-1',
            word: 'здравствуйте',
            translation: 'hello (formal)',
            phonetic: 'ZDRAHS-tvuy-tye',
            partOfSpeech: 'Greeting',
            exampleTarget: 'Здравствуйте, профессор!',
            exampleTranslation: 'Hello, professor!',
            audioLanguageCode: 'ru-RU'
          },
          {
            id: 'ru-v-2',
            word: 'спасибо',
            translation: 'thank you',
            phonetic: 'spah-SEE-bah',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Спасибо большое за помощь.',
            exampleTranslation: 'Thank you very much for your help.',
            audioLanguageCode: 'ru-RU'
          },
          {
            id: 'ru-v-3',
            word: 'пожалуйста',
            translation: 'please / you are welcome',
            phonetic: 'pah-ZHAHL-oo-stah',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Один чай, пожалуйста.',
            exampleTranslation: 'One tea, please.',
            audioLanguageCode: 'ru-RU'
          },
          {
            id: 'ru-v-4',
            word: 'до свидания',
            translation: 'goodbye',
            phonetic: 'dah svee-DAH-nyah',
            partOfSpeech: 'Greeting',
            exampleTarget: 'До свидания, до завтра!',
            exampleTranslation: 'Goodbye, see you tomorrow!',
            audioLanguageCode: 'ru-RU'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-ru-1',
            promptEnglish: 'Hello, my name is Elena.',
            targetSentence: 'Здравствуйте, меня зовут Елена.',
            jumbledWords: ['зовут', 'Елена.', 'Здравствуйте,', 'меня'],
            explanation: 'Formal greeting + "меня зовут" (literally: "they call me") + Name.'
          }
        ],
        matchingPairs: [
          { target: 'Здравствуйте', english: 'Hello (formal)' },
          { target: 'Привет', english: 'Hi (informal)' },
          { target: 'Спасибо', english: 'Thank you' },
          { target: 'Пожалуйста', english: 'Please / You\'re welcome' },
          { target: 'До свидания', english: 'Goodbye' }
        ],
        commonMistakes: [
          {
            mistake: 'Pronouncing the letter "P" like English "P" in "park".',
            correction: 'Remember that Cyrillic "Р" is a rolled "R"! Cyrillic "П" is the "P" sound.',
            explanation: 'Cyrillic P = R sound, while Cyrillic П = P sound.'
          },
          {
            mistake: 'Pronouncing unstressed "О" as "oh" in "спасибо".',
            correction: 'Pronounce unstressed "O" as "ah": [spah-SEE-bah].',
            explanation: 'Vowel reduction is central to standard Russian phonetics.'
          }
        ],
        writingChallenge: [
          {
            title: 'Formal Self Introduction in Cyrillic',
            prompt: 'Write three sentences in Russian: Hello (Здравствуйте), my name is [Name] (Меня зовут...), and I study Russian (Я изучаю русский язык).',
            starterHint: 'Use "Здравствуйте!", "Меня зовут...", "Я изучаю русский язык."',
            sampleAnswer: 'Здравствуйте! Меня зовут Андрей. Я студент и я изучаю русский язык. Очень приятно!',
            breakdown: 'Integrates formal greeting, naming formula меня зовут, verb изучать, and polite closing.'
          }
        ],
        practiceExercises: [
          {
            question: 'How is the Cyrillic letter "P" pronounced in Russian?',
            options: ['Like English "P" in "pen"', 'Like a rolled "R"', 'Like English "B"', 'It is silent'],
            correctIndex: 1,
            explanation: 'Cyrillic letter "Р" represents the rolled [r] sound.'
          },
          {
            question: 'What is the phonetic rule for the Russian letter "О" when it is NOT stressed?',
            options: ['It is pronounced like "U"', 'It is pronounced like "A" (Akan\'ye)', 'It becomes silent', 'It sounds like "E"'],
            correctIndex: 1,
            explanation: 'Under vowel reduction (Akan\'ye), unstressed "O" is pronounced as [a].'
          },
          {
            question: 'What gender is a Russian noun ending in the vowel "-а" (e.g. книга, машина)?',
            options: ['Masculine', 'Feminine', 'Neuter', 'Plural'],
            correctIndex: 1,
            explanation: 'Nouns ending in -а or -я are feminine in Russian.'
          },
          {
            question: 'How do you say "Thank you very much" in Russian?',
            options: ['Пожалуйста', 'Спасибо большое', 'Здравствуйте', 'Привет'],
            correctIndex: 1,
            explanation: '"Спасибо большое" (spasibo bol\'shoye) means thank you very much.'
          }
        ]
      }
    ]
  }
];

export const russianA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'Russian A1: Beginner Foundations',
  cefrDescription: 'Can read Cyrillic, understand basic daily phrases, recognize noun genders, and introduce oneself in Russian.',
  canDoStatements: RUSSIAN_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 600,
  grammarTopicsCount: 15,
  modules: russianA1Modules,
  assessmentExam: {
    id: 'exam-ru-a1',
    title: 'Official Build Yourself CEFR A1 Russian Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'ru-q1',
        category: 'Vocabulary',
        question: 'What does "здравствуйте" mean?',
        options: ['Goodbye', 'Hello (formal)', 'Thank you', 'Please'],
        correctIndex: 1,
        explanation: '"Здравствуйте" is the formal greeting equivalent to hello.'
      },
      {
        id: 'ru-q2',
        category: 'Grammar',
        question: 'What gender is the Russian noun "окно" (window, ends in -о)?',
        options: ['Masculine', 'Feminine', 'Neuter', 'Adjective'],
        correctIndex: 2,
        explanation: 'Nouns ending in -о or -е are neuter.'
      },
      {
        id: 'ru-q3',
        category: 'Reading',
        contextPassage: 'Максим живёт в Москве. Он студент и изучает компьютерные науки в университете. Каждый день он пьёт чай и едет на метро на занятия.',
        question: 'Где живёт Максим и как он едет в университет?',
        options: ['В Санкт-Петербурге на автобусе', 'В Москве на метро', 'В Казани на поезде', 'В Лондоне'],
        correctIndex: 1,
        explanation: 'The text states: "Максим живёт в Москве... едет на метро на занятия" (lives in Moscow, travels by metro to classes).'
      }
    ]
  }
};

export const createRussianLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return russianA1LevelData;

  const torflMap: Record<CEFRLevel, string> = {
    A1: 'Russian A1: Foundations',
    A2: 'Russian A2 (TORFL Basic): Elementary Fluency',
    B1: 'Russian B1 (TORFL-1): Intermediate Fluency',
    B2: 'Russian B2 (TORFL-2): Upper-Intermediate Professional',
    C1: 'Russian C1 (TORFL-3): Advanced Academic',
    C2: 'Russian C2 (TORFL-4): Native Master'
  };

  const themes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 The Genitive Case (Родительный падеж)', focus: 'Possession, absence (нет), and numbers', grammar: 'Genitive singular & plural endings' },
      { title: '02 Prepositional Case (Предложный падеж)', focus: 'Location with "в" and "на"', grammar: 'Nouns ending in -е, -ии' }
    ],
    B1: [
      { title: '01 Verbal Aspect: Imperfective vs Perfective', focus: 'Action process vs completed result', grammar: 'Aspectual pairs (читать/прочитать, делать/сделать)' },
      { title: '02 The Dative and Instrumental Cases', focus: 'Giving to someone and tools/means', grammar: 'Дательный (кому?) & Творительный (кем? чем?)' }
    ],
    B2: [
      { title: '01 Verbs of Motion with Prefixes', focus: 'Multi-directional vs unidirectional motion', grammar: 'пойти, приехать, уехать, перейти, зайти' }
    ],
    C1: [
      { title: '01 Participles & Gerunds (Причастия и деепричастия)', focus: 'Formal journalistic and academic writing', grammar: 'Active/passive participles in written Russian' }
    ],
    C2: [
      { title: '01 Stylistic Registers & Classical Rhetoric', focus: 'High literature, legal contracts, and political discourse', grammar: 'Complex Russian syntax and idiomatic mastery' }
    ]
  };

  const lvlThemes = themes[level] || themes.B1;

  const modules: LanguageModule[] = lvlThemes.map((thm, idx) => ({
    id: `ru-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: thm.title,
    description: `Comprehensive ${level} Russian module covering ${thm.focus} and ${thm.grammar}.`,
    level,
    focusTopics: [thm.focus, thm.grammar, 'TORFL Exam Preparation'],
    lessons: [
      {
        id: `ru-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `ru-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${thm.title} - Deep Mastery`,
        level,
        durationMinutes: 30,
        learningObjective: `Master ${thm.focus} according to official TORFL benchmarks.`,
        conceptExplanation: `At the ${level} tier of Russian, language learning focuses on ${thm.focus}. You master ${thm.grammar}.`,
        whyItMatters: `TORFL-1 and TORFL-2 certificates are the mandatory requirement for entry into Russian engineering, computer science, and medical universities (MSU, Bauman, HSE).`,
        grammarFocus: thm.grammar,
        grammarExplanation: `In-depth structural breakdown of ${thm.grammar}.`,
        dialogue: [
          { speaker: 'Директор', text: 'Вы подготовили все материалы к сегодняшней встрече?', translation: 'Have you prepared all materials for today\'s meeting?' },
          { speaker: 'Специалист', text: 'Да, презентация готова, и данные проверены.', translation: 'Yes, the presentation is ready, and the data has been verified.' }
        ],
        vocabulary: [
          {
            id: `ru-${level.toLowerCase()}-v1`,
            word: 'развитие',
            translation: 'development',
            phonetic: 'rahz-vee-TYE-yeh',
            partOfSpeech: 'Noun (n)',
            exampleTarget: 'Развитие технологий меняет мир.',
            exampleTranslation: 'The development of technology is changing the world.',
            audioLanguageCode: 'ru-RU',
            gender: 'neuter'
          }
        ],
        practiceExercises: [
          {
            question: `Which linguistic feature is taught in ${thm.title}?`,
            options: [thm.grammar, 'Alphabet only', 'English syntax', 'None'],
            correctIndex: 0,
            explanation: `The pedagogical milestone is mastering ${thm.grammar}.`
          }
        ]
      }
    ]
  }));

  return {
    level,
    title: torflMap[level],
    cefrDescription: RUSSIAN_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: RUSSIAN_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1200 : level === 'B1' ? 2500 : level === 'B2' ? 4800 : level === 'C1' ? 8000 : 12000,
    grammarTopicsCount: 15,
    modules,
    assessmentExam: {
      id: `exam-ru-${level.toLowerCase()}`,
      title: `Official CEFR ${level} / TORFL Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `ru-${level}-q1`,
          category: 'Grammar',
          question: `Which structure characterizes ${level} Russian competence?`,
          options: [lvlThemes[0]?.grammar || 'Advanced syntax', 'Word guessing', 'Only Latin alphabet', 'Skipping cases'],
          correctIndex: 0,
          explanation: `Mastery of ${lvlThemes[0]?.grammar || 'advanced syntax'} is required for certification.`
        }
      ]
    }
  };
};

export const completeRussianCourse: LanguageCourse = {
  id: 'lang-russian',
  name: 'Russian',
  code: 'ru',
  flag: '🇷🇺',
  speechCode: 'ru-RU',
  nativeName: 'Русский язык',
  description: 'Master Russian from the Cyrillic alphabet to TORFL Level 4 executive fluency. Covers 6 grammatical cases, verbal aspect, and Russian literary culture.',
  writingSystem: 'Cyrillic alphabet (33 letters)',
  grammarHighlights: [
    'Six Grammatical Cases (Nom, Gen, Dat, Acc, Inst, Prep)',
    'Three Noun Genders: Мужской, Женский, Средний',
    'Verbal Aspect: Imperfective vs Perfective',
    'Verbs of Motion (Uni-directional vs Multi-directional)',
    'Vowel Reduction (Akan\'ye and Ikan\'ye)',
    'Patronymic Name System'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: russianA1LevelData,
    A2: createRussianLevel('A2'),
    B1: createRussianLevel('B1'),
    B2: createRussianLevel('B2'),
    C1: createRussianLevel('C1'),
    C2: createRussianLevel('C2')
  },
  lessons: russianA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'ru-sc-1',
      title: 'Moscow Metro & Café Conversation',
      situation: 'Navigating the Moscow Metro and ordering blini and tea at a traditional Russian café.',
      partnerRole: 'Café Attendant (Polite and swift)',
      samplePrompts: [
        'Здравствуйте! Скажите пожалуйста, как проехать до Красной площади?',
        'Один чёрный чай с лимоном и два блина со сметаной, пожалуйста.',
        'Можно оплатить картой? Спасибо большое!'
      ]
    }
  ]
};
