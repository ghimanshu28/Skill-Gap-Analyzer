// ========================
//  DATA
// ========================

const industriesData = {
  design: [
    { icon: "🎨", title: "UI/UX Designer", level: "Entry → Senior" },
    { icon: "🖼️", title: "Visual Designer", level: "Entry → Mid" },
    { icon: "🧩", title: "Product Designer", level: "Mid → Senior" },
    { icon: "📱", title: "Mobile UX Designer", level: "Entry → Senior" },
    { icon: "🎭", title: "Motion Designer", level: "Entry → Mid" },
    { icon: "🖌️", title: "Brand Designer", level: "Entry → Senior" },
  ],
  tech: [
    { icon: "⚛️", title: "Frontend Developer", level: "Entry → Senior" },
    { icon: "🔧", title: "Backend Developer", level: "Entry → Senior" },
    { icon: "🌐", title: "Full Stack Developer", level: "Mid → Senior" },
    { icon: "📱", title: "Mobile Developer", level: "Entry → Senior" },
    { icon: "🔐", title: "Cybersecurity Engineer", level: "Mid → Senior" },
    { icon: "☁️", title: "Cloud Engineer", level: "Mid → Senior" },
    { icon: "🔗", title: "Blockchain Developer", level: "Entry → Senior" },
    { icon: "🤖", title: "AI/ML Engineer", level: "Mid → Senior" },
  ],
  data: [
    { icon: "📊", title: "Data Analyst", level: "Entry → Mid" },
    { icon: "🧠", title: "Data Scientist", level: "Mid → Senior" },
    { icon: "🏗️", title: "Data Engineer", level: "Mid → Senior" },
    { icon: "🤖", title: "ML Engineer", level: "Mid → Senior" },
    { icon: "📈", title: "Business Intelligence Analyst", level: "Entry → Mid" },
    { icon: "🔬", title: "Research Scientist", level: "Senior" },
  ],
  product: [
    { icon: "🗺️", title: "Product Manager", level: "Entry → Senior" },
    { icon: "📋", title: "Product Owner", level: "Entry → Mid" },
    { icon: "🚀", title: "Growth Manager", level: "Mid → Senior" },
    { icon: "🔍", title: "UX Researcher", level: "Entry → Senior" },
    { icon: "⚙️", title: "Technical Program Manager", level: "Mid → Senior" },
  ],
  marketing: [
    { icon: "📣", title: "Digital Marketer", level: "Entry → Mid" },
    { icon: "✍️", title: "Content Strategist", level: "Entry → Senior" },
    { icon: "🔎", title: "SEO Specialist", level: "Entry → Mid" },
    { icon: "📧", title: "Email Marketing Manager", level: "Entry → Mid" },
    { icon: "📲", title: "Social Media Manager", level: "Entry → Mid" },
    { icon: "📊", title: "Marketing Analyst", level: "Mid → Senior" },
  ],
  finance: [
    { icon: "💰", title: "Financial Analyst", level: "Entry → Senior" },
    { icon: "📉", title: "Investment Analyst", level: "Mid → Senior" },
    { icon: "🏦", title: "FinTech Product Manager", level: "Mid → Senior" },
    { icon: "📑", title: "Risk Analyst", level: "Entry → Mid" },
    { icon: "🔢", title: "Quantitative Analyst", level: "Senior" },
  ],
};

const rolesSkillsData = {
  "UI/UX Designer": {
    required: ["Figma", "User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing", "Design Systems", "Typography", "Color Theory", "HTML/CSS Basics"],
    resources: [
      { type: "Course", name: "Google UX Design Certificate", desc: "Coursera — beginner friendly" },
      { type: "Tool", name: "Figma", desc: "Industry-standard design tool" },
      { type: "Book", name: "Don't Make Me Think", desc: "Steve Krug — UX fundamentals" },
      { type: "Community", name: "Dribbble", desc: "Build & showcase portfolio" },
    ]
  },
  "Visual Designer": {
    required: ["Adobe Illustrator", "Adobe Photoshop", "Typography", "Color Theory", "Layout Design", "Brand Identity", "Print Design", "Figma", "Icon Design", "Visual Hierarchy"],
    resources: [
      { type: "Course", name: "Graphic Design Specialization", desc: "Coursera — CalArts" },
      { type: "Tool", name: "Adobe Creative Cloud", desc: "Industry-standard suite" },
      { type: "Book", name: "The Elements of Typographic Style", desc: "Robert Bringhurst" },
      { type: "Community", name: "Behance", desc: "Portfolio & inspiration" },
    ]
  },
  "Product Designer": {
    required: ["Figma", "Design Systems", "User Research", "Prototyping", "Cross-functional Collaboration", "Visual Design", "Usability Testing", "Product Thinking", "Data-Informed Design", "Accessibility"],
    resources: [
      { type: "Course", name: "Product Design by Google (UX cert)", desc: "Coursera" },
      { type: "Book", name: "Hooked — Nir Eyal", desc: "Design for habit formation" },
      { type: "Tool", name: "Maze", desc: "Rapid usability testing" },
      { type: "Community", name: "UX Collective", desc: "Articles & case studies" },
    ]
  },
  "Frontend Developer": {
    required: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Git", "REST APIs", "Responsive Design", "Web Performance", "Testing"],
    resources: [
      { type: "Course", name: "The Odin Project", desc: "Free full-stack curriculum" },
      { type: "Course", name: "JavaScript.info", desc: "Modern JS tutorial" },
      { type: "Tool", name: "VS Code", desc: "Popular code editor" },
      { type: "Platform", name: "Frontend Mentor", desc: "Real-world projects" },
    ]
  },
  "Backend Developer": {
    required: ["Node.js / Python / Java", "REST API Design", "SQL", "NoSQL Databases", "Authentication & Auth", "Docker", "Git", "System Design", "Testing", "Cloud (AWS/GCP/Azure)"],
    resources: [
      { type: "Course", name: "CS50 — Harvard", desc: "Free, rigorous CS foundation" },
      { type: "Platform", name: "LeetCode", desc: "Algorithms & coding interviews" },
      { type: "Book", name: "Designing Data-Intensive Applications", desc: "Martin Kleppmann" },
      { type: "Tool", name: "Postman", desc: "API development & testing" },
    ]
  },
  "Full Stack Developer": {
    required: ["HTML/CSS/JS", "React or Vue", "Node.js", "SQL", "REST APIs", "Git", "Docker", "Cloud Deployment", "Authentication", "Testing"],
    resources: [
      { type: "Course", name: "Full Stack Open (Helsinki)", desc: "Free university course" },
      { type: "Platform", name: "freeCodeCamp", desc: "Free certifications" },
      { type: "Platform", name: "roadmap.sh", desc: "Curated learning paths" },
      { type: "Tool", name: "Vercel / Railway", desc: "Easy deployment platforms" },
    ]
  },
  "Data Analyst": {
    required: ["SQL", "Excel / Google Sheets", "Python / R", "Data Visualization", "Statistics", "Tableau / Power BI", "Business Acumen", "Communication", "Critical Thinking", "Data Cleaning"],
    resources: [
      { type: "Course", name: "Google Data Analytics", desc: "Coursera certificate" },
      { type: "Tool", name: "Tableau Public", desc: "Free data viz tool" },
      { type: "Practice", name: "Mode Analytics", desc: "SQL practice environment" },
      { type: "Book", name: "Storytelling with Data", desc: "Cole Nussbaumer Knaflic" },
    ]
  },
  "Data Scientist": {
    required: ["Python", "Machine Learning", "Statistics", "SQL", "Feature Engineering", "Data Visualization", "Deep Learning Basics", "Model Evaluation", "Pandas / NumPy", "Communication"],
    resources: [
      { type: "Course", name: "ML Specialization — Andrew Ng", desc: "Coursera — gold standard" },
      { type: "Platform", name: "Kaggle", desc: "Competitions & free courses" },
      { type: "Book", name: "Hands-On ML — Aurélien Géron", desc: "Practical ML with Python" },
      { type: "Tool", name: "Jupyter Notebooks", desc: "Standard data science IDE" },
    ]
  },
  "Product Manager": {
    required: ["User Research", "Roadmapping", "Agile / Scrum", "Data Analysis", "Stakeholder Management", "PRD Writing", "A/B Testing", "SQL Basics", "Design Thinking", "Go-to-Market Strategy"],
    resources: [
      { type: "Course", name: "Product School", desc: "PM certification" },
      { type: "Book", name: "Inspired by Marty Cagan", desc: "Product management bible" },
      { type: "Community", name: "Product Hunt", desc: "Stay updated on products" },
      { type: "Tool", name: "Notion", desc: "Write PRDs & roadmaps" },
    ]
  },
  "Digital Marketer": {
    required: ["SEO", "Google Analytics", "Content Strategy", "Email Marketing", "Paid Advertising", "Social Media", "Copywriting", "A/B Testing", "CRM Tools", "Marketing Funnels"],
    resources: [
      { type: "Course", name: "Google Digital Marketing Cert", desc: "Free from Google" },
      { type: "Tool", name: "HubSpot Academy", desc: "Free marketing certifications" },
      { type: "Platform", name: "SEMrush Academy", desc: "SEO & content marketing" },
      { type: "Book", name: "This Is Marketing — Seth Godin", desc: "Modern marketing philosophy" },
    ]
  },
  "Financial Analyst": {
    required: ["Financial Modeling", "Excel", "Valuation", "Accounting Principles", "Risk Analysis", "Data Analysis", "PowerPoint", "Bloomberg / FactSet", "Communication", "Attention to Detail"],
    resources: [
      { type: "Course", name: "CFI Financial Modeling", desc: "Industry-recognized free cert" },
      { type: "Platform", name: "Wall Street Prep", desc: "Used by top finance firms" },
      { type: "Book", name: "Financial Modeling — Benninga", desc: "Excel-based financial models" },
      { type: "Tool", name: "Bloomberg Terminal", desc: "Professional finance data" },
    ]
  },
  "default": {
    required: ["Problem Solving", "Communication", "Data Literacy", "Project Management", "Collaboration", "Critical Thinking", "Domain Knowledge", "Tool Proficiency", "Adaptability", "Time Management"],
    resources: [
      { type: "Platform", name: "Coursera", desc: "Online courses from top unis" },
      { type: "Platform", name: "LinkedIn Learning", desc: "Professional skill courses" },
      { type: "Community", name: "Reddit communities", desc: "Find your niche" },
      { type: "Practice", name: "Side projects", desc: "Build real portfolio work" },
    ]
  }
};

