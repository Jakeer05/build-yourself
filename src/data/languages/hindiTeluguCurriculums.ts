import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

// ==========================================
// 1. HINDI (हिन्दी 🇮🇳)
// ==========================================
export const hindiA1Modules: LanguageModule[] = [
  {
    id: 'hi-a1-mod-1',
    number: 1,
    title: '01 Devanagari Script, Vowels (Swar) & Basic Greetings',
    description: 'Master reading and writing Devanagari: pure vowels (अ, आ, इ, ई), consonants (Ka-varga), and foundational polite greetings (Namaste, Aap kaise hain).',
    level: 'A1',
    focusTopics: ['Devanagari Script & Vowels', 'Aspirated vs Unaspirated Consonants', 'Formal Pronouns (Aap vs Tum)', 'Greetings (Namaste / Namaskar)'],
    lessons: [
      {
        id: 'hi-a1-l1',
        moduleId: 'hi-a1-mod-1',
        order: 1,
        title: 'Hindi Alphabet (Varnamala) & Core Greetings',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Read primary Devanagari vowels, distinguish aspirated sounds, and greet others with polite honorifics.',
        conceptExplanation: 'Hindi is written in the Devanagari phonetic script from left to right with a horizontal hanging line (Shirorekha) on top.\n1. Pure Vowels (Swar): अ (a), आ (aa), इ (i), ई (ee), उ (u), ऊ (oo), ए (e), ऐ (ai), ओ (o), औ (au).\n2. Aspiration distinction: Hindi distinguishes unaspirated vs aspirated consonants. Compare क (ka) with ख (kha), and त (dental ta) with ट (retroflex ta).\n3. Honorific Pronouns: In Hindi, polite speech is essential. "आप" (Aap) is used for elders, teachers, and strangers; "तुम" (Tum) for peers; "तू" (Tu) only for very close intimates or deities.',
        whyItMatters: 'Using "आप" (Aap) displays immediate respect in Indian culture. Mispronouncing aspirated letters (like खाना khaana = to eat vs काना kaana = one-eyed) alters word meanings completely.',
        grammarFocus: 'SOV Word Order & The Copula "होना" (Hona - to be)',
        grammarExplanation: 'Hindi follows Subject-Object-Verb (SOV) order:\n- English: I (S) speak (V) Hindi (O).\n- Hindi: मैं (S) हिन्दी (O) बोलता हूँ (V). (Main Hindi bolta hoon).\nPresent tense of "होना" (to be):\n- मैं ... हूँ (Main ... hoon - I am)\n- आप ... हैं (Aap ... hain - You are polite)\n- यह/वह ... है (Yeh/Voh ... hai - He/She/This/That is)',
        dialogue: [
          { speaker: 'Rahul', text: 'नमस्ते! आपका नाम क्या है?', translation: 'Namaste! What is your name?' },
          { speaker: 'Priya', text: 'नमस्ते राहुल जी! मेरा नाम प्रिया है। आप कैसे हैं?', translation: 'Namaste Rahul ji! My name is Priya. How are you?' },
          { speaker: 'Rahul', text: 'मैं बहुत अच्छा हूँ, धन्यवाद!', translation: 'I am very well, thank you!' }
        ],
        vocabulary: [
          { id: 'hi-v-1', word: 'नमस्ते', translation: 'hello / respectful greeting', phonetic: 'nuh-muh-STAY', partOfSpeech: 'Greeting', exampleTarget: 'नमस्ते जी, आप कैसे हैं?', exampleTranslation: 'Hello sir, how are you?', audioLanguageCode: 'hi-IN' },
          { id: 'hi-v-2', word: 'धन्यवाद', translation: 'thank you', phonetic: 'dhun-yuh-VAAD', partOfSpeech: 'Phrase', exampleTarget: 'आपकी मदद के लिए धन्यवाद।', exampleTranslation: 'Thank you for your help.', audioLanguageCode: 'hi-IN' },
          { id: 'hi-v-3', word: 'कृपया', translation: 'please', phonetic: 'KRIP-yah', partOfSpeech: 'Adverb', exampleTarget: 'कृपया यहाँ बैठिए।', exampleTranslation: 'Please sit here.', audioLanguageCode: 'hi-IN' },
          { id: 'hi-v-4', word: 'हाँ / नहीं', translation: 'yes / no', phonetic: 'haan / na-heen', partOfSpeech: 'Particle', exampleTarget: 'हाँ, मैं चाय पीता हूँ।', exampleTranslation: 'Yes, I drink tea.', audioLanguageCode: 'hi-IN' },
          { id: 'hi-v-5', word: 'पानी', translation: 'water', phonetic: 'PAA-nee', partOfSpeech: 'Noun (m)', exampleTarget: 'मुझे एक गिलास पानी चाहिए।', exampleTranslation: 'I need a glass of water.', audioLanguageCode: 'hi-IN', gender: 'masculine' }
        ],
        sentenceBuilders: [
          { id: 'sb-hi-1', promptEnglish: 'My name is Priya.', targetSentence: 'मेरा नाम प्रिया है।', jumbledWords: ['है।', 'नाम', 'मेरा', 'प्रिया'], explanation: 'Subject pronoun possessive (mera) + noun (naam) + name + copula (hai).' }
        ],
        matchingPairs: [
          { target: 'नमस्ते', english: 'Hello / Greetings' },
          { target: 'धन्यवाद', english: 'Thank you' },
          { target: 'कृपया', english: 'Please' },
          { target: 'हाँ', english: 'Yes' },
          { target: 'नहीं', english: 'No' }
        ],
        commonMistakes: [
          { mistake: 'Using "तू" (Tu) with strangers or shopkeepers.', correction: 'Always use "आप" (Aap) with "हैं" (hain).', explanation: '"Tu" sounds disrespectful when addressing strangers or elders in India.' }
        ],
        writingChallenge: [
          { title: 'Self Introduction in Hindi', prompt: 'Write 3 lines in Hindi introducing your name, greeting politely, and asking how the other person is.', starterHint: 'Use "नमस्ते!", "मेरा नाम...", "आप कैसे हैं?"', sampleAnswer: 'नमस्ते! मेरा नाम कबीर है। मैं एक छात्र हूँ। आप कैसे हैं?', breakdown: 'Introduces greeting, states name using possessive mera, mentions occupation, and ends with polite question.' }
        ],
        practiceExercises: [
          { question: 'What is the standard word order in a Hindi sentence?', options: ['SVO (Subject Verb Object)', 'SOV (Subject Object Verb)', 'VSO (Verb Subject Object)', 'OVS'], correctIndex: 1, explanation: 'Hindi is an SOV language: Subject comes first, Object in the middle, and Verb at the end.' },
          { question: 'Which pronoun represents the highest level of formal respect in Hindi?', options: ['तू (Tu)', 'तुम (Tum)', 'आप (Aap)', 'हम (Hum)'], correctIndex: 2, explanation: '"आप" (Aap) is the polite honorific pronoun used for elders, professionals, and strangers.' }
        ]
      }
    ]
  }
];

