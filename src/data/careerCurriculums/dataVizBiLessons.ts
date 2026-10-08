import { CareerLesson } from '../../types';

export const dataVizBiLessons: CareerLesson[] = [
  {
    id: 'viz-lesson-1',
    milestoneId: 'ms-data-viz',
    order: 1,
    title: '1. Data Storytelling, Matplotlib & Seaborn',
    durationMinutes: 25,
    conceptExplanation: 'Data visualization bridges mathematical insights with executive decision making. Matplotlib provides low-level imperative canvas rendering, while Seaborn offers high-level statistical plotting built on Pandas DataFrames. Effective visualizations avoid chart junk, choose appropriate encodings (bar charts for categories, line charts for time-series, scatter plots for correlation, box plots for distribution spread), and maintain accessible color palettes.',
    whyImportant: 'Senior leadership rarely reads SQL code or Jupyter notebooks. A polished, truthful executive dashboard that highlights a \$2M revenue loss or conversion drop drives organizational action.',
    syntax: `# Statistical Plotting with Seaborn & Matplotlib
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(10, 6))
sns.barplot(data=df, x='category', y='revenue', palette='viridis')
plt.title('Q3 Revenue by Product Category ($M)')
plt.xlabel('Category')
plt.ylabel('Revenue')
plt.show()`,
    exampleDescription: 'Generating a multi-variable distribution comparison showing customer churn rates across subscription tiers.',
    codeSnippet: `import matplotlib.pyplot as plt
import numpy as np

# Sample business metrics
categories = ['Enterprise', 'Professional', 'Starter', 'Student']
arr_revenue = [4.2, 2.8, 1.4, 0.3]  # Millions USD
churn_rates = [0.03, 0.07, 0.14, 0.22] # Percentage

x = np.arange(len(categories))
width = 0.35

fig, ax1 = plt.subplots(figsize=(9, 5))

# Primary Bar Chart: Revenue
bars = ax1.bar(x, arr_revenue, width, label='Annual Recurring Revenue ($M)', color='#6366f1')
ax1.set_ylabel('ARR ($ Millions)', color='#6366f1', fontweight='bold')
ax1.set_xticks(x)
ax1.set_xticklabels(categories)
ax1.set_ylim(0, 5.0)

# Secondary Axis: Churn Rate line
ax2 = ax1.twinx()
line = ax2.plot(x, churn_rates, color='#f43f5e', marker='o', linewidth=2.5, label='Annual Churn Rate')
ax2.set_ylabel('Churn Rate', color='#f43f5e', fontweight='bold')
ax2.set_ylim(0, 0.30)
ax2.yaxis.set_major_formatter(lambda y, _: f"{y:.0%}")

plt.title("SaaS Tier Economics: ARR vs Churn Rate (2024)", fontsize=13, fontweight='bold')
fig.tight_layout()
print("Visualization generated successfully with dual-axis alignment.")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 11: Using plt.subplots() to obtain object-oriented Figure and Axes handles.',
      'Line 14-19: Plotting primary categorical bars for recurring revenue with custom styling.',
      'Line 22-26: Using ax1.twinx() to overlay a secondary Y-axis with a distinct scale for churn percentage.',
      'Line 27: Formatting percentages cleanly on the secondary axis tick labels.'
    ],
    realWorldExample: 'Financial analysts at Bloomberg and Morningstar design multi-panel dual-axis dashboards monitoring sovereign bond yield curve inversions and inflation rates.',
    commonMistakes: [
      {
        mistake: 'Using 3D pie charts or truncating bar chart Y-axes away from zero.',
        fix: 'Never use 3D chart effects (they distort perceptual proportions). Always start categorical bar chart baselines at zero to avoid visual deception.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write the code to create a simple scatter plot of advertising spend vs revenue using matplotlib.pyplot.',
        hint: 'plt.scatter(spend, revenue); plt.title("Spend vs Revenue"); plt.show()',
        solutionSnippet: 'import matplotlib.pyplot as plt\nspend = [10, 20, 30, 40]\nrev = [25, 48, 70, 95]\nplt.scatter(spend, rev)\nplt.xlabel("Ad Spend ($k)")\nplt.ylabel("Revenue ($k)")\nplt.title("Ad Spend vs Revenue")'
      }
    ],
    quizQuestions: [
      {
        question: 'Which chart type is most appropriate for visualizing the change in a metric over continuous time?',
        options: ['Line chart', 'Pie chart', 'Radar chart', 'Treemap'],
        correctIndex: 0,
        explanation: 'Line charts are the gold standard for continuous time-series data, displaying trends, seasonality, and inflection points.'
      },
      {
        question: 'Why should categorical bar charts always have their value axis (Y-axis) start at zero?',
        options: [
          'Because the viewer judges quantities by the physical length/height of the bar; truncating the axis exaggerates minor differences',
          'Computers crash if Y-axes do not start at zero',
          'Matplotlib will not compile otherwise',
          'Zero is required by SQL'
        ],
        correctIndex: 0,
        explanation: 'Bar charts encode values through geometric length. Starting above zero distorts visual ratios and misleads viewers.'
      },
      {
        question: 'Which plot is best suited to display the 5-number summary (min, Q1, median, Q3, max) and detect outliers across multiple groups?',
        options: ['Box Plot (Box-and-Whisker)', 'Scatter plot', 'Heatmap', 'Donut chart'],
        correctIndex: 0,
        explanation: 'Box plots explicitly depict median, interquartile range (IQR), and whisker boundaries, marking outliers as distinct points.'
      },
      {
        question: 'What is "chart junk" in data visualization principles (Edward Tufte)?',
        options: [
          'Unnecessary visual clutter (excessive grid lines, 3D shadows, decorative icons) that distracts from data comprehension',
          'A corrupted image file',
          'A chart with missing data labels',
          'A plot rendered in black and white'
        ],
        correctIndex: 0,
        explanation: 'Edward Tufte coined "chart junk" to describe visual elements that do not convey data and reduce the data-to-ink ratio.'
      },
      {
        question: 'When should a Heatmap be preferred?',
        options: [
          'To visualize cross-tabular correlation matrices or dense 2D grid intensities using color gradients',
          'To show simple percentages summing to 100%',
          'Only for weather maps',
          'To replace SQL tables with 2 rows'
        ],
        correctIndex: 0,
        explanation: 'Heatmaps use color saturation to convey numerical values across matrix dimensions, ideal for correlation matrices and hour-by-day activity.'
      }
    ],
    miniChallenge: {
      title: 'Top Category Bar Plotter',
      prompt: 'Write a function plot_top_categories(names, values) that sorts categories by values descending and prints the sorted pairs for plotting.',
      starterCode: `def get_sorted_viz_data(names, values):
    # Return sorted list of tuples (name, value) descending
    pass

print(get_sorted_viz_data(['B', 'A', 'C'], [20, 50, 30])) # Expected: [('A', 50), ('C', 30), ('B', 20)]`,
      solution: `def get_sorted_viz_data(names, values):
    pairs = list(zip(names, values))
    return sorted(pairs, key=lambda x: x[1], reverse=True)

print(get_sorted_viz_data(['B', 'A', 'C'], [20, 50, 30]))`
    }
  },
  {
    id: 'viz-lesson-2',
    milestoneId: 'ms-powerbi-tableau',
    order: 2,
    title: '2. Power BI & DAX: Dimensional Data Modeling & Measures',
    durationMinutes: 30,
    conceptExplanation: 'Power BI is Microsoft’s market-leading enterprise business intelligence platform. Central to Power BI is the Star Schema data model: Fact tables (containing numerical transactional events) connected to Dimension tables (containing descriptive attributes like Customer, Date, Product). DAX (Data Analysis Expressions) is the functional formula language used to create custom Calculated Measures that evaluate dynamically in the current filter context.',
    whyImportant: 'Over 60% of Fortune 500 enterprises standardize corporate reporting on Power BI. Knowing how to write DAX measures (CALCULATE, FILTER, ALL, SAMEPERIODLASTYEAR) and architect Star Schemas is essential for Power BI and Data Analysts.',
    syntax: `-- DAX Calculated Measure Syntax
Total Revenue YTD = 
CALCULATE(
    SUM(FactSales[SalesAmount]),
    DATESYTD(DimDate[DateKey])
)

YoY Revenue Growth % = 
VAR CurrentSales = [Total Revenue]
VAR PriorSales = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(DimDate[DateKey]))
RETURN
DIVIDE(CurrentSales - PriorSales, PriorSales, 0)`,
    exampleDescription: 'Developing dynamic business KPI measures in DAX for Year-to-Date revenue, rolling 12-month customer lifetime value, and Year-over-Year growth percentage.',
    codeSnippet: `/* DAX Script for Enterprise KPI Suite */

// 1. Base Measure: Total Revenue
Total Sales = SUM(FactSales[NetRevenue])

// 2. Filter Context Modification with CALCULATE
Online Sales = 
CALCULATE(
    [Total Sales],
    DimSalesChannel[ChannelName] = "E-Commerce"
)

// 3. Time Intelligence: Year-over-Year Growth
Sales Prior Year = 
CALCULATE(
    [Total Sales],
    SAMEPERIODLASTYEAR(DimCalendar[Date])
)

YoY Growth % = 
VAR _Current = [Total Sales]
VAR _Prior = [Sales Prior Year]
RETURN
    DIVIDE(_Current - _Prior, _Prior, 0)

// 4. Percentage of Total (Bypassing Filter Context with ALL)
% of Total Company Sales = 
DIVIDE(
    [Total Sales],
    CALCULATE([Total Sales], ALL(DimStore))
)`,
    codeLanguage: 'sql',
    codeExplanation: [
      'Line 4: Atomic base measure computing gross sales using SUM.',
      'Line 7-11: CALCULATE modifies the filter context, restricting evaluation to online channels.',
      'Line 14-18: Time intelligence function SAMEPERIODLASTYEAR shifts calendar dates back exactly 365 days.',
      'Line 20-25: VAR and RETURN structure stores intermediate calculations, and DIVIDE safely handles division-by-zero errors.',
      'Line 28-32: ALL(DimStore) removes row-level filters on stores to compute total denominator percentage.'
    ],
    realWorldExample: 'Walmart uses Power BI to stream point-of-sale inventory registers into executive regional scorecards, calculating out-of-stock rates across 4,700 retail stores.',
    commonMistakes: [
      {
        mistake: 'Creating Calculated Columns instead of Measures for aggregations, consuming massive RAM in the VertiPaq engine.',
        fix: 'Always use DAX Measures for aggregations (SUM, AVERAGE, ratios). Reserve Calculated Columns only for row-by-row categorization attributes.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a DAX measure formula for Average Order Value using DIVIDE, [Total Sales], and [Total Orders].',
        hint: 'Average Order Value = DIVIDE([Total Sales], [Total Orders], 0)',
        solutionSnippet: 'Average Order Value = DIVIDE([Total Sales], [Total Orders], 0)'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the most critical function in DAX, responsible for modifying the evaluation filter context?',
        options: ['CALCULATE', 'VLOOKUP', 'EVALUATE', 'SUMX'],
        correctIndex: 0,
        explanation: 'CALCULATE evaluates an expression under modified filter contexts and is the cornerstone of all advanced DAX formulas.'
      },
      {
        question: 'What is a Star Schema in relational data warehousing and Power BI modeling?',
        options: [
          'A central Fact table containing quantitative measurements surrounded by denormalized Dimension tables containing descriptive lookup attributes',
          'A database shaped like an astrological constellation',
          'A single giant flat spreadsheet with 200 columns',
          'A database with only one user'
        ],
        correctIndex: 0,
        explanation: 'The Star Schema organizes data into central numerical fact tables linked via 1-to-many relationships to descriptive dimension tables.'
      },
      {
        question: 'Why is the DIVIDE(numerator, denominator, alternate_result) function preferred over "/" in DAX?',
        options: [
          'It automatically handles division by zero errors and returns an alternate result (or BLANK) instead of crashing',
          'It computes division 10x faster',
          'The "/" key is forbidden in DAX',
          'It rounds numbers to integers'
        ],
        correctIndex: 0,
        explanation: 'DIVIDE provides graceful error protection when denominators are zero or null, preventing broken dashboard visuals.'
      },
      {
        question: 'What does the ALL() function do when passed inside CALCULATE?',
        options: [
          'Removes all filters from the specified table or column, allowing calculation of company-wide grand totals',
          'Deletes all records from the database',
          'Selects all rows matching the user email',
          'Refreshes all datasets'
        ],
        correctIndex: 0,
        explanation: 'ALL clears active slicer and visual filters on the target column/table, useful for calculating shares of grand total.'
      },
      {
        question: 'What is the difference between a Calculated Column and a Measure in Power BI?',
        options: [
          'Calculated columns are computed row-by-row during data refresh and stored in RAM; Measures are computed on-the-fly dynamically based on user slicers',
          'Calculated columns are free; Measures cost money',
          'Measures cannot use numbers',
          'Calculated columns can only have text'
        ],
        correctIndex: 0,
        explanation: 'Measures evaluate on the fly in response to dashboard interactions without consuming permanent in-memory table storage.'
      }
    ],
    miniChallenge: {
      title: 'DAX Profit Margin Builder',
      prompt: 'Write a DAX measure Profit Margin % that divides [Total Profit] by [Total Revenue], handling zero revenue safely.',
      starterCode: `// Write your DAX measure
Profit Margin % = 
`,
      solution: `Profit Margin % = 
DIVIDE([Total Profit], [Total Revenue], 0)`
    }
  }
];