// ========================
//  QUIZ DATA
// ========================
const quizData = {
  "UI/UX Designer": [
    { skill: "Figma", q: "Which Figma feature allows multiple team members to edit the same file simultaneously?", options: ["Auto Layout", "Multiplayer / Live Collaboration", "Component Variants", "Prototype Flows"], answer: 1 },
    { skill: "User Research", q: "Which research method is BEST for understanding WHY users behave a certain way?", options: ["Analytics dashboards", "A/B testing", "In-depth user interviews", "Heatmaps"], answer: 2 },
    { skill: "Wireframing", q: "What is the primary purpose of a low-fidelity wireframe?", options: ["To show final color and typography", "To map layout and structure quickly without detail", "To write code-ready specs", "To demonstrate animations"], answer: 1 },
    { skill: "Prototyping", q: "What distinguishes an interactive prototype from a static mockup?", options: ["It uses real data", "It has clickable flows simulating user interaction", "It is coded in HTML", "It includes brand assets"], answer: 1 },
    { skill: "Usability Testing", q: "In a moderated usability test, the facilitator's role is to:", options: ["Complete tasks for the participant", "Observe and ask clarifying questions without leading", "Fix bugs in real time", "Redesign screens on the fly"], answer: 1 },
    { skill: "Design Systems", q: "A design system's primary benefit is:", options: ["Making every screen look identical", "Ensuring consistency and speeding up design/development", "Replacing user research", "Automating code deployment"], answer: 1 },
    { skill: "Typography", q: "The space between individual letter pairs (not general letter-spacing) is called:", options: ["Leading", "Tracking", "Kerning", "Baseline"], answer: 2 },
    { skill: "Color Theory", q: "Colors directly opposite each other on the color wheel are called:", options: ["Analogous", "Triadic", "Complementary", "Split-complementary"], answer: 2 },
    { skill: "Visual Design", q: "The Gestalt principle that objects near each other are perceived as a group is called:", options: ["Similarity", "Proximity", "Closure", "Continuity"], answer: 1 },
    { skill: "HTML/CSS Basics", q: "In CSS Flexbox, which property controls alignment along the CROSS axis?", options: ["justify-content", "align-items", "flex-direction", "flex-wrap"], answer: 1 },
    { skill: "User Research", q: "An affinity diagram is used to:", options: ["Create pixel-perfect mockups", "Group and synthesize large volumes of qualitative research data", "Document API endpoints", "Map database schemas"], answer: 1 },
    { skill: "Prototyping", q: "Micro-interactions in design refer to:", options: ["Tiny on-screen animations responding to user actions", "Backend server calls", "Unit tests for UI components", "Database queries"], answer: 0 },
    { skill: "Figma", q: "What does 'Auto Layout' in Figma primarily help with?", options: ["Exporting assets automatically", "Creating responsive frames that resize based on content", "Generating color palettes", "Writing CSS code"], answer: 1 },
    { skill: "Usability Testing", q: "What is the '5-second test' in UX research?", options: ["Testing how long a page loads", "Showing a design for 5 seconds to test first impressions", "Timing how fast users complete a task", "A 5-question survey"], answer: 1 },
    { skill: "Design Systems", q: "What are 'design tokens' in a design system?", options: ["NFT-based design assets", "Named variables that store design decisions like colors and spacing", "Figma plugin licenses", "Component-level code snippets"], answer: 1 },
  ],

  "Frontend Developer": [
    { skill: "JavaScript", q: "What does the 'typeof null' expression return in JavaScript?", options: ['"null"', '"undefined"', '"object"', '"boolean"'], answer: 2 },
    { skill: "React", q: "Which React hook is used for side effects like API calls?", options: ["useState", "useRef", "useEffect", "useMemo"], answer: 2 },
    { skill: "CSS", q: "Which CSS property creates a new stacking context?", options: ["display: flex", "position: relative with z-index", "color", "font-size"], answer: 1 },
    { skill: "TypeScript", q: "What does the 'readonly' modifier do in TypeScript?", options: ["Makes a variable invisible", "Prevents a property from being reassigned after creation", "Deletes a property at runtime", "Exports a class"], answer: 1 },
    { skill: "HTML", q: "The HTML attribute 'aria-label' is used for:", options: ["SEO meta tags", "CSS styling", "Accessibility — providing a text alternative for screen readers", "Form validation"], answer: 2 },
    { skill: "Git", q: "What does 'git rebase' do compared to 'git merge'?", options: ["Creates a new branch", "Rewrites commit history by re-applying commits on top of another branch", "Deletes a remote repository", "Stashes uncommitted changes"], answer: 1 },
    { skill: "REST APIs", q: "Which HTTP method is idempotent AND used to fully update a resource?", options: ["POST", "PATCH", "PUT", "DELETE"], answer: 2 },
    { skill: "Web Performance", q: "What does 'code splitting' achieve in web performance?", options: ["Minifies CSS", "Breaks JS bundles into smaller chunks loaded on demand", "Compresses images", "Enables server-side rendering"], answer: 1 },
    { skill: "Responsive Design", q: "CSS Grid's 'fr' unit stands for:", options: ["Frame", "Fraction of available space", "Fixed ratio", "Font-relative"], answer: 1 },
    { skill: "Testing", q: "A 'unit test' tests:", options: ["The entire application end-to-end", "A single, isolated function or component", "Network API responses only", "Database queries only"], answer: 1 },
    { skill: "JavaScript", q: "What is the output of: console.log(0.1 + 0.2 === 0.3) in JavaScript?", options: ["true", "false", "undefined", "NaN"], answer: 1 },
    { skill: "React", q: "In React, what triggers a re-render of a component?", options: ["Changing a local const variable", "Updating state or receiving new props", "Adding an event listener", "Importing a new module"], answer: 1 },
    { skill: "CSS", q: "The CSS 'specificity' order from lowest to highest is:", options: ["Inline → ID → Class → Element", "Element → Class → ID → Inline", "Class → Element → Inline → ID", "ID → Inline → Class → Element"], answer: 1 },
    { skill: "Web Performance", q: "Largest Contentful Paint (LCP) measures:", options: ["Time to first server response", "Time until the largest visible content element is rendered", "Number of DOM elements", "JavaScript execution time"], answer: 1 },
    { skill: "TypeScript", q: "What is a 'union type' in TypeScript?", options: ["Combining two classes", "A type that can be one of several specified types (A | B)", "A database join operation", "A CSS variable"], answer: 1 },
  ],

  "Data Analyst": [
    { skill: "SQL", q: "Which SQL clause filters results AFTER grouping?", options: ["WHERE", "HAVING", "FILTER", "LIMIT"], answer: 1 },
    { skill: "Statistics", q: "The median is preferred over the mean when data contains:", options: ["Normal distribution", "Outliers / skewed distribution", "Even numbers only", "Categorical variables"], answer: 1 },
    { skill: "Data Visualization", q: "A scatter plot is best used to show:", options: ["Category frequencies", "The relationship/correlation between two numerical variables", "Time series trends", "Part-to-whole composition"], answer: 1 },
    { skill: "Python / R", q: "In Python's pandas, what does df.groupby('col').agg('sum') do?", options: ["Filters rows where col is null", "Groups data by 'col' and sums all numeric columns per group", "Sorts the dataframe by 'col'", "Deletes duplicate rows"], answer: 1 },
    { skill: "Excel / Google Sheets", q: "What does a VLOOKUP's fourth argument 'FALSE' specify?", options: ["Return the first match found", "Perform an exact match lookup", "Sort the lookup column", "Return FALSE if not found"], answer: 1 },
    { skill: "Tableau / Power BI", q: "A 'calculated field' in Tableau/Power BI is:", options: ["A field imported from SQL", "A new field created using formulas on existing data", "A filter applied to a view", "A dashboard layout setting"], answer: 1 },
    { skill: "Data Cleaning", q: "Which technique handles missing numerical data by replacing it with the column average?", options: ["One-hot encoding", "Mean imputation", "Normalization", "Binning"], answer: 1 },
    { skill: "Business Acumen", q: "KPI stands for:", options: ["Key Productivity Index", "Key Performance Indicator", "Knowledge Process Integration", "Key Predictive Intelligence"], answer: 1 },
    { skill: "Critical Thinking", q: "Confounding variables in data analysis refer to:", options: ["Variables that are perfectly correlated", "Hidden variables that affect both the independent and dependent variables", "Variables with too many NULL values", "Duplicate rows in a dataset"], answer: 1 },
    { skill: "Communication", q: "The 'so what?' principle in data storytelling means:", options: ["Ending presentations with questions", "Always leading with the insight and business implication, not the method", "Using only pie charts", "Including raw data tables in slides"], answer: 1 },
    { skill: "SQL", q: "What is the difference between INNER JOIN and LEFT JOIN?", options: ["LEFT JOIN is faster", "INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table", "They are identical", "INNER JOIN works on dates only"], answer: 1 },
    { skill: "Statistics", q: "A p-value < 0.05 in hypothesis testing typically indicates:", options: ["The hypothesis is proven true", "Statistical significance — the result is unlikely due to chance", "The sample size is too small", "The data is normally distributed"], answer: 1 },
    { skill: "Data Visualization", q: "When should you use a pie chart?", options: ["When comparing many categories over time", "When showing exactly 2-5 parts of a whole where one clearly dominates", "For correlation analysis", "For showing distributions"], answer: 1 },
    { skill: "Data Cleaning", q: "What is 'data normalization' in the context of preprocessing?", options: ["Removing duplicate rows", "Scaling numerical values to a standard range (e.g. 0-1)", "Converting strings to numbers", "Filling null values"], answer: 1 },
    { skill: "Python / R", q: "In pandas, what does df.isna().sum() return?", options: ["Number of rows in df", "Count of missing values per column", "Sum of all numeric columns", "Boolean mask of the dataframe"], answer: 1 },
  ],

  "Product Manager": [
    { skill: "Roadmapping", q: "An outcome-based roadmap differs from a feature roadmap in that it focuses on:", options: ["List of features to ship each quarter", "Business and user outcomes, not specific deliverables", "Engineering tasks", "Budget allocation"], answer: 1 },
    { skill: "User Research", q: "The 'Jobs to Be Done' (JTBD) framework focuses on:", options: ["Employee job descriptions", "The underlying progress a user is trying to make in their life", "Feature specifications", "Technical requirements"], answer: 1 },
    { skill: "Agile / Scrum", q: "In Scrum, a 'Sprint Retrospective' is held to:", options: ["Plan the next sprint backlog", "Demonstrate new features to stakeholders", "Reflect on the process and identify improvements for the team", "Estimate story points"], answer: 2 },
    { skill: "A/B Testing", q: "A 'null hypothesis' in an A/B test states:", options: ["Variant B is better than A", "There is no significant difference between A and B", "The test should be stopped", "Sample size is insufficient"], answer: 1 },
    { skill: "Data Analysis", q: "DAU/MAU ratio measures:", options: ["Revenue per user", "User stickiness — how often monthly users return daily", "Churn rate", "NPS score"], answer: 1 },
    { skill: "Stakeholder Management", q: "The RACI matrix defines:", options: ["Sprint velocity", "Roles: Responsible, Accountable, Consulted, Informed for project tasks", "Revenue metrics", "Risk categories"], answer: 1 },
    { skill: "PRD Writing", q: "A Product Requirements Document (PRD) typically includes all EXCEPT:", options: ["Problem statement", "Success metrics", "Source code", "User stories"], answer: 2 },
    { skill: "Design Thinking", q: "The 'How Might We' (HMW) technique is used in which design thinking phase?", options: ["Test", "Prototype", "Define", "Implement"], answer: 2 },
    { skill: "Go-to-Market Strategy", q: "Product-led growth (PLG) means:", options: ["Marketing leads all growth", "The product itself is the primary driver of customer acquisition and retention", "Sales teams drive all revenue", "Growth relies on partnerships"], answer: 1 },
    { skill: "SQL Basics", q: "As a PM, you need the count of active users per country. The SQL clause you need is:", options: ["ORDER BY", "GROUP BY", "HAVING", "UNION"], answer: 1 },
    { skill: "Agile / Scrum", q: "What is the purpose of a 'Definition of Done' in Scrum?", options: ["Defines what 'done' means for a backlog item — quality criteria that must be met", "Marks the end of a sprint", "A checklist for hiring developers", "Describes the product vision"], answer: 0 },
    { skill: "A/B Testing", q: "What is 'novelty effect' in A/B testing?", options: ["When variant B is genuinely better", "Temporary engagement boost for a new variant that fades over time", "Statistical significance threshold", "A type of selection bias"], answer: 1 },
    { skill: "User Research", q: "A 'persona' in product management is:", options: ["A real customer's profile", "A fictional, research-based archetype representing a key user segment", "An employee avatar", "A competitive analysis template"], answer: 1 },
    { skill: "Data Analysis", q: "What does 'cohort analysis' help product managers understand?", options: ["Feature priority", "How groups of users acquired at the same time behave over time", "Server performance", "A/B test variance"], answer: 1 },
    { skill: "Roadmapping", q: "What is 'MoSCoW prioritization'?", options: ["A Moscow-based framework", "Must have / Should have / Could have / Won't have — a prioritization method", "Minimum, Optimal, Scale, Cost, Outcome, Worth", "A sprint planning ceremony"], answer: 1 },
  ],

  "Data Scientist": [
    { skill: "ML Engineering", q: "Overfitting in a machine learning model occurs when:", options: ["The model performs well on training data but poorly on unseen data", "The model is too simple", "The training data has no labels", "The model uses too little memory"], answer: 0 },
    { skill: "Statistics", q: "Bayes' Theorem is used to:", options: ["Calculate the mean of a distribution", "Update probability estimates given new evidence", "Compute gradient descent", "Normalize a dataset"], answer: 1 },
    { skill: "Python", q: "In scikit-learn, what does 'fit_transform' do?", options: ["Only fits the model", "Only transforms the data", "Fits the scaler and transforms the data in one step", "Evaluates the model"], answer: 2 },
    { skill: "Feature Engineering", q: "One-hot encoding is used to:", options: ["Normalize numerical features", "Convert categorical variables into binary columns", "Remove outliers", "Scale data to [0,1]"], answer: 1 },
    { skill: "ML Engineering", q: "Cross-validation is used to:", options: ["Train faster", "Evaluate model performance more reliably across multiple data splits", "Reduce dataset size", "Improve feature selection"], answer: 1 },
    { skill: "Deep Learning", q: "The activation function 'ReLU' outputs:", options: ["Values between -1 and 1", "Values between 0 and 1", "max(0, x) — zero for negatives, identity for positives", "log(x)"], answer: 2 },
    { skill: "Statistics", q: "A confidence interval of 95% means:", options: ["95% of data falls within the interval", "We are 95% confident the interval contains the true population parameter", "The model is 95% accurate", "5% of predictions are wrong"], answer: 1 },
    { skill: "SQL", q: "Window functions in SQL (OVER clause) allow you to:", options: ["Filter data like WHERE", "Perform calculations across a set of rows related to the current row", "Create new tables", "Join multiple tables"], answer: 1 },
    { skill: "Data Visualization", q: "A box plot displays all EXCEPT:", options: ["Median", "Interquartile range", "Outliers", "Exact mean value"], answer: 3 },
    { skill: "ML Engineering", q: "Regularization techniques like L1 (Lasso) and L2 (Ridge) are used to:", options: ["Speed up training", "Prevent overfitting by penalizing large weights", "Handle missing data", "Increase model complexity"], answer: 1 },
    { skill: "Feature Engineering", q: "What is 'feature scaling' and why is it important?", options: ["Removing features — reduces model size", "Normalizing feature ranges so distance-based algorithms are not biased by scale", "Encoding categorical features", "Splitting features into train/test"], answer: 1 },
    { skill: "Deep Learning", q: "Dropout in neural networks is a technique to:", options: ["Speed up inference", "Randomly deactivate neurons during training to prevent overfitting", "Reduce dataset size", "Normalize activations"], answer: 1 },
    { skill: "Python", q: "What does the pandas method df.pivot_table() produce?", options: ["A sorted dataframe", "A summary table aggregating data across two dimensions", "A filtered subset of data", "A plot of the dataframe"], answer: 1 },
    { skill: "Statistics", q: "The Central Limit Theorem states:", options: ["All data is normally distributed", "Sufficiently large sample means will approximate a normal distribution regardless of the population's shape", "Variance equals the square root of standard deviation", "Mean equals median in all distributions"], answer: 1 },
    { skill: "ML Engineering", q: "ROC-AUC score of 0.5 in a classifier means:", options: ["Perfect classification", "The model performs no better than random guessing", "50% accuracy", "The model needs more data"], answer: 1 },
  ],

  "Digital Marketer": [
    { skill: "SEO", q: "What does 'Domain Authority' measure?", options: ["Server uptime", "A website's predicted ability to rank in search engines", "Number of pages indexed", "Social media followers"], answer: 1 },
    { skill: "Analytics", q: "In Google Analytics, 'Bounce Rate' means:", options: ["The number of users who leave within 10 seconds", "The percentage of sessions where users visit only one page and leave", "Page load speed", "Conversion rate"], answer: 1 },
    { skill: "Email Marketing", q: "A/B testing in email campaigns most commonly tests:", options: ["Server deliverability", "Subject lines to maximize open rates", "Sender IP addresses", "Email template coding language"], answer: 1 },
    { skill: "Content Strategy", q: "A content funnel's TOFU (Top of Funnel) content goal is:", options: ["Converting leads to customers", "Retaining existing customers", "Generating brand awareness and attracting new audiences", "Upselling premium products"], answer: 2 },
    { skill: "Paid Advertising", q: "What does 'ROAS' stand for in paid advertising?", options: ["Reach of Advertising Spend", "Return on Ad Spend", "Rate of Audience Segmentation", "Revenue on Affiliate Sales"], answer: 1 },
    { skill: "SEO", q: "What is a 'canonical tag' used for?", options: ["Speeding up page load", "Indicating the preferred URL version to avoid duplicate content issues", "Blocking search engine crawlers", "Adding structured data"], answer: 1 },
    { skill: "Social Media", q: "The Instagram algorithm primarily rewards content that:", options: ["Has the most hashtags", "Generates early and high engagement (saves, shares, comments)", "Is posted at midnight", "Uses only vertical video"], answer: 1 },
    { skill: "Analytics", q: "UTM parameters in URLs are used to:", options: ["Secure a website with HTTPS", "Track the source, medium, and campaign of traffic in analytics", "Redirect broken links", "Speed up page crawling"], answer: 1 },
    { skill: "Email Marketing", q: "GDPR in email marketing requires:", options: ["Sending emails weekly", "Explicit consent from users before sending marketing emails", "Using only plain text emails", "Having a .eu domain"], answer: 1 },
    { skill: "Content Strategy", q: "What is 'content repurposing'?", options: ["Deleting old content", "Adapting existing content into new formats for different channels", "Copying competitor content", "Writing content for multiple authors"], answer: 1 },
    { skill: "Paid Advertising", q: "In Google Ads, Quality Score affects:", options: ["Only ad impressions", "Ad rank and cost-per-click — higher QS lowers CPC", "Only the display network", "Organic search rankings"], answer: 1 },
    { skill: "SEO", q: "Backlinks are important for SEO because:", options: ["They increase page load speed", "They signal to search engines that others vouch for your content, boosting authority", "They reduce bounce rate", "They improve Core Web Vitals"], answer: 1 },
    { skill: "Analytics", q: "What is 'attribution modeling' in marketing analytics?", options: ["Attributing costs to teams", "Assigning credit to marketing touchpoints that led to a conversion", "Calculating average order value", "Measuring email deliverability"], answer: 1 },
    { skill: "Social Media", q: "What metric best measures the TRUE reach of a social post?", options: ["Likes", "Impressions (unique accounts that saw the post)", "Follower count", "Comments"], answer: 1 },
    { skill: "Content Strategy", q: "What is the primary purpose of a 'pillar page' in SEO content strategy?", options: ["A paid landing page", "A comprehensive, authoritative page on a broad topic that links to related cluster content", "A 404 error page", "A user login page"], answer: 1 },
  ],

  "Financial Analyst": [
    { skill: "Financial Modeling", q: "In a DCF (Discounted Cash Flow) model, the terminal value represents:", options: ["Revenue in year 1", "The present value of all cash flows beyond the explicit forecast period", "The company's current stock price", "Total debt outstanding"], answer: 1 },
    { skill: "Accounting", q: "EBITDA stands for:", options: ["Earnings Before Taxes, Dividends, and Amortization", "Earnings Before Interest, Taxes, Depreciation, and Amortization", "Effective Base Tax and Depreciation Adjustment", "Estimated Budget for Tax and Dividend Allotment"], answer: 1 },
    { skill: "Excel", q: "What does the Excel function INDEX-MATCH do compared to VLOOKUP?", options: ["It is slower", "It can look up values in any direction (left/right) and is more flexible", "It only works on sorted data", "It only returns text values"], answer: 1 },
    { skill: "Valuation", q: "P/E ratio (Price-to-Earnings) is used to:", options: ["Measure liquidity", "Value a company relative to its earnings per share", "Calculate dividend yield", "Assess credit risk"], answer: 1 },
    { skill: "Risk Analysis", q: "What does 'Value at Risk' (VaR) measure?", options: ["Expected profit", "Maximum potential loss over a period at a given confidence level", "Average return", "Beta coefficient"], answer: 1 },
    { skill: "Financial Modeling", q: "What are the three core financial statements?", options: ["Budget, Forecast, Variance", "Income Statement, Balance Sheet, Cash Flow Statement", "Revenue, Expenses, Profit", "Assets, Liabilities, Dividends"], answer: 1 },
    { skill: "Accounting", q: "Working capital is defined as:", options: ["Total Assets − Total Liabilities", "Current Assets − Current Liabilities", "Revenue − Operating Expenses", "Equity − Long-term Debt"], answer: 1 },
    { skill: "Valuation", q: "The EV/EBITDA multiple is preferred over P/E for comparing companies because:", options: ["It uses net income", "It is capital-structure neutral and accounts for different debt levels", "It is easier to calculate", "It uses book value"], answer: 1 },
    { skill: "Risk Analysis", q: "Beta (β) in finance measures:", options: ["A company's credit rating", "A stock's volatility relative to the overall market", "Dividend payout ratio", "Return on equity"], answer: 1 },
    { skill: "Excel", q: "In Excel financial modeling, a 'circular reference' often arises from:", options: ["VLOOKUP errors", "Interest expense calculations linked to debt that depends on the same interest", "Pivot tables", "Chart formatting"], answer: 1 },
    { skill: "Financial Modeling", q: "Sensitivity analysis in financial models tests:", options: ["Data validation rules", "How changes in key assumptions impact the output", "Formatting consistency", "Formula auditing"], answer: 1 },
    { skill: "Accounting", q: "Deferred revenue on the balance sheet represents:", options: ["Revenue already earned", "Cash received for goods/services not yet delivered — a liability", "Overdue receivables", "Depreciation expense"], answer: 1 },
    { skill: "Valuation", q: "What is a 'comparable company analysis' (comps)?", options: ["Comparing two financial models", "Valuing a company by benchmarking its multiples against similar public companies", "A peer review of financial statements", "Benchmarking employee salaries"], answer: 1 },
    { skill: "Risk Analysis", q: "A Monte Carlo simulation in finance is used to:", options: ["Track stock prices in real time", "Model probability distributions of outcomes by running thousands of scenarios", "Calculate tax obligations", "Build a trading algorithm"], answer: 1 },
    { skill: "Accounting", q: "The difference between cash-basis and accrual-basis accounting is:", options: ["Cash-basis uses a spreadsheet, accrual uses software", "Cash-basis records transactions when cash changes hands; accrual records when earned/incurred", "There is no difference", "Accrual is only for large corporations"], answer: 1 },
  ],
};

