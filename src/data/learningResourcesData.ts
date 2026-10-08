import { LearningResource } from '../types';

export const initialLearningResources: LearningResource[] = [
  // ==========================================
  // 1. OFFICIAL DOCUMENTATION - CORE LANGUAGES
  // ==========================================
  {
    id: 'doc-py-official',
    title: 'Python Official Documentation & Library Reference',
    description: 'The primary, definitive documentation for Python 3.12+, including standard libraries, built-in functions, language reference, and tutorials.',
    resourceType: 'documentation',
    category: 'programming',
    technology: 'Python',
    level: 'All Levels',
    url: 'https://docs.python.org/3/',
    provider: 'Python Software Foundation',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Python', 'Official Docs', 'Standard Library', 'Core']
  },
  {
    id: 'doc-java-official',
    title: 'Oracle Java Documentation & API Specifications',
    description: 'Comprehensive official Java documentation covering language specifications, JVM architecture, Collections framework, and Core APIs.',
    resourceType: 'documentation',
    category: 'programming',
    technology: 'Java',
    level: 'All Levels',
    url: 'https://docs.oracle.com/en/java/',
    provider: 'Oracle',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Java', 'Oracle', 'JVM', 'Official Docs']
  },
  {
    id: 'doc-js-mdn',
    title: 'MDN Web Docs: JavaScript Reference & Guide',
    description: 'The industry-standard reference for JavaScript (ECMAScript), modern syntax, asynchronous programming, DOM APIs, and web standards.',
    resourceType: 'documentation',
    category: 'web',
    technology: 'JavaScript',
    level: 'All Levels',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    provider: 'Mozilla Developer Network',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['JavaScript', 'MDN', 'ES6', 'Web Development']
  },
  {
    id: 'doc-ts-official',
    title: 'TypeScript Official Documentation & Handbook',
    description: 'Official TypeScript documentation, handbook, type-system deep-dives, utility types, and compiler configuration guides.',
    resourceType: 'documentation',
    category: 'programming',
    technology: 'TypeScript',
    level: 'All Levels',
    url: 'https://www.typescriptlang.org/docs/',
    provider: 'Microsoft',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['TypeScript', 'Static Typing', 'Microsoft', 'Official Docs']
  },
  {
    id: 'doc-cpp-ref',
    title: 'cppreference.com - Complete C++ Reference',
    description: 'Authoritative C++ standard reference covering core language, Standard Template Library (STL), memory management, and C++20/23 features.',
    resourceType: 'documentation',
    category: 'programming',
    technology: 'C++',
    level: 'All Levels',
    url: 'https://en.cppreference.com/w/',
    provider: 'cppreference',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['C++', 'STL', 'Memory Management', 'Reference']
  },
  {
    id: 'doc-csharp-msft',
    title: 'Microsoft C# & .NET Documentation',
    description: 'Official Microsoft C# language guides, object-oriented concepts, LINQ, asynchronous programming with async/await, and .NET runtime.',
    resourceType: 'documentation',
    category: 'programming',
    technology: 'C#',
    level: 'All Levels',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    provider: 'Microsoft Learn',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['C#', '.NET', 'Microsoft', 'Official Docs']
  },
  {
    id: 'doc-go-official',
    title: 'Go Language Official Documentation',
    description: 'Official Go documentation, standard packages, effective Go idioms, goroutines, concurrency patterns, and toolchain.',
    resourceType: 'documentation',
    category: 'programming',
    technology: 'Go',
    level: 'All Levels',
    url: 'https://go.dev/doc/',
    provider: 'The Go Authors / Google',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Go', 'Golang', 'Concurrency', 'Official Docs']
  },
  {
    id: 'doc-rust-book',
    title: 'The Rust Programming Language (The Book)',
    description: 'The official Rust programming book covering ownership, borrowing, lifetimes, cargo, fearless concurrency, and error handling.',
    resourceType: 'documentation',
    category: 'programming',
    technology: 'Rust',
    level: 'All Levels',
    url: 'https://doc.rust-lang.org/book/',
    provider: 'Rust Foundation',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Rust', 'Systems Programming', 'Ownership', 'Official Book']
  },
  {
    id: 'doc-sql-postgres',
    title: 'PostgreSQL Official Documentation',
    description: 'The definitive manual for PostgreSQL relational database management system, SQL standard compliance, queries, indexes, and performance tuning.',
    resourceType: 'documentation',
    category: 'data',
    technology: 'SQL',
    level: 'All Levels',
    url: 'https://www.postgresql.org/docs/',
    provider: 'PostgreSQL Global Development Group',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['SQL', 'PostgreSQL', 'Databases', 'Relational']
  },
  {
    id: 'doc-react-official',
    title: 'React Official Documentation (react.dev)',
    description: 'The official React documentation focusing on modern hooks, functional components, state preservation, server components, and architecture.',
    resourceType: 'documentation',
    category: 'web',
    technology: 'React',
    level: 'All Levels',
    url: 'https://react.dev/',
    provider: 'Meta Open Source',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['React', 'Hooks', 'Web Development', 'Frontend']
  },
  {
    id: 'doc-nextjs-official',
    title: 'Next.js Official Documentation',
    description: 'Documentation for Next.js App Router, Server Components, API routes, data fetching, SSR, SSG, and Vercel deployment.',
    resourceType: 'documentation',
    category: 'web',
    technology: 'Next.js',
    level: 'All Levels',
    url: 'https://nextjs.org/docs',
    provider: 'Vercel',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Next.js', 'React', 'Full Stack', 'App Router']
  },
  {
    id: 'doc-docker-official',
    title: 'Docker Official Documentation & Guides',
    description: 'Comprehensive guides for Docker engine, Dockerfile instructions, multi-stage builds, Docker Compose, networking, and volumes.',
    resourceType: 'documentation',
    category: 'cloud',
    technology: 'Docker',
    level: 'All Levels',
    url: 'https://docs.docker.com/',
    provider: 'Docker Inc.',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Docker', 'Containers', 'DevOps', 'Cloud']
  },
  {
    id: 'doc-pandas-official',
    title: 'pandas Official Documentation & User Guide',
    description: 'Official user guide for pandas library, DataFrame operations, indexing, time series, grouping, joins, and performance optimization.',
    resourceType: 'documentation',
    category: 'data',
    technology: 'Pandas',
    level: 'All Levels',
    url: 'https://pandas.pydata.org/docs/',
    provider: 'pydata.org',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Pandas', 'Data Analysis', 'Python', 'Data Science']
  },

  // ==========================================
  // 2. YOUTUBE TUTORIALS - PROGRAMMING & CONCEPTS
  // ==========================================
  {
    id: 'yt-py-fullcourse',
    title: 'Python for Beginners - Full Course [Programming with Mosh]',
    description: 'Comprehensive 6-hour beginner masterclass covering Python syntax, variables, conditionals, loops, functions, lists, tuples, and dictionaries.',
    resourceType: 'video',
    category: 'programming',
    technology: 'Python',
    level: 'Beginner',
    concept: 'Variables & Fundamentals',
    url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
    embedUrl: 'https://www.youtube-nocookie.com/embed/_uQrJ0TkZlc',
    provider: 'YouTube',
    channelName: 'Programming with Mosh',
    duration: '6:14:07',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&auto=format&fit=crop&q=60',
    tags: ['Python', 'Beginner', 'Full Course', 'Variables']
  },
  {
    id: 'yt-py-functions',
    title: 'Python Functions - How to Call & Write Functions [Corey Schafer]',
    description: 'In-depth tutorial on defining functions, parameters, return values, *args, **kwargs, docstrings, and scope in Python.',
    resourceType: 'video',
    category: 'programming',
    technology: 'Python',
    level: 'Beginner',
    concept: 'Functions',
    url: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
    embedUrl: 'https://www.youtube-nocookie.com/embed/9Os0o3wzS_I',
    provider: 'YouTube',
    channelName: 'Corey Schafer',
    duration: '21:30',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60',
    tags: ['Python', 'Functions', 'Modular Code', 'Clean Code']
  },
  {
    id: 'yt-py-oop',
    title: 'Python OOP Tutorial - Classes and Instances [Corey Schafer]',
    description: 'Master Object-Oriented Programming in Python: Class variables, instance attributes, methods, inheritance, and dunder/magic methods.',
    resourceType: 'video',
    category: 'programming',
    technology: 'Python',
    level: 'Intermediate',
    concept: 'Object-Oriented Programming (OOP)',
    url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ZDa-Z5JzLYM',
    provider: 'YouTube',
    channelName: 'Corey Schafer',
    duration: '42:15',
    difficulty: 'Intermediate',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60',
    tags: ['Python', 'OOP', 'Classes', 'Inheritance']
  },
  {
    id: 'yt-sql-fullcourse',
    title: 'SQL Tutorial - Full Database Course for Beginners [freeCodeCamp]',
    description: 'Learn SQL database design, CRUD operations, foreign keys, filtering with WHERE, aggregation with GROUP BY, and complex multi-table JOINs.',
    resourceType: 'video',
    category: 'data',
    technology: 'SQL',
    level: 'Beginner',
    concept: 'Relational Database Queries',
    url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
    embedUrl: 'https://www.youtube-nocookie.com/embed/HXV3zeQKqGY',
    provider: 'YouTube',
    channelName: 'freeCodeCamp.org',
    duration: '4:20:00',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60',
    tags: ['SQL', 'Databases', 'JOIN', 'freeCodeCamp']
  },
  {
    id: 'yt-sql-joins',
    title: 'Learn SQL JOINs in 15 Minutes (Visualized)',
    description: 'Clear graphical and code breakdown of INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN with live database queries.',
    resourceType: 'video',
    category: 'data',
    technology: 'SQL',
    level: 'Intermediate',
    concept: 'SQL JOIN Operations',
    url: 'https://www.youtube.com/watch?v=0rE27i15qK4',
    embedUrl: 'https://www.youtube-nocookie.com/embed/0rE27i15qK4',
    provider: 'YouTube',
    channelName: 'Alex The Analyst',
    duration: '16:45',
    difficulty: 'Intermediate',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60',
    tags: ['SQL', 'JOINs', 'Data Analysis', 'Alex The Analyst']
  },
  {
    id: 'yt-pandas-dataframe',
    title: 'Pandas DataFrame Complete Tutorial for Data Analysis',
    description: 'Hands-on tutorial creating, filtering, reshaping, and manipulating pandas DataFrames using iloc, loc, groupby, merge, and clean handling of missing values.',
    resourceType: 'video',
    category: 'data',
    technology: 'Pandas',
    level: 'Beginner',
    concept: 'DataFrames & Series',
    url: 'https://www.youtube.com/watch?v=vmEHCJofslg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/vmEHCJofslg',
    provider: 'YouTube',
    channelName: 'Keith Galli',
    duration: '58:20',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60',
    tags: ['Pandas', 'DataFrame', 'Data Cleaning', 'Python']
  },
  {
    id: 'yt-react-fullcourse',
    title: 'React 18 Full Course - Modern React with Hooks [Traversy Media]',
    description: 'Build a production-grade React application from scratch using functional components, props, useState, useEffect, custom hooks, and Tailwind CSS.',
    resourceType: 'video',
    category: 'web',
    technology: 'React',
    level: 'Beginner',
    concept: 'Components & Hooks',
    url: 'https://www.youtube.com/watch?v=LDB4uaJ87e0',
    embedUrl: 'https://www.youtube-nocookie.com/embed/LDB4uaJ87e0',
    provider: 'YouTube',
    channelName: 'Traversy Media',
    duration: '2:40:15',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60',
    tags: ['React', 'Hooks', 'Frontend', 'Traversy Media']
  },
  {
    id: 'yt-java-fullcourse',
    title: 'Java Full Course for Beginners [Bro Code]',
    description: 'Comprehensive 12-hour modern Java course: Syntax, object-oriented principles, constructors, inheritance, interfaces, ArrayLists, and exception handling.',
    resourceType: 'video',
    category: 'programming',
    technology: 'Java',
    level: 'Beginner',
    concept: 'Java Foundations',
    url: 'https://www.youtube.com/watch?v=xk4_1vDrzzo',
    embedUrl: 'https://www.youtube-nocookie.com/embed/xk4_1vDrzzo',
    provider: 'YouTube',
    channelName: 'Bro Code',
    duration: '12:00:00',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60',
    tags: ['Java', 'Bro Code', 'OOP', 'Full Course']
  },

  // ==========================================
  // 3. CAREER ROADMAP STAGE RESOURCES
  // ==========================================
  {
    id: 'yt-roadmap-da-foundations',
    title: 'Data Analyst Portfolio Project - Excel, SQL, & Tableau End-to-End',
    description: 'Learn how to transition from business raw data to executive insight using SQL extraction, Excel cleaning, and Tableau visualization.',
    resourceType: 'video',
    category: 'roadmap',
    roadmap: 'Data Analyst',
    roadmapStage: 'Stage 1: Foundations',
    url: 'https://www.youtube.com/watch?v=qfyynHBFOsM',
    embedUrl: 'https://www.youtube-nocookie.com/embed/qfyynHBFOsM',
    provider: 'YouTube',
    channelName: 'Alex The Analyst',
    duration: '1:45:10',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Data Analyst', 'Roadmap', 'SQL', 'Portfolio']
  },
  {
    id: 'yt-roadmap-da-powerbi',
    title: 'Power BI Full Course - Learn Power BI in 4 Hours [Edureka]',
    description: 'Comprehensive Power BI masterclass covering Power Query ETL, Star Schema data modeling, DAX calculated measures, and interactive dashboards.',
    resourceType: 'video',
    category: 'roadmap',
    roadmap: 'Data Analyst',
    roadmapStage: 'Stage 3: Visualization',
    technology: 'Power BI',
    url: 'https://www.youtube.com/watch?v=3u7UDfR_YF8',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3u7UDfR_YF8',
    provider: 'YouTube',
    channelName: 'Edureka',
    duration: '3:50:00',
    difficulty: 'Intermediate',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence']
  },
  {
    id: 'yt-roadmap-swe-systemdesign',
    title: 'System Design Primer for Software Engineers',
    description: 'Architectural overview of scaling software applications: Load balancers, caching strategies, database partitioning, microservices, and CAP theorem.',
    resourceType: 'video',
    category: 'roadmap',
    roadmap: 'Software Engineer',
    roadmapStage: 'Stage 3: System Design & Backend Architecture',
    url: 'https://www.youtube.com/watch?v=m8Icp_Cid5o',
    embedUrl: 'https://www.youtube-nocookie.com/embed/m8Icp_Cid5o',
    provider: 'YouTube',
    channelName: 'Gaurav Sen',
    duration: '28:40',
    difficulty: 'Advanced',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Software Engineer', 'System Design', 'Architecture', 'Scalability']
  },
  {
    id: 'yt-roadmap-devops-docker',
    title: 'Docker & Kubernetes Tutorial for Beginners [TechWorld with Nana]',
    description: 'Understand containerization, Docker images, containers, networks, volumes, and how Kubernetes orchestrates containers across cloud clusters.',
    resourceType: 'video',
    category: 'roadmap',
    roadmap: 'Cloud & DevOps Engineer',
    roadmapStage: 'Stage 2: Containerization & Orchestration',
    technology: 'Docker',
    url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3c-iBn73dDE',
    provider: 'YouTube',
    channelName: 'TechWorld with Nana',
    duration: '3:10:00',
    difficulty: 'Intermediate',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'TechWorld with Nana']
  },

  // ==========================================
  // 4. LANGUAGE LEARNING & DUOLINGO DAILY PRACTICE
  // ==========================================
  {
    id: 'practice-duolingo-official',
    title: 'Practice Daily with Duolingo',
    description: 'Use Build Yourself for structured lessons, grammar, phonetics, and academic assessments. Use Duolingo as an optional external daily practice resource for quick repetition and gamified streaks.',
    resourceType: 'practice',
    category: 'language',
    language: 'All Languages',
    level: 'All Levels',
    url: 'https://www.duolingo.com/',
    provider: 'Duolingo Official',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Duolingo', 'Daily Practice', 'Gamified', 'Vocabulary']
  },
  {
    id: 'yt-lang-german-a1-alphabet',
    title: 'German Alphabet and Pronunciation (Das Deutsche Alphabet)',
    description: 'Master the German alphabet, umlauts (ä, ö, ü), the sharp S (ß), and essential pronunciation rules with clear audio examples and mouth positions.',
    resourceType: 'video',
    category: 'language',
    language: 'German',
    level: 'A1',
    concept: 'Alphabet & Pronunciation',
    url: 'https://www.youtube.com/watch?v=3g8Kk0HwP_0',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3g8Kk0HwP_0',
    provider: 'YouTube',
    channelName: 'Easy German',
    duration: '14:20',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['German', 'A1', 'Alphabet', 'Pronunciation', 'Easy German']
  },
  {
    id: 'yt-lang-german-a1-cases',
    title: 'German Cases Explained: Nominative and Accusative for Beginners',
    description: 'Clear, step-by-step explanation of the German grammatical cases, articles (der/die/das -> den/die/das), and how sentence roles dictate endings.',
    resourceType: 'video',
    category: 'language',
    language: 'German',
    level: 'A1',
    concept: 'Grammar & Cases',
    url: 'https://www.youtube.com/watch?v=qTfZkY7lH1Y',
    embedUrl: 'https://www.youtube-nocookie.com/embed/qTfZkY7lH1Y',
    provider: 'YouTube',
    channelName: 'Learn German with Anja',
    duration: '18:50',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['German', 'A1', 'Grammar', 'Cases', 'Accusative']
  },
  {
    id: 'yt-lang-japanese-a1-hiragana',
    title: 'Learn ALL Hiragana in 1 Hour - How to Write and Read Japanese',
    description: 'Visual mnemonic method to memorize and master all 46 Hiragana characters, stroke order, pronunciation, and writing practice.',
    resourceType: 'video',
    category: 'language',
    language: 'Japanese',
    level: 'A1',
    concept: 'Hiragana & Katakana',
    url: 'https://www.youtube.com/watch?v=6p9Il_j0zjc',
    embedUrl: 'https://www.youtube-nocookie.com/embed/6p9Il_j0zjc',
    provider: 'YouTube',
    channelName: 'JapanesePod101',
    duration: '1:04:15',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Japanese', 'A1', 'Hiragana', 'Script', 'JapanesePod101']
  },
  {
    id: 'yt-lang-french-a1-greetings',
    title: 'French A1 Greetings, Introductions & Basic Conversation',
    description: 'Learn foundational greetings, asking how someone is, introducing yourself politely, and formal vs informal address (Tu vs Vous).',
    resourceType: 'video',
    category: 'language',
    language: 'French',
    level: 'A1',
    concept: 'Greetings & Introductions',
    url: 'https://www.youtube.com/watch?v=hd0_GZHHWKs',
    embedUrl: 'https://www.youtube-nocookie.com/embed/hd0_GZHHWKs',
    provider: 'YouTube',
    channelName: 'FrenchPod101',
    duration: '16:30',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['French', 'A1', 'Greetings', 'Pronunciation']
  },
  {
    id: 'yt-lang-spanish-a1-basics',
    title: 'Spanish for Beginners - A1 Complete Pronunciation & Grammar',
    description: 'Learn Spanish fundamentals: Alphabet, greetings, Ser vs Estar differences, gendered nouns, and regular verb conjugations.',
    resourceType: 'video',
    category: 'language',
    language: 'Spanish',
    level: 'A1',
    concept: 'Grammar Foundations',
    url: 'https://www.youtube.com/watch?v=q_hHq9Y3n7M',
    embedUrl: 'https://www.youtube-nocookie.com/embed/q_hHq9Y3n7M',
    provider: 'YouTube',
    channelName: 'Butterfly Spanish',
    duration: '35:20',
    difficulty: 'Beginner',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Spanish', 'A1', 'Ser vs Estar', 'Conjugation']
  },

  // ==========================================
  // 5. MASTER'S & STUDY ABROAD & VISAS
  // ==========================================
  {
    id: 'doc-daad-official',
    title: 'DAAD Germany Official International Programmes Portal',
    description: 'The official German Academic Exchange Service (DAAD) database of English-taught Master’s degrees across German public research universities and universities of applied sciences.',
    resourceType: 'official_guide',
    category: 'masters',
    country: 'Germany',
    url: 'https://www.daad.de/en/study-and-research-in-germany/courses-of-study-in-germany/all-study-programmes/',
    provider: 'DAAD (German Academic Exchange Service)',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Germany', 'DAAD', 'Official Portal', 'Tuition-Free']
  },
  {
    id: 'doc-germany-visa-official',
    title: 'Federal Foreign Office Germany - Student Visa Requirements',
    description: 'Official requirements for German National Visas (Category D) for university study, including Blocked Account (Sperrkonto), health insurance, APS certificate, and passport validity.',
    resourceType: 'visa',
    category: 'visa',
    country: 'Germany',
    url: 'https://www.auswaertiges-amt.de/en/visa-service/visabestimmungen-node/studenten-visum',
    provider: 'German Federal Foreign Office',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Germany', 'Student Visa', 'Official Government', 'Blocked Account']
  },
  {
    id: 'yt-masters-germany-guide',
    title: 'How to Apply for Master’s in Germany Step-by-Step [Official Process]',
    description: 'End-to-end guidance covering program selection on DAAD, Uni-Assist vs direct university portal application, APS certificate requirements, and English proficiency.',
    resourceType: 'video',
    category: 'masters',
    country: 'Germany',
    url: 'https://www.youtube.com/watch?v=4xT7U5nK8m0',
    embedUrl: 'https://www.youtube-nocookie.com/embed/4xT7U5nK8m0',
    provider: 'YouTube',
    channelName: 'Bharat in Germany',
    duration: '22:15',
    difficulty: 'Intermediate',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Germany', 'Masters Abroad', 'Uni-Assist', 'Admissions']
  },
  {
    id: 'doc-us-studentvisa-official',
    title: 'U.S. Department of State - Student Visa (F-1) Information',
    description: 'Official U.S. government instructions on SEVIS fee (I-901), Form I-20 issuance from certified universities, DS-160 application, and visa consular interviews.',
    resourceType: 'visa',
    category: 'visa',
    country: 'USA',
    url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
    provider: 'U.S. Department of State',
    official: true,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['USA', 'F-1 Visa', 'Official Government', 'DS-160', 'I-20']
  },
  {
    id: 'yt-masters-sop-writing',
    title: 'How to Write a Winning Statement of Purpose (SOP) for Master’s',
    description: 'Learn the exact paragraph-by-paragraph structure of an academic SOP: Academic background, research interests, why this specific university, and long-term career goals.',
    resourceType: 'video',
    category: 'masters',
    level: 'All Levels',
    concept: 'SOP Writing',
    url: 'https://www.youtube.com/watch?v=0h5Kk3G1W7Q',
    embedUrl: 'https://www.youtube-nocookie.com/embed/0h5Kk3G1W7Q',
    provider: 'YouTube',
    channelName: 'Kanan.co',
    duration: '18:40',
    difficulty: 'Intermediate',
    official: false,
    verified: true,
    lastVerified: '2026-09-28',
    tags: ['Master’s', 'SOP', 'Admissions', 'Documentation']
  }
];

