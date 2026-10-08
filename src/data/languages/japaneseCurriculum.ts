import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

export const JAPANESE_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can read and write all 46 Hiragana and 46 Katakana characters with dakuten (ga, za, da, ba) and handakuten (pa).',
    'Can understand and use fundamental Japanese particles (は wa, が ga, を o, に ni, で de, と to, も mo).',
    'Can greet, introduce oneself, exchange business cards (meishi), and order in a Japanese restaurant using polite desu/masu form.',
    'Can master basic counters, numbers to 100,000, and tell time in Japan (JLPT N5 level).'
  ],
  A2: [
    'Can understand and formulate basic requests using the Te-form (〜てください) and progressive actions (〜ています).',
    'Can read approximately 150-200 core Kanji characters and comprehend basic manga, schedules, and signs.',
    'Can use plain informal forms (da, suru, iku) with close friends and polite forms in public settings (JLPT N4 level).'
  ],
  B1: [
    'Can understand everyday Japanese spoken at natural speed in familiar contexts.',
    'Can express desires (〜たい), potential ability (〜ができる / potential verbs), and conditional hypotheses (〜たら, 〜ば).',
    'Can read approximately 350-450 Kanji and write coherent personal and business emails (JLPT N3 level).'
  ],
  B2: [
    'Can comprehend natural Japanese in news broadcasts, corporate meetings, and complex essays.',
    'Can employ humble language (Kenjougo) and honorific language (Sonkeigo) in corporate business environments.',
    'Can read approximately 1,000 Joyo Kanji and engage spontaneously in technical discussions (JLPT N2 level).'
  ],
  C1: [
    'Can read nuanced Japanese editorial literature, contracts, and academic research papers.',
    'Can use advanced idiomatic expressions (Yojijukugo four-character idioms) and formal administrative registers.',
    'Can master all 2,136 Joyo Kanji required for university graduation in Japan (JLPT N1 level).'
  ],
  C2: [
    'Can understand and produce native-level Japanese with cultural nuance, classical literary references, and effortless spontaneity across all social hierarchies.'
  ]
};

