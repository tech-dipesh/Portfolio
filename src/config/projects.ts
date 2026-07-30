import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "yeti-jobs",
    name: "Yeti Jobs",
    tagline: "A production job portal connecting seekers and recruiters",
    summary:
      "Built the full platform end to end: 50+ REST APIs, JWT with role-based access, and a PostgreSQL schema tuned with composite and GIN indexes that took search latency from 7ms down to 0.9ms. Shipped an AI resume scorer, Docker images cut by 74%, and load tested to 67 requests per second with zero failures.",
    role: "Solo project",
    year: "2026",
    githubUrl: "https://github.com/tech-dipesh/yeti-jobs",
    liveUrl: "https://yeti-jobs.vercel.app",
    apiDocsUrl: "https://yeti-jobs.onrender.com/api/v1/swagger/",
    screenshot: "/projects/yeti-jobs.png",
    span: "three",
    techStack: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript", "Docker", "Supabase"],
    features: [
      { title: "Full-text job search", detail: "Composite and GIN indexing cut query time from 7ms to 0.9ms" },
      { title: "Role-based access", detail: "JWT auth with separate dashboards for seekers, recruiters, and admins" },
      { title: "AI resume scoring", detail: "OpenAI-backed ATS feedback scored 0 to 100 against a job posting" },
      { title: "Container optimized", detail: "Multi-stage Docker builds shrank images from 1.99GB to 520MB" },
      { title: "Load tested", detail: "67 req/sec sustained with zero failures at 100 concurrent users" },
    ],
  },
  {
    slug: "stateflow",
    name: "StateFlow",
    tagline: "A Jira-inspired task manager with drag-and-drop boards",
    summary:
      "A fully client-side project management tool with a custom undo/redo engine handling 50 or more operations without lag, drag-and-drop boards built on dnd-kit, and full data export to CSV and JSON.",
    role: "Solo project",
    year: "2026",
    githubUrl: "https://github.com/tech-dipesh/StateFlow-Project-Managment",
    liveUrl: "https://state-flows.vercel.app",
    screenshot: "/projects/images/state-flow.png",
    span: "two",
    techStack: ["React", "Tailwind CSS", "Context API", "dnd-kit", "Chart.js"],
    features: [
      { title: "Drag-and-drop board", detail: "Instant visual feedback with persistent localStorage saves" },
      { title: "Undo and redo engine", detail: "Custom hook tracking past, present, and future state" },
      { title: "Keyboard shortcuts", detail: "Full shortcut system with an in-app cheat sheet" },
    ],
  },
  {
    slug: "home-finder",
    name: "Home Finder",
    tagline: "An Airbnb-style rental platform with live maps",
    summary:
      "My first backend-focused project using the MVC pattern: Passport.js authentication, Cloudinary image uploads, and MapTiler geocoding that turns an address into map coordinates.",
    role: "Solo project",
    year: "2025",
    githubUrl: "https://github.com/tech-dipesh/mega-project-listing",
    liveUrl: "https://mega-project-listing.onrender.com",
    screenshot: "/projects/images/airbnb.png",
    span: "one",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js"],
    features: [
      { title: "Auth and ownership", detail: "Only listing owners can edit or delete their own posts" },
      { title: "Geocoding", detail: "MapTiler turns a typed address into live map markers" },
    ],
  },
  {
    slug: "beat-bridge",
    name: "Beat Bridge",
    tagline: "A vanilla JavaScript music player, no frameworks",
    summary:
      "A complete audio player built with plain HTML, CSS, and ES6 modules: custom queue logic, a sleep timer, and more than ten keyboard shortcuts, with every setting persisted to localStorage.",
    role: "Solo project",
    year: "2024",
    githubUrl: "https://tech-dipesh.github.io/Beat-Bridge/#/",
    liveUrl: "https://tech-dipesh.github.io/Beat-Bridge/#/",
    screenshot: "/projects/images/beat-bridge.png",
    span: "one",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "Web Audio API"],
    features: [
      { title: "Smart queue", detail: "Auto-advances through playlists with bookmark support" },
      { title: "Zero dependencies", detail: "Built entirely on the HTML5 Audio API and ES6 modules" },
    ],
  },
];
