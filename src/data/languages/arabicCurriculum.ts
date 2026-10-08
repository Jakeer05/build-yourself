import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

export const ARABIC_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can read and write all 28 letters of the Arabic alphabet in their initial, medial, final, and isolated positions.',
    'Can pronounce distinctive Arabic pharyngeal and uvular sounds (ع ‘ayn, ح ḥā’, خ khā’, غ ghayn, ق qāf).',
    'Can understand the short vowels (Fatḥa, Ḍamma, Kasra), Sukūn, and Shadda.',
    'Can greet, introduce oneself, state nationality and profession, and navigate basic Modern Standard Arabic (MSA / Fuṣḥā).'
  ],
  A2: [
    'Can construct nominal (Jumla Ismiyya) and verbal (Jumla Fi‘liyya) sentences in Modern Standard Arabic.',
    'Can master the Idaafa (إضافة) possessive genitive construction.',
    'Can use Sun and Moon letters with the definite article "Al-" (الـ).'
  ],
  B1: [
    'Can understand the triliteral root system (Root and Pattern morphology) and derive noun/verb forms.',
    'Can conjugate past (Māḍī) and present (Muḍāri‘) verbs across masculine, feminine, dual, and plural pronouns.',
    'Can read news headlines and converse with clarity across the Arab world.'
  ],
  B2: [
    'Can understand Arab media broadcasts (Al Jazeera, BBC Arabic), public lectures, and business discussions.',
    'Can navigate the 10 Arabic derived verb forms (Awzān Form I to X) with semantic precision.'
  ],
  C1: [
    'Can read classical Arabic texts, diplomatic communiqués, and literature with I‘rāb case endings.'
  ],
  C2: [
    'Can achieve native-level eloquence in Modern Standard and Classical Arabic (Balāgha / Arabic Rhetoric).'
  ]
};