/**
 * Filter helper functions for dynamic resource discovery
 */
export function getResourcesByTechnology(tech: string): LearningResource[] {
  const lower = tech.toLowerCase();
  return initialLearningResources.filter(r =>
    (r.technology && r.technology.toLowerCase() === lower) ||
    r.tags.some(t => t.toLowerCase() === lower)
  );
}

export function getResourcesByConcept(tech: string, concept?: string): LearningResource[] {
  const lowerTech = tech.toLowerCase();
  const lowerConcept = concept?.toLowerCase();

  return initialLearningResources.filter(r => {
    const techMatches = (r.technology && r.technology.toLowerCase() === lowerTech) ||
      r.tags.some(t => t.toLowerCase() === lowerTech);
    if (!techMatches) return false;
    if (!lowerConcept) return true;
    return (r.concept && r.concept.toLowerCase().includes(lowerConcept)) ||
      r.title.toLowerCase().includes(lowerConcept) ||
      r.tags.some(t => t.toLowerCase().includes(lowerConcept));
  });
}

export function getResourcesByRoadmap(roadmapTitle: string, stage?: string): LearningResource[] {
  const lowerTitle = roadmapTitle.toLowerCase();
  return initialLearningResources.filter(r => {
    if (r.roadmap && r.roadmap.toLowerCase().includes(lowerTitle)) {
      if (stage && r.roadmapStage && !r.roadmapStage.toLowerCase().includes(stage.toLowerCase())) {
        return false;
      }
      return true;
    }
    // Also include resources whose technology or category matches
    return false;
  });
}

export function getResourcesByLanguage(lang: string, level?: string): LearningResource[] {
  const lowerLang = lang.toLowerCase();
  return initialLearningResources.filter(r => {
    if (r.language === 'All Languages') return true;
    if (!r.language || r.language.toLowerCase() !== lowerLang) return false;
    if (level && r.level && r.level !== 'All Levels' && r.level !== level) return false;
    return true;
  });
}

export function getResourcesByCountry(country: string): LearningResource[] {
  const lowerCountry = country.toLowerCase();
  return initialLearningResources.filter(r =>
    r.country && r.country.toLowerCase() === lowerCountry
  );
}
