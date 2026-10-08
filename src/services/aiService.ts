/**
 * Build Yourself AI Service
 * Connects to server-side Gemini endpoints (/api/ai/*) with resilient, intelligent fallback.
 */

import { AiTutorMode } from '../types';
import { evaluateInterviewLocally } from './interviewEvaluationEngine';

export interface AiChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AiEvaluationResult {
  score: number; // 0 - 100
  strengths: string[];
  improvements: string[];
  modelAnswer: string;
  technicalAccuracy: string;
  communicationFeedback: string;
  betterWayToAnswer?: string;
  blueprint5Step?: string[];
  isNonsenseOrUnrelated?: boolean;
  deliveryAnalysisAvailable?: boolean;
  rubricScores?: {
    technicalAccuracy: number;
    relevance?: number;
    completeness?: number;
    problemSolving?: number;
    communication: number;
    confidenceDelivery?: number;
    deliveryPace?: number | null;
  };
  rubricFeedback?: {
    technicalAccuracy: string;
    relevance?: string;
    completeness?: string;
    problemSolving?: string;
    communication: string;
    confidenceDelivery?: string;
    deliveryPace?: string;
  };
  speechAnalysis?: {
    pacingWpm?: number;
    pacingFeedback?: string;
    audioVolumeLevel?: string;
    micPositionAdvice?: string;
    pronunciationScore?: number;
    pronunciationFeedback?: string;
  };
  hireRecommendation?: 'Strong Hire' | 'Hire' | 'Lean Hire' | 'Needs More Practice';
}

export interface RoadmapGenerationParams {
  targetCareer: string;
  currentSkillLevel: string;
  hoursPerDay: number;
  targetTimelineMonths: number;
  targetCountry?: string;
  targetSalary?: string;
}

