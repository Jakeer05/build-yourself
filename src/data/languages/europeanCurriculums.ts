import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

// ==========================================
// 1. ITALIAN (L'Italiano 🇮🇹)
// ==========================================
export const italianA1Modules: LanguageModule[] = [
  {
    id: 'it-a1-mod-1',
    number: 1,
    title: '01 Italian Alphabet, Double Consonants & Pure Vowels',
    description: 'Master musical Italian phonetics: double consonants (doppie), soft C and G (ci/ce vs chi/che), and pure Italian vowels.',
    level: 'A1',
    focusTopics: ['Italian Alphabet & Vowels', 'Double Consonants (anno vs ano)', 'C and G Pronunciation', 'Ciao vs Buongiorno'],
    lessons: [
      {
        id: 'it-a1-l1',
        moduleId: 'it-a1-mod-1',
        order: 1,
        title: 'Italian Alphabet, Melody & The Double Consonant Rule',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Pronounce Italian pure vowels, articulate double consonants, and navigate soft vs hard C and G sounds.',
        conceptExplanation: 'Italian is famous for its musical cadence. Two crucial phonetic rules dominate Italian:\n1. Double Consonants (le doppie): Double consonants are held for twice as long! Compare "casa" (house) with "cassa" (cash desk / checkout), or "sete" (thirst) with "sette" (seven).\n2. C and G sounds: Before E and I, C and G are soft (C = ch in "ciao", G = j in "gelato"). When followed by H (chi, che, ghi, ghe), they become hard (chi = "kee" like in "chianti").',
        whyItMatters: 'Holding double consonants prevents comic misunderstandings. For example, "anno" (with double n) means "year", while "ano" (with single n) means "anus"! Saying "Ho 25 anni" requires holding the "n".',
        grammarFocus: 'Definite & Indefinite Articles (il, lo, la, l\', i, gli, le)',
        grammarExplanation: 'Italian has specialized articles based on the following letter:\n- Masculine: "il" (il ragazzo), but "lo" before s+consonant, z, gn, ps (lo studente, lo zaino). Plural: i ragazzi, gli studenti!\n- Feminine: "la" (la ragazza), l\' before vowel (l\'amica). Plural: le ragazze.',
        dialogue: [
          { speaker: 'Marco', text: 'Ciao! Come ti chiami?', translation: 'Hi! What is your name?' },
          { speaker: 'Giulia', text: 'Ciao Marco! Mi chiamo Giulia. Piacere di conoscerti!', translation: 'Hi Marco! My name is Giulia. Pleasure to meet you!' }
        ],
        vocabulary: [
          { id: 'it-v-1', word: 'buongiorno', translation: 'good morning / good day', phonetic: 'bwohn-JOHR-noh', partOfSpeech: 'Greeting', exampleTarget: 'Buongiorno a tutti!', exampleTranslation: 'Good day to everyone!', audioLanguageCode: 'it-IT' },
          { id: 'it-v-2', word: 'grazie', translation: 'thank you', phonetic: 'GRAHT-syeh', partOfSpeech: 'Phrase', exampleTarget: 'Grazie mille per l’aiuto.', exampleTranslation: 'Thank you very much (a thousand thanks) for the help.', audioLanguageCode: 'it-IT' },
          { id: 'it-v-3', word: 'per favore', translation: 'please', phonetic: 'pehr fah-VOH-reh', partOfSpeech: 'Phrase', exampleTarget: 'Un espresso, per favore.', exampleTranslation: 'An espresso, please.', audioLanguageCode: 'it-IT' },
          { id: 'it-v-4', word: 'il caffè', translation: 'the coffee / espresso', phonetic: 'eel kahf-FEH', partOfSpeech: 'Noun (m)', exampleTarget: 'Prendiamo un caffè al bar.', exampleTranslation: 'Let’s take a coffee at the bar.', audioLanguageCode: 'it-IT', gender: 'masculine' }
        ],
        sentenceBuilders: [
          { id: 'sb-it-1', promptEnglish: 'Good morning, an espresso please!', targetSentence: 'Buongiorno, un espresso per favore!', jumbledWords: ['per', 'espresso', 'Buongiorno,', 'favore!', 'un'], explanation: 'Greeting + object + polite formula.' }
        ],
        matchingPairs: [
          { target: 'Buongiorno', english: 'Good morning' },
          { target: 'Ciao', english: 'Hi / Bye' },
          { target: 'Grazie mille', english: 'Thanks a thousand' },
          { target: 'Per favore', english: 'Please' },
          { target: 'Arrivederci', english: 'Goodbye' }
        ],
        commonMistakes: [
          { mistake: 'Ordering "un latte" at an Italian bar expecting a coffee.', correction: '"Latte" in Italian literally means plain milk. Order "un caffè latte"!', explanation: 'In Italy, ordering "latte" gets you a glass of cold or warm milk.' }
        ],
        writingChallenge: [
          { title: 'Ordering in an Italian Piazza', prompt: 'Write 3 sentences in Italian greeting the barista, ordering a coffee and cornetto, and saying thank you.', starterHint: 'Use "Buongiorno!", "Vorrei un...", "Grazie mille!"', sampleAnswer: 'Buongiorno! Vorrei un caffè espresso e un cornetto alla crema, per favore. Quanto costa? Grazie mille!', breakdown: 'Uses polite conditional vorrei, standard breakfast items, and customary polite terms.' }
        ],
        practiceExercises: [
          { question: 'Which masculine article is used before "studente" (starts with s+consonant)?', options: ['il', 'lo', 'la', 'un'], correctIndex: 1, explanation: 'Words starting with s+consonant or z take the article "lo" (lo studente, lo zaino).' },
          { question: 'How is the syllable "CHE" pronounced in Italian (e.g. in "amiche")?', options: ['Like "che" in cherry', 'Like "kay"', 'Like "she"', 'It is silent'], correctIndex: 1, explanation: 'The letter "h" after "c" hardens the sound into a [k] sound: "che" = [kay].' }
        ]
      }
    ]
  }
];

