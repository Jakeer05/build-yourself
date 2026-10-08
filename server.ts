import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import {
  evaluateInterviewLocally,
  findQuestionRubric,
  detectNonsenseOrInvalid
} from './src/services/interviewEvaluationEngine';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory persistent stores for demo
const issuedCertificates: Record<string, any> = {
  'EDU-2026-PY-000184': {
    certificateNumber: 'EDU-2026-PY-000184',
    studentName: 'Jakeer P',
    courseTitle: 'Python Programming Masterclass',
    issueDate: '2026-03-20',
    verificationHash: '8f9a2c4e1b7d5e6a0c3f4e2d1a9b8c7f',
    skillsAcquired: ['Python 3.12', 'Object-Oriented Programming', 'Data Structures', 'Automated Testing', 'File I/O'],
    finalGradePercent: 96,
    status: 'Valid',
    issuingPlatform: 'Build Yourself Academic Board',
    authorizedSignatory: 'Dr. Evelyn Vance, Academic Director',
    description: 'This certificate recognizes the successful completion of the Python Programming course, including programming fundamentals, object-oriented programming, problem solving, practical exercises, and capstone project-based learning.'
  },
  'EDU-2026-SQL-000092': {
    certificateNumber: 'EDU-2026-SQL-000092',
    studentName: 'Jakeer P',
    courseTitle: 'SQL & Relational Database Mastery',
    issueDate: '2026-03-24',
    verificationHash: '3d7b9a1c2e4f5a6b7c8d9e0f1a2b3c4d',
    skillsAcquired: ['Enterprise SQL', 'Window Functions', 'CTEs', 'Relational Normalization', 'Index Optimization'],
    finalGradePercent: 92,
    status: 'Valid',
    issuingPlatform: 'Build Yourself Academic Board',
    authorizedSignatory: 'Dr. Evelyn Vance, Academic Director',
    description: 'This certificate recognizes the successful completion of the SQL & Relational Database Mastery course, including multi-table joins, subqueries, complex analytical window functions, indexing, and transactional isolation.'
  }
};

