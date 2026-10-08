import { Project } from '../types';

export const initialProjects: Project[] = [
  {
    id: 'proj-py-billing',
    title: 'Enterprise Automated Billing & Invoicing Engine',
    category: 'Programming',
    difficulty: 'Beginner',
    estimatedHours: 12,
    summary: 'Build a production-style Python application that parses product catalogs, handles volume-based discounting, calculates progressive tax rates, and generates formatted customer receipts.',
    learningObjectives: [
      'Implement Object-Oriented design patterns (Encapsulation, Data Classes, Custom Exceptions)',
      'Read and write structured JSON catalog files safely with error recovery',
      'Create clean CLI interfaces with argument parsing',
      'Write comprehensive unit tests with pytest'
    ],
    techStack: ['Python 3.12', 'JSON', 'Pytest', 'OOP'],
    requirements: [
      'Create `Product`, `Customer`, `LineItem`, and `Invoice` classes',
      'Apply dynamic discount tiers: 5% off over $100, 10% off over $500',
      'Implement persistence: save finalized orders with timestamps into an orders database file',
      'Generate both a clean ASCII receipt for the console and an exportable JSON order record'
    ],
    starterCode: `import json
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Product:
    sku: str
    name: str
    price: float
    stock: int

class InvoiceEngine:
    def __init__(self, catalog_path: str = "catalog.json"):
        self.catalog = self._load_catalog(catalog_path)
        self.active_items = []

    def _load_catalog(self, path: str):
        # Implement catalog loading
        return {}

    def add_item(self, sku: str, quantity: int):
        # Check stock and add line item
        pass

    def calculate_total(self, tax_rate: float = 0.08) -> dict:
        # Calculate subtotal, discount, tax, and final amount
        return {"subtotal": 0.0, "discount": 0.0, "tax": 0.0, "total": 0.0}

if __name__ == "__main__":
    print("Billing engine ready.")`,
    solutionOverview: 'Utilizes a robust repository pattern for catalog management, dataclasses for immutability, and strategy pattern for tier-based discounts.',
    evaluationCriteria: [
      'Proper exception handling when SKU is missing or quantity exceeds available stock',
      'Accurate floating-point rounding for financial totals',
      'Clean modular class breakdown and docstrings'
    ]
  },
  {
    id: 'proj-da-sales',
    title: 'Omnichannel Retail Performance Dashboard',
    category: 'Data Analytics',
    difficulty: 'Intermediate',
    estimatedHours: 18,
    summary: 'Analyze over 100,000 multi-region e-commerce transactions, uncover seasonal revenue trends, cohort retention, and build an interactive executive dashboard in Power BI / Tableau.',
    learningObjectives: [
      'Clean raw transaction logs with Python Pandas (imputation, date parsing, outlier removal)',
      'Design dimensional Star Schema with DimDate, DimProduct, DimStore, and FactSales',
      'Formulate advanced DAX time intelligence metrics (YoY Growth, MoM Variance, Rolling 90-Day Moving Average)',
      'Present actionable business recommendations on underperforming regional territories'
    ],
    techStack: ['Python', 'Pandas', 'Power BI / Tableau', 'SQL', 'Star Schema'],
    requirements: [
      'Clean 12 months of multi-currency transactions and normalize into USD',
      'Construct a Date Table with fiscal quarters and holiday indicators',
      'Calculate Customer Lifetime Value (CLV) and churn rate across customer cohorts',
      'Build 3 interactive views: Executive KPI Summary, Regional Geospatial Heatmap, and Product Profitability Matrix'
    ],
    starterCode: `import pandas as pd
import numpy as np

# Load transactions
def process_sales_data(filepath: str) -> pd.DataFrame:
    df = pd.read_csv(filepath)
    # Parse dates
    df['order_date'] = pd.to_datetime(df['order_date'])
    # Remove negative returns for gross analysis
    df['gross_sales'] = df['quantity'] * df['unit_price']
    return df

print("Data processing pipeline template.")`,
    solutionOverview: 'Implements Star Schema in Power BI with VertiPaq compression optimization, dynamic bookmark filtering, and Pareto 80/20 analysis.',
    evaluationCriteria: [
      'Star Schema integrity (one-to-many single directional filters from dimensions to facts)',
      'DAX performance (avoiding iterating functions where vector aggregators suffice)',
      'Clarity of visual storytelling and color hierarchy'
    ]
  },
  {
    id: 'proj-ds-churn',
    title: 'SaaS Customer Churn Prediction & Explainable AI',
    category: 'Data Science',
    difficulty: 'Advanced',
    estimatedHours: 24,
    summary: 'Train a machine learning pipeline on subscription telematics data to predict customer churn risk, explain model drivers with SHAP values, and deploy an inference API.',
    learningObjectives: [
      'Address class imbalance using SMOTE and stratified cross-validation',
      'Train and tune ensemble gradient boosted classifiers (XGBoost & LightGBM)',
      'Compute SHAP (SHapley Additive exPlanations) values to explain individual user risk factors',
      'Package model into a Dockerized FastAPI microservice endpoint'
    ],
    techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'SHAP', 'FastAPI', 'Docker'],
    requirements: [
      'Feature engineering: calculate rolling 30-day login frequency, support ticket velocity, and payment failure events',
      'Achieve ROC-AUC score >= 0.88 on holdout test set',
      'Generate SHAP waterfall plots for top at-risk enterprise accounts',
      'Deploy `/predict` endpoint that returns probability of churn and top 3 contributory risk factors'
    ],
    starterCode: `from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
import shap

def train_churn_model(X, y):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)
    model = XGBClassifier(n_estimators=200, max_depth=5, learning_rate=0.05, eval_metric='logloss')
    model.fit(X_train, y_train)
    return model, X_test, y_test`,
    solutionOverview: 'Full MLOps pipeline featuring Scikit-Learn Pipeline transformers, hyperparameter optimization with Optuna, and explainability via TreeSHAP.',
    evaluationCriteria: [
      'Proper cross-validation preventing data leakage between train and test splits',
      'Meaningful threshold calibration based on business cost of False Negatives vs False Positives',
      'Production-ready inference endpoint with input validation'
    ]
  },
  {
    id: 'proj-fs-devconnect',
    title: 'DevConnect: Real-Time Developer Collaboration Platform',
    category: 'Full Stack',
    difficulty: 'Advanced',
    estimatedHours: 30,
    summary: 'Build and deploy a full-stack platform where software engineers can find project collaborators, review code snippets, chat in real-time, and showcase portfolio repos.',
    learningObjectives: [
      'Build interactive React 19 UI with Tailwind CSS and optimistic state updates',
      'Design RESTful Express microservice architecture with JWT cookie auth and rate limiting',
      'Implement PostgreSQL relational data models with Prisma or Drizzle ORM',
      'Orchestrate real-time notifications and messaging'
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    requirements: [
      'User authentication with email verification, password reset, and role permissions',
      'Project showcase feed with tagging, search, and upvoting',
      'Direct messaging and collaborative discussion threads',
      'Public developer portfolio profiles showcasing skills and verified certificates'
    ],
    starterCode: `// DevConnect Express Router Starter
import { Router } from 'express';
const router = Router();

router.get('/projects', async (req, res) => {
  // Query active projects with author profiles
  res.json({ status: 'ok', data: [] });
});

export default router;`,
    solutionOverview: 'Clean hexagonal architecture separating controllers, business use cases, and repository persistence with full type-safety.',
    evaluationCriteria: [
      'Secure input sanitization and protection against SQL injection / XSS',
      'Responsive design across mobile, tablet, and widescreen monitors',
      'Robust error handling and friendly loading/empty states'
    ]
  }
];
