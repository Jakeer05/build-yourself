import { CareerLesson } from '../../types';

export const pythonAdvancedLessons: CareerLesson[] = [
  {
    id: 'py-lesson-13',
    milestoneId: 'ms-python',
    order: 13,
    title: '13. Parameters, Arguments, *args & **kwargs',
    durationMinutes: 20,
    conceptExplanation: 'Python functions support positional arguments, keyword arguments, default parameters, variable positional arguments (*args), and variable keyword arguments (**kwargs). *args packs positional arguments into a tuple; **kwargs packs keyword arguments into a dictionary.',
    whyImportant: 'Frameworks like Scikit-Learn, PyTorch, and FastAPI rely heavily on **kwargs to pass hyperparameter dictionaries and configuration parameters dynamically.',
    syntax: `def configure_model(model_type, learning_rate=0.01, *args, **kwargs):
    print("Args:", args)
    print("Kwargs:", kwargs)`,
    exampleDescription: 'A flexible machine learning model initialization function accepting variable hyperparameters.',
    codeSnippet: `def train_experiment(model_name: str, epochs: int = 10, *metrics, **hyperparams):
    print(f"--- Launching Experiment: {model_name} ({epochs} epochs) ---")
    print(f"Tracking Metrics: {', '.join(metrics)}")
    print("Hyperparameters:")
    for key, val in hyperparams.items():
        print(f"  - {key}: {val}")
    return {"status": "SUCCESS", "loss": 0.042}

# Invocation
results = train_experiment(
    "XGBoostClassifier",
    50,
    "Accuracy", "F1-Score", "ROC-AUC",
    learning_rate=0.05,
    max_depth=6,
    subsample=0.8
)`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: model_name is required positional, epochs has a default value of 10, *metrics captures remaining positional arguments as a tuple, and **hyperparams captures keyword arguments as a dict.',
      'Line 3: Accessing the *metrics tuple.',
      'Line 5-6: Iterating through **hyperparams dictionary key-value pairs.',
      'Line 10-17: Calling the function with 3 metrics and 3 custom hyperparameters.'
    ],
    realWorldExample: 'In PyTorch, nn.Module.__init__(*args, **kwargs) uses *args and **kwargs to forward arbitrary tensor shapes and layer options to parent classes.',
    commonMistakes: [
      {
        mistake: 'Using a mutable default parameter (like def add_item(val, items=[]):), which causes shared state bugs across calls.',
        fix: 'Always use None as default: def add_item(val, items=None): if items is None: items = []'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a function sum_all(*numbers) that accepts any count of numeric arguments and returns their sum.',
        hint: 'return sum(numbers)',
        solutionSnippet: 'def sum_all(*numbers):\\n    return sum(numbers)\\nprint(sum_all(10, 20, 30, 40)) # 100'
      }
    ],
    quizQuestions: [
      {
        question: 'What data structure receives arguments passed to *args inside a function?',
        options: ['List', 'Tuple', 'Dictionary', 'Set'],
        correctIndex: 1,
        explanation: '*args packs variable positional arguments into an immutable tuple.'
      },
      {
        question: 'What data structure receives arguments passed to **kwargs inside a function?',
        options: ['List', 'Tuple', 'Dictionary', 'Generator'],
        correctIndex: 2,
        explanation: '**kwargs packs variable keyword arguments (key=value) into a dictionary.'
      },
      {
        question: 'Why should you never use a mutable object (like a list or dict) as a default parameter value in Python?',
        options: [
          'Python will refuse to execute the file',
          'The default object is created once when the function is defined and shared across all calls, causing unexpected side effects',
          'It slows down execution by 10x',
          'It is converted to a string automatically'
        ],
        correctIndex: 1,
        explanation: 'Default parameter values are evaluated once at definition time. Subsequent calls mutate the same shared instance.'
      },
      {
        question: 'In what order must function parameters be declared in Python?',
        options: [
          'kwargs, args, default, positional',
          'positional, default, *args, **kwargs',
          '*args, positional, **kwargs, default',
          'Any order is permissible'
        ],
        correctIndex: 1,
        explanation: 'Standard order: Positional parameters -> Default parameters -> *args -> Keyword-only parameters -> **kwargs.'
      },
      {
        question: 'How do you unpack a dictionary into keyword arguments when calling a function?',
        options: ['func(*dict)', 'func(&dict)', 'func(**dict)', 'func(dict.unpack())'],
        correctIndex: 2,
        explanation: 'The double star operator (**my_dict) unpacks key-value pairs into named keyword arguments.'
      }
    ],
    miniChallenge: {
      title: 'Config Merger Function',
      prompt: 'Write a function merge_configs(default_config, **overrides) that returns a new dictionary with defaults updated by overrides.',
      starterCode: 'def merge_configs(default_config, **overrides):\n    # Return merged dict\n    pass\n',
      solution: 'def merge_configs(default_config, **overrides):\n    result = default_config.copy()\n    result.update(overrides)\n    return result\nprint(merge_configs({"lr": 0.01, "batch": 32}, lr=0.001, optimizer="adam"))'
    }
  },
  {
    id: 'py-lesson-14',
    milestoneId: 'ms-python',
    order: 14,
    title: '14. Lists & List Methods',
    durationMinutes: 22,
    conceptExplanation: 'A list in Python is an ordered, mutable, heterogeneous collection enclosed in square brackets []. Lists support zero-based indexing, slicing ([start:stop:step]), and methods like append(), extend(), insert(), pop(), remove(), and sort().',
    whyImportant: 'Lists are the fundamental building blocks of all Python data structures, storing datasets, feature names, batches, and model evaluation histories.',
    syntax: `items = [10, "apple", True, 3.14]
items.append("banana")
items.pop(0)
sublist = items[1:3]`,
    exampleDescription: 'Performing common list operations: appending, filtering, slicing, and sorting numerical metrics.',
    codeSnippet: `metrics = [0.88, 0.94, 0.76, 0.98, 0.85]

# Adding new metric
metrics.append(0.92)

# Slicing top 3 after sorting in descending order
metrics.sort(reverse=True)
top_three = metrics[:3]

# Removing lowest outlier
lowest = metrics.pop()

print("All Metrics (Sorted):", metrics)
print("Top 3 Scores:", top_three)
print("Removed Lowest Score:", lowest)`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Defines a list of float numbers.',
      'Line 4: append() adds an element to the end of the list in O(1) amortized time.',
      'Line 7: sort(reverse=True) sorts the list in-place using Timsort.',
      'Line 8: Slice syntax [:3] retrieves elements from index 0 up to (not including) index 3.',
      'Line 11: pop() removes and returns the last element in O(1) time.'
    ],
    realWorldExample: 'Collecting batch loss values across training iterations into a losses list, then plotting them with matplotlib.',
    commonMistakes: [
      {
        mistake: 'Using my_list = my_list.sort(), which sets my_list to None because sort() sorts in-place and returns None.',
        fix: 'Either call my_list.sort() alone, or use sorted_list = sorted(my_list).'
      }
    ],
    practiceExercises: [
      {
        task: 'Create a list of numbers [5, 2, 9, 1, 7], add 4 to the end, sort it, and reverse it.',
        hint: 'Use append(4), sort(), and reverse() or sort(reverse=True).',
        solutionSnippet: 'nums = [5, 2, 9, 1, 7]\\nnums.append(4)\\nnums.sort(reverse=True)\\nprint(nums)'
      }
    ],
    quizQuestions: [
      {
        question: 'Are Python lists mutable or immutable?',
        options: ['Immutable', 'Mutable', 'Read-only', 'Thread-locked'],
        correctIndex: 1,
        explanation: 'Lists are mutable: you can add, remove, and modify elements in place without creating a new list.'
      },
      {
        question: 'What is the index of the first element in a Python list?',
        options: ['1', '0', '-1', 'None'],
        correctIndex: 1,
        explanation: 'Python lists use zero-based indexing (the first element is at index 0).'
      },
      {
        question: 'What does my_list[-1] access?',
        options: ['The first element', 'The last element', 'An empty index', 'Raises IndexError'],
        correctIndex: 1,
        explanation: 'Negative indexing counts backwards from the end (-1 is the last element).'
      },
      {
        question: 'What is the time complexity of appending an element to the end of a Python list (my_list.append(x))?',
        options: ['O(1) amortized', 'O(N) linear', 'O(log N)', 'O(N^2)'],
        correctIndex: 0,
        explanation: 'Appending to the end of a dynamic array takes O(1) amortized time.'
      },
      {
        question: 'What is the difference between append() and extend()?',
        options: [
          'They are identical',
          'append() adds its argument as a single element; extend() iterates over its argument and adds each item',
          'extend() only works on numbers',
          'append() creates a new list'
        ],
        correctIndex: 1,
        explanation: '[1, 2].append([3, 4]) results in [1, 2, [3, 4]], whereas [1, 2].extend([3, 4]) results in [1, 2, 3, 4].'
      }
    ],
    miniChallenge: {
      title: 'List Dedup & Sort',
      prompt: 'Write code that takes a list with duplicates [4, 1, 2, 4, 3, 2, 5] and returns a sorted list of unique numbers.',
      starterCode: 'raw = [4, 1, 2, 4, 3, 2, 5]\n# Return sorted unique list\n',
      solution: 'raw = [4, 1, 2, 4, 3, 2, 5]\nunique_sorted = sorted(list(set(raw)))\nprint(unique_sorted) # [1, 2, 3, 4, 5]'
    }
  },
  {
    id: 'py-lesson-15',
    milestoneId: 'ms-python',
    order: 15,
    title: '15. Tuples & Immutability',
    durationMinutes: 18,
    conceptExplanation: 'A tuple is an ordered, immutable collection enclosed in parentheses (). Once created, elements of a tuple cannot be modified, added, or removed. Because tuples are immutable, they are hashable and can be used as dictionary keys.',
    whyImportant: 'Tuples provide data integrity (write-protection for configuration settings, coordinates, model output dimensions) and consume less memory than lists.',
    syntax: `point = (10, 20)
single_item_tuple = (42,) # Note trailing comma
x, y = point  # Tuple unpacking`,
    exampleDescription: 'Storing image dimensions and model shapes using immutable tuples.',
    codeSnippet: `image_shape = (1920, 1080, 3) # width, height, channels

# Unpacking
width, height, channels = image_shape
pixel_count = width * height

print(f"Resolution: {width}x{height}")
print(f"Total Pixels per frame: {pixel_count:,}")
print(f"Channels: {channels} (RGB)")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Defines a 3-element tuple representing image shape.',
      'Line 4: Unpacks the tuple elements into three separate variables in one line.',
      'Line 5: Computes total pixels.',
      'Line 7-9: Displays formatted dimensions.'
    ],
    realWorldExample: 'In PyTorch and TensorFlow, tensor dimensions are always represented as tuples (e.g., tensor.shape is (batch_size, channels, height, width)).',
    commonMistakes: [
      {
        mistake: 'Trying to modify an element: my_tuple[0] = 5, causing TypeError: \'tuple\' object does not support item assignment.',
        fix: 'If you need to change elements, use a list instead of a tuple.'
      }
    ],
    practiceExercises: [
      {
        task: 'Define a tuple containing GPS coordinates (latitude, longitude, altitude), and unpack them into variables.',
        hint: 'coords = (37.7749, -122.4194, 15.0); lat, lon, alt = coords',
        solutionSnippet: 'coords = (37.7749, -122.4194, 15.0)\\nlat, lon, alt = coords\\nprint(f"Latitude: {lat}, Longitude: {lon}, Altitude: {alt}m")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the key difference between a list and a tuple in Python?',
        options: [
          'Lists use parentheses; tuples use square brackets',
          'Lists are mutable; tuples are immutable',
          'Tuples can only store numbers',
          'Lists are faster than tuples in all operations'
        ],
        correctIndex: 1,
        explanation: 'Tuples cannot be changed once created (immutable), whereas lists can be modified freely (mutable).'
      },
      {
        question: 'How do you create a tuple with a single element in Python?',
        options: ['(5)', '[5]', '(5,)', 'tuple(5)'],
        correctIndex: 2,
        explanation: 'A trailing comma (5,) is required to distinguish a single-element tuple from parenthesized arithmetic.'
      },
      {
        question: 'Can a tuple be used as a key in a Python dictionary?',
        options: [
          'No, only strings can be keys',
          'Yes, as long as all elements inside the tuple are themselves immutable (hashable)',
          'Only if the tuple has exactly 2 elements',
          'Only in Python 3.12+'
        ],
        correctIndex: 1,
        explanation: 'Dictionary keys must be hashable. Since tuples are immutable, they are hashable as long as their contents are hashable.'
      },
      {
        question: 'What happens if you attempt to append to a tuple (my_tuple.append(10))?',
        options: [
          'It creates a new tuple with the element added',
          'It raises an AttributeError: \'tuple\' object has no attribute \'append\'',
          'It converts the tuple to a list',
          'It silently ignores the append'
        ],
        correctIndex: 1,
        explanation: 'Tuples have no append, extend, or pop methods because they are immutable.'
      },
      {
        question: 'Which operation works on both lists and tuples?',
        options: ['sort()', 'pop()', 'Indexing (e.g. obj[0]) and slicing (obj[1:3])', 'append()'],
        correctIndex: 2,
        explanation: 'Indexing, slicing, len(), count(), and index() work identically across both sequences.'
      }
    ],
    miniChallenge: {
      title: 'Tuple Unpack with Asterisk',
      prompt: 'Unpack a tuple of scores (10, 20, 30, 40, 50) such that first = 10, middle = [20, 30, 40], and last = 50.',
      starterCode: 'scores = (10, 20, 30, 40, 50)\n# Unpack using first, *middle, last\n',
      solution: 'scores = (10, 20, 30, 40, 50)\nfirst, *middle, last = scores\nprint(f"First: {first}, Middle: {middle}, Last: {last}")'
    }
  },
  {
    id: 'py-lesson-16',
    milestoneId: 'ms-python',
    order: 16,
    title: '16. Sets & Set Operations',
    durationMinutes: 18,
    conceptExplanation: 'A set is an unordered, mutable collection of unique, hashable elements enclosed in curly braces {}. Sets automatically eliminate duplicate entries and provide high-performance mathematical set operations: union (|), intersection (&), difference (-), and symmetric difference (^).',
    whyImportant: 'Sets allow O(1) constant-time membership lookups ("item in my_set"), making them vastly faster than lists for deduplication and filtering large datasets.',
    syntax: `unique_ids = {101, 102, 103}
unique_ids.add(104)

# Set operations:
union_set = set_a | set_b
common_items = set_a & set_b
diff = set_a - set_b`,
    exampleDescription: 'Comparing customer cohorts between marketing channels to find overlapping and unique customers.',
    codeSnippet: `web_customers = {"user_101", "user_102", "user_103", "user_104"}
mobile_customers = {"user_103", "user_104", "user_105", "user_106"}

# Both channels (Intersection)
omnichannel = web_customers & mobile_customers

# All unique customers (Union)
all_customers = web_customers | mobile_customers

# Web-only customers (Difference)
web_only = web_customers - mobile_customers

print(f"Total Unique Customers: {len(all_customers)}")
print(f"Omnichannel Customers (Web & Mobile): {omnichannel}")
print(f"Web-Only Customers: {web_only}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-2: Sets defined using curly braces {}.',
      'Line 5: & operator computes the intersection (elements appearing in both sets).',
      'Line 8: | operator computes the union (all unique elements across both sets).',
      'Line 11: - operator computes set difference (elements in web_customers but NOT in mobile_customers).'
    ],
    realWorldExample: 'Fast duplicate removal from web scraping pipelines and verifying tag overlaps in content recommendation systems.',
    commonMistakes: [
      {
        mistake: 'Using empty curly braces empty_set = {} to create an empty set.',
        fix: '{} creates an empty dictionary. To create an empty set, use empty_set = set().'
      }
    ],
    practiceExercises: [
      {
        task: 'Find the skills present in job_requirements that are missing from candidate_skills using set difference.',
        hint: 'missing = set(requirements) - set(candidate_skills)',
        solutionSnippet: 'reqs = {"Python", "SQL", "Docker", "AWS"}\\ncandidate = {"Python", "SQL"}\\nmissing = reqs - candidate\\nprint("Skills to acquire:", missing)'
      }
    ],
    quizQuestions: [
      {
        question: 'Can a Python set contain duplicate values?',
        options: [
          'Yes, up to 2 duplicates',
          'No, sets automatically discard duplicate values',
          'Only if sorted',
          'Only for string values'
        ],
        correctIndex: 1,
        explanation: 'Sets are strictly unique collections. Inserting a duplicate element is a no-op.'
      },
      {
        question: 'How do you create an empty set in Python?',
        options: ['{}', '[]', 'set()', 'Set.new()'],
        correctIndex: 2,
        explanation: '{} creates an empty dict. set() must be used to instantiate an empty set.'
      },
      {
        question: 'What is the average time complexity of testing membership ("x in my_set") in a Python set?',
        options: ['O(N)', 'O(1) constant time', 'O(N^2)', 'O(log N)'],
        correctIndex: 1,
        explanation: 'Because sets are implemented using hash tables, element lookup and membership tests run in O(1) average time.'
      },
      {
        question: 'Which operator calculates the intersection between two sets?',
        options: ['|', '&', '-', '^'],
        correctIndex: 1,
        explanation: 'The ampersand (&) operator calculates the intersection of two sets.'
      },
      {
        question: 'Are elements in a Python set indexed (e.g. can you do my_set[0])?',
        options: [
          'Yes, like a list',
          'No, sets are unordered collections and do not support indexing or slicing',
          'Only after sorting',
          'Only if containing integers'
        ],
        correctIndex: 1,
        explanation: 'Sets are unordered and do not support positional indexing. my_set[0] raises a TypeError.'
      }
    ],
    miniChallenge: {
      title: 'Vocabulary Jaccard Similarity',
      prompt: 'Calculate the Jaccard similarity between two sets of text tokens: len(A & B) / len(A | B).',
      starterCode: 'doc_a = {"ai", "machine", "learning", "python"}\ndoc_b = {"deep", "learning", "python", "neural"}\n# Compute Jaccard similarity\n',
      solution: 'doc_a = {"ai", "machine", "learning", "python"}\ndoc_b = {"deep", "learning", "python", "neural"}\njaccard = len(doc_a & doc_b) / len(doc_a | doc_b)\nprint(f"Jaccard Similarity: {jaccard:.2f}") # 2/6 = 0.33'
    }
  },
  {
    id: 'py-lesson-17',
    milestoneId: 'ms-python',
    order: 17,
    title: '17. Dictionaries (Key-Value Mappings)',
    durationMinutes: 24,
    conceptExplanation: 'A dictionary (dict) is a mutable collection of key-value pairs enclosed in curly braces {key: value}. Keys must be immutable and unique. Dictionaries provide fast O(1) lookup, insertion, and deletion by key.',
    whyImportant: 'Dictionaries are the primary data structure for JSON APIs, database record mapping, configuration files, and hyperparameter tuning grids.',
    syntax: `user = {"name": "Alice", "role": "Data Scientist", "xp": 1250}
# Accessing:
name = user["name"]
role = user.get("role", "Unknown") # Safe access with default`,
    exampleDescription: 'Managing server configurations and updating nested metrics in an analytics dictionary.',
    codeSnippet: `model_registry = {
    "model_id": "mdl-xgb-01",
    "algorithm": "XGBoost",
    "metrics": {
        "accuracy": 0.942,
        "f1_score": 0.938
    },
    "deployed": True
}

# Accessing nested keys safely
acc = model_registry["metrics"]["accuracy"]
latency = model_registry.get("latency_ms", 45.0)

# Iterating keys and values
for key, val in model_registry.items():
    if key != "metrics":
        print(f"{key}: {val}")

print(f"Nested Accuracy: {acc:.2%}")
print(f"Latency (Defaulted): {latency}ms")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-9: Nested dictionary representing metadata.',
      'Line 12: Direct key indexing for nested dictionary.',
      'Line 13: .get(key, default) avoids KeyErrors if the key is missing.',
      'Line 16: .items() returns (key, value) pairs as iterable tuples.'
    ],
    realWorldExample: 'Every REST API endpoint in Flask, FastAPI, or Django receives and transmits JSON payloads structured as Python dictionaries.',
    commonMistakes: [
      {
        mistake: 'Accessing a non-existent key with bracket notation dict[key], which raises a KeyError.',
        fix: 'Use dict.get(key, default_value) to safely retrieve values with an optional fallback.'
      }
    ],
    practiceExercises: [
      {
        task: 'Count word frequencies in a list of words ["apple", "banana", "apple", "cherry", "banana", "apple"] using a dictionary.',
        hint: 'Use a loop: counts[word] = counts.get(word, 0) + 1',
        solutionSnippet: 'words = ["apple", "banana", "apple", "cherry", "banana", "apple"]\\ncounts = {}\\nfor w in words:\\n    counts[w] = counts.get(w, 0) + 1\\nprint(counts)'
      }
    ],
    quizQuestions: [
      {
        question: 'What requirement must all dictionary keys satisfy in Python?',
        options: [
          'They must be integers',
          'They must be immutable and hashable (e.g. str, int, tuple)',
          'They must be in alphabetical order',
          'They must have less than 10 characters'
        ],
        correctIndex: 1,
        explanation: 'Dictionary keys must be hashable so Python can compute their hash table index. Lists cannot be dictionary keys.'
      },
      {
        question: 'What happens when you execute my_dict["missing_key"] if the key does not exist?',
        options: [
          'It returns None',
          'It raises a KeyError',
          'It creates the key automatically with value 0',
          'It returns False'
        ],
        correctIndex: 1,
        explanation: 'Bracket access on a missing key raises a KeyError. Use my_dict.get("missing_key") to avoid this.'
      },
      {
        question: 'Which method returns all key-value pairs from a dictionary as an iterable of tuples?',
        options: ['dict.pairs()', 'dict.items()', 'dict.entries()', 'dict.values()'],
        correctIndex: 1,
        explanation: 'dict.items() yields (key, value) tuples.'
      },
      {
        question: 'What is the average time complexity to look up a value by key in a Python dictionary?',
        options: ['O(N)', 'O(1) constant time', 'O(log N)', 'O(N^2)'],
        correctIndex: 1,
        explanation: 'Python dictionaries use optimized hash tables providing O(1) average lookup and insertion time.'
      },
      {
        question: 'How do you remove a key and return its value from a dictionary?',
        options: ['del my_dict[key]', 'my_dict.pop(key)', 'my_dict.remove(key)', 'my_dict.delete(key)'],
        correctIndex: 1,
        explanation: 'my_dict.pop(key, default) removes the key and returns its value.'
      }
    ],
    miniChallenge: {
      title: 'Invert Dictionary',
      prompt: 'Write code to invert a dictionary of unique values: {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.',
      starterCode: 'd = {"a": 1, "b": 2, "c": 3}\n# Invert dictionary\n',
      solution: 'd = {"a": 1, "b": 2, "c": 3}\ninverted = {v: k for k, v in d.items()}\nprint(inverted) # {1: "a", 2: "b", 3: "c"}'
    }
  },
  {
    id: 'py-lesson-18',
    milestoneId: 'ms-python',
    order: 18,
    title: '18. Strings & String Manipulation',
    durationMinutes: 20,
    conceptExplanation: 'Strings in Python are immutable sequences of Unicode characters. They support slicing, indexing, and extensive text processing methods including split(), join(), strip(), replace(), upper(), lower(), and startswith().',
    whyImportant: 'Text manipulation is essential for Natural Language Processing (NLP), web scraping, log parsing, and data cleaning.',
    syntax: `text = "  Data Science with Python  "
cleaned = text.strip().lower()
words = cleaned.split(" ")
rejoined = "-".join(words)`,
    exampleDescription: 'Cleaning unstructured text, extracting email domains, and formatting strings.',
    codeSnippet: `raw_log = "  2026-03-26 [ERROR] database_pool_timeout: user_id=9824  "

cleaned_log = raw_log.strip()
parts = cleaned_log.split(" ")

timestamp = parts[0]
level = parts[1].replace("[", "").replace("]", "")
message = " ".join(parts[2:])

print(f"Timestamp: {timestamp}")
print(f"Severity:  {level}")
print(f"Message:   {message}")
print(f"Is Error:  {level.startswith('ERR')}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Raw log string with irregular leading and trailing whitespace.',
      'Line 3: strip() removes whitespace from both ends.',
      'Line 4: split(" ") splits the string into a list of token substrings.',
      'Line 7: Chained replace() calls sanitize brackets.',
      'Line 8: " ".join(...) rejoins remaining tokens into a cohesive message string.'
    ],
    realWorldExample: 'In NLP preprocessing pipelines, raw review text is converted to lowercase, punctuation stripped, and split into tokens for sentiment classification.',
    commonMistakes: [
      {
        mistake: 'Trying to modify a string character in-place: my_str[0] = "H", causing TypeError.',
        fix: 'Strings are immutable. Create a new string using concatenation or slicing: new_str = "H" + my_str[1:].'
      }
    ],
    practiceExercises: [
      {
        task: 'Extract the domain name from an email address user.alex@buildyourself.org using split().',
        hint: 'email.split("@")[1]',
        solutionSnippet: 'email = "user.alex@buildyourself.org"\\ndomain = email.split("@")[1]\\nprint("Domain:", domain)'
      }
    ],
    quizQuestions: [
      {
        question: 'Are Python strings mutable or immutable?',
        options: ['Mutable', 'Immutable', 'Dynamic array', 'Pointer-based'],
        correctIndex: 1,
        explanation: 'Strings in Python are immutable; any method like replace() or lower() returns a new string object.'
      },
      {
        question: 'What does the method "  hello  ".strip() return?',
        options: ['"  hello  "', '"hello"', '"  hello"', '"hello  "'],
        correctIndex: 1,
        explanation: 'strip() removes whitespace (spaces, tabs, newlines) from both the leading and trailing ends of a string.'
      },
      {
        question: 'Which method combines a list of strings ["A", "B", "C"] into a single string "A, B, C"?',
        options: ['list.merge()', '", ".join(["A", "B", "C"])', '["A", "B", "C"].concat()', 'str.combine()'],
        correctIndex: 1,
        explanation: 'The join method is called on the separator string: separator.join(iterable).'
      },
      {
        question: 'How do you check if a string contains only numeric digits?',
        options: ['str.isnumeric() or str.isdigit()', 'str.has_digits()', 'str.type == int', 'str.check_num()'],
        correctIndex: 0,
        explanation: 'isdigit() / isnumeric() returns True if all characters in the string are digits.'
      },
      {
        question: 'What is the slice notation to reverse a string in Python?',
        options: ['str.reverse()', 'str[::-1]', 'str[-1:0]', 'str[rev]'],
        correctIndex: 1,
        explanation: 'str[::-1] uses a step of -1 to traverse the string in reverse from end to beginning.'
      }
    ],
    miniChallenge: {
      title: 'Palindrome Checker',
      prompt: 'Write a function is_palindrome(text) that ignores spaces and casing, returning True if the text reads the same backwards.',
      starterCode: 'def is_palindrome(text):\n    # Return True if palindrome\n    pass\n',
      solution: 'def is_palindrome(text):\n    cleaned = "".join(text.lower().split())\n    return cleaned == cleaned[::-1]\nprint(is_palindrome("Race car")) # True'
    }
  },
  {
    id: 'py-lesson-19',
    milestoneId: 'ms-python',
    order: 19,
    title: '19. List & Dictionary Comprehensions',
    durationMinutes: 20,
    conceptExplanation: 'Comprehensions provide a concise, readable, and performant syntax for creating new lists, dictionaries, or sets from existing iterables using inline expressions with optional filtering conditions.',
    whyImportant: 'Comprehensions are widely regarded as the hallmark of idiomatic "Pythonic" code. They execute faster than equivalent manual for-loops because the loop runs in optimized C bytecode.',
    syntax: `# List Comprehension:
[expression for item in iterable if condition]

# Dict Comprehension:
{key_expr: value_expr for item in iterable if condition}`,
    exampleDescription: 'Normalizing feature values and filtering positive observations with list and dict comprehensions.',
    codeSnippet: `raw_scores = [68, 92, 45, 88, 73, 95, 59]

# 1. List Comprehension: Filter passing scores (>=70) and apply 5-point curve
curved_passing = [score + 5 for score in raw_scores if score >= 70]

# 2. Dict Comprehension: Map student IDs to letter grades
students = ["Alice", "Bob", "Charlie", "Diana"]
marks = [85, 92, 65, 78]

grade_book = {
    student: ("Pass" if mark >= 70 else "Review")
    for student, mark in zip(students, marks)
}

print("Curved Passing Scores:", curved_passing)
print("Grade Book:", grade_book)`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 4: A single-line list comprehension filtering with if score >= 70 and calculating score + 5.',
      'Line 10-13: A dict comprehension mapping student names to pass/review status using zip() and inline ternary condition.'
    ],
    realWorldExample: 'Extracting and normalizing column values from raw database query records: cleaned_emails = [row["email"].lower().strip() for row in raw_records if row["email"]].',
    commonMistakes: [
      {
        mistake: 'Nesting 3 or more comprehensions inside each other, creating unreadable "code golf".',
        fix: 'If comprehension exceeds one or two lines of logic, write a readable multi-line for-loop instead.'
      }
    ],
    practiceExercises: [
      {
        task: 'Generate a list of squares of even numbers from 1 to 10: [4, 16, 36, 64, 100].',
        hint: '[x**2 for x in range(1, 11) if x % 2 == 0]',
        solutionSnippet: 'even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]\\nprint(even_squares)'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the output of [x * 2 for x in [1, 2, 3]]?',
        options: ['[1, 2, 3, 1, 2, 3]', '[2, 4, 6]', '[2, 2, 2]', 'Error'],
        correctIndex: 1,
        explanation: 'Each element in the list is multiplied by 2, resulting in [2, 4, 6].'
      },
      {
        question: 'Why are list comprehensions generally faster than equivalent manual for-loops with .append()?',
        options: [
          'Because they use GPUs',
          'Because the loop is executed at C speed inside the Python interpreter without repeatedly looking up the .append method',
          'Because they bypass memory checks',
          'They are not faster, only shorter'
        ],
        correctIndex: 1,
        explanation: 'Comprehensions are optimized internally in CPython bytecode, avoiding the overhead of attribute lookup and method calls for append.'
      },
      {
        question: 'What brackets are used to write a dictionary comprehension?',
        options: ['( )', '[ ]', '{ } with key: value syntax', '< >'],
        correctIndex: 2,
        explanation: '{k: v for k, v in ...} defines a dictionary comprehension.'
      },
      {
        question: 'How do you include an if-else conditional inside a list comprehension expression?',
        options: [
          '[x for x in data if condition else y]',
          '[x if condition else y for x in data]',
          '[if condition x else y for x in data]',
          'List comprehensions do not support else'
        ],
        correctIndex: 1,
        explanation: 'When transforming values with if-else, place the ternary expression BEFORE the for clause: [x if condition else y for x in data].'
      },
      {
        question: 'What type of object is created if you use parentheses instead of square brackets: (x**2 for x in range(5))?',
        options: ['Tuple', 'List', 'Generator expression', 'Set'],
        correctIndex: 2,
        explanation: 'Parentheses create a lazy generator expression, not a tuple comprehension.'
      }
    ],
    miniChallenge: {
      title: 'Filter High-Value Orders',
      prompt: 'Given prices = [12.5, 45.0, 120.0, 9.99, 210.0], use a list comprehension to calculate total prices with 10% tax for items over $40.',
      starterCode: 'prices = [12.5, 45.0, 120.0, 9.99, 210.0]\n# List comprehension here\n',
      solution: 'prices = [12.5, 45.0, 120.0, 9.99, 210.0]\nhigh_value_taxed = [round(p * 1.10, 2) for p in prices if p > 40]\nprint(high_value_taxed) # [49.5, 132.0, 231.0]'
    }
  },
  {
    id: 'py-lesson-20',
    milestoneId: 'ms-python',
    order: 20,
    title: '20. Exception Handling (try, except, finally, raise)',
    durationMinutes: 22,
    conceptExplanation: 'Exception handling provides graceful recovery when runtime errors occur. The try block contains code that might fail; except catches and handles specific exceptions; else runs if no exception occurred; and finally runs unconditionally (ideal for resource cleanup). Custom exceptions are signaled via raise.',
    whyImportant: 'Production applications cannot crash when an external API is down or a user enters invalid data. Defensive programming with structured exceptions guarantees uptime and resilience.',
    syntax: `try:
    dangerous_operation()
except ValueError as e:
    handle_value_error(e)
except Exception as e:
    handle_generic(e)
else:
    runs_if_no_error()
finally:
    cleanup_resources()`,
    exampleDescription: 'Safely parsing numerical telemetry records from a simulated server feed.',
    codeSnippet: `def parse_metric_record(record_str: str) -> float:
    try:
        parts = record_str.split("=")
        key = parts[0].strip()
        val = float(parts[1].strip())
        if val < 0:
            raise ValueError(f"Metric value cannot be negative: {val}")
        return val
    except IndexError:
        print("ERROR: Corrupted record format. Expected 'key=value'.")
        return 0.0
    except ValueError as ve:
        print(f"ERROR: {ve}")
        return 0.0
    finally:
        print("Record parse attempt completed.")

# Test cases
print("Result 1:", parse_metric_record("cpu_usage = 84.5"))
print("Result 2:", parse_metric_record("invalid_data"))
print("Result 3:", parse_metric_record("loss = -0.5"))`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 2: try block begins.',
      'Line 6-7: raise keyword triggers a custom ValueError if business logic (non-negative) is violated.',
      'Line 9: Catches IndexError if split() does not produce index 1.',
      'Line 12: Catches ValueError if float conversion fails or our manual raise triggers.',
      'Line 15: finally block executes in all cases (success or error).'
    ],
    realWorldExample: 'Handling HTTP timeouts and JSON decode errors in automated web scrapers and ETL data ingestors.',
    commonMistakes: [
      {
        mistake: 'Using bare except: without specifying the exception type, which accidentally catches and suppresses system signals like KeyboardInterrupt.',
        fix: 'Always catch specific exceptions like except (ValueError, KeyError): or at least except Exception as e:.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a safe_divide(a, b) function that handles ZeroDivisionError and TypeError, returning None if an error occurs.',
        hint: 'try: return a / b except (ZeroDivisionError, TypeError): return None',
        solutionSnippet: 'def safe_divide(a, b):\\n    try:\\n        return a / b\\n    except (ZeroDivisionError, TypeError):\\n        return None\\nprint(safe_divide(10, 0)) # None'
      }
    ],
    quizQuestions: [
      {
        question: 'Which block in a try-except structure is ALWAYS executed, regardless of whether an exception was raised?',
        options: ['except', 'else', 'finally', 'catch'],
        correctIndex: 2,
        explanation: 'The finally block executes no matter what, making it the perfect place to close database connections and file handles.'
      },
      {
        question: 'What keyword is used to manually trigger an exception in Python?',
        options: ['throw', 'raise', 'fire', 'trigger'],
        correctIndex: 1,
        explanation: 'Python uses the "raise" keyword to throw an exception instance (e.g. raise ValueError("Invalid")).'
      },
      {
        question: 'When does the "else" clause of a try-except statement execute?',
        options: [
          'When an exception occurs',
          'Only when the try block executes successfully without raising any exceptions',
          'Only after the finally block',
          'Never'
        ],
        correctIndex: 1,
        explanation: 'try...else runs only if the code in the try block did NOT raise an exception.'
      },
      {
        question: 'Why is using a bare "except:" considered an anti-pattern in Python?',
        options: [
          'It runs 100x slower',
          'It catches and hides all exceptions, including KeyboardInterrupt (Ctrl+C) and SystemExit, making scripts hard to stop',
          'It causes a compilation error in Python 3',
          'It consumes double the memory'
        ],
        correctIndex: 1,
        explanation: 'A bare except catches BaseException, swallowing interrupt signals and preventing normal program termination.'
      },
      {
        question: 'How can you access the error message string of an exception inside an except block?',
        options: ['except ValueError.msg:', 'except ValueError as e: (then str(e))', 'get_error()', 'e = last_error'],
        correctIndex: 1,
        explanation: 'except ValueError as e: binds the exception instance to variable e.'
      }
    ],
    miniChallenge: {
      title: 'Safe Integer Converter',
      prompt: 'Write a function safe_int(val, default=0) that attempts to convert val to int, returning default if ValueError or TypeError occurs.',
      starterCode: 'def safe_int(val, default=0):\n    # Safe conversion\n    pass\n',
      solution: 'def safe_int(val, default=0):\n    try:\n        return int(val)\n    except (ValueError, TypeError):\n        return default\nprint(safe_int("123")) # 123\nprint(safe_int("abc", -1)) # -1'
    }
  },
  {
    id: 'py-lesson-21',
    milestoneId: 'ms-python',
    order: 21,
    title: '21. File Handling & Context Managers (with)',
    durationMinutes: 22,
    conceptExplanation: 'File handling allows reading and writing persistent files on disk. Python uses the built-in open() function paired with the "with" context manager. The context manager automatically closes files upon exiting the block, even if an exception is thrown.',
    whyImportant: 'Data analysts and engineers read CSVs, write model checkpoints, export JSON reports, and parse server log files continuously.',
    syntax: `# Writing text:
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Hello World\\n")

# Reading lines:
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())`,
    exampleDescription: 'Writing training metrics to a CSV file and reading them back using Python\'s built-in file handling.',
    codeSnippet: `# 1. Writing simulated metrics to a file
log_data = [
    "epoch,train_loss,val_loss",
    "1,0.652,0.612",
    "2,0.485,0.443",
    "3,0.312,0.298"
]

filename = "experiment_log.csv"

# Writing with context manager
with open(filename, "w", encoding="utf-8") as file:
    for line in log_data:
        file.write(line + "\\n")

# Reading back line by line
print(f"Reading contents of {filename}:")
with open(filename, "r", encoding="utf-8") as file:
    headers = file.readline().strip().split(",")
    print("Headers:", headers)
    for row in file:
        print("Data Row:", row.strip().split(","))`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 11: with open(...) as file: opens the file in write mode ("w") with utf-8 character encoding.',
      'Line 13: file.write() writes each line string.',
      'Line 17: Opens the file in read mode ("r"). The with block guarantees file closure upon exit.',
      'Line 18: file.readline() reads a single line (the header).',
      'Line 20: Iterating directly over file reads lines lazily without loading the whole file into RAM.'
    ],
    realWorldExample: 'Reading multi-gigabyte log files line-by-line in streaming data pipelines to avoid running out of memory (OOM).',
    commonMistakes: [
      {
        mistake: 'Using open() without the "with" statement (e.g. f = open("file.txt")), risking file corruption and memory leaks if not manually closed.',
        fix: 'Always use with open(...) as f:.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a script that creates a file notes.txt, writes three lines to it, and then counts how many lines exist in the file.',
        hint: 'len(file.readlines()) or sum(1 for line in file)',
        solutionSnippet: 'with open("notes.txt", "w") as f:\\n    f.write("Line 1\\nLine 2\\nLine 3\\n")\\nwith open("notes.txt", "r") as f:\\n    count = sum(1 for line in f)\\nprint("Total lines:", count)'
      }
    ],
    quizQuestions: [
      {
        question: 'Why should you always open files using the "with" statement in Python?',
        options: [
          'Because files open faster',
          'The with statement ensures the file is automatically closed when the block exits, even if exceptions occur',
          'It is the only way to write binary files',
          'It encrypts the file automatically'
        ],
        correctIndex: 1,
        explanation: 'Context managers implement __enter__ and __exit__ methods, guaranteeing clean resource deallocation.'
      },
      {
        question: 'What file opening mode appends new data to the end of an existing file without overwriting it?',
        options: ['"r"', '"w"', '"a"', '"x"'],
        correctIndex: 2,
        explanation: '"a" stands for append mode; it creates the file if it does not exist or writes to the end of the existing file.'
      },
      {
        question: 'What happens if you open a file in "w" mode if the file already exists?',
        options: [
          'It appends text to the end',
          'It truncates (erases) the existing content completely before writing',
          'It raises a FileExistsError',
          'It creates a backup copy first'
        ],
        correctIndex: 1,
        explanation: 'Write mode ("w") immediately overwrites the existing file, erasing all prior content.'
      },
      {
        question: 'What is the most memory-efficient way to iterate over a large file line-by-line?',
        options: [
          'content = f.read()',
          'lines = f.readlines()',
          'for line in f:',
          'content = f.read().split("\\n")'
        ],
        correctIndex: 2,
        explanation: 'for line in f: streams one line into memory at a time via the file object iterator.'
      },
      {
        question: 'Which standard Python module is specifically designed for reading and writing structured tabular comma-separated files?',
        options: ['sys', 'csv', 'os', 're'],
        correctIndex: 1,
        explanation: 'The built-in csv module (csv.reader, csv.DictWriter) provides robust handling of delimiters, quotes, and escapes.'
      }
    ],
    miniChallenge: {
      title: 'Word Counter in Text File',
      prompt: 'Write code that writes a sentence to sample.txt, reads it back, and calculates the total word count.',
      starterCode: 'sentence = "Build Yourself provides verified career roadmaps and mastery learning"\n# Write to file and count words\n',
      solution: 'sentence = "Build Yourself provides verified career roadmaps and mastery learning"\nwith open("sample.txt", "w") as f:\n    f.write(sentence)\nwith open("sample.txt", "r") as f:\n    words = f.read().split()\nprint(f"Total words: {len(words)}")'
    }
  },
  {
    id: 'py-lesson-22',
    milestoneId: 'ms-python',
    order: 22,
    title: '22. Modules, Packages & Standard Library',
    durationMinutes: 20,
    conceptExplanation: 'A module is simply a Python file (.py) containing functions, classes, and variables. A package is a directory of modules containing an __init__.py file. Python includes "batteries included" standard library modules like math, random, datetime, json, os, and collections.',
    whyImportant: 'Organizing code into modular packages allows engineering teams to build maintainable, large-scale software systems and leverage thousands of pre-tested algorithms.',
    syntax: `# Importing standard library modules:
import math
from datetime import datetime, timedelta
import json as json_lib`,
    exampleDescription: 'Using math, datetime, and json modules to build an analytics report payload.',
    codeSnippet: `import math
from datetime import datetime, timezone
import json

# 1. Math calculations
euclidean_dist = math.sqrt((10 - 2)**2 + (15 - 3)**2)

# 2. Timestamp formatting
now_utc = datetime.now(timezone.utc).isoformat()

# 3. JSON Serialization
report_payload = {
    "service": "AnomalyDetector",
    "generated_at": now_utc,
    "distance_metric": round(euclidean_dist, 2),
    "status": "HEALTHY"
}

json_output = json.dumps(report_payload, indent=2)
print("Serialized JSON Payload:")
print(json_output)`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-3: Standard library imports.',
      'Line 6: math.sqrt() performs fast C-level square root calculation.',
      'Line 9: datetime.now(timezone.utc) generates timezone-aware UTC timestamp in ISO 8601 format.',
      'Line 19: json.dumps(..., indent=2) serializes the dictionary into a formatted JSON string.'
    ],
    realWorldExample: 'Data microservices exchange JSON messages over RabbitMQ or Kafka, using the json and datetime modules in every message handler.',
    commonMistakes: [
      {
        mistake: 'Naming your own script after a standard module (e.g. naming your file math.py or json.py), which shadows the built-in library and breaks imports.',
        fix: 'Never give your scripts the same name as standard library modules or third-party packages.'
      }
    ],
    practiceExercises: [
      {
        task: 'Use the random module to generate 5 random integers between 1 and 100 and calculate their average using math.',
        hint: 'import random; nums = [random.randint(1, 100) for _ in range(5)]',
        solutionSnippet: 'import random\\nnums = [random.randint(1, 100) for _ in range(5)]\\nprint("Nums:", nums, "Avg:", sum(nums)/len(nums))'
      }
    ],
    quizQuestions: [
      {
        question: 'What is a Python module?',
        options: [
          'A hardware chip',
          'A single .py file containing Python code, functions, and definitions',
          'A special database table',
          'A type of variable'
        ],
        correctIndex: 1,
        explanation: 'Any Python file (e.g. utils.py) is a module that can be imported by other scripts.'
      },
      {
        question: 'What file traditionally marks a directory as a Python package?',
        options: ['package.json', '__init__.py', 'main.py', '__package__.txt'],
        correctIndex: 1,
        explanation: '__init__.py indicates to the Python interpreter that the containing directory is a package.'
      },
      {
        question: 'What does the idiom "if __name__ == \'__main__\':" do in a Python script?',
        options: [
          'Ensures the code runs only when the script is executed directly, and NOT when imported as a module',
          'Initializes the main variable',
          'Checks if the user is an admin',
          'Terminates the program'
        ],
        correctIndex: 0,
        explanation: '__name__ is set to "__main__" when executed directly, but to the module name when imported.'
      },
      {
        question: 'Which built-in module provides functions for interacting with the operating system (paths, environment variables)?',
        options: ['sys', 'os', 'pathlib', 'Both os and pathlib'],
        correctIndex: 3,
        explanation: 'Both os and the modern pathlib module provide extensive file-system and environment capabilities.'
      },
      {
        question: 'How do you give an imported module a shorter alias in Python?',
        options: ['import pandas with pd', 'import pandas as pd', 'alias pd = pandas', 'import pandas (pd)'],
        correctIndex: 1,
        explanation: 'The "as" keyword assigns an alias (e.g. import pandas as pd, import numpy as np).'
      }
    ],
    miniChallenge: {
      title: 'JSON Config Parser',
      prompt: 'Convert a JSON string \'{"threshold": 0.85, "max_iter": 500}\' into a Python dictionary, and update threshold to 0.90.',
      starterCode: 'import json\njson_str = \'{"threshold": 0.85, "max_iter": 500}\'\n# Parse and update\n',
      solution: 'import json\njson_str = \'{"threshold": 0.85, "max_iter": 500}\'\nconfig = json.loads(json_str)\nconfig["threshold"] = 0.90\nprint(config) # {\'threshold\': 0.9, \'max_iter\': 500}'
    }
  },
  {
    id: 'py-lesson-23',
    milestoneId: 'ms-python',
    order: 23,
    title: '23. OOP Basics: Classes vs Objects',
    durationMinutes: 20,
    conceptExplanation: 'Object-Oriented Programming (OOP) is a programming paradigm that organizes software around data (attributes) and behavior (methods) packaged into "objects". A class is the blueprint or template, while an object is an individual instance created from that blueprint.',
    whyImportant: 'All major Python data science tools (Scikit-Learn estimators, PyTorch neural network modules, Pandas DataFrames) are designed using Object-Oriented principles.',
    syntax: `# Class blueprint:
class ModelConfig:
    pass

# Creating an instance (object):
config_instance = ModelConfig()`,
    exampleDescription: 'Understanding the relationship between a class blueprint and distinct object instances in memory.',
    codeSnippet: `class ServerNode:
    """Blueprint for a cloud computation node."""
    status = "PROVISIONED" # Class attribute

# Instantiating two independent objects
node_alpha = ServerNode()
node_beta = ServerNode()

# Modifying instance-specific attribute
node_alpha.hostname = "srv-cluster-01"
node_beta.hostname = "srv-cluster-02"

print(f"Node Alpha: {node_alpha.hostname} | Status: {node_alpha.status}")
print(f"Node Beta:  {node_beta.hostname}  | Status: {node_beta.status}")
print("Are they distinct objects?", node_alpha is not node_beta)`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: class keyword defines the ServerNode blueprint.',
      'Line 3: status is a class attribute shared across all instances.',
      'Line 6-7: Instantiating two independent objects in memory.',
      'Line 10-11: Dynamically setting instance-specific attributes.',
      'Line 15: is not confirms they occupy separate memory addresses.'
    ],
    realWorldExample: 'In Scikit-Learn, LinearRegression is a class; model = LinearRegression() creates an instance with its own learned coefficients (.coef_).',
    commonMistakes: [
      {
        mistake: 'Confusing the class itself with an instance: calling methods on the class name without instantiating it with ().',
        fix: 'Instantiate the class first: my_obj = MyClass(), then call my_obj.method().'
      }
    ],
    practiceExercises: [
      {
        task: 'Define a simple Book class, create two book objects, and assign title and author attributes to each.',
        hint: 'class Book: pass; b1 = Book(); b1.title = "Clean Code"',
        solutionSnippet: 'class Book:\\n    pass\\nb = Book()\\nb.title = "Designing Data-Intensive Applications"\\nprint(b.title)'
      }
    ],
    quizQuestions: [
      {
        question: 'What is a "class" in Object-Oriented Programming?',
        options: [
          'A school lecture',
          'A blueprint or template that defines attributes and methods for objects',
          'A type of loop',
          'A function that returns nothing'
        ],
        correctIndex: 1,
        explanation: 'A class defines the structure and behavior that its instantiated objects will possess.'
      },
      {
        question: 'What is an "object" in OOP?',
        options: [
          'A specific instance created from a class blueprint',
          'A keyword in Python',
          'An external file',
          'A variable that cannot be changed'
        ],
        correctIndex: 0,
        explanation: 'An object is a concrete instance of a class living in computer memory.'
      },
      {
        question: 'What naming convention does PEP 8 recommend for Python class names?',
        options: ['snake_case', 'camelCase', 'PascalCase (CapWords)', 'UPPERCASE'],
        correctIndex: 2,
        explanation: 'PEP 8 recommends PascalCase (CapitalizedWords) for class names (e.g. DataPipeline, NeuralNetwork).'
      },
      {
        question: 'Can you create multiple objects from a single class?',
        options: [
          'No, only one object per class is allowed',
          'Yes, you can instantiate as many distinct objects as needed',
          'Only up to 10',
          'Only if using inheritance'
        ],
        correctIndex: 1,
        explanation: 'You can create unlimited independent instances from a single class blueprint.'
      },
      {
        question: 'What operator is used to instantiate a class into an object in Python?',
        options: ['new MyClass()', 'MyClass()', 'create MyClass', 'alloc MyClass'],
        correctIndex: 1,
        explanation: 'Unlike Java/C++, Python does not use a "new" keyword. Simply invoke the class like a function: obj = MyClass().'
      }
    ],
    miniChallenge: {
      title: 'Car Blueprint',
      prompt: 'Create a simple Car class with a class attribute wheels = 4, instantiate it as my_car, and set brand = "Tesla".',
      starterCode: 'class Car:\n    # Add wheels = 4\n    pass\n',
      solution: 'class Car:\n    wheels = 4\nmy_car = Car()\nmy_car.brand = "Tesla"\nprint(f"{my_car.brand} with {my_car.wheels} wheels")'
    }
  },
  {
    id: 'py-lesson-24',
    milestoneId: 'ms-python',
    order: 24,
    title: '24. Classes, Attributes, Methods & __init__',
    durationMinutes: 24,
    conceptExplanation: 'The __init__ method is Python\'s constructor initializer. It executes automatically when a new object is created. The first parameter of every instance method must be "self", which represents the specific instance being operated upon.',
    whyImportant: '__init__ guarantees that every object is born in a valid state with all necessary initial parameters, database connections, or hyperparameters.',
    syntax: `class BankAccount:
    def __init__(self, owner: str, initial_balance: float = 0.0):
        self.owner = owner          # Instance attribute
        self.balance = initial_balance

    def deposit(self, amount: float) -> float:
        self.balance += amount
        return self.balance`,
    exampleDescription: 'Building a production-ready Machine Learning Experiment Tracker class.',
    codeSnippet: `class ExperimentTracker:
    def __init__(self, experiment_name: str, baseline_accuracy: float):
        self.experiment_name = experiment_name
        self.baseline = baseline_accuracy
        self.runs = []

    def record_run(self, run_id: str, accuracy: float):
        improvement = accuracy - self.baseline
        record = {
            "run_id": run_id,
            "accuracy": accuracy,
            "improvement": round(improvement, 4)
        }
        self.runs.append(record)
        print(f"Run {run_id} logged: Accuracy = {accuracy:.2%} (Diff: {improvement:+.2%})")

    def get_best_run(self):
        if not self.runs:
            return None
        return max(self.runs, key=lambda r: r["accuracy"])

# Usage
tracker = ExperimentTracker("ChurnPrediction_v1", baseline_accuracy=0.82)
tracker.record_run("exp-01", 0.854)
tracker.record_run("exp-02", 0.887)

best = tracker.get_best_run()
print(f"\\nBest Run: {best['run_id']} with {best['accuracy']:.2%} accuracy")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Class declaration.',
      'Line 2-5: __init__ constructor initializing name, baseline, and empty runs list.',
      'Line 7: Instance method record_run taking self and run parameters.',
      'Line 14: Appending record to the instance\'s self.runs list.',
      'Line 17: get_best_run uses max() with a lambda key to find top performing run.',
      'Line 23: Instantiating tracker object with initial baseline.',
      'Line 24-25: Calling methods on the tracker instance.'
    ],
    realWorldExample: 'In PyTorch, custom neural networks define layers inside __init__ (self.conv1 = nn.Conv2d(...)) and computation inside def forward(self, x):.',
    commonMistakes: [
      {
        mistake: 'Forgetting the "self" parameter in method definitions: def my_method(): print("hi"), causing TypeError: takes 0 positional arguments but 1 was given.',
        fix: 'Always include "self" as the first argument in all instance methods: def my_method(self):.'
      }
    ],
    practiceExercises: [
      {
        task: 'Build a Rectangle class with __init__(self, width, height) and methods area() and perimeter().',
        hint: 'area returns self.width * self.height; perimeter returns 2 * (self.width + self.height)',
        solutionSnippet: 'class Rectangle:\\n    def __init__(self, w, h):\\n        self.w, self.h = w, h\\n    def area(self): return self.w * self.h\\n    def perimeter(self): return 2 * (self.w + self.h)\\nr = Rectangle(5, 10)\\nprint("Area:", r.area())'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the purpose of the __init__ method in a Python class?',
        options: [
          'It is called when the program terminates',
          'It acts as the constructor to initialize newly created object instances',
          'It renames the class',
          'It converts the class into a dictionary'
        ],
        correctIndex: 1,
        explanation: '__init__ is the initializer method automatically called when a new instance is instantiated.'
      },
      {
        question: 'What does "self" represent in a Python instance method?',
        options: [
          'A global variable',
          'The specific instance of the class on which the method was called',
          'The class blueprint itself',
          'The Python interpreter'
        ],
        correctIndex: 1,
        explanation: '"self" is a reference to the current object instance, allowing access to its attributes and methods.'
      },
      {
        question: 'Which dunder method provides a human-readable string representation of an object when print(obj) is called?',
        options: ['__repr__', '__str__', '__init__', '__name__'],
        correctIndex: 1,
        explanation: '__str__ returns the user-friendly string representation displayed by print() and str().'
      },
      {
        question: 'What is the difference between an instance attribute and a class attribute?',
        options: [
          'Instance attributes are defined inside methods on "self" and belong to a specific object; class attributes are shared across all instances',
          'There is no difference',
          'Class attributes cannot be numbers',
          'Instance attributes are deleted after 5 seconds'
        ],
        correctIndex: 0,
        explanation: 'Class attributes are defined on the class body and shared by all instances; instance attributes are bound to self.'
      },
      {
        question: 'Can you have multiple constructors (__init__ methods) with different signatures in a single Python class?',
        options: [
          'Yes, like Java method overloading',
          'No, in Python the last defined __init__ overwrites earlier ones (use default arguments or classmethods instead)',
          'Only if they have different return types',
          'Only in Python 2'
        ],
        correctIndex: 1,
        explanation: 'Python does not support traditional method overloading by signature. Use default arguments or @classmethod alternative constructors.'
      }
    ],
    miniChallenge: {
      title: 'Student Grade Tracker Class',
      prompt: 'Create a Student class with name and a list of grades. Add an add_grade(grade) method and an average() method.',
      starterCode: 'class Student:\n    def __init__(self, name):\n        # Initialize\n        pass\n',
      solution: 'class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n    def add_grade(self, g):\n        self.grades.append(g)\n    def average(self):\n        return sum(self.grades) / len(self.grades) if self.grades else 0.0\ns = Student("Emma")\ns.add_grade(90)\ns.add_grade(80)\nprint(f"{s.name} Avg: {s.average()}") # 85.0'
    }
  },
  {
    id: 'py-lesson-25',
    milestoneId: 'ms-python',
    order: 25,
    title: '25. Inheritance & super()',
    durationMinutes: 22,
    conceptExplanation: 'Inheritance allows a child (subclass) to inherit attributes and methods from a parent (base/superclass), promoting code reuse and hierarchical organization. The super() function delegates calls to the parent class.',
    whyImportant: 'Building custom data loaders, neural network architectures, and API middleware fundamentally relies on subclassing existing base classes.',
    syntax: `class ChildClass(ParentClass):
    def __init__(self, child_arg, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.child_arg = child_arg`,
    exampleDescription: 'Creating a base DatabaseConnector and extending it to create a specialized PostgreSQLConnector.',
    codeSnippet: `class DatabaseConnector:
    """Base database connection handler."""
    def __init__(self, host: str, port: int):
        self.host = host
        self.port = port
        self.is_connected = False

    def connect(self):
        self.is_connected = True
        print(f"Base: Connected to network socket {self.host}:{self.port}")

class PostgresConnector(DatabaseConnector):
    """PostgreSQL-specific connector inheriting from DatabaseConnector."""
    def __init__(self, host: str, port: int, database_name: str, user: str):
        super().__init__(host, port) # Call base class constructor
        self.database_name = database_name
        self.user = user

    def connect(self):
        super().connect() # Run base connection
        print(f"Postgres: Authenticated as '{self.user}' on database '{self.database_name}'")

# Instantiating child class
pg = PostgresConnector("localhost", 5432, "analytics_db", "data_admin")
pg.connect()`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1: Base class DatabaseConnector.',
      'Line 10: Child class PostgresConnector inheriting via (DatabaseConnector).',
      'Line 13: super().__init__(host, port) initializes inherited host and port attributes in parent.',
      'Line 17: Overrides connect() method, invoking parent behavior with super().connect() before adding database auth.'
    ],
    realWorldExample: 'In PyTorch: class MyConvNet(torch.nn.Module): def __init__(self): super().__init__(). Subclassing nn.Module gives your model automatic GPU transfer (.cuda()) and gradient tracking.',
    commonMistakes: [
      {
        mistake: 'Forgetting to call super().__init__() in the child constructor, leaving parent attributes uninitialized.',
        fix: 'Always call super().__init__(...) in the first lines of the child __init__.'
      }
    ],
    practiceExercises: [
      {
        task: 'Create a Person class with name and age, and an Employee child class that adds an employee_id and salary.',
        hint: 'class Employee(Person): def __init__(self, name, age, emp_id, salary): super().__init__(name, age); self.emp_id = emp_id',
        solutionSnippet: 'class Person:\\n    def __init__(self, name, age): self.name, self.age = name, age\\nclass Employee(Person):\\n    def __init__(self, name, age, emp_id):\\n        super().__init__(name, age)\\n        self.emp_id = emp_id\\ne = Employee("Marcus", 30, "EMP-101")\\nprint(e.name, e.emp_id)'
      }
    ],
    quizQuestions: [
      {
        question: 'How do you specify that ClassB inherits from ClassA in Python?',
        options: ['class ClassB extends ClassA:', 'class ClassB(ClassA):', 'class ClassB inherits ClassA:', 'class ClassB : ClassA'],
        correctIndex: 1,
        explanation: 'In Python, the superclass is placed inside parentheses in the class definition header: class Child(Parent):.'
      },
      {
        question: 'What does the super() function do in a child class method?',
        options: [
          'Makes the method execute faster',
          'Provides a temporary object of the parent class, allowing invocation of its methods',
          'Creates a superuser account',
          'Deletes the parent class'
        ],
        correctIndex: 1,
        explanation: 'super() returns a proxy object that delegates method calls to the parent (or sibling in multiple inheritance) class.'
      },
      {
        question: 'Does Python support multiple inheritance (inheriting from more than one class)?',
        options: [
          'No, only single inheritance is permitted',
          'Yes, a class can inherit from multiple parent classes (class Child(ParentA, ParentB):)',
          'Only in Python 2',
          'Only with interfaces'
        ],
        correctIndex: 1,
        explanation: 'Python fully supports multiple inheritance, resolving method calls using Method Resolution Order (MRO).'
      },
      {
        question: 'Which built-in function checks if an object is an instance of a specific class or its subclasses?',
        options: ['isinstance(obj, MyClass)', 'typeof(obj) == MyClass', 'obj.isClass(MyClass)', 'type(obj)'],
        correctIndex: 0,
        explanation: 'isinstance(obj, ClassInfo) returns True if obj is an instance of the class or any derived subclass.'
      },
      {
        question: 'What method returns the Method Resolution Order (MRO) list for a class?',
        options: ['MyClass.order()', 'MyClass.mro()', 'MyClass.__hierarchy__', 'MyClass.parents()'],
        correctIndex: 1,
        explanation: 'MyClass.mro() or MyClass.__mro__ reveals the exact order Python traverses to find methods.'
      }
    ],
    miniChallenge: {
      title: 'Vehicle & ElectricCar Hierarchy',
      prompt: 'Create a Vehicle class with a drive() method, then an ElectricCar child class that overrides drive() to print "Driving silently on electric battery!".',
      starterCode: 'class Vehicle:\n    def drive(self):\n        return "Driving vehicle"\n',
      solution: 'class Vehicle:\n    def drive(self):\n        return "Driving vehicle"\nclass ElectricCar(Vehicle):\n    def drive(self):\n        return "Driving silently on electric battery!"\ncar = ElectricCar()\nprint(car.drive())'
    }
  },
  {
    id: 'py-lesson-26',
    milestoneId: 'ms-python',
    order: 26,
    title: '26. Polymorphism & Method Overriding',
    durationMinutes: 20,
    conceptExplanation: 'Polymorphism (meaning "many forms") allows different classes to define methods with the same name. In Python, this is enhanced by "duck typing" ("if it walks like a duck and quacks like a duck, it\'s a duck"), where callers interact with objects based on their interface, not their exact inheritance tree.',
    whyImportant: 'Polymorphism allows you to write clean, decoupled pipeline code that processes different models, databases, or file formats through a uniform interface.',
    syntax: `for model in [linear_reg, decision_tree, neural_net]:
    model.fit(X_train, y_train)
    predictions = model.predict(X_test)`,
    exampleDescription: 'Uniform evaluation interface across diverse machine learning algorithms.',
    codeSnippet: `class LinearRegressionModel:
    def fit(self, X, y):
        print("Fitting Ordinary Least Squares normal equations...")
    def predict(self, X):
        return [42.0]

class RandomForestModel:
    def fit(self, X, y):
        print("Training 100 bagged decision trees...")
    def predict(self, X):
        return [44.5]

class DeepLearningModel:
    def fit(self, X, y):
        print("Backpropagating Adam optimizer across 50 epochs...")
    def predict(self, X):
        return [43.8]

# Polymorphic Pipeline
models = [LinearRegressionModel(), RandomForestModel(), DeepLearningModel()]

for m in models:
    print(f"\\n--- Evaluating {m.__class__.__name__} ---")
    m.fit(None, None)
    pred = m.predict(None)
    print(f"Prediction Output: {pred}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 1-15: Three distinct model classes that each implement fit() and predict() methods.',
      'Line 18: A list containing instances of all three distinct classes.',
      'Line 20-24: The evaluation loop treats all three objects identically through their common fit and predict interface.'
    ],
    realWorldExample: 'Scikit-Learn\'s Pipeline and GridSearchCV rely entirely on polymorphism: any object implementing fit(X, y) and transform(X) or predict(X) can be slotted into a pipeline.',
    commonMistakes: [
      {
        mistake: 'Writing rigid type checks with if type(obj) == SpecificClass instead of relying on duck typing or isinstance().',
        fix: 'Follow duck typing: call the required method directly, or use abc.ABC (Abstract Base Classes) to enforce interfaces.'
      }
    ],
    practiceExercises: [
      {
        task: 'Create three notification classes (EmailNotifier, SMSNotifier, SlackNotifier) each with a send(message) method. Iterate through them polymorphically.',
        hint: 'class EmailNotifier: def send(self, m): print("Email:", m)',
        solutionSnippet: 'class Email: def send(self, m): print("Email:", m)\\nclass SMS: def send(self, m): print("SMS:", m)\\nfor n in [Email(), SMS()]: n.send("Alert!")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is "duck typing" in Python?',
        options: [
          'A technique for debugging code with rubber ducks',
          'A typing philosophy where an object\'s suitability is determined by the presence of certain methods and properties, rather than its inheritance hierarchy',
          'Static type checking at compile time',
          'A deprecated feature in Python 2'
        ],
        correctIndex: 1,
        explanation: 'Duck typing means if an object implements the required method (e.g. .read() or .predict()), Python executes it without requiring a specific parent class.'
      },
      {
        question: 'What is method overriding?',
        options: [
          'Deleting a method from memory',
          'A child class providing a specific implementation of a method that is already provided by its parent class',
          'Calling two methods at once',
          'Renaming a function'
        ],
        correctIndex: 1,
        explanation: 'Method overriding redefines a parent method inside the child class to tailor behavior.'
      },
      {
        question: 'Which Python standard module allows you to define formal Abstract Base Classes (ABCs)?',
        options: ['interface', 'abc', 'contracts', 'typing'],
        correctIndex: 1,
        explanation: 'The abc module (from abc import ABC, abstractmethod) enforces that subclasses must implement abstract methods.'
      },
      {
        question: 'Why is polymorphism beneficial in software engineering?',
        options: [
          'It makes the computer run faster',
          'It allows writing general algorithms that can operate on different types without modification (decoupling and extensibility)',
          'It eliminates the need for testing',
          'It uses less disk space'
        ],
        correctIndex: 1,
        explanation: 'Polymorphism allows new classes to be introduced into an application without rewriting existing consumers.'
      },
      {
        question: 'Can built-in operators like + and * behave polymorphically in Python?',
        options: [
          'No, + only works on integers',
          'Yes, + adds numbers, concatenates strings, and merges lists via dunder methods like __add__',
          'Only in math libraries',
          'Only for floats'
        ],
        correctIndex: 1,
        explanation: 'Operator overloading enables built-in operators to behave polymorphically across numeric, string, and collection types.'
      }
    ],
    miniChallenge: {
      title: 'Polymorphic Area Calculator',
      prompt: 'Create Shape, Circle(radius), and Square(side) classes with an area() method. Compute total area for a list of mixed shapes.',
      starterCode: 'import math\n# Define Circle and Square\n',
      solution: 'import math\nclass Circle: \n    def __init__(self, r): self.r = r\n    def area(self): return math.pi * self.r**2\nclass Square:\n    def __init__(self, s): self.s = s\n    def area(self): return self.s**2\nshapes = [Circle(2), Square(4)]\ntotal_area = sum(s.area() for s in shapes)\nprint(f"Total Area: {total_area:.2f}")'
    }
  },
  {
    id: 'py-lesson-27',
    milestoneId: 'ms-python',
    order: 27,
    title: '27. Encapsulation & Access Modifiers',
    durationMinutes: 20,
    conceptExplanation: 'Encapsulation bundles data attributes and the methods that operate on them inside a class, restricting direct unauthorized access to internal state. In Python, encapsulation is implemented via naming conventions: public (name), protected (_name with single underscore), and private (__name with double underscore, which triggers name mangling). Managed access is provided using the @property decorator.',
    whyImportant: 'Encapsulation protects sensitive internal states (like API tokens, database connections, and model weights) from accidental overwriting, ensuring data integrity.',
    syntax: `class Account:
    def __init__(self, balance):
        self._protected = 100
        self.__private_balance = balance

    @property
    def balance(self):
        return self.__private_balance`,
    exampleDescription: 'A secure financial account class utilizing the @property decorator and validation setters.',
    codeSnippet: `class TradingWallet:
    def __init__(self, initial_funds: float):
        if initial_funds < 0:
            raise ValueError("Initial funds cannot be negative.")
        self.__balance = initial_funds # Private attribute

    @property
    def balance(self) -> float:
        """Getter for wallet balance."""
        return self.__balance

    @balance.setter
    def balance(self, new_balance: float):
        """Setter with validation guard."""
        if new_balance < 0:
            raise ValueError("Insufficient funds: balance cannot drop below zero.")
        self.__balance = new_balance

    def trade(self, cost: float):
        if cost > self.__balance:
            print("Trade DECLINED: Insufficient liquidity.")
            return False
        self.__balance -= cost
        print(f"Trade executed: \${cost:.2f} spent. Remaining: \${self.__balance:.2f}")
        return True

# Usage
wallet = TradingWallet(500.0)
print(f"Initial balance: \${wallet.balance:.2f}")
wallet.trade(150.0)
wallet.balance = 400.0 # Validated setter invoked
print(f"Updated balance: \${wallet.balance:.2f}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 5: self.__balance uses a double underscore prefix to make it private.',
      'Line 7-10: @property decorator defines a clean getter, accessible as wallet.balance (without parentheses).',
      'Line 12-17: @balance.setter defines the setter method, validating inputs before mutating the private attribute.',
      'Line 19: trade method encapsulates transaction logic and guards against overdrawing.'
    ],
    realWorldExample: 'In data security layers, database credentials and encryption keys are encapsulated in private variables to prevent accidental serialization into public logging outputs.',
    commonMistakes: [
      {
        mistake: 'Trying to access private attribute wallet.__balance directly from outside, causing an AttributeError.',
        fix: 'Access it through its public property getter (wallet.balance) or method.'
      }
    ],
    practiceExercises: [
      {
        task: 'Create a Temperature class with a private __celsius attribute, and use @property and @setter to ensure Celsius cannot be set below absolute zero (-273.15).',
        hint: 'if val < -273.15: raise ValueError("Below absolute zero")',
        solutionSnippet: 'class Temperature:\\n    def __init__(self, c): self.__c = c\\n    @property\\n    def c(self): return self.__c\\n    @c.setter\\n    def c(self, val):\\n        if val < -273.15: raise ValueError("Too cold")\\n        self.__c = val\\nt = Temperature(20)\\nt.c = 25\\nprint("Temp:", t.c)'
      }
    ],
    quizQuestions: [
      {
        question: 'What convention indicates a "protected" attribute in Python that should not be accessed outside the class hierarchy?',
        options: ['A single leading underscore (_attribute)', 'A double leading underscore (__attribute)', 'The "protected" keyword', 'UPPERCASE'],
        correctIndex: 0,
        explanation: 'A single leading underscore (_name) is the PEP 8 convention signaling an internal implementation detail.'
      },
      {
        question: 'What occurs behind the scenes when you prefix an attribute with a double underscore (__attribute) in Python?',
        options: [
          'It is hardware encrypted with AES-256',
          'Python applies "Name Mangling", renaming the attribute internally to _ClassName__attribute to prevent accidental subclass collision',
          'It is deleted from memory',
          'It becomes a global constant'
        ],
        correctIndex: 1,
        explanation: 'Name mangling renames __attr to _ClassName__attr to avoid namespace collisions in subclasses.'
      },
      {
        question: 'Which decorator is used in Python to define a getter property?',
        options: ['@getter', '@property', '@accessor', '@read'],
        correctIndex: 1,
        explanation: '@property turns a method into a read-only attribute getter.'
      },
      {
        question: 'What is the main advantage of using the @property decorator over traditional get_value() / set_value() methods?',
        options: [
          'It runs 10 times faster',
          'It maintains a clean attribute-access syntax (obj.value) while preserving the ability to add validation logic later without breaking existing API callers',
          'It eliminates all bugs',
          'It automatically serializes to JSON'
        ],
        correctIndex: 1,
        explanation: '@property allows backwards-compatible addition of validation logic while preserving simple dot notation.'
      },
      {
        question: 'Can you enforce true, unbreakable private variables in Python at the C-level?',
        options: [
          'Yes, with the private keyword',
          'No, in Python "we are all consenting adults here"; mangled names can still be accessed if explicitly targeted (_Class__attr)',
          'Only in virtual machines',
          'Only with Cython'
        ],
        correctIndex: 1,
        explanation: 'Guido van Rossum famously described Python\'s philosophy as "we are all consenting adults here". Encapsulation is enforced by convention and name mangling, not rigid hardware locks.'
      }
    ],
    miniChallenge: {
      title: 'Secure Password Container',
      prompt: 'Build a UserAccount class where the password is stored as a private hashed string and can only be verified, never read in plaintext.',
      starterCode: 'class UserAccount:\n    def __init__(self, username, password):\n        # Store private hash\n        pass\n',
      solution: 'class UserAccount:\n    def __init__(self, username, password):\n        self.username = username\n        self.__hashed = hash(password)\n    def check_password(self, attempt):\n        return hash(attempt) == self.__hashed\nuser = UserAccount("alex", "secret123")\nprint(user.check_password("secret123")) # True\nprint(user.check_password("wrong")) # False'
    }
  }
];

export const allPythonMilestoneLessons: CareerLesson[] = [
  ...pythonAdvancedLessons
];
