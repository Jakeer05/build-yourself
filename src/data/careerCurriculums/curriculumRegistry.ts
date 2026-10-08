import { CareerCurriculum, CareerMilestone, CareerProject, CareerLesson } from '../../types';
import { pythonCoreLessons } from './pythonLessons';
import { pythonAdvancedLessons } from './pythonAdvancedLessons';
import { mathStatsLessons } from './mathStatsLessons';
import { sqlDatabaseLessons } from './sqlDatabaseLessons';
import { dataAnalysisLessons } from './dataAnalysisLessons';
import { machineLearningLessons } from './machineLearningLessons';
import { deepLearningNlpLessons } from './deepLearningNlpLessons';
import { dataVizBiLessons } from './dataVizBiLessons';
import { mlopsCloudLessons } from './mlopsCloudLessons';
import { webDevCyberLessons } from './webDevCyberLessons';

// Combine all 27 Python lessons
export const allPythonLessons: CareerLesson[] = [
  ...pythonCoreLessons,
  ...pythonAdvancedLessons
];

// 1. DATA SCIENTIST CURRICULUM
export const dataScientistCurriculum: CareerCurriculum = {
  careerId: 'roadmap-data-scientist',
  role: 'Data Scientist',
  tagline: 'From Python Fundamentals to Deep Neural Networks & Production ML Systems',
  overview: 'The complete career curriculum for modern Data Scientists. Master 27 Python lessons, linear algebra, multivariable statistics, enterprise SQL, feature engineering, tree ensembles, PyTorch deep learning, LLM fine-tuning, and containerized MLOps.',
  difficulty: 'Intermediate to Advanced',
  demandLevel: 'Very High',
  estimatedTime: '10 Months (16 hrs/week)',
  averageSalary: '$120,000 - $165,000 / yr',
  milestones: [
    {
      id: 'ms-ds-1',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 1: Python Programming (All 27 Lessons)',
      level: 'Beginner',
      order: 1,
      description: 'Master core Python from scratch: syntax, variables, data structures, control flow, functions, OOP, exceptions, and file handling.',
      skillsLearned: ['Python 3 Syntax', 'Control Flow', 'Data Structures', 'OOP', 'File I/O', 'Exception Handling'],
      lessons: allPythonLessons
    },
    {
      id: 'ms-ds-2',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 2: Mathematics & Statistics',
      level: 'Beginner',
      order: 2,
      description: 'Linear algebra for machine learning, descriptive statistics, probability distributions, hypothesis testing, and A/B test analysis.',
      skillsLearned: ['Vectors & Matrices', 'Descriptive Stats', 'Hypothesis Testing', 'p-values', 'A/B Testing'],
      lessons: mathStatsLessons
    },
    {
      id: 'ms-ds-3',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 3: SQL & Relational Databases',
      level: 'Intermediate',
      order: 3,
      description: 'Query enterprise databases, multi-table joins, subqueries, aggregations, and advanced analytical window functions.',
      skillsLearned: ['SQL Queries', 'GROUP BY & HAVING', 'Joins & Set Ops', 'Window Functions (RANK, LAG)'],
      lessons: sqlDatabaseLessons
    },
    {
      id: 'ms-ds-4',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 4: Data Analysis with NumPy & Pandas',
      level: 'Intermediate',
      order: 4,
      description: 'Tabular data munging, vectorized array computing, handling missing values, exploratory data analysis, and feature engineering.',
      skillsLearned: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning', 'Feature Engineering', 'One-Hot Encoding'],
      lessons: dataAnalysisLessons
    },
    {
      id: 'ms-ds-5',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 5: Machine Learning Mastery',
      level: 'Intermediate',
      order: 5,
      description: 'Supervised and unsupervised learning, decision trees, Random Forests, XGBoost gradient boosting, and precision/recall evaluation.',
      skillsLearned: ['Logistic Regression', 'Random Forests', 'XGBoost', 'Cross-Validation', 'ROC-AUC & F1-Score'],
      lessons: machineLearningLessons
    },
    {
      id: 'ms-ds-6',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 6: Deep Learning & PyTorch',
      level: 'Advanced',
      order: 6,
      description: 'Neural networks, activation functions, backpropagation calculus, and PyTorch training loops.',
      skillsLearned: ['Perceptrons', 'Backpropagation', 'PyTorch Tensors', 'Optimizers (Adam)', 'Loss Functions'],
      lessons: [deepLearningNlpLessons[0]]
    },
    {
      id: 'ms-ds-7',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 7: NLP & Large Language Models',
      level: 'Advanced',
      order: 7,
      description: 'Self-attention, Transformer architecture, embeddings, Retrieval-Augmented Generation (RAG), and prompt engineering.',
      skillsLearned: ['Transformer Architecture', 'Self-Attention', 'Tokenization', 'Vector Embeddings', 'RAG'],
      lessons: [deepLearningNlpLessons[1]]
    },
    {
      id: 'ms-ds-8',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 8: Data Visualization & Storytelling',
      level: 'Advanced',
      order: 8,
      description: 'Translating model metrics into executive business recommendations with Matplotlib, Seaborn, and KPI dashboards.',
      skillsLearned: ['Data Storytelling', 'Matplotlib & Seaborn', 'Executive Visuals', 'KPI Dashboards'],
      lessons: [dataVizBiLessons[0]]
    },
    {
      id: 'ms-ds-9',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 9: MLOps & Production Deployment',
      level: 'Advanced',
      order: 9,
      description: 'Containerizing inference services with Docker, building high-throughput FastAPI endpoints, and monitoring model drift.',
      skillsLearned: ['Docker Containers', 'FastAPI REST APIs', 'Model Serialization', 'Inference Optimization'],
      lessons: mlopsCloudLessons
    },
    {
      id: 'ms-ds-10',
      careerId: 'roadmap-data-scientist',
      title: 'Milestone 10: Capstone Project & Portfolio',
      level: 'Projects',
      order: 10,
      description: 'End-to-end production machine learning system deployed on cloud with GitHub repo, documentation, and portfolio showcase.',
      skillsLearned: ['End-to-End System Design', 'GitHub Portfolio', 'Model Serving', 'Technical Interviewing'],
      lessons: []
    }
  ],
  capstoneProject: {
    id: 'proj-ds-capstone',
    title: 'Customer Lifetime Value & Churn Prediction System',
    milestoneTitle: 'Capstone Project',
    difficulty: 'Capstone',
    estimatedHours: 40,
    overview: 'Build an enterprise-grade customer intelligence pipeline that predicts churn probability and 12-month customer lifetime value (LTV). Includes automated ETL, feature store, XGBoost ensemble model, FastAPI inference microservice, Docker containerization, and interactive executive dashboard.',
    architecture: 'PostgreSQL Database -> Pandas/NumPy Feature Engineering Pipeline -> XGBoost Classifier & Regressor -> FastAPI Inference Endpoint -> Docker Container on Cloud -> Streamlit/React Dashboard.',
    requirements: [
      'Ingest 100,000+ transactional records from relational database.',
      'Implement automated imputation, outlier removal, and RFM (Recency, Frequency, Monetary) feature extraction.',
      'Train and tune an XGBoost model achieving ROC-AUC > 0.88 and F1-score > 0.82.',
      'Expose predictions via a RESTful FastAPI endpoint with Pydantic validation and sub-50ms latency.',
      'Package service into a production Docker container with health checks and unit tests.'
    ],
    techStack: ['Python', 'PostgreSQL', 'Pandas', 'Scikit-Learn', 'XGBoost', 'FastAPI', 'Docker', 'Pytest'],
    starterCode: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
import xgboost as xgb

def build_feature_matrix(df: pd.DataFrame) -> pd.DataFrame:
    """Calculate RFM metrics and churn indicators."""
    pass

def train_churn_model(X_train, y_train):
    """Fit optimized XGBoost classifier with early stopping."""
    pass`,
    sampleOutput: 'Model trained successfully: ROC-AUC = 0.912, Precision = 0.864, Recall = 0.835. FastAPI server listening at http://0.0.0.0:8000/api/v1/predict.',
    deliverables: [
      'Clean GitHub repository with modular code structure (/src, /tests, /docker).',
      'README.md containing architecture diagram, setup instructions, and model performance metrics.',
      'Dockerfile and docker-compose.yml for one-click deployment.',
      'Jupyter notebook demonstrating exploratory analysis and feature importance plots.'
    ],
    isCapstone: true
  },
  portfolioGuide: {
    githubStructure: [
      'README.md with high-res architecture diagram, business problem, and results summary.',
      '/data: Sample dataset or synthetic generator script (never commit proprietary secrets).',
      '/notebooks: Well-commented exploratory analysis and model benchmarking notebooks.',
      '/src: Production Python packages (features.py, train.py, app.py).',
      '/tests: Pytest automated test suites verifying model inputs and outputs.',
      'Dockerfile and requirements.txt with pinned dependencies.'
    ],
    resumeBullets: [
      'Designed and deployed an XGBoost customer churn prediction engine processing 100k+ records, improving retention by 14% and saving $450k annually.',
      'Engineered 35+ behavioral features and automated data ingestion pipelines in SQL and Pandas, decreasing data preparation latency by 65%.',
      'Containerized RESTful inference microservices with FastAPI and Docker, achieving 99.9% uptime with sub-40ms response latency.',
      'Formulated A/B hypothesis testing frameworks that evaluated pricing redesigns with statistical power >= 80% and p < 0.01.'
    ],
    linkedinTips: [
      'Headline: Data Scientist | Machine Learning | Python • SQL • XGBoost • PyTorch • MLOps',
      'Featured Section: Pin your GitHub Capstone project with a GIF demo of the prediction dashboard.',
      'About Section: Quantify business impact (revenue generated, hours saved, accuracy improved).'
    ],
    interviewPrepTips: [
      'Master SQL window functions (RANK, DENSE_RANK, LAG, LEAD) — tested in 95% of live technical screens.',
      'Be prepared to explain the Bias-Variance tradeoff, Precision vs Recall tradeoffs, and how Random Forests differ from XGBoost.',
      'Practice explaining technical concepts simply using the STAR method (Situation, Task, Action, Result).'
    ]
  },
  interviewQuestions: [
    {
      question: 'Explain the difference between L1 (Lasso) and L2 (Ridge) regularization. When would you use each?',
      category: 'Technical',
      answer: 'L1 regularization adds the sum of absolute weight values (|w|) to the loss function, which forces less important feature weights to exactly zero, performing automatic feature selection. L2 regularization adds the sum of squared weights (w^2), which shrinks weights smoothly toward zero without eliminating them completely. Use L1 when you have high-dimensional data with many sparse or irrelevant features; use L2 when features are collinear and you want to retain all variables with reduced sensitivity.',
      tips: 'Mention geometric intuition: L1 has sharp diamond-shaped corners that intersect axes at zero, while L2 has circular contours.'
    },
    {
      question: 'How do you handle an imbalanced dataset where 99% of samples belong to the negative class?',
      category: 'Technical',
      answer: '1) Do not use Accuracy as the evaluation metric; use Precision-Recall AUC (PR-AUC), F1-Score, and Confusion Matrix. 2) Apply resampling techniques: SMOTE (Synthetic Minority Over-sampling Technique) or random undersampling. 3) Use cost-sensitive learning by tuning class weights (e.g. scale_pos_weight in XGBoost or class_weight="balanced" in Scikit-Learn). 4) Calibrate prediction thresholds based on business cost matrix rather than defaulting to 0.50.',
      tips: 'Interviewers look for understanding of business impact: a false negative in fraud is vastly more expensive than a false positive.'
    },
    {
      question: 'Write a Python function to compute the Jaccard similarity of two sets of token words.',
      category: 'Coding',
      answer: 'def jaccard_similarity(set_a, set_b):\n    intersection = len(set_a & set_b)\n    union = len(set_a | set_b)\n    return intersection / union if union > 0 else 0.0',
      tips: 'Highlight that set operations & and | run in O(len(set_a) + len(set_b)) linear time.'
    },
    {
      question: 'How would you design an end-to-end recommendation system for an e-commerce platform?',
      category: 'System Design',
      answer: 'A standard two-stage funnel: 1) Candidate Generation (Retrieval): Use collaborative filtering (matrix factorization / two-tower neural embeddings) to retrieve top 500 candidates from millions of items in <10ms. 2) Ranking: Pass the 500 candidates through a heavy feature-rich gradient boosted tree (LightGBM) or deep neural network (Wide & Deep) incorporating real-time user context, inventory, and session recency to output final top 10 rankings. 3) Business Re-ranking: Deduplicate, apply diversity filters, and enforce sponsored item rules.',
      tips: 'Always structure recommendation architecture into Candidate Generation (fast/approximate) followed by Ranking (accurate/deep).'
    },
    {
      question: 'Tell me about a time a machine learning model performed well in training but failed in production. What was the cause?',
      category: 'Behavioral',
      answer: 'Focus on Data Leakage or Concept/Covariate Shift. Explain how a feature created from post-event information leaked into training, artificially driving accuracy to 99%. In production, that feature was missing, causing predictions to fail. Detail how you implemented strict temporal cross-validation and automated data drift monitors to permanently prevent leakage.',
      tips: 'Take personal ownership of the diagnosis, explain the root cause clearly, and emphasize systemic safeguards introduced.'
    }
  ]
};

// 2. DATA ANALYST CURRICULUM
export const dataAnalystCurriculum: CareerCurriculum = {
  careerId: 'roadmap-data-analyst',
  role: 'Data Analyst',
  tagline: 'From Raw Business Data to Actionable Executive KPI Dashboards',
  overview: 'The definitive Data Analyst curriculum. Master Excel spreadsheets, advanced SQL window functions, statistical inference, A/B testing, exploratory data analysis with Pandas, and enterprise Power BI & Tableau dashboards.',
  difficulty: 'Beginner to Intermediate',
  demandLevel: 'Very High',
  estimatedTime: '8 Months (14 hrs/week)',
  averageSalary: '$78,000 - $115,000 / yr',
  milestones: [
    {
      id: 'ms-da-1',
      careerId: 'roadmap-data-analyst',
      title: 'Milestone 1: Excel & Spreadsheet Analytics',
      level: 'Beginner',
      order: 1,
      description: 'Master advanced spreadsheet analytics: XLOOKUP, Pivot Tables, Power Query, scenario managers, and financial data modeling.',
      skillsLearned: ['XLOOKUP', 'Pivot Tables & Slicers', 'Power Query Munging', 'Financial Modeling'],
      lessons: [
        {
          id: 'excel-lesson-1',
          milestoneId: 'ms-da-1',
          order: 1,
          title: '1. Advanced Excel: XLOOKUP, Nested Formulas & Dynamic Arrays',
          durationMinutes: 25,
          conceptExplanation: 'Modern Excel analytics relies on dynamic array formulas and XLOOKUP, which replaces deprecated VLOOKUP/HLOOKUP. XLOOKUP searches columns in any direction, defaults to exact matching, safely returns alternate values on missing matches, and supports wildcard evaluations.',
          whyImportant: 'Spreadsheets remain the universal communication bridge between technical analysts and non-technical executives.',
          syntax: `=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])`,
          exampleDescription: 'Auditing sales commission tiers and client discount lookups across dynamic regional sheets.',
          codeSnippet: `=XLOOKUP(C2, Clients[ClientID], Clients[DiscountRate], 0.05, 0)`,
          codeLanguage: 'excel',
          codeExplanation: [
            'C2: Target customer ID cell to look up.',
            'Clients[ClientID]: Structured table column containing reference IDs.',
            'Clients[DiscountRate]: Column containing discount percentages to return.',
            '0.05: Fallback default discount applied if client ID is not matched.'
          ],
          realWorldExample: 'Financial FP&A analysts build quarterly revenue forecasting models calculating rolling EBITDA across 50 regional business units.',
          commonMistakes: [
            {
              mistake: 'Using old VLOOKUP with hardcoded column numbers that break whenever someone inserts a new column.',
              fix: 'Always use XLOOKUP or INDEX/MATCH for robust column references that do not break upon layout edits.'
            }
          ],
          practiceExercises: [
            {
              task: 'Write an XLOOKUP formula to find the Price of product ID 104 from Table Products[ID] returning Products[Price].',
              hint: '=XLOOKUP(104, Products[ID], Products[Price], "Not Found")',
              solutionSnippet: '=XLOOKUP(104, Products[ID], Products[Price], "Not Found")'
            }
          ],
          quizQuestions: [
            {
              question: 'Why is XLOOKUP superior to traditional VLOOKUP in Excel?',
              options: [
                'It searches both left and right, defaults to exact match, and does not break when columns are inserted',
                'It requires a paid subscription',
                'It only works with numbers',
                'It deletes blank rows'
              ],
              correctIndex: 0,
              explanation: 'XLOOKUP eliminates column index numbering, supports bidirectional lookup, and provides native default fallbacks.'
            },
            {
              question: 'What tool inside Excel allows automated data extraction, unpivoting, and transformation without macros?',
              options: ['Power Query', 'WordArt', 'Paint', 'Solver'],
              correctIndex: 0,
              explanation: 'Power Query provides a visual ETL interface for cleaning, unpivoting, and combining disparate data files.'
            }
          ],
          miniChallenge: {
            title: 'Commission Rate Calculator',
            prompt: 'Explain what happens if the optional [if_not_found] parameter is omitted in XLOOKUP when a match fails.',
            starterCode: '// What error is returned?\n',
            solution: 'If [if_not_found] is omitted and no match is located, XLOOKUP returns the #N/A error.'
          }
        }
      ]
    },
    {
      id: 'ms-da-2',
      careerId: 'roadmap-data-analyst',
      title: 'Milestone 2: Enterprise SQL & Data Extraction',
      level: 'Intermediate',
      order: 2,
      description: 'Master multi-table joins, aggregations, CTEs, subqueries, and window functions (RANK, LEAD, LAG).',
      skillsLearned: ['SQL Queries', 'GROUP BY & Aggregations', 'Joins', 'Window Functions'],
      lessons: sqlDatabaseLessons
    },
    {
      id: 'ms-da-3',
      careerId: 'roadmap-data-analyst',
      title: 'Milestone 3: Applied Statistics & A/B Testing',
      level: 'Intermediate',
      order: 3,
      description: 'Central tendency, distributions, variance, hypothesis testing, t-tests, p-values, and statistical experiment design.',
      skillsLearned: ['Descriptive Stats', 'Hypothesis Testing', 'p-values', 'A/B Testing'],
      lessons: mathStatsLessons
    },
    {
      id: 'ms-da-4',
      careerId: 'roadmap-data-analyst',
      title: 'Milestone 4: Python for Data Analysis',
      level: 'Intermediate',
      order: 4,
      description: 'Learn core Python essentials, data cleaning, and feature manipulation with NumPy and Pandas.',
      skillsLearned: ['Python Syntax', 'NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning'],
      lessons: [allPythonLessons[0], allPythonLessons[3], allPythonLessons[4], ...dataAnalysisLessons]
    },
    {
      id: 'ms-da-5',
      careerId: 'roadmap-data-analyst',
      title: 'Milestone 5: Power BI & Business Intelligence',
      level: 'Advanced',
      order: 5,
      description: 'Star Schema data modeling, DAX measures, time-intelligence formulas, and executive interactive reports.',
      skillsLearned: ['Power BI', 'DAX Formulas', 'Star Schema', 'Executive Dashboards'],
      lessons: dataVizBiLessons
    },
    {
      id: 'ms-da-6',
      careerId: 'roadmap-data-analyst',
      title: 'Milestone 6: Capstone Project & Portfolio',
      level: 'Projects',
      order: 6,
      description: 'Deliver an executive SaaS Growth & Revenue retention dashboard with interactive KPI slicers and SQL pipeline.',
      skillsLearned: ['Executive Storytelling', 'Portfolio Building', 'Interview Case Studies'],
      lessons: []
    }
  ],
  capstoneProject: {
    id: 'proj-da-capstone',
    title: 'E-Commerce Executive Sales & Churn Analytics Suite',
    milestoneTitle: 'Capstone Project',
    difficulty: 'Capstone',
    estimatedHours: 35,
    overview: 'Build an end-to-end business intelligence suite analyzing \$15M in multi-channel sales. Involves writing complex SQL aggregation pipelines, designing a Star Schema data model in Power BI, authoring 20+ DAX measures, and presenting executive KPI insights to business leaders.',
    architecture: 'PostgreSQL Relational DB -> SQL Extraction & Transformation Views -> Star Schema Model (FactSales + DimCustomer, DimDate, DimProduct) -> Power BI Service with Row-Level Security -> Automated Executive PDF/Email Digests.',
    requirements: [
      'Write optimized SQL queries aggregating customer acquisition cost (CAC), LTV, and cohort retention.',
      'Construct a normalized Star Schema with 1 Fact table and 4 Dimension tables.',
      'Implement DAX measures for Year-over-Year sales growth, 30-day moving averages, and churn probability.',
      'Design an accessible, polished executive dashboard with drill-through pages and dynamic slicers.'
    ],
    techStack: ['SQL', 'PostgreSQL', 'Excel Power Query', 'Power BI', 'DAX', 'Tableau'],
    starterCode: `-- Cohort Retention Extraction Query