export const arabicA1Modules: LanguageModule[] = [
  {
    id: 'ar-a1-mod-1',
    number: 1,
    title: '01 Arabic Alphabet, Letter Connections & Vowel Marks (Harakat)',
    description: 'Master the 28 letters of the Arabic script written from right to left, letter connectors, and short vowels (Fatha, Damma, Kasra, Sukun).',
    level: 'A1',
    focusTopics: ['Right-to-Left (RTL) Writing', 'Letter Connections (Initial, Medial, Final, Isolated)', 'Harakat Short Vowels', 'Non-connecting Letters (ا, د, ذ, ر, ز, و)'],
    lessons: [
      {
        id: 'ar-a1-l1',
        moduleId: 'ar-a1-mod-1',
        order: 1,
        title: 'The Arabic Alphabet & The Art of Cursive Connection',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Read and write Arabic cursive letters from right to left, identify connecting vs non-connecting letters, and apply short vowels (Harakat).',
        conceptExplanation: 'Arabic is written from RIGHT TO LEFT in a fluid, connected cursive script. There are no capital letters. The alphabet consists of 28 letters. Almost all letters connect to the preceding and following letters. However, SIX "stubborn" letters connect ONLY to the letter before them, never to the letter after:\n- Alif (ا), Dāl (د), Dhāl (ذ), Rā’ (ر), Zāy (ز), Wāw (و).\nShort vowels are written as small marks (Harakāt) above or below letters:\n- Fatḥa (َ ): "a" sound (as in cat)\n- Ḍamma (ُ ): "u" sound (as in put)\n- Kasra (ِ ): "i" sound (as in pin)\n- Sukūn (ْ ): zero vowel (stop)\n- Shadda (ّ ): doubling the consonant!',
        whyItMatters: 'Arabic is the official language of 25 countries and one of the 6 official languages of the United Nations. Learning to read Arabic script opens the doors to the entire Middle East and North Africa.',
        grammarFocus: 'Phonology & The Triliteral Root Concept',
        grammarExplanation: 'Arabic vocabulary is built on three-letter roots (the Root System). For example, the root K-T-B (ك-ت-ب) relates to writing:\n- Kitāb (كِتَاب) = book\n- Kātib (كَاتِب) = writer\n- Maktab (مَكْتَب) = desk / office\n- Maktaba (مَكْتَبَة) = library\n- Kataba (كَتَبَ) = he wrote!',
        grammarSections: [
          {
            title: 'Sample Arabic Letter Forms',
            explanation: 'Observe how letters morph according to their position in a word.',
            tables: [
              {
                headers: ['Letter', 'Name', 'Isolated', 'Initial', 'Medial', 'Final'],
                rows: [
                  ['ب', 'Bā’', 'ب', 'بـ', 'ـبـ', 'ـب'],
                  ['ت', 'Tā’', 'ت', 'تـ', 'ـتـ', 'ـت'],
                  ['ن', 'Nūn', 'ن', 'نـ', 'ـنـ', 'ـن'],
                  ['م', 'Mīm', 'م', 'مـ', 'ـمـ', 'ـم'],
                  ['ك', 'Kāf', 'ك', 'كـ', 'ـكـ', 'ـك']
                ]
              }
            ],
            examples: [
              { target: 'مَرْحَبًا!', romanization: 'Marḥaban!', english: 'Hello / Welcome!', note: 'Notice the tanwin on the alif at the end.' },
              { target: 'السَّلَامُ عَلَيْكُمْ.', romanization: 'As-salāmu ‘alaykum.', english: 'Peace be upon you (standard universal greeting).', note: 'Notice the Shadda doubling the \'s\' sound.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'السَّلَامُ عَلَيْكُمْ (As-salāmu ‘alaykum)',
            phoneticIpa: '[as.sa.laː.mu ʕa.laj.kum]',
            mouthPositionTip: 'Pharyngeal sound \'Ayn (ع) is pronounced from deep in the throat by gently tightening the pharynx.',
            exampleWord: 'عَرَبِيّ (Arabiy)',
            translation: 'Arabic'
          }
        ],
        dialogue: [
          { speaker: 'Tariq', text: 'السَّلَامُ عَلَيْكُمْ! كَيْفَ حَالُكَ؟', romanization: 'As-salāmu ‘alaykum! Kayfa ḥāluk?', translation: 'Peace be upon you! How are you?' },
          { speaker: 'Samir', text: 'وَعَلَيْكُمُ السَّلَام! أَنَا بِخَيْر، الحَمْدُ لِلَّه. شُكْرًا لَكَ.', romanization: 'Wa ‘alaykum as-salām! Anā bi-khayr, al-ḥamdu lillāh. Shukran lak.', translation: 'And upon you be peace! I am doing well, praise be to God. Thank you.' }
        ],
        culturalNote: {
          title: 'The Greeting and Response Etiquette',
          content: 'The greeting "السَّلَامُ عَلَيْكُمْ" (As-salāmu ‘alaykum) is used across the entire Arab and Islamic world. The traditional mandatory response is: "وَعَلَيْكُمُ السَّلَام" (Wa ‘alaykum as-salām). Replying promptly is a mark of honor and goodwill.'
        },
        vocabulary: [
          {
            id: 'ar-v-1',
            word: 'مَرْحَبًا',
            translation: 'hello / welcome',
            phonetic: 'mar-HAH-bahn',
            partOfSpeech: 'Greeting',
            exampleTarget: 'مَرْحَبًا بِكُمْ فِي دُبَيّ.',
            exampleTranslation: 'Welcome to Dubai.',
            audioLanguageCode: 'ar-SA',
            characterScript: 'مرحبا'
          },
          {
            id: 'ar-v-2',
            word: 'شُكْرًا',
            translation: 'thank you',
            phonetic: 'SHOOK-rahn',
            partOfSpeech: 'Phrase',
            exampleTarget: 'شُكْرًا جَزِيلًا لَكَ.',
            exampleTranslation: 'Thank you very much.',
            audioLanguageCode: 'ar-SA',
            characterScript: 'شكرا'
          },
          {
            id: 'ar-v-3',
            word: 'مِنْ فَضْلِكَ',
            translation: 'please (to a male)',
            phonetic: 'min FAD-lik',
            partOfSpeech: 'Phrase',
            exampleTarget: 'فِنْجَان قَهْوَة مِنْ فَضْلِكَ.',
            exampleTranslation: 'A cup of coffee please.',
            audioLanguageCode: 'ar-SA',
            characterScript: 'من فضلك'
          },
          {
            id: 'ar-v-4',
            word: 'كِتَاب',
            translation: 'book',
            phonetic: 'kee-TAHB',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'هَذَا كِتَابِي.',
            exampleTranslation: 'This is my book.',
            audioLanguageCode: 'ar-SA',
            characterScript: 'كتاب'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-ar-1',
            promptEnglish: 'Hello, how are you?',
            targetSentence: 'مَرْحَبًا، كَيْفَ حَالُكَ؟',
            jumbledWords: ['حَالُكَ؟', 'كَيْفَ', 'مَرْحَبًا،'],
            explanation: 'Greeting + kayfa (how) + ḥāluk (your condition).'
          }
        ],
        matchingPairs: [
          { target: 'مَرْحَبًا', english: 'Hello / Welcome' },
          { target: 'شُكْرًا', english: 'Thank you' },
          { target: 'السَّلَامُ عَلَيْكُمْ', english: 'Peace be upon you' },
          { target: 'مِنْ فَضْلِكَ', english: 'Please' },
          { target: 'مَعَ السَّلَامَة', english: 'Goodbye' }
        ],
        commonMistakes: [
          {
            mistake: 'Connecting the letter Alif (ا) to the letter that follows it.',
            correction: 'Alif is a non-connector: never connect letters to its left side.',
            explanation: 'The six non-connecting letters (ا, د, ذ, ر, ز, و) create a natural break in the word.'
          }
        ],
        writingChallenge: [
          {
            title: 'Writing Arabic Greetings from Right to Left',
            prompt: 'Write three phrases in Arabic: Welcome (مَرْحَبًا), Peace be upon you (السَّلَامُ عَلَيْكُمْ), and Thank you (شُكْرًا).',
            starterHint: 'Write right to left: "مرحبا", "السلام عليكم", "شكرا"',
            sampleAnswer: 'مَرْحَبًا! السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّه. شُكْرًا جَزِيلًا لَكُمْ.',
            breakdown: 'Integrates authentic Arabic greetings, polite blessings, and formal gratitude.'
          }
        ],
        practiceExercises: [
          {
            question: 'In which direction is the Arabic language written and read?',
            options: ['Left to Right', 'Right to Left', 'Top to Bottom', 'Alternating lines'],
            correctIndex: 1,
            explanation: 'Arabic is written strictly from right to left.'
          },
          {
            question: 'How many letters are in the Arabic alphabet?',
            options: ['24', '26', '28', '32'],
            correctIndex: 2,
            explanation: 'The standard Arabic alphabet consists of 28 letters.'
          },
          {
            question: 'What is the standard response to "السَّلَامُ عَلَيْكُمْ" (As-salāmu ‘alaykum)?',
            options: ['شكرًا', 'وَعَلَيْكُمُ السَّلَام (Wa ‘alaykum as-salām)', 'مرحبا', 'أهلاً وسهلاً'],
            correctIndex: 1,
            explanation: 'The canonical response is "وَعَلَيْكُمُ السَّلَام" (And upon you be peace).'
          },
          {
            question: 'What do the letters K-T-B (ك-ت-ب) represent in the Arabic root system?',
            options: ['Food and dining', 'Writing and books', 'Travel and geography', 'Numbers'],
            correctIndex: 1,
            explanation: 'The root K-T-B is the foundational root for writing (kitāb = book, kātib = writer, maktab = office).'
          }
        ]
      }
    ]
  }
];

export const arabicA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'Arabic A1: Beginner Foundations',
  cefrDescription: 'Can read Arabic cursive script, understand basic greetings, and recognize root patterns in Modern Standard Arabic.',
  canDoStatements: ARABIC_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 500,
  grammarTopicsCount: 14,
  modules: arabicA1Modules,
  assessmentExam: {
    id: 'exam-ar-a1',
    title: 'Official Build Yourself CEFR A1 Arabic Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'ar-q1',
        category: 'Vocabulary',
        question: 'What does "شُكْرًا" mean in Arabic?',
        options: ['Goodbye', 'Please', 'Thank you', 'Hello'],
        correctIndex: 2,
        explanation: '"شُكْرًا" (Shukran) means thank you.'
      },
      {
        id: 'ar-q2',
        category: 'Grammar',
        question: 'Which of the following is a non-connecting letter that does NOT connect to the letter following it?',
        options: ['ب (Bā’)', 'م (Mīm)', 'ا (Alif)', 'ت (Tā’)'],
        correctIndex: 2,
        explanation: 'Alif (ا) is one of the six non-connecting letters in Arabic script.'
      },
      {
        id: 'ar-q3',
        category: 'Reading',
        contextPassage: 'أَحْمَد طَالِبٌ فِي جَامِعَةِ القَاهِرَة. يَدْرُسُ الهَنْدَسَة وَيَتَحَدَّثُ اللُّغَةَ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّة.',
        question: 'مَاذَا يَدْرُسُ أَحْمَد؟ (What does Ahmad study?)',
        options: ['الطِّب (Medicine)', 'الهَنْدَسَة (Engineering)', 'القَانُون (Law)', 'التَّارِيخ (History)'],
        correctIndex: 1,
        explanation: 'The passage explicitly says: "يَدْرُسُ الهَنْدَسَة" (he studies engineering).'
      }
    ]
  }
};

