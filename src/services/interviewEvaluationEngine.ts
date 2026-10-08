import { AiEvaluationResult } from './aiService';

export interface QuestionRubric {
  id: string;
  question: string;
  role: string;
  category: string;
  intent: string;
  expectedConcepts: string[];
  importantKeywords: string[];
  correctTechnicalApproach: string;
  commonIncorrectApproaches: string[];
  idealAnswer: string;
  minimumRequirements: string;
  blueprint5Step: string[];
}

export const QUESTION_RUBRICS: Record<string, QuestionRubric> = {
  'missing-dirty-data': {
    id: 'da-int-1',
    question: 'How do you handle missing or dirty data in a dataset before generating business reports?',
    role: 'Data Analyst',
    category: 'SQL & Database',
    intent: 'Assess candidate understanding of data hygiene, missingness classification, appropriate imputation vs deletion strategies, data validation, and stakeholder transparency.',
    expectedConcepts: [
      'quantifying missingness percentage per column',
      'understanding missingness mechanisms (MCAR, MAR, MNAR)',
      'choosing row/column deletion vs imputation based on threshold and bias',
      'imputation methods: median for skewed data, mean, mode, forward/backward fill for time-series',
      'handling duplicates, inconsistent formats, and outliers',
      'validating post-cleaning dataset distributions',
      'documenting assumptions and flagging imputed entries'
    ],
    importantKeywords: [
      'missing', 'null', 'imputation', 'median', 'mean', 'mode', 'deletion', 'dropna',
      'outlier', 'duplicate', 'time series', 'forward fill', 'validate', 'mcar', 'bias',
      'distribution', 'dirty data', 'format', 'iqr'
    ],
    correctTechnicalApproach: 'Profile missing percentages -> classify mechanism -> choose deletion (<3% MCAR) or domain imputation (median, mode, forward-fill) -> resolve duplicates & outliers -> validate distributions -> document assumptions.',
    commonIncorrectApproaches: [
      'Simply dropping all rows with null values without analyzing bias',
      'Using mean imputation on skewed distributions with heavy outliers',
      'Listing tools like Python or Excel without explaining cleaning methodologies',
      'Failing to validate or document data cleaning steps'
    ],
    idealAnswer: 'When handling missing or dirty data before generating business reports, I follow a systematic data hygiene protocol: First, I profile the dataset to quantify the exact percentage of missing values per column and identify the mechanism—determining whether data is Missing Completely at Random (MCAR) or systematically missing due to logging failures. Second, for missing data, if the proportion is under 3-5% and non-critical, listwise deletion is acceptable; otherwise, I apply domain-appropriate imputation: median for skewed numerical distributions to resist outliers, mode for categorical fields, and forward/backward fill for sequential time-series data. I always create a boolean indicator column (e.g., is_imputed) to maintain auditability. Third, for dirty data, I deduplicate primary keys, standardize text casings and datetime formats, and flag impossible values or extreme outliers using IQR fences. Fourth, I validate post-cleaning metrics against raw benchmarks to verify distribution integrity. Finally, I document all cleaning transformations and assumptions in the data catalog so report stakeholders understand the data provenance.',
    minimumRequirements: 'Must explain how to identify missingness, contrast deletion with imputation methods (such as median or forward-fill), and address validation or dirty data remediation.',
    blueprint5Step: [
      'Quantify missingness upfront: Calculate null percentages per column and classify the missingness mechanism (MCAR, MAR, MNAR).',
      'Differentiate deletion from imputation: Justify when row removal is safe versus when it introduces sampling bias.',
      'Apply robust imputation techniques: Use median for skewed metrics, mode for categorical attributes, and forward-fill for time-series.',
      'Clean structural defects: Identify and resolve duplicate records, inconsistent datatypes, and boundary outliers.',
      'Validate and document: Verify post-cleaning distributions against raw source data and document all assumptions for business stakeholders.'
    ]
  },
  'mau-drop': {
    id: 'da-int-2',
    question: 'If our monthly active users (MAU) dropped by 12% last month, how would you diagnose the problem?',
    role: 'Data Analyst',
    category: 'Business Analytics & Metrics',
    intent: 'Assess structured analytical triage, metric decomposition, technical pipeline validation, and hypothesis-driven root cause analysis.',
    expectedConcepts: [
      'verifying tracking telemetry and data pipeline health first',
      'metric decomposition across dimensions (platform, geography, user cohorts)',
      'funnel analysis to locate specific step drop-offs (onboarding, login, payments)',
      'external factors: seasonality, holidays, macroeconomic shifts, competitor actions',
      'formulating actionable recommendations with product and engineering teams'
    ],
    importantKeywords: [
      'mau', 'telemetry', 'pipeline', 'segment', 'cohort', 'geography', 'platform',
      'funnel', 'seasonality', 'retention', 'churn', 'drop-off', 'root cause', 'hypothesis'
    ],
    correctTechnicalApproach: 'Verify data collection pipeline -> segment by platform/geo/cohort -> inspect funnel stage drop-offs -> analyze external/seasonal factors -> synthesize findings with stakeholders.',
    commonIncorrectApproaches: [
      'Immediately blaming marketing or competitors without verifying data telemetry',
      'Looking only at the aggregate 12% drop without dimensional segmentation',
      'Proposing solutions before isolating the root cause'
    ],
    idealAnswer: 'To diagnose a 12% drop in Monthly Active Users, I execute a structured 4-phase analytical triage: First, I verify data pipeline and telemetry integrity—confirming whether tracking SDK releases, ETL sync failures, or analytics outages caused false negative drops. Second, once verified as real, I segment the metric across core dimensions: platform (iOS vs Android vs Web), geographic market, acquisition channel, and user tenure (new user acquisition vs returning user churn). Third, I perform conversion and engagement funnel analysis to pinpoint exactly where user activity ceased (e.g. login authentication failures, onboarding roadblocks, or feature retirement). Fourth, I evaluate external drivers including holiday seasonality, calendar day differences, and competitor campaigns. Once the root cause is isolated, I partner with product and engineering leads to implement targeted recovery experiments and set automated threshold anomaly alerts.',
    minimumRequirements: 'Must mention verifying data pipeline accuracy, segmenting by dimensions (e.g. platform, cohort, geography), and checking the conversion funnel.',
    blueprint5Step: [
      'Verify tracking telemetry first: Rule out logging bugs, broken tracking events, and ETL pipeline downtime before drawing business conclusions.',
      'Decompose by dimensions: Segment the 12% decline across platform (iOS/Android), geography, acquisition channel, and user cohorts.',
      'Analyze the user journey funnel: Pinpoint the exact step where users dropped off (login, onboarding, checkout, or core feature).',
      'Assess external and seasonal context: Factor in seasonality, holiday schedules, calendar length, and competitor market shifts.',
      'Synthesize root causes into actions: Deliver an executive debrief with isolated drivers and data-backed remediation experiments.'
    ]
  },
  'bias-variance': {
    id: 'ds-int-1',
    question: 'Explain the bias-variance tradeoff and how you detect and prevent overfitting in production models.',
    role: 'Data Scientist',
    category: 'Machine Learning',
    intent: 'Assess foundational theoretical knowledge of generalization error, model complexity dynamics, and production diagnostic/regularization techniques.',
    expectedConcepts: [
      'definition of bias (underfitting, model too simple) vs variance (overfitting, model too sensitive to noise)',
      'total error decomposition: bias^2 + variance + irreducible error',
      'detecting overfitting via divergence between training loss and validation/test loss',
      'techniques to prevent overfitting: cross-validation, L1/L2 regularization, dropout, pruning, early stopping, feature selection'
    ],
    importantKeywords: [
      'bias', 'variance', 'tradeoff', 'overfitting', 'underfitting', 'regularization',
      'cross-validation', 'validation loss', 'training loss', 'l1', 'l2', 'dropout', 'pruning', 'early stopping'
    ],
    correctTechnicalApproach: 'Define bias and variance -> describe total error curve -> explain detection via training vs validation loss curves -> detail prevention methods (regularization, cross-validation, ensembling).',
    commonIncorrectApproaches: [
      'Confusing mathematical bias with societal/data ethical bias',
      'Believing 100% training accuracy indicates an optimal model',
      'Mentioning only one prevention technique without explaining the underlying mechanics'
    ],
    idealAnswer: 'The bias-variance tradeoff is the fundamental tension in supervised machine learning between model simplicity and flexibility. Bias represents error introduced by overly simplistic assumptions, causing underfitting where the model fails to capture underlying data patterns. Variance represents sensitivity to random noise in the training set, causing overfitting where the model fails to generalize to unseen data. Total generalization error decomposes into Bias² + Variance + Irreducible Error. In production, I detect overfitting by monitoring the divergence between training loss and validation loss curves, and through k-fold cross-validation. To prevent overfitting, I constrain model complexity using L1/L2 regularization, apply early stopping, use tree pruning or dropout in deep neural networks, perform recursive feature elimination, and leverage ensemble architectures like Random Forests or Gradient Boosting that naturally mitigate variance.',
    minimumRequirements: 'Must accurately define both bias and variance, describe how overfitting is detected (training vs validation loss), and provide specific mitigation techniques.',
    blueprint5Step: [
      'Formulate core definitions: Clearly define bias as underfitting from rigid assumptions and variance as overfitting to training noise.',
      'Cite the total error equation: Explain that total generalization error equals Bias² + Variance + Irreducible Noise.',
      'Explain diagnostic detection: Detail how divergence between training error and validation/test error signals variance.',
      'Detail architectural regularization: Explain how L1/L2 penalties, tree pruning, or neural dropout restrict excessive complexity.',
      'Apply validation protocols: Implement stratified k-fold cross-validation and early stopping to preserve production generalization.'
    ]
  },
  'auth-system': {
    id: 'fs-int-1',
    question: 'How do you design a secure, scalable authentication system for a web application?',
    role: 'Full Stack Developer',
    category: 'System Architecture',
    intent: 'Assess full-stack security principles, token management, defense against XSS/CSRF, session invalidation, and rate limiting.',
    expectedConcepts: [
      'password hashing using bcrypt, Argon2id, or scrypt with salt and work factor',
      'asymmetric or symmetric token strategy: short-lived access tokens + long-lived refresh tokens',
      'secure cookie storage: HttpOnly, Secure, SameSite=Strict cookies (avoiding localStorage XSS)',
      'token revocation and session management (Redis blacklisting or token versioning)',
      'brute-force defense: rate limiting, MFA, IP throttling, account lockouts'
    ],
    importantKeywords: [
      'jwt', 'token', 'access token', 'refresh token', 'httponly', 'cookie', 'bcrypt',
      'argon2', 'xss', 'csrf', 'rate limiting', 'redis', 'mfa', 'session', 'hash', 'salt'
    ],
    correctTechnicalApproach: 'Salt & hash passwords (Argon2id/bcrypt) -> issue short-lived JWT access tokens + rotating refresh tokens in HttpOnly Secure cookies -> implement Redis token revocation -> enforce rate limiting and MFA.',
    commonIncorrectApproaches: [
      'Storing JWT tokens in browser localStorage (vulnerable to script exfiltration via XSS)',
      'Using un-salted SHA256 or MD5 for passwords',
      'Having no strategy to revoke access tokens upon password reset or logout'
    ],
    idealAnswer: 'To design a secure, scalable authentication system, I implement a dual-token architecture paired with defense-in-depth security: On the credential layer, passwords are salted and hashed using Argon2id or bcrypt (cost factor >= 12). For session management, I issue short-lived JWT access tokens (10-15 minute lifespan) paired with rotating refresh tokens stored in HttpOnly, Secure, SameSite=Strict cookies, eliminating token theft risks from XSS and CSRF. To solve JWT revocation upon logout or security compromise, I maintain a token version counter or Redis blacklist indexed by user ID with an automatic TTL matching the token expiry. On the network edge, I enforce Redis-backed distributed rate limiting on login endpoints, mandate Multi-Factor Authentication (TOTP), and log security events for anomaly detection. This architecture decouples stateless API verification from scalable session revocation.',
    minimumRequirements: 'Must address password hashing (bcrypt/Argon2), secure token storage (HttpOnly cookies over localStorage), token refresh/revocation, and brute-force protection.',
    blueprint5Step: [
      'Enforce cryptographic credential storage: Use Argon2id or bcrypt with adaptive work factors and unique salts per user.',
      'Implement dual-token lifecycle: Pair short-lived JWT access tokens (15m) with rotating refresh tokens (7d).',
      'Harden storage vectors: Store tokens strictly in HttpOnly, Secure, SameSite=Strict cookies to neutralize XSS and CSRF exploits.',
      'Establish revocation architecture: Use Redis-backed token versioning or blacklists with automatic TTLs for instantaneous session termination.',
      'Guard endpoints against brute-force: Deploy IP and account rate limiting with Multi-Factor Authentication (MFA/TOTP).'
    ]
  },
  'spark-skew': {
    id: 'de-int-1',
    question: 'How do you handle data skew and shuffle bottlenecks in an Apache Spark pipeline?',
    role: 'Data Engineer',
    category: 'Distributed Systems',
    intent: 'Assess candidate distributed systems acumen, partition tuning, Spark execution engine dynamics, and big data bottleneck mitigation.',
    expectedConcepts: [
      'symptoms of data skew: straggler tasks where 95% of tasks finish quickly and 1-2 tasks bottleneck the stage',
      'root causes: unbalanced partition keys during wide transformations (groupBy, join)',
      'key salting technique: appending random integer suffixes to skewed keys to distribute across partitions',
      'broadcast hash joins for asymmetric table sizes to eliminate shuffle entirely',
      'Spark 3 Adaptive Query Execution (AQE) skew join optimization and partition coalescing'
    ],
    importantKeywords: [
      'spark', 'skew', 'shuffle', 'partition', 'salting', 'broadcast', 'broadcast join',
      'straggler', 'aqe', 'adaptive query execution', 'coalesce', 'repartition'
    ],
    correctTechnicalApproach: 'Identify straggler tasks in Spark UI -> check key distribution -> apply Broadcast Hash Join if table <100MB -> use Key Salting for large skewed joins -> enable Spark 3 AQE.',
    commonIncorrectApproaches: [
      'Blindly increasing driver or executor memory without addressing key distribution imbalance',
      'Calling repartition() without addressing skewed key groupings'
    ],
    idealAnswer: 'Data skew in Apache Spark manifests when uneven partition key distribution causes a handful of executor tasks to process disproportionate data volumes, creating stage-blocking straggler tasks. To resolve this, I first inspect the Spark UI stage execution timeline and task metrics to identify the skewed join or aggregation key. Second, if joining a large fact dataset with a smaller dimension table (under 100MB-1GB), I replace the shuffle hash join with a Broadcast Hash Join (`broadcast(dimensionDf)`), completely eliminating shuffle I/O. Third, for large-to-large skewed joins, I apply "key salting"—appending an isolated random integer suffix (0 to N-1) to the skewed key on the left dataset while replicating/exploding the right dataset by N, evenly distributing the workload across partitions. Fourth, on Spark 3+, I enable Adaptive Query Execution (`spark.sql.adaptive.enabled = true` and `spark.sql.adaptive.skewJoin.enabled = true`) so the Catalyst optimizer automatically splits skewed partitions at runtime.',
    minimumRequirements: 'Must identify straggler tasks as skew symptoms, mention broadcast joins for small-large table joins, explain key salting for massive joins, and reference partition tuning or AQE.',
    blueprint5Step: [
      'Diagnose skew via Spark UI: Inspect task execution distribution and identify straggler tasks processing disproportionate bytes.',
      'Leverage Broadcast Joins: Bypass shuffle stages entirely by broadcasting smaller lookup tables using broadcast(df).',
      'Implement Key Salting: Add random integer prefixes/suffixes to skewed join keys and explode matching dimension records to balance partitions.',
      'Enable Adaptive Query Execution (AQE): Turn on spark.sql.adaptive.skewJoin.enabled to allow runtime partition splitting.',
      'Tune partition granularity: Calibrate spark.sql.shuffle.partitions to align target partition sizes to 128MB-200MB chunks.'
    ]
  },
  'rate-limiter': {
    id: 'swe-int-1',
    question: 'How do you design a distributed, high-throughput rate limiter for a public API gateway?',
    role: 'Software Engineer',
    category: 'System Design & Architecture',
    intent: 'Assess distributed systems design, concurrency control, caching algorithms (Token Bucket vs Sliding Window), and fault tolerance.',
    expectedConcepts: [
      'Token Bucket or Sliding Window Log / Counter algorithm',
      'distributed cache storage using Redis with atomic Lua scripts',
      'avoiding race conditions and high concurrent write stampedes',
      'fallback strategy when Redis is degraded (fail-open or local in-memory token bucket)',
      'standard HTTP 429 Too Many Requests response with Retry-After and rate limit headers'
    ],
    importantKeywords: [
      'rate limit', 'token bucket', 'sliding window', 'redis', 'lua', '429', 'retry-after', 'concurrency', 'distributed'
    ],
    correctTechnicalApproach: 'Select sliding window counter -> execute atomic Lua script in Redis cluster -> return HTTP 429 with Retry-After header on limit breach -> fail open or fallback to local in-memory buckets on Redis downtime.',
    commonIncorrectApproaches: [
      'Using a fixed window counter that allows 2x burst at minute boundaries',
      'Executing non-atomic roundtrips causing race conditions under concurrency',
      'Failing closed on Redis downtime causing entire API outage'
    ],
    idealAnswer: 'To design a distributed rate limiter for a public API gateway, I implement the Sliding Window Counter algorithm using Redis clusters with atomic Lua scripts. Using a sliding window avoids traffic spikes at window boundaries. For each incoming client request identified by API key or IP, the Lua script increments the counter within a sub-second bucket, sums the trailing window, and resets with an explicit TTL. If the request exceeds the limit, the gateway immediately returns HTTP 429 Too Many Requests with standard Retry-After and X-RateLimit-Reset headers. For fault tolerance, if Redis suffers an outage, the API gateway gracefully fails open or falls back to local in-memory token buckets to prevent blocking legitimate production traffic.',
    minimumRequirements: 'Must explain an appropriate rate limiting algorithm (Token Bucket or Sliding Window), distributed Redis storage with atomic Lua scripts, and HTTP 429 response handling.',
    blueprint5Step: [
      'Select algorithm: Choose Sliding Window Counter over Fixed Window to eliminate boundary burst vulnerabilities.',
      'Enforce atomic updates: Implement Redis with single-pass Lua scripts to guarantee thread-safe increment and window TTL evaluation.',
      'Define client contract: Return RFC-compliant HTTP 429 status codes with Retry-After and X-RateLimit-Remaining headers.',
      'Architect resiliency: Configure graceful local in-memory fail-open fallback during Redis cluster network partitions.',
      'Differentiate tiers: Partition rate limits by authenticated subscription tiers and client IP addresses.'
    ]
  },
  'web-vitals': {
    id: 'fe-int-1',
    question: 'How do you diagnose and optimize Core Web Vitals (LCP, INP, CLS) in a large-scale React single-page application?',
    role: 'Frontend Developer',
    category: 'Frontend Architecture',
    intent: 'Assess real-world browser rendering critical path knowledge, performance profiling, and modern React runtime optimization.',
    expectedConcepts: [
      'LCP optimization: image prioritization, modern WebP/AVIF formats, code splitting, CDN caching',
      'INP optimization: breaking long tasks, React 18 useTransition, offloading to Web Workers',
      'CLS optimization: reserving aspect-ratio dimensions on images/embeds, font-display adjustments',
      'Profiling tooling: Chrome DevTools Performance panel, Lighthouse, PerformanceObserver'
    ],
    importantKeywords: [
      'lcp', 'inp', 'cls', 'core web vitals', 'largest contentful paint', 'layout shift', 'long task', 'react', 'lazy', 'transition'
    ],
    correctTechnicalApproach: 'Measure field data via Chrome DevTools/Lighthouse -> preload hero LCP elements and split code -> break long tasks with useTransition for INP -> enforce CSS aspect-ratio for CLS.',
    commonIncorrectApproaches: [
      'Blaming React entirely without profiling network assets or third-party tracking scripts',
      'Artificially delaying DOM rendering to mask layout shifts'
    ],
    idealAnswer: 'To optimize Core Web Vitals, I systematically tackle each metric: For LCP, I eliminate render-blocking scripts, split bundles using dynamic imports (React.lazy), and ensure hero assets have fetchpriority="high" and modern WebP/AVIF compression with CDN edge caching. For INP (Interaction to Next Paint), I audit long tasks (>50ms) in the Chrome Performance panel, defer non-urgent state updates using React 18 useTransition, and offload intensive computations to Web Workers. For CLS, I enforce explicit CSS aspect-ratio on all images and dynamic containers, reserve layout space for dynamic embeds, and configure font-display: optional or size-adjust to eliminate cumulative layout shifts.',
    minimumRequirements: 'Must explain specific remediations for LCP, INP, and CLS, and reference browser profiling tools.',
    blueprint5Step: [
      'Profile critical render path: Use Lighthouse and the Chrome DevTools Performance panel to benchmark real user metrics.',
      'Accelerate LCP: Apply fetchpriority="high" on hero images, compress to AVIF/WebP, and code-split secondary bundles.',
      'Eliminate INP lag: Break long JavaScript tasks over 50ms and wrap non-blocking state updates in React useTransition.',
      'Lock down CLS: Enforce CSS aspect-ratio on media containers and reserve DOM placeholders for dynamic elements.',
      'Set up synthetic monitoring: Implement PerformanceObserver telemetry to alert on regression in production.'
    ]
  },
  'payment-transaction': {
    id: 'be-int-1',
    question: 'How do you design a database transaction that maintains strict consistency while handling high-throughput concurrent payment updates?',
    role: 'Backend Developer',
    category: 'Backend API & Concurrency',
    intent: 'Assess mastery of ACID guarantees, transaction isolation levels, deadlock prevention, and optimistic vs pessimistic locking.',
    expectedConcepts: [
      'transaction isolation levels (Read Committed vs Serializable)',
      'optimistic locking with version counters vs pessimistic locking (SELECT FOR UPDATE)',
      'idempotency keys via Redis to prevent double billing on network retries',
      'deadlock prevention via deterministic resource lock ordering and short transaction windows'
    ],
    importantKeywords: [
      'acid', 'transaction', 'isolation', 'optimistic locking', 'pessimistic locking', 'select for update', 'idempotency', 'deadlock', 'concurrency'
    ],
    correctTechnicalApproach: 'Verify idempotency key -> apply optimistic locking with version column (or SELECT FOR UPDATE NOWAIT with sorted lock order) -> keep database lock window minimal -> handle retries with exponential backoff.',
    commonIncorrectApproaches: [
      'Holding database transactions open while awaiting third-party HTTP gateway responses',
      'Failing to handle duplicate network retries with idempotency keys'
    ],
    idealAnswer: 'To maintain strict financial consistency under high concurrency, I implement optimistic concurrency control paired with idempotency controls: First, incoming requests must supply a unique Idempotency-Key stored in Redis with an atomic SETNX check to prevent duplicate executions from network retries. For balance updates, I use optimistic concurrency control with an integer version column (WHERE account_id = :id AND version = :current_version). If a race condition occurs, the application retries the transaction up to 3 times with exponential backoff. For high-contention accounts where collisions are frequent, I switch to pessimistic locking with SELECT FOR UPDATE NOWAIT using consistent alphabetical lock ordering across accounts to eliminate deadlocks, keeping the database transaction window under 10 milliseconds and never making external network calls while holding a database lock.',
    minimumRequirements: 'Must mention idempotency keys, compare optimistic vs pessimistic locking, address deadlock prevention, and emphasize short transaction scopes.',
    blueprint5Step: [
      'Enforce API idempotency: Verify Idempotency-Key headers using Redis atomic tokens before initiating any database state change.',
      'Select concurrency control: Use optimistic version-checking for standard accounts and pessimistic SELECT FOR UPDATE for hot wallets.',
      'Prevent deadlocks: Enforce deterministic alphabetical or numeric resource locking order across all concurrent transactions.',
      'Minimize transaction duration: Never execute external HTTP calls while holding a database lock.',
      'Implement retry policies: Configure exponential backoff with jitter on optimistic concurrency collision conflicts.'
    ]
  },
  'python-gil': {
    id: 'py-int-1',
    question: 'Explain Python’s Global Interpreter Lock (GIL), how it affects multi-threaded applications, and when to use multiprocessing vs asyncio.',
    role: 'Python Developer',
    category: 'Python Developer',
    intent: 'Assess knowledge of CPython runtime internals, memory management via reference counting, and concurrency paradigms.',
    expectedConcepts: [
      'CPython GIL: mutex preventing multiple native OS threads from executing bytecode simultaneously',
      'CPU-bound vs I/O-bound differences under GIL constraints',
      'Multiprocessing: separate OS processes with dedicated memory and independent GILs for CPU parallelism',
      'Asyncio: single-threaded event loop utilizing non-blocking cooperative multitasking for massive I/O concurrency'
    ],
    importantKeywords: [
      'gil', 'global interpreter lock', 'cpython', 'multiprocessing', 'asyncio', 'threading', 'cpu-bound', 'i/o-bound', 'event loop', 'mutex'
    ],
    correctTechnicalApproach: 'Define GIL as CPython mutex protecting reference counters -> explain that threading only aids I/O-bound tasks -> recommend multiprocessing for CPU-bound computation -> recommend asyncio for massive I/O concurrency.',
    commonIncorrectApproaches: [
      'Believing multithreading speeds up mathematical or CPU computations in standard CPython',
      'Confusing multiprocessing (parallel processes) with asynchronous coroutines (cooperative I/O)'
    ],
    idealAnswer: 'In CPython, the Global Interpreter Lock (GIL) is a mutual exclusion lock that ensures only one native thread executes Python bytecode at any given moment, primarily designed to safeguard CPython’s reference-counting memory management from race conditions. Because of the GIL, standard Python threading cannot utilize multiple CPU cores for CPU-bound computations like image transformation or matrix multiplication. Therefore, for CPU-bound tasks, I use multiprocessing or concurrent.futures.ProcessPoolExecutor, which spawns separate operating system processes with dedicated memory spaces and distinct GILs. Conversely, for I/O-bound tasks like web scraping or calling microservice APIs, Python threads automatically release the GIL while waiting for network responses; here, I use asyncio or aiohttp, which scales to tens of thousands of concurrent connections using an event loop with minimal OS context-switching overhead.',
    minimumRequirements: 'Must define the GIL, contrast CPU-bound vs I/O-bound behavior, and clarify when multiprocessing versus asyncio should be selected.',
    blueprint5Step: [
      'Define the runtime mutex: Clarify that the GIL protects CPython reference counts from concurrent memory corruption.',
      'Distinguish execution workloads: Recognize that CPU-bound tasks are throttled by the GIL, whereas I/O operations release it.',
      'Select multiprocessing for CPU work: Spawn ProcessPoolExecutor workers with independent memory spaces across multi-core processors.',
      'Leverage asyncio for I/O scalability: Utilize cooperative event loops to manage thousands of concurrent network requests without thread overhead.',
      'Benchmark with production profilers: Use cProfile or PySpy to measure real GIL contention before selecting concurrency models.'
    ]
  }
};