WITH MonthlyCohorts AS (
    SELECT 
        customer_id,
        DATE_TRUNC('month', MIN(order_date)) AS cohort_month
    FROM orders
    GROUP BY customer_id
)
SELECT * FROM MonthlyCohorts;`,
    sampleOutput: 'Executive Report Generated: Total Revenue = $14.8M (+18.4% YoY), Average Order Value = $142.50, Churn Rate = 4.2%.',
    deliverables: [
      'Power BI Desktop (.pbix) file or Tableau workbook with interactive dashboard.',
      'SQL script containing all extraction and cohort retention CTE queries.',
      'Executive summary memo (PDF) highlighting key strategic findings and recommendations.'
    ],
    isCapstone: true
  },
  portfolioGuide: {
    githubStructure: [
      'README.md containing high-resolution screenshots of Power BI dashboards and business takeaways.',
      '/sql_queries: Well-organized SQL scripts (aggregations.sql, cohort_analysis.sql).',
      '/dashboards: Exported PDF walkthrough of the interactive dashboard tabs.',
      '/data: Sample anonymized dataset.'
    ],
    resumeBullets: [
      'Built executive Power BI dashboards with 25+ dynamic DAX measures tracking \$15M in annual sales, identifying \$320k in churn recovery opportunities.',
      'Authored complex SQL queries utilizing window functions and CTEs to automate weekly reporting, saving 12 hours of manual analyst effort per week.',
      'Conducted A/B test statistical analysis on checkout flows, demonstrating a statistically significant 3.8% conversion lift (p < 0.01).',
      'Presented monthly KPI performance reviews directly to VP of Product and Chief Marketing Officer.'
    ],
    linkedinTips: [
      'Headline: Data Analyst | SQL • Power BI • Tableau • Python • Excel • A/B Testing',
      'Featured Section: Add high-contrast screenshot carousel of your best Power BI report.',
      'Skills Section: Endorsements for SQL, Data Modeling, DAX, and Business Analytics.'
    ],
    interviewPrepTips: [
      'Be ready to write SQL joins, aggregations with HAVING, and window functions on a live whiteboard.',
      'Practice explaining the difference between correlation and causation with real business examples.',
      'Understand how to walk an interviewer through an A/B test failure and how you would diagnose the issue.'
    ]
  },
  interviewQuestions: [
    {
      question: 'What is the difference between WHERE and HAVING in SQL?',
      category: 'Technical',
      answer: 'WHERE filters individual raw table rows before any grouping or aggregation takes place. HAVING filters the grouped result sets produced by aggregate functions (such as SUM, COUNT, AVG) after GROUP BY has executed.',
      tips: 'Always give a concrete example: WHERE country = "USA" filters rows; HAVING SUM(revenue) > 10000 filters aggregated groups.'
    },
    {
      question: 'How do you design an A/B test to evaluate a new homepage banner?',
      category: 'Technical',
      answer: '1) Define the Primary Metric (e.g. Click-Through Rate or Conversion Rate). 2) Formulate Null (H0: no difference) and Alternative (H1: significant difference) hypotheses. 3) Calculate required sample size upfront based on baseline conversion, minimum detectable effect (MDE), significance level (alpha = 0.05), and statistical power (80%). 4) Randomly split incoming traffic 50/50 without bias. 5) Run test to sample completion to avoid peeking bias, then compute two-sample Z-test / T-test for statistical significance (p < 0.05).',
      tips: 'Emphasize that stopping a test early when a p-value briefly dips below 0.05 causes high false positive rates.'
    },
    {
      question: 'Explain what a Star Schema is and why it is preferred in Power BI / Data Warehouses.',
      category: 'Technical',
      answer: 'A Star Schema is a dimensional data modeling technique where a central Fact table (holding numerical metrics and transactions) connects via 1-to-many relationships to multiple surrounding Dimension tables (holding descriptive attributes like Customer, Product, Date). It is preferred because it simplifies DAX filter propagation, dramatically speeds up in-memory query performance (VertiPaq engine), and provides an intuitive structure for business users to slice and dice data.',
      tips: 'Contrast with Snowflake Schema (normalized dimensions) and explain why denormalized Star Schema is faster for analytics.'
    }
  ]
};

// 3. DATA ENGINEER CURRICULUM
export const dataEngineerCurriculum: CareerCurriculum = {
  careerId: 'roadmap-data-engineer',
  role: 'Data Engineer',
  tagline: 'Architecting Scalable Distributed Data Pipelines & Cloud Warehouses',
  overview: 'The complete curriculum for modern Data Engineers. Master Python data pipelines, enterprise SQL, dimensional modeling, Apache Spark distributed computing, Airflow orchestration, Docker, and cloud data warehouses like Snowflake and BigQuery.',
  difficulty: 'Intermediate to Advanced',
  demandLevel: 'Very High',
  estimatedTime: '10 Months (16 hrs/week)',
  averageSalary: '$125,000 - $170,000 / yr',
  milestones: [
    {
      id: 'ms-de-1',
      careerId: 'roadmap-data-engineer',
      title: 'Milestone 1: Python for Data Engineering',
      level: 'Beginner',
      order: 1,
      description: 'Advanced Python, OOP, typing, file handling, API ingestion, and database connectors (SQLAlchemy, psycopg2).',
      skillsLearned: ['Python OOP', 'File I/O', 'Database Connectors', 'API Ingestion'],
      lessons: allPythonLessons
    },
    {
      id: 'ms-de-2',
      careerId: 'roadmap-data-engineer',
      title: 'Milestone 2: Relational Databases & SQL Optimization',
      level: 'Intermediate',
      order: 2,
      description: 'Relational data modeling, indexing, execution plans, window functions, and query performance tuning.',
      skillsLearned: ['SQL Execution Plans', 'Indexing', 'Transactions & ACID', 'Window Functions'],
      lessons: sqlDatabaseLessons
    },
    {
      id: 'ms-de-3',
      careerId: 'roadmap-data-engineer',
      title: 'Milestone 3: Data Modeling & Warehousing',
      level: 'Intermediate',
      order: 3,
      description: 'Dimensional modeling, Kimball methodology, Star Schemas, Slowly Changing Dimensions (SCD Type 1 & 2).',
      skillsLearned: ['Kimball Dimensional Modeling', 'Star Schemas', 'SCD Type 2', 'Data Warehousing'],
      lessons: [dataVizBiLessons[1]]
    },
    {
      id: 'ms-de-4',
      careerId: 'roadmap-data-engineer',
      title: 'Milestone 4: Containerization & Cloud Infrastructure',
      level: 'Intermediate',
      order: 4,
      description: 'Docker containerization, environment reproducibility, cloud object storage (S3/GCS), and FastAPI microservices.',
      skillsLearned: ['Docker Containers', 'Microservices', 'FastAPI', 'Cloud Storage'],
      lessons: mlopsCloudLessons
    },
    {
      id: 'ms-de-5',
      careerId: 'roadmap-data-engineer',
      title: 'Milestone 5: Capstone Project & Portfolio',
      level: 'Projects',
      order: 5,
      description: 'Build a production distributed ETL lakehouse pipeline ingesting live web streaming data into Snowflake.',
      skillsLearned: ['Distributed Computing', 'Airflow Pipelines', 'Lakehouse Architecture'],
      lessons: []
    }
  ],
  capstoneProject: {
    id: 'proj-de-capstone',
    title: 'Distributed Streaming Event Lakehouse Pipeline',
    milestoneTitle: 'Capstone Project',
    difficulty: 'Capstone',
    estimatedHours: 45,
    overview: 'Design and deploy an end-to-end distributed data pipeline that ingests real-time web clickstream events, processes them via Apache Spark / PySpark with deduplication, models data into a medallion architecture (Bronze, Silver, Gold), and loads into a cloud data warehouse (Snowflake/BigQuery).',
    architecture: 'Event Generator -> REST Ingestion API (FastAPI) -> S3/GCS Data Lake (Bronze Parquet) -> Spark ETL Processing (Silver Cleaned) -> dbt Dimensional Modeling (Gold Star Schema) -> Snowflake Warehouse -> Metabase/BI Dashboard.',
    requirements: [
      'Ingest 1,000,000+ simulated clickstream events with automated schema enforcement.',
      'Store raw data in columnar Parquet format partitioned by date.',
      'Implement PySpark transformations for deduplication, sessionization, and IP geo-lookup.',
      'Implement SCD Type 2 tracking for changing customer attributes.',
      'Orchestrate the batch and streaming pipeline using Docker and Airflow DAGs.'
    ],
    techStack: ['Python', 'PySpark', 'Docker', 'PostgreSQL', 'Snowflake', 'dbt', 'Apache Airflow', 'FastAPI'],
    starterCode: `from pyspark.sql import SparkSession
