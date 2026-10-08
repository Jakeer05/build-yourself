import { CareerLesson } from '../../types';

export const pythonCoreLessons: CareerLesson[] = [
  {
    id: 'py-lesson-1',
    milestoneId: 'ms-python',
    order: 1,
    title: '1. Introduction to Python',
    durationMinutes: 15,
    conceptExplanation: 'Python is a high-level, interpreted, dynamically typed programming language created by Guido van Rossum in 1991. It emphasizes code readability with its clean syntax and significant indentation, allowing you to express complex concepts in fewer lines of code than languages like C++ or Java.',
    whyImportant: 'Python is the undisputed lingua franca for Data Science, Machine Learning, Web Development, and Automation. Over 80% of data scientists and AI engineers use Python daily because of its unrivaled ecosystem of libraries (NumPy, Pandas, PyTorch, Scikit-Learn).',
    syntax: `# Basic Python program structure
# Comments start with a hash symbol '#'
print("Hello, Build Yourself Engineer!")`,
    exampleDescription: 'A classic introductory script that outputs a welcome message and confirms your Python interpreter version and basic environment status.',
    codeSnippet: `# First Python Program
greeting = "Welcome to Build Yourself"
target_career = "Data Scientist"

print(greeting)
print(f"Preparing roadmap for: {target_career}")
print("Python interpreter ready.")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Comment documenting the script purpose.',
      'Line 2-3: Defining variables greeting and target_career holding string literals.',
      'Line 5: Standard print() function outputting the greeting to standard output.',
      'Line 6: An f-string (formatted string literal) embedding the target_career variable inside text dynamically.'
    ],
    realWorldExample: 'At companies like Netflix and Spotify, Python scripts are used in automated data ingestion jobs that run every night to aggregate millions of user stream logs.',
    commonMistakes: [
      {
        mistake: 'Using capital P in Print() or forgetting parentheses in Python 3.',
        fix: 'Python is strictly case-sensitive. Always write print("text"), not Print("text").'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a Python program that prints your name, your target career, and why you want to learn this skill.',
        hint: 'Use three separate print() statements or one print statement with newline character \\n.',
        solutionSnippet: 'print("Name: Alex")\\nprint("Target: Data Scientist")\\nprint("Goal: Build predictive machine learning models.")'
      }
    ],
    quizQuestions: [
      {
        question: 'Who created Python, and in which year was it first released?',
        options: [
          'Dennis Ritchie in 1972',
          'Guido van Rossum in 1991',
          'James Gosling in 1995',
          'Bjarne Stroustrup in 1985'
        ],
        correctIndex: 1,
        explanation: 'Guido van Rossum developed Python in the late 1980s and officially released version 0.9.0 in 1991.'
      },
      {
        question: 'Which characteristic best describes Python?',
        options: [
          'Low-level, statically typed and manually compiled to binary',
          'High-level, interpreted, and dynamically typed with clean syntax',
          'Markup language used exclusively for styling user interfaces',
          'Strictly functional language without object-oriented capabilities'
        ],
        correctIndex: 1,
        explanation: 'Python is high-level (abstracting away hardware memory management), interpreted (executed line by line by CPython), and dynamically typed.'
      },
      {
        question: 'How do you write single-line comments in Python?',
        options: ['// This is a comment', '/* This is a comment */', '# This is a comment', '-- This is a comment'],
        correctIndex: 2,
        explanation: 'In Python, the hash symbol (#) marks the beginning of a single-line comment.'
      },
      {
        question: 'What is the primary output function in Python 3?',
        options: ['echo()', 'System.out.println()', 'console.log()', 'print()'],
        correctIndex: 3,
        explanation: 'print() is the built-in function used in Python 3 to display outputs to the console.'
      },
      {
        question: 'Why is Python dominant in modern Data Science and AI?',
        options: [
          'Because it runs faster than raw C and Fortran in CPU cycles',
          'Because of its vast scientific ecosystem including NumPy, Pandas, Scikit-Learn, and PyTorch',
          'Because it is the only language that can communicate with GPUs',
          'Because it requires no computer memory to run'
        ],
        correctIndex: 1,
        explanation: 'Python combines high developer productivity with C-optimized underlying libraries (NumPy, PyTorch, Pandas).'
      }
    ],
    miniChallenge: {
      title: 'Console Identity Generator',
      prompt: 'Create a greeting script that calculates your target study weeks (months * 4.3) and prints a formatted status summary.',
      starterCode: 'months = 6\nweeks = months * 4.3\n# Your code here to print the message\n',
      solution: 'months = 6\nweeks = months * 4.3\nprint(f"Study Plan: {months} months is approximately {weeks:.1f} weeks of focused mastery!")'
    }
  },
  {
    id: 'py-lesson-2',
    milestoneId: 'ms-python',
    order: 2,
    title: '2. Installing Python & Environment',
    durationMinutes: 18,
    conceptExplanation: 'To write and execute Python professionally, you install the CPython interpreter (from python.org) and configure modern developer tooling such as virtual environments (venv), package installers (pip), and Interactive Development Environments (VS Code, Jupyter Notebooks).',
    whyImportant: 'In professional engineering teams, working with isolated virtual environments is mandatory to prevent dependency conflicts between different libraries across projects.',
    syntax: `# Command line terminal setup:
# Check python version
python --version

# Create an isolated virtual environment
python -m venv myenv

# Activate on Linux/macOS
source myenv/bin/activate
# Activate on Windows
myenv\\Scripts\\activate

# Install required packages
pip install pandas numpy jupyter`,
    exampleDescription: 'Checking the Python runtime environment programmatically using the built-in sys module.',
    codeSnippet: `import sys
import platform

print("Python Version:", sys.version)
print("Platform System:", platform.system())
print("Executable Path:", sys.executable)`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-2: Import the standard library modules sys and platform.',
      'Line 4: sys.version returns the exact version string and compilation timestamp.',
      'Line 5: platform.system() returns whether you are running on Linux, Darwin (macOS), or Windows.',
      'Line 6: sys.executable shows the path to the current active Python interpreter (validating if your virtual environment is active).'
    ],
    realWorldExample: 'Data teams deploy Docker containers where the exact Python runtime and packages are pinned via a requirements.txt file generated by pip freeze.',
    commonMistakes: [
      {
        mistake: 'Installing packages globally without a virtual environment, causing version conflicts between projects.',
        fix: 'Always create and activate a virtual environment before running pip install.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a script that inspects whether Python version is 3.10 or higher using sys.version_info.',
        hint: 'sys.version_info.major should equal 3 and sys.version_info.minor should be >= 10.',
        solutionSnippet: 'import sys\\nis_modern = sys.version_info.major == 3 and sys.version_info.minor >= 10\\nprint("Modern Python:", is_modern)'
      }
    ],
    quizQuestions: [
      {
        question: 'What tool is used by default in Python to create isolated environments?',
        options: ['pip', 'venv', 'docker', 'npm'],
        correctIndex: 1,
        explanation: 'python -m venv <dir> is Python\'s built-in standard module for creating isolated environments.'
      },
      {
        question: 'Which command installs an external Python library from PyPI?',
        options: ['python add <package>', 'pip install <package>', 'npm install <package>', 'apt-get python <package>'],
        correctIndex: 1,
        explanation: 'pip (Package Installer for Python) is used to download and install packages from PyPI.'
      },
      {
        question: 'How do you freeze current dependencies to share with your team?',
        options: ['pip export > dependencies.json', 'pip freeze > requirements.txt', 'python lock --all', 'venv save'],
        correctIndex: 1,
        explanation: 'pip freeze > requirements.txt records the exact versions of all installed packages in the active virtual environment.'
      },
      {
        question: 'Which IDE is most popular for exploratory data analysis and interactive visualization in Python?',
        options: ['Sublime Text 2', 'Jupyter Notebook / JupyterLab', 'Notepad++', 'Xcode'],
        correctIndex: 1,
        explanation: 'Jupyter Notebooks allow data scientists to combine live code, markdown notes, and visualizations in cell blocks.'
      },
      {
        question: 'What happens if you run "pip install" without activating a virtual environment?',
        options: [
          'Python refuses to run and shuts down the computer',
          'Packages are installed into the global system Python installation, which can break system tools or cause version collisions',
          'It automatically converts your code to C++',
          'Nothing, Python always creates a virtual environment automatically in memory'
        ],
        correctIndex: 1,
        explanation: 'Global package installations pollute the host environment and cause conflicts when different projects require different package versions.'
      }
    ],
    miniChallenge: {
      title: 'Environment Checker',
      prompt: 'Write code using platform and sys that checks if the Python major version is 3, and outputs "Environment Compliant" if true.',
      starterCode: 'import sys\n# Check if major version is 3\n',
      solution: 'import sys\nif sys.version_info.major == 3:\n    print("Environment Compliant: Running Python 3!")\nelse:\n    print("Unsupported Python Version")'
    }
  },
  {
    id: 'py-lesson-3',
    milestoneId: 'ms-python',
    order: 3,
    title: '3. Python Syntax & Indentation',
    durationMinutes: 16,
    conceptExplanation: 'Unlike languages like C, Java, or JavaScript that use curly braces {} to delineate code blocks, Python uses indentation (typically 4 spaces). This syntactical rule enforces clean, uniform formatting across all Python codebases.',
    whyImportant: 'Indentation is not aesthetic in Python; it defines the scope and execution hierarchy. Understanding indentation errors (IndentationError) is the first critical debugging skill for every developer.',
    syntax: `# Correct indentation using 4 spaces:
if condition:
    # 4 spaces indentation
    action_one()
    action_two()
else:
    fallback_action()`,
    exampleDescription: 'Demonstration of nested blocks using standard 4-space indentation.',
    codeSnippet: `score = 88

if score >= 90:
    grade = "A"
    status = "Honors"
elif score >= 80:
    grade = "B"
    status = "Very Good"
else:
    grade = "C"
    status = "Pass"

print(f"Score: {score} | Grade: {grade} | Status: {status}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Initialize integer variable score with 88.',
      'Line 3: An if statement followed by a colon :. The colon signals that an indented code block begins.',
      'Line 4-5: 4-space indentation block executed when condition is true.',
      'Line 6: elif (else-if) branch, evaluated if the prior if was false.',
      'Line 10: else block for all other cases.',
      'Line 14: Unindented print statement, executed after the conditional block completes.'
    ],
    realWorldExample: 'In data processing pipelines, nested loops and conditional checks determine whether an anomalous record is discarded or saved to an error log.',
    commonMistakes: [
      {
        mistake: 'Mixing tabs and spaces in the same file, resulting in TabError: inconsistent use of tabs and spaces in indentation.',
        fix: 'Configure your code editor to insert 4 spaces automatically whenever you press the Tab key.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a nested condition that checks if a student score is >= 70, and if their attendance is >= 80% to declare "Admitted".',
        hint: 'Use an outer if condition for score and an inner indented if for attendance.',
        solutionSnippet: 'score = 75\\nattendance = 85\\nif score >= 70:\\n    if attendance >= 80:\\n        print("Admitted")'
      }
    ],
    quizQuestions: [
      {
        question: 'How does Python determine code block boundaries (scope)?',
        options: ['Curly braces { }', 'BEGIN and END keywords', 'Indentation (whitespace)', 'Semicolons at line endings'],
        correctIndex: 2,
        explanation: 'Python uses consistent whitespace indentation (PEP 8 recommends 4 spaces per indentation level).'
      },
      {
        question: 'What character MUST follow control flow statements like if, for, while, and def?',
        options: ['A semicolon (;)', 'A colon (:)', 'An arrow (->)', 'An ampersand (&)'],
        correctIndex: 1,
        explanation: 'A colon (:) signals the end of the header and the beginning of an indented suite of statements.'
      },
      {
        question: 'What happens if you mix tabs and spaces in a Python script?',
        options: [
          'Python will silently convert all tabs into spaces',
          'Python raises a TabError: inconsistent use of tabs and spaces in indentation',
          'The code runs 50% slower',
          'The code executes backwards'
        ],
        correctIndex: 1,
        explanation: 'Python 3 disallows mixing tabs and spaces for indentation in the same block, throwing a TabError.'
      },
      {
        question: 'According to PEP 8 (Python standard style guide), how many spaces should be used per indentation level?',
        options: ['1 space', '2 spaces', '4 spaces', '8 spaces'],
        correctIndex: 2,
        explanation: 'PEP 8 recommends exactly 4 spaces per indentation level.'
      },
      {
        question: 'Which of the following lines will trigger an IndentationError?',
        options: [
          'x = 10\\nprint(x)',
          'if True:\\nprint("Hello")',
          'if True:\\n    print("Hello")',
          'for i in range(2):\\n    pass'
        ],
        correctIndex: 1,
        explanation: 'The statement under if True: is not indented, causing Python to raise IndentationError: expected an indented block.'
      }
    ],
    miniChallenge: {
      title: 'Fix the Indentation',
      prompt: 'Correct the indentation in the code so that the tax calculation and discount are applied properly inside the conditional block.',
      starterCode: 'cart_total = 120\nif cart_total > 100:\ndiscount = cart_total * 0.1\nfinal_price = cart_total - discount\nprint(final_price)\n',
      solution: 'cart_total = 120\nif cart_total > 100:\n    discount = cart_total * 0.1\n    final_price = cart_total - discount\n    print(f"Final discounted price: ${final_price:.2f}")'
    }
  },
  {
    id: 'py-lesson-4',
    milestoneId: 'ms-python',
    order: 4,
    title: '4. Variables & Dynamic Typing',
    durationMinutes: 18,
    conceptExplanation: 'A variable in Python is a named reference (pointer) to an object stored in computer memory. Python is dynamically typed: you do not declare variable types explicitly (like int x in Java/C++); Python infers the type automatically at runtime.',
    whyImportant: 'Variables allow you to store and manipulate datasets, hyperparameters, model weights, and user inputs dynamically throughout your programs.',
    syntax: `# Variable assignment:
variable_name = value

# Multiple assignment:
x, y, z = 10, 20, 30

# Reassignment to a different type (dynamic typing):
data = 42          # integer
data = "Build Yourself"   # reassigned to string`,
    exampleDescription: 'Creating variables of various types, inspecting their types with type(), and observing memory identity with id().',
    codeSnippet: `user_name = "Sarah Connor"
user_age = 29
account_balance = 4520.75
is_premium_member = True

print(f"User: {user_name} (Type: {type(user_name).__name__})")
print(f"Age: {user_age} (Type: {type(user_age).__name__})")
print(f"Balance: \${account_balance} (Type: {type(account_balance).__name__})")
print(f"Premium: {is_premium_member} (Type: {type(is_premium_member).__name__})")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Assigns a string literal to user_name.',
      'Line 2: Assigns an integer to user_age.',
      'Line 3: Assigns a floating-point number to account_balance.',
      'Line 4: Assigns a boolean value (True) to is_premium_member.',
      'Line 6-9: Uses type(var).__name__ to retrieve the string name of the inferred data type.'
    ],
    realWorldExample: 'In machine learning pipelines, a variable X represents the feature matrix (2D NumPy array or DataFrame) and y represents the target label vector.',
    commonMistakes: [
      {
        mistake: 'Using reserved keywords (class, def, return, for) or starting variable names with a digit (e.g. 2nd_metric).',
        fix: 'Variable names must start with a letter or underscore, followed by letters, digits, or underscores (snake_case in Python).'
      }
    ],
    practiceExercises: [
      {
        task: 'Declare three variables for a product: product_id (int), product_name (str), and price (float). Calculate total price with 8% sales tax.',
        hint: 'total = price * 1.08',
        solutionSnippet: 'product_id = 101\\nproduct_name = "Laptop"\\nprice = 899.99\\ntotal = price * 1.08\\nprint(f"{product_name} Total: ${total:.2f}")'
      }
    ],
    quizQuestions: [
      {
        question: 'What does "dynamic typing" mean in Python?',
        options: [
          'You must declare types before compiling',
          'Variable types are determined automatically at runtime and can change if reassigned',
          'Variables can only store numbers',
          'Typing is handled by an external hardware peripheral'
        ],
        correctIndex: 1,
        explanation: 'In Python, types are bound to values (objects) in memory, not the variable names. A variable can hold an int and later be reassigned a string.'
      },
      {
        question: 'Which of the following is an INVALID variable name in Python?',
        options: ['_student_id', 'student_1', '1_student', 'studentId'],
        correctIndex: 2,
        explanation: 'Variable names cannot start with a numeric digit.'
      },
      {
        question: 'Which built-in function returns the type of any variable or object?',
        options: ['typeof()', 'type()', 'getClass()', 'varType()'],
        correctIndex: 1,
        explanation: 'type(obj) returns the data type / class of the supplied object.'
      },
      {
        question: 'What is the naming convention recommended by PEP 8 for Python variables and functions?',
        options: ['camelCase', 'PascalCase', 'snake_case', 'kebab-case'],
        correctIndex: 2,
        explanation: 'PEP 8 recommends snake_case (lowercase letters separated by underscores) for variables and functions.'
      },
      {
        question: 'What happens in Python when you execute: a = 5; a = "hello"?',
        options: [
          'Python throws a TypeError because an int cannot become a string',
          'Variable "a" is rebound to reference the new string object "hello" in memory',
          'The number 5 is converted to its ASCII character representation',
          'The script crashes with a MemoryFault'
        ],
        correctIndex: 1,
        explanation: 'Python variables are reference pointers. The name "a" simply points to the new string object; the previous integer 5 will be garbage collected.'
      }
    ],
    miniChallenge: {
      title: 'Swap Without Temp Variable',
      prompt: 'Swap the values of two variables a = 10 and b = 20 in a single line of Python code using tuple unpacking.',
      starterCode: 'a = 10\nb = 20\n# Swap in one line\nprint(f"a: {a}, b: {b}")\n',
      solution: 'a = 10\nb = 20\na, b = b, a\nprint(f"a: {a}, b: {b}") # a: 20, b: 10'
    }
  },
  {
    id: 'py-lesson-5',
    milestoneId: 'ms-python',
    order: 5,
    title: '5. Data Types (int, float, str, bool, None)',
    durationMinutes: 20,
    conceptExplanation: 'Python has built-in primitive scalar data types: integers (int, arbitrary precision), floating-point numbers (float, 64-bit IEEE 754), text sequences (str, Unicode), boolean truth values (bool: True/False), and the special null object (NoneType: None).',
    whyImportant: 'Accurate data type management prevents subtle casting bugs, overflows, and truncation errors in financial systems, numerical computing, and machine learning models.',
    syntax: `# Standard types
x = 100            # int
pi = 3.14159       # float
msg = "Build Yourself"    # str
is_valid = True    # bool
empty_val = None   # NoneType

# Type casting:
int_val = int("250")
float_val = float(10)
str_val = str(45.9)`,
    exampleDescription: 'Inspecting scalar types, casting between numeric and string representations, and checking truthiness.',
    codeSnippet: `price_str = "149.99"
quantity_str = "3"

price = float(price_str)
quantity = int(quantity_str)
subtotal = price * quantity

has_discount = subtotal > 300.0
discount = subtotal * 0.15 if has_discount else 0.0
final_bill = subtotal - discount

print(f"Subtotal: \${subtotal:.2f}")
print(f"Discount Applied: {has_discount} (-\${discount:.2f})")
print(f"Final Bill: \${final_bill:.2f}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-2: String representations of numbers received from an API or database query.',
      'Line 4-5: Explicit type casting: float() and int() convert the strings to numeric types.',
      'Line 6: Performing mathematical multiplication on numeric types.',
      'Line 8: Boolean condition evaluating if subtotal exceeds 300.0.',
      'Line 9: Ternary conditional expression calculating discount.',
      'Line 12-14: Formatted strings displaying currency formatted to two decimal places.'
    ],
    realWorldExample: 'When parsing CSV records or JSON payloads from web APIs, numbers often arrive as string strings ("3.5"); casting to appropriate types is the first step in every data cleaning pipeline.',
    commonMistakes: [
      {
        mistake: 'Trying to add a string and an integer directly: "Age: " + 25, resulting in TypeError.',
        fix: 'Use an f-string: f"Age: {25}" or explicitly convert the integer: "Age: " + str(25).'
      }
    ],
    practiceExercises: [
      {
        task: 'Cast the string "42.8" into a float, then cast that float into an int. Observe what happens to the decimal part.',
        hint: 'int(float("42.8")) truncates decimals towards zero.',
        solutionSnippet: 'val_str = "42.8"\\nval_float = float(val_str)\\nval_int = int(val_float)\\nprint(f"Float: {val_float}, Truncated Int: {val_int}")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the data type of the result of: 10 / 2 in Python 3?',
        options: ['int', 'float', 'decimal', 'double'],
        correctIndex: 1,
        explanation: 'In Python 3, the single slash division operator (/) always returns a float (5.0).'
      },
      {
        question: 'How do you perform integer (floor) division in Python?',
        options: ['//', '%', 'div()', '\\'],
        correctIndex: 0,
        explanation: 'The double slash operator (//) performs floor division, returning the quotient without decimals (e.g. 10 // 3 = 3).'
      },
      {
        question: 'What is the boolean evaluation of bool(0) and bool("") in Python?',
        options: [
          'True and True',
          'False and False',
          'True and False',
          'Error: strings cannot be evaluated as boolean'
        ],
        correctIndex: 1,
        explanation: 'In Python, zero (0, 0.0), empty strings (""), empty collections ([], {}), and None are "falsy" and evaluate to False.'
      },
      {
        question: 'What object represents the absence of a value in Python?',
        options: ['null', 'nil', 'None', 'undefined'],
        correctIndex: 2,
        explanation: 'Python uses the singleton keyword None (of type NoneType) to represent absence of value.'
      },
      {
        question: 'What happens when executing int("3.14") directly in Python?',
        options: [
          'It returns 3',
          'It returns 3.0',
          'It raises a ValueError: invalid literal for int() with base 10',
          'It rounds to 4'
        ],
        correctIndex: 2,
        explanation: 'int() cannot directly convert a string containing a decimal point. You must first convert it to a float: int(float("3.14")).'
      }
    ],
    miniChallenge: {
      title: 'Type Validator & Safe Summer',
      prompt: 'Write a function or snippet that takes a mixed input and returns its numeric sum if valid, handling strings gracefully.',
      starterCode: 'raw_inputs = ["10.5", "20", "5.25"]\n# Calculate total sum as float\n',
      solution: 'raw_inputs = ["10.5", "20", "5.25"]\ntotal = sum(float(x) for x in raw_inputs)\nprint(f"Total: {total:.2f}") # Total: 35.75'
    }
  },
  {
    id: 'py-lesson-6',
    milestoneId: 'ms-python',
    order: 6,
    title: '6. Input and Output (print, input, f-strings)',
    durationMinutes: 18,
    conceptExplanation: 'Input and output (I/O) allow programs to communicate with users and external streams. input() captures text from standard input (always returned as a string), and print() outputs formatted representations to standard output.',
    whyImportant: 'Building command-line utilities, logging progress of long-running machine learning training loops, and formatting user reports all rely on robust I/O techniques.',
    syntax: `# Reading input:
user_entry = input("Prompt message: ")

# Outputting with f-strings (formatted string literals):
name = "Ada"
accuracy = 0.9654
print(f"Model: {name} | Accuracy: {accuracy:.2%}")`,
    exampleDescription: 'Formatting metrics with precision specifiers, alignment, and separator parameters.',
    codeSnippet: `model_name = "GradientBoostingClassifier"
train_acc = 0.94523
test_acc = 0.91287
epochs = 100

print(f"{'Metric':<15} | {'Value':>10}")
print("-" * 28)
print(f"{'Model':<15} | {model_name:>10}")
print(f"{'Epochs':<15} | {epochs:>10d}")
print(f"{'Train Accuracy':<15} | {train_acc:>10.2%}")
print(f"{'Test Accuracy':<15} | {test_acc:>10.2%}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-4: Define training experiment variables.',
      'Line 6: Uses format specifier <15 for left alignment in 15 characters, and >10 for right alignment.',
      'Line 7: String multiplication ("-" * 28) generates a horizontal dividing line of 28 hyphens.',
      'Line 10-11: Format specifier .2% converts decimal fractions (0.945) into percentage notation with two decimal places (94.52%).'
    ],
    realWorldExample: 'CLI tools and PyTorch/TensorFlow training loops output real-time training loss and validation metrics using formatted print lines.',
    commonMistakes: [
      {
        mistake: 'Assuming input() returns a number when the user types digits, e.g. age = input("Age: "); next_age = age + 1.',
        fix: 'input() ALWAYS returns a string. Wrap it in int() or float(): age = int(input("Age: ")).'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a script that formats a currency receipt with Item name left-aligned and price right-aligned with a dollar sign.',
        hint: 'Use f"{item:<20} \${price:>8.2f}"',
        solutionSnippet: 'item = "Cloud Server"\\nprice = 49.9\\nprint(f"{item:<20} \${price:>8.2f}")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the return data type of the input() function in Python 3?',
        options: ['int', 'str', 'any', 'object'],
        correctIndex: 1,
        explanation: 'input() always reads input as a string (str), regardless of whether the user types text or numbers.'
      },
      {
        question: 'What prefix is used to designate an f-string in Python 3.6+?',
        options: ['s"..."', 'f"..."', 'r"..."', 'b"..."'],
        correctIndex: 1,
        explanation: 'f"..." or F"..." denotes a formatted string literal that evaluates expressions inside curly braces {}.'
      },
      {
        question: 'How do you format a float 0.8523 to display as 85.2% using an f-string?',
        options: ['f"{0.8523:%}"', 'f"{0.8523:.1%}"', 'f"{0.8523:percent}"', 'f"{0.8523 * 100}%"'],
        correctIndex: 1,
        explanation: 'The format specifier .1% multiplies by 100, rounds to 1 decimal place, and appends the % symbol.'
      },
      {
        question: 'What does the print() function parameter "end" do?',
        options: [
          'Terminates the program after printing',
          'Specifies what character to print at the end instead of the default newline (\\n)',
          'Forces printing to the end of the console buffer',
          'Prints in reverse'
        ],
        correctIndex: 1,
        explanation: 'By default, print() has end="\\n". You can change it to end=" " or end="" to print on the same line.'
      },
      {
        question: 'What does the print() parameter "sep" control?',
        options: [
          'The separator placed between multiple arguments passed to print()',
          'The separation of code blocks',
          'The file system path separator',
          'The string encoding format'
        ],
        correctIndex: 0,
        explanation: 'For example, print("A", "B", "C", sep="-") outputs "A-B-C".'
      }
    ],
    miniChallenge: {
      title: 'Formatted KPI Card',
      prompt: 'Format a company KPI card with revenue of 1425890.75 displayed with comma thousands separators and 2 decimal places.',
      starterCode: 'revenue = 1425890.75\n# Print revenue formatted as $1,425,890.75\n',
      solution: 'revenue = 1425890.75\nprint(f"Q3 Revenue: ${revenue:,.2f}")'
    }
  },
  {
    id: 'py-lesson-7',
    milestoneId: 'ms-python',
    order: 7,
    title: '7. Operators (Arithmetic, Comparison, Logical, Bitwise)',
    durationMinutes: 20,
    conceptExplanation: 'Operators are special symbols that perform computations on operands. Python provides arithmetic (+, -, *, /, //, %, **), comparison (==, !=, <, >, <=, >=), logical (and, or, not), identity (is, is not), and membership (in, not in) operators.',
    whyImportant: 'Operators form the core calculation engine of all algorithmic decision-making, statistical calculations, and database filtering criteria.',
    syntax: `# Arithmetic:
power = 2 ** 8       # 256
modulo = 17 % 5      # 2 (remainder)
floor_div = 17 // 5  # 3

# Comparison & Logical:
is_eligible = (age >= 21) and (score > 80)
is_admin = is_superuser or (role == 'admin')`,
    exampleDescription: 'Computing compound interest and validating account permissions with logical and identity operators.',
    codeSnippet: `principal = 10000.0
annual_rate = 0.07
years = 5

compound_amount = principal * ((1 + annual_rate) ** years)
profit = compound_amount - principal

is_profitable = profit > 0
is_target_met = (profit >= 4000) and (profit / principal >= 0.40)

print(f"Initial: \${principal:,.2f} | Final: \${compound_amount:,.2f}")
print(f"Profit: \${profit:,.2f}")
print(f"Target Met: {is_target_met}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-3: Assigning financial calculation variables.',
      'Line 5: Using exponentiation operator ** to raise (1 + annual_rate) to the power of years.',
      'Line 6: Arithmetic subtraction computing net profit.',
      'Line 8: Comparison operator > yielding boolean True/False.',
      'Line 9: Logical and operator combining two comparison predicates.'
    ],
    realWorldExample: 'In quantitative trading algorithms, logical operators check whether multiple technical indicators (RSI < 30 and MovingAverage_50 > MovingAverage_200) agree before placing an order.',
    commonMistakes: [
      {
        mistake: 'Confusing the assignment operator (=) with the equality comparison operator (==).',
        fix: 'Use = to store a value into a variable; use == to test if two values are equal.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write an expression that checks if a number is both even and greater than 50.',
        hint: '(num % 2 == 0) and (num > 50)',
        solutionSnippet: 'num = 64\\nis_even_and_large = (num % 2 == 0) and (num > 50)\\nprint("Result:", is_even_and_large)'
      }
    ],
    quizQuestions: [
      {
        question: 'Which operator raises a number to a power in Python?',
        options: ['^', '**', '^^', 'pow'],
        correctIndex: 1,
        explanation: 'In Python, ** is the exponentiation operator (e.g. 2 ** 3 = 8). Note that ^ is bitwise XOR.'
      },
      {
        question: 'What is the result of 15 % 4 in Python?',
        options: ['3', '3.75', '3.0', '1'],
        correctIndex: 0,
        explanation: '15 divided by 4 is 3 with a remainder of 3. The modulo operator (%) returns the remainder: 3.'
      },
      {
        question: 'What is the difference between "==" and "is" in Python?',
        options: [
          'They are identical synonyms',
          '"==" checks value equality; "is" checks object identity (same memory address)',
          '"is" is for numbers, "==" is for strings',
          '"==" is deprecated in Python 3'
        ],
        correctIndex: 1,
        explanation: 'a == b checks if values are equal. a is b checks if both variables point to the exact same object in memory (id(a) == id(b)).'
      },
      {
        question: 'What is the result of: True or False and False (considering operator precedence)?',
        options: ['False', 'True', 'None', 'SyntaxError'],
        correctIndex: 1,
        explanation: '"and" has higher precedence than "or". False and False is False. Then True or False evaluates to True.'
      },
      {
        question: 'Which operator tests for membership inside a sequence (like a list or string)?',
        options: ['has', 'contains', 'in', 'within'],
        correctIndex: 2,
        explanation: 'The "in" operator checks whether an element exists within a collection or substring exists in a string.'
      }
    ],
    miniChallenge: {
      title: 'Leap Year Evaluator',
      prompt: 'Write a boolean logic expression that evaluates if a year is a leap year (divisible by 4, but not by 100 unless also divisible by 400).',
      starterCode: 'year = 2024\n# Calculate is_leap\n',
      solution: 'year = 2024\nis_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)\nprint(f"Is {year} a leap year? {is_leap}")'
    }
  },
  {
    id: 'py-lesson-8',
    milestoneId: 'ms-python',
    order: 8,
    title: '8. Conditional Statements (if, elif, else)',
    durationMinutes: 18,
    conceptExplanation: 'Conditional statements direct the flow of execution based on boolean predicates. The if statement tests a condition; optional elif (short for else if) clauses test secondary conditions; and the optional else clause acts as a default fallback.',
    whyImportant: 'Branching logic is essential for data validation, handling edge cases, implementing business rules, and error handling.',
    syntax: `if condition_1:
    execute_branch_1()
elif condition_2:
    execute_branch_2()
else:
    execute_fallback()`,
    exampleDescription: 'Credit risk categorization engine assigning loan risk tiers based on applicant credit scores and debt-to-income ratios.',
    codeSnippet: `credit_score = 735
debt_to_income = 0.28

if credit_score >= 750 and debt_to_income < 0.35:
    risk_tier = "Tier 1: Prime"
    interest_rate = 4.5
elif credit_score >= 680 and debt_to_income < 0.43:
    risk_tier = "Tier 2: Near Prime"
    interest_rate = 6.2
elif credit_score >= 620:
    risk_tier = "Tier 3: Subprime"
    interest_rate = 9.8
else:
    risk_tier = "Tier 4: Declined"
    interest_rate = None

print(f"Risk Evaluation: {risk_tier}")
if interest_rate:
    print(f"Approved Interest Rate: {interest_rate}%")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-2: Input parameters for applicant profile.',
      'Line 4: Evaluates first tier with combined boolean criteria.',
      'Line 7: If first condition was False, evaluates secondary criteria.',
      'Line 10: Tertiary check for minimum score threshold.',
      'Line 13: Fallback branch executed if all prior tests were False.',
      'Line 18: Conditional check verifying that interest_rate is not None before printing.'
    ],
    realWorldExample: 'Fraud detection algorithms evaluate real-time credit card transactions against risk scores, deciding whether to auto-approve, flag for two-factor verification, or decline.',
    commonMistakes: [
      {
        mistake: 'Using multiple independent "if" statements instead of "if...elif...else", causing multiple branches to trigger unintentionally.',
        fix: 'Use elif when branches are mutually exclusive so execution stops as soon as the first match is found.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a grade calculator: 90+ -> A, 80-89 -> B, 70-79 -> C, below 70 -> Needs Improvement.',
        hint: 'Use if score >= 90: ... elif score >= 80: ...',
        solutionSnippet: 'score = 84\\nif score >= 90:\\n    print("A")\\nelif score >= 80:\\n    print("B")\\nelif score >= 70:\\n    print("C")\\nelse:\\n    print("Needs Improvement")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the keyword for "else if" in Python?',
        options: ['elseif', 'else if', 'elif', 'elsif'],
        correctIndex: 2,
        explanation: 'Python uses "elif" as the contracted keyword for else-if.'
      },
      {
        question: 'How many "elif" blocks can follow an "if" statement?',
        options: ['Only 1', 'Up to 3', 'As many as needed (unlimited)', 'None'],
        correctIndex: 2,
        explanation: 'You can chain as many elif blocks as needed to evaluate sequential conditions.'
      },
      {
        question: 'Is the "else" block mandatory in an if statement?',
        options: [
          'Yes, Python requires an else for every if',
          'No, the else block is optional',
          'Only if using Python 3',
          'Yes, unless you use a pass keyword'
        ],
        correctIndex: 1,
        explanation: 'An else block is completely optional. If omitted and no condition matches, execution simply continues past the if statement.'
      },
      {
        question: 'What is Python\'s syntax for a ternary conditional expression?',
        options: [
          'condition ? x : y',
          'x if condition else y',
          'if condition then x else y',
          'x ? condition : y'
        ],
        correctIndex: 1,
        explanation: 'Python uses the inline ternary syntax: <value_if_true> if <condition> else <value_if_false>.'
      },
      {
        question: 'What is the placeholder keyword used when a code block is syntactically required but you want to do nothing?',
        options: ['continue', 'null', 'pass', 'empty'],
        correctIndex: 2,
        explanation: 'The pass keyword is a null operation; nothing happens when it executes, preventing IndentationErrors for empty blocks.'
      }
    ],
    miniChallenge: {
      title: 'Baggage Fee Calculator',
      prompt: 'Write a conditional calculator: luggage <= 20kg is free ($0), 21-30kg is $30, and >30kg is $30 plus $5 per kg over 30kg.',
      starterCode: 'weight = 34\n# Calculate fee\n',
      solution: 'weight = 34\nif weight <= 20:\n    fee = 0\nelif weight <= 30:\n    fee = 30\nelse:\n    fee = 30 + (weight - 30) * 5\nprint(f"Weight: {weight}kg | Excess Baggage Fee: ${fee}")'
    }
  },
  {
    id: 'py-lesson-9',
    milestoneId: 'ms-python',
    order: 9,
    title: '9. for Loops & range()',
    durationMinutes: 20,
    conceptExplanation: 'A for loop in Python iterates over members of any sequence or iterable (such as a list, string, tuple, dictionary, or range generator). The built-in range(start, stop, step) function produces an arithmetic progression of integers efficiently.',
    whyImportant: 'For loops are the primary mechanism for traversing data records, iterating through model epochs, and batching matrix computations.',
    syntax: `# Basic sequence iteration:
for item in collection:
    process(item)

# Numeric range iteration:
for i in range(start, stop, step):
    print(i)`,
    exampleDescription: 'Processing simulated sensor readings, computing running totals, and using enumerate() to track indices.',
    codeSnippet: `temperatures = [22.4, 23.1, 21.8, 24.5, 25.0, 22.9]
total_temp = 0.0

print("Sensor Reading Log:")
for index, temp in enumerate(temperatures, start=1):
    total_temp += temp
    status = "WARNING: HIGH" if temp >= 24.0 else "NORMAL"
    print(f"Reading #{index}: {temp}°C -> {status}")

avg_temp = total_temp / len(temperatures)
print(f"\\nAverage Temperature: {avg_temp:.2f}°C")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: A Python list storing float values.',
      'Line 5: enumerate() wraps the list, yielding both index counter and value on each iteration.',
      'Line 6: Accumulating running total with addition assignment operator +=.',
      'Line 7: Ternary operator classifying temperature.',
      'Line 10: Computing mean temperature after loop completion.'
    ],
    realWorldExample: 'Iterating over batches of training images in machine learning: for batch_idx, (data, targets) in enumerate(train_loader): ...',
    commonMistakes: [
      {
        mistake: 'Forgetting that range(start, stop) is non-inclusive of the "stop" boundary (e.g. range(0, 5) stops at 4).',
        fix: 'If you need to include 5, write range(0, 6).'
      }
    ],
    practiceExercises: [
      {
        task: 'Use a for loop and range() to calculate the sum of all odd numbers between 1 and 20.',
        hint: 'Use range(1, 21, 2) which steps by 2.',
        solutionSnippet: 'total = sum(i for i in range(1, 21, 2))\\nprint("Sum of odds:", total)'
      }
    ],
    quizQuestions: [
      {
        question: 'What integers are generated by range(2, 8, 2)?',
        options: ['[2, 3, 4, 5, 6, 7, 8]', '[2, 4, 6, 8]', '[2, 4, 6]', '[4, 6, 8]'],
        correctIndex: 2,
        explanation: 'range(2, 8, 2) starts at 2, steps by 2, and stops before reaching 8: [2, 4, 6].'
      },
      {
        question: 'Which built-in function returns both the current index and the element during a loop?',
        options: ['index()', 'counter()', 'enumerate()', 'zip()'],
        correctIndex: 2,
        explanation: 'enumerate(iterable, start=0) yields (index, item) tuples on each iteration.'
      },
      {
        question: 'Which function allows you to iterate over two or more lists simultaneously in parallel?',
        options: ['merge()', 'parallel()', 'zip()', 'combine()'],
        correctIndex: 2,
        explanation: 'zip(list_a, list_b) pairs elements from two or more iterables together.'
      },
      {
        question: 'Does range() allocate all numbers in computer memory simultaneously in Python 3?',
        options: [
          'Yes, it creates a full list in RAM',
          'No, it returns a lazy range object that generates numbers on demand',
          'Only for numbers less than 1,000',
          'Only in virtual environments'
        ],
        correctIndex: 1,
        explanation: 'In Python 3, range() is a generator-like sequence object that uses fixed tiny memory regardless of range size.'
      },
      {
        question: 'Can you iterate backwards using range()?',
        options: [
          'No, range() only moves forward',
          'Yes, by specifying a negative step (e.g. range(10, 0, -1))',
          'Only by converting to a list first',
          'Only with while loops'
        ],
        correctIndex: 1,
        explanation: 'A negative step (e.g. range(10, 0, -1)) iterates backwards from 10 down to 1.'
      }
    ],
    miniChallenge: {
      title: 'Factorial Calculator',
      prompt: 'Calculate the factorial of n = 6 using a for loop (6! = 6 * 5 * 4 * 3 * 2 * 1 = 720).',
      starterCode: 'n = 6\nfact = 1\n# Compute factorial with for loop\n',
      solution: 'n = 6\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\nprint(f"{n}! = {fact}")'
    }
  },
  {
    id: 'py-lesson-10',
    milestoneId: 'ms-python',
    order: 10,
    title: '10. while Loops',
    durationMinutes: 18,
    conceptExplanation: 'A while loop repeatedly executes an indented block of code as long as a specified boolean condition evaluates to True. Unlike for loops that iterate over a predetermined sequence, while loops are condition-driven.',
    whyImportant: 'While loops are used when the number of iterations is not known in advance, such as waiting for network connections, polling message queues, running interactive user menus, or convergence in iterative numerical algorithms (e.g. Gradient Descent).',
    syntax: `while condition:
    execute_step()
    update_condition()`,
    exampleDescription: 'Simulating an iterative optimization convergence loop where loss decreases until reaching a tolerance threshold.',
    codeSnippet: `current_loss = 2.50
learning_rate = 0.85
tolerance = 0.05
step = 0

print("Optimization loop started:")
while current_loss > tolerance:
    step += 1
    current_loss *= learning_rate
    print(f"Step {step:02d} | Loss: {current_loss:.4f}")

print(f"\\nConvergence achieved at step {step} with loss: {current_loss:.4f}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-4: Initializes training optimization parameters.',
      'Line 7: The while loop condition checks if current_loss is still above tolerance.',
      'Line 8: Increments step count.',
      'Line 9: Decreases loss by multiplying with decay factor.',
      'Line 12: Loop terminates automatically once loss drops below 0.05.'
    ],
    realWorldExample: 'Database connection retry logic: attempts to reconnect to a PostgreSQL or MongoDB cluster up to 5 times with exponential backoff if the network drops.',
    commonMistakes: [
      {
        mistake: 'Forgetting to increment or update the loop variable, causing an infinite loop that freezes your application.',
        fix: 'Ensure the variable tested in the while condition is modified on every iteration.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a while loop that doubles a number starting at 1 until it exceeds 1000, and count the iterations.',
        hint: 'val = 1; count = 0; while val <= 1000: val *= 2; count += 1',
        solutionSnippet: 'val = 1\\ncount = 0\\nwhile val <= 1000:\\n    val *= 2\\n    count += 1\\nprint(f"Final value: {val}, Doublings: {count}")'
      }
    ],
    quizQuestions: [
      {
        question: 'When should you prefer a while loop over a for loop?',
        options: [
          'When you already have a predefined list of elements',
          'When the number of iterations depends on a dynamic condition rather than a fixed sequence',
          'When you want the code to run faster',
          'While loops are deprecated in modern Python'
        ],
        correctIndex: 1,
        explanation: 'While loops excel at condition-based iteration where termination depends on runtime events.'
      },
      {
        question: 'What is an "infinite loop"?',
        options: [
          'A loop that calculates infinity',
          'A loop whose condition never becomes False, running endlessly until terminated manually',
          'A loop with more than 1,000,000 items',
          'A loop that runs on quantum computers'
        ],
        correctIndex: 1,
        explanation: 'If a while condition never becomes False (or lacks a break statement), the loop runs indefinitely.'
      },
      {
        question: 'How do you safely write an intentional infinite loop in Python?',
        options: ['while 1 == 1:', 'while True:', 'loop():', 'for infinite:'],
        correctIndex: 1,
        explanation: 'while True: is the standard idiom in Python for a loop that runs continuously until a break condition occurs.'
      },
      {
        question: 'Can a while loop in Python have an "else" clause?',
        options: [
          'No, else is only for if statements',
          'Yes, the else block runs when the loop condition becomes False naturally (not via break)',
          'Yes, but only in Python 2',
          'Only if the loop contains a try-except block'
        ],
        correctIndex: 1,
        explanation: 'In Python, while...else executes the else block when the loop condition evaluates to False without encountering a break.'
      },
      {
        question: 'What keyboard shortcut terminates an infinite loop running in the terminal?',
        options: ['Ctrl + Z', 'Ctrl + C', 'Alt + F4', 'Ctrl + S'],
        correctIndex: 1,
        explanation: 'Ctrl + C sends a SIGINT (KeyboardInterrupt) signal to terminate running Python processes.'
      }
    ],
    miniChallenge: {
      title: 'Countdown Timer Simulation',
      prompt: 'Write a while loop that counts down from 5 to 1, then prints "Liftoff!".',
      starterCode: 'count = 5\n# While loop countdown\n',
      solution: 'count = 5\nwhile count > 0:\n    print(f"T-minus {count}...")\n    count -= 1\nprint("Liftoff! Rocket launched successfully.")'
    }
  },
  {
    id: 'py-lesson-11',
    milestoneId: 'ms-python',
    order: 11,
    title: '11. break, continue & pass',
    durationMinutes: 18,
    conceptExplanation: 'Loop control statements alter execution from its normal sequence: break terminates the loop immediately; continue skips the remainder of the current iteration and jumps to the next; and pass is a null placeholder statement.',
    whyImportant: 'Fine-grained loop control prevents unnecessary computations (e.g. stopping a search early when a record is found) and skips corrupt or invalid data records cleanly.',
    syntax: `# break:
for item in items:
    if is_found(item):
        break  # exits loop

# continue:
for item in items:
    if is_invalid(item):
        continue  # skips to next item

# pass:
if pending_feature:
    pass  # do nothing for now`,
    exampleDescription: 'Processing a transaction batch: skipping malformed transactions with continue and breaking early on a critical security breach.',
    codeSnippet: `transactions = [
    {"id": 1, "amount": 120.0, "status": "valid"},
    {"id": 2, "amount": -50.0, "status": "corrupt"},
    {"id": 3, "amount": 2500.0, "status": "valid"},
    {"id": 4, "amount": 999999.0, "status": "SUSPICIOUS_FRAUD"},
    {"id": 5, "amount": 35.0, "status": "valid"}
]

processed_total = 0.0

for tx in transactions:
    if tx["status"] == "corrupt":
        print(f"Skipping corrupt record #{tx['id']}")
        continue

    if tx["status"] == "SUSPICIOUS_FRAUD":
        print(f"EMERGENCY: Fraud detected in tx #{tx['id']}! Terminating batch immediately.")
        break

    processed_total += tx["amount"]
    print(f"Processed tx #{tx['id']}: \${tx['amount']}")

print(f"\\nBatch Summary: Total Processed = \${processed_total}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-7: List of transaction dictionaries.',
      'Line 11-13: continue statement skips negative/corrupt transaction #2 without adding to total.',
      'Line 15-17: break statement halts the loop immediately upon encountering fraud alert in transaction #4.',
      'Line 22: Displays total accumulated prior to the break.'
    ],
    realWorldExample: 'In web scraping, continue skips pages that return HTTP 404, while break halts the crawler if rate-limited by the server.',
    commonMistakes: [
      {
        mistake: 'Using return instead of break inside a loop that is not inside a function, causing a SyntaxError: \'return\' outside function.',
        fix: 'Use break to exit loops; return is exclusively used to exit functions.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a loop from 1 to 20 that prints numbers, but skips multiples of 3 using continue, and stops completely if the number reaches 16 using break.',
        hint: 'if i % 3 == 0: continue; if i == 16: break',
        solutionSnippet: 'for i in range(1, 21):\\n    if i % 3 == 0: continue\\n    if i == 16: break\\n    print(i, end=" ")'
      }
    ],
    quizQuestions: [
      {
        question: 'What does the "break" statement do inside a loop?',
        options: [
          'Pauses the program for 1 second',
          'Skips the current iteration and goes to the next',
          'Exits the nearest enclosing loop completely',
          'Throws an exception'
        ],
        correctIndex: 2,
        explanation: 'break terminates execution of the nearest enclosing for or while loop immediately.'
      },
      {
        question: 'What does the "continue" statement do inside a loop?',
        options: [
          'Exits the loop',
          'Skips the rest of the current iteration and jumps to the next cycle of the loop',
          'Restarts the computer',
          'Re-executes the current line'
        ],
        correctIndex: 1,
        explanation: 'continue skips any remaining code inside the loop body for the current element and advances to the next iteration.'
      },
      {
        question: 'What is the purpose of the "pass" keyword?',
        options: [
          'Marks a test as passing',
          'Acts as a syntactical placeholder where code is expected but no action is required',
          'Transfers variables between functions',
          'Skips the next line of code'
        ],
        correctIndex: 1,
        explanation: 'pass is a null statement used to define empty functions, classes, or conditional branches without syntax errors.'
      },
      {
        question: 'In nested loops, what does a "break" statement exit?',
        options: [
          'All loops simultaneously',
          'Only the innermost loop where the break is located',
          'The outermost loop',
          'The containing module'
        ],
        correctIndex: 1,
        explanation: 'break only terminates the single innermost loop that directly encloses it.'
      },
      {
        question: 'Will the "else" clause of a for loop run if the loop was exited via a "break" statement?',
        options: [
          'Yes, always',
          'No, the loop\'s else clause only executes if the loop completed naturally without break',
          'Only in while loops',
          'Only if an exception occurred'
        ],
        correctIndex: 1,
        explanation: 'The loop else block is skipped whenever the loop terminates via break.'
      }
    ],
    miniChallenge: {
      title: 'First Prime Search',
      prompt: 'Use a for loop with break to find and print the first number greater than 100 that is divisible by both 7 and 13.',
      starterCode: 'for num in range(101, 1000):\n    # Find first number divisible by 7 and 13\n    pass\n',
      solution: 'for num in range(101, 1000):\n    if num % 7 == 0 and num % 13 == 0:\n        print(f"Found first match: {num}")\n        break'
    }
  },
  {
    id: 'py-lesson-12',
    milestoneId: 'ms-python',
    order: 12,
    title: '12. Functions (def, return & Scope)',
    durationMinutes: 22,
    conceptExplanation: 'A function is a reusable, self-contained block of code designed to perform a specific task. In Python, functions are defined using the "def" keyword, receive inputs via parameters, execute logic, and return output via the "return" keyword.',
    whyImportant: 'Functions embody the DRY (Don\'t Repeat Yourself) principle. Modularity, unit testing, and building production machine learning pipelines are impossible without functions.',
    syntax: `def function_name(parameter_1, parameter_2):
    """Docstring explaining function purpose."""
    result = parameter_1 + parameter_2
    return result

# Calling the function:
output = function_name(10, 20)`,
    exampleDescription: 'Writing a statistical z-score normalization function with type annotations and docstrings.',
    codeSnippet: `def normalize_z_score(value: float, mean: float, std_dev: float) -> float:
    """Calculates the standard Z-score of an observation.
    
    Formula: z = (x - mu) / sigma
    """
    if std_dev <= 0:
        raise ValueError("Standard deviation must be strictly positive.")
    
    z_score = (value - mean) / std_dev
    return z_score

# Sample usage
sensor_val = 118.5
dataset_mean = 100.0
dataset_std = 15.0

z = normalize_z_score(sensor_val, dataset_mean, dataset_std)
print(f"Observation: {sensor_val} | Z-Score: {z:.2f} standard deviations from mean")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: def keyword declares function normalize_z_score with type hints (: float).',
      'Line 2-5: Multi-line docstring explaining the mathematical formula.',
      'Line 6-7: Guard clause checking for invalid zero or negative standard deviation.',
      'Line 9: Computing the standardized score.',
      'Line 10: return statement passing the computed value back to the caller.',
      'Line 17: Invoking the function and storing the returned result into variable z.'
    ],
    realWorldExample: 'Preprocessing features in Scikit-Learn custom transformers: functions transform raw date columns into day_of_week and is_weekend booleans.',
    commonMistakes: [
      {
        mistake: 'Forgetting the return statement: a function without return implicitly returns None.',
        fix: 'Ensure your function ends with return <value> if you intend to capture its result.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a function calculate_bmi(weight_kg, height_m) that returns the Body Mass Index: weight / (height ** 2).',
        hint: 'return weight_kg / (height_m ** 2)',
        solutionSnippet: 'def calculate_bmi(weight: float, height: float) -> float:\\n    return weight / (height ** 2)\\nprint("BMI:", round(calculate_bmi(70, 1.75), 2))'
      }
    ],
    quizQuestions: [
      {
        question: 'Which keyword defines a function in Python?',
        options: ['function', 'func', 'def', 'fn'],
        correctIndex: 2,
        explanation: 'In Python, def (short for define) is the keyword used to create functions.'
      },
      {
        question: 'What does a Python function return if it contains no return statement?',
        options: ['0', 'False', 'None', 'An empty string'],
        correctIndex: 2,
        explanation: 'Functions without an explicit return statement automatically return None upon reaching the end.'
      },
      {
        question: 'What is a "docstring" in Python?',
        options: [
          'A string describing the doctor who wrote the code',
          'A multi-line string placed immediately below the function header documenting its purpose and arguments',
          'An external Word document',
          'A comment that runs only on Windows'
        ],
        correctIndex: 1,
        explanation: 'Docstrings (enclosed in triple quotes """) document functions, classes, and modules, accessible via help() or obj.__doc__.'
      },
      {
        question: 'What is variable scope in Python?',
        options: [
          'The screen resolution of the IDE',
          'The region of a program where a variable is recognized and accessible (e.g. local vs global)',
          'The maximum number of variables allowed in a script',
          'The length of a variable name'
        ],
        correctIndex: 1,
        explanation: 'Variables defined inside a function are local to that function and cannot be accessed outside unless explicitly declared global.'
      },
      {
        question: 'Can a Python function return multiple values?',
        options: [
          'No, functions in all programming languages can only return 1 value',
          'Yes, by returning a tuple of values (e.g. return x, y, z)',
          'Only if they are of the same type',
          'Only through pointer arguments'
        ],
        correctIndex: 1,
        explanation: 'In Python, writing return a, b packages the values into a tuple, which the caller can unpack: x, y = my_func().'
      }
    ],
    miniChallenge: {
      title: 'Temperature Converter Function',
      prompt: 'Write a function celsius_to_fahrenheit(c) that converts Celsius to Fahrenheit using the formula (c * 9/5) + 32.',
      starterCode: 'def celsius_to_fahrenheit(c):\n    # Return Fahrenheit\n    pass\n',
      solution: 'def celsius_to_fahrenheit(c):\n    return (c * 9/5) + 32\nprint(f"25°C = {celsius_to_fahrenheit(25)}°F") # 77.0°F'
    }
  }
];
