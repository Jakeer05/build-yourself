import { CareerLesson } from '../../types';

export const dataAnalysisLessons: CareerLesson[] = [
  {
    id: 'da-lesson-1',
    milestoneId: 'ms-data-analysis',
    order: 1,
    title: '1. NumPy: Arrays, Vectorization & Boolean Indexing',
    durationMinutes: 25,
    conceptExplanation: 'NumPy (Numerical Python) is the foundational scientific library in Python. It provides the ndarray (N-dimensional array), a contiguous block of homogeneous memory that enables vectorized operations. Vectorization allows mathematical operations to be expressed on entire arrays without slow Python loops, running at compiled C-speeds.',
    whyImportant: 'Pandas, Scikit-Learn, PyTorch, and TensorFlow are all built on NumPy array structures. Vectorized array processing is crucial for analyzing gigabytes of tabular and sensor data.',
    syntax: `# NumPy Array Creation and Vectorized Math
import numpy as np
arr = np.array([10, 20, 30, 40])
result = (arr * 2) + 5 # Vectorized broadcast: [25, 45, 65, 85]
mask = result > 50      # Boolean array: [False, False, True, True]
filtered = result[mask] # [65, 85]`,
    exampleDescription: 'Vectorized financial portfolio risk adjustment across 1,000 simulated asset returns.',
    codeSnippet: `import numpy as np

# Daily returns for 5 tech equities over 4 trading days
returns = np.array([
    [0.015, -0.008,  0.021,  0.004, -0.012],
    [0.022,  0.011, -0.005,  0.018,  0.009],
    [-0.010, -0.014, -0.025, -0.002, -0.030],
    [0.035,  0.019,  0.008,  0.025,  0.014]
])

# Vectorized statistics along axis 0 (across trading days for each asset)
mean_returns = np.mean(returns, axis=0)
volatilities = np.std(returns, axis=0)

# Sharpe Ratio proxy (Return / Risk)
sharpe_proxies = mean_returns / volatilities

# Boolean filter: Assets with positive Sharpe ratio
top_assets_mask = sharpe_proxies > 0.5
selected_returns = returns[:, top_assets_mask]

print(f"Asset Mean Daily Returns: {np.round(mean_returns, 4)}")
print(f"Asset Volatilities:       {np.round(volatilities, 4)}")
print(f"Sharpe Ratio Proxies:     {np.round(sharpe_proxies, 3)}")
print(f"Number of qualifying assets: {np.sum(top_assets_mask)}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 4-9: Creating a 2D ndarray of floating-point returns.',
      'Line 12-13: Computing mean and standard deviation along axis=0 (column-wise across days).',
      'Line 16: Vectorized division computing Sharpe proxies with zero loops.',
      'Line 19-20: Boolean indexing selecting only columns meeting the performance criteria.'
    ],
    realWorldExample: 'Goldman Sachs and Citadel use NumPy-accelerated linear algebra to rebalance quantitative algorithmic portfolios holding thousands of stocks in under 5 milliseconds.',
    commonMistakes: [
      {
        mistake: 'Using Python for-loops to iterate over NumPy array elements.',
        fix: 'Loops negate NumPy performance advantages. Always use vectorized operations, universal functions (np.sin, np.exp), or broadcasting.'
      }
    ],
    practiceExercises: [
      {
        task: 'Create an array of numbers from 1 to 20, square each number using vectorization, and filter out numbers greater than 100.',
        hint: 'Use np.arange(1, 21), arr**2, and arr[arr <= 100].',
        solutionSnippet: 'import numpy as np\narr = np.arange(1, 21)\nsquares = arr ** 2\nresult = squares[squares <= 100]\nprint(result)'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the primary benefit of NumPy ndarrays over standard Python lists?',
        options: [
          'They can store different data types in the same array',
          'They store homogeneous data in contiguous memory, enabling C-speed SIMD vectorization',
          'They automatically save data to disk',
          'They support emojis'
        ],
        correctIndex: 1,
        explanation: 'Contiguous memory allocation and homogeneous types eliminate Python object overhead and enable processor-level SIMD operations.'
      },
      {
        question: 'What does axis=0 specify in a 2D NumPy calculation like np.sum(matrix, axis=0)?',
        options: [
          'Calculation down the columns (collapsing rows)',
          'Calculation across the rows (collapsing columns)',
          'Summing only the diagonal elements',
          'Summing the entire matrix to a single scalar'
        ],
        correctIndex: 0,
        explanation: 'axis=0 operates vertically along rows, returning one aggregate value per column.'
      },
      {
        question: 'What is NumPy "broadcasting"?',
        options: [
          'Sending arrays over the internet via WebSockets',
          'The set of rules allowing arithmetic operations on arrays of different shapes',
          'Printing arrays to multiple monitors',
          'Converting integers to strings'
        ],
        correctIndex: 1,
        explanation: 'Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations without copying data.'
      },
      {
        question: 'How do you generate an array of 50 evenly spaced numbers between 0 and 1?',
        options: ['np.range(0, 1, 50)', 'np.linspace(0, 1, 50)', 'np.arange(0, 1, 50)', 'np.random(0, 1, 50)'],
        correctIndex: 1,
        explanation: 'np.linspace(start, stop, num) generates num evenly spaced samples over the closed interval [start, stop].'
      },
      {
        question: 'What does the expression arr[arr % 2 == 0] return?',
        options: [
          'Only the even numbers from arr',
          'The boolean array [True, False...]',
          'The remainder of division by 2',
          'The array sorted by 2'
        ],
        correctIndex: 0,
        explanation: 'Boolean indexing applies a condition mask and returns a new 1D array containing only the elements where the condition is True.'
      }
    ],
    miniChallenge: {
      title: 'Normalize Array Function',
      prompt: 'Write a function min_max_scale(arr) that scales array elements between 0 and 1 using formula: (x - min) / (max - min).',
      starterCode: `import numpy as np

def min_max_scale(arr):
    # Your implementation here
    pass

data = np.array([10, 20, 30, 40, 50])
print(min_max_scale(data)) # Expected: [0.  0.25 0.5  0.75 1.  ]`,
      solution: `import numpy as np

def min_max_scale(arr):
    a = np.array(arr, dtype=float)
    return (a - np.min(a)) / (np.max(a) - np.min(a))

data = np.array([10, 20, 30, 40, 50])
print(min_max_scale(data))`
    }
  },
  {
    id: 'da-lesson-2',
    milestoneId: 'ms-data-analysis',
    order: 2,
    title: '2. Pandas: Series, DataFrames & Data Munging',
    durationMinutes: 30,
    conceptExplanation: 'Pandas is the premier data manipulation library for Python. It introduces two core data structures: Series (1D labeled array) and DataFrame (2D tabular labeled dataset with rows and columns). Pandas provides fast methods for reading CSV/Parquet/SQL, filtering, reshaping, handling missing values, and computing summary statistics.',
    whyImportant: '90% of a Data Analyst or Data Scientist’s time is spent cleaning and preparing data. Mastering Pandas syntax (loc, iloc, dropna, fillna, apply, groupby) is an absolute prerequisite for every job in tech.',
    syntax: `# Pandas Core Operations
import pandas as pd
df = pd.read_csv('sales.csv')
filtered = df.loc[df['revenue'] > 1000, ['customer_id', 'revenue']]
df['clean_price'] = df['price'].fillna(df['price'].median())`,
    exampleDescription: 'Reading raw customer transaction logs, cleaning missing addresses, and computing customer segment revenues.',
    codeSnippet: `import pandas as pd
import numpy as np

# Create simulated raw e-commerce DataFrame
raw_data = {
    'order_id': [1001, 1002, 1003, 1004, 1005, 1006],
    'customer': ['Acme Corp', 'Beta LLC', 'Gamma Inc', 'Delta Co', 'Acme Corp', 'Beta LLC'],
    'category': ['Software', 'Hardware', 'Software', np.nan, 'Consulting', 'Hardware'],
    'amount': [1200.50, 450.00, np.nan, 890.00, 3200.00, 610.00],
    'status': ['Delivered', 'Delivered', 'Pending', 'Cancelled', 'Delivered', 'Delivered']
}
df = pd.DataFrame(raw_data)

# 1. Inspect missing values
print("--- Missing Values Count ---")
print(df.isnull().sum())

# 2. Impute missing amount with median
median_amount = df['amount'].median()
df['amount'] = df['amount'].fillna(median_amount)

# 3. Fill missing category with 'Uncategorized'
df['category'] = df['category'].fillna('Uncategorized')

# 4. Filter for successful deliveries
delivered_df = df[df['status'] == 'Delivered']

# 5. Group by customer to calculate total spend and order count
customer_summary = delivered_df.groupby('customer').agg(
    total_spend=('amount', 'sum'),
    orders=('order_id', 'count')
).reset_index()

print("\\n--- Customer Spend Summary ---")
print(customer_summary)`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 11: Converting raw dictionary to a structured Pandas DataFrame.',
      'Line 15: Auditing null values using df.isnull().sum().',
      'Line 19: Imputing missing numerical values using fillna() with the median.',
      'Line 25: Boolean filtering for rows where status == "Delivered".',
      'Line 28-31: Using groupby() with named aggregation agg() to compute summary revenue and order counts per customer.'
    ],
    realWorldExample: 'Airbnb data scientists clean millions of nightly host bookings, handling currency conversions, cancellation penalties, and missing review scores using optimized Pandas pipelines.',
    commonMistakes: [
      {
        mistake: 'Using chain indexing like df["col"][0] = val which triggers SettingWithCopyWarning.',
        fix: 'Always use explicit indexing with df.loc[row_indexer, "col"] = val.'
      }
    ],
    practiceExercises: [
      {
        task: 'Create a DataFrame of 3 products with prices [10, np.nan, 30]. Fill the missing value with 20 and compute the mean price.',
        hint: 'Use df["price"].fillna(20).mean().',
        solutionSnippet: 'import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"price": [10, np.nan, 30]})\ndf["price"] = df["price"].fillna(20)\nprint("Mean:", df["price"].mean())'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the primary difference between df.loc and df.iloc in Pandas?',
        options: [
          'loc uses label-based indexing; iloc uses integer position-based indexing',
          'loc is for rows only; iloc is for columns only',
          'loc is deprecated in modern Pandas',
          'iloc works only with datetime strings'
        ],
        correctIndex: 0,
        explanation: 'loc selects data using column and row names/labels; iloc selects using numerical integer offsets (0, 1, 2...).'
      },
      {
        question: 'Which method returns the summary statistics (mean, std, min, quartiles, max) of numeric DataFrame columns?',
        options: ['df.info()', 'df.describe()', 'df.summary()', 'df.stats()'],
        correctIndex: 1,
        explanation: 'df.describe() generates descriptive statistics summarizing the central tendency, dispersion, and shape of dataset columns.'
      },
      {
        question: 'How do you remove all rows containing ANY missing (NaN) values in a DataFrame?',
        options: ['df.remove_nan()', 'df.dropna()', 'df.delete_nulls()', 'df.strip_empty()'],
        correctIndex: 1,
        explanation: 'df.dropna() drops rows with missing values. Pass axis=1 to drop columns with missing values.'
      },
      {
        question: 'Which Pandas function joins two DataFrames based on a shared key column (analogous to SQL JOIN)?',
        options: ['pd.concat()', 'pd.merge()', 'pd.append()', 'pd.attach()'],
        correctIndex: 1,
        explanation: 'pd.merge(df1, df2, on="key_col", how="inner") executes relational joins on DataFrame tables.'
      },
      {
        question: 'What does the method df.drop_duplicates(subset=["email"]) do?',
        options: [
          'Deletes the email column entirely',
          'Keeps only the first occurrence of each unique email address, dropping repeated rows',
          'Highlights duplicate emails in yellow',
          'Converts emails to lowercase'
        ],
        correctIndex: 1,
        explanation: 'drop_duplicates removes duplicate rows based on the specified column subset.'
      }
    ],
    miniChallenge: {
      title: 'Top Category Finder',
      prompt: 'Write a function top_category(df) that takes a DataFrame with "category" and "revenue" columns and returns the category name with the highest total revenue.',
      starterCode: `import pandas as pd

def top_category(df):
    # Your groupby implementation here
    pass

data = pd.DataFrame({
    'category': ['Tech', 'Home', 'Tech', 'Food', 'Home'],
    'revenue': [500, 200, 700, 150, 300]
})
print(top_category(data)) # Expected: 'Tech'`,
      solution: `import pandas as pd

def top_category(df):
    grouped = df.groupby('category')['revenue'].sum()
    return str(grouped.idxmax())

data = pd.DataFrame({
    'category': ['Tech', 'Home', 'Tech', 'Food', 'Home'],
    'revenue': [500, 200, 700, 150, 300]
})
print(top_category(data))`
    }
  },
  {
    id: 'da-lesson-3',
    milestoneId: 'ms-data-analysis',
    order: 3,
    title: '3. Exploratory Data Analysis (EDA) & Feature Engineering',
    durationMinutes: 30,
    conceptExplanation: 'Exploratory Data Analysis (EDA) is the rigorous process of investigating datasets to uncover underlying patterns, spot anomalies, test assumptions, and check distributions before statistical modeling. Feature engineering is the art of transforming raw variables into informative predictor signals (e.g. log transformations, one-hot encoding, date feature extraction, binning, interaction terms).',
    whyImportant: 'Better features beat better algorithms. A simple Logistic Regression model with well-engineered domain features frequently outperforms a complex neural network trained on noisy raw inputs.',
    syntax: `# Feature Engineering in Python
import pandas as pd
df['order_date'] = pd.to_datetime(df['order_date'])
df['order_dayofweek'] = df['order_date'].dt.day_name()
df['is_weekend'] = df['order_date'].dt.weekday >= 5
df['log_revenue'] = np.log1p(df['revenue']) # Fix right-skew`,
    exampleDescription: 'Preparing a churn dataset: extracting temporal signals, one-hot encoding categorical variables, and capping extreme outliers.',
    codeSnippet: `import pandas as pd
import numpy as np

# Sample customer churn dataset
df = pd.DataFrame({
    'signup_date': ['2023-01-15', '2023-03-22', '2023-06-10', '2023-08-01'],
    'monthly_charges': [29.99, 79.99, 120.00, 45.00],
    'contract_type': ['Month-to-month', 'One-year', 'Month-to-month', 'Two-year'],
    'support_tickets': [5, 1, 8, 0],
    'churned': [1, 0, 1, 0]
})

# 1. Datetime feature extraction
df['signup_date'] = pd.to_datetime(df['signup_date'])
reference_date = pd.to_datetime('2024-01-01')
df['tenure_days'] = (reference_date - df['signup_date']).dt.days

# 2. Ratio feature (High tickets relative to short tenure signals churn risk)
df['ticket_frequency'] = df['support_tickets'] / (df['tenure_days'] / 30)

# 3. Categorical encoding via One-Hot Encoding
encoded_df = pd.get_dummies(df, columns=['contract_type'], drop_first=True)

print("--- Engineered Feature Matrix ---")
print(encoded_df[['tenure_days', 'ticket_frequency', 'contract_type_One-year', 'churned']])`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 13-15: Parsing string dates into Pandas datetime objects and calculating tenure duration in days.',
      'Line 18: Creating a domain-specific ratio feature (support tickets per month of tenure).',
      'Line 21: One-hot encoding the contract_type column using pd.get_dummies with drop_first=True to avoid collinearity.',
      'Line 24: Displaying the clean numerical feature matrix ready for machine learning algorithms.'
    ],
    realWorldExample: 'Instacart created engineered features like "days since last order", "reorder ratio per product", and "hour of day" to predict which grocery items users will add to their weekly cart.',
    commonMistakes: [
      {
        mistake: 'Data leakage: fitting encoders or scalers on the entire dataset before splitting into train/test sets.',
        fix: 'Always split data into train and test cohorts first. Fit scalers and encoders ONLY on train data, and transform test data using the fitted parameters.'
      }
    ],
    practiceExercises: [
      {
        task: 'Extract the day of the week and month number from a date column containing ["2024-05-12", "2024-11-28"].',
        hint: 'Use pd.to_datetime(df["date"]).dt.day_name() and .dt.month.',
        solutionSnippet: 'import pandas as pd\ns = pd.to_datetime(pd.Series(["2024-05-12", "2024-11-28"]))\nprint("Days:", s.dt.day_name().tolist())\nprint("Months:", s.dt.month.tolist())'
      }
    ],
    quizQuestions: [
      {
        question: 'Why do we apply a log transformation (np.log1p) to highly skewed numerical features?',
        options: [
          'To compress the long right tail and make the distribution closer to normal (Gaussian)',
          'To turn all numbers into negative integers',
          'To encrypt sensitive user numbers',
          'To reduce the number of rows in the table'
        ],
        correctIndex: 0,
        explanation: 'Log transforms compress large outlier values, reducing positive skew and helping linear models converge.'
      },
      {
        question: 'What is One-Hot Encoding?',
        options: [
          'Converting categorical strings into binary (0/1) indicator columns for each distinct category',
          'Compressing data into a ZIP file',
          'Replacing missing numbers with -1',
          'Sorting columns by temperature'
        ],
        correctIndex: 0,
        explanation: 'One-hot encoding maps discrete categorical categories into individual columns containing 1 if present or 0 otherwise.'
      },
      {
        question: 'What is data leakage in machine learning feature engineering?',
        options: [
          'When information from outside the training dataset (such as target labels or future test data) is inadvertently used to create features',
          'When a hard drive runs out of storage space',
          'When column names have spaces',
          'When queries take longer than 60 seconds'
        ],
        correctIndex: 0,
        explanation: 'Data leakage occurs when test information bleeds into training, causing artificially inflated evaluation scores that fail in production.'
      },
      {
        question: 'Why is drop_first=True commonly passed to pd.get_dummies() for linear models?',
        options: [
          'To prevent multicollinearity (the dummy variable trap)',
          'To save RAM memory only',
          'Because the first category is always invalid',
          'To speed up internet downloads'
        ],
        correctIndex: 0,
        explanation: 'If a category has K classes, K-1 binary columns contain complete information. The omitted category serves as the reference baseline.'
      },
      {
        question: 'What correlation coefficient indicates a strong inverse (negative) linear relationship between two variables?',
        options: ['+0.95', '0.00', '-0.88', '+0.50'],
        correctIndex: 2,
        explanation: 'Pearson correlation ranges from -1.0 to +1.0. A value of -0.88 indicates a strong negative relationship (as X increases, Y decreases).'
      }
    ],
    miniChallenge: {
      title: 'Target Encoder Builder',
      prompt: 'Write a function compute_churn_rate_by_category(df) that returns a dictionary mapping each category to its average churn rate.',
      starterCode: `import pandas as pd

def compute_churn_rate_by_category(df):
    # Your implementation here
    pass

df = pd.DataFrame({
    'category': ['Free', 'Paid', 'Free', 'Enterprise', 'Paid'],
    'churn': [1, 0, 1, 0, 1]
})
print(compute_churn_rate_by_category(df)) # Expected: {'Enterprise': 0.0, 'Free': 1.0, 'Paid': 0.5}`,
      solution: `import pandas as pd

def compute_churn_rate_by_category(df):
    return df.groupby('category')['churn'].mean().to_dict()

df = pd.DataFrame({
    'category': ['Free', 'Paid', 'Free', 'Enterprise', 'Paid'],
    'churn': [1, 0, 1, 0, 1]
})
print(compute_churn_rate_by_category(df))`
    }
  }
];
