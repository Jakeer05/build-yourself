import { CareerRoadmap } from '../types';

export const initialRoadmaps: CareerRoadmap[] = [
  // 1. DATA ANALYST
  {
    id: 'roadmap-data-analyst',
    title: 'Data Analyst Career Roadmap',
    role: 'Data Analyst',
    category: 'Data & Analytics',
    estimatedMonths: 8,
    studyHoursPerWeek: 14,
    averageSalary: '$78,000 - $115,000 / yr',
    demandLevel: 'Very High',
    overview: 'Complete path from raw data wrangling to executive KPI dashboards, business metrics, and technical interview excellence.',
    targetAudience: 'Beginners, graduates, career changers aiming for roles in Business Intelligence, Product Analytics, and Operations.',
    steps: [
      {
        id: 'step-da-1',
        title: 'Stage 1: Excel & Spreadsheet Analytics',
        category: 'Tooling',
        durationWeeks: 3,
        description: 'Pivot tables, Power Query, INDEX/MATCH, XLOOKUP, and financial modeling.',
        keyTopics: ['XLOOKUP & Nested Logic', 'Power Query Data Munging', 'Pivot Tables & Slicers', 'Dynamic Dashboards'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Sales Commission Calculator', 'Cash Flow Budget Tracker'],
        milestoneTest: 'Excel Analytical Practical',
        status: 'completed'
      },
      {
        id: 'step-da-2',
        title: 'Stage 2: Enterprise SQL & Data Extraction',
        category: 'Database',
        durationWeeks: 5,
        description: 'Multi-table joins, subqueries, CTEs, Window functions, and performance indexing.',
        keyTopics: ['INNER/LEFT/RIGHT Joins', 'Window Functions (RANK, LAG, LEAD)', 'Common Table Expressions', 'Aggregations & Grouping'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Customer Churn SQL Pipeline', 'Cohort Retention Query Suite'],
        milestoneTest: 'SQL Mastery Mock Exam',
        status: 'completed'
      },
      {
        id: 'step-da-3',
        title: 'Stage 3: Applied Statistics & Probability',
        category: 'Core Language',
        durationWeeks: 3,
        description: 'Descriptive stats, distributions, hypothesis testing (t-test, p-value), A/B testing design.',
        keyTopics: ['Normal Distribution & Z-scores', 'Confidence Intervals', 'A/B Testing Methodology', 'Correlation vs Causation'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Marketing Campaign A/B Test Evaluator'],
        milestoneTest: 'Statistical Inference Test',
        status: 'in_progress'
      },
      {
        id: 'step-da-4',
        title: 'Stage 4: Python for Data Analysis',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Master core syntax, data structures, and script automation with Python.',
        keyTopics: ['Variables & Types', 'Lists, Dictionaries', 'Functions & Lambdas', 'File I/O & JSON'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Automated File Classifier', 'Invoice Calculation Engine'],
        milestoneTest: 'Python Fundamentals Assessment',
        status: 'locked'
      },
      {
        id: 'step-da-5',
        title: 'Stage 5: Pandas, NumPy & Data Cleaning',
        category: 'Framework',
        durationWeeks: 4,
        description: 'Pandas dataframes, NumPy arrays, handling missing values, exploratory data analysis, Seaborn visual insights.',
        keyTopics: ['Pandas Groupby & Pivot', 'Missing Value Imputation', 'Outlier Detection (IQR/Z-score)', 'Seaborn/Matplotlib Plots'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['E-Commerce Customer Behavior Study'],
        milestoneTest: 'Pandas Wrangling Benchmark',
        status: 'locked'
      },
      {
        id: 'step-da-6',
        title: 'Stage 6: Business Intelligence (Power BI & Tableau)',
        category: 'Tooling',
        durationWeeks: 5,
        description: 'Dimensional modeling (Star schema), DAX expressions, LOD calculations, interactive dashboards.',
        keyTopics: ['Fact & Dimension Modeling', 'DAX Measures & Time Intelligence', 'Tableau FIXED LOD', 'Executive Storytelling'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Global Supply Chain Dashboard', 'Executive SaaS Retention Portal'],
        milestoneTest: 'BI Dashboard Case Study',
        status: 'locked'
      },
      {
        id: 'step-da-7',
        title: 'Stage 7: Capstone Projects & Portfolio Building',
        category: 'Project',
        durationWeeks: 4,
        description: 'Build 3 end-to-end industry projects, write documentation, publish on GitHub and personal portfolio.',
        keyTopics: ['GitHub Documentation', 'Interactive Web Portfolio', 'Video Presentation Walkthrough', 'Data Storytelling'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['End-to-End Retail Omnichannel Analysis', 'Healthcare Outcomes Study'],
        milestoneTest: 'Portfolio Code Review',
        status: 'locked'
      },
      {
        id: 'step-da-8',
        title: 'Stage 8: Resume, Mock Interviews & Job Strategy',
        category: 'Career Prep',
        durationWeeks: 4,
        description: 'ATS resume optimization, technical SQL/Python live coding interviews, behavioral STAR questions.',
        keyTopics: ['ATS Keyword Formatting', 'Live SQL Coding Screen', 'Product Sense Questions', 'Salary Negotiation'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Target 30 Job Applications with Customized Resumes'],
        milestoneTest: 'AI Mock Technical & HR Interview',
        status: 'locked'
      }
    ]
  },

  // 2. DATA SCIENTIST
  {
    id: 'roadmap-data-scientist',
    title: 'Data Scientist Career Roadmap',
    role: 'Data Scientist',
    category: 'AI & Data Science',
    estimatedMonths: 10,
    studyHoursPerWeek: 16,
    averageSalary: '$110,000 - $165,000 / yr',
    demandLevel: 'Very High',
    overview: 'Mathematical foundations, predictive modeling, deep learning architectures, feature engineering, and MLOps deployment.',
    targetAudience: 'Software engineers, STEM graduates, and analytical minds desiring to build intelligent systems.',
    steps: [
      {
        id: 'step-ds-1',
        title: 'Stage 1: Python Programming & OOP Foundations',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Master variables, data structures, algorithms, and OOP in Python.',
        keyTopics: ['Data structures', 'OOP', 'Generators & Iterators', 'Unit Testing'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Algorithm Benchmark Suite'],
        milestoneTest: 'Python OOP Test',
        status: 'completed'
      },
      {
        id: 'step-ds-2',
        title: 'Stage 2: Linear Algebra, Calculus & Statistics',
        category: 'Core Language',
        durationWeeks: 5,
        description: 'Matrix decompositions (SVD, PCA), vector spaces, partial derivatives, gradient descent mathematics.',
        keyTopics: ['Matrix Operations & Eigenvectors', 'Multivariate Calculus & Gradients', 'Bayesian Probability', 'Hypothesis Testing'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Custom Gradient Descent Solver from Scratch'],
        milestoneTest: 'Math Foundation Exam',
        status: 'in_progress'
      },
      {
        id: 'step-ds-3',
        title: 'Stage 3: Enterprise SQL & Data Wrangling',
        category: 'Database',
        durationWeeks: 4,
        description: 'Extract, clean, merge, and transform unstructured and relational data.',
        keyTopics: ['Vectorized NumPy Operations', 'Pandas Merging & Reshaping', 'Advanced SQL Window Functions', 'Data Quality Profiling'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Financial Market Historical Data Pipeline'],
        milestoneTest: 'Data Wrangling Test',
        status: 'locked'
      },
      {
        id: 'step-ds-4',
        title: 'Stage 4: Machine Learning & Scikit-Learn',
        category: 'Framework',
        durationWeeks: 6,
        description: 'Regression, Classification, Decision Trees, Random Forests, XGBoost, Cross-validation, Hyperparameter tuning.',
        keyTopics: ['Linear/Logistic Regression', 'Gradient Boosting (XGBoost/LightGBM)', 'Confusion Matrix, ROC-AUC, F1', 'Feature Selection & Scaling'],
        recommendedCourses: ['Data Structures & Algorithms Mastery'],
        practiceProjects: ['Customer Churn Prediction Model', 'Credit Risk Scoring Classifier'],
        milestoneTest: 'Machine Learning Model Challenge',
        status: 'locked'
      },
      {
        id: 'step-ds-5',
        title: 'Stage 5: Deep Learning & Neural Architectures (PyTorch)',
        category: 'Framework',
        durationWeeks: 6,
        description: 'Feedforward Neural Networks, CNNs for computer vision, Transformers for sequences.',
        keyTopics: ['PyTorch Tensors & Autograd', 'Loss Functions & Optimizers (AdamW)', 'Convolutional Neural Networks', 'Transformer Self-Attention'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Medical Image Anomaly Classifier', 'Time-Series Forecasting Model'],
        milestoneTest: 'PyTorch Deep Learning Benchmark',
        status: 'locked'
      },
      {
        id: 'step-ds-6',
        title: 'Stage 6: Portfolio, Research Papers & Interview Preparation',
        category: 'Career Prep',
        durationWeeks: 4,
        description: 'End-to-end portfolio publication, machine learning system design interviews, and behavioral coaching.',
        keyTopics: ['ML System Design Interviews', 'Whitepaper / Blog Writing', 'FAANG Machine Learning Screens', 'Offer Negotiation'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Published GitHub Portfolio with Live Demos'],
        milestoneTest: 'Comprehensive Mock Interview',
        status: 'locked'
      }
    ]
  },

  // 3. DATA ENGINEER
  {
    id: 'roadmap-data-engineer',
    title: 'Data Engineer Career Roadmap',
    role: 'Data Engineer',
    category: 'Data & Infrastructure',
    estimatedMonths: 8,
    studyHoursPerWeek: 15,
    averageSalary: '$95,000 - $145,000 / yr',
    demandLevel: 'Very High',
    overview: 'Master building resilient data pipelines, distributed computing with Spark, data warehousing (Snowflake/BigQuery), and orchestration with Airflow.',
    targetAudience: 'Software developers, database administrators, and data professionals.',
    steps: [
      {
        id: 'step-de-1',
        title: 'Stage 1: Python, Linux & Git Fundamentals',
        category: 'Core Language',
        durationWeeks: 3,
        description: 'Bash scripting, Linux process management, Python scripting, and Git version control.',
        keyTopics: ['Bash Scripting', 'Cron Jobs & Daemons', 'Git Branching & Rebasing', 'Virtual Environments'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Automated Server Log Parser'],
        milestoneTest: 'Linux & Scripting Assessment',
        status: 'completed'
      },
      {
        id: 'step-de-2',
        title: 'Stage 2: Advanced SQL & Relational Databases',
        category: 'Database',
        durationWeeks: 4,
        description: 'Complex transformations, transaction isolation levels (ACID), indexing, query plan analysis.',
        keyTopics: ['ACID & WAL', 'B-Tree & GiST Indexes', 'EXPLAIN ANALYZE', 'Materialized Views'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['High-Throughput Financial Ledger DB'],
        milestoneTest: 'Advanced SQL Benchmark',
        status: 'in_progress'
      },
      {
        id: 'step-de-3',
        title: 'Stage 3: Data Warehousing & Dimensional Modeling',
        category: 'Database',
        durationWeeks: 4,
        description: 'Kimball methodology, Star and Snowflake schemas, Slowly Changing Dimensions (SCD Type 1, 2, 3).',
        keyTopics: ['Kimball Dimensional Design', 'SCD Type 2 Implementation', 'Partitioning & Clustering', 'Snowflake / BigQuery Architecture'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Retail Data Warehouse Dimensional Schema'],
        milestoneTest: 'Data Warehousing Defense',
        status: 'locked'
      },
      {
        id: 'step-de-4',
        title: 'Stage 4: Distributed Computing with Apache Spark',
        category: 'Framework',
        durationWeeks: 5,
        description: 'PySpark, RDDs, DataFrames, Catalyst Optimizer, shuffling, and distributed joins on large datasets.',
        keyTopics: ['Spark Cluster Architecture', 'PySpark Transformations & Actions', 'Managing Data Skew & Shuffles', 'Delta Lake / Parquet Storage'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['100GB Clickstream Aggregation with PySpark'],
        milestoneTest: 'PySpark Benchmark Challenge',
        status: 'locked'
      },
      {
        id: 'step-de-5',
        title: 'Stage 5: Pipeline Orchestration with Apache Airflow',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'DAG definition, Operators, Sensors, XComs, dynamic task mapping, and automated backfilling.',
        keyTopics: ['Airflow DAG Construction', 'Custom Operators & Hooks', 'Task Dependencies & Retries', 'SLA Monitoring & Alerts'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Daily Automated ELT Data Pipeline'],
        milestoneTest: 'Airflow Pipeline Practical',
        status: 'locked'
      },
      {
        id: 'step-de-6',
        title: 'Stage 6: Cloud Data Platforms (AWS / GCP)',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'S3 Data Lakes, AWS Glue, Athena, Redshift, Google Cloud BigQuery, IAM permissions.',
        keyTopics: ['S3 Data Lake Architecture', 'Serverless Querying with Athena', 'Cloud Data Warehousing', 'Zero-Trust Data Governance'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['End-to-End Cloud Data Platform'],
        milestoneTest: 'Cloud Data Architecture Review',
        status: 'locked'
      }
    ]
  },

  // 4. FULL STACK DEVELOPER
  {
    id: 'roadmap-fullstack',
    title: 'Full Stack Developer Career Roadmap',
    role: 'Full Stack Developer',
    category: 'Software Engineering',
    estimatedMonths: 7,
    studyHoursPerWeek: 15,
    averageSalary: '$85,000 - $135,000 / yr',
    demandLevel: 'Very High',
    overview: 'Modern frontend, robust backend microservices, SQL/NoSQL databases, cloud deployment, and system design.',
    targetAudience: 'Aspiring web developers, software engineers, and bootcamp graduates.',
    steps: [
      {
        id: 'step-fs-1',
        title: 'Stage 1: HTML5, Modern CSS & Tailwind CSS',
        category: 'Core Language',
        durationWeeks: 3,
        description: 'Semantic markup, Flexbox, CSS Grid, Tailwind CSS, responsive design principles.',
        keyTopics: ['Semantic HTML', 'CSS Flexbox & Grid', 'Tailwind CSS utility framework', 'Accessibility (a11y)'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Cosmic Landing Page', 'Responsive Component Library'],
        milestoneTest: 'Responsive Layout Challenge',
        status: 'completed'
      },
      {
        id: 'step-fs-2',
        title: 'Stage 2: JavaScript & TypeScript Mastery',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Asynchronous event loop, Promises, Async/Await, Generics, interfaces, TypeScript types.',
        keyTopics: ['Event Loop & Microtasks', 'Closures & Scopes', 'TypeScript Generics & Types', 'ESModules & Tooling'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Interactive Event Bus', 'Typed Validation Library'],
        milestoneTest: 'TypeScript Technical Quiz',
        status: 'completed'
      },
      {
        id: 'step-fs-3',
        title: 'Stage 3: React 19 Ecosystem & State Architecture',
        category: 'Framework',
        durationWeeks: 5,
        description: 'Hooks, custom hooks, React Context, performance profiling, client routing.',
        keyTopics: ['Component Lifecycle & Hooks', 'Custom Hook Design', 'Optimistic UI & Suspense', 'Tailwind & Motion Animation'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Collaborative Task Management App'],
        milestoneTest: 'React Architecture Review',
        status: 'in_progress'
      },
      {
        id: 'step-fs-4',
        title: 'Stage 4: Backend Engineering with Node.js & Express',
        category: 'Framework',
        durationWeeks: 4,
        description: 'RESTful API principles, middleware pipelines, error handling, input validation with Zod.',
        keyTopics: ['Express Middleware Patterns', 'HTTP Statuses & REST Semantics', 'Zod Schema Validation', 'File Uploads & Streaming'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Secure Authentication & User Microservice'],
        milestoneTest: 'REST API Mock Test',
        status: 'locked'
      },
      {
        id: 'step-fs-5',
        title: 'Stage 5: Relational Databases & PostgreSQL',
        category: 'Database',
        durationWeeks: 4,
        description: 'PostgreSQL, normalization, indexes, ORM (Drizzle/Prisma), Redis caching layer.',
        keyTopics: ['PostgreSQL Schema Design', 'ORM Queries & Migrations', 'Redis In-Memory Caching', 'Database Connection Pooling'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['E-Commerce Data Layer with Transactions'],
        milestoneTest: 'Database Indexing & Query Test',
        status: 'locked'
      },
      {
        id: 'step-fs-6',
        title: 'Stage 6: Docker, CI/CD & Cloud Deployment',
        category: 'Tooling',
        durationWeeks: 3,
        description: 'Containerizing frontend & backend, GitHub Actions workflows, cloud hosting on AWS/GCP.',
        keyTopics: ['Docker Multi-stage Builds', 'Docker Compose Local Stacks', 'GitHub Actions CI Workflows', 'Cloud Run / EC2 Deployment'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Automated Deployment Pipeline with Health Checks'],
        milestoneTest: 'DevOps & Docker Deployment Test',
        status: 'locked'
      }
    ]
  },

  // 5. PYTHON DEVELOPER
  {
    id: 'roadmap-python-dev',
    title: 'Python Developer Career Roadmap',
    role: 'Python Developer',
    category: 'Software Engineering',
    estimatedMonths: 6,
    studyHoursPerWeek: 14,
    averageSalary: '$85,000 - $125,000 / yr',
    demandLevel: 'Very High',
    overview: 'From Python syntax and OOP to building scalable REST APIs with FastAPI, database integration with SQLAlchemy, and async automation.',
    targetAudience: 'Software developers and engineers seeking Python-centric roles.',
    steps: [
      {
        id: 'step-py-1',
        title: 'Stage 1: Python Fundamentals & Data Structures',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Syntax, scalar types, lists, dictionaries, tuples, sets, and control flow.',
        keyTopics: ['Variables', 'Control Flow', 'Functions', 'Comprehensions'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['CLI Task Manager'],
        milestoneTest: 'Python Core Assessment',
        status: 'completed'
      },
      {
        id: 'step-py-2',
        title: 'Stage 2: Advanced OOP & Design Patterns',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Dunder methods, class methods, static methods, abstract classes, and factory patterns.',
        keyTopics: ['Encapsulation', 'Inheritance', 'Decorators', 'Context Managers'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Automated Billing Engine'],
        milestoneTest: 'OOP Architecture Defense',
        status: 'in_progress'
      },
      {
        id: 'step-py-3',
        title: 'Stage 3: FastAPI & RESTful Microservices',
        category: 'Framework',
        durationWeeks: 4,
        description: 'High-performance asynchronous APIs with Pydantic type validation and OpenAPI documentation.',
        keyTopics: ['FastAPI Routing', 'Dependency Injection', 'Pydantic V2', 'JWT Authentication'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Microservice Authentication API'],
        milestoneTest: 'FastAPI Benchmark Exam',
        status: 'locked'
      },
      {
        id: 'step-py-4',
        title: 'Stage 4: Databases & SQLAlchemy ORM',
        category: 'Database',
        durationWeeks: 4,
        description: 'Relational mapping, migrations with Alembic, async queries, and connection pools.',
        keyTopics: ['SQLAlchemy Async Engine', 'Alembic Migrations', 'PostgreSQL Relationships', 'Redis Caching'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['E-Commerce Data Backend'],
        milestoneTest: 'SQLAlchemy & ORM Review',
        status: 'locked'
      }
    ]
  },

  // 6. MACHINE LEARNING & AI ENGINEER
  {
    id: 'roadmap-ml-engineer',
    title: 'Machine Learning & AI Engineer Roadmap',
    role: 'AI Engineer',
    category: 'AI & Data Science',
    estimatedMonths: 9,
    studyHoursPerWeek: 16,
    averageSalary: '$120,000 - $180,000 / yr',
    demandLevel: 'Very High',
    overview: 'Deep learning, LLM fine-tuning, RAG pipelines, Vector databases, and production MLOps deployment.',
    targetAudience: 'Engineers building intelligent autonomous systems and AI infrastructure.',
    steps: [
      {
        id: 'step-ml-1',
        title: 'Stage 1: Python, Calculus & Linear Algebra',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Matrix multiplication, eigenvalues, gradient descent optimization, vector math.',
        keyTopics: ['NumPy Vectorization', 'Linear Algebra', 'Calculus for ML', 'Probability'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Matrix Gradient Engine'],
        milestoneTest: 'Math Foundations Benchmark',
        status: 'completed'
      },
      {
        id: 'step-ml-2',
        title: 'Stage 2: Supervised & Unsupervised Machine Learning',
        category: 'Framework',
        durationWeeks: 5,
        description: 'Scikit-learn, XGBoost, Random Forests, clustering, dimensionality reduction.',
        keyTopics: ['XGBoost Tuning', 'PCA', 'Cross Validation', 'Feature Engineering'],
        recommendedCourses: ['Data Structures & Algorithms Mastery'],
        practiceProjects: ['Churn Classifier API'],
        milestoneTest: 'Scikit-Learn Practical',
        status: 'in_progress'
      },
      {
        id: 'step-ml-3',
        title: 'Stage 3: Deep Learning with PyTorch',
        category: 'Framework',
        durationWeeks: 6,
        description: 'Neural networks, backpropagation, CNNs, Transformers, and GPU training.',
        keyTopics: ['PyTorch Tensors', 'AdamW Optimizer', 'Attention Mechanism', 'Vision Transformers'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Image Anomaly Detector'],
        milestoneTest: 'PyTorch Architecture Test',
        status: 'locked'
      },
      {
        id: 'step-ml-4',
        title: 'Stage 4: Generative AI, RAG & LLM Systems',
        category: 'Framework',
        durationWeeks: 5,
        description: 'Vector databases (Pinecone/Chroma), Embeddings, RAG architectures, Agentic workflows with LangChain.',
        keyTopics: ['Vector Embeddings', 'RAG Retrieval', 'Fine-Tuning LoRA', 'Prompt Engineering'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Enterprise Knowledge Base RAG Assistant'],
        milestoneTest: 'GenAI System Defense',
        status: 'locked'
      }
    ]
  },

  // 7. CLOUD & DEVOPS ENGINEER
  {
    id: 'roadmap-devops',
    title: 'Cloud & DevOps Engineer Roadmap',
    role: 'DevOps Engineer',
    category: 'Cloud & Infrastructure',
    estimatedMonths: 7,
    studyHoursPerWeek: 14,
    averageSalary: '$95,000 - $150,000 / yr',
    demandLevel: 'Very High',
    overview: 'Linux system administration, Docker containerization, Kubernetes orchestration, Terraform IaC, and CI/CD pipelines.',
    targetAudience: 'Engineers passionate about automation, site reliability, and cloud architecture.',
    steps: [
      {
        id: 'step-do-1',
        title: 'Stage 1: Linux Administration, Bash & Networking',
        category: 'Core Language',
        durationWeeks: 3,
        description: 'File permissions, systemd services, SSH keys, DNS, TCP/IP, and shell scripting.',
        keyTopics: ['Bash Automation', 'Systemd Daemons', 'TCP/IP & DNS', 'Firewalls & iptables'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Automated Server Health Sentinel'],
        milestoneTest: 'Linux Sysadmin Test',
        status: 'completed'
      },
      {
        id: 'step-do-2',
        title: 'Stage 2: Docker & Container Orchestration',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'Multi-stage Dockerfiles, image optimization, Docker Compose local networking.',
        keyTopics: ['Multi-Stage Builds', 'Docker Compose', 'Container Security', 'Distroless Images'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Microservice Multi-Container Stack'],
        milestoneTest: 'Docker Mastery Exam',
        status: 'in_progress'
      },
      {
        id: 'step-do-3',
        title: 'Stage 3: Kubernetes Clusters & Helm Charts',
        category: 'Tooling',
        durationWeeks: 5,
        description: 'Pods, Deployments, Services, Ingress Controllers, ConfigMaps, and Secrets in K8s.',
        keyTopics: ['K8s Architecture', 'Helm Templating', 'Ingress NGINX', 'Horizontal Pod Autoscalers'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Resilient Production K8s Deployment'],
        milestoneTest: 'Kubernetes Benchmark',
        status: 'locked'
      },
      {
        id: 'step-do-4',
        title: 'Stage 4: CI/CD Pipelines & Terraform (IaC)',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'GitHub Actions automated testing, Terraform cloud provisioning, and CloudWatch monitoring.',
        keyTopics: ['Terraform Modules', 'GitHub Actions CI/CD', 'Zero-Downtime Rollouts', 'Prometheus & Grafana'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Automated GitOps Cloud Pipeline'],
        milestoneTest: 'DevOps System Audit',
        status: 'locked'
      }
    ]
  },

  // 8. CYBERSECURITY ANALYST
  {
    id: 'roadmap-cybersecurity',
    title: 'Cybersecurity Analyst Roadmap',
    role: 'Cybersecurity Analyst',
    category: 'Security & Operations',
    estimatedMonths: 8,
    studyHoursPerWeek: 14,
    averageSalary: '$88,000 - $135,000 / yr',
    demandLevel: 'Very High',
    overview: 'Threat hunting, vulnerability assessments, network packet inspection with Wireshark, SIEM tools, and SOC incident triage.',
    targetAudience: 'Security enthusiasts, network technicians, and system administrators.',
    steps: [
      {
        id: 'step-cs-1',
        title: 'Stage 1: Network Fundamentals & Packet Analysis',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'OSI 7-layer model, Wireshark packet capture, TCP handshake, DNS spoofing prevention.',
        keyTopics: ['OSI Model', 'Wireshark PCAP', 'Port Scanning (Nmap)', 'SSL/TLS Handshakes'],
        recommendedCourses: ['Data Structures & Algorithms Mastery'],
        practiceProjects: ['Network Traffic Anomaly Classifier'],
        milestoneTest: 'Network Security Exam',
        status: 'completed'
      },
      {
        id: 'step-cs-2',
        title: 'Stage 2: Threat Detection, SIEM & SOC Operations',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'Splunk, Elastic SIEM, log analysis, alert triage, and incident response playbooks.',
        keyTopics: ['Splunk Queries', 'MITRE ATT&CK Framework', 'Log Correlation', 'Incident Triage'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Brute Force Intrusion Detection Rule'],
        milestoneTest: 'SOC Analyst Practical',
        status: 'in_progress'
      }
    ]
  },

  // 9. POWER BI DEVELOPER
  {
    id: 'roadmap-powerbi-dev',
    title: 'Power BI Developer Roadmap',
    role: 'Power BI Developer',
    category: 'Business Intelligence',
    estimatedMonths: 5,
    studyHoursPerWeek: 12,
    averageSalary: '$80,000 - $120,000 / yr',
    demandLevel: 'High',
    overview: 'Data modeling, Star Schema, advanced DAX time intelligence, Power Query M-code, and executive KPI storytelling.',
    targetAudience: 'Business intelligence analysts and data report designers.',
    steps: [
      {
        id: 'step-pbi-1',
        title: 'Stage 1: Power Query ETL & M-Code',
        category: 'Tooling',
        durationWeeks: 3,
        description: 'Connect to databases, unpivot columns, handle date anomalies, merge and append queries.',
        keyTopics: ['M-Code Expressions', 'Data Type Cleansing', 'Unpivoting Tables', 'Custom Columns'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Multi-Source Financial Ingestion ETL'],
        milestoneTest: 'Power Query Practical',
        status: 'completed'
      },
      {
        id: 'step-pbi-2',
        title: 'Stage 2: Star Schema Modeling & Advanced DAX',
        category: 'Database',
        durationWeeks: 4,
        description: 'CALCULATE, ALLSELECTED, FILTER, DATESYTD, USERELATIONSHIP, and semi-additive measures.',
        keyTopics: ['Filter Context', 'Row Context vs Filter Context', 'Time Intelligence', 'Row-Level Security (RLS)'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Executive Retail KPI Portal'],
        milestoneTest: 'DAX Certification Test',
        status: 'in_progress'
      }
    ]
  },

  // 10. BUSINESS ANALYST
  {
    id: 'roadmap-business-analyst',
    title: 'Business Analyst Roadmap',
    role: 'Business Analyst',
    category: 'Business & Strategy',
    estimatedMonths: 6,
    studyHoursPerWeek: 12,
    averageSalary: '$75,000 - $115,000 / yr',
    demandLevel: 'High',
    overview: 'Requirements gathering, stakeholder management, Agile User Stories, SQL querying, and executive KPI presentations.',
    targetAudience: 'Analytical thinkers bridging business goals with technical software implementations.',
    steps: [
      {
        id: 'step-ba-1',
        title: 'Stage 1: Business Requirements & Process Modeling',
        category: 'Core Language',
        durationWeeks: 3,
        description: 'BRD (Business Requirements Document), FRD, BPMN process flows, and Jira User Stories.',
        keyTopics: ['BPMN 2.0', 'User Story Acceptance Criteria', 'Gap Analysis', 'SWOT & PESTLE'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Banking Onboarding Process Map'],
        milestoneTest: 'Business Requirements Exam',
        status: 'completed'
      },
      {
        id: 'step-ba-2',
        title: 'Stage 2: SQL & Business Intelligence Reporting',
        category: 'Database',
        durationWeeks: 4,
        description: 'Querying relational databases, calculating conversion rates, customer lifetime value, and churn.',
        keyTopics: ['SQL Aggregations', 'Dashboard KPIs', 'Cohort Retention', 'Funnel Analysis'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Subscription SaaS Retention Model'],
        milestoneTest: 'Business Analytics Practical',
        status: 'in_progress'
      }
    ]
  },

  // 11. SAP DATA ANALYST / CONSULTANT
  {
    id: 'roadmap-sap-analyst',
    title: 'SAP Data Analyst & Consultant Roadmap',
    role: 'SAP Data Analyst',
    category: 'Enterprise ERP',
    estimatedMonths: 8,
    studyHoursPerWeek: 14,
    averageSalary: '$90,000 - $140,000 / yr',
    demandLevel: 'High',
    overview: 'SAP S/4HANA core modules, SAP BW/4HANA, CDS views, SAP Analytics Cloud (SAC), and enterprise data extraction.',
    targetAudience: 'Enterprise analysts and ERP specialists.',
    steps: [
      {
        id: 'step-sap-1',
        title: 'Stage 1: SAP S/4HANA Architecture & Tables',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Overview of SD, MM, FI/CO modules, BSEG/BKPF tables, and transactional ERP data structures.',
        keyTopics: ['SAP Architecture', 'ERP Table Structures', 'ABAP Data Dictionary Basics', 'Data Cleansing'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['SAP Financial Ledger Reconciliation Query'],
        milestoneTest: 'SAP Fundamentals Assessment',
        status: 'completed'
      },
      {
        id: 'step-sap-2',
        title: 'Stage 2: CDS Views & SAP Analytics Cloud (SAC)',
        category: 'Database',
        durationWeeks: 5,
        description: 'Core Data Services (CDS) view creation, associations, annotations, and SAC dashboard creation.',
        keyTopics: ['Core Data Services (CDS)', 'OData Services', 'SAC Story Design', 'Predictive Forecasts'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Global Supply Chain SAC Dashboard'],
        milestoneTest: 'SAP CDS & SAC Review',
        status: 'in_progress'
      }
    ]
  },

  // 12. AI ENGINEER
  {
    id: 'roadmap-ai-engineer',
    title: 'AI Engineer Career Roadmap',
    role: 'AI Engineer',
    category: 'AI & Data Science',
    estimatedMonths: 9,
    studyHoursPerWeek: 16,
    averageSalary: '$125,000 - $185,000 / yr',
    demandLevel: 'Very High',
    overview: 'Generative AI, Large Language Models (LLMs), RAG pipelines, Agentic workflows, Vector databases, and fine-tuning with LangChain & LlamaIndex.',
    targetAudience: 'Software developers and ML practitioners building AI-first production applications.',
    steps: [
      {
        id: 'step-aie-1',
        title: 'Stage 1: Python, Async APIs & Vector Math',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Python 3.12, asynchronous programming, NumPy vector math, and cosine similarity.',
        keyTopics: ['Vector Embeddings', 'Cosine Similarity & Dot Products', 'Async HTTP Client Calls', 'Prompt Templates'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Semantic Search Engine CLI'],
        milestoneTest: 'AI Math & Python Assessment',
        status: 'completed'
      },
      {
        id: 'step-aie-2',
        title: 'Stage 2: LLM APIs, Prompt Engineering & Function Calling',
        category: 'Framework',
        durationWeeks: 4,
        description: 'Gemini 3.8 Flash, OpenAI, Anthropic SDKs, structured JSON outputs, system instructions, and tool calling.',
        keyTopics: ['Function / Tool Calling', 'Structured JSON Outputs', 'System Instructions', 'Context Window Management'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['AI Customer Support Tool-Calling Agent'],
        milestoneTest: 'LLM Function Calling Benchmark',
        status: 'in_progress'
      },
      {
        id: 'step-aie-3',
        title: 'Stage 3: Retrieval-Augmented Generation (RAG) & Vector DBs',
        category: 'Database',
        durationWeeks: 5,
        description: 'Chunking strategies, Pinecone, Chroma, pgvector, hybrid search (dense + sparse), and reranking.',
        keyTopics: ['Recursive Character Splitting', 'pgvector & Pinecone', 'Cohere Rerank', 'Evaluation with RAGAS'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Enterprise PDF Knowledge Base Assistant'],
        milestoneTest: 'RAG Architecture Practical',
        status: 'locked'
      },
      {
        id: 'step-aie-4',
        title: 'Stage 4: Autonomous Agents & Production Deployment',
        category: 'Tooling',
        durationWeeks: 5,
        description: 'Multi-agent orchestration (LangGraph, CrewAI), memory management, guardrails, and latency optimization.',
        keyTopics: ['LangGraph State Machines', 'Guardrails & Hallucination Checks', 'Streaming Token Buffering', 'Model Evaluation & Latency'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Multi-Agent Code Review & Deployment Assistant'],
        milestoneTest: 'Agentic AI Capstone Defense',
        status: 'locked'
      }
    ]
  },

  // 13. CLOUD ENGINEER
  {
    id: 'roadmap-cloud-engineer',
    title: 'Cloud Engineer Career Roadmap',
    role: 'Cloud Engineer',
    category: 'Cloud & Infrastructure',
    estimatedMonths: 7,
    studyHoursPerWeek: 14,
    averageSalary: '$95,000 - $145,000 / yr',
    demandLevel: 'Very High',
    overview: 'AWS/GCP infrastructure architecture, VPC networking, IAM security policies, serverless microservices, and cost optimization.',
    targetAudience: 'Systems administrators, network engineers, and developers transitioning to cloud architecture.',
    steps: [
      {
        id: 'step-ce-1',
        title: 'Stage 1: Cloud Core Services & Networking',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'AWS EC2, S3, VPC subnets, route tables, internet gateways, and security groups.',
        keyTopics: ['VPC Architecture', 'CIDR Block Subnetting', 'S3 Storage Classes & Policies', 'Elastic Load Balancing (ALB)'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['High-Availability Multi-AZ Web Infrastructure'],
        milestoneTest: 'AWS Cloud Practitioner Exam',
        status: 'completed'
      },
      {
        id: 'step-ce-2',
        title: 'Stage 2: Serverless & Containerized Workloads',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'AWS Lambda, API Gateway, DynamoDB, Elastic Container Service (ECS), and Fargate.',
        keyTopics: ['Serverless Event Triggers', 'Container Tasks on Fargate', 'DynamoDB Partition Keys', 'CloudWatch Logs & Alarms'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Serverless Image Processing Pipeline'],
        milestoneTest: 'Serverless Architecture Review',
        status: 'in_progress'
      },
      {
        id: 'step-ce-3',
        title: 'Stage 3: Infrastructure as Code (Terraform) & Governance',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'HCL declarative configuration, state file locking in S3/DynamoDB, IAM least privilege, and FinOps budgeting.',
        keyTopics: ['Terraform State & Modules', 'IAM Policy Auditing', 'FinOps Cost Optimization', 'Disaster Recovery (RTO/RPO)'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Fully Automated Terraform Cloud Environment'],
        milestoneTest: 'Cloud Architecture Defense',
        status: 'locked'
      }
    ]
  },

  // 14. CLOUD DATA ENGINEER
  {
    id: 'roadmap-cloud-data-engineer',
    title: 'Cloud Data Engineer Career Roadmap',
    role: 'Cloud Data Engineer',
    category: 'Data & Infrastructure',
    estimatedMonths: 8,
    studyHoursPerWeek: 15,
    averageSalary: '$105,000 - $155,000 / yr',
    demandLevel: 'Very High',
    overview: 'Modern cloud data stacks: Snowflake, Google BigQuery, AWS Redshift, dbt (data build tool), streaming with Kafka, and Delta Lake.',
    targetAudience: 'Data professionals building petabyte-scale analytics platforms.',
    steps: [
      {
        id: 'step-cde-1',
        title: 'Stage 1: Cloud Data Warehousing (BigQuery & Snowflake)',
        category: 'Database',
        durationWeeks: 4,
        description: 'Columnar storage, partitioning, clustering, compute credit optimization, and external data lakes.',
        keyTopics: ['Snowflake Virtual Warehouses', 'BigQuery Partitioning & Clustering', 'Zero-Copy Cloning', 'Time Travel & Fail-safe'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Multi-Tenant E-Commerce Analytics Warehouse'],
        milestoneTest: 'Cloud Data Warehouse Test',
        status: 'completed'
      },
      {
        id: 'step-cde-2',
        title: 'Stage 2: Data Transformation with dbt (data build tool)',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'Modular SQL models, Jinja templating, schema tests, documentation generation, and incremental loads.',
        keyTopics: ['dbt Core & Cloud', 'Jinja Macros', 'Incremental Materializations', 'Data Testing & Lineage'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Production dbt Analytics Pipeline with Automated Tests'],
        milestoneTest: 'dbt Analytics Engineering Exam',
        status: 'in_progress'
      },
      {
        id: 'step-cde-3',
        title: 'Stage 3: Streaming Data Pipelines (Kafka & Spark Streaming)',
        category: 'Framework',
        durationWeeks: 5,
        description: 'Real-time event streams, Kafka topics, consumer groups, exactly-once processing, and Delta Lake Bronze/Silver/Gold.',
        keyTopics: ['Kafka Brokers & Partitions', 'Spark Structured Streaming', 'Medallion Architecture (Bronze/Silver/Gold)', 'Schema Registry'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Real-Time Fraud Detection Streaming Pipeline'],
        milestoneTest: 'Streaming Data Platform Benchmark',
        status: 'locked'
      }
    ]
  },

  // 15. FRONTEND DEVELOPER
  {
    id: 'roadmap-frontend-dev',
    title: 'Frontend Developer Career Roadmap',
    role: 'Frontend Developer',
    category: 'Web Development',
    estimatedMonths: 6,
    studyHoursPerWeek: 14,
    averageSalary: '$80,000 - $130,000 / yr',
    demandLevel: 'Very High',
    overview: 'HTML5, CSS3, Tailwind CSS, TypeScript, React 19, Next.js App Router, web accessibility (a11y), and Core Web Vitals optimization.',
    targetAudience: 'Aspiring client-side engineers passionate about responsive design and dynamic user interfaces.',
    steps: [
      {
        id: 'step-fed-1',
        title: 'Stage 1: Modern HTML5, Responsive CSS & Tailwind',
        category: 'Core Language',
        durationWeeks: 3,
        description: 'Semantic tags, Flexbox, CSS Grid, mobile-first responsive design, animations, and Tailwind utility classes.',
        keyTopics: ['Flexbox & Grid Layouts', 'Responsive Breakpoints', 'Tailwind Utility Architecture', 'WCAG Accessibility Standards'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Pixel-Perfect SaaS Landing Page'],
        milestoneTest: 'HTML & CSS Layout Challenge',
        status: 'completed'
      },
      {
        id: 'step-fed-2',
        title: 'Stage 2: JavaScript ES6+ & TypeScript Rigor',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'DOM APIs, asynchronous fetch, Promises, TypeScript interfaces, generics, and strict type safety.',
        keyTopics: ['Event Delegation & Bubbling', 'Promises & Async/Await', 'TypeScript Interfaces & Generics', 'LocalStorage & Web Storage'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Interactive Kanban Task Board with Local Storage'],
        milestoneTest: 'JavaScript & TypeScript Mastery Test',
        status: 'in_progress'
      },
      {
        id: 'step-fed-3',
        title: 'Stage 3: React 19, Hooks & State Architecture',
        category: 'Framework',
        durationWeeks: 5,
        description: 'Declarative component rendering, custom hooks, context API, client routing, and form validation.',
        keyTopics: ['Custom Hooks', 'React Context API', 'Form Validation with React Hook Form + Zod', 'TanStack Query / SWR Caching'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Real-Time Crypto & Stock Market Dashboard'],
        milestoneTest: 'React Architecture Defense',
        status: 'locked'
      },
      {
        id: 'step-fed-4',
        title: 'Stage 4: Next.js App Router & Performance Optimization',
        category: 'Framework',
        durationWeeks: 4,
        description: 'Server Components (RSC), Server Actions, dynamic routing, SEO metadata, and Core Web Vitals (LCP, FID, CLS).',
        keyTopics: ['React Server Components', 'Server Actions', 'SEO & OpenGraph Tags', 'Image Optimization & Lighthouse 100/100'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Production Next.js E-Commerce Marketplace with SSR'],
        milestoneTest: 'Frontend Engineering Capstone Review',
        status: 'locked'
      }
    ]
  },

  // 16. BACKEND DEVELOPER
  {
    id: 'roadmap-backend-dev',
    title: 'Backend Developer Career Roadmap',
    role: 'Backend Developer',
    category: 'Software Engineering',
    estimatedMonths: 7,
    studyHoursPerWeek: 15,
    averageSalary: '$88,000 - $140,000 / yr',
    demandLevel: 'Very High',
    overview: 'REST & GraphQL microservices, Node.js/Python, database schema design, Redis caching, message queues, and API security.',
    targetAudience: 'Software developers focused on business logic, data models, scalability, and system reliability.',
    steps: [
      {
        id: 'step-bed-1',
        title: 'Stage 1: Server Runtimes, HTTP & RESTful Architecture',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'HTTP protocol methods, status codes, headers, middleware pipelines, Express/FastAPI, and route handlers.',
        keyTopics: ['HTTP Protocol & Headers', 'Express / FastAPI Routing', 'Middleware Architecture', 'Request Validation'],
        recommendedCourses: ['Modern Full-Stack React 19 & Node.js'],
        practiceProjects: ['Secure Authentication & JWT Token Microservice'],
        milestoneTest: 'RESTful API Engineering Exam',
        status: 'completed'
      },
      {
        id: 'step-bed-2',
        title: 'Stage 2: Relational Databases, ORMs & Migrations',
        category: 'Database',
        durationWeeks: 4,
        description: 'PostgreSQL schema modeling, foreign keys, transactions, ORMs (Prisma, Drizzle, SQLAlchemy), and indexing.',
        keyTopics: ['ACID Transactions', 'Database Indexing Strategies', 'ORM Migrations & Seeders', 'Connection Pooling'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Scalable Multi-Tenant Database Layer'],
        milestoneTest: 'PostgreSQL & ORM Benchmark',
        status: 'in_progress'
      },
      {
        id: 'step-bed-3',
        title: 'Stage 3: Caching, Message Queues & Microservices',
        category: 'Tooling',
        durationWeeks: 5,
        description: 'Redis in-memory caching, BullMQ / Celery background job queues, rate limiting, and Docker deployment.',
        keyTopics: ['Redis Cache-Aside Pattern', 'Background Asynchronous Workers', 'Rate Limiting & DDOS Defense', 'Docker Multi-Stage Deployment'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['High-Throughput Order Processing Engine with BullMQ'],
        milestoneTest: 'Backend System Scalability Defense',
        status: 'locked'
      }
    ]
  },

  // 17. DATABASE ADMINISTRATOR (DBA)
  {
    id: 'roadmap-dba',
    title: 'Database Administrator (DBA) Roadmap',
    role: 'Database Administrator',
    category: 'Database & Infrastructure',
    estimatedMonths: 7,
    studyHoursPerWeek: 14,
    averageSalary: '$85,000 - $135,000 / yr',
    demandLevel: 'High',
    overview: 'PostgreSQL & MySQL engine internals, query optimization with EXPLAIN ANALYZE, replication, backup strategies, and zero-downtime migrations.',
    targetAudience: 'Engineers who want to specialize in high-availability data infrastructure and performance tuning.',
    steps: [
      {
        id: 'step-dba-1',
        title: 'Stage 1: Relational Engine Internals & Storage Engines',
        category: 'Database',
        durationWeeks: 4,
        description: 'WAL (Write-Ahead Logging), buffer pools, MVCC (Multi-Version Concurrency Control), and tablespaces.',
        keyTopics: ['MVCC & Vacuuming', 'Write-Ahead Logging (WAL)', 'InnoDB vs MyISAM Engine', 'Table Partitioning'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Automated Database Maintenance & Vacuum Script'],
        milestoneTest: 'DB Engine Architecture Exam',
        status: 'completed'
      },
      {
        id: 'step-dba-2',
        title: 'Stage 2: Query Performance Tuning & Indexing',
        category: 'Database',
        durationWeeks: 4,
        description: 'EXPLAIN ANALYZE query plan trees, B-Tree, Hash, GIN, and GiST indexes, detecting sequential scans.',
        keyTopics: ['Query Plan Tree Analysis', 'Composite & Partial Indexes', 'Slow Query Log Profiling', 'Connection Pool Tuning (PgBouncer)'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['10x Query Speedup Case Study on 50M Rows'],
        milestoneTest: 'Query Optimization Practical Challenge',
        status: 'in_progress'
      },
      {
        id: 'step-dba-3',
        title: 'Stage 3: High Availability, Replication & Disaster Recovery',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'Primary-Replica streaming replication, failover clustering with Patroni, point-in-time recovery (PITR), and encryption.',
        keyTopics: ['Streaming Physical Replication', 'Point-In-Time Recovery (PITR)', 'Automated Failover Clustering', 'TDE (Transparent Data Encryption)'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Zero-Downtime PostgreSQL High-Availability Cluster'],
        milestoneTest: 'Enterprise DBA Defense',
        status: 'locked'
      }
    ]
  },

  // 18. BUSINESS INTELLIGENCE ANALYST
  {
    id: 'roadmap-bi-analyst',
    title: 'Business Intelligence Analyst Roadmap',
    role: 'Business Intelligence Analyst',
    category: 'Business Intelligence',
    estimatedMonths: 6,
    studyHoursPerWeek: 13,
    averageSalary: '$82,000 - $122,000 / yr',
    demandLevel: 'Very High',
    overview: 'KPI definition, dimensional modeling, automated ETL pipelines, Power BI & Tableau dashboards, and executive stakeholder communication.',
    targetAudience: 'Data storytellers transforming business metrics into actionable strategic insights.',
    steps: [
      {
        id: 'step-bia-1',
        title: 'Stage 1: Business Metrics & KPI Architecture',
        category: 'Core Language',
        durationWeeks: 3,
        description: 'Revenue recognition, CAC, LTV, Churn, EBITDA, Cohort analysis, and funnel conversion tracking.',
        keyTopics: ['SaaS Financial Metrics', 'Cohort Retention Grids', 'Conversion Funnel Math', 'Executive Scorecards'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['SaaS Executive Financial Health Dashboard'],
        milestoneTest: 'Business Metrics Evaluation',
        status: 'completed'
      },
      {
        id: 'step-bia-2',
        title: 'Stage 2: Advanced SQL & Data Extraction',
        category: 'Database',
        durationWeeks: 4,
        description: 'Multi-table CTEs, Window ranking functions, rolling averages, and cumulative totals in SQL.',
        keyTopics: ['Window Functions (ROW_NUMBER, NTILE)', 'CTEs & Recursive SQL', 'Aggregating Large Datasets', 'Data Quality Testing'],
        recommendedCourses: ['SQL & Relational Database Mastery'],
        practiceProjects: ['Customer Churn & Reactivation SQL Engine'],
        milestoneTest: 'BI SQL Analytics Exam',
        status: 'in_progress'
      },
      {
        id: 'step-bia-3',
        title: 'Stage 3: Executive Visual Storytelling in Power BI & Tableau',
        category: 'Tooling',
        durationWeeks: 5,
        description: 'Dynamic parameters, tooltips, drill-through paths, mobile layout optimization, and automated scheduled refreshes.',
        keyTopics: ['Tableau LOD Expressions', 'Power BI DAX Time Intelligence', 'Visual Hierarchy & Palette Design', 'Automated Email Subscriptions'],
        recommendedCourses: ['Data Analytics with Power BI & Tableau'],
        practiceProjects: ['Global Supply Chain & Logistics Control Tower'],
        milestoneTest: 'Executive Presentation Capstone',
        status: 'locked'
      }
    ]
  },

  // 19. SOFTWARE DEVELOPER
  {
    id: 'roadmap-software-dev',
    title: 'Software Developer Career Roadmap',
    role: 'Software Developer',
    category: 'Software Engineering',
    estimatedMonths: 7,
    studyHoursPerWeek: 15,
    averageSalary: '$88,000 - $138,000 / yr',
    demandLevel: 'Very High',
    overview: 'Core programming fundamentals, object-oriented design, data structures, algorithms, Git version control, unit testing, and design patterns.',
    targetAudience: 'Developers aiming for core software engineering roles in tech companies.',
    steps: [
      {
        id: 'step-swe-1',
        title: 'Stage 1: Programming Mastery & Algorithmic Thinking',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Core syntax, variables, conditionals, loops, functions, and Big-O computational complexity.',
        keyTopics: ['Memory & Variables', 'Algorithms & Big-O', 'Data Structures (Arrays, Hash Tables)', 'Clean Code Principles'],
        recommendedCourses: ['Python Programming Masterclass'],
        practiceProjects: ['Algorithmic CLI Benchmark Suite'],
        milestoneTest: 'Programming Fundamentals Exam',
        status: 'completed'
      },
      {
        id: 'step-swe-2',
        title: 'Stage 2: Object-Oriented Design & SOLID Architecture',
        category: 'Core Language',
        durationWeeks: 4,
        description: 'Inheritance, polymorphism, encapsulation, abstraction, and the 5 SOLID engineering principles.',
        keyTopics: ['SOLID Principles', 'Design Patterns (Factory, Strategy, Observer)', 'Refactoring Code Smells', 'Unit Testing with Mocks'],
        recommendedCourses: ['Data Structures & Algorithms Mastery'],
        practiceProjects: ['Extensible Payment Gateway Simulator'],
        milestoneTest: 'OOP Architecture Defense',
        status: 'in_progress'
      },
      {
        id: 'step-swe-3',
        title: 'Stage 3: Git, Team Collaboration & Production Deployment',
        category: 'Tooling',
        durationWeeks: 4,
        description: 'Git branching models, pull request reviews, CI/CD automated test pipelines, and containerization with Docker.',
        keyTopics: ['Git Rebase & Merge Conflicts', 'CI/CD Automated Pipelines', 'Docker Container Packaging', 'System Design Basics'],
        recommendedCourses: ['Cloud Architecture & DevOps with AWS & Docker'],
        practiceProjects: ['Team-Engineered Microservice with Full CI/CD'],
        milestoneTest: 'Software Engineering Capstone Review',
        status: 'locked'
      }
    ]
  }
];

