import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageLesson,
  LanguageWord,
  LanguageCourse
} from '../../types';

export const GERMAN_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.',
    'Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows, and things he/she has.',
    'Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.',
    'Can master the three grammatical genders (der, die, das) and the Nominative and Accusative cases.'
  ],
  A2: [
    'Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. basic personal and family information, shopping, local geography, employment).',
    'Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters.',
    'Can describe in simple terms aspects of his/her background, immediate environment, and matters in areas of immediate need.',
    'Can use the Dative case, two-way prepositions (Wechselpräpositionen), and the Perfekt conversational past tense.'
  ],
  B1: [
    'Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc.',
    'Can deal with most situations likely to arise whilst travelling in an area where the language is spoken.',
    'Can produce simple connected text on topics which are familiar or of personal interest.',
    'Can describe experiences, events, dreams, hopes, and ambitions, and briefly give reasons and explanations for opinions and plans.',
    'Can master subordinate clauses (weil, dass, obwohl, wenn), adjective declensions, and the Genitive case.'
  ],
  B2: [
    'Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in his/her field of specialization.',
    'Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party.',
    'Can produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.',
    'Can use Konjunktiv II for hypothetical situations, passive voice in all tenses, and complex prepositional verbs.'
  ],
  C1: [
    'Can understand a wide range of demanding, longer texts, and recognize implicit meaning.',
    'Can express him/herself fluently and spontaneously without much obvious searching for expressions.',
    'Can use language flexibly and effectively for social, academic, and professional purposes.',
    'Can formulate ideas and opinions with precision and relate contributions skillfully to those of other speakers.',
    'Can use advanced academic registers (Partizipialattribute, Nominalstil, Konjunktiv I in reported speech).'
  ],
  C2: [
    'Can understand with ease virtually everything heard or read.',
    'Can summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation.',
    'Can express him/herself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in more complex situations.'
  ]
};