export const completeItalianCourse: LanguageCourse = {
  id: 'lang-italian',
  name: 'Italian',
  code: 'it',
  flag: '🇮🇹',
  speechCode: 'it-IT',
  nativeName: 'Italiano',
  description: 'Master Italian from A1 beginner to C2 fluency. Covers melodic phonetics, Passato Prossimo, clitic pronouns (ci, ne), and Italian culinary & arts culture.',
  writingSystem: 'Latin alphabet (21 native letters + 5 foreign)',
  grammarHighlights: ['Double Consonant Dynamics', 'Complex Article System (il, lo, la, i, gli, le)', 'Passato Prossimo with Essere & Avere', 'Clitic Pronouns (ci and ne)', 'Subjunctive (Congiuntivo)'],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: {
      level: 'A1',
      title: 'Italian A1: Beginner Foundations',
      cefrDescription: 'Can understand everyday Italian expressions and interact in simple social situations.',
      canDoStatements: ['Can introduce oneself, order food and espresso, and master Italian vowel phonetics and articles.'],
      targetVocabCount: 600,
      grammarTopicsCount: 14,
      modules: italianA1Modules,
      assessmentExam: {
        id: 'exam-it-a1',
        title: 'Official CEFR A1 Italian Certification Exam',
        durationMinutes: 30,
        passingScore: 70,
        questions: [
          { id: 'it-q1', category: 'Grammar', question: 'What is the plural of the masculine article "lo"?', options: ['i', 'gli', 'le', 'loi'], correctIndex: 1, explanation: 'The plural of "lo" is "gli" (lo studente → gli studenti).' }
        ]
      }
    }
  },
  lessons: italianA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'it-sc-1',
      title: 'Italian Espresso Bar Order in Rome',
      situation: 'Ordering an espresso and pastry standing at the bar (al banco) in Rome.',
      partnerRole: 'Barista romano (vivace ed espressivo)',
      samplePrompts: ['Buongiorno! Un espresso ristretto al banco per favore.', 'Quanto viene lo scontrino?', 'Grazie e buona giornata!']
    }
  ]
};