from pyspark.sql.functions import col, from_json, to_date

spark = SparkSession.builder \\
    .appName("ClickstreamLakehouse") \\
    .getOrCreate()

# Read Bronze Parquet stream
df = spark.read.parquet("s3://lakehouse/bronze/events/")
# Perform sessionization and deduplication
clean_df = df.dropDuplicates(["event_id"])`,
    sampleOutput: 'Pipeline ran successfully: Ingested 1.2M events, written to Gold dimensional tables in Snowflake in 3.4 minutes.',
    deliverables: [
      'Clean GitHub repo with complete code and architecture diagrams.',
      'docker-compose setup orchestrating Postgres, Spark, and local file storage.',
      'Airflow DAG scripts with retry logic and alert notifications.'
    ],
    isCapstone: true
  },
  portfolioGuide: {
    githubStructure: [
      'README.md with high-level architecture diagram and throughput benchmarks.',
      '/dags: Apache Airflow orchestration workflow DAGs.',
      '/spark_jobs: PySpark transformation scripts (silver_clean.py, gold_aggregate.py).',
      '/dbt: dbt models, schema.yml, and documentation.',
      'docker-compose.yml for running local multi-container stack.'
    ],
    resumeBullets: [
      'Architected a distributed data lakehouse on AWS and Snowflake, processing 5M+ daily events with 99.9% pipeline reliability.',
      'Built automated PySpark ETL pipelines reducing data ingestion latency from 8 hours to 15 minutes.',
      'Designed Star Schema dimensional data models using dbt and implemented SCD Type 2 dimension tables for historical tracking.',
      'Containerized all ETL workflows using Docker and orchestrated multi-stage pipelines with Apache Airflow DAGs.'
    ],
    linkedinTips: [
      'Headline: Data Engineer | Python • SQL • PySpark • Snowflake • Airflow • dbt • Docker',
      'About Section: Highlight scale of data handled (terabytes/millions of events) and pipeline uptime SLA.'
    ],
    interviewPrepTips: [
      'Review SQL query execution plans (EXPLAIN ANALYZE) and know how B-tree indexes work.',
      'Understand how Apache Spark partitions data across executor nodes and how to avoid shuffle bottlenecks.'
    ]
  },
  interviewQuestions: [
    {
      question: 'What is the difference between a Data Lake, a Data Warehouse, and a Data Lakehouse?',
      category: 'Technical',
      answer: 'A Data Lake stores raw, unstructured, semi-structured, and structured data at low cost (e.g. S3 Parquet). A Data Warehouse stores cleaned, structured, highly curated tabular data optimized for fast SQL queries (e.g. Snowflake). A Lakehouse combines the cost efficiency and scale of a Data Lake with the ACID transactions, schema enforcement, and indexing performance of a Data Warehouse (e.g. Delta Lake, Apache Iceberg).',
      tips: 'Reference modern open table formats like Delta Lake and Apache Iceberg.'
    },
    {
      question: 'What is a Slowly Changing Dimension (SCD) Type 2, and how is it implemented?',
      category: 'Technical',
      answer: 'SCD Type 2 preserves historical changes in dimension tables by creating a new record whenever an attribute changes. It uses columns like start_date, end_date, and is_current (True/False). When an employee changes departments, the old row’s end_date is set to today and is_current set to False, while a new row is inserted with the new department, start_date = today, and is_current = True.',
      tips: 'Mention that SCD Type 1 simply overwrites the old value, losing history.'
    }
  ]
};

// 4. FULL STACK DEVELOPER CURRICULUM
export const fullStackDeveloperCurriculum: CareerCurriculum = {
  careerId: 'roadmap-full-stack-developer',
  role: 'Full Stack Developer',
  tagline: 'Modern Web Engineering with React, TypeScript, Node.js & Cloud',
  overview: 'The complete path from frontend interfaces to backend microservices, SQL databases, authentication, security, and cloud deployment.',
  difficulty: 'Intermediate to Advanced',
  demandLevel: 'Very High',
  estimatedTime: '9 Months (16 hrs/week)',
  averageSalary: '$110,000 - $155,000 / yr',
  milestones: [
    {
      id: 'ms-fs-1',
      careerId: 'roadmap-full-stack-developer',
      title: 'Milestone 1: Frontend Mastery (React, TypeScript & Tailwind)',
      level: 'Beginner',
      order: 1,
      description: 'Build modern responsive UIs with React hooks, TypeScript interfaces, Tailwind CSS, and state management.',
      skillsLearned: ['React Hooks', 'TypeScript', 'Tailwind CSS', 'Component Architecture'],
      lessons: [webDevCyberLessons[0]]
    },
    {
      id: 'ms-fs-2',
      careerId: 'roadmap-full-stack-developer',
      title: 'Milestone 2: Backend APIs & Microservices (Node.js & Python)',
      level: 'Intermediate',
      order: 2,
      description: 'RESTful API design, Express/FastAPI, Pydantic validation, middleware, and authentication.',
      skillsLearned: ['REST APIs', 'FastAPI / Express', 'JWT Auth', 'Pydantic'],
      lessons: [mlopsCloudLessons[1]]
    },
    {
      id: 'ms-fs-3',
      careerId: 'roadmap-full-stack-developer',
      title: 'Milestone 3: Database Engineering & SQL',
      level: 'Intermediate',
      order: 3,
      description: 'Relational database schema design, joins, aggregations, indexing, and ORM integration.',
      skillsLearned: ['PostgreSQL', 'SQL Joins & Indexes', 'Data Modeling', 'ORMs'],
      lessons: sqlDatabaseLessons
    },
    {
      id: 'ms-fs-4',
      careerId: 'roadmap-full-stack-developer',
      title: 'Milestone 4: Web Security & OWASP Defense',
      level: 'Advanced',
      order: 4,
      description: 'Protecting applications against SQL injection, XSS, CSRF, broken access control, and password hashing.',
      skillsLearned: ['OWASP Top 10', 'Password Hashing', 'SQL Injection Defense', 'JWT Security'],
      lessons: [webDevCyberLessons[1]]
    },
    {
      id: 'ms-fs-5',
      careerId: 'roadmap-full-stack-developer',
      title: 'Milestone 5: Containerization & Cloud Deployment',
      level: 'Advanced',
      order: 5,
      description: 'Docker containerization, CI/CD pipelines, environment variables, and cloud production hosting.',
      skillsLearned: ['Docker', 'CI/CD Pipelines', 'Cloud Hosting', 'Nginx Reverse Proxy'],
      lessons: [mlopsCloudLessons[0]]
    },
    {
      id: 'ms-fs-6',
      careerId: 'roadmap-full-stack-developer',
      title: 'Milestone 6: Capstone Project & Portfolio',
      level: 'Projects',
      order: 6,
      description: 'Launch a full-stack SaaS application with user accounts, billing, database persistence, and automated CI/CD.',
      skillsLearned: ['Full Stack Architecture', 'Stripe Billing', 'Production Deployment'],
      lessons: []
    }
  ],
  capstoneProject: {
    id: 'proj-fs-capstone',
    title: 'Full-Stack Collaborative Workspace SaaS Platform',
    milestoneTitle: 'Capstone Project',
    difficulty: 'Capstone',
    estimatedHours: 40,
    overview: 'Build and deploy a full-stack real-time collaboration application featuring React TypeScript frontend, Tailwind CSS, Node.js/FastAPI backend, PostgreSQL relational database, JWT authentication, and Docker deployment.',
    architecture: 'React + TypeScript SPA -> Vite Dev Server / Nginx -> REST API (FastAPI/Node) -> PostgreSQL Database with Prisma/SQLAlchemy -> Docker Container on Cloud.',
    requirements: [
      'User authentication with bcrypt password hashing and JWT token refresh.',
      'Real-time collaborative document/task editing.',
      'Responsive mobile-friendly UI built with Tailwind CSS.',
      'Automated unit and integration test coverage (>80%).',
      'One-command local setup using docker-compose.'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    starterCode: `// Client entry point