export const completeHindiCourse: LanguageCourse = {
  id: 'lang-hindi',
  name: 'Hindi',
  code: 'hi',
  flag: '🇮🇳',
  speechCode: 'hi-IN',
  nativeName: 'हिन्दी',
  description: 'Master Hindi from A1 beginner to C2 fluency. Covers the Devanagari script, gendered verbs, postpositions (का, के, की, ने, को), and cultural etiquette.',
  writingSystem: 'Devanagari (देवनागरी) - 11 vowels and 33 primary consonants',
  grammarHighlights: ['SOV Word Order', 'Postpositions instead of Prepositions', 'Grammatical Gender for all Nouns', 'Ergative "ने" (ne) Construction in Past Tense', 'Honorific Verb Endings'],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: {
      level: 'A1',
      title: 'A1 Beginner Hindi',
      cefrDescription: 'Can understand and use familiar everyday expressions and very basic phrases to introduce themselves and interact politely.',
      canDoStatements: [
        'Read and write basic Devanagari characters and words',
        'Introduce yourself and ask basic questions with formal pronouns (Aap)',
        'Order street food and express needs using simple SOV sentences'
      ],
      targetVocabCount: 500,
      grammarTopicsCount: 12,
      modules: hindiA1Modules,
      assessmentExam: {
        id: 'hi-a1-exam',
        title: 'Official Build Yourself CEFR A1 Hindi Proficiency Exam',
        durationMinutes: 30,
        passingScore: 70,
        questions: [
          { id: 'h-q1', category: 'Grammar', question: 'Fill in the blank: मैं दिल्ली में रहता ____।', options: ['हूँ', 'है', 'हैं', 'हो'], correctIndex: 0, explanation: 'The pronoun "मैं" (Main - I) always takes the copula "हूँ" (hoon).' },
          { id: 'h-q2', category: 'Vocabulary', question: 'What does "धन्यवाद" (dhanyavaad) mean?', options: ['Goodbye', 'Please', 'Thank you', 'Excuse me'], correctIndex: 2, explanation: 'धन्यवाद means "Thank you" in Hindi.' }
        ]
      }
    }
  },
  lessons: hindiA1Modules[0].lessons,
  conversationScenarios: [
    {
      id: 'sc-hi-1',
      title: 'Ordering Chai and Samosas at a Dhaba',
      situation: 'You are at a local Indian tea stall and want to order two cups of masala chai and snacks.',
      partnerRole: 'Chaiwala (Tea vendor)',
      samplePrompts: ['Bhaiya, do cup masala chai banaiye', 'Kitne paise hue?', 'Chini kam rakhiye please']
    }
  ]
};

