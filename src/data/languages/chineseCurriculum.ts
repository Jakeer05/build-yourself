import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

export const CHINESE_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can understand and pronounce all Pinyin initials and finals with accurate tone accuracy (1st, 2nd, 3rd, 4th, neutral).',
    'Can recognize and write 150-300 high-frequency Simplified Chinese Hanzi characters and core radicals.',
    'Can introduce oneself, exchange greetings, order food, and inquire about prices using basic measure words (个, 本).',
    'Can form questions using question particle 吗 (ma) and question pronouns (什么, 哪里, 谁) (HSK 1 level).'
  ],
  A2: [
    'Can communicate about daily routines, directions in Chinese cities, shopping, and transportation.',
    'Can use aspect particles 了 (le for completed action) and 过 (guo for past experiential action).',
    'Can read approximately 500-600 Hanzi characters and write simple messages on WeChat (HSK 2 level).'
  ],
  B1: [
    'Can handle travel across China, study matters, and express opinions on familiar topics with spontaneous fluency.',
    'Can use the 把 (bǎ) construction and 被 (bèi) passive sentences accurately.',
    'Can recognize 1,000 Hanzi characters and read simple news items and Chinese subtitles (HSK 3 level).'
  ],
  B2: [
    'Can understand complex technical and business discussions in Mandarin without strain for either party.',
    'Can read 1,800-2,500 characters and write formal business emails and reports (HSK 4 level).'
  ],
  C1: [
    'Can read Chinese newspapers, academic papers, and classic literature with ease (HSK 5 level).'
  ],
  C2: [
    'Can express finer shades of meaning with native Chinese idiom mastery (Chengyu 成语) and rhetorical sophistication (HSK 6 level).'
  ]
};

