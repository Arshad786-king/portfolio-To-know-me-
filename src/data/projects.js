/**
 * Centralized Projects Configuration
 * Authoritative source: Arshad_Resume.docx & workspace inspection
 *
 * NOTE ON URLS:
 * We strictly DO NOT fabricate URLs.
 * If githubUrl or liveUrl is an empty string, the UI displays clear
 * developer-friendly placeholder badges or omits public action buttons.
 */

export const projects = [
  {
    id: "elms",
    slug: "elms",
    title: "Employee Leave Management System (ELMS)",
    shortTitle: "ELMS",
    tagline: "Full-Stack Enterprise Role-Based Leave Management Application",
    category: "Full Stack Web Application",
    status: "Live – Deployed on Vercel",
    isDeployed: true,
    featured: true,
    showcaseType: "standard",
    lastUpdated: "2026-10",
    
    // Configurable URLs - Set by developer
    githubUrl: "", // Editable configuration: Enter repository URL when ready
    liveUrl: "https://elms-frontend-cubbn8i8m-arshad786-king.vercel.app/",

    thumbnail: "/images/projects/elms-preview.svg",
    
    shortDescription: "A web app that makes employee leave simple for everyone. Employees can submit leave requests and track their status online. Managers can review and approve or decline requests. Admins can manage the team structure — no paperwork, no email chains.",
    
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "REST APIs",
      "JWT"
    ],
    
    problemStatement: "Organizations frequently suffer from inefficient, email-based leave tracking where pending requests are lost, managers lack unified visibility over department availability, and employees experience delays in status updates.",
    
    projectObjective: "Design and deliver a robust, auditable full-stack leave portal with strict role-based authorization ensuring employees submit structured requests, managers review with instantaneous feedback, and admins oversee enterprise assignments.",

    architecture: {
      frontend: "React 19 + Vite single page application with reactive state handling, Tailwind responsive components, and JWT session handling.",
      backend: "Node.js with Express.js routing, controller-service pattern, RESTful endpoints, and bcrypt password hashing.",
      database: "MongoDB Atlas cloud cluster with Mongoose ODM schemas, indexing, and transactional data integrity.",
      security: "Stateless JSON Web Tokens (JWT) embedded in HTTP headers with middleware enforcing Employee, Manager, and Admin permissions."
    },

    features: [
      {
        title: "Role-Based Authentication (RBAC)",
        desc: "Secure registration and token-based login partitioning access between Employee, Manager, and Administrator tiers."
      },
      {
        title: "Leave Application Workflow",
        desc: "Interactive forms allowing employees to pick date ranges, leave types (Casual, Sick, Paid), and submit justification notes."
      },
      {
        title: "Manager Approval & Rejection Engine",
        desc: "Dedicated manager dashboard showing incoming requests for direct reports with one-click approval, rejection, and comment capability."
      },
      {
        title: "Admin Employee–Manager Mapping",
        desc: "Administrative portal to assign employees to respective reporting managers and update department hierarchies."
      },
      {
        title: "Instant Notification Module",
        desc: "Real-time or event-driven status badges updating employees immediately when requests are reviewed."
      },
      {
        title: "Auditable Database Integration",
        desc: "Comprehensive leave history logs stored in MongoDB Atlas with automated timestamping."
      }
    ],

    myContribution: [
      "Designed and implemented RESTful API endpoints for authentication, leave submission, and approval workflows in Node.js/Express.",
      "Architected Mongoose database schemas for Users, LeaveRequests, and AuditLogs with relation references.",
      "Implemented JWT authentication middleware and role verification logic protecting privileged administrative endpoints.",
      "Engineered frontend state consumption and asynchronous data fetching in React/Vite.",
      "Built the employee–manager assignment logic enabling department-level query partitioning."
    ],

    challengesAndSolutions: [
      {
        challenge: "Managing distinct authorization flows for three different user tiers (Employee, Manager, Admin) without code duplication.",
        solution: "Created composable Express middleware functions that decode JWT claims and verify role scopes before controller execution."
      },
      {
        challenge: "Preventing conflicting overlapping leave date submissions by the same employee.",
        solution: "Implemented date-range validation queries in Mongoose that verify no overlapping approved or pending leave intervals exist before persisting a new request."
      }
    ]
  },

  {
    id: "rideshare-connect",
    slug: "rideshare-connect",
    title: "RideShare Connect",
    shortTitle: "RideShare Connect",
    tagline: "Smart Carpooling & Dynamic Route Matching Platform",
    category: "Personal Project – In Development",
    status: "In Development (Not Yet Deployed)",
    isPersonal: true,
    isDeployed: false,
    featured: true,
    showcaseType: "interactive-animated",
    lastUpdated: "2026-11",
    
    // Configurable URLs - Set by developer
    githubUrl: "", // Editable configuration: Set when public repo is published
    liveUrl: "",   // Strict rule: DO NOT show fake live URL; marked in development

    thumbnail: "/images/projects/rideshare-preview.svg",
    
    shortDescription: "Personal carpooling platform designed to connect drivers and passengers through intelligent ride searching, route matching, seat reservation, fare calculation, and simulated wallet transactions.",
    
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Maps APIs"
    ],

    problemStatement: "Urban commuters and intercity travelers face rising fuel costs, severe traffic congestion, and fragmented ride-coordination methods. Traditional ride-hailing is expensive, while informal carpooling lacks trust, clear route matching, and fair cost sharing.",

    projectObjective: "Build a full-featured, secure carpooling ecosystem where vehicle owners post travel plans with spare capacity and passengers easily search, match overlapping road corridors, reserve seats, and transparently share transit expenses.",

    developmentNotice: "This is a personal project actively under development. I have leveraged Antigravity AI to assist in creating and refining its website pages, backend routing logic, and templates. The application is not yet deployed to production, and the interactive showcase below provides a visual demonstration of the planned product interfaces.",

    architecture: {
      backend: "Python Flask application handling session management, role enforcement (Driver vs Passenger), and RESTful routes.",
      database: "MySQL relational database housing users, vehicle details, ride listings, bookings, and ledger transactions.",
      geoServices: "Google Maps Directions and Distance Matrix APIs for geocoding, route generation, and corridor overlap computation.",
      businessLogic: "Haversine distance matching, dynamic peak multiplier, tiered passenger discounts, and cancellation settlement policies."
    },

    features: [
      {
        title: "Driver Ride Publishing",
        desc: "Vehicle owners define departure time, origin, destination, vehicle type, and available seat counts."
      },
      {
        title: "Passenger Route Search & Matching",
        desc: "Origin-destination corridor search matching passenger routes within an adjustable proximity radius."
      },
      {
        title: "Algorithmic Fare Calculation",
        desc: "Authentic pricing formula: Base fare (₹30) + (Distance × Rate/km) with group passenger discounts and peak multiplier support."
      },
      {
        title: "Seat Management & Booking Flow",
        desc: "Real-time seat decrements upon confirmed passenger reservation with automated booking summaries."
      },
      {
        title: "In-App Wallet & Settlement Rules",
        desc: "Simulated digital wallet with transparent cancellation policies (90% passenger refund, 10% driver compensation)."
      },
      {
        title: "Multi-Role Dashboard & Security",
        desc: "Role-gated dashboards for drivers and passengers with session validation and encrypted credentials."
      }
    ],

    myContribution: [
      "Conceived the platform architecture and structured the MySQL database schema for rides, bookings, and users.",
      "Engineered the Flask backend application logic including authentication decorators and session management.",
      "Implemented the mathematical distance and fare calculation engine using real project formulas (₹30 base + ₹9/km for cars).",
      "Integrated Google Maps API endpoints for address validation, geocoding, and route preview coordinates.",
      "Collaborated with Antigravity AI to design, structure, and refine responsive templates and UI components."
    ],

    challengesAndSolutions: [
      {
        challenge: "Determining whether a driver's route matches a passenger's pickup and drop coordinates when they don't share exact endpoints.",
        solution: "Implemented geospatial proximity checkpoints using Haversine calculation with a 5.0 km configurable tolerance radius along the route corridor."
      },
      {
        challenge: "Handling concurrent seat bookings without overbooking available vehicle capacity.",
        solution: "Utilized atomic database transactions with seat count validation constraints before finalizing passenger booking records."
      }
    ]
  },

  {
    id: "ai-emergency-route-planning",
    slug: "ai-emergency-route-planning",
    title: "AI Emergency Route Planning",
    shortTitle: "Emergency Route Planning",
    tagline: "Dual-Corridor Emergency Navigation System for Visakhapatnam",
    category: "Academic & Geospatial Project",
    status: "Live – Deployed on Streamlit Cloud",
    isDeployed: true,
    featured: true,
    showcaseType: "standard",
    lastUpdated: "2026-10",

    githubUrl: "", // Editable configuration
    liveUrl: "https://ai-emergency-route-planning.streamlit.app/",

    thumbnail: "/images/projects/emergency-preview.svg",

    shortDescription: "A live web tool that helps find the fastest routes to nearby hospitals during emergencies. Pick a location and a hospital, and the app shows two different road routes on a map — so you always have a backup if one route is blocked.",

    technologies: [
      "Python",
      "Streamlit",
      "Flask",
      "OpenStreetMap (OSM)",
      "Leaflet.js",
      "Dijkstra & A* Algorithms",
      "NetworkX"
    ],

    problemStatement: "Emergency ambulances often get trapped in unforeseen traffic chokepoints when following conventional single-route navigation. First responders need mathematically distinct, verified alternative corridors to pivot rapidly without risking Dead-End roads or illegal turns.",

    projectObjective: "Develop a dual-interface emergency navigation engine backed by authentic OpenStreetMap road graphs for Visakhapatnam that computes an optimal primary route alongside a distinct secondary corridor bypassing primary chokepoints.",

    architecture: {
      networkGraph: "Real Visakhapatnam road graph (12,133 nodes, 31,666 edges; largest strongly connected component of 11,776 nodes) with 250 verified hospital locations.",
      routingEngine: "Python NetworkX implementation of Dijkstra's algorithm and A* search with an admissible geographic distance heuristic.",
      dualCorridorLogic: "Progressive edge-penalty heuristic and Yen's loopless k-shortest paths to guarantee route diversity.",
      interfaces: "Streamlit Cloud interactive web application and Flask REST API with Leaflet.js map layer."
    },

    features: [
      {
        title: "Dual Distinct Corridors",
        desc: "Computes Route 1 (Optimal travel time) and Route 2 (Alternative corridor avoiding primary road segments)."
      },
      {
        title: "Hospital Dataset Integration",
        desc: "250 verified local medical centers synchronized with interactive map markers and proximity sorting."
      },
      {
        title: "Interactive Map Snapping",
        desc: "Click-to-place emergency pin with automatic snapping to the nearest valid directed road intersection."
      },
      {
        title: "Real-Time Route KPI Cards",
        desc: "Distance in kilometers, estimated travel time in minutes, real-time ETA, and corridor overlap percentage."
      },
      {
        title: "Academic Benchmarking Pipeline",
        desc: "Statistical evaluation script comparing node exploration counters, execution milliseconds, and path lengths."
      }
    ],

    myContribution: [
      "Extracted and preprocessed the OpenStreetMap drivable road network graph for Visakhapatnam.",
      "Implemented Dijkstra and A* search algorithms with Euclidean / Haversine admissible heuristics.",
      "Engineered the progressive edge-penalty algorithm to produce genuinely distinct secondary route corridors.",
      "Built the Streamlit and Leaflet map interfaces with interactive hospital selectors and route toggles."
    ],

    challengesAndSolutions: [
      {
        challenge: "Standard k-shortest path algorithms often return routes with 95%+ overlap, merely varying by a single side street.",
        solution: "Applied a progressive edge-penalty heuristic to the primary corridor's edges, forcing the alternative search to explore an independent arterial roadway."
      }
    ]
  },

  {
    id: "banking-credit-risk",
    slug: "banking-credit-risk",
    title: "Banking Credit Default Risk & Cross-Sell Engine",
    shortTitle: "Credit Risk & Cross-Sell Engine",
    tagline: "Predictive Analytics Prototype for Financial Risk & Product Recommendation",
    category: "IBM Case Study Prototype",
    status: "Prototype / Case Study",
    isDeployed: false,
    featured: true,
    showcaseType: "standard",
    lastUpdated: "2026-09",

    githubUrl: "", // Editable configuration
    liveUrl: "",   // Editable configuration

    thumbnail: "/images/projects/banking-preview.svg",

    shortDescription: "An IBM case study prototype designed to assess borrower default risk probabilities while identifying personalized financial product cross-sell opportunities.",

    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Risk Scoring",
      "Pandas & NumPy",
      "Streamlit"
    ],

    problemStatement: "Retail banking institutions struggle to balance credit risk mitigation against loan growth. Underwriters need rapid default risk probability scores while relationship managers require intelligent cross-sell recommendations for low-risk clients.",

    projectObjective: "Construct an end-to-end analytical prototype demonstrating borrower credit score categorization, default probability classification, and tailored banking product suggestion rules.",

    architecture: {
      dataPipeline: "Pandas and NumPy data cleaning, handling missing financial metrics, categorical encoding, and feature scaling.",
      riskScoring: "Supervised classification model evaluating debt-to-income ratios, payment history, credit utilization, and liquidity indicators.",
      crossSellEngine: "Rule-based recommendation matrix matching low-risk borrower profiles with premium wealth management, auto loan, and credit card offerings.",
      presentation: "Interactive dashboard allowing loan officers to adjust borrower attributes and immediately observe default probability and recommended products."
    },

    features: [
      {
        title: "Borrower Risk Categorization",
        desc: "Automated risk tiering (Low, Moderate, High Default Risk) derived from multidimensional credit attributes."
      },
      {
        title: "Key Risk Factor Attribution",
        desc: "Visual breakdown of metrics influencing the risk score (e.g., high debt-to-income ratio or delinquency history)."
      },
      {
        title: "Dynamic Cross-Sell Matching",
        desc: "Targeted product recommendations triggered only for qualifying, low-risk applicants to maximize portfolio revenue."
      },
      {
        title: "Scenario Simulator",
        desc: "Interactive parameter sliders to model how income increases or debt reductions shift credit default risk."
      }
    ],

    myContribution: [
      "Developed the data preprocessing and feature transformation pipeline in Python.",
      "Engineered the risk categorization scoring logic based on IBM case study criteria.",
      "Designed the cross-sell recommendation decision matrix linking creditworthiness to financial products.",
      "Constructed the interactive demonstration dashboard for case study evaluation."
    ],

    challengesAndSolutions: [
      {
        challenge: "Balancing strict default aversion with business revenue generation (avoiding rejecting creditworthy applicants).",
        solution: "Established a three-tier risk framework that enables conditional approvals with targeted collateral requirements rather than binary rejections."
      }
    ]
  }
];

export const allCategories = [
  "All",
  "Full Stack Web Application",
  "Personal Project – In Development",
  "Academic & Geospatial Project",
  "IBM Case Study Prototype"
];