// German A1 Modules with rich, non-empty lessons
export const germanA1Modules: LanguageModule[] = [
  {
    id: 'de-a1-mod-1',
    number: 1,
    title: '01 Alphabet & German Pronunciation Rules',
    description: 'Master the 26 German alphabet letters, the three Umlauts (ä, ö, ü), the Eszett (ß), and distinct sound clusters (ch, ei, ie, sp, st).',
    level: 'A1',
    focusTopics: ['Alphabet', 'Umlauts (Ä, Ö, Ü, ß)', 'Phonetics (ie vs ei, ch, sch)', 'Word Stress'],
    lessons: [
      {
        id: 'de-a1-l1',
        moduleId: 'de-a1-mod-1',
        order: 1,
        title: 'German Alphabet, Umlauts (Ä, Ö, Ü) & The Sharp S (ß)',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Correctly pronounce every letter of the German alphabet including Umlauts and diphthongs with native phonetics.',
        conceptExplanation: 'German pronunciation is highly phonetic: letters are pronounced consistently compared to English. German has 26 standard letters plus 3 Umlauts (Ä, Ö, Ü) and one ligature (ß, called "Eszett" or sharp S). The letter "W" sounds like English "V", while German "V" sounds like English "F".',
        whyItMatters: 'Precise pronunciation prevents immediate misunderstandings in Germany. For example, "schon" means "already", while "schön" means "beautiful"! Mastering Umlauts from day one builds genuine native credibility.',
        grammarFocus: 'Phonology, Umlauts & Capitalization Rules (All German nouns are capitalized!)',
        grammarExplanation: 'Capitalization Rule: In German, EVERY NOUN is capitalized regardless of its position in the sentence (e.g., der Mann, das Buch, die Zeit). Umlauts alter vowel sounds: Ä sounds like the "e" in "bed", Ö is made by rounding lips while saying "ay", and Ü is made by rounding lips while saying "ee".',
        grammarSections: [
          {
            title: 'Critical German Letter Sounds',
            explanation: 'Notice how German consonants differ from English counter-parts.',
            tables: [
              {
                headers: ['Letter / Cluster', 'German IPA Sound', 'English Equivalent', 'Example Word'],
                rows: [
                  ['W', '[v]', 'Sounds like "V" in "vine"', 'Wasser (water)'],
                  ['V', '[f]', 'Sounds like "F" in "father"', 'Vater (father)'],
                  ['J', '[j]', 'Sounds like "Y" in "yes"', 'Ja (yes)'],
                  ['Z', '[ts]', 'Sounds like "ts" in "cats"', 'Zug (train)'],
                  ['EI', '[aɪ]', 'Sounds like "eye" / "pie"', 'nein (no), mein (my)'],
                  ['IE', '[iː]', 'Sounds like "ee" in "bee"', 'sie (she/they), Bier (beer)'],
                  ['CH (ich-Laut)', '[ç]', 'Soft hiss after e, i, ä, ö, ü', 'ich (I), nicht (not)'],
                  ['CH (ach-Laut)', '[x]', 'Throat sound after a, o, u, au', 'Buch (book), machen (to do)']
                ]
              }
            ],
            examples: [
              { target: 'Guten Tag, wie geht es Ihnen?', english: 'Good day, how are you? (formal)', note: 'W in "wie" sounds like "V"' },
              { target: 'Ich trinke ein kühles Bier.', english: 'I am drinking a cool beer.', note: 'Notice "ich" (ich-Laut), "kühles" (Ü rounded lips), and "Bier" (ie = ee)' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'Ä / ä',
            phoneticIpa: '[ɛː]',
            mouthPositionTip: 'Open mouth like saying "eh" in "bed", hold lips unrounded.',
            exampleWord: 'die Äpfel',
            translation: 'the apples'
          },
          {
            soundOrPhrase: 'Ö / ö',
            phoneticIpa: '[øː]',
            mouthPositionTip: 'Form your lips into an "O" shape, but say the vowel "ay".',
            exampleWord: 'schön',
            translation: 'beautiful'
          },
          {
            soundOrPhrase: 'Ü / ü',
            phoneticIpa: '[yː]',
            mouthPositionTip: 'Form your lips as if to whistle, and make the sound "ee".',
            exampleWord: 'über',
            translation: 'over / about'
          },
          {
            soundOrPhrase: 'ß (Eszett)',
            phoneticIpa: '[s]',
            mouthPositionTip: 'Pronounced as a sharp, unvoiced "ss". Always preceded by long vowels or diphthongs.',
            exampleWord: 'die Straße',
            translation: 'the street'
          }
        ],
        dialogue: [
          { speaker: 'Lehrerin', text: 'Guten Morgen! Buchstabieren Sie bitte Ihren Namen.', translation: 'Good morning! Please spell your name.' },
          { speaker: 'Markus', text: 'Guten Morgen! M-A-R-K-U-S, Markus.', translation: 'Good morning! M-A-R-K-U-S, Markus.' },
          { speaker: 'Lehrerin', text: 'Sehr gut! Und wie spricht man das "Z" in "Zürich" aus?', translation: 'Very good! And how does one pronounce the "Z" in "Zürich"?' },
          { speaker: 'Markus', text: 'Wie ein "ts" auf Deutsch: [tsyy-rɪç]!', translation: 'Like a "ts" in German: [tsyy-rɪç]!' }
        ],
        culturalNote: {
          title: 'Capitalization & Swiss German Difference',
          content: 'In standard German (Germany & Austria), the letter ß is used after long vowels (Groß, Straße). In Switzerland and Liechtenstein, ß is not used; they write "ss" instead (Gross, Strasse). Furthermore, never write a German noun in lower case—it is considered an orthographic error in German culture and academia!'
        },
        vocabulary: [
          {
            id: 'de-v-1',
            word: 'das Alphabet',
            translation: 'the alphabet',
            phonetic: 'dahs ahl-fah-BEHT',
            partOfSpeech: 'Noun (n)',
            exampleTarget: 'Das deutsche Alphabet hat 26 Buchstaben und 3 Umlaute.',
            exampleTranslation: 'The German alphabet has 26 letters and 3 umlauts.',
            audioLanguageCode: 'de-DE',
            gender: 'das'
          },
          {
            id: 'de-v-2',
            word: 'buchstabieren',
            translation: 'to spell',
            phonetic: 'bookh-shtah-BEE-ren',
            partOfSpeech: 'Verb',
            exampleTarget: 'Können Sie das bitte buchstabieren?',
            exampleTranslation: 'Could you please spell that?',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-3',
            word: 'der Name',
            translation: 'the name',
            phonetic: 'dehr NAH-meh',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'Mein Name ist Lukas Weber.',
            exampleTranslation: 'My name is Lukas Weber.',
            audioLanguageCode: 'de-DE',
            gender: 'der'
          },
          {
            id: 'de-v-4',
            word: 'die Aussprache',
            translation: 'the pronunciation',
            phonetic: 'dee OWS-shrpah-kheh',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Die deutsche Aussprache ist sehr logisch.',
            exampleTranslation: 'German pronunciation is very logical.',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-5',
            word: 'schön',
            translation: 'beautiful / nice',
            phonetic: 'shøhn',
            partOfSpeech: 'Adjective',
            exampleTarget: 'Heute ist ein schöner Tag in Berlin.',
            exampleTranslation: 'Today is a beautiful day in Berlin.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-6',
            word: 'die Straße',
            translation: 'the street',
            phonetic: 'dee SHTRAH-seh',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Ich wohne in der Goethestraße.',
            exampleTranslation: 'I live in Goethe Street.',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-de-1',
            promptEnglish: 'Could you please spell your name?',
            targetSentence: 'Können Sie bitte Ihren Namen buchstabieren?',
            jumbledWords: ['Ihren', 'Können', 'buchstabieren?', 'bitte', 'Namen', 'Sie'],
            explanation: 'German questions inverted verb first: "Können Sie...", and the infinitive verb "buchstabieren" goes to the very end of the clause.'
          }
        ],
        matchingPairs: [
          { target: 'Wasser', english: 'Water' },
          { target: 'Zug', english: 'Train' },
          { target: 'schön', english: 'Beautiful' },
          { target: 'die Straße', english: 'Street' },
          { target: 'buchstabieren', english: 'To spell' }
        ],
        commonMistakes: [
          {
            mistake: 'Pronouncing German "W" like English "water" (double-u).',
            correction: 'Pronounce "W" like English "V" (Wasser = Vah-ser).',
            explanation: 'The German "W" is a voiced labiodental fricative [v]. English "V" on the other hand is pronounced like [f] (Vater = Fah-ter).'
          },
          {
            mistake: 'Writing nouns in lower case: "ich habe ein buch".',
            correction: 'Always capitalize nouns: "Ich habe ein Buch".',
            explanation: 'All German nouns, both abstract and concrete, MUST start with a capital letter.'
          }
        ],
        writingChallenge: [
          {
            title: 'Spelling Your Identity in German',
            prompt: 'Write two sentences introducing yourself, spelling your first name letter-by-letter in German phonetics, and specifying your city.',
            starterHint: 'Start with "Ich heiße..." then "Das buchstabiert man..."',
            sampleAnswer: 'Ich heiße Elena. Das buchstabiert man E-L-E-N-A. Ich wohne in München.',
            breakdown: 'Uses regular verb heißen, capitalization of city München with Umlaut, and wohnen (to reside).'
          }
        ],
        practiceExercises: [
          {
            question: 'How is the German letter "W" pronounced?',
            options: ['Like English "W" in "water"', 'Like English "V" in "voice"', 'Like English "B" in "boy"', 'It is silent'],
            correctIndex: 1,
            explanation: 'In German, "W" is pronounced as [v], exactly like the English "V".'
          },
          {
            question: 'Which of the following words means "beautiful" with an Umlaut?',
            options: ['schon', 'schön', 'schein', 'schenken'],
            correctIndex: 1,
            explanation: '"schön" means beautiful with the Ö sound. "schon" without an umlaut means "already".'
          },
          {
            question: 'What is the grammatical rule regarding nouns in German?',
            options: ['Only proper names are capitalized', 'All nouns are capitalized everywhere in a sentence', 'Nouns are capitalized only at the start of a sentence', 'Nouns are never capitalized'],
            correctIndex: 1,
            explanation: 'Every noun in the German language (der Tisch, die Lampe, das Haus) must be capitalized.'
          },
          {
            question: 'How is the combination "IE" (as in "Bier" or "sie") pronounced in German?',
            options: ['Like the "eye" sound in "pie"', 'Like a long "ee" sound in "bee"', 'Like "ay" in "say"', 'Like "oh" in "go"'],
            correctIndex: 1,
            explanation: 'In German, "IE" makes a long [iː] sound ("ee"). Remember: the second letter tells you the sound! In "EI", the "I" makes the "eye" sound.'
          },
          {
            question: 'Where is the letter "ß" (Eszett) traditionally replaced with "ss"?',
            options: ['In Berlin', 'In Vienna, Austria', 'In Switzerland and Liechtenstein', 'In Bavaria'],
            correctIndex: 2,
            explanation: 'Switzerland and Liechtenstein completely replaced "ß" with "ss" in their official spelling standard.'
          }
        ]
      }
    ]
  },
  {
    id: 'de-a1-mod-2',
    number: 2,
    title: '02 Greetings, Introductions & Formal vs Informal',
    description: 'Learn authentic German greetings, introductions, introducing others, and the crucial distinction between formal "Sie" and informal "du".',
    level: 'A1',
    focusTopics: ['Guten Tag / Hallo', 'Formal "Sie" vs Informal "du"', 'Verb "heißen" & "sein"', 'Introducing Others'],
    lessons: [
      {
        id: 'de-a1-l2',
        moduleId: 'de-a1-mod-2',
        order: 1,
        title: 'Greetings & The Golden Rule: "Sie" vs "du"',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Confidently greet strangers, colleagues, and friends, and introduce yourself using formal "Sie" and informal "du".',
        conceptExplanation: 'German has two distinct ways of addressing people: the formal "Sie" (always capitalized) and the informal "du". Use "Sie" with adults you do not know, business partners, professors, store clerks, and officials. Use "du" with family, friends, children, and fellow university students.',
        whyItMatters: 'Using "du" with an authority figure, stranger, or police officer can be considered rude and in extreme situations is technically an offense ("Beleidigung"). Knowing when to switch to "du" is an essential social skill in the DACH region.',
        grammarFocus: 'Subject Pronouns & Present Tense Verb Conjugation (heißen, sein, kommen)',
        grammarExplanation: 'Regular German verbs conjugate with the endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, Sie/sie -en. The irregular verb "sein" (to be) conjugates as: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, Sie sind.',
        grammarSections: [
          {
            title: 'Conjugation of Core Introduction Verbs',
            explanation: 'Observe how the endings change based on who is performing the action.',
            tables: [
              {
                headers: ['Pronoun', 'heißen (to be named)', 'sein (to be)', 'kommen (to come)', 'wohnen (to reside)'],
                rows: [
                  ['ich (I)', 'heiße', 'bin', 'komme', 'wohne'],
                  ['du (you informal)', 'heißt', 'bist', 'kommst', 'wohnst'],
                  ['er/sie/es (he/she/it)', 'heißt', 'ist', 'kommt', 'wohnt'],
                  ['wir (we)', 'heißen', 'sind', 'kommen', 'wohnen'],
                  ['ihr (you all informal)', 'heißt', 'seid', 'kommt', 'wohnt'],
                  ['Sie / sie (You formal / they)', 'heißen', 'sind', 'kommen', 'wohnen']
                ]
              }
            ],
            examples: [
              { target: 'Wie heißen Sie? - Ich heiße Maximilian.', english: 'What is your name? (formal) - My name is Maximilian.' },
              { target: 'Wie heißt du? - Ich heiße Sarah.', english: 'What is your name? (informal) - My name is Sarah.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'Guten Tag',
            phoneticIpa: '[ˌɡuːtn̩ ˈtaːk]',
            mouthPositionTip: 'Short crisp "g", the "g" at the end of "Tag" sounds like a sharp "k".',
            exampleWord: 'Guten Tag',
            translation: 'Good day / Hello'
          },
          {
            soundOrPhrase: 'Auf Wiedersehen',
            phoneticIpa: '[aʊ̯f ˈviːdɐˌzeːən]',
            mouthPositionTip: 'W sounds like "v", the "r" at the end is vocalized like a soft "ah".',
            exampleWord: 'Auf Wiedersehen',
            translation: 'Goodbye (formal)'
          }
        ],
        dialogue: [
          { speaker: 'Herr Schmidt', text: 'Guten Tag! Mein Name ist Thomas Schmidt. Freut mich, Sie kennenzulernen.', translation: 'Good day! My name is Thomas Schmidt. Pleased to meet you.' },
          { speaker: 'Frau Bauer', text: 'Guten Tag, Herr Schmidt. Ich bin Julia Bauer. Woher kommen Sie?', translation: 'Good day, Mr. Schmidt. I am Julia Bauer. Where do you come from?' },
          { speaker: 'Herr Schmidt', text: 'Ich komme aus Frankfurt, aber ich wohne und arbeite jetzt in Berlin. Und Sie?', translation: 'I come from Frankfurt, but I now live and work in Berlin. And you?' },
          { speaker: 'Frau Bauer', text: 'Ich komme aus Wien in Österreich.', translation: 'I come from Vienna in Austria.' }
        ],
        culturalNote: {
          title: 'The Handshake & Eye Contact',
          content: 'In Germany, a firm handshake with direct eye contact is the standard greeting in professional and formal settings. Addressing someone by "Herr" (Mr.) or "Frau" (Ms.) followed by their surname is standard until they explicitly offer the "Du-Wort" ("Wir können uns duzen!").'
        },
        vocabulary: [
          {
            id: 'de-v-7',
            word: 'Guten Morgen',
            translation: 'Good morning',
            phonetic: 'GOO-ten MOR-gen',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Guten Morgen, Frau Müller!',
            exampleTranslation: 'Good morning, Ms. Müller!',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-8',
            word: 'Guten Abend',
            translation: 'Good evening',
            phonetic: 'GOO-ten AH-bent',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Guten Abend allerseits!',
            exampleTranslation: 'Good evening everyone!',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-9',
            word: 'Auf Wiedersehen',
            translation: 'Goodbye (formal)',
            phonetic: 'owf VEE-der-zay-en',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Auf Wiedersehen und schönen Feierabend!',
            exampleTranslation: 'Goodbye and have a nice evening!',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-10',
            word: 'Tschüss',
            translation: 'Bye (informal)',
            phonetic: 'tchooss',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Tschüss, bis morgen!',
            exampleTranslation: 'Bye, see you tomorrow!',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-11',
            word: 'freut mich',
            translation: 'pleased to meet you',
            phonetic: 'froyt mikh',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Freut mich sehr, Sie kennenzulernen.',
            exampleTranslation: 'Very pleased to meet you.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-12',
            word: 'Wie geht es Ihnen?',
            translation: 'How are you? (formal)',
            phonetic: 'vee gayt es EE-nen',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Guten Tag, Herr Weber, wie geht es Ihnen?',
            exampleTranslation: 'Good day, Mr. Weber, how are you?',
            audioLanguageCode: 'de-DE'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-de-2',
            promptEnglish: 'I come from Germany and I live in Berlin.',
            targetSentence: 'Ich komme aus Deutschland und ich wohne in Berlin.',
            jumbledWords: ['wohne', 'Ich', 'und', 'Deutschland', 'in', 'komme', 'aus', 'Berlin.', 'ich'],
            explanation: 'Verb "komme" takes the 2nd position in clause 1, and "wohne" takes 2nd position in clause 2.'
          }
        ],
        matchingPairs: [
          { target: 'Guten Morgen', english: 'Good morning' },
          { target: 'Guten Abend', english: 'Good evening' },
          { target: 'Auf Wiedersehen', english: 'Goodbye (formal)' },
          { target: 'Tschüss', english: 'Bye (informal)' },
          { target: 'Wie geht es dir?', english: 'How are you? (informal)' }
        ],
        commonMistakes: [
          {
            mistake: 'Saying "Wie geht es Sie?" to be formal.',
            correction: 'Use "Wie geht es Ihnen?" (Dative pronoun).',
            explanation: 'The German expression literally means "How goes it to you?", requiring the Dative case "Ihnen" (formal) or "dir" (informal).'
          },
          {
            mistake: 'Addressing a German professor or landlord as "du".',
            correction: 'Always address them as "Sie" and "Herr/Frau [Surname]".',
            explanation: 'Using "du" prematurely crosses professional boundaries in German culture.'
          }
        ],
        writingChallenge: [
          {
            title: 'Formal Professional Self-Introduction',
            prompt: 'Write a 3-sentence introduction introducing yourself to a prospective German employer or university professor.',
            starterHint: 'Include your name, country of origin, and field of study or work.',
            sampleAnswer: 'Sehr geehrte Damen und Herren, mein Name ist Alex Kumar. Ich komme aus Indien und wohne in München. Ich bin Softwareentwickler und lerne Deutsch für mein Masterstudium.',
            breakdown: 'Demonstrates professional salutation, verb conjugation with "ich", and prepositions "aus" (origin) and "in" (location).'
          }
        ],
        practiceExercises: [
          {
            question: 'When should you address someone with the formal "Sie" in Germany?',
            options: ['With children and family', 'With close friends at the gym', 'With strangers, university professors, doctors, and business contacts', 'Never, modern German only uses du'],
            correctIndex: 2,
            explanation: 'Formal "Sie" is mandatory in professional, academic, and public interactions with adult strangers.'
          },
          {
            question: 'What is the correct 1st person singular form of the verb "sein" (to be)?',
            options: ['Ich bist', 'Ich ist', 'Ich bin', 'Ich sind'],
            correctIndex: 2,
            explanation: '"ich bin" means "I am". "du bist" is you are (informal), "er/sie/es ist" is he/she/it is.'
          },
          {
            question: 'How do you ask "Where do you come from?" formally?',
            options: ['Woher kommst du?', 'Woher kommen Sie?', 'Wo wohnen Sie?', 'Wer bist du?'],
            correctIndex: 1,
            explanation: '"Woher kommen Sie?" uses the formal pronoun "Sie" and the conjugated verb "kommen".'
          },
          {
            question: 'How do you answer "Wie geht es Ihnen?" positively in German?',
            options: ['Sehr schlecht, danke.', 'Mir geht es gut, danke!', 'Ich bin gut, danke!', 'Nicht so gut.'],
            correctIndex: 1,
            explanation: 'In German you say "Mir geht es gut" (It goes well to me). Saying "Ich bin gut" colloquially means "I am skilled at something" or can sound bizarre.'
          },
          {
            question: 'Which word is the informal goodbye equivalent to "bye"?',
            options: ['Auf Wiedersehen', 'Guten Abend', 'Tschüss', 'Bis gleich'],
            correctIndex: 2,
            explanation: '"Tschüss" is the universal informal goodbye among friends, peers, and casual encounters.'
          }
        ]
      }
    ]
  },
  {
    id: 'de-a1-mod-3',
    number: 3,
    title: '03 Numbers, Counting, Telling Time & Prices',
    description: 'Master German cardinal numbers (0-1,000,000), telephone numbers, telling time (official 24h & colloquial 12h), and asking for prices in Euros.',
    level: 'A1',
    focusTopics: ['Numbers 0-100', 'Inverted Numbers (einundzwanzig)', 'Official & Colloquial Time', 'Euros & Cents'],
    lessons: [
      {
        id: 'de-a1-l3',
        moduleId: 'de-a1-mod-3',
        order: 1,
        title: 'German Numbers (0-100) & Telling Time',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Count from 0 to 100, master the reversed two-digit number logic (ones before tens), and tell the exact time in both official and colloquial German.',
        conceptExplanation: 'German numbers from 21 to 99 are pronounced "backwards" compared to English! You say the ones first, followed by "und" (and), then the tens. For example: 21 is "einundzwanzig" (one-and-twenty), 45 is "fünfundvierzig" (five-and-forty). Telling time uses "Uhr": "Es ist acht Uhr" (It is 8 o\'clock).',
        whyItMatters: 'Train schedules (Deutsche Bahn), appointments (Termine), prices, and flight times rely on exact number comprehension. Mishearing "einundzwanzig" (21) as "zwölf" (12) can mean missing an important lecture or meeting!',
        grammarFocus: 'Cardinal Numbers & Time Prepositions (um, am, im)',
        grammarExplanation: 'Time prepositions in German: use "um" for clock times ("um 14:30 Uhr"), "am" for days and dates ("am Montag", "am Wochenende"), and "im" for months and seasons ("im Juli", "im Sommer").',
        grammarSections: [
          {
            title: 'Two-Digit German Number Pattern',
            explanation: 'Ones digit + "und" + Tens digit.',
            tables: [
              {
                headers: ['Number', 'German', 'Literal Meaning', 'Pronunciation Tip'],
                rows: [
                  ['20', 'zwanzig', 'twenty', 'tsvahn-tsikh'],
                  ['21', 'einundzwanzig', 'one-and-twenty', 'eyn-oont-TSVAHN-tsikh'],
                  ['22', 'zweiundzwanzig', 'two-and-twenty', 'tsvay-oont-TSVAHN-tsikh'],
                  ['30', 'dreißig', 'thirty', 'DRY-sikh (note ß!)'],
                  ['40', 'vierzig', 'forty', 'FEER-tsikh'],
                  ['50', 'fünfzig', 'fifty', 'FOONF-tsikh'],
                  ['100', 'hundert / einhundert', 'one hundred', 'HOON-dert']
                ]
              }
            ],
            examples: [
              { target: 'Wie viel kostet das? - Das kostet neunundfünfzig Euro.', english: 'How much does that cost? - That costs 59 Euros (nine-and-fifty).' },
              { target: 'Der Zug fährt um Viertel nach acht ab.', english: 'The train departs at a quarter past eight (08:15).' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'zwanzig',
            phoneticIpa: '[ˈtsvantsɪç]',
            mouthPositionTip: 'Start with crisp "ts", end with soft "ich-Laut" (-ig at the end in standard German sounds like -ich).',
            exampleWord: 'zwanzig',
            translation: 'twenty'
          },
          {
            soundOrPhrase: 'Viertel',
            phoneticIpa: '[ˈfɪʁtl̩]',
            mouthPositionTip: 'V sounds like "F", short "i".',
            exampleWord: 'Viertel vor drei',
            translation: 'quarter to three'
          }
        ],
        dialogue: [
          { speaker: 'Kunde', text: 'Entschuldigung, wie viel Uhr ist es bitte?', translation: 'Excuse me, what time is it please?' },
          { speaker: 'Passant', text: 'Es ist genau zehn Uhr fünfzehn (Viertel nach zehn).', translation: 'It is exactly 10:15 (quarter past ten).' },
          { speaker: 'Kunde', text: 'Vielen Dank! Und wann kommt der nächste Bus nach München?', translation: 'Thank you very much! And when does the next bus to Munich arrive?' },
          { speaker: 'Passant', text: 'Der Bus kommt um elf Uhr fünfundvierzig.', translation: 'The bus arrives at 11:45.' }
        ],
        culturalNote: {
          title: 'German Punctuality (Pünktlichkeit)',
          content: 'Punctuality in Germany is not merely a courtesy; it is taken very seriously. Arriving 5 minutes early for a professional appointment, job interview, or doctor\'s visit ("Termin") is expected. 15 minutes late without calling ahead is seen as disrespectful.'
        },
        vocabulary: [
          {
            id: 'de-v-13',
            word: 'die Uhrzeit',
            translation: 'the clock time',
            phonetic: 'dee OOR-tsyt',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Wie ist die genaue Uhrzeit?',
            exampleTranslation: 'What is the exact time?',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-14',
            word: 'halb',
            translation: 'half past / half to',
            phonetic: 'hahlp',
            partOfSpeech: 'Adverb',
            exampleTarget: 'Es ist halb drei (14:30 Uhr).',
            exampleTranslation: 'It is half past two (German: half towards 3!).',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-15',
            word: 'Viertel nach',
            translation: 'quarter past',
            phonetic: 'FEER-tel nahkh',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Der Film beginnt um Viertel nach acht.',
            exampleTranslation: 'The movie begins at a quarter past eight.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-16',
            word: 'kosten',
            translation: 'to cost',
            phonetic: 'KOS-ten',
            partOfSpeech: 'Verb',
            exampleTarget: 'Wie viel kostet die Fahrkarte nach Hamburg?',
            exampleTranslation: 'How much does the ticket to Hamburg cost?',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-17',
            word: 'der Euro',
            translation: 'the euro',
            phonetic: 'dehr OY-roh',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'Das macht zusammen zweiundvierzig Euro.',
            exampleTranslation: 'That comes to forty-two euros in total.',
            audioLanguageCode: 'de-DE',
            gender: 'der'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-de-3',
            promptEnglish: 'The meeting begins at half past ten.',
            targetSentence: 'Das Treffen beginnt um halb elf.',
            jumbledWords: ['halb', 'Das', 'um', 'Treffen', 'elf.', 'beginnt'],
            explanation: 'Remember: In German, "halb elf" means half an hour before eleven (10:30).'
          }
        ],
        matchingPairs: [
          { target: 'einundzwanzig', english: '21' },
          { target: 'fünfundvierzig', english: '45' },
          { target: 'halb acht', english: '7:30' },
          { target: 'Viertel nach neun', english: '9:15' },
          { target: 'dreißig', english: '30' }
        ],
        commonMistakes: [
          {
            mistake: 'Interpreting "halb vier" as 4:30.',
            correction: '"halb vier" in German means 3:30 (halfway towards 4!).',
            explanation: 'German looks forward to the upcoming hour: halb vier = half an hour until four = 3:30.'
          },
          {
            mistake: 'Saying "zwanzigein" instead of "einundzwanzig".',
            correction: 'Always say ones first: ein-und-zwanzig.',
            explanation: 'German strictly orders compound numbers as digit + und + tens.'
          }
        ],
        writingChallenge: [
          {
            title: 'Scheduling a German Appointment',
            prompt: 'Write an email snippet stating that you have an appointment on Thursday at 14:30 and that your phone number is 0176-458921.',
            starterHint: 'Use "Ich habe einen Termin am..." and "Meine Telefonnummer ist..."',
            sampleAnswer: 'Ich habe einen Termin am Donnerstag um halb drei (14:30 Uhr). Meine Telefonnummer ist null-eins-sieben-sechs, fünfundvierzig, neunundachtzig, einundzwanzig.',
            breakdown: 'Practices preposition "am" with days, "um" with time, German inverted number pronunciation, and telephone digits.'
          }
        ],
        practiceExercises: [
          {
            question: 'How do you say the number 53 in German?',
            options: ['fünfzigdrei', 'dreiundfünfzig', 'dreiunddreißig', 'fünfunddreißig'],
            correctIndex: 1,
            explanation: 'The ones come first: 3 (drei) + und + 50 (fünfzig) = dreiundfünfzig.'
          },
          {
            question: 'What time is "halb acht" in colloquial German?',
            options: ['8:30', '7:30', '8:15', '7:45'],
            correctIndex: 1,
            explanation: '"halb acht" means halfway to eight, which is 7:30.'
          },
          {
            question: 'Which preposition is used for specific clock times (e.g. 15:00 Uhr)?',
            options: ['am', 'im', 'um', 'an'],
            correctIndex: 2,
            explanation: '"um" is used for clock times: "um 15:00 Uhr". "am" is for days, "im" is for months.'
          },
          {
            question: 'How do you ask "How much does that cost?" in German?',
            options: ['Wie viel Uhr ist es?', 'Wie viel kostet das?', 'Wo ist der Preis?', 'Was bist du?'],
            correctIndex: 1,
            explanation: '"Wie viel kostet das?" is the standard phrase to inquire about prices in Germany.'
          },
          {
            question: 'How is the number 30 spelled in German?',
            options: ['dreizig', 'dreißig', 'dreizehn', 'drittzig'],
            correctIndex: 1,
            explanation: 'Unlike 20 (zwanzig) and 40 (vierzig), 30 is spelled with "ß" (dreißig).'
          }
        ]
      }
    ]
  },
  {
    id: 'de-a1-mod-4',
    number: 4,
    title: '04 The German Gender & Case Core: der, die, das & Akkusativ',
    description: 'Master the 3 German genders (der, die, das), the indefinite articles (ein, eine, ein), and the Accusative case (den, einen) for direct objects.',
    level: 'A1',
    focusTopics: ['Der, Die, Das', 'Ein, Eine, Ein', 'Akkusativ Case', 'Direct Objects (den/einen)', 'Negation (kein/nicht)'],
    lessons: [
      {
        id: 'de-a1-l4',
        moduleId: 'de-a1-mod-4',
        order: 1,
        title: 'Mastering Gender (der/die/das) & The Accusative Case',
        level: 'A1',
        durationMinutes: 30,
        learningObjective: 'Identify grammatical gender of German nouns and decline articles accurately in both the Nominative and Accusative cases.',
        conceptExplanation: 'German has three genders: masculine (der), feminine (die), and neuter (das). When a noun is the direct object of a sentence (the thing receiving the action), it enters the ACCUSATIVE case (Akkusativ). The golden rule: ONLY the masculine changes in the Accusative! "der" becomes "den", and "ein" becomes "einen". Feminine, neuter, and plural stay identical!',
        whyItMatters: 'Case confusion is the #1 reason foreigners speak broken German. If you say "Ich habe ein Hund", native speakers instantly notice the error. With the Accusative rule, you say: "Ich habe EINEN Hund" (masculine direct object).',
        grammarFocus: 'Nominative vs Accusative Article Declension Table',
        grammarExplanation: 'Nominative = Subject (who is doing the action). Accusative = Direct Object (who/what is being acted upon). Example: "Der Mann (Nom) kauft den Computer (Akk)."\n\nNegation: Use "nicht" to negate verbs, adjectives, or adverbs. Use "kein / keine / keinen" to negate nouns with indefinite articles or no article ("Ich habe keinen Hunger").',
        grammarSections: [
          {
            title: 'German Definite & Indefinite Article Declension (Nom & Akk)',
            explanation: 'Notice how only the Masculine column changes in the Accusative case!',
            tables: [
              {
                headers: ['Case', 'Masculine (m)', 'Feminine (f)', 'Neuter (n)', 'Plural (pl)'],
                rows: [
                  ['Nominative Definite', 'der Mann', 'die Frau', 'das Kind', 'die Leute'],
                  ['Nominative Indefinite', 'ein Mann', 'eine Frau', 'ein Kind', 'keine Leute'],
                  ['Accusative Definite', 'den Mann (changes!)', 'die Frau', 'das Kind', 'die Leute'],
                  ['Accusative Indefinite', 'einen Mann (changes!)', 'eine Frau', 'ein Kind', 'keine Leute']
                ]
              }
            ],
            examples: [
              { target: 'Der Student liest das Buch.', english: 'The student reads the book.', note: 'der Student (Nom), das Buch (Akk Neuter, no change)' },
              { target: 'Ich suche den Bahnhof und einen Geldautomaten.', english: 'I am looking for the train station and an ATM.', note: 'den Bahnhof (Akk m), einen Geldautomaten (Akk m)' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'einen',
            phoneticIpa: '[ˈaɪ̯nən]',
            mouthPositionTip: 'Smooth two syllables: "eye-nen".',
            exampleWord: 'einen Kaffee',
            translation: 'a coffee (acc)'
          }
        ],
        dialogue: [
          { speaker: 'Kellner', text: 'Guten Tag! Was möchten Sie bestellen?', translation: 'Good day! What would you like to order?' },
          { speaker: 'Gast', text: 'Ich nehme einen Kaffee und ein Stück Apfelkuchen, bitte.', translation: 'I take a coffee (acc m) and a piece of apple pie (acc n), please.' },
          { speaker: 'Kellner', text: 'Sehr gerne. Möchten Sie auch ein Mineralwasser?', translation: 'Very gladly. Would you also like a mineral water?' },
          { speaker: 'Gast', text: 'Nein danke, ich brauche kein Wasser.', translation: 'No thanks, I need no water.' }
        ],
        culturalNote: {
          title: 'Remembering Noun Gender in German',
          content: 'Never learn a German noun in isolation! Always learn the noun together with its definite article and its plural form: "der Tisch, die Tische" (the table, tables), "das Buch, die Bücher" (the book, books). A great learning technique is color coding: Blue for masculine (der), Red for feminine (die), Green for neuter (das).'
        },
        vocabulary: [
          {
            id: 'de-v-18',
            word: 'der Kaffee',
            translation: 'the coffee',
            phonetic: 'dehr KAH-feh',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'Ich trinke jeden Morgen einen Kaffee.',
            exampleTranslation: 'I drink a coffee every morning.',
            audioLanguageCode: 'de-DE',
            gender: 'der'
          },
          {
            id: 'de-v-19',
            word: 'der Computer',
            translation: 'the computer',
            phonetic: 'dehr kohm-PYOO-ter',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'Der Entwickler kauft einen schnellen Computer.',
            exampleTranslation: 'The developer buys a fast computer.',
            audioLanguageCode: 'de-DE',
            gender: 'der'
          },
          {
            id: 'de-v-20',
            word: 'das Buch',
            translation: 'the book',
            phonetic: 'dahs BOOKH',
            partOfSpeech: 'Noun (n)',
            exampleTarget: 'Er liest ein interessantes Buch über KI.',
            exampleTranslation: 'He reads an interesting book about AI.',
            audioLanguageCode: 'de-DE',
            gender: 'das'
          },
          {
            id: 'de-v-21',
            word: 'die Tasche',
            translation: 'the bag / bag',
            phonetic: 'dee TAH-sheh',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Wo ist meine Tasche?',
            exampleTranslation: 'Where is my bag?',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-22',
            word: 'brauchen',
            translation: 'to need',
            phonetic: 'BROW-khen',
            partOfSpeech: 'Verb',
            exampleTarget: 'Ich brauche einen neuen Reisepass.',
            exampleTranslation: 'I need a new passport.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-23',
            word: 'haben',
            translation: 'to have',
            phonetic: 'HAH-ben',
            partOfSpeech: 'Verb',
            exampleTarget: 'Haben Sie einen Moment Zeit?',
            exampleTranslation: 'Do you have a moment of time?',
            audioLanguageCode: 'de-DE'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-de-4',
            promptEnglish: 'I am buying a new computer today.',
            targetSentence: 'Ich kaufe heute einen neuen Computer.',
            jumbledWords: ['neuen', 'heute', 'Ich', 'kaufe', 'Computer.', 'einen'],
            explanation: '"Computer" is masculine (der), so as direct object it takes "einen neuen Computer" in the Accusative case.'
          }
        ],
        matchingPairs: [
          { target: 'der Kaffee → einen Kaffee', english: 'masculine accusative' },
          { target: 'die Tasche → eine Tasche', english: 'feminine accusative' },
          { target: 'das Buch → ein Buch', english: 'neuter accusative' },
          { target: 'brauchen', english: 'to need' },
          { target: 'kein / keine', english: 'no / not any (nouns)' }
        ],
        commonMistakes: [
          {
            mistake: 'Saying "Ich habe ein Computer" (neuter article for masculine noun).',
            correction: '"Ich habe einen Computer" (der Computer → Akk: einen).',
            explanation: '"Computer" is masculine in German. The verb "haben" always triggers the Accusative case, changing "ein" to "einen".'
          },
          {
            mistake: 'Using "nicht" to negate nouns: "Ich habe nicht Geld".',
            correction: 'Use "kein": "Ich habe kein Geld".',
            explanation: 'Nouns without a definite article are negated with "kein/keine/keinen", not "nicht".'
          }
        ],
        writingChallenge: [
          {
            title: 'Packing Your Bag for University',
            prompt: 'Write three sentences stating what items you have in your backpack for class using the verbs "haben" and "brauchen" with masculine, feminine, and neuter nouns in the Accusative case.',
            starterHint: 'Use "In meinem Rucksack habe ich einen..., eine..., und ein..."',
            sampleAnswer: 'In meinem Rucksack habe ich einen Laptop, eine Wasserflasche und ein Notizbuch. Ich brauche auch einen Stift für die Vorlesung. Ich habe keine Sorgen.',
            breakdown: 'Features einen Laptop (m Akk), eine Wasserflasche (f Akk), ein Notizbuch (n Akk), einen Stift (m Akk), and keine Sorgen (pl Akk).'
          }
        ],
        practiceExercises: [
          {
            question: 'Which gender in German changes its article form in the Accusative case?',
            options: ['Feminine (die)', 'Neuter (das)', 'Masculine (der)', 'Plural (die)'],
            correctIndex: 2,
            explanation: 'Only the masculine changes in Accusative: der becomes den, and ein becomes einen. Feminine, neuter, and plural stay unchanged.'
          },
          {
            question: 'Complete the sentence: "Der Student bestellt _____ Kaffee (m)."',
            options: ['ein', 'eine', 'einen', 'einem'],
            correctIndex: 2,
            explanation: '"Kaffee" is masculine (der Kaffee) and acts as the direct object of "bestellen", requiring the Accusative form "einen".'
          },
          {
            question: 'How do you correctly negate the noun in: "Ich habe _____ Auto (n)"?',
            options: ['nicht', 'kein', 'keine', 'keinen'],
            correctIndex: 1,
            explanation: '"Auto" is neuter (das Auto). The negative indefinite article for neuter nouns is "kein".'
          },
          {
            question: 'Which sentence has the correct Accusative structure?',
            options: ['Ich suche der Bahnhof.', 'Ich suche den Bahnhof.', 'Ich suche dem Bahnhof.', 'Ich suche das Bahnhof.'],
            correctIndex: 1,
            explanation: '"der Bahnhof" is masculine. In the Accusative case as direct object of "suchen", "der" becomes "den".'
          },
          {
            question: 'What is the correct indefinite article for the feminine noun "die Universität" in the Accusative case?',
            options: ['ein', 'eine', 'einen', 'einer'],
            correctIndex: 1,
            explanation: 'Feminine nouns do not change in the Accusative; they retain "eine".'
          }
        ]
      }
    ]
  },
  {
    id: 'de-a1-mod-5',
    number: 5,
    title: '05 Daily Routine, Separable Verbs & Word Order',
    description: 'Describe your day from morning to night, and master the German separable verbs (aufstehen, anrufen, einkaufen) and the Verb-Second (V2) word order rule.',
    level: 'A1',
    focusTopics: ['Daily Routines', 'Separable Verbs (aufstehen, einkaufen)', 'Verb-Second (V2) Rule', 'Time-Manner-Place (TeKaMoLo)'],
    lessons: [
      {
        id: 'de-a1-l5',
        moduleId: 'de-a1-mod-5',
        order: 1,
        title: 'Separable Verbs (trennbare Verben) & German V2 Rule',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Master separable verbs by splitting the prefix to the end of the sentence, and structure daily routine narratives using the V2 rule.',
        conceptExplanation: 'German has "separable verbs" (trennbare Verben) with prefixes such as auf-, an-, aus-, ein-, mit-, vor-, ab-. In a simple sentence, the main verb conjugates and stays in position 2, while the prefix splits off and flies all the way to the very end of the sentence! Example: aufstehen (to get up) → "Ich stehe um 7:00 Uhr AUF."',
        whyItMatters: 'Separable verbs are everywhere in daily German conversation (anrufen = to call, einkaufen = to shop, fernsehen = to watch TV). Forgetting to send the prefix to the end changes the verb\'s meaning entirely (e.g. "hören" = to hear, but "aufhören" = to stop!).',
        grammarFocus: 'Verb-Second (V2) Word Order & Separable Prefix Positioning',
        grammarExplanation: 'In standard German main clauses, the conjugated verb ALWAYS occupies POSITION TWO. If you start the sentence with a time element (e.g., "Heute", "Um 8 Uhr"), the verb still remains in position 2, forcing the subject to come right after the verb (Inversion). Example: "Um 8:00 Uhr (Pos 1) fängt (Pos 2) die Vorlesung (Subject) an."',
        grammarSections: [
          {
            title: 'Common Separable Verbs in Daily Routine',
            explanation: 'Notice how the prefix goes to the absolute end of the sentence.',
            tables: [
              {
                headers: ['Infinitive', 'Prefix', 'Meaning', 'Example Sentence'],
                rows: [
                  ['aufstehen', 'auf-', 'to get up / wake up', 'Ich stehe jeden Tag um 06:30 Uhr auf.'],
                  ['einkaufen', 'ein-', 'to go grocery shopping', 'Wir kaufen am Samstag im Supermarkt ein.'],
                  ['anrufen', 'an-', 'to call on phone', 'Er ruft seine Familie am Abend an.'],
                  ['fernsehen', 'fern-', 'to watch television', 'Sie sieht gern am Wochenende fern.'],
                  ['anfangen', 'an-', 'to begin / start', 'Der Deutschkurs fängt um 9:00 Uhr an.']
                ]
              }
            ],
            examples: [
              { target: 'Heute Abend lade ich meine Freunde ein.', english: 'Tonight I am inviting my friends.', note: 'Inversion: Heute Abend (pos 1), lade (pos 2), ich (pos 3), ein (end)' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'aufstehen',
            phoneticIpa: '[ˈaʊ̯fˌʃteːən]',
            mouthPositionTip: 'Stress the prefix "auf-". Remember: "st" in German sounds like "sht".',
            exampleWord: 'aufstehen',
            translation: 'to get up'
          }
        ],
        dialogue: [
          { speaker: 'Anna', text: 'Wann stehst du normalerweise auf, Felix?', translation: 'When do you normally get up, Felix?' },
          { speaker: 'Felix', text: 'Unter der Woche stehe ich um sieben Uhr auf. Dann frühstücke ich und fahre zur Uni.', translation: 'During the week I get up at seven o\'clock. Then I have breakfast and travel to university.' },
          { speaker: 'Anna', text: 'Und wann fängt deine erste Vorlesung an?', translation: 'And when does your first lecture start?' },
          { speaker: 'Felix', text: 'Sie fängt um Viertel nach acht an. Am Nachmittag kaufe ich im Supermarkt ein.', translation: 'It starts at a quarter past eight. In the afternoon I shop at the supermarket.' }
        ],
        culturalNote: {
          title: 'Opening Hours & Sunday Rest (Ruhetag)',
          content: 'In Germany, supermarkets, stores, and pharmacies (except emergency ones) are strictly closed on Sundays ("Sonntagsruhe"). Therefore, doing grocery shopping ("einkaufen") on Friday or Saturday is a universal German routine!'
        },
        vocabulary: [
          {
            id: 'de-v-24',
            word: 'aufstehen',
            translation: 'to get up',
            phonetic: 'OWF-shtay-en',
            partOfSpeech: 'Verb (separable)',
            exampleTarget: 'Ich stehe früh auf.',
            exampleTranslation: 'I get up early.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-25',
            word: 'einkaufen',
            translation: 'to shop',
            phonetic: 'EYN-kow-fen',
            partOfSpeech: 'Verb (separable)',
            exampleTarget: 'Er kauft heute Gemüse ein.',
            exampleTranslation: 'He is shopping for vegetables today.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-26',
            word: 'anrufen',
            translation: 'to call (phone)',
            phonetic: 'AHN-roo-fen',
            partOfSpeech: 'Verb (separable)',
            exampleTarget: 'Ich rufe dich später an.',
            exampleTranslation: 'I will call you later.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-27',
            word: 'das Frühstück',
            translation: 'the breakfast',
            phonetic: 'dahs FROOH-shtook',
            partOfSpeech: 'Noun (n)',
            exampleTarget: 'Zum Frühstück esse ich Brot mit Käse.',
            exampleTranslation: 'For breakfast I eat bread with cheese.',
            audioLanguageCode: 'de-DE',
            gender: 'das'
          },
          {
            id: 'de-v-28',
            word: 'normalerweise',
            translation: 'normally / usually',
            phonetic: 'nor-mah-ler-VY-zeh',
            partOfSpeech: 'Adverb',
            exampleTarget: 'Normalerweise lerne ich in der Bibliothek.',
            exampleTranslation: 'Normally I study in the library.',
            audioLanguageCode: 'de-DE'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-de-5',
            promptEnglish: 'On Saturday I shop at the supermarket.',
            targetSentence: 'Am Samstag kaufe ich im Supermarkt ein.',
            jumbledWords: ['im', 'kaufe', 'Am', 'ein.', 'Supermarkt', 'Samstag', 'ich'],
            explanation: 'V2 word order: "Am Samstag" is element 1, "kaufe" is in position 2, subject "ich" comes next, prefix "ein" lands at the absolute end.'
          }
        ],
        matchingPairs: [
          { target: 'aufstehen', english: 'to get up' },
          { target: 'anrufen', english: 'to call on phone' },
          { target: 'einkaufen', english: 'to shop' },
          { target: 'fernsehen', english: 'to watch TV' },
          { target: 'anfangen', english: 'to begin' }
        ],
        commonMistakes: [
          {
            mistake: 'Keeping the separable verb together in a main clause: "Ich aufstehe um 7 Uhr".',
            correction: 'Split the verb: "Ich stehe um 7 Uhr auf".',
            explanation: 'The prefix "auf" must separate and move to the very end of the main clause.'
          },
          {
            mistake: 'Breaking the V2 rule after a time adverb: "Morgen ich gehe zur Uni".',
            correction: '"Morgen gehe ich zur Uni" (Verb stays in position 2!).',
            explanation: 'When position 1 is occupied by an adverb or time phrase ("Morgen"), the conjugated verb must remain in position 2, placing the subject after.'
          }
        ],
        writingChallenge: [
          {
            title: 'Describing Your Typical Day in German',
            prompt: 'Write 4 sentences describing your daily routine from morning to evening using at least two separable verbs and correct V2 word order.',
            starterHint: 'Use "Morgens stehe ich um... auf", "Danach...", "Am Abend..."',
            sampleAnswer: 'Morgens stehe ich um sieben Uhr auf und trinke einen Kaffee. Um acht Uhr fahre ich mit dem Bus zur Universität. Am Nachmittag kaufe ich im Supermarkt ein. Am Abend rufe ich meine Eltern an.',
            breakdown: 'Employs separable verbs aufstehen, einkaufen, anrufen with correct bracket positioning and V2 inversion.'
          }
        ],
        practiceExercises: [
          {
            question: 'Where does the separable prefix go in a standard German main clause?',
            options: ['Directly after the subject', 'Immediately before the verb', 'At the very end of the sentence', 'It disappears'],
            correctIndex: 2,
            explanation: 'The separable prefix (auf, ein, an, mit) always travels to the absolute end of the main clause.'
          },
          {
            question: 'Which sentence correctly follows the German Verb-Second (V2) rule?',
            options: ['Morgen ich fahre nach Berlin.', 'Morgen fahre ich nach Berlin.', 'Morgen nach Berlin ich fahre.', 'Ich morgen fahre nach Berlin.'],
            correctIndex: 1,
            explanation: 'Because "Morgen" occupies position 1, the conjugated verb "fahre" must take position 2: "Morgen fahre ich...".'
          },
          {
            question: 'How do you say "I am calling my friend" using "anrufen"?',
            options: ['Ich anrufe meinen Freund.', 'Ich rufe an meinen Freund.', 'Ich rufe meinen Freund an.', 'Ich bin anrufen meinen Freund.'],
            correctIndex: 2,
            explanation: '"Ich rufe meinen Freund an." The prefix "an" goes to the very end of the clause.'
          },
          {
            question: 'What is the prefix in the separable verb "einkaufen"?',
            options: ['ein-', 'kaufen-', 'auf-', 'ab-'],
            correctIndex: 0,
            explanation: '"ein-" is the separable prefix (einkaufen = to shop, einladen = to invite, einsteigen = to board).'
          },
          {
            question: 'What happens to stores and supermarkets in Germany on Sundays?',
            options: ['They are open 24/7', 'They are strictly closed by law (Ruhetag)', 'They open only in the evening', 'They have free discounts'],
            correctIndex: 1,
            explanation: 'Under the German Sunday rest law (Ladenschlussgesetz), retail stores and supermarkets are closed on Sundays.'
          }
        ]
      }
    ]
  },
  {
    id: 'de-a1-mod-6',
    number: 6,
    title: '06 Food, Dining, Supermarket & Restaurant Dialogues',
    description: 'Order food and drinks at a traditional German restaurant or Imbiss, ask for the bill (Zahlen bitte!), specify dietary choices, and shop at a German market.',
    level: 'A1',
    focusTopics: ['Food & Beverages', 'Ordering at a Restaurant', 'Paying the Bill (Zahlen bitte!)', 'Möchten / Hätte gern', 'Separating the Bill (Zusammen oder getrennt?)'],
    lessons: [
      {
        id: 'de-a1-l6',
        moduleId: 'de-a1-mod-6',
        order: 1,
        title: 'Dining Out & Ordering Food in German',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Order food and beverages politely using "Ich möchte" and "Ich hätte gern", inquire about ingredients, and pay separately like locals.',
        conceptExplanation: 'When ordering in German, politeness is conveyed with the subjunctive form "Ich möchte..." (I would like...) or "Ich hätte gern..." (I would gladly have...). To ask for the bill, you say "Zahlen bitte!" or "Die Rechnung bitte". The waiter will almost always ask: "Zusammen oder getrennt?" (Together or separately?). Germans typically split the bill down to the cent!',
        whyItMatters: 'Eating out is a fundamental social experience in Germany, whether enjoying a Currywurst at an Imbiss, dining in a traditional Gasthaus, or visiting a Biergarten. Ordering fluently and tipping correctly shows cultural competence.',
        grammarFocus: 'Modal Verb "möchten" & Dative Pronoun "mir"',
        grammarExplanation: 'Conjugation of möchten (would like): ich möchte, du möchtest, er/sie/es möchte, wir möchten, ihr möchtet, Sie möchten. Note that the 1st and 3rd person singular are identical (ich möchte / er möchte)!',
        grammarSections: [
          {
            title: 'Restaurant Vocabulary & Essential Phrases',
            explanation: 'Polite forms for ordering and paying.',
            tables: [
              {
                headers: ['German Phrase', 'Pronunciation', 'English Translation', 'Situation'],
                rows: [
                  ['Einen Tisch für zwei, bitte.', 'EY-nen tish foor tsvay', 'A table for two, please.', 'Entering restaurant'],
                  ['Ich hätte gern das Schnitzel.', 'ikh HEH-teh gehrn dahs SHNIT-sl', 'I would gladly have the Schnitzel.', 'Ordering main dish'],
                  ['Was können Sie empfehlen?', 'vahs KERN-en zee em-PFAY-len', 'What can you recommend?', 'Asking waiter advice'],
                  ['Die Rechnung bitte!', 'dee REKH-noong BI-teh', 'The bill please!', 'Ready to pay'],
                  ['Zusammen oder getrennt?', 'tsoo-ZAH-men oh-der geh-TRENT', 'Together or separately?', 'Waiter payment question'],
                  ['Getrennt, bitte.', 'geh-TRENT BI-teh', 'Separately, please.', 'Paying your own share'],
                  ['Stimmt so!', 'SHTIMT zoh', 'Keep the change!', 'Tipping waiter']
                ]
              }
            ],
            examples: [
              { target: 'Ich möchte bitte ein stilles Wasser ohne Kohlensäure.', english: 'I would like a still water without carbonation, please.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'Die Rechnung, bitte',
            phoneticIpa: '[diː ˈʁɛçnʊŋ ˈbɪtə]',
            mouthPositionTip: 'Short crisp "e", soft "ch" (ich-Laut), short "u".',
            exampleWord: 'die Rechnung',
            translation: 'the bill'
          }
        ],
        dialogue: [
          { speaker: 'Kellnerin', text: 'Guten Abend! Haben Sie reserviert?', translation: 'Good evening! Do you have a reservation?' },
          { speaker: 'Gast', text: 'Nein, haben Sie einen freien Tisch für zwei Personen?', translation: 'No, do you have a free table for two people?' },
          { speaker: 'Kellnerin', text: 'Ja natürlich, hier am Fenster. Was darf ich Ihnen zu trinken bringen?', translation: 'Yes of course, here by the window. What may I bring you to drink?' },
          { speaker: 'Gast', text: 'Für mich bitte ein dunkles Bier, und für meine Freundin eine Apfelschorle.', translation: 'For me a dark beer please, and for my friend an apple spritzer.' },
          { speaker: 'Gast (später)', text: 'Entschuldigung, wir möchten bitte zahlen!', translation: 'Excuse me, we would like to pay please!' },
          { speaker: 'Kellnerin', text: 'Gerne! Zusammen oder getrennt?', translation: 'Gladly! Together or separately?' },
          { speaker: 'Gast', text: 'Getrennt bitte. Das Bier macht 4,20 Euro. Machen Sie fünf Euro daraus, stimmt so!', translation: 'Separately please. The beer is 4.20 Euros. Make it 5 Euros, keep the change!' }
        ],
        culturalNote: {
          title: 'Water with Gas & The "Stimmt so" Tipping Culture',
          content: 'In Germany, if you order "Wasser" at a restaurant, you will automatically receive sparkling carbonated water ("mit Kohlensäure"). If you want regular flat tap water, you must explicitly specify "stilles Wasser". For tipping, 5% to 10% is customary. Rather than leaving cash on the table, you round up the amount when handing payment to the server and say "Stimmt so!"'
        },
        vocabulary: [
          {
            id: 'de-v-29',
            word: 'die Speisekarte',
            translation: 'the menu',
            phonetic: 'dee SHPY-zeh-kahr-teh',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Können wir bitte die Speisekarte haben?',
            exampleTranslation: 'Could we please have the menu?',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-30',
            word: 'die Rechnung',
            translation: 'the bill',
            phonetic: 'dee REKH-noong',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Die Rechnung bitte!',
            exampleTranslation: 'The bill please!',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-31',
            word: 'das Trinkgeld',
            translation: 'the tip',
            phonetic: 'dahs TRINK-gelt',
            partOfSpeech: 'Noun (n)',
            exampleTarget: 'Das Trinkgeld ist im Service inbegriffen, aber man rundet auf.',
            exampleTranslation: 'The tip is included in service, but one rounds up.',
            audioLanguageCode: 'de-DE',
            gender: 'das'
          },
          {
            id: 'de-v-32',
            word: 'die Apfelschorle',
            translation: 'apple juice spritzer',
            phonetic: 'dee AHP-fl-shor-leh',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Eine Apfelschorle ist das beliebteste Erfrischungsgetränk in Deutschland.',
            exampleTranslation: 'An apple spritzer is the most popular refreshing drink in Germany.',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-33',
            word: 'vegetarisch',
            translation: 'vegetarian',
            phonetic: 'veh-geh-TAH-rish',
            partOfSpeech: 'Adjective',
            exampleTarget: 'Haben Sie auch vegetarische Gerichte?',
            exampleTranslation: 'Do you also have vegetarian dishes?',
            audioLanguageCode: 'de-DE'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-de-6',
            promptEnglish: 'I would like to have a glass of still water, please.',
            targetSentence: 'Ich möchte bitte ein Glas stilles Wasser.',
            jumbledWords: ['Glas', 'stilles', 'bitte', 'Ich', 'Wasser.', 'möchte', 'ein'],
            explanation: '"Ich möchte" is the polite ordering formula, followed by "bitte" and the direct object in the Accusative.'
          }
        ],
        matchingPairs: [
          { target: 'Die Rechnung, bitte', english: 'The bill, please' },
          { target: 'Zusammen oder getrennt?', english: 'Together or separately?' },
          { target: 'Stimmt so!', english: 'Keep the change!' },
          { target: 'die Speisekarte', english: 'the menu' },
          { target: 'stilles Wasser', english: 'still (non-sparkling) water' }
        ],
        commonMistakes: [
          {
            mistake: 'Leaving coins on the table as a tip before leaving.',
            correction: 'Hand the payment to the server directly, state the rounded sum or say "Stimmt so!".',
            explanation: 'In German restaurant culture, tips are communicated directly to the waiter at the time of payment.'
          },
          {
            mistake: 'Simply ordering "Wasser" expecting flat tap water.',
            correction: 'Explicitly specify "stilles Wasser" or "Leitungswasser".',
            explanation: '"Wasser" in Germany defaults to strongly sparkling water with carbonation.'
          }
        ],
        writingChallenge: [
          {
            title: 'Roleplay: Ordering Dinner in Munich',
            prompt: 'Write a brief dialogue (4 lines) between yourself and a German waiter where you ask for a table for one, order a main dish and a drink, and ask for the bill.',
            starterHint: 'Use "Guten Abend, haben Sie einen Tisch...", "Ich nehme...", "Zahlen bitte"',
            sampleAnswer: 'Gast: Guten Abend! Einen Tisch für eine Person bitte.\nKellner: Gerne, nehmen Sie Platz! Was möchten Sie?\nGast: Ich hätte gern ein Schnitzel mit Pommes und ein stilles Wasser.\nGast: Entschuldigung, die Rechnung bitte! Das macht 17 Euro, machen Sie 19 Euro, danke!',
            breakdown: 'Features polite conditional hätte gern, Accusative direct object, and customary German rounding up tip format.'
          }
        ],
        practiceExercises: [
          {
            question: 'What do waiters in Germany mean when they ask: "Zusammen oder getrennt?"',
            options: ['Are you sitting together or alone?', 'Are you paying together or separately?', 'Do you want sparkling or still water?', 'Do you want dessert or coffee?'],
            correctIndex: 1,
            explanation: '"Zusammen oder getrennt?" asks if the party wishes to pay on a single bill or divide it individually.'
          },
          {
            question: 'What does saying "Stimmt so!" to a German waiter signify?',
            options: ['The food was incorrect', 'Keep the change as a tip', 'I need a receipt', 'The price is too high'],
            correctIndex: 1,
            explanation: '"Stimmt so!" literally means "It is correct as it is", telling the waiter to keep the change as their tip.'
          },
          {
            question: 'If you want ordinary, non-carbonated water in a German restaurant, what must you ask for?',
            options: ['Mineralwasser', 'Wasser mit Gas', 'stilles Wasser', 'Sprudelwasser'],
            correctIndex: 2,
            explanation: '"stilles Wasser" is still, non-carbonated water. "Sprudel" or "mit Kohlensäure" has bubbles.'
          },
          {
            question: 'What is the 1st person singular form of "möchten"?',
            options: ['Ich möchtet', 'Ich möchte', 'Ich möchtest', 'Ich möchten'],
            correctIndex: 1,
            explanation: '"ich möchte" (I would like). The 1st and 3rd person singular of modal verbs and subjunctive forms are identical.'
          },
          {
            question: 'How do you ask for the bill in German?',
            options: ['Das Menü bitte!', 'Die Rechnung bitte!', 'Der Kellner bitte!', 'Das Essen bitte!'],
            correctIndex: 1,
            explanation: '"Die Rechnung bitte!" or "Zahlen bitte!" is the standard way to request the bill.'
          }
        ]
      }
    ]
  },
  {
    id: 'de-a1-mod-7',
    number: 7,
    title: '07 The Dative Case (Dativ) & Two-Way Prepositions',
    description: 'Master the German Dative case (dem, der, dem, den + n), the difference between Akkusativ (movement / wohin) and Dativ (location / wo), and directional prepositions.',
    level: 'A1',
    focusTopics: ['Dativ Case Forms', 'Two-Way Prepositions (Wechselpräpositionen)', 'Wo? (Dativ) vs Wohin? (Akkusativ)', 'Verbs with Dative (helfen, danken, gefallen)'],
    lessons: [
      {
        id: 'de-a1-l7',
        moduleId: 'de-a1-mod-7',
        order: 1,
        title: 'The Dative Case & The "Wo vs Wohin" Rule',
        level: 'A1',
        durationMinutes: 30,
        learningObjective: 'Decline articles in the Dative case and distinguish between static location (Dativ / Wo?) and movement (Akkusativ / Wohin?).',
        conceptExplanation: 'The Dative case (Dativ) indicates the indirect object (to whom / for whom) or static location. In Dative: Masculine and Neuter become "dem" (or "einem"), Feminine becomes "der" (or "einer"), and Plural becomes "den" + noun ending in -n!\n\nThe Two-Way Preposition Rule (Wechselpräpositionen: in, an, auf, neben, hinter, über, unter, vor, zwischen):\n- If asking WO? (Location / No change of location) → DATIV ("Ich bin in DEM Büro").\n- If asking WOHIN? (Direction / Movement to a new place) → AKKUSATIV ("Ich gehe in DAS Büro").',
        whyItMatters: 'The Wechselpräpositionen rule is the crown jewel of German grammar. Mastering "in dem (im)" vs "in das (ins)" instantly separates beginning tourists from competent German speakers.',
        grammarFocus: 'Complete Declension Matrix: Nominativ vs Akkusativ vs Dativ',
        grammarExplanation: 'Dative case article transformations:\n- der (m) → dem (einem)\n- die (f) → der (einer)\n- das (n) → dem (einem)\n- die (pl) → den (keinen) + -n on the noun!\n\nDative Verbs: Verbs like helfen (to help), danken (to thank), gehören (to belong to), and gefallen (to please) ALWAYS take a Dative object: "Ich helfe DIR" (not dich!).',
        grammarSections: [
          {
            title: 'Complete 3-Case Declension Chart',
            explanation: 'Observe the Dative row changes: dem, der, dem, den+n.',
            tables: [
              {
                headers: ['Case', 'Masculine (m)', 'Feminine (f)', 'Neuter (n)', 'Plural (pl)'],
                rows: [
                  ['Nominativ (Subject)', 'der / ein', 'die / eine', 'das / ein', 'die / keine'],
                  ['Akkusativ (Direct Object / Wohin?)', 'den / einen', 'die / eine', 'das / ein', 'die / keine'],
                  ['Dativ (Indirect Object / Wo?)', 'dem / einem', 'der / einer', 'dem / einem', 'den / keinen (+n)']
                ]
              }
            ],
            examples: [
              { target: 'Das Buch liegt auf dem Tisch.', english: 'The book is lying on the table.', note: 'Location: Wo? → Dativ: auf dem Tisch (m)' },
              { target: 'Ich lege das Buch auf den Tisch.', english: 'I lay the book onto the table.', note: 'Direction: Wohin? → Akkusativ: auf den Tisch (m)' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'in der Küche',
            phoneticIpa: '[ɪn deːɐ̯ ˈkʏçə]',
            mouthPositionTip: 'Short "i", vocalized "r" in "der", rounded lips for "ü" in "Küche".',
            exampleWord: 'in der Küche',
            translation: 'in the kitchen (dat f)'
          }
        ],
        dialogue: [
          { speaker: 'Maximilian', text: 'Wo bist du gerade, Lisa?', translation: 'Where are you right now, Lisa?' },
          { speaker: 'Lisa', text: 'Ich bin in der Universitätsbibliothek und lerne mit einem Freund.', translation: 'I am in the university library (dat f) and studying with a friend (dat m).' },
          { speaker: 'Maximilian', text: 'Kannst du mir helfen? Ich verstehe die Hausaufgabe nicht.', translation: 'Can you help me (dat)? I do not understand the homework.' },
          { speaker: 'Lisa', text: 'Ja gerne! Komm zu mir nach der Vorlesung.', translation: 'Yes gladly! Come to me after the lecture.' }
        ],
        culturalNote: {
          title: 'Contractions in Everyday German (im, ins, am, ans, zum, zur)',
          content: 'Native speakers love contractions of prepositions and definite articles:\n- in + dem = im ("im Büro")\n- in + das = ins ("ins Kino")\n- an + dem = am ("am Bahnhof")\n- zu + dem = zum ("zum Arzt")\n- zu + der = zur ("zur Universität")\nUsing these contractions makes your spoken German flow naturally!'
        },
        vocabulary: [
          {
            id: 'de-v-34',
            word: 'helfen',
            translation: 'to help (takes Dativ)',
            phonetic: 'HEL-fen',
            partOfSpeech: 'Verb',
            exampleTarget: 'Kann ich Ihnen helfen?',
            exampleTranslation: 'Can I help you (formal Dativ)?',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-35',
            word: 'die Bibliothek',
            translation: 'the library',
            phonetic: 'dee bee-blee-oh-TAYK',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Wir lernen in der Bibliothek.',
            exampleTranslation: 'We study in the library (Dativ: in der).',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-36',
            word: 'der Bahnhof',
            translation: 'the train station',
            phonetic: 'dehr BAHN-hohf',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'Ich treffe dich am Bahnhof (an + dem).',
            exampleTranslation: 'I will meet you at the train station.',
            audioLanguageCode: 'de-DE',
            gender: 'der'
          },
          {
            id: 'de-v-37',
            word: 'gefallen',
            translation: 'to please / to like (takes Dativ)',
            phonetic: 'geh-FAH-len',
            partOfSpeech: 'Verb',
            exampleTarget: 'Deutschland gefällt mir sehr gut.',
            exampleTranslation: 'I like Germany very much (lit: Germany pleases to me).',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-38',
            word: 'mit',
            translation: 'with (always takes Dativ)',
            phonetic: 'mit',
            partOfSpeech: 'Preposition',
            exampleTarget: 'Ich fahre mit dem Zug nach München.',
            exampleTranslation: 'I travel by train (with the train) to Munich.',
            audioLanguageCode: 'de-DE'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-de-7',
            promptEnglish: 'I am travelling by train to Munich.',
            targetSentence: 'Ich fahre mit dem Zug nach München.',
            jumbledWords: ['dem', 'Zug', 'fahre', 'Ich', 'mit', 'München.', 'nach'],
            explanation: '"mit" is a strict Dative preposition. "der Zug" changes to "dem Zug".'
          }
        ],
        matchingPairs: [
          { target: 'mit dem Zug', english: 'with/by train (Dativ m)' },
          { target: 'in der Schule', english: 'in the school (Dativ f)' },
          { target: 'in dem / im Büro', english: 'in the office (Dativ n)' },
          { target: 'helfen + Dativ', english: 'to help someone' },
          { target: 'gefallen + Dativ', english: 'to please / to appeal to' }
        ],
        commonMistakes: [
          {
            mistake: 'Using Accusative with "helfen": "Ich helfe dich".',
            correction: '"Ich helfe dir" (helfen always governs the Dative case!).',
            explanation: 'Certain German verbs inherently demand the Dative case for their object: helfen, danken, gratulieren, gehören.'
          },
          {
            mistake: 'Saying "Ich bin in das Kino" when you are already inside watching.',
            correction: '"Ich bin im (in dem) Kino" (Location: Wo? → Dativ).',
            explanation: 'When expressing location where an event takes place, use the Dative case. Use "ins (in das)" only when moving towards it.'
          }
        ],
        writingChallenge: [
          {
            title: 'Describing Your Study Location',
            prompt: 'Write 3 sentences describing where you are studying, with whom you are studying, and why you like the place, using the Dative case with prepositions (in, mit) and the verb gefallen.',
            starterHint: 'Use "Ich bin in der...", "Ich lerne mit einem...", "Die Bibliothek gefällt mir..."',
            sampleAnswer: 'Ich bin heute in der Universitätsbibliothek. Ich lerne mit einem netten Kommilitonen für die Prüfung. Diese ruhige Atmosphäre gefällt mir sehr gut.',
            breakdown: 'Features Dativ feminine "in der Universitätsbibliothek", Dativ masculine "mit einem netten Kommilitonen", and Dativ pronoun "mir" with gefallen.'
          }
        ],
        practiceExercises: [
          {
            question: 'What is the Dative form of the masculine definite article "der"?',
            options: ['den', 'dem', 'des', 'die'],
            correctIndex: 1,
            explanation: 'In the Dative case, "der" (masculine) becomes "dem" (e.g. mit dem Bus).'
          },
          {
            question: 'Complete the sentence with the Dative preposition: "Er fährt jeden Tag _____ dem Fahrrad zur Arbeit."',
            options: ['für', 'mit', 'durch', 'ohne'],
            correctIndex: 1,
            explanation: '"mit" is a dative preposition meaning "with / by means of" (mit dem Fahrrad).'
          },
          {
            question: 'In the sentence "Das Buch liegt auf _____ Tisch (m)", which case is required and what is the correct article?',
            options: ['Akkusativ: den', 'Dativ: dem', 'Nominativ: der', 'Genitiv: des'],
            correctIndex: 1,
            explanation: 'The sentence asks "Wo?" (Location, no movement), so the two-way preposition "auf" triggers the Dative case: "auf dem Tisch".'
          },
          {
            question: 'Which of these verbs ALWAYS requires its object in the Dative case?',
            options: ['kaufen', 'helfen', 'sehen', 'haben'],
            correctIndex: 1,
            explanation: '"helfen" (to help) always governs the Dative case: "Kannst du mir helfen?".'
          },
          {
            question: 'What is the contracted form of "in + dem"?',
            options: ['ins', 'im', 'am', 'zum'],
            correctIndex: 1,
            explanation: '"in + dem" contracts to "im" (e.g., im Büro, im Restaurant).'
          }
        ]
      }
    ]
  },
  {
    id: 'de-a1-mod-8',
    number: 8,
    title: '08 Review & Comprehensive CEFR A1 Assessment',
    description: 'Synthesize your A1 German knowledge: Vocabulary, Grammar, Reading Comprehension, Listening, and take the official CEFR A1 Certification Exam!',
    level: 'A1',
    focusTopics: ['A1 Comprehensive Review', 'Nominativ / Akkusativ / Dativ', 'Verb Conjugation & V2', 'CEFR A1 Assessment Exam'],
    lessons: [
      {
        id: 'de-a1-l8',
        moduleId: 'de-a1-mod-8',
        order: 1,
        title: 'Mastery Review & Preparation for CEFR A1 Exam',
        level: 'A1',
        durationMinutes: 30,
        learningObjective: 'Synthesize all A1 foundations (articles, 3 cases, modal verbs, separable verbs, conversation) to earn your verified CEFR A1 Certificate.',
        conceptExplanation: 'Congratulations on reaching the culmination of Level A1! You have mastered the German alphabet, phonetics, capitalization of nouns, the three grammatical genders (der, die, das), the Nominative, Accusative, and Dative cases, two-way prepositions, separable verbs, and authentic social dialogues.',
        whyItMatters: 'Achieving an objective 70%+ score on this comprehensive assessment proves your readiness for A2 elementary German, and prepares you directly for official exams such as Goethe-Zertifikat A1 (Start Deutsch 1) or telc Deutsch A1.',
        grammarFocus: 'Comprehensive A1 Grammar Synthesis',
        grammarExplanation: 'Summary of A1 German Rules:\n1. Every noun has a gender: der (m), die (f), das (n).\n2. All nouns are capitalized.\n3. In main clauses, conjugated verbs sit in Position 2.\n4. Separable prefixes fly to the end of main clauses.\n5. Accusative: only masculine changes (der → den, ein → einen).\n6. Dative: dem (m), der (f), dem (n), den + n (pl).\n7. "Wo?" = Dativ (static), "Wohin?" = Akkusativ (movement).',
        dialogue: [
          { speaker: 'Prüfer', text: 'Guten Tag! Sind Sie bereit für Ihre A1-Prüfung?', translation: 'Good day! Are you ready for your A1 examination?' },
          { speaker: 'Student', text: 'Ja, ich bin bereit. Ich habe fleißig Vokabeln und Grammatik gelernt!', translation: 'Yes, I am ready. I have studied vocabulary and grammar diligently!' },
          { speaker: 'Prüfer', text: 'Wunderbar! Erzählen Sie mir bitte von Ihrem Tag.', translation: 'Wonderful! Please tell me about your day.' },
          { speaker: 'Student', text: 'Ich stehe morgens um sieben Uhr auf, trinke einen Kaffee und fahre mit dem Zug zur Uni.', translation: 'I get up at 7:00 in the morning, drink a coffee, and travel by train to uni.' }
        ],
        vocabulary: [
          {
            id: 'de-v-39',
            word: 'die Prüfung',
            translation: 'the exam / test',
            phonetic: 'dee PROO-foong',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Ich habe die A1-Prüfung bestanden!',
            exampleTranslation: 'I passed the A1 exam!',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: 'de-v-40',
            word: 'bestehen',
            translation: 'to pass (an exam)',
            phonetic: 'beh-SHTAY-en',
            partOfSpeech: 'Verb',
            exampleTarget: 'Er hat die Deutschprüfung mit Bravour bestanden.',
            exampleTranslation: 'He passed the German test with flying colors.',
            audioLanguageCode: 'de-DE'
          },
          {
            id: 'de-v-41',
            word: 'das Zertifikat',
            translation: 'the certificate',
            phonetic: 'dahs tser-tee-fee-KAHT',
            partOfSpeech: 'Noun (n)',
            exampleTarget: 'Hier ist mein offizielles Sprachzertifikat.',
            exampleTranslation: 'Here is my official language certificate.',
            audioLanguageCode: 'de-DE',
            gender: 'das'
          }
        ],
        practiceExercises: [
          {
            question: 'Which of the following sentences correctly applies all German A1 rules (V2, Accusative masculine, noun capitalization)?',
            options: [
              'Heute kaufe ich einen neuen Computer in Berlin.',
              'Heute ich kaufe ein neuer Computer in Berlin.',
              'Heute kaufe ich ein neuen computer in Berlin.',
              'Ich heute kaufe den neuen computer in berlin.'
            ],
            correctIndex: 0,
            explanation: '"Heute" is position 1, "kaufe" is position 2, "ich" is position 3, "einen neuen Computer" is in the Accusative masculine, and all nouns are capitalized.'
          },
          {
            question: 'Choose the correct preposition and article for: "Er wohnt in _____ Schweiz (f)."',
            options: ['in der', 'in dem', 'im', 'in die'],
            correctIndex: 0,
            explanation: 'Countries with feminine gender (die Schweiz, die Türkei) require the article in the Dative case when expressing location: "in der Schweiz".'
          },
          {
            question: 'What is the correct separable verb form in: "Der Bus _____ um 18:00 Uhr _____ (abfahren)."?',
            options: ['abfährt / -', 'fährt / ab', 'fahrt / ab', 'abfahre / -'],
            correctIndex: 1,
            explanation: 'The root conjugates with vowel change (er fährt) in position 2, and the prefix "ab" moves to the end of the sentence.'
          },
          {
            question: 'What is the indirect object form of "du" in the Dative case?',
            options: ['dich', 'dir', 'dein', 'du'],
            correctIndex: 1,
            explanation: '"dir" is the Dative personal pronoun for "du" (e.g., "Wie geht es dir?", "Ich helfe dir").'
          },
          {
            question: 'Which case is governed by the preposition "mit" (with)?',
            options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
            correctIndex: 2,
            explanation: '"mit" is an absolute Dative preposition (aus, bei, mit, nach, seit, von, zu always take Dativ!).'
          }
        ]
      }
    ]
  }
];

// German A1 Level Data including CEFR Assessment Exam
export const germanA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'German A1: Beginner Foundations',
  cefrDescription: 'Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of concrete needs. Can introduce themselves and others.',
  canDoStatements: GERMAN_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 650,
  grammarTopicsCount: 18,
  modules: germanA1Modules,
  assessmentExam: {
    id: 'exam-de-a1',
    title: 'Official Build Yourself CEFR A1 German Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'de-q1',
        category: 'Grammar',
        question: 'What is the correct definite article for "Universität" in the Nominative case?',
        options: ['der', 'die', 'das', 'den'],
        correctIndex: 1,
        explanation: 'Nouns ending in "-tät" in German are consistently feminine and take "die".'
      },
      {
        id: 'de-q2',
        category: 'Grammar',
        question: 'Complete the sentence with the correct Accusative article: "Der Student kauft _____ Laptop (m)."',
        options: ['ein', 'eine', 'einen', 'einem'],
        correctIndex: 2,
        explanation: 'Laptop is masculine (der Laptop). As the direct object in the Accusative case, "ein" becomes "einen".'
      },
      {
        id: 'de-q3',
        category: 'Vocabulary',
        question: 'What does the colloquial time expression "halb vier" mean?',
        options: ['4:30', '3:30', '4:15', '3:45'],
        correctIndex: 1,
        explanation: 'In German, "halb vier" means half an hour before four, which is 3:30.'
      },
      {
        id: 'de-q4',
        category: 'Grammar',
        question: 'Which sentence correctly follows the German Verb-Second (V2) rule?',
        options: ['Gestern ich habe Deutsch gelernt.', 'Gestern habe ich Deutsch gelernt.', 'Gestern Deutsch ich habe gelernt.', 'Ich gestern habe Deutsch gelernt.'],
        correctIndex: 1,
        explanation: 'When an element other than the subject begins the sentence (Gestern), the conjugated verb MUST occupy position 2.'
      },
      {
        id: 'de-q5',
        category: 'Listening',
        question: 'How is the letter "W" in the German word "Wasser" pronounced?',
        options: ['Like the "W" in English "water"', 'Like the "V" in English "voice"', 'Like the "F" in English "father"', 'It is silent'],
        correctIndex: 1,
        explanation: 'German "W" is always pronounced as [v].'
      },
      {
        id: 'de-q6',
        category: 'Reading',
        contextPassage: 'Lukas wohnt seit zwei Jahren in Berlin. Er studiert Informatik an der TU Berlin. Jeden Tag steht er um sieben Uhr auf und fährt mit dem Fahrrad zur Universität. Am Nachmittag arbeitet er als Werkstudent bei einem Softwareunternehmen.',
        question: 'Wie kommt Lukas zur Universität?',
        options: ['Mit dem Bus', 'Mit der U-Bahn', 'Mit dem Fahrrad', 'Zu Fuß'],
        correctIndex: 2,
        explanation: 'The passage explicitly states: "fährt mit dem Fahrrad zur Universität" (travels by bicycle to university).'
      },
      {
        id: 'de-q7',
        category: 'Reading',
        contextPassage: 'Lukas wohnt seit zwei Jahren in Berlin. Er studiert Informatik an der TU Berlin. Jeden Tag steht er um sieben Uhr auf und fährt mit dem Fahrrad zur Universität. Am Nachmittag arbeitet er als Werkstudent bei einem Softwareunternehmen.',
        question: 'Was macht Lukas am Nachmittag?',
        options: ['Er schläft', 'Er arbeitet als Werkstudent', 'Er kocht mit Freunden', 'Er geht ins Kino'],
        correctIndex: 1,
        explanation: 'The text states: "Am Nachmittag arbeitet er als Werkstudent bei einem Softwareunternehmen."'
      },
      {
        id: 'de-q8',
        category: 'Grammar',
        question: 'Which preposition ALWAYS triggers the Dative case?',
        options: ['für', 'ohne', 'mit', 'durch'],
        correctIndex: 2,
        explanation: '"mit" is a strict Dative preposition (mit dem Zug, mit meiner Freundin).'
      },
      {
        id: 'de-q9',
        category: 'Vocabulary',
        question: 'What is the correct polite request for the bill in a German restaurant?',
        options: ['Die Speisekarte bitte!', 'Die Rechnung bitte!', 'Das Essen bitte!', 'Der Tisch bitte!'],
        correctIndex: 1,
        explanation: '"Die Rechnung bitte!" is the universal polite phrase for asking for the bill.'
      },
      {
        id: 'de-q10',
        category: 'Grammar',
        question: 'Where does the separable prefix go in: "Er _____ um 07:00 Uhr _____ (aufstehen)?"',
        options: ['steht / auf', 'aufsteht / -', 'steht auf / -', 'stehe / auf'],
        correctIndex: 0,
        explanation: 'In main clauses, the conjugated verb root takes position 2 and the prefix "auf" moves to the absolute end.'
      }
    ]
  }
};

// Generate higher CEFR levels (A2, B1, B2, C1, C2) with rich curriculums
export const createGermanLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return germanA1LevelData;

  const levelTitles: Record<CEFRLevel, string> = {
    A1: 'German A1: Beginner Foundations',
    A2: 'German A2: Elementary Communication',
    B1: 'German B1: Intermediate Fluency',
    B2: 'German B2: Upper-Intermediate & Professional German',
    C1: 'German C1: Advanced Academic & Career Mastery',
    C2: 'German C2: Native-Level Precision & Mastery'
  };

  const moduleThemes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 Conversational Past (Das Perfekt)', focus: 'haben vs sein in past tense', grammar: 'Regular & irregular Partizip II' },
      { title: '02 Modal Verbs (können, müssen, dürfen, wollen)', focus: 'Modal verb sentence brackets', grammar: 'Modal verbs in present and past (Präteritum)' },
      { title: '03 Giving Directions & Two-Way Prepositions', focus: 'Navigating German cities', grammar: 'Dativ vs Akkusativ with an, auf, in, über' },
      { title: '04 Health, Body & Doctor Visits', focus: 'Describing symptoms and booking appointments', grammar: 'Reflexive verbs (sich fühlen, sich verletzen)' },
      { title: '05 Adjective Endings (Adjektivdeklination)', focus: 'Describing clothing, food, and people', grammar: 'Weak, strong, and mixed adjective declension' },
      { title: '06 Subordinate Clauses with "weil", "dass", "wenn"', focus: 'Giving reasons and expressing conditions', grammar: 'Verb-final word order (Nebensätze)' }
    ],
    B1: [
      { title: '01 Subjunctive II (Konjunktiv II: Wünsche & Höflichkeit)', focus: 'Polite requests & hypothetical dreams', grammar: 'würde + Infinitiv, hätte, wäre, könnte' },
      { title: '02 Relative Clauses (Relativsätze)', focus: 'Adding descriptive details to sentences', grammar: 'Relativpronomen in Nom, Akk, Dat, Gen' },
      { title: '03 The Genitive Case & Prepositions (wegen, trotz)', focus: 'Formal ownership and prepositions', grammar: 'Genitiv endings (-es/-s), possessive relations' },
      { title: '04 Passive Voice in the Present (Passiv Präsens)', focus: 'Focusing on actions rather than agents', grammar: 'werden + Partizip II' },
      { title: '05 Complex Conjunctions (obwohl, damit, um...zu)', focus: 'Advanced argumentation and purpose', grammar: 'Infinitivkonstruktionen with um...zu' },
      { title: '06 Professional German in the Workplace', focus: 'Writing emails, meeting discussions, and reports', grammar: 'Formal registers and business idioms' }
    ],
    B2: [
      { title: '01 Advanced Passive Voice (All Tenses & Passiversatz)', focus: 'Technical documentation & reports', grammar: 'Passiv in Perfekt, Präteritum, Modalfaktor' },
      { title: '02 Konjunktiv II: Unreal Conditions in Past', focus: 'Expressing regret and hypothetical history', grammar: 'hätte/wäre + Partizip II' },
      { title: '03 Prepositional Verbs & Da-/Wo-Compounds', focus: 'Discussing abstract topics fluently', grammar: 'worauf, daran, wofür, dafür, womit' },
      { title: '04 Noun-Verb Combinations (Funktionsverbgefüge)', focus: 'C1/B2 professional expressions', grammar: 'eine Entscheidung treffen, zur Verfügung stehen' },
      { title: '05 Academic Writing & Argumentation', focus: 'Structure of formal German academic essays', grammar: 'Nominalstil and connective adverbs (folglich, demnach)' }
    ],
    C1: [
      { title: '01 Participial Attributes (Erweiterte Partizipialattribute)', focus: 'High-level journalism and scientific German', grammar: 'Partizip I & II as extended pre-noun adjectives' },
      { title: '02 Indirect Speech & Konjunktiv I', focus: 'Journalistic neutrality and reporting', grammar: 'Konjunktiv I vs Konjunktiv II in quotes' },
      { title: '03 Stylistic Nuances & Register Switching', focus: 'Mastering colloquial, bureaucratic, and literary German', grammar: 'Modal particles (doch, mal, eben, ja, wohl)' },
      { title: '04 Technical & Scientific German (Fachsprache)', focus: 'Engineering, computer science, and medicine', grammar: 'Compound noun mastery and specialized syntax' }
    ],
    C2: [
      { title: '01 Idiomatic Precision & Cultural Metaphors', focus: 'Native-level nuance and spontaneous humor', grammar: 'Archaic and specialized syntactic patterns' },
      { title: '02 Advanced Rhetoric & Public Oratory', focus: 'Negotiation, debates, and keynote delivery', grammar: 'Rhetorical tropes and classical German syntax' }
    ]
  };

  const themes = moduleThemes[level] || moduleThemes.B1;

  const modules: LanguageModule[] = themes.map((theme, idx) => ({
    id: `de-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: theme.title,
    description: `Comprehensive ${level} module focusing on ${theme.focus} and ${theme.grammar}.`,
    level,
    focusTopics: [theme.focus, theme.grammar, 'Native Fluency', 'CEFR Exam Preparation'],
    lessons: [
      {
        id: `de-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `de-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${theme.title} - Deep Mastery`,
        level,
        durationMinutes: 30,
        learningObjective: `Achieve fluent, spontaneous command of ${theme.focus} according to CEFR ${level} benchmarks.`,
        conceptExplanation: `At the ${level} tier of German, language acquisition transitions towards ${theme.focus}. You build structured command over ${theme.grammar}, enabling nuanced communication in academic, professional, and cultural spheres.`,
        whyItMatters: `German employers, technical universities (TUM, RWTH Aachen, LMU), and visa authorities look for ${level} proficiency as the gold standard for independent, professional integration.`,
        grammarFocus: theme.grammar,
        grammarExplanation: `Detailed linguistic framework of ${theme.grammar}: Master the syntax, morphosyntactic agreements, and natural collocations used by educated native speakers.`,
        dialogue: [
          { speaker: 'Kollege', text: 'Haben Sie die Unterlagen für das heutige Meeting bereits vorbereitet?', translation: 'Have you already prepared the documents for today\'s meeting?' },
          { speaker: 'Entwickler', text: 'Ja, ich habe die Analyse abgeschlossen und werde die Ergebnisse gleich präsentieren.', translation: 'Yes, I have concluded the analysis and will present the results shortly.' }
        ],
        vocabulary: [
          {
            id: `de-${level.toLowerCase()}-v1`,
            word: 'die Voraussetzung',
            translation: 'prerequisite / requirement',
            phonetic: 'dee for-OWS-zet-soong',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Gute Deutschkenntnisse sind eine Voraussetzung für den Arbeitsmarkt.',
            exampleTranslation: 'Good German skills are a prerequisite for the job market.',
            audioLanguageCode: 'de-DE',
            gender: 'die'
          },
          {
            id: `de-${level.toLowerCase()}-v2`,
            word: 'berücksichtigen',
            translation: 'to take into consideration',
            phonetic: 'beh-ROOK-zikh-tee-gen',
            partOfSpeech: 'Verb',
            exampleTarget: 'Wir müssen alle Faktoren genau berücksichtigen.',
            exampleTranslation: 'We must take all factors precisely into consideration.',
            audioLanguageCode: 'de-DE'
          }
        ],
        practiceExercises: [
          {
            question: `Which linguistic feature characterizes ${theme.title}?`,
            options: [theme.grammar, 'Basic numbers only', 'Lower-case nouns', 'English phonetic stress'],
            correctIndex: 0,
            explanation: `The hallmark of this milestone is mastering ${theme.grammar}.`
          },
          {
            question: 'What is the standard CEFR objective for this level?',
            options: ['Memorize 5 words', 'Independent, nuanced communication and complex sentence structure', 'Tourist vocabulary only', 'Silent reading only'],
            correctIndex: 1,
            explanation: `CEFR ${level} guarantees advanced functional fluency in complex contexts.`
          }
        ]
      }
    ]
  }));

  return {
    level,
    title: levelTitles[level],
    cefrDescription: GERMAN_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: GERMAN_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1200 : level === 'B1' ? 2500 : level === 'B2' ? 4500 : level === 'C1' ? 8000 : 12000,
    grammarTopicsCount: 15,
    modules,
    assessmentExam: {
      id: `exam-de-${level.toLowerCase()}`,
      title: `Official CEFR ${level} German Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `de-${level}-q1`,
          category: 'Grammar',
          question: `Which structure is essential for ${level} German fluency?`,
          options: [themes[0]?.grammar || 'Advanced syntax', 'Skipping verb conjugation', 'English loan words only', 'Only present tense'],
          correctIndex: 0,
          explanation: `Mastering ${themes[0]?.grammar || 'advanced syntax'} is central to ${level} CEFR certification.`
        },
        {
          id: `de-${level}-q2`,
          category: 'Reading',
          contextPassage: 'Die kontinuierliche Weiterbildung im Bereich neuer Technologien gewinnt im modernen Berufsleben zunehmend an Bedeutung. Wer über fundierte Sprachkenntnisse verfügt, eröffnet sich internationale Karriereperspektiven.',
          question: 'Was eröffnet einem internationale Karriereperspektiven?',
          options: ['Fundierte Sprachkenntnisse', 'Weniger Arbeitsstunden', 'Nur Glück', 'Keine Ausbildung'],
          correctIndex: 0,
          explanation: 'The passage highlights that "fundierte Sprachkenntnisse" (profound language skills) open international career perspectives.'
        }
      ]
    }
  };
};

export const completeGermanCourse: LanguageCourse = {
  id: 'lang-german',
  name: 'German',
  code: 'de',
  flag: '🇩🇪',
  speechCode: 'de-DE',
  nativeName: 'Deutsch',
  description: 'Master German from CEFR A1 beginner foundations to professional C2 fluency. Essential for engineering, computer science, and study in Germany, Austria, and Switzerland.',
  writingSystem: 'Latin alphabet + Umlauts (Ä, Ö, Ü) + Eszett (ß)',
  grammarHighlights: [
    'Three Grammatical Genders: der (m), die (f), das (n)',
    'Four Cases: Nominativ, Akkusativ, Dativ, Genitiv',
    'Verb-Second (V2) Word Order in Main Clauses',
    'Separable Verbs (trennbare Verben)',
    'Subordinate Clauses (Nebensätze) with Verb-Final Order',
    'Two-Way Prepositions (Wechselpräpositionen)'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: germanA1LevelData,
    A2: createGermanLevel('A2'),
    B1: createGermanLevel('B1'),
    B2: createGermanLevel('B2'),
    C1: createGermanLevel('C1'),
    C2: createGermanLevel('C2')
  },
  lessons: germanA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'de-sc-1',
      title: 'Coffee Shop & Bakery in Berlin',
      situation: 'Ordering coffee and fresh Brötchen at a local German Bäckerei.',
      partnerRole: 'Bäcker / Barista (Friendly & busy)',
      samplePrompts: [
        'Guten Tag! Ich hätte gern zwei Vollkornbrötchen und einen Cappuccino mit Hafermilch bitte.',
        'Haben Sie auch etwas Veganes zum Frühstück?',
        'Was kostet das zusammen? Kann ich mit Karte zahlen?'
      ]
    },
    {
      id: 'de-sc-2',
      title: 'University Registration & Admissions Office',
      situation: 'Enquiring about master degree admission requirements, APS certificate, and semester fees.',
      partnerRole: 'Studienberater an der TU München',
      samplePrompts: [
        'Guten Tag, mein Name ist Alex. Ich interessiere mich für den Masterstudiengang Data Engineering.',
        'Welche Deutschkenntnisse werden für die Immatrikulation vorausgesetzt?',
        'Wie hoch ist der Semesterbeitrag pro Halbjahr?'
      ]
    }
  ]
};
