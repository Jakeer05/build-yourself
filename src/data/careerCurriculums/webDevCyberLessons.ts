import { CareerLesson } from '../../types';

export const webDevCyberLessons: CareerLesson[] = [
  {
    id: 'web-lesson-1',
    milestoneId: 'ms-frontend-react',
    order: 1,
    title: '1. React & TypeScript: Component Architecture & State Hooks',
    durationMinutes: 30,
    conceptExplanation: 'React is a declarative component-based UI library. Components are pure functions that take props (immutable inputs) and return JSX describing the DOM structure. React manages component memory using hooks: useState handles reactive local state, and useEffect coordinates side-effects (data fetching, DOM listeners, timers). TypeScript adds static type checking to eliminate runtime undefined errors.',
    whyImportant: 'React is the dominant frontend framework used by 70%+ of modern tech companies. Full Stack Developers and Frontend Engineers must master component composition, state management, and type safety.',
    syntax: `// React + TypeScript Component with useState
import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
  label: string;
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0, label }) => {
  const [count, setCount] = useState<number>(initialCount);
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      {label}: {count}
    </button>
  );
};`,
    exampleDescription: 'Building a dynamic data filtering dashboard component with controlled state and typed interfaces.',
    codeSnippet: `import React, { useState } from 'react';

interface MetricItem {
  id: string;
  name: string;
  value: number;
  category: 'performance' | 'reliability';
}

const SAMPLE_METRICS: MetricItem[] = [
  { id: 'm1', name: 'API Latency', value: 42, category: 'performance' },
  { id: 'm2', name: 'Error Rate', value: 0.02, category: 'reliability' },
  { id: 'm3', name: 'Throughput', value: 1250, category: 'performance' }
];

export const MetricDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredMetrics = SAMPLE_METRICS.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="p-4 space-y-4 bg-slate-900 rounded-xl text-white">
      <div className="flex gap-2">
        {['all', 'performance', 'reliability'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={\`px-3 py-1 rounded text-xs capitalize \${
              selectedCategory === cat ? 'bg-indigo-600 font-bold' : 'bg-slate-800'
            }\`}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul className="divide-y divide-slate-800">
        {filteredMetrics.map(metric => (
          <li key={metric.id} className="py-2 flex justify-between text-sm">
            <span>{metric.name}</span>
            <span className="font-mono text-cyan-400">{metric.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};`,
    codeLanguage: 'typescript',
    codeExplanation: [
      'Line 3-8: Defining TypeScript interface MetricItem ensuring strict typing across fields.',
      'Line 17: useState<string>("all") maintains the active filter tab.',
      'Line 19-21: Derived state filtering metrics without unnecessary redundant state variables.',
      'Line 26-36: Controlled UI tabs updating state on click and conditionally applying Tailwind styles.',
      'Line 38-44: Mapping over filtered list using unique key={metric.id} for efficient virtual DOM reconciliation.'
    ],
    realWorldExample: 'Airbnb and Meta design modular component design systems in React and TypeScript that serve millions of concurrent web users daily.',
    commonMistakes: [
      {
        mistake: 'Directly mutating state variables (e.g. metrics.push(newMetric)), which fails to trigger a re-render.',
        fix: 'Always treat React state as immutable. Use updater functions or spread operators: setMetrics(prev => [...prev, newMetric]).'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a React useState hook that stores a boolean isModalOpen initialized to false, with a toggle function.',
        hint: 'const [isOpen, setIsOpen] = useState(false); const toggle = () => setIsOpen(p => !p);',
        solutionSnippet: 'const [isOpen, setIsOpen] = useState(false);\nconst toggle = () => setIsOpen(p => !p);'
      }
    ],
    quizQuestions: [
      {
        question: 'Why does React require a unique "key" prop when rendering lists of elements?',
        options: [
          'To help React’s virtual DOM reconciliation algorithm identify which items have changed, been added, or removed efficiently',
          'Keys are required for CSS styling',
          'Keys encrypt the DOM',
          'Without keys, JavaScript throws a syntax error'
        ],
        correctIndex: 0,
        explanation: 'Keys allow React to reconcile the virtual DOM against the real DOM with minimal mutations instead of re-rendering the entire list.'
      },
      {
        question: 'What is the purpose of the dependency array in useEffect(callback, [deps])?',
        options: [
          'Specifies which state/props changes will cause the effect callback to re-run',
          'Imports external npm packages',
          'Defines the TypeScript types for the callback',
          'Prevents memory allocation'
        ],
        correctIndex: 0,
        explanation: 'React compares values in the dependency array between renders; the effect runs only when one of those dependencies has changed.'
      },
      {
        question: 'What does TypeScript do when code is compiled to JavaScript for the browser?',
        options: [
          'It strips all types and interfaces, producing clean standard JavaScript (type erasure)',
          'It bundles a heavy type-checking virtual machine into the browser',
          'It converts all code into WebAssembly',
          'It slows down browser execution by 2x'
        ],
        correctIndex: 0,
        explanation: 'TypeScript performs compile-time verification only. Types are erased during compilation, leaving standard JavaScript.'
      },
      {
        question: 'How should you update state that depends on the previous state value?',
        options: [
          'Using the functional updater form: setCount(prevCount => prevCount + 1)',
          'By reading count directly: setCount(count + 1)',
          'By writing count = count + 1 directly',
          'By refreshing the webpage'
        ],
        correctIndex: 0,
        explanation: 'State updates may be batched or asynchronous; the updater callback setCount(prev => prev + 1) guarantees access to the latest state.'
      },
      {
        question: 'What is JSX in React?',
        options: [
          'A syntax extension to JavaScript that allows writing HTML-like markup directly inside JavaScript files',
          'A new database query language',
          'A JSON validator',
          'A CSS preprocessor'
        ],
        correctIndex: 0,
        explanation: 'JSX allows developers to describe UI structures declaratively; the build system transpiles JSX into React.createElement calls.'
      }
    ],
    miniChallenge: {
      title: 'Controlled Input State Hook',
      prompt: 'Write the TypeScript definition for a SearchBar component with value: string and onChange: (val: string) => void.',
      starterCode: `// Write SearchBarProps interface
interface SearchBarProps {
  // your props
}
`,
      solution: `interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}`
    }
  },
  {
    id: 'cyber-lesson-1',
    milestoneId: 'ms-cybersecurity',
    order: 2,
    title: '2. Cybersecurity Fundamentals: OWASP Top 10 & Web Defense',
    durationMinutes: 30,
    conceptExplanation: 'Cybersecurity protects systems, networks, and data from digital attacks. The OWASP Top 10 document outlines the most critical web application security vulnerabilities: Broken Access Control, Cryptographic Failures, Injection (SQL Injection, XSS), Insecure Design, and Security Misconfiguration. Defense-in-depth requires layered controls, principle of least privilege, input sanitization, and cryptographic hashing (bcrypt/Argon2).',
    whyImportant: 'Data breaches cost organizations an average of \$4.45M per incident. Every developer, analyst, and cybersecurity professional must write secure code and guard customer confidential records.',
    syntax: `# Secure Parameterized Query in Python (Preventing SQL Injection)
# VULNERABLE: cursor.execute(f"SELECT * FROM users WHERE email = '{user_input}'")
# SECURE (Parameterized):
cursor.execute(
    "SELECT id, username, password_hash FROM users WHERE email = %s",
    (user_input,)
)`,
    exampleDescription: 'Comparing vulnerable string concatenation with parameterized SQL queries and password hashing.',
    codeSnippet: `import hashlib
import secrets

# 1. Password Hashing with Salt (PBKDF2-HMAC-SHA256)
def hash_password(password: str) -> tuple[str, str]:
    # Generate cryptographically secure random 16-byte salt
    salt = secrets.token_hex(16)
    # Derive key using 100,000 iterations
    key = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt.encode('utf-8'),
        iterations=100000
    )
    return key.hex(), salt

def verify_password(password: str, stored_hash: str, salt: str) -> bool:
    key = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt.encode('utf-8'),
        iterations=100000
    )
    # Constant-time comparison to prevent timing side-channel attacks
    return secrets.compare_digest(key.hex(), stored_hash)

# Test hashing and verification
stored_hash, salt = hash_password("SuperSecretP@ssw0rd")
print(f"Generated Salt: {salt}")
print(f"Key Hash:       {stored_hash[:32]}...")

is_valid = verify_password("SuperSecretP@ssw0rd", stored_hash, salt)
is_wrong = verify_password("WrongPassword123", stored_hash, salt)

print(f"Password Check (Correct): {is_valid}")
print(f"Password Check (Wrong):   {is_wrong}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 7: Generating a high-entropy random cryptographic salt using secrets.token_hex.',
      'Line 9-14: Using PBKDF2 with 100,000 hashing iterations to resist brute-force GPU cracking.',
      'Line 24: Using secrets.compare_digest() to perform constant-time string comparison, neutralizing timing attack exploits.'
    ],
    realWorldExample: 'Major financial institutions enforce parameterized queries, JWT token expiration, and multi-factor authentication (MFA) across all retail banking portals.',
    commonMistakes: [
      {
        mistake: 'Storing plaintext passwords or using outdated fast hash algorithms like MD5 or SHA-1.',
        fix: 'Never use MD5 or SHA-1 for passwords. Always use slow, salted cryptographic key-derivation functions (bcrypt, Argon2, PBKDF2).'
      }
    ],
    practiceExercises: [
      {
        task: 'Identify why f"SELECT * FROM users WHERE name = \'{name}\'" is vulnerable to SQL injection.',
        hint: 'An attacker can input name as "\' OR \'1\'=\'1", altering query syntax to return all users.',
        solutionSnippet: '# If name is "\' OR \'1\'=\'1", the query becomes:\n# SELECT * FROM users WHERE name = \'\' OR \'1\'=\'1\'\n# Which bypasses authentication.'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the #1 most critical web vulnerability category in the OWASP Top 10 (2021+)?',
        options: ['Broken Access Control', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Missing Favicon'],
        correctIndex: 0,
        explanation: 'Broken Access Control ranks as the #1 security risk, allowing unauthorized users to access privileged data or administrative functions.'
      },
      {
        question: 'How do you completely neutralize SQL Injection vulnerabilities?',
        options: [
          'Using parameterized queries / prepared statements instead of dynamic string concatenation',
          'Encrypting the entire hard drive',
          'Using HTTPS only',
          'Renaming database tables every week'
        ],
        correctIndex: 0,
        explanation: 'Parameterized queries treat user input strictly as literal parameter data, ensuring it cannot alter the SQL syntax tree.'
      },
      {
        question: 'Why are MD5 and SHA-1 obsolete for password storage?',
        options: [
          'Modern GPUs can compute billions of MD5 hashes per second, making rainbow table and brute-force cracking trivial',
          'They cannot hash uppercase letters',
          'They only work on 32-bit systems',
          'They cost money to license'
        ],
        correctIndex: 0,
        explanation: 'MD5 and SHA-1 are fast collision-vulnerable algorithms. Password hashing requires computationally slow, salted algorithms like bcrypt or Argon2.'
      },
      {
        question: 'What is the Principle of Least Privilege in access management (IAM)?',
        options: [
          'Every user, service, and program should be granted only the minimum permissions necessary to perform their required task',
          'Giving every engineer superadmin access so nobody gets blocked',
          'Never letting users change passwords',
          'Deleting database logs every hour'
        ],
        correctIndex: 0,
        explanation: 'Least privilege minimizes the blast radius of a compromised credential by restricting access strictly to necessary actions.'
      },
      {
        question: 'What attack occurs when malicious JavaScript is injected and executed in the browser of other users?',
        options: ['Cross-Site Scripting (XSS)', 'DDoS Attack', 'Man-In-The-Middle', 'Buffer Overflow'],
        correctIndex: 0,
        explanation: 'Cross-Site Scripting (XSS) occurs when unescaped user input is rendered into HTML, allowing attackers to steal session cookies.'
      }
    ],
    miniChallenge: {
      title: 'Sanitize Input Function',
      prompt: 'Write a function sanitize_username(user_input) that strips HTML tag brackets < and > to prevent basic stored XSS.',
      starterCode: `def sanitize_username(user_input):
    # Strip < and >
    pass

print(sanitize_username("<script>alert('xss')</script>Alex")) # alert('xss')Alex`,
      solution: `def sanitize_username(user_input):
    return user_input.replace("<", "").replace(">", "").strip()

print(sanitize_username("<script>alert('xss')</script>Alex"))`
    }
  }
];