// Skill-specific learning resources for quiz weak areas
const skillResourceMap = {
  "Figma": [
    { type: "Course", name: "Figma Essentials (Udemy)", url: "https://www.udemy.com/course/figma-ux/", desc: "Complete Figma from scratch" },
    { type: "YouTube", name: "Figma YouTube Channel", url: "https://www.youtube.com/@Figma", desc: "Official tutorials & tips" },
  ],
  "User Research": [
    { type: "Course", name: "UX Research Methods (NN/g)", url: "https://www.nngroup.com/training/", desc: "World-leading UX research training" },
    { type: "Book", name: "Just Enough Research", url: "https://abookapart.com/products/just-enough-research", desc: "Erika Hall — practical guide" },
  ],
  "Wireframing": [
    { type: "Article", name: "Wireframing Guide — UX Design Institute", url: "https://www.uxdesigninstitute.com/blog/what-is-wireframing/", desc: "Comprehensive intro" },
    { type: "Tool", name: "Balsamiq", url: "https://balsamiq.com/", desc: "Fast low-fi wireframing tool" },
  ],
  "JavaScript": [
    { type: "Course", name: "JavaScript.info", url: "https://javascript.info", desc: "Modern, thorough JS tutorial" },
    { type: "Course", name: "Eloquent JavaScript (free)", url: "https://eloquentjavascript.net", desc: "Deep dive into JS fundamentals" },
  ],
  "React": [
    { type: "Docs", name: "React Official Docs", url: "https://react.dev", desc: "Best starting point for React" },
    { type: "Course", name: "Scrimba React Course", url: "https://scrimba.com/learn/learnreact", desc: "Interactive, beginner-friendly" },
  ],
  "SQL": [
    { type: "Platform", name: "SQLZoo", url: "https://sqlzoo.net", desc: "Interactive SQL exercises" },
    { type: "Platform", name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/", desc: "Analytics-focused SQL learning" },
  ],
  "Statistics": [
    { type: "Course", name: "Statistics with Python (Coursera)", url: "https://www.coursera.org/specializations/statistics-with-python", desc: "University of Michigan" },
    { type: "Book", name: "Naked Statistics", url: "https://www.goodreads.com/book/show/17986418", desc: "Charles Wheelan — stats made fun" },
  ],
  "Python / R": [
    { type: "Course", name: "Python for Everybody (Coursera)", url: "https://www.coursera.org/specializations/python", desc: "Dr. Chuck — beginner to advanced" },
    { type: "Platform", name: "Kaggle Learn", url: "https://www.kaggle.com/learn", desc: "Free micro-courses for data science" },
  ],
  "ML Engineering": [
    { type: "Course", name: "Machine Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction", desc: "Andrew Ng — industry standard" },
    { type: "Platform", name: "Fast.ai", url: "https://www.fast.ai", desc: "Practical deep learning for coders" },
  ],
  "SEO": [
    { type: "Course", name: "Google SEO Fundamentals", url: "https://learndigital.withgoogle.com/digitalgarage/course/google-analytics", desc: "Free from Google" },
    { type: "Tool", name: "Ahrefs Academy", url: "https://ahrefs.com/academy", desc: "Free SEO training from pros" },
  ],
  "Analytics": [
    { type: "Course", name: "Google Analytics Certification", url: "https://skillshop.google.com/", desc: "Official Google certification, free" },
    { type: "Platform", name: "Measure School", url: "https://measureschool.com", desc: "GA4 tutorials and guides" },
  ],
  "Financial Modeling": [
    { type: "Course", name: "CFI Financial Modeling (free)", url: "https://corporatefinanceinstitute.com/resources/financial-modeling/", desc: "Industry-recognized certification" },
    { type: "Platform", name: "Wall Street Prep", url: "https://www.wallstreetprep.com/", desc: "Used by top finance firms" },
  ],
  "Valuation": [
    { type: "Course", name: "NYU Valuation Course (Damodaran)", url: "https://pages.stern.nyu.edu/~adamodar/", desc: "Free from the 'Dean of Valuation'" },
    { type: "Book", name: "Investment Valuation — Damodaran", url: "https://www.goodreads.com/book/show/693507", desc: "Comprehensive valuation bible" },
  ],
  "Agile / Scrum": [
    { type: "Certification", name: "Scrum.org PSM I", url: "https://www.scrum.org/assessments/professional-scrum-master-i-certification", desc: "Most recognized Scrum certification" },
    { type: "Course", name: "Scrum Fundamentals (ScrumStudy)", url: "https://www.scrumstudy.com/", desc: "Free beginner Scrum course" },
  ],
  "Roadmapping": [
    { type: "Article", name: "Product Roadmaps Relaunched", url: "https://www.mindtheproduct.com/", desc: "Mind the Product — PM community" },
    { type: "Tool", name: "Productboard", url: "https://www.productboard.com/", desc: "Industry-standard roadmapping tool" },
  ],
  "default": [
    { type: "Platform", name: "Coursera", url: "https://www.coursera.org", desc: "Online courses from top universities" },
    { type: "Platform", name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/", desc: "Professional skill development" },
  ]
};

// Quiz role icons
const quizRoleIcons = {
  "UI/UX Designer": "🎨",
  "Frontend Developer": "⚛️",
  "Data Analyst": "📊",
  "Data Scientist": "🧠",
  "Product Manager": "🗺️",
  "Digital Marketer": "📣",
  "Financial Analyst": "💰",
};

// ========================
//  GLOBALS — ANALYZER
// ========================
let selectedRole = "";
let uploadedFile = null;
let detectedSkills = [];
let resumeText = "";

// ========================
//  GLOBALS — QUIZ
// ========================
let quizRole = "";
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizAnswers = [];

// ========================
//  MOBILE NAV
// ========================
function setupMobileNav() {
  const nav = document.querySelector('.nav');

  // Create hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'nav-hamburger';
  hamburger.setAttribute('aria-label', 'Toggle menu');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  nav.appendChild(hamburger);

  // Create mobile overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav-mobile-overlay';
  overlay.innerHTML = `
    <div class="nav-mobile-menu">
      <button class="nav-mobile-close" aria-label="Close menu">✕</button>
      <ul class="nav-mobile-links">
        <li><a href="#how" onclick="closeMobileNav()">How It Works</a></li>
        <li><a href="#roles" onclick="closeMobileNav()">Roles</a></li>
        <li><a href="#analyzer" onclick="closeMobileNav()">Analyze</a></li>
        <li><a href="#quiz-section" onclick="closeMobileNav()">Quiz</a></li>
      </ul>
      <a href="#quiz-section" class="nav-cta" onclick="closeMobileNav()">Take Quiz →</a>
    </div>
  `;
  document.body.appendChild(overlay);

  hamburger.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  overlay.querySelector('.nav-mobile-close').addEventListener('click', closeMobileNav);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMobileNav();
  });
}