/**
 * Normalizes question text and matches it to a rubric reference
 */
export function findQuestionRubric(questionText: string, role?: string): QuestionRubric {
  const q = questionText.toLowerCase();

  if (q.includes('missing') || q.includes('dirty data') || q.includes('imputation')) {
    return QUESTION_RUBRICS['missing-dirty-data'];
  }
  if (q.includes('mau') || q.includes('monthly active users') || q.includes('dropped by 12%')) {
    return QUESTION_RUBRICS['mau-drop'];
  }
  if (q.includes('bias-variance') || q.includes('bias variance') || q.includes('overfitting')) {
    return QUESTION_RUBRICS['bias-variance'];
  }
  if (q.includes('authentication') || q.includes('auth system') || q.includes('jwt') || q.includes('session')) {
    return QUESTION_RUBRICS['auth-system'];
  }
  if (q.includes('spark') || q.includes('skew') || q.includes('shuffle')) {
    return QUESTION_RUBRICS['spark-skew'];
  }
  if (q.includes('rate limit') || q.includes('rate limiter') || q.includes('token bucket')) {
    return QUESTION_RUBRICS['rate-limiter'];
  }
  if (q.includes('core web vitals') || q.includes('vitals') || q.includes('lcp') || q.includes('cls') || q.includes('inp')) {
    return QUESTION_RUBRICS['web-vitals'];
  }
  if (q.includes('payment') || q.includes('transaction') || q.includes('isolation') || q.includes('concurrency')) {
    return QUESTION_RUBRICS['payment-transaction'];
  }
  if (q.includes('gil') || q.includes('global interpreter lock') || q.includes('asyncio')) {
    return QUESTION_RUBRICS['python-gil'];
  }

  // Dynamic fallback rubric for questions without static lookup
  const cleanQ = questionText.trim();
  const inferredRole = role || 'Software & Data Engineer';
  return {
    id: `dyn-q-${Date.now()}`,
    question: cleanQ,
    role: inferredRole,
    category: 'Technical Interview',
    intent: `Assess candidate domain competencies, problem decomposition, technical rigor, and architectural trade-offs for: "${cleanQ}".`,
    expectedConcepts: [
      'direct explanation addressing the specific prompt',
      'technical methodology and step-by-step implementation',
      'trade-offs, constraints, and alternative approaches considered',
      'verification, error handling, and production best practices'
    ],
    importantKeywords: cleanQ.toLowerCase().split(/\W+/).filter(w => w.length > 4),
    correctTechnicalApproach: `Structure the answer clearly: 1) Clarify requirements, 2) Explain technical implementation, 3) Analyze trade-offs, 4) Detail production verification.`,
    commonIncorrectApproaches: [
      'Submitting random characters, repetitive words, or completely unrelated sentences',
      'Providing vague generalities without technical substance',
      'Inventing non-existent metrics or frameworks'
    ],
    idealAnswer: `To address "${cleanQ}", an exemplary response begins by diagnosing the root constraints and business requirements. Next, articulate the architectural or algorithmic methodology step-by-step, contrasting trade-offs against alternative solutions. Conclude by addressing edge cases, scalability bottlenecks, and verification protocols in production.`,
    minimumRequirements: `Must directly address the core concepts of "${cleanQ}" with logical technical flow.`,
    blueprint5Step: [
      `Directly address the prompt: Define the core mechanism and state your technical thesis upfront.`,
      `Structure implementation steps: Break the solution into an orderly, reproducible sequence.`,
      `Evaluate trade-offs: Compare your chosen methodology against alternative technical approaches.`,
      `Address failure modes: Detail how to handle edge cases, scale constraints, and security risks.`,
      `Validate outcomes: Establish clear verification benchmarks and measurable success criteria.`
    ]
  };
}

