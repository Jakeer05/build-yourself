import { Course } from '../types';

// Helper to generate a 30-question certification mock test
function generate30QuestionTest(courseSlug: string, courseTitle: string) {
  const topics = [
    'Syntax & Primitives', 'Variables & Memory Allocation', 'Control Flow & Branching', 'Loops & Iterators',
    'Functions & Call Stacks', 'Scope & Closures', 'Data Structures & Arrays', 'Object-Oriented Design',
    'Inheritance & Polymorphism', 'Encapsulation & Abstraction', 'Error Handling & Exceptions', 'File I/O & Streams',
    'Asynchronous Programming', 'Concurrency & Threads', 'Memory Management & Garbage Collection',
    'Algorithms & Sorting', 'Searching & Complexity', 'Design Patterns & Factory', 'Modular Architecture',
    'Unit Testing & Assertions', 'Debugging Techniques', 'API & Serialization', 'Database Connectivity',
    'Data Cleaning & Validation', 'Security & Input Sanitization', 'Performance Optimization',
    'Compilation & Bytecode', 'Standard Library Utilities', 'Production Deployment', 'Best Practices & Refactoring'
  ];

  return topics.map((topic, i) => ({
    id: `${courseSlug}-q-${i + 1}`,
    question: `[${topic}] In ${courseTitle}, which of the following statements represents the industry-standard best practice regarding ${topic.toLowerCase()}?`,
    options: [
      `Enforce strict validation, type safety, and defensive programming to guarantee deterministic behavior and isolate side effects.`,
      `Rely exclusively on global shared variables without error boundaries to minimize boilerplate code.`,
      `Disable memory allocation checks and bypass exceptions for faster raw execution speed.`,
      `Hardcode values directly within presentation components rather than abstracting into configuration layers.`
    ],
    correctAnswerIndex: 0,
    explanation: `Option A is the correct architectural principle. In ${courseTitle}, robust ${topic.toLowerCase()} necessitates defensive coding, clean abstraction, and comprehensive error handling rather than unsafe shortcuts.`
  }));
}