function closeMobileNav() {
  const overlay = document.querySelector('.nav-mobile-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ========================
//  INIT
// ========================
document.addEventListener("DOMContentLoaded", () => {
  renderIndustryTabs();
  renderRoles("design");
  populateRoleSelect();
  setupUpload();
  populateQuizRoles();
  populateQuizRoleSelect();
  setupMobileNav();
  // Init gamification
  if (typeof GS !== 'undefined') {
    GS.load();
    document.body.classList.add('gs-active');
    syncStreakPanel();
  }
});

// ========================
//  INDUSTRY TABS
// ========================
function renderIndustryTabs() {
  const tabs = document.getElementById("industryTabs");
  tabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-btn")) {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      renderRoles(e.target.dataset.industry);
    }
  });
}

function renderRoles(industry) {
  const grid = document.getElementById("rolesGrid");
  const roles = industriesData[industry] || [];
  grid.innerHTML = roles.map(r => `
    <div class="role-card" data-role="${r.title}" onclick="selectRoleFromCard('${r.title}')">
      <div class="role-icon">${r.icon}</div>
      <div class="role-title">${r.title}</div>
      <div class="role-level">${r.level}</div>
    </div>
  `).join("");
}

function selectRoleFromCard(role) {
  document.getElementById("roleSelect").value = role;
  document.getElementById("customRole").value = "";
  document.querySelector("#analyzer").scrollIntoView({ behavior: "smooth" });
  document.querySelectorAll(".role-card").forEach(c => {
    c.style.borderColor = c.dataset.role === role ? "var(--accent)" : "";
  });
}