/**
 * Strict Anti-Gibberish and Nonsense Answer Detection
 */
export function detectNonsenseOrInvalid(
  question: string,
  answer: string,
  rubric: QuestionRubric
): {
  isInvalid: boolean;
  score: number;
  reason: string;
  severity: 'empty' | 'gibberish' | 'repetitive' | 'unrelated' | 'too_short' | 'none';
} {
  const trimmed = answer.trim();

  // 1. Empty or whitespace
  if (!trimmed) {
    return {
      isInvalid: true,
      score: 0,
      reason: 'Please provide an answer before submitting.',
      severity: 'empty'
    };
  }

  // 2. Extremely short answer (< 12 chars or < 3 words)
  const words = trimmed.split(/\s+/).filter(Boolean);
  if (trimmed.length < 12 || words.length < 3) {
    return {
      isInvalid: true,
      score: 5,
      reason: 'The response is too brief to demonstrate technical competence or address the interview question.',
      severity: 'too_short'
    };
  }

  const lower = trimmed.toLowerCase();

  // 3. Known keyboard smashes or consonant-cluster nonsense (e.g. "wbdu fbiwqb", "asdfgh", "qwerty")
  const smashPatterns = [
    /\b[bcdfghjklmnpqrstvwxyz]{5,}\b/i, // 5+ consecutive consonants with no vowels
    /\b(wbdu|fbiwqb|asdf|qwerty|zxcv|hjkl|jklm|poiuy|lkjhg)\b/i,
    /^[0-9\s!@#$%^&*()_+=\-[\]{};':",.<>?/\\|`~]+$/ // Only numbers/symbols
  ];
  for (const pat of smashPatterns) {
    if (pat.test(lower)) {
      return {
        isInvalid: true,
        score: 0,
        reason: 'The response contains nonsensical keyboard characters and does not demonstrate understanding of the question.',
        severity: 'gibberish'
      };
    }
  }

  // 4. Repeated character or token spam (e.g. "aaaa", "hello hello hello", "xyz xyz xyz", "12345 12345")
  const repeatedChar = /(.)\1{4,}/;
  if (repeatedChar.test(lower)) {
    return {
      isInvalid: true,
      score: 5,
      reason: 'The response contains repeated character sequences and fails to provide a meaningful technical explanation.',
      severity: 'repetitive'
    };
  }

  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  if (words.length >= 4 && uniqueWords.size <= Math.ceil(words.length * 0.35)) {
    return {
      isInvalid: true,
      score: 5,
      reason: 'The response is highly repetitive and contains no substantive technical reasoning.',
      severity: 'repetitive'
    };
  }

  // 5. Check dictionary / vocabulary validity
  // If words consist primarily of unpronounceable nonsense (no vowels or zero English recognition)
  let validWordCount = 0;
  const commonEnglishVowels = /[aeiouy]/i;
  for (const word of words) {
    if (word.length <= 1) continue;
    // Word must contain at least one vowel sound unless standard acronym (e.g. SQL, ML, AWS, PR, HR)
    if (commonEnglishVowels.test(word) || /^(sql|ml|aws|pr|hr|db|ip|id|ui|ux|io|cd|ci|qa)$/i.test(word)) {
      validWordCount++;
    }
  }

  if (validWordCount / words.length < 0.4) {
    return {
      isInvalid: true,
      score: 0,
      reason: 'The response does not contain recognizable technical or English terminology.',
      severity: 'gibberish'
    };
  }

  // 6. Semantic Relevance Check
  // Check if answer touches the specific technical methodology of the question rubric
  // DO NOT SCORE KEYWORD PRESENCE ALONE: e.g. "I like Python and Excel" for missing data must fail
  const questionKeywords = rubric.importantKeywords.concat(
    rubric.question.toLowerCase().split(/\W+/).filter(w => w.length > 3)
  );

  let relevanceMatches = 0;
  for (const kw of questionKeywords) {
    if (lower.includes(kw.toLowerCase())) {
      relevanceMatches++;
    }
  }

  // Check if any expected technical concept keywords actually appear
  let conceptHits = 0;
  for (const concept of rubric.expectedConcepts) {
    const keyTerms = concept.toLowerCase().split(/\W+/).filter(w => w.length > 4);
    if (keyTerms.some(t => lower.includes(t))) {
      conceptHits++;
    }
  }

  // If answer contains words, but is totally unrelated or only mentions generic keywords without answering the prompt:
  // e.g. "I like Python and Excel" for "How do you handle missing data?"
  const isGenericOffTopic = relevanceMatches === 0 && conceptHits === 0;

  // Answers that mention 1-2 generic terms without touching core concepts or answering the question
  const isSuperficialKeywordOnly =
    conceptHits === 0 &&
    words.length <= 15 &&
    !/(missing|imputation|median|dropna|null|skew|jwt|cookie|hash|spark|lcp|cls|acid|lock|gil)/i.test(lower);

  if (isGenericOffTopic || isSuperficialKeywordOnly) {
    return {
      isInvalid: true,
      score: 8,
      reason: `The response does not demonstrate understanding of ${rubric.question} or ${rubric.role} methodologies. Mentioning general tool names without answering the technical question is insufficient.`,
      severity: 'unrelated'
    };
  }

  return {
    isInvalid: false,
    score: 0,
    reason: '',
    severity: 'none'
  };
}

/**
 * Deterministic, strict local semantic evaluation engine
 * Used as primary fallback or direct evaluator to ensure no random 80% scores for nonsense
 */
export function evaluateInterviewLocally(
  question: string,
  answer: string,
  jobRole: string,
  interviewType: string,
  experienceLevel: string = 'Mid',
  voiceMetrics?: { wpm?: number | null; confidence?: number | null; durationSec?: number | null; liveVolume?: number | null } | null
): AiEvaluationResult {
  const rubric = findQuestionRubric(question, jobRole);
  const validation = detectNonsenseOrInvalid(question, answer, rubric);

  // If flagged as nonsense, gibberish, or completely unrelated:
  if (validation.isInvalid) {
    return {
      score: validation.score,
      rubricScores: {
        technicalAccuracy: Math.min(validation.score, 5),
        relevance: Math.min(validation.score, 5),
        completeness: Math.min(validation.score, 5),
        problemSolving: Math.min(validation.score, 5),
        communication: validation.severity === 'unrelated' ? 18 : 5,
        deliveryPace: voiceMetrics?.wpm ? Math.min(voiceMetrics.wpm, 70) : null
      },
      rubricFeedback: {
        technicalAccuracy: `0% Technical Accuracy: ${validation.reason}`,
        relevance: `0% Relevance: The submission does not address the question intent.`,
        completeness: `0% Completeness: Essential engineering concepts are entirely absent.`,
        problemSolving: `0% Problem Solving: No structured problem-solving or methodology was provided.`,
        communication: validation.severity === 'unrelated' ? 'Grammatically formed, but irrelevant to the technical prompt.' : 'No coherent communication demonstrated.',
        deliveryPace: voiceMetrics?.wpm ? `Spoken at ${voiceMetrics.wpm} WPM.` : 'Voice delivery analysis was unavailable for this attempt.'
      },
      strengths: [
        'No substantive technical content provided to evaluate.'
      ],
      improvements: [
        `Directly answer the question: Address ${rubric.question}.`,
        `Cover key concepts: ${rubric.expectedConcepts.slice(0, 3).join(', ')}.`,
        `Review the Ideal Answer below to understand the expected hiring bar standard.`
      ],
      technicalAccuracy: validation.reason,
      communicationFeedback: 'Provide a structured, relevant response demonstrating domain competence.',
      modelAnswer: rubric.idealAnswer,
      betterWayToAnswer: rubric.correctTechnicalApproach,
      blueprint5Step: rubric.blueprint5Step,
      isNonsenseOrUnrelated: true,
      deliveryAnalysisAvailable: Boolean(voiceMetrics?.wpm),
      hireRecommendation: 'Needs More Practice'
    };
  }

  // Genuine Answer Evaluation
  const lower = answer.toLowerCase();
  const words = answer.trim().split(/\s+/).length;

  // 1. Concept Coverage (0 - 100)
  let conceptHits = 0;
  for (const concept of rubric.expectedConcepts) {
    const keyTerms = concept.toLowerCase().split(/\W+/).filter(w => w.length > 3);
    const matches = keyTerms.filter(t => lower.includes(t));
    if (matches.length >= 1) {
      conceptHits++;
    }
  }
  const conceptRatio = Math.min(conceptHits / Math.max(rubric.expectedConcepts.length * 0.7, 1), 1.0);

  // 2. Keyword presence
  let keywordHits = 0;
  for (const kw of rubric.importantKeywords) {
    if (lower.includes(kw.toLowerCase())) keywordHits++;
  }
  const keywordRatio = Math.min(keywordHits / Math.max(rubric.importantKeywords.length * 0.35, 1), 1.0);

  // 3. Technical Accuracy Score
  // Heavily weighted on concept coverage + technical precision + semantic depth
  let technicalAccuracy = Math.round(conceptRatio * 55 + keywordRatio * 35 + (words >= 35 ? 10 : (words / 35) * 10));
  technicalAccuracy = Math.max(Math.min(technicalAccuracy, 98), 25);

  // 4. Relevance Score
  let relevance = Math.round(conceptRatio * 50 + keywordRatio * 35 + 15);
  relevance = Math.max(Math.min(relevance, 98), 30);

  // 5. Completeness Score
  let completeness = Math.round(conceptRatio * 65 + (words >= 45 ? 35 : (words / 45) * 35));
  completeness = Math.max(Math.min(completeness, 96), 20);

  // 6. Problem Solving Score
  const hasMethodology = /(first|second|then|finally|because|process|step|method|evaluate|validate|mitigate|depend|impact|determine)/i.test(answer);
  let problemSolving = Math.round(conceptRatio * 45 + (hasMethodology ? 40 : 15) + (keywordRatio * 15));
  problemSolving = Math.max(Math.min(problemSolving, 96), 25);

  // 7. Communication Score
  const hasStructure = answer.includes('.') && answer.split('.').length >= 3;
  let communication = Math.round(60 + (hasStructure ? 25 : 10) + (words >= 35 && words <= 200 ? 15 : 5));
  communication = Math.max(Math.min(communication, 98), 40);

  // 8. Delivery & Pace Score (Strictly from real voice data, otherwise null)
  let deliveryPace: number | null = null;
  let deliveryPaceFeedback = 'Voice delivery analysis was unavailable for this attempt.';

  if (voiceMetrics && typeof voiceMetrics.wpm === 'number' && voiceMetrics.wpm > 0) {
    const wpm = voiceMetrics.wpm;
    if (wpm >= 120 && wpm <= 160) {
      deliveryPace = 92;
      deliveryPaceFeedback = `Optimal speaking cadence at ${wpm} WPM. Speech delivery projected executive composure and clear articulation.`;
    } else if (wpm >= 90 && wpm < 120) {
      deliveryPace = 80;
      deliveryPaceFeedback = `Speaking pace was slightly deliberate at ${wpm} WPM. Content was clear, but aiming for 130-150 WPM will convey greater fluency.`;
    } else if (wpm > 160 && wpm <= 190) {
      deliveryPace = 78;
      deliveryPaceFeedback = `Fast speaking pace at ${wpm} WPM. Remember to pause 1 second between key bullet points to give the interviewer time to absorb your points.`;
    } else {
      deliveryPace = 65;
      deliveryPaceFeedback = `Speaking pace of ${wpm} WPM was outside the typical 120-160 WPM interview benchmark.`;
    }
  }

  // 9. Overall Score: Based primarily on actual correctness, relevance, and completeness
  const overallScore = Math.round(
    technicalAccuracy * 0.35 +
    relevance * 0.25 +
    completeness * 0.20 +
    problemSolving * 0.20
  );

  // Identify what candidate did well (strictly from their actual text, NO INVENTED NUMBERS)
  const strengths: string[] = [];
  if (relevance >= 70) {
    strengths.push(`Directly addressed the core requirements of ${rubric.category}.`);
  }
  if (conceptHits >= 2) {
    strengths.push(`Accurately identified essential technical concepts (${rubric.expectedConcepts.slice(0, 2).join(', ')}).`);
  }
  if (hasMethodology) {
    strengths.push('Demonstrated structured, sequential technical reasoning.');
  }
  if (strengths.length === 0) {
    strengths.push('Demonstrated basic conversational engagement with the interview question.');
  }

  // Identify specific missing points from the rubric
  const missingConcepts = rubric.expectedConcepts.filter(c => {
    const keyTerms = c.toLowerCase().split(/\W+/).filter(w => w.length > 3);
    return !keyTerms.some(t => lower.includes(t));
  });

  const improvements: string[] = [];
  if (missingConcepts.length > 0) {
    improvements.push(`Incorporate explicit coverage of: ${missingConcepts.slice(0, 2).join('; ')}.`);
  }
  if (words < 45) {
    improvements.push('Expand on your technical implementation steps rather than providing a high-level summary.');
  }
  if (!/(validate|verify|test|metric|audit|check)/i.test(answer)) {
    improvements.push('Detail post-implementation validation or verification to prove data and system integrity.');
  }
  if (improvements.length === 0) {
    improvements.push('Discuss specific architectural or production trade-offs considered prior to choosing this solution.');
  }

  let hireRecommendation: 'Strong Hire' | 'Hire' | 'Lean Hire' | 'Needs More Practice' = 'Needs More Practice';
  if (overallScore >= 85) hireRecommendation = 'Strong Hire';
  else if (overallScore >= 75) hireRecommendation = 'Hire';
  else if (overallScore >= 65) hireRecommendation = 'Lean Hire';

  return {
    score: overallScore,
    rubricScores: {
      technicalAccuracy,
      relevance,
      completeness,
      problemSolving,
      communication,
      deliveryPace
    },
    rubricFeedback: {
      technicalAccuracy: `${technicalAccuracy}% - ${technicalAccuracy >= 80 ? 'Strong conceptual correctness aligning with senior engineering standards.' : 'Demonstrates partial familiarity, but missed critical underlying technical mechanics.'}`,
      relevance: `${relevance}% - ${relevance >= 80 ? 'Directly targeted the interviewer’s specific question.' : 'Partially addressed the topic; tighten focus on the core prompt.'}`,
      completeness: `${completeness}% - Covered ${conceptHits} of ${rubric.expectedConcepts.length} expected core concepts.`,
      problemSolving: `${problemSolving}% - ${hasMethodology ? 'Structured approach from identification to remediation.' : 'Needs clearer step-by-step problem diagnosis.'}`,
      communication: `${communication}% - ${hasStructure ? 'Clean syntax and logical paragraph flow.' : 'Could be improved with clear topic sentences and bullet-style clarity.'}`,
      deliveryPace: deliveryPaceFeedback
    },
    strengths,
    improvements,
    technicalAccuracy: `Candidate demonstrated ${technicalAccuracy}% technical accuracy on ${rubric.category}.`,
    communicationFeedback: `Structured communication with clear phrasing.`,
    modelAnswer: rubric.idealAnswer,
    betterWayToAnswer: rubric.correctTechnicalApproach,
    blueprint5Step: rubric.blueprint5Step,
    isNonsenseOrUnrelated: false,
    deliveryAnalysisAvailable: deliveryPace !== null,
    hireRecommendation
  };
}