function generateIntelligentFallback(message: string, mode: string, context?: any) {
  const lower = message.toLowerCase();
  let reply = '';
  let followUpQuestions: string[] = [];

  if (lower.includes('tuple')) {
    reply = `### Python Tuples Explained: Definition, Immutability & Practical Use 🐍

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
    followUpQuestions = [
      'What is tuple unpacking and how do you use *args with tuples?',
      'Why can a tuple be used as a dictionary key while a list cannot?',
      'What is a namedtuple in Python collections module?'
    ];
  } else if (lower.includes('loop') || lower.includes('for') || lower.includes('while')) {
    reply = `### Python Loops: for and while Explained 🔁

Loops allow you to iterate over sequences (lists, tuples, strings, ranges) or repeatedly execute code until a condition evaluates to False.

#### 1. The \`for\` Loop (Sequence Iteration)
Use \`for\` loops when you know what you are iterating over or have a defined sequence:
\`\`\`python
# Iterating over a collection
languages = ["Python", "TypeScript", "SQL", "German"]
for lang in languages:
    print(f"Skill mastered: {lang}")

# Using range(start, stop, step)
for i in range(1, 6):
    print(f"Step {i} completed")
\`\`\`

#### 2. The \`while\` Loop (Condition Driven)
Use \`while\` loops when execution continues until a specific state is met:
\`\`\`python
count = 3
while count > 0:
    print(f"Countdown: {count}...")
    count -= 1
print("Execution complete! 🚀")
\`\`\`

#### 3. Best Practices & Pitfalls
- **Avoid infinite loops:** Always ensure loop counters change toward the termination condition.
- **Use list comprehensions:** For clean transformation, e.g. \`[x**2 for x in numbers]\`.
- **Enumerate for indices:** Use \`for idx, item in enumerate(items):\` instead of \`range(len(items))\`.`;
    followUpQuestions = [
      'What is the difference between break and continue?',
      'How do list comprehensions compare in performance to for loops?',
      'Show me how to loop through a Python dictionary with keys and values.'
    ];
  } else if (lower.includes('join') || lower.includes('sql')) {
    reply = `### SQL JOINs: Combining Relational Data 📊

JOINs allow you to query related tables based on matching foreign and primary keys.

#### Key JOIN Types:
1. **INNER JOIN:** Returns records with matching keys in **both** tables.
\`\`\`sql
SELECT u.name, o.order_id, o.amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
\`\`\`
2. **LEFT JOIN (or LEFT OUTER JOIN):** Returns **all** records from the left table, plus matched records from the right table (NULL if no match).
\`\`\`sql
-- Shows all registered students, even those who haven't enrolled yet
SELECT s.name, e.course_title
FROM students s
LEFT JOIN enrollments e ON s.student_id = e.student_id;
\`\`\`
3. **FULL OUTER JOIN:** Returns all records when there is a match in either left or right table.

#### Performance Tips:
- Always index the foreign key columns being joined on.
- Filter with \`WHERE\` before or during joins to avoid scanning millions of unnecessary rows.`;
    followUpQuestions = [
      'What is the difference between WHERE and ON in a LEFT JOIN?',
      'How do SQL Window functions differ from GROUP BY?',
      'Explain execution plans and how indexes speed up JOIN queries.'
    ];
  } else if (lower.includes('german') || lower.includes('dative') || lower.includes('case')) {
    reply = `### German Grammatical Cases (Kasus) Overview 🇩🇪

German uses 4 grammatical cases to define the grammatical role of nouns in a sentence:

1. **Nominative (Wer/Was?):** The subject performing the action.
   - *Der Student lernt fleißig.* (The student studies hard.)
2. **Accusative (Wen/Was?):** Direct object receiving the action.
   - Masculine changes: **der → den**, **ein → einen**.
   - *Ich sehe den Lehrer.* (I see the teacher.)
3. **Dative (Wem?):** Indirect object (recipient / beneficiary) or following dative prepositions (*aus, bei, mit, nach, seit, von, zu*).
   - Masculine/Neuter: **dem / einem**
   - Feminine: **der / einer**
   - Plural: **den + n ending**
   - *Ich helfe der Frau.* (I help the woman - *helfen* triggers Dative).
4. **Genitive (Wessen?):** Possession / belonging (*des / der*).

#### Quick Tip for Two-Way Prepositions (*Wechselpräpositionen*):
- **Akkusativ:** Movement / Direction (Wohin? - Where to?)
- **Dativ:** Static location (Wo? - Where at?)`;
    followUpQuestions = [
      'Give me 5 practical example sentences using Dative prepositions.',
      'How do two-way prepositions like in, auf, and an switch between Accusative and Dative?',
      'Quiz me on German article declensions.'
    ];
  } else if (lower.includes('germany') || lower.includes('master') || lower.includes('aps') || lower.includes('visa')) {
    reply = `### Master's in Germany & Student Visa Roadmap 🎓

Studying in Germany provides world-class research education with minimal or no tuition fees at state-funded public universities.

#### 1. Core Application Milestones:
- **Degree Eligibility:** Verify that your Bachelor’s matches the ECTS credit prerequisites using DAAD and Anabin portals.
- **APS Certificate:** Mandatory for applicants from India, China, and Vietnam to verify degree authenticity.
- **Language Requirements:** English IELTS (typically 6.5 - 7.0) or TOEFL (90+), plus basic German (A1/A2 recommended for daily life).
- **Application Portals:** Submit via Uni-Assist or directly to university portals (VPD / direct application).

#### 2. Student Visa (Category D) Prerequisites:
- **Proof of Funds:** Blocked Account (*Sperrkonto*) with officially mandated living funds (approx. €11,904/year as of 2026), verifiable via Expatrio, Fintiba, or Coracle.
- **Statutory Health Insurance:** TK, Barmer, or DAK coverage.
- **Biometric Appointment:** Book early at your designated Embassy/Consulate or VFS Global center.

*Notice: Visa regulations and financial thresholds are updated periodically by the German Federal Foreign Office. Always verify current requirements on the official government website before applying.*`;
    followUpQuestions = [
      'How do I write an academic Statement of Purpose (SOP) for German universities?',
      'What is the difference between TU9 Research Universities and Universities of Applied Sciences (Hochschulen)?',
      'What are the part-time work regulations for international students in Germany?'
    ];
  } else if (lower.includes('data analyst') || lower.includes('roadmap') || lower.includes('career')) {
    reply = `### Data Analyst Career Roadmap (8-Month Action Plan) 📈

Here is a structured, production-ready curriculum to transition into a High-Impact Data Analyst role studying 2 hours per day:

#### Month 1-2: Advanced Excel & SQL Foundations
- **Excel:** Power Query, XLOOKUP, Index/Match, Pivot Tables, What-If Analysis.
- **SQL:** Multi-table Joins, CTEs (WITH clauses), Window functions (ROW_NUMBER, RANK, LAG/LEAD), Subqueries, Indexing.

#### Month 3-4: Python for Data Analysis
- **Core Python:** Data types (lists, tuples, dicts), functions, comprehension.
- **Pandas & NumPy:** DataFrame indexing, merging, grouping, reshaping, cleaning missing values.
- **Data Visualization:** Matplotlib, Seaborn, interactive Plotly charts.

#### Month 5-6: Business Intelligence (Power BI & Tableau)
- **Data Modeling:** Star schema, Fact vs Dimension tables, One-to-Many relationships.
- **DAX Measures:** CALCULATE, RELATED, SUMX, Time Intelligence (YTD, MTD).
- **Executive Dashboards:** KPI cards, interactive cross-filtering, narrative reporting.

#### Month 7-8: End-to-End Capstone Projects & Interview Prep
- **Project 1:** E-Commerce Customer Cohort & Churn Analysis (SQL + Power BI).
- **Project 2:** Predictive Pricing or Financial Exploratory Analysis (Python + Streamlit).
- **Interview Prep:** STAR behavioral stories, SQL live coding challenges, metric decomposition.`;
    followUpQuestions = [
      'What are the top 3 projects to showcase on a Data Analyst GitHub portfolio?',
      'How do SQL window functions like DENSE_RANK differ from RANK?',
      'Can you simulate a real SQL screening interview question?'
    ];
  } else {
    reply = `### Build Yourself AI: ${message.slice(0, 40)}... 🚀

Here is a comprehensive breakdown to master this topic:

#### 1. Concept Definition & Intuition
When working in **${context?.courseTitle || context?.technology || 'modern software and data engineering'}**, understanding how this works under the hood ensures scalable, bug-free implementations.

#### 2. Practical Syntax & Implementation
\`\`\`${lower.includes('sql') ? 'sql' : lower.includes('script') || lower.includes('react') ? 'typescript' : 'python'}
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
    followUpQuestions = [
      'Can you show me an intermediate production example of this?',
      'What are the common pitfalls and bugs beginners encounter here?',
      'How would an interviewer test this concept in a coding challenge?'
    ];
  }

  return {
    reply,
    followUpQuestions
  };
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini API client if key exists
  let aiClient: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({});
    } catch (e) {
      console.warn('Gemini API client initialization warning:', e);
    }
  }

  // API Routes
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', time: new Date().toISOString(), platform: 'Build Yourself' });
  });

  // 1. AI Full Conversational Chat & Tutor Route
  app.post('/api/ai/chat', async (req: Request, res: Response) => {
    const { messages, mode = 'explain', context } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const latestMessage = messages[messages.length - 1]?.content || '';

    if (aiClient) {
      try {
        const modeInstructions: Record<string, string> = {
          explain: 'Provide a clear conceptual breakdown with definition, why it matters, how it works, and a real-world example.',
          teach: 'Act as a master instructor. Teach step-by-step with structured milestones, bite-sized explanations, and check-in questions.',
          example: 'Provide 3 distinct practical examples: 1 beginner, 1 intermediate production pattern, and 1 real-world enterprise use-case.',
          practice: 'Create 2-3 hands-on practical coding/language exercises with starter prompts, hints, and expected solutions.',
          quiz: 'Generate 3 interactive conceptual multiple-choice questions with answer choices A/B/C/D and explanations for each.',
          debug: 'Inspect the provided code/error thoroughly. Identify the exact root cause, explain why the bug occurs, and provide the clean corrected code.',
          summarize: 'Summarize the core takeaways into bullet points, key rules, and a quick cheat-sheet.',
          interview: 'Ask a high-stakes technical or behavioral interview question related to this topic, outline what hiring managers look for, and evaluate candidate points.',
          correct: 'Analyze the user\'s submitted answer or sentence. Highlight strengths, point out grammatical/technical errors, and offer an improved version.',
          simplify: 'Explain this like I am 12 years old (ELI5). Use clear analogies, everyday objects, and zero confusing jargon.',
          deeper: 'Provide an advanced, deep-dive architectural and low-level explanation, runtime mechanics, performance trade-offs, and edge cases.',
          project: 'Suggest a full-stack or data portfolio project based on this skill, with architectural diagram, requirements, and GitHub deliverable checklist.'
        };

        const activeModeInstruction = modeInstructions[mode] || modeInstructions.explain;

        const systemInstruction = `You are "Build Yourself AI", the intelligent educational assistant and personal tutor on the "Build Yourself" platform (Learn. Practice. Build. Certify. Grow.).
Your goal is to help learners master programming, web development, data science, cloud computing, 12 world languages (CEFR A1-C2), career roadmaps, and Master's study abroad applications.

Active Mode: "${mode.toUpperCase()}"
Mode Guidance: ${activeModeInstruction}

Learner Context (when available):
- Current Course / Tech: "${context?.courseTitle || context?.technology || 'Computer Science & Tech'}"
- Current Lesson / Concept: "${context?.currentLesson || context?.concept || 'Core Concepts'}"
- Language Learning Track: "${context?.language || 'N/A'}" (Level: "${context?.level || 'N/A'}")
- Career Roadmap: "${context?.roadmap || 'Software Engineering & Data'}"
- Target Country: "${context?.country || 'Global / Europe / US'}"

Formatting Guidelines:
1. Always format responses with clean, readable Markdown (headings ##, bold text, bullet points).
2. Code blocks must specify language identifier (e.g. \`\`\`python, \`\`\`sql, \`\`\`javascript).
3. If discussing visas or university admissions, state verified requirements and remind the student: "Always verify current visa requirements on the official government/embassy website before applying."
4. Never invent fake URLs, fake university names, or inaccurate visa policies.
5. Provide 2-3 relevant follow-up questions at the very end formatted as:
---
**Suggested Next Questions:**
- [Follow-up question 1]
- [Follow-up question 2]
- [Follow-up question 3]`;

        // Format conversation history for Gemini
        const contents = messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }));

        const modelsToTry = ['gemini-3.8-flash', 'gemini-2.5-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
        let responseText: string | null = null;

        for (const model of modelsToTry) {
          try {
            const resp = await aiClient.models.generateContent({
              model,
              contents: contents as any,
              config: {
                systemInstruction
              }
            });
            if (resp && resp.text) {
              responseText = resp.text;
              break;
            }
          } catch (modelErr: any) {
            console.warn(`Model ${model} failed, trying next:`, modelErr?.message || modelErr);
          }
        }

        if (responseText) {
          // Extract suggested questions if present
          const text = responseText;
          const followUps: string[] = [];
          const split = text.split('**Suggested Next Questions:**');
          let mainReply = text;
          if (split.length > 1) {
            mainReply = split[0].trim();
            const lines = split[1].trim().split('\n');
            lines.forEach(l => {
              const cleaned = l.replace(/^[-*•0-9.]+\s*/, '').trim();
              if (cleaned.length > 3) followUps.push(cleaned);
            });
          }

          return res.json({
            reply: mainReply,
            followUpQuestions: followUps.slice(0, 3)
          });
        }
      } catch (err: any) {
        console.error('Gemini chat error:', err?.message || err);
      }
    }

    // Dynamic Intelligent Fallback
    const fallbackResponse = generateIntelligentFallback(latestMessage, mode, context);
    return res.json(fallbackResponse);
  });

  // 2. AI Tutor Route (Legacy compatibility)
  app.post('/api/ai/tutor', async (req: Request, res: Response) => {
    const { prompt, context } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (aiClient) {
      try {
        const systemInstruction = `You are Build Yourself AI, an expert, encouraging, and pedagogically brilliant AI tutor for a modern technology and higher education platform (Build Yourself: Learn. Practice. Build. Certify. Grow.).
Current context: Course: "${context?.courseTitle || 'Tech & Data'}", Current Lesson: "${context?.currentLesson || 'Fundamentals'}", Beginner Mode: ${context?.beginnerMode ? 'YES (Explain simply with analogies, step-by-step, simple real-world examples, no unnecessary jargon)' : 'NO (Professional, technically rigorous)'}.
Always provide clear explanations, practical code snippets when applicable, and a quick self-check question or key takeaway at the end.`;

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            systemInstruction
          }
        });

        if (response.text) {
          return res.json({ reply: response.text });
        }
      } catch (err: any) {
        console.error('Gemini tutor error:', err?.message || err);
      }
    }

    // Default response if API call cannot be made
    res.json({
      reply: `### Build Yourself AI Concept Explanation
Regarding: **"${prompt}"**

1. **Core Concept:** In ${context?.courseTitle || 'modern computing'}, this pattern separates concerns and ensures robust, maintainable execution.
2. **Step-by-Step Breakdown:**
   - Define expected inputs and explicit return contracts.
   - Guard against invalid state or boundary conditions.
   - Measure performance and verify correctness with unit tests.
3. **Practice Challenge:** Try writing a brief implementation to solve this in the course playground!`
    });
  });

  // 2. AI Language Route
  app.post('/api/ai/language', async (req: Request, res: Response) => {
    const { message, language, level, history } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required' });

    if (aiClient) {
      try {
        const systemPrompt = `You are a supportive, native-speaking AI Language Tutor teaching ${language} at CEFR level ${level}.
Evaluate the user's message: "${message}".
Return a JSON object with:
1. "reply": Your conversational response in ${language} adapted strictly to level ${level}, followed by an English translation in parentheses.
2. "grammarCorrection": Brief constructive feedback on any grammar, article, or conjugation mistakes in English.
3. "vocabularyTips": Array of 2-3 useful words or idioms related to the topic.
Format strictly as JSON.`;

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: `${systemPrompt}\nUser says: ${message}`,
          config: {
            responseMimeType: 'application/json'
          }
        });

        if (response.text) {
          try {
            const parsed = JSON.parse(response.text);
            return res.json(parsed);
          } catch {
            return res.json({ reply: response.text });
          }
        }
      } catch (err: any) {
        console.error('Gemini language error:', err?.message || err);
      }
    }

    // Fallback language feedback
    res.json({
      reply: `Wunderbar! Ich habe verstanden: "${message}". (Wonderful! I understood: "${message}".)`,
      grammarCorrection: 'Remember to capitalize nouns in German and check subject-verb agreement.',
      vocabularyTips: ['die Gelegenheit (opportunity)', 'die Herausforderung (challenge)']
    });
  });

  // 3. AI Interview Evaluation Route
  app.post('/api/ai/evaluate-interview', async (req: Request, res: Response) => {
    const { question, userAnswer, jobRole, interviewType, experienceLevel, voiceMetrics } = req.body;

    const rubric = findQuestionRubric(question || '', jobRole);
    const validation = detectNonsenseOrInvalid(question || '', userAnswer || '', rubric);

    // If nonsense, keyboard smash, repetitive gibberish, or completely unrelated, return strictly penalized low score (0-10%)
    if (validation.isInvalid) {
      const localResult = evaluateInterviewLocally(question, userAnswer, jobRole, interviewType, experienceLevel, voiceMetrics);
      return res.json(localResult);
    }

    if (aiClient) {
      try {
        const prompt = `You are a strict, top-tier technical hiring manager conducting a ${interviewType} interview for a ${jobRole} (${experienceLevel}).
Evaluate the candidate's actual answer against this interview question and official reference rubric:

Question: "${question}"
Question Intent: "${rubric.intent}"
Expected Core Concepts: ${rubric.expectedConcepts.join('; ')}
Candidate Answer: "${userAnswer}"

MANDATORY GRADING & INTEGRITY RULES:
1. ANTI-GIBBERISH RULE: If the answer is random text, keyboard mash (e.g. "wbdu fbiwqb", "asdfgh"), repetitive filler, or completely unrelated to the technical question, YOU MUST ASSIGN AN OVERALL SCORE OF 0 TO 10. Technical accuracy MUST be 0-5. Relevance MUST be 0-5. DO NOT award 70%, 80%, or higher to meaningless answers.
2. DO NOT SCORE KEYWORD PRESENCE ALONE: Merely mentioning words like "Python" or "data" without answering the technical question must receive a low score.
3. NEVER INVENT OR FABRICATE METRICS: Never say "Your latency improved by 45%" or invent achievements unless the candidate explicitly provided those metrics in their answer. If no measurable result was provided, state: "No measurable result was provided."
4. IDEAL ANSWER: You must generate a comprehensive, authoritative, technically correct IDEAL ANSWER directly addressing this exact question.
5. 5-STEP TARGETED IMPROVEMENT BLUEPRINT: Generate 5 actionable steps specifically addressing what the candidate missed on this exact question.

Return a JSON object with:
- "score": integer 0-100 based primarily on actual correctness and relevance
- "rubricScores": {
    "technicalAccuracy": integer 0-100,
    "relevance": integer 0-100,
    "completeness": integer 0-100,
    "problemSolving": integer 0-100,
    "communication": integer 0-100,
    "deliveryPace": ${voiceMetrics?.wpm ? 'integer 0-100' : 'null'}
  }
- "rubricFeedback": {
    "technicalAccuracy": "sentence evaluating correctness",
    "relevance": "sentence evaluating relevance to question",
    "completeness": "sentence evaluating concept coverage",
    "problemSolving": "sentence evaluating approach and methodology",
    "communication": "sentence evaluating clarity and structure",
    "deliveryPace": "${voiceMetrics?.wpm ? `Spoken at ${voiceMetrics.wpm} WPM.` : 'Voice delivery analysis was unavailable for this attempt.'}"
  }
- "strengths": array of 2-3 specific things the candidate did well based solely on their answer
- "improvements": array of 2-3 specific missing points or things to improve
- "technicalAccuracy": "concise technical summary",
- "communicationFeedback": "concise communication summary",
- "modelAnswer": "comprehensive ideal answer directly answering this question",
- "betterWayToAnswer": "advice on structuring the answer",
- "blueprint5Step": array of 5 actionable improvement steps specifically for this question,
- "hireRecommendation": "Strong Hire" | "Hire" | "Lean Hire" | "Needs More Practice"

Strict JSON output only.`;

        const response = await aiClient.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: { responseMimeType: 'application/json' }
        });

        if (response.text) {
          const parsed = JSON.parse(response.text);
          // Safety guard: ensure no hallucinated high score for nonsense
          if (validation.isInvalid && parsed.score > 20) {
            parsed.score = Math.min(parsed.score, 10);
          }
          if (!parsed.modelAnswer || parsed.modelAnswer.includes('latency by 45%')) {
            parsed.modelAnswer = rubric.idealAnswer;
          }
          if (!parsed.blueprint5Step || parsed.blueprint5Step.length === 0) {
            parsed.blueprint5Step = rubric.blueprint5Step;
          }
          if (!voiceMetrics?.wpm) {
            if (parsed.rubricScores) parsed.rubricScores.deliveryPace = null;
            if (parsed.rubricFeedback) parsed.rubricFeedback.deliveryPace = 'Voice delivery analysis was unavailable for this attempt.';
          }
          return res.json(parsed);
        }
      } catch (err: any) {
        console.error('Gemini interview error:', err?.message || err);
      }
    }

    // High fidelity semantic fallback
    const result = evaluateInterviewLocally(question, userAnswer, jobRole, interviewType, experienceLevel, voiceMetrics);
    res.json(result);
  });

  // 4. AI Career Roadmap Generator Route
  app.post('/api/ai/roadmap', async (req: Request, res: Response) => {
    const { targetCareer, currentSkillLevel, hoursPerDay, targetTimelineMonths, targetCountry } = req.body;

    if (aiClient) {
      try {
        const prompt = `Generate a structured, actionable, milestone-based learning roadmap for a student aiming to become a ${targetCareer}.
Current Level: ${currentSkillLevel}
Study Time: ${hoursPerDay} hours/day
Timeline: ${targetTimelineMonths} months
Target Country: ${targetCountry || 'Global'}

Format with Markdown:
- Milestone 1: Foundations & Core Technologies (Weeks 1-6)
- Milestone 2: Advanced Concepts & Tools (Weeks 7-14)
- Milestone 3: Real Projects & Portfolio Building (Weeks 15-22)
- Milestone 4: Mock Tests, Interview Prep & Applications (Weeks 23-30)
Include specific project ideas and daily schedule recommendations.`;

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt
        });

        if (response.text) {
          return res.json({ roadmapText: response.text });
        }
      } catch (err: any) {
        console.error('Gemini roadmap error:', err?.message || err);
      }
    }

    res.json({
      roadmapText: `### Personalized ${targetCareer} Roadmap (${targetTimelineMonths} Months)
- **Phase 1 (Months 1-2):** Core language and algorithmic foundations.
- **Phase 2 (Months 3-4):** Database schemas, query optimization, and REST APIs.
- **Phase 3 (Months 5-6):** End-to-end industry capstone projects and cloud deployment.
- **Phase 4 (Months 7-${targetTimelineMonths}):** Technical mock interviews, portfolio publication, and targeted applications.`
    });
  });

  // 5. Certificate Verification Route
  app.get('/api/certificates/:id', (req: Request, res: Response) => {
    const certId = req.params.id.trim().toUpperCase();
    const cert = issuedCertificates[certId];
    if (cert) {
      return res.json({ found: true, certificate: cert });
    }
    return res.status(404).json({
      found: false,
      message: `No certificate record found matching ID: ${certId}. Verify ID formatting (e.g. EDU-2026-PY-000184).`
    });
  });

  app.post('/api/certificates', (req: Request, res: Response) => {
    const cert = req.body;
    if (!cert.certificateNumber) {
      return res.status(400).json({ error: 'Certificate number required' });
    }
    issuedCertificates[cert.certificateNumber] = cert;
    res.json({ success: true, certificate: cert });
  });

  // Mount Vite or serve static
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EduNova AI Server running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start EduNova AI server:', err);
});
