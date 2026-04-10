export const PROFILE = {
  name: "Luornor Nathan Tettey",
  title: "Software Engineer",
  location: "Accra, Ghana",
  email: "luornornathan@gmail.com",
  phone: "+233245597748",
  resume:
    "https://docs.google.com/document/d/1TxBxUWoJeLzciCs4F46fFallKmCC1qHC05r1bH3HAnk/edit?usp=sharing",
  links: {
    github: "https://github.com/luornor",
    linkedin: "https://www.linkedin.com/in/luornor",
    leetcode: "https://leetcode.com/u/tetteynathan89/",
  },
  summary: [
    "I build reliable APIs and backend systems with Django/DRF and ship clean, responsive UIs with React/Next.js.",
    "Strong foundations in data structures and algorithms, with a practical, product-focused engineering mindset.",
  ],
};

export const SKILLS = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL"],
  frameworks: ["Django", "Django REST Framework", "React", "Next.js"],
  tooling: ["Git", "Docker", "PostgreSQL", "Celery", "Vercel"],
};

export const EXPERIENCE = [
  {
    company: "University of Ghana",
    location: "Accra, Ghana",
    role: "Research Assistant",
    dates: "Oct 2024 - Aug 2025",
    bullets: [
      "Assisted teaching Data Structures and Algorithms, prepared instructional materials, and supported classroom activities.",
      "Mentored students on course projects with guidance on implementation, problem-solving, and best practices.",
    ],
  },
  {
    company: "Africa to Silicon Valley",
    location: "Accra, Ghana",
    role: "Software Engineer (Frontend)",
    dates: "Sep 2023 - Oct 2024",
    bullets: [
      "Built responsive, high-performance interfaces using Next.js with improved reusability, state management, and API integration.",
      "Worked with a 25+ developer team and improved maintainability via modular components and TDD, reducing UI bugs by about 20%.",
    ],
  },
  {
    company: "Mesika Limited",
    location: "Accra, Ghana",
    role: "Software Engineer Intern",
    dates: "Jul 2023 - Sep 2023",
    bullets: [
      "Developed backend API features for a bank management system using Django.",
      "Implemented authentication, authorization, validation, query optimizations, and robust error handling.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
  kind: "Full-stack" | "Backend/API" | "Frontend/UI" | "Data/ML";
};

export const PROJECTS: Project[] = [
  {
    name: "RouteWise - Trip-Planning & Logistics Dashboard",
    kind: "Full-stack",
    description:
      "Trip-planning and logistics dashboard with real-time map updates and compliance visibility for dispatch operations.",
    highlights: [
      "Automates multi-stop route planning with real-time map rendering updates.",
      "Driver-hours and DOT log views surface compliance risks quickly.",
      "Responsive React UI with canvas overlays backed by a Django REST API.",
    ],
    tech: ["React", "Canvas", "Django REST Framework"],
    live: "",
    repo: "",
    featured: true,
  },
  {
    name: "Philotes Maritime Services",
    kind: "Frontend/UI",
    description:
      "Responsive React interface with reusable components, client-side state, and performance optimizations.",
    highlights: [
      "Reusable component system and dynamic navigation across devices.",
      "Lazy loading and code splitting improved page-load performance.",
    ],
    tech: ["React", "Performance", "Client-side State"],
    live: "",
    repo: "",
    featured: true,
  },
  {
    name: "StockScope - Interactive Market Insights",
    kind: "Full-stack",
    description:
      "Interactive stock dashboard streaming market data into charts and concise insights for faster decisions.",
    highlights: [
      "Streams Alpha Vantage data into interactive charts and summaries.",
      "Next.js frontend with a Django API and Celery background jobs.",
      "Dockerized deployment across Vercel for web and Render for the API.",
    ],
    tech: ["Next.js", "Django", "Celery", "Docker", "PostgreSQL", "Redis"],
    repo: "https://github.com/luornor/stockscope",
    featured: true,
  },
  {
    name: "oil-site",
    kind: "Frontend/UI",
    description: "UI design project built with Vite and TypeScript and deployed on Vercel.",
    highlights: [
      "TypeScript-heavy frontend project with a polished presentation layer.",
      "Live deployment available for review.",
    ],
    tech: ["TypeScript", "Vite", "Frontend"],
    repo: "https://github.com/luornor/oil-site",
    live: "https://philotes.vercel.app",
    featured: false,
  },
  {
    name: "profile-card-app",
    kind: "Frontend/UI",
    description: "Simple React profile card app demonstrating core React concepts.",
    highlights: [
      "Covers components, props, state, and JSX fundamentals.",
      "Live Vercel deployment available.",
    ],
    tech: ["React", "JavaScript"],
    repo: "https://github.com/luornor/profile-card-app",
    live: "https://profile-card-theta-seven.vercel.app/",
    featured: false,
  },
  {
    name: "redux-notesApp",
    kind: "Frontend/UI",
    description: "Notes app using Redux Toolkit for state management.",
    highlights: [
      "Applies Redux Toolkit state patterns cleanly.",
      "Implements a simple CRUD notes workflow.",
    ],
    tech: ["React", "Redux Toolkit"],
    repo: "https://github.com/luornor/redux-notesApp",
    featured: false,
  },
  {
    name: "User Management Service",
    kind: "Backend/API",
    description:
      "Django service for managing user information and coordinating with other services.",
    highlights: [
      "Service responsibilities documented clearly in the README.",
      "Django and DRF setup with environment configuration.",
    ],
    tech: ["Python", "Django", "Django REST Framework"],
    repo: "https://github.com/luornor/user-management",
    featured: true,
  },
  {
    name: "Listing Management Service",
    kind: "Backend/API",
    description: "Django service for managing listing and shop information.",
    highlights: [
      "Clear service boundaries and responsibilities.",
      "Typical DRF setup with migrations and environment configuration.",
    ],
    tech: ["Python", "Django", "Django REST Framework"],
    repo: "https://github.com/luornor/listing_management",
    featured: true,
  },
  {
    name: "jiji-web",
    kind: "Full-stack",
    description: "Full-stack e-commerce app with a React frontend and Django backend.",
    highlights: [
      "Supports product listing and cart management flows.",
      "Uses familiar React and Django REST patterns.",
    ],
    tech: ["React", "Django", "Django REST Framework"],
    repo: "https://github.com/luornor/jiji-web",
    featured: false,
  },
];

export const EDUCATION = [
  {
    school: "University of Ghana - Legon",
    degree: "BSc Computer Engineering",
    dates: "Graduated Feb 2025",
    notes: [
      "GPA: 3.720/4.00",
      "Dean's List; Sadhu T.L. Vaswani Academic Excellence Award",
      "GHIPSS Award for best graduating project in Computer Engineering",
    ],
  },
];
