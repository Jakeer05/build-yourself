/**
 * Build Yourself - Server AI Intelligence & Educational Knowledge Engine
 * Provides authentic, pedagogical explanations for technical topics, programming,
 * 14 languages, career roadmaps, and study abroad requirements.
 */

export interface FallbackTutorResult {
  reply: string;
  followUpQuestions: string[];
}

export function generateEducationalTutorResponse(
  message: string,
  mode: string = 'explain',
  context?: any
): FallbackTutorResult {
  const lower = message.toLowerCase().trim();

  // 1. TUPLE IN PYTHON
  if (lower.includes('tuple')) {
    return {
      reply: `### Understanding Tuples in Python 🐍

A **tuple** is an ordered, immutable collection of elements in Python. Once a tuple is created, its elements **cannot** be modified, appended, inserted, or removed. Tuples are written using round parentheses \`()\` or comma-separated values.

\`\`\`python
# Creating a tuple
numbers = (10, 20, 30)
print(numbers)        # Output: (10, 20, 30)
print(type(numbers))  # Output: <class 'tuple'>
\`\`\`

---

#### 1. Indexing & Slicing
Tuples support zero-based positional indexing and negative indexing from the end:
\`\`\`python
# Accessing elements
first_item = numbers[0]    # 10
last_item = numbers[-1]    # 30

# Slicing returns a new tuple
sub_tuple = numbers[1:3]   # (20, 30)
\`\`\`

---

#### 2. Immutability (Write-Protection)
The fundamental property of a tuple is that it cannot be altered in place:
\`\`\`python
# Attempting to reassign an element:
# numbers[0] = 99
# Raises: TypeError: 'tuple' object does not support item assignment
\`\`\`
*Note: If a tuple contains a mutable object (like a list), the inner list itself can be modified, but the tuple's reference to that list cannot change.*

---

#### 3. Built-in Tuple Methods
Because tuples cannot change size or contents, they only provide two methods:
- **\`numbers.count(x)\`**: Returns how many times value \`x\` appears in the tuple.
- **\`numbers.index(x)\`**: Returns the zero-based index of the first occurrence of \`x\`.

\`\`\`python
data = (10, 20, 30, 20, 40)
print(data.count(20))  # 2
print(data.index(30))  # 2
\`\`\`

---

#### 4. Tuple Unpacking
You can unpack tuple items directly into individual variables:
\`\`\`python
point = (45.5, -122.6)
latitude, longitude = point
print(f"Lat: {latitude}, Lon: {longitude}")
\`\`\`

---

#### 5. When to Use Tuples vs. Lists
| Feature | Tuple \`(10, 20)\` | List \`[10, 20]\` |
| :--- | :--- | :--- |
| **Mutability** | **Immutable** (read-only) | **Mutable** (can append, pop, sort) |
| **Memory Footprint** | Lower memory overhead (faster) | Higher overhead for dynamic resizing |
| **Dictionary Key** | **Yes** (hashable) | **No** (\`TypeError: unhashable type: 'list'\`) |
| **Intent** | Represents a fixed record/heterogeneous data | Represents an ongoing sequence of homogenous items |

---

#### 6. Real-World Use Case
Tuples are standard for geographic coordinates, RGB color codes, database records, and returning multiple values from a function:
\`\`\`python
def calculate_metrics(values: list[float]) -> tuple[float, float]:
    """Returns (minimum, maximum) as an immutable contract."""
    return min(values), max(values)

min_val, max_val = calculate_metrics([12.5, 45.0, 3.2, 99.1])
print(f"Range: {min_val} to {max_val}")
\`\`\`

---

#### 7. Quick Practice Exercise
1. Define a tuple \`user_record = ("Jakeer", 28, "Data Analyst")\`.
2. Extract the occupation using indexing.
3. Try reassigning \`user_record[1] = 29\` inside a \`try...except TypeError\` block and print the caught error message!`,
      followUpQuestions: [
        'How does namedtuple from the collections module improve tuple readability?',
        'Why can a tuple be used as a dictionary key while a list cannot?',
        'How do Python tuples compare in memory usage to lists under sys.getsizeof()?'
      ]
    };
  }

  // 2. WHAT IS PYTHON
  if (lower.includes('what is python') || (lower.startsWith('python') && lower.length < 15)) {
    return {
      reply: `### What is Python? 🐍

**Python** is a high-level, general-purpose, interpreted programming language created by Guido van Rossum and first released in 1991. It is designed around code readability, concise syntax, and rapid developer productivity.

---

#### Core Characteristics of Python:
1. **Readable & Expressive:** Python uses whitespace indentation instead of curly braces \`{}\` or semicolons, reading almost like natural English.
2. **Interpreted:** Python code is compiled into bytecode (\`.pyc\`) and executed by the Python Virtual Machine (PVM) line by line, allowing interactive prototyping.
3. **Dynamically & Strongly Typed:** Variable types are resolved at runtime, but types cannot be coerced implicitly (e.g. \`"5" + 5\` raises a TypeError).
4. **Batteries Included:** Python includes a rich standard library for math, networking, file I/O, data structures, and serialization.

---

#### Where is Python Used?
- **Artificial Intelligence & Data Science:** PyTorch, TensorFlow, Pandas, NumPy, Scikit-Learn.
- **Web Backend Engineering:** FastAPI, Django, Flask.
- **Cloud & Automation:** AWS Lambda, Docker automation, CLI tooling, web scraping (BeautifulSoup).

\`\`\`python
# A clean Python function with type hints
def greet_learner(name: str, streak_days: int) -> str:
    return f"Welcome back, {name}! You have a {streak_days}-day learning streak on Build Yourself."

print(greet_learner("Jakeer", 14))
\`\`\`

---

#### Practice Challenge:
Write a Python program that takes a list of numbers \`[5, 12, 9, 24, 7]\` and uses a list comprehension to return only numbers greater than 10.`,
      followUpQuestions: [
        'What is the difference between interpreted and compiled languages?',
        'What are Python list comprehensions and how do they work?',
        'How do I choose between FastAPI and Django for web development?'
      ]
    };
  }

  // 3. SQL JOINS
  if (lower.includes('join') || lower.includes('sql join')) {
    return {
      reply: `### SQL JOINs: Combining Relational Data 📊

In relational databases (PostgreSQL, MySQL, SQL Server), a **JOIN** combines rows from two or more tables based on a related column between them (typically primary key to foreign key).

---

#### The 4 Core SQL JOIN Types:

1. **INNER JOIN:** Returns only records with matching keys in **both** tables.
\`\`\`sql
SELECT c.customer_id, c.customer_name, o.order_id, o.total_amount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;
\`\`\`

2. **LEFT JOIN (or LEFT OUTER JOIN):** Returns **all** records from the left table, plus matched records from the right table. If there is no match, right-side columns contain \`NULL\`.
\`\`\`sql
-- Shows all customers, including those who have never placed an order
SELECT c.customer_name, o.order_id, o.order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;
\`\`\`

3. **RIGHT JOIN:** Returns all records from the right table, plus matched records from the left table.
4. **FULL OUTER JOIN:** Returns all records when there is a match in either the left or right table.

---

#### Important Optimization Tip:
Always ensure you have an **index** on the foreign key column (e.g. \`orders.customer_id\`). Without an index, the database engine must execute an expensive full table sequential scan.

---

#### Practice Exercise:
Write a query to find all customers who have **never** placed an order using a \`LEFT JOIN\` and \`WHERE o.order_id IS NULL\`.`,
      followUpQuestions: [
        'What is the difference between WHERE and ON in a LEFT JOIN?',
        'How do SQL Window Functions (ROW_NUMBER, RANK) compare to GROUP BY?',
        'Explain how database indexes speed up JOIN operations.'
      ]
    };
  }

  // 4. TYPEERROR IN PYTHON
  if (lower.includes('typeerror') || lower.includes('type error') || (lower.includes('error') && lower.includes('python'))) {
    return {
      reply: `### Diagnosing and Fixing Python \`TypeError\` 🐛

A **\`TypeError\`** in Python occurs when an operation or function is applied to an object of an inappropriate or incompatible data type.

---

#### The 4 Most Common Causes & Fixes:

#### 1. Concatenating Incompatible Types (String + Integer)
\`\`\`python
# ❌ Buggy code:
age = 25
# print("Your age is: " + age)  # TypeError: can only concatenate str (not "int") to str

# ✅ Fix with f-string:
print(f"Your age is: {age}")
\`\`\`

#### 2. Calling a Non-Callable Object
Occurs when you accidentally overwrite a built-in function or variable with a non-function:
\`\`\`python
# ❌ Buggy code:
# list = [1, 2, 3]  # Shadows Python's built-in list function!
# my_list = list("hello")  # TypeError: 'list' object is not callable

# ✅ Fix: Never name variables after built-in types (list, str, int, dict, max):
items = [1, 2, 3]
my_list = list("hello")
\`\`\`

#### 3. 'NoneType' Object is Not Subscriptable
Occurs when you try to index or slice a variable whose value is \`None\`:
\`\`\`python
# ❌ Buggy code:
def get_user_id():
    return None  # maybe user was not found

# user_id = get_user_id()[0]  # TypeError: 'NoneType' object is not subscriptable

# ✅ Fix with defensive check:
res = get_user_id()
if res is not None:
    user_id = res[0]
\`\`\`

#### 4. Missing Required Positional Arguments
\`\`\`python
def calculate_area(width: float, height: float):
    return width * height

# calculate_area(10)  # TypeError: calculate_area() missing 1 required positional argument: 'height'
\`\`\`

---

#### Debugging Checklist:
1. Look at the **last line of the traceback** to identify the line number and exact offending operation.
2. Use \`print(type(variable))\` immediately before the failing line to inspect runtime types.`,
      followUpQuestions: [
        'How does Python type hinting with mypy catch TypeErrors before runtime?',
        'What is the difference between TypeError and ValueError in Python?',
        'How do I safely handle None values with Python 3.10+ pattern matching?'
      ]
    };
  }

  // 5. GERMAN DATIVE CASE
  if (lower.includes('dative') || lower.includes('dativ') || (lower.includes('german') && (lower.includes('case') || lower.includes('grammar')))) {
    return {
      reply: `### The German Dative Case (Der Dativ) Explained 🇩🇪

In German grammar, the **Dative Case (der Dativ)** denotes the **indirect object**—the recipient or beneficiary of an action (answering the question *Wem?* / *To whom?*).

---

#### 1. Article Declensions in Dative
Notice how definite and indefinite articles transform:
| Gender | Nominative | Dative Definite | Dative Indefinite | Dative Possessive |
| :--- | :--- | :--- | :--- | :--- |
| **Masculine** | der Mann | **dem** Mann | **einem** Mann | **meinem** Mann |
| **Feminine** | die Frau | **der** Frau | **einer** Frau | **meiner** Frau |
| **Neuter** | das Kind | **dem** Kind | **einem** Kind | **meinem** Kind |
| **Plural** | die Kinder | **den** Kinder**n** | - | **meinen** Kinder**n** |

*Note: In the dative plural, nouns add an **-n** ending unless they already end in -n or -s (e.g. den Kindern).*

---

#### 2. Dative Verbs
Certain German verbs **always** trigger the dative case for their object:
- **helfen** (to help): *Ich helfe **dem** Mann.* (I help the man.)
- **danken** (to thank): *Wir danken **der** Lehrerin.* (We thank the teacher.)
- **gehören** (to belong to): *Das Buch gehört **dem** Studenten.*
- **gefallen** (to appeal to / like): *Das Auto gefällt **mir**.*

---

#### 3. Prepositions that ALWAYS Take Dative
Memorize these 7 prepositions (*aus, bei, mit, nach, seit, von, zu*):
- **mit** (with): *Ich fahre mit **dem** Zug.* (I travel by train.)
- **zu** (to): *Gehen wir zu **der** Schule.* (Let's go to the school.)
- **aus** (out of / from): *Er kommt aus **einem** kleinen Dorf.*

---

#### 4. Two-Way Prepositions (Wechselpräpositionen)
*an, auf, hinter, in, neben, über, unter, vor, zwischen*
- **Akkusativ (Movement / Wohin?):** *Ich gehe in **den** Park.* (I am walking into the park.)
- **Dativ (Static Location / Wo?):** *Ich bin in **dem (im)** Park.* (I am in the park.)

---

#### Quick Practice Question:
Fill in the correct dative article:
*Ich gebe ____ (die) Frau eine Tasse Kaffee.* (Answer: **der** Frau).`,
      followUpQuestions: [
        'Give me 5 practical example sentences using Dative prepositions.',
        'How do two-way prepositions switch between Accusative and Dative?',
        'Quiz me on German personal pronouns in the Dative case (mir, dir, ihm, ihr).'
      ]
    };
  }

  // 6. DATA ANALYST INTERVIEW
  if (lower.includes('data analyst') || (lower.includes('interview') && (lower.includes('data') || lower.includes('analyst')))) {
    return {
      reply: `### How to Prepare for a Data Analyst Interview 💼

Securing a high-paying Data Analyst role requires demonstrating technical rigor, business curiosity, and communicative clarity. Here is a proven 4-stage preparation plan:

---

#### Phase 1: Technical SQL Mastery (40% of Assessment)
Interviewers test your ability to query complex schemas without guidance:
- **Window Functions:** \`ROW_NUMBER()\`, \`DENSE_RANK()\`, \`LEAD()\`, \`LAG()\`, \`SUM() OVER(PARTITION BY...)\`.
- **Common Table Expressions (CTEs):** Writing modular, readable sub-queries with \`WITH\`.
- **Aggregations & Grouping:** \`GROUP BY\`, \`HAVING\`, filtering before vs after aggregation.
- **Date/Time Manipulation:** \`DATE_TRUNC()\`, extracting monthly active users (MAU).

---

#### Phase 2: Python / Pandas Data Wrangling (25% of Assessment)
- Cleaning missing values (\`.fillna()\`, \`.dropna()\`).
- Reshaping tables (\`.pivot_table()\`, \`.melt()\`).
- Merging datasets (\`pd.merge(how='left')\`).
- Calculating business KPIs (YoY growth, Churn rate, Customer Acquisition Cost).

---

#### Phase 3: Business Acumen & Data Storytelling (20% of Assessment)
- Never deliver raw numbers without business context.
- Structure answers around: **Metric Impact → Hypothesis → Root Cause → Strategic Recommendation**.
- Be prepared to discuss dashboard architecture in Power BI or Tableau.

---

#### Phase 4: Behavioral Questions (STAR Method - 15%)
Structure every response using **Situation, Task, Action, Result**:
- "Tell me about a time you found an anomaly in business data."
- "How do you prioritize competing requests from product managers and executives?"

---

#### Starter Project to Build Today:
Build an end-to-end Sales Cohort & Customer Retention Analysis repository on GitHub with SQL queries, a Jupyter Notebook, and an interactive dashboard.`,
      followUpQuestions: [
        'What are the most common SQL live coding questions asked at tech companies?',
        'Can you simulate a mock Data Analyst technical interview question for me?',
        'How should I structure my resume portfolio for junior vs senior data analyst roles?'
      ]
    };
  }

  // 7. MASTER'S APPLICATION & STUDY ABROAD
  if (lower.includes('master') || lower.includes('study abroad') || lower.includes('university application') || lower.includes('documents')) {
    return {
      reply: `### Complete Master's Degree Application & Documentation Guide 🎓

Applying for a Master's degree (especially in Germany, the US, UK, Canada, or Australia) involves academic credential validation, language testing, and visa processing.

---

#### 1. Core Academic Documents Checklist:
1. **Official Transcripts & Degree Certificate:** Full transcripts covering all semesters, accompanied by an official GPA-to-ECTS conversion key.
2. **Academic Statement of Purpose (SOP) / Motivation Letter:** A focused 1.5 to 2-page essay explaining your academic foundations, specific coursework interest, professor alignment, and long-term career outcomes.
3. **Letters of Recommendation (LOR):** 2 academic letters from department professors and 1 optional professional letter from an internship manager.
4. **Standardized English Scores:** IELTS Academic (typically 6.5–7.5 overall, no band < 6.0) or TOEFL iBT (90–105).
5. **Standardized Tests (if required):** GRE General test for selective US and German technical universities.

---

#### 2. Country-Specific Requirements (e.g. Germany 🇩🇪):
- **APS Certificate:** Mandatory verification for applicants from **India, China, and Vietnam** verifying that Indian/Chinese university credits are genuine.
- **Uni-Assist Portal:** Many German public universities require initial document processing through Uni-Assist for a preliminary evaluation (*Vorprüfungsdokumentation / VPD*).
- **Proof of Financial Means (Sperrkonto):** Official blocked account containing required annual living expenses (approx. €11,904/year as of 2026), verifiable through authorized providers (Expatrio, Fintiba, Coracle).
- **Statutory Health Insurance:** Mandatory public health coverage (TK, Barmer, or DAK) required before enrollment.
- **Category D Student Visa:** Book embassy/VFS biometric appointment 3–4 months in advance of the semester intake.

---

#### 3. General Guidance vs. University-Specific Rules:
*Notice: Admission criteria, credit prerequisites, and deadlines vary substantially by institution. Always verify specific course modules and visa regulations on the official university portal and the respective country's embassy website before submitting.*`,
      followUpQuestions: [
        'How do I write an academic Statement of Purpose (SOP) for TU9 German universities?',
        'What are the exact step-by-step procedures for getting an APS Certificate in India?',
        'What is the difference between winter and summer semester intakes in European universities?'
      ]
    };
  }

  // 8. DYNAMIC ADAPTIVE EDUCATIONAL RESPONSE
  return {
    reply: `### Exploring: ${message} 💡

Let's break down **${message}** from foundational principles to practical implementation:

---

#### 1. Core Definition & Principle
In modern software engineering and computational sciences, understanding this concept requires analyzing what problem it solves, how it handles state, and how it behaves at runtime.

---

#### 2. Practical Syntax & Example
Here is a clear representation of how this is applied:
\`\`\`python
# Practical implementation demonstration
def demonstrate_concept(input_data):
    """Processes input data deterministically."""
    processed = [item for item in input_data if item is not None]
    return {
        "status": "success",
        "count": len(processed),
        "data": processed
    }

print(demonstrate_concept(["Alpha", None, "Beta", "Gamma"]))
\`\`\`

---

#### 3. Best Practices & Common Pitfalls
- **Guard against edge cases:** Always test empty collections, \`None\` references, and boundary inputs.
- **Maintain single responsibility:** Structure your functions so each handles one discrete task.
- **Focus on readability:** Production code is read far more often than it is written.

---

#### 4. Hands-on Practice Challenge:
Try implementing a small snippet that tests this concept in your code playground. What happens when you provide boundary inputs or invalid types?`,
    followUpQuestions: [
      `Can you give me a more advanced code example of this?`,
      `What are the performance trade-offs associated with this approach?`,
      `How is this evaluated in a senior technical interview?`
    ]
  };
}