// ========================
//  ROLE SELECT POPULATE
// ========================
function populateRoleSelect() {
  const sel = document.getElementById("roleSelect");
  const allRoles = Object.values(industriesData).flat().map(r => r.title);
  allRoles.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    sel.appendChild(opt);
  });
}

// ========================
//  STEP NAVIGATION — ANALYZER
// ========================
function goToStep2() {
  const sel = document.getElementById("roleSelect").value;
  const custom = document.getElementById("customRole").value.trim();
  selectedRole = sel || custom;
  if (!selectedRole) {
    alert("Please select or enter a role to continue.");
    return;
  }
  showStep("step2");
}

function goToStep1() { showStep("step1"); }

function showStep(id) {
  document.querySelectorAll(".analyzer-step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ========================
//  FILE UPLOAD & PDF READING
// ========================
function setupUpload() {
  const zone = document.getElementById("uploadZone");
  const input = document.getElementById("resumeInput");

  input.addEventListener("change", (e) => {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  });

  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("dragover");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("dragover"));
  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("dragover");
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });
  zone.addEventListener("click", () => input.click());
}

function handleFile(file) {
  uploadedFile = file;
  document.getElementById("fileName").textContent = file.name;
  document.getElementById("uploadZone").style.display = "none";
  document.getElementById("uploadPreview").style.display = "flex";
  if (typeof GS !== 'undefined') GS.onResumeUploaded();

  // Read file content
  const reader = new FileReader();
  reader.onload = function(e) {
    // Store raw text for text files; for PDFs we'll use filename-based keyword detection as fallback
    try {
      resumeText = e.target.result || "";
    } catch(err) {
      resumeText = file.name;
    }
  };

  if (file.type === "application/pdf") {
    // For PDF, we read as text (modern browsers can sometimes extract text from small PDFs)
    reader.readAsText(file);
    // Fallback: extract from filename
    resumeText = file.name;
  } else {
    reader.readAsText(file);
  }
}