// ==========================================
// 2. TELUGU (తెలుగు 🇮🇳)
// ==========================================
export const teluguA1Modules: LanguageModule[] = [
  {
    id: 'te-a1-mod-1',
    number: 1,
    title: '01 Telugu Script, Rounded Vowels & Essential Greetings',
    description: 'Master the rounded Telugu script: vowels (అ, ఆ, ఇ, ఈ), consonants (క, గ, చ, జ), polite greetings (Namaskaram, Bagunnara), and respectful pronouns.',
    level: 'A1',
    focusTopics: ['Telugu Script & Beautiful Circles', 'Aspiration in Telugu', 'Formal Pronouns (Meeru vs Nuvvu)', 'Everyday Greetings (Namaskaram)'],
    lessons: [
      {
        id: 'te-a1-l1',
        moduleId: 'te-a1-mod-1',
        order: 1,
        title: 'Telugu Alphabet (Varnamala) & Core Conversational Greetings',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Recognize circular Telugu script characters, greet speakers with "Namaskaram", and introduce oneself using SOV structure.',
        conceptExplanation: 'Telugu, known as the "Italian of the East" due to all native words ending in vowels, is a major Dravidian language.\n1. Rounded Script (అచ్చులు Achulu & హల్లులు Hallulu): Vowels include అ (a), ఆ (aa), ఇ (i), ఈ (ee), ఉ (u), ఊ (oo), ఎ (e), ఏ (ae), ఒ (o), ఓ (oo).\n2. Respectful Address: "మీరు" (Meeru) is the polite formal "you", while "నువ్వు" (Nuvvu) is informal.\n3. Sentence Structure: Like other Indian languages, Telugu follows Subject-Object-Verb (SOV) order.',
        whyItMatters: 'Telugu culture places high value on hospitality and polite address. Using "Meeru" (మీరు) and adding "andi" (అండి) at the end of sentences demonstrates warmth and politeness.',
        grammarFocus: 'SOV Sentence Pattern & The Verb "ఉండు" (Undu - to be)',
        grammarExplanation: 'Word order:\n- నేనూ (Subject) తెలుగు (Object) నేర్చుకుంటున్నాను (Verb). (Nenu Telugu nerchukuntunnanu - I am learning Telugu).\nPresent tense of "ఉండు" (to be):\n- నేను ఉన్నాను (Nenu unnanu - I am)\n- మీరు ఉన్నారు (Meeru unnaru - You are polite)\n- బాగున్నాను (Bagunnanu - I am doing fine)',
        dialogue: [
          { speaker: 'Suresh', text: 'నమస్కారం! మీ పేరు ఏమిటి?', translation: 'Namaskaram! What is your name?' },
          { speaker: 'Lalitha', text: 'నమస్కారం అండి! నా పేరు లలిత. మీరు ఎలా ఉన్నారు?', translation: 'Namaskaram sir/ma’am! My name is Lalitha. How are you?' },
          { speaker: 'Suresh', text: 'నేను బాగున్నాను, ధన్యవాదాలు!', translation: 'I am doing well, thank you!' }
        ],
        vocabulary: [
          { id: 'te-v-1', word: 'నమస్కారం', translation: 'greetings / respectful hello', phonetic: 'nuh-mus-KAA-rum', partOfSpeech: 'Greeting', exampleTarget: 'నమస్కారం అండి, బాగున్నారా?', exampleTranslation: 'Hello respected, are you doing well?', audioLanguageCode: 'te-IN' },
          { id: 'te-v-2', word: 'ధన్యవాదాలు', translation: 'thank you / thanks', phonetic: 'dhun-yuh-VAA-duh-loo', partOfSpeech: 'Phrase', exampleTarget: 'మీ సహాయానికి ధన్యవాదాలు.', exampleTranslation: 'Thank you for your assistance.', audioLanguageCode: 'te-IN' },
          { id: 'te-v-3', word: 'అవును / కాదు', translation: 'yes / no', phonetic: 'OW-noo / KAA-doo', partOfSpeech: 'Particle', exampleTarget: 'అవును, నేను వస్తాను.', exampleTranslation: 'Yes, I will come.', audioLanguageCode: 'te-IN' },
          { id: 'te-v-4', word: 'మంచిది', translation: 'good / alright', phonetic: 'MUN-chee-dee', partOfSpeech: 'Adjective', exampleTarget: 'ఇది చాలా మంచిది.', exampleTranslation: 'This is very good.', audioLanguageCode: 'te-IN' },
          { id: 'te-v-5', word: 'నీళ్ళు', translation: 'water', phonetic: 'NEEL-loo', partOfSpeech: 'Noun (n)', exampleTarget: 'దయచేసి మంచి నీళ్ళు ఇవ్వండి.', exampleTranslation: 'Please give some drinking water.', audioLanguageCode: 'te-IN' }
        ],
        sentenceBuilders: [
          { id: 'sb-te-1', promptEnglish: 'My name is Lalitha.', targetSentence: 'నా పేరు లలిత.', jumbledWords: ['పేరు', 'లలిత.', 'నా'], explanation: 'Possessive pronoun (Naa - my) + noun (peru - name) + proper noun (Lalitha).' }
        ],
        matchingPairs: [
          { target: 'నమస్కారం', english: 'Hello / Greetings' },
          { target: 'ధన్యవాదాలు', english: 'Thank you' },
          { target: 'బాగున్నారా?', english: 'How are you?' },
          { target: 'అవును', english: 'Yes' },
          { target: 'కాదు', english: 'No' }
        ],
        commonMistakes: [
          { mistake: 'Omitting the polite suffix "అండి" (andi) when speaking to strangers.', correction: 'Add "అండి" (andi) to greetings: "నమస్కారం అండి" (Namaskaram andi).', explanation: 'Adding "andi" makes any sentence polite and culturally pleasant.' }
        ],
        writingChallenge: [
          { title: 'Friendly Introduction in Telugu', prompt: 'Write 3 short sentences introducing your name, saying where you are from, and greeting respectfully.', starterHint: 'Use "నమస్కారం అండి!", "నా పేరు...", "నేను... నుండి వచ్చాను."', sampleAnswer: 'నమస్కారం అండి! నా పేరు రవి. నేను హైదరాబాద్ నుండి వచ్చాను. మీరు ఎలా ఉన్నారు?', breakdown: 'Uses polite address, possessive pronoun for name, geographic origin, and polite health inquiry.' }
        ],
        practiceExercises: [
          { question: 'Why is Telugu affectionately called the "Italian of the East"?', options: ['It uses the Roman alphabet', 'All native words end in a vowel sound', 'It originated in Europe', 'It has identical verb endings'], correctIndex: 1, explanation: 'Like Italian, native Telugu words end with a musical vowel (Ajanta bhasha).' },
          { question: 'What is the polite honorific pronoun for "You" in Telugu?', options: ['నువ్వు (Nuvvu)', 'మీరు (Meeru)', 'వాళ్ళు (Vaallu)', 'నేను (Nenu)'], correctIndex: 1, explanation: '"మీరు" (Meeru) is the respectful formal pronoun for "You".' }
        ]
      }
    ]
  }
];

