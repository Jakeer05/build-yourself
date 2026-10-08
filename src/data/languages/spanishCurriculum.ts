import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageCourse
} from '../../types';

export const SPANISH_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can understand and use everyday Spanish expressions and basic phrases for immediate concrete needs.',
    'Can introduce oneself and others, ask and answer questions about personal details, location, and family.',
    'Can master Spanish pronunciation including the rolled "rr", inverted question marks (¿?), and the ñ letter.',
    'Can accurately navigate the two verbs for "to be": SER (identity/origin) vs ESTAR (location/state).'
  ],
  A2: [
    'Can communicate in simple and routine tasks requiring a direct exchange of information on familiar topics.',
    'Can narrate past events using the Preterite tense (Pretérito Indefinido).',
    'Can order food, navigate transportation, and handle shopping transactions across Spain and Latin America.',
    'Can use direct and indirect object pronouns (lo, la, le, me, te).'
  ],
  B1: [
    'Can understand the main points of standard input on familiar matters encountered in work, study, and leisure.',
    'Can master the contrast between Pretérito Indefinido and Pretérito Imperfecto for rich storytelling.',
    'Can use the Present Subjunctive (Subjuntivo) to express desires, doubts, and emotional reactions.',
    'Can distinguish with precision between "por" and "para".'
  ],
  B2: [
    'Can understand complex texts on concrete and abstract topics, including technical discussions.',
    'Can interact with spontaneous fluency with native speakers without strain for either party.',
    'Can use the Imperfect Subjunctive (hubiera/hubiese) and conditional sentences for hypothetical scenarios.',
    'Can formulate clear arguments explaining advantages and disadvantages.'
  ],
  C1: [
    'Can understand a wide range of demanding, longer texts and recognize implicit sociocultural meanings.',
    'Can express ideas fluently and spontaneously with natural idiomatic expressions and cultural proverbs.',
    'Can use language flexibly for professional, academic, and creative purposes.'
  ],
  C2: [
    'Can understand with ease virtually everything heard or read.',
    'Can express finer shades of meaning with native precision, idiomatic mastery, and regional nuances.'
  ]
};