export const japaneseA1Modules: LanguageModule[] = [
  {
    id: 'ja-a1-mod-1',
    number: 1,
    title: '01 Hiragana 46 Sounds, Katakana & Writing System Foundations',
    description: 'Master the 3 Japanese writing systems: Hiragana (native grammar & words), Katakana (foreign loan words), and Kanji (Chinese logographs).',
    level: 'A1',
    focusTopics: ['Hiragana 46 Syllables', 'Dakuten (゛) & Handakuten (゜)', 'Katakana Foreign Words', 'Romaji & Stroke Order'],
    lessons: [
      {
        id: 'ja-a1-l1',
        moduleId: 'ja-a1-mod-1',
        order: 1,
        title: 'The Japanese Writing System: Hiragana & Katakana',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Read and distinguish Hiragana and Katakana characters, understand syllable Mora timing, and pronounce Japanese pure vowels (a, i, u, e, o).',
        conceptExplanation: 'Japanese uses three distinct writing scripts simultaneously:\n1. Hiragana (ひらがな): 46 phonetic characters used for native Japanese words and grammatical endings.\n2. Katakana (カタカナ): 46 phonetic characters representing foreign loanwords (e.g., コーヒー koohii = coffee, コンピューター konpyuutaa = computer).\n3. Kanji (漢字): Ideographic characters borrowed from China conveying meaning (e.g., 日本 Nihon = Japan).\nUnlike English, Japanese has NO word spaces in traditional writing. Particles act as grammatical guideposts!',
        whyItMatters: 'Relying on Romaji (Latin letters) prevents true literacy. Every street sign, train station, restaurant menu, and anime title in Japan utilizes Hiragana, Katakana, and Kanji. Mastering kana in week one unlocks the entire language.',
        grammarFocus: 'Phonetic Syllabary & The Five Vowels (あ、い、う、え、お)',
        grammarExplanation: 'All Japanese syllables end in a vowel, with the sole exception of "ん" (n). The 5 vowels are: A (ah as in father), I (ee as in see), U (oo as in food, but with unrounded lips), E (eh as in bed), O (oh as in go).',
        grammarSections: [
          {
            title: 'Core Hiragana Vowel Column (A-I-U-E-O)',
            explanation: 'The foundation of all 46 syllables.',
            tables: [
              {
                headers: ['Hiragana', 'Katakana', 'Romaji', 'Pronunciation Tip'],
                rows: [
                  ['あ', 'ア', 'a', 'Open "ah" as in father'],
                  ['い', 'イ', 'i', 'Crisp "ee" as in see'],
                  ['う', 'ウ', 'u', 'Short "oo" with flat, unrounded lips'],
                  ['え', 'エ', 'e', '"eh" as in pet'],
                  ['お', 'オ', 'o', 'Pure "oh" without gliding to "w"'],
                  ['か、き、く、け、こ', 'カ、キ、ク、ケ、コ', 'ka, ki, ku, ke, ko', 'K-row syllables'],
                  ['さ、し、す、せ、そ', 'サ、シ、ス、セ、ソ', 'sa, shi, su, se, so', 'Notice: "shi", not "si"!']
                ]
              }
            ],
            examples: [
              { target: 'こんにちは！', romanization: 'Konnichiwa!', english: 'Hello / Good afternoon!', note: 'Notice that topic particle "wa" at the end of greeting is written with hiragana は (ha)!' },
              { target: 'ありがとう ございます。', romanization: 'Arigatou gozaimasu.', english: 'Thank you very much (polite).', note: 'Long vowel "ou" pronounced as elongated "o".' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'こんにちは (Konnichiwa)',
            phoneticIpa: '[koɲɲitɕiwa]',
            mouthPositionTip: 'Even pitch accent. The final syllable is spelled は (ha) but pronounced "wa" when acting as a topic/greeting particle!',
            exampleWord: 'こんにちは',
            translation: 'Hello / Good day'
          }
        ],
        dialogue: [
          { speaker: 'Tanaka', text: 'はじめまして。田中です。よろしくお願いします。', romanization: 'Hajimemashite. Tanaka desu. Yoroshiku onegaishimasu.', translation: 'Nice to meet you. I am Tanaka. Pleased to make your acquaintance.' },
          { speaker: 'Ken', text: 'はじめまして。ケンです。アメリカから来ました。', romanization: 'Hajimemashite. Ken desu. Amerika kara kimashita.', translation: 'Nice to meet you. I am Ken. I came from America.' }
        ],
        culturalNote: {
          title: 'The Bow (Ojigi) & Business Card Etiquette (Meishi Koukan)',
          content: 'In Japan, greeting someone is accompanied by a respectful bow (ojigi). When exchanging business cards (meishi), always present and receive the card with BOTH hands, read it carefully with respect, and never write on it or cram it immediately into your pocket!'
        },
        vocabulary: [
          {
            id: 'ja-v-1',
            word: 'こんにちは',
            translation: 'hello / good afternoon',
            phonetic: 'kohn-nee-chee-wah',
            partOfSpeech: 'Greeting',
            exampleTarget: 'みなさん、こんにちは！',
            exampleTranslation: 'Hello everyone!',
            audioLanguageCode: 'ja-JP',
            characterScript: '今日は'
          },
          {
            id: 'ja-v-2',
            word: 'はじめまして',
            translation: 'nice to meet you (first time)',
            phonetic: 'hah-jee-meh-mahsh-teh',
            partOfSpeech: 'Phrase',
            exampleTarget: 'はじめまして、さくらです。',
            exampleTranslation: 'Nice to meet you, I am Sakura.',
            audioLanguageCode: 'ja-JP',
            characterScript: '初めまして'
          },
          {
            id: 'ja-v-3',
            word: 'ありがとう',
            translation: 'thank you',
            phonetic: 'ah-ree-gah-TOH',
            partOfSpeech: 'Phrase',
            exampleTarget: 'どうもありがとうございます。',
            exampleTranslation: 'Thank you very much (polite).',
            audioLanguageCode: 'ja-JP',
            characterScript: '有難う'
          },
          {
            id: 'ja-v-4',
            word: 'にほんご',
            translation: 'the Japanese language',
            phonetic: 'nee-hohn-goh',
            partOfSpeech: 'Noun',
            exampleTarget: '日本語をべんきょうしています。',
            exampleTranslation: 'I am studying Japanese.',
            audioLanguageCode: 'ja-JP',
            characterScript: '日本語'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-ja-1',
            promptEnglish: 'Nice to meet you, I am Ken.',
            targetSentence: 'はじめまして、ケンです。',
            jumbledWords: ['ケンです。', 'はじめまして、'],
            explanation: '"Hajimemashite" begins introductions, followed by [Name] + "desu" (to be).'
          }
        ],
        matchingPairs: [
          { target: 'こんにちは', english: 'Hello / Good afternoon' },
          { target: 'はじめまして', english: 'Nice to meet you' },
          { target: 'ありがとうございます', english: 'Thank you very much' },
          { target: 'さようなら', english: 'Goodbye' },
          { target: '日本語', english: 'Japanese language' }
        ],
        commonMistakes: [
          {
            mistake: 'Writing the topic particle "wa" as わ.',
            correction: 'Always write the topic particle "wa" using the Hiragana character は (ha)!',
            explanation: 'Historical kana orthography mandates writing topic "wa" as は (ha) and object "o" as を (wo).'
          }
        ],
        writingChallenge: [
          {
            title: 'Self-Introduction (Jikoshoukai) in Japanese',
            prompt: 'Write three lines in Japanese introducing yourself: Nice to meet you, your name + desu, and asking for good relations (yoroshiku onegaishimasu).',
            starterHint: 'Use "はじめまして。", "私は[Name]です。", "よろしくお願いします。"',
            sampleAnswer: 'はじめまして。私はアレックスです。エンジニアです。どうぞよろしくお願いします。',
            breakdown: 'Integrates topic particle は (wa), copula です (desu), and the quintessential Japanese formula yoroshiku onegaishimasu.'
          }
        ],
        practiceExercises: [
          {
            question: 'Which Japanese script is specifically used for writing foreign loanwords like "coffee" or "computer"?',
            options: ['Hiragana', 'Katakana', 'Kanji', 'Romaji only'],
            correctIndex: 1,
            explanation: 'Katakana is used for foreign words, foreign names, and onomatopoeia.'
          },
          {
            question: 'How is the topic particle "wa" written in Hiragana?',
            options: ['わ', 'は', 'を', 'か'],
            correctIndex: 1,
            explanation: 'The topic particle is pronounced "wa", but orthographically written with the character は (ha).'
          },
          {
            question: 'What is the polite copula meaning "is / am / are" in Japanese?',
            options: ['ます (masu)', 'です (desu)', 'だ (da)', 'ある (aru)'],
            correctIndex: 1,
            explanation: 'です (desu) is the polite copula equivalent to "to be".'
          },
          {
            question: 'What does "はじめまして" (Hajimemashite) mean?',
            options: ['Goodbye', 'Nice to meet you (for the first time)', 'Thank you', 'Excuse me'],
            correctIndex: 1,
            explanation: '"Hajimemashite" derives from hajimeru (to begin) and means "Nice to meet you for the first time".'
          },
          {
            question: 'How do you say "Thank you very much" politely in Japanese?',
            options: ['すみません', 'ありがとうございます', 'こんにちは', 'じゃあね'],
            correctIndex: 1,
            explanation: 'ありがとうございます (Arigatou gozaimasu) is the standard polite expression of gratitude.'
          }
        ]
      }
    ]
  },
  {
    id: 'ja-a1-mod-2',
    number: 2,
    title: '02 Japanese Core Particles (は, が, を, に, で) & SOV Syntax',
    description: 'Master Japanese sentence structure: Subject-Object-Verb (SOV) order and the grammatical particles (wa, ga, o, ni, de).',
    level: 'A1',
    focusTopics: ['SOV Word Order (Verb always last!)', 'Topic Particle は (wa) vs Subject が (ga)', 'Object Particle を (o)', 'Location/Means で (de) & Target/Time に (ni)'],
    lessons: [
      {
        id: 'ja-a1-l2',
        moduleId: 'ja-a1-mod-2',
        order: 1,
        title: 'Core Particles (は, を, に, で) & The SOV Golden Rule',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Structure Japanese sentences in SOV order with the verb at the very end, and apply the core particles accurately.',
        conceptExplanation: 'English follows Subject-Verb-Object (SVO: "I drink coffee"). Japanese follows Subject-Object-VERB (SOV: "I coffee drink"). In Japanese, THE VERB ALWAYS COMES AT THE VERY END of the clause!\n\nParticles follow words like postal tags:\n- は (wa): Marks the TOPIC ("as for X...")\n- を (o): Marks the DIRECT OBJECT\n- に (ni): Marks the SPECIFIC TIME or DESTINATION (at 7:00 / to Tokyo)\n- で (de): Marks the LOCATION OF ACTION or MEANS (at the café / by train).',
        whyItMatters: 'Japanese particles are the backbone of comprehension. Without particles, a string of Japanese words is unintelligible. Mastering "de" (where an action happens) vs "ni" (where something exists or where you go) is the cornerstone of A1 Japanese.',
        grammarFocus: 'SOV Sentence Pattern: [Topic] は [Time] に [Place] で [Object] を [Verb] ます',
        grammarExplanation: 'Example:\nわたし は 7じ に レストラン で すし を たべます。\n(Watashi wa shichi-ji ni resutoran de sushi o tabemasu.)\n"As for me, at 7 o\'clock, at the restaurant, sushi I eat."',
        grammarSections: [
          {
            title: 'Japanese Particle Summary Table',
            explanation: 'The essential function of each particle.',
            tables: [
              {
                headers: ['Particle', 'Pronunciation', 'Function', 'Example Phrase'],
                rows: [
                  ['は', 'wa', 'Topic Marker ("As for...")', 'わたしは (watashi wa)'],
                  ['を', 'o (wo)', 'Direct Object Marker', 'みずを のみます (mizu o nomimasu)'],
                  ['に', 'ni', 'Specific Time / Destination', 'とうきょうに いきます (Tokyo ni ikimasu)'],
                  ['で', 'de', 'Place of Action / Means', 'カフェで べんきょうします (cafe de benkyoushimasu)'],
                  ['と', 'to', 'And / With (companion)', 'ともだちと (tomodachi to)']
                ]
              }
            ],
            examples: [
              { target: 'わたしはまいにち日本語をべんきょうします。', romanization: 'Watashi wa mainichi nihongo o benkyoushimasu.', english: 'I study Japanese every day.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: '〜をのみます (o nomimasu)',
            phoneticIpa: '[o nomimasɯ]',
            mouthPositionTip: 'Written を, pronounced purely as "o". Final "u" in -masu is devoiced: sounds like "noh-mee-mahs".',
            exampleWord: 'お茶を飲みます',
            translation: 'I drink green tea'
          }
        ],
        dialogue: [
          { speaker: 'Yuki', text: 'あした、どこで ひるごはんを たべますか。', romanization: 'Ashita, doko de hirugohan o tabemasu ka.', translation: 'Tomorrow, where will you eat lunch?' },
          { speaker: 'Alex', text: 'だいがくの カフェテリアで たべます。ゆきさんは？', romanization: 'Daigaku no kafeteria de tabemasu. Yuki-san wa?', translation: 'I will eat at the university cafeteria. How about you, Yuki?' },
          { speaker: 'Yuki', text: 'わたしも カフェテリアで たべます。いっしょに たべましょう！', romanization: 'Watashi mo kafeteria de tabemasu. Issho ni tabemashou!', translation: 'I will also eat at the cafeteria. Let\'s eat together!' }
        ],
        culturalNote: {
          title: 'Dropping "I" (Watashi wa) in Japanese',
          content: 'In natural Japanese, once the topic is established, native speakers rarely say "watashi wa" (I) repeatedly. Repeating "watashi wa" in every sentence sounds self-centered and unnatural. Japanese is a high-context language where the subject is naturally inferred!'
        },
        vocabulary: [
          {
            id: 'ja-v-5',
            word: 'たべます',
            translation: 'to eat (polite)',
            phonetic: 'tah-beh-MAHS',
            partOfSpeech: 'Verb',
            exampleTarget: 'ラーメンをたべます。',
            exampleTranslation: 'I eat ramen.',
            audioLanguageCode: 'ja-JP',
            characterScript: '食べます'
          },
          {
            id: 'ja-v-6',
            word: 'のみます',
            translation: 'to drink (polite)',
            phonetic: 'noh-mee-MAHS',
            partOfSpeech: 'Verb',
            exampleTarget: 'おちゃをのみます。',
            exampleTranslation: 'I drink tea.',
            audioLanguageCode: 'ja-JP',
            characterScript: '飲みます'
          },
          {
            id: 'ja-v-7',
            word: 'いきます',
            translation: 'to go (polite)',
            phonetic: 'ee-kee-MAHS',
            partOfSpeech: 'Verb',
            exampleTarget: 'とうきょうにいきます。',
            exampleTranslation: 'I am going to Tokyo.',
            audioLanguageCode: 'ja-JP',
            characterScript: '行きます'
          },
          {
            id: 'ja-v-8',
            word: 'みず',
            translation: 'water',
            phonetic: 'MEE-zoo',
            partOfSpeech: 'Noun',
            exampleTarget: 'お水をください。',
            exampleTranslation: 'Water please.',
            audioLanguageCode: 'ja-JP',
            characterScript: '水'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-ja-2',
            promptEnglish: 'I drink coffee at the café.',
            targetSentence: 'カフェでコーヒーを飲みます。',
            jumbledWords: ['飲みます。', 'コーヒーを', 'カフェで'],
            explanation: 'Location of action (カフェで) + Object (コーヒーを) + Verb at end (飲みます).'
          }
        ],
        matchingPairs: [
          { target: 'を (o)', english: 'direct object marker' },
          { target: 'で (de)', english: 'location of action / means' },
          { target: 'に (ni)', english: 'destination / specific time' },
          { target: 'は (wa)', english: 'topic marker' },
          { target: 'も (mo)', english: 'also / too' }
        ],
        commonMistakes: [
          {
            mistake: 'Placing the verb before the object like in English: "Nomimasu koohii".',
            correction: 'Always put the verb at the very end: "Koohii o nomimasu".',
            explanation: 'Japanese syntax strictly demands SOV structure: Object precedes Verb.'
          }
        ],
        writingChallenge: [
          {
            title: 'Describing Your Weekend Plans in Japanese',
            prompt: 'Write three sentences stating where you are going on Saturday (using に), what you will do there (using で and を), and who you will go with (using と).',
            starterHint: 'Use "どようびに...", "ともだちと...", "〜で〜をします。"',
            sampleAnswer: '土曜日に渋谷に行きます。友達とレストランでラーメンを食べます。とても楽しみです。',
            breakdown: 'Integrates destination particle に, companion と, place of action で, and object を with verbs at the end.'
          }
        ],
        practiceExercises: [
          {
            question: 'Where does the conjugated verb ALWAYS appear in a standard Japanese sentence?',
            options: ['At the very beginning', 'In the middle, right after the subject', 'At the very end of the sentence', 'Before the object'],
            correctIndex: 2,
            explanation: 'Japanese is strictly an SOV language: the verb always anchors the absolute end of the clause.'
          },
          {
            question: 'Which particle marks the direct object of an action (e.g. drinking water)?',
            options: ['は (wa)', 'が (ga)', 'を (o)', 'で (de)'],
            correctIndex: 2,
            explanation: 'を (pronounced "o") marks the direct object receiving the verb\'s action.'
          },
          {
            question: 'Which particle indicates the physical location where an active action takes place (e.g. studying AT the library)?',
            options: ['に (ni)', 'で (de)', 'へ (e)', 'を (o)'],
            correctIndex: 1,
            explanation: 'で (de) marks the location of dynamic action (図書館で勉強します).'
          },
          {
            question: 'Which particle marks specific clock times (e.g. at 8:00)?',
            options: ['で (de)', 'に (ni)', 'を (o)', 'は (wa)'],
            correctIndex: 1,
            explanation: 'に (ni) marks specific points in time (8時に = at 8 o\'clock).'
          },
          {
            question: 'What does the question particle "か" (ka) at the end of a sentence do?',
            options: ['It negates the verb', 'It transforms the sentence into a question (acting like a question mark)', 'It makes it informal', 'It indicates past tense'],
            correctIndex: 1,
            explanation: 'The sentence-ending particle "か" turns any statement into a polite question (e.g. たべますか = Do you eat?).'
          }
        ]
      }
    ]
  }
];

export const japaneseA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'Japanese A1: Beginner Foundations (JLPT N5)',
  cefrDescription: 'Can read Hiragana and Katakana, understand basic daily expressions, and communicate in polite desu/masu Japanese.',
  canDoStatements: JAPANESE_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 800,
  grammarTopicsCount: 18,
  modules: japaneseA1Modules,
  assessmentExam: {
    id: 'exam-ja-a1',
    title: 'Official Build Yourself CEFR A1 / JLPT N5 Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'ja-q1',
        category: 'Grammar',
        question: 'Which particle correctly marks the direct object in: "おちゃ _____ のみます"?',
        options: ['は', 'が', 'を', 'に'],
        correctIndex: 2,
        explanation: 'を (o) marks the object of drinking: "おちゃをのみます" (I drink green tea).'
      },
      {
        id: 'ja-q2',
        category: 'Grammar',
        question: 'In Japanese word order, where does the verb "たべます" (to eat) go?',
        options: ['First word in sentence', 'After subject, before object', 'At the very end of the sentence', 'It depends on weather'],
        correctIndex: 2,
        explanation: 'Japanese is an SOV language; verbs always sit at the end.'
      },
      {
        id: 'ja-q3',
        category: 'Vocabulary',
        question: 'What does "ありがとう ございます" mean?',
        options: ['Good morning', 'Thank you very much (polite)', 'Excuse me', 'Goodbye'],
        correctIndex: 1,
        explanation: '"Arigatou gozaimasu" means thank you very much.'
      },
      {
        id: 'ja-q4',
        category: 'Reading',
        contextPassage: 'たなかさんは まいにち しちじに おきます。あさごはんを たべて、でんしゃで かいしゃに いきます。かいしゃで パソコンを つかいます。',
        question: 'たなかさんは どうやって かいしゃに いきますか。(How does Tanaka go to the company?)',
        options: ['バスで (by bus)', 'でんしゃで (by train)', 'くるまで (by car)', 'あるいて (on foot)'],
        correctIndex: 1,
        explanation: 'The text states: "でんしゃで かいしゃに いきます" (goes to the company by train).'
      }
    ]
  }
};

export const createJapaneseLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return japaneseA1LevelData;

  const jlptMap: Record<CEFRLevel, string> = {
    A1: 'Japanese A1 (JLPT N5): Foundations',
    A2: 'Japanese A2 (JLPT N4): Elementary Fluency',
    B1: 'Japanese B1 (JLPT N3): Intermediate Bridge',
    B2: 'Japanese B2 (JLPT N2): Upper-Intermediate Business',
    C1: 'Japanese C1 (JLPT N1): Advanced Academic & Corporate',
    C2: 'Japanese C2 (Native Master): Nuanced Mastery'
  };

  const themes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 Te-Form (て形) Conjugation & Requests', focus: 'Forming requests (〜てください) & sequential actions', grammar: 'te-form rules for Group 1, 2, and 3 verbs' },
      { title: '02 Progressive Tense (〜ています)', focus: 'Ongoing actions and current states', grammar: '〜ています for actions vs continuous states (kekkon shiteimasu)' },
      { title: '03 Plain Informal Form (タ形 & 辞書形)', focus: 'Casual speech with peers', grammar: 'Dictionary form, past plain ta-form, negative nai-form' }
    ],
    B1: [
      { title: '01 Potential Verbs & Ability (〜ができる / られる)', focus: 'Expressing what you can and cannot do', grammar: 'Potential verb conjugation' },
      { title: '02 Conditionals: 〜たら vs 〜ば vs 〜と', focus: 'Hypothetical situations and cause-and-effect', grammar: 'Nuanced conditional rules' },
      { title: '03 Giving and Receiving: あげる, もらう, くれる', focus: 'Favors and social direction of actions', grammar: '〜てあげる, 〜てもらう, 〜てくれる' }
    ],
    B2: [
      { title: '01 Business Keigo: Sonkeigo (Respectful Language)', focus: 'Honoring clients and superiors in Japan', grammar: 'お〜になる, 特殊尊敬語 (いらっしゃる, おっしゃる)' },
      { title: '02 Business Keigo: Kenjougo (Humble Language)', focus: 'Lowering oneself when representing company', grammar: 'お〜する, 参る, 申す, いただく' },
      { title: '03 Passive & Causative-Passive (〜される / 〜させられる)', focus: 'Suffering passive and being forced to do actions', grammar: 'Causative-passive forms in corporate reporting' }
    ],
    C1: [
      { title: '01 Advanced Written Grammar & Classical Relics', focus: 'Reading newspaper editorials (Asahi, Nikkei)', grammar: '〜ざるを得ない, 〜にほかならない, 〜を皮切りに' }
    ],
    C2: [
      { title: '01 Native Rhetoric & Cultural Nuances', focus: 'Literary criticism, high politics, and classical allusions', grammar: 'Archaic and poetic Japanese registers' }
    ]
  };

  const lvlThemes = themes[level] || themes.B1;

  const modules: LanguageModule[] = lvlThemes.map((thm, idx) => ({
    id: `ja-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: thm.title,
    description: `Structured ${level} Japanese module covering ${thm.focus} and ${thm.grammar}.`,
    level,
    focusTopics: [thm.focus, thm.grammar, 'Native Listening', 'JLPT Exam Preparation'],
    lessons: [
      {
        id: `ja-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `ja-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${thm.title} - In-Depth Lesson`,
        level,
        durationMinutes: 30,
        learningObjective: `Master ${thm.focus} according to JLPT benchmarks.`,
        conceptExplanation: `At the ${level} tier of Japanese, study transitions towards ${thm.focus}. You master ${thm.grammar}.`,
        whyItMatters: `JLPT N2 and N1 certification is mandatory for engineering, banking, and professional careers at Japanese multinational corporations (Sony, Toyota, Softbank, Rakuten).`,
        grammarFocus: thm.grammar,
        grammarExplanation: `In-depth structural breakdown of ${thm.grammar}.`,
        dialogue: [
          { speaker: '部長', text: '明日のプレゼンテーションの準備は完了しましたか。', translation: 'Has the preparation for tomorrow\'s presentation been completed?' },
          { speaker: '山田', text: 'はい、資料の確認を終え、すでに準備を整えております。', translation: 'Yes, I have finished checking the documents and have already put preparations in order.' }
        ],
        vocabulary: [
          {
            id: `ja-${level.toLowerCase()}-v1`,
            word: 'じゅんび',
            translation: 'preparation',
            phonetic: 'JOON-bee',
            partOfSpeech: 'Noun / Suru-verb',
            exampleTarget: '会議の準備をします。',
            exampleTranslation: 'I make preparations for the meeting.',
            audioLanguageCode: 'ja-JP',
            characterScript: '準備'
          }
        ],
        practiceExercises: [
          {
            question: `Which grammar point is taught in ${thm.title}?`,
            options: [thm.grammar, 'Hiragana only', 'English syntax', 'None'],
            correctIndex: 0,
            explanation: `The pedagogical milestone is mastering ${thm.grammar}.`
          }
        ]
      }
    ]
  }));

  return {
    level,
    title: jlptMap[level],
    cefrDescription: JAPANESE_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: JAPANESE_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1500 : level === 'B1' ? 3500 : level === 'B2' ? 6000 : level === 'C1' ? 10000 : 15000,
    grammarTopicsCount: 16,
    modules,
    assessmentExam: {
      id: `exam-ja-${level.toLowerCase()}`,
      title: `Official CEFR ${level} / JLPT Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `ja-${level}-q1`,
          category: 'Grammar',
          question: `Which structure is central to ${level} Japanese competence?`,
          options: [lvlThemes[0]?.grammar || 'Advanced syntax', 'Word guessing', 'Only Romaji', 'Skipping particles'],
          correctIndex: 0,
          explanation: `Mastery of ${lvlThemes[0]?.grammar || 'advanced syntax'} is required for certification.`
        }
      ]
    }
  };
};

export const completeJapaneseCourse: LanguageCourse = {
  id: 'lang-japanese',
  name: 'Japanese',
  code: 'ja',
  flag: '🇯🇵',
  speechCode: 'ja-JP',
  nativeName: '日本語',
  description: 'Master Japanese from JLPT N5 (A1) foundations to JLPT N1 (C1/C2) executive fluency. Covers Hiragana, Katakana, Kanji, particles, and business Keigo.',
  writingSystem: 'Hiragana (46) + Katakana (46) + Joyo Kanji (2,136)',
  grammarHighlights: [
    'SOV (Subject-Object-Verb) Sentence Order',
    'Particle System (は wa, が ga, を o, に ni, で de, と to, も mo)',
    'Te-Form (て形) Conjugations & Aspect',
    'Polite Desu/Masu vs Plain Casual Forms',
    'Honorific (Sonkeigo) & Humble (Kenjougo) Speech Hierarchies',
    'High-Context Topic Dropping'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: japaneseA1LevelData,
    A2: createJapaneseLevel('A2'),
    B1: createJapaneseLevel('B1'),
    B2: createJapaneseLevel('B2'),
    C1: createJapaneseLevel('C1'),
    C2: createJapaneseLevel('C2')
  },
  lessons: japaneseA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'ja-sc-1',
      title: 'Tokyo Ramen Shop Ticket Machine & Order',
      situation: 'Ordering ramen and gyoza at an authentic noodle shop in Shinjuku, Tokyo.',
      partnerRole: 'Ramen Master (Tenchou - loud and energetic)',
      samplePrompts: [
        'いらっしゃいませ！食券をお買い求めください。',
        'すみません、とんこつラーメンの大盛りとギョーザをお願いします。',
        '麺のかたさはどうなさいますか？'
      ]
    }
  ]
};