// ==========================================
// 2. PORTUGUESE (Português 🇵🇹 🇧🇷)
// ==========================================
export const portugueseA1Modules: LanguageModule[] = [
  {
    id: 'pt-a1-mod-1',
    number: 1,
    title: '01 Portuguese Alphabet, Nasal Sounds & Ser vs Estar',
    description: 'Master Portuguese phonology: the tilde (ã, õ), nasal vowels (m and n endings), Ser vs Estar, and Brazilian vs European differences.',
    level: 'A1',
    focusTopics: ['Portuguese Alphabet', 'Nasal Vowels (ão, ã, õe)', 'Ser vs Estar Distinction', 'Contractions (do, da, no, na)'],
    lessons: [
      {
        id: 'pt-a1-l1',
        moduleId: 'pt-a1-mod-1',
        order: 1,
        title: 'Nasal Vowels, The Tilde (~) & Ser vs Estar',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Pronounce Portuguese nasal vowels (pão, não), navigate Ser vs Estar, and use basic contractions.',
        conceptExplanation: 'Portuguese has a distinctive, melodious phonetic landscape marked by NASAL VOWELS. The tilde (til: ~) indicates that air vibrates simultaneously through the nose and mouth! For example: "não" (no), "pão" (bread), "coração" (heart).\nLike Spanish, Portuguese has two verbs for "to be":\n- SER: permanent identity and origin (Sou do Brasil / Sou de Portugal).\n- ESTAR: temporary states and location (Estou em Lisboa / Estou feliz).',
        whyItMatters: 'Mastering the nasal "ão" sound is the hallmark of genuine Portuguese pronunciation. Contractions like "em + o = no" and "de + a = da" are ubiquitous in everyday speech.',
        grammarFocus: 'Essential Contractions (de + article, em + article)',
        grammarExplanation: 'In Portuguese, prepositions merge automatically with articles:\n- de + o = do, de + a = da (of the)\n- em + o = no, em + a = na (in the / on the)\n- por + o = pelo, por + a = pela (by/through the)',
        dialogue: [
          { speaker: 'Pedro', text: 'Olá! Tudo bem?', translation: 'Hello! Is everything good?' },
          { speaker: 'Beatriz', text: 'Tudo bem, obrigado! Como você se chama?', translation: 'Everything good, thank you! What is your name?' }
        ],
        vocabulary: [
          { id: 'pt-v-1', word: 'olá', translation: 'hello', phonetic: 'oh-LAH', partOfSpeech: 'Greeting', exampleTarget: 'Olá, bom dia!', exampleTranslation: 'Hello, good morning!', audioLanguageCode: 'pt-PT' },
          { id: 'pt-v-2', word: 'obrigado / obrigada', translation: 'thank you (m/f)', phonetic: 'oh-bree-GAH-doo / dah', partOfSpeech: 'Phrase', exampleTarget: 'Muito obrigado pela atenção.', exampleTranslation: 'Thank you very much for the attention.', audioLanguageCode: 'pt-PT' },
          { id: 'pt-v-3', word: 'por favor', translation: 'please', phonetic: 'poor fah-VOR', partOfSpeech: 'Phrase', exampleTarget: 'Um café, por favor.', exampleTranslation: 'A coffee, please.', audioLanguageCode: 'pt-PT' },
          { id: 'pt-v-4', word: 'o pão', translation: 'the bread', phonetic: 'oo POWNG', partOfSpeech: 'Noun (m)', exampleTarget: 'O pão quente está delicioso.', exampleTranslation: 'The warm bread is delicious.', audioLanguageCode: 'pt-PT', gender: 'masculine' }
        ],
        sentenceBuilders: [
          { id: 'sb-pt-1', promptEnglish: 'Hello, I am from Brazil and I live in Lisbon.', targetSentence: 'Olá, sou do Brasil e moro em Lisboa.', jumbledWords: ['em', 'sou', 'Brasil', 'Lisboa.', 'Olá,', 'do', 'moro', 'e'], explanation: 'Greeting + sou (SER origin) + do Brasil (de+o) + moro + em Lisboa.' }
        ],
        matchingPairs: [
          { target: 'Olá', english: 'Hello' },
          { target: 'Tudo bem?', english: 'How are you / Everything good?' },
          { target: 'Muito obrigado', english: 'Thank you very much' },
          { target: 'Por favor', english: 'Please' },
          { target: 'Adeus / Tchau', english: 'Goodbye' }
        ],
        commonMistakes: [
          { mistake: 'Women saying "obrigado" instead of "obrigada".', correction: 'Men say "obrigado"; women say "obrigada" (it agrees with the speaker!).', explanation: 'Obrigado means "obliged" and agrees in gender with the person speaking.' }
        ],
        writingChallenge: [
          { title: 'Self-Introduction in Portuguese', prompt: 'Write three sentences in Portuguese: Greeting (Olá), stating your name and nationality (Sou...), and stating where you live.', starterHint: 'Use "Olá! Meu nome é...", "Sou do...", "Moro em..."', sampleAnswer: 'Olá! Sou o Tiago e sou engenheiro. Sou do Brasil, mas agora moro em Lisboa. Muito prazer!', breakdown: 'Integrates greeting, SER for profession and origin, and present tense morar.' }
        ],
        practiceExercises: [
          { question: 'What does a female speaker say to express "Thank you" in Portuguese?', options: ['Obrigado', 'Obrigada', 'De nada', 'Por favor'], correctIndex: 1, explanation: 'Female speakers say "Obrigada", while male speakers say "Obrigado".' },
          { question: 'What does the contraction "no" represent in Portuguese?', options: ['não (no)', 'em + o (in the)', 'de + o (of the)', 'para + o (to the)'], correctIndex: 1, explanation: 'The preposition "em" (in/on) merges with the masculine article "o" into "no".' }
        ]
      }
    ]
  }
];

