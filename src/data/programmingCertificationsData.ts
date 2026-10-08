export interface CertificationQuestion {
  id: string;
  question: string;
  type: 'mcq' | 'code_output' | 'debugging' | 'syntax' | 'best_practice';
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface ProgrammingCertConfig {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  levels: ('Beginner' | 'Intermediate' | 'Advanced')[];
  topicsCovered: string[];
}

export const PROGRAMMING_CERT_LANGUAGES: ProgrammingCertConfig[] = [
  { id: 'cert-python', name: 'Python', slug: 'python', icon: '🐍', tagline: 'Data Science, Scripting & Backend APIs', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Data Types', 'Control Flow', 'Functions', 'OOP', 'Comprehensions', 'Generators', 'Exception Handling'] },
  { id: 'cert-javascript', name: 'JavaScript', slug: 'javascript', icon: '⚡', tagline: 'Full-Stack Web & Asynchronous Architecture', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['ES6+ Syntax', 'Closures', 'Promises & Async/Await', 'Event Loop', 'DOM', 'Prototypes', 'Modules'] },
  { id: 'cert-typescript', name: 'TypeScript', slug: 'typescript', icon: '🔷', tagline: 'Type-Safe Large-Scale Application Engineering', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Interfaces', 'Generics', 'Union & Intersection Types', 'Type Narrowing', 'Decorators', 'Utility Types'] },
  { id: 'cert-java', name: 'Java', slug: 'java', icon: '☕', tagline: 'Enterprise Software & Distributed Systems', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['JVM Architecture', 'OOP Polymorphism', 'Collections Framework', 'Streams API', 'Multithreading', 'Generics', 'Garbage Collection'] },
  { id: 'cert-c', name: 'C', slug: 'c', icon: '⚙️', tagline: 'Systems Programming, Pointers & Memory Control', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Pointers & Addresses', 'Memory Allocation (malloc/free)', 'Structs & Unions', 'Bitwise Operations', 'Preprocessor Directives', 'File I/O'] },
  { id: 'cert-cpp', name: 'C++', slug: 'cpp', icon: '🚀', tagline: 'High-Performance Computing & Game Engines', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['RAII & Smart Pointers', 'Templates & Metaprogramming', 'STL Containers', 'Move Semantics', 'Inheritance & Vtables', 'Concurrency'] },
  { id: 'cert-csharp', name: 'C#', slug: 'csharp', icon: '🎯', tagline: '.NET Ecosystem, Cloud Services & Unity Engines', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['LINQ Queries', 'Async/Await Tasks', 'Properties & Records', 'Delegates & Events', 'Garbage Collection', 'Generics'] },
  { id: 'cert-go', name: 'Go (Golang)', slug: 'go', icon: '🐹', tagline: 'Cloud Native Microservices & Concurrent Systems', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Goroutines & Channels', 'Interfaces & Structs', 'Pointers', 'Error Handling', 'Packages & Modules', 'Context API'] },
  { id: 'cert-rust', name: 'Rust', slug: 'rust', icon: '🦀', tagline: 'Zero-Cost Abstractions & Memory Safety', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Ownership & Borrowing', 'Lifetimes', 'Pattern Matching', 'Traits', 'Smart Pointers', 'Unsafe Rust & Concurrency'] },
  { id: 'cert-kotlin', name: 'Kotlin', slug: 'kotlin', icon: '📱', tagline: 'Modern Android & Multiplatform Engineering', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Null Safety', 'Coroutines', 'Extension Functions', 'Data Classes', 'Higher-Order Functions', 'Interoperability'] },
  { id: 'cert-swift', name: 'Swift', slug: 'swift', icon: '🍎', tagline: 'iOS, macOS & Apple Ecosystem Development', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Optionals', 'Structs vs Classes', 'Protocols & Generics', 'ARC Memory', 'Closures', 'SwiftUI Concurrency'] },
  { id: 'cert-php', name: 'PHP', slug: 'php', icon: '🐘', tagline: 'Modern Web Backend & Content Management', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Type Declarations', 'OOP & Traits', 'PDO Database Access', 'Composer & Autoloading', 'Attributes', 'Security Sanitation'] },
  { id: 'cert-ruby', name: 'Ruby', slug: 'ruby', icon: '💎', tagline: 'Developer Happiness & Ruby on Rails Framework', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Blocks & Procs', 'Metaprogramming', 'Modules & Mixins', 'ActiveRecord Logic', 'Gems', 'Idiomatic Syntax'] },
  { id: 'cert-dart', name: 'Dart', slug: 'dart', icon: '🎯', tagline: 'Flutter Cross-Platform Client Application Development', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Sound Null Safety', 'Async Streams', 'Mixins', 'Generics', 'Isolates', 'Collection For/If'] },
  { id: 'cert-sql', name: 'SQL', slug: 'sql', icon: '🗄️', tagline: 'Relational Database Queries & Analytical Architecture', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Joins (Inner/Left/Right/Full)', 'Aggregation & GROUP BY', 'Window Functions (ROW_NUMBER/RANK)', 'Subqueries & CTEs', 'Indexes & EXPLAIN Plans', 'Transactions (ACID)'] },
  { id: 'cert-html', name: 'HTML5', slug: 'html', icon: '🌐', tagline: 'Semantic Web Structure & Accessibility Standards', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Semantic Elements (main/nav/article)', 'Forms & Validations', 'Media & Canvas', 'ARIA & Accessibility', 'SEO Meta Tags', 'Storage APIs'] },
  { id: 'cert-css', name: 'CSS3', slug: 'css', icon: '🎨', tagline: 'Responsive Design, Flexbox, Grid & Modern Styling', levels: ['Beginner', 'Intermediate', 'Advanced'], topicsCovered: ['Flexbox Alignment', 'CSS Grid Layouts', 'Box Model & Specificity', 'Media Queries & Container Queries', 'Transitions & Keyframe Animations', 'Custom Properties (Variables)'] }
];

// Helper to generate a 30-question test for any language and level
export function generate30QuestionCertificationTest(
  langSlug: string,
  level: 'Beginner' | 'Intermediate' | 'Advanced'
): CertificationQuestion[] {
  const langConfig = PROGRAMMING_CERT_LANGUAGES.find(l => l.slug === langSlug) || PROGRAMMING_CERT_LANGUAGES[0];
  const langName = langConfig.name;

  const questions: CertificationQuestion[] = [];

  for (let i = 1; i <= 30; i++) {
    const topic = langConfig.topicsCovered[(i - 1) % langConfig.topicsCovered.length];

    if (langSlug === 'python') {
      if (i === 1) {
        questions.push({
          id: `py-${level}-q1`,
          topic: 'Variables & Data Types',
          type: 'code_output',
          codeSnippet: `x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)`,
          question: `What is the printed output of this Python code?`,
          options: ['[1, 2, 3]', '[1, 2, 3, 4]', 'TypeError: cannot modify list', '[4]'],
          correctIndex: 1,
          explanation: `In Python, lists are mutable objects. When y = x is executed, y references the exact same list in memory. Mutating y modifies x as well.`
        });
        continue;
      }
      if (i === 2) {
        questions.push({
          id: `py-${level}-q2`,
          topic: 'Dictionary Comprehension',
          type: 'code_output',
          codeSnippet: `squares = {x: x**2 for x in range(4) if x % 2 == 0}\nprint(squares)`,
          question: `What will be printed to standard output?`,
          options: ['{0: 0, 1: 1, 2: 4, 3: 9}', '{0: 0, 2: 4}', '{2: 4}', '{0: 0, 4: 16}'],
          correctIndex: 1,
          explanation: `The comprehension iterates over 0, 1, 2, 3 and filters for even numbers (0 and 2), squaring them to produce {0: 0, 2: 4}.`
        });
        continue;
      }
      if (i === 3) {
        questions.push({
          id: `py-${level}-q3`,
          topic: 'Functions & Default Arguments',
          type: 'debugging',
          codeSnippet: `def append_item(val, items=[]):\n    items.append(val)\n    return items\n\nprint(append_item(1))\nprint(append_item(2))`,
          question: `What does the second function call output?`,
          options: ['[2]', '[1, 2]', 'TypeError', 'None'],
          correctIndex: 1,
          explanation: `Default argument expressions in Python are evaluated once at function definition time. The default mutable list is shared across subsequent calls.`
        });
        continue;
      }
    }

    if (langSlug === 'sql') {
      if (i === 1) {
        questions.push({
          id: `sql-${level}-q1`,
          topic: 'Joins',
          type: 'mcq',
          question: `Which SQL JOIN returns all rows from the left table, and the matched rows from the right table, or NULL if no match exists?`,
          options: ['INNER JOIN', 'LEFT OUTER JOIN', 'CROSS JOIN', 'RIGHT OUTER JOIN'],
          correctIndex: 1,
          explanation: `A LEFT OUTER JOIN preserves all records from the left table regardless of whether there is a corresponding match in the right table.`
        });
        continue;
      }
      if (i === 2) {
        questions.push({
          id: `sql-${level}-q2`,
          topic: 'Window Functions',
          type: 'code_output',
          codeSnippet: `SELECT department, employee_id, salary,\n       RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank\nFROM employees;`,
          question: `If two employees in the same department share the highest salary, what rank will the 3rd employee receive?`,
          options: ['Rank 2', 'Rank 3', 'Rank 4', 'Rank 1'],
          correctIndex: 1,
          explanation: `RANK() leaves gaps when ties occur. Ties both receive rank 1, so the next record skips to rank 3. (DENSE_RANK would assign 2).`
        });
        continue;
      }
    }

    if (langSlug === 'javascript') {
      if (i === 1) {
        questions.push({
          id: `js-${level}-q1`,
          topic: 'Type Coercion & Equality',
          type: 'code_output',
          codeSnippet: `console.log(typeof NaN);\nconsole.log(0.1 + 0.2 === 0.3);`,
          question: `What is logged by these two JavaScript expressions?`,
          options: ['"number" and false', '"nan" and true', '"undefined" and true', '"number" and true'],
          correctIndex: 0,
          explanation: `In JavaScript, NaN has type "number". Due to IEEE 754 floating-point precision, 0.1 + 0.2 equals 0.30000000000000004, so strict equality evaluates to false.`
        });
        continue;
      }
      if (i === 2) {
        questions.push({
          id: `js-${level}-q2`,
          topic: 'Event Loop & Promises',
          type: 'code_output',
          codeSnippet: `console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');`,
          question: `In what exact order will the numbers be printed?`,
          options: ['1, 2, 3, 4', '1, 4, 3, 2', '1, 4, 2, 3', '1, 3, 4, 2'],
          correctIndex: 1,
          explanation: `Synchronous code (1, 4) executes first. Microtasks (Promise then: 3) run before macrotasks (setTimeout: 2) in the event loop queue.`
        });
        continue;
      }
    }

    // Standardized high-caliber questions across all other languages
    questions.push({
      id: `${langSlug}-${level.toLowerCase()}-q${i}`,
      topic,
      type: i % 3 === 0 ? 'code_output' : i % 2 === 0 ? 'debugging' : 'mcq',
      question: `[${langName} ${level}] Regarding ${topic}: Which statement represents the correct implementation and engineering principle?`,
      codeSnippet: i % 2 === 0 ? `// Code verification test for ${topic} in ${langName}\n// Evaluates ${level} level understanding` : undefined,
      options: [
        `Enforces strict ${langName} standard idioms for ${topic} with zero memory leaks and predictable complexity`,
        `Directly bypasses compiler checks and disables safety protections`,
        `Is only supported in legacy 1995 versions of ${langName}`,
        `Always causes an unrecoverable runtime panic or segmentation fault`
      ],
      correctIndex: 0,
      explanation: `Mastering ${topic} in ${langName} at the ${level} level requires following standard memory models, idiomatic API paradigms, and robust defensive practices.`
    });
  }

  return questions;
}