import React from 'react';
export const App: React.FC = () => <div>Workspace Ready</div>;`,
    sampleOutput: 'Application running at http://localhost:3000 with 100% tests passing.',
    deliverables: [
      'Live deployed web application link.',
      'GitHub repository with clean Git commit history.',
      'Comprehensive documentation and API endpoint specs.'
    ],
    isCapstone: true
  },
  portfolioGuide: {
    githubStructure: [
      'README.md with live demo link, test credentials, and architecture diagram.',
      '/client: React TypeScript frontend code.',
      '/server: Backend API routes, controllers, and database models.',
      'docker-compose.yml orchestrating client, server, and PostgreSQL.'
    ],
    resumeBullets: [
      'Developed a responsive full-stack SaaS platform using React, TypeScript, and FastAPI, supporting 10k+ monthly active users.',
      'Designed PostgreSQL database schema with parameterized queries, eliminating SQL injection vulnerabilities and cutting query latency by 45%.',
      'Containerized full application stack with Docker and configured automated CI/CD pipelines via GitHub Actions.',
      'Implemented secure JWT authentication with refresh token rotation and role-based access control (RBAC).'
    ],
    linkedinTips: [
      'Headline: Full Stack Developer | React • TypeScript • Node.js • Python • SQL • Docker',
      'Featured Section: Add link to your live deployed SaaS capstone project.'
    ],
    interviewPrepTips: [
      'Be ready to code a live React component with state management and API data fetching.',
      'Understand CORS, HTTP headers, status codes, and browser storage (cookies vs localStorage).'
    ]
  },
  interviewQuestions: [
    {
      question: 'What happens when you type a URL into your browser and press Enter?',
      category: 'Technical',
      answer: '1) DNS Lookup: Browser resolves domain name to IP address via local cache or DNS recursive resolver. 2) TCP 3-Way Handshake (SYN, SYN-ACK, ACK) and TLS handshake for HTTPS encryption. 3) HTTP Request: Browser sends GET request with headers. 4) Server Processing: Reverse proxy (Nginx) routes request to backend app server, which queries the database and returns HTTP 200 with HTML/JSON. 5) Browser Rendering: Browser parses HTML to construct DOM tree, parses CSS for CSSOM, builds Render Tree, computes Layout, and Paints pixels.',
      tips: 'Structure answer logically from network transport to browser rendering pipeline.'
    },
    {
      question: 'Explain the difference between SQL and NoSQL databases. When would you choose each?',
      category: 'Technical',
      answer: 'SQL (Relational) databases (PostgreSQL, MySQL) enforce structured schemas, ACID transactions, and relationships via foreign keys. Choose SQL for financial transactions, e-commerce, and complex analytical joins. NoSQL databases (MongoDB, Cassandra, Redis) offer flexible, schema-less key-value or document models that scale horizontally across clusters. Choose NoSQL for rapidly changing data structures, real-time caching, or high-velocity event streaming.',
      tips: 'Mention that modern PostgreSQL handles JSONB documents efficiently, narrowing the gap.'
    }
  ]
};

// 5. PYTHON DEVELOPER CURRICULUM
export const pythonDeveloperCurriculum: CareerCurriculum = {
  careerId: 'roadmap-python-developer',
  role: 'Python Developer',
  tagline: 'Mastering Python Architecture, OOP, Async IO & Backend Services',
  overview: 'The comprehensive Python mastery curriculum covering all 27 Python lessons, object-oriented design patterns, web frameworks (FastAPI/Django), automated testing (Pytest), databases, and Docker containerization.',
  difficulty: 'Beginner to Advanced',
  demandLevel: 'High',
  estimatedTime: '7 Months (14 hrs/week)',
  averageSalary: '$105,000 - $145,000 / yr',
  milestones: [
    {
      id: 'ms-py-1',
      careerId: 'roadmap-python-developer',
      title: 'Milestone 1: Python Core Foundations (Lessons 1-12)',
      level: 'Beginner',
      order: 1,
      description: 'Syntax, data types, control flow, loops, functions, and standard input/output.',
      skillsLearned: ['Python Basics', 'Control Flow', 'Loops', 'Functions'],
      lessons: pythonCoreLessons
    },
    {
      id: 'ms-py-2',
      careerId: 'roadmap-python-developer',
      title: 'Milestone 2: Advanced Python & OOP (Lessons 13-27)',
      level: 'Intermediate',
      order: 2,
      description: 'Data structures (lists, tuples, sets, dicts), OOP (classes, inheritance, polymorphism, encapsulation), exceptions, and file I/O.',
      skillsLearned: ['Data Structures', 'OOP Mastery', 'Exception Handling', 'File I/O'],
      lessons: pythonAdvancedLessons
    },
    {
      id: 'ms-py-3',
      careerId: 'roadmap-python-developer',
      title: 'Milestone 3: Database Engineering with SQL & ORMs',
      level: 'Intermediate',
      order: 3,
      description: 'Relational queries, SQLAlchemy, joins, aggregations, and database migrations with Alembic.',
      skillsLearned: ['SQL Queries', 'SQLAlchemy', 'PostgreSQL', 'Alembic Migrations'],
      lessons: sqlDatabaseLessons
    },
    {
      id: 'ms-py-4',
      careerId: 'roadmap-python-developer',
      title: 'Milestone 4: RESTful Web APIs with FastAPI',
      level: 'Advanced',
      order: 4,
      description: 'FastAPI async endpoints, Pydantic validation, dependency injection, and JWT security.',
      skillsLearned: ['FastAPI', 'Async Python', 'Pydantic', 'REST APIs'],
      lessons: [mlopsCloudLessons[1]]
    },
    {
      id: 'ms-py-5',
      careerId: 'roadmap-python-developer',
      title: 'Milestone 5: Containerization & Capstone Project',
      level: 'Projects',
      order: 5,
      description: 'Dockerize Python backend microservices and deploy a full-scale automated API system.',
      skillsLearned: ['Docker', 'Unit Testing with Pytest', 'Production Deployment'],
      lessons: [mlopsCloudLessons[0]]
    }
  ],
  capstoneProject: {
    id: 'proj-py-capstone',
    title: 'Enterprise Async REST Microservice & Background Job Worker',
    milestoneTitle: 'Capstone Project',
    difficulty: 'Capstone',
    estimatedHours: 35,
    overview: 'Develop a high-throughput asynchronous backend service using FastAPI, Celery background worker, Redis caching, and PostgreSQL database with full test coverage and Docker containerization.',
    architecture: 'FastAPI App -> Redis Task Queue -> Celery Worker -> PostgreSQL Database -> Docker Container.',
    requirements: [
      'Async CRUD endpoints with Pydantic request and response schemas.',
      'Background task execution for long-running batch jobs using Celery/Redis.',
      'Database connection pooling with SQLAlchemy and Alembic migrations.',
      'Comprehensive Pytest test suite with >85% branch coverage.'
    ],
    techStack: ['Python 3.11', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'Docker', 'Pytest'],
    starterCode: `from fastapi import FastAPI
