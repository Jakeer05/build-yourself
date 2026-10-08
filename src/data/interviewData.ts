export interface InterviewQuestionItem {
  id: string;
  category: string;
  role: string;
  question: string;
  whyInterviewerAsks: string;
  keyPointsToCover: string[];
  sampleModelAnswer: string;
  commonPitfalls: string[];
  followUpQuestions: string[];
}

export const initialInterviewQuestions: InterviewQuestionItem[] = [
  // Data Analyst
  {
    id: 'da-int-1',
    role: 'Data Analyst',
    category: 'SQL & Database',
    question: 'How do you handle missing or dirty data in a dataset before generating business reports?',
    whyInterviewerAsks: 'Evaluates your data integrity mindset, understanding of bias, and practical knowledge of imputation techniques vs row removal.',
    keyPointsToCover: [
      'Assess percentage of missingness (MCAR, MAR, MNAR)',
      'Distinguish business impact: critical IDs vs optional survey fields',
      'Methods: Mean/Median/Mode imputation, forward/backward fill for time series, flag missingness with indicator column',
      'Documenting assumptions and reporting confidence intervals'
    ],
    sampleModelAnswer: 'When addressing missing data, I first investigate the root cause—whether it is Missing Completely at Random or systematically missing due to upstream ETL failures. If missing values represent under 5% and are non-critical, listwise deletion might be acceptable, but for numerical trends I evaluate median imputation to avoid outlier distortion. For time series, forward-fill is appropriate. Crucially, I always flag imputed records with a boolean indicator column so downstream stakeholders understand data provenance.',
    commonPitfalls: [
      'Simply saying "I delete rows with nulls" without checking sample bias',
      'Using mean imputation when data has severe skewness'
    ],
    followUpQuestions: [
      'How would you handle missing values in a categorical feature with 50 distinct categories?',
      'How do you communicate data uncertainty to non-technical executives?'
    ]
  },
  {
    id: 'da-int-2',
    role: 'Data Analyst',
    category: 'Business Analytics & Metrics',
    question: 'If our monthly active users (MAU) dropped by 12% last month, how would you diagnose the problem?',
    whyInterviewerAsks: 'Assesses structured problem-solving, metric decomposition, and investigative analytical rigor.',
    keyPointsToCover: [
      'Verify data pipeline integrity (ensure no tracking bugs or logging downtime)',
      'Segment the drop: by geography, device (iOS vs Android), user tenure (new vs returning), traffic channel',
      'External factor analysis: seasonality, competitor campaigns, holiday shifts',
      'Funnel drop-off: onboarding step, login failures, payment gate bugs'
    ],
    sampleModelAnswer: 'I follow a structured 4-pillar triage: First, verify measurement integrity by checking if telemetry pipelines, tracking SDKs, or database syncs had outages. Second, segment the drop across dimensions: is it concentrated in a specific platform like iOS after an app release, a specific geographic market, or among new vs power users? Third, check the conversion funnel to locate where drop-offs occurred. Fourth, evaluate external macroeconomic or seasonal trends. Once isolated, I formulate actionable hypotheses with product and engineering teams.',
    commonPitfalls: [
      'Jumping to conclusions without checking data pipeline bugs',
      'Looking only at aggregate top-line numbers without granular dimensional slicing'
    ],
    followUpQuestions: [
      'What leading indicators would you track to detect user churn before it hits MAU?'
    ]
  },
  // Data Scientist
  {
    id: 'ds-int-1',
    role: 'Data Scientist',
    category: 'Machine Learning',
    question: 'Explain the bias-variance tradeoff and how you detect and prevent overfitting in production models.',
    whyInterviewerAsks: 'Tests foundational understanding of generalization error in supervised machine learning.',
    keyPointsToCover: [
      'Bias: Error from erroneous assumptions or under-parameterized models (underfitting)',
      'Variance: Sensitivity to small fluctuations in training set (overfitting)',
      'Detection: Discrepancy between training loss and validation/cross-validation loss',
      'Prevention: L1/L2 Regularization, dropout, pruning, early stopping, cross-validation, feature reduction'
    ],
    sampleModelAnswer: 'The bias-variance tradeoff represents the balance between model simplicity and flexibility. High bias models underfit by failing to capture underlying patterns, while high variance models memorize training noise and fail to generalize to unseen test distributions. I detect overfitting by monitoring validation loss curves alongside training loss. To mitigate overfitting, I utilize k-fold stratified cross-validation, enforce L1/L2 weight penalties, apply tree pruning, and leverage ensemble techniques like bagging or dropout.',
    commonPitfalls: [
      'Confusing bias with human social bias in training data',
      'Believing higher accuracy on training data always implies a better model'
    ],
    followUpQuestions: [
      'How does an ensemble like Random Forest reduce variance without increasing bias?'
    ]
  },
  // Full Stack Developer
  {
    id: 'fs-int-1',
    role: 'Full Stack Developer',
    category: 'System Architecture',
    question: 'How do you design a secure, scalable authentication system for a web application?',
    whyInterviewerAsks: 'Evaluates full-stack security competence, session management, and microservice token architectures.',
    keyPointsToCover: [
      'Password hashing using Argon2id or bcrypt with appropriate work factor',
      'Short-lived Access Tokens (JWT) + Long-lived Refresh Tokens stored in HttpOnly, Secure, SameSite=Strict cookies',
      'Token revocation strategies via Redis blacklist or database token versioning',
      'Rate limiting on login endpoints and Multi-Factor Authentication (MFA)'
    ],
    sampleModelAnswer: 'For production authentication, I use an asymmetric JWT setup with short-lived access tokens (15 minutes) paired with rotating refresh tokens stored in HttpOnly, Secure, SameSite=Strict cookies to protect against XSS and CSRF attacks. On the backend, passwords are salted and hashed using bcrypt (cost 12) or Argon2. For token invalidation upon logout or password reset, I track token versions in Redis with automatic TTLs. The auth endpoint is guarded by Redis-backed IP rate limiting to prevent brute-force attacks.',
    commonPitfalls: [
      'Storing JWTs in localStorage where XSS scripts can exfiltrate tokens',
      'Using outdated MD5 or SHA-256 without salt for password hashing'
    ],
    followUpQuestions: [
      'How would you handle Single Sign-On (SSO) with OAuth 2.0 and OpenID Connect?'
    ]
  },
  // Data Engineer
  {
    id: 'de-int-1',
    role: 'Data Engineer',
    category: 'Distributed Systems',
    question: 'How do you handle data skew and shuffle bottlenecks in an Apache Spark pipeline?',
    whyInterviewerAsks: 'Assesses real-world big-data engineering expertise when processing massive partitions.',
    keyPointsToCover: [
      'Symptoms: One or two tasks running for hours while other 99 tasks complete in seconds',
      'Root cause: Uneven key distribution during joins or aggregations',
      'Solutions: Salting skewed keys with random suffixes, broadcast joins for small tables, tuning spark.sql.shuffle.partitions'
    ],
    sampleModelAnswer: 'Data skew in Spark manifests when uneven partition keys cause a small number of executors to process 80% of the volume during wide transformations. To resolve this, if joining a large table with a smaller lookup dimension, I use Broadcast Hash Join (`broadcast(df)`) to bypass shuffles entirely. If both tables are massive, I apply "key salting"—appending random integers (0 to N) to the skewed key before join and exploding the other table, evenly distributing data across partitions.',
    commonPitfalls: [
      'Suggesting increasing cluster memory without resolving the architectural partition imbalance'
    ],
    followUpQuestions: [
      'When does Adaptive Query Execution (AQE) in Spark 3 automatically alleviate skew?'
    ]
  },
  // Software Engineer
  {
    id: 'swe-int-1',
    role: 'Software Engineer',
    category: 'System Design & Architecture',
    question: 'How do you design a distributed, high-throughput rate limiter for a public API gateway?',
    whyInterviewerAsks: 'Tests distributed systems design, concurrency control, caching algorithms (Token Bucket vs Sliding Window), and fault tolerance.',
    keyPointsToCover: [
      'Algorithm choice: Token Bucket or Sliding Window Log/Counter',
      'Distributed storage: Redis with atomic Lua scripts or Redis Cell',
      'Handling race conditions and high concurrent write volume',
      'Fallback strategy if Redis becomes unavailable (local in-memory fallback)',
      'HTTP status headers (429 Too Many Requests, Retry-After, X-RateLimit-Remaining)'
    ],
    sampleModelAnswer: 'To design a distributed rate limiter, I implement the Sliding Window Counter algorithm using Redis clusters with atomic Lua scripts. Using a sliding window avoids traffic spikes at minute boundaries that plague fixed window counters. For each incoming client request identified by API key or IP, the Lua script increments the counter within a sub-second bucket, sums the trailing window, and resets with an explicit TTL. If the request exceeds the limit, the gateway immediately returns HTTP 429 Too Many Requests with standard Retry-After and X-RateLimit-Reset headers. For fault tolerance, if Redis suffers an outage, the API gateway gracefully fails open or falls back to local in-memory token buckets to prevent blocking legitimate production traffic.',
    commonPitfalls: [
      'Using a fixed window counter that permits 2x traffic bursts at boundary edges',
      'Executing multiple non-atomic roundtrips to Redis causing race conditions'
    ],
    followUpQuestions: [
      'How would you adapt this rate limiter for different subscription tiers (e.g. Free vs Enterprise)?'
    ]
  },
  // Frontend Developer
  {
    id: 'fe-int-1',
    role: 'Frontend Developer',
    category: 'Frontend Architecture',
    question: 'How do you diagnose and optimize Core Web Vitals (LCP, INP, CLS) in a large-scale React single-page application?',
    whyInterviewerAsks: 'Evaluates real-world frontend performance profiling, browser rendering critical path, and modern React optimization.',
    keyPointsToCover: [
      'LCP (Largest Contentful Paint): image optimization, priority hints, preloading key fonts/hero images, code-splitting',
      'INP (Interaction to Next Paint): breaking long tasks, React Transitions (useTransition), web workers',
      'CLS (Cumulative Layout Shift): reserving aspect-ratio boxes for images/embeds, font-display: optional',
      'Measurement tooling: Chrome DevTools Performance panel, Lighthouse, PerformanceObserver API'
    ],
    sampleModelAnswer: 'To optimize Core Web Vitals, I systematically tackle each metric: For LCP, I eliminate render-blocking scripts, split bundles using dynamic imports (`React.lazy`), and ensure hero assets have `fetchpriority="high"` and proper WebP/AVIF formats with CDN edge caching. For INP (Interaction to Next Paint), I audit long tasks (>50ms) in the Chrome Performance panel, defer non-urgent state updates using React 18 `useTransition`, and offload intensive data computations to Web Workers. For CLS, I enforce explicit CSS `aspect-ratio` on all images and ad containers, reserve layout space for dynamic elements, and use `font-display: swap` or `optional` with size-adjust to eliminate layout jumps from font swaps.',
    commonPitfalls: [
      'Blaming React entirely without measuring third-party scripts and uncompressed assets',
      'Fixing CLS by adding arbitrary delays instead of reserving layout dimensions'
    ],
    followUpQuestions: [
      'How does Server-Side Rendering (SSR) or React Server Components impact these metrics?'
    ]
  },
  // Backend Developer
  {
    id: 'be-int-1',
    role: 'Backend Developer',
    category: 'Backend API & Concurrency',
    question: 'How do you design a database transaction that maintains strict consistency while handling high-throughput concurrent payment updates?',
    whyInterviewerAsks: 'Assesses mastery of ACID guarantees, transaction isolation levels, deadlock prevention, and optimistic vs pessimistic locking.',
    keyPointsToCover: [
      'Isolation levels: Read Committed vs Repeatable Read vs Serializable',
      'Pessimistic locking (`SELECT FOR UPDATE`) vs Optimistic locking with version numbers',
      'Idempotency keys to prevent duplicate transaction charges on network retries',
      'Deadlock prevention: deterministic resource lock ordering and short transaction scopes',
      'Outbox pattern or event sourcing for asynchronous downstream reconciliation'
    ],
    sampleModelAnswer: 'To maintain strict financial consistency under high concurrency, I implement optimistic locking with idempotency controls. First, incoming requests must supply an Idempotency-Key stored in Redis with an atomic SETNX check to prevent duplicate executions from network retries. For balance updates, I use optimistic concurrency control with an integer version column (`WHERE account_id = :id AND version = :current_version`). If a race condition occurs, the application retries the transaction up to 3 times with exponential backoff. For high-contention accounts where collisions are frequent, I switch to pessimistic locking with `SELECT FOR UPDATE NOWAIT` using consistent alphabetical lock ordering across accounts to eliminate deadlocks, keeping the database transaction window under 10 milliseconds.',
    commonPitfalls: [
      'Leaving database connections and locks open while awaiting external HTTP payment gateway responses',
      'Ignoring duplicate network retries without idempotency keys'
    ],
    followUpQuestions: [
      'How would you reconcile transactions across multiple independent microservices without distributed two-phase commits?'
    ]
  },
  // Python Developer
  {
    id: 'py-int-1',
    role: 'Python Developer',
    category: 'Python Developer',
    question: 'Explain Python’s Global Interpreter Lock (GIL), how it affects multi-threaded applications, and when to use multiprocessing vs asyncio.',
    whyInterviewerAsks: 'Tests deep knowledge of CPython runtime internals, concurrency paradigms, and performance profiling.',
    keyPointsToCover: [
      'CPython GIL: a mutex that prevents multiple native threads from executing Python bytecode simultaneously',
      'Impact: CPU-bound tasks do not benefit from threading; I/O-bound tasks release the GIL during network/disk I/O',
      'Multiprocessing: creates separate OS processes with independent GILs and memory spaces for CPU-intensive work',
      'Asyncio: single-threaded event loop utilizing non-blocking cooperative multitasking for massive I/O concurrency',
      'Python 3.13 free-threaded / nogil developments'
    ],
    sampleModelAnswer: 'In CPython, the Global Interpreter Lock (GIL) is a mutual exclusion lock that ensures only one native thread executes Python bytecode at any given moment, primarily designed to safeguard CPython’s reference-counting memory management from race conditions. Because of the GIL, standard Python `threading` cannot utilize multiple CPU cores for CPU-bound computations like image transformation or matrix multiplication. Therefore, for CPU-bound tasks, I use `multiprocessing` or `concurrent.futures.ProcessPoolExecutor`, which spawns separate operating system processes with dedicated memory spaces and distinct GILs. Conversely, for I/O-bound tasks like web scraping or calling microservice APIs, Python threads automatically release the GIL while waiting for network responses; here, I use `asyncio` or `aiohttp`, which scales to tens of thousands of concurrent connections using an event loop with minimal OS context-switching overhead.',
    commonPitfalls: [
      'Assuming multithreading speeds up mathematical number crunching in Python',
      'Confusing parallel processes with asynchronous coroutines'
    ],
    followUpQuestions: [
      'How does inter-process communication (IPC) overhead affect multiprocessing performance?'
    ]
  }
];

