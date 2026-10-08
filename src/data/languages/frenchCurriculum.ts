import {
  CEFRLevel,
  LanguageLevelData,
  LanguageModule,
  LanguageLesson,
  LanguageCourse
} from '../../types';

export const FRENCH_CAN_DO_OBJECTIVES: Record<CEFRLevel, string[]> = {
  A1: [
    'Can understand and use familiar everyday expressions and basic phrases for practical needs in Francophone countries.',
    'Can introduce oneself and others, ask and answer basic questions about residence, belongings, and friends.',
    'Can master French accents (é, è, ê, ç), silent final consonants, and the crucial distinction between "tu" and "vous".',
    'Can conjugate core verbs (être, avoir, aller, faire, -er verbs) and use basic negation (ne... pas).'
  ],
  A2: [
    'Can communicate in simple, routine tasks requiring a direct exchange of information on familiar topics.',
    'Can talk about past events using the Passé Composé with both "avoir" and "être" auxiliary verbs.',
    'Can use direct and indirect object pronouns (le, la, les, lui, leur) to avoid repetition.',
    'Can order in restaurants, book transport tickets (SNCF), and describe health symptoms to a doctor.'
  ],
  B1: [
    'Can understand the main points of clear standard input on familiar matters in work, school, and leisure.',
    'Can narrate a story or recount the plot of a book or film using the contrast between Passé Composé and Imparfait.',
    'Can use the Subjunctive mood (Subjonctif Présent) to express emotions, doubt, and obligation (il faut que...).',
    'Can express opinions, agree, disagree, and participate in spontaneous conversations with native speakers.'
  ],
  B2: [
    'Can understand the main ideas of complex text on concrete and abstract topics, including technical discussions in their field.',
    'Can interact with a degree of fluency and spontaneity making regular interaction with native speakers effortless.',
    'Can produce clear, detailed arguments explaining viewpoints, advantages, and disadvantages on social issues.',
    'Can master advanced pronouns (y, en, pronoms relatifs composés) and the Conditionnel Passé.'
  ],
  C1: [
    'Can understand a wide range of demanding, longer texts and recognize implicit nuances and sarcasm.',
    'Can express ideas fluently and spontaneously without conspicuous searching for vocabulary.',
    'Can use language flexibly for social, academic, and professional purposes with appropriate stylistic registers.',
    'Can master literary tenses (Passé Simple) and nuanced rhetorical devices.'
  ],
  C2: [
    'Can understand with ease virtually everything heard or read.',
    'Can reconstruct arguments and accounts in a coherent presentation, differentiating finer shades of meaning in complex contexts.'
  ]
};