app = FastAPI(title="Core Python Microservice")`,
    sampleOutput: 'Application passed 24 unit tests in 1.42s. API documentation available at /docs.',
    deliverables: ['GitHub repository', 'Dockerfile & docker-compose.yml', 'Pytest test report'],
    isCapstone: true
  },
  portfolioGuide: {
    githubStructure: [
      'README.md with setup guide and endpoint documentation.',
      '/app: Application routers, schemas, and models.',
      '/tests: Pytest test fixtures and test cases.',
      'Dockerfile and requirements.txt.'
    ],
    resumeBullets: [
      'Architected high-throughput async REST APIs using Python and FastAPI, handling 15k+ daily requests with sub-50ms latency.',
      'Engineered asynchronous background job pipelines with Celery and Redis to decouple heavy data processing jobs.',
      'Authored automated test suites with Pytest achieving 90% test coverage and configured GitHub Actions CI pipelines.'
    ],
    linkedinTips: ['Headline: Python Backend Developer | FastAPI • Django • PostgreSQL • Redis • Docker'],
    interviewPrepTips: ['Be ready to explain Python GIL (Global Interpreter Lock), decorators, generators, and OOP design patterns.']
  },
  interviewQuestions: [
    {
      question: 'What is the Python Global Interpreter Lock (GIL), and how does it impact multi-threading?',
      category: 'Technical',
      answer: 'The GIL is a mutex lock in CPython that prevents multiple native threads from executing Python bytecodes simultaneously. This prevents race conditions in CPython’s reference counting memory management. As a result, multi-threading in Python cannot achieve CPU parallelism across multiple CPU cores for CPU-bound tasks. To utilize all CPU cores in Python, use the multiprocessing module or run multiple worker processes.',
      tips: 'Clarify that multi-threading IS beneficial for I/O-bound tasks (network/file operations) because threads release the GIL while waiting for I/O.'
    },
    {
      question: 'What is a Python Generator, and how does it differ from a standard function?',
      category: 'Technical',
      answer: 'A generator is a function containing the yield keyword that produces a sequence of values lazily on demand. Instead of computing all values at once and storing them in memory (like a list), a generator pauses execution and returns the current value, resuming from the exact state on the next call to next(). This reduces memory usage from O(N) to O(1) for large datasets.',
      tips: 'Mention that range() and file line iterators are classic examples of lazy generators.'
    }
  ]
};

// Generic Factory to generate rich curriculums for the remaining careers!
export function createCurriculumForRole(roleName: string, id: string, category: string, salary: string): CareerCurriculum {
  // Return tailored milestones for each career
  return {
    careerId: id,
    role: roleName,
    tagline: `Professional Career Curriculum & Practical Mastery for ${roleName}`,
    overview: `Complete step-by-step pathway from foundational concepts to advanced production expertise for ${roleName}. Each milestone combines interactive lessons, coding challenges, verified quizzes, practical projects, and interview preparation.`,
    difficulty: 'Beginner to Advanced',
    demandLevel: 'Very High',
    estimatedTime: '8-10 Months',
    averageSalary: salary,
    milestones: [
      {
        id: `ms-${id}-1`,
        careerId: id,
        title: `Milestone 1: Core Fundamentals & Programming for ${roleName}`,
        level: 'Beginner',
        order: 1,
        description: `Master fundamental syntax, variables, data structures, and script automation relevant to ${roleName}.`,
        skillsLearned: ['Core Syntax', 'Data Structures', 'Scripting', 'Best Practices'],
        lessons: pythonCoreLessons.slice(0, 8)
      },
      {
        id: `ms-${id}-2`,
        careerId: id,
        title: `Milestone 2: Relational Databases & SQL for ${roleName}`,
        level: 'Intermediate',
        order: 2,
        description: 'Enterprise data extraction, multi-table joins, aggregations, and query optimization.',
        skillsLearned: ['SQL Queries', 'Joins', 'Aggregations', 'Database Modeling'],
        lessons: sqlDatabaseLessons
      },
      {
        id: `ms-${id}-3`,
        careerId: id,
        title: `Milestone 3: Specialized Domain Mastery for ${roleName}`,
        level: 'Intermediate',
        order: 3,
        description: `In-depth domain tools, frameworks, and architecture patterns specific to ${roleName}.`,
        skillsLearned: ['Domain Architecture', 'Enterprise Tools', 'System Workflows'],
        lessons: category.includes('Data') || category.includes('Analytics') ? dataAnalysisLessons : [webDevCyberLessons[0], mlopsCloudLessons[1]]
      },
      {
        id: `ms-${id}-4`,
        careerId: id,
        title: `Milestone 4: Security, Cloud & Infrastructure for ${roleName}`,
        level: 'Advanced',
        order: 4,
        description: 'Containerization, system security, CI/CD pipelines, and cloud architecture.',
        skillsLearned: ['Cloud Infrastructure', 'Security Protocols', 'Containerization'],
        lessons: [mlopsCloudLessons[0], webDevCyberLessons[1]]
      },
      {
        id: `ms-${id}-5`,
        careerId: id,
        title: `Milestone 5: Capstone Project & Portfolio for ${roleName}`,
        level: 'Projects',
        order: 5,
        description: `Deliver an end-to-end production capstone project showcasing full competency in ${roleName}.`,
        skillsLearned: ['End-to-End System Design', 'Portfolio Architecture', 'Interview Excellence'],
        lessons: []
      }
    ],
    capstoneProject: {
      id: `proj-${id}-capstone`,
      title: `Enterprise Production System for ${roleName}`,
      milestoneTitle: 'Capstone Project',
      difficulty: 'Capstone',
      estimatedHours: 35,
      overview: `A complete, industry-standard project demonstrating end-to-end problem-solving, architectural design, implementation, and deployment for ${roleName}.`,
      architecture: `Client / Ingestion Layer -> Processing & Business Logic Layer -> Data Persistence -> Automated Deployment Pipeline.`,
      requirements: [
        `Implement core architectural components according to ${roleName} industry best practices.`,
        'Ensure security, input validation, and comprehensive error handling.',
        'Package application with automated container setup and documentation.',
        'Produce clean, modular code with automated test coverage.'
      ],
      techStack: ['Python', 'SQL', 'Docker', 'PostgreSQL', 'Git'],
      starterCode: `# Starter template for ${roleName} Capstone Project\nprint("Initializing project environment...")`,
      sampleOutput: `System initialized: 100% checks passed for ${roleName} Capstone.`,
      deliverables: ['GitHub repository', 'Architecture documentation (README.md)', 'Demo deployment link'],
      isCapstone: true
    },
    portfolioGuide: {
      githubStructure: [
        'README.md with architecture overview, business impact, and quickstart commands.',
        '/src: Modular source code structured according to industry standards.',
        '/tests: Automated test cases verifying core functionality.',
        'Dockerfile and configuration files for easy reproduction.'
      ],
      resumeBullets: [
        `Designed and deployed enterprise solutions as a ${roleName}, improving system performance by 35%.`,
        'Automated workflows and reduced operational overhead by 50% using modern tooling.',
        'Collaborated with cross-functional product teams to deliver high-availability software features.'
      ],
      linkedinTips: [
        `Headline: ${roleName} | Modern Tooling & Enterprise Architecture`,
        'Featured Section: Add link to GitHub capstone repository with screenshots.'
      ],
      interviewPrepTips: [
        'Master the fundamental concepts and explain the business value of your technical decisions.',
        'Practice coding live problems on a shared whiteboard or editor.'
      ]
    },
    interviewQuestions: [
      {
        question: `What are the most critical architectural considerations for a ${roleName}?`,
        category: 'Technical',
        answer: 'High availability, scalability under peak loads, data integrity, secure access control (least privilege), and comprehensive automated testing and observability.',
        tips: 'Tie technical architecture to business metrics like uptime, cost efficiency, and latency.'
      },
      {
        question: 'How do you handle unexpected production outages or performance degradations?',
        category: 'Behavioral',
        answer: '1) Triage: Check health dashboards and logs to isolate the failing component. 2) Mitigate: Roll back the last deployment or fail over to redundant replicas to restore customer service immediately. 3) Root Cause Analysis (RCA): Conduct post-mortem review without blame and implement preventive automated safeguards.',
        tips: 'Focus on customer impact mitigation before deep root-cause debugging.'
      }
    ]
  };
}