function removeFile() {
  uploadedFile = null;
  detectedSkills = [];
  resumeText = "";
  document.getElementById("resumeInput").value = "";
  document.getElementById("uploadZone").style.display = "block";
  document.getElementById("uploadPreview").style.display = "none";
}

// ========================
//  AI RESUME ANALYSIS via Claude API
// ========================
async function analyzeSkillsWithAI(roleData, role) {
  const textToAnalyze = resumeText.length > 50
    ? resumeText.substring(0, 4000)
    : `Candidate applying for ${role} role. No resume text available — please perform analysis based on role requirements only and assume minimal experience.`;

  const requiredSkillsList = roleData.required.join(", ");

  const prompt = `You are an expert career skills analyst. Analyze this resume text and determine which skills from the required list the candidate likely has.

RESUME TEXT:
${textToAnalyze}

TARGET ROLE: ${role}

REQUIRED SKILLS FOR THIS ROLE:
${requiredSkillsList}

TASK: Analyze the resume text and identify which required skills the candidate demonstrates. Look for:
- Direct skill mentions
- Related tools/technologies that imply a skill
- Project descriptions that require certain skills
- Job titles and responsibilities that indicate skill proficiency

Return ONLY a valid JSON object with this exact structure (no markdown, no explanation):
{
  "hasSkills": ["skill1", "skill2"],
  "missingSkills": ["skill3", "skill4"],
  "score": 65,
  "summary": "Brief 1-2 sentence personalized summary of the candidate's profile",
  "topStrength": "Their single biggest strength",
  "priorityGap": "The most important skill they should learn first"
}

The "score" should be the percentage (0-100) of required skills the candidate has. Be realistic but generous — if a skill is implied by their experience, count it. The hasSkills and missingSkills arrays must together contain ALL skills from the required list.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  const text = data.content.map(i => i.text || "").join("");
  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

// ========================
//  ANALYZE
// ========================
async function analyzeSkills() {
  const roleData = rolesSkillsData[selectedRole] || rolesSkillsData["default"];

  // Show loading state
  const analyzeBtn = document.querySelector('#step2 .btn-primary');
  const originalText = analyzeBtn.textContent;
  analyzeBtn.textContent = "🧠 Analyzing...";
  analyzeBtn.disabled = true;

  // Show a loading overlay on step2
  showAnalyzingState(true);

  try {
    let hasSkills, missingSkills, score, aiSummary = null;

    if (uploadedFile && resumeText.length > 20) {
      // Use AI analysis
      const result = await analyzeSkillsWithAI(roleData, selectedRole);
      hasSkills = result.hasSkills || [];
      missingSkills = result.missingSkills || [];
      score = result.score || Math.round((hasSkills.length / roleData.required.length) * 100);
      aiSummary = result;
    } else {
      // No resume — use simulated default
      const userSkills = simulateDefaultSkills(selectedRole);
      hasSkills = roleData.required.filter(s => userSkills.map(u => u.toLowerCase()).includes(s.toLowerCase()));
      missingSkills = roleData.required.filter(s => !userSkills.map(u => u.toLowerCase()).includes(s.toLowerCase()));
      score = Math.round((hasSkills.length / roleData.required.length) * 100);
    }

    renderResults(selectedRole, hasSkills, missingSkills, score, roleData.resources, aiSummary);
    showStep("step3");
    animateRing(score, "ringFill");
    animateScore(score, "scoreNum");
    document.getElementById("quizCtaRole").textContent = selectedRole;
    if (typeof GS !== 'undefined') GS.onAnalysisCompleted(selectedRole);

  } catch (err) {
    console.error("AI analysis error:", err);
    // Fallback to simulated
    const userSkills = simulateDefaultSkills(selectedRole);
    const hasSkills = roleData.required.filter(s => userSkills.map(u => u.toLowerCase()).includes(s.toLowerCase()));
    const missingSkills = roleData.required.filter(s => !userSkills.map(u => u.toLowerCase()).includes(s.toLowerCase()));
    const score = Math.round((hasSkills.length / roleData.required.length) * 100);

    renderResults(selectedRole, hasSkills, missingSkills, score, roleData.resources, null);
    showStep("step3");
    animateRing(score, "ringFill");
    animateScore(score, "scoreNum");
    document.getElementById("quizCtaRole").textContent = selectedRole;
  } finally {
    analyzeBtn.textContent = originalText;
    analyzeBtn.disabled = false;
    showAnalyzingState(false);
  }
}

function showAnalyzingState(show) {
  let overlay = document.getElementById("analyzingOverlay");
  if (show) {
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "analyzingOverlay";
      overlay.className = "analyzing-overlay";
      overlay.innerHTML = `
        <div class="analyzing-content">
          <div class="analyzing-spinner"></div>
          <div class="analyzing-text">
            <strong>Analyzing your resume with AI...</strong>
            <p>Mapping your skills to ${selectedRole} requirements</p>
          </div>
        </div>
      `;
      document.getElementById("step2").appendChild(overlay);
    }
    overlay.style.display = "flex";
  } else {
    if (overlay) overlay.style.display = "none";
  }
}

function simulateDefaultSkills(role) {
  const roleData = rolesSkillsData[role] || rolesSkillsData["default"];
  const all = roleData.required;
  const count = Math.floor(all.length * 0.4);
  return all.slice(0, count);
}

function renderResults(role, hasSkills, missingSkills, score, resources, aiSummary) {
  document.getElementById("resultRole").textContent = role;

  // If AI provided a summary, show it
  if (aiSummary && aiSummary.summary) {
    let summaryEl = document.getElementById("aiSummaryBanner");
    if (!summaryEl) {
      summaryEl = document.createElement("div");
      summaryEl.id = "aiSummaryBanner";
      summaryEl.className = "ai-summary-banner";
      const header = document.querySelector(".results-header");
      header.insertAdjacentElement("afterend", summaryEl);
    }
    summaryEl.innerHTML = `
      <div class="ai-summary-icon">🤖</div>
      <div class="ai-summary-text">
        <strong>AI Analysis:</strong> ${aiSummary.summary}
        ${aiSummary.topStrength ? `<br><span class="ai-highlight">💪 Top Strength: ${aiSummary.topStrength}</span>` : ""}
        ${aiSummary.priorityGap ? `<br><span class="ai-gap">🎯 Priority to Learn: ${aiSummary.priorityGap}</span>` : ""}
      </div>
    `;
    summaryEl.style.display = "flex";
  } else {
    const summaryEl = document.getElementById("aiSummaryBanner");
    if (summaryEl) summaryEl.style.display = "none";
  }

  const hasList = document.getElementById("hasSkillsList");
  hasList.innerHTML = hasSkills.length
    ? hasSkills.map(s => `<li>${s}</li>`).join("")
    : `<li style="color:var(--text-muted)">No skills detected — upload your resume for AI analysis</li>`;

  const missList = document.getElementById("missingSkillsList");
  missList.innerHTML = missingSkills.map(s => `<li>${s}</li>`).join("");

  renderRoadmap(hasSkills, missingSkills);

  const rGrid = document.getElementById("resourcesGrid");
  rGrid.innerHTML = resources.map(r => `
    <div class="resource-card">
      <div class="resource-type">${r.type}</div>
      <div class="resource-name">${r.name}</div>
      <div class="resource-desc">${r.desc}</div>
    </div>
  `).join("");
}

function renderRoadmap(hasSkills, missingSkills) {
  const container = document.getElementById("roadmapNodes");
  const roadmap = [];

  roadmap.push({ label: "Foundation", status: "done" });
  hasSkills.slice(0, 3).forEach(s => roadmap.push({ label: s, status: "done" }));
  if (missingSkills.length > 0) roadmap.push({ label: missingSkills[0], status: "next" });
  if (missingSkills.length > 1) roadmap.push({ label: missingSkills[1], status: "future" });
  if (missingSkills.length > 2) roadmap.push({ label: "Advanced Skills", status: "future" });
  roadmap.push({ label: "Job Ready!", status: "future" });

  container.innerHTML = `
    <div class="roadmap-wrap">
      ${roadmap.map((n, i) => `
        <div class="roadmap-node">
          <div class="rnode-dot ${n.status}">${i + 1}</div>
          <div class="rnode-label">${n.label}</div>
        </div>
        ${i < roadmap.length - 1 ? '<div class="roadmap-connector">→</div>' : ''}
      `).join("")}
    </div>
  `;
}

// ========================
//  RING ANIMATION
// ========================
function animateRing(score, ringId) {
  const circumference = 326.7;
  const offset = circumference - (score / 100) * circumference;
  setTimeout(() => {
    document.getElementById(ringId).style.strokeDashoffset = offset;
  }, 100);
}

function animateScore(target, elId) {
  const el = document.getElementById(elId);
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + "%";
    if (current >= target) clearInterval(timer);
  }, 25);
}

// ========================
//  RESET ANALYZER
// ========================
function resetAnalyzer() {
  selectedRole = "";
  uploadedFile = null;
  detectedSkills = [];
  resumeText = "";
  document.getElementById("roleSelect").value = "";
  document.getElementById("customRole").value = "";
  removeFile();
  document.getElementById("ringFill").style.strokeDashoffset = "326.7";
  document.getElementById("scoreNum").textContent = "0%";
  const summaryEl = document.getElementById("aiSummaryBanner");
  if (summaryEl) summaryEl.style.display = "none";
  showStep("step1");
  document.querySelector("#analyzer").scrollIntoView({ behavior: "smooth" });
}

// Jump from analyzer CTA to quiz
function startQuizFromAnalyzer() {
  if (selectedRole && quizData[selectedRole]) {
    document.getElementById("quizRoleSelect").value = selectedRole;
    highlightQuizRoleCard(selectedRole);
  }
  document.querySelector("#quiz-section").scrollIntoView({ behavior: "smooth" });
}

// ========================
//  QUIZ — ROLE PICKER
// ========================
function populateQuizRoles() {
  const grid = document.getElementById("quizRoleGrid");
  const roles = Object.keys(quizData);
  grid.innerHTML = roles.map(role => `
    <div class="quiz-role-card" data-role="${role}" onclick="selectQuizRole('${role}')">
      <div class="quiz-role-icon">${quizRoleIcons[role] || "🎯"}</div>
      <div class="quiz-role-name">${role}</div>
    </div>
  `).join("");
}

function populateQuizRoleSelect() {
  const sel = document.getElementById("quizRoleSelect");
  const allRoles = Object.keys(quizData);
  allRoles.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    sel.appendChild(opt);
  });

  sel.addEventListener("change", () => {
    if (sel.value) highlightQuizRoleCard(sel.value);
  });
}

function selectQuizRole(role) {
  document.getElementById("quizRoleSelect").value = role;
  highlightQuizRoleCard(role);
}

function highlightQuizRoleCard(role) {
  document.querySelectorAll(".quiz-role-card").forEach(c => {
    c.classList.toggle("active", c.dataset.role === role);
  });
}

// ========================
//  QUIZ — START
// ========================
function startQuiz() {
  const sel = document.getElementById("quizRoleSelect").value;
  quizRole = sel;

  if (!quizRole || !quizData[quizRole]) {
    alert("Please select a role to start the quiz.");
    return;
  }

  const allQ = [...quizData[quizRole]];
  quizQuestions = shuffleArray(allQ).slice(0, 15);
  quizCurrentIndex = 0;
  quizAnswers = [];

  document.getElementById("quizRoleBadge").textContent = `${quizRoleIcons[quizRole] || "🎯"} ${quizRole}`;

  showQuizPanel("quiz-active");
  renderQuizDots();
  loadQuestion();
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ========================
//  QUIZ — QUESTION
// ========================
function loadQuestion() {
  if (quizCurrentIndex >= quizQuestions.length) {
    showQuizResults();
    return;
  }

  const q = quizQuestions[quizCurrentIndex];
  const total = quizQuestions.length;
  const skippedCount = quizAnswers.filter(a => a.skipped).length;

  document.getElementById("quizQNumber").textContent = `Q${quizCurrentIndex + 1}`;
  document.getElementById("quizQSkillTag").textContent = q.skill;
  document.getElementById("quizQuestionText").textContent = q.q;
  document.getElementById("quizProgressText").textContent = `Question ${quizCurrentIndex + 1} of ${total}`;
  document.getElementById("quizSkipCount").textContent = `${skippedCount} skipped`;

  const progress = ((quizCurrentIndex) / total) * 100;
  document.getElementById("quizProgressFill").style.width = progress + "%";

  const optionsEl = document.getElementById("quizOptions");
  optionsEl.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option" onclick="selectOption(${i})" data-idx="${i}">
      <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
      <span class="quiz-option-text">${opt}</span>
    </button>
  `).join("");

  document.getElementById("quizNextBtn").disabled = true;

  const wrap = document.getElementById("quizQuestionWrap");
  wrap.classList.remove("quiz-q-enter");
  void wrap.offsetWidth;
  wrap.classList.add("quiz-q-enter");

  updateDots();
}

