export interface LanguageCurriculumTopic {
  id: string;
  title: string;
  summary: string;
  durationMinutes: number;
  conceptExplanation: string;
  beginnerExplanation: string;
  whyUseful: string;
  syntax: string;
  codeSnippet: string;
  lineByLineExplanation: string[];
  exampleOutput: string;
  commonMistakes: string[];
  bestPractices: string[];
  practicalExample: string;
  exercise: {
    title: string;
    instructions: string;
    starterCode: string;
    solutionCode: string;
    hints: string[];
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }[];
}

export interface LanguageProjectItem {
  id: string;
  number: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  skillsLearned: string[];
  deliverables: string;
  starterCode: string;
  solutionOverview: string;
}

export interface ProgrammingLanguageInfo {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  paradigm: string[];
  yearCreated: number;
  primaryUses: string[];
  beginnerTopics: LanguageCurriculumTopic[];
  intermediateTopics: LanguageCurriculumTopic[];
  advancedTopics: LanguageCurriculumTopic[];
  projects: LanguageProjectItem[];
}

// 10 practical projects standard template tailored per language
function getProjectsForLanguage(langName: string, langCode: string): LanguageProjectItem[] {
  return [
    {
      id: `${langCode}-proj-1`,
      number: 1,
      title: `${langName} Smart Console Calculator`,
      difficulty: 'Beginner',
      description: `Build an interactive calculator with basic arithmetic (+, -, *, /), percentage computations, error handling for division by zero, and historical memory storage.`,
      skillsLearned: ['Conditionals', 'Loops', 'Input/Output', 'Arithmetic Expressions'],
      deliverables: 'Interactive console application with input validation.',
      starterCode: `# ${langName} Smart Calculator Starter\n# Implement functions for add, subtract, multiply, divide`,
      solutionOverview: 'Define mathematical operation functions and run an interactive while-loop accepting user choices.'
    },
    {
      id: `${langCode}-proj-2`,
      number: 2,
      title: 'Number Guessing Game with Scoring & Hints',
      difficulty: 'Beginner',
      description: `Generate a pseudo-random integer between 1 and 100. Prompt the user to guess, providing 'Higher' or 'Lower' hints, tracking attempt counts and awarding XP points.`,
      skillsLearned: ['Random numbers', 'While loops', 'Conditional branch testing'],
      deliverables: 'Playable CLI game with replay options and high-score tracking.',
      starterCode: `# ${langName} Number Guessing Game\n# Import random generator and track attempts`,
      solutionOverview: 'Seed the random generator, evaluate target against input, and break loop on success.'
    },
    {
      id: `${langCode}-proj-3`,
      number: 3,
      title: 'Student Grade & Attendance Management System',
      difficulty: 'Intermediate',
      description: `Create a database-backed or structured in-memory manager to register students, log course grades, calculate GPA, and output statistical reports.`,
      skillsLearned: ['Data collections', 'Classes & Objects', 'File I/O', 'Formatting'],
      deliverables: 'CRUD system capable of exporting student grade summaries.',
      starterCode: `// ${langName} Student Management System\nclass Student {\n  // properties & methods\n}`,
      solutionOverview: 'Implement Student and GradeBook classes, supporting search, average grade calculation, and disk storage.'
    },
    {
      id: `${langCode}-proj-4`,
      number: 4,
      title: 'Automated Local File Organizer & Sorter',
      difficulty: 'Intermediate',
      description: `Scan a downloads directory and automatically sort files into categorized folders (PDFs, Images, Audio, Spreadsheets, Archives) based on file extensions.`,
      skillsLearned: ['Filesystem APIs', 'Path manipulation', 'Exception handling'],
      deliverables: 'Utility script that runs periodically or on command to declutter folders.',
      starterCode: `# ${langName} File Organizer Utility\n# Scan directory and move files into subfolders`,
      solutionOverview: 'Read directory entries, query extension maps, create target directories if missing, and move files safely.'
    },
    {
      id: `${langCode}-proj-5`,
      number: 5,
      title: 'Multithreaded Web Scraper & Article Extractor',
      difficulty: 'Intermediate',
      description: `Fetch web pages over HTTP, parse HTML documents, extract headlines and metadata, and save formatted output to CSV or JSON.`,
      skillsLearned: ['HTTP networking', 'HTML parsing', 'Data serialization', 'Rate limiting'],
      deliverables: 'CLI tool that extracts and structures real-time web content.',
      starterCode: `# ${langName} Web Scraper\n# Make HTTP request and parse document DOM`,
      solutionOverview: 'Establish HTTP connection with headers, inspect DOM selectors, and write clean records to disk.'
    },
    {
      id: `${langCode}-proj-6`,
      number: 6,
      title: 'Exploratory Data Analysis & Statistical Engine',
      difficulty: 'Intermediate',
      description: `Ingest CSV sales or climate datasets. Compute mean, median, standard deviation, interquartile ranges, and detect statistical outliers.`,
      skillsLearned: ['Data analysis', 'Vector math', 'Summarization', 'CSV parsing'],
      deliverables: 'Analytical script outputting comprehensive summary tables.',
      starterCode: `# Ingest CSV and calculate column metrics\n# Handle missing values`,
      solutionOverview: 'Parse rows, impute missing values, compute aggregates and format columnar reports.'
    },
    {
      id: `${langCode}-proj-7`,
      number: 7,
      title: 'High-Performance RESTful Microservice API',
      difficulty: 'Advanced',
      description: `Build an asynchronous HTTP REST API supporting CRUD operations for an e-commerce catalog, with JWT authentication and request validation.`,
      skillsLearned: ['REST architecture', 'Authentication', 'Routing', 'Serialization'],
      deliverables: 'Working API endpoints with status codes, error middleware, and swagger docs.',
      starterCode: `// REST API Controller\n// Define routes for /api/products, /api/auth`,
      solutionOverview: 'Bind routes, parse request payloads, validate data against schemas, and return JSON responses.'
    },
    {
      id: `${langCode}-proj-8`,
      number: 8,
      title: 'Machine Learning Classification Pipeline',
      difficulty: 'Advanced',
      description: `Train a supervised classifier to predict customer churn or detect spam messages, evaluating accuracy, precision, recall, and ROC-AUC curves.`,
      skillsLearned: ['Feature engineering', 'Model training', 'Cross-validation', 'Metrics'],
      deliverables: 'Trained model inference pipeline with test evaluation scores.',
      starterCode: `# Load dataset, split train/test, train classifier, compute accuracy`,
      solutionOverview: 'Standardize features, instantiate classification algorithm, fit on training data, and evaluate on holdout set.'
    },
    {
      id: `${langCode}-proj-9`,
      number: 9,
      title: 'Automated Task Scheduler & Email/Webhook Alert Daemon',
      difficulty: 'Advanced',
      description: `A background daemon that monitors server memory, disk thresholds, and external API health, triggering webhooks and alert notifications upon anomalies.`,
      skillsLearned: ['Daemons', 'Concurrency', 'Network sockets', 'Logging'],
      deliverables: 'Reliable service running in the background with graceful shutdown handling.',
      starterCode: `// Background worker daemon\n// Schedule periodic checks and trigger alert channels`,
      solutionOverview: 'Use background timers or event loops to poll health targets, buffer alerts, and dispatch payloads.'
    },
    {
      id: `${langCode}-proj-10`,
      number: 10,
      title: 'Capstone: Full Portfolio System Architecture',
      difficulty: 'Advanced',
      description: `Architect a full-stack, enterprise-grade production application showcasing all skills: database transactions, microservice communication, security hardening, and deployment.`,
      skillsLearned: ['Clean Architecture', 'Design Patterns', 'Unit/Integration Tests', 'CI/CD'],
      deliverables: 'Complete GitHub repository with README, unit test suite, and live deployment configuration.',
      starterCode: `// Capstone Architecture Entrypoint\n// High-cohesion, low-coupling modular software engine`,
      solutionOverview: 'Combine domain models, repository data layer, service logic, and presentation interfaces into a robust enterprise solution.'
    }
  ];
}

