/**
 * Internship Experience & Projects Configuration
 * Authoritative source: Arshad_Resume.docx & Arshad_Resume_Updated_With_Projects.docx
 */

export const internshipExperience = {
  organization: "CodeAlpha",
  domain: "Cloud Computing & Software Development",
  period: "Internship Project Series",
  description: "Completed three hands-on engineering projects focused on cloud-based management systems, defensive database security, and data integrity optimization.",
  certificateAvailable: true,
  certificateImage: "/images/certificates/cloud-computing-certificate.jpg",
  projects: [
    {
      id: "cloud-bus-pass",
      title: "Cloud Bus Pass System",
      technologies: ["Python", "MySQL", "Cloud Concepts", "Database Management"],
      githubUrl: "https://github.com/Arshad786-king/CodeAlpha_CloudBusPassSystem",
      description: "Developed a cloud-based bus pass management system covering user registration, automated pass generation, route verification, and administrative record management.",
      highlights: [
        "Architected relational MySQL tables for commuters, routes, passes, and validity intervals.",
        "Implemented secure authentication and pass renewal validation workflows.",
        "Engineered query verification logic preventing duplicate active passes per traveler.",
        "Built administrative reporting views for passenger transit metrics."
      ],
      keyLearnings: "Gained practical experience designing relational data models for public utility management and structured operational CRUD pipelines."
    },
    {
      id: "sql-injection-protection",
      title: "SQL Injection Protection",
      technologies: ["Python", "MySQL", "Cryptography Library", "Input Sanitization"],
      githubUrl: "https://github.com/Arshad786-king/CodeAlpha_SQLInjectionProtection",
      description: "Built a security-focused application that detects and prevents SQL injection attacks using robust input validation, cryptographic hashing, and secure parameterized query handling.",
      highlights: [
        "Implemented parameterized queries and prepared statements to neutralize malicious query payloads.",
        "Integrated the Python cryptography library for secure storage and hash-based verification of sensitive credentials.",
        "Designed input sanitization filters to intercept and log suspicious SQL syntax injections (e.g., OR 1=1, UNION SELECT).",
        "Demonstrated defensive secure coding principles across database query endpoints."
      ],
      keyLearnings: "Deepened practical understanding of cybersecurity attack vectors, OWASP Top 10 database risks, and secure coding practices."
    },
    {
      id: "data-redundancy-removal",
      title: "Data Redundancy Removal System",
      technologies: ["Python", "MySQL", "Data Deduplication", "Query Optimization"],
      githubUrl: "https://github.com/Arshad786-king/CodeAlpha_DataRedundancyRemovalSystem",
      description: "Built an automated data management utility that identifies and removes duplicate records across database tables, improving database consistency and storage efficiency.",
      highlights: [
        "Engineered fuzzy and exact duplicate detection algorithms comparing multi-column primary and secondary attributes.",
        "Constructed batch cleanup transactions that prune redundant records while preserving referential integrity.",
        "Significantly improved query execution times and reclaimed redundant storage space.",
        "Generated audit reports detailing removed entities and preserved master records."
      ],
      keyLearnings: "Mastered batch SQL processing, index utilization, and database integrity maintenance strategies."
    }
  ]
};