function selectOption(selectedIdx) {
  const q = quizQuestions[quizCurrentIndex];
  const buttons = document.querySelectorAll(".quiz-option");

  buttons.forEach(btn => {
    btn.classList.remove("selected", "correct", "wrong");
    btn.disabled = true;
  });

  const isCorrect = selectedIdx === q.answer;

  buttons[selectedIdx].classList.add(isCorrect ? "correct" : "wrong");
  if (!isCorrect) {
    buttons[q.answer].classList.add("correct");
  }

  // GS: award XP per answer
  if (typeof GS !== 'undefined') GS.onQuestionAnswered(isCorrect);

  quizAnswers.push({
    index: quizCurrentIndex,
    answerIndex: selectedIdx,
    correct: isCorrect,
    skipped: false,
    skill: q.skill,
  });

  document.getElementById("quizNextBtn").disabled = false;
  updateDots();
}

function nextQuestion() {
  quizCurrentIndex++;
  if (quizCurrentIndex >= quizQuestions.length) {
    showQuizResults();
  } else {
    loadQuestion();
  }
}

function skipQuestion() {
  quizAnswers.push({
    index: quizCurrentIndex,
    answerIndex: null,
    correct: false,
    skipped: true,
    skill: quizQuestions[quizCurrentIndex].skill,
  });
  quizCurrentIndex++;
  if (quizCurrentIndex >= quizQuestions.length) {
    showQuizResults();
  } else {
    loadQuestion();
  }
}

function finishQuizEarly() {
  if (quizAnswers.length === 0) {
    if (!confirm("You haven't answered any questions yet. Finish anyway?")) return;
  }
  showQuizResults();
}

// ========================
//  QUIZ — DOT TRACKER
// ========================
function renderQuizDots() {
  const tracker = document.getElementById("quizDotTracker");
  tracker.innerHTML = quizQuestions.map((_, i) => `
    <div class="quiz-dot" id="qdot-${i}" title="Q${i+1}"></div>
  `).join("");
}

function updateDots() {
  quizQuestions.forEach((_, i) => {
    const dot = document.getElementById(`qdot-${i}`);
    if (!dot) return;
    dot.className = "quiz-dot";
    if (i === quizCurrentIndex) {
      dot.classList.add("current");
    } else {
      const ans = quizAnswers.find(a => a.index === i);
      if (ans) {
        if (ans.skipped) dot.classList.add("skipped");
        else if (ans.correct) dot.classList.add("correct");
        else dot.classList.add("wrong");
      }
    }
  });
}