// Generate the standard curriculum topics tailored for any language
function getCurriculumForLanguage(langName: string, langCode: string) {
  // Beginner Topics (10 required by prompt)
  const beginnerTopics: LanguageCurriculumTopic[] = [
    {
      id: `${langCode}-beg-intro`,
      title: '1. Introduction to ' + langName,
      summary: `History, compilation vs interpretation, runtime environment, and first program in ${langName}.`,
      durationMinutes: 20,
      conceptExplanation: `${langName} is an industry-standard programming language known for its robust ecosystem and developer productivity. It translates high-level human logic into machine-executable instructions.`,
      beginnerExplanation: `Learning ${langName} is like learning a universal grammar to give precise instructions to computers. Once you know the grammar, you can build websites, analyze data, or automate tedious daily tasks!`,
      whyUseful: `Allows developers to express complex computational logic clearly and build software that scales across operating systems.`,
      syntax: `// Standard entrypoint / syntax in ${langName}`,
      codeSnippet: langCode === 'py' 
        ? `print("Hello, Build Yourself World!")`
        : langCode === 'java'
        ? `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Build Yourself World!");\n    }\n}`
        : langCode === 'cpp' || langCode === 'c'
        ? `#include <iostream>\nint main() {\n    std::cout << "Hello, Build Yourself World!" << std::endl;\n    return 0;\n}`
        : langCode === 'go'
        ? `package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, Build Yourself World!")\n}`
        : langCode === 'rust'
        ? `fn main() {\n    println!("Hello, Build Yourself World!");\n}`
        : `console.log("Hello, Build Yourself World!");`,
      lineByLineExplanation: [
        'Line 1: Entrypoint declaration / Output command that dispatches characters to the standard output buffer.',
        'Line 2: Flushes output and prints the greeting string to the console.'
      ],
      exampleOutput: 'Hello, Build Yourself World!',
      commonMistakes: [
        'Missing punctuation or syntax boundaries required by the language compiler.',
        'Case sensitivity mistakes (e.g. `Print` instead of `print`).'
      ],
      bestPractices: [
        'Always start with a clean environment and understand the toolchain.',
        'Follow official naming conventions and style guides.'
      ],
      practicalExample: 'Verifying compiler and runtime setup before writing complex business logic.',
      exercise: {
        title: 'Print Your Student Greeting',
        instructions: `Modify the print statement to output "Welcome back, Jakeer! Ready to learn ${langName}."`,
        starterCode: langCode === 'py' ? `print("Hello World")` : `console.log("Hello World");`,
        solutionCode: langCode === 'py' ? `print("Welcome back, Jakeer! Ready to learn ${langName}.")` : `console.log("Welcome back, Jakeer! Ready to learn ${langName}.");`,
        hints: ['Keep the quotes around your text', 'Check for exact spelling']
      },
      quiz: [
        {
          question: `What is the primary role of the runtime / compiler in ${langName}?`,
          options: [
            'Translating code into instructions the CPU can execute and manage memory',
            'Searching Google for code answers',
            'Designing CSS visual themes',
            'Storing user passwords in plaintext'
          ],
          correctAnswerIndex: 0,
          explanation: 'Compilers and interpreters translate human-readable source code into machine instructions and coordinate execution.'
        }
      ]
    },
    {
      id: `${langCode}-beg-syntax`,
      title: '2. ' + langName + ' Syntax & Statements',
      summary: 'Basic structure, whitespace rules, semicolons, comments, and blocks.',
      durationMinutes: 25,
      conceptExplanation: `Syntax defines the grammatical rules for writing valid code in ${langName}. Violating syntax rules causes compilation errors before execution starts.`,
      beginnerExplanation: `Think of syntax like punctuation in English. Forgetting a period at the end of a sentence confuses the reader; forgetting syntax rules confuses the computer.`,
      whyUseful: 'Ensures code is deterministic, readable by your team, and parseable by compilers.',
      syntax: '// Single line comment\n/* Multi-line comment */',
      codeSnippet: `// Welcome to ${langName} Syntax\nconst message = "Clean syntax enables bug-free code";`,
      lineByLineExplanation: ['Line 1: Comment ignored by compiler', 'Line 2: Statement declaring message constant'],
      exampleOutput: 'Clean syntax enables bug-free code',
      commonMistakes: ['Mismatched braces or quotes', 'Indentation inconsistency'],
      bestPractices: ['Use automated formatters like Prettier or Black', 'Write clear comments explaining the WHY, not just the WHAT'],
      practicalExample: 'Maintaining consistent code standards in large multi-developer engineering organizations.',
      exercise: {
        title: 'Add Documentation Comments',
        instructions: 'Add a comment describing the calculation below.',
        starterCode: `x = 10\ny = 20\nresult = x + y`,
        solutionCode: `# Calculate total score\nx = 10\ny = 20\nresult = x + y`,
        hints: ['Use comment markers appropriate for the language']
      },
      quiz: [
        {
          question: 'What happens when a syntax error is present in your code?',
          options: [
            'The compiler or interpreter refuses to run the code until fixed',
            'The computer skips the erroneous line and continues running',
            'The computer deletes the file automatically',
            'The program runs twice as fast'
          ],
          correctAnswerIndex: 0,
          explanation: 'Syntax errors break grammatical parsing and prevent program startup.'
        }
      ]
    },
    {
      id: `${langCode}-beg-vars`,
      title: '3. Variables & Memory Allocation in ' + langName,
      summary: 'Declaring variables, assignment, naming conventions, and memory scope.',
      durationMinutes: 30,
      conceptExplanation: `In ${langName}, variables provide symbolic names bound to memory locations or object references that store mutable or immutable values.`,
      beginnerExplanation: `Think of a variable as a labeled jar. You label the jar "age" and put the number 21 inside. Whenever you need the number, you simply look inside the "age" jar!`,
      whyUseful: 'Allows programs to remember inputs, accumulate scores, and compute dynamic outcomes.',
      syntax: 'name = "Jakeer"\nage = 21',
      codeSnippet: `name = "Jakeer"\nage = 21\nrole = "Data Analyst"\nprint(f"Student: {name}, Age: {age}, Goal: {role}")`,
      lineByLineExplanation: [
        'Line 1: Allocates string "Jakeer" and assigns reference to `name`',
        'Line 2: Allocates integer 21 and assigns to `age`',
        'Line 3: Allocates string "Data Analyst" and assigns to `role`',
        'Line 4: Interpolates variables into output stream'
      ],
      exampleOutput: 'Student: Jakeer, Age: 21, Goal: Data Analyst',
      commonMistakes: [
        'Attempting to use a variable before it has been initialized',
        'Starting names with numbers or illegal symbols'
      ],
      bestPractices: [
        'Use meaningful names (e.g. `total_score` instead of `s`)',
        'Prefer immutability (constants) when values should not change'
      ],
      practicalExample: 'Storing session tokens and user credentials during login.',
      exercise: {
        title: 'Declare Student Profile Variables',
        instructions: 'Declare `student_name` with your name and `hours_studied` with 2.',
        starterCode: `student_name = ""\nhours_studied = 0`,
        solutionCode: `student_name = "Jakeer"\nhours_studied = 2`,
        hints: ['Assign string value inside quotes', 'Assign integer without quotes']
      },
      quiz: [
        {
          question: 'Which of the following is an invalid variable name?',
          options: ['2ndUser', 'user_age', 'userName', '_sessionToken'],
          correctAnswerIndex: 0,
          explanation: 'Variable names cannot start with a numeral in almost all standard programming languages.'
        }
      ]
    },
    {
      id: `${langCode}-beg-types`,
      title: '4. Data Types & Type Conversion',
      summary: 'Primitives (int, float, string, boolean), complex types, and casting.',
      durationMinutes: 30,
      conceptExplanation: `Data types inform the compiler how much memory to allocate and what mathematical or logical operations are legally permissible on that data.`,
      beginnerExplanation: `You cannot multiply a name by a shoe. Data types make sure numbers do math, text handles words, and booleans represent True/False decisions.`,
      whyUseful: 'Prevents calculation errors and optimizes CPU memory allocation.',
      syntax: 'type(val) or explicit cast (int, str, float)',
      codeSnippet: `score_str = "95"\nscore_num = int(score_str)\nfinal_score = score_num + 5\nprint(f"Final Score: {final_score}")`,
      lineByLineExplanation: [
        'Line 1: Declares a string literal containing digits "95"',
        'Line 2: Explicitly parses and casts the string into an integer 95',
        'Line 3: Safely adds 5 to the integer',
        'Line 4: Prints 100'
      ],
      exampleOutput: 'Final Score: 100',
      commonMistakes: ['Trying to concatenate string and integer without casting', 'Precision loss when casting float to int'],
      bestPractices: ['Explicitly validate inputs before casting', 'Use strong typing where available to catch errors at compile time'],
      practicalExample: 'Parsing currency strings from payment webhooks into exact numbers.',
      exercise: {
        title: 'Cast and Calculate Total',
        instructions: 'Convert `price_str = "49.99"` to a float and add `tax = 5.00`.',
        starterCode: `price_str = "49.99"\ntax = 5.00\n# calculate total`,
        solutionCode: `price_str = "49.99"\ntax = 5.00\ntotal = float(price_str) + tax\nprint(total)`,
        hints: ['Use float() conversion']
      },
      quiz: [
        {
          question: 'What is the boolean evaluation of an empty string in most dynamic languages?',
          options: ['False (falsy)', 'True (truthy)', 'Causes immediate syntax error', 'Undefined null'],
          correctAnswerIndex: 0,
          explanation: 'Empty strings, zeros, and empty collections evaluate to false/falsy in conditional checks.'
        }
      ]
    },
    {
      id: `${langCode}-beg-io`,
      title: '5. Input & Output (I/O) Operations',
      summary: 'Reading from user input, formatting output, streams, and file handles.',
      durationMinutes: 25,
      conceptExplanation: `I/O operations connect your program logic with outside inputs (keyboard, files, network) and send results to standard output streams.`,
      beginnerExplanation: `Imagine asking a customer for their coffee order and then printing their receipt. Input is listening to what they say, Output is printing their receipt!`,
      whyUseful: 'Interactive software requires receiving dynamic data from users or external systems.',
      syntax: 'user_input = input("Prompt: ")',
      codeSnippet: `# Interactive I/O Simulation\nuser_name = "Jakeer"\nprint(f"Welcome to Build Yourself, {user_name}!")`,
      lineByLineExplanation: [
        'Line 1: Comments the routine',
        'Line 2: Simulates received input',
        'Line 3: Dispatches formatted string to stdout'
      ],
      exampleOutput: 'Welcome to Build Yourself, Jakeer!',
      commonMistakes: ['Assuming input() returns a number instead of a string', 'Unbuffered output delays'],
      bestPractices: ['Always trim/sanitize user inputs before processing', 'Provide helpful prompt instructions'],
      practicalExample: 'Building interactive command-line utilities and receiving user form arguments.',
      exercise: {
        title: 'Echo Formatted Input',
        instructions: 'Format and display a confirmation message for user input.',
        starterCode: `user_city = "Munich"\n# print: Moving to <city> for Masters!`,
        solutionCode: `user_city = "Munich"\nprint(f"Moving to {user_city} for Masters!")`,
        hints: ['Use string formatting']
      },
      quiz: [
        {
          question: 'What data type is typically returned by standard user input functions?',
          options: ['String', 'Integer', 'Float', 'Boolean'],
          correctAnswerIndex: 0,
          explanation: 'Standard terminal input is read as a character string stream that must be parsed if numerical values are needed.'
        }
      ]
    },
    {
      id: `${langCode}-beg-operators`,
      title: '6. Operators & Expressions',
      summary: 'Arithmetic, comparison, logical, bitwise, and assignment operators.',
      durationMinutes: 25,
      conceptExplanation: `Operators are special symbols that perform computations on operands. Operator precedence dictates the order in which expressions are evaluated.`,
      beginnerExplanation: `Just like PEMDAS in math (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction), code operators follow strict order of operations!`,
      whyUseful: 'Fundamental to all calculations, conditional decisions, and threshold triggers.',
      syntax: '+, -, *, /, %, ==, !=, >, <, and, or, not',
      codeSnippet: `a = 15\nb = 4\nprint(f"Addition: {a + b}, Division: {a / b}, Remainder: {a % b}")`,
      lineByLineExplanation: [
        'Line 1: Sets integer 15',
        'Line 2: Sets integer 4',
        'Line 3: Computes addition, floating division, and modulo remainder'
      ],
      exampleOutput: 'Addition: 19, Division: 3.75, Remainder: 3',
      commonMistakes: ['Using `=` (assignment) instead of `==` (equality comparison)', 'Integer division truncation bugs'],
      bestPractices: ['Use parentheses `()` to make operator precedence explicit and unambiguous'],
      practicalExample: 'Calculating discount rates, cart totals, and pagination offsets.',
      exercise: {
        title: 'Check Even or Odd',
        instructions: 'Use the modulo operator `%` to determine if `number = 42` is even.',
        starterCode: `number = 42\nis_even = (number % 2 == 0)\nprint("Is even:", is_even)`,
        solutionCode: `number = 42\nis_even = (number % 2 == 0)\nprint("Is even:", is_even)`,
        hints: ['If number % 2 is 0, it is even']
      },
      quiz: [
        {
          question: 'What is the result of 17 % 5?',
          options: ['2', '3', '3.4', '1'],
          correctAnswerIndex: 0,
          explanation: '17 divided by 5 is 3 with a remainder of 2. The % operator returns the remainder.'
        }
      ]
    },
    {
      id: `${langCode}-beg-cond`,
      title: '7. Conditional Statements (if, else if, else)',
      summary: 'Branching logic, truth tables, switch/case statements, and guard clauses.',
      durationMinutes: 30,
      conceptExplanation: `Conditionals evaluate boolean expressions and route code execution down distinct paths based on whether the condition evaluates to True or False.`,
      beginnerExplanation: `Imagine choosing clothing based on weather: If it rains, take an umbrella. Else if it is sunny, wear sunglasses. Else, wear a jacket!`,
      whyUseful: 'Enables software to make intelligent, contextual decisions rather than running identically every time.',
      syntax: 'if condition:\n    do_something()\nelse:\n    do_other()',
      codeSnippet: `score = 88\nif score >= 90:\n    print("Grade: A - Outstanding")\nelif score >= 75:\n    print("Grade: B - Proficient")\nelse:\n    print("Grade: C - Developing")`,
      lineByLineExplanation: [
        'Line 1: Initializes student score to 88',
        'Line 2: Checks if score meets 90 threshold',
        'Line 4: Checks if score meets 75 threshold (matches 88!)',
        'Line 5: Executes Grade B branch'
      ],
      exampleOutput: 'Grade: B - Proficient',
      commonMistakes: ['Over-nesting if statements (arrow anti-pattern)', 'Forgetting boundary cases (e.g. `>` vs `>=`)'],
      bestPractices: ['Use early returns / guard clauses to keep code flat and readable'],
      practicalExample: 'Authorizing user permissions and validating form submissions.',
      exercise: {
        title: 'Pass/Fail Evaluator',
        instructions: 'Write a condition that prints "Passed" if score >= 50, otherwise "Needs Review".',
        starterCode: `score = 72\n# write if-else statement`,
        solutionCode: `score = 72\nif score >= 50:\n    print("Passed")\nelse:\n    print("Needs Review")`,
        hints: ['Use >= operator']
      },
      quiz: [
        {
          question: 'What happens when none of the if/elif conditions match and there is no else block?',
          options: [
            'Program continues past the conditional block without executing any branch',
            'Program crashes with an unhandled exception',
            'The first branch is executed by default',
            'The loop restarts'
          ],
          correctAnswerIndex: 0,
          explanation: 'If no conditional branch matches and there is no catch-all else, execution skips to the following statement.'
        }
      ]
    },
    {
      id: `${langCode}-beg-loops`,
      title: '8. Loops & Repetition (for, while, iterators)',
      summary: 'Automating repetitive tasks, loop control (break, continue), and avoiding infinite loops.',
      durationMinutes: 35,
      conceptExplanation: `Loops execute a code block repeatedly until a termination condition is met or all elements in a sequence have been processed.`,
      beginnerExplanation: `Instead of writing "Send email to student" 1,000 times, a loop lets you write it once: "For each student in this list, send email".`,
      whyUseful: 'Essential for processing large datasets, search algorithms, animations, and server event loops.',
      syntax: 'for item in items:\n    process(item)',
      codeSnippet: `topics = ["Variables", "Operators", "Conditionals", "Loops"]\nfor index, topic in enumerate(topics, 1):\n    print(f"Step {index}: {topic}")`,
      lineByLineExplanation: [
        'Line 1: Creates list of topics',
        'Line 2: Iterates over topics providing both sequential 1-based index and item name',
        'Line 3: Prints each step'
      ],
      exampleOutput: 'Step 1: Variables\nStep 2: Operators\nStep 3: Conditionals\nStep 4: Loops',
      commonMistakes: ['Accidental infinite loops where loop condition never flips to False', 'Off-by-one errors'],
      bestPractices: ['Prefer for-in loops over manual counter incrementation where possible'],
      practicalExample: 'Iterating through database rows to generate quarterly revenue charts.',
      exercise: {
        title: 'Sum the First 10 Integers',
        instructions: 'Use a loop to calculate the sum of numbers from 1 to 10.',
        starterCode: `total = 0\n# use loop to add 1..10\nprint("Total:", total)`,
        solutionCode: `total = 0\nfor i in range(1, 11):\n    total += i\nprint("Total:", total)`,
        hints: ['range(1, 11) includes 1 through 10']
      },
      quiz: [
        {
          question: 'Which statement immediately exits a loop regardless of the remaining iterations?',
          options: ['break', 'continue', 'pass', 'return only'],
          correctAnswerIndex: 0,
          explanation: 'The break statement terminates the enclosing loop immediately.'
        }
      ]
    },
    {
      id: `${langCode}-beg-func`,
      title: '9. Functions & Modular Code',
      summary: 'Defining functions, parameters, return values, default arguments, and pure functions.',
      durationMinutes: 35,
      conceptExplanation: `Functions are self-contained reusable blocks of code that take inputs (arguments), execute logic, and return a result.`,
      beginnerExplanation: `Think of a blender. You put fruits inside (parameters), press blend (function logic), and get a smoothie out (return value)! You can use the blender whenever you need a smoothie.`,
      whyUseful: 'DRY principle (Don’t Repeat Yourself), isolation of concerns, and testability.',
      syntax: 'def function_name(arg1, arg2):\n    return result',
      codeSnippet: `def calculate_gpa(scores):\n    return sum(scores) / len(scores)\n\nmy_scores = [85, 92, 78, 96]\ngpa = calculate_gpa(my_scores)\nprint(f"Average Score: {gpa:.1f}")`,
      lineByLineExplanation: [
        'Line 1: Defines function calculate_gpa expecting a sequence of numbers',
        'Line 2: Divides sum of elements by count and returns float',
        'Line 4: Defines input scores',
        'Line 5: Calls function with arguments and stores returned value in gpa',
        'Line 6: Formats float to 1 decimal place'
      ],
      exampleOutput: 'Average Score: 87.8',
      commonMistakes: ['Forgetting the return statement (function returns None/undefined)', 'Mutating mutable default arguments'],
      bestPractices: ['Keep functions small and focused on doing ONE task well', 'Write clear docstrings and type hints'],
      practicalExample: 'Encapsulating pricing calculation and coupon discount formulas in checkout systems.',
      exercise: {
        title: 'Create an Admission Eligibility Function',
        instructions: 'Write a function `is_eligible(gpa, gre_score)` that returns True if gpa >= 3.0 and gre_score >= 310.',
        starterCode: `def is_eligible(gpa, gre_score):\n    # implement check\n    pass`,
        solutionCode: `def is_eligible(gpa, gre_score):\n    return gpa >= 3.0 and gre_score >= 310`,
        hints: ['Use boolean and operator']
      },
      quiz: [
        {
          question: 'What is a "pure function" in software engineering?',
          options: [
            'A function whose return value depends solely on its arguments with zero observable side effects',
            'A function with no return statement',
            'A function that only runs once when the computer boots',
            'A function that does not use variables'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pure functions produce deterministic output for identical inputs and do not modify external state.'
        }
      ]
    },
    {
      id: `${langCode}-beg-debug`,
      title: '10. Basic Debugging & Stack Trace Analysis',
      summary: 'Reading error messages, stack traces, step-through debugging, and print inspection.',
      durationMinutes: 30,
      conceptExplanation: `Debugging is the methodical process of identifying, reproducing, isolating, and fixing bugs or unintended behavior in software systems.`,
      beginnerExplanation: `Being a developer is like being a detective. When code crashes, the computer leaves a clue called a "Stack Trace" telling you exactly which file and line caused the issue!`,
      whyUseful: 'Software engineers spend more time debugging and reading code than writing new code.',
      syntax: 'try:\n    risky_operation()\nexcept Exception as e:\n    handle_error(e)',
      codeSnippet: `def divide_safely(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError as err:\n        print(f"[Handled Error] Cannot divide by zero: {err}")\n        return None\n\nresult = divide_safely(10, 0)`,
      lineByLineExplanation: [
        'Line 1: Function definition',
        'Line 2: try block isolating hazardous operation',
        'Line 4: Catches zero division specifically',
        'Line 5: Logs clean diagnostic without crashing whole process'
      ],
      exampleOutput: '[Handled Error] Cannot divide by zero: division by zero',
      commonMistakes: ['Catching all exceptions blindly with bare except blocks without logging', 'Guessing fixes without reading the error message'],
      bestPractices: ['Read the stack trace from bottom to top to identify root cause', 'Write regression unit tests for every bug encountered'],
      practicalExample: 'Catching network timeouts in API consumers and retrying gracefully.',
      exercise: {
        title: 'Wrap in Try-Except Block',
        instructions: 'Safely parse an integer from input string with error handling.',
        starterCode: `def parse_int(s):\n    # wrap in try except\n    return int(s)`,
        solutionCode: `def parse_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        return 0`,
        hints: ['Catch ValueError for invalid string conversions']
      },
      quiz: [
        {
          question: 'What is the top-most line of a typical call stack trace pointing to?',
          options: [
            'The initial entry point of the program or caller',
            'The line where the syntax error occurred',
            'The operating system kernel boot sequence',
            'The user profile database'
          ],
          correctAnswerIndex: 0,
          explanation: 'The call stack shows the chain of function invocations from the original caller down to the currently executing function.'
        }
      ]
    }
  ];

  // Intermediate Topics (14 required by prompt)
  const intermediateTopics: LanguageCurriculumTopic[] = [
    {
      id: `${langCode}-int-arrays`,
      title: '1. Arrays & Lists',
      summary: 'Contiguous memory, dynamic resizing, indexing, slicing, and common operations.',
      durationMinutes: 30,
      conceptExplanation: 'Arrays store ordered sequences of elements accessible via zero-based integer indices.',
      beginnerExplanation: 'Like a row of numbered lockers starting at 0. Locker 0 holds item 1, locker 1 holds item 2, and so on.',
      whyUseful: 'Fast O(1) random access by index.',
      syntax: 'list[0] | list.append(x) | list.pop()',
      codeSnippet: `scores = [85, 90, 78, 92]\nscores.append(95)\nprint(f"Top Score: {max(scores)}, Length: {len(scores)}")`,
      lineByLineExplanation: ['Line 1: Declares list', 'Line 2: Appends item', 'Line 3: Calculates max and length'],
      exampleOutput: 'Top Score: 95, Length: 5',
      commonMistakes: ['Index out of range errors'],
      bestPractices: ['Use list comprehensions for concise transformations'],
      practicalExample: 'Maintaining customer queues and transaction histories.',
      exercise: { title: 'Slice an Array', instructions: 'Extract the first 3 elements of a list.', starterCode: 'items = [10, 20, 30, 40, 50]\n# slice items', solutionCode: 'items = [10, 20, 30, 40, 50]\nprint(items[:3])', hints: ['Use items[:3]'] },
      quiz: [{ question: 'What is the time complexity of looking up an array item by index?', options: ['O(1) Constant', 'O(N) Linear', 'O(log N)', 'O(N^2)'], correctAnswerIndex: 0, explanation: 'Direct memory offset calculation allows instant O(1) access.' }]
    },
    {
      id: `${langCode}-int-strings`,
      title: '2. Strings & Text Processing',
      summary: 'Immutability, encodings (UTF-8), formatting, regex, and substring manipulations.',
      durationMinutes: 30,
      conceptExplanation: 'Strings represent sequences of Unicode characters. In most modern languages, strings are immutable.',
      beginnerExplanation: 'Think of words printed in stone. You cannot change a letter in place; to change it, you carve a new stone!',
      whyUseful: 'Handling user input, NLP, file formats, and web protocols.',
      syntax: 'str.split() | str.join() | str.replace()',
      codeSnippet: `raw = "  jakeer, munich, data analyst  "\ncleaned = [item.strip().title() for item in raw.split(',')]\nprint(cleaned)`,
      lineByLineExplanation: ['Line 1: Raw untrimmed string', 'Line 2: Splits on comma, strips whitespace, capitalizes', 'Line 3: Prints cleaned tokens'],
      exampleOutput: "['Jakeer', 'Munich', 'Data Analyst']",
      commonMistakes: ['Assuming string modification methods mutate the original string in place'],
      bestPractices: ['Use string builders / joins rather than repeated += in loops'],
      practicalExample: 'Sanitizing user-submitted forms and CSV parsing.',
      exercise: { title: 'Normalize String', instructions: 'Convert email to lowercase and remove outer spaces.', starterCode: 'email = "  User@BuildYourself.AI  "\n# clean email', solutionCode: 'email = "  User@BuildYourself.AI  "\nprint(email.strip().lower())', hints: ['strip() and lower()'] },
      quiz: [{ question: 'Why are strings immutable in Python, Java, and JavaScript?', options: ['Security, caching of hash codes, and thread-safety', 'Because computers cannot change letters', 'To make strings take more memory', 'To prevent reading strings'], correctAnswerIndex: 0, explanation: 'String immutability guarantees thread safety, safe dictionary keys, and string pool memory optimization.' }]
    },
    {
      id: `${langCode}-int-collections`,
      title: '3. Collections (Sets, Dictionaries / HashMaps, Tuples)',
      summary: 'Hash tables, O(1) key lookups, uniqueness guarantees with sets, and immutable tuples.',
      durationMinutes: 35,
      conceptExplanation: 'Collections organize data by key-value pairs (dictionaries/maps) or unique memberships (sets).',
      beginnerExplanation: 'A dictionary is like looking up a word: the word is the key, and its meaning is the value!',
      whyUseful: 'Instant O(1) average lookup, deduplication, and structured records.',
      syntax: 'dict = { "key": "value" }\nset = { 1, 2, 3 }',
      codeSnippet: `user = {"name": "Jakeer", "role": "Data Analyst", "xp": 1450}\nprint(f"XP: {user.get('xp')}, Role: {user['role']}")`,
      lineByLineExplanation: ['Line 1: Creates dictionary with 3 keys', 'Line 2: Accesses keys safely with .get()'],
      exampleOutput: 'XP: 1450, Role: Data Analyst',
      commonMistakes: ['Using unhashable mutable types as dictionary keys'],
      bestPractices: ['Use .get() with default fallbacks to prevent KeyError crashes'],
      practicalExample: 'Storing user session caches and fast ID lookups.',
      exercise: { title: 'Create Word Frequency Map', instructions: 'Count occurrences of words.', starterCode: 'words = ["python", "ai", "python"]\n# count words', solutionCode: 'words = ["python", "ai", "python"]\ncounts = {}\nfor w in words: counts[w] = counts.get(w, 0) + 1\nprint(counts)', hints: ['Use dict.get(w, 0) + 1'] },
      quiz: [{ question: 'What is the average time complexity for searching a key in a hash table?', options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'], correctAnswerIndex: 0, explanation: 'Hash functions compute direct bucket addresses in O(1) time.' }]
    },
    {
      id: `${langCode}-int-modules`,
      title: '4. Modules & Organization',
      summary: 'Separating code across files, namespace management, and internal exports.',
      durationMinutes: 25,
      conceptExplanation: 'Modules encapsulate related functions, classes, and constants into individual files.',
      beginnerExplanation: 'Instead of putting all your clothes in one giant pile, you organize shirts in one drawer and socks in another.',
      whyUseful: 'Keeps large software codebases modular, readable, and maintainable.',
      syntax: 'import module_name\nfrom module_name import specific_func',
      codeSnippet: `import math\nprint(f"Pi: {math.pi:.4f}, Square Root of 144: {math.sqrt(144)}")`,
      lineByLineExplanation: ['Line 1: Imports standard math module', 'Line 2: Accesses constants and functions'],
      exampleOutput: 'Pi: 3.1416, Square Root of 144: 12.0',
      commonMistakes: ['Circular imports where module A imports B while B imports A'],
      bestPractices: ['Avoid wildcard imports (e.g. `from module import *`)'],
      practicalExample: 'Structuring full-stack backends with separate controllers, models, and routes.',
      exercise: { title: 'Import and Use OS module', instructions: 'Import os/path and check existence.', starterCode: 'import os\n# check cwd', solutionCode: 'import os\nprint("Current working dir:", os.getcwd())', hints: ['Use os.getcwd()'] },
      quiz: [{ question: 'Why should wildcard imports like "from math import *" be avoided?', options: ['They pollute namespace and can silently overwrite existing variables', 'They slow down compiler permanently', 'They crash the computer', 'They make functions private'], correctAnswerIndex: 0, explanation: 'Wildcard imports obscure where functions originate and create name collision hazards.' }]
    },
    {
      id: `${langCode}-int-packages`,
      title: '5. Packages & Dependency Management',
      summary: 'Package managers (pip, npm, cargo, maven, go modules), semantic versioning, virtual environments.',
      durationMinutes: 30,
      conceptExplanation: 'Package managers automate downloading, resolving version conflicts, and bundling third-party libraries.',
      beginnerExplanation: 'Think of an app store for code. Instead of building a complex PDF generator yourself, you install an open-source package with one command!',
      whyUseful: 'Leverages millions of hours of battle-tested open-source code.',
      syntax: 'pip install package | npm install package | cargo add package',
      codeSnippet: `# Virtual environment command\n# python -m venv venv\n# pip install requests pandas`,
      lineByLineExplanation: ['Line 1: Isolated sandbox for project libraries', 'Line 2: Installing project dependencies'],
      exampleOutput: 'Successfully installed packages in venv.',
      commonMistakes: ['Installing dependencies globally rather than in project virtual environments'],
      bestPractices: ['Lock dependencies with lockfiles (requirements.txt, package-lock.json, Cargo.lock)'],
      practicalExample: 'Maintaining consistent production deployments with reproducible containers.',
      exercise: { title: 'Lock Dependencies', instructions: 'Generate dependency specification.', starterCode: '# write requirements statement', solutionCode: '# requirements.txt\npandas==2.2.0\nrequests>=2.31.0', hints: ['Pin versions with =='] },
      quiz: [{ question: 'What does the middle number in SemVer 2.4.1 represent?', options: ['Minor version (backwards-compatible new features)', 'Major breaking change', 'Patch bugfix', 'Year of release'], correctAnswerIndex: 0, explanation: 'Semantic Versioning is Major.Minor.Patch.' }]
    },
    {
      id: `${langCode}-int-errors`,
      title: '6. Error & Exception Handling',
      summary: 'Try/catch/finally, raising custom exceptions, defensive assertions, and error hierarchies.',
      durationMinutes: 35,
      conceptExplanation: 'Exceptions represent unexpected runtime events. Proper handling prevents application crashes and provides recovery paths.',
      beginnerExplanation: 'Like safety nets under trapeze artists. If code stumbles, the net catches it safely so the show can go on!',
      whyUseful: 'Guarantees reliable, resilient production services that recover gracefully from external failures.',
      syntax: 'try:\n    pass\nexcept SpecificError:\n    pass\nfinally:\n    cleanup()',
      codeSnippet: `try:\n    val = int("invalid_number")\nexcept ValueError as e:\n    print(f"Gracefully recovered from: {e}")\nfinally:\n    print("Cleanup completed.")`,
      lineByLineExplanation: ['Line 1: try block', 'Line 3: Catches ValueError explicitly', 'Line 5: finally always executes'],
      exampleOutput: 'Gracefully recovered from: invalid literal for int() with base 10: \'invalid_number\'\nCleanup completed.',
      commonMistakes: ['Silently swallowing exceptions without logging or re-raising'],
      bestPractices: ['Always catch specific exceptions rather than broad base exceptions'],
      practicalExample: 'Handling database connection dropouts with automatic retry logic.',
      exercise: { title: 'Custom Exception', instructions: 'Define and raise a custom exception.', starterCode: 'class NegativeBalanceError(Exception): pass\n# raise if balance < 0', solutionCode: 'class NegativeBalanceError(Exception): pass\nbalance = -10\nif balance < 0:\n    raise NegativeBalanceError("Balance cannot be negative")', hints: ['Use raise statement'] },
      quiz: [{ question: 'When does the "finally" block execute?', options: ['Always, regardless of whether an exception occurred or was handled', 'Only when an error occurs', 'Only when no error occurs', 'Never in production'], correctAnswerIndex: 0, explanation: 'The finally block is guaranteed to execute for resource cleanup like closing files or database sockets.' }]
    },
    {
      id: `${langCode}-int-files`,
      title: '7. File Handling & I/O Streams',
      summary: 'Reading/writing text and binary files, context managers (`with` statement), and buffering.',
      durationMinutes: 35,
      conceptExplanation: 'File I/O transfers byte streams between disk storage and RAM. Context managers guarantee files are closed properly.',
      beginnerExplanation: 'Opening a file is like checking out a library book. When you are done reading, the context manager automatically returns the book to the shelf!',
      whyUseful: 'Persisting application state, reading configuration, processing CSVs and log files.',
      syntax: 'with open("filename.txt", "r") as f:\n    content = f.read()',
      codeSnippet: `# Writing and Reading using Context Manager\ndata = "Build Yourself: Verified Learning Record"\nwith open("record.txt", "w") as f:\n    f.write(data)\n\nwith open("record.txt", "r") as f:\n    print(f.read())`,
      lineByLineExplanation: ['Line 2: Data string', 'Line 3: Opens file in write mode with automatic close', 'Line 6: Reads content safely'],
      exampleOutput: 'Build Yourself: Verified Learning Record',
      commonMistakes: ['Forgetting to close file handles, causing memory/file descriptor leaks'],
      bestPractices: ['Always use context managers (`with` / `try-with-resources`) for I/O operations'],
      practicalExample: 'Processing bulk transaction logs and generating daily accounting audit records.',
      exercise: { title: 'Read Lines Iteratively', instructions: 'Iterate over lines in a file to prevent high memory usage.', starterCode: '# read lines generator', solutionCode: 'with open("data.txt", "r") as f:\n    for line in f:\n        print(line.strip())', hints: ['Iterate directly over file handle'] },
      quiz: [{ question: 'Why is "with open(...) as f:" preferred over manual f.open() and f.close()?', options: ['It guarantees the file handle is closed even if an exception occurs inside the block', 'It runs code twice as fast', 'It saves files to the cloud automatically', 'It encrypts files'], correctAnswerIndex: 0, explanation: 'Context managers implement the RAII / Context pattern, ensuring deterministic resource cleanup.' }]
    },
    {
      id: `${langCode}-int-oop`,
      title: '8. Object-Oriented Programming (OOP) Overview',
      summary: 'Mental model of OOP: entities, state, behaviors, and the four pillars.',
      durationMinutes: 30,
      conceptExplanation: 'OOP models software systems as collections of interacting objects that combine data (attributes) and behavior (methods).',
      beginnerExplanation: 'Think of blueprint vs house. A blueprint is the Class; every actual house built from that blueprint is an Object with its own paint color and occupants!',
      whyUseful: 'Reflects real-world business domains and allows modular large-scale software engineering.',
      syntax: 'class ClassName:\n    def __init__(self):\n        pass',
      codeSnippet: `class Student:\n    def __init__(self, name, career_goal):\n        self.name = name\n        self.career_goal = career_goal\n\n    def introduce(self):\n        return f"{self.name} is preparing for {self.career_goal}."\n\ns1 = Student("Jakeer", "Data Analyst")\nprint(s1.introduce())`,
      lineByLineExplanation: ['Line 1: Class blueprint', 'Line 2: Constructor initializing state', 'Line 5: Method operating on instance data', 'Line 8: Instantiating object and calling method'],
      exampleOutput: 'Jakeer is preparing for Data Analyst.',
      commonMistakes: ['Forgetting the `self` or `this` reference in instance methods'],
      bestPractices: ['Favor composition over inheritance where applicable'],
      practicalExample: 'Modeling banking accounts, ecommerce shopping carts, and game characters.',
      exercise: { title: 'Create Course Class', instructions: 'Create a Course class with title and hours.', starterCode: 'class Course:\n    # implement constructor', solutionCode: 'class Course:\n    def __init__(self, title, hours):\n        self.title = title\n        self.hours = hours', hints: ['Define __init__ with self'] },
      quiz: [{ question: 'What is an "object" in OOP terminology?', options: ['A concrete instance of a class occupying memory', 'A keyword in the compiler', 'A database query string', 'A visual CSS button'], correctAnswerIndex: 0, explanation: 'Objects are runtime instances instantiated from class blueprints with their own state.' }]
    },
    {
      id: `${langCode}-int-classes`,
      title: '9. Classes & Constructors',
      summary: 'Class definitions, instance variables vs class variables, constructor parameters, and factory methods.',
      durationMinutes: 35,
      conceptExplanation: 'Constructors initialize object state upon instantiation and allocate required memory.',
      beginnerExplanation: 'The constructor is the birth certificate of an object. The moment you create it, the constructor assigns its name, birthdate, and initial properties!',
      whyUseful: 'Ensures objects are created in valid, non-null initial states.',
      syntax: 'def __init__(self, ...): or public ClassName(...)',
      codeSnippet: `class Certificate:\n    platform = "Build Yourself" # class variable\n\n    def __init__(self, title, recipient):\n        self.title = title       # instance variable\n        self.recipient = recipient\n\nc = Certificate("Python Masterclass", "Jakeer")\nprint(f"Platform: {c.platform}, Title: {c.title}, Recipient: {c.recipient}")`,
      lineByLineExplanation: ['Line 2: Class-level variable shared by all instances', 'Line 4: Instance variables unique to each certificate'],
      exampleOutput: 'Platform: Build Yourself, Title: Python Masterclass, Recipient: Jakeer',
      commonMistakes: ['Accidentally mutating a shared mutable class variable instead of instance attribute'],
      bestPractices: ['Validate arguments inside constructor to maintain class invariants'],
      practicalExample: 'Initializing database connection pools with timeout credentials.',
      exercise: { title: 'Implement Counter in Class', instructions: 'Track total number of created instances.', starterCode: 'class User:\n    count = 0\n    # increment in constructor', solutionCode: 'class User:\n    count = 0\n    def __init__(self, name):\n        self.name = name\n        User.count += 1', hints: ['Increment User.count'] },
      quiz: [{ question: 'What is the key difference between class variables and instance variables?', options: ['Class variables are shared across all instances; instance variables are unique to each object', 'Class variables are faster', 'Instance variables cannot hold numbers', 'There is no difference'], correctAnswerIndex: 0, explanation: 'Class variables reside on the class object and are shared by all instances.' }]
    },
    {
      id: `${langCode}-int-objects`,
      title: '10. Objects & Instance Methods',
      summary: 'Calling methods, mutating state, method chaining, and garbage collection of dereferenced objects.',
      durationMinutes: 30,
      conceptExplanation: 'Instance methods define the actions and state transitions an individual object can perform.',
      beginnerExplanation: 'If an object is a Car, instance methods are `accelerate()`, `brake()`, and `turn()`. They change the car’s speed and direction!',
      whyUseful: 'Encapsulates data manipulation directly alongside the data itself.',
      syntax: 'object.method_name(args)',
      codeSnippet: `class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance\n\naccount = BankAccount(100)\naccount.deposit(50)\nprint(f"Current Balance: \${account.balance}")`,
      lineByLineExplanation: ['Line 4: Method increases internal balance and returns new amount', 'Line 9: Calling deposit modifies account state'],
      exampleOutput: 'Current Balance: $150',
      commonMistakes: ['Calling a method on a None / null reference (NullPointerException / AttributeError)'],
      bestPractices: ['Keep methods focused and return self for clean method chaining when appropriate'],
      practicalExample: 'Updating e-commerce order statuses (Created -> Paid -> Shipped).',
      exercise: { title: 'Add Withdraw Method', instructions: 'Implement withdraw with overdraft check.', starterCode: '# implement withdraw method', solutionCode: 'def withdraw(self, amount):\n    if amount <= self.balance:\n        self.balance -= amount\n        return True\n    return False', hints: ['Check balance first'] },
      quiz: [{ question: 'What happens to an object when no variables point to it anymore?', options: ['The garbage collector frees its memory during execution', 'It remains in memory forever', 'It causes an immediate compiler crash', 'It gets saved to disk'], correctAnswerIndex: 0, explanation: 'Garbage collectors periodically reclaim memory occupied by unreachable objects.' }]
    },
    {
      id: `${langCode}-int-inheritance`,
      title: '11. Inheritance & Method Overriding',
      summary: 'Base/parent classes, derived/child classes, super() calls, and the Liskov Substitution Principle.',
      durationMinutes: 35,
      conceptExplanation: 'Inheritance allows a subclass to inherit attributes and methods from a superclass, specializing or overriding behavior.',
      beginnerExplanation: 'Think of animals. A Dog is a Mammal. It inherits warm blood from Mammal, but specializes the `speak()` sound into "Woof"!',
      whyUseful: 'Eliminates repetitive code across related domain entities.',
      syntax: 'class Subclass(Superclass):\n    def __init__(self):\n        super().__init__()',
      codeSnippet: `class User:\n    def __init__(self, name):\n        self.name = name\n    def get_role(self):\n        return "Standard User"\n\nclass Admin(User):\n    def get_role(self):\n        return "System Administrator (Full Access)"\n\nadmin = Admin("Jakeer")\nprint(f"{admin.name}: {admin.get_role()}")`,
      lineByLineExplanation: ['Line 1: Superclass', 'Line 6: Admin inherits from User and overrides get_role()', 'Line 10: Calls overridden method'],
      exampleOutput: 'Jakeer: System Administrator (Full Access)',
      commonMistakes: ['Deep, fragile inheritance trees (prefer composition over inheritance)'],
      bestPractices: ['Always call `super().__init__()` to properly initialize base class state'],
      practicalExample: 'Role-based access control (Admin, Student, Instructor inheriting from BaseUser).',
      exercise: { title: 'Implement Subclass', instructions: 'Create a PremiumStudent inheriting from Student.', starterCode: 'class PremiumStudent(Student):\n    # add premium_badge property', solutionCode: 'class PremiumStudent(Student):\n    def __init__(self, name, goal):\n        super().__init__(name, goal)\n        self.premium_badge = True', hints: ['Call super().__init__'] },
      quiz: [{ question: 'What does "super()" refer to inside a subclass method?', options: ['The immediate parent / superclass', 'The root operating system', 'The global window object', 'The database connection'], correctAnswerIndex: 0, explanation: 'super() delegates method calls to the parent class implementation.' }]
    },
    {
      id: `${langCode}-int-polymorphism`,
      title: '12. Polymorphism & Duck Typing',
      summary: 'Dynamic dispatch, interface contracts, abstract base classes, and unified APIs.',
      durationMinutes: 35,
      conceptExplanation: 'Polymorphism allows different classes to be treated uniformly through a common interface, each executing their own specialized behavior.',
      beginnerExplanation: 'If you press the "Play" button on a remote control, a DVD player spins a disc, a streaming box streams video, and a tape deck turns a cassette. One button, many forms!',
      whyUseful: 'Allows writing open-ended code that works seamlessly with newly added classes without rewriting existing logic.',
      syntax: 'for item in items:\n    item.execute()',
      codeSnippet: `class EmailNotification:\n    def send(self, msg): return f"[Email Sent] {msg}"\n\nclass SMSNotification:\n    def send(self, msg): return f"[SMS Sent] {msg}"\n\ndef notify_student(service, message):\n    print(service.send(message))\n\nnotify_student(EmailNotification(), "Course certificate ready!")\nnotify_student(SMSNotification(), "Daily study streak reminder!")`,
      lineByLineExplanation: ['Line 7: Function accepts ANY object that implements the .send() contract', 'Line 10-11: Dispatches dynamically'],
      exampleOutput: '[Email Sent] Course certificate ready!\n[SMS Sent] Daily study streak reminder!',
      commonMistakes: ['Assuming types must share an explicit inheritance hierarchy (Duck Typing in Python/JS only requires matching methods)'],
      bestPractices: ['Program to interfaces, not concrete implementations'],
      practicalExample: 'Supporting multiple payment gateways (Stripe, PayPal, ApplePay) through a unified `process_payment()` interface.',
      exercise: { title: 'Polymorphic Renderer', instructions: 'Call render() on different shape objects in a loop.', starterCode: '# loop through shapes and render', solutionCode: 'shapes = [Circle(), Square()]\nfor s in shapes:\n    s.render()', hints: ['Call common method in loop'] },
      quiz: [{ question: 'What is the essence of "Duck Typing"?', options: ['"If it walks like a duck and quacks like a duck, it is a duck" (behavior over explicit type)', 'Code that only runs on birds', 'A type of compiler bug', 'A hardware accelerator'], correctAnswerIndex: 0, explanation: 'Duck typing evaluates suitability by presence of methods/properties rather than explicit inheritance.' }]
    },
    {
      id: `${langCode}-int-encapsulation`,
      title: '13. Encapsulation & Data Hiding',
      summary: 'Private and protected attributes, getters/setters, properties, and protecting class invariants.',
      durationMinutes: 30,
      conceptExplanation: 'Encapsulation bundles data with the methods that operate on it and restricts direct external access to internal state.',
      beginnerExplanation: 'Think of an ATM machine. You cannot reach inside the machine to grab cash directly; you must interact through the keypad and screen (public interface) so the machine validates your PIN and balance!',
      whyUseful: 'Prevents external code from corrupting internal state with invalid values.',
      syntax: '@property\ndef value(self):\n    return self._value',
      codeSnippet: `class StudentWallet:\n    def __init__(self, initial_xp):\n        self.__xp = initial_xp  # private attribute\n\n    def add_xp(self, amount):\n        if amount > 0:\n            self.__xp += amount\n\n    def get_xp(self):\n        return self.__xp\n\nw = StudentWallet(500)\nw.add_xp(100)\nprint(f"Verified XP: {w.get_xp()}")`,
      lineByLineExplanation: ['Line 2: __xp is mangled/private', 'Line 4: Validates positive amount before modifying', 'Line 8: Safe read accessor'],
      exampleOutput: 'Verified XP: 600',
      commonMistakes: ['Exposing mutable internal arrays or dicts directly from getter methods'],
      bestPractices: ['Use `@property` decorators for clean, idiomatic getter/setter syntax'],
      practicalExample: 'Securing credit card details, password hashes, and database connection strings.',
      exercise: { title: 'Implement Property Validator', instructions: 'Validate that student age must be >= 16.', starterCode: '# implement age property with validation', solutionCode: 'def set_age(self, age):\n    if age >= 16:\n        self._age = age\n    else:\n        raise ValueError("Age must be >= 16")', hints: ['Check condition before assignment'] },
      quiz: [{ question: 'Why is encapsulation crucial in large software systems?', options: ['It isolates internal changes so refactoring does not break external dependent code', 'It makes code run twice as fast', 'It makes classes globally accessible', 'It eliminates all testing'], correctAnswerIndex: 0, explanation: 'Encapsulation minimizes coupling and prevents state corruption across modules.' }]
    },
    {
      id: `${langCode}-int-abstraction`,
      title: '14. Abstraction & Interfaces',
      summary: 'Abstract base classes (ABCs), interface segregation, defining strict architectural contracts.',
      durationMinutes: 35,
      conceptExplanation: 'Abstraction hides internal implementation complexity and exposes only essential features through clear contracts.',
      beginnerExplanation: 'When you drive a car, you push the gas pedal to accelerate. You do not need to know the fuel injection timing or valve pressure; the pedal is the abstraction!',
      whyUseful: 'Enables high-level architecture design and allows swapping underlying implementations with zero client impact.',
      syntax: 'from abc import ABC, abstractmethod\nclass Database(ABC):\n    @abstractmethod\n    def connect(self): pass',
      codeSnippet: `from abc import ABC, abstractmethod\n\nclass CloudStorage(ABC):\n    @abstractmethod\n    def upload(self, file_name):\n        pass\n\nclass S3Storage(CloudStorage):\n    def upload(self, file_name):\n        return f"Uploaded {file_name} to AWS S3 bucket."\n\nstorage = S3Storage()\nprint(storage.upload("masters_sop.pdf"))`,
      lineByLineExplanation: ['Line 3: Abstract base class', 'Line 5: Abstract method enforcing implementation in subclasses', 'Line 8: Concrete subclass implementing contract'],
      exampleOutput: 'Uploaded masters_sop.pdf to AWS S3 bucket.',
      commonMistakes: ['Attempting to instantiate an abstract class directly'],
      bestPractices: ['Keep interfaces small and focused (Interface Segregation Principle)'],
      practicalExample: 'Abstracting database access so software works seamlessly on PostgreSQL, MySQL, and SQLite.',
      exercise: { title: 'Define Repository Contract', instructions: 'Define an abstract Repository with get_by_id and save.', starterCode: '# define abstract repository', solutionCode: 'class Repository(ABC):\n    @abstractmethod\n    def get_by_id(self, id): pass\n    @abstractmethod\n    def save(self, entity): pass', hints: ['Use @abstractmethod'] },
      quiz: [{ question: 'What happens if a subclass fails to implement an abstract method from its parent?', options: ['The subclass cannot be instantiated and raises TypeError', 'The method runs as an empty pass', 'The parent method runs instead', 'The computer reboots'], correctAnswerIndex: 0, explanation: 'Compilers and runtimes prevent instantiating subclasses that have incomplete abstract method implementations.' }]
    }
  ];

  // Advanced Topics (13 required by prompt)
  const advancedTopics: LanguageCurriculumTopic[] = [
    {
      id: `${langCode}-adv-dsa`,
      title: '1. Advanced Data Structures in ' + langName,
      summary: 'Binary search trees, heaps / priority queues, graphs, tries, and disjoint sets.',
      durationMinutes: 45,
      conceptExplanation: 'Advanced data structures optimize complex relationships and hierarchical queries for optimal time-space bounds.',
      beginnerExplanation: 'Just like choosing the right vehicle for a trip (a bicycle for the park, an airplane for cross-ocean), choosing the right data structure makes your algorithms fly!',
      whyUseful: 'Powers database indices, route planners (GPS), autocomplete engines, and network routers.',
      syntax: 'heapq.heappush(heap, item) | collections.deque',
      codeSnippet: `import heapq\n\ntasks = []\nheapq.heappush(tasks, (2, "Review German Vocabulary"))\nheapq.heappush(tasks, (1, "Complete Python Mock Test")) # Priority 1 is highest\n\npriority, task = heapq.heappop(tasks)\nprint(f"Top Priority Task: {task} (Level {priority})")`,
      lineByLineExplanation: ['Line 4-5: Inserts tasks with priority integers', 'Line 7: O(log N) extraction of lowest priority number'],
      exampleOutput: 'Top Priority Task: Complete Python Mock Test (Level 1)',
      commonMistakes: ['Using linear arrays for priority queues leading to O(N) removals'],
      bestPractices: ['Use built-in standard library heaps and balanced trees rather than re-inventing'],
      practicalExample: 'Scheduling emergency healthcare patient queues and CPU process scheduling.',
      exercise: { title: 'Implement Min-Heap Insert', instructions: 'Insert numbers and pop minimum.', starterCode: '# use heapq to find 3 smallest', solutionCode: 'import heapq\nnums = [45, 12, 89, 5, 23]\nprint(heapq.nsmallest(3, nums))', hints: ['Use heapq.nsmallest'] },
      quiz: [{ question: 'What is the time complexity of pushing into a binary min-heap with N elements?', options: ['O(log N)', 'O(1)', 'O(N)', 'O(N log N)'], correctAnswerIndex: 0, explanation: 'Percolating an element up the tree height takes at most O(log N) swaps.' }]
    },
    {
      id: `${langCode}-adv-algorithms`,
      title: '2. Algorithms & Complexity Analysis (Big-O)',
      summary: 'Sorting, binary search, two pointers, sliding window, divide and conquer, dynamic programming.',
      durationMinutes: 45,
      conceptExplanation: 'Algorithmic efficiency measures how execution time and auxiliary space scale as input size N grows towards infinity.',
      beginnerExplanation: 'If you search for a name in a phone book, turning one page at a time takes 1,000 steps. Opening in the middle and dividing by half takes only 10 steps! That is binary search.',
      whyUseful: 'Distinguishes systems that effortlessly handle millions of concurrent users from systems that crash under load.',
      syntax: 'O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N)',
      codeSnippet: `def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\nidx = binary_search([10, 20, 30, 40, 50], 40)\nprint(f"Found target at index: {idx}")`,
      lineByLineExplanation: ['Line 2: Initializes bounds', 'Line 4: Halves search window each iteration (O(log N))'],
      exampleOutput: 'Found target at index: 3',
      commonMistakes: ['Integer overflow when computing mid = (low + high) in languages like Java/C++'],
      bestPractices: ['Analyze both average and worst-case time and space complexities'],
      practicalExample: 'Indexing database queries and optimizing search engine page rank algorithms.',
      exercise: { title: 'Two Pointer Technique', instructions: 'Find if a pair with target sum exists in a sorted array.', starterCode: '# two pointer sum', solutionCode: 'def has_pair(arr, target):\n    l, r = 0, len(arr) - 1\n    while l < r:\n        s = arr[l] + arr[r]\n        if s == target: return True\n        elif s < target: l += 1\n        else: r -= 1\n    return False', hints: ['Move left if sum < target, right if sum > target'] },
      quiz: [{ question: 'What is the optimal average time complexity of MergeSort?', options: ['O(N log N)', 'O(N^2)', 'O(N)', 'O(log N)'], correctAnswerIndex: 0, explanation: 'MergeSort divides into halves (log N) and merges linearly (N) for guaranteed O(N log N).' }]
    },
    {
      id: `${langCode}-adv-generics`,
      title: '3. Generics & Type Parameterization',
      summary: 'Type safety without code duplication, type bounds, variance (covariance, contravariance).',
      durationMinutes: 35,
      conceptExplanation: 'Generics allow classes and functions to operate on parameterized types while preserving compile-time type safety.',
      beginnerExplanation: 'Think of shipping boxes with special slots. A generic box can hold books, toys, or shoes safely without needing to manufacture a separate box design for every item!',
      whyUseful: 'Prevents dangerous runtime type casting and detects type errors at compilation time.',
      syntax: 'TypeVar("T") or <T> or any/interface{}',
      codeSnippet: `from typing import TypeVar, List\n\nT = TypeVar('T')\n\ndef get_first_element(items: List[T]) -> T:\n    return items[0] if items else None\n\nfirst_num = get_first_element([10, 20, 30])\nfirst_word = get_first_element(["Alpha", "Beta"])\nprint(f"Num: {first_num}, Word: {first_word}")`,
      lineByLineExplanation: ['Line 3: Defines generic type variable T', 'Line 5: Function returns element of type T matching the container'],
      exampleOutput: 'Num: 10, Word: Alpha',
      commonMistakes: ['Type erasure confusion in Java or over-constraining generic bounds'],
      bestPractices: ['Use generics for reusable data structures like stacks, trees, and caches'],
      practicalExample: 'Building generic API response wrappers `{ data: T, status: number, error: string }`.',
      exercise: { title: 'Generic Stack Class', instructions: 'Create a generic Stack with push and pop.', starterCode: '# generic stack', solutionCode: 'class Stack(Generic[T]):\n    def __init__(self): self.items: List[T] = []\n    def push(self, item: T): self.items.append(item)\n    def pop(self) -> T: return self.items.pop()', hints: ['Use Generic[T]'] },
      quiz: [{ question: 'What is the primary benefit of generics in statically typed languages?', options: ['Compile-time type checking with zero runtime casting overhead', 'Faster arithmetic multiplication', 'Reduced hard drive usage', 'Automatic database creation'], correctAnswerIndex: 0, explanation: 'Generics enforce compile-time type safety while eliminating casting bugs.' }]
    },
    {
      id: `${langCode}-adv-fp`,
      title: '4. Functional Programming & Lambdas',
      summary: 'Higher-order functions (map, filter, reduce), closures, currying, and pure functions.',
      durationMinutes: 40,
      conceptExplanation: 'Functional programming treats computation as the evaluation of mathematical functions, avoiding mutable state and side effects.',
      beginnerExplanation: 'Instead of instructing a robot step-by-step how to change numbers in a notebook, you set up an assembly line where data flows smoothly through filters and transformers!',
      whyUseful: 'Immense clarity, trivial parallelization, and zero race conditions on immutable state.',
      syntax: 'lambda x: x * 2 | map(func, iterable)',
      codeSnippet: `numbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nsquared = list(map(lambda x: x ** 2, evens))\nprint(f"Even numbers squared: {squared}")`,
      lineByLineExplanation: ['Line 2: filter applies lambda predicate', 'Line 3: map transforms filtered elements cleanly'],
      exampleOutput: 'Even numbers squared: [4, 16, 36]',
      commonMistakes: ['Writing overly complex unreadable one-line lambdas (prefer named helper functions)'],
      bestPractices: ['Embrace immutability and pass functions as first-class citizens'],
      practicalExample: 'Stream processing event streams in Apache Spark or Kafka.',
      exercise: { title: 'Calculate Total Sales with Reduce', instructions: 'Multiply and sum prices using functional reduce.', starterCode: 'from functools import reduce\nprices = [10, 25, 40]\n# calculate sum', solutionCode: 'from functools import reduce\nprices = [10, 25, 40]\ntotal = reduce(lambda acc, p: acc + p, prices, 0)\nprint("Total:", total)', hints: ['Use reduce with initial accumulator 0'] },
      quiz: [{ question: 'What characterizes a higher-order function?', options: ['A function that takes one or more functions as arguments or returns a function', 'A function with more than 100 lines', 'A function that runs at elevated CPU priority', 'A function with no arguments'], correctAnswerIndex: 0, explanation: 'Higher-order functions accept functions as parameters or return new functions.' }]
    },
    {
      id: `${langCode}-adv-concurrency`,
      title: '5. Concurrency Concepts & Event Loop',
      summary: 'Concurrency vs parallelism, cooperative multitasking, event loops, and green threads.',
      durationMinutes: 40,
      conceptExplanation: 'Concurrency is the composition of independently executing computations. Parallelism is the simultaneous execution of multiple computations on multiple CPU cores.',
      beginnerExplanation: 'Concurrency is a juggling chef who switches between stirring soup, slicing onions, and checking the oven. Parallelism is having three chefs in the kitchen doing all three tasks at the exact same second!',
      whyUseful: 'Enables web servers to handle tens of thousands of simultaneous network connections without freezing.',
      syntax: 'async def / await / Task / Promise',
      codeSnippet: `# Concurrency Model Simulation\nprint("Task 1 started")\nprint("Task 2 started while Task 1 waits on I/O")\nprint("Both tasks completed efficiently")`,
      lineByLineExplanation: ['Line 1: Demonstrates non-blocking scheduling of tasks during I/O delays'],
      exampleOutput: 'Task 1 started\nTask 2 started while Task 1 waits on I/O\nBoth tasks completed efficiently',
      commonMistakes: ['Confusing concurrency (dealing with a lot of things at once) with parallelism (doing a lot of things at once)'],
      bestPractices: ['Use non-blocking I/O for network-bound tasks and multiprocessing for CPU-bound tasks'],
      practicalExample: 'Handling live chat messages across thousands of active browser WebSockets.',
      exercise: { title: 'Identify Concurrency Model', instructions: 'Distinguish I/O bound vs CPU bound workloads.', starterCode: '# write short classification', solutionCode: 'io_bound = ["fetching API", "reading database"]\ncpu_bound = ["video encoding", "training neural network"]', hints: ['I/O bound involves waiting on disks or networks'] },
      quiz: [{ question: 'What is the primary bottleneck in typical web servers and API microservices?', options: ['I/O waiting on databases and external network calls', 'CPU math speed', 'Monitor refresh rate', 'Keyboard response'], correctAnswerIndex: 0, explanation: 'Most web APIs spend >90% of latency waiting on network I/O and databases rather than CPU calculations.' }]
    },
    {
      id: `${langCode}-adv-threading`,
      title: '6. Multithreading, Locks & Race Conditions',
      summary: 'Threads, mutexes, locks, semaphores, deadlocks, and the Global Interpreter Lock (GIL).',
      durationMinutes: 45,
      conceptExplanation: 'Threads share process address space. Concurrent access to mutable shared state requires synchronization locks to prevent data races.',
      beginnerExplanation: 'If two people try to update the exact same bank balance at the exact same millisecond, money can disappear unless they take turns using a lock key!',
      whyUseful: 'Parallelizing CPU workloads across multiple hardware cores safely.',
      syntax: 'with lock:\n    shared_resource += 1',
      codeSnippet: `import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    with lock:\n        counter += 1\n\nthreads = [threading.Thread(target=increment) for _ in range(5)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint(f"Synchronized Counter: {counter}")`,
      lineByLineExplanation: ['Line 4: Mutex lock', 'Line 8: Context manager acquires and releases lock automatically', 'Line 11-12: Spawns and joins threads'],
      exampleOutput: 'Synchronized Counter: 5',
      commonMistakes: ['Deadlocks caused by acquiring multiple locks in inconsistent order across threads'],
      bestPractices: ['Minimize shared mutable state; prefer message passing (channels) or immutable data'],
      practicalExample: 'Updating ticket inventory in live concert booking systems under high traffic.',
      exercise: { title: 'Protect Critical Section', instructions: 'Use a mutex lock around shared resource update.', starterCode: '# acquire and release lock', solutionCode: 'lock.acquire()\ntry:\n    shared_balance += amount\nfinally:\n    lock.release()', hints: ['Always release lock in finally block'] },
      quiz: [{ question: 'What is a "race condition"?', options: ['A bug where output depends on non-deterministic timing of thread execution', 'When code runs faster than the hardware clock', 'A racing simulation game', 'A competition between two developers'], correctAnswerIndex: 0, explanation: 'Race conditions occur when concurrent unsynchronized reads/writes to shared state yield inconsistent results.' }]
    },
    {
      id: `${langCode}-adv-async`,
      title: '7. Asynchronous Programming (async / await)',
      summary: 'Coroutines, event loops, promises, futures, asyncio, and asynchronous context managers.',
      durationMinutes: 45,
      conceptExplanation: 'Async/await syntax writes non-blocking concurrent code that reads sequentially like synchronous code.',
      beginnerExplanation: 'Like placing an order at a cafe. They give you a buzzer (Promise/Future). You sit down and read a book (do other work). When the coffee is ready, the buzzer sounds and you pick it up!',
      whyUseful: 'Enables single-threaded runtimes (Node.js, Python asyncio) to serve 100k requests/sec.',
      syntax: 'async def fetch():\n    return await http_call()',
      codeSnippet: `import asyncio\n\nasync def fetch_user_data(user_id):\n    await asyncio.sleep(0.05) # non-blocking sleep\n    return {"id": user_id, "name": "Jakeer"}\n\nasync def main():\n    user = await fetch_user_data(101)\n    print(f"Fetched User: {user['name']}")\n\nasyncio.run(main())`,
      lineByLineExplanation: ['Line 3: Coroutine definition', 'Line 4: Yields execution back to event loop while sleeping', 'Line 7: Awaits result'],
      exampleOutput: 'Fetched User: Jakeer',
      commonMistakes: ['Calling blocking synchronous functions (like time.sleep) inside async event loops, freezing all tasks'],
      bestPractices: ['Never block the event loop; use async-compatible libraries (httpx, aiofiles, etc.)'],
      practicalExample: 'Fetching product data, reviews, and user preferences simultaneously using `asyncio.gather()`.',
      exercise: { title: 'Gather Concurrent Tasks', instructions: 'Fetch two resources concurrently using asyncio.gather.', starterCode: '# gather task1 and task2', solutionCode: 'async def main():\n    res1, res2 = await asyncio.gather(fetch_data(1), fetch_data(2))\n    print(res1, res2)', hints: ['Use asyncio.gather'] },
      quiz: [{ question: 'What does the "await" keyword do inside an async function?', options: ['Suspends execution of the coroutine until the awaited operation resolves, freeing the thread to run other tasks', 'Freezes the entire operating system', 'Creates a new operating system process', 'Deletes the variable'], correctAnswerIndex: 0, explanation: 'await yields control to the event loop until the promise/future yields a value.' }]
    },
    {
      id: `${langCode}-adv-memory`,
      title: '8. Memory Management, Stack vs Heap & GC',
      summary: 'Stack frames, dynamic heap allocation, reference counting, generational garbage collection, memory leaks.',
      durationMinutes: 40,
      conceptExplanation: 'The Stack stores primitive local variables with automatic fast cleanup upon function exit. The Heap stores dynamic objects requiring garbage collection.',
      beginnerExplanation: 'The Stack is a stack of trays in a cafeteria—clean, fast, and organized. The Heap is a large storage warehouse where bulky boxes are kept and checked by a cleaning crew (garbage collector)!',
      whyUseful: 'Diagnosing memory leaks, optimizing allocations, and avoiding out-of-memory (OOM) crashes.',
      syntax: 'sys.getrefcount(obj) or memory_profiler',
      codeSnippet: `import sys\n\nx = [1, 2, 3, 4] # allocated on heap\nref_count = sys.getrefcount(x) - 1\nprint(f"Memory reference count for list: {ref_count}")`,
      lineByLineExplanation: ['Line 3: Allocates list on heap; x reference placed on call stack', 'Line 4: Queries CPython reference count'],
      exampleOutput: 'Memory reference count for list: 1',
      commonMistakes: ['Holding accidental references in global caches or circular references preventing GC reclamation'],
      bestPractices: ['Use weak references (`weakref`) for caches where objects should be allowed to be collected'],
      practicalExample: 'Profiling long-running web servers to eliminate creeping memory leaks.',
      exercise: { title: 'Profile Memory Allocation', instructions: 'Differentiate stack and heap storage.', starterCode: '# stack vs heap items', solutionCode: 'stack_item = 42 # primitive scalar\nheap_item = {"name": "large_dataset"} # dynamic heap reference', hints: ['Scalars reside in stack frames'] },
      quiz: [{ question: 'What type of memory allocation occurs on the Call Stack?', options: ['LIFO allocation of local variables and function call frames', 'Dynamic arbitrary allocations', 'Hard drive virtual memory swaps', 'GPU vram allocation'], correctAnswerIndex: 0, explanation: 'The stack operates in Last-In First-Out order as functions are pushed and popped.' }]
    },
    {
      id: `${langCode}-adv-patterns`,
      title: '9. Design Patterns (Creational, Structural, Behavioral)',
      summary: 'Singleton, Factory, Builder, Observer, Strategy, Decorator, Adapter.',
      durationMinutes: 45,
      conceptExplanation: 'Design patterns are battle-tested architectural templates for solving recurring software design problems.',
      beginnerExplanation: 'Like architectural blueprints for buildings. You do not reinvent how a door hinge or elevator shaft works; you use proven standard patterns!',
      whyUseful: 'Provides a common vocabulary among senior software engineers and produces resilient architectures.',
      syntax: 'class Singleton / class Factory',
      codeSnippet: `class DatabaseConnection:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n            cls._instance.connected = True\n        return cls._instance\n\ndb1 = DatabaseConnection()\ndb2 = DatabaseConnection()\nprint(f"Are instances identical? {db1 is db2}")`,
      lineByLineExplanation: ['Line 2: Static cached reference', 'Line 3: Overriding __new__ guarantees only one instance is ever created'],
      exampleOutput: 'Are instances identical? True',
      commonMistakes: ['Over-engineering simple code with unnecessary complex patterns (premature abstraction)'],
      bestPractices: ['Use patterns only when the problem naturally demands their trade-offs'],
      practicalExample: 'Implementing notification observers that trigger emails, SMS, and logs whenever an order is placed.',
      exercise: { title: 'Implement Factory Pattern', instructions: 'Create a NotificationFactory returning Email or SMS.', starterCode: '# factory implementation', solutionCode: 'class NotificationFactory:\n    @staticmethod\n    def create(type_name):\n        if type_name == "email": return EmailNotification()\n        return SMSNotification()', hints: ['Use static creator method'] },
      quiz: [{ question: 'Which design pattern restricts a class to a single global instance?', options: ['Singleton Pattern', 'Factory Pattern', 'Decorator Pattern', 'Adapter Pattern'], correctAnswerIndex: 0, explanation: 'The Singleton pattern guarantees that a class has only one instance and provides global access.' }]
    },
    {
      id: `${langCode}-adv-testing`,
      title: '10. Automated Testing, TDD & Mocking',
      summary: 'Unit tests, integration tests, end-to-end tests, pytest/jest/junit, mocking external APIs, test coverage.',
      durationMinutes: 40,
      conceptExplanation: 'Automated testing writes code that verifies your application code behaves correctly across edge cases and prevents regressions.',
      beginnerExplanation: 'Like crash-testing cars before selling them to customers. Automated tests crash the car in safe test tracks so you know it protects drivers in real life!',
      whyUseful: 'Enables bold refactoring and continuous deployment (CI/CD) with complete confidence.',
      syntax: 'assert actual == expected | unittest.TestCase',
      codeSnippet: `def add(a, b):\n    return a + b\n\ndef test_add_positive_numbers():\n    assert add(10, 5) == 15, "Expected 10 + 5 = 15"\n    assert add(-1, 1) == 0, "Expected -1 + 1 = 0"\n    print("[TEST PASSED] All assertions verified.")\n\ntest_add_positive_numbers()`,
      lineByLineExplanation: ['Line 4: Test function with self-verifying assertions', 'Line 5-6: Asserts boundary scenarios'],
      exampleOutput: '[TEST PASSED] All assertions verified.',
      commonMistakes: ['Testing implementation details instead of observable behavior', 'Writing tests with external network dependencies'],
      bestPractices: ['Aim for meaningful branch coverage and follow the Arrange-Act-Assert (AAA) pattern'],
      practicalExample: 'Verifying payment calculation logic with 100% test coverage before deploying updates.',
      exercise: { title: 'Write Unit Test with AAA Pattern', instructions: 'Arrange test data, Act on function, Assert output.', starterCode: '# write AAA test', solutionCode: 'def test_cart_total():\n    # Arrange\n    cart = [10, 20]\n    # Act\n    total = sum(cart)\n    # Assert\n    assert total == 30', hints: ['Follow Arrange, Act, Assert'] },
      quiz: [{ question: 'What is the core cycle of Test-Driven Development (TDD)?', options: ['Red (Write failing test) -> Green (Make it pass) -> Refactor (Clean code)', 'Code -> Ship -> Hope -> Debug', 'Write documentation -> Write UI -> Ship', 'Compile -> Test -> Delete'], correctAnswerIndex: 0, explanation: 'TDD follows the Red-Green-Refactor discipline.' }]
    },
    {
      id: `${langCode}-adv-perf`,
      title: '11. Performance Profiling & Optimization',
      summary: 'CPU profilers, flame graphs, caching (memoization/LRU), avoiding premature optimization.',
      durationMinutes: 40,
      conceptExplanation: 'Performance profiling identifies real execution bottlenecks through measurement rather than intuition.',
      beginnerExplanation: 'If your computer is running slow, checking the Task Manager shows which app is hogging 99% of CPU. Profiling does the exact same for your code!',
      whyUseful: 'Drastically reduces server cloud computing costs and delivers sub-100ms user experiences.',
      syntax: '@lru_cache(maxsize=128) | cProfile',
      codeSnippet: `from functools import lru_cache\nimport time\n\n@lru_cache(maxsize=100)\ndef expensive_computation(n):\n    time.sleep(0.01) # simulate heavy work\n    return n * n\n\n# First run: computes\nexpensive_computation(5)\n# Second run: instant cache hit!\nstart = time.time()\nres = expensive_computation(5)\nprint(f"Cached computation returned {res} instantly in {time.time() - start:.6f}s")`,
      lineByLineExplanation: ['Line 4: LRU cache decorator memoizes outputs', 'Line 13: Instant retrieval from memory hash table'],
      exampleOutput: 'Cached computation returned 25 instantly in 0.000003s',
      commonMistakes: ['Premature optimization that complicates code without measuring impact', 'Caching unhashable inputs'],
      bestPractices: ['"Measure, don\'t guess." Always benchmark with profilers before and after refactoring'],
      practicalExample: 'Caching repeated database queries to handle million-user flash sales.',
      exercise: { title: 'Memoize Fibonacci', instructions: 'Use lru_cache to optimize recursive Fibonacci from O(2^N) to O(N).', starterCode: '# memoize fibonacci', solutionCode: '@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2: return n\n    return fib(n - 1) + fib(n - 2)', hints: ['Add @lru_cache'] },
      quiz: [{ question: 'What did Donald Knuth famously state regarding optimization?', options: ['"Premature optimization is the root of all evil (or at least most of it) in programming."', '"Write assembly code for everything."', '"Never optimize anything ever."', '"Memory is free."'], correctAnswerIndex: 0, explanation: 'Knuth warned against optimizing before profiling and proving where real bottlenecks exist.' }]
    },
    {
      id: `${langCode}-adv-arch`,
      title: '12. Real-World Architecture & Clean Code',
      summary: 'Clean Architecture, Hexagonal / Ports & Adapters, SOLID principles, 12-factor apps.',
      durationMinutes: 45,
      conceptExplanation: 'Clean Architecture separates business domain logic from databases, UI frameworks, and external dependencies.',
      beginnerExplanation: 'Think of a smartphone. You can plug in headphones with a wire, connect via Bluetooth, or use built-in speakers. The music app does not care which speaker you use because the interface is clean!',
      whyUseful: 'Enables software systems to last decades and adapt to changing technology stacks without total rewrites.',
      syntax: 'Entities -> Use Cases -> Interface Adapters -> Frameworks & Drivers',
      codeSnippet: `# Domain Entity independent of web frameworks or DBs\nclass StudentProfile:\n    def __init__(self, id, name, target_role):\n        self.id = id\n        self.name = name\n        self.target_role = target_role\n\n    def is_job_ready(self, completed_lessons):\n        return completed_lessons >= 15\n\nstudent = StudentProfile(1, "Jakeer", "Data Analyst")\nprint(f"Job readiness status: {student.is_job_ready(16)}")`,
      lineByLineExplanation: ['Line 2: Pure domain business logic with zero framework imports', 'Line 7: Encapsulates pure business rules'],
      exampleOutput: 'Job readiness status: True',
      commonMistakes: ['Coupling business logic directly inside HTTP controller routes or database SQL strings'],
      bestPractices: ['Enforce unidirectional dependency rule: source code dependencies point inward toward business entities'],
      practicalExample: 'Building banking platforms where regulatory transaction rules exist independently of whether requests arrive from mobile apps, web browsers, or partner APIs.',
      exercise: { title: 'Implement Domain Service', instructions: 'Separate business rule from persistence.', starterCode: '# clean architecture separation', solutionCode: 'class EnrollmentService:\n    def __init__(self, repo):\n        self.repo = repo\n    def enroll(self, student_id, course_id):\n        # business check\n        self.repo.save(student_id, course_id)', hints: ['Inject repository dependency'] },
      quiz: [{ question: 'What does the "D" in SOLID principles stand for?', options: ['Dependency Inversion Principle (depend on abstractions, not concretions)', 'Dynamic Polymorphism', 'Data Encapsulation', 'Double Dispatch'], correctAnswerIndex: 0, explanation: 'The Dependency Inversion Principle mandates that high-level modules should not depend on low-level modules; both should depend on abstractions.' }]
    },
    {
      id: `${langCode}-adv-projects-summary`,
      title: '13. Capstone Architecture & Deployment',
      summary: 'Synthesizing all concepts into production-ready software with containerization, CI/CD, and monitoring.',
      durationMinutes: 45,
      conceptExplanation: 'Production software requires robust error logging, metrics instrumentation, containerization, and zero-downtime deployment pipelines.',
      beginnerExplanation: 'Writing code is only half the journey; putting the code on the internet so millions of students can access it 24/7 without crashing is the true mark of a senior engineer!',
      whyUseful: 'Differentiates academic tutorial coders from production-ready industry software engineers.',
      syntax: 'docker build -> test -> deploy -> monitor',
      codeSnippet: `# Production Deployment Verification\nservice_health = {"status": "HEALTHY", "latency_ms": 14, "uptime": "99.98%"}\nprint(f"Build Yourself Microservice Status: {service_health['status']} (Latency: {service_health['latency_ms']}ms)")`,
      lineByLineExplanation: ['Line 2: Health check endpoint response', 'Line 3: Verified deployment health'],
      exampleOutput: 'Build Yourself Microservice Status: HEALTHY (Latency: 14ms)',
      commonMistakes: ['Deploying without health checks, automated rollbacks, or structured logging'],
      bestPractices: ['Automate everything through CI/CD with immutable container images and automated canary deployments'],
      practicalExample: 'Deploying Build Yourself platform across global cloud clusters.',
      exercise: { title: 'Define Health Check Endpoint', instructions: 'Return JSON dictionary with status UP and timestamp.', starterCode: '# health check route', solutionCode: 'def health_check():\n    return {"status": "UP", "timestamp": time.time()}', hints: ['Return status UP'] },
      quiz: [{ question: 'What is a "canary deployment"?', options: ['Rolling out new code to a small percentage (e.g. 5%) of users first to verify stability before full rollout', 'Testing code in a coal mine', 'Releasing code only at midnight', 'Deleting previous code before testing'], correctAnswerIndex: 0, explanation: 'Canary deployments safely validate releases with real traffic on a limited cohort.' }]
    }
  ];

  return { beginnerTopics, intermediateTopics, advancedTopics };
}

// 17 Programming Languages catalog
export const programmingLanguages: ProgrammingLanguageInfo[] = [
  {
    id: 'lang-py',
    name: 'Python',
    slug: 'python',
    icon: 'Terminal',
    tagline: 'Simple, powerful, and the global leader in AI, Data Science, and Backend automation.',
    description: 'Python is a high-level, general-purpose language with elegant syntax, dynamic typing, and massive ecosystems for Machine Learning, Data Analytics, and Web Services.',
    paradigm: ['Multi-paradigm', 'Object-Oriented', 'Functional', 'Procedural'],
    yearCreated: 1991,
    primaryUses: ['AI & Machine Learning', 'Data Analysis & Wrangling', 'Backend Web Development (FastAPI, Django)', 'Scripting & Automation'],
    ...getCurriculumForLanguage('Python', 'py'),
    projects: getProjectsForLanguage('Python', 'py')
  },
  {
    id: 'lang-java',
    name: 'Java',
    slug: 'java',
    icon: 'Coffee',
    tagline: 'Enterprise powerhouse: Write Once, Run Anywhere with robust typing and JVM scalability.',
    description: 'Java powers high-throughput enterprise backends, Android mobile applications, big data processing engines (Hadoop, Spark), and financial banking systems.',
    paradigm: ['Object-Oriented', 'Structured', 'Imperative', 'Generic'],
    yearCreated: 1995,
    primaryUses: ['Enterprise Backend Microservices (Spring Boot)', 'Android App Development', 'Financial & Banking Systems', 'Big Data Engineering'],
    ...getCurriculumForLanguage('Java', 'java'),
    projects: getProjectsForLanguage('Java', 'java')
  },
  {
    id: 'lang-js',
    name: 'JavaScript',
    slug: 'javascript',
    icon: 'Code2',
    tagline: 'The universal language of the web, powering frontend UI and modern backend runtimes.',
    description: 'JavaScript runs in every web browser and Node.js server worldwide, driving modern interactive web experiences, full-stack applications, and cross-platform desktop/mobile apps.',
    paradigm: ['Event-driven', 'Functional', 'Prototype-based', 'Imperative'],
    yearCreated: 1995,
    primaryUses: ['Frontend Web Development (React, Vue, Svelte)', 'Full-Stack Applications (Node.js, Express)', 'Real-time WebSockets & Games', 'Cross-Platform Apps (Electron, React Native)'],
    ...getCurriculumForLanguage('JavaScript', 'js'),
    projects: getProjectsForLanguage('JavaScript', 'js')
  },
  {
    id: 'lang-c',
    name: 'C',
    slug: 'c',
    icon: 'Cpu',
    tagline: 'The foundational bedrock of modern computing, operating systems, and embedded devices.',
    description: 'C provides direct memory manipulation through pointers, extreme execution speed, and is the mother of all modern programming languages.',
    paradigm: ['Imperative', 'Procedural', 'Structured'],
    yearCreated: 1972,
    primaryUses: ['Operating Systems (Linux, macOS kernel, Windows)', 'Embedded Systems & IoT', 'Database Engines', 'Game Engines & Device Drivers'],
    ...getCurriculumForLanguage('C', 'c'),
    projects: getProjectsForLanguage('C', 'c')
  },
  {
    id: 'lang-cpp',
    name: 'C++',
    slug: 'cpp',
    icon: 'Layers',
    tagline: 'Zero-overhead abstractions, extreme performance, game engines, and low-latency trading.',
    description: 'C++ combines C’s low-level hardware control with powerful OOP, generic templates, and RAII memory safety patterns.',
    paradigm: ['Multi-paradigm', 'Object-Oriented', 'Generic', 'Functional'],
    yearCreated: 1985,
    primaryUses: ['AAA Game Engines (Unreal Engine)', 'High-Frequency Trading (HFT)', 'Autonomous Vehicles & Robotics', 'Desktop Software (Photoshop, CAD)'],
    ...getCurriculumForLanguage('C++', 'cpp'),
    projects: getProjectsForLanguage('C++', 'cpp')
  },
  {
    id: 'lang-csharp',
    name: 'C#',
    slug: 'csharp',
    icon: 'Hash',
    tagline: 'Modern, elegant, and versatile language powering .NET, Unity games, and cloud microservices.',
    description: 'Developed by Microsoft, C# is an expressive, strongly typed language designed for productivity, cross-platform cloud services, and 3D game development.',
    paradigm: ['Multi-paradigm', 'Object-Oriented', 'Component-oriented', 'Functional'],
    yearCreated: 2000,
    primaryUses: ['Game Development (Unity Engine)', 'Enterprise Cloud Backend (.NET Core)', 'Windows Desktop & Mobile Apps', 'Azure Cloud Microservices'],
    ...getCurriculumForLanguage('C#', 'cs'),
    projects: getProjectsForLanguage('C#', 'cs')
  },
  {
    id: 'lang-go',
    name: 'Go',
    slug: 'go',
    icon: 'Zap',
    tagline: 'Blazing-fast compilation, native concurrency with goroutines, and the language of cloud infrastructure.',
    description: 'Created by Google, Go is designed for simplicity, lightning-fast compilation, and effortless concurrent network services.',
    paradigm: ['Concurrent', 'Imperative', 'Procedural'],
    yearCreated: 2009,
    primaryUses: ['Cloud Infrastructure (Docker, Kubernetes, Terraform)', 'High-Scale Backend Microservices', 'Network Programming & Proxies', 'DevOps Tooling'],
    ...getCurriculumForLanguage('Go', 'go'),
    projects: getProjectsForLanguage('Go', 'go')
  },
  {
    id: 'lang-rust',
    name: 'Rust',
    slug: 'rust',
    icon: 'Shield',
    tagline: 'Memory safety without garbage collection, maximum performance, and modern reliability.',
    description: 'Rust guarantees memory safety and thread safety without a garbage collector through its innovative ownership and borrow checker system.',
    paradigm: ['Multi-paradigm', 'Concurrent', 'Functional', 'Generic'],
    yearCreated: 2010,
    primaryUses: ['Systems Programming & Linux Kernel', 'High-Performance WebAssembly (Wasm)', 'Cryptographic & Blockchain Systems', 'Cloud & Networking Infrastructure'],
    ...getCurriculumForLanguage('Rust', 'rust'),
    projects: getProjectsForLanguage('Rust', 'rust')
  },
  {
    id: 'lang-kotlin',
    name: 'Kotlin',
    slug: 'kotlin',
    icon: 'Smartphone',
    tagline: 'Google’s preferred language for Android development, concise, safe, and 100% Java-interoperable.',
    description: 'Kotlin provides expressive syntax, null safety, coroutines, and seamless interoperability with the entire Java Virtual Machine ecosystem.',
    paradigm: ['Multi-paradigm', 'Object-Oriented', 'Functional'],
    yearCreated: 2011,
    primaryUses: ['Modern Android App Development', 'Server-Side Web Applications (Ktor, Spring)', 'Multiplatform Mobile (KMP)', 'Desktop & Data Science'],
    ...getCurriculumForLanguage('Kotlin', 'kt'),
    projects: getProjectsForLanguage('Kotlin', 'kt')
  },
  {
    id: 'lang-swift',
    name: 'Swift',
    slug: 'swift',
    icon: 'Compass',
    tagline: 'Apple’s powerful, intuitive language for iOS, iPadOS, macOS, watchOS, and visionOS.',
    description: 'Swift delivers blazing speed, type safety, and modern syntax paired with SwiftUI for building world-class Apple ecosystem applications.',
    paradigm: ['Multi-paradigm', 'Protocol-oriented', 'Object-Oriented', 'Functional'],
    yearCreated: 2014,
    primaryUses: ['iOS & iPadOS Mobile Apps', 'macOS Desktop Applications', 'watchOS & visionOS Spatial Computing', 'Server-Side Swift'],
    ...getCurriculumForLanguage('Swift', 'swift'),
    projects: getProjectsForLanguage('Swift', 'swift')
  },
  {
    id: 'lang-php',
    name: 'PHP',
    slug: 'php',
    icon: 'Globe',
    tagline: 'Powering over 75% of the world’s web servers, dynamic e-commerce, and modern Laravel frameworks.',
    description: 'PHP 8+ delivers JIT compilation, strict typing, and powers major web platforms like WordPress, Wikipedia, and Laravel enterprise apps.',
    paradigm: ['Imperative', 'Object-Oriented', 'Procedural'],
    yearCreated: 1995,
    primaryUses: ['Backend Web Development (Laravel, Symfony)', 'Content Management (WordPress, Drupal)', 'E-Commerce (WooCommerce, Magento)', 'RESTful APIs'],
    ...getCurriculumForLanguage('PHP', 'php'),
    projects: getProjectsForLanguage('PHP', 'php')
  },
  {
    id: 'lang-ruby',
    name: 'Ruby',
    slug: 'ruby',
    icon: 'Sparkles',
    tagline: 'Designed for developer happiness with pure object-oriented beauty and rapid startup development.',
    description: 'Ruby and Ruby on Rails revolutionized web development with convention over configuration, powering GitHub, Shopify, Airbnb, and Stripe.',
    paradigm: ['Object-Oriented', 'Imperative', 'Functional', 'Reflective'],
    yearCreated: 1995,
    primaryUses: ['Rapid Web Startup MVPs (Ruby on Rails)', 'DevOps Automation (Chef, Puppet)', 'E-Commerce Engineering (Shopify)', 'Data Extraction & Web Crawling'],
    ...getCurriculumForLanguage('Ruby', 'rb'),
    projects: getProjectsForLanguage('Ruby', 'rb')
  },
  {
    id: 'lang-dart',
    name: 'Dart',
    slug: 'dart',
    icon: 'Target',
    tagline: 'Client-optimized language for fast apps on any platform, powering Google Flutter.',
    description: 'Dart offers sub-second hot reload, Ahead-Of-Time (AOT) machine compilation, and powers beautiful cross-platform apps built with Google Flutter.',
    paradigm: ['Object-Oriented', 'Class-based', 'Functional'],
    yearCreated: 2011,
    primaryUses: ['Cross-Platform Mobile Apps (Flutter)', 'Responsive Web UI', 'Desktop Apps (macOS, Windows, Linux)', 'Embedded Touchscreens'],
    ...getCurriculumForLanguage('Dart', 'dart'),
    projects: getProjectsForLanguage('Dart', 'dart')
  },
  {
    id: 'lang-r',
    name: 'R',
    slug: 'r',
    icon: 'BarChart2',
    tagline: 'The gold standard for statistical computing, clinical research, bioinformatics, and data graphics.',
    description: 'R provides world-renowned statistical packages (ggplot2, dplyr, tidyverse) for exploratory data analysis, academic research, and hypothesis testing.',
    paradigm: ['Multi-paradigm', 'Array', 'Object-Oriented', 'Functional'],
    yearCreated: 1993,
    primaryUses: ['Statistical Modeling & Inference', 'Bioinformatics & Clinical Trials', 'Data Visualization (ggplot2, Shiny)', 'Academic Research & Econometrics'],
    ...getCurriculumForLanguage('R', 'r'),
    projects: getProjectsForLanguage('R', 'r')
  },
  {
    id: 'lang-ts',
    name: 'TypeScript',
    slug: 'typescript',
    icon: 'FileCode2',
    tagline: 'JavaScript with syntax for types, powering large-scale production web codebases globally.',
    description: 'TypeScript adds compile-time static type checking and modern tooling to JavaScript, eliminating runtime null bugs and enabling fearless refactoring.',
    paradigm: ['Multi-paradigm', 'Functional', 'Generic', 'Object-Oriented'],
    yearCreated: 2012,
    primaryUses: ['Production Full-Stack Applications', 'Large-Scale React & Next.js Platforms', 'Backend Node.js Microservices', 'Open-Source Library Authoring'],
    ...getCurriculumForLanguage('TypeScript', 'ts'),
    projects: getProjectsForLanguage('TypeScript', 'ts')
  },
  {
    id: 'lang-scala',
    name: 'Scala',
    slug: 'scala',
    icon: 'Share2',
    tagline: 'Harmonious fusion of Object-Oriented and Functional programming on the JVM, driving Big Data Spark.',
    description: 'Scala unites functional purity with enterprise JVM speed, driving massive distributed computing clusters (Apache Spark, Kafka) and financial risk engines.',
    paradigm: ['Functional', 'Object-Oriented', 'Concurrent'],
    yearCreated: 2004,
    primaryUses: ['Big Data Processing (Apache Spark)', 'Distributed Reactive Systems (Akka)', 'Quantitative Finance Modeling', 'High-Throughput Streaming'],
    ...getCurriculumForLanguage('Scala', 'scala'),
    projects: getProjectsForLanguage('Scala', 'scala')
  },
  {
    id: 'lang-matlab',
    name: 'MATLAB',
    slug: 'matlab',
    icon: 'Activity',
    tagline: 'Matrix laboratory for engineering, aerospace simulations, signal processing, and robotics.',
    description: 'MATLAB is the premier matrix-oriented mathematical computing platform used by engineering institutions, NASA, and automotive R&D labs worldwide.',
    paradigm: ['Array', 'Procedural', 'Object-Oriented', 'Functional'],
    yearCreated: 1984,
    primaryUses: ['Engineering & Physics Simulations', 'Control Systems & Robotics (Simulink)', 'Signal & Image Processing', 'Aerospace Flight Dynamics'],
    ...getCurriculumForLanguage('MATLAB', 'matlab'),
    projects: getProjectsForLanguage('MATLAB', 'matlab')
  }
];