export const spanishA1Modules: LanguageModule[] = [
  {
    id: 'es-a1-mod-1',
    number: 1,
    title: '01 Spanish Alphabet, Pronunciation & The Rolled "RR"',
    description: 'Master Spanish phonetics: the 5 pure vowels (a, e, i, o, u), the unique letter Ñ, soft C/Z vs hard C, and the rolled "rr".',
    level: 'A1',
    focusTopics: ['Spanish Alphabet', 'Letter Ñ', 'Rolled RR (trill)', 'Inverted Punctuation (¿? ¡!)'],
    lessons: [
      {
        id: 'es-a1-l1',
        moduleId: 'es-a1-mod-1',
        order: 1,
        title: 'Spanish Alphabet, Pure Vowels & The Letter Ñ',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Pronounce Spanish letters with pure vowels, master inverted punctuation (¿? ¡!), and articulate the letter Ñ and rolled RR.',
        conceptExplanation: 'Spanish is one of the most phonetically consistent languages in the world: what you see is almost always what you say! Spanish has 5 crisp, pure vowels (A, E, I, O, U) that NEVER change their sound regardless of word position. Unique orthographic features include the letter "Ñ" (pronounced like "ny" in "canyon") and inverted punctuation at the beginning of questions and exclamations (¿Cómo estás? ¡Excelente!).',
        whyItMatters: 'Unlike English, Spanish vowels do not glide into diphthongs. An "O" is pure [o], not [ow]. A crisp vowel pronunciation immediately distinguishes fluent learners.',
        grammarFocus: 'Spanish Phonology & Accentuation Rules (Tilde)',
        grammarExplanation: 'Written accents (la tilde: á, é, í, ó, ú) indicate where the stress falls when a word deviates from natural stress rules. They also distinguish words: "tú" (you) vs "tu" (your), "sí" (yes) vs "si" (if).',
        grammarSections: [
          {
            title: 'Key Spanish Sound Rules',
            explanation: 'Vowels and unique consonants in Spanish.',
            tables: [
              {
                headers: ['Letter / Cluster', 'IPA Sound', 'English Approximation', 'Example Word'],
                rows: [
                  ['A, E, I, O, U', '[a], [e], [i], [o], [u]', 'Pure, unglided short vowels', 'casa, perro, libro'],
                  ['Ñ / ñ', '[ɲ]', 'Like "ny" in "canyon"', 'España, niño, señor'],
                  ['LL / ll', '[ʝ] or [ʃ]', 'Like "y" in "yes" (or "sh" in Argentina)', 'tortilla, calle, llegar'],
                  ['H / h', 'Silent', 'Always silent in Spanish!', 'hola, hermano, hotel'],
                  ['J / j', '[x]', 'Strong throaty "h" like Scottish "loch"', 'jamón, jefe, junio'],
                  ['RR / r (initial)', '[r]', 'Alveolar trill (rolled tongue tip)', 'perro, rápido, guitarra']
                ]
              }
            ],
            examples: [
              { target: '¡Hola! ¿Cómo te llamas?', english: 'Hello! What is your name?', note: 'Notice inverted exclamation and question marks, silent "H" in Hola.' },
              { target: 'España es un país maravilloso.', english: 'Spain is a wonderful country.', note: 'Ñ in España, accent on país.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'la tilde y la ñ',
            phoneticIpa: '[la ˈtilde i la ˈeɲe]',
            mouthPositionTip: 'Touch tongue flat against the palate for "ñ".',
            exampleWord: 'el español',
            translation: 'the Spanish language'
          }
        ],
        dialogue: [
          { speaker: 'Profesor', text: '¡Buenos días! ¿Cómo se escribe tu nombre en español?', translation: 'Good morning! How is your name written in Spanish?' },
          { speaker: 'Mateo', text: 'Buenos días, profesor. Se escribe M-A-T-E-O.', translation: 'Good morning, professor. It is written M-A-T-E-O.' },
          { speaker: 'Profesor', text: '¡Excelente! ¿Y de dónde eres, Mateo?', translation: 'Excellent! And where are you from, Mateo?' },
          { speaker: 'Mateo', text: 'Soy de México, pero estudio en Madrid.', translation: 'I am from Mexico, but I study in Madrid.' }
        ],
        culturalNote: {
          title: 'Castilian Spanish (Ceceo) vs Latin American (Seseo)',
          content: 'In central and northern Spain (Castilian Spanish), the letters "Z" and "C" (before e and i) are pronounced like the English "th" in "think" (e.g. Barcelona = [Bar-the-lona], cerveza = [ther-ve-tha]). In Latin America and southern Spain, they are pronounced as an "s" sound (seseo). Both forms are 100% correct and universally understood!'
        },
        vocabulary: [
          {
            id: 'es-v-1',
            word: 'hola',
            translation: 'hello',
            phonetic: 'OH-lah',
            partOfSpeech: 'Greeting',
            exampleTarget: '¡Hola! ¿Cómo estás?',
            exampleTranslation: 'Hello! How are you?',
            audioLanguageCode: 'es-ES'
          },
          {
            id: 'es-v-2',
            word: 'gracias',
            translation: 'thank you',
            phonetic: 'GRAH-syahs',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Muchas gracias por tu ayuda.',
            exampleTranslation: 'Thank you very much for your help.',
            audioLanguageCode: 'es-ES'
          },
          {
            id: 'es-v-3',
            word: 'por favor',
            translation: 'please',
            phonetic: 'por fah-VOR',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Un agua por favor.',
            exampleTranslation: 'A water please.',
            audioLanguageCode: 'es-ES'
          },
          {
            id: 'es-v-4',
            word: 'el español',
            translation: 'the Spanish language',
            phonetic: 'el es-pah-NYOL',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'El español es una lengua hermosa.',
            exampleTranslation: 'Spanish is a beautiful language.',
            audioLanguageCode: 'es-ES',
            gender: 'masculine'
          },
          {
            id: 'es-v-5',
            word: 'adiós',
            translation: 'goodbye',
            phonetic: 'ah-DYOHS',
            partOfSpeech: 'Greeting',
            exampleTarget: '¡Adiós y buen viaje!',
            exampleTranslation: 'Goodbye and safe travels!',
            audioLanguageCode: 'es-ES'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-es-1',
            promptEnglish: 'Hello, what is your name please?',
            targetSentence: '¡Hola! ¿Cómo te llamas por favor?',
            jumbledWords: ['llamas', '¿Cómo', 'favor?', 'por', '¡Hola!', 'te'],
            explanation: 'Starts with greeting and inverted question mark.'
          }
        ],
        matchingPairs: [
          { target: '¡Hola!', english: 'Hello!' },
          { target: 'Muchas gracias', english: 'Thank you very much' },
          { target: 'Por favor', english: 'Please' },
          { target: '¡Adiós!', english: 'Goodbye!' },
          { target: '¿De dónde eres?', english: 'Where are you from?' }
        ],
        commonMistakes: [
          {
            mistake: 'Pronouncing the letter "H" in "hola" or "hotel".',
            correction: '"H" is always silent in Spanish: say [OH-lah], not [HOH-lah].',
            explanation: 'The letter H has no sound in modern Spanish orthography.'
          },
          {
            mistake: 'Forgetting inverted punctuation: writing "Como estas?"',
            correction: 'Always include the inverted mark: "¿Cómo estás?".',
            explanation: 'Spanish grammar requires ¿ and ¡ at the start of clauses so readers know the tone in advance.'
          }
        ],
        writingChallenge: [
          {
            title: 'Writing a Spanish Welcome Note',
            prompt: 'Write three sentences greeting someone, introducing your name, and stating where you are from with proper Spanish punctuation.',
            starterHint: 'Use "¡Hola! Me llamo...", "Soy de...", "Mucho gusto."',
            sampleAnswer: '¡Hola! Me llamo Carlos. Soy de Madrid, España. ¡Mucho gusto en conocerte!',
            breakdown: 'Uses inverted exclamation marks, reflexive llamarse, ser for origin, and polite closing.'
          }
        ],
        practiceExercises: [
          {
            question: 'How is the letter "H" pronounced in Spanish words like "hola" and "hacer"?',
            options: ['Like English "H"', 'It is completely silent', 'Like a rolled "R"', 'Like "W"'],
            correctIndex: 1,
            explanation: 'The letter "H" is strictly silent in Spanish.'
          },
          {
            question: 'How is the Spanish letter "Ñ" pronounced?',
            options: ['Like "N" in "no"', 'Like "ny" in "canyon"', 'Like "M"', 'Like "L"'],
            correctIndex: 1,
            explanation: '"Ñ" is a distinct letter pronounced as a palatal nasal [ɲ], like "ny" in "canyon".'
          },
          {
            question: 'What is the purpose of inverted question marks (¿) and exclamation marks (¡) in Spanish?',
            options: ['They are optional emojis', 'They signal the start of a question or exclamation in the sentence', 'They are only used in poetry', 'They mean negative sentences'],
            correctIndex: 1,
            explanation: 'They mark the opening boundary of a question or exclamation.'
          },
          {
            question: 'What is the difference between "tú" (with accent) and "tu" (without accent)?',
            options: ['No difference', '"tú" means "you" (subject pronoun), while "tu" means "your" (possessive)', '"tú" is plural', '"tu" is formal'],
            correctIndex: 1,
            explanation: 'The tilde differentiates the subject pronoun "tú" (you) from the possessive adjective "tu" (your).'
          },
          {
            question: 'What is the universal phrase for "Thank you very much" in Spanish?',
            options: ['De nada', 'Muchas gracias', 'Por favor', 'Lo siento'],
            correctIndex: 1,
            explanation: '"Muchas gracias" means thank you very much.'
          }
        ]
      }
    ]
  },
  {
    id: 'es-a1-mod-2',
    number: 2,
    title: '02 The Fundamental Distinction: SER vs ESTAR',
    description: 'Master the Spanish dilemma: SER (essence, identity, profession, origin, time) vs ESTAR (location, temporary states, emotions, progressive tenses).',
    level: 'A1',
    focusTopics: ['SER Conjugation (soy, eres, es...)', 'ESTAR Conjugation (estoy, estás, está...)', 'DOCTOR vs PLACE Mnemonic', 'Adjective Meaning Shifts (ser listo vs estar listo)'],
    lessons: [
      {
        id: 'es-a1-l2',
        moduleId: 'es-a1-mod-2',
        order: 1,
        title: 'Mastering SER vs ESTAR: Identity vs State',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Accurately choose between SER and ESTAR and conjugate both irregular verbs across all subject pronouns.',
        conceptExplanation: 'English has one verb "to be", but Spanish has TWO: SER and ESTAR!\n- Use SER for permanent or inherent characteristics: Description, Occupation, Characteristic, Time, Origin, Relationship (mnemonic: DOCTOR).\n- Use ESTAR for temporary conditions and location: Position, Location, Action, Condition, Emotion (mnemonic: PLACE).\nExample: "Soy de Colombia" (Origin = SER), but "Estoy en Madrid" (Location = ESTAR).',
        whyItMatters: 'Using the wrong verb changes the meaning completely! "Soy aburrido" means "I am a boring person" (inherent personality = SER), while "Estoy aburrido" means "I am currently bored" (temporary feeling = ESTAR). "Es listo" = he is clever; "Está listo" = he is ready!',
        grammarFocus: 'Conjugation Matrix of SER and ESTAR',
        grammarExplanation: 'SER: yo soy, tú eres, él/ella/usted es, nosotros somos, vosotros sois, ellos/ellas/ustedes son.\nESTAR: yo estoy, tú estás, él/ella/usted está, nosotros estamos, vosotros estáis, ellos/ellas/ustedes están.',
        grammarSections: [
          {
            title: 'SER vs ESTAR Usage Matrix',
            explanation: 'Compare the functions of both verbs.',
            tables: [
              {
                headers: ['Verb', 'Primary Usage', 'Trigger Words / Concepts', 'Example Sentence'],
                rows: [
                  ['SER', 'Identity, profession, origin, permanent trait', 'profesor, médico, de Madrid, alto, inteligente', 'Ella es ingeniera y es muy simpática.'],
                  ['SER', 'Time, date, days of the week', 'Son las tres, hoy es lunes', 'Hoy es martes, son las dos de la tarde.'],
                  ['ESTAR', 'Geographical and physical location', 'en casa, en España, cerca, lejos', 'El museo está en el centro de la ciudad.'],
                  ['ESTAR', 'Emotional and physical conditions', 'cansado, enfermo, contento, triste', 'Hoy estoy un poco cansado pero contento.']
                ]
              }
            ],
            examples: [
              { target: '¿De dónde eres? - Soy de Barcelona, pero ahora estoy en Valencia.', english: 'Where are you from? - I am from Barcelona (SER), but now I am in Valencia (ESTAR).' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'estoy cansado',
            phoneticIpa: '[esˈtoi̯ kanˈsa.ðo]',
            mouthPositionTip: 'Soft "d" in "cansado" almost sounds like a light English "th" between vowels.',
            exampleWord: 'estoy contento',
            translation: 'I am happy (state)'
          }
        ],
        dialogue: [
          { speaker: 'Elena', text: '¡Hola Javier! ¿Cómo estás hoy?', translation: 'Hello Javier! How are you today?' },
          { speaker: 'Javier', text: 'Hola Elena. Estoy muy bien, gracias. ¿Y tú? Pareces ocupada.', translation: 'Hello Elena. I am very well, thanks. And you? You seem busy.' },
          { speaker: 'Elena', text: 'Sí, es que soy estudiante de medicina y el examen final es mañana.', translation: 'Yes, it is because I am a medical student (SER) and the final exam is tomorrow (SER).' },
          { speaker: 'Javier', text: '¡Mucho ánimo! Seguro que estás muy bien preparada.', translation: 'Best of luck! I am sure you are very well prepared (ESTAR).' }
        ],
        culturalNote: {
          title: 'The Sociable "Estar de fiesta"',
          content: 'In Spanish culture, "estar" is used to describe lively temporary states: "estar de fiesta" (partying), "estar de vacaciones" (on vacation), "estar de buen humor" (in a good mood). Enjoying social life is considered essential to wellness in the Hispanic world!'
        },
        vocabulary: [
          {
            id: 'es-v-6',
            word: 'ser',
            translation: 'to be (inherent)',
            phonetic: 'sehr',
            partOfSpeech: 'Verb',
            exampleTarget: 'Yo soy programador de software.',
            exampleTranslation: 'I am a software programmer.',
            audioLanguageCode: 'es-ES'
          },
          {
            id: 'es-v-7',
            word: 'estar',
            translation: 'to be (state/location)',
            phonetic: 'es-TAHR',
            partOfSpeech: 'Verb',
            exampleTarget: 'La biblioteca está cerrada hoy.',
            exampleTranslation: 'The library is closed today.',
            audioLanguageCode: 'es-ES'
          },
          {
            id: 'es-v-8',
            word: 'feliz / contento',
            translation: 'happy',
            phonetic: 'feh-LEES / kohn-TEN-toh',
            partOfSpeech: 'Adjective',
            exampleTarget: 'Estoy muy feliz de estar en España.',
            exampleTranslation: 'I am very happy to be in Spain.',
            audioLanguageCode: 'es-ES'
          },
          {
            id: 'es-v-9',
            word: 'cansado / cansada',
            translation: 'tired',
            phonetic: 'kahn-SAH-doh',
            partOfSpeech: 'Adjective',
            exampleTarget: 'Después del trabajo estoy cansado.',
            exampleTranslation: 'After work I am tired.',
            audioLanguageCode: 'es-ES'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-es-2',
            promptEnglish: 'I am from Mexico and I am in Madrid.',
            targetSentence: 'Soy de México y estoy en Madrid.',
            jumbledWords: ['estoy', 'y', 'de', 'en', 'Madrid.', 'Soy', 'México'],
            explanation: '"Soy de México" (Origin = SER) and "estoy en Madrid" (Location = ESTAR).'
          }
        ],
        matchingPairs: [
          { target: 'Soy de España', english: 'Origin (SER)' },
          { target: 'Estoy en casa', english: 'Location (ESTAR)' },
          { target: 'Ella es médica', english: 'Profession (SER)' },
          { target: 'Él está enfermo', english: 'Condition / health (ESTAR)' },
          { target: 'Son las cuatro', english: 'Time of day (SER)' }
        ],
        commonMistakes: [
          {
            mistake: 'Saying "Soy en el hotel" for your location.',
            correction: 'Always use ESTAR for location: "Estoy en el hotel".',
            explanation: 'Location is ALWAYS expressed with ESTAR, whether temporary or permanent (e.g. "Madrid está en España").'
          },
          {
            mistake: 'Saying "Estoy profesor" for your profession.',
            correction: 'Use SER: "Soy profesor".',
            explanation: 'Professions and occupations are defined with SER in Spanish.'
          }
        ],
        writingChallenge: [
          {
            title: 'Contrast SER vs ESTAR in Your Profile',
            prompt: 'Write three sentences: one stating who you are and your profession (using SER), one stating your current location (using ESTAR), and one describing your current mood/feeling (using ESTAR).',
            starterHint: 'Use "Soy...", "Actualmente estoy en...", "Hoy estoy muy..."',
            sampleAnswer: 'Hola, soy Daniel y soy ingeniero de datos. Actualmente estoy en Barcelona para una conferencia de tecnología. Hoy estoy muy emocionado de conocer la ciudad.',
            breakdown: 'Integrates SER for identity and profession, and ESTAR for location and emotion.'
          }
        ],
        practiceExercises: [
          {
            question: 'Which verb is used to describe location in Spanish: "La universidad _____ en el centro"?',
            options: ['es', 'está', 'tiene', 'hay'],
            correctIndex: 1,
            explanation: 'Location is ALWAYS indicated by the verb ESTAR: "está en el centro".'
          },
          {
            question: 'Which verb is used for profession and origin: "Yo _____ de Perú"?',
            options: ['estoy', 'soy', 'tengo', 'hago'],
            correctIndex: 1,
            explanation: 'Origin and nationality use the verb SER: "Yo soy de Perú".'
          },
          {
            question: 'What is the meaning of "Estoy aburrido"?',
            options: ['I am a boring person', 'I am currently bored', 'I am sleepy', 'I am angry'],
            correctIndex: 1,
            explanation: '"Estoy aburrido" uses ESTAR to indicate a temporary state of boredom. "Soy aburrido" (SER) would mean you are a boring person.'
          },
          {
            question: 'What is the 1st person plural form of ESTAR?',
            options: ['somos', 'estamos', 'estáis', 'están'],
            correctIndex: 1,
            explanation: '"nosotros estamos" means "we are" (state/location).'
          },
          {
            question: 'How do you say "It is three o\'clock" in Spanish?',
            options: ['Está a las tres', 'Son las tres', 'Hay tres horas', 'Tiene tres'],
            correctIndex: 1,
            explanation: 'Telling time uses the verb SER: "Son las tres".'
          }
        ]
      }
    ]
  }
];

export const spanishA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'Spanish A1: Beginner Foundations',
  cefrDescription: 'Can understand and use familiar everyday expressions and very basic phrases for immediate concrete needs.',
  canDoStatements: SPANISH_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 650,
  grammarTopicsCount: 16,
  modules: spanishA1Modules,
  assessmentExam: {
    id: 'exam-es-a1',
    title: 'Official Build Yourself CEFR A1 Spanish Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'es-q1',
        category: 'Grammar',
        question: 'Which verb is required for permanent origin: "Nosotros _____ de Argentina"?',
        options: ['estamos', 'somos', 'tenemos', 'vivimos'],
        correctIndex: 1,
        explanation: 'Origin uses SER: "Nosotros somos de Argentina".'
      },
      {
        id: 'es-q2',
        category: 'Grammar',
        question: 'Which verb is required for physical location: "El banco _____ en la esquina"?',
        options: ['es', 'está', 'hay', 'queda de'],
        correctIndex: 1,
        explanation: 'Location uses ESTAR: "está en la esquina".'
      },
      {
        id: 'es-q3',
        category: 'Vocabulary',
        question: 'What does "muchas gracias" mean?',
        options: ['Please', 'You are welcome', 'Thank you very much', 'See you later'],
        correctIndex: 2,
        explanation: '"muchas gracias" means thank you very much.'
      },
      {
        id: 'es-q4',
        category: 'Listening',
        question: 'How is the Spanish letter "H" pronounced in "hacer" and "hola"?',
        options: ['Like English "h"', 'It is completely silent', 'Like "k"', 'Like "ch"'],
        correctIndex: 1,
        explanation: 'The letter "H" is always silent in Spanish.'
      },
      {
        id: 'es-q5',
        category: 'Reading',
        contextPassage: 'Lucía vive en Sevilla. Trabaja como diseñadora gráfica en una agencia de publicidad. Por las mañanas le gusta desayunar tostadas con tomate y aceite de oliva. Los fines de semana pasea por el río Guadalquivir.',
        question: '¿Dónde vive Lucía y a qué se dedica?',
        options: ['Vive en Madrid y es médica', 'Vive en Sevilla y es diseñadora gráfica', 'Vive en Barcelona y es camarera', 'Vive en Valencia'],
        correctIndex: 1,
        explanation: 'The text states: "Lucía vive en Sevilla. Trabaja como diseñadora gráfica."'
      }
    ]
  }
};

export const createSpanishLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return spanishA1LevelData;

  const titles: Record<CEFRLevel, string> = {
    A1: 'Spanish A1: Beginner Foundations',
    A2: 'Spanish A2: Elementary Fluency',
    B1: 'Spanish B1: Intermediate Competence',
    B2: 'Spanish B2: Upper-Intermediate Professional',
    C1: 'Spanish C1: Advanced Academic & Cultural Mastery',
    C2: 'Spanish C2: Native Literary & Dialectal Mastery'
  };

  const themes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 Pretérito Indefinido (Past Simple)', focus: 'Narrating completed past actions', grammar: 'Regular -ar/-er/-ir endings and irregulars (fui, tuve, hice)' },
      { title: '02 Pretérito Perfecto Compuesto', focus: 'Recent past actions with "haber"', grammar: 'he, has, ha, hemos, habéis, han + participio' },
      { title: '03 Direct & Indirect Object Pronouns', focus: 'Pronoun substitution in dialogue', grammar: 'me, te, lo/la, nos, os, los/las and se lo/se la' }
    ],
    B1: [
      { title: '01 Indefinido vs Imperfecto Contrast', focus: 'Mastering the storytelling past', grammar: 'Background description (imperfecto) vs sudden action (indefinido)' },
      { title: '02 Presente de Subjuntivo (Subjunctive Mood)', focus: 'Expressing wishes, doubts, and emotions', grammar: 'WEIRDO formula: que tengas, que seas, que vaya' },
      { title: '03 Por vs Para Mastery', focus: 'Cause vs purpose and destinations', grammar: 'Por (reason, duration, exchange) vs Para (destination, deadline, recipient)' }
    ],
    B2: [
      { title: '01 Imperfecto de Subjuntivo & Si-Clauses', focus: 'Hypothetical and counterfactual conditions', grammar: 'Si tuviera dinero, viajaría por el mundo' },
      { title: '02 Advanced Subjunctive Triggers', focus: 'Subjunctive in relative and concession clauses', grammar: 'aunque, a no ser que, antes de que' }
    ],
    C1: [
      { title: '01 Nuances of Style, Idioms & Regional Varieties', focus: 'Castilian vs Rioplatense vs Mexican Spanish', grammar: 'Advanced discourse markers and rhetoric' }
    ],
    C2: [
      { title: '01 Literary Precision & Dialectal Fluency', focus: 'Classical Spanish literature, law, and politics', grammar: 'Complex syntactic inversions and archaisms' }
    ]
  };

  const lvlThemes = themes[level] || themes.B1;

  const modules: LanguageModule[] = lvlThemes.map((thm, idx) => ({
    id: `es-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: thm.title,
    description: `Comprehensive ${level} Spanish module covering ${thm.focus} and ${thm.grammar}.`,
    level,
    focusTopics: [thm.focus, thm.grammar, 'Native Fluency', 'DELE Exam Preparation'],
    lessons: [
      {
        id: `es-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `es-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${thm.title} - Deep Mastery`,
        level,
        durationMinutes: 30,
        learningObjective: `Achieve fluent command of ${thm.focus} according to official CEFR ${level} / DELE standards.`,
        conceptExplanation: `At the ${level} tier of Spanish, language acquisition focuses on ${thm.focus}. You master ${thm.grammar}.`,
        whyItMatters: `Official DELE B2 and C1 diplomas from Instituto Cervantes grant lifelong accreditation for professional work and university study across Spain and Latin America.`,
        grammarFocus: thm.grammar,
        grammarExplanation: `In-depth structural breakdown of ${thm.grammar}.`,
        dialogue: [
          { speaker: 'Colega', text: '¿Has terminado el análisis para la reunión con los clientes?', translation: 'Have you finished the analysis for the client meeting?' },
          { speaker: 'Consultor', text: 'Sí, ya está todo listo. Presentaremos las conclusiones esta tarde.', translation: 'Yes, everything is already ready. We will present the conclusions this afternoon.' }
        ],
        vocabulary: [
          {
            id: `es-${level.toLowerCase()}-v1`,
            word: 'el desarrollo',
            translation: 'development',
            phonetic: 'el deh-sah-RROH-yoh',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'El desarrollo tecnológico es fundamental para el país.',
            exampleTranslation: 'Technological development is fundamental for the country.',
            audioLanguageCode: 'es-ES',
            gender: 'masculine'
          }
        ],
        practiceExercises: [
          {
            question: `Which linguistic area is the core of ${thm.title}?`,
            options: [thm.grammar, 'Basic numbers', 'English words', 'None'],
            correctIndex: 0,
            explanation: `Mastery of ${thm.grammar} is the primary objective.`
          }
        ]
      }
    ]
  }));

  return {
    level,
    title: titles[level],
    cefrDescription: SPANISH_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: SPANISH_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1200 : level === 'B1' ? 2500 : level === 'B2' ? 4500 : level === 'C1' ? 8000 : 12000,
    grammarTopicsCount: 15,
    modules,
    assessmentExam: {
      id: `exam-es-${level.toLowerCase()}`,
      title: `Official CEFR ${level} Spanish Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `es-${level}-q1`,
          category: 'Grammar',
          question: `Which structure characterizes ${level} Spanish proficiency?`,
          options: [lvlThemes[0]?.grammar || 'Advanced syntax', 'Word guessing', 'Only present tense', 'Skipping verbs'],
          correctIndex: 0,
          explanation: `Mastering ${lvlThemes[0]?.grammar || 'advanced syntax'} is required for CEFR ${level} certification.`
        }
      ]
    }
  };
};

export const completeSpanishCourse: LanguageCourse = {
  id: 'lang-spanish',
  name: 'Spanish',
  code: 'es',
  flag: '🇪🇸',
  speechCode: 'es-ES',
  nativeName: 'Español',
  description: 'Master the second most spoken native language in the world across Spain and 20 Latin American nations from A1 to C2 fluency.',
  writingSystem: 'Latin alphabet + Ñ + Inverted punctuation (¿? ¡!)',
  grammarHighlights: [
    'SER vs ESTAR Distinction (Identity vs State)',
    'Pretérito Indefinido vs Imperfecto Past Contrast',
    'Present & Imperfect Subjunctive Mood (Subjuntivo)',
    'Por vs Para Nuances',
    'Direct & Indirect Object Clitic Pronouns',
    'Subject Pronoun Dropping (Pro-drop language)'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: spanishA1LevelData,
    A2: createSpanishLevel('A2'),
    B1: createSpanishLevel('B1'),
    B2: createSpanishLevel('B2'),
    C1: createSpanishLevel('C1'),
    C2: createSpanishLevel('C2')
  },
  lessons: spanishA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'es-sc-1',
      title: 'Tapas Bar in Madrid',
      situation: 'Ordering tapas, tortilla de patatas, and drinks at a vibrant tapas bar in central Madrid.',
      partnerRole: 'Camarero madrileño (amable y rápido)',
      samplePrompts: [
        '¡Buenas tardes! ¿Tienen mesa para dos personas por favor?',
        'Para picar queremos una ración de tortilla española y unas croquetas de jamón.',
        '¿Nos trae la cuenta por favor? ¿Aceptan tarjeta?'
      ]
    }
  ]
};