export const completePortugueseCourse: LanguageCourse = {
  id: 'lang-portuguese',
  name: 'Portuguese',
  code: 'pt',
  flag: '🇵🇹',
  speechCode: 'pt-PT',
  nativeName: 'Português',
  description: 'Master Portuguese across Portugal and Brazil from A1 to C2 fluency. Covers nasal vowels, Ser vs Estar, contractions, and Lusophone cultural richness.',
  writingSystem: 'Latin alphabet + Tilde (ã, õ) + Cedilha (ç)',
  grammarHighlights: ['Nasal Vowel System (ão, õe)', 'Preposition Contractions (do, da, no, na, pelo)', 'Ser vs Estar Dual Copula', 'European vs Brazilian Pronoun Clitic Placement', 'Personal Infinitive (Infinitivo Pessoal)'],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: {
      level: 'A1',
      title: 'Portuguese A1: Beginner Foundations',
      cefrDescription: 'Can understand everyday expressions and interact in simple situations in Portugal and Brazil.',
      canDoStatements: ['Can introduce oneself, order pastel de nata, navigate contractions, and distinguish Ser vs Estar.'],
      targetVocabCount: 600,
      grammarTopicsCount: 14,
      modules: portugueseA1Modules,
      assessmentExam: {
        id: 'exam-pt-a1',
        title: 'Official CEFR A1 Portuguese Certification Exam',
        durationMinutes: 30,
        passingScore: 70,
        questions: [
          { id: 'pt-q1', category: 'Grammar', question: 'Which contraction is formed by "de + a"?', options: ['do', 'da', 'na', 'pela'], correctIndex: 1, explanation: '"de + a" contracts into "da" (of the, feminine).' }
        ]
      }
    }
  },
  lessons: portugueseA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'pt-sc-1',
      title: 'Lisbon Pastel de Nata Bakery Order',
      situation: 'Ordering warm pastéis de nata and a bica (espresso) in Belém, Lisbon.',
      partnerRole: 'Pasteleiro de Lisboa (simpático)',
      samplePrompts: ['Bom dia! Queria dois pastéis de nata com canela e uma bica, por favor.', 'Pode trazer a conta, por favor?', 'Muito obrigado!']
    }
  ]
};