// ========================
//  QUIZ — RESULTS
// ========================
function showQuizResults() {
  const answered = quizAnswers.filter(a => !a.skipped);
  const correct = answered.filter(a => a.correct);
  const wrong = answered.filter(a => !a.correct);
  const skipped = quizAnswers.filter(a => a.skipped);
  const unattempted = quizQuestions.length - quizAnswers.length;

  const totalSkipped = skipped.length + unattempted;
  const score = answered.length > 0 ? Math.round((correct.length / answered.length) * 100) : 0;

  document.getElementById("quizCorrectCount").textContent = correct.length;
  document.getElementById("quizWrongCount").textContent = wrong.length;
  document.getElementById("quizSkippedCount").textContent = totalSkipped;
  document.getElementById("quizResultRoleBadge").textContent = `${quizRoleIcons[quizRole] || "🎯"} ${quizRole}`;

  let verdictHTML = "";
  if (answered.length === 0) {
    verdictHTML = `<div class="verdict-badge verdict-neutral">🤷 No answers recorded — try the quiz!</div><p class="verdict-text">You skipped all questions. Attempt a few to get personalized recommendations.</p>`;
  } else if (score >= 80) {
    verdictHTML = `<div class="verdict-badge verdict-great">🏆 Excellent!</div><p class="verdict-text">You have strong foundational knowledge for <strong>${quizRole}</strong>. Focus on the remaining gaps below to reach expert level.</p>`;
  } else if (score >= 55) {
    verdictHTML = `<div class="verdict-badge verdict-good">💪 Good Progress</div><p class="verdict-text">You have a solid base for <strong>${quizRole}</strong>. Targeted practice on the weak areas below will accelerate your growth significantly.</p>`;
  } else if (score >= 30) {
    verdictHTML = `<div class="verdict-badge verdict-mid">📚 Keep Learning</div><p class="verdict-text">You're on the right track for <strong>${quizRole}</strong>. The resources below are tailored to bridge your specific skill gaps.</p>`;
  } else {
    verdictHTML = `<div class="verdict-badge verdict-low">🌱 Just Getting Started</div><p class="verdict-text">No worries — every expert started here. Use the resources below to build your foundation for <strong>${quizRole}</strong> step by step.</p>`;
  }
  document.getElementById("quizVerdict").innerHTML = verdictHTML;

  // Skill-by-skill breakdown
  const skillMap = {};
  quizQuestions.forEach((q, i) => {
    if (!skillMap[q.skill]) skillMap[q.skill] = { total: 0, correct: 0, wrong: 0, skipped: 0 };
    skillMap[q.skill].total++;
    const ans = quizAnswers.find(a => a.index === i);
    if (!ans || ans.skipped) {
      skillMap[q.skill].skipped++;
    } else if (ans.correct) {
      skillMap[q.skill].correct++;
    } else {
      skillMap[q.skill].wrong++;
    }
  });

  const skillBarsEl = document.getElementById("quizSkillBars");
  skillBarsEl.innerHTML = Object.entries(skillMap).map(([skill, data]) => {
    const attempted = data.correct + data.wrong;
    const pct = attempted > 0 ? Math.round((data.correct / attempted) * 100) : null;
    const barColor = pct === null ? "var(--text-muted)" : pct >= 70 ? "var(--success)" : pct >= 40 ? "var(--warning)" : "var(--danger)";
    const label = pct === null ? "Not attempted" : `${pct}% (${data.correct}/${attempted})`;
    return `
      <div class="skill-bar-row">
        <div class="skill-bar-label">${skill}</div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width:${pct || 0}%;background:${barColor}"></div>
        </div>
        <div class="skill-bar-score" style="color:${barColor}">${label}</div>
      </div>
    `;
  }).join("");

  // Weak areas
  const weakSkills = Object.entries(skillMap)
    .filter(([, d]) => d.wrong > 0 || (d.skipped > 0 && d.correct === 0))
    .map(([skill]) => skill);

  const weakGrid = document.getElementById("quizWeakGrid");
  if (weakSkills.length === 0) {
    weakGrid.innerHTML = `<div class="quiz-no-weak">🎉 No major weak areas — great job!</div>`;
  } else {
    weakGrid.innerHTML = weakSkills.map(skill => {
      const resources = skillResourceMap[skill] || skillResourceMap["default"];
      return `
        <div class="quiz-weak-card">
          <div class="quiz-weak-skill">⚠️ ${skill}</div>
          <div class="quiz-weak-resources">
            ${resources.map(r => `
              <a class="quiz-weak-resource-item" href="${r.url}" target="_blank" rel="noopener">
                <span class="quiz-weak-res-type">${r.type}</span>
                <span class="quiz-weak-res-name">${r.name}</span>
                <span class="quiz-weak-res-desc">${r.desc}</span>
                <span class="quiz-weak-res-arrow">→</span>
              </a>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  // Strong areas
  const strongSkills = Object.entries(skillMap)
    .filter(([, d]) => {
      const attempted = d.correct + d.wrong;
      return attempted > 0 && Math.round((d.correct / attempted) * 100) >= 70;
    })
    .map(([skill]) => skill);

  const strongSection = document.getElementById("quizStrongSection");
  const strongTags = document.getElementById("quizStrongTags");
  if (strongSkills.length > 0) {
    strongSection.style.display = "block";
    strongTags.innerHTML = strongSkills.map(s => `<span class="strong-tag">✅ ${s}</span>`).join("");
  } else {
    strongSection.style.display = "none";
  }

  // All resources
  const roleData = rolesSkillsData[quizRole] || rolesSkillsData["default"];
  const quizResourcesGrid = document.getElementById("quizResourcesGrid");
  quizResourcesGrid.innerHTML = roleData.resources.map(r => `
    <div class="resource-card">
      <div class="resource-type">${r.type}</div>
      <div class="resource-name">${r.name}</div>
      <div class="resource-desc">${r.desc}</div>
    </div>
  `).join("");

  showQuizPanel("quiz-results");
  animateRing(score, "quizRingFill");
  animateScore(score, "quizScoreNum");
  document.getElementById("quizProgressFill").style.width = "100%";
  if (typeof GS !== 'undefined') GS.onQuizCompleted(score, quizRole);
}

// ========================
//  QUIZ — PANEL SWITCHER
// ========================
function showQuizPanel(id) {
  ["quiz-pick", "quiz-active", "quiz-results"].forEach(p => {
    const el = document.getElementById(p);
    if (el) {
      if (p === id) {
        el.classList.remove("quiz-hidden");
        el.classList.add("quiz-visible");
      } else {
        el.classList.add("quiz-hidden");
        el.classList.remove("quiz-visible");
      }
    }
  });

  if (id === "quiz-results") {
    document.querySelector("#quiz-section").scrollIntoView({ behavior: "smooth" });
  }
}

function retakeQuiz() {
  startQuiz();
}

function resetQuiz() {
  quizRole = "";
  quizQuestions = [];
  quizCurrentIndex = 0;
  quizAnswers = [];
  document.getElementById("quizRoleSelect").value = "";
  document.querySelectorAll(".quiz-role-card").forEach(c => c.classList.remove("active"));
  document.getElementById("quizRingFill").style.strokeDashoffset = "326.7";
  document.getElementById("quizScoreNum").textContent = "0%";
  showQuizPanel("quiz-pick");
}

// ========================
//  GAMIFICATION HELPERS
// ========================
function syncStreakPanel() {
  const s = GS.state;
  const bigEl = document.getElementById('gs-streak-big');
  const maxEl = document.getElementById('gs-streak-max-txt');
  const levelIconEl = document.getElementById('gs-level-icon');
  const hudLevelEl = document.getElementById('gs-hud-level');

  if (bigEl) bigEl.textContent = s.streak + ' 🔥';
  if (maxEl) maxEl.textContent = 'Best: ' + s.maxStreak + ' days';

  const lvl = GS.getLevelData(s.xp);
  if (levelIconEl) levelIconEl.textContent = lvl.icon;
  if (hudLevelEl) hudLevelEl.textContent = lvl.icon + ' ' + lvl.name;

  // XP bar dual sync
  const pct = GS.getLevelProgress(s.xp);
  const fills = [document.getElementById('gs-progress-fill'), document.getElementById('gs-hud-progress-fill')];
  fills.forEach(f => { if (f) f.style.width = pct + '%'; });

  // Milestones
  ['3','7','14'].forEach(n => {
    const el = document.getElementById('gs-ms-' + n);
    if (el) {
      const done = s.streak >= parseInt(n);
      el.style.opacity = done ? '1' : '0.45';
      el.style.textDecoration = done ? 'line-through' : '';
      el.style.color = done ? '#059669' : '';
    }
  });
}

// Override GS.updateHUD to also sync streak panel
const _origUpdate = GS.updateHUD.bind(GS);
GS.updateHUD = function() { _origUpdate(); syncStreakPanel(); };
