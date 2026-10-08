import { ConceptDetailData } from '../components/courses/ConceptTeachingView';
import { LanguageCurriculumTopic } from './programmingLanguagesData';
import { PathTopicItem } from './learningPathsData';

export function buildConceptDetailData(
  topic: LanguageCurriculumTopic | PathTopicItem | any,
  parentName: string = 'Programming'
): ConceptDetailData {
  const isPython = parentName.toLowerCase().includes('python');
  const isJS = parentName.toLowerCase().includes('javascript') || parentName.toLowerCase().includes('web');
  const isSQL = parentName.toLowerCase().includes('sql') || parentName.toLowerCase().includes('data');

  // Syntax breakdown extractor
  const syntaxCode = topic.syntax || (
    isPython
      ? `${topic.title.toLowerCase().replace(/\s+/g, '_')} = value`
      : isJS
      ? `const ${topic.title.toLowerCase().replace(/\s+/g, '')} = value;`
      : isSQL
      ? `SELECT column_name FROM table_name WHERE condition;`
      : `${topic.title} specification`
  );

  const syntaxParts = [
    { part: syntaxCode.split('=')[0]?.trim() || 'Identifier', meaning: 'The declaration name referencing the entity in memory' },
    { part: '=', meaning: 'Assignment operator binding value to the variable reference' },
    { part: syntaxCode.split('=')[1]?.trim() || 'Expression/Value', meaning: 'The literal value, evaluated expression, or object instance' }
  ];

  return {
    id: topic.id || `concept-${Date.now()}`,
    title: topic.title,
    category: parentName,
    languageOrTrack: parentName,
    difficulty: topic.difficulty || 'Beginner',
    durationMinutes: topic.durationMinutes || 25,
    definition: topic.beginnerExplanation 
      ? `${topic.title} is a fundamental computing concept: ${topic.beginnerExplanation.replace('Imagine ', '')}`
      : `A ${topic.title} in ${parentName} is a core building block that enables software engineers to manipulate state, organize program logic, and control runtime execution cleanly.`,
    whatIsIt: topic.conceptExplanation || `In software engineering, ${topic.title} provides the structure needed to represent data and behavior reliably across memory registers and execution cycles.`,
    whyIsItUsed: topic.whyUseful || `It allows developers to write modular, maintainable, and bug-resistant applications by abstracting machine-level details into intuitive syntax.`,
    properties: [
      `Enforces defined syntax rules and strict type/runtime evaluation in ${parentName}`,
      `Can be dynamically referenced, transformed, or evaluated throughout execution`,
      `Supports composability with standard libraries, data structures, and algorithms`,
      `Managed within stack/heap execution contexts and obeys scope boundaries`,
      `Provides deterministic outcomes when given predictable inputs`
    ],
    syntax: {
      code: syntaxCode,
      breakdown: syntaxParts
    },
    examples: {
      basic: {
        code: topic.codeSnippet || (
          isPython
            ? `# Basic example of ${topic.title}\nage = 25\nname = "Build Yourself Learner"\nprint(f"User: {name}, Age: {age}")`
            : isJS
            ? `// Basic example of ${topic.title}\nconst user = "Build Yourself Learner";\nconsole.log(\`Active student: \${user}\`);`
            : `-- Basic SQL Query\nSELECT student_id, full_name, gpa\nFROM students\nWHERE enrollment_status = 'ACTIVE';`
        ),
        output: topic.exampleOutput || (
          isPython
            ? `User: Build Yourself Learner, Age: 25`
            : isJS
            ? `Active student: Build Yourself Learner`
            : `student_id | full_name       | gpa\n101        | Build Yourself Learner | 3.92`
        ),
        explanation: topic.lineByLineExplanation?.[0] || `Initializes reference and outputs state to standard output.`
      },
      intermediate: {
        code: isPython
          ? `# Intermediate pattern with error validation\ndef calculate_score(scores: list[float]) -> float:\n    if not scores:\n        raise ValueError("Score list cannot be empty")\n    return round(sum(scores) / len(scores), 2)\n\nprint("Average:", calculate_score([88.5, 92.0, 95.5]))`
          : isJS
          ? `// Intermediate pattern with array transformations\nconst metrics = [88.5, 92.0, 95.5];\nconst average = metrics.reduce((a, b) => a + b, 0) / metrics.length;\nconsole.log('Class Average:', average.toFixed(2));`
          : `-- Intermediate aggregation query\nSELECT department, AVG(salary) AS avg_salary, COUNT(*) AS headcount\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 5\nORDER BY avg_salary DESC;`,
        output: isPython
          ? `Average: 92.0`
          : isJS
          ? `Class Average: 92.00`
          : `department  | avg_salary | headcount\nEngineering | 115000.00  | 28\nData Science| 108000.00  | 14`,
        explanation: `Demonstrates defensive error checking, composable data operations, and aggregate mathematical transformation.`
      },
      realWorld: {
        scenario: topic.practicalExample
          ? `Enterprise Context: ${topic.practicalExample.slice(0, 60)}...`
          : `Production E-Commerce & Analytics Engine Integration`,
        code: topic.practicalExample
          ? `# Practical Scenario:\n# ${topic.practicalExample}\nstatus = "PROCESSED"\nprint(f"Transaction status: {status}")`
          : `# Production user checkout workflow\nclass OrderPipeline:\n    def __init__(self, user_id: str):\n        self.user_id = user_id\n        self.items = []\n\n    def add_item(self, sku: str, price: float):\n        self.items.append({"sku": sku, "price": price})\n\npipeline = OrderPipeline("usr_9981")\npipeline.add_item("BOOK_AI_ML", 49.99)\nprint(f"Order created with {len(pipeline.items)} item.")`,
        output: `Order created with 1 item. Status: READY`,
        explanation: topic.practicalExample || `Real-world systems rely on this exact construct to enforce business rules, authenticate clients, and calculate invoice totals.`
      },
    },
    howItWorks: {
      diagramFlow: `[Source Code] ──> [Lexer/Parser] ──> [AST Construction] ──> [Bytecode / Compilation] ──> [Runtime Memory Allocation] ──> [Execution Output]`,
      stepByStep: [
        `1. Lexical Analysis: The interpreter reads the tokens (keywords, identifiers, literals) and confirms lexical syntax.`,
        `2. Semantic Binding: Identifier names are mapped to specific slots in the local or global symbol table.`,
        `3. Memory Allocation: The runtime engine assigns storage in heap or stack memory for the associated object representation.`,
        `4. Evaluation & Execution: Instructions evaluate expressions from left-to-right (respecting operator precedence) and update program state.`,
        `5. Cleanup & Garbage Collection: Once references leave active execution scope, runtime reference counters or generational collectors reclaim resources.`
      ]
    },
    commonMistakes: topic.commonMistakes && topic.commonMistakes.length > 0
      ? topic.commonMistakes.map((m: any) => ({
          mistake: m,
          badCode: m.includes(':') ? m.split(':')[0] : undefined,
          correctCode: m.includes(':') ? m.split(':')[1] : undefined,
          fix: `Always follow explicit naming conventions and initialize values before accessing them in production code.`
        }))
      : [
          {
            mistake: `Referencing an uninitialized or undeclared variable`,
            badCode: `print(total_price)  # NameError!`,
            correctCode: `total_price = 0.0\nprint(total_price)`,
            fix: `Always initialize variables before referencing them.`
          },
          {
            mistake: `Accidental type coercion or improper casting`,
            badCode: `"Score: " + 95  # TypeError!`,
            correctCode: `f"Score: {95}"`,
            fix: `Use explicit formatted string interpolation instead of ad-hoc concatenation.`
          }
        ],
    bestPractices: topic.bestPractices && topic.bestPractices.length > 0
      ? topic.bestPractices
      : [
          `Use descriptive, intention-revealing names rather than single-letter abbreviations`,
          `Keep scope as tight and local as possible to avoid unintentional state leaks`,
          `Avoid magic numbers and hardcoded literals; assign them to clear constant references`,
          `Include type hints where supported to accelerate IDE auto-completion and static analysis`
        ],
    advantages: [
      `Dramatically enhances readability and self-documentation of codebases`,
      `Allows centralized modification: changing value once updates all downstream uses`,
      `Prevents redundant re-computations by caching evaluated values in memory`,
      `Forms the atomic unit of modular functional and object-oriented programming`
    ],
    limitations: [
      `Improper variable naming can mislead team members during code reviews`,
      `Global or shared mutable state introduces concurrency race conditions in multi-threaded systems`,
      `Excessive memory retention if large objects remain referenced past their useful lifecycle`
    ],
    relatedConcepts: [
      `Data Types (Primitves & Objects)`,
      `Scope & Closures`,
      `Memory Management & Garbage Collection`,
      `Immutability & Constants`
    ],
    whenToUse: [
      `When a value is computed once and referenced multiple times across a function`,
      `When an expression needs clear domain context (e.g. discount_rate = 0.15)`,
      `When accumulating iterative state across loops, streams, or recursion`
    ],
    whenNotToUse: [
      `When declaring transient values that clutter execution stack without adding clarity`,
      `Avoid mutable global variables across asynchronous microservices or distributed threads`
    ],
    practiceTasks: [
      {
        id: `prac-1-${topic.id || 'id'}`,
        task: `Declare a variable representing your target career and print a formatted announcement.`,
        hint: `Use clear snake_case or camelCase naming matching your language conventions.`,
        solutionCode: isPython
          ? `target_career = "Data Analyst"\nprint(f"Goal: Become a certified {target_career}")`
          : `const targetCareer = "Data Analyst";\nconsole.log(\`Goal: Become a certified \${targetCareer}\`);`
      },
      {
        id: `prac-2-${topic.id || 'id'}`,
        task: `Store two numeric variables, compute their product, and verify the resulting data type.`,
        hint: `Multiply with '*' operator and verify type with type() or typeof.`,
        solutionCode: isPython
          ? `unit_price = 45.5\nquantity = 3\ntotal = unit_price * quantity\nprint(f"Total: {total}, Type: {type(total)}")`
          : `const unitPrice = 45.5;\nconst quantity = 3;\nconst total = unitPrice * quantity;\nconsole.log('Total:', total, 'Type:', typeof total);`
      },
      {
        id: `prac-3-${topic.id || 'id'}`,
        task: `Implement a defensive check verifying whether a variable meets required thresholds before execution.`,
        hint: `Use an if-else conditional branch comparing variable value against threshold.`,
        solutionCode: isPython
          ? `passing_grade = 60\nstudent_score = 78\nif student_score >= passing_grade:\n    print("Passed with certification!")\nelse:\n    print("Review required.")`
          : `const passingGrade = 60;\nconst studentScore = 78;\nif (studentScore >= passingGrade) {\n  console.log("Passed with certification!");\n} else {\n  console.log("Review required.");\n}`
      }
    ],
    miniQuiz: topic.quiz && topic.quiz.length > 0
      ? topic.quiz.map((q: any, idx: number) => ({
          id: `quiz-q-${idx}`,
          question: q.question,
          type: 'mcq',
          options: q.options,
          correctIndex: q.correctAnswerIndex,
          explanation: q.explanation
        }))
      : [
          {
            id: 'quiz-q-1',
            question: `What is the primary role of a variable or identifier in programming?`,
            type: 'mcq',
            options: [
              `To reserve named memory storage referencing a value`,
              `To delete code from disk automatically`,
              `To compile files directly to machine binary without an OS`,
              `To enforce internet connectivity`
            ],
            correctIndex: 0,
            explanation: `Variables act as symbolic labels pointing to storage memory holding runtime values.`
          },
          {
            id: 'quiz-q-2',
            question: `Which of the following represents a clean code naming best practice?`,
            type: 'mcq',
            options: [
              `Using random letters like a, b, x1, y9 for complex business metrics`,
              `Descriptive, intention-revealing identifiers like user_registration_timestamp`,
              `Hardcoding passwords as variable names`,
              `Reusing the same variable name for multiple incompatible types in the same block`
            ],
            correctIndex: 1,
            explanation: `Descriptive identifiers reduce cognitive load and prevent subtle regressions during production reviews.`
          },
          {
            id: 'quiz-q-3',
            question: `True or False: In dynamically typed languages, variables must have their types explicitly declared at compile time.`,
            type: 'true_false',
            options: ['True', 'False'],
            correctIndex: 1,
            explanation: `In dynamically typed languages (like Python or JavaScript), types are bound to values at runtime rather than fixed to variable declarations.`
          }
        ],
    sandboxStarter: topic.exercise?.starterCode || topic.codeSnippet || (
      isPython
        ? `# Interactive Sandbox for ${topic.title}\nx = 10\ny = 20\nresult = x + y\nprint(f"Calculated sum of {x} and {y} = {result}")`
        : `// Interactive Sandbox for ${topic.title}\nconst x = 10;\nconst y = 20;\nconsole.log(\`Calculated sum: \${x + y}\`);`
    ),
    summary: [
      `${topic.title} is an indispensable programming fundamental for state management.`,
      `Follow strict naming conventions to write self-documenting clean code.`,
      `Scope variables as locally as possible to protect against unexpected mutations.`,
      `Always validate and defensive-check values at system boundaries before execution.`
    ]
  };
}