// ==========================================
// 3. ENGLISH (Professional & IELTS / CEFR 🇬🇧 🇺🇸)
// ==========================================
export const englishA1Modules: LanguageModule[] = [
  {
    id: 'en-a1-mod-1',
    number: 1,
    title: '01 Global English Foundations, Phonetics & Present Simple',
    description: 'Master the international global lingua franca: English phonetics, Present Simple vs Continuous, questions with "do/does", and essential vocabulary.',
    level: 'A1',
    focusTopics: ['English Vowel Phonetics & IPA', 'Present Simple (he/she/it + s)', 'Auxiliary Verbs (Do / Does)', 'Question Words (What, Where, When, Why, How)'],
    lessons: [
      {
        id: 'en-a1-l1',
        moduleId: 'en-a1-mod-1',
        order: 1,
        title: 'Global English Foundations: Present Simple & Question Formation',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Use Present Simple for habits and facts, conjugate with the third-person -s ending, and formulate questions with "do" and "does".',
        conceptExplanation: 'English is the undisputed global language of technology, science, aviation, and international commerce. The Present Simple tense describes routines, permanent facts, and regular habits:\n- I study, You study, We study, They study.\n- The Third Person Rule: He, She, It takes an -S ending (e.g. He workS, She liveS, It runS).\nTo ask questions, English uses the auxiliary verb DO or DOES:\n- "Do you speak English?"\n- "Where does she live?"',
        whyItMatters: 'Forgetting the 3rd person "s" (saying "He work in London" instead of "He works in London") is the most common grammatical slip identified on IELTS and Cambridge examinations.',
        grammarFocus: 'Present Simple vs Present Continuous (I do vs I am doing)',
        grammarExplanation: 'Use Present Simple for general habits ("I drink coffee every morning"). Use Present Continuous (am/is/are + verb-ing) for actions happening right now at this exact moment ("I am drinking coffee right now").',
        dialogue: [
          { speaker: 'Interviewer', text: 'Good morning! Could you tell me a little bit about yourself?', translation: 'Good morning! Could you tell me a little bit about yourself?' },
          { speaker: 'Candidate', text: 'Good morning! My name is Arthur. I work as a data engineer and I live in London.', translation: 'Good morning! My name is Arthur. I work as a data engineer and I live in London.' }
        ],
        vocabulary: [
          { id: 'en-v-1', word: 'welcome', translation: 'welcome', phonetic: 'WEL-kuhm', partOfSpeech: 'Greeting', exampleTarget: 'Welcome to the global team!', exampleTranslation: 'Welcome to the global team!', audioLanguageCode: 'en-US' },
          { id: 'en-v-2', word: 'opportunity', translation: 'opportunity', phonetic: 'op-er-TOO-ni-tee', partOfSpeech: 'Noun', exampleTarget: 'This is a great career opportunity.', exampleTranslation: 'This is a great career opportunity.', audioLanguageCode: 'en-US' },
          { id: 'en-v-3', word: 'develop', translation: 'develop', phonetic: 'dih-VEL-uhp', partOfSpeech: 'Verb', exampleTarget: 'We develop scalable web software.', exampleTranslation: 'We develop scalable web software.', audioLanguageCode: 'en-US' }
        ],
        sentenceBuilders: [
          { id: 'sb-en-1', promptEnglish: 'Where do you work in London?', targetSentence: 'Where do you work in London?', jumbledWords: ['work', 'do', 'in', 'Where', 'London?', 'you'], explanation: 'Question word (Where) + Auxiliary (do) + Subject (you) + Verb (work).' }
        ],
        matchingPairs: [
          { target: 'Where', english: 'Asking for location' },
          { target: 'When', english: 'Asking for time' },
          { target: 'Why', english: 'Asking for reasons' },
          { target: 'How', english: 'Asking for method/manner' },
          { target: 'Who', english: 'Asking for a person' }
        ],
        commonMistakes: [
          { mistake: 'Saying "He don\'t know" instead of "He doesn\'t know".', correction: 'Use "doesn\'t" for he/she/it: "He doesn\'t know".', explanation: 'Third person singular requires "does" / "doesn\'t".' }
        ],
        writingChallenge: [
          { title: 'Professional Self Profile', prompt: 'Write 3 sentences describing your name, what field you work in, and what your career goal is.', starterHint: 'Use "My name is...", "I work as a...", "My goal is..."', sampleAnswer: 'My name is Sarah. I work as a software engineer and I specialize in cloud infrastructure. My goal is to lead international engineering teams.', breakdown: 'Uses correct Present Simple, professional vocabulary, and clear career objectives.' }
        ],
        practiceExercises: [
          { question: 'Which auxiliary verb is used for questions with "he" or "she" in the Present Simple?', options: ['Do', 'Does', 'Is', 'Are'], correctIndex: 1, explanation: '"Does" is the 3rd person auxiliary: "Does he work here?".' },
          { question: 'Complete the sentence: "She _____ (live) in Cambridge."', options: ['live', 'lives', 'living', 'is live'], correctIndex: 1, explanation: 'Third-person singular takes -s: "She lives in Cambridge".' }
        ]
      }
    ]
  }
];

