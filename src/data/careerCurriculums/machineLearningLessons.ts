import { CareerLesson } from '../../types';

export const machineLearningLessons: CareerLesson[] = [
  {
    id: 'ml-lesson-1',
    milestoneId: 'ms-machine-learning',
    order: 1,
    title: '1. Machine Learning Foundations & Supervised vs Unsupervised',
    durationMinutes: 25,
    conceptExplanation: 'Machine Learning algorithms learn mathematical patterns from historical data to make automated predictions on unseen data, rather than following explicitly hard-coded if/else rules. Supervised Learning trains on labeled pairs (Features X -> Target y) for Classification (discrete labels) or Regression (continuous numbers). Unsupervised Learning identifies hidden patterns without ground-truth labels (Clustering, Dimensionality Reduction).',
    whyImportant: 'Machine learning powers algorithmic pricing, fraud prevention, recommendation systems, medical diagnostic screening, and autonomous vehicles. Knowing when to frame a problem as classification vs regression is step zero.',
    syntax: `# Standard Scikit-Learn Model Workflow
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LogisticRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
score = accuracy_score(y_test, predictions)`,
    exampleDescription: 'Training a binary classification model to predict whether a banking loan applicant will default or repay.',
    codeSnippet: `import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix

# Simulated applicant data: [Credit Score, Annual Income ($k), Debt-to-Income Ratio]
X = np.array([
    [750, 95, 0.15],
    [580, 42, 0.48],
    [810, 140, 0.10],
    [620, 55, 0.35],
    [510, 30, 0.65],
    [720, 80, 0.22],
    [690, 68, 0.28],
    [540, 38, 0.52]
])
# Labels: 1 = Repaid loan, 0 = Defaulted
y = np.array([1, 0, 1, 1, 0, 1, 1, 0])

# Split into training and testing cohorts (75% / 25%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# Instantiate and fit logistic regression classifier
clf = LogisticRegression()
clf.fit(X_train, y_train)

# Evaluate on unseen holdout test set
predictions = clf.predict(X_test)

print(f"Model Learned Weights: {clf.coef_}")
print(f"Model Intercept:       {clf.intercept_}")
print(f"Test Set Predictions:  {predictions.tolist()}")
print(f"Actual Test Labels:    {y_test.tolist()}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 7-18: Formulating a feature matrix X (continuous numerical predictors) and target vector y (binary ground truth).',
      'Line 21: train_test_split isolates a holdout testing set to measure true generalization performance.',
      'Line 24-25: Standard Scikit-Learn .fit() method optimizes the cross-entropy loss function to calculate optimal weights.',
      'Line 28: .predict() applies learned weights to unseen test vectors.'
    ],
    realWorldExample: 'JPMorgan Chase uses supervised classification models to evaluate millions of credit card transactions per second, scoring fraud probability within 30 milliseconds.',
    commonMistakes: [
      {
        mistake: 'Evaluating model accuracy on the exact same data used to train it.',
        fix: 'A model can simply memorize training samples (overfitting). Always evaluate on a pristine holdout test set or via K-Fold Cross Validation.'
      }
    ],
    practiceExercises: [
      {
        task: 'Calculate the classification accuracy given true labels [1, 0, 1, 1, 0] and model predictions [1, 0, 1, 0, 0].',
        hint: 'Count matching predictions (4 out of 5) and divide by total length: 4 / 5 = 0.80 (80%).',
        solutionSnippet: 'true = [1, 0, 1, 1, 0]\npred = [1, 0, 1, 0, 0]\nacc = sum(t == p for t, p in zip(true, pred)) / len(true)\nprint(f"Accuracy: {acc:.1%}")'
      }
    ],
    quizQuestions: [
      {
        question: 'Predicting whether a patient has diabetes (Yes or No) is an example of what type of machine learning task?',
        options: ['Supervised Classification', 'Supervised Regression', 'Unsupervised Clustering', 'Dimensionality Reduction'],
        correctIndex: 0,
        explanation: 'Predicting discrete categorical classes (Yes/No, Spam/Ham) from labeled training examples is supervised classification.'
      },
      {
        question: 'Predicting the sale price of a house ($350,000) based on square footage and bedrooms is an example of what task?',
        options: ['Supervised Regression', 'Supervised Classification', 'K-Means Clustering', 'Reinforcement Learning'],
        correctIndex: 0,
        explanation: 'Predicting continuous numerical quantities from features is supervised regression.'
      },
      {
        question: 'What is overfitting in machine learning?',
        options: [
          'When the model learns the training data and noise too well, failing to generalize to new unseen data',
          'When the model runs out of computer memory',
          'When the model performs equally well on train and test data',
          'When the dataset has fewer than 10 columns'
        ],
        correctIndex: 0,
        explanation: 'Overfitting occurs when high model complexity captures training noise, leading to near 100% training accuracy but poor test performance.'
      },
      {
        question: 'What does the random_state parameter do in train_test_split?',
        options: [
          'Guarantees identical pseudo-random shuffle splits for reproducible experimental results',
          'Speeds up model computation by 50%',
          'Encrypts the dataset with a password',
          'Selects the best machine learning algorithm automatically'
        ],
        correctIndex: 0,
        explanation: 'Setting a fixed seed integer (like 42) ensures deterministic splits across different executions.'
      },
      {
        question: 'Which of the following is an unsupervised learning technique?',
        options: ['K-Means Clustering', 'Linear Regression', 'Support Vector Machine Classifier', 'Decision Tree Classifier'],
        correctIndex: 0,
        explanation: 'K-Means groups unlabeled data points into clusters based on geometric distance without requiring any target outcome labels.'
      }
    ],
    miniChallenge: {
      title: 'Accuracy Score Calculator',
      prompt: 'Write a function compute_accuracy(y_true, y_pred) that calculates the percentage of correct predictions between two equal-length lists.',
      starterCode: `def compute_accuracy(y_true, y_pred):
    # Your calculation here
    pass

print(compute_accuracy([1, 0, 1, 1], [1, 0, 0, 1])) # Expected: 0.75`,
      solution: `def compute_accuracy(y_true, y_pred):
    if not y_true: return 0.0
    correct = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp)
    return correct / len(y_true)

print(compute_accuracy([1, 0, 1, 1], [1, 0, 0, 1]))`
    }
  },
  {
    id: 'ml-lesson-2',
    milestoneId: 'ms-machine-learning',
    order: 2,
    title: '2. Decision Trees, Random Forests & Gradient Boosting (XGBoost)',
    durationMinutes: 30,
    conceptExplanation: 'Decision Trees split data hierarchically based on feature thresholds that maximize Information Gain (minimizing Gini Impurity or Entropy). While individual trees tend to overfit, Ensemble Methods combine hundreds of trees. Random Forests use Bagging (Bootstrap Aggregating) and feature subsampling to reduce variance. Gradient Boosting (XGBoost, LightGBM) trains trees sequentially, with each new tree correcting the residual errors of prior trees.',
    whyImportant: 'Gradient Boosted Decision Trees (XGBoost/LightGBM) win 85%+ of Kaggle competitions on structured tabular data. In industry, tree ensembles are the workhorse of fraud detection, search ranking, and ad click prediction.',
    syntax: `# Training an XGBoost Classifier
import xgboost as xgb
model = xgb.XGBClassifier(
    n_estimators=100,
    learning_rate=0.05,
    max_depth=5,
    subsample=0.8,
    random_state=42
)
model.fit(X_train, y_train)
feature_importances = model.feature_importances_`,
    exampleDescription: 'Training a Random Forest ensemble to predict customer subscription cancellation with feature importance extraction.',
    codeSnippet: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, f1_score
import numpy as np

# Generate realistic tabular dataset with 10 features
X, y = make_classification(
    n_samples=1000, 
    n_features=10, 
    n_informative=6, 
    random_state=42
)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest with 150 parallel estimators
rf = RandomForestClassifier(
    n_estimators=150, 
    max_depth=6, 
    min_samples_split=4, 
    random_state=42
)
rf.fit(X_train, y_train)

# Predict probabilities for ROC-AUC evaluation
y_probs = rf.predict_proba(X_test)[:, 1]
y_preds = rf.predict(X_test)

auc = roc_auc_score(y_test, y_probs)
f1 = f1_score(y_test, y_preds)

print(f"Random Forest ROC-AUC Score: {auc:.4f}")
print(f"Random Forest F1-Score:      {f1:.4f}")

# Extract top 3 most influential predictive features
importances = rf.feature_importances_
top_indices = np.argsort(importances)[::-1][:3]
print("\\nTop 3 Predictive Features:")
for rank, idx in enumerate(top_indices, 1):
    print(f"  {rank}. Feature #{idx}: Importance = {importances[idx]:.3f}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 8-13: Generating a synthetic classification dataset with informative features using make_classification.',
      'Line 18-24: Initializing RandomForestClassifier with 150 decision trees, constrained max_depth=6 to prevent overfitting.',
      'Line 27-28: Generating continuous probability scores via .predict_proba() for ROC-AUC scoring.',
      'Line 35-39: Inspecting feature_importances_ to provide transparent model explainability to business stakeholders.'
    ],
    realWorldExample: 'Uber Eats uses Gradient Boosted Decision Trees to predict real-time food delivery prep times and courier arrival estimates by evaluating restaurant capacity, weather, and traffic.',
    commonMistakes: [
      {
        mistake: 'Allowing individual decision trees to grow with unlimited depth (max_depth=None), causing massive overfitting.',
        fix: 'Regularize trees by setting max_depth (e.g. 4 to 8), min_samples_split, and min_samples_leaf, or use ensemble methods.'
      }
    ],
    practiceExercises: [
      {
        task: 'Define an XGBClassifier with 200 trees, learning rate 0.03, and max depth 4 using Scikit-Learn parameter names.',
        hint: 'xgb.XGBClassifier(n_estimators=200, learning_rate=0.03, max_depth=4)',
        solutionSnippet: 'import xgboost as xgb\nmodel = xgb.XGBClassifier(n_estimators=200, learning_rate=0.03, max_depth=4)\nprint(model)'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the fundamental difference between Bagging (Random Forest) and Boosting (XGBoost)?',
        options: [
          'Bagging trains trees independently in parallel; Boosting trains trees sequentially to correct prior errors',
          'Bagging is only for text; Boosting is only for images',
          'Boosting can only have 1 tree',
          'Bagging never uses random sampling'
        ],
        correctIndex: 0,
        explanation: 'Random Forests train trees in parallel on bootstrap subsets; Boosting builds trees sequentially, focusing on instances misclassified by earlier iterations.'
      },
      {
        question: 'What metric does a classification decision tree use to determine the optimal split at each node?',
        options: ['Gini Impurity or Entropy (Information Gain)', 'Mean Squared Error', 'Euclidean Distance', 'R-squared'],
        correctIndex: 0,
        explanation: 'Classification trees evaluate potential splits by calculating the decrease in Gini Impurity or Shannon Entropy.'
      },
      {
        question: 'Why are Random Forests generally less prone to overfitting than single Decision Trees?',
        options: [
          'Averaging predictions from many decorrelated trees reduces model variance without increasing bias',
          'They convert all numbers into text',
          'They only use linear equations',
          'They do not use training data'
        ],
        correctIndex: 0,
        explanation: 'Ensemble bagging averages the outputs of decorrelated decision trees, dramatically reducing variance (overfitting).'
      },
      {
        question: 'What does the learning_rate (shrinkage) hyperparameter control in Gradient Boosting?',
        options: [
          'The step size weight applied to each new tree’s contribution to the cumulative model',
          'How fast the computer CPU runs',
          'The number of rows in the training split',
          'The speed of database queries'
        ],
        correctIndex: 0,
        explanation: 'A smaller learning rate shrinks the impact of each sequential tree, requiring more estimators but preventing over-aggressive step sizes.'
      },
      {
        question: 'What does feature_importances_ indicate in a fitted tree ensemble?',
        options: [
          'The relative fraction of impurity reduction contributed by each feature across all trees',
          'The price of the dataset',
          'The order the columns appeared in the CSV',
          'The number of missing values per column'
        ],
        correctIndex: 0,
        explanation: 'Feature importance measures the total decrease in node impurity (e.g. Gini) brought by splits on that specific feature.'
      }
    ],
    miniChallenge: {
      title: 'Ensemble Majority Voter',
      prompt: 'Write a function majority_vote(predictions_list) that takes a list of lists (each sublist is predictions from 1 model) and returns the majority vote per sample.',
      starterCode: `def majority_vote(predictions_matrix):
    # predictions_matrix is a list of lists: [[1, 0, 1], [1, 1, 1], [0, 0, 1]]
    pass

preds = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1]
]
print(majority_vote(preds)) # Expected: [1, 0, 1]`,
      solution: `def majority_vote(predictions_matrix):
    num_samples = len(predictions_matrix[0])
    final = []
    for col_idx in range(num_samples):
        votes = [model_preds[col_idx] for model_preds in predictions_matrix]
        majority = 1 if votes.count(1) >= votes.count(0) else 0
        final.append(majority)
    return final

preds = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1]
]
print(majority_vote(preds))`
    }
  },
  {
    id: 'ml-lesson-3',
    milestoneId: 'ms-machine-learning',
    order: 3,
    title: '3. Model Evaluation: Precision, Recall, F1 & ROC-AUC',
    durationMinutes: 30,
    conceptExplanation: 'Relying solely on Accuracy is dangerous for imbalanced datasets. If 99% of transactions are legitimate and 1% are fraud, a dumb model that predicts "Legitimate" 100% of the time achieves 99% accuracy while catching 0% of fraud. Precision measures how many predicted positives were truly positive (minimizing false alarms). Recall measures how many actual positives were successfully found. F1-score is their harmonic mean, and ROC-AUC evaluates ranking performance across all decision thresholds.',
    whyImportant: 'In medical diagnosis, missing a malignant tumor (False Negative) is fatal, demanding high Recall. In email spam filtering, sending an urgent job offer to spam (False Positive) is unacceptable, demanding high Precision. Understanding trade-offs is essential.',
    syntax: `# Comprehensive Evaluation Metrics
from sklearn.metrics import classification_report, roc_auc_score, confusion_matrix
print(confusion_matrix(y_true, y_pred))
print(classification_report(y_true, y_pred))
auc = roc_auc_score(y_true, y_pred_probabilities)`,
    exampleDescription: 'Auditing a fraud detection model: calculating Confusion Matrix metrics (TP, FP, TN, FN) and plotting precision-recall trade-offs.',
    codeSnippet: `from sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score, roc_auc_score

# Ground truth: 10 transactions (9 legitimate = 0, 1 fraudulent = 1)
y_true = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]

# Model Predicted Probabilities and binary decisions
y_probs = [0.05, 0.12, 0.08, 0.35, 0.10, 0.02, 0.45, 0.15, 0.88, 0.72]
y_pred  = [0,    0,    0,    0,    0,    0,    0,    0,    1,    1]

# Confusion Matrix components
tn, fp, fn, tp = confusion_matrix(y_true, y_pred).ravel()

precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)
auc = roc_auc_score(y_true, y_probs)

print("--- Confusion Matrix Breakdown ---")
print(f"True Positives (Caught Fraud):  {tp}")
print(f"False Positives (False Alarms):  {fp}")
print(f"True Negatives (Legitimate OK): {tn}")
print(f"False Negatives (Missed Fraud):  {fn}")

print("\\n--- Performance Metrics ---")
print(f"Precision: {precision:.2f} (When model says fraud, it is 100% right)")
print(f"Recall:    {recall:.2f} (Model caught 100% of actual fraud cases)")
print(f"F1-Score:  {f1:.2f}")
print(f"ROC-AUC:   {auc:.2f}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 4-8: Setting up an imbalanced ground truth cohort where positive instances (fraud) make up only 20% of cases.',
      'Line 11: Unpacking confusion_matrix into True Negatives, False Positives, False Negatives, and True Positives.',
      'Line 13-16: Computing precision, recall, F1 harmonic mean, and threshold-independent ROC-AUC.',
      'Line 24-27: Interpreting the concrete business implications of precision vs recall scores.'
    ],
    realWorldExample: 'Google Photos face clustering evaluates precision and recall metrics across billions of faces to avoid mistakenly tagging strangers in a family vacation album.',
    commonMistakes: [
      {
        mistake: 'Using accuracy to claim a fraud model is 99.8% effective when the baseline fraud rate is 0.2%.',
        fix: 'Never use accuracy on imbalanced classes. Use Precision-Recall AUC (PR-AUC) or F1-score with balanced class weights.'
      }
    ],
    practiceExercises: [
      {
        task: 'Calculate the F1-score given Precision = 0.80 and Recall = 0.60 using formula 2 * (P * R) / (P + R).',
        hint: '2 * (0.8 * 0.6) / (0.8 + 0.6) = 0.96 / 1.4 = 0.6857.',
        solutionSnippet: 'p = 0.80\nr = 0.60\nf1 = 2 * (p * r) / (p + r)\nprint(f"F1: {f1:.4f}")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the formula for Precision in binary classification?',
        options: ['TP / (TP + FP)', 'TP / (TP + FN)', '(TP + TN) / Total', 'TN / (TN + FP)'],
        correctIndex: 0,
        explanation: 'Precision measures True Positives divided by all predicted positives: TP / (TP + FP).'
      },
      {
        question: 'What is the formula for Recall (Sensitivity)?',
        options: ['TP / (TP + FN)', 'TP / (TP + FP)', 'TN / (TN + FN)', 'FP / (FP + TP)'],
        correctIndex: 0,
        explanation: 'Recall measures True Positives divided by all actual positive cases: TP / (TP + FN).'
      },
      {
        question: 'In cancer screening, which type of error is generally considered far more dangerous?',
        options: [
          'False Negative (missing a real cancer diagnosis)',
          'False Positive (ordering a confirmation biopsy)',
          'Both are equally harmless',
          'True Negatives'
        ],
        correctIndex: 0,
        explanation: 'A False Negative fails to diagnose a life-threatening illness until it is too late, requiring models to prioritize high Recall.'
      },
      {
        question: 'What does a ROC-AUC score of 0.50 indicate about a model?',
        options: [
          'Perfect predictive accuracy',
          'The model performs no better than random guessing',
          'The model is 50% faster than average',
          'The dataset had 50 columns'
        ],
        correctIndex: 1,
        explanation: 'A ROC-AUC of 0.50 corresponds to the diagonal line of random chance. 1.0 represents a perfect classifier.'
      },
      {
        question: 'Why is the F1-score calculated as the harmonic mean rather than the arithmetic mean of Precision and Recall?',
        options: [
          'The harmonic mean heavily penalizes extreme imbalances where one metric is near zero',
          'It is easier to calculate by hand',
          'The arithmetic mean cannot handle floating point numbers',
          'Because of Python syntax requirements'
        ],
        correctIndex: 0,
        explanation: 'Harmonic mean 2*P*R/(P+R) ensures that if either precision or recall is 0, F1 collapses to 0, preventing false optimism.'
      }
    ],
    miniChallenge: {
      title: 'Precision-Recall Calculator',
      prompt: 'Write a function precision_recall(y_true, y_pred) that returns a tuple (precision, recall) rounded to 3 decimals.',
      starterCode: `def precision_recall(y_true, y_pred):
    # Return (precision, recall)
    pass

yt = [1, 1, 0, 0, 1]
yp = [1, 0, 0, 1, 1]
print(precision_recall(yt, yp)) # Expected: (0.667, 0.667)`,
      solution: `def precision_recall(y_true, y_pred):
    tp = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 1)
    fp = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 1)
    fn = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 0)
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    return (round(precision, 3), round(recall, 3))

yt = [1, 1, 0, 0, 1]
yp = [1, 0, 0, 1, 1]
print(precision_recall(yt, yp))`
    }
  }
];
