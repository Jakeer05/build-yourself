import React, { useState } from 'react';
import {
  FolderGit2,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Briefcase,
  Layers,
  Terminal,
  Code2,
  Database,
  Server,
  Layout,
  Cpu,
  FileCode,
  Check,
  ChevronRight,
  ExternalLink,
  Award,
  Sparkles,
  Play,
  RotateCcw,
  Copy,
  Info,
  HelpCircle,
  TrendingUp,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CareerProject } from '../../types';

interface ProjectTeachingViewProps {
  project: CareerProject;
  careerRole: string;
  isCompleted: boolean;
  onBack: () => void;
  onCompleteProject: () => void;
}

export const ProjectTeachingView: React.FC<ProjectTeachingViewProps> = ({
  project,
  careerRole,
  isCompleted,
  onBack,
  onCompleteProject
}) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'tech_stack' | 'architecture' | 'step_by_step' | 'testing_deploy' | 'portfolio_career'
  >('overview');

  // Checklist tracking
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    reqs: isCompleted,
    env: isCompleted,
    structure: isCompleted,
    core: isCompleted,
    test: isCompleted,
    debug: isCompleted,
    docs: isCompleted,
    deploy: isCompleted,
    portfolio: isCompleted
  });

  const [activeBuildStep, setActiveBuildStep] = useState<number>(0);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  const toggleChecklistItem = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistItems = [
    { key: 'reqs', label: 'Understand requirements & problem statement' },
    { key: 'env', label: 'Set up development environment & dependencies' },
    { key: 'structure', label: 'Create recommended project folder structure' },
    { key: 'core', label: 'Implement core functionality & data pipelines' },
    { key: 'test', label: 'Execute unit tests & edge-case validation' },
    { key: 'debug', label: 'Fix errors & handle performance bottlenecks' },
    { key: 'docs', label: 'Document project in README with architecture diagram' },
    { key: 'deploy', label: 'Deploy to cloud / container / hosting platform' },
    { key: 'portfolio', label: 'Add to GitHub portfolio & update resume bullets' }
  ];

  const allChecked = checklistItems.every(item => checklist[item.key]);
  const checkedCount = checklistItems.filter(item => checklist[item.key]).length;

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleFinishProject = () => {
    onCompleteProject();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  // 10 Build Steps tailored to project
  const buildSteps = [
    {
      stepNumber: 1,
      title: 'Problem Framing & Requirements Breakdown',
      description: 'Define the business objectives, core metric formulas (e.g. Customer Lifetime Value, Conversion Rate), and user personas.',
      actionable: 'Draft a functional specifications document clarifying dataset constraints, refresh frequencies, and expected output deliverables.',
      codeSnippet: `# Step 1: Project Metadata & Constants
PROJECT_NAME = "${project.title}"
TARGET_CAREER = "${careerRole}"
METRIC_TARGET = "99.5% accuracy & real-time responsiveness"
print(f"Initializing {PROJECT_NAME} for {TARGET_CAREER} pipeline.")`
    },
    {
      stepNumber: 2,
      title: 'Dataset Acquisition & Exploration',
      description: 'Collect raw transactional data from REST APIs, enterprise SQL databases, or structured CSV/Parquet dumps.',
      actionable: 'Inspect column schemas, detect missing values (nulls/NaNs), and evaluate cardinality of categorical fields.',
      codeSnippet: `import pandas as pd
import numpy as np

# Load raw telemetry or transaction dataset
df_raw = pd.read_csv("data/raw_data.csv")
print(f"Shape: {df_raw.shape}")
print(df_raw.info())`
    },
    {
      stepNumber: 3,
      title: 'Data Cleaning & Preprocessing Pipeline',
      description: 'Impute missing numerical indicators, standardize timestamp formats to UTC, and filter outlier anomalies.',
      actionable: 'Construct an idempotent preprocessing script that can be executed repeatedly across daily batches.',
      codeSnippet: `def clean_dataset(df: pd.DataFrame) -> pd.DataFrame:
    df_clean = df.copy()
    # Normalize timestamp
    df_clean['created_at'] = pd.to_datetime(df_clean['created_at'], utc=True)
    # Handle missing numericals
    df_clean['amount'] = df_clean['amount'].fillna(0.0)
    # Deduplicate primary keys
    df_clean = df_clean.drop_duplicates(subset=['transaction_id'])
    return df_clean`
    },
    {
      stepNumber: 4,
      title: 'Database Schema & Relational Storage',
      description: 'Design normalized tables in PostgreSQL/MySQL or SQLite with primary keys, indexes, and foreign key relationships.',
      actionable: 'Run SQL migration scripts creating indexed tables for rapid filtering during dashboard queries.',
      codeSnippet: `-- Step 4: Schema Definition
CREATE TABLE IF NOT EXISTS transactions (
    transaction_id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    status VARCHAR(32) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_transactions_user ON transactions(user_id);`
    },
    {
      stepNumber: 5,
      title: 'Business Logic & Exploratory Analytics',
      description: 'Aggregate KPIs, compute cohort retention, and calculate monthly recurring revenue trends using window functions or Pandas.',
      actionable: 'Group metrics by dimensions (region, quarter, product tier) to uncover actionable commercial insights.',
      codeSnippet: `# Step 5: Cohort Analysis
cohort_summary = df_clean.groupby(['region', 'product_tier']).agg(
    total_revenue=('amount', 'sum'),
    average_order_value=('amount', 'mean'),
    customer_count=('user_id', 'nunique')
).reset_index()
print(cohort_summary.head())`
    },
    {
      stepNumber: 6,
      title: 'Backend API & Data Endpoints',
      description: 'Expose high-performance RESTful JSON endpoints using FastAPI / Express to feed frontend charts and dashboards.',
      actionable: 'Add request validation and response serializers to ensure safe data delivery.',
      codeSnippet: `from fastapi import FastAPI, HTTPException
app = FastAPI(title="Project API")

@app.get("/api/v1/metrics")
async def get_metrics():
    # Return cached aggregated KPIs
    return {
        "status": "success",
        "data": cohort_summary.to_dict(orient="records")
    }`
    },
    {
      stepNumber: 7,
      title: 'Interactive Frontend / Dashboard Construction',
      description: 'Build responsive charts, filters, and KPI cards using React, Tailwind CSS, or Power BI / Tableau.',
      actionable: 'Allow stakeholders to filter by date range, geographical region, and segment with sub-second visual refresh.',
      codeSnippet: `// Step 7: React Dashboard Component
export const MetricsDashboard = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((m, idx) => (
        <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400">{m.product_tier}</span>
          <h4 className="text-xl font-bold text-white">\${m.total_revenue.toLocaleString()}</h4>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      stepNumber: 8,
      title: 'Automated Testing & Edge-Case Validation',
      description: 'Write test cases using pytest / Jest covering edge scenarios (null inputs, zero division, database disconnects).',
      actionable: 'Ensure code coverage reaches minimum 80% with automated GitHub Actions continuous integration.',
      codeSnippet: `# Step 8: Unit Testing
def test_clean_dataset_removes_duplicates():
    raw = pd.DataFrame({
        "transaction_id": ["T1", "T1", "T2"],
        "amount": [10.0, 10.0, 20.0],
        "created_at": ["2026-01-01", "2026-01-01", "2026-01-02"]
    })
    cleaned = clean_dataset(raw)
    assert len(cleaned) == 2
    assert cleaned['amount'].sum() == 30.0`
    },
    {
      stepNumber: 9,
      title: 'Documentation & Architecture Diagrams',
      description: 'Author a professional README.md with system architecture diagrams, API request/response samples, and installation instructions.',
      actionable: 'Include screenshots, GIF demonstrations, and deployment URLs directly in the repository.',
      codeSnippet: `<!-- Step 9: README Architecture Badge -->
# \${PROJECT_NAME}

[![CI Build](https://github.com/org/repo/actions/workflows/ci.yml/badge.svg)](https://github.com)
[![Docker Image](https://img.shields.io/badge/docker-ready-blue.svg)](https://docker.com)

## Architecture Overview
Dataset -> Data Cleaning (Python/Pandas) -> PostgreSQL -> FastAPI -> React Dashboard`
    },
    {
      stepNumber: 10,
      title: 'Cloud Deployment & Portfolio Showcase',
      description: 'Containerize with Docker and deploy to AWS / Render / Vercel with HTTPS SSL certificates and automated health checks.',
      actionable: 'Attach your GitHub repository link and live deployed URL to your portfolio and resume.',
      codeSnippet: `# Step 10: Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Header Banner & Completion Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 text-slate-400 hover:text-white transition-all"
            title="Return to Career Roadmap"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                {careerRole} Roadmap
              </span>
              <span className="text-xs text-slate-400">• {project.difficulty} Level</span>
              <span className="text-xs text-slate-400">• ~{project.estimatedHours} Hours Build Time</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">{project.title}</h1>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {isCompleted ? (
            <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Project Completed ✓</span>
            </span>
          ) : (
            <button
              onClick={handleFinishProject}
              className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all shadow-lg ${
                allChecked
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 shadow-emerald-500/20'
                  : 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-600/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{allChecked ? 'Finish & Complete Project (+150 XP)' : 'Mark Project Complete'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Structured Tabs */}
      <div className="flex items-center space-x-1 overflow-x-auto pb-1 border-b border-slate-800 scrollbar-none">
        {[
          { id: 'overview', label: '1. Objective & Requirements', icon: Info },
          { id: 'tech_stack', label: '2. Tech Stack & Tools', icon: Layers },
          { id: 'architecture', label: '3. Architecture & File Structure', icon: Cpu },
          { id: 'step_by_step', label: '4. Step-by-Step Build Guide', icon: Terminal },
          { id: 'testing_deploy', label: '5. Testing & Cloud Deployment', icon: Server },
          { id: 'portfolio_career', label: '6. Portfolio, Resume & Interviews', icon: Briefcase }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-violet-500/15 text-violet-300 border border-violet-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Tab Contents */}

      {/* TAB 1: OBJECTIVE & REQUIREMENTS */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Executive Summary */}
          <div className="p-6 rounded-3xl cosmic-card border border-violet-500/30 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 block">
              Project Overview & Problem Statement
            </span>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Interactive Project Completion Checklist */}
          <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Hands-on Implementation Checklist</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Complete each project milestone to unlock verified completion status.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">
                {checkedCount} / {checklistItems.length} Milestones
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {checklistItems.map(item => {
                const checked = checklist[item.key];
                return (
                  <div
                    key={item.key}
                    onClick={() => toggleChecklistItem(item.key)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center space-x-3 ${
                      checked
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                        checked
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                          : 'border-slate-600 bg-slate-950'
                      }`}
                    >
                      {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-medium leading-snug">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Requirements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span>Functional Requirements</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <FolderGit2 className="w-4 h-4 text-amber-400" />
                <span>Deliverables & Code Artifacts</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TECH STACK & TOOLS */}
      {activeTab === 'tech_stack' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl cosmic-card border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-violet-400" />
              <span>Technologies & Tools You Can Use (With Justification)</span>
            </h3>
            <p className="text-xs text-slate-400">
              Every tool in this stack is carefully selected to reflect production corporate standards for {careerRole} roles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {project.techStack.map((tech, idx) => {
                const getJustification = (name: string) => {
                  const n = name.toLowerCase();
                  if (n.includes('python')) return 'Primary scripting language for data ingestion, transformations, and mathematical modeling.';
                  if (n.includes('sql') || n.includes('postgres') || n.includes('mysql')) return 'Relational data persistence with strict foreign key constraints and fast indexed lookups.';
                  if (n.includes('pandas') || n.includes('numpy')) return 'High-performance vectorized dataframe manipulations and statistical aggregations.';
                  if (n.includes('power bi') || n.includes('tableau')) return 'Enterprise visual storytelling, drag-and-drop DAX formulas, and stakeholder executive dashboards.';
                  if (n.includes('react') || n.includes('typescript')) return 'Component-driven reactive user interface with type-safe state management.';
                  if (n.includes('fastapi') || n.includes('express')) return 'High-throughput asynchronous web microservice routing JSON data to frontend clients.';
                  if (n.includes('docker')) return 'Reproducible containerization eliminating "works on my machine" friction across deployment targets.';
                  return 'Industry-standard library providing optimized algorithmic throughput and clean developer ergonomics.';
                };

                return (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-cyan-300 font-mono">{tech}</span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        Production Tier
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{getJustification(tech)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ARCHITECTURE & FOLDER STRUCTURE */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          {/* Architecture Flow */}
          <div className="p-6 rounded-3xl cosmic-card border border-cyan-500/30 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Project Architectural Pipeline Flow</span>
            </h3>
            <p className="text-xs text-slate-400">
              End-to-end data trajectory from ingestion to executive presentation.
            </p>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto">
              {project.architecture}
            </div>
          </div>

          {/* Recommended Folder Structure */}
          <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <FolderGit2 className="w-4 h-4 text-amber-400" />
              <span>Recommended Production Repository File Structure</span>
            </h3>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
{`${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}/
├── data/
│   ├── raw/                  # Immutable source telemetry & CSVs
│   └── processed/            # Cleaned parquet & tabular artifacts
├── src/
│   ├── ingestion/            # API connectors & scrapers
│   ├── transform/            # Cleaning, feature engineering & transformations
│   ├── api/                  # FastAPI / Express route handlers
│   └── dashboard/            # Frontend components or Power BI templates
├── tests/
│   ├── test_ingestion.py     # Unit tests for network fetching
│   └── test_transform.py     # Unit tests for data frame cleaning
├── sql/
│   ├── migrations.sql        # Table definitions & indexes
│   └── analytical_queries.sql# KPI aggregates & views
├── docker-compose.yml        # Multi-container orchestration (DB + API)
├── Dockerfile                # Container recipe
├── requirements.txt          # Pinned Python dependencies
└── README.md                 # Complete documentation & architecture summary`}
            </pre>
          </div>
        </div>
      )}

      {/* TAB 4: STEP-BY-STEP BUILD GUIDE */}
      {activeTab === 'step_by_step' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Step Selector Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
              10 Build Milestones:
            </span>
            <div className="space-y-1.5 max-h-[65vh] overflow-y-auto pr-1">
              {buildSteps.map((step, idx) => {
                const isSelected = activeBuildStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveBuildStep(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-violet-600/20 border-violet-500/50 text-white font-bold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 truncate">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] shrink-0 ${
                        isSelected ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {step.stepNumber}
                      </span>
                      <span className="truncate">{step.title}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-violet-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Content */}
          <div className="lg:col-span-8 space-y-4">
            {(() => {
              const current = buildSteps[activeBuildStep];
              return (
                <div className="p-6 rounded-3xl cosmic-card border border-violet-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-violet-400 uppercase font-bold tracking-wider">
                        Milestone {current.stepNumber} of 10
                      </span>
                      <h3 className="text-lg font-bold text-white">{current.title}</h3>
                    </div>
                    <button
                      onClick={() => handleCopyCode(current.codeSnippet, activeBuildStep)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center space-x-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedCodeIdx === activeBuildStep ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-violet-200">
                    <strong className="text-violet-300">Action Item:</strong> {current.actionable}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Implementation Code Example:
                    </span>
                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
                      {current.codeSnippet}
                    </pre>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setActiveBuildStep(prev => Math.max(0, prev - 1))}
                      disabled={activeBuildStep === 0}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 disabled:opacity-40"
                    >
                      ← Previous Step
                    </button>
                    <button
                      onClick={() => setActiveBuildStep(prev => Math.min(buildSteps.length - 1, prev + 1))}
                      disabled={activeBuildStep === buildSteps.length - 1}
                      className="px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold disabled:opacity-40"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* TAB 5: TESTING & CLOUD DEPLOYMENT */}
      {activeTab === 'testing_deploy' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Automated Testing Strategy</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block">1. Unit Testing:</strong> Validate core data transformations and mathematical calculation logic on deterministic mocked data frames.
                </li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block">2. Integration Testing:</strong> Test database connectivity, index retrieval latency, and JSON serialization.
                </li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block">3. Performance Benchmarking:</strong> Ensure query response times stay below 200ms under simulated 50-user concurrent load.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>Cloud Deployment Targets</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block">Docker Containerization:</strong> Single Dockerfile bundling dependencies for zero-drift cloud runtime.
                </li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block">Vercel / Render / AWS:</strong> Push to GitHub to trigger automated container builds and continuous deployments.
                </li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block">Health Checks & Logging:</strong> Uptime monitor endpoint `/healthz` returning 200 OK.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: PORTFOLIO, RESUME & INTERVIEW PREP */}
      {activeTab === 'portfolio_career' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Resume Bullet Points */}
            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Copy-Paste Resume Bullet Points</span>
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 leading-relaxed">
                  • Engineered an end-to-end <strong>{project.title}</strong> using {project.techStack.slice(0, 3).join(', ')}, analyzing over 50,000+ transactional records to generate real-time KPI metrics.
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 leading-relaxed">
                  • Architected automated data cleaning and validation pipelines that reduced data ingestion errors by 40% while preserving historical integrity.
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 leading-relaxed">
                  • Built responsive analytics dashboard interfaces enabling cross-functional stakeholders to make data-driven decisions with sub-second latency.
                </div>
              </div>
            </div>

            {/* Typical Interview Questions on this Project */}
            <div className="p-6 rounded-2xl cosmic-card border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-violet-400" />
                <span>How to Answer Interview Questions on This Project</span>
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">Q: "Walk me through the architecture of your {project.title}."</span>
                  <p className="text-slate-400">
                    <strong className="text-violet-300">STAR Tip:</strong> Start with raw data ingestion, explain how relational indexing was optimized, describe the FastAPI service layer, and conclude with the business insights delivered.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">Q: "What was the biggest technical challenge you faced?"</span>
                  <p className="text-slate-400">
                    <strong className="text-violet-300">STAR Tip:</strong> Mention edge-case data cleaning or query performance bottlenecks and how you addressed them using database indexes or vectorized transformations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