export const completeEnglishCourse: LanguageCourse = {
  id: 'lang-english',
  name: 'Professional English & IELTS Prep',
  code: 'en',
  flag: '🇬🇧',
  speechCode: 'en-US',
  nativeName: 'English',
  description: 'Master international English from CEFR A1 foundations to C2 / IELTS Band 9 fluency. Essential for global remote careers, academic research, and international study.',
  writingSystem: 'Latin alphabet (26 letters)',
  grammarHighlights: ['Present Simple vs Continuous Aspects', 'Perfect Tenses (Present Perfect vs Past Simple)', 'Conditionals 0, 1, 2, 3 and Mixed Conditionals', 'Passive Voice & Inversion for Academic Writing', 'Phrasal Verbs & Business Collocations', 'IELTS & TOEFL Academic Lexicon'],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: {
      level: 'A1',
      title: 'English A1: Global Foundations',
      cefrDescription: 'Can understand basic everyday phrases and communicate in simple global English.',
      canDoStatements: ['Can introduce oneself, describe daily routines, ask questions with do/does, and pronounce English phonemes.'],
      targetVocabCount: 800,
      grammarTopicsCount: 15,
      modules: englishA1Modules,
      assessmentExam: {
        id: 'exam-en-a1',
        title: 'Official CEFR A1 English Certification Exam',
        durationMinutes: 30,
        passingScore: 70,
        questions: [
          { id: 'en-q1', category: 'Grammar', question: 'Which sentence is grammatically correct in Present Simple?', options: ['He go to work every day.', 'He goes to work every day.', 'He is go to work every day.', 'He going to work.'], correctIndex: 1, explanation: 'Third person singular adds -es to "go": "He goes to work".' }
        ]
      }
    }
  },
  lessons: englishA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'en-sc-1',
      title: 'Global Tech Job Interview in English',
      situation: 'Explaining your software background and technical strengths to an engineering director.',
      partnerRole: 'VP of Engineering (Friendly and technical)',
      samplePrompts: ['Could you walk me through your recent project architecture?', 'How do you handle technical debt and automated testing?', 'Why are you interested in joining our distributed international team?']
    }
  ]
};

