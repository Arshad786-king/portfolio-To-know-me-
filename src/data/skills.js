/**
 * Technical Skills Configuration
 * Authoritative source: Arshad_Resume.docx
 * No fabricated skills or false expertise percentages.
 */
export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used for backend logic, algorithmic problem solving, and database querying.",
    skills: [
      { name: "Python", level: "Proficient", icon: "Code", highlight: true },
      { name: "JavaScript", level: "Proficient", icon: "FileCode", highlight: true },
      { name: "SQL", level: "Advanced Working Knowledge", icon: "Database", highlight: true }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, component-driven, and accessible client interfaces.",
    skills: [
      { name: "React", level: "Working Knowledge", icon: "Component", highlight: true },
      { name: "Vite", level: "Working Knowledge", icon: "Zap", highlight: true },
      { name: "HTML5", level: "Proficient", icon: "Layout", highlight: false },
      { name: "CSS3", level: "Proficient", icon: "Palette", highlight: false }
    ]
  },
  {
    id: "backend",
    title: "Backend & REST APIs",
    description: "Server architecture, route handling, middle-tier controllers, and API integrations.",
    skills: [
      { name: "Node.js", level: "Working Knowledge", icon: "Server", highlight: true },
      { name: "Express.js", level: "Working Knowledge", icon: "Layers", highlight: true },
      { name: "Flask", level: "Proficient", icon: "Cpu", highlight: true },
      { name: "FastAPI", level: "Working Knowledge", icon: "Zap", highlight: false },
      { name: "REST APIs", level: "Proficient", icon: "Network", highlight: true }
    ]
  },
  {
    id: "database",
    title: "Databases & ORM",
    description: "Relational schema design, document stores, and ODM data pipelines.",
    skills: [
      { name: "MySQL", level: "Proficient", icon: "Database", highlight: true },
      { name: "MongoDB", level: "Working Knowledge", icon: "HardDrive", highlight: true },
      { name: "MongoDB Atlas", level: "Working Knowledge", icon: "Cloud", highlight: false },
      { name: "Mongoose", level: "Working Knowledge", icon: "FileSpreadsheet", highlight: false }
    ]
  },
  {
    id: "security-cloud",
    title: "Security & Cloud",
    description: "Application hardening, credential security, and cloud deployment practices.",
    skills: [
      { name: "JWT Authentication", level: "Applied Practice", icon: "ShieldCheck", highlight: true },
      { name: "SQL Injection Prevention", level: "Applied Practice", icon: "Lock", highlight: true },
      { name: "Cloud-based App Development", level: "Applied Practice", icon: "CloudSun", highlight: true }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Workflow",
    description: "Version control, IDE environments, and rapid prototyping frameworks.",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch", highlight: true },
      { name: "GitHub", level: "Proficient", icon: "Github", highlight: true },
      { name: "VS Code", level: "Proficient", icon: "Terminal", highlight: false },
      { name: "Streamlit", level: "Proficient", icon: "AppWindow", highlight: true }
    ]
  },
  {
    id: "fundamentals",
    title: "Computer Science Fundamentals",
    description: "Core theoretical foundations underpinning software engineering.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Strong Foundation", icon: "Binary", highlight: true },
      { name: "DBMS", level: "Strong Foundation", icon: "Table", highlight: true }
    ]
  }
];