export const frenchA1Modules: LanguageModule[] = [
  {
    id: 'fr-a1-mod-1',
    number: 1,
    title: '01 French Alphabet, Accents & The Silent Letter Rules',
    description: 'Master French phonetics: the 5 accents (é, è, ê, ë, ç), nasal vowels, the silent final consonant rule, and the liaison phenomenon.',
    level: 'A1',
    focusTopics: ['Alphabet & Accents', 'Silent Final Consonants (D, P, S, T, X, Z)', 'Nasal Vowels (an, in, on)', 'Liaison Rules'],
    lessons: [
      {
        id: 'fr-a1-l1',
        moduleId: 'fr-a1-mod-1',
        order: 1,
        title: 'The French Alphabet, Accents & Silent Letters',
        level: 'A1',
        durationMinutes: 20,
        learningObjective: 'Correctly identify and pronounce French accents and apply the fundamental rule of silent final consonants.',
        conceptExplanation: 'French spelling can look daunting because many letters are silent! The golden rule of French phonology is: final consonants (especially -s, -t, -d, -x, -z, -p) are almost ALWAYS SILENT, unless followed by a word starting with a vowel, which triggers a "liaison". French also has 5 distinctive accents: accent aigu (é), accent grave (à, è, ù), accent circonflexe (ê, î, ô), tréma (ë, ï), and cédille (ç, which turns a "c" into a soft "s" sound before a, o, u).',
        whyItMatters: 'Accents are not decorative in French; they completely alter meaning and pronunciation! "ou" means "or", while "où" means "where". "a" is the verb "has", while "à" is the preposition "to/at".',
        grammarFocus: 'French Accents & The Liaison Mechanism',
        grammarExplanation: 'Liaison: When a word ending in an otherwise silent consonant is followed by a word starting with a vowel or silent "h", that consonant is pronounced to link the words together smoothly. For example: "les" is pronounced [lay], but "les amis" is pronounced [lay-zah-mee]!',
        grammarSections: [
          {
            title: 'The Five French Accents and Their Effects',
            explanation: 'How accents transform sounds and orthography.',
            tables: [
              {
                headers: ['Accent Name', 'Symbol', 'Effect on Pronunciation', 'Example Word'],
                rows: [
                  ['Accent Aigu', 'é', 'Closed "ay" sound like in "say"', 'le café, l’étudiant'],
                  ['Accent Grave', 'è, à, ù', 'Open "eh" sound like in "bed"', 'le père, la mère, où'],
                  ['Accent Circonflexe', 'â, ê, î, ô, û', 'Elongates vowel; historical marker of an "s"', 'l’hôpital, la forêt'],
                  ['Tréma', 'ë, ï', 'Pronounces vowels separately', 'Noël, naïve'],
                  ['Cédille', 'ç', 'Forces "c" to sound like "s" before a, o, u', 'français, ça va']
                ]
              }
            ],
            examples: [
              { target: 'Comment vous vous appelez ?', english: 'What is your name? (formal)', note: 'Notice silent -t at the end of "Comment" in isolation, but liaised in fluent speech.' },
              { target: 'Ça va très bien, merci !', english: 'It goes very well, thank you!', note: 'ç makes "sa", and final -s in "très" is silent.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'le français',
            phoneticIpa: '[lə fʁɑ̃sɛ]',
            mouthPositionTip: 'ç sounds like "s", "an" is a nasal vowel where air passes through mouth and nose simultaneously, final "s" is silent.',
            exampleWord: 'français',
            translation: 'French'
          },
          {
            soundOrPhrase: 'les amis',
            phoneticIpa: '[le.z‿a.mi]',
            mouthPositionTip: 'Liaison: The silent "s" in "les" becomes a voiced "z" sound bridging into "amis".',
            exampleWord: 'les amis',
            translation: 'the friends'
          }
        ],
        dialogue: [
          { speaker: 'Professeur', text: 'Bonjour ! Comment ça s’écrit, votre prénom ?', translation: 'Hello! How is that spelled, your first name?' },
          { speaker: 'Camille', text: 'Bonjour professeur ! Ça s’écrit C-A-M-I-L-L-E, Camille.', translation: 'Hello professor! That is spelled C-A-M-I-L-L-E, Camille.' },
          { speaker: 'Professeur', text: 'Parfait ! Et est-ce que vous parlez français ?', translation: 'Perfect! And do you speak French?' },
          { speaker: 'Camille', text: 'Oui, un petit peu, mais j’apprends tous les jours !', translation: 'Yes, a little bit, but I learn every day!' }
        ],
        culturalNote: {
          title: 'The French "R" Sound (Consonne R uvulaire)',
          content: 'The French "R" is produced at the back of the mouth near the uvula, not by rolling the tongue tip like in Spanish or Italian. Imagine gently clearing your throat with a soft friction sound. Practicing words like "Paris", "merci", and "bonjour" will quickly give you an authentic French cadence!'
        },
        vocabulary: [
          {
            id: 'fr-v-1',
            word: 'bonjour',
            translation: 'hello / good day',
            phonetic: 'bohn-ZHOOR',
            partOfSpeech: 'Greeting',
            exampleTarget: 'Bonjour tout le monde !',
            exampleTranslation: 'Hello everyone!',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-2',
            word: 'merci',
            translation: 'thank you',
            phonetic: 'mehr-SEE',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Merci beaucoup pour votre aide.',
            exampleTranslation: 'Thank you very much for your help.',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-3',
            word: 's’il vous plaît',
            translation: 'please (formal)',
            phonetic: 'seel voo PLEH',
            partOfSpeech: 'Phrase',
            exampleTarget: 'Un café s’il vous plaît.',
            exampleTranslation: 'A coffee please.',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-4',
            word: 'le français',
            translation: 'the French language',
            phonetic: 'luh frahn-SEH',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'J’apprends le français à l’université.',
            exampleTranslation: 'I am learning French at university.',
            audioLanguageCode: 'fr-FR',
            gender: 'masculine'
          },
          {
            id: 'fr-v-5',
            word: 'la France',
            translation: 'France',
            phonetic: 'lah FRAHNS',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Paris est la capitale de la France.',
            exampleTranslation: 'Paris is the capital of France.',
            audioLanguageCode: 'fr-FR',
            gender: 'feminine'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-fr-1',
            promptEnglish: 'Hello, a croissant please!',
            targetSentence: 'Bonjour, un croissant s’il vous plaît !',
            jumbledWords: ['plaît !', 'Bonjour,', 's’il', 'croissant', 'un', 'vous'],
            explanation: '"s’il vous plaît" is the polite formal request formula.'
          }
        ],
        matchingPairs: [
          { target: 'Bonjour', english: 'Hello / Good day' },
          { target: 'Merci beaucoup', english: 'Thank you very much' },
          { target: 'S’il vous plaît', english: 'Please (formal)' },
          { target: 'Au revoir', english: 'Goodbye' },
          { target: 'Ça va', english: 'How are you / It goes' }
        ],
        commonMistakes: [
          {
            mistake: 'Pronouncing the final "s" in "Paris" or "français".',
            correction: 'Silent final consonant: [pah-ree], [frahn-seh].',
            explanation: 'In French, final consonants (s, t, d, x) are not voiced unless followed by a liaison.'
          },
          {
            mistake: 'Omitting the cédille: writing "francais" instead of "français".',
            correction: 'Always include the cédille (ç) before a, o, u to preserve the soft "s" sound.',
            explanation: 'Without the cédille, "c" before "a" is pronounced as a hard "k" sound (like in "cat").'
          }
        ],
        writingChallenge: [
          {
            title: 'Greeting and Self Introduction in French',
            prompt: 'Write three sentences in French introducing your name, stating that you speak English, and that you are learning French.',
            starterHint: 'Use "Bonjour, je m’appelle...", "Je parle...", "J’apprends..."',
            sampleAnswer: 'Bonjour ! Je m’appelle Alexandre. Je parle anglais et j’apprends le français à l’université. Merci beaucoup !',
            breakdown: 'Demonstrates elision with "j’apprends", verb conjugation of parler and apprendre, and polite closing.'
          }
        ],
        practiceExercises: [
          {
            question: 'What is the effect of the "cédille" accent (ç) on the letter "c"?',
            options: ['It makes it silent', 'It forces it to be pronounced like a soft "s"', 'It makes it sound like "ch"', 'It doubles the consonant'],
            correctIndex: 1,
            explanation: 'The cédille turns a hard "k" sound into a soft "s" sound before the vowels a, o, and u (e.g. français, garçon).'
          },
          {
            question: 'In standard French, is the final letter "s" in "Paris" pronounced?',
            options: ['Yes, always', 'No, final consonants like -s are typically silent', 'Only in southern France', 'Only when singing'],
            correctIndex: 1,
            explanation: 'Final consonants (s, t, d, p, x, z) are silent in French phonetics.'
          },
          {
            question: 'What phonetic phenomenon occurs in "les amis" where the silent "s" sounds like "z"?',
            options: ['Elision', 'Liaison', 'Nasalization', 'Inversion'],
            correctIndex: 1,
            explanation: 'Liaison links the final consonant of a word to the initial vowel of the following word.'
          },
          {
            question: 'What is the polite phrase for "Please" when speaking formally in French?',
            options: ['S’il te plaît', 'S’il vous plaît', 'De rien', 'Pardon'],
            correctIndex: 1,
            explanation: '"S’il vous plaît" uses the formal pronoun "vous". "S’il te plaît" is reserved for close friends and children.'
          },
          {
            question: 'Which accent is found in the word "café"?',
            options: ['Accent Grave (è)', 'Accent Aigu (é)', 'Circonflexe (ê)', 'Tréma (ë)'],
            correctIndex: 1,
            explanation: '"é" is the Accent Aigu, producing a crisp, closed [e] sound.'
          }
        ]
      }
    ]
  },
  {
    id: 'fr-a1-mod-2',
    number: 2,
    title: '02 Greetings, Polite Culture & "Tu" vs "Vous"',
    description: 'Learn authentic Parisian greetings, the delicate protocol of "tu" (tutoiement) versus "vous" (vouvoiement), and core verbs "être" and "avoir".',
    level: 'A1',
    focusTopics: ['Bonjour / Bonsoir / Salut', 'Tu vs Vous Protocol', 'Verb "être" (to be)', 'Verb "avoir" (to have)', 'La Bise Culture'],
    lessons: [
      {
        id: 'fr-a1-l2',
        moduleId: 'fr-a1-mod-2',
        order: 1,
        title: 'Polite Greetings & Core Verbs: Être & Avoir',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Navigate French greetings appropriately and conjugate the two most essential irregular verbs: être and avoir.',
        conceptExplanation: 'In France, entering any shop, café, bakery, or office without immediately greeting the staff with "Bonjour Madame" or "Bonjour Monsieur" is considered shockingly rude! Furthermore, French distinguishes between informal "tu" and formal/plural "vous". As a rule of thumb: always default to "vous" with anyone over 18 whom you do not know intimately.',
        whyItMatters: 'The verbs "être" (to be) and "avoir" (to have) are not only used for daily descriptions, but they also serve as the auxiliary building blocks for the entire past tense (Passé Composé). Mastering them in A1 is non-negotiable.',
        grammarFocus: 'Conjugation of Être (to be) and Avoir (to have)',
        grammarExplanation: 'Être:\n- Je suis (I am)\n- Tu es (you are)\n- Il/Elle/On est (he/she/one is)\n- Nous sommes (we are)\n- Vous êtes (you formal/plural are)\n- Ils/Elles sont (they are)\n\nAvoir:\n- J’ai (I have - note elision!)\n- Tu as (you have)\n- Il/Elle/On a (he/she/one has)\n- Nous avons (we have)\n- Vous avez (you have)\n- Ils/Elles ont (they have - liaised as [eel-zohn]!)',
        grammarSections: [
          {
            title: 'Être vs Avoir Conjugation Chart',
            explanation: 'Pay close attention to pronunciation and liaisons.',
            tables: [
              {
                headers: ['Subject Pronoun', 'Être (to be)', 'Avoir (to have)'],
                rows: [
                  ['Je / J’', 'je suis [zhuh swee]', 'j’ai [zhay]'],
                  ['Tu', 'tu es [too ay]', 'tu as [too ah]'],
                  ['Il / Elle / On', 'il est [eel ay]', 'il a [eel ah]'],
                  ['Nous', 'nous sommes [noo suhm]', 'nous avons [noo-zah-vohn]'],
                  ['Vous', 'vous êtes [voo-zet]', 'vous avez [voo-zah-vay]'],
                  ['Ils / Elles', 'ils sont [eel sohn]', 'ils ont [eel-zohn] (listen for "z" liaison!)']
                ]
              }
            ],
            examples: [
              { target: 'Je suis étudiant et j’ai vingt-deux ans.', english: 'I am a student and I am 22 years old (lit: I have 22 years).', note: 'French uses "avoir" for age, never "être"!' },
              { target: 'Vous êtes prêt, monsieur ?', english: 'Are you ready, sir?', note: 'Formal "vous" used with a customer.' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'ils ont vs ils sont',
            phoneticIpa: '[il.z‿ɔ̃] vs [il sɔ̃]',
            mouthPositionTip: '"Ils ont" (they have) has a buzzing "Z" liaison sound: [eel-zohn]. "Ils sont" (they are) has a crisp "S" sound: [eel-sohn]. Confusing these two is a legendary learner trap!',
            exampleWord: 'ils ont faim',
            translation: 'they are hungry'
          }
        ],
        dialogue: [
          { speaker: 'Boulangère', text: 'Bonjour monsieur ! Comment allez-vous aujourd’hui ?', translation: 'Hello sir! How are you doing today?' },
          { speaker: 'Client', text: 'Bonjour madame ! Je vais très bien, merci. Et vous ?', translation: 'Hello madam! I am doing very well, thank you. And you?' },
          { speaker: 'Boulangère', text: 'Très bien, merci ! Qu’est-ce qui vous ferait plaisir ?', translation: 'Very well, thank you! What would please you?' },
          { speaker: 'Client', text: 'Une baguette tradition et deux croissants, s’il vous plaît.', translation: 'A traditional baguette and two croissants, please.' }
        ],
        culturalNote: {
          title: 'The Sacred Greeting Rule in French Commerce',
          content: 'In Anglo-Saxon culture, you might enter a shop and directly ask for an item. In France, doing this will result in icy service. Always say: "Bonjour Madame" or "Bonjour Monsieur" before saying anything else, and say "Merci, bonne journée, au revoir !" when leaving. It is the fundamental social currency of France.'
        },
        vocabulary: [
          {
            id: 'fr-v-6',
            word: 'être',
            translation: 'to be',
            phonetic: 'EHT-ruh',
            partOfSpeech: 'Verb',
            exampleTarget: 'Je suis très heureux d’être ici.',
            exampleTranslation: 'I am very happy to be here.',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-7',
            word: 'avoir',
            translation: 'to have',
            phonetic: 'ah-VWAHR',
            partOfSpeech: 'Verb',
            exampleTarget: 'J’ai une question pour le professeur.',
            exampleTranslation: 'I have a question for the professor.',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-8',
            word: 'salut',
            translation: 'hi / bye (informal)',
            phonetic: 'sah-LOO',
            partOfSpeech: 'Greeting',
            exampleTarget: 'Salut Thomas, ça va ?',
            exampleTranslation: 'Hi Thomas, how are you?',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-9',
            word: 'au revoir',
            translation: 'goodbye',
            phonetic: 'oh ruh-VWAHR',
            partOfSpeech: 'Greeting',
            exampleTarget: 'Au revoir et à bientôt !',
            exampleTranslation: 'Goodbye and see you soon!',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-10',
            word: 'monsieur / madame',
            translation: 'sir / madam',
            phonetic: 'muh-SYUR / mah-DAHM',
            partOfSpeech: 'Noun',
            exampleTarget: 'Bonjour Madame, enchanté !',
            exampleTranslation: 'Hello Madam, delighted!',
            audioLanguageCode: 'fr-FR'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-fr-2',
            promptEnglish: 'I am a student and I have a class today.',
            targetSentence: 'Je suis étudiant et j’ai un cours aujourd’hui.',
            jumbledWords: ['cours', 'j’ai', 'étudiant', 'un', 'Je', 'suis', 'et', 'aujourd’hui.'],
            explanation: 'Uses "je suis" for identity/profession and "j’ai" for possession.'
          }
        ],
        matchingPairs: [
          { target: 'je suis', english: 'I am' },
          { target: 'j’ai', english: 'I have' },
          { target: 'ils ont [eel-zohn]', english: 'they have' },
          { target: 'ils sont [eel-sohn]', english: 'they are' },
          { target: 'Au revoir', english: 'Goodbye' }
        ],
        commonMistakes: [
          {
            mistake: 'Saying "Je suis 25 ans" to state your age.',
            correction: 'Say "J’ai 25 ans" (French uses the verb avoir for age!).',
            explanation: 'In French, you "have" years, you are not years. Always use "avoir": "Quel âge as-tu ? - J’ai 20 ans."'
          },
          {
            mistake: 'Saying "tu" to a waiter or shopkeeper in France.',
            correction: 'Always address service personnel with "vous".',
            explanation: 'Tutoiement with strangers is perceived as disrespectful and overly intimate.'
          }
        ],
        writingChallenge: [
          {
            title: 'Describing Yourself & What You Have',
            prompt: 'Write three sentences stating your name, your nationality/profession (using être), and what you have in your study bag (using avoir).',
            starterHint: 'Use "Je suis...", "J’ai un ordinateur...", "Je suis ravi..."',
            sampleAnswer: 'Bonjour ! Je m’appelle Sarah et je suis développeuse. J’ai un ordinateur portable et un livre de français dans mon sac. Je suis ravie d’apprendre cette langue !',
            breakdown: 'Integrates être (je suis développeuse), avoir (j’ai un ordinateur), and polite vocabulary.'
          }
        ],
        practiceExercises: [
          {
            question: 'How do you say "I am 24 years old" correctly in French?',
            options: ['Je suis 24 ans', 'J’ai 24 ans', 'Je fais 24 ans', 'J’ai 24 années'],
            correctIndex: 1,
            explanation: 'French uses the verb "avoir" (to have) for expressing age: "J’ai 24 ans".'
          },
          {
            question: 'What is the crucial phonetic distinction between "ils sont" and "ils ont"?',
            options: ['No difference', '"Ils sont" has an "s" sound, while "ils ont" has a buzzing "z" liaison', '"Ils ont" is silent', '"Ils sont" is only used for women'],
            correctIndex: 1,
            explanation: '"ils sont" (they are) has a crisp [s] sound. "ils ont" (they have) liaises the silent \'s\' as a voiced [z].'
          },
          {
            question: 'When should you greet someone with "Salut" in France?',
            options: ['With a judge in court', 'With friends, peers, and children', 'With your university professor', 'When signing a lease'],
            correctIndex: 1,
            explanation: '"Salut" is an informal greeting equivalent to "hi / hey" among peers and friends.'
          },
          {
            question: 'What is the correct 1st person plural form of the verb "être"?',
            options: ['Nous avons', 'Nous sommes', 'Nous êtes', 'Nous sont'],
            correctIndex: 1,
            explanation: '"Nous sommes" means "we are". "Nous avons" is "we have".'
          },
          {
            question: 'What should you always say immediately upon entering a French boutique or bakery?',
            options: ['Combien ça coûte ?', 'Donnez-moi du pain !', 'Bonjour Madame / Monsieur', 'Je veux acheter'],
            correctIndex: 2,
            explanation: 'Greeting with "Bonjour Madame / Monsieur" is mandatory polite etiquette across all Francophone retail.'
          }
        ]
      }
    ]
  },
  {
    id: 'fr-a1-mod-3',
    number: 3,
    title: '03 Articles, Gender of Nouns & Negation (ne... pas)',
    description: 'Master masculine and feminine French nouns (le, la, l\', les, un, une, des), adjective agreement, and the standard two-part negation structure (ne... pas).',
    level: 'A1',
    focusTopics: ['Definite & Indefinite Articles', 'Noun Gender Markers (-tion, -ée, -ment)', 'Adjective Agreement (m/f/pl)', 'Two-part Negation (ne... pas)'],
    lessons: [
      {
        id: 'fr-a1-l3',
        moduleId: 'fr-a1-mod-3',
        order: 1,
        title: 'Articles, Gender of Nouns & The "Ne... Pas" Negation',
        level: 'A1',
        durationMinutes: 25,
        learningObjective: 'Classify nouns by grammatical gender, apply adjective agreement, and formulate negative sentences using "ne... pas".',
        conceptExplanation: 'Every French noun is either masculine or feminine. Unlike German, there is no neuter gender. Articles:\n- Definite (the): le (m), la (f), l\' (before vowels), les (plural).\n- Indefinite (a/an/some): un (m), une (f), des (plural).\n\nNegation in French forms a "sandwich" around the conjugated verb:\nSubject + NE + Verb + PAS. If the verb begins with a vowel, "ne" elides to "n\'". Example: "Je n’aime pas le café."',
        whyItMatters: 'The "ne... pas" structure is universal. Without understanding noun gender, your adjectives will disagree, leading to noticeable grammatical errors.',
        grammarFocus: 'Article Declensions & Negation Sandwich',
        grammarExplanation: 'Negation rule for indefinite articles: When you negate a sentence with "ne... pas", the indefinite articles "un", "une", and "des" turn into "DE" (or "d\'"): "J’ai un livre" → "Je n’ai pas DE livre"!',
        grammarSections: [
          {
            title: 'Articles and Gender in French',
            explanation: 'Definite vs Indefinite articles.',
            tables: [
              {
                headers: ['Type', 'Masculine', 'Feminine', 'Before Vowel', 'Plural'],
                rows: [
                  ['Definite (The)', 'le garçon', 'la fille', 'l’étudiant / l’amie', 'les enfants'],
                  ['Indefinite (A/An/Some)', 'un livre', 'une table', 'un ami / une amie', 'des livres'],
                  ['Partitive (Some food/drink)', 'du café', 'de la salade', 'de l’eau', 'des fruits']
                ]
              }
            ],
            examples: [
              { target: 'Je ne parle pas français.', english: 'I do not speak French.', note: 'ne... pas embraces the conjugated verb "parle".' },
              { target: 'Elle n’a pas de voiture.', english: 'She does not have a car.', note: '"une voiture" becomes "de voiture" under negation!' }
            ]
          }
        ],
        pronunciationGuide: [
          {
            soundOrPhrase: 'ne... pas',
            phoneticIpa: '[nə ... pɑ]',
            mouthPositionTip: 'In casual spoken French, native speakers often drop the "ne" entirely: "Je sais pas" instead of "Je ne sais pas". However, in formal French and examinations, both parts are mandatory!',
            exampleWord: 'Je ne sais pas',
            translation: 'I do not know'
          }
        ],
        dialogue: [
          { speaker: 'Antoine', text: 'Est-ce que tu aimes le café noir ?', translation: 'Do you like black coffee?' },
          { speaker: 'Sophie', text: 'Non, je n’aime pas le café, mais j’adore le thé vert.', translation: 'No, I do not like coffee, but I adore green tea.' },
          { speaker: 'Antoine', text: 'Tu as des frères et sœurs ?', translation: 'Do you have brothers and sisters?' },
          { speaker: 'Sophie', text: 'Non, je n’ai pas de frères, je suis fille unique.', translation: 'No, I have no brothers, I am an only child.' }
        ],
        culturalNote: {
          title: 'Predicting French Noun Gender by Endings',
          content: 'You can guess the gender of many French nouns by their suffixes! Nouns ending in -tion, -sion, -té, -ure, -ence are almost always FEMININE (la nation, la liberté, la culture). Nouns ending in -ment, -age, -eau, -isme, -phone are almost always MASCULINE (le document, le voyage, le château).'
        },
        vocabulary: [
          {
            id: 'fr-v-11',
            word: 'le café',
            translation: 'the coffee / café',
            phonetic: 'luh kah-FAY',
            partOfSpeech: 'Noun (m)',
            exampleTarget: 'Je prends un café au lait.',
            exampleTranslation: 'I am taking a coffee with milk.',
            audioLanguageCode: 'fr-FR',
            gender: 'masculine'
          },
          {
            id: 'fr-v-12',
            word: 'la table',
            translation: 'the table',
            phonetic: 'lah TAH-bluh',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'Le livre est sur la table.',
            exampleTranslation: 'The book is on the table.',
            audioLanguageCode: 'fr-FR',
            gender: 'feminine'
          },
          {
            id: 'fr-v-13',
            word: 'aimer',
            translation: 'to like / to love',
            phonetic: 'eh-MAY',
            partOfSpeech: 'Verb (-er)',
            exampleTarget: 'J’aime beaucoup voyager en France.',
            exampleTranslation: 'I like travelling in France very much.',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-14',
            word: 'ne... pas',
            translation: 'not',
            phonetic: 'nuh ... PAH',
            partOfSpeech: 'Adverb (negation)',
            exampleTarget: 'Je ne comprends pas cette phrase.',
            exampleTranslation: 'I do not understand this sentence.',
            audioLanguageCode: 'fr-FR'
          },
          {
            id: 'fr-v-15',
            word: 'la voiture',
            translation: 'the car',
            phonetic: 'lah vwah-TOOR',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'C’est une belle voiture française.',
            exampleTranslation: 'It is a beautiful French car.',
            audioLanguageCode: 'fr-FR',
            gender: 'feminine'
          }
        ],
        sentenceBuilders: [
          {
            id: 'sb-fr-3',
            promptEnglish: 'I do not speak German, but I speak French.',
            targetSentence: 'Je ne parle pas allemand, mais je parle français.',
            jumbledWords: ['français.', 'allemand,', 'parle', 'ne', 'parle', 'mais', 'Je', 'pas', 'je'],
            explanation: 'Negation sandwich: "ne parle pas".'
          }
        ],
        matchingPairs: [
          { target: 'le / un', english: 'masculine singular articles' },
          { target: 'la / une', english: 'feminine singular articles' },
          { target: 'les / des', english: 'plural articles' },
          { target: 'ne... pas', english: 'not (verb negation)' },
          { target: 'pas de...', english: 'no / not any (with nouns)' }
        ],
        commonMistakes: [
          {
            mistake: 'Forgetting that "un/une" changes to "de" after negative: "Je n’ai pas un vélo".',
            correction: '"Je n’ai pas DE vélo" (un/une/des become de/d’ in negative statements).',
            explanation: 'Under negative quantification, indefinite articles revert to "de". Exception: with the verb "être" ("Ce n’est pas un problème").'
          },
          {
            mistake: 'Putting "pas" before the verb: "Je pas parle".',
            correction: 'Enclose the verb: "Je ne parle pas".',
            explanation: 'French negation wraps around the conjugated verb like two slices of bread.'
          }
        ],
        writingChallenge: [
          {
            title: 'Expressing Likes and Dislikes in French',
            prompt: 'Write 3 sentences: one stating what you like, one stating what you do NOT like (using ne... pas), and one stating what you do not have (using ne... pas de).',
            starterHint: 'Use "J’aime le...", "Je n’aime pas la...", "Je n’ai pas de..."',
            sampleAnswer: 'J’aime beaucoup la musique classique. Je n’aime pas le bruit dans la rue. Et actuellement, je n’ai pas de voiture à Paris parce que je prends le métro.',
            breakdown: 'Features positive preference (j’aime la), negation (je n’aime pas le), and negative transformation to "de" (je n’ai pas de voiture).'
          }
        ],
        practiceExercises: [
          {
            question: 'How do you correctly negate the sentence "Je parle espagnol"?',
            options: ['Je parle pas espagnol', 'Je ne parle pas espagnol', 'Je pas parle espagnol', 'Je non parle espagnol'],
            correctIndex: 1,
            explanation: 'Standard formal French requires the two-part negation "ne [verb] pas": "Je ne parle pas espagnol".'
          },
          {
            question: 'What happens to the indefinite article in "J’ai un ordinateur" when negated?',
            options: ['Je n’ai pas un ordinateur', 'Je n’ai pas d’ordinateur', 'Je n’ai pas le ordinateur', 'Je n’ai pas des ordinateur'],
            correctIndex: 1,
            explanation: 'Indefinite articles (un, une, des) become "de" (or "d\'" before a vowel) in negative sentences.'
          },
          {
            question: 'Which definite article is used before the masculine noun "étudiant" starting with a vowel?',
            options: ['le', 'la', 'l’', 'les'],
            correctIndex: 2,
            explanation: 'Before words starting with a vowel or silent h, "le" and "la" contract to "l\'" (l’étudiant).'
          },
          {
            question: 'Nouns ending in "-tion" (like nation, information, station) are almost always which gender in French?',
            options: ['Masculine', 'Feminine', 'Neuter', 'Plural'],
            correctIndex: 1,
            explanation: 'In French, nouns with the suffix "-tion" or "-sion" are consistently feminine (la nation, l’information).'
          },
          {
            question: 'What is the correct translation of "some books" using the indefinite plural article?',
            options: ['le livres', 'un livres', 'des livres', 'du livres'],
            correctIndex: 2,
            explanation: '"des" is the plural indefinite article in French ("des livres" = some books / books).'
          }
        ]
      }
    ]
  }
];

export const frenchA1LevelData: LanguageLevelData = {
  level: 'A1',
  title: 'French A1: Beginner Foundations',
  cefrDescription: 'Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and others in French.',
  canDoStatements: FRENCH_CAN_DO_OBJECTIVES.A1,
  targetVocabCount: 600,
  grammarTopicsCount: 16,
  modules: frenchA1Modules,
  assessmentExam: {
    id: 'exam-fr-a1',
    title: 'Official Build Yourself CEFR A1 French Certification Exam',
    durationMinutes: 30,
    passingScore: 70,
    questions: [
      {
        id: 'fr-q1',
        category: 'Grammar',
        question: 'What is the correct 1st person singular form of "avoir" for age: "_____ vingt ans"?',
        options: ['Je suis', 'J’ai', 'Je fais', 'J’es'],
        correctIndex: 1,
        explanation: 'French uses "avoir" for age: "J’ai vingt ans" (I am 20 years old).'
      },
      {
        id: 'fr-q2',
        category: 'Grammar',
        question: 'Which sentence correctly negates "Il a une voiture"?',
        options: ['Il n’a pas une voiture.', 'Il n’a pas de voiture.', 'Il pas a une voiture.', 'Il ne a pas de voiture.'],
        correctIndex: 1,
        explanation: 'In negative sentences, "une" turns into "de": "Il n’a pas de voiture".'
      },
      {
        id: 'fr-q3',
        category: 'Vocabulary',
        question: 'What is the polite phrase for "Please" when speaking to a stranger in France?',
        options: ['S’il vous plaît', 'S’il te plaît', 'De rien', 'Merci beaucoup'],
        correctIndex: 0,
        explanation: '"S’il vous plaît" is the formal polite formula with "vous".'
      },
      {
        id: 'fr-q4',
        category: 'Listening',
        question: 'How is the final "s" in the word "Paris" pronounced in standard French?',
        options: ['Like "s" in "bus"', 'It is completely silent: [pah-ree]', 'Like "z"', 'Like "sh"'],
        correctIndex: 1,
        explanation: 'Final consonants like -s, -t, -d are silent in French.'
      },
      {
        id: 'fr-q5',
        category: 'Reading',
        contextPassage: 'Marc habite à Lyon. Il est étudiant en informatique. Tous les matins, il prend un café et un croissant dans une petite boulangerie près de chez lui. Il adore la culture française.',
        question: 'Où habite Marc et que fait-il ?',
        options: ['Il habite à Paris et il est médecin', 'Il habite à Lyon et il est étudiant en informatique', 'Il habite à Marseille et vend du pain', 'Il habite en Suisse'],
        correctIndex: 1,
        explanation: 'The passage explicitly states: "Marc habite à Lyon. Il est étudiant en informatique."'
      },
      {
        id: 'fr-q6',
        category: 'Reading',
        contextPassage: 'Marc habite à Lyon. Il est étudiant en informatique. Tous les matins, il prend un café et un croissant dans une petite boulangerie près de chez lui. Il adore la culture française.',
        question: 'Que prend Marc tous les matins ?',
        options: ['Un thé et une pomme', 'Un café et un croissant', 'Une pizza', 'Rien'],
        correctIndex: 1,
        explanation: 'The text states: "Tous les matins, il prend un café et un croissant."'
      },
      {
        id: 'fr-q7',
        category: 'Grammar',
        question: 'What happens when "le" is placed before a noun starting with a vowel, like "ami"?',
        options: ['It remains "le ami"', 'It becomes "l’ami" (elision)', 'It becomes "la ami"', 'It becomes "les ami"'],
        correctIndex: 1,
        explanation: 'Before a vowel, "le" or "la" drops the vowel and uses an apostrophe (elision: l’ami).'
      },
      {
        id: 'fr-q8',
        category: 'Grammar',
        question: 'What is the correct form of "être" for "nous"?',
        options: ['nous avons', 'nous sommes', 'nous êtes', 'nous sont'],
        correctIndex: 1,
        explanation: '"nous sommes" = we are.'
      }
    ]
  }
};

export const createFrenchLevel = (level: CEFRLevel): LanguageLevelData => {
  if (level === 'A1') return frenchA1LevelData;

  const titles: Record<CEFRLevel, string> = {
    A1: 'French A1: Beginner Foundations',
    A2: 'French A2: Elementary Fluency',
    B1: 'French B1: Intermediate Competence',
    B2: 'French B2: Upper-Intermediate Professional',
    C1: 'French C1: Advanced Academic & Cultural Mastery',
    C2: 'French C2: Native Literary & Rhetorical Precision'
  };

  const themes: Record<CEFRLevel, { title: string; focus: string; grammar: string }[]> = {
    A1: [],
    A2: [
      { title: '01 The Passé Composé with "Avoir"', focus: 'Recounting past events', grammar: 'Regular -é, -i, -u past participles' },
      { title: '02 The Passé Composé with "Être" (DR MRS VANDERTRAMP)', focus: 'Verbs of movement & reflexive verbs', grammar: 'Past participle agreement with subject' },
      { title: '03 Direct Object Pronouns (me, te, le, la, les)', focus: 'Avoiding repetition in conversation', grammar: 'Pronoun placement before the conjugated verb' },
      { title: '04 The Imparfait (Past Descriptions & Habits)', focus: 'Childhood memories and setting the scene', grammar: 'Imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)' }
    ],
    B1: [
      { title: '01 Passé Composé vs Imparfait Contrast', focus: 'Mastering narrative rhythm in French', grammar: 'Sudden action vs ongoing background description' },
      { title: '02 The Subjunctive Mood (Le Subjonctif Présent)', focus: 'Expressing wishes, emotions, and doubts', grammar: 'que je fasse, que tu sois, qu’il aille' },
      { title: '03 Indirect Pronouns & Double Pronoun Order', focus: 'Complex conversational exchanges', grammar: 'lui, leur, me le, te la sequence' },
      { title: '04 The Pronouns "Y" and "EN"', focus: 'Replacing places and quantities', grammar: 'Y for locations/à, EN for quantities/de' }
    ],
    B2: [
      { title: '01 Advanced Subjunctive & Conjunctions', focus: 'Expressing concessions and conditions', grammar: 'bien que, pour que, à condition que + subjonctif' },
      { title: '02 The Conditional Mood & Hypothetical Si-Clauses', focus: 'Speculating about alternative outcomes', grammar: 'Si + imparfait → conditionnel présent' },
      { title: '03 The Passive Voice & Nominalization', focus: 'Formal reports and journalism', grammar: 'être + participe passé, par vs de' }
    ],
    C1: [
      { title: '01 Nuances of Style & Literary Registers', focus: 'Academic argumentation and rhetoric', grammar: 'Passé simple, subjonctif imparfait recognition' },
      { title: '02 Professional & Administrative French', focus: 'Legal, business, and political diplomacy', grammar: 'Complex participial clauses and idioms' }
    ],
    C2: [
      { title: '01 Literary Precision & Stylistic Eloquence', focus: 'High literature, philosophy, and debates', grammar: 'Rare syntax, classical inversions, archaisms' }
    ]
  };

  const levelThemes = themes[level] || themes.B1;

  const modules: LanguageModule[] = levelThemes.map((thm, idx) => ({
    id: `fr-${level.toLowerCase()}-mod-${idx + 1}`,
    number: idx + 1,
    title: thm.title,
    description: `Structured ${level} French module covering ${thm.focus} and ${thm.grammar}.`,
    level,
    focusTopics: [thm.focus, thm.grammar, 'Native Listening', 'CEFR Exam Preparation'],
    lessons: [
      {
        id: `fr-${level.toLowerCase()}-l${idx + 1}`,
        moduleId: `fr-${level.toLowerCase()}-mod-${idx + 1}`,
        order: 1,
        title: `${thm.title} - Comprehensive Lesson`,
        level,
        durationMinutes: 30,
        learningObjective: `Master ${thm.focus} according to official CEFR ${level} / DELF-DALF descriptors.`,
        conceptExplanation: `At the ${level} tier of French, mastery transitions towards ${thm.focus}. You build structured command over ${thm.grammar}.`,
        whyItMatters: `DELF B2 and DALF C1 certificates are globally recognized prerequisites for admission to French universities (Sorbonne, École Polytechnique) and French corporate employment.`,
        grammarFocus: thm.grammar,
        grammarExplanation: `In-depth structural breakdown of ${thm.grammar} with authentic native Francophone phrasing.`,
        dialogue: [
          { speaker: 'Directeur', text: 'Avez-vous finalisé le rapport pour la réunion de demain ?', translation: 'Have you finalized the report for tomorrow\'s meeting?' },
          { speaker: 'Analyste', text: 'Oui, tout est prêt. J’ai analysé les données et préparé la présentation.', translation: 'Yes, everything is ready. I analyzed the data and prepared the presentation.' }
        ],
        vocabulary: [
          {
            id: `fr-${level.toLowerCase()}-v1`,
            word: 'l’opportunité',
            translation: 'opportunity',
            phonetic: 'loh-por-too-nee-TAY',
            partOfSpeech: 'Noun (f)',
            exampleTarget: 'C’est une excellente opportunité professionnelle.',
            exampleTranslation: 'It is an excellent professional opportunity.',
            audioLanguageCode: 'fr-FR',
            gender: 'feminine'
          },
          {
            id: `fr-${level.toLowerCase()}-v2`,
            word: 'développer',
            translation: 'to develop',
            phonetic: 'day-vuh-loh-PAY',
            partOfSpeech: 'Verb',
            exampleTarget: 'Nous devons développer nos compétences linguistiques.',
            exampleTranslation: 'We must develop our linguistic skills.',
            audioLanguageCode: 'fr-FR'
          }
        ],
        practiceExercises: [
          {
            question: `What is the core grammatical focus of ${thm.title}?`,
            options: [thm.grammar, 'Basic greetings only', 'Counting to 10', 'English translations only'],
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
    cefrDescription: FRENCH_CAN_DO_OBJECTIVES[level][0],
    canDoStatements: FRENCH_CAN_DO_OBJECTIVES[level],
    targetVocabCount: level === 'A2' ? 1200 : level === 'B1' ? 2400 : level === 'B2' ? 4500 : level === 'C1' ? 8000 : 12000,
    grammarTopicsCount: 14,
    modules,
    assessmentExam: {
      id: `exam-fr-${level.toLowerCase()}`,
      title: `Official CEFR ${level} French Certification Exam`,
      durationMinutes: 35,
      passingScore: 70,
      questions: [
        {
          id: `fr-${level}-q1`,
          category: 'Grammar',
          question: `Which structure is central to CEFR ${level} French competence?`,
          options: [levelThemes[0]?.grammar || 'Advanced syntax', 'Skipping verb conjugation', 'Phonetic guessing', 'English idioms'],
          correctIndex: 0,
          explanation: `Mastery of ${levelThemes[0]?.grammar || 'advanced syntax'} is required for CEFR ${level} certification.`
        }
      ]
    }
  };
};

export const completeFrenchCourse: LanguageCourse = {
  id: 'lang-french',
  name: 'French',
  code: 'fr',
  flag: '🇫🇷',
  speechCode: 'fr-FR',
  nativeName: 'Français',
  description: 'Master the language of diplomacy, culture, literature, and European business from beginner A1 to fluent C2 proficiency.',
  writingSystem: 'Latin alphabet + Accents (é, è, ê, ë, ç)',
  grammarHighlights: [
    'Two Grammatical Genders: Masculin & Féminin',
    'Silent Final Consonant System & Liaison',
    'Passé Composé vs Imparfait Aspectual Split',
    'Subjonctif Présent & Passé',
    'Direct & Indirect Object Pronouns (COD / COI)',
    'The Clitic Pronouns "Y" and "EN"'
  ],
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  levelData: {
    A1: frenchA1LevelData,
    A2: createFrenchLevel('A2'),
    B1: createFrenchLevel('B1'),
    B2: createFrenchLevel('B2'),
    C1: createFrenchLevel('C1'),
    C2: createFrenchLevel('C2')
  },
  lessons: frenchA1Modules.flatMap(m => m.lessons),
  conversationScenarios: [
    {
      id: 'fr-sc-1',
      title: 'Parisian Café & Croissant Order',
      situation: 'Ordering coffee and pastries at an authentic café on Boulevard Saint-Germain in Paris.',
      partnerRole: 'Serveur parisien (efficace et poli)',
      samplePrompts: [
        'Bonjour Monsieur ! Je voudrais une table en terrasse pour deux, s’il vous plaît.',
        'Je prends un café crème et deux croissants bien dorés.',
        'L’addition s’il vous plaît ! Est-ce que vous prenez la carte bancaire ?'
      ]
    },
    {
      id: 'fr-sc-2',
      title: 'Sorbonne University Admissions Interview',
      situation: 'Discussing university registration, housing in Paris, and student visa validation.',
      partnerRole: 'Conseillère aux relations internationales à Paris',
      samplePrompts: [
        'Bonjour Madame, je viens déposer mon dossier pour le Master en Intelligence Artificielle.',
        'Quels sont les justificatifs requis pour le logement universitaire CROUS ?',
        'Quel niveau de français DELF/DALF est nécessaire pour valider le diplôme ?'
      ]
    }
  ]
};
