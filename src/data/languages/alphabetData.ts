export interface AlphabetCharItem {
  char: string;
  lowerChar?: string;
  name: string;
  sound: string;
  ipa?: string;
  transliteration?: string;
  exampleWord: string;
  exampleTranslation: string;
  pronunciationTip?: string;
  speechCode: string;
  forms?: {
    isolated: string;
    initial: string;
    medial: string;
    final: string;
  };
  strokeOrderNotes?: string;
  category?: string;
}

export interface WritingSystemGuide {
  languageName: string;
  code: string;
  speechCode: string;
  scriptName: string;
  direction: 'ltr' | 'rtl';
  description: string;
  keyRules: string[];
  subCategories?: string[];
  characters: AlphabetCharItem[];
}

export const LANGUAGE_ALPHABETS: Record<string, WritingSystemGuide> = {
  german: {
    languageName: 'German',
    code: 'de',
    speechCode: 'de-DE',
    scriptName: 'Latin (Lateinische Schrift) with Umlauts & Eszett',
    direction: 'ltr',
    description: 'The German alphabet consists of the standard 26 Latin letters plus three umlauted vowels (Ä, Ö, Ü) and the ligature Eszett (ß). German pronunciation is highly phonetic: letters are almost always pronounced consistently.',
    keyRules: [
      'Nouns in German are ALWAYS capitalized (e.g. der Tisch, die Musik).',
      'The letter "W" is pronounced like English "V" (e.g. Wasser -> "Vasser").',
      'The letter "V" is pronounced like English "F" (e.g. Vogel -> "Fogel").',
      'The letter "J" sounds like English "Y" (e.g. Ja -> "Ya").',
      'Eszett "ß" represents a sharp unvoiced "s" sound and never begins a word.'
    ],
    characters: [
      { char: 'A', lowerChar: 'a', name: 'Ah', sound: 'Open [aː] or [a]', ipa: '[aː]', exampleWord: 'Apfel', exampleTranslation: 'Apple', speechCode: 'de-DE', pronunciationTip: 'Open mouth widely like in "father"' },
      { char: 'B', lowerChar: 'b', name: 'Be', sound: 'Voiced [b], unvoiced [p] at word end', ipa: '[b]', exampleWord: 'Buch', exampleTranslation: 'Book', speechCode: 'de-DE' },
      { char: 'C', lowerChar: 'c', name: 'Tse', sound: '[ts] before e/i, [k] elsewhere', ipa: '[ts]', exampleWord: 'Computer', exampleTranslation: 'Computer', speechCode: 'de-DE' },
      { char: 'D', lowerChar: 'd', name: 'De', sound: 'Voiced [d], unvoiced [t] at word end', ipa: '[d]', exampleWord: 'Danke', exampleTranslation: 'Thank you', speechCode: 'de-DE' },
      { char: 'E', lowerChar: 'e', name: 'Eh', sound: 'Long [eː] or short [ɛ]', ipa: '[eː]', exampleWord: 'Elefant', exampleTranslation: 'Elephant', speechCode: 'de-DE' },
      { char: 'F', lowerChar: 'f', name: 'Eff', sound: '[f] like English "f"', ipa: '[f]', exampleWord: 'Freund', exampleTranslation: 'Friend', speechCode: 'de-DE' },
      { char: 'G', lowerChar: 'g', name: 'Ge', sound: 'Voiced [ɡ], unvoiced [k] at word end', ipa: '[ɡ]', exampleWord: 'Guten Tag', exampleTranslation: 'Good day', speechCode: 'de-DE' },
      { char: 'H', lowerChar: 'h', name: 'Hah', sound: 'Aspirated [h] at start, silent lengthener after vowel', ipa: '[h]', exampleWord: 'Haus', exampleTranslation: 'House', speechCode: 'de-DE' },
      { char: 'I', lowerChar: 'i', name: 'Ee', sound: 'Long [iː] like "see" or short [ɪ]', ipa: '[iː]', exampleWord: 'Insel', exampleTranslation: 'Island', speechCode: 'de-DE' },
      { char: 'J', lowerChar: 'j', name: 'Yot', sound: '[j] sounds like English "y" in "yes"', ipa: '[j]', exampleWord: 'Jahr', exampleTranslation: 'Year', speechCode: 'de-DE' },
      { char: 'K', lowerChar: 'k', name: 'Kah', sound: 'Crisp [k]', ipa: '[k]', exampleWord: 'Kaffee', exampleTranslation: 'Coffee', speechCode: 'de-DE' },
      { char: 'L', lowerChar: 'l', name: 'Ell', sound: 'Clear European [l]', ipa: '[l]', exampleWord: 'Lampe', exampleTranslation: 'Lamp', speechCode: 'de-DE' },
      { char: 'M', lowerChar: 'm', name: 'Emm', sound: '[m]', ipa: '[m]', exampleWord: 'Mutter', exampleTranslation: 'Mother', speechCode: 'de-DE' },
      { char: 'N', lowerChar: 'n', name: 'Enn', sound: '[n]', ipa: '[n]', exampleWord: 'Nacht', exampleTranslation: 'Night', speechCode: 'de-DE' },
      { char: 'O', lowerChar: 'o', name: 'Oh', sound: 'Clean rounded [oː]', ipa: '[oː]', exampleWord: 'Opa', exampleTranslation: 'Grandpa', speechCode: 'de-DE' },
      { char: 'P', lowerChar: 'p', name: 'Peh', sound: 'Aspirated [pʰ]', ipa: '[p]', exampleWord: 'Papier', exampleTranslation: 'Paper', speechCode: 'de-DE' },
      { char: 'Q', lowerChar: 'q', name: 'Kuh', sound: 'Always "qu", pronounced [kv]', ipa: '[kv]', exampleWord: 'Quelle', exampleTranslation: 'Source / Spring', speechCode: 'de-DE' },
      { char: 'R', lowerChar: 'r', name: 'Err', sound: 'Uvular fricative [ʁ] in throat', ipa: '[ʁ]', exampleWord: 'Reise', exampleTranslation: 'Journey', speechCode: 'de-DE', pronunciationTip: 'Gargle lightly at the back of the mouth' },
      { char: 'S', lowerChar: 's', name: 'Ess', sound: 'Voiced [z] before vowels, [s] at end', ipa: '[z]', exampleWord: 'Sonne', exampleTranslation: 'Sun', speechCode: 'de-DE' },
      { char: 'T', lowerChar: 't', name: 'Teh', sound: 'Crisp [t]', ipa: '[t]', exampleWord: 'Tee', exampleTranslation: 'Tea', speechCode: 'de-DE' },
      { char: 'U', lowerChar: 'u', name: 'Ooh', sound: 'Deep [uː] like "boot"', ipa: '[uː]', exampleWord: 'Uhr', exampleTranslation: 'Clock / Hour', speechCode: 'de-DE' },
      { char: 'V', lowerChar: 'v', name: 'Fow', sound: 'Usually [f] in native words, [v] in loanwords', ipa: '[f]', exampleWord: 'Vater', exampleTranslation: 'Father', speechCode: 'de-DE' },
      { char: 'W', lowerChar: 'w', name: 'Veh', sound: '[v] like English "v"', ipa: '[v]', exampleWord: 'Wasser', exampleTranslation: 'Water', speechCode: 'de-DE' },
      { char: 'X', lowerChar: 'x', name: 'Iks', sound: '[ks]', ipa: '[ks]', exampleWord: 'Xylofon', exampleTranslation: 'Xylophone', speechCode: 'de-DE' },
      { char: 'Y', lowerChar: 'y', name: 'Ypsilon', sound: 'Vowel [yː] or consonant [j]', ipa: '[yː]', exampleWord: 'System', exampleTranslation: 'System', speechCode: 'de-DE' },
      { char: 'Z', lowerChar: 'z', name: 'Tsett', sound: 'Always [ts] like "cats"', ipa: '[ts]', exampleWord: 'Zug', exampleTranslation: 'Train', speechCode: 'de-DE', pronunciationTip: 'Never buzz like English "z"; always "ts"' },
      { char: 'Ä', lowerChar: 'ä', name: 'A-Umlaut', sound: 'Open [ɛː] like "air"', ipa: '[ɛː]', exampleWord: 'Äpfel', exampleTranslation: 'Apples', speechCode: 'de-DE' },
      { char: 'Ö', lowerChar: 'ö', name: 'O-Umlaut', sound: 'Rounded front vowel [øː]', ipa: '[øː]', exampleWord: 'Öl', exampleTranslation: 'Oil', speechCode: 'de-DE', pronunciationTip: 'Say "ay" while rounding your lips like "oh"' },
      { char: 'Ü', lowerChar: 'ü', name: 'U-Umlaut', sound: 'High front rounded [yː]', ipa: '[yː]', exampleWord: 'Über', exampleTranslation: 'Over / Above', speechCode: 'de-DE', pronunciationTip: 'Say "ee" while pursing lips tightly' },
      { char: 'ß', lowerChar: 'ß', name: 'Eszett / Scharfes S', sound: 'Voiceless alveolar fricative [s]', ipa: '[s]', exampleWord: 'Straße', exampleTranslation: 'Street', speechCode: 'de-DE', pronunciationTip: 'Represents a double-s after long vowels or diphthongs' }
    ]
  },

  french: {
    languageName: 'French',
    code: 'fr',
    speechCode: 'fr-FR',
    scriptName: 'French Latin Alphabet & Diacritics',
    direction: 'ltr',
    description: 'French uses 26 Latin letters enriched with 5 diacritical marks: acute (é), grave (à, è, ù), circumflex (â, ê, î, ô, û), trema (ë, ï, ü), and cedilla (ç). Final consonants are frequently silent unless followed by a vowel (liaison).',
    keyRules: [
      'Final consonants (especially s, t, d, x, z) are usually SILENT (e.g. "Paris" -> "Pa-ree").',
      'The letter "H" is always silent in French.',
      'Cedilla "ç" softens "c" to an "s" sound before a, o, u (e.g. français).',
      'Accents change vowel sounds: é (closed) vs è (open).'
    ],
    characters: [
      { char: 'A', lowerChar: 'a', name: 'Ah', sound: '[a]', ipa: '[a]', exampleWord: 'Ami', exampleTranslation: 'Friend', speechCode: 'fr-FR' },
      { char: 'B', lowerChar: 'b', name: 'Bé', sound: '[b]', ipa: '[b]', exampleWord: 'Bonjour', exampleTranslation: 'Hello', speechCode: 'fr-FR' },
      { char: 'C', lowerChar: 'c', name: 'Cé', sound: '[s] before e/i, [k] before a/o/u', ipa: '[k]/[s]', exampleWord: 'Café', exampleTranslation: 'Coffee', speechCode: 'fr-FR' },
      { char: 'D', lowerChar: 'd', name: 'Dé', sound: '[d]', ipa: '[d]', exampleWord: 'Demain', exampleTranslation: 'Tomorrow', speechCode: 'fr-FR' },
      { char: 'E', lowerChar: 'e', name: 'Euh', sound: '[ə] or silent at end of words', ipa: '[ə]', exampleWord: 'Enfant', exampleTranslation: 'Child', speechCode: 'fr-FR' },
      { char: 'F', lowerChar: 'f', name: 'Eff', sound: '[f]', ipa: '[f]', exampleWord: 'Fleur', exampleTranslation: 'Flower', speechCode: 'fr-FR' },
      { char: 'G', lowerChar: 'g', name: 'Gé', sound: '[ʒ] like "measure" before e/i, [ɡ] before a/o/u', ipa: '[ʒ]', exampleWord: 'Gare', exampleTranslation: 'Station', speechCode: 'fr-FR' },
      { char: 'H', lowerChar: 'h', name: 'Ache', sound: 'Always completely silent', ipa: 'silent', exampleWord: 'Hôtel', exampleTranslation: 'Hotel', speechCode: 'fr-FR' },
      { char: 'I', lowerChar: 'i', name: 'Ee', sound: '[i]', ipa: '[i]', exampleWord: 'Ici', exampleTranslation: 'Here', speechCode: 'fr-FR' },
      { char: 'J', lowerChar: 'j', name: 'Jee', sound: '[ʒ] like "s" in "treasure"', ipa: '[ʒ]', exampleWord: 'Jour', exampleTranslation: 'Day', speechCode: 'fr-FR' },
      { char: 'K', lowerChar: 'k', name: 'Kah', sound: '[k]', ipa: '[k]', exampleWord: 'Kilo', exampleTranslation: 'Kilo', speechCode: 'fr-FR' },
      { char: 'L', lowerChar: 'l', name: 'Ell', sound: '[l]', ipa: '[l]', exampleWord: 'Livre', exampleTranslation: 'Book', speechCode: 'fr-FR' },
      { char: 'M', lowerChar: 'm', name: 'Emm', sound: '[m]', ipa: '[m]', exampleWord: 'Maison', exampleTranslation: 'House', speechCode: 'fr-FR' },
      { char: 'N', lowerChar: 'n', name: 'Enn', sound: '[n] or nasalizes preceding vowel', ipa: '[n]', exampleWord: 'Nouveau', exampleTranslation: 'New', speechCode: 'fr-FR' },
      { char: 'O', lowerChar: 'o', name: 'Oh', sound: '[o] or [ɔ]', ipa: '[o]', exampleWord: 'Oui', exampleTranslation: 'Yes', speechCode: 'fr-FR' },
      { char: 'P', lowerChar: 'p', name: 'Pé', sound: '[p]', ipa: '[p]', exampleWord: 'Pain', exampleTranslation: 'Bread', speechCode: 'fr-FR' },
      { char: 'Q', lowerChar: 'q', name: 'Ku', sound: 'Always "qu", pronounced [k]', ipa: '[k]', exampleWord: 'Quatre', exampleTranslation: 'Four', speechCode: 'fr-FR' },
      { char: 'R', lowerChar: 'r', name: 'Err', sound: 'Uvular fricative [ʁ] in back of throat', ipa: '[ʁ]', exampleWord: 'Rouge', exampleTranslation: 'Red', speechCode: 'fr-FR', pronunciationTip: 'Vibrate uvula gently without rolling tongue tip' },
      { char: 'S', lowerChar: 's', name: 'Ess', sound: '[s], but voiced [z] between two vowels', ipa: '[s]/[z]', exampleWord: 'Soleil', exampleTranslation: 'Sun', speechCode: 'fr-FR' },
      { char: 'T', lowerChar: 't', name: 'Té', sound: '[t]', ipa: '[t]', exampleWord: 'Train', exampleTranslation: 'Train', speechCode: 'fr-FR' },
      { char: 'U', lowerChar: 'u', name: 'U', sound: 'Front rounded [y]', ipa: '[y]', exampleWord: 'Une', exampleTranslation: 'One / A', speechCode: 'fr-FR', pronunciationTip: 'Say "ee" with lips rounded tightly forward' },
      { char: 'V', lowerChar: 'v', name: 'Vé', sound: '[v]', ipa: '[v]', exampleWord: 'Ville', exampleTranslation: 'City', speechCode: 'fr-FR' },
      { char: 'W', lowerChar: 'w', name: 'Double vé', sound: '[v] or [w]', ipa: '[v]', exampleWord: 'Wagon', exampleTranslation: 'Wagon', speechCode: 'fr-FR' },
      { char: 'X', lowerChar: 'x', name: 'Iks', sound: '[ks] or [ɡz]', ipa: '[ks]', exampleWord: 'Exemple', exampleTranslation: 'Example', speechCode: 'fr-FR' },
      { char: 'Y', lowerChar: 'y', name: 'I grec', sound: '[i] or [j]', ipa: '[i]', exampleWord: 'Yeux', exampleTranslation: 'Eyes', speechCode: 'fr-FR' },
      { char: 'Z', lowerChar: 'z', name: 'Zède', sound: '[z]', ipa: '[z]', exampleWord: 'Zéro', exampleTranslation: 'Zero', speechCode: 'fr-FR' },
      { char: 'É', lowerChar: 'é', name: 'E-accent aigu', sound: 'Closed [e] like "hay"', ipa: '[e]', exampleWord: 'Été', exampleTranslation: 'Summer', speechCode: 'fr-FR' },
      { char: 'È', lowerChar: 'è', name: 'E-accent grave', sound: 'Open [ɛ] like "bed"', ipa: '[ɛ]', exampleWord: 'Père', exampleTranslation: 'Father', speechCode: 'fr-FR' },
      { char: 'Ç', lowerChar: 'ç', name: 'C-cédille', sound: 'Soft [s] before a, o, u', ipa: '[s]', exampleWord: 'Français', exampleTranslation: 'French', speechCode: 'fr-FR' }
    ]
  },

  spanish: {
    languageName: 'Spanish',
    code: 'es',
    speechCode: 'es-ES',
    scriptName: 'Alfabeto Español',
    direction: 'ltr',
    description: 'Spanish is one of the most phonetically consistent languages in the world. It includes the distinctive letter Ñ (eñe) and rolling R sounds.',
    keyRules: [
      'The letter "H" is always SILENT (e.g. "hola" -> "ola").',
      'The letter "Ñ" is a separate letter in the Spanish alphabet representing [ɲ].',
      'Vowels (A, E, I, O, U) always have crisp, single pure sounds with no diphthong glides.',
      'Double "LL" is traditionally pronounced [ʎ] or [ʝ] (like "y" in "yes").',
      '"RR" indicates a strong alveolar trill (rolling R).'
    ],
    characters: [
      { char: 'A', lowerChar: 'a', name: 'A', sound: 'Pure [a]', ipa: '[a]', exampleWord: 'Amigo', exampleTranslation: 'Friend', speechCode: 'es-ES' },
      { char: 'B', lowerChar: 'b', name: 'Be', sound: '[b] or soft fricative [β]', ipa: '[b]', exampleWord: 'Buenos días', exampleTranslation: 'Good morning', speechCode: 'es-ES' },
      { char: 'C', lowerChar: 'c', name: 'Ce', sound: '[θ] (Spain) or [s] (Latin America) before e/i, [k] elsewhere', ipa: '[k]/[θ]', exampleWord: 'Casa', exampleTranslation: 'House', speechCode: 'es-ES' },
      { char: 'D', lowerChar: 'd', name: 'De', sound: 'Dental [d] or soft [ð]', ipa: '[d]', exampleWord: 'Donde', exampleTranslation: 'Where', speechCode: 'es-ES' },
      { char: 'E', lowerChar: 'e', name: 'E', sound: 'Crisp [e]', ipa: '[e]', exampleWord: 'España', exampleTranslation: 'Spain', speechCode: 'es-ES' },
      { char: 'F', lowerChar: 'f', name: 'Efe', sound: '[f]', ipa: '[f]', exampleWord: 'Familia', exampleTranslation: 'Family', speechCode: 'es-ES' },
      { char: 'G', lowerChar: 'g', name: 'Ge', sound: 'Throat [x] before e/i, hard [ɡ] before a/o/u', ipa: '[ɡ]/[x]', exampleWord: 'Gato', exampleTranslation: 'Cat', speechCode: 'es-ES' },
      { char: 'H', lowerChar: 'h', name: 'Hache', sound: 'Completely silent', ipa: 'silent', exampleWord: 'Hola', exampleTranslation: 'Hello', speechCode: 'es-ES', pronunciationTip: 'Never pronounce the H!' },
      { char: 'I', lowerChar: 'i', name: 'I', sound: 'Bright [i]', ipa: '[i]', exampleWord: 'Isla', exampleTranslation: 'Island', speechCode: 'es-ES' },
      { char: 'J', lowerChar: 'j', name: 'Jota', sound: 'Guttural [x] like "ch" in Scottish "loch"', ipa: '[x]', exampleWord: 'Jardín', exampleTranslation: 'Garden', speechCode: 'es-ES' },
      { char: 'K', lowerChar: 'k', name: 'Ka', sound: '[k]', ipa: '[k]', exampleWord: 'Kilo', exampleTranslation: 'Kilogram', speechCode: 'es-ES' },
      { char: 'L', lowerChar: 'l', name: 'Ele', sound: '[l]', ipa: '[l]', exampleWord: 'Luna', exampleTranslation: 'Moon', speechCode: 'es-ES' },
      { char: 'M', lowerChar: 'm', name: 'Eme', sound: '[m]', ipa: '[m]', exampleWord: 'Madre', exampleTranslation: 'Mother', speechCode: 'es-ES' },
      { char: 'N', lowerChar: 'n', name: 'Ene', sound: '[n]', ipa: '[n]', exampleWord: 'Noche', exampleTranslation: 'Night', speechCode: 'es-ES' },
      { char: 'Ñ', lowerChar: 'ñ', name: 'Eñe', sound: 'Palatal nasal [ɲ] like "canyon"', ipa: '[ɲ]', exampleWord: 'Niño', exampleTranslation: 'Boy / Child', speechCode: 'es-ES', pronunciationTip: 'Press tongue flat against the roof of mouth' },
      { char: 'O', lowerChar: 'o', name: 'O', sound: 'Pure [o]', ipa: '[o]', exampleWord: 'Ojo', exampleTranslation: 'Eye', speechCode: 'es-ES' },
      { char: 'P', lowerChar: 'p', name: 'Pe', sound: 'Unaspirated [p]', ipa: '[p]', exampleWord: 'Padre', exampleTranslation: 'Father', speechCode: 'es-ES' },
      { char: 'Q', lowerChar: 'q', name: 'Cu', sound: 'Always "qu", pronounced [k]', ipa: '[k]', exampleWord: 'Queso', exampleTranslation: 'Cheese', speechCode: 'es-ES' },
      { char: 'R', lowerChar: 'r', name: 'Erre', sound: 'Single tap [ɾ] between vowels, trill [r] at start', ipa: '[ɾ]/[r]', exampleWord: 'Rosa', exampleTranslation: 'Rose', speechCode: 'es-ES' },
      { char: 'S', lowerChar: 's', name: 'Ese', sound: '[s]', ipa: '[s]', exampleWord: 'Sol', exampleTranslation: 'Sun', speechCode: 'es-ES' },
      { char: 'T', lowerChar: 't', name: 'Te', sound: 'Dental [t]', ipa: '[t]', exampleWord: 'Tiempo', exampleTranslation: 'Time / Weather', speechCode: 'es-ES' },
      { char: 'U', lowerChar: 'u', name: 'U', sound: 'Pure [u]', ipa: '[u]', exampleWord: 'Uva', exampleTranslation: 'Grape', speechCode: 'es-ES' },
      { char: 'V', lowerChar: 'v', name: 'Uve', sound: 'Pronounced identically to B [b]/[β]', ipa: '[b]', exampleWord: 'Vino', exampleTranslation: 'Wine', speechCode: 'es-ES' },
      { char: 'W', lowerChar: 'w', name: 'Uve doble', sound: '[w]', ipa: '[w]', exampleWord: 'Web', exampleTranslation: 'Web', speechCode: 'es-ES' },
      { char: 'X', lowerChar: 'x', name: 'Equis', sound: '[ks] or [s]', ipa: '[ks]', exampleWord: 'Éxito', exampleTranslation: 'Success', speechCode: 'es-ES' },
      { char: 'Y', lowerChar: 'y', name: 'I griega / Ye', sound: '[ʝ] like "y" in "yes" or vowel [i]', ipa: '[ʝ]', exampleWord: 'Yo', exampleTranslation: 'I', speechCode: 'es-ES' },
      { char: 'Z', lowerChar: 'z', name: 'Zeta', sound: '[θ] (th in "think") in Spain, [s] in Latin America', ipa: '[θ]', exampleWord: 'Zapato', exampleTranslation: 'Shoe', speechCode: 'es-ES' }
    ]
  },

  japanese: {
    languageName: 'Japanese',
    code: 'ja',
    speechCode: 'ja-JP',
    scriptName: 'Hiragana, Katakana & Kanji (ひらがな・カタカナ・漢字)',
    direction: 'ltr',
    description: 'Japanese uses three interconnected writing systems: Hiragana (for grammatical particles and native words), Katakana (for foreign loanwords, technical terms, and emphasis), and Kanji (ideographic characters expressing meaning).',
    keyRules: [
      'Hiragana (46 basic characters) is a syllabary where each symbol represents a vowel or consonant+vowel mora.',
      'Katakana corresponds 1-to-1 with the 46 Hiragana sounds and is used for loanwords (e.g. コーヒー = coffee).',
      'Kanji characters originated in China and possess multiple readings: On-yomi (Sino-Japanese) and Kun-yomi (native Japanese).',
      'Dakuten marks (゛) voice unvoiced sounds (e.g. か ka -> が ga).'
    ],
    subCategories: ['Hiragana (ひらがな)', 'Katakana (カタカナ)', 'Essential Kanji (漢字)'],
    characters: [
      // Hiragana Core Vowels & Consonants
      { char: 'あ', name: 'A', sound: 'Pure [a]', transliteration: 'a', exampleWord: 'あさ (asa)', exampleTranslation: 'Morning', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'い', name: 'I', sound: 'Pure [i]', transliteration: 'i', exampleWord: 'いぬ (inu)', exampleTranslation: 'Dog', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'う', name: 'U', sound: 'Compressed [ɯ]', transliteration: 'u', exampleWord: 'うみ (umi)', exampleTranslation: 'Sea / Ocean', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'え', name: 'E', sound: 'Pure [e]', transliteration: 'e', exampleWord: 'えき (eki)', exampleTranslation: 'Train station', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'お', name: 'O', sound: 'Pure [o]', transliteration: 'o', exampleWord: 'お茶 (ocha)', exampleTranslation: 'Green tea', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'か', name: 'Ka', sound: '[ka]', transliteration: 'ka', exampleWord: 'かわ (kawa)', exampleTranslation: 'River', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'き', name: 'Ki', sound: '[ki]', transliteration: 'ki', exampleWord: 'き (ki)', exampleTranslation: 'Tree', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'く', name: 'Ku', sound: '[kɯ]', transliteration: 'ku', exampleWord: 'くるま (kuruma)', exampleTranslation: 'Car', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'け', name: 'Ke', sound: '[ke]', transliteration: 'ke', exampleWord: 'けさ (kesa)', exampleTranslation: 'This morning', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'こ', name: 'Ko', sound: '[ko]', transliteration: 'ko', exampleWord: 'こども (kodomo)', exampleTranslation: 'Child', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'さ', name: 'Sa', sound: '[sa]', transliteration: 'sa', exampleWord: 'さくら (sakura)', exampleTranslation: 'Cherry blossom', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'し', name: 'Shi', sound: '[ɕi] soft like "she"', transliteration: 'shi', exampleWord: 'しろ (shiro)', exampleTranslation: 'Castle / White', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'す', name: 'Su', sound: '[sɯ]', transliteration: 'su', exampleWord: 'すし (sushi)', exampleTranslation: 'Sushi', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'せ', name: 'Se', sound: '[se]', transliteration: 'se', exampleWord: 'せんせい (sensei)', exampleTranslation: 'Teacher / Professor', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'そ', name: 'So', sound: '[so]', transliteration: 'so', exampleWord: 'そら (sora)', exampleTranslation: 'Sky', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'た', name: 'Ta', sound: '[ta]', transliteration: 'ta', exampleWord: 'たべる (taberu)', exampleTranslation: 'To eat', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'ち', name: 'Chi', sound: '[t͡ɕi] like "cheese"', transliteration: 'chi', exampleWord: 'ちず (chizu)', exampleTranslation: 'Map', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'つ', name: 'Tsu', sound: '[t͡sɯ] like "cats"', transliteration: 'tsu', exampleWord: 'つき (tsuki)', exampleTranslation: 'Moon', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'て', name: 'Te', sound: '[te]', transliteration: 'te', exampleWord: 'て (te)', exampleTranslation: 'Hand', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'と', name: 'To', sound: '[to]', transliteration: 'to', exampleWord: 'ともだち (tomodachi)', exampleTranslation: 'Friend', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'な', name: 'Na', sound: '[na]', transliteration: 'na', exampleWord: 'なつ (natsu)', exampleTranslation: 'Summer', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'に', name: 'Ni', sound: '[ni]', transliteration: 'ni', exampleWord: 'にほん (nihon)', exampleTranslation: 'Japan', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'は', name: 'Ha', sound: '[ha] (pronounced "wa" as particle)', transliteration: 'ha / wa', exampleWord: 'はな (hana)', exampleTranslation: 'Flower / Nose', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'を', name: 'Wo / O', sound: '[o] direct object particle', transliteration: 'wo', exampleWord: '本をよむ (hon o yomu)', exampleTranslation: 'Read a book', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },
      { char: 'ん', name: 'N', sound: 'Moraic nasal [ɴ]', transliteration: 'n', exampleWord: 'ほん (hon)', exampleTranslation: 'Book', speechCode: 'ja-JP', category: 'Hiragana (ひらがな)' },

      // Katakana Examples
      { char: 'ア', name: 'A (Katakana)', sound: '[a]', transliteration: 'a', exampleWord: 'アメリカ (amerika)', exampleTranslation: 'America', speechCode: 'ja-JP', category: 'Katakana (カタカナ)' },
      { char: 'イ', name: 'I (Katakana)', sound: '[i]', transliteration: 'i', exampleWord: 'インターネット (intānetto)', exampleTranslation: 'Internet', speechCode: 'ja-JP', category: 'Katakana (カタカナ)' },
      { char: 'カ', name: 'Ka (Katakana)', sound: '[ka]', transliteration: 'ka', exampleWord: 'カメラ (kamera)', exampleTranslation: 'Camera', speechCode: 'ja-JP', category: 'Katakana (カタカナ)' },
      { char: 'コ', name: 'Ko (Katakana)', sound: '[ko]', transliteration: 'ko', exampleWord: 'コーヒー (kōhī)', exampleTranslation: 'Coffee', speechCode: 'ja-JP', category: 'Katakana (カタカナ)' },
      { char: 'テ', name: 'Te (Katakana)', sound: '[te]', transliteration: 'te', exampleWord: 'テレビ (terebi)', exampleTranslation: 'Television', speechCode: 'ja-JP', category: 'Katakana (カタカナ)' },

      // Essential Kanji
      { char: '日', name: 'Nichi / Hi', sound: 'Sun / Day', transliteration: 'nichi / hi', exampleWord: '日本 (nihon)', exampleTranslation: 'Japan', speechCode: 'ja-JP', category: 'Essential Kanji (漢字)', strokeOrderNotes: '4 strokes' },
      { char: '本', name: 'Hon / Moto', sound: 'Book / Origin', transliteration: 'hon', exampleWord: '本 (hon)', exampleTranslation: 'Book', speechCode: 'ja-JP', category: 'Essential Kanji (漢字)', strokeOrderNotes: '5 strokes' },
      { char: '学', name: 'Gaku / Mana-bu', sound: 'Study / Learn', transliteration: 'gaku', exampleWord: '学生 (gakusei)', exampleTranslation: 'Student', speechCode: 'ja-JP', category: 'Essential Kanji (漢字)', strokeOrderNotes: '8 strokes' },
      { char: '生', name: 'Sei / I-kiru', sound: 'Life / Birth', transliteration: 'sei', exampleWord: '先生 (sensei)', exampleTranslation: 'Teacher', speechCode: 'ja-JP', category: 'Essential Kanji (漢字)', strokeOrderNotes: '5 strokes' },
      { char: '私', name: 'Shi / Watashi', sound: 'I / Me / Private', transliteration: 'watashi', exampleWord: '私 (watashi)', exampleTranslation: 'I / Myself', speechCode: 'ja-JP', category: 'Essential Kanji (漢字)', strokeOrderNotes: '7 strokes' }
    ]
  },

  korean: {
    languageName: 'Korean',
    code: 'ko',
    speechCode: 'ko-KR',
    scriptName: 'Hangul (한글)',
    direction: 'ltr',
    description: 'Hangul is widely recognized as one of the most scientifically designed alphabets in history. Consonants visually mimic the shape of the mouth and tongue during pronunciation, while vowels represent heaven, earth, and human.',
    keyRules: [
      'Characters are not written in a linear stream; they are assembled into SYLLABLE BLOCKS (Initial Consonant + Medial Vowel + optional Final Batchim).',
      'The silent initial consonant "ㅇ" (ieung) is used when a syllable begins with a vowel sound (e.g. 아 = a).',
      'Batchim (받침) are final consonants in a syllable block that alter pronunciation through liaison.'
    ],
    characters: [
      // Consonants (자음)
      { char: 'ㄱ', name: 'Giyeok (기역)', sound: '[k]/[ɡ]', transliteration: 'g / k', exampleWord: '가방 (gabang)', exampleTranslation: 'Bag', speechCode: 'ko-KR', pronunciationTip: 'Lightly voiced g at start of syllable' },
      { char: 'ㄴ', name: 'Nieun (니은)', sound: '[n]', transliteration: 'n', exampleWord: '나무 (namu)', exampleTranslation: 'Tree', speechCode: 'ko-KR' },
      { char: 'ㄷ', name: 'Digeut (디귿)', sound: '[t]/[d]', transliteration: 'd / t', exampleWord: '도시 (dosi)', exampleTranslation: 'City', speechCode: 'ko-KR' },
      { char: 'ㄹ', name: 'Rieul (리을)', sound: '[ɾ] flap between vowels, [l] at end', transliteration: 'r / l', exampleWord: '라면 (ramyeon)', exampleTranslation: 'Ramen', speechCode: 'ko-KR' },
      { char: 'ㅁ', name: 'Mieum (미음)', sound: '[m]', transliteration: 'm', exampleWord: '물 (mul)', exampleTranslation: 'Water', speechCode: 'ko-KR' },
      { char: 'ㅂ', name: 'Bieup (비읍)', sound: '[p]/[b]', transliteration: 'b / p', exampleWord: '밥 (bap)', exampleTranslation: 'Cooked rice / Meal', speechCode: 'ko-KR' },
      { char: 'ㅅ', name: 'Siot (시옷)', sound: '[s] or [ɕ] before i', transliteration: 's', exampleWord: '사랑 (sarang)', exampleTranslation: 'Love', speechCode: 'ko-KR' },
      { char: 'ㅇ', name: 'Ieung (이응)', sound: 'Silent at start; [ŋ] (ng) as final batchim', transliteration: 'silent / ng', exampleWord: '아이 (ai)', exampleTranslation: 'Child', speechCode: 'ko-KR' },
      { char: 'ㅈ', name: 'Jieut (지읒)', sound: '[t͡ɕ]/[d͡ʑ]', transliteration: 'j', exampleWord: '지도 (jido)', exampleTranslation: 'Map', speechCode: 'ko-KR' },
      { char: 'ㅊ', name: 'Chieut (치읓)', sound: 'Aspirated [t͡ɕʰ]', transliteration: 'ch', exampleWord: '친구 (chingu)', exampleTranslation: 'Friend', speechCode: 'ko-KR' },
      { char: 'ㅋ', name: 'Kieuk (키읔)', sound: 'Aspirated [kʰ]', transliteration: 'k', exampleWord: '커피 (keopi)', exampleTranslation: 'Coffee', speechCode: 'ko-KR' },
      { char: 'ㅌ', name: 'Tieut (티읕)', sound: 'Aspirated [tʰ]', transliteration: 't', exampleWord: '토마토 (tomato)', exampleTranslation: 'Tomato', speechCode: 'ko-KR' },
      { char: 'ㅍ', name: 'Pieup (피읖)', sound: 'Aspirated [pʰ]', transliteration: 'p', exampleWord: '포도 (podo)', exampleTranslation: 'Grape', speechCode: 'ko-KR' },
      { char: 'ㅎ', name: 'Hieut (히읗)', sound: '[h]', transliteration: 'h', exampleWord: '하늘 (haneul)', exampleTranslation: 'Sky', speechCode: 'ko-KR' },

      // Basic Vowels (모음)
      { char: 'ㅏ', name: 'A (아)', sound: 'Bright [a]', transliteration: 'a', exampleWord: '아버지 (abeoji)', exampleTranslation: 'Father', speechCode: 'ko-KR' },
      { char: 'ㅑ', name: 'Ya (야)', sound: '[ja]', transliteration: 'ya', exampleWord: '야구 (yagu)', exampleTranslation: 'Baseball', speechCode: 'ko-KR' },
      { char: 'ㅓ', name: 'Eo (어)', sound: 'Open back [ʌ]', transliteration: 'eo', exampleWord: '어머니 (eomeoni)', exampleTranslation: 'Mother', speechCode: 'ko-KR' },
      { char: 'ㅕ', name: 'Yeo (여)', sound: '[jʌ]', transliteration: 'yeo', exampleWord: '여자 (yeoja)', exampleTranslation: 'Woman', speechCode: 'ko-KR' },
      { char: 'ㅗ', name: 'O (오)', sound: 'Rounded [o]', transliteration: 'o', exampleWord: '오늘 (oneul)', exampleTranslation: 'Today', speechCode: 'ko-KR' },
      { char: 'ㅛ', name: 'Yo (요)', sound: '[jo]', transliteration: 'yo', exampleWord: '요리 (yori)', exampleTranslation: 'Cooking', speechCode: 'ko-KR' },
      { char: 'ㅜ', name: 'U (우)', sound: '[u]', transliteration: 'u', exampleWord: '우리 (uri)', exampleTranslation: 'We / Our', speechCode: 'ko-KR' },
      { char: 'ㅠ', name: 'Yu (유)', sound: '[ju]', transliteration: 'yu', exampleWord: '유학 (yuhak)', exampleTranslation: 'Study abroad', speechCode: 'ko-KR' },
      { char: 'ㅡ', name: 'Eu (으)', sound: 'Unrounded [ɯ]', transliteration: 'eu', exampleWord: '음악 (eum-ak)', exampleTranslation: 'Music', speechCode: 'ko-KR' },
      { char: 'ㅣ', name: 'I (이)', sound: '[i]', transliteration: 'i', exampleWord: '이름 (ireum)', exampleTranslation: 'Name', speechCode: 'ko-KR' }
    ]
  },

  chinese: {
    languageName: 'Chinese (Mandarin)',
    code: 'zh',
    speechCode: 'zh-CN',
    scriptName: 'Pinyin & Simplified Chinese Characters (拼音与汉字)',
    direction: 'ltr',
    description: 'Mandarin Chinese is a tonal language where pitch contour completely changes word meaning. Pinyin is the official romanization standard, incorporating 4 tones plus a neutral tone.',
    keyRules: [
      'Tone 1 (High Level, ˉ): High and flat pitch (e.g. mā 妈 - mother).',
      'Tone 2 (Rising, ˊ): Pitched from middle to high like asking a question (e.g. má 麻 - hemp).',
      'Tone 3 (Falling-Rising, ˇ): Dips low then rises (e.g. mǎ 马 - horse).',
      'Tone 4 (Falling, ˋ): Sharp, decisive drop like a military command (e.g. mà 骂 - scold).',
      'Tone Sandhi: When two 3rd tones appear consecutively, the first changes to a 2nd tone (e.g. Nǐ hǎo -> Ní hǎo).'
    ],
    characters: [
      { char: 'b', name: 'b (玻 bō)', sound: 'Unaspirated [p] like "sp" in "spin"', transliteration: 'b', exampleWord: '爸爸 (bàba)', exampleTranslation: 'Dad', speechCode: 'zh-CN' },
      { char: 'p', name: 'p (坡 pō)', sound: 'Strongly aspirated [pʰ]', transliteration: 'p', exampleWord: '朋友 (péngyou)', exampleTranslation: 'Friend', speechCode: 'zh-CN' },
      { char: 'm', name: 'm (摸 mō)', sound: '[m]', transliteration: 'm', exampleWord: '妈妈 (māma)', exampleTranslation: 'Mother', speechCode: 'zh-CN' },
      { char: 'f', name: 'f (佛 fó)', sound: '[f]', transliteration: 'f', exampleWord: '飞机 (fēijī)', exampleTranslation: 'Airplane', speechCode: 'zh-CN' },
      { char: 'd', name: 'd (得 dé)', sound: 'Unaspirated [t] like "st" in "stop"', transliteration: 'd', exampleWord: '大学 (dàxué)', exampleTranslation: 'University', speechCode: 'zh-CN' },
      { char: 't', name: 't (特 tè)', sound: 'Aspirated [tʰ]', transliteration: 't', exampleWord: '天气 (tiānqì)', exampleTranslation: 'Weather', speechCode: 'zh-CN' },
      { char: 'n', name: 'n (讷 nè)', sound: '[n]', transliteration: 'n', exampleWord: '你好 (nǐ hǎo)', exampleTranslation: 'Hello', speechCode: 'zh-CN' },
      { char: 'l', name: 'l (勒 lè)', sound: '[l]', transliteration: 'l', exampleWord: '老师 (lǎoshī)', exampleTranslation: 'Teacher', speechCode: 'zh-CN' },
      { char: 'g', name: 'g (哥 gē)', sound: 'Unaspirated [k] like "sk" in "skill"', transliteration: 'g', exampleWord: '高兴 (gāoxìng)', exampleTranslation: 'Happy', speechCode: 'zh-CN' },
      { char: 'k', name: 'k (科 kē)', sound: 'Aspirated [kʰ]', transliteration: 'k', exampleWord: '咖啡 (kāfēi)', exampleTranslation: 'Coffee', speechCode: 'zh-CN' },
      { char: 'h', name: 'h (喝 hē)', sound: 'Velar fricative [x]', transliteration: 'h', exampleWord: '汉语 (hànyǔ)', exampleTranslation: 'Chinese language', speechCode: 'zh-CN' },
      { char: 'j', name: 'j (基 jī)', sound: 'Palatal [t͡ɕ] like "jeep"', transliteration: 'j', exampleWord: '今天 (jīntiān)', exampleTranslation: 'Today', speechCode: 'zh-CN' },
      { char: 'q', name: 'q (欺 qī)', sound: 'Aspirated palatal [t͡ɕʰ] like "cheese"', transliteration: 'q', exampleWord: '请 (qǐng)', exampleTranslation: 'Please', speechCode: 'zh-CN' },
      { char: 'x', name: 'x (希 xī)', sound: 'Alveolo-palatal [ɕ] soft "sh"', transliteration: 'x', exampleWord: '谢谢 (xièxie)', exampleTranslation: 'Thank you', speechCode: 'zh-CN' },
      { char: 'zh', name: 'zh (知 zhī)', sound: 'Retroflex [ʈ͡ʂ] with tongue curled back', transliteration: 'zh', exampleWord: '中国 (zhōngguó)', exampleTranslation: 'China', speechCode: 'zh-CN' },
      { char: 'ch', name: 'ch (吃 chī)', sound: 'Aspirated retroflex [ʈ͡ʂʰ]', transliteration: 'ch', exampleWord: '吃饭 (chīfàn)', exampleTranslation: 'Eat food', speechCode: 'zh-CN' },
      { char: 'sh', name: 'sh (诗 shī)', sound: 'Retroflex [ʂ]', transliteration: 'sh', exampleWord: '什么 (shénme)', exampleTranslation: 'What', speechCode: 'zh-CN' },
      { char: 'r', name: 'r (日 rì)', sound: 'Voiced retroflex [ʐ]', transliteration: 'r', exampleWord: '认识 (rènshi)', exampleTranslation: 'To know / meet', speechCode: 'zh-CN' },

      // Core Characters & Radicals
      { char: '人', name: 'Rén (Person)', sound: 'rén', transliteration: 'rén', exampleWord: '中国人 (zhōngguó rén)', exampleTranslation: 'Chinese person', speechCode: 'zh-CN' },
      { char: '大', name: 'Dà (Big)', sound: 'dà', transliteration: 'dà', exampleWord: '大家 (dàjiā)', exampleTranslation: 'Everyone', speechCode: 'zh-CN' },
      { char: '中', name: 'Zhōng (Center / Middle)', sound: 'zhōng', transliteration: 'zhōng', exampleWord: '中文 (zhōngwén)', exampleTranslation: 'Chinese language', speechCode: 'zh-CN' },
      { char: '学', name: 'Xué (Study / School)', sound: 'xué', transliteration: 'xué', exampleWord: '学生 (xuéshēng)', exampleTranslation: 'Student', speechCode: 'zh-CN' }
    ]
  },

  arabic: {
    languageName: 'Arabic',
    code: 'ar',
    speechCode: 'ar-SA',
    scriptName: 'Arabic Abjad (الأبجدية العربية)',
    direction: 'rtl',
    description: 'Arabic is written from right to left (RTL) in a flowing cursive script where letters change shape depending on whether they appear in isolated, initial, medial, or final positions in a word.',
    keyRules: [
      'Written strictly RIGHT-TO-LEFT.',
      'All 28 letters are consonants; short vowels (fatḥa, kasra, ḍamma) are represented by diacritics (Harakat).',
      'Six "non-connector" letters (ا, د, ذ, ر, ز, و) never connect to following letters on the left.'
    ],
    characters: [
      { char: 'ا', name: 'Alif (ألف)', sound: 'Long vowel [aː] or glottal stop carrier', transliteration: 'ā', exampleWord: 'أستاذ (Ustādh)', exampleTranslation: 'Professor', speechCode: 'ar-SA', forms: { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا' } },
      { char: 'ب', name: 'Bā’ (باء)', sound: '[b]', transliteration: 'b', exampleWord: 'باب (Bāb)', exampleTranslation: 'Door', speechCode: 'ar-SA', forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' } },
      { char: 'ت', name: 'Tā’ (تاء)', sound: '[t]', transliteration: 't', exampleWord: 'تفاح (Tuffāḥ)', exampleTranslation: 'Apples', speechCode: 'ar-SA', forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' } },
      { char: 'ث', name: 'Thā’ (ثاء)', sound: '[θ] like "th" in "think"', transliteration: 'th', exampleWord: 'ثلاثة (Thalāthah)', exampleTranslation: 'Three', speechCode: 'ar-SA', forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' } },
      { char: 'ج', name: 'Jīm (جيم)', sound: '[d͡ʒ] like "j" in "jump"', transliteration: 'j', exampleWord: 'جامعة (Jāmi‘ah)', exampleTranslation: 'University', speechCode: 'ar-SA', forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' } },
      { char: 'ح', name: 'Ḥā’ (حاء)', sound: 'Voiceless pharyngeal [ħ] deep breathy "h"', transliteration: 'ḥ', exampleWord: 'حبيب (Ḥabīb)', exampleTranslation: 'Beloved / Friend', speechCode: 'ar-SA', forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' }, pronunciationTip: 'Breathe hot air from the back of the throat' },
      { char: 'خ', name: 'Khā’ (خاء)', sound: 'Voiceless uvular fricative [x]', transliteration: 'kh', exampleWord: 'خبز (Khubz)', exampleTranslation: 'Bread', speechCode: 'ar-SA', forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' } },
      { char: 'د', name: 'Dāl (دال)', sound: '[d]', transliteration: 'd', exampleWord: 'دفتر (Daftar)', exampleTranslation: 'Notebook', speechCode: 'ar-SA', forms: { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد' } },
      { char: 'ر', name: 'Rā’ (راء)', sound: 'Rolled alveolar tap [r]', transliteration: 'r', exampleWord: 'رجل (Rajul)', exampleTranslation: 'Man', speechCode: 'ar-SA', forms: { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر' } },
      { char: 'س', name: 'Sīn (سين)', sound: '[s]', transliteration: 's', exampleWord: 'سلام (Salām)', exampleTranslation: 'Peace', speechCode: 'ar-SA', forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' } },
      { char: 'ش', name: 'Shīn (شين)', sound: '[ʃ] like "sh"', transliteration: 'sh', exampleWord: 'شكراً (Shukran)', exampleTranslation: 'Thank you', speechCode: 'ar-SA', forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' } },
      { char: 'ع', name: '‘Ayn (عين)', sound: 'Voiced pharyngeal fricative [ʕ]', transliteration: '‘', exampleWord: 'عربي (Arabī)', exampleTranslation: 'Arabic', speechCode: 'ar-SA', forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' }, pronunciationTip: 'Constrict throat muscles tightly' },
      { char: 'م', name: 'Mīm (ميم)', sound: '[m]', transliteration: 'm', exampleWord: 'مدينة (Madīnah)', exampleTranslation: 'City', speechCode: 'ar-SA', forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' } },
      { char: 'ن', name: 'Nūn (نون)', sound: '[n]', transliteration: 'n', exampleWord: 'نور (Nūr)', exampleTranslation: 'Light', speechCode: 'ar-SA', forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' } },
      { char: 'و', name: 'Wāw (واو)', sound: '[w] or long vowel [uː]', transliteration: 'w / ū', exampleWord: 'واحد (Wāḥid)', exampleTranslation: 'One', speechCode: 'ar-SA', forms: { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو' } },
      { char: 'ي', name: 'Yā’ (ياء)', sound: '[j] or long vowel [iː]', transliteration: 'y / ī', exampleWord: 'يوم (Yawm)', exampleTranslation: 'Day', speechCode: 'ar-SA', forms: { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' } }
    ]
  },

  russian: {
    languageName: 'Russian',
    code: 'ru',
    speechCode: 'ru-RU',
    scriptName: 'Cyrillic Alphabet (Русский алфавит)',
    direction: 'ltr',
    description: 'Russian uses 33 Cyrillic letters (10 vowels, 21 consonants, and 2 signs). Consonants can be "hard" (velarized) or "soft" (palatalized), fundamentally altering word meaning.',
    keyRules: [
      'Soft sign (Ь) palatalizes the preceding consonant without making a sound of its own.',
      'Hard sign (Ъ) acts as a separator preventing palatalization.',
      'Unstressed "O" reduces to an "A" sound (Akanie, e.g. молоко -> "malaKO").',
      'Word stress in Russian is dynamic and changes vowel qualities drastically.'
    ],
    characters: [
      { char: 'А', lowerChar: 'а', name: 'A', sound: '[a]', transliteration: 'a', exampleWord: 'Адрес', exampleTranslation: 'Address', speechCode: 'ru-RU' },
      { char: 'Б', lowerChar: 'б', name: 'Бэ', sound: '[b]', transliteration: 'b', exampleWord: 'Билет', exampleTranslation: 'Ticket', speechCode: 'ru-RU' },
      { char: 'В', lowerChar: 'в', name: 'Вэ', sound: '[v]', transliteration: 'v', exampleWord: 'Вода', exampleTranslation: 'Water', speechCode: 'ru-RU' },
      { char: 'Г', lowerChar: 'г', name: 'Гэ', sound: '[ɡ]', transliteration: 'g', exampleWord: 'Город', exampleTranslation: 'City', speechCode: 'ru-RU' },
      { char: 'Д', lowerChar: 'д', name: 'Дэ', sound: '[d]', transliteration: 'd', exampleWord: 'Друг', exampleTranslation: 'Friend', speechCode: 'ru-RU' },
      { char: 'Е', lowerChar: 'е', name: 'Е', sound: '[je] like "ye" in "yes"', transliteration: 'ye / e', exampleWord: 'Европа', exampleTranslation: 'Europe', speechCode: 'ru-RU' },
      { char: 'Ё', lowerChar: 'ё', name: 'Ё', sound: '[jo] like "yo"', transliteration: 'yo', exampleWord: 'Ёлка', exampleTranslation: 'Fir tree', speechCode: 'ru-RU' },
      { char: 'Ж', lowerChar: 'ж', name: 'Жэ', sound: 'Voiced retroflex [ʐ] like "s" in "treasure"', transliteration: 'zh', exampleWord: 'Жизнь', exampleTranslation: 'Life', speechCode: 'ru-RU' },
      { char: 'З', lowerChar: 'з', name: 'Зэ', sound: '[z]', transliteration: 'z', exampleWord: 'Здравствуйте', exampleTranslation: 'Hello', speechCode: 'ru-RU' },
      { char: 'И', lowerChar: 'и', name: 'И', sound: '[i]', transliteration: 'i', exampleWord: 'История', exampleTranslation: 'History', speechCode: 'ru-RU' },
      { char: 'Й', lowerChar: 'й', name: 'И краткое', sound: '[j] short "y"', transliteration: 'y', exampleWord: 'Музей', exampleTranslation: 'Museum', speechCode: 'ru-RU' },
      { char: 'К', lowerChar: 'к', name: 'Ка', sound: '[k]', transliteration: 'k', exampleWord: 'Книга', exampleTranslation: 'Book', speechCode: 'ru-RU' },
      { char: 'Л', lowerChar: 'л', name: 'Эль', sound: '[l]', transliteration: 'l', exampleWord: 'Любовь', exampleTranslation: 'Love', speechCode: 'ru-RU' },
      { char: 'М', lowerChar: 'м', name: 'Эм', sound: '[m]', transliteration: 'm', exampleWord: 'Москва', exampleTranslation: 'Moscow', speechCode: 'ru-RU' },
      { char: 'Н', lowerChar: 'н', name: 'Эн', sound: '[n]', transliteration: 'n', exampleWord: 'Номер', exampleTranslation: 'Number / Room', speechCode: 'ru-RU' },
      { char: 'О', lowerChar: 'о', name: 'О', sound: '[o] when stressed, [a] when unstressed', transliteration: 'o', exampleWord: 'Окно', exampleTranslation: 'Window', speechCode: 'ru-RU' },
      { char: 'П', lowerChar: 'п', name: 'Пэ', sound: '[p]', transliteration: 'p', exampleWord: 'Поезд', exampleTranslation: 'Train', speechCode: 'ru-RU' },
      { char: 'Р', lowerChar: 'р', name: 'Эр', sound: 'Rolled trill [r]', transliteration: 'r', exampleWord: 'Россия', exampleTranslation: 'Russia', speechCode: 'ru-RU' },
      { char: 'С', lowerChar: 'с', name: 'Эс', sound: '[s]', transliteration: 's', exampleWord: 'Студент', exampleTranslation: 'Student', speechCode: 'ru-RU' },
      { char: 'Т', lowerChar: 'т', name: 'Тэ', sound: '[t]', transliteration: 't', exampleWord: 'Театр', exampleTranslation: 'Theater', speechCode: 'ru-RU' },
      { char: 'У', lowerChar: 'у', name: 'У', sound: '[u]', transliteration: 'u', exampleWord: 'Университет', exampleTranslation: 'University', speechCode: 'ru-RU' },
      { char: 'Ф', lowerChar: 'ф', name: 'Эф', sound: '[f]', transliteration: 'f', exampleWord: 'Фотография', exampleTranslation: 'Photograph', speechCode: 'ru-RU' },
      { char: 'Х', lowerChar: 'х', name: 'Ха', sound: 'Velar fricative [x] like "loch"', transliteration: 'kh', exampleWord: 'Хорошо', exampleTranslation: 'Good / Well', speechCode: 'ru-RU' },
      { char: 'Ц', lowerChar: 'ц', name: 'Цэ', sound: '[ts] like "cats"', transliteration: 'ts', exampleWord: 'Центр', exampleTranslation: 'Center', speechCode: 'ru-RU' },
      { char: 'Ч', lowerChar: 'ч', name: 'Че', sound: 'Soft [t͡ɕ] like "cheese"', transliteration: 'ch', exampleWord: 'Чай', exampleTranslation: 'Tea', speechCode: 'ru-RU' },
      { char: 'Ш', lowerChar: 'ш', name: 'Ша', sound: 'Hard [ʂ] like "sh"', transliteration: 'sh', exampleWord: 'Школа', exampleTranslation: 'School', speechCode: 'ru-RU' },
      { char: 'Щ', lowerChar: 'щ', name: 'Ща', sound: 'Long soft [ɕː] like "fresh cheese"', transliteration: 'shch', exampleWord: 'Борщ', exampleTranslation: 'Borscht soup', speechCode: 'ru-RU' },
      { char: 'Ъ', lowerChar: 'ъ', name: 'Твёрдый знак', sound: 'Hard sign (separator)', transliteration: '”', exampleWord: 'Объект', exampleTranslation: 'Object', speechCode: 'ru-RU' },
      { char: 'Ы', lowerChar: 'ы', name: 'Ы', sound: 'Close central unrounded [ɨ]', transliteration: 'y', exampleWord: 'Мы', exampleTranslation: 'We', speechCode: 'ru-RU', pronunciationTip: 'Pull tongue back towards throat while making an "ee" sound' },
      { char: 'Ь', lowerChar: 'ь', name: 'Мягкий знак', sound: 'Soft sign (softens preceding consonant)', transliteration: '’', exampleWord: 'День', exampleTranslation: 'Day', speechCode: 'ru-RU' },
      { char: 'Э', lowerChar: 'э', name: 'Э оборотное', sound: 'Open [ɛ]', transliteration: 'e', exampleWord: 'Это', exampleTranslation: 'This is', speechCode: 'ru-RU' },
      { char: 'Ю', lowerChar: 'ю', name: 'Ю', sound: '[ju] like "you"', transliteration: 'yu', exampleWord: 'Юг', exampleTranslation: 'South', speechCode: 'ru-RU' },
      { char: 'Я', lowerChar: 'я', name: 'Я', sound: '[ja] like "ya"', transliteration: 'ya', exampleWord: 'Яблоко', exampleTranslation: 'Apple', speechCode: 'ru-RU' }
    ]
  },

  hindi: {
    languageName: 'Hindi',
    code: 'hi',
    speechCode: 'hi-IN',
    scriptName: 'Devanagari Script (देवनागरी लिपि)',
    direction: 'ltr',
    description: 'Devanagari is an abugida script written from left to right with a distinctive horizontal hanging line (Shirorekha). Every consonant carries an inherent "a" vowel unless modified by a Matra (vowel sign).',
    keyRules: [
      'The horizontal line (Shirorekha) connects characters in a word.',
      'Consonants distinguish between UNASPIRATED and ASPIRATED sounds (e.g. क ka vs ख kha).',
      'Dental vs Retroflex: त (soft dental t) vs ट (hard retroflex t with tongue curled to palate).'
    ],
    characters: [
      // Vowels (स्वर)
      { char: 'अ', name: 'A', sound: 'Short [ə]', transliteration: 'a', exampleWord: 'अमृत (Amrit)', exampleTranslation: 'Nectar', speechCode: 'hi-IN' },
      { char: 'आ', name: 'Aa', sound: 'Long [aː]', transliteration: 'aa', exampleWord: 'आम (Aam)', exampleTranslation: 'Mango', speechCode: 'hi-IN' },
      { char: 'इ', name: 'I', sound: 'Short [ɪ]', transliteration: 'i', exampleWord: 'इमली (Imli)', exampleTranslation: 'Tamarind', speechCode: 'hi-IN' },
      { char: 'ई', name: 'Ee', sound: 'Long [iː]', transliteration: 'ee', exampleWord: 'ईख (Eekh)', exampleTranslation: 'Sugarcane', speechCode: 'hi-IN' },
      { char: 'उ', name: 'U', sound: 'Short [ʊ]', transliteration: 'u', exampleWord: 'उपहार (Upahaar)', exampleTranslation: 'Gift', speechCode: 'hi-IN' },
      { char: 'ऊ', name: 'Oo', sound: 'Long [uː]', transliteration: 'oo', exampleWord: 'ऊंट (Oont)', exampleTranslation: 'Camel', speechCode: 'hi-IN' },
      { char: 'ए', name: 'E', sound: '[eː]', transliteration: 'e', exampleWord: 'एक (Ek)', exampleTranslation: 'One', speechCode: 'hi-IN' },
      { char: 'ऐ', name: 'Ai', sound: '[ɛː]', transliteration: 'ai', exampleWord: 'ऐनक (Ainak)', exampleTranslation: 'Eyeglasses', speechCode: 'hi-IN' },
      { char: 'ओ', name: 'O', sound: '[oː]', transliteration: 'o', exampleWord: 'ओस (Oas)', exampleTranslation: 'Dew', speechCode: 'hi-IN' },
      { char: 'औ', name: 'Au', sound: '[ɔː]', transliteration: 'au', exampleWord: 'औरत (Aurat)', exampleTranslation: 'Woman', speechCode: 'hi-IN' },

      // Consonants (व्यंजन)
      { char: 'क', name: 'Ka', sound: 'Unaspirated [k]', transliteration: 'ka', exampleWord: 'कमल (Kamal)', exampleTranslation: 'Lotus', speechCode: 'hi-IN' },
      { char: 'ख', name: 'Kha', sound: 'Aspirated [kʰ]', transliteration: 'kha', exampleWord: 'खरगोश (Khargosh)', exampleTranslation: 'Rabbit', speechCode: 'hi-IN' },
      { char: 'ग', name: 'Ga', sound: 'Voiced [ɡ]', transliteration: 'ga', exampleWord: 'गमला (Gamla)', exampleTranslation: 'Flowerpot', speechCode: 'hi-IN' },
      { char: 'घ', name: 'Gha', sound: 'Voiced aspirated [ɡʱ]', transliteration: 'gha', exampleWord: 'घर (Ghar)', exampleTranslation: 'Home / House', speechCode: 'hi-IN' },
      { char: 'च', name: 'Cha', sound: 'Unaspirated [t͡ʃ]', transliteration: 'cha', exampleWord: 'चम्मच (Chammach)', exampleTranslation: 'Spoon', speechCode: 'hi-IN' },
      { char: 'छ', name: 'Chha', sound: 'Aspirated [t͡ʃʰ]', transliteration: 'chha', exampleWord: 'छतरी (Chhatri)', exampleTranslation: 'Umbrella', speechCode: 'hi-IN' },
      { char: 'ज', name: 'Ja', sound: 'Voiced [d͡ʒ]', transliteration: 'ja', exampleWord: 'जल (Jal)', exampleTranslation: 'Water', speechCode: 'hi-IN' },
      { char: 'झ', name: 'Jha', sound: 'Voiced aspirated [d͡ʒʱ]', transliteration: 'jha', exampleWord: 'झंडा (Jhanda)', exampleTranslation: 'Flag', speechCode: 'hi-IN' },
      { char: 'त', name: 'Ta (Dental)', sound: 'Soft dental [t̪]', transliteration: 'ta', exampleWord: 'तारा (Tara)', exampleTranslation: 'Star', speechCode: 'hi-IN' },
      { char: 'द', name: 'Da (Dental)', sound: 'Soft dental [d̪]', transliteration: 'da', exampleWord: 'दरवाज़ा (Darwaza)', exampleTranslation: 'Door', speechCode: 'hi-IN' },
      { char: 'न', name: 'Na', sound: '[n]', transliteration: 'na', exampleWord: 'नमस्ते (Namaste)', exampleTranslation: 'Greetings / Hello', speechCode: 'hi-IN' },
      { char: 'प', name: 'Pa', sound: '[p]', transliteration: 'pa', exampleWord: 'पानी (Paani)', exampleTranslation: 'Water', speechCode: 'hi-IN' },
      { char: 'म', name: 'Ma', sound: '[m]', transliteration: 'ma', exampleWord: 'माता (Maata)', exampleTranslation: 'Mother', speechCode: 'hi-IN' }
    ]
  },

  telugu: {
    languageName: 'Telugu',
    code: 'te',
    speechCode: 'te-IN',
    scriptName: 'Telugu Script (తెలుగు లిపి)',
    direction: 'ltr',
    description: 'Telugu is an abugida script famed for its elegant, flowing circular loops (often hailed historically as "the Italian of the East" due to all words ending in vowels).',
    keyRules: [
      'Every native Telugu word ends in a vowel sound.',
      'Gunintalu (గుణింతాలు) are vowel diacritic signs attached to consonants.',
      'Ottulu (ఒత్తులు) are subjoined conjunct consonant forms.'
    ],
    characters: [
      // Vowels (అచ్చులు)
      { char: 'అ', name: 'A', sound: 'Short [a]', transliteration: 'a', exampleWord: 'అమ్మ (Amma)', exampleTranslation: 'Mother', speechCode: 'te-IN' },
      { char: 'ఆ', name: 'Aa', sound: 'Long [aː]', transliteration: 'aa', exampleWord: 'ఆవు (Aavu)', exampleTranslation: 'Cow', speechCode: 'te-IN' },
      { char: 'ఇ', name: 'I', sound: 'Short [i]', transliteration: 'i', exampleWord: 'ఇల్లు (Illu)', exampleTranslation: 'House', speechCode: 'te-IN' },
      { char: 'ఈ', name: 'Ee', sound: 'Long [iː]', transliteration: 'ee', exampleWord: 'ఈగ (Eega)', exampleTranslation: 'Fly', speechCode: 'te-IN' },
      { char: 'ఉ', name: 'U', sound: 'Short [u]', transliteration: 'u', exampleWord: 'ఉడుత (Uduta)', exampleTranslation: 'Squirrel', speechCode: 'te-IN' },
      { char: 'ఊ', name: 'Oo', sound: 'Long [uː]', transliteration: 'oo', exampleWord: 'ఊరు (Ooru)', exampleTranslation: 'Village / Town', speechCode: 'te-IN' },
      { char: 'ఎ', name: 'E', sound: 'Short [e]', transliteration: 'e', exampleWord: 'ఎలుక (Eluka)', exampleTranslation: 'Rat', speechCode: 'te-IN' },
      { char: 'ఏ', name: 'Ae', sound: 'Long [eː]', transliteration: 'ae', exampleWord: 'ఏనుగు (Eenugu)', exampleTranslation: 'Elephant', speechCode: 'te-IN' },
      { char: 'ఒ', name: 'O', sound: 'Short [o]', transliteration: 'o', exampleWord: 'ఒంటె (Onte)', exampleTranslation: 'Camel', speechCode: 'te-IN' },
      { char: 'ఓ', name: 'Oo', sound: 'Long [oː]', transliteration: 'oo', exampleWord: 'ఓడ (Oada)', exampleTranslation: 'Ship', speechCode: 'te-IN' },

      // Consonants (హల్లులు)
      { char: 'క', name: 'Ka', sound: '[k]', transliteration: 'ka', exampleWord: 'కన్ను (Kannu)', exampleTranslation: 'Eye', speechCode: 'te-IN' },
      { char: 'గ', name: 'Ga', sound: '[ɡ]', transliteration: 'ga', exampleWord: 'గడియారం (Gadiyaram)', exampleTranslation: 'Clock', speechCode: 'te-IN' },
      { char: 'చ', name: 'Cha', sound: '[t͡ʃ]', transliteration: 'cha', exampleWord: 'చంద్రుడు (Chandrudu)', exampleTranslation: 'Moon', speechCode: 'te-IN' },
      { char: 'త', name: 'Ta', sound: 'Dental [t̪]', transliteration: 'ta', exampleWord: 'తల (Tala)', exampleTranslation: 'Head', speechCode: 'te-IN' },
      { char: 'ద', name: 'Da', sound: 'Dental [d̪]', transliteration: 'da', exampleWord: 'దండ (Danda)', exampleTranslation: 'Garland', speechCode: 'te-IN' },
      { char: 'న', name: 'Na', sound: '[n]', transliteration: 'na', exampleWord: 'నమస్కారం (Namaskaram)', exampleTranslation: 'Greetings', speechCode: 'te-IN' },
      { char: 'ప', name: 'Pa', sound: '[p]', transliteration: 'pa', exampleWord: 'పుస్తకం (Pustakam)', exampleTranslation: 'Book', speechCode: 'te-IN' },
      { char: 'మ', name: 'Ma', sound: '[m]', transliteration: 'ma', exampleWord: 'మిత్రుడు (Mitrudu)', exampleTranslation: 'Friend', speechCode: 'te-IN' }
    ]
  },

  english: {
    languageName: 'English',
    code: 'en',
    speechCode: 'en-US',
    scriptName: 'English Latin Alphabet (A-Z)',
    direction: 'ltr',
    description: 'English uses 26 letters consisting of 5 vowels (A, E, I, O, U, and sometimes Y) and 21 consonants, producing over 44 distinct phonemes in spoken communication.',
    keyRules: [
      'Short vs Long vowels: e.g. "bit" [ɪ] vs "bite" [aɪ].',
      'The "Magic E" rule: silent final "e" makes the preceding vowel say its name (e.g. hop -> hope, tap -> tape).',
      'Digraphs: "TH" has two sounds (voiced in "the", voiceless in "think").'
    ],
    characters: [
      { char: 'A', lowerChar: 'a', name: 'Ay', sound: 'Short [æ] in cat, long [eɪ] in name', ipa: '[æ]/[eɪ]', exampleWord: 'Apple', exampleTranslation: 'Fruit', speechCode: 'en-US' },
      { char: 'B', lowerChar: 'b', name: 'Bee', sound: '[b]', ipa: '[b]', exampleWord: 'Book', exampleTranslation: 'Reading material', speechCode: 'en-US' },
      { char: 'C', lowerChar: 'c', name: 'See', sound: 'Soft [s] before e/i/y, hard [k] before a/o/u', ipa: '[k]/[s]', exampleWord: 'Computer', exampleTranslation: 'Device', speechCode: 'en-US' },
      { char: 'D', lowerChar: 'd', name: 'Dee', sound: '[d]', ipa: '[d]', exampleWord: 'Database', exampleTranslation: 'Data store', speechCode: 'en-US' },
      { char: 'E', lowerChar: 'e', name: 'Ee', sound: 'Short [ɛ] in bed, long [iː] in meet', ipa: '[ɛ]/[iː]', exampleWord: 'Engineer', exampleTranslation: 'Technical profession', speechCode: 'en-US' },
      { char: 'F', lowerChar: 'f', name: 'Ef', sound: '[f]', ipa: '[f]', exampleWord: 'Future', exampleTranslation: 'Time ahead', speechCode: 'en-US' },
      { char: 'G', lowerChar: 'g', name: 'Jee', sound: 'Soft [d͡ʒ] before e/i, hard [ɡ] before a/o/u', ipa: '[ɡ]/[d͡ʒ]', exampleWord: 'Global', exampleTranslation: 'Worldwide', speechCode: 'en-US' },
      { char: 'H', lowerChar: 'h', name: 'Aytch', sound: 'Aspirated [h]', ipa: '[h]', exampleWord: 'Hello', exampleTranslation: 'Greeting', speechCode: 'en-US' },
      { char: 'I', lowerChar: 'i', name: 'Eye', sound: 'Short [ɪ] in sit, long [aɪ] in site', ipa: '[ɪ]/[aɪ]', exampleWord: 'Innovation', exampleTranslation: 'Novel invention', speechCode: 'en-US' },
      { char: 'J', lowerChar: 'j', name: 'Jay', sound: '[d͡ʒ]', ipa: '[d͡ʒ]', exampleWord: 'Journey', exampleTranslation: 'Travel', speechCode: 'en-US' },
      { char: 'K', lowerChar: 'k', name: 'Kay', sound: '[k]', ipa: '[k]', exampleWord: 'Knowledge', exampleTranslation: 'Understanding', speechCode: 'en-US' },
      { char: 'L', lowerChar: 'l', name: 'El', sound: '[l]', ipa: '[l]', exampleWord: 'Language', exampleTranslation: 'Speech system', speechCode: 'en-US' },
      { char: 'M', lowerChar: 'm', name: 'Em', sound: '[m]', ipa: '[m]', exampleWord: 'Mastery', exampleTranslation: 'High skill', speechCode: 'en-US' },
      { char: 'N', lowerChar: 'n', name: 'En', sound: '[n]', ipa: '[n]', exampleWord: 'Network', exampleTranslation: 'Interconnection', speechCode: 'en-US' },
      { char: 'O', lowerChar: 'o', name: 'Oh', sound: 'Short [ɒ] in hot, long [oʊ] in home', ipa: '[ɒ]/[oʊ]', exampleWord: 'Opportunity', exampleTranslation: 'Chance', speechCode: 'en-US' },
      { char: 'P', lowerChar: 'p', name: 'Pee', sound: '[p]', ipa: '[p]', exampleWord: 'Project', exampleTranslation: 'Task assignment', speechCode: 'en-US' },
      { char: 'Q', lowerChar: 'q', name: 'Cue', sound: 'Always followed by u, pronounced [kw]', ipa: '[kw]', exampleWord: 'Quality', exampleTranslation: 'Excellence standard', speechCode: 'en-US' },
      { char: 'R', lowerChar: 'r', name: 'Ar', sound: 'Liquid approximant [ɹ]', ipa: '[ɹ]', exampleWord: 'Research', exampleTranslation: 'Investigation', speechCode: 'en-US' },
      { char: 'S', lowerChar: 's', name: 'Ess', sound: '[s] or voiced [z]', ipa: '[s]/[z]', exampleWord: 'Success', exampleTranslation: 'Achievement', speechCode: 'en-US' },
      { char: 'T', lowerChar: 't', name: 'Tee', sound: '[t]', ipa: '[t]', exampleWord: 'Technology', exampleTranslation: 'Applied science', speechCode: 'en-US' },
      { char: 'U', lowerChar: 'u', name: 'You', sound: 'Short [ʌ] in cut, long [juː] in cute', ipa: '[ʌ]/[juː]', exampleWord: 'University', exampleTranslation: 'Higher institution', speechCode: 'en-US' },
      { char: 'V', lowerChar: 'v', name: 'Vee', sound: '[v]', ipa: '[v]', exampleWord: 'Vision', exampleTranslation: 'Sight / Strategic goal', speechCode: 'en-US' },
      { char: 'W', lowerChar: 'w', name: 'Double-you', sound: '[w]', ipa: '[w]', exampleWord: 'World', exampleTranslation: 'Earth / Globe', speechCode: 'en-US' },
      { char: 'X', lowerChar: 'x', name: 'Eks', sound: '[ks] or [z]', ipa: '[ks]', exampleWord: 'Experience', exampleTranslation: 'Skill gained', speechCode: 'en-US' },
      { char: 'Y', lowerChar: 'y', name: 'Wye', sound: 'Consonant [j] or vowel [aɪ]/[i]', ipa: '[j]', exampleWord: 'Yield', exampleTranslation: 'Productive output', speechCode: 'en-US' },
      { char: 'Z', lowerChar: 'z', name: 'Zee', sound: 'Voiced alveolar [z]', ipa: '[z]', exampleWord: 'Zenith', exampleTranslation: 'Highest peak', speechCode: 'en-US' }
    ]
  },

  italian: {
    languageName: 'Italian',
    code: 'it',
    speechCode: 'it-IT',
    scriptName: 'Alfabeto Italiano',
    direction: 'ltr',
    description: 'Italian uses 21 native Latin letters plus 5 foreign loan letters (J, K, W, X, Y). Every word ends in a vowel, giving Italian its famous musical cadence.',
    keyRules: [
      '"C" and "G" are SOFT [t͡ʃ] / [d͡ʒ] before E and I, but HARD [k] / [ɡ] before A, O, U.',
      'The letter "H" is silent but hardens "C" and "G" before E/I (e.g. "ch" = [k] in spaghetti, "gh" = [ɡ]).',
      'Double consonants are lengthened with crisp audible pauses (gemination, e.g. notte vs note).'
    ],
    characters: [
      { char: 'A', lowerChar: 'a', name: 'A', sound: 'Pure [a]', ipa: '[a]', exampleWord: 'Amore', exampleTranslation: 'Love', speechCode: 'it-IT' },
      { char: 'B', lowerChar: 'b', name: 'Bi', sound: '[b]', ipa: '[b]', exampleWord: 'Bello', exampleTranslation: 'Beautiful', speechCode: 'it-IT' },
      { char: 'C', lowerChar: 'c', name: 'Ci', sound: '[t͡ʃ] before e/i, [k] elsewhere', ipa: '[t͡ʃ]/[k]', exampleWord: 'Ciao', exampleTranslation: 'Hello / Bye', speechCode: 'it-IT' },
      { char: 'D', lowerChar: 'd', name: 'Di', sound: '[d]', ipa: '[d]', exampleWord: 'Dolce', exampleTranslation: 'Sweet', speechCode: 'it-IT' },
      { char: 'E', lowerChar: 'e', name: 'E', sound: 'Open [ɛ] or closed [e]', ipa: '[e]', exampleWord: 'Estate', exampleTranslation: 'Summer', speechCode: 'it-IT' },
      { char: 'F', lowerChar: 'f', name: 'Effe', sound: '[f]', ipa: '[f]', exampleWord: 'Famiglia', exampleTranslation: 'Family', speechCode: 'it-IT' },
      { char: 'G', lowerChar: 'g', name: 'Gi', sound: '[d͡ʒ] before e/i, [ɡ] elsewhere', ipa: '[ɡ]/[d͡ʒ]', exampleWord: 'Grazie', exampleTranslation: 'Thank you', speechCode: 'it-IT' },
      { char: 'H', lowerChar: 'h', name: 'Acca', sound: 'Always silent; acts as hardener', ipa: 'silent', exampleWord: 'Hotel', exampleTranslation: 'Hotel', speechCode: 'it-IT' },
      { char: 'I', lowerChar: 'i', name: 'I', sound: '[i]', ipa: '[i]', exampleWord: 'Italia', exampleTranslation: 'Italy', speechCode: 'it-IT' },
      { char: 'L', lowerChar: 'l', name: 'Elle', sound: '[l]', ipa: '[l]', exampleWord: 'Libro', exampleTranslation: 'Book', speechCode: 'it-IT' },
      { char: 'M', lowerChar: 'm', name: 'Emme', sound: '[m]', ipa: '[m]', exampleWord: 'Musica', exampleTranslation: 'Music', speechCode: 'it-IT' },
      { char: 'N', lowerChar: 'n', name: 'Enne', sound: '[n]', ipa: '[n]', exampleWord: 'Notte', exampleTranslation: 'Night', speechCode: 'it-IT' },
      { char: 'O', lowerChar: 'o', name: 'O', sound: 'Open [ɔ] or closed [o]', ipa: '[o]', exampleWord: 'Orologio', exampleTranslation: 'Clock', speechCode: 'it-IT' },
      { char: 'P', lowerChar: 'p', name: 'Pi', sound: '[p]', ipa: '[p]', exampleWord: 'Pizza', exampleTranslation: 'Pizza', speechCode: 'it-IT' },
      { char: 'Q', lowerChar: 'q', name: 'Cu', sound: 'Always "qu", pronounced [kw]', ipa: '[kw]', exampleWord: 'Quadro', exampleTranslation: 'Painting', speechCode: 'it-IT' },
      { char: 'R', lowerChar: 'r', name: 'Erre', sound: 'Rolled trill [r]', ipa: '[r]', exampleWord: 'Roma', exampleTranslation: 'Rome', speechCode: 'it-IT' },
      { char: 'S', lowerChar: 's', name: 'Esse', sound: 'Voiceless [s] or voiced [z]', ipa: '[s]/[z]', exampleWord: 'Sole', exampleTranslation: 'Sun', speechCode: 'it-IT' },
      { char: 'T', lowerChar: 't', name: 'Ti', sound: '[t]', ipa: '[t]', exampleWord: 'Treno', exampleTranslation: 'Train', speechCode: 'it-IT' },
      { char: 'U', lowerChar: 'u', name: 'U', sound: '[u]', ipa: '[u]', exampleWord: 'Università', exampleTranslation: 'University', speechCode: 'it-IT' },
      { char: 'V', lowerChar: 'v', name: 'Vu', sound: '[v]', ipa: '[v]', exampleWord: 'Vino', exampleTranslation: 'Wine', speechCode: 'it-IT' },
      { char: 'Z', lowerChar: 'z', name: 'Zeta', sound: '[ts] in pizza or [dz] in zero', ipa: '[ts]/[dz]', exampleWord: 'Zucchero', exampleTranslation: 'Sugar', speechCode: 'it-IT' }
    ]
  },

  portuguese: {
    languageName: 'Portuguese',
    code: 'pt',
    speechCode: 'pt-PT',
    scriptName: 'Alfabeto Português',
    direction: 'ltr',
    description: 'Portuguese features rich nasal vowels marked with tildes (ã, õ), palatalized consonants, and distinct European and Brazilian phonologies.',
    keyRules: [
      'Tilde marks nasalization: ã and õ require air to flow through the nose (e.g. pão = bread, coração = heart).',
      'The letter "H" is silent at start, but creates digraphs "lh" [ʎ] (like million) and "nh" [ɲ] (like canyon).',
      'Final "S" is pronounced [ʃ] ("sh") in European Portuguese.'
    ],
    characters: [
      { char: 'A', lowerChar: 'a', name: 'Á', sound: '[a] or closed [ɐ]', ipa: '[a]', exampleWord: 'Amigo', exampleTranslation: 'Friend', speechCode: 'pt-PT' },
      { char: 'B', lowerChar: 'b', name: 'Bê', sound: '[b]', ipa: '[b]', exampleWord: 'Bom dia', exampleTranslation: 'Good morning', speechCode: 'pt-PT' },
      { char: 'C', lowerChar: 'c', name: 'Cê', sound: '[s] before e/i, [k] elsewhere', ipa: '[k]/[s]', exampleWord: 'Casa', exampleTranslation: 'House', speechCode: 'pt-PT' },
      { char: 'D', lowerChar: 'd', name: 'Dê', sound: '[d]', ipa: '[d]', exampleWord: 'Dia', exampleTranslation: 'Day', speechCode: 'pt-PT' },
      { char: 'E', lowerChar: 'e', name: 'É', sound: '[ɛ], [e], or reduced [ɨ]', ipa: '[e]', exampleWord: 'Escola', exampleTranslation: 'School', speechCode: 'pt-PT' },
      { char: 'F', lowerChar: 'f', name: 'Efe', sound: '[f]', ipa: '[f]', exampleWord: 'Família', exampleTranslation: 'Family', speechCode: 'pt-PT' },
      { char: 'G', lowerChar: 'g', name: 'Gê', sound: '[ʒ] like "measure" before e/i, [ɡ] elsewhere', ipa: '[ɡ]/[ʒ]', exampleWord: 'Gato', exampleTranslation: 'Cat', speechCode: 'pt-PT' },
      { char: 'H', lowerChar: 'h', name: 'Agá', sound: 'Silent', ipa: 'silent', exampleWord: 'Hoje', exampleTranslation: 'Today', speechCode: 'pt-PT' },
      { char: 'I', lowerChar: 'i', name: 'I', sound: '[i]', ipa: '[i]', exampleWord: 'Ilha', exampleTranslation: 'Island', speechCode: 'pt-PT' },
      { char: 'J', lowerChar: 'j', name: 'Jota', sound: '[ʒ] like "s" in "treasure"', ipa: '[ʒ]', exampleWord: 'Janela', exampleTranslation: 'Window', speechCode: 'pt-PT' },
      { char: 'L', lowerChar: 'l', name: 'Ele', sound: '[l]', ipa: '[l]', exampleWord: 'Livro', exampleTranslation: 'Book', speechCode: 'pt-PT' },
      { char: 'M', lowerChar: 'm', name: 'Eme', sound: '[m]', ipa: '[m]', exampleWord: 'Mundo', exampleTranslation: 'World', speechCode: 'pt-PT' },
      { char: 'N', lowerChar: 'n', name: 'Ene', sound: '[n]', ipa: '[n]', exampleWord: 'Noite', exampleTranslation: 'Night', speechCode: 'pt-PT' },
      { char: 'O', lowerChar: 'o', name: 'Ó', sound: '[ɔ], [o], or [u] at word end', ipa: '[o]', exampleWord: 'Obrigado', exampleTranslation: 'Thank you', speechCode: 'pt-PT' },
      { char: 'P', lowerChar: 'p', name: 'Pê', sound: '[p]', ipa: '[p]', exampleWord: 'Pão', exampleTranslation: 'Bread', speechCode: 'pt-PT' },
      { char: 'Q', lowerChar: 'q', name: 'Quê', sound: 'Always "qu", pronounced [k]', ipa: '[k]', exampleWord: 'Queijo', exampleTranslation: 'Cheese', speechCode: 'pt-PT' },
      { char: 'R', lowerChar: 'r', name: 'Erre', sound: 'Tap [ɾ] inside words, uvular [ʁ] at start', ipa: '[ɾ]/[ʁ]', exampleWord: 'Rio', exampleTranslation: 'River', speechCode: 'pt-PT' },
      { char: 'S', lowerChar: 's', name: 'Esse', sound: '[s], [z] between vowels, [ʃ] at word end', ipa: '[s]/[z]/[ʃ]', exampleWord: 'Sol', exampleTranslation: 'Sun', speechCode: 'pt-PT' },
      { char: 'T', lowerChar: 't', name: 'Tê', sound: '[t]', ipa: '[t]', exampleWord: 'Tempo', exampleTranslation: 'Time / Weather', speechCode: 'pt-PT' },
      { char: 'U', lowerChar: 'u', name: 'U', sound: '[u]', ipa: '[u]', exampleWord: 'Universidade', exampleTranslation: 'University', speechCode: 'pt-PT' },
      { char: 'V', lowerChar: 'v', name: 'Vê', sound: '[v]', ipa: '[v]', exampleWord: 'Vida', exampleTranslation: 'Life', speechCode: 'pt-PT' },
      { char: 'Z', lowerChar: 'z', name: 'Zê', sound: '[z] or [ʃ] at word end', ipa: '[z]/[ʃ]', exampleWord: 'Zero', exampleTranslation: 'Zero', speechCode: 'pt-PT' },
      { char: 'Ã', lowerChar: 'ã', name: 'A-til', sound: 'Nasal [ɐ̃]', ipa: '[ɐ̃]', exampleWord: 'Amanhã', exampleTranslation: 'Tomorrow', speechCode: 'pt-PT' },
      { char: 'Õ', lowerChar: 'õ', name: 'O-til', sound: 'Nasal [õ]', ipa: '[õ]', exampleWord: 'Corações', exampleTranslation: 'Hearts', speechCode: 'pt-PT' }
    ]
  },

  dutch: {
    languageName: 'Dutch',
    code: 'nl',
    speechCode: 'nl-NL',
    scriptName: 'Nederlands Alfabet & Digraphs',
    direction: 'ltr',
    description: 'Dutch uses the standard 26 Latin letters with important vowel digraphs (ij, ui, oe, eu) and guttural "G" and "CH" throat sounds.',
    keyRules: [
      'The letter "G" is a voiced velar/uvular fricative [ɣ] or [x] produced from the back of the throat.',
      '"IJ" is considered a single ligature in Dutch crosswords and both letters are capitalized at the start of sentences (e.g. IJsselmeer).',
      '"W" is a labiodental approximant [ʋ] between English "v" and "w".'
    ],
    characters: [
      { char: 'A', lowerChar: 'a', name: 'Aa', sound: 'Short [ɑ] in bad, long [aː] in maan', ipa: '[aː]', exampleWord: 'Appel', exampleTranslation: 'Apple', speechCode: 'nl-NL' },
      { char: 'B', lowerChar: 'b', name: 'Bee', sound: '[b]', ipa: '[b]', exampleWord: 'Boek', exampleTranslation: 'Book', speechCode: 'nl-NL' },
      { char: 'C', lowerChar: 'c', name: 'See', sound: '[s] or [k]', ipa: '[k]', exampleWord: 'Computer', exampleTranslation: 'Computer', speechCode: 'nl-NL' },
      { char: 'D', lowerChar: 'd', name: 'Dee', sound: '[d]', ipa: '[d]', exampleWord: 'Dank je', exampleTranslation: 'Thank you', speechCode: 'nl-NL' },
      { char: 'E', lowerChar: 'e', name: 'Ee', sound: 'Short [ɛ], long [eː], or schwa [ə]', ipa: '[eː]', exampleWord: 'Eten', exampleTranslation: 'To eat / Food', speechCode: 'nl-NL' },
      { char: 'F', lowerChar: 'f', name: 'Ef', sound: '[f]', ipa: '[f]', exampleWord: 'Fiets', exampleTranslation: 'Bicycle', speechCode: 'nl-NL' },
      { char: 'G', lowerChar: 'g', name: 'Ghee', sound: 'Throat fricative [ɣ] or [x]', ipa: '[ɣ]', exampleWord: 'Goedemorgen', exampleTranslation: 'Good morning', speechCode: 'nl-NL', pronunciationTip: 'Gargle gently in throat' },
      { char: 'H', lowerChar: 'h', name: 'Hah', sound: '[h]', ipa: '[h]', exampleWord: 'Huis', exampleTranslation: 'House', speechCode: 'nl-NL' },
      { char: 'I', lowerChar: 'i', name: 'Ee', sound: 'Short [ɪ], long [i]', ipa: '[i]', exampleWord: 'Idee', exampleTranslation: 'Idea', speechCode: 'nl-NL' },
      { char: 'J', lowerChar: 'j', name: 'Yay', sound: '[j] sounds like English "y"', ipa: '[j]', exampleWord: 'Ja', exampleTranslation: 'Yes', speechCode: 'nl-NL' },
      { char: 'K', lowerChar: 'k', name: 'Kah', sound: '[k]', ipa: '[k]', exampleWord: 'Kaas', exampleTranslation: 'Cheese', speechCode: 'nl-NL' },
      { char: 'L', lowerChar: 'l', name: 'El', sound: '[l]', ipa: '[l]', exampleWord: 'Leraar', exampleTranslation: 'Teacher', speechCode: 'nl-NL' },
      { char: 'M', lowerChar: 'm', name: 'Em', sound: '[m]', ipa: '[m]', exampleWord: 'Mooi', exampleTranslation: 'Beautiful', speechCode: 'nl-NL' },
      { char: 'N', lowerChar: 'n', name: 'En', sound: '[n]', ipa: '[n]', exampleWord: 'Nederland', exampleTranslation: 'Netherlands', speechCode: 'nl-NL' },
      { char: 'O', lowerChar: 'o', name: 'Oh', sound: 'Short [ɔ], long [oː]', ipa: '[oː]', exampleWord: 'Ochtend', exampleTranslation: 'Morning', speechCode: 'nl-NL' },
      { char: 'P', lowerChar: 'p', name: 'Pee', sound: '[p]', ipa: '[p]', exampleWord: 'Plezier', exampleTranslation: 'Pleasure', speechCode: 'nl-NL' },
      { char: 'R', lowerChar: 'r', name: 'Er', sound: 'Rolled [r] or uvular [ʁ]', ipa: '[r]', exampleWord: 'Reis', exampleTranslation: 'Trip', speechCode: 'nl-NL' },
      { char: 'S', lowerChar: 's', name: 'Es', sound: '[s]', ipa: '[s]', exampleWord: 'Stad', exampleTranslation: 'City', speechCode: 'nl-NL' },
      { char: 'T', lowerChar: 't', name: 'Tee', sound: '[t]', ipa: '[t]', exampleWord: 'Trein', exampleTranslation: 'Train', speechCode: 'nl-NL' },
      { char: 'U', lowerChar: 'u', name: 'Uu', sound: 'Short [ʏ], long [yː]', ipa: '[yː]', exampleWord: 'Uur', exampleTranslation: 'Hour', speechCode: 'nl-NL' },
      { char: 'V', lowerChar: 'v', name: 'Vee', sound: 'Voiced [v] or voiceless [f]', ipa: '[v]', exampleWord: 'Vriend', exampleTranslation: 'Friend', speechCode: 'nl-NL' },
      { char: 'W', lowerChar: 'w', name: 'Way', sound: 'Labiodental [ʋ]', ipa: '[ʋ]', exampleWord: 'Water', exampleTranslation: 'Water', speechCode: 'nl-NL' },
      { char: 'Z', lowerChar: 'z', name: 'Zet', sound: '[z]', ipa: '[z]', exampleWord: 'Zee', exampleTranslation: 'Sea', speechCode: 'nl-NL' },
      { char: 'IJ', lowerChar: 'ij', name: 'Lange ij', sound: 'Diphthong [ɛi]', ipa: '[ɛi]', exampleWord: 'IJs', exampleTranslation: 'Ice cream / Ice', speechCode: 'nl-NL' }
    ]
  }
};