export const behavioralQuestions = [
  {
    id: 'hr-1',
    question: 'Tell me about yourself and your journey into technology.',
    framework: 'Present -> Past -> Future',
    strategy: 'Focus 70% on relevant technical projects, skills, and current momentum, 20% on foundational background, and 10% on why this role is your logical next step.',
    promptTips: 'Highlight 2 specific projects (e.g. Python billing engine, Data Analytics dashboard), your technical stack, and your commitment to continuous learning.'
  },
  {
    id: 'hr-2',
    question: 'Why do you want to work for our company specifically?',
    framework: 'Mission alignment + Technical synergy + Mutual growth',
    strategy: 'Reference the company’s recent technological milestones, engineering culture, or market product challenges that directly match your skills.',
    promptTips: 'Avoid generic answers like "You are a great company". Mention a specific product feature or engineering architecture.'
  },
  {
    id: 'hr-3',
    question: 'Describe a significant challenge you faced during a project and how you overcame it.',
    framework: 'STAR (Situation, Task, Action, Result)',
    strategy: 'Choose a real technical blocker (e.g. query timeout, deployment bug, tricky data edge-case), outline your analytical troubleshooting, and quantify the positive result.',
    promptTips: 'Use metrics: "reduced load time by 35%", "resolved 4 critical bugs before release".'
  },
  {
    id: 'hr-4',
    question: 'Where do you see yourself in five years?',
    framework: 'Technical Depth -> Architectural Leadership -> Mentorship',
    strategy: 'Show ambition for mastery in your domain (e.g. Senior Data Analyst or Full Stack Lead), taking ownership of system architecture, and mentoring junior engineers.',
    promptTips: 'Emphasize growth within the discipline rather than jumping to unrelated fields.'
  },
  {
    id: 'hr-5',
    question: 'What is your greatest technical strength, and what is an area you are actively improving?',
    framework: 'Evidence-backed strength + Constructive vulnerability with active remediation',
    strategy: 'For weakness, choose a genuine technical area you are actively studying (e.g. "I have strong Python skills and am now leveling up my Docker and Kubernetes orchestration via daily practice").',
    promptTips: 'Never say "I am a perfectionist" or "I work too hard". Show real self-awareness and active study habits.'
  }
];
