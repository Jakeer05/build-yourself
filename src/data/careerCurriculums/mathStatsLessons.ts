import { CareerLesson } from '../../types';

export const mathStatsLessons: CareerLesson[] = [
  {
    id: 'math-stat-1',
    milestoneId: 'ms-math-stats',
    order: 1,
    title: '1. Linear Algebra: Vectors, Matrices & Dot Products',
    durationMinutes: 25,
    conceptExplanation: 'Linear algebra is the mathematical language of machine learning. Data is represented as vectors (1D arrays of numbers) and matrices (2D tables). The dot product computes the sum of the element-wise products of two vectors, measuring their directional alignment and forming the core calculation in neural network layers and cosine similarity.',
    whyImportant: 'Every single dataset, image, and text embedding in Data Science and AI is stored as a matrix or tensor. Vector operations run thousands of times faster on modern GPUs than loops through hardware vectorization.',
    syntax: `# Vector Dot Product in Python / NumPy
import numpy as np
v1 = np.array([2, 4, 6])
v2 = np.array([1, 3, 5])
dot_product = np.dot(v1, v2) # 2*1 + 4*3 + 6*5 = 44`,
    exampleDescription: 'Computing user similarity between two customer preference profiles using vector dot products.',
    codeSnippet: `import numpy as np

# User preference scores on 4 movie genres: [Action, Comedy, Drama, SciFi]
user_alice = np.array([5, 2, 4, 1])
user_bob = np.array([4, 1, 5, 2])
user_charlie = np.array([1, 5, 1, 4])

# Compute dot product (alignment)
dot_ab = np.dot(user_alice, user_bob)
dot_ac = np.dot(user_alice, user_charlie)

# Cosine similarity: dot_product / (norm_a * norm_b)
similarity_ab = dot_ab / (np.linalg.norm(user_alice) * np.linalg.norm(user_bob))
similarity_ac = dot_ac / (np.linalg.norm(user_alice) * np.linalg.norm(user_charlie))

print(f"Alice & Bob alignment score: {dot_ab} (Cosine: {similarity_ab:.3f})")
print(f"Alice & Charlie alignment score: {dot_ac} (Cosine: {similarity_ac:.3f})")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 4-6: Constructing 1D NumPy arrays representing feature vectors.',
      'Line 9-10: Calculating the vector dot product using np.dot().',
      'Line 13-14: Normalizing by the L2 vector norms (np.linalg.norm) to compute cosine similarity, bounding values between -1 and +1.',
      'Line 16-17: Printing the affinity scores demonstrating Alice shares higher taste similarity with Bob.'
    ],
    realWorldExample: 'Spotify and Netflix recommendation engines represent millions of songs and movies as 128-dimensional latent vectors and use matrix multiplication to recommend items within milliseconds.',
    commonMistakes: [
      {
        mistake: 'Multiplying matrices with incompatible inner dimensions (e.g. attempting (3x2) @ (3x2)).',
        fix: 'Matrix multiplication (A @ B) requires the number of columns in A to match the number of rows in B: (M x K) @ (K x N) yields (M x N).'
      }
    ],
    practiceExercises: [
      {
        task: 'Create two 3D vectors representing prices and purchased quantities, and compute total shopping cart revenue using np.dot().',
        hint: 'Multiply prices vector [12.5, 4.0, 25.0] with quantities [3, 10, 2].',
        solutionSnippet: 'import numpy as np\nprices = np.array([12.5, 4.0, 25.0])\nqtys = np.array([3, 10, 2])\ntotal = np.dot(prices, qtys)\nprint(f"Total: ${total:.2f}")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the dot product of vectors [1, 3] and [4, -1]?',
        options: ['1', '7', '-1', '12'],
        correctIndex: 0,
        explanation: 'The calculation is (1 * 4) + (3 * -1) = 4 - 3 = 1.'
      },
      {
        question: 'What shape results from multiplying a (4, 3) matrix by a (3, 2) matrix?',
        options: ['(4, 2)', '(3, 3)', '(4, 3)', '(2, 4)'],
        correctIndex: 0,
        explanation: 'The inner dimensions (3 and 3) cancel out, yielding the outer dimensions (4, 2).'
      },
      {
        question: 'When two non-zero vectors are perpendicular (orthogonal), what is their dot product?',
        options: ['1', '0', '-1', 'Infinity'],
        correctIndex: 1,
        explanation: 'Orthogonal vectors have a dot product of 0 because cos(90°) = 0.'
      },
      {
        question: 'Why are vector operations preferred over Python for-loops in Data Science?',
        options: [
          'Python for-loops cannot store floating-point numbers',
          'NumPy uses C-level SIMD hardware vectorization, running 50x-100x faster',
          'Vector operations use less computer screen space',
          'For-loops are deprecated in modern Python'
        ],
        correctIndex: 1,
        explanation: 'NumPy executes compiled C routines with Single Instruction Multiple Data (SIMD) processor instructions.'
      },
      {
        question: 'What does np.linalg.norm(vector) compute?',
        options: [
          'The average value of elements',
          'The Euclidean length (L2 norm) of the vector',
          'The number of dimensions',
          'The sorted values'
        ],
        correctIndex: 1,
        explanation: 'The L2 norm is the square root of the sum of squared vector components: sqrt(sum(x_i^2)).'
      }
    ],
    miniChallenge: {
      title: 'Vector Cosine Similarity Calculator',
      prompt: 'Write a function cosine_similarity(v1, v2) that takes two Python lists, converts them to NumPy arrays, and returns the cosine similarity rounded to 4 decimals.',
      starterCode: `import numpy as np

def cosine_similarity(v1, v2):
    # Your implementation here
    pass

print(cosine_similarity([1, 2, 3], [1, 2, 3])) # Expected: 1.0`,
      solution: `import numpy as np

def cosine_similarity(v1, v2):
    a = np.array(v1)
    b = np.array(v2)
    return round(float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))), 4)

print(cosine_similarity([1, 2, 3], [1, 2, 3]))`
    }
  },
  {
    id: 'math-stat-2',
    milestoneId: 'ms-math-stats',
    order: 2,
    title: '2. Descriptive Statistics: Mean, Median, Variance & Outliers',
    durationMinutes: 25,
    conceptExplanation: 'Descriptive statistics summarizes and describes the core characteristics of a dataset. Mean is the arithmetic average, median is the 50th percentile (robust to outliers), variance measures data spread around the mean, and standard deviation is the square root of variance in original measurement units. The Interquartile Range (IQR = Q3 - Q1) detects skewed outliers.',
    whyImportant: 'Before training any model, a Data Scientist or Analyst must understand the shape of the data. Training a model on raw data distorted by extreme anomalies will skew predictions and ruin revenue forecasts.',
    syntax: `# Descriptive Statistics in Python
import numpy as np
data = [10, 12, 14, 15, 18, 20, 100] # 100 is an outlier
mean_val = np.mean(data)     # 27.0 (skewed)
median_val = np.median(data) # 15.0 (robust)
std_val = np.std(data)       # Standard deviation`,
    exampleDescription: 'Auditing salary distributions across an organization and identifying extreme anomalies using the IQR rule.',
    codeSnippet: `import numpy as np

salaries = np.array([45000, 52000, 48000, 55000, 51000, 62000, 58000, 49000, 53000, 450000])

# Measures of Central Tendency
mean_salary = np.mean(salaries)
median_salary = np.median(salaries)
std_salary = np.std(salaries)

# Outlier Detection via IQR (Interquartile Range)
q25, q75 = np.percentile(salaries, [25, 75])
iqr = q75 - q25
lower_bound = q25 - (1.5 * iqr)
upper_bound = q75 + (1.5 * iqr)

outliers = salaries[(salaries < lower_bound) | (salaries > upper_bound)]

print(f"Mean Salary:   \${mean_salary:,.2f} (Distorted by CEO)")
print(f"Median Salary: \${median_salary:,.2f} (True typical salary)")
print(f"IQR Spread:    \${iqr:,.2f} (Q1: \${q25:,.0f}, Q3: \${q75:,.0f})")
print(f"Detected Outliers: {outliers.tolist()}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 3: Dataset with 9 regular salaries around \$50k and one executive compensation outlier at \$450k.',
      'Line 6-8: Computing mean, median, and standard deviation. Notice mean (\$87k) is almost double median (\$52.5k).',
      'Line 11-14: Calculating the 25th and 75th percentiles to establish IQR and the 1.5 * IQR outlier fences.',
      'Line 16: Boolean indexing in NumPy to isolate values falling outside the valid distribution bounds.'
    ],
    realWorldExample: 'Credit card fraud detection algorithms (e.g. Visa, Mastercard) flag transactions that exceed 3 standard deviations above a cardholder’s rolling 30-day median purchase amount.',
    commonMistakes: [
      {
        mistake: 'Reporting the arithmetic mean on highly skewed data like house prices or salaries.',
        fix: 'Always report the median and IQR alongside the mean for skewed distributions, as the mean is heavily pulled by extreme values.'
      }
    ],
    practiceExercises: [
      {
        task: 'Calculate the variance and standard deviation of exam scores [78, 85, 92, 88, 76, 95] without external libraries.',
        hint: 'Find the mean, sum the squared deviations (x - mean)^2, and divide by N.',
        solutionSnippet: 'scores = [78, 85, 92, 88, 76, 95]\nmean_val = sum(scores) / len(scores)\nvariance = sum((x - mean_val)**2 for x in scores) / len(scores)\nstd_dev = variance ** 0.5\nprint(f"Variance: {variance:.2f}, StdDev: {std_dev:.2f}")'
      }
    ],
    quizQuestions: [
      {
        question: 'Which metric is most resistant (robust) to extreme outliers?',
        options: ['Mean', 'Median', 'Variance', 'Range'],
        correctIndex: 1,
        explanation: 'The median represents the physical middle rank of sorted data and is unaffected by extreme outlier magnitude.'
      },
      {
        question: 'What percentage of data in a standard normal distribution lies within +/- 1 standard deviation of the mean?',
        options: ['50%', '68.2%', '95.4%', '99.7%'],
        correctIndex: 1,
        explanation: 'According to the Empirical Rule (68-95-99.7), approximately 68.2% of data in a Gaussian distribution falls within 1 standard deviation.'
      },
      {
        question: 'How is the Interquartile Range (IQR) calculated?',
        options: ['Max - Min', 'Q3 - Q1', 'Q2 - Q1', '(Mean - Median) / StdDev'],
        correctIndex: 1,
        explanation: 'IQR is defined as the 75th percentile (Q3) minus the 25th percentile (Q1).'
      },
      {
        question: 'What is standard deviation in relation to variance?',
        options: [
          'Variance squared',
          'The square root of variance',
          'Variance multiplied by sample size N',
          'Variance divided by the mean'
        ],
        correctIndex: 1,
        explanation: 'Standard deviation is sqrt(variance), returning the spread metric into original dataset units.'
      },
      {
        question: 'If a salary distribution has Mean = \$95,000 and Median = \$60,000, what is the skew of this distribution?',
        options: ['Symmetric (Bell curve)', 'Right-skewed (Positively skewed)', 'Left-skewed (Negatively skewed)', 'Uniform'],
        correctIndex: 1,
        explanation: 'When Mean > Median, high outliers pull the right tail out, creating a positive or right-skewed distribution.'
      }
    ],
    miniChallenge: {
      title: 'Outlier Filter Function',
      prompt: 'Write a function filter_iqr_outliers(nums) that removes all values beyond [Q1 - 1.5*IQR, Q3 + 1.5*IQR] and returns a clean sorted list.',
      starterCode: `import numpy as np

def filter_iqr_outliers(nums):
    # Your logic here
    pass

data = [10, 12, 14, 15, 18, 20, 100]
print(filter_iqr_outliers(data)) # Expected: [10, 12, 14, 15, 18, 20]`,
      solution: `import numpy as np

def filter_iqr_outliers(nums):
    arr = np.array(nums)
    q1 = np.percentile(arr, 25)
    q3 = np.percentile(arr, 75)
    iqr = q3 - q1
    lower = q1 - 1.5 * iqr
    upper = q3 + 1.5 * iqr
    clean = arr[(arr >= lower) & (arr <= upper)]
    return sorted(clean.tolist())

data = [10, 12, 14, 15, 18, 20, 100]
print(filter_iqr_outliers(data))`
    }
  },
  {
    id: 'math-stat-3',
    milestoneId: 'ms-math-stats',
    order: 3,
    title: '3. Probability & Hypothesis Testing: A/B Testing & p-values',
    durationMinutes: 30,
    conceptExplanation: 'Hypothesis testing allows data professionals to determine whether an observed difference (like a new website checkout design having a higher conversion rate) is statistically significant or merely random noise. We form a Null Hypothesis (H0: no true difference) and an Alternative Hypothesis (H1: significant difference). If the p-value is below significance threshold alpha (commonly 0.05), we reject H0.',
    whyImportant: 'A/B testing is the primary decision-making framework at Google, Amazon, Meta, and Uber. Product Managers will not launch new features without an analyst verifying p < 0.05 with statistical power >= 80%.',
    syntax: `# Two-Sample Z-test / T-test for A/B Testing
from scipy import stats
control_conversions = [1]*120 + [0]*880    # 12% rate (1000 users)
treatment_conversions = [1]*160 + [0]*840  # 16% rate (1000 users)

t_stat, p_val = stats.ttest_ind(treatment_conversions, control_conversions)
is_significant = p_val < 0.05`,
    exampleDescription: 'Evaluating a real e-commerce checkout page redesign test to see if 1-click buy lifted conversion rate significantly.',
    codeSnippet: `from scipy import stats
import numpy as np

# Control Group (Existing UI): 1,000 visitors, 120 purchases (12.0%)
n_control = 1000
conv_control = 120

# Treatment Group (New Checkout): 1,000 visitors, 158 purchases (15.8%)
n_treatment = 1000
conv_treatment = 158

# Simulate binary outcomes (1 = purchase, 0 = bounce)
group_a = np.array([1] * conv_control + [0] * (n_control - conv_control))
group_b = np.array([1] * conv_treatment + [0] * (n_treatment - conv_treatment))

# Conduct Independent Two-Sample T-test
t_stat, p_value = stats.ttest_ind(group_b, group_a)

lift_percent = ((158/1000) - (120/1000)) / (120/1000) * 100

print(f"Control Conversion:   {conv_control/n_control:.1%}")
print(f"Treatment Conversion: {conv_treatment/n_treatment:.1%}")
print(f"Relative Lift:        +{lift_percent:.2f}%")
print(f"T-statistic:          {t_stat:.4f}")
print(f"P-value:              {p_value:.5f}")

if p_value < 0.05:
    print("Decision: REJECT Null Hypothesis -> Deploy new checkout to 100% of users!")
else:
    print("Decision: FAIL TO REJECT H0 -> Difference could be random chance.")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 4-13: Defining sample sizes and successful conversions for control (A) and treatment (B).',
      'Line 16: Executing stats.ttest_ind to compare sample means across independent experimental groups.',
      'Line 18: Computing relative percentage lift: (Rate_B - Rate_A) / Rate_A.',
      'Line 26-29: Comparing calculated p-value against industry-standard alpha = 0.05 to reach a conclusive product rollout decision.'
    ],
    realWorldExample: 'Amazon discovered that every 100ms decrease in page loading latency increased revenue by 1%. They validated this using rigorous A/B hypothesis tests across millions of active customer sessions.',
    commonMistakes: [
      {
        mistake: 'Peeking at p-values daily and stopping the test early as soon as p < 0.05 is spotted.',
        fix: 'Early stopping without statistical corrections inflates false positive rates (Type I errors) up to 30%. Always calculate required sample size upfront and run the test to completion.'
      }
    ],
    practiceExercises: [
      {
        task: 'Calculate the conversion rates of group A (45 conversions out of 500) and group B (68 conversions out of 500), and find the relative conversion lift.',
        hint: 'Rate A = 45/500, Rate B = 68/500. Lift = (Rate B - Rate A) / Rate A * 100.',
        solutionSnippet: 'rate_a = 45 / 500\nrate_b = 68 / 500\nlift = ((rate_b - rate_a) / rate_a) * 100\nprint(f"Rate A: {rate_a:.1%}, Rate B: {rate_b:.1%}, Lift: {lift:.1f}%")'
      }
    ],
    quizQuestions: [
      {
        question: 'What does a p-value of 0.02 mean in an A/B test with alpha = 0.05?',
        options: [
          'There is a 98% chance the treatment will fail',
          'There is a 2% probability of observing these results if the Null Hypothesis were true (statistically significant)',
          'The treatment increased revenue by exactly 2%',
          'The test sample size was 2% too small'
        ],
        correctIndex: 1,
        explanation: 'A p-value measures the probability of seeing data as extreme as observed assuming H0 is true. Since 0.02 < 0.05, we reject H0.'
      },
      {
        question: 'What is a Type I error (False Positive) in hypothesis testing?',
        options: [
          'Rejecting the null hypothesis when it was actually true',
          'Failing to reject the null hypothesis when it was actually false',
          'Using the wrong programming language',
          'Having missing values in your SQL table'
        ],
        correctIndex: 0,
        explanation: 'Type I error occurs when you conclude an effect exists (like a feature improving sales) when in fact there is no true effect.'
      },
      {
        question: 'What is statistical power typically set to when sizing an experiment?',
        options: ['50%', '80%', '100%', '5%'],
        correctIndex: 1,
        explanation: 'Standard experimental design aims for 80% power (beta = 0.20), meaning an 80% probability of detecting a real effect if one exists.'
      },
      {
        question: 'What is the Null Hypothesis (H0) in a standard A/B test?',
        options: [
          'Treatment B is guaranteed to be 10x better than Control A',
          'There is no true difference between Control A and Treatment B',
          'The test must be restarted immediately',
          'All users will churn'
        ],
        correctIndex: 1,
        explanation: 'The Null Hypothesis posits status quo: that any observed variance between cohorts is purely random variation.'
      },
      {
        question: 'Which statistical test is appropriate when comparing the mean conversion rates of two large independent sample groups?',
        options: [
          'Two-sample Z-test or Independent Two-sample T-test',
          'Single-sample Chi-Square goodness of fit',
          'Simple linear regression with 10 variables',
          'K-Means clustering'
        ],
        correctIndex: 0,
        explanation: 'Comparing two independent continuous or proportion sample means is performed with a two-sample Z-test or independent T-test.'
      }
    ],
    miniChallenge: {
      title: 'Hypothesis Decision Engine',
      prompt: 'Write a function evaluate_experiment(p_value, alpha=0.05) that returns "SIGNIFICANT" if p_value < alpha else "INCONCLUSIVE".',
      starterCode: `def evaluate_experiment(p_value, alpha=0.05):
    # Return SIGNIFICANT or INCONCLUSIVE
    pass

print(evaluate_experiment(0.034)) # Expected: SIGNIFICANT
print(evaluate_experiment(0.120)) # Expected: INCONCLUSIVE`,
      solution: `def evaluate_experiment(p_value, alpha=0.05):
    return "SIGNIFICANT" if p_value < alpha else "INCONCLUSIVE"

print(evaluate_experiment(0.034))
print(evaluate_experiment(0.120))`
    }
  }
];
