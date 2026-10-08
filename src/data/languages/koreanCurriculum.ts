import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

export const KOREAN_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can read and write all 24 basic Hangul letters (14 consonants and 10 vowels), diphthongs, and understand Batchim (final consonants).',
    'Can introduce oneself, greet appropriately, and exchange polite remarks using the -아요/어요 and -ㅂ니다/습니다 endings.',
    'Can master core particles: Topic (은/는), Subject (이/가), Object (을/를), and Location (에/에서).',
    'Can count in both Sino-Korean (일, 이, 삼) and Native Korean (하나, 둘, 셋) number systems (TOPIK 1 Level 1).'
  ],
  A2: [
    'Can handle routine daily tasks like ordering food, asking for directions in Seoul, and shopping using counters (개, 명, 병).',
    'Can use the honorific marker -(으)시- to show respect to elders and superiors.',
    'Can use past tense (-았/었어요) and future intention (-ㄹ/을 거예요) (TOPIK 1 Level 2).'
  ],
  B1: [
    'Can understand standard Korean in daily life, public transport, and media without subtitles.',
    'Can express contrast (-(으)나, -지만), reason (-아서/어서, -(으)니까), and purpose (-(으)려고).',
    'Can communicate comfortably in intermediate TOPIK Level 3.'
  ],
  B2: [
    'Can comprehend Korean news broadcasts, business emails, and K-drama dialogues fluently.',
    'Can utilize formal indirect speech patterns (-다고 하다, -자고 하다) and passive/causative verbs (TOPIK Level 4).'
  ],
  C1: [
    'Can express complex opinions on politics, economics, and technology in Korean corporate environments (TOPIK Level 5).'
  ],
  C2: [
    'Can achieve native-level fluency with deep mastery of Sino-Korean idioms (Sajaseong-eo) and academic discourse (TOPIK Level 6).'
  ]
};