export const createArabicLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return arabicA1LevelData;

  const titles: Record<CEFRLevel, string> = {
    A1: 'Arabic A1: Foundations',
    A2: 'Arabic A2: Elementary Fluency',
    B1: 'Arabic B1: Intermediate Fluency',
    B2: 'Arabic B2: Upper-Intermediate Professional',
    C1: 'Arabic C1: Advanced Literary & Media Mastery',
    C2: 'Arabic C2: Native Eloquence & Rhetoric'
  };

  const themes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 The Idaafa (Genitive Possession Construction)', focus: 'Expressing possession and relationships', grammar: 'Noun + Noun possessive chain (Kitāb al-mudarris)' },
      { title: '02 Sun and Moon Letters (الحروف الشمسية والقمرية)', focus: 'Definite article assimilation', grammar: 'Assimilation with Shamsiyya letters (e.g. ash-shams)' }
    ],
    B1: [
      { title: '01 Derived Verb Forms (الأوزان Awzān I to V)', focus: 'Systematic derivation of vocabulary', grammar: 'Pattern fa‘‘ala, fā‘ala, tafā‘ala' },
      { title: '02 Case Endings (الإعراب I‘rāb: Marfū‘, Manṣūb, Majrūr)', focus: 'Grammatical cases in formal reading', grammar: 'Ḍamma, Fatḥa, Kasra endings' }
    ],
    B2: [
      { title: '01 Advanced Derived Verb Forms (Awzān VI to X)', focus: 'Expressing complex causation and inquiry', grammar: 'Forms istaf‘ala, ifta‘ala, infa‘ala' }
    ],
    C1: [
      { title: '01 Media & Diplomatic Arabic', focus: 'Understanding UN communiqués and news editorials', grammar: 'Formal rhetorical connectors and subjunctive moods' }
    ],
    C2: [
      { title: '01 Classical Arabic Rhetoric (علم البلاغة Balāgha)', focus: 'Mastering classical prose and Quranic morphology', grammar: 'Eloquence, metaphor, and intricate syntactic structures' }
    ]
  };

  const lvlThemes = themes[level] || themes.B1;

  const modules: LanguageModule[] = lvlThemes.map((thm, idx) => ({
    id: `ar-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: thm.title,
    description: `Comprehensive ${level} Arabic module covering ${thm.focus} and ${thm.grammar}.`,
    level,
    focusTopics: [thm.focus, thm.grammar, 'Modern Standard Arabic'],
    lessons: [
      {
        id: `ar-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `ar-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${thm.title} - Deep Mastery`,
        level,
        durationMinutes: 30,
        learningObjective: `Master ${thm.focus} according to CEFR Arabic standards.`,
        conceptExplanation: `At the ${level} tier of Arabic, study focuses on ${thm.focus}. You master ${thm.grammar}.`,
        whyItMatters: `Modern Standard Arabic (Fuṣḥā) is the unified written and formal spoken language across the 22 nations of the Arab League.`,
        grammarFocus: thm.grammar,
        grammarExplanation: `In-depth structural breakdown of ${thm.grammar}.`,
        dialogue: [
          { speaker: 'المدير', text: 'هَلِ انْتَهَيْتَ مِنْ إِعْدَادِ التَّقْرِيرِ؟', translation: 'Have you finished preparing the report?' },
          { speaker: 'المُهَنْدِس', text: 'نَعَمْ، التَّقْرِيرُ جَاهِزٌ لِلْمُنَاقَشَةِ اليَوْم.', translation: 'Yes, the report is ready for discussion today.' }
        ],
        vocabulary: [
          {
            id: `ar-${level.toLowerCase()}-v1`,
            word: 'تَطْوِير',
            translation: 'development',
            phonetic: 'tat-WEER',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'تَطْوِيرُ التِّكْنُولُوجِيَا مُهِمٌّ جِدًّا.',
            exampleTranslation: 'Development of technology is very important.',
            audioLanguageCode: 'ar-SA',
            characterScript: 'تطوير'
          }
        ],
        practiceExercises: [
          {
            question: `Which concept is taught in ${thm.title}?`,
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
    title: titles[level],
    cefrDescription: ARABIC_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: ARABIC_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1200 : level === 'B1' ? 2400 : level === 'B2' ? 4500 : level === 'C1' ? 7500 : 12000,
    grammarTopicsCount: 14,
    modules,
    assessmentExam: {
      id: `exam-ar-${level.toLowerCase()}`,
      title: `Official CEFR ${level} Arabic Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `ar-${level}-q1`,
          category: 'Grammar',
          question: `Which structure characterizes ${level} Arabic competence?`,
          options: [lvlThemes[0]?.grammar || 'Advanced syntax', 'Word guessing', 'Only Latin alphabet', 'Skipping roots'],
          correctIndex: 0,
          explanation: `Mastery of ${lvlThemes[0]?.grammar || 'advanced syntax'} is required for certification.`
        }
      ]
    }
  };
};

export const completeArabicCourse: LanguageCourse = {
  id: 'lang-arabic',
  name: 'Arabic',
  code: 'ar',
  flag: '🇸🇦',
  speechCode: 'ar-SA',
  nativeName: 'العربية (الفصحى)',
  description: 'Master Modern Standard Arabic (Fuṣḥā) from the 28-letter cursive alphabet to C2 diplomatic and media eloquence.',
  writingSystem: 'Arabic script (28 letters, Right-to-Left, cursive)',
  grammarHighlights: [
    'Right-to-Left (RTL) Cursive Writing',
    'Triliteral Root and Pattern (Wazn) System',
    'Nominal (Ismiyya) vs Verbal (Fi‘liyya) Sentences',
    'The Idaafa (إضافة) Genitive Construct',
    'Sun & Moon Letters Assimilation',
    'Ten Derived Verb Forms (Awzān I to X)'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: arabicA1LevelData,
    A2: createArabicLevel('A2'),
    B1: createArabicLevel('B1'),
    B2: createArabicLevel('B2'),
    C1: createArabicLevel('C1'),
    C2: createArabicLevel('C2')
  },
  lessons: arabicA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'ar-sc-1',
      title: 'Dubai Traditional Souk & Coffee',
      situation: 'Ordering Arabic coffee with cardamom and dates in a traditional marketplace.',
      partnerRole: 'Merchant (Hospitable and respectful)',
      samplePrompts: [
        'السَّلَامُ عَلَيْكُمْ! كَمْ سِعْرُ هَذِهِ القَهْوَة العَرَبِيَّة؟',
        'مِنْ فَضْلِكَ، أُرِيدُ فِنْجَانَ قَهْوَةٍ وَتَمْرًا.',
        'شُكْرًا جَزِيلًا، مَعَ السَّلَامَة!'
      ]
    }
  ]
};
