import { MockTest } from '../types';

export const initialMockTests: MockTest[] = [
  {
    id: 'test-python-core',
    title: 'Python Core & OOP Certification Assessment',
    category: 'Programming',
    durationMinutes: 30,
    totalQuestions: 6,
    passingScore: 75,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'py-q1',
        type: 'mcq',
        question: 'What is the output of the following Python expression?',
        codeSnippet: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
        options: ['[1, 2, 3]', '[1, 2, 3, 4]', 'TypeError: cannot mutate alias', '[4]'],
        correctIndex: 1,
        explanation: 'In Python, variables bound to mutable objects hold references to the same memory location. Mutating `y` directly mutates `x`.'
      },
      {
        id: 'py-q2',
        type: 'mcq',
        question: 'What is the key advantage of a Python generator function using `yield` over a standard function returning a list?',
        options: [
          'Generators execute in C rather than Python bytecode',
          'Generators evaluate lazily, consuming O(1) auxiliary memory regardless of sequence size',
          'Generators automatically parallelize code across CPU cores',
          'Generators prevent all runtime exceptions'
        ],
        correctIndex: 1,
        explanation: 'Generators yield items on demand (lazy evaluation), maintaining internal state without storing the entire sequence in RAM.'
      },
      {
        id: 'py-q3',
        type: 'debugging',
        question: 'Identify the bug in this function designed to compute default arguments in Python:',
        codeSnippet: `def record_submission(student: str, logs: list = []):
    logs.append(student)
    return logs`,
        options: [
          'Python does not allow typing annotations in function definitions',
          'Default parameter `logs=[]` is evaluated only once when the function is defined, causing state to persist across calls',
          'The append method returns a new list and does not modify in place',
          'A return statement cannot return a mutable list'
        ],
        correctIndex: 1,
        explanation: 'Default mutable arguments in Python are evaluated once at function definition time. Subsequent calls without passing `logs` will share the same accumulator list. Idiomatic pattern: `logs=None`, then `if logs is None: logs = []`.'
      },
      {
        id: 'py-q4',
        type: 'mcq',
        question: 'Which method resolution order (MRO) algorithm does Python 3 use for multiple inheritance?',
        options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'C3 Linearization', 'Dijkstra Priority Queue'],
        correctIndex: 2,
        explanation: 'Python utilizes the C3 Linearization algorithm to determine a monotonic method resolution order in complex inheritance hierarchies.'
      },
      {
        id: 'py-q5',
        type: 'mcq',
        question: 'What does the `@classmethod` decorator provide to its method in Python?',
        options: [
          'An instance of the class as the first parameter (self)',
          'The class object itself as the first parameter (cls)',
          'Thread-safe locking on method invocation',
          'A private access modifier'
        ],
        correctIndex: 1,
        explanation: '@classmethod passes the class reference (`cls`) as the first argument, allowing factory constructors and class-level state manipulation.'
      },
      {
        id: 'py-q6',
        type: 'mcq',
        question: 'What is the purpose of the Python GIL (Global Interpreter Lock)?',
        options: [
          'To prevent memory leaks in cyclical garbage collection',
          'To ensure thread-safety in CPython memory management by restricting bytecode execution to one native thread at a time',
          'To prevent SQL injection in SQLite connections',
          'To lock variable names from being overwritten'
        ],
        correctIndex: 1,
        explanation: 'The GIL is a mutex used by CPython to prevent race conditions in reference count management when running multithreaded Python code.'
      }
    ]
  },
  {
    id: 'test-sql-advanced',
    title: 'Enterprise SQL & Analytical Window Functions',
    category: 'Data',
    durationMinutes: 30,
    totalQuestions: 5,
    passingScore: 80,
    difficulty: 'Advanced',
    questions: [
      {
        id: 'sql-q1',
        type: 'sql',
        question: 'Which query correctly returns the top 2 highest-earning employees in each department without skipping ranks?',
        options: [
          `SELECT * FROM (
  SELECT employee_id, dept_id, salary,
  DENSE_RANK() OVER(PARTITION BY dept_id ORDER BY salary DESC) as rnk
  FROM employees
) t WHERE rnk <= 2;`,
          `SELECT * FROM employees WHERE salary IN (SELECT MAX(salary) FROM employees GROUP BY dept_id) LIMIT 2;`,
          `SELECT dept_id, MAX(salary) FROM employees GROUP BY dept_id HAVING COUNT(*) <= 2;`,
          `SELECT employee_id, RANK() OVER(ORDER BY salary) FROM employees WHERE rank <= 2;`
        ],
        correctIndex: 0,
        explanation: 'DENSE_RANK() partitioned by dept_id orders salaries within each department without gaps, and filtering in the outer query grabs ranks <= 2.'
      },
      {
        id: 'sql-q2',
        type: 'mcq',
        question: 'What happens when you execute a query with `UNION` versus `UNION ALL`?',
        options: [
          'UNION runs faster than UNION ALL because it buffers results',
          'UNION eliminates duplicate rows by performing a sorting/hashing pass; UNION ALL preserves all rows without deduplication',
          'UNION requires tables to have different columns',
          'UNION ALL only works on numerical columns'
        ],
        correctIndex: 1,
        explanation: 'UNION performs implicit deduplication which incurs overhead; UNION ALL simply concatenates result sets and is significantly faster.'
      },
      {
        id: 'sql-q3',
        type: 'mcq',
        question: 'What is a correlated subquery in SQL?',
        options: [
          'A subquery that runs once before the outer query starts',
          'A subquery that references columns from the outer query and must be evaluated once for each row evaluated by the outer query',
          'A subquery joined with a FULL OUTER JOIN',
          'A subquery saved as a physical materialized view'
        ],
        correctIndex: 1,
        explanation: 'Correlated subqueries depend on the outer query row context, executing row-by-row unless transformed by the query optimizer into a join.'
      },
      {
        id: 'sql-q4',
        type: 'mcq',
        question: 'Which index type is best suited for high-cardinality equality and range searches in PostgreSQL?',
        options: ['Hash Index', 'B-Tree Index', 'GiST Index', 'GIN Index'],
        correctIndex: 1,
        explanation: 'B-Tree indexes are balanced search trees supporting logarithmic time lookups for equality (`=`) and range queries (`<`, `<=`, `>`, `>=`).'
      },
      {
        id: 'sql-q5',
        type: 'mcq',
        question: 'Under ACID database transactions, what does the "I" (Isolation) guarantee?',
        options: [
          'Transactions run in separate database server processes',
          'Concurrent transactions execute without interfering with one another or reading uncommitted dirty data (depending on isolation level)',
          'All columns are strictly indexed before commit',
          'Transactions never consume more than 1GB of memory'
        ],
        correctIndex: 1,
        explanation: 'Isolation ensures that concurrent transactions result in a system state that would be obtained if transactions were executed serially.'
      }
    ]
  },
  {
    id: 'test-react-fullstack',
    title: 'React 19 & Frontend Architecture Screen',
    category: 'Web Development',
    durationMinutes: 25,
    totalQuestions: 5,
    passingScore: 75,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'react-q1',
        type: 'mcq',
        question: 'When should you use `useCallback` in React?',
        options: [
          'Around every single function in every component to make React faster',
          'When passing a callback function as a prop to an optimized child component wrapped in `React.memo` or in a dependency array',
          'Only when fetching data from an external REST API',
          'To replace Redux actions'
        ],
        correctIndex: 1,
        explanation: 'useCallback memoizes function references. Its primary benefit is preventing unnecessary re-renders in memoized child components or stabilizing dependency arrays in useEffect.'
      },
      {
        id: 'react-q2',
        type: 'mcq',
        question: 'What is the purpose of the key prop when rendering a list in React?',
        options: [
          'To apply unique CSS styles to the DOM element',
          'To give React a stable identity for each node so it can match DOM elements across renders, minimizing DOM mutations',
          'To store the array index into the browser local storage',
          'To enable automatic two-way data binding'
        ],
        correctIndex: 1,
        explanation: 'Keys allow React’s reconciliation algorithm to distinguish items that were added, removed, or reordered efficiently.'
      },
      {
        id: 'react-q3',
        type: 'mcq',
        question: 'Why should you avoid using the array index as the `key` prop if list items can be reordered or deleted?',
        options: [
          'It throws a fatal syntax error in Vite',
          'It can cause subtle component state bugs and faulty form inputs when items are reordered or filtered',
          'Index numbers cannot exceed 100 in React',
          'It causes CSS flexbox styling to break'
        ],
        correctIndex: 1,
        explanation: 'If an item is removed, the remaining items shift indices, causing React to associate old component instance states with wrong items.'
      },
      {
        id: 'react-q4',
        type: 'mcq',
        question: 'What is an HTTP-Only cookie, and why is it recommended for storing authentication JWT tokens in web applications?',
        options: [
          'It cannot be sent over HTTPS connections',
          'It cannot be accessed by client-side JavaScript (e.g., document.cookie), mitigating Cross-Site Scripting (XSS) token theft',
          'It expires in 5 minutes automatically',
          'It encrypts the entire frontend DOM'
        ],
        correctIndex: 1,
        explanation: 'HttpOnly flag prevents JavaScript from reading the cookie, protecting stored authentication credentials against XSS exploits.'
      },
      {
        id: 'react-q5',
        type: 'mcq',
        question: 'What is the primary architectural difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR)?',
        options: [
          'SSR renders initial HTML on the web server before streaming to the client, improving First Contentful Paint and SEO; CSR downloads minimal HTML and renders in browser via JS',
          'CSR is only compatible with Python backends',
          'SSR cannot use CSS or images',
          'There is no difference in modern browsers'
        ],
        correctIndex: 0,
        explanation: 'SSR generates HTML markup dynamically on the server for immediate client viewing and indexing, while CSR relies on client-side JavaScript execution.'
      }
    ]
  }
];