export const completeTeluguCourse: LanguageCourse = {
  id: 'lang-telugu',
  name: 'Telugu',
  code: 'te',
  flag: '🇮🇳',
  speechCode: 'te-IN',
  nativeName: 'తెలుగు',
  description: 'Master Telugu from A1 beginner to C2 fluency. Covers rounded Telugu script, agglutinative noun declensions, vowel-harmonic verb stems, and conversational Telugu.',
  writingSystem: 'Telugu script (తెలుగు లిపి) - 16 vowels and 36 consonants',
  grammarHighlights: ['SOV Word Order', 'Vowel-Ending Words (Ajanta)', 'Polite Honorific Suffixes (andi)', 'Agglutinative Postpositions', 'Gender agreement (Masculine vs Non-Masculine)'],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: {
      level: 'A1',
      title: 'A1 Beginner Telugu',
      cefrDescription: 'Can understand and use familiar everyday Telugu expressions and very basic phrases to introduce themselves and interact with native speakers.',
      canDoStatements: [
        'Recognize primary circular Telugu script characters',
        'Introduce yourself politely using formal pronoun Meeru and suffix andi',
        'Ask directions, order food, and express basic needs in Telugu'
      ],
      targetVocabCount: 500,
      grammarTopicsCount: 12,
      modules: teluguA1Modules,
      assessmentExam: {
        id: 'te-a1-exam',
        title: 'Official Build Yourself CEFR A1 Telugu Proficiency Exam',
        durationMinutes: 30,
        passingScore: 70,
        questions: [
          { id: 't-q1', category: 'Vocabulary', question: 'What does "ధన్యవాదాలు" (Dhanyavaadalu) mean in Telugu?', options: ['Good morning', 'Thank you', 'Welcome', 'Excuse me'], correctIndex: 1, explanation: 'ధన్యవాదాలు means "Thank you" in Telugu.' },
          { id: 't-q2', category: 'Grammar', question: 'Which question asks "How are you?" in polite Telugu?', options: ['మీ పేరు ఏమిటి?', 'మీరు ఎలా ఉన్నారు?', 'ఎక్కడికి వెళ్తున్నారు?', 'ఏమి చేస్తున్నారు?'], correctIndex: 1, explanation: '"మీరు ఎలా ఉన్నారు?" (Meeru ela unnaru?) translates to "How are you?".' }
        ]
      }
    }
  },
  lessons: teluguA1Modules[0].lessons,
  conversationScenarios: [
    {
      id: 'sc-te-1',
      title: 'Ordering Dosa & Filter Coffee in Hyderabad / Vijayawada',
      situation: 'You are visiting a popular Tiffin center and want to order Masala Dosa and Filter Coffee.',
      partnerRole: 'Tiffin Center Server',
      samplePrompts: ['Oka masala dosa ivvandi', 'Filter coffee bagunda?', 'Bill entha ayyindi?']
    }
  ]
};
