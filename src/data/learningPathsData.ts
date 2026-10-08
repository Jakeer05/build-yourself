export interface PathTopicItem {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  summary: string;
  conceptExplanation: string;
  beginnerExplanation: string;
  whyUseful: string;
  syntax: string;
  codeSnippet: string;
  lineByLineExplanation: string[];
  exampleOutput: string;
  commonMistakes: string[];
  bestPractices: string[];
  practicalExample: string;
  exercise: {
    title: string;
    instructions: string;
    starterCode: string;
    solutionCode: string;
    hints: string[];
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }[];
}

export interface DetailedLearningPath {
  id: string;
  category: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  topicsCount: number;
  estimatedHours: number;
  projects: string[];
  topics: PathTopicItem[];
}

export const webDevelopmentPaths: DetailedLearningPath[] = [
  {
    id: 'web-html',
    category: 'Web Development',
    title: 'HTML & Semantic Web Mastery',
    slug: 'html-mastery',
    tagline: 'From HTML basics, semantics, forms, and accessibility to SEO foundations.',
    description: 'Learn HTML from the ground up: document skeleton, headings, links, semantic structures, responsive pictures, accessible forms, and SEO meta tags.',
    icon: 'FileCode',
    topicsCount: 14,
    estimatedHours: 15,
    projects: ['Accessible Portfolio Website', 'Interactive Multi-Step Application Form', 'SEO-Optimized Tech Blog Article'],
    topics: [
      {
        id: 'html-basics',
        title: 'HTML Basics & Document Structure',
        level: 'Beginner',
        durationMinutes: 20,
        summary: 'Doctype, html, head, body, and character encoding.',
        conceptExplanation: 'HTML (HyperText Markup Language) defines the fundamental structure and content of all web pages.',
        beginnerExplanation: 'Think of HTML as the wooden skeleton of a house. Before you paint walls (CSS) or turn on lights (JS), you need the skeleton!',
        whyUseful: 'Every single website on earth is parsed from HTML documents.',
        syntax: '<!DOCTYPE html>\n<html lang="en">\n  <head>...</head>\n  <body>...</body>\n</html>',
        codeSnippet: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Build Yourself Student Portfolio</title>\n  </head>\n  <body>\n    <h1>Welcome to Build Yourself</h1>\n    <p>Empowering global tech & master's careers.</p>\n  </body>\n</html>`,
        lineByLineExplanation: [
          'Line 1: Tells browser this is a modern HTML5 document',
          'Line 2: Root element with English language attribute',
          'Line 3-5: Metadata including UTF-8 character encoding and page title',
          'Line 6-9: Body containing visible heading and paragraph'
        ],
        exampleOutput: 'Browser displays bold title "Welcome to Build Yourself" and descriptive text.',
        commonMistakes: ['Omitting DOCTYPE declaration causing quirks mode in old rendering engines'],
        bestPractices: ['Always declare <html lang="en"> for screen reader accessibility'],
        practicalExample: 'Bootstrapping new web pages for educational portfolios.',
        exercise: {
          title: 'Build Document Skeleton',
          instructions: 'Create an HTML5 document with title "My Learning Journey".',
          starterCode: '<!-- create html5 template -->',
          solutionCode: '<!DOCTYPE html>\n<html lang="en">\n<head><title>My Learning Journey</title></head>\n<body><h1>My Journey</h1></body>\n</html>',
          hints: ['Include DOCTYPE, html, head, and body tags']
        },
        quiz: [
          {
            question: 'What is the purpose of the <!DOCTYPE html> declaration?',
            options: ['Informs browser to render in standard HTML5 mode', 'Imports JavaScript libraries', 'Applies dark mode styles', 'Creates a database'],
            correctAnswerIndex: 0,
            explanation: 'DOCTYPE triggers standards mode rendering in modern web browsers.'
          }
        ]
      },
      {
        id: 'html-elements-attributes',
        title: 'HTML Elements, Tags & Attributes',
        level: 'Beginner',
        durationMinutes: 25,
        summary: 'Opening/closing tags, self-closing elements, attributes (class, id, href, src).',
        conceptExplanation: 'Elements consist of tags enclosing content, with attributes providing additional metadata and configuration.',
        beginnerExplanation: 'If the tag is a word, attributes are adjectives describing the word (e.g. href="url" tells a link where to go)!',
        whyUseful: 'Allows elements to link, embed media, and be targeted by CSS and JavaScript.',
        syntax: '<tag attribute="value">Content</tag>',
        codeSnippet: `<a href="https://buildyourself.org" target="_blank" rel="noopener noreferrer" class="cta-link">\n  Explore Career Roadmaps\n</a>`,
        lineByLineExplanation: [
          'Line 1: <a> tag with href destination, target to open new tab, security rel attribute, and styling class',
          'Line 2: Anchor text visible to user'
        ],
        exampleOutput: 'Clickable link that opens destination in a secure new browser tab.',
        commonMistakes: ['Forgetting quotes around attribute values', 'Using target="_blank" without rel="noopener noreferrer"'],
        bestPractices: ['Always close non-void elements', 'Use lowercase for all tag and attribute names'],
        practicalExample: 'Linking students directly to course certificates.',
        exercise: {
          title: 'Create External Link with Security Attributes',
          instructions: 'Create a link to https://github.com with target="_blank" and rel="noopener".',
          starterCode: '<!-- write anchor tag -->',
          solutionCode: '<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>',
          hints: ['Include href, target, and rel']
        },
        quiz: [
          {
            question: 'Why is rel="noopener noreferrer" essential when using target="_blank"?',
            options: ['Prevents malicious reverse tabnabbing and window.opener exploits', 'Makes the link load twice as fast', 'Changes the color to purple', 'Required for Google AdSense'],
            correctAnswerIndex: 0,
            explanation: 'rel="noopener" prevents the newly opened tab from accessing the originating window via window.opener.'
          }
        ]
      },
      {
        id: 'html-semantic',
        title: 'Semantic HTML & Accessibility (a11y)',
        level: 'Intermediate',
        durationMinutes: 30,
        summary: 'header, nav, main, section, article, aside, footer, and ARIA roles.',
        conceptExplanation: 'Semantic HTML uses tags that convey the meaning and purpose of content to both developers, search engines, and screen readers.',
        beginnerExplanation: 'Instead of using generic <div> boxes for everything, using <nav> tells screen readers "This is the menu", and <main> says "This is the primary lesson"!',
        whyUseful: 'Crucial for blind and visually impaired students using screen readers, and dramatically boosts SEO ranking.',
        syntax: '<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>',
        codeSnippet: `<header>\n  <h1>Build Yourself</h1>\n  <nav aria-label="Main Navigation">\n    <a href="/courses">Courses</a>\n    <a href="/roadmaps">Roadmaps</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Python Masterclass</h2>\n    <p>Lesson 1: Variables</p>\n  </article>\n</main>`,
        lineByLineExplanation: ['Line 1: Header landmark', 'Line 3: Accessible navigation container', 'Line 8: Main content landmark', 'Line 9: Self-contained article element'],
        exampleOutput: 'Clean, accessible document tree navigated effortlessly by assistive tools.',
        commonMistakes: ['"Div soup" (nesting 20 generic div elements instead of semantic tags)'],
        bestPractices: ['Have only one <main> element per page', 'Ensure proper heading hierarchy (h1 -> h2 -> h3) without skipping levels'],
        practicalExample: 'Designing inclusive educational software compliant with WCAG 2.1 AA.',
        exercise: {
          title: 'Structure Semantic Article',
          instructions: 'Wrap title in header, content in article, and author notes in footer.',
          starterCode: '<!-- create semantic article structure -->',
          solutionCode: '<article>\n  <header><h2>Web Architecture</h2></header>\n  <p>Content goes here.</p>\n  <footer><p>By Jakeer</p></footer>\n</article>',
          hints: ['Use <article>, <header>, and <footer>']
        },
        quiz: [
          {
            question: 'Which element represents the dominant content area of the <body>?',
            options: ['<main>', '<section>', '<content>', '<div id="main">'],
            correctAnswerIndex: 0,
            explanation: '<main> is the standard HTML5 landmark representing the primary content of the document.'
          }
        ]
      },
      {
        id: 'html-forms',
        title: 'HTML Forms, Inputs & Client Validation',
        level: 'Intermediate',
        durationMinutes: 35,
        summary: 'input types, labels, fieldsets, required, pattern, validation, and accessibility.',
        conceptExplanation: 'Forms collect user data and transmit it to backend servers via HTTP POST or GET methods.',
        beginnerExplanation: 'Think of filling out an admissions application. The form provides fields for your name, email, and target country, ensuring you don’t leave required questions blank!',
        whyUseful: 'Enables user registration, logins, survey checks, and interactive data submission.',
        syntax: '<form action="/api/submit" method="POST">\n  <label for="id">Name</label>\n  <input id="id" required />\n</form>',
        codeSnippet: `<form action="/api/enroll" method="POST">\n  <label for="email">Student Email:</label>\n  <input type="email" id="email" name="email" required placeholder="jakeer@example.com">\n  \n  <label for="country">Target Country:</label>\n  <select id="country" name="country">\n    <option value="de">Germany</option>\n    <option value="us">United States</option>\n  </select>\n  \n  <button type="submit">Submit Application</button>\n</form>`,
        lineByLineExplanation: ['Line 1: Form container with endpoint and method', 'Line 2-3: Accessible label bound to email input via id="email"', 'Line 5-8: Dropdown select element', 'Line 10: Submit button'],
        exampleOutput: 'Interactive, validated submission form with built-in email formatting verification.',
        commonMistakes: ['Omitting <label> elements or failing to link labels with matching input `id` attributes'],
        bestPractices: ['Always use appropriate input types (email, tel, number, date) for native mobile keyboard layouts'],
        practicalExample: 'Capturing user credentials and university admissions applications.',
        exercise: {
          title: 'Create Accessible Input',
          instructions: 'Bind label to input using matching `for` and `id` attributes.',
          starterCode: '<!-- create label and text input -->',
          solutionCode: '<label for="student-name">Full Name:</label>\n<input type="text" id="student-name" name="name" required />',
          hints: ['label for matches input id']
        },
        quiz: [
          {
            question: 'Why should every input element have an associated <label>?',
            options: ['Screen readers announce the label when the input is focused, and clicking the label focuses the input', 'It makes the font bolder', 'It stores data in cookies', 'It is required by CSS'],
            correctAnswerIndex: 0,
            explanation: 'Labels provide critical accessibility context and expand clickable hit-targets on mobile touchscreens.'
          }
        ]
      }
    ]
  },
  {
    id: 'web-css',
    category: 'Web Development',
    title: 'CSS3, Modern Layouts & Responsive Design',
    slug: 'css-mastery',
    tagline: 'Selectors, Box Model, Flexbox, CSS Grid, animations, and modern media queries.',
    description: 'Master visual presentation: specificity, box-sizing, typography, CSS Flexbox, Grid, transitions, keyframe animations, and container queries.',
    icon: 'Palette',
    topicsCount: 12,
    estimatedHours: 18,
    projects: ['Cosmic Glassmorphic Dashboard UI', 'Responsive Magazine Grid Layout', 'CSS Keyframe Animation Showcase'],
    topics: [
      {
        id: 'css-box-model',
        title: 'CSS Box Model & Specificity',
        level: 'Beginner',
        durationMinutes: 25,
        summary: 'Content, padding, border, margin, and box-sizing: border-box.',
        conceptExplanation: 'Every element rendered in a browser is enclosed within a rectangular box consisting of content, padding, border, and margin.',
        beginnerExplanation: 'Think of framing a picture. The photo is Content. The white matting around it is Padding. The wooden frame is Border. The empty wall space around the frame is Margin!',
        whyUseful: 'Precise spacing, element alignment, and avoiding layout overflow bugs.',
        syntax: 'box-sizing: border-box;\npadding: 16px;\nmargin: 24px;',
        codeSnippet: `* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n  margin: 16px auto;\n  background: #0f172a;\n  border-radius: 16px;\n}`,
        lineByLineExplanation: ['Line 1-4: Universal reset enforcing border-box sizing', 'Line 7: Fixed width including padding and border', 'Line 10: Centers card horizontally with auto margin'],
        exampleOutput: 'Clean, padded glassmorphic card perfectly centered on screen.',
        commonMistakes: ['Leaving default content-box where padding adds to element width, causing page blowout'],
        bestPractices: ['Apply `*, *::before, *::after { box-sizing: border-box; }` to all web projects'],
        practicalExample: 'Constructing predictable cards in dashboard grids.',
        exercise: {
          title: 'Enforce Border-Box Sizing',
          instructions: 'Write CSS rule for .container with padding 20px and border-box sizing.',
          starterCode: '/* write CSS rule */',
          solutionCode: '.container {\n  box-sizing: border-box;\n  padding: 20px;\n}',
          hints: ['Use box-sizing property']
        },
        quiz: [
          {
            question: 'With box-sizing: border-box, what constitutes the total rendered width?',
            options: ['content + padding + border', 'content only (padding adds extra)', 'margin only', 'browser window width'],
            correctAnswerIndex: 0,
            explanation: 'border-box includes padding and border within the declared width/height.'
          }
        ]
      },
      {
        id: 'css-flexbox',
        title: 'CSS Flexbox (One-Dimensional Layouts)',
        level: 'Intermediate',
        durationMinutes: 30,
        summary: 'justify-content, align-items, flex-direction, gap, flex-wrap, and flex-grow.',
        conceptExplanation: 'Flexbox arranges elements along a single axis (row or column) with flexible sizing, automatic distribution, and alignment.',
        beginnerExplanation: 'Think of arranging books on a shelf. Flexbox lets you space them out evenly, center them, or flip the shelf vertically with one line of code!',
        whyUseful: 'Simplifies centering, navbars, button groups, and fluid responsive toolbars.',
        syntax: 'display: flex;\njustify-content: space-between;\nalign-items: center;',
        codeSnippet: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  gap: 16px;\n}`,
        lineByLineExplanation: ['Line 2: Turns container into flex formatting context', 'Line 3: Pushes logo to left and navigation links to right', 'Line 4: Centers items vertically along cross-axis', 'Line 6: Consistent spacing between child elements'],
        exampleOutput: 'Modern, balanced navbar with logo on the far left and menu items on the far right.',
        commonMistakes: ['Trying to use Flexbox for full 2-dimensional page grids instead of CSS Grid'],
        bestPractices: ['Use the `gap` property instead of margin hacks on child elements'],
        practicalExample: 'Building responsive navigation bars and card header layouts.',
        exercise: {
          title: 'Center Element Perfectly',
          instructions: 'Center a child inside a container vertically and horizontally using flexbox.',
          starterCode: '.center-box {\n  /* add flex rules */\n}',
          solutionCode: '.center-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
          hints: ['display: flex, justify-content: center, align-items: center']
        },
        quiz: [
          {
            question: 'Which property aligns flex items along the cross-axis (perpendicular to main axis)?',
            options: ['align-items', 'justify-content', 'flex-direction', 'gap'],
            correctAnswerIndex: 0,
            explanation: 'align-items controls cross-axis alignment, while justify-content controls main-axis alignment.'
          }
        ]
      },
      {
        id: 'css-grid',
        title: 'CSS Grid (Two-Dimensional Layouts)',
        level: 'Intermediate',
        durationMinutes: 35,
        summary: 'grid-template-columns, fr units, repeat, auto-fit, minmax, and grid-area.',
        conceptExplanation: 'CSS Grid is a 2-dimensional layout engine capable of orchestrating both rows and columns simultaneously.',
        beginnerExplanation: 'Think of a newspaper or chessboard. Grid lets you define exact rows and columns, placing headlines across 3 columns and photos in 1 column!',
        whyUseful: 'Creates responsive dashboard layouts that automatically adapt to any screen width without media queries.',
        syntax: 'display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 20px;',
        codeSnippet: `.course-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  padding: 24px;\n}`,
        lineByLineExplanation: ['Line 2: Activates CSS grid', 'Line 3: Automatically fits as many 280px minimum columns as the screen width permits, expanding to fill remaining fractional space (1fr)', 'Line 4: Uniform gutters between cards'],
        exampleOutput: 'Flawlessly responsive cards that reorganize from 4 columns on desktop to 1 column on mobile phones.',
        commonMistakes: ['Hardcoding column pixel widths causing horizontal scrollbars on mobile'],
        bestPractices: ['Use `minmax()` and `auto-fit` for fluid layouts without media queries'],
        practicalExample: 'Constructing Build Yourself course catalogs and university grid displays.',
        exercise: {
          title: 'Create Auto-Fit Grid',
          instructions: 'Write a 3-column grid template using fractional units (1fr).',
          starterCode: '.grid-container {\n  display: grid;\n  /* 3 equal columns */\n}',
          solutionCode: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}',
          hints: ['Use repeat(3, 1fr)']
        },
        quiz: [
          {
            question: 'What does "1fr" represent in CSS Grid?',
            options: ['One fraction of the available free space in the grid container', 'One frame per second', 'One fixed resolution point', 'One font root unit'],
            correctAnswerIndex: 0,
            explanation: 'The fr unit represents a fraction of the remaining free space in the grid container.'
          }
        ]
      }
    ]
  },
  {
    id: 'web-react',
    category: 'Web Development',
    title: 'React 19 & Component Architecture',
    slug: 'react-mastery',
    tagline: 'Components, JSX, Props, State, Hooks, Context, Performance, and Testing.',
    description: 'Master modern declarative user interfaces: functional components, reactive hooks (useState, useEffect, useMemo, useCallback), Context API, and clean state composition.',
    icon: 'Atom',
    topicsCount: 14,
    estimatedHours: 24,
    projects: ['Interactive Real-Time Learning Platform', 'Multi-Step Checkout Flow with Context', 'Performance Profiler Dashboard'],
    topics: [
      {
        id: 'react-components-jsx',
        title: 'React Components, JSX & Props',
        level: 'Beginner',
        durationMinutes: 30,
        summary: 'Functional components, JSX syntax, passing props, destructuring, and unidirectional data flow.',
        conceptExplanation: 'React components are pure JavaScript functions that accept props (inputs) and return JSX describing what should appear on screen.',
        beginnerExplanation: 'Think of custom HTML tags. Instead of writing 50 lines of button code every time, you create a `<CourseCard title="Python" />` and reuse it everywhere!',
        whyUseful: 'Enables high reusability, testability, and clean code separation.',
        syntax: 'function Component(props) { return <div>{props.text}</div>; }',
        codeSnippet: `interface BadgeProps {\n  label: string;\n  xp: number;\n}\n\nexport function XpBadge({ label, xp }: BadgeProps) {\n  return (\n    <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold">\n      <span>{label}</span>\n      <span>+{xp} XP</span>\n    </div>\n  );\n}`,
        lineByLineExplanation: ['Line 1-4: TypeScript props contract', 'Line 6: Component with destructured props', 'Line 8-11: Declarative JSX using Tailwind styling and JavaScript expressions in curly braces `{}`'],
        exampleOutput: 'Reusable cyan glassmorphic badge showing "+50 XP".',
        commonMistakes: ['Attempting to mutate props directly (props are strictly read-only)'],
        bestPractices: ['Keep components small, pure, and focused on a single visual responsibility'],
        practicalExample: 'Rendering student XP counters and course cards across Build Yourself.',
        exercise: {
          title: 'Create Greeting Component',
          instructions: 'Build a component that displays "Welcome back, {name}!".',
          starterCode: 'export function Greeting({ name }) {\n  // return JSX\n}',
          solutionCode: 'export function Greeting({ name }: { name: string }) {\n  return <h2>Welcome back, {name}!</h2>;\n}',
          hints: ['Wrap {name} inside heading']
        },
        quiz: [
          {
            question: 'Can a child component directly modify the props it receives from its parent?',
            options: ['No, props are strictly immutable and read-only in React', 'Yes, by calling props.update()', 'Yes, if using TypeScript', 'Only in development mode'],
            correctAnswerIndex: 0,
            explanation: 'React enforces unidirectional data flow; props are immutable inputs.'
          }
        ]
      },
      {
        id: 'react-state-hooks',
        title: 'State Management with useState & useEffect',
        level: 'Intermediate',
        durationMinutes: 35,
        summary: 'Reactive state, setter functions, side effects, dependency arrays, and cleanup functions.',
        conceptExplanation: 'useState triggers component re-renders when state changes. useEffect synchronizes external systems with React state.',
        beginnerExplanation: 'State is the component’s memory. If a student marks a lesson done, state remembers that decision and immediately updates the UI!',
        whyUseful: 'Enables interactive user interfaces that update instantly without full page reloads.',
        syntax: 'const [state, setState] = useState(initialValue);',
        codeSnippet: `import { useState, useEffect } from 'react';\n\nexport function DailyStudyTimer() {\n  const [seconds, setSeconds] = useState(0);\n  const [isActive, setIsActive] = useState(false);\n\n  useEffect(() => {\n    if (!isActive) return;\n    const interval = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(interval); // cleanup!\n  }, [isActive]);\n\n  return (\n    <div>\n      <span>Study Time: {seconds}s</span>\n      <button onClick={() => setIsActive(!isActive)}>\n        {isActive ? 'Pause' : 'Start'}\n      </button>\n    </div>\n  );\n}`,
        lineByLineExplanation: ['Line 4-5: State declarations', 'Line 7-11: Effect hook running timer interval, returning cleanup function to prevent memory leaks', 'Line 13-19: Reactive button and display'],
        exampleOutput: 'Interactive timer ticking upward every second with pause/resume functionality.',
        commonMistakes: ['Forgetting cleanup functions in useEffect, creating interval memory leaks', 'Mutating state directly (e.g. `state.count++`)'],
        bestPractices: ['Always use functional state updates when next state depends on previous state (`setCount(c => c + 1)`)'],
        practicalExample: 'Tracking student learning session duration and real-time exam countdowns.',
        exercise: {
          title: 'Toggle Boolean State',
          instructions: 'Create a button that toggles between "Mark Done" and "Completed ✓".',
          starterCode: 'const [done, setDone] = useState(false);\n// return button',
          solutionCode: 'const [done, setDone] = useState(false);\nreturn <button onClick={() => setDone(!done)}>{done ? "Completed ✓" : "Mark Done"}</button>;',
          hints: ['Toggle with !done']
        },
        quiz: [
          {
            question: 'When does the cleanup function returned by useEffect execute?',
            options: ['Before the component unmounts and before the effect re-runs on dependency changes', 'Only when the browser tab closes', 'Every millisecond', 'Never in production'],
            correctAnswerIndex: 0,
            explanation: 'Effect cleanup runs prior to re-execution and on component unmounting.'
          }
        ]
      }
    ]
  }
];