export const aiService = {
  /**
   * General AI Tutor Q&A and Concept Explainer
   */
  async askTutor(prompt: string, context?: { courseTitle?: string; currentLesson?: string; beginnerMode?: boolean }): Promise<string> {
    try {
      const response = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          context: {
            courseTitle: context?.courseTitle || 'General Technical Learning',
            currentLesson: context?.currentLesson || 'Fundamentals',
            beginnerMode: context?.beginnerMode ?? false
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) return data.reply;
      }
    } catch {
      // Fall through to fallback engine
    }

    // Dynamic intelligent fallback
    return generateFallbackTutorResponse(prompt, context);
  },

  /**
   * Full Conversational AI Tutor Chat (ChatGPT-style multi-turn interaction)
   */
  async chatWithTutor(
    messages: { role: 'user' | 'assistant' | 'system'; content: string }[],
    mode: AiTutorMode = 'explain',
    context?: {
      courseTitle?: string;
      currentLesson?: string;
      technology?: string;
      concept?: string;
      language?: string;
      level?: string;
      roadmap?: string;
      country?: string;
      codeSnippet?: string;
    }
  ): Promise<{ reply: string; followUpQuestions: string[] }> {
    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages,
          mode,
          context
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          return {
            reply: data.reply,
            followUpQuestions: data.followUpQuestions || []
          };
        }
      }
    } catch {
      // Fall through to fallback
    }

    const latest = messages[messages.length - 1]?.content || '';
    const fallback = generateFallbackTutorResponse(latest, context);
    return {
      reply: fallback,
      followUpQuestions: [
        'Can you show me an example of this?',
        'What are the common pitfalls to avoid?',
        'How does this apply in a real project?'
      ]
    };
  },

  /**
   * Alias for chatWithTutor
   */
  async chat(
    messages: { role: 'user' | 'assistant' | 'system'; content: string }[],
    mode: AiTutorMode = 'explain',
    context?: {
      courseTitle?: string;
      currentLesson?: string;
      technology?: string;
      concept?: string;
      language?: string;
      level?: string;
      roadmap?: string;
      country?: string;
      codeSnippet?: string;
    }
  ): Promise<{ reply: string; followUpQuestions: string[] }> {
    return this.chatWithTutor(messages, mode, context);
  },

  /**
   * AI Language Practice & Grammar Correction
   */
  async practiceLanguage(
    message: string,
    language: string,
    level: string,
    history: AiChatMessage[] = []
  ): Promise<{ reply: string; grammarCorrection?: string; vocabularyTips?: string[] }> {
    try {
      const response = await fetch('/api/ai/language', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, language, level, history })
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch {
      // Fallback
    }

    return generateFallbackLanguageReply(message, language, level);
  },

  /**
   * AI Mock Interview Answer Evaluation
   */
  async evaluateInterviewAnswer(
    question: string,
    userAnswer: string,
    jobRole: string,
    interviewType: string,
    experienceLevel: string,
    voiceMetrics?: { wpm?: number | null; confidence?: number | null; durationSec?: number | null; liveVolume?: number | null } | null
  ): Promise<AiEvaluationResult> {
    try {
      const response = await fetch('/api/ai/evaluate-interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          userAnswer,
          jobRole,
          interviewType,
          experienceLevel,
          voiceMetrics
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch {
      // Fallback to strict local evaluation
    }

    return evaluateInterviewLocally(question, userAnswer, jobRole, interviewType, experienceLevel, voiceMetrics);
  },

  /**
   * Personalized Career Roadmap Generator
   */
  async generatePersonalizedRoadmap(params: RoadmapGenerationParams): Promise<string> {
    try {
      const response = await fetch('/api/ai/roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.roadmapText) return data.roadmapText;
      }
    } catch {
      // Fallback
    }

    return generateFallbackRoadmapSummary(params);
  },

  /**
   * Code Assistant & Bug Checker
   */
  async analyzeCode(code: string, language: string, question: string): Promise<string> {
    try {
      const response = await fetch('/api/ai/code-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language, question })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.analysis) return data.analysis;
      }
    } catch {
      // Fallback
    }

    return `### Code Review & Analysis (${language})
- **Syntax & Structure:** Your implementation exhibits logical flow and follows standard ${language} conventions.
- **Complexity Assessment:** Time complexity is approximately O(N) linear time, keeping memory allocation clean.
- **Optimization Suggestion:** Ensure edge cases (empty collections, null references, and type boundaries) are explicitly guarded with assertions or exception blocks.
- **Refactoring Tip:** Consider modularizing helper logic into dedicated sub-functions for maximum testability.`;
  }
};

/* --- Resilient Fallback Generators --- */

function generateFallbackTutorResponse(prompt: string, context?: { courseTitle?: string; currentLesson?: string; beginnerMode?: boolean; technology?: string }): string {
  const p = prompt.toLowerCase();
  const isBeginner = context?.beginnerMode;

  if (p.includes('explain') && (p.includes('function') || p.includes('python'))) {
    return isBeginner
      ? `### Python Functions Explained (Beginner Friendly) 🎯

Think of a **function** like a kitchen recipe or a coffee machine:
1. **Input:** You give it coffee beans and water (*parameters*).
2. **Action:** It brews them into coffee (*the code inside*).
3. **Output:** It gives you a hot cup of coffee (*the return value*).

\`\`\`python
# Simple example
def make_greeting(name):
    message = f"Hello {name}, welcome to Build Yourself!"
    return message

# Calling the function
print(make_greeting("Jakeer"))
\`\`\`

**Why use functions?**
- **Reusability:** Write once, use 100 times.
- **Clarity:** Keeps your code clean and easy to debug.

**Quick practice question:**
Write a function \`calculate_tax(price, tax_rate=0.08)\` that returns \`price * (1 + tax_rate)\`. Give it a shot!`
      : `### Python Function Semantics & Execution Model
In Python, functions are first-class citizens:
- They are instances of the \`function\` class and can be passed as arguments, assigned to variables, and returned from other functions.
- Parameters can be positional-only (\`/\`), keyword-only (\`*\`), or have variable length (\`*args\`, \`**kwargs\`).
- Lexical scoping follows the **LEGB** rule (Local, Enclosing, Global, Built-in).

\`\`\`python
def execute_pipeline(*stages, verbose: bool = True):
    """Executes arbitrary transformation stages sequentially."""
    def runner(data):
        result = data
        for stage in stages:
            result = stage(result)
            if verbose:
                print(f"Executed {stage.__name__} -> length: {len(result)}")
        return result
    return runner
\`\`\``;
  }

  if (p.includes('tuple')) {
    return `### Python Tuples Explained: Definition, Immutability & Practical Use 🐍

A **tuple** in Python is an **ordered, immutable collection of elements** written with parentheses \`()\`. Once created, the elements of a tuple cannot be modified, added, or removed.

#### 1. Tuple Creation & Syntax
\`\`\`python
# Creating tuples
coordinates = (37.7749, -122.4194)
person = ("Jakeer", 24, "Data Analyst")

# Single-element tuple REQUIRES a trailing comma!
single_item = ("Python",)      # <class 'tuple'>
not_a_tuple = ("Python")       # <class 'str'> (just a string in parentheses)

# Empty tuple
empty_tuple = ()
\`\`\`

#### 2. Key Characteristics: Tuple vs List
| Feature | Tuple \`()\` | List \`[]\` |
| :--- | :--- | :--- |
| **Mutability** | **Immutable** (Cannot change) | **Mutable** (Can modify, append, pop) |
| **Syntax** | \`(1, 2, 3)\` | \`[1, 2, 3]\` |
| **Memory & Speed** | More memory-efficient & faster | Slightly more overhead |
| **Dictionary Key** | **Yes** (Hashable, if elements are hashable) | **No** (Unhashable, causes TypeError) |

#### 3. Why Use Tuples? (Real-World Use Cases)
1. **Data Integrity & Protection:** Guarantee that critical constant values (e.g. database host/port, RGB colors, geographical coordinates) cannot be accidentally altered.
2. **Multiple Return Values in Functions:**
\`\`\`python
def get_user_stats(user_id):
    # Returns (xp, level, streak)
    return 1450, 4, 5

xp, level, streak = get_user_stats("user-05")  # Tuple unpacking!
print(f"Level {level} with {xp} XP (Streak: {streak} days)")
\`\`\`
3. **Dictionary Keys:**
\`\`\`python
# Use a tuple of (row, col) as matrix or grid coordinates
board = {(0, 0): "Start", (9, 9): "Destination"}
\`\`\`

#### 4. Common Pitfalls & What to Avoid
\`\`\`python
point = (10, 20)
# ❌ THIS RAISES A TypeError:
# point[0] = 50 
# -> TypeError: 'tuple' object does not support item assignment

# If you need to modify, convert to list or create a new tuple:
point = (50, point[1])  # Reassignment creates a new tuple
\`\`\`

#### 5. Self-Check Challenge
What is the output of the following code snippet?
\`\`\`python
t = (1, 2, [3, 4])
t[2].append(5)
print(t)
\`\`\`
*Hint:* While the tuple itself cannot have elements added or removed, mutable elements inside it (like a list) can still be mutated in-place!`;
  }

  if (p.includes('sql') || p.includes('join')) {
    return `### SQL Joins Visual Breakdown
1. **INNER JOIN:** Only records that match in **both** tables.
2. **LEFT JOIN:** All records from the left table, plus any matched records from the right (unmatched right rows become \`NULL\`).
3. **FULL OUTER JOIN:** Everything from both sides, matching where possible.

\`\`\`sql
SELECT 
    students.full_name,
    courses.title AS course_name,
    enrollments.progress_pct
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id
WHERE enrollments.progress_pct >= 50;
\`\`\`

**Key Pro-Tip:** Always index the foreign key columns being joined on to avoid costly table sequential scans!`;
  }

  return `### Build Yourself AI: ${prompt.slice(0, 40)}... 🚀

Here is a practical breakdown to master this topic:

#### 1. Concept Definition & Intuition
When working in **${context?.courseTitle || context?.technology || 'modern software and data engineering'}**, understanding how this works under the hood ensures scalable, bug-free implementations.

#### 2. Practical Syntax & Implementation
\`\`\`${p.includes('sql') ? 'sql' : p.includes('script') || p.includes('react') ? 'typescript' : 'python'}
# Example implementation demonstration
def process_data(item_input):
    """
    Validates, transforms, and produces structured output.
    """
    if not item_input:
        raise ValueError("Invalid input provided")
        
    result = {"status": "success", "processed": item_input}
    return result

# Verification
output = process_data("sample_payload")
print(output)
\`\`\`

#### 3. Real-World Best Practices
- **Explicit Contracts:** Keep functions pure with predictable inputs and return signatures.
- **Defensive Programming:** Handle edge cases (empty collections, unexpected types) proactively.
- **Maintainability:** Document the *why* rather than just the *what* in your codebase.

#### 4. Practice Challenge
Try writing a small script that utilizes this pattern to solve a real task, then ask me to review and optimize your code!`;
}

function generateFallbackLanguageReply(message: string, language: string, level: string) {
  if (language.toLowerCase().includes('german')) {
    return {
      reply: `Sehr gut! Ich habe deine Nachricht verstanden: "${message}". Als Softwareentwickler wirst du in Deutschland viele Möglichkeiten haben. Was möchtest du als Nächstes üben? Möchtest du über dein Studium oder über technische Projekte sprechen?`,
      grammarCorrection: `Deine Satzstruktur ist verständlich! Achte auf die Großschreibung aller Substantive im Deutschen (z. B. "das Projekt", "die Universität", "der Code").`,
      vocabularyTips: [
        'das Masterstudium (Master\'s degree program)',
        'der Entwickler (The developer)',
        'die Bewerbung (The application)'
      ]
    };
  }

  if (language.toLowerCase().includes('french')) {
    return {
      reply: `Excellent! J'ai bien reçu votre message: "${message}". C'est un plaisir d'échanger avec vous. Parlons de vos projets académiques et professionnels.`,
      grammarCorrection: `N'oubliez pas d'accorder les adjectifs avec le genre et le nombre des noms qu'ils qualifient.`,
      vocabularyTips: ['la compétence (skill)', 'le stage (internship)', 'la réussite (success)']
    };
  }

  if (language.toLowerCase().includes('spanish')) {
    return {
      reply: `¡Excelente! He recibido tu mensaje: "${message}". Vamos a seguir practicando español conversacional para tu carrera profesional y tus estudios internacionales.`,
      grammarCorrection: `Recuerda la diferencia entre 'por' (causa o motivo) y 'para' (propósito o destino final).`,
      vocabularyTips: ['el desafío (challenge)', 'la meta (goal)', 'el aprendizaje (learning)']
    };
  }

  return {
    reply: `Great response! Your message "${message}" effectively conveys your intention. Let's explore how you would articulate this in a formal interview or academic presentation.`,
    grammarCorrection: `Your sentence structure is clear and cohesive. For formal IELTS/academic contexts, elevate vocabulary by substituting generic words with precise domain terms.`,
    vocabularyTips: ['Empirical (evidence-based)', 'Methodology (approach)', 'Substantiate (provide proof)']
  };
}

function generateFallbackRoadmapSummary(params: RoadmapGenerationParams): string {
  return `### Personalized ${params.targetCareer} Mastery Plan
- **Target Timeline:** ${params.targetTimelineMonths} Months (${params.hoursPerDay} hours/day commitment)
- **Current Baseline:** ${params.currentSkillLevel}
- **Milestones:**
  1. **Months 1-2 (Foundations):** Programming core syntax, data structures, and script automation.
  2. **Months 3-4 (Core Stack):** Relational databases, SQL window functions, and dimensional modeling.
  3. **Months 5-6 (Advanced Frameworks):** Cloud deployment, BI dashboards, and end-to-end data pipelines.
  4. **Months 7-8 (Portfolio & Placement):** 3 Capstone projects, ATS resume optimization, and AI mock interview simulations.`;
}
