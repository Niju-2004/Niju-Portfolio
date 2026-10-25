// Authentic Portfolio Data for Niju M
// Used for Database Seeding and Graceful In-Memory Fallback

export const PORTFOLIO_INFO = {
  name: "Niju M",
  role: ".NET Full Stack Developer | AI-Assisted Software Engineer",
  tagline: "Building resilient enterprise backends, modern reactive frontends, and AI-powered systems with .NET, Angular, React, and Google ADK.",
  bio: "Results-oriented .NET Full Stack Developer with enterprise experience at Infosys building scalable applications with ASP.NET Core, C#, Angular, EF Core, REST APIs, and SQL. Actively leveraging modern AI-assisted engineering tools like GitHub Copilot, Claude Code, and Google Agent Development Kit (ADK) to accelerate high-quality software delivery.",
  location: "Sivakasi, Tamil Nadu, India",
  email: "mniju2004@gmail.com",
  phone: "+91-6382441027",
  linkedin: "https://www.linkedin.com/in/niju-mm",
  github: "https://github.com/Niju-2004",
  stats: {
    yearsExperience: "1+",
    projectsCompleted: "8+",
    githubRepos: "12+",
    certificationsCount: "5+"
  }
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Personal Dashboard & Productivity Suite",
    slug: "personal-dashboard-suite",
    subtitle: "Enterprise-grade productivity suite with reactive UI and session authentication",
    description: "A high-performance personal suite featuring modern glassmorphism design, reactive forms, SSG/hydration, and authentication.",
    category: "fullstack",
    tags: ["Angular", "TypeScript", "Vercel", "Tailwind CSS", "JWT Auth"],
    githubUrl: "https://github.com/Niju-2004/PersonalApp",
    liveUrl: "https://personal-app-tan.vercel.app/login",
    featured: true,
    displayOrder: 1
  },
  {
    id: 2,
    title: "EthnoVet Chat — Multilingual Veterinary AI",
    slug: "rag-vector-db-vet-ai",
    subtitle: "Multilingual AI assistant powered by Retrieval-Augmented Generation & FAISS",
    description: "Built a multilingual veterinary chatbot supporting English and Tamil using RAG and FAISS vector database search for accurate context retrieval and natural conversations.",
    category: "ai",
    tags: ["Python", "RAG", "FAISS", "Vector DB", "LLMs", "LangChain"],
    githubUrl: "https://github.com/Niju-2004/Rag-Vector-DB",
    liveUrl: "https://ethnovet.vercel.app",
    featured: true,
    displayOrder: 2
  },
  {
    id: 3,
    title: "Daily Bytes — Enterprise News Platform",
    slug: "daily-bytes-news-platform",
    subtitle: "Full-Stack enterprise news portal with layered architecture and MySQL storage",
    description: "Designed the complete database schema, data access layers with EF Core, and built RESTful Controller APIs integrated with an Angular frontend adhering to strict enterprise standards.",
    category: "enterprise",
    tags: ["ASP.NET Core", "Angular", "C#", "MySQL", "REST API", "EF Core"],
    githubUrl: "https://github.com/Niju-2004",
    liveUrl: null,
    featured: true,
    displayOrder: 3
  },
  {
    id: 4,
    title: "AlconVision Web Application Migration",
    slug: "alconvision-migration",
    subtitle: "Legacy .NET Framework to ASP.NET Core modern architecture migration",
    description: "Modernized legacy .NET Framework modules to modern ASP.NET Core, boosting system performance, maintainability, and code modularity across Controller, Service, and Repository layers.",
    category: "enterprise",
    tags: ["ASP.NET Core", "C#", "Application Modernization", "EF Core", "Clean Architecture"],
    githubUrl: "https://github.com/Niju-2004",
    liveUrl: null,
    featured: true,
    displayOrder: 4
  },
  {
    id: 5,
    title: "Loan Management System",
    slug: "loan-management-system",
    subtitle: "Enterprise financial workflow system with automated loan processing",
    description: "Designed secure loan management modules with CRUD operations, REST APIs, and Entity Framework Core, accelerating frontend delivery using AI-assisted pair programming.",
    category: "enterprise",
    tags: ["ASP.NET Core", "Angular", "SQL Server", "EF Core", "REST APIs"],
    githubUrl: "https://github.com/Niju-2004",
    liveUrl: null,
    featured: false,
    displayOrder: 5
  },
  {
    id: 6,
    title: "OpenCV Hand Gesture Controller",
    slug: "opencv-hand-gesture",
    subtitle: "Real-time computer vision system for contactless system control",
    description: "Real-time hand tracking and computer vision system enabling gesture-based interaction: scroll, volume modulation, and virtual cursor navigation without physical peripherals.",
    category: "ai",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    githubUrl: "https://github.com/Niju-2004/OpenCV-HandGesture",
    liveUrl: null,
    featured: false,
    displayOrder: 6
  },
  {
    id: 7,
    title: "AI Voice Assistant",
    slug: "ai-voice-assistant",
    subtitle: "Interactive voice-controlled desktop assistant with natural speech recognition",
    description: "Intelligent voice assistant capable of music playback, Wikipedia knowledge retrieval, live queries, and system automation through natural voice triggers.",
    category: "ai",
    tags: ["Python", "Speech Recognition", "NLP", "Pyttsx3"],
    githubUrl: "https://github.com/Niju-2004/AI-Voice-Assistant",
    liveUrl: null,
    featured: false,
    displayOrder: 7
  },
  {
    id: 8,
    title: "Online Voting System Simulation",
    slug: "online-voting-cpp",
    subtitle: "Secure national/state electoral voting simulation system in C++",
    description: "Simulates full electoral voting flows, voter identity validation, vote casting, and tallying with integrity checks.",
    category: "tools",
    tags: ["C++", "Data Structures", "Algorithms", "Security"],
    githubUrl: "https://github.com/Niju-2004/Online-voting-cpp",
    liveUrl: null,
    featured: false,
    displayOrder: 8
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Software Engineer (.NET Full Stack Developer)",
    company: "Infosys Limited",
    location: "India",
    duration: "February 2026 – Present",
    current: true,
    responsibilities: [
      "Develop and maintain enterprise applications utilizing ASP.NET Core Web API, C#, Angular, Entity Framework Core, SQL Server, and MySQL.",
      "Design and implement robust RESTful APIs following layered clean architecture across Controller, Service, Repository, and Database layers.",
      "Build high-performance, responsive Angular frontend components seamlessly integrated with backend business services.",
      "Leverage GitHub Copilot and Claude Code for AI-assisted engineering, improving code velocity, test coverage, and debugging accuracy."
    ],
    techStack: ["C#", "ASP.NET Core", "Angular", "EF Core", "SQL Server", "MySQL", "Claude Code", "GitHub Copilot"],
    displayOrder: 1
  },
  {
    id: 2,
    role: "Systems Engineer Trainee",
    company: "Infosys Mysore",
    location: "Mysore, India",
    duration: "November 2025 – January 2026",
    current: false,
    responsibilities: [
      "Completed comprehensive enterprise .NET Full Stack training covering C#, ASP.NET Core, Angular, SQL Server, RESTful APIs, and Entity Framework Core.",
      "Delivered full-stack sprint assignments, API integration tasks, unit tests, and database migrations adhering to enterprise software engineering standards."
    ],
    techStack: ["C#", ".NET Core", "Angular", "SQL", "REST APIs", "EF Core"],
    displayOrder: 2
  }
];