export const dataAnalyticsPaths: DetailedLearningPath[] = [
  {
    id: 'data-sql',
    category: 'Data',
    title: 'Enterprise SQL & Relational Databases',
    slug: 'sql-analytics',
    tagline: 'Joins, Aggregations, Subqueries, CTEs, Window Functions, and Indexing.',
    description: 'Master relational database querying from basic SELECT statements to high-performance analytics with Window functions, CTEs, and query plan optimization.',
    icon: 'Database',
    topicsCount: 14,
    estimatedHours: 20,
    projects: ['Customer Churn & Cohort Retention Engine', 'Executive E-Commerce Sales Pipeline', 'Hospital Capacity SQL Audit'],
    topics: [
      {
        id: 'sql-select-where',
        title: 'SELECT, WHERE & Filtering Data',
        level: 'Beginner',
        durationMinutes: 25,
        summary: 'Extracting columns, filtering conditions, LIKE, BETWEEN, IN, and NULL handling.',
        conceptExplanation: 'SQL (Structured Query Language) is the declarative language used to query and manage relational database records.',
        beginnerExplanation: 'Like filtering a giant spreadsheet: "Show me student name and country where study streak > 5 days and country is Germany".',
        whyUseful: '95% of data analytics tasks start with extracting filtered data from SQL databases.',
        syntax: 'SELECT column1, column2 FROM table WHERE condition;',
        codeSnippet: `SELECT \n    student_id, \n    full_name, \n    xp, \n    target_career\nFROM students\nWHERE streak_days >= 5 AND target_country = 'Germany'\nORDER BY xp DESC\nLIMIT 10;`,
        lineByLineExplanation: ['Line 1-5: Specifies exact columns to retrieve', 'Line 6: Source table', 'Line 7: Filtering criteria chaining AND condition', 'Line 8: Sorts from highest to lowest XP', 'Line 9: Restricts results to top 10 rows'],
        exampleOutput: 'Table of top 10 highest-XP students studying for German master’s.',
        commonMistakes: ['Comparing NULL with `=` instead of using `IS NULL` or `IS NOT NULL`'],
        bestPractices: ['Avoid `SELECT *` in production queries; request only required columns to save memory and network bandwidth'],
        practicalExample: 'Querying candidate leaderboards in educational platforms.',
        exercise: {
          title: 'Filter Active Students',
          instructions: 'Select name and email where xp > 1000 ordered by name.',
          starterCode: '-- write SQL query',
          solutionCode: 'SELECT name, email FROM students WHERE xp > 1000 ORDER BY name ASC;',
          hints: ['SELECT, FROM, WHERE, ORDER BY']
        },
        quiz: [
          {
            question: 'How do you check for missing/null values in SQL?',
            options: ['WHERE column IS NULL', 'WHERE column = NULL', 'WHERE column == 0', 'WHERE column IS EMPTY'],
            correctAnswerIndex: 0,
            explanation: 'In ANSI SQL, NULL represents unknown values and must be evaluated with IS NULL.'
          }
        ]
      },
      {
        id: 'sql-joins',
        title: 'Table Joins (INNER, LEFT, RIGHT, FULL OUTER)',
        level: 'Intermediate',
        durationMinutes: 35,
        summary: 'Relating tables via primary and foreign keys, handling unmatched rows, self joins.',
        conceptExplanation: 'JOIN clauses combine records from two or more tables based on a related column between them.',
        beginnerExplanation: 'If table A has student names and table B has test scores, a JOIN matches each student’s ID to their score so you can see names and scores together!',
        whyUseful: 'Relational databases normalize data across multiple tables to prevent duplicate data.',
        syntax: 'SELECT * FROM tableA INNER JOIN tableB ON tableA.id = tableB.a_id;',
        codeSnippet: `SELECT \n    s.full_name,\n    s.target_career,\n    c.course_name,\n    e.completion_pct\nFROM students s\nINNER JOIN enrollments e ON s.student_id = e.student_id\nINNER JOIN courses c ON e.course_id = c.course_id\nWHERE e.completion_pct >= 80;`,
        lineByLineExplanation: ['Line 1-5: Selects attributes across 3 tables using table aliases', 'Line 6-8: Joins students to enrollments and enrollments to courses via foreign keys', 'Line 9: Filters for high completion percentage'],
        exampleOutput: 'Unified report showing student names, course titles, and 80%+ completion stats.',
        commonMistakes: ['Accidental Cartesian products (CROSS JOIN) by omitting the ON join predicate'],
        bestPractices: ['Ensure joined foreign key columns have indexes to prevent full table scans'],
        practicalExample: 'Generating user transcript records combining courses, grades, and certificates.',
        exercise: {
          title: 'Join Users and Orders',
          instructions: 'Perform LEFT JOIN between users and orders on user_id.',
          starterCode: '-- write LEFT JOIN query',
          solutionCode: 'SELECT u.name, o.order_id, o.amount FROM users u LEFT JOIN orders o ON u.id = o.user_id;',
          hints: ['LEFT JOIN preserves all users even if they have no orders']
        },
        quiz: [
          {
            question: 'What does a LEFT JOIN return if a row in the left table has no matching row in the right table?',
            options: ['All columns from the left table with NULL values for all columns of the right table', 'The row is omitted completely', 'An error is raised', 'It duplicates the row'],
            correctAnswerIndex: 0,
            explanation: 'LEFT JOIN keeps all left rows, populating missing right table fields with NULL.'
          }
        ]
      },
      {
        id: 'sql-window-functions',
        title: 'Advanced Window Functions (RANK, ROW_NUMBER, LAG, LEAD)',
        level: 'Advanced',
        durationMinutes: 40,
        summary: 'OVER clause, PARTITION BY, ORDER BY, running totals, and moving averages.',
        conceptExplanation: 'Window functions perform calculations across a set of table rows related to the current row without collapsing rows into a single summary.',
        beginnerExplanation: 'Unlike GROUP BY which shrinks 100 rows into 1 summary number, a Window function gives each row its own ranking while keeping all 100 rows visible!',
        whyUseful: 'Crucial for running totals, period-over-period growth, top-N per category, and churn cohort analysis.',
        syntax: 'ROW_NUMBER() OVER (PARTITION BY category ORDER BY score DESC)',
        codeSnippet: `SELECT \n    student_name,\n    course_category,\n    score,\n    DENSE_RANK() OVER (\n        PARTITION BY course_category \n        ORDER BY score DESC\n    ) as rank_in_category\nFROM test_submissions;`,
        lineByLineExplanation: ['Line 1-3: Base columns', 'Line 4-7: Dense rank evaluated within each course category partitioned group', 'Line 8: Source records'],
        exampleOutput: 'Every student displayed alongside their rank (1st, 2nd, 3rd) within their respective subject category.',
        commonMistakes: ['Confusing RANK() (which skips rank numbers on ties) with DENSE_RANK() (which does not skip numbers)'],
        bestPractices: ['Use Window functions for complex analytics to eliminate expensive self-joins and correlated subqueries'],
        practicalExample: 'Calculating month-over-month revenue changes using `LAG(revenue, 1) OVER (ORDER BY month)`.',
        exercise: {
          title: 'Calculate Row Number',
          instructions: 'Generate sequential row number partitioned by department.',
          starterCode: '-- window query',
          solutionCode: 'SELECT emp_name, dept, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) as rank FROM employees;',
          hints: ['ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)']
        },
        quiz: [
          {
            question: 'What is the purpose of PARTITION BY in a Window function specification?',
            options: ['Divides query result rows into separate groups where the window function is evaluated independently', 'Saves the table to another hard drive', 'Filters out null rows', 'Indexes the table'],
            correctAnswerIndex: 0,
            explanation: 'PARTITION BY segments the data into logical subgroups for local calculation.'
          }
        ]
      }
    ]
  },
  {
    id: 'data-python-pandas',
    category: 'Data',
    title: 'Python for Data Analysis, Pandas & NumPy',
    slug: 'python-pandas-analysis',
    tagline: 'Vectorized arrays, DataFrames, Data Cleaning, Groupby, and EDA.',
    description: 'Learn data analysis with Python: fast matrix operations with NumPy, data wrangling with Pandas DataFrames, handling missing values, and exploratory analysis.',
    icon: 'FileSpreadsheet',
    topicsCount: 12,
    estimatedHours: 22,
    projects: ['E-Commerce Customer Behavior Analysis', 'Global Financial Market EDA', 'Healthcare Outcomes Study'],
    topics: [
      {
        id: 'pandas-dataframes',
        title: 'Pandas DataFrames & Data Ingestion',
        level: 'Beginner',
        durationMinutes: 30,
        summary: 'Reading CSV/JSON/SQL, Series vs DataFrames, inspect shape, dtypes, info, and head.',
        conceptExplanation: 'Pandas provides high-performance data structures for tabular data, built on top of NumPy arrays.',
        beginnerExplanation: 'Think of Pandas as Excel on programming superpowers. It can open a 5-million row file in 2 seconds and calculate column averages with one line of code!',
        whyUseful: 'The foundational tool for data analysts, data scientists, and ML engineers worldwide.',
        syntax: 'df = pd.read_csv("data.csv")\ndf.head()',
        codeSnippet: `import pandas as pd\n\ndata = {\n    'student': ['Jakeer', 'Sarah', 'Alex', 'Elena'],\n    'target_career': ['Data Analyst', 'Data Scientist', 'AI Engineer', 'Cloud Engineer'],\n    'study_hours': [14, 18, 16, 12],\n    'completed_projects': [8, 10, 9, 6]\n}\n\ndf = pd.DataFrame(data)\nprint(df.describe())`,
        lineByLineExplanation: ['Line 1: Imports library', 'Line 3-8: Python dictionary representing columnar records', 'Line 10: Converts to Pandas DataFrame', 'Line 11: Computes mean, std, min, 25%, 50%, 75%, and max across all numeric columns'],
        exampleOutput: 'Statistical summary table of hours and projects.',
        commonMistakes: ['Iterating through DataFrame rows with Python for loops instead of using vectorized operations'],
        bestPractices: ['Always inspect `df.info()` and `df.isna().sum()` immediately after reading datasets'],
        practicalExample: 'Ingesting messy sales CSV files from cloud buckets.',
        exercise: {
          title: 'Calculate Column Average',
          instructions: 'Compute the average study hours from the DataFrame.',
          starterCode: '# compute mean of study_hours',
          solutionCode: 'avg_hours = df["study_hours"].mean()\nprint("Average Hours:", avg_hours)',
          hints: ['Use df["column"].mean()']
        },
        quiz: [
          {
            question: 'Why are vectorized Pandas and NumPy operations orders of magnitude faster than Python for loops?',
            options: ['They execute in compiled C/Fortran memory buffers with SIMD CPU instructions', 'They run on quantum computers', 'They skip error checks completely', 'They reduce file sizes'],
            correctAnswerIndex: 0,
            explanation: 'Vectorized operations execute in contiguous memory via optimized C/Fortran routines.'
          }
        ]
      }
    ]
  }
];