export const chineseA1Modules: LanguageModule[] = [
  {
    id: 'zh-a1-mod-1',
    number: 1,
    title: '01 Pinyin, The 4 Tones & Character Radicals',
    description: 'Master Mandarin phonetics: Pinyin initials and finals, the 4 distinctive pitch tones, the neutral tone, and Chinese character structure.',
    level: 'A1',
    focusTopics: ['Pinyin System', 'The 4 Tones + Neutral Tone', 'Tone Sandhi (Third Tone Change)', 'Hanzi Radicals (人, 水, 木, 口)'],
    lessons: [
      {
        id: 'zh-a1-l1',
        moduleId: 'zh-a1-mod-1',
        order: 1,
        title: 'Pinyin, The Four Tones & Character Building Blocks',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Articulate the four Mandarin tones accurately, read Pinyin, and recognize foundational Chinese radicals.',
        conceptExplanation: 'Mandarin Chinese is a tonal language. Every syllable has a specific pitch contour that dictates its meaning:\n1. First Tone (ā): High and flat (like singing a steady high note).\n2. Second Tone (á): Rising (like asking "What?").\n3. Third Tone (ǎ): Dipping down then rising up.\n4. Fourth Tone (à): Sharp, falling (like a firm command "No!").\n5. Neutral Tone (a): Light and short.\nExample: "mā" (mother 妈), "má" (hemp 麻), "mǎ" (horse 马), "mà" (to scold 骂). Master the tones, and you speak clear, understandable Mandarin!',
        whyItMatters: 'If you use the wrong tone, you say a completely different word! For example: "wèn" (4th tone, 问) means "to ask", while "wěn" (3rd tone, 吻) means "to kiss"! Radicals provide semantic clues to character meanings (e.g. 氵 indicates water).',
        grammarFocus: 'Tone Sandhi: When Two Third Tones Meet',
        grammarExplanation: 'Third Tone Sandhi Rule: When two third tones occur consecutively, the first third tone automatically changes into a SECOND tone in spoken Mandarin! For example: "nǐ" (3rd) + "hǎo" (3rd) is pronounced "ní hǎo" (2nd + 3rd)!',
        grammarSections: [
          {
            title: 'The Four Tones of Mandarin Chinese',
            explanation: 'Pitch contour and tonal markers.',
            tables: [
              {
                headers: ['Tone', 'Contour', 'Pitch Level (1-5)', 'Example with "ma"', 'Hanzi Meaning'],
                rows: [
                  ['1st Tone (阴平)', 'High level', '55 (High flat)', 'mā', '妈 (mother)'],
                  ['2nd Tone (阳平)', 'Rising', '35 (Mid to high)', 'má', '麻 (hemp / numb)'],
                  ['3rd Tone (上声)', 'Dipping & rising', '214 (Low dip to high)', 'mǎ', '马 (horse)'],
                  ['4th Tone (去声)', 'Falling', '51 (High drop to low)', 'mà', '骂 (to scold)'],
                  ['Neutral Tone (轻声)', 'Short & light', '-- (Unaccented)', 'ma', '吗 (question marker)']
                ]
              }
            ],
            examples: [
              { target: '你好！', romanization: 'Nǐ hǎo!', english: 'Hello!', note: 'Pronounced [ní hǎo] due to 3rd-tone sandhi.' },
              { target: '谢谢你！', romanization: 'Xièxie nǐ!', english: 'Thank you!', note: 'First "xiè" is 4th tone; second is neutral tone.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: '你好 (nǐ hǎo)',
            phoneticIpa: '[ni³⁵ xaʊ̯²¹⁴]',
            mouthPositionTip: 'Smooth rise on first syllable "ní", deep low resonant dip on "hǎo".',
            exampleWord: '你好',
            translation: 'Hello'
          }
        ],
        dialogue: [
          { speaker: 'Li Ming', text: '你好！请问你叫什么名字？', romanization: 'Nǐ hǎo! Qǐngwèn nǐ jiào shénme míngzi?', translation: 'Hello! May I ask what is your name?' },
          { speaker: 'Anna', text: '你好！我叫安娜。我是留学生。', romanization: 'Nǐ hǎo! Wǒ jiào Ānnà. Wǒ shì liúxuéshēng.', translation: 'Hello! My name is Anna. I am an international student.' },
          { speaker: 'Li Ming', text: '很高兴认识你，安娜！', romanization: 'Hěn gāoxìng rènshi nǐ, Ānnà!', translation: 'Very pleased to meet you, Anna!' }
        ],
        culturalNote: {
          title: 'The Politeness of "请问" (Qǐngwèn)',
          content: 'In China, when asking anyone a question on the street or in a shop, always preface with "请问" (Qǐngwèn = "May I please inquire"). It shows immediate politeness and warmth, ensuring helpful responses from locals!'
        },
        vocabulary: [
          {
            id: 'zh-v-1',
            word: '你好',
            translation: 'hello',
            phonetic: 'nee how',
            partOfSpeech: 'Greeting',
            exampleTarget: '老师，您好！',
            exampleTranslation: 'Teacher, hello (respectful)!',
            audioLanguageCode: 'zh-CN',
            characterScript: '你好'
          },
          {
            id: 'zh-v-2',
            word: '谢谢',
            translation: 'thank you',
            phonetic: 'shyeh-shyeh',
            partOfSpeech: 'Phrase',
            exampleTarget: '太谢谢你了！',
            exampleTranslation: 'Thank you so much!',
            audioLanguageCode: 'zh-CN',
            characterScript: '谢谢'
          },
          {
            id: 'zh-v-3',
            word: '再见',
            translation: 'goodbye',
            phonetic: 'dzeye-jyen',
            partOfSpeech: 'Greeting',
            exampleTarget: '明天见，再见！',
            exampleTranslation: 'See you tomorrow, goodbye!',
            audioLanguageCode: 'zh-CN',
            characterScript: '再见'
          },
          {
            id: 'zh-v-4',
            word: '中国',
            translation: 'China',
            phonetic: 'johng-gwor',
            partOfSpeech: 'Noun',
            exampleTarget: '我在中国学习汉语。',
            exampleTranslation: 'I study Chinese in China.',
            audioLanguageCode: 'zh-CN',
            characterScript: '中国'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-zh-1',
            promptEnglish: 'Hello, my name is Anna.',
            targetSentence: '你好，我叫安娜。',
            jumbledWords: ['我叫', '安娜。', '你好，'],
            explanation: 'Greeting + Subject + jiào (to be called) + Name.'
          }
        ],
        matchingPairs: [
          { target: '你好', english: 'Hello' },
          { target: '谢谢', english: 'Thank you' },
          { target: '再见', english: 'Goodbye' },
          { target: '请问', english: 'May I ask / Excuse me' },
          { target: '很高兴认识你', english: 'Pleased to meet you' }
        ],
        commonMistakes: [
          {
            mistake: 'Pronouncing both words in "nǐ hǎo" with a flat English accent.',
            correction: 'Pronounce the 2nd tone change: [ní hǎo].',
            explanation: 'Mandarin requires tone adherence; ignoring tones causes confusion.'
          }
        ],
        writingChallenge: [
          {
            title: 'Chinese Self-Introduction in Pinyin and Hanzi',
            prompt: 'Write three sentences in Mandarin: Hello (你好), stating your name with 我叫..., and stating that you are learning Chinese (我学中文).',
            starterHint: 'Use "你好！", "我叫...", "我学中文。"',
            sampleAnswer: '你好！我叫李华。我是学生，我学中文。很高兴认识你！',
            breakdown: 'Integrates greeting, naming verb 叫, copula 是, and the study verb 学.'
          }
        ],
        practiceExercises: [
          {
            question: 'How many tones does standard Mandarin Chinese possess (excluding neutral tone)?',
            options: ['2 tones', '3 tones', '4 tones', '6 tones'],
            correctIndex: 2,
            explanation: 'Mandarin has four main pitch tones: 1st (high level), 2nd (rising), 3rd (dipping), and 4th (falling).'
          },
          {
            question: 'What happens when two 3rd tones occur consecutively (e.g. nǐ + hǎo)?',
            options: ['Both become 4th tone', 'The first 3rd tone changes into a 2nd tone (ní hǎo)', 'Both become neutral tone', 'No change'],
            correctIndex: 1,
            explanation: 'Under 3rd tone sandhi, the first 3rd tone becomes a 2nd tone in speech.'
          },
          {
            question: 'What is the polite phrase meaning "May I please ask / inquire"?',
            options: ['谢谢 (xièxie)', '请问 (qǐngwèn)', '再见 (zàijiàn)', '对不起 (duìbuqǐ)'],
            correctIndex: 1,
            explanation: '请问 (qǐngwèn) politely prefaces questions in Mandarin.'
          },
          {
            question: 'Which question particle is appended to the end of a statement to make it a yes/no question in Mandarin?',
            options: ['吗 (ma)', '吧 (ba)', '呢 (ne)', '了 (le)'],
            correctIndex: 0,
            explanation: '吗 (ma) turns any statement into a yes/no question (e.g. 你好吗 = How are you?).'
          }
        ]
      }
    ]
  }
];

export const chineseA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'Chinese A1: Beginner Foundations (HSK 1)',
  cefrDescription: 'Can understand Pinyin, articulate the 4 tones, recognize 200 Hanzi characters, and communicate basic greetings.',
  canDoStatements: CHINESE_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 500,
  grammarTopicsCount: 15,
  modules: chineseA1Modules,
  assessmentExam: {
    id: 'exam-zh-a1',
    title: 'Official Build Yourself CEFR A1 / HSK 1 Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'zh-q1',
        category: 'Grammar',
        question: 'How do you turn the statement "你是学生" (You are a student) into a question in Mandarin?',
        options: ['你是学生吗？', '你是学生吧？', '你是学生呢？', '你是学生了？'],
        correctIndex: 0,
        explanation: 'Appending 吗 (ma) to the end of a statement forms a yes/no question.'
      },
      {
        id: 'zh-q2',
        category: 'Vocabulary',
        question: 'What does "谢谢" mean in English?',
        options: ['Goodbye', 'Thank you', 'Please', 'Sorry'],
        correctIndex: 1,
        explanation: '"谢谢" (xièxie) means thank you.'
      },
      {
        id: 'zh-q3',
        category: 'Reading',
        contextPassage: '王朋是北京大学的学生。他每天早上七点起床，去食堂吃早饭。他喜欢学电脑和英文。',
        question: '王朋是哪里的学生？ (Where is Wang Peng a student?)',
        options: ['清华大学', '北京大学', '上海大学', '美国大学'],
        correctIndex: 1,
        explanation: 'The passage explicitly says: "王朋是北京大学的学生" (Wang Peng is a student of Peking University).'
      }
    ]
  }
};

