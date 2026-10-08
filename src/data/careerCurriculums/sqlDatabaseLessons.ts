import { CareerLesson } from '../../types';

export const sqlDatabaseLessons: CareerLesson[] = [
  {
    id: 'sql-lesson-1',
    milestoneId: 'ms-sql',
    order: 1,
    title: '1. Relational Databases & Core SQL Queries',
    durationMinutes: 20,
    conceptExplanation: 'A Relational Database Management System (RDBMS) organizes structured data into tables consisting of rows (records) and columns (attributes). Structured Query Language (SQL) is the standardized declarative language used to query, filter, insert, and manage relational data. The core query statement follows the SELECT... FROM... WHERE... ORDER BY structure.',
    whyImportant: 'SQL is the single most tested skill in technical interviews for Data Analysts, Data Scientists, and Data Engineers. 95% of enterprise data lives in SQL warehouses like Snowflake, PostgreSQL, BigQuery, and SQL Server.',
    syntax: `-- Basic SQL Query Syntax
SELECT column1, column2, column3
FROM table_name
WHERE condition_is_true
ORDER BY column1 DESC
LIMIT 10;`,
    exampleDescription: 'Querying high-value enterprise customers located in Germany sorted by total lifetime account spend.',
    codeSnippet: `-- Extract top German enterprise accounts
SELECT 
    customer_id,
    company_name,
    country,
    lifetime_spend,
    account_created_at
FROM 
    customers
WHERE 
    country = 'Germany' 
    AND lifetime_spend >= 50000.00
    AND is_active = TRUE
ORDER BY 
    lifetime_spend DESC
LIMIT 10;`,
    codeLanguage: 'sql',
    codeExplanation: [
      'Line 2-6: Specifying explicit column names in the SELECT clause rather than using SELECT * for better performance and clarity.',
      'Line 8: Defining the source table "customers" in the FROM clause.',
      'Line 10-12: The WHERE clause filters records before any grouping or sorting occurs.',
      'Line 14: ORDER BY sorts results in descending order (highest spend first).',
      'Line 15: LIMIT restricts output to the top 10 records.'
    ],
    realWorldExample: 'Uber uses SQL queries on Presto/Trino running over petabytes of ride records to calculate daily driver payouts and regional surge multipliers.',
    commonMistakes: [
      {
        mistake: 'Using SELECT * on production tables with millions of rows.',
        fix: 'Always explicitly specify the columns you need. SELECT * triggers full table scans and consumes huge bandwidth and cloud warehouse credits.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a SQL query to select product_id, product_name, and unit_price from the products table where unit_price is between 20 and 100, ordered by unit_price ascending.',
        hint: 'Use WHERE unit_price BETWEEN 20 AND 100 ORDER BY unit_price ASC;',
        solutionSnippet: 'SELECT product_id, product_name, unit_price FROM products WHERE unit_price BETWEEN 20 AND 100 ORDER BY unit_price ASC;'
      }
    ],
    quizQuestions: [
      {
        question: 'Which SQL clause is used to filter rows based on a specific boolean condition?',
        options: ['FILTER BY', 'WHERE', 'HAVING', 'GROUP BY'],
        correctIndex: 1,
        explanation: 'The WHERE clause filters individual rows before aggregation occurs.'
      },
      {
        question: 'In what logical order does an SQL engine evaluate the following query clauses?',
        options: [
          'SELECT -> FROM -> WHERE -> ORDER BY',
          'FROM -> WHERE -> SELECT -> ORDER BY',
          'WHERE -> FROM -> SELECT -> ORDER BY',
          'ORDER BY -> SELECT -> FROM -> WHERE'
        ],
        correctIndex: 1,
        explanation: 'SQL executes logically: FROM (locate table) -> WHERE (filter rows) -> SELECT (project columns) -> ORDER BY (sort output).'
      },
      {
        question: 'How do you return only distinct (unique) countries from a customers table?',
        options: [
          'SELECT UNIQUE country FROM customers;',
          'SELECT DISTINCT country FROM customers;',
          'SELECT country DIFFERENT FROM customers;',
          'SELECT ISOLATE country FROM customers;'
        ],
        correctIndex: 1,
        explanation: 'The DISTINCT keyword in the SELECT clause eliminates duplicate records from the result set.'
      },
      {
        question: 'What does the SQL wildcard character "%" represent in a LIKE clause?',
        options: [
          'Exactly one character',
          'Zero, one, or multiple characters of any type',
          'Only numeric digits',
          'A percentage calculation'
        ],
        correctIndex: 1,
        explanation: 'In SQL LIKE clauses, % represents zero or more arbitrary characters, while _ represents exactly one character.'
      },
      {
        question: 'What is the default sort order of an ORDER BY clause if ASC or DESC is omitted?',
        options: ['Descending (DESC)', 'Ascending (ASC)', 'Random order', 'Primary Key order'],
        correctIndex: 1,
        explanation: 'ORDER BY defaults to ascending (ASC: A-Z, smallest to largest number).'
      }
    ],
    miniChallenge: {
      title: 'Customer Segmentation SQL Builder',
      prompt: 'Write a SQL query that retrieves user_id, email, and subscription_tier from "users" where status is "active" and created_at is after "2024-01-01", sorted by created_at descending.',
      starterCode: `-- Write your SQL query here
`,
      solution: `SELECT user_id, email, subscription_tier
FROM users
WHERE status = 'active' AND created_at > '2024-01-01'
ORDER BY created_at DESC;`
    }
  },
  {
    id: 'sql-lesson-2',
    milestoneId: 'ms-sql',
    order: 2,
    title: '2. Aggregations, GROUP BY & HAVING Clauses',
    durationMinutes: 25,
    conceptExplanation: 'Aggregate functions (COUNT, SUM, AVG, MIN, MAX) summarize multiple rows into a single numerical metric. The GROUP BY clause splits data into subsets based on matching column values, applying aggregate calculations per group. The HAVING clause filters grouped results after aggregation has taken place, whereas WHERE filters individual rows before aggregation.',
    whyImportant: 'Aggregations produce business metrics: Monthly Recurring Revenue (MRR), Customer Churn Rate, Average Order Value (AOV), and daily active users. Without GROUP BY, enterprise reporting is impossible.',
    syntax: `-- Aggregate Query Syntax
SELECT 
    department_id,
    COUNT(employee_id) AS total_staff,
    AVG(salary) AS average_salary
FROM employees
WHERE is_active = TRUE
GROUP BY department_id
HAVING AVG(salary) > 75000;`,
    exampleDescription: 'Aggregating e-commerce sales by product category and filtering for categories generating over \$100k revenue.',
    codeSnippet: `-- Category revenue & performance analysis
SELECT 
    category_name,
    COUNT(order_id) AS total_orders,
    ROUND(SUM(order_total_usd), 2) AS total_revenue,
    ROUND(AVG(order_total_usd), 2) AS avg_basket_size,
    MAX(order_total_usd) AS largest_single_order
FROM 
    orders
WHERE 
    order_status = 'COMPLETED'
    AND order_date >= '2024-01-01'
GROUP BY 
    category_name
HAVING 
    SUM(order_total_usd) >= 100000.00
ORDER BY 
    total_revenue DESC;`,
    codeLanguage: 'sql',
    codeExplanation: [
      'Line 2-6: Combining multiple aggregate functions (COUNT, SUM, AVG, MAX) with column aliases using AS.',
      'Line 8-10: Filtering out canceled or pending orders in WHERE before doing any math.',
      'Line 11-12: GROUP BY groups all matching transactions by category_name.',
      'Line 13-14: The HAVING clause filters out low-earning categories whose total revenue did not hit the \$100k threshold.',
      'Line 15: ORDER BY ranks the top revenue-producing categories at the top.'
    ],
    realWorldExample: 'Stripe’s billing dashboard uses SQL GROUP BY queries across millions of webhook events to compute gross volume, net revenue, and processing fees per merchant.',
    commonMistakes: [
      {
        mistake: 'Putting aggregate functions in the WHERE clause, e.g. WHERE SUM(revenue) > 5000.',
        fix: 'WHERE filters individual records before grouping. Always put conditions on aggregate functions in the HAVING clause.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a SQL query that counts the number of employees and calculates average salary per department from the employees table, only including departments with more than 5 employees.',
        hint: 'Use GROUP BY department HAVING COUNT(id) > 5;',
        solutionSnippet: 'SELECT department, COUNT(id) AS emp_count, AVG(salary) AS avg_sal FROM employees GROUP BY department HAVING COUNT(id) > 5;'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the key difference between WHERE and HAVING in SQL?',
        options: [
          'WHERE filters rows before aggregation; HAVING filters aggregated groups after aggregation',
          'HAVING is faster than WHERE',
          'WHERE only works with numbers; HAVING only works with strings',
          'There is no difference; they are aliases'
        ],
        correctIndex: 0,
        explanation: 'WHERE filters raw table rows prior to grouping; HAVING filters the grouped results produced by aggregate calculations.'
      },
      {
        question: 'Which aggregate function ignores NULL values when calculating counts?',
        options: ['COUNT(*)', 'COUNT(column_name)', 'SUM(NULL)', 'ALL(*)'],
        correctIndex: 1,
        explanation: 'COUNT(*) counts every row including NULLs. COUNT(column_name) counts only rows where column_name is NOT NULL.'
      },
      {
        question: 'Every non-aggregated column in the SELECT list must also be present in which clause?',
        options: ['ORDER BY', 'GROUP BY', 'HAVING', 'WHERE'],
        correctIndex: 1,
        explanation: 'Standard SQL requires that any column in SELECT that is not wrapped in an aggregate function must appear in the GROUP BY clause.'
      },
      {
        question: 'What does the SQL function ROUND(AVG(score), 2) return?',
        options: [
          'The average score rounded to two decimal places',
          'The score multiplied by 2',
          'The second highest average score',
          'A random score between 0 and 2'
        ],
        correctIndex: 0,
        explanation: 'ROUND(numeric_expression, decimals) rounds the float result to the specified decimal precision.'
      },
      {
        question: 'If you want to know the number of distinct customers who placed orders, which expression is correct?',
        options: [
          'COUNT(DISTINCT customer_id)',
          'DISTINCT(COUNT(customer_id))',
          'SUM(DISTINCT customer_id)',
          'COUNT(UNIQUE customer_id)'
        ],
        correctIndex: 0,
        explanation: 'COUNT(DISTINCT customer_id) eliminates duplicate customer IDs before tallying the count.'
      }
    ],
    miniChallenge: {
      title: 'Store Revenue Breakdown Query',
      prompt: 'Write a SQL query to find total revenue (SUM(amount)) and order count (COUNT(*)) per store_id from the orders table for completed orders, ordered by total revenue descending.',
      starterCode: `-- Write your SQL aggregation query
`,
      solution: `SELECT store_id, COUNT(*) AS order_count, SUM(amount) AS total_revenue
FROM orders
WHERE status = 'completed'
GROUP BY store_id
ORDER BY total_revenue DESC;`
    }
  },
  {
    id: 'sql-lesson-3',
    milestoneId: 'ms-sql',
    order: 3,
    title: '3. Multi-Table Joins: INNER, LEFT, RIGHT & FULL OUTER',
    durationMinutes: 30,
    conceptExplanation: 'Relational data is normalized across separate tables to prevent redundancy. SQL JOINS reconnect these related tables using primary keys and foreign keys. An INNER JOIN returns records with matching keys in both tables; a LEFT JOIN keeps all rows from the left table and populates missing right-table columns with NULL; FULL OUTER JOIN retains all records from both sides.',
    whyImportant: 'Real-world questions require joining user data with transactions, logistics, and web events. In Data Engineering and Analytics interviews, join logic and NULL handling are evaluated in 100% of candidate screenings.',
    syntax: `-- SQL Join Syntax
SELECT 
    orders.order_id,
    customers.company_name,
    orders.amount
FROM orders
LEFT JOIN customers 
    ON orders.customer_id = customers.customer_id;`,
    exampleDescription: 'Auditing churned or inactive customers who signed up but have never placed an order.',
    codeSnippet: `-- Identify inactive users using LEFT JOIN and NULL check
SELECT 
    u.user_id,
    u.full_name,
    u.email,
    u.registered_date,
    o.order_id
FROM 
    users u
LEFT JOIN 
    orders o ON u.user_id = o.user_id
WHERE 
    o.order_id IS NULL
ORDER BY 
    u.registered_date ASC;`,
    codeLanguage: 'sql',
    codeExplanation: [
      'Line 2-6: Selecting attributes from users (u) and orders (o) with clear table alias prefixes.',
      'Line 7: Setting users as the base "left" table (u).',
      'Line 9: LEFT JOIN ensures every user is preserved in output, even if they have zero orders.',
      'Line 11-12: The condition WHERE o.order_id IS NULL isolates users with no corresponding order row.'
    ],
    realWorldExample: 'Shopify uses distributed joins across billions of transactions to match Shopify Payments transactions with merchant banking accounts for daily ACH disbursements.',
    commonMistakes: [
      {
        mistake: 'Putting a filter on the right table in the WHERE clause of a LEFT JOIN, inadvertently converting it into an INNER JOIN.',
        fix: 'If you want to preserve all left rows regardless of right table filters, put the right table conditions directly in the ON clause: LEFT JOIN orders o ON u.id = o.user_id AND o.status = "PAID".'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a query using an INNER JOIN between students (id, name) and enrollments (student_id, course_name) on student id.',
        hint: 'SELECT s.name, e.course_name FROM students s INNER JOIN enrollments e ON s.id = e.student_id;',
        solutionSnippet: 'SELECT s.name, e.course_name FROM students s INNER JOIN enrollments e ON s.id = e.student_id;'
      }
    ],
    quizQuestions: [
      {
        question: 'What happens to rows in Table A that do not match Table B in an INNER JOIN?',
        options: [
          'They are retained with NULLs',
          'They are completely excluded from the result set',
          'They are duplicated',
          'An SQL error is thrown'
        ],
        correctIndex: 1,
        explanation: 'An INNER JOIN strictly returns rows that have a matching key in both participating tables.'
      },
      {
        question: 'Which join will keep all records from the left table even if no matching records exist in the right table?',
        options: ['INNER JOIN', 'LEFT JOIN', 'CROSS JOIN', 'RIGHT JOIN'],
        correctIndex: 1,
        explanation: 'A LEFT JOIN guarantees every row from the left table is returned, filling missing right-side fields with NULL.'
      },
      {
        question: 'What type of join is produced when joining two tables without an ON condition clause?',
        options: ['Natural Join', 'Cartesian Product (CROSS JOIN)', 'Self Join', 'Full Outer Join'],
        correctIndex: 1,
        explanation: 'Omitting the join predicate pairs every row of Table A with every row of Table B, creating an N x M Cartesian product.'
      },
      {
        question: 'How do you check for missing/unmatched foreign key values in a LEFT JOIN?',
        options: [
          'WHERE column = 0',
          'WHERE column IS NULL',
          'WHERE column = "EMPTY"',
          'WHERE column IS NOT TRUE'
        ],
        correctIndex: 1,
        explanation: 'In SQL, missing join values are represented by NULL and must be evaluated using IS NULL.'
      },
      {
        question: 'What is a Self Join?',
        options: [
          'A query that joins a table to itself using aliases',
          'A table with no primary key',
          'A join that runs in parallel',
          'A temporary table created in RAM'
        ],
        correctIndex: 0,
        explanation: 'A Self Join connects a table to itself (e.g. matching employees to their managers where manager_id references employee_id).'
      }
    ],
    miniChallenge: {
      title: 'Customer Orders Join Query',
      prompt: 'Write a SQL query to join customers c with orders o on c.customer_id = o.customer_id, selecting c.name, o.order_id, and o.total, keeping all customers even if they have no orders.',
      starterCode: `-- Write your LEFT JOIN query here
`,
      solution: `SELECT c.name, o.order_id, o.total
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;`
    }
  },
  {
    id: 'sql-lesson-4',
    milestoneId: 'ms-sql',
    order: 4,
    title: '4. Advanced Window Functions: RANK, DENSE_RANK, ROW_NUMBER & LAG',
    durationMinutes: 30,
    conceptExplanation: 'Window functions perform calculations across a set of table rows that are related to the current row, without collapsing the rows into a single output like GROUP BY does. Using the OVER (PARTITION BY ... ORDER BY ...) clause, window functions compute running totals, rankings, moving averages, and period-over-period differences (LAG/LEAD).',
    whyImportant: 'Window functions are the #1 differentiator between junior analysts and senior data engineers. Interviewers at FAANG companies routinely use window function problems to test analytical sophistication.',
    syntax: `-- Window Function Syntax
SELECT 
    employee_id,
    department,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
    LAG(salary, 1) OVER (PARTITION BY department ORDER BY salary DESC) AS prev_salary
FROM employees;`,
    exampleDescription: 'Computing the top 3 highest revenue salespeople in each geographical territory.',
    codeSnippet: `-- Rank salespeople by territory and isolate top 3 per region
WITH RankedReps AS (
    SELECT 
        rep_name,
        territory,
        annual_revenue,
        ROW_NUMBER() OVER (PARTITION BY territory ORDER BY annual_revenue DESC) AS rank_in_territory,
        LAG(annual_revenue, 1) OVER (PARTITION BY territory ORDER BY annual_revenue DESC) - annual_revenue AS gap_to_next_highest
    FROM 
        sales_representatives
)
SELECT 
    rep_name,
    territory,
    annual_revenue,
    rank_in_territory,
    gap_to_next_highest
FROM 
    RankedReps
WHERE 
    rank_in_territory <= 3
ORDER BY 
    territory, rank_in_territory;`,
    codeLanguage: 'sql',
    codeExplanation: [
      'Line 2-10: Using a Common Table Expression (CTE) "WITH RankedReps AS (...)" to compute window metrics cleanly.',
      'Line 7: ROW_NUMBER() assigns a unique sequential integer (1, 2, 3...) restarting for every territory partition.',
      'Line 8: LAG(annual_revenue, 1) pulls the prior row’s value within the window, allowing gap calculation.',
      'Line 18: Filtering for rank_in_territory <= 3 inside the outer query.'
    ],
    realWorldExample: 'Robinhood and Binance use window functions to calculate running cumulative balances and 7-day moving averages of cryptocurrency trading volume.',
    commonMistakes: [
      {
        mistake: 'Trying to filter by a window function directly in the WHERE clause (e.g. WHERE ROW_NUMBER() = 1).',
        fix: 'Window functions execute after WHERE. You must wrap the window query inside a CTE or subquery, then filter in the outer WHERE clause.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a query that computes a running cumulative total of order_amount ordered by order_date using SUM() OVER().',
        hint: 'SELECT order_id, order_date, order_amount, SUM(order_amount) OVER (ORDER BY order_date) AS running_total FROM orders;',
        solutionSnippet: 'SELECT order_id, order_date, order_amount, SUM(order_amount) OVER (ORDER BY order_date) AS running_total FROM orders;'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the key difference between RANK() and DENSE_RANK() when two rows tie for 1st place?',
        options: [
          'RANK() assigns 1, 1, 3 (skips rank); DENSE_RANK() assigns 1, 1, 2 (no gap)',
          'DENSE_RANK() is only for integers',
          'RANK() cannot be partitioned',
          'They produce identical results'
        ],
        correctIndex: 0,
        explanation: 'RANK leaves gaps after tied ranks (1, 1, 3), whereas DENSE_RANK retains sequential rank progression without gaps (1, 1, 2).'
      },
      {
        question: 'What does the LAG(column, 1) function do in SQL?',
        options: [
          'Delays query execution by 1 second',
          'Accesses the value of "column" from the preceding row within the window partition',
          'Calculates the slowest running server query',
          'Pulls the last row of the entire table'
        ],
        correctIndex: 1,
        explanation: 'LAG accesses data from a previous row at a specified physical offset without requiring a self-join.'
      },
      {
        question: 'What does PARTITION BY do inside an OVER() clause?',
        options: [
          'Splits the data into independent subsets for the window function without reducing rows',
          'Deletes duplicate rows',
          'Creates physical partitions on the hard drive',
          'Sorts the entire database ascending'
        ],
        correctIndex: 0,
        explanation: 'PARTITION BY groups rows for the window function to calculate across, while preserving each individual row in the output.'
      },
      {
        question: 'Where can you filter by an aliased window function column (e.g., WHERE rank <= 5)?',
        options: [
          'Directly in the WHERE clause of the same query',
          'Inside the HAVING clause',
          'In an outer query wrapping a CTE or subquery',
          'Window functions cannot be filtered'
        ],
        correctIndex: 2,
        explanation: 'Because window functions execute after WHERE and HAVING, filtering must take place in an outer query or CTE.'
      },
      {
        question: 'What does ROW_NUMBER() return if two rows have identical values in the ORDER BY column?',
        options: [
          'They receive the same number',
          'They receive arbitrary distinct sequential integers (e.g. 1 and 2)',
          'An error is raised',
          'NULL is returned for both'
        ],
        correctIndex: 1,
        explanation: 'ROW_NUMBER() strictly assigns unique, consecutive numbers starting at 1, breaking ties deterministically or arbitrarily.'
      }
    ],
    miniChallenge: {
      title: 'Monthly Running Total Builder',
      prompt: 'Write a SQL query that selects month, monthly_sales, and computes cumulative_sales using SUM(monthly_sales) OVER (ORDER BY month) from sales_summary.',
      starterCode: `-- Write your cumulative window query
`,
      solution: `SELECT month, monthly_sales,
       SUM(monthly_sales) OVER (ORDER BY month) AS cumulative_sales
FROM sales_summary;`
    }
  }
];