// ==========================================
// 4. DUTCH (Nederlands 🇳🇱 🇧🇪)
// ==========================================
export const dutchA1Modules: LanguageModule[] = [
  {
    id: 'nl-a1-mod-1',
    number: 1,
    title: '01 Dutch Alphabet, The G-Sound & De vs Het Articles',
    description: 'Master Dutch phonology: the guttural "g", diphthongs (ui, ij, ou), the two articles (de vs het), and the concept of "gezelligheid".',
    level: 'A1',
    focusTopics: ['Dutch Guttural G sound', 'Diphthongs (ij, ui, oe, eu)', 'De vs Het Words', 'V2 Word Order in Dutch'],
    lessons: [
      {
        id: 'nl-a1-l1',
        moduleId: 'nl-a1-mod-1',
        order: 1,
        title: 'The Dutch Alphabet, The "G" Sound & De vs Het',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Pronounce the Dutch guttural "g" and diphthongs, and identify "de" vs "het" nouns.',
        conceptExplanation: 'Dutch is the closest major European language to English and German! Dutch pronunciation features:\n1. The Guttural "G": A soft throat-clearing fricative [x] (as in "goedemorgen" or "gezellig").\n2. The Two Articles:\n- "de" words (about 75% of nouns): de man, de vrouw, de straat.\n- "het" words (about 25% of nouns): het huis, het boek, het kind.\nDiminutives ending in -je or -tje are ALWAYS "het" (het broodje, het biertje)!',
        whyItMatters: 'The Netherlands is home to top European tech hubs (Amsterdam, Eindhoven, ASML) and top universities (TU Delft, UvA). Speaking Dutch unlocks local life and community.',
        grammarFocus: 'Verb Conjugation & Verb-Second (V2) Rule',
        grammarExplanation: 'Like German, Dutch strictly places the conjugated verb in POSITION TWO in main clauses: "Vandaag leer ik Nederlands" (Today I learn Dutch).',
        dialogue: [
          { speaker: 'Lars', text: 'Hallo! Goedemorgen! Hoe heet je?', translation: 'Hello! Good morning! What is your name?' },
          { speaker: 'Sanne', text: 'Goedemorgen! Ik heet Sanne. Aangenaam kennis te maken!', translation: 'Good morning! My name is Sanne. Pleased to meet you!' }
        ],
        vocabulary: [
          { id: 'nl-v-1', word: 'goedemorgen', translation: 'good morning', phonetic: 'khoo-duh-MOR-khen', partOfSpeech: 'Greeting', exampleTarget: 'Goedemorgen allemaal!', exampleTranslation: 'Good morning everyone!', audioLanguageCode: 'nl-NL' },
          { id: 'nl-v-2', word: 'dank je wel', translation: 'thank you (informal)', phonetic: 'dahnk yuh VEL', partOfSpeech: 'Phrase', exampleTarget: 'Dank je wel voor de hulp.', exampleTranslation: 'Thank you for the help.', audioLanguageCode: 'nl-NL' },
          { id: 'nl-v-3', word: 'alsjeblieft', translation: 'please / here you go', phonetic: 'ahl-shuh-BLEEFT', partOfSpeech: 'Phrase', exampleTarget: 'Een koffie, alsjeblieft.', exampleTranslation: 'A coffee, please.', audioLanguageCode: 'nl-NL' },
          { id: 'nl-v-4', word: 'gezellig', translation: 'cozy / sociable (quintessential Dutch concept)', phonetic: 'kheh-ZEL-likh', partOfSpeech: 'Adjective', exampleTarget: 'Het is hier heel gezellig!', exampleTranslation: 'It is very cozy/sociable here!', audioLanguageCode: 'nl-NL' }
        ],
        sentenceBuilders: [
          { id: 'sb-nl-1', promptEnglish: 'Good morning, a coffee please!', targetSentence: 'Goedemorgen, een koffie alsjeblieft!', jumbledWords: ['alsjeblieft!', 'koffie', 'Goedemorgen,', 'een'], explanation: 'Greeting + object + polite word.' }
        ],
        matchingPairs: [
          { target: 'Goedemorgen', english: 'Good morning' },
          { target: 'Hallo', english: 'Hello' },
          { target: 'Dank je wel', english: 'Thank you' },
          { target: 'Alsjeblieft', english: 'Please / Here you go' },
          { target: 'Tot ziens', english: 'Goodbye' }
        ],
        commonMistakes: [
          { mistake: 'Pronouncing the Dutch "G" like an English "G" in "goat".', correction: 'Pronounce Dutch "G" from the back of the throat with gentle friction.', explanation: 'The Dutch "G" is a velar/uvular fricative.' }
        ],
        writingChallenge: [
          { title: 'Greeting Neighbors in Amsterdam', prompt: 'Write three sentences greeting your Dutch neighbor, introducing yourself, and stating that you live in Amsterdam.', starterHint: 'Use "Hallo!", "Ik heet...", "Ik woon in Amsterdam."', sampleAnswer: 'Hallo, goedemorgen! Ik heet Lucas. Ik woon sinds kort in Amsterdam en ik leer Nederlands. Prettig met je kennis te maken!', breakdown: 'Uses Dutch greetings, verb heten and wonen, and polite introductory pleasantries.' }
        ],
        practiceExercises: [
          { question: 'What is the grammatical gender article for all Dutch diminutive nouns ending in -je (e.g. broodje, biertje)?', options: ['de', 'het', 'een', 'die'], correctIndex: 1, explanation: 'All diminutive nouns in Dutch are strictly "het" words (het broodje, het kopje).' },
          { question: 'What does the iconic Dutch word "gezellig" convey?', options: ['Expensive', 'Cozy, sociable, pleasant atmosphere with friends', 'Cold and rainy', 'Rude'], correctIndex: 1, explanation: '"Gezellig" is a cornerstone of Dutch culture describing warmth, comfort, and shared friendship.' }
        ]
      }
    ]
  }
];