export const computerSciencePaths: DetailedLearningPath[] = [
  {
    id: 'cs-foundations',
    category: 'Computer Science',
    title: 'Computer Science Core Foundations & Systems',
    slug: 'cs-foundations',
    tagline: 'Programming Fundamentals, OOP, DBMS, OS, Networks, and Computer Architecture.',
    description: 'The complete computer science curriculum: memory organization, process scheduling, TCP/IP networking, relational algebra, and system design principles.',
    icon: 'Cpu',
    topicsCount: 14,
    estimatedHours: 28,
    projects: ['Virtual Operating System Process Scheduler', 'Miniature Relational Storage Engine with B-Tree', 'Multi-Client TCP Chat Server in C'],
    topics: [
      {
        id: 'cs-os-processes',
        title: 'Operating Systems: Processes, Threads & Concurrency',
        level: 'Intermediate',
        durationMinutes: 35,
        summary: 'PCB, context switching, CPU scheduling algorithms (FIFO, Round Robin, SJF), inter-process communication.',
        conceptExplanation: 'An Operating System manages hardware resources and provides execution environments for processes and threads.',
        beginnerExplanation: 'The OS is the conductor of an orchestra. It tells the violin (browser), drums (music player), and trumpet (compiler) when to play so they share the stage (CPU) without chaos!',
        whyUseful: 'Enables writing software that utilizes CPU cores effectively and understands memory limits.',
        syntax: 'fork() | pthread_create() | kill()',
        codeSnippet: `# Process & Thread Life Cycle Model\n# 1. New -> Ready (in CPU Run Queue)\n# 2. Running (on Core)\n# 3. Blocked / Waiting on I/O\n# 4. Terminated / Zombie\nprint("Operating System Scheduler: Context switch in 2 microseconds")`,
        lineByLineExplanation: ['Line 1-4: The 5-state process model', 'Line 5: Realistic modern OS scheduling benchmark'],
        exampleOutput: 'Operating System Scheduler: Context switch in 2 microseconds',
        commonMistakes: ['Creating zombie or orphan processes by failing to call wait() / waitpid() in parent processes'],
        bestPractices: ['Prefer thread pools or asynchronous event loops over spawning unbounded raw OS processes'],
        practicalExample: 'Optimizing high-scale web server workers (e.g. NGINX worker processes vs Node event loop).',
        exercise: {
          title: 'Calculate Round Robin Turnaround Time',
          instructions: 'Compute completion order with time quantum of 2ms.',
          starterCode: '# write scheduling order',
          solutionCode: 'processes = ["P1 (quantum 2)", "P2 (quantum 2)", "P1 (quantum 2)"]\nprint("Order:", processes)',
          hints: ['Round Robin alternates evenly']
        },
        quiz: [
          {
            question: 'What is a "context switch" in an operating system?',
            options: ['Saving the state of the active process and restoring the state of another process to resume execution', 'Changing the monitor display mode', 'Switching programming languages', 'Upgrading the hard drive'],
            correctAnswerIndex: 0,
            explanation: 'Context switching preserves CPU register state so another process can run on the core.'
          }
        ]
      },
      {
        id: 'cs-networks-tcp',
        title: 'Computer Networks: TCP/IP & OSI 7-Layer Model',
        level: 'Intermediate',
        durationMinutes: 35,
        summary: 'Application, Transport, Network, Data Link layers, 3-way handshake, DNS, HTTP/3, and packets.',
        conceptExplanation: 'Computer networks govern how data packets traverse physical wires, fiber optics, and wireless signals between interconnected nodes globally.',
        beginnerExplanation: 'Think of mailing a letter across the world. You write the message (Application), put it in an addressed envelope (Transport/Network), and a delivery truck carries it over roads (Physical layer)!',
        whyUseful: 'Fundamental to backend engineering, distributed cloud systems, and cybersecurity.',
        syntax: 'SYN -> SYN-ACK -> ACK (TCP 3-Way Handshake)',
        codeSnippet: `# TCP 3-Way Handshake Simulation\nclient_packet = "SYN (Seq=100)"\nserver_response = "SYN-ACK (Seq=300, Ack=101)"\nclient_ack = "ACK (Ack=301)"\nprint(f"Connection Established: {client_packet} -> {server_response} -> {client_ack}")`,
        lineByLineExplanation: ['Line 2: Client initiates connection with synchronize sequence', 'Line 3: Server acknowledges and sends its own sequence', 'Line 4: Client acknowledges; reliable byte stream opened'],
        exampleOutput: 'Connection Established: SYN (Seq=100) -> SYN-ACK (Seq=300, Ack=101) -> ACK (Ack=301)',
        commonMistakes: ['Assuming UDP packets arrive in order or with guaranteed delivery (only TCP guarantees reliable ordered delivery)'],
        bestPractices: ['Use TLS 1.3 encryption on top of transport streams for all production communications'],
        practicalExample: 'Debugging API network latency and packet loss between microservices.',
        exercise: {
          title: 'Map Layer to Protocol',
          instructions: 'Identify which layer HTTP, TCP, and IP operate at.',
          starterCode: '# map protocols to OSI layer',
          solutionCode: 'layer_map = {"HTTP": "Application", "TCP": "Transport", "IP": "Network"}\nprint(layer_map)',
          hints: ['HTTP is Application layer']
        },
        quiz: [
          {
            question: 'What is the key difference between TCP and UDP?',
            options: ['TCP is connection-oriented with guaranteed ordered delivery; UDP is connectionless and best-effort', 'UDP is slower than TCP', 'TCP cannot transmit text', 'There is no difference'],
            correctAnswerIndex: 0,
            explanation: 'TCP guarantees packet delivery via acknowledgments and retries; UDP prioritizes low latency without guarantees.'
          }
        ]
      }
    ]
  }
];