export const createChineseLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return chineseA1LevelData;

  const hskMap: Record<CEFRLevel, string> = {
    A1: 'Chinese A1 (HSK 1): Foundations',
    A2: 'Chinese A2 (HSK 2): Elementary Fluency',
    B1: 'Chinese B1 (HSK 3): Intermediate Bridge',
    B2: 'Chinese B2 (HSK 4): Upper-Intermediate Fluency',
    C1: 'Chinese C1 (HSK 5): Advanced Professional',
    C2: 'Chinese C2 (HSK 6): Native Mastery'
  };

  const themes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 Aspect Particles 了 (le) & 过 (guo)', focus: 'Completed action vs life experience', grammar: 'Verb + 了 vs Verb + 过' },
      { title: '02 Measure Words (量词: 个, 本, 张, 条)', focus: 'Classifying objects in Chinese', grammar: 'Number + Measure Word + Noun rule' }
    ],
    B1: [
      { title: '01 The 把 (bǎ) Construction', focus: 'Disposal of objects and results', grammar: 'Subject + 把 + Object + Verb + Result' },
      { title: '02 Directional & Resultative Complements', focus: 'Expressing outcomes of actions', grammar: 'Verb + 完, 到, 见, 懂, 走, 来' }
    ],
    B2: [
      { title: '01 Passive Voice with 被 (bèi)', focus: 'Formal reporting and objective narratives', grammar: 'Subject + 被 + Agent + Verb + Other Element' }
    ],
    C1: [
      { title: '01 Four-Character Idioms (成语 Chengyu)', focus: 'Classical eloquence in business and politics', grammar: 'Literary syntax and classical Chinese markers' }
    ],
    C2: [
      { title: '01 Native Classical Rhetoric & Stylistic Nuance', focus: 'High literature, philosophy, and diplomacy', grammar: 'Archaic Hanzi and complex classical grammar' }
    ]
  };

  const lvlThemes = themes[level] || themes.B1;

  const modules: LanguageModule[] = lvlThemes.map((thm, idx) => ({
    id: `zh-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: thm.title,
    description: `Comprehensive ${level} Mandarin module covering ${thm.focus} and ${thm.grammar}.`,
    level,
    focusTopics: [thm.focus, thm.grammar, 'HSK Exam Preparation'],
    lessons: [
      {
        id: `zh-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `zh-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${thm.title} - Deep Mastery`,
        level,
        durationMinutes: 30,
        learningObjective: `Master ${thm.focus} according to HSK benchmarks.`,
        conceptExplanation: `At the ${level} tier of Mandarin, study focuses on ${thm.focus}. You master ${thm.grammar}.`,
        whyItMatters: `HSK 4 and HSK 5 certification is globally recognized as the credential for Chinese government scholarships (CSC) and employment at leading Chinese global enterprises (Alibaba, Tencent, Huawei).`,
        grammarFocus: thm.grammar,
        grammarExplanation: `In-depth structural breakdown of ${thm.grammar}.`,
        dialogue: [
          { speaker: '经理', text: '这个项目的可行性报告做好了吗？', translation: 'Has the feasibility report for this project been completed?' },
          { speaker: '工程师', text: '已经完成了，我马上把详细数据发送给您。', translation: 'It is already finished, I will send the detailed data to you right away.' }
        ],
        vocabulary: [
          {
            id: `zh-${level.toLowerCase()}-v1`,
            word: '发展',
            translation: 'development / to develop',
            phonetic: 'fah-jahn',
            partOfSpeech: 'Noun / Verb',
            exampleTarget: '中国的高铁发展非常迅速。',
            exampleTranslation: 'China\'s high-speed rail development is very rapid.',
            audioLanguageCode: 'zh-CN',
            characterScript: '发展'
          }
        ],
        practiceExercises: [
          {
            question: `Which grammar concept is taught in ${thm.title}?`,
            options: [thm.grammar, 'Pinyin only', 'English syntax', 'None'],
            correctIndex: 0,
            explanation: `The pedagogical milestone is mastering ${thm.grammar}.`
          }
        ]
      }
    ]
  }));

  return {
    level,
    title: hskMap[level],
    cefrDescription: CHINESE_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: CHINESE_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1200 : level === 'B1' ? 2500 : level === 'B2' ? 5000 : level === 'C1' ? 8000 : 12000,
    grammarTopicsCount: 15,
    modules,
    assessmentExam: {
      id: `exam-zh-${level.toLowerCase()}`,
      title: `Official CEFR ${level} / HSK Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `zh-${level}-q1`,
          category: 'Grammar',
          question: `Which structure characterizes ${level} Mandarin competence?`,
          options: [lvlThemes[0]?.grammar || 'Advanced syntax', 'Word guessing', 'Only Pinyin', 'Skipping tones'],
          correctIndex: 0,
          explanation: `Mastery of ${lvlThemes[0]?.grammar || 'advanced syntax'} is required for certification.`
        }
      ]
    }
  };
};

export const completeChineseCourse: LanguageCourse = {
  id: 'lang-chinese',
  name: 'Chinese (Mandarin)',
  code: 'zh',
  flag: '🇨🇳',
  speechCode: 'zh-CN',
  nativeName: '中文 (普通话)',
  description: 'Master Mandarin Chinese from Pinyin and 4 tones to HSK Level 6 executive fluency. Essential for global trade, diplomacy, technology, and study in China.',
  writingSystem: 'Simplified Chinese Characters (简体字) + Pinyin',
  grammarHighlights: [
    'Four Phonetic Tones + Neutral Tone',
    'Time-When before Verb Sentence Structure',
    'Measure Word (Classifier) System',
    'Aspect Particles (了 le, 过 guo, 着 zhe)',
    'The 把 (bǎ) Disposal & 被 (bèi) Passive Structures',
    'Four-Character Idioms (成语 Chengyu)'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: chineseA1LevelData,
    A2: createChineseLevel('A2'),
    B1: createChineseLevel('B1'),
    B2: createChineseLevel('B2'),
    C1: createChineseLevel('C1'),
    C2: createChineseLevel('C2')
  },
  lessons: chineseA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'zh-sc-1',
      title: 'Beijing Dumpling Restaurant Order',
      situation: 'Ordering dumplings and jasmine tea at a traditional restaurant in Beijing.',
      partnerRole: 'Service Waiter (Fúwùyuán - attentive and quick)',
      samplePrompts: [
        '服务员，请给我们两屉猪肉白菜水饺和一壶茉莉花茶。',
        '请问，可以扫微信支付吗？',
        '买单，请给我一张发票。'
      ]
    }
  ]
};