export const completeDutchCourse: LanguageCourse = {
  id: 'lang-dutch',
  name: 'Dutch',
  code: 'nl',
  flag: '🇳🇱',
  speechCode: 'nl-NL',
  nativeName: 'Nederlands',
  description: 'Master Dutch from A1 foundations to C2 fluency. Covers "de" vs "het", guttural G, V2 word order, and study in the Netherlands and Flanders.',
  writingSystem: 'Latin alphabet (with IJ digraph)',
  grammarHighlights: ['De vs Het Noun Classification', 'Guttural G and Diphthong Phonetics', 'Verb-Second (V2) Word Order', 'Separable Verbs (scheidbare werkwoorden)', 'Diminutive Suffix System (-je, -tje)', 'Subordinate Clause Verb Clusters'],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: {
      level: 'A1',
      title: 'Dutch A1: Beginner Foundations',
      cefrDescription: 'Can understand basic Dutch phrases and navigate daily interactions in the Netherlands.',
      canDoStatements: ['Can introduce oneself, order in a café, understand de vs het, and pronounce the Dutch G.'],
      targetVocabCount: 600,
      grammarTopicsCount: 14,
      modules: dutchA1Modules,
      assessmentExam: {
        id: 'exam-nl-a1',
        title: 'Official CEFR A1 Dutch Certification Exam',
        durationMinutes: 30,
        passingScore: 70,
        questions: [
          { id: 'nl-q1', category: 'Grammar', question: 'Which article is used with "huis" (house)?', options: ['de', 'het', 'een', 'hetje'], correctIndex: 1, explanation: '"het huis" is a neuter "het" word in Dutch.' }
        ]
      }
    }
  },
  lessons: dutchA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'nl-sc-1',
      title: 'Amsterdam Brown Café (Bruin Café) Order',
      situation: 'Ordering bitterballen and a local beer at a historic Amsterdam café.',
      partnerRole: 'Barman in Amsterdam (vriendelijk en ontspannen)',
      samplePrompts: ['Hallo! Mag ik een portie bitterballen met mosterd en een biertje, alsjeblieft?', 'Is het mogelijk om met pin te betalen?', 'Dank je wel en fijne dag!']
    }
  ]
};