export const koreanA1Modules: LanguageModule[] = [
  {
    id: 'ko-a1-mod-1',
    number: 1,
    title: '01 Hangul Vowels, Consonants & Batchim Syllable Blocks',
    description: 'Master the scientific Korean alphabet created by King Sejong: basic consonants (ㄱ, ㄴ, ㄷ, ㄹ), vowels (ㅏ, ㅓ, ㅗ, ㅜ), and Batchim (final consonants).',
    level: 'A1',
    focusTopics: ['Hangul Vowels & Consonants', 'Syllable Block Formation', 'Batchim Rules', 'G-D-B Voicing Rules'],
    lessons: [
      {
        id: 'ko-a1-l1',
        moduleId: 'ko-a1-mod-1',
        order: 1,
        title: 'The Genius of Hangul: Syllable Blocks & Core Sounds',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Read and write Korean syllable blocks in Hangul, pronounce basic consonants and vowels, and understand Batchim mechanics.',
        conceptExplanation: 'Hangul is acclaimed as the most scientific writing system in human history. Created in 1443 by King Sejong the Great, the shapes of the consonants mirror the anatomy of the mouth and tongue when speaking them! Hangul is written not in a line, but in 2-to-4 letter SYLLABLE BLOCKS (e.g. ㅎ + ㅏ + ㄴ = 한 Han).\nBasic vowels:\n- ㅏ (a as in father)\n- ㅓ (eo: open "uh" sound like in cup)\n- ㅗ (o as in boat)\n- ㅜ (u: "oo" as in moon)\n- ㅡ (eu: flat unrounded "uh")\n- ㅣ (i: "ee" as in see).',
        whyItMatters: 'Korean is virtually 100% phonetic. You can learn to read all Hangul signs and menus in Seoul within a single afternoon! Never use Romanized Korean, as it obscures the sound blocks.',
        grammarFocus: 'Syllable Construction & Batchim (받침)',
        grammarExplanation: 'Every Korean syllable block must begin with a consonant. If a syllable begins with a vowel sound, the silent placeholder consonant "ㅇ" (ieung) is placed first: 아 (a), 어 (eo), 오 (o). A consonant at the bottom of a block is called BATCHIM (e.g. the "ㄴ" in 한).',
        grammarSections: [
          {
            title: 'Basic Consonants and Mouth Mimicry',
            explanation: 'Observe how Hangul letterforms reflect vocal articulators.',
            tables: [
              {
                headers: ['Hangul Letter', 'Name', 'Romanized', 'Pronunciation Tip'],
                rows: [
                  ['ㄱ', 'giyeok', 'g / k', 'Tongue root blocking throat'],
                  ['ㄴ', 'nieun', 'n', 'Tongue tip touching upper gum ridge'],
                  ['ㄷ', 'digeut', 'd / t', 'Tongue tip flat behind teeth'],
                  ['ㄹ', 'rieul', 'r / l', 'Light flap of tongue tip against palate'],
                  ['ㅁ', 'mieum', 'm', 'Square representing closed lips'],
                  ['ㅂ', 'bieup', 'b / p', 'Open lips releasing sound'],
                  ['ㅅ', 'siot', 's', 'Tooth shape friction sound'],
                  ['ㅇ', 'ieung', 'silent / ng', 'Circle: silent at start, "ng" in batchim!']
                ]
              }
            ],
            examples: [
              { target: '안녕하세요!', romanization: 'Annyeonghaseyo!', english: 'Hello! (Polite)', note: 'Notice silent ㅇ in "안" (an) and batchim ㅇ in "녕" (nyeong = ng sound).' },
              { target: '감사합니다.', romanization: 'Gamsahamnida.', english: 'Thank you (formal).', note: 'Notice ㅂ in 합 pronounced as "m" before ㄴ (nasal assimilation)!' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: '안녕하세요 (Annyeonghaseyo)',
            phoneticIpa: '[aɲɲʌŋɦasejo]',
            mouthPositionTip: 'Clear open vowels, gentle "h" sound, final "yo" rounded.',
            exampleWord: '한국어',
            translation: 'Korean language'
          }
        ],
        dialogue: [
          { speaker: 'Minji', text: '안녕하세요! 처음 뵙겠습니다. 김민지입니다.', romanization: 'Annyeonghaseyo! Cheo-eum boepgesseumnida. Kim Minji-imnida.', translation: 'Hello! Pleased to meet you for the first time. I am Minji Kim.' },
          { speaker: 'David', text: '안녕하세요! 저는 데이비드입니다. 반갑습니다.', romanization: 'Annyeonghaseyo! Jeoneun Deibideu-imnida. Bangapseumnida.', translation: 'Hello! I am David. Nice to meet you.' }
        ],
        culturalNote: {
          title: 'The Two Hands Cultural Rule & Age Hierarchies',
          content: 'In Korean culture, respecting elders and hierarchy is paramount. When handing or receiving money, gifts, drinks, or business cards, ALWAYS use both hands or support your right forearm with your left hand. Bowing respectfully while saying "안녕하세요" sets the gold standard for good manners.'
        },
        vocabulary: [
          {
            id: 'ko-v-1',
            word: '안녕하세요',
            translation: 'hello (polite)',
            phonetic: 'ahn-nyungh-hah-seh-yoh',
            partOfSpeech: 'Greeting',
            exampleTarget: '선생님, 안녕하세요!',
            exampleTranslation: 'Teacher, hello!',
            audioLanguageCode: 'ko-KR'
          },
          {
            id: 'ko-v-2',
            word: '감사합니다',
            translation: 'thank you (formal)',
            phonetic: 'gahm-sah-hahm-nee-dah',
            partOfSpeech: 'Phrase',
            exampleTarget: '도와주셔서 감사합니다.',
            exampleTranslation: 'Thank you for helping me.',
            audioLanguageCode: 'ko-KR'
          },
          {
            id: 'ko-v-3',
            word: '한국',
            translation: 'Korea / South Korea',
            phonetic: 'hahn-gook',
            partOfSpeech: 'Noun',
            exampleTarget: '한국에 가고 싶어요.',
            exampleTranslation: 'I want to go to Korea.',
            audioLanguageCode: 'ko-KR'
          },
          {
            id: 'ko-v-4',
            word: '사람',
            translation: 'person',
            phonetic: 'sah-rahm',
            partOfSpeech: 'Noun',
            exampleTarget: '한국 사람이에요.',
            exampleTranslation: 'I am a Korean person.',
            audioLanguageCode: 'ko-KR'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-ko-1',
            promptEnglish: 'Hello, I am David.',
            targetSentence: '안녕하세요, 저는 데이비드입니다.',
            jumbledWords: ['저는', '데이비드입니다.', '안녕하세요,',],
            explanation: 'Greeting + Subject with topic particle (저는) + Name + imnida (am).'
          }
        ],
        matchingPairs: [
          { target: '안녕하세요', english: 'Hello (polite)' },
          { target: '감사합니다', english: 'Thank you (formal)' },
          { target: '한국어', english: 'Korean language' },
          { target: '반갑습니다', english: 'Nice to meet you' },
          { target: '사람', english: 'Person' }
        ],
        commonMistakes: [
          {
            mistake: 'Confusing ㅓ (eo = open "uh") with ㅗ (o = rounded "oh").',
            correction: 'Pronounce ㅓ with relaxed jaw like in "cup"; pronounce ㅗ with rounded lips like in "boat".',
            explanation: 'Confusing these changes words completely, e.g., 커피 (keopi = coffee) vs 코피 (kopi = nosebleed)!'
          }
        ],
        writingChallenge: [
          {
            title: 'Writing Your Self Introduction in Hangul',
            prompt: 'Write three sentences in Korean: Greeting (안녕하세요), your name with "저는 [Name]입니다", and "Nice to meet you" (반갑습니다).',
            starterHint: 'Use "안녕하세요.", "저는...입니다.", "만나서 반갑습니다."',
            sampleAnswer: '안녕하세요! 저는 마이클입니다. 미국 사람입니다. 만나서 반갑습니다!',
            breakdown: 'Features polite greeting, formal copula -입니다, nationality (미국 사람), and standard introductory pleasantry.'
          }
        ],
        practiceExercises: [
          {
            question: 'What is the role of the circular letter "ㅇ" at the beginning of a Hangul syllable block (e.g. in "아")?',
            options: ['It sounds like "ng"', 'It is a silent placeholder for vowels', 'It is a vowel', 'It means stop'],
            correctIndex: 1,
            explanation: 'When at the top or left of a block, "ㅇ" is completely silent. Only in the bottom (batchim) does it make an "ng" sound.'
          },
          {
            question: 'Who created the Korean Hangul alphabet in 1443?',
            options: ['King Sejong the Great', 'Admiral Yi Sun-sin', 'General Park', 'Emperor Gojong'],
            correctIndex: 0,
            explanation: 'King Sejong the Great invented Hangul to promote universal literacy among the Korean populace.'
          },
          {
            question: 'How do you say "Thank you" formally in Korean?',
            options: ['죄송합니다', '감사합니다', '안녕하세요', '잘 가요'],
            correctIndex: 1,
            explanation: '감사합니다 (Gamsahamnida) is the formal polite expression of gratitude.'
          },
          {
            question: 'What is the vowel in the first syllable of "커피" (coffee)?',
            options: ['ㅏ (a)', 'ㅓ (eo)', 'ㅗ (o)', 'ㅜ (u)'],
            correctIndex: 1,
            explanation: 'The vowel is ㅓ (eo), giving "keo-pi".'
          },
          {
            question: 'What is the grammatical term for a final consonant located at the base of a Hangul block?',
            options: ['Batchim (받침)', 'Hanja', 'Jamo', 'Aegyo'],
            correctIndex: 0,
            explanation: 'Batchim (받침, literally "support/prop") refers to the bottom consonant(s) of a syllable block.'
          }
        ]
      }
    ]
  },
  {
    id: 'ko-a1-mod-2',
    number: 2,
    title: '02 Topic (은/는) vs Subject (이/가) & Polite -아요/어요',
    description: 'Master the fundamental particles of Korean: Topic marker (은/는), Subject identifier (이/가), and conjugate verbs in the everyday polite -아요/어요 form.',
    level: 'A1',
    focusTopics: ['Topic Marker 은/는', 'Subject Marker 이/가', 'Polite Informal -아요/어요', 'Korean SOV Sentence Structure'],
    lessons: [
      {
        id: 'ko-a1-l2',
        moduleId: 'ko-a1-mod-2',
        order: 1,
        title: 'Particles 은/는 vs 이/가 and The -아요/어요 Ending',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Differentiate between topic (은/는) and subject (이/가) particles, and conjugate verbs into the polite -아요/어요 form.',
        conceptExplanation: 'Korean is a particle-heavy SOV language. Two particle pairs often confuse beginners:\n1. 은/는 (Topic Marker): "As for X...". Used for known topics, general truths, or contrasting ("I like tea, but HE likes coffee"). Use "은" after a consonant (책은), and "는" after a vowel (저는).\n2. 이/가 (Subject Marker): Identifies WHO or WHAT specifically performs the action or has a quality. Use "이" after a consonant (밥이), and "가" after a vowel (사과가).\n\nThe -아요/어요 ending is the standard everyday polite speech level used with colleagues, acquaintances, and strangers.',
        whyItMatters: 'Mastering 은/는 vs 이/가 is the ultimate milestone of beginner Korean. Knowing whether to conjugate into -아요 (if verb root ends in ㅏ or ㅗ) or -어요 (all other vowels) gives you immediate conversational fluency.',
        grammarFocus: 'The -아요 / -어요 Conjugation Formula',
        grammarExplanation: 'Formula:\n- If last vowel of verb root is ㅏ or ㅗ → add -아요 (e.g. 보다 → 봐요, 가다 → 가요).\n- If last vowel is anything else (ㅓ, ㅜ, ㅡ, ㅣ) → add -어요 (e.g. 먹다 → 먹어요, 마시다 → 마셔요).\n- All 하다 verbs turn into 해요 (e.g. 공부하다 → 공부해요).',
        grammarSections: [
          {
            title: 'Topic vs Subject Particle Summary',
            explanation: 'How batchim dictates the particle choice.',
            tables: [
              {
                headers: ['Particle Pair', 'After Consonant (Batchim)', 'After Vowel (No Batchim)', 'Main Function'],
                rows: [
                  ['Topic: 은 / 는', '선생님은 (the teacher)', '저는 (as for me)', 'Introduces topic or contrast'],
                  ['Subject: 이 / 가', '이름이 (the name)', '날씨가 (the weather)', 'Identifies specific subject'],
                  ['Object: 을 / 를', '책을 (the book)', '커피를 (the coffee)', 'Marks direct object'],
                  ['Location: 에 / 에서', '학교에 (to/at school)', '카페에서 (at cafe)', 'Destination / action place']
                ]
              }
            ],
            examples: [
              { target: '저는 한국어를 공부해요.', romanization: 'Jeoneun hangugeo-reul gongbuhaeyo.', english: 'I study Korean.', note: 'Topic: 저는, Object: 한국어를, Verb: 공부해요 (하다 → 해요).' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: '공부해요 (gongbuhaeyo)',
            phoneticIpa: '[koŋbuɦɛjo]',
            mouthPositionTip: 'Smooth flow from "bu" to "hae" to "yo".',
            exampleWord: '공부하다',
            translation: 'to study'
          }
        ],
        dialogue: [
          { speaker: 'Sora', text: '지훈 씨는 지금 뭐 해요?', romanization: 'Jihun ssi-neun jigeum mwo haeyo?', translation: 'Jihun, what are you doing right now?' },
          { speaker: 'Jihun', text: '저는 도서관에서 책을 읽어요. 소라 씨는요?', romanization: 'Jeoneun doseogwan-eseo chaek-eul ilgeoyo. Sora ssi-neun-yo?', translation: 'I am reading a book at the library. How about you, Sora?' },
          { speaker: 'Sora', text: '저는 카페에서 친구를 만나요.', romanization: 'Jeoneun kape-eseo chin-gu-reul mannayo.', translation: 'I am meeting a friend at the café.' }
        ],
        culturalNote: {
          title: 'Addressing People with "씨" (Ssi) and Titles',
          content: 'In Korea, you rarely call an adult simply by their first name unless you are childhood friends. Always append "씨" (e.g. Minji-ssi) for polite respect, or use their social/professional title like "선생님" (teacher/mentor) or "팀장님" (team manager).'
        },
        vocabulary: [
          {
            id: 'ko-v-5',
            word: '먹다 / 먹어요',
            translation: 'to eat',
            phonetic: 'muhk-tah / muh-guh-yoh',
            partOfSpeech: 'Verb',
            exampleTarget: '비빔밥을 먹어요.',
            exampleTranslation: 'I eat bibimbap.',
            audioLanguageCode: 'ko-KR'
          },
          {
            id: 'ko-v-6',
            word: '마시다 / 마셔요',
            translation: 'to drink',
            phonetic: 'mah-shee-dah / mah-shyuh-yoh',
            partOfSpeech: 'Verb',
            exampleTarget: '물을 마셔요.',
            exampleTranslation: 'I drink water.',
            audioLanguageCode: 'ko-KR'
          },
          {
            id: 'ko-v-7',
            word: '공부하다 / 공부해요',
            translation: 'to study',
            phonetic: 'gohng-boo-hah-dah / gohng-boo-heh-yoh',
            partOfSpeech: 'Verb',
            exampleTarget: '매일 한국어를 공부해요.',
            exampleTranslation: 'I study Korean every day.',
            audioLanguageCode: 'ko-KR'
          },
          {
            id: 'ko-v-8',
            word: '친구',
            translation: 'friend',
            phonetic: 'cheen-goo',
            partOfSpeech: 'Noun',
            exampleTarget: '친구를 만나요.',
            exampleTranslation: 'I meet a friend.',
            audioLanguageCode: 'ko-KR'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-ko-2',
            promptEnglish: 'I drink coffee at the café.',
            targetSentence: '저는 카페에서 커피를 마셔요.',
            jumbledWords: ['마셔요.', '커피를', '카페에서', '저는'],
            explanation: 'Topic (저는) + Place of action (카페에서) + Object (커피를) + Verb (마셔요).'
          }
        ],
        matchingPairs: [
          { target: '은 / 는', english: 'Topic marker ("as for")' },
          { target: '이 / 가', english: 'Subject identifier' },
          { target: '을 / 를', english: 'Direct object marker' },
          { target: '에서', english: 'At / in (place of dynamic action)' },
          { target: '공부해요', english: 'I study (polite)' }
        ],
        commonMistakes: [
          {
            mistake: 'Using "은" after a vowel or "는" after a consonant: "저은" or "선생님는".',
            correction: 'Check batchim! Vowel ends take "는" (저는), consonant ends take "은" (선생님은).',
            explanation: 'Korean particle variants exist to facilitate smooth oral pronunciation.'
          }
        ],
        writingChallenge: [
          {
            title: 'Your Daily Routine in Korean',
            prompt: 'Write three sentences stating what you study, where you study (using 에서), and what beverage you drink while studying (using 을/를 and 마셔요).',
            starterHint: 'Use "저는...", "도서관에서...", "커피를 마셔요."',
            sampleAnswer: '저는 매일 한국어를 공부해요. 대학교 도서관에서 책을 읽어요. 그리고 따뜻한 차를 마셔요.',
            breakdown: 'Integrates topic particle 저는, object particle 한국어를 and 차를, place of action 도서관에서, and polite verbs.'
          }
        ],
        practiceExercises: [
          {
            question: 'Which topic particle attaches to "저" (I, polite, ends in a vowel)?',
            options: ['은', '는', '이', '가'],
            correctIndex: 1,
            explanation: 'Words ending in a vowel take the topic particle "는" (저는).'
          },
          {
            question: 'What is the polite -아요/어요 form of "하다" (to do)?',
            options: ['하아요', '하여요', '해요', '합다'],
            correctIndex: 2,
            explanation: 'All verbs ending in 하다 contract regularly to 해요 (e.g. 공부하다 → 공부해요).'
          },
          {
            question: 'Which particle marks the direct object of a verb in Korean?',
            options: ['은 / 는', '이 / 가', '을 / 를', '에 / 에서'],
            correctIndex: 2,
            explanation: '을 (after consonant) and 를 (after vowel) mark the direct object.'
          },
          {
            question: 'What is the difference between "에" and "에서" for locations?',
            options: ['No difference', '"에" indicates static destination/existence; "에서" indicates where a dynamic action occurs', '"에서" is only for countries', '"에" is informal'],
            correctIndex: 1,
            explanation: '"에" is used with verbs of existence (있다) or direction (가다). "에서" is where an active dynamic action takes place (공부하다, 먹다).'
          },
          {
            question: 'What is the -아요/어요 form of "먹다" (to eat, root vowel is ㅓ)?',
            options: ['먹아요', '먹어요', '먹해요', '먹와요'],
            correctIndex: 1,
            explanation: 'Because the root vowel is ㅓ (not ㅏ or ㅗ), it takes -어요, giving "먹어요".'
          }
        ]
      }
    ]
  }
];

export const koreanA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'Korean A1: Beginner Foundations (TOPIK 1)',
  cefrDescription: 'Can read Hangul effortlessly, comprehend basic everyday greetings, and construct elementary Korean SOV sentences.',
  canDoStatements: KOREAN_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 750,
  grammarTopicsCount: 16,
  modules: koreanA1Modules,
  assessmentExam: {
    id: 'exam-ko-a1',
    title: 'Official Build Yourself CEFR A1 / TOPIK 1 Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'ko-q1',
        category: 'Grammar',
        question: 'Which particle correctly marks the object in: "커피 _____ 마셔요"?',
        options: ['은', '를', '이', '에'],
        correctIndex: 1,
        explanation: '커피 ends in a vowel, so it takes the direct object particle 를: "커피를 마셔요".'
      },
      {
        id: 'ko-q2',
        category: 'Vocabulary',
        question: 'What does "감사합니다" mean?',
        options: ['Hello', 'Thank you (formal)', 'I am sorry', 'Goodbye'],
        correctIndex: 1,
        explanation: '"감사합니다" means thank you.'
      },
      {
        id: 'ko-q3',
        category: 'Reading',
        contextPassage: '민수 씨는 한국 사람입니다. 지금 서울 대학교에서 컴퓨터 공학을 공부합니다. 매일 아침 일곱 시에 일어납니다.',
        question: '민수 씨는 어디에서 공부합니까? (Where does Minsu study?)',
        options: ['집에서', '서울 대학교에서', '도서관에서', '미국에서'],
        correctIndex: 1,
        explanation: 'The passage explicitly says: "서울 대학교에서 컴퓨터 공학을 공부합니다" (studies computer engineering at Seoul National University).'
      }
    ]
  }
};

export const createKoreanLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return koreanA1LevelData;

  const topikMap: Record<CEFRLevel, string> = {
    A1: 'Korean A1 (TOPIK 1 L1): Foundations',
    A2: 'Korean A2 (TOPIK 1 L2): Elementary Fluency',
    B1: 'Korean B1 (TOPIK 2 L3): Intermediate Bridge',
    B2: 'Korean B2 (TOPIK 2 L4): Upper-Intermediate Fluency',
    C1: 'Korean C1 (TOPIK 2 L5): Advanced Academic',
    C2: 'Korean C2 (TOPIK 2 L6): Native Mastery'
  };

  const themes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 Past & Future Tenses (-았/었어요 & -(으)ㄹ 거예요)', focus: 'Narrating completed and future events', grammar: 'Tense markers and irregular verbs (ㄷ, ㅂ, ㅡ)' },
      { title: '02 Honorific Speech (-(으)시-)', focus: 'Respecting elders and professors', grammar: 'Honorific verb forms (드시다, 주무시다, 계시다)' }
    ],
    B1: [
      { title: '01 Expressing Reasons & Causes (-아서/어서 vs -(으)니까)', focus: 'Logical argumentation', grammar: 'Nuances of causality particles' },
      { title: '02 Expressing Intentions & Plans (-(으)려고 하다)', focus: 'Career and study objectives', grammar: 'Purpose constructions' }
    ],
    B2: [
      { title: '01 Indirect Speech (-다고 하다, -냐고 하다)', focus: 'Reporting what others said', grammar: 'Quotation structures for statements, questions, and commands' }
    ],
    C1: [
      { title: '01 Sino-Korean Idioms (사자성어) & Academic Registers', focus: 'High literature and corporate negotiation', grammar: 'Advanced Hanja compounds and formal endings' }
    ],
    C2: [
      { title: '01 Native Rhetoric & Stylistic Mastery', focus: 'Legal, governmental, and philosophical discourse', grammar: 'Archaic and poetic Korean registers' }
    ]
  };

  const lvlThemes = themes[level] || themes.B1;

  const modules: LanguageModule[] = lvlThemes.map((thm, idx) => ({
    id: `ko-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: thm.title,
    description: `Comprehensive ${level} Korean module covering ${thm.focus} and ${thm.grammar}.`,
    level,
    focusTopics: [thm.focus, thm.grammar, 'TOPIK Exam Preparation'],
    lessons: [
      {
        id: `ko-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `ko-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${thm.title} - Deep Mastery`,
        level,
        durationMinutes: 30,
        learningObjective: `Master ${thm.focus} according to official TOPIK benchmarks.`,
        conceptExplanation: `At the ${level} tier of Korean, language learning focuses on ${thm.focus}. You master ${thm.grammar}.`,
        whyItMatters: `TOPIK certification is mandatory for scholarships in South Korea (GKS), university admission (SKY universities), and career positions at top Korean corporations (Samsung, Hyundai, LG).`,
        grammarFocus: thm.grammar,
        grammarExplanation: `In-depth structural breakdown of ${thm.grammar}.`,
        dialogue: [
          { speaker: '팀장님', text: '이번 프로젝트 보고서는 언제까지 완성할 수 있습니까?', translation: 'By when can you complete this project report?' },
          { speaker: '대리', text: '내일 오후 세 시까지 작성하여 제출하도록 하겠습니다.', translation: 'I will write and submit it by tomorrow at 3:00 PM.' }
        ],
        vocabulary: [
          {
            id: `ko-${level.toLowerCase()}-v1`,
            word: '개발하다',
            translation: 'to develop',
            phonetic: 'gae-bal-ha-da',
            partOfSpeech: 'Verb',
            exampleTarget: '새로운 기술을 개발하고 있습니다.',
            exampleTranslation: 'We are developing new technology.',
            audioLanguageCode: 'ko-KR'
          }
        ],
        practiceExercises: [
          {
            question: `Which grammar concept is taught in ${thm.title}?`,
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
    title: topikMap[level],
    cefrDescription: KOREAN_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: KOREAN_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1400 : level === 'B1' ? 3200 : level === 'B2' ? 5500 : level === 'C1' ? 9000 : 14000,
    grammarTopicsCount: 15,
    modules,
    assessmentExam: {
      id: `exam-ko-${level.toLowerCase()}`,
      title: `Official CEFR ${level} / TOPIK Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `ko-${level}-q1`,
          category: 'Grammar',
          question: `Which structure characterizes ${level} Korean competence?`,
          options: [lvlThemes[0]?.grammar || 'Advanced syntax', 'Word guessing', 'Only Romanization', 'Skipping batchim'],
          correctIndex: 0,
          explanation: `Mastery of ${lvlThemes[0]?.grammar || 'advanced syntax'} is required for certification.`
        }
      ]
    }
  };
};

export const completeKoreanCourse: LanguageCourse = {
  id: 'lang-korean',
  name: 'Korean',
  code: 'ko',
  flag: '🇰🇷',
  speechCode: 'ko-KR',
  nativeName: '한국어',
  description: 'Master Korean from Hangul alphabet foundations to TOPIK Level 6 executive fluency. Essential for careers in global tech, entertainment, and university study in Seoul.',
  writingSystem: 'Hangul (24 letters, syllable block composition)',
  grammarHighlights: [
    'SOV (Subject-Object-Verb) Word Order',
    'Topic (은/는) vs Subject (이/가) Nuances',
    'Speech Levels: Polite (-아요/어요) & Formal (-ㅂ니다)',
    'Honorific Systems (-(으)시- and 존댓말)',
    'Batchim Phonological Assimilation Rules',
    'Two Number Systems: Native & Sino-Korean'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: koreanA1LevelData,
    A2: createKoreanLevel('A2'),
    B1: createKoreanLevel('B1'),
    B2: createKoreanLevel('B2'),
    C1: createKoreanLevel('C1'),
    C2: createKoreanLevel('C2')
  },
  lessons: koreanA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'ko-sc-1',
      title: 'Seoul K-BBQ Restaurant Order',
      situation: 'Ordering Samgyeopsal and side dishes at a famous Korean BBQ restaurant in Hongdae.',
      partnerRole: 'Imo-nim (Friendly Restaurant Owner)',
      samplePrompts: [
        '여기요! 삼겹살 2인분하고 된장찌개 하나 주세요.',
        '물 좀 더 주실 수 있나요?',
        '계산서 부탁드립니다. 카드로 결제할게요.'
      ]
    }
  ]
};