// Master Curriculum Registry covering all 18 roles!
export const curriculumRegistry: Record<string, CareerCurriculum> = {
  'roadmap-data-scientist': dataScientistCurriculum,
  'roadmap-data-analyst': dataAnalystCurriculum,
  'roadmap-data-engineer': dataEngineerCurriculum,
  'roadmap-full-stack-developer': fullStackDeveloperCurriculum,
  'roadmap-python-developer': pythonDeveloperCurriculum,
  'roadmap-ai-engineer': createCurriculumForRole('AI Engineer', 'roadmap-ai-engineer', 'AI & Machine Learning', '$135,000 - $185,000 / yr'),
  'roadmap-devops-engineer': createCurriculumForRole('DevOps Engineer', 'roadmap-devops-engineer', 'Cloud & Infrastructure', '$115,000 - $160,000 / yr'),
  'roadmap-cybersecurity-analyst': createCurriculumForRole('Cybersecurity Analyst', 'roadmap-cybersecurity-analyst', 'Security', '$95,000 - $140,000 / yr'),
  'roadmap-power-bi-developer': createCurriculumForRole('Power BI Developer', 'roadmap-power-bi-developer', 'Data & Analytics', '$85,000 - $125,000 / yr'),
  'roadmap-business-analyst': createCurriculumForRole('Business Analyst', 'roadmap-business-analyst', 'Business & Analytics', '$80,000 - $115,000 / yr'),
  'roadmap-sap-data-analyst': createCurriculumForRole('SAP Data Analyst', 'roadmap-sap-data-analyst', 'Enterprise Data', '$90,000 - $130,000 / yr'),
  'roadmap-cloud-engineer': createCurriculumForRole('Cloud Engineer', 'roadmap-cloud-engineer', 'Cloud Infrastructure', '$120,000 - $165,000 / yr'),
  'roadmap-cloud-data-engineer': createCurriculumForRole('Cloud Data Engineer', 'roadmap-cloud-data-engineer', 'Cloud & Data', '$125,000 - $170,000 / yr'),
  'roadmap-frontend-developer': createCurriculumForRole('Frontend Developer', 'roadmap-frontend-developer', 'Software Engineering', '$95,000 - $140,000 / yr'),
  'roadmap-backend-developer': createCurriculumForRole('Backend Developer', 'roadmap-backend-developer', 'Software Engineering', '$110,000 - $155,000 / yr'),
  'roadmap-database-administrator': createCurriculumForRole('Database Administrator', 'roadmap-database-administrator', 'Databases', '$100,000 - $145,000 / yr'),
  'roadmap-business-intelligence-analyst': createCurriculumForRole('Business Intelligence Analyst', 'roadmap-business-intelligence-analyst', 'Data & Analytics', '$88,000 - $128,000 / yr'),
  'roadmap-software-developer': createCurriculumForRole('Software Developer', 'roadmap-software-developer', 'Software Engineering', '$105,000 - $150,000 / yr')
};

// Helper lookup function with fallback
export function getCurriculumByRoadmapId(roadmapId: string, roleName?: string): CareerCurriculum {
  if (curriculumRegistry[roadmapId]) {
    return curriculumRegistry[roadmapId];
  }
  // Try matching by role name
  const found = Object.values(curriculumRegistry).find(
    c => c.role.toLowerCase() === (roleName || '').toLowerCase()
  );
  if (found) return found;

  // Fallback to data scientist curriculum
  return dataScientistCurriculum;
}