export const SKILLS_DATA = [
  // Backend
  { id: 1, category: "Backend", name: "C# / .NET 8+", level: 95, featured: true, displayOrder: 1 },
  { id: 2, category: "Backend", name: "ASP.NET Core Web API", level: 92, featured: true, displayOrder: 2 },
  { id: 3, category: "Backend", name: "Entity Framework Core", level: 90, featured: true, displayOrder: 3 },
  { id: 4, category: "Backend", name: "Node.js & Express", level: 85, featured: true, displayOrder: 4 },
  { id: 5, category: "Backend", name: "RESTful APIs & Microservices", level: 90, featured: true, displayOrder: 5 },

  // Frontend
  { id: 6, category: "Frontend", name: "Angular (17/18/19)", level: 92, featured: true, displayOrder: 6 },
  { id: 7, category: "Frontend", name: "React & Vite", level: 88, featured: true, displayOrder: 7 },
  { id: 8, category: "Frontend", name: "TypeScript / JavaScript", level: 92, featured: true, displayOrder: 8 },
  { id: 9, category: "Frontend", name: "Tailwind CSS & UI Systems", level: 90, featured: true, displayOrder: 9 },
  { id: 10, category: "Frontend", name: "HTML5 / CSS3 / SCSS", level: 95, featured: false, displayOrder: 10 },

  // Databases & Cloud
  { id: 11, category: "Databases", name: "SQL Server (T-SQL)", level: 90, featured: true, displayOrder: 11 },
  { id: 12, category: "Databases", name: "PostgreSQL & Prisma ORM", level: 88, featured: true, displayOrder: 12 },
  { id: 13, category: "Databases", name: "MySQL", level: 85, featured: false, displayOrder: 13 },
  { id: 14, category: "Databases", name: "FAISS Vector Database", level: 80, featured: false, displayOrder: 14 },

  // AI & Agentic Technologies
  { id: 15, category: "AI Technologies", name: "Google Agent Dev Kit (ADK)", level: 88, featured: true, displayOrder: 15 },
  { id: 16, category: "AI Technologies", name: "LLMs & RAG Architectures", level: 85, featured: true, displayOrder: 16 },
  { id: 17, category: "AI Technologies", name: "GitHub Copilot & Claude Code", level: 95, featured: true, displayOrder: 17 },
  { id: 18, category: "AI Technologies", name: "Infosys Topaz Fabric", level: 85, featured: true, displayOrder: 18 },

  // Tools & DevOps
  { id: 19, category: "Tools", name: "Microsoft Azure (AZ-900)", level: 92, featured: true, displayOrder: 19 },
  { id: 20, category: "Tools", name: "Git & GitHub Workflow", level: 92, featured: true, displayOrder: 20 },
  { id: 21, category: "Tools", name: "Visual Studio & VS Code", level: 95, featured: true, displayOrder: 21 },
  { id: 22, category: "Tools", name: "Postman & REST Testing", level: 90, featured: false, displayOrder: 22 },
  { id: 23, category: "Tools", name: "Red Hat Linux / Bash", level: 82, featured: false, displayOrder: 23 }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issueDate: "October 2026 • Score: 968/1000",
    credentialUrl: "https://learn.microsoft.com/users/nijum-0297/credentials/E64466354EF5F5FD",
    displayOrder: 1
  },
  { id: 2, name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", issueDate: "Certified", credentialUrl: null, displayOrder: 2 },
  { id: 3, name: "Google Cloud — Accelerate Development with Antigravity", issuer: "Google Cloud", issueDate: "Certified", credentialUrl: null, displayOrder: 3 },
  { id: 4, name: "Google Cloud — Deploy an Agent with ADK", issuer: "Google Cloud", issueDate: "Certified", credentialUrl: null, displayOrder: 4 },
  { id: 5, name: "Google Cloud — Evaluate & Improve ADK Agents", issuer: "Google Cloud", issueDate: "Certified", credentialUrl: null, displayOrder: 5 },
  { id: 6, name: "Infosys Topaz Fabric — Agent Development & Guardrails", issuer: "Infosys", issueDate: "Professional Training", credentialUrl: null, displayOrder: 6 }
];

export const INITIAL_GUESTBOOK_DATA = [
  { id: 1, name: "Antigravity AI", message: "Excited to pair-program and architect this modern full-stack portfolio with you, Niju!", badge: "AI Assistant", createdAt: new Date() },
  { id: 2, name: "Technical Recruiter", message: "Impressive full-stack expertise with both .NET enterprise systems and modern React/AI integrations.", badge: "Recruiter", createdAt: new Date(Date.now() - 86400000) }
];

