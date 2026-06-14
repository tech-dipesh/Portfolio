import StateImage from "../assets/images/state-flow.png";
import AirBnb from "../assets/images/airbnb.png";
import MusicPlayer from "../assets/images/beat-bridge.png";
import Yetijobs from "../assets/images/yeti-jobs.png";

import React from "../assets/skills/react.png"
import Tailwind from "../assets/skills/tailwind.png"
export default[ 
  {
    id: 1,
    name: "Yeti-Jobs",
    intro:
      "A production‑grade job portal built with the PERN stack. Features 50+ REST APIs, JWT + RBAC, PostgreSQL composite indexing (30% faster queries), Docker multi‑stage builds (image size reduced 74%), load‑tested to 67 req/sec with 0 failures, and 99.5% uptime over 3 months.",
    isTeamOrSolo: "Solo Project",
    githubLink: "https://github.com/tech-dipesh/yeti-jobs",
    liveDemo: "https://yeti-jobs.vercel.app/",
    Description:
      "Scalable job platform connecting seekers and recruiters. Backend: 50+ APIs, Node.js/Express, JWT/RBAC, PostgreSQL with composite & GIN indexes (search latency from 7ms → 0.9ms). Frontend: React, TypeScript, Context API, Tailwind. DevOps: Docker (1.99GB → 520MB), GitHub Actions CI/CD, cron job to prevent cold starts (50+ sec → <2 sec). Load tested with Apache Bench (1000 requests/14.9s at 100 concurrent users, 0 failures).",
    image: Yetijobs,
    features: [
      "Job Search – Full‑text search with composite indexing – query time reduced from 7ms to 0.9ms (30% faster)",
      "Apply/Withdraw – One‑click job applications with status tracking and role‑based UI (admin, recruiter, job seeker)",
      "Bookmark Jobs – Persistent bookmarks stored in PostgreSQL",
      "Role‑Based Access – JWT + RBAC with separate dashboards and protected routes",
      "Resume & Profile Upload – Supabase (S3‑compatible) storage with real‑time preview and memory cleanup",
      "Email Verification – 6‑digit OTP and password reset using Nodemailer SMTP",
      "AI Resume Analyser – OpenAI/Grok integration (score 0–100 with ATS feedback)",
      "Automated Expiry – Daily cron job closes jobs older than 30 days",
      "99.5% Uptime – Connection pooling, cron‑based ping every 10 min, cold start eliminated",
      "Load Tested – 67 requests/sec, p95 latency 1929ms, 0 failed requests under 100 concurrent users",
      "Container Optimised – Docker multi‑stage with Alpine: backend 1.99GB → 520MB (74% reduction), frontend 1.03GB → 220MB (79% reduction)",
      "Testing – 28+ integration tests (Jest + Supertest) covering 11 critical API routes"
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "React (TypeScript)",
      "Docker",
      "GitHub Actions",
      "JWT",
      "Redis (BullMQ for queues)",
      "Apache Bench",
      "Jest / Supertest",
      "Supabase",
      "OpenAI API"
    ],
    Completed: "April 2026",
  },
  {
    id: 2,
    name: "State-Flow",
    intro:
      "A high‑performance Jira‑inspired task manager with drag‑drop boards, undo/redo (50+ operations without lag), dark mode, keyboard shortcuts, and CSV/JSON export – all client‑side with React Context API and localStorage.",
    isTeamOrSolo: "Solo Project",
    githubLink: "https://github.com/tech-dipesh/StateFlow-Project-Managment",
    liveDemo: "https://state-flows.vercel.app/",
    Description:
      "Full‑featured project management tool with Kanban board, filtering, sorting, persistent local storage, real‑time charts, and full responsive design. Built from scratch using React hooks, custom undo/redo engine (past/present/future), and `@dnd-kit` for drag‑drop. Achieves 50+ undo/redo operations with no performance degradation.",
    image: StateImage,
    features: [
      "Drag‑and‑Drop Board – Visual task movement with instant visual feedback and persistent localStorage save",
      "Undo/Redo Engine – Custom hook supporting 50+ operations without lag (tracks past/present/future)",
      "Smart Task Management – Labels, deadlines, priority levels (Easy/Medium/Hard), pin important tasks",
      "Interactive Dashboard – Pie charts (Chart.js), export to CSV/JSON, keyboard shortcuts (Ctrl+? for help)",
      "Fully Responsive & Themed – Works on mobile, dark/light mode toggle, archive old tasks",
      "Data Persistence – Entire board state saved to localStorage across browser sessions"
    ],
    techStack: [
      "React (JavaScript)",
      "Tailwind CSS",
      "Context API",
      "React Router",
      "@dnd-kit/core",
      "Chart.js",
      "React Select",
      "localStorage"
    ],
    Completed: "January 2026",
  },
  {
    id: 3,
    name: "Home Finder",
    intro:
      "A full‑stack Airbnb‑style rental platform with user authentication, Cloudinary image uploads, interactive maps (MapTiler), and full CRUD – built with MVC architecture, MongoDB Atlas, and EJS.",
    isTeamOrSolo: "Solo Project",
    githubLink: "https://github.com/tech-dipesh/mega-project-listing/",
    liveDemo: "https://mega-project-listing.onrender.com/",
    Description:
      "This was my first backend‑focused project using MVC pattern. It handles secure authentication (Passport.js), image uploads to Cloudinary (with Multer), live maps with forward geocoding (address → coordinates), and full CRUD for listings and reviews. Deployed on Render with MongoDB Atlas.",
    image: AirBnb,
    features: [
      "User Authentication & Authorization – Passport.js local strategy, session management, and route‑based permissions (owner only can edit/delete)",
      "Cloud Image Upload – Multer + Cloudinary storage, automatic compression and public URL return",
      "Interactive Maps & Geocoding – MapTiler SDK with forward geocoding (address → [lng, lat]), interactive markers on listing pages",
      "Full CRUD with Reviews – Create, update, delete listings; add/remove reviews (star rating); filter by price",
      "Responsive UI – Bootstrap 5, flash messages (connect‑flash), tax toggle switch",
      "Database – MongoDB Atlas with Mongoose ODM, session store using connect‑mongo",
      "Deployment – Live on Render with environment variables and IP whitelisting"
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB (Atlas)",
      "EJS / EJS‑Mate",
      "Bootstrap 5",
      "Cloudinary / Multer",
      "MapTiler (Geocoding)",
      "Passport.js",
      "connect‑flash",
      "Joi (validation)"
    ],
    Completed: "February 2025",
  },
  {
    id: 4,
    name: "Beat Bridge",
    intro:
      "A fully‑featured music player built from scratch using vanilla JavaScript – no frameworks, no libraries. Features playlists, queue management, sleep timer, bookmarks, keyboard shortcuts, and persistent localStorage.",
    isTeamOrSolo: "Solo Project",
    githubLink: "https://tech-dipesh.github.io/Beat-Bridge/#/",
    liveDemo: "https://state-flows.vercel.app/",  // Note: you might want to update the liveDemo URL to the actual music player; I kept as original but you can change
    Description:
      "Complete audio player with custom queue logic, sleep timer, volume/speed controls, play count tracking, and full keyboard control. All state persists via localStorage. Built entirely manually – no AI or tutorials – demonstrating deep understanding of DOM manipulation, event handling, and modular JavaScript (ES6 modules).",
    image: MusicPlayer,
    features: [
      "Smart Queue & Playlist – Add songs to queue or select from playlists; auto‑advance after current song ends",
      "Sleep Timer & Custom Controls – Set predefined (15/30/60 min) or custom timers; volume/speed sliders; bookmarks; play count tracking",
      "Persistent State – Remembers last song, position, volume, bookmarks, and theme across sessions (localStorage)",
      "Keyboard Shortcuts – Over 10 shortcuts (space → play/pause, ←/→ seek, ↑/↓ volume, etc.) with on‑screen help",
      "Pure Vanilla Implementation – No React, no Vue, no AI – just HTML5 Audio API, CSS Grid/Flex, and ES6 modules"
    ],
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript (ES6 Modules)", "LocalStorage API"],
    Completed: "December 2024",
  },
];