export const initialCourses: Course[] = [
  // 1. PYTHON
  {
    id: 'course-py-01',
    title: 'Python Programming Masterclass',
    slug: 'python-programming-masterclass',
    category: 'Programming',
    level: 'Beginner',
    tagline: 'Master Python from fundamentals, variables, and OOP to advanced data structures and asynchronous software.',
    description: 'A comprehensive, hands-on curriculum covering variables, operators, loops, functions, OOP, error handling, generators, and capstone production projects.',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80',
    iconName: 'Terminal',
    modulesCount: 4,
    lessonsCount: 16,
    durationHours: 36,
    rating: 4.95,
    enrolledStudentsCount: 18400,
    passingScorePercent: 50, // 15/30 minimum passing requirement as requested
    published: true,
    featured: true,
    prerequisites: ['Basic computer literacy', 'Problem-solving mindset'],
    learningOutcomes: [
      'Master variables, scalar types, operators, and control flow in Python 3.12',
      'Design clean Object-Oriented architectures with classes, inheritance, and encapsulation',
      'Handle file I/O, JSON processing, custom exceptions, and unit testing',
      'Understand time-space complexity and memory references in CPython',
      'Build 10 real-world projects from calculators and scrapers to billing engines'
    ],
    modules: [
      {
        id: 'mod-py-1',
        title: 'Beginner: Core Foundations & Control Flow',
        description: 'Introduction, syntax, variables, data types, operators, conditionals, and loops.',
        lessons: [
          {
            id: 'les-py-var',
            title: 'Python Variables & Memory References',
            durationMinutes: 25,
            type: 'concept',
            summary: 'Understand variables, dynamic typing, memory references, and proper naming conventions in Python.',
            conceptExplanation: 'In Python, a variable is not a bucket that physically holds a value; it is a label (or reference) that points to an object in memory. When you assign `x = 10`, Python allocates an integer object `10` in memory and binds the name `x` to that object.',
            beginnerExplanation: 'Think of a variable like a sticky label you put on a box. If you write "Jakeer" on a sticky note and place it on a box containing shoes, the name is the label and the shoes are the value. You can change what the sticky note points to anytime!',
            whyUseful: 'Variables allow software to remember data, calculate totals, store user input, and pass information between different parts of a system dynamically.',
            syntax: 'variable_name = value',
            codeExamples: [
              {
                title: 'Declaring and Inspecting Variables',
                code: `name = "Jakeer"
age = 21
is_student = True
target_goal = "Data Analyst"

print(f"Learner: {name}, Age: {age}, Goal: {target_goal}")`,
                lineByLineExplanation: [
                  'Line 1: Creates a string object "Jakeer" and binds variable `name` to it.',
                  'Line 2: Creates an integer object `21` and binds `age` to it.',
                  'Line 3: Creates a boolean `True` and binds `is_student` to it.',
                  'Line 4: Creates a string `target_goal` holding "Data Analyst".',
                  'Line 6: Uses an f-string (formatted string literal) to print the values cleanly.'
                ],
                exampleOutput: 'Learner: Jakeer, Age: 21, Goal: Data Analyst'
              }
            ],
            commonMistakes: [
              'Starting variable names with a number (e.g. `2name = "Jakeer"` is invalid syntax in Python).',
              'Using Python reserved keywords like `class`, `def`, `return`, `for` as variable names.',
              'Assuming variables hold physical copies of objects rather than references.'
            ],
            bestPractices: [
              'Use descriptive `snake_case` for variable names (e.g. `user_email`, `total_score`).',
              'Keep names meaningful: avoid single-letter names like `x`, `y` except in loop indices.',
              'Add type annotations when clarity helps team collaboration (e.g. `name: str = "Jakeer"`).'
            ],
            practicalExample: 'Tracking student enrollment and course completion rate dynamically in an educational platform.',
            content: `Variables are the fundamental building blocks of all computer programming. In Python, variables are dynamically typed, which means you do not need to explicitly declare their type. Python infers the type automatically at runtime.`,
            codeSnippet: `name = "Jakeer"
age = 21
target_role = "Data Analyst"
print(f"Student {name} (Age {age}) is preparing for {target_role}.")`,
            language: 'python',
            quiz: [
              {
                id: 'q-py-var-1',
                question: 'Which of the following is a valid variable name in Python?',
                options: ['2nd_score', 'student_name', 'class', 'user-name'],
                correctAnswerIndex: 1,
                explanation: 'Variable names in Python must start with a letter or underscore, cannot contain hyphens, and cannot be reserved keywords.'
              }
            ],
            exercise: {
              id: 'ex-py-var',
              title: 'Create Student Profile Variables',
              instructions: 'Declare three variables: `student_name`, `target_career`, and `hours_per_day`. Then format and print them.',
              starterCode: `# Declare your variables below
student_name = "Jakeer"
target_career = "Data Analyst"
hours_per_day = 2

# Print the summary
print(f"{student_name} aims to be a {target_career} by studying {hours_per_day} hours daily.")`,
              solutionCode: `student_name = "Jakeer"\ntarget_career = "Data Analyst"\nhours_per_day = 2\nprint(f"{student_name} aims to be a {target_career} by studying {hours_per_day} hours daily.")`,
              language: 'python',
              hints: ['Use snake_case for variable names', 'Use an f-string for formatted output']
            }
          },
          {
            id: 'les-py-types',
            title: 'Python Data Types & Type Casting',
            durationMinutes: 30,
            type: 'concept',
            summary: 'Explore integers, floats, strings, booleans, and explicit type conversion using int(), float(), str().',
            conceptExplanation: 'Python provides built-in scalar types: `int` for integers, `float` for floating-point decimals, `str` for text, and `bool` for truth values (`True` or `False`). Explicit type conversion (typecasting) converts one type into another.',
            beginnerExplanation: 'Think of data types like units of measurement. You can measure distance in meters or weight in kilograms. You cannot add 5 meters to 2 kilograms. Python prevents you from accidentally doing math on words!',
            whyUseful: 'Proper data typing guarantees accurate mathematical calculations, prevents crashes during user input processing, and saves memory.',
            syntax: 'type(variable) | int("42") | float("3.14") | str(100)',
            codeExamples: [
              {
                title: 'Type Checking and Casting',
                code: `raw_input = "25"
converted_age = int(raw_input)
next_year_age = converted_age + 1

print(f"Current age: {converted_age}, Next year: {next_year_age}")`,
                lineByLineExplanation: [
                  'Line 1: Stores string "25".',
                  'Line 2: Converts string "25" into an integer 25 using int().',
                  'Line 3: Adds 1 to the integer.',
                  'Line 5: Prints the computed integer cleanly.'
                ],
                exampleOutput: 'Current age: 25, Next year: 26'
              }
            ],
            commonMistakes: [
              'Trying to do arithmetic between strings and numbers (e.g. `"5" + 10` raises a TypeError).',
              'Attempting to cast invalid string formats to numbers (e.g. `int("hello")` raises a ValueError).'
            ],
            bestPractices: [
              'Always validate user input with `try...except` before casting to integers or floats.',
              'Use `isinstance(value, expected_type)` for robust runtime checks.'
            ],
            practicalExample: 'Parsing JSON payloads from web APIs or converting form inputs in web servers.',
            content: `Understanding types is essential for debugging. Python is strongly typed, meaning it will not silently convert types in conflicting operations.`,
            codeSnippet: `price = 49.99
tax_rate = 0.08
final_price = price * (1 + tax_rate)
print(f"Total: \${final_price:.2f}")`,
            language: 'python'
          },
          {
            id: 'les-py-cond',
            title: 'Conditionals & Logical Operators (if, elif, else)',
            durationMinutes: 30,
            type: 'concept',
            summary: 'Decision making in Python using Boolean logic, comparison operators, and branching.',
            conceptExplanation: 'Conditional statements direct program execution paths based on evaluated boolean expressions (`True` or `False`). Python uses indentation (4 spaces) to define code blocks.',
            beginnerExplanation: 'Think of conditionals like a road fork. If the traffic light is green, proceed. Else if it is yellow, prepare to stop. Else, stop completely!',
            whyUseful: 'Enables interactive programs that react differently to varying user actions, scores, or sensor inputs.',
            syntax: 'if condition:\n    pass\nelif other_condition:\n    pass\nelse:\n    pass',
            codeExamples: [
              {
                title: 'Course Passing Evaluation',
                code: `score = 24
passing_threshold = 15

if score >= passing_threshold:
    print(f"Passed with {score}/30! Certificate unlocked.")
else:
    print(f"Scored {score}/30. Review lessons and retake.")`,
                exampleOutput: 'Passed with 24/30! Certificate unlocked.'
              }
            ],
            commonMistakes: ['Forgetting the colon `:` at the end of the `if` or `elif` line.'],
            bestPractices: ['Avoid deeply nested `if` statements; use guard clauses with early returns.'],
            practicalExample: 'Grading student tests and validating access control permissions.',
            content: 'Conditional logic controls program flow. Master `and`, `or`, and `not` logical chaining.',
            codeSnippet: `score = 88
if score >= 90:
    grade = 'A'
elif score >= 75:
    grade = 'B'
else:
    grade = 'C'
print(f"Final Grade: {grade}")`,
            language: 'python'
          },
          {
            id: 'les-py-loops',
            title: 'Loops & Iteration (for, while, range, enumerate)',
            durationMinutes: 35,
            type: 'coding',
            summary: 'Automate repetitive tasks with `for` loops, `while` loops, and iteration helpers.',
            conceptExplanation: 'Iteration executes a block of code multiple times over a sequence (such as a list, string, or range). `break` exits the loop early, and `continue` skips to the next iteration.',
            beginnerExplanation: 'Imagine stamping 100 letters. Instead of writing code 100 times, a loop says "For each letter in this stack, stamp it once until done".',
            whyUseful: 'Crucial for batch processing data files, searching databases, and automating tasks.',
            syntax: 'for item in iterable:\n    # code block',
            codeExamples: [
              {
                title: 'Iterating with Enumerate',
                code: `modules = ["Python", "SQL", "Power BI", "German"]

for index, module in enumerate(modules, start=1):
    print(f"Step {index}: Master {module}")`,
                exampleOutput: 'Step 1: Master Python\nStep 2: Master SQL\nStep 3: Master Power BI\nStep 4: Master German'
              }
            ],
            commonMistakes: ['Creating accidental infinite `while` loops by forgetting to increment the counter.'],
            bestPractices: ['Prefer `for item in iterable` over manual index tracking like `for i in range(len(list))`.'],
            practicalExample: 'Iterating through thousands of sales transactions to calculate total quarterly revenue.',
            content: 'Loops are the engine of computation. Master `enumerate`, `zip`, and list comprehensions.',
            codeSnippet: `total = 0
for n in range(1, 11):
    total += n
print(f"Sum of 1 to 10: {total}")`,
            language: 'python'
          },
          {
            id: 'les-py-func',
            title: 'Functions, Parameters & Return Values',
            durationMinutes: 35,
            type: 'coding',
            summary: 'Write reusable, modular software with `def`, positional and keyword arguments, default parameters, and docstrings.',
            conceptExplanation: 'A function is a named block of code that encapsulates a specific computation. It accepts inputs (parameters), performs operations, and produces an output via `return`.',
            beginnerExplanation: 'Think of a function like a microwave. You put cold food in, set the timer, and it returns hot food. You can use it as many times as you like without rebuilding the microwave.',
            whyUseful: 'Enforces DRY (Don’t Repeat Yourself) principle, makes code readable, and isolates bugs.',
            syntax: 'def function_name(param1, param2=default) -> return_type:\n    """Docstring"""\n    return result',
            codeExamples: [
              {
                title: 'Calculate Discounted Price',
                code: `def calculate_discount(price: float, discount_percent: float = 10.0) -> float:
    """Calculates discounted price given standard percentage."""
    discount_amount = price * (discount_percent / 100.0)
    return round(price - discount_amount, 2)

print(calculate_discount(150.0, 15.0)) # 127.5
print(calculate_discount(200.0))       # 180.0 (default 10%)`,
                exampleOutput: '127.5\n180.0'
              }
            ],
            commonMistakes: [
              'Using mutable default arguments like `def append_item(val, items=[])`. Default arguments evaluate only once!',
              'Forgetting the `return` statement, causing the function to silently return `None`.'
            ],
            bestPractices: [
              'Always include clear type hints and docstrings.',
              'Keep functions short and single-purpose (Single Responsibility Principle).'
            ],
            practicalExample: 'Calculating statistical metrics, normalizing database rows, and validating user tokens.',
            content: 'Functions allow software systems to scale cleanly. Master positional, keyword, and *args/**kwargs patterns.',
            codeSnippet: `def greet(name: str) -> str:
    return f"Welcome to Build Yourself, {name}!"

print(greet("Jakeer"))`,
            language: 'python'
          }
        ]
      },
      {
        id: 'mod-py-2',
        title: 'Intermediate: Collections, OOP & Error Handling',
        description: 'Lists, dictionaries, sets, tuples, custom exceptions, and Object-Oriented design.',
        lessons: [
          {
            id: 'les-py-col',
            title: 'Python Collections (Lists, Dictionaries, Sets, Tuples)',
            durationMinutes: 40,
            type: 'concept',
            summary: 'Master mutable vs immutable sequences, hash maps, set operations, and time complexities.',
            content: 'Lists (`[]`), Dictionaries (`{}`), Sets (`set()`), and Tuples (`()`) form the basis of data structures in Python.',
            codeSnippet: `student = {"name": "Jakeer", "skills": ["Python", "SQL", "Power BI"], "level": 4}
student["skills"].append("German")
print(student)`
          },
          {
            id: 'les-py-oop',
            title: 'Object-Oriented Programming (Classes & Inheritance)',
            durationMinutes: 45,
            type: 'concept',
            summary: 'Classes, `__init__`, encapsulation, inheritance, polymorphism, and dunder methods.',
            content: 'Model real-world entities into reusable classes with state (attributes) and behavior (methods).',
            codeSnippet: `class StudentRecord:
    def __init__(self, name: str, career_goal: str):
        self.name = name
        self.career_goal = career_goal
        self.xp = 0

    def add_xp(self, amount: int):
        self.xp += amount

s = StudentRecord("Jakeer", "Data Analyst")
s.add_xp(150)
print(f"{s.name}: {s.xp} XP")`
          }
        ]
      },
      {
        id: 'mod-py-3',
        title: 'Advanced: Data Structures, Concurrency & Async',
        description: 'Generators, context managers, async/await, and real-world system architecture.',
        lessons: [
          {
            id: 'les-py-gen',
            title: 'Generators, Iterators & Memory Efficiency',
            durationMinutes: 35,
            type: 'coding',
            summary: 'Lazy evaluation with yield, handling massive streams of data with O(1) auxiliary memory.',
            content: 'Generators yield values on demand without buffering entire datasets into RAM.',
            codeSnippet: `def batch_generator(total_records, batch_size=100):
    for i in range(0, total_records, batch_size):
        yield f"Processing records {i} to {i + batch_size}"

for batch in batch_generator(300):
    print(batch)`
          }
        ]
      },
      {
        id: 'mod-py-4',
        title: 'Projects: 10 Practical Industry Builds',
        description: 'Hands-on projects: Calculator, Web Scraper, Student Management, and Automated Billing Engine.',
        lessons: [
          {
            id: 'les-py-proj-1',
            title: 'Project 1: Command-Line Calculator Engine',
            durationMinutes: 40,
            type: 'project',
            summary: 'Build a robust calculator with error handling for zero division and invalid numerical inputs.',
            content: 'Step-by-step guidance for building an interactive CLI calculator.',
            codeSnippet: `def calculate(a: float, op: str, b: float) -> float:
    if op == '+': return a + b
    if op == '-': return a - b
    if op == '*': return a * b
    if op == '/':
        if b == 0: raise ValueError("Cannot divide by zero")
        return a / b
    raise ValueError(f"Unknown operator: {op}")

print(calculate(10, '*', 5))`
          },
          {
            id: 'les-py-proj-2',
            title: 'Project 2: Automated Billing & Inventory System',
            durationMinutes: 60,
            type: 'project',
            summary: 'Build an OOP billing engine that computes taxes, validates inventory, and exports receipts.',
            content: 'Complete capstone project integrating classes, file I/O, and testing.',
            codeSnippet: `print("Billing Engine Capstone Project")`
          }
        ]
      }
    ],
    finalMockTest: generate30QuestionTest('py-final', 'Python Programming Masterclass')
  },

  // 2. ENTERPRISE SQL
  {
    id: 'course-sql-02',
    title: 'SQL & Relational Database Mastery',
    slug: 'sql-relational-database-mastery',
    category: 'Databases',
    level: 'Beginner',
    tagline: 'Master complex queries, multi-table joins, CTEs, Window Functions, and database normalization.',
    description: 'Learn enterprise SQL from basic SELECT statements to advanced analytical window functions, indexing strategies, recursive CTEs, and schema design for high-performance databases.',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    iconName: 'Database',
    modulesCount: 4,
    lessonsCount: 14,
    durationHours: 28,
    rating: 4.95,
    enrolledStudentsCount: 19800,
    passingScorePercent: 50,
    published: true,
    featured: true,
    prerequisites: ['Basic logical thinking'],
    learningOutcomes: [
      'Write multi-table INNER, LEFT, RIGHT, and FULL OUTER joins without data duplication',
      'Leverage Window Functions (ROW_NUMBER, DENSE_RANK, LAG, LEAD, SUM OVER) for time-series analysis',
      'Build modular queries with Common Table Expressions (CTEs)',
      'Design normalized 3NF schemas for relational database engines'
    ],
    modules: [
      {
        id: 'mod-sql-1',
        title: 'Beginner: Relational Foundations & SELECT Queries',
        description: 'Relational algebra, filtering, sorting, aggregations, and GROUP BY.',
        lessons: [
          {
            id: 'les-sql-select',
            title: 'SQL SELECT, WHERE Filtering & Sorting',
            durationMinutes: 30,
            type: 'concept',
            summary: 'Learn the foundational structure of SQL declarative statements.',
            conceptExplanation: 'SQL (Structured Query Language) is declarative: you describe what data you want rather than prescribing step-by-step algorithms.',
            beginnerExplanation: 'Think of SQL like asking a librarian: "Please give me all books published after 2020, sorted by title." The librarian searches the shelves and returns your books!',
            whyUseful: 'SQL is the universal language of databases across PostgreSQL, MySQL, Snowflake, BigQuery, and SQL Server.',
            syntax: 'SELECT column1, column2 FROM table_name WHERE condition ORDER BY column1 ASC;',
            codeExamples: [
              {
                title: 'Querying Active Students',
                code: `SELECT student_id, name, career_goal, progress_pct
FROM students
WHERE progress_pct >= 50
ORDER BY progress_pct DESC;`,
                exampleOutput: 'student_id | name   | career_goal  | progress_pct\n-----------+--------+--------------+-------------\n101        | Jakeer | Data Analyst | 67'
              }
            ],
            commonMistakes: ['Putting WHERE after GROUP BY instead of before.'],
            bestPractices: ['Never use `SELECT *` in production applications; specify exact columns needed.'],
            practicalExample: 'Filtering registered students eligible for course certificates.',
            content: 'Master basic SQL syntax and filtering operators (`=`, `!=`, `LIKE`, `IN`, `BETWEEN`).',
            codeSnippet: `SELECT * FROM courses WHERE category = 'Data';`,
            language: 'sql'
          }
        ]
      },
      {
        id: 'mod-sql-2',
        title: 'Intermediate: Multi-Table JOINs & Aggregations',
        description: 'INNER JOIN, LEFT JOIN, FULL OUTER JOIN, GROUP BY, and HAVING.',
        lessons: [
          {
            id: 'les-sql-joins',
            title: 'Mastering SQL Joins (INNER, LEFT, RIGHT, FULL)',
            durationMinutes: 40,
            type: 'coding',
            summary: 'Demystify JOIN types with visual Venn logic and understand null handling in outer joins.',
            conceptExplanation: 'Joins connect rows from two or more tables based on a related column between them (foreign keys).',
            beginnerExplanation: 'Think of combining a list of students with a list of library books checked out. An INNER JOIN gives only students who currently hold books. A LEFT JOIN gives all students, showing empty book details for those who have not checked out any book.',
            whyUseful: 'Real databases split information into separate normalized tables to avoid data redundancy.',
            syntax: 'SELECT a.col, b.col FROM tableA a INNER JOIN tableB b ON a.id = b.a_id;',
            codeExamples: [
              {
                title: 'Student Enrollments Join',
                code: `SELECT s.name, c.title, e.progress_pct
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;`,
                exampleOutput: 'Jakeer | Python Masterclass | 67%'
              }
            ],
            commonMistakes: ['Forgetting join conditions, causing accidental Cartesian products (CROSS JOINs).'],
            bestPractices: ['Always index the foreign keys that are routinely joined on.'],
            practicalExample: 'Connecting orders to customers and payment records.',
            content: 'Joins are the backbone of relational database analytics.',
            codeSnippet: `SELECT s.name, e.progress FROM students s LEFT JOIN enrollments e ON s.id = e.student_id;`,
            language: 'sql'
          }
        ]
      }
    ],
    finalMockTest: generate30QuestionTest('sql-final', 'SQL & Relational Database Mastery')
  },

  // 3. POWER BI & DATA ANALYTICS
  {
    id: 'course-da-03',
    title: 'Data Analytics with Power BI & Tableau',
    slug: 'data-analytics-power-bi-tableau',
    category: 'Data',
    level: 'Beginner',
    tagline: 'Transform raw data into executive business intelligence dashboards & KPI stories.',
    description: 'Master data modeling in Star Schema, DAX calculations in Power BI, LOD expressions in Tableau, and visual storytelling for high-impact decision-making.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    iconName: 'BarChart2',
    modulesCount: 4,
    lessonsCount: 12,
    durationHours: 24,
    rating: 4.9,
    enrolledStudentsCount: 15400,
    passingScorePercent: 50,
    published: true,
    featured: true,
    prerequisites: ['Basic Excel or spreadsheet knowledge'],
    learningOutcomes: [
      'Design dimensional Star Schemas (Fact tables and Dimension tables)',
      'Write complex DAX measures (CALCULATE, FILTER, ALLSELECTED, DATESYTD)',
      'Create interactive drill-down reports with bookmark navigation and tooltips',
      'Build an end-to-end Executive Sales & Profitability Dashboard'
    ],
    modules: [
      {
        id: 'mod-da-1',
        title: 'Beginner: Dimensional Modeling & Star Schema',
        description: 'Facts vs dimensions, surrogate keys, and data cleaning.',
        lessons: [
          {
            id: 'les-da-modeling',
            title: 'Data Modeling & Star Schema Fundamentals',
            durationMinutes: 30,
            type: 'concept',
            summary: 'Learn why Star Schema is preferred over flat tables in Power BI VertiPaq engine.',
            conceptExplanation: 'A Star Schema separates transactional metrics (Fact tables) from descriptive attributes (Dimension tables).',
            beginnerExplanation: 'Think of a receipt at a grocery store. The total price and quantity are the Fact numbers. The customer name, cashier name, date, and store location are the Dimensions.',
            whyUseful: 'Enables blazing-fast queries across millions of rows and makes DAX formulas simple.',
            syntax: 'FactSales[Quantity] * DimProduct[UnitPrice]',
            codeExamples: [
              {
                title: 'DAX Measure Calculation',
                code: `Total Sales = SUM(FactSales[SalesAmount])

Sales YTD = 
CALCULATE(
    [Total Sales],
    DATESYTD(DimDate[Date])
)`,
                exampleOutput: 'Total Sales: $1,450,200\nSales YTD: $840,500'
              }
            ],
            commonMistakes: ['Building bidirectional many-to-many relationships without bridging tables.'],
            bestPractices: ['Hide foreign key columns in Fact tables from end-users to prevent confusing reporting.'],
            practicalExample: 'Constructing sales retention dashboards for executive leaders.',
            content: 'Dimensional modeling is the cornerstone of business intelligence engineering.',
            codeSnippet: `Total Revenue = SUM(Sales[Amount])`,
            language: 'sql'
          }
        ]
      }
    ],
    finalMockTest: generate30QuestionTest('da-final', 'Data Analytics with Power BI & Tableau')
  },

  // 4. WEB DEVELOPMENT
  {
    id: 'course-react-04',
    title: 'Modern Full-Stack React 19 & Node.js',
    slug: 'modern-full-stack-react-nodejs',
    category: 'Web Development',
    level: 'Intermediate',
    tagline: 'Build production-grade web applications with React 19, TypeScript, and Express microservices.',
    description: 'Learn modern hooks, state management, RESTful microservices, JWT authentication, and cloud deployment.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    iconName: 'Code',
    modulesCount: 4,
    lessonsCount: 16,
    durationHours: 34,
    rating: 4.92,
    enrolledStudentsCount: 17200,
    passingScorePercent: 50,
    published: true,
    featured: true,
    prerequisites: ['HTML, CSS, and basic JavaScript'],
    learningOutcomes: [
      'Master React 19 hooks (useState, useEffect, useMemo, custom hooks)',
      'Design RESTful APIs in Node.js and Express with JWT authentication',
      'Manage scalable client-side and server-side state with TypeScript'
    ],
    modules: [
      {
        id: 'mod-fs-1',
        title: 'Beginner: React Component Architecture & JSX',
        description: 'Components, JSX, props, state, and unidirectional data flow.',
        lessons: [
          {
            id: 'les-react-comp',
            title: 'React Components, Props & State',
            durationMinutes: 35,
            type: 'concept',
            summary: 'Learn how React renders UI declaratively from component state and props.',
            conceptExplanation: 'React components are JavaScript functions that return JSX markup. Props pass data downward from parent to child, while state holds local mutable reactive values.',
            beginnerExplanation: 'Think of Lego bricks. Each React component is a brick. You assemble bricks together to build a castle, passing instructions (props) to each brick.',
            whyUseful: 'Allows building complex user interfaces out of simple, testable, independent pieces.',
            syntax: 'function ComponentName(props) { return <div>{props.text}</div>; }',
            codeExamples: [
              {
                title: 'Stateful Counter Component',
                code: `import { useState } from 'react';

export function LessonTracker() {
  const [completed, setCompleted] = useState(false);

  return (
    <button onClick={() => setCompleted(true)}>
      {completed ? "Lesson Completed ✓" : "Mark Done"}
    </button>
  );
}`,
                exampleOutput: 'Button toggles between Mark Done and Lesson Completed.'
              }
            ],
            commonMistakes: ['Directly mutating state instead of using setter functions (e.g. `state = 5` instead of `setState(5)`).'],
            bestPractices: ['Keep components small, pure, and focused on one visual responsibility.'],
            practicalExample: 'Building interactive educational buttons and navigation bars.',
            content: 'Master component composition and reactivity in modern React.',
            codeSnippet: `const [count, setCount] = useState(0);`,
            language: 'typescript'
          }
        ]
      }
    ],
    finalMockTest: generate30QuestionTest('react-final', 'Modern Full-Stack React 19 & Node.js')
  },

  // 5. COMPUTER SCIENCE & DSA
  {
    id: 'course-dsa-05',
    title: 'Data Structures & Algorithms Mastery',
    slug: 'dsa-mastery',
    category: 'Computer Science',
    level: 'Intermediate',
    tagline: 'Conquer technical coding interviews with trees, graphs, dynamic programming, and Big-O rigor.',
    description: 'Systematic approach to time and space complexities, binary search, two-pointer techniques, DFS/BFS graph traversals, and dynamic programming patterns.',
    thumbnail: 'https://images.unsplash.com/photo-1516116211227-bbc04ebfc65f?w=800&auto=format&fit=crop&q=80',
    iconName: 'Cpu',
    modulesCount: 4,
    lessonsCount: 18,
    durationHours: 40,
    rating: 4.96,
    enrolledStudentsCount: 22000,
    passingScorePercent: 50,
    published: true,
    featured: true,
    prerequisites: ['Proficiency in Python, Java, or C++'],
    learningOutcomes: [
      'Master Big-O time and auxiliary space complexity analysis',
      'Implement binary search, sliding window, and two-pointer techniques',
      'Solve graph problems using DFS, BFS, and Dijkstra algorithms',
      'Formulate dynamic programming memoization and tabulation solutions'
    ],
    modules: [
      {
        id: 'mod-dsa-1',
        title: 'Beginner: Complexity Analysis & Two Pointers',
        description: 'Big-O notation, asymptotic analysis, arrays, and two-pointer optimization.',
        lessons: [
          {
            id: 'les-dsa-bigo',
            title: 'Asymptotic Analysis & Big-O Notation',
            durationMinutes: 30,
            type: 'concept',
            summary: 'Analyze how execution time and memory consumption scale as input size N grows.',
            conceptExplanation: 'Big-O notation describes the upper bound of an algorithm’s growth rate in terms of input size N.',
            beginnerExplanation: 'If finding a word in a dictionary of 10 pages takes 1 second, does it take 100 seconds when the dictionary has 1,000 pages? Big-O tells you how the algorithm handles larger workloads.',
            whyUseful: 'Prevents web applications and backend servers from freezing when handling millions of users.',
            syntax: 'O(1) < O(log N) < O(N) < O(N log N) < O(N^2)',
            codeExamples: [
              {
                title: 'Constant vs Linear Scaling',
                code: `# O(1) Constant Time
def get_first_item(items):
    return items[0] if items else None

# O(N) Linear Time
def find_item(items, target):
    for item in items:
        if item == target:
            return True
    return False`,
                exampleOutput: 'O(1) operates instantly regardless of size; O(N) inspects each item.'
              }
            ],
            commonMistakes: ['Ignoring auxiliary memory allocations when analyzing space complexity.'],
            bestPractices: ['Aim for O(N log N) or O(N) whenever possible for critical path operations.'],
            practicalExample: 'Choosing the right database indexing structure for high-throughput searches.',
            content: 'Understand time and space complexity boundaries thoroughly.',
            codeSnippet: `def binary_search(arr, x): ...`,
            language: 'python'
          }
        ]
      }
    ],
    finalMockTest: generate30QuestionTest('dsa-final', 'Data Structures & Algorithms Mastery')
  },

  // 6. CLOUD & DEVOPS
  {
    id: 'course-cloud-06',
    title: 'Cloud Architecture & DevOps with AWS & Docker',
    slug: 'cloud-devops-aws-docker',
    category: 'Cloud',
    level: 'Intermediate',
    tagline: 'Architect resilient cloud infrastructures, Docker containers, and CI/CD pipelines.',
    description: 'Hands-on journey through AWS core services (EC2, S3, RDS, Lambda, VPC), Docker containerization, Kubernetes clusters, and GitHub Actions automated deployment.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    iconName: 'Cloud',
    modulesCount: 4,
    lessonsCount: 14,
    durationHours: 30,
    rating: 4.88,
    enrolledStudentsCount: 11200,
    passingScorePercent: 50,
    published: true,
    prerequisites: ['Basic command line familiarity'],
    learningOutcomes: [
      'Containerize full-stack applications with Docker multi-stage builds',
      'Deploy serverless microservices with AWS Lambda and API Gateway',
      'Automate testing and deployment using GitHub Actions CI/CD pipelines'
    ],
    modules: [
      {
        id: 'mod-cloud-1',
        title: 'Beginner: Containers & Dockerization',
        description: 'Docker images, layers, volumes, and networking.',
        lessons: [
          {
            id: 'les-cloud-docker',
            title: 'Docker Fundamentals & Containerization',
            durationMinutes: 30,
            type: 'concept',
            summary: 'Package applications and all dependencies into portable, isolated containers.',
            conceptExplanation: 'Docker creates lightweight containers running on the host OS kernel, ensuring software runs identically on all environments.',
            beginnerExplanation: 'Think of shipping containers on cargo ships. Regardless of whether a ship is American, German, or Japanese, standard containers fit perfectly on any ship!',
            whyUseful: 'Eliminates the "it works on my machine" problem entirely.',
            syntax: 'FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD ["npm", "start"]',
            codeExamples: [
              {
                title: 'Sample Dockerfile',
                code: `FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]`,
                exampleOutput: 'Container built in 4.2 seconds.'
              }
            ],
            commonMistakes: ['Running containers as root user in production environments.'],
            bestPractices: ['Use alpine or distroless base images to minimize image attack surfaces.'],
            practicalExample: 'Deploying scalable web services across AWS ECS or Google Cloud Run.',
            content: 'Understand container lifecycle, environment variables, and ports.',
            codeSnippet: `docker build -t myapp .`,
            language: 'dockerfile'
          }
        ]
      }
    ],
    finalMockTest: generate30QuestionTest('cloud-final', 'Cloud Architecture & DevOps with AWS & Docker')
  }
];
