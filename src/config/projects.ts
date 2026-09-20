import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "yeti-jobs",
    name: "Yeti Jobs",
    tagline: "A production job portal connecting seekers and recruiters",
    summary:
      "Built the full platform end to end: 50+ REST APIs, JWT with role-based access, and a PostgreSQL schema tuned with composite and GIN indexes that took search latency from 7ms down to 0.9ms. Designed for faults, not just features — load tested to 67 requests per second with zero failures, caught a connection pool leak before production, and shrank Docker images by 74% to buy headroom for scale. Shipped an AI resume scorer and automated CI/CD via GitHub Actions.",
    role: "Solo project",
    year: "2026",
    githubUrl: "https://github.com/tech-dipesh/yeti-jobs",
    liveUrl: "https://yeti-jobs.vercel.app",
    apiDocsUrl: "https://yeti-jobs.onrender.com/api/v1/swagger/",
    screenshot: "/projects/yeti-jobs.png",
    span: "three",
    techStack: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript", "Docker", "Supabase"],
    features: [
      { title: "Fault-tolerant architecture", detail: "Designed for component-level resilience — connection pooling, rate limiting, and error handling prevent single faults from becoming system failures" },
      { title: "Idempotent job applications", detail: "A per-user, per-job idempotency key (rotated every 5 minutes) means a dropped connection and retry during a flaky network can't create a duplicate application or race against itself" },
      { title: "Full-text job search", detail: "Composite and GIN indexing cut query time from 7ms to 0.9ms" },
      { title: "Role-based access", detail: "JWT auth with separate dashboards for seekers, recruiters, and admins" },
      { title: "AI resume scoring", detail: "OpenAI-backed ATS feedback scored 0 to 100 against a job posting" },
      { title: "Container optimized", detail: "Multi-stage Docker builds shrank images from 1.99GB to 520MB" },
      { title: "Load tested", detail: "67 req/sec sustained with zero failures at 100 concurrent users" },
    ],
    description: `
    Yeti Jobs is a full-stack production job portal built from scratch to connect job seekers, recruiters, and administrators through a scalable hiring workflow. The platform was designed as a complete software system rather than a simple CRUD application, covering authentication, role-based access control, job discovery, applications, company management, resume handling, and recruiter operations.
    
    I designed and implemented the complete backend architecture using Node.js, Express.js, PostgreSQL, and TypeScript. The system contains 50+ REST APIs covering authentication, user profiles, companies, jobs, applications, bookmarks, and administrative operations. The database schema was designed around real application requirements, including relational modeling, foreign key relationships, indexing strategies, and optimized queries.
    
    One of the main engineering challenges was building a fast job search experience. I implemented PostgreSQL full-text search with GIN indexing and optimized database queries, reducing search latency from 7ms to 0.9ms. The application also uses pagination, filtering, and optimized API responses to handle larger datasets efficiently.
    
    Authentication and authorization were built with security in mind. The platform supports multiple user roles including job seekers, recruiters, and administrators. JWT-based authentication protects private routes, while middleware controls access based on permissions and ownership. Recruiters manage companies, publish jobs, review applicants, and maintain hiring workflows, while candidates manage profiles, resumes, saved jobs, and applications.
    
    The frontend was developed using React, TypeScript, and Tailwind CSS with a focus on responsive user experience. The interface includes role-based navigation, protected routes, dynamic dashboards, job search with debouncing, application tracking, profile management, resume uploads, and recruiter tools. I built reusable components, custom hooks, centralized API handling with Axios, and optimized data fetching using request cancellation with AbortController.
    
    Performance optimization was a major focus throughout development. The frontend uses lazy loading, pagination, optimized rendering patterns, and efficient state management with React Context API. Search requests are optimized through debouncing to reduce unnecessary API calls. Images and Docker configurations were optimized, reducing container image size by 74%, from 1.99GB to 520MB through multi-stage Docker builds and Alpine-based images.
    
    The project includes an AI-powered resume scoring system that evaluates resumes against job descriptions and provides ATS-style feedback with a score from 0 to 100. This helps candidates understand resume gaps and improve their chances during applications.
    
    For reliability testing, I performed load testing with Apache Bench and verified system behavior under concurrent traffic. The application sustained 67 requests per second with 100 concurrent users while maintaining zero failed requests. During testing, I identified and fixed backend issues such as connection pool management problems before deployment.
    
    The application is deployed using modern cloud infrastructure with Vercel for frontend hosting, Render for backend services, and Supabase for database and storage services. CI/CD automation was added using GitHub Actions to improve deployment workflow and maintain code quality.
    
    Building Yeti Jobs helped me understand how real-world applications are designed, optimized, tested, and maintained. The project combines frontend engineering, backend architecture, database optimization, security practices, cloud deployment, and performance testing into a complete production-style system.
    `
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
    screenshot: "/projects/state-flow.png",
    span: "two",
    techStack: ["React", "Tailwind CSS", "Context API", "dnd-kit", "Chart.js"],
    features: [
      { title: "Drag-and-drop board", detail: "Instant visual feedback with persistent localStorage saves" },
      { title: "Undo and redo engine", detail: "Custom hook tracking past, present, and future state" },
      { title: "Keyboard shortcuts", detail: "Full shortcut system with an in-app cheat sheet" },
    ],
    
    description: `
    StateFlow is a Jira-inspired project management application built with React and Tailwind CSS, focused on creating a smooth task management experience with advanced frontend engineering concepts. The project provides users with a complete workflow to create, organize, update, and manage tasks through multiple views while keeping all data persistent on the client side.
    
    The application includes a visual Kanban-style board with drag-and-drop functionality, allowing users to move tasks between different stages with instant feedback. The drag-and-drop system was implemented using dnd-kit with custom sensors and collision detection to support smooth interactions across desktop and mobile devices. Task positions and changes are automatically synchronized with localStorage, ensuring user data remains available after page refreshes.
    
    State management was designed using React Context API to handle shared application data without unnecessary prop drilling. Tasks, updates, and application state are managed through centralized context logic, making different sections of the application easier to maintain and extend.
    
    One of the major engineering challenges was implementing a custom undo and redo system. Instead of relying on external libraries, I built a history management engine using the past, present, and future state pattern. Every task modification creates a history snapshot, allowing users to safely reverse or restore actions. The system supports multiple operations while keeping interactions responsive.
    
    The application includes complete task management features such as creating, editing, deleting, archiving, filtering, sorting, pinning important tasks, setting priorities, adding deadlines, and assigning labels. Users can switch between board and list views depending on their preferred workflow. The list view supports sorting based on priority, status, deadline, and default ordering.
    
    A keyboard shortcut system was implemented to improve productivity. Users have access to application-wide shortcuts with an integrated shortcut cheat sheet, making common actions faster without requiring additional navigation. The project also includes dark and light themes with Tailwind CSS configuration.
    
    Data portability was considered by adding export functionality. Users can export their task information into JSON and CSV formats, allowing them to keep backups or process their data externally. Chart visualization was added using Chart.js to provide a better understanding of task distribution and project status.
    
    The frontend architecture focuses on performance and maintainability. React.lazy and Suspense are used for code splitting and optimized loading. Components are structured around reusable patterns, while responsive layouts ensure the application works across different screen sizes. Modal and popup systems use React Portal to avoid layout conflicts caused by nested positioning and z-index issues.
    
    During development, I solved multiple frontend challenges including drag-and-drop state synchronization, controlled form handling, localStorage data consistency, event handling issues, sorting logic, CSV formatting problems, and responsive layout improvements.
    
    StateFlow helped me understand advanced frontend concepts beyond basic component development, including state history management, drag-and-drop architecture, performance optimization, client-side persistence, reusable component design, and building a complete user-focused application from an empty repository.
    `
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
    screenshot: "/projects/airbnb.png",
    span: "one",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js"],
    features: [
      { title: "Auth and ownership", detail: "Only listing owners can edit or delete their own posts" },
      { title: "Geocoding", detail: "MapTiler turns a typed address into live map markers" },
    ],
    description: `
    Home Finder is an Airbnb-inspired rental platform and my first major backend-focused project, built to understand how real-world web applications handle authentication, authorization, database relationships, file uploads, validation, and geolocation. The project follows the MVC architecture pattern and combines multiple backend concepts into a single application while maintaining a structured and scalable codebase.
    
    Users can create accounts, log in securely, publish property listings, upload images, browse available rentals, and leave reviews with ratings. Authentication is implemented using Passport.js with session-based login, while authorization rules ensure that only listing owners can edit or delete their own content and review authors can manage their own reviews.
    
    A major part of the project was integrating Cloudinary for image storage and management. Uploaded images are processed and stored in the cloud, with image URLs saved directly in MongoDB for efficient retrieval and rendering. The platform also includes MapTiler geocoding, allowing users to enter a location as plain text and automatically convert it into geographic coordinates that are displayed on an interactive map.
    
    The backend was built with Node.js, Express, and MongoDB, using Mongoose to model relationships between users, listings, and reviews. Joi validation was added to prevent invalid data from reaching the database, while custom middleware handles authentication checks, authorization rules, and centralized error management. Session data is persisted using connect-mongo, providing reliable login sessions across requests.
    
    During development, I solved challenges involving nested routes, middleware organization, session handling, image upload pipelines, geocoding integration, schema validation, database relationships, and deployment configuration. Building Home Finder helped me gain practical experience with backend architecture, RESTful routing, cloud services, authentication workflows, and creating maintainable full-stack applications beyond basic CRUD functionality.
    `
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
    screenshot: "/projects/beat-bridge.png",
    span: "one",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "Web Audio API"],
    features: [
      { title: "Smart queue", detail: "Auto-advances through playlists with bookmark support" },
      { title: "Zero dependencies", detail: "Built entirely on the HTML5 Audio API and ES6 modules" },
    ],
    description: `
    Beat Bridge is a feature-rich music player built entirely with HTML, CSS, and vanilla JavaScript without relying on frameworks, libraries, or prebuilt components. The project was created to explore browser APIs, application state management, and interactive UI development while building a complete audio playback experience from the ground up.
    
    The application supports 36 local audio tracks and provides a full music management workflow including playback controls, playlists, queue management, search functionality, bookmarks, keyboard shortcuts, sleep timers, and persistent user preferences. Audio playback is powered by the HTML5 Audio API, while all application logic was manually implemented using modular JavaScript architecture.
    
    A custom queue system allows users to add songs from any playlist or song table and schedule tracks to play automatically after the currently playing song finishes. Multiple playlists can be managed independently, and users can instantly switch between tracks through searchable song collections and dedicated playlist sections.
    
    To improve usability, the player includes complete playback controls such as play, pause, next, previous, automatic track progression, adjustable playback speed from 0.25x to 3.0x, volume controls, and accurate real-time tracking of current and total song duration. Loading states were added to ensure a smoother experience while audio content is being prepared.
    
    One of the major features is persistent state management through localStorage. The application remembers the last played song, playback position, bookmarks, volume settings, playback speed, and user preferences, allowing users to continue listening from the exact point where they left off even after refreshing or reopening the browser.
    
    The project also includes a bookmarking system that allows users to save favorite songs and quickly access them later. A built-in search engine provides instant song filtering, making navigation easier as the music library grows. User listening statistics such as play counts are tracked and displayed within the interface.
    
    Productivity-focused features were added through an extensive keyboard shortcut system containing more than ten shortcuts for playback control, navigation, volume adjustment, playback speed management, sleep timer controls, and quick access to an interactive shortcut guide. The shortcut reference is available through a floating help panel for easier discovery.
    
    A configurable sleep timer system was implemented with predefined durations as well as custom timer options. Once the selected timer expires, playback automatically stops without requiring further interaction from the user.
    
    During development, I worked through challenges involving audio synchronization, queue management, localStorage persistence, keyboard event handling, timer management, playback state restoration, dynamic UI updates, and browser audio behavior. Building Beat Bridge strengthened my understanding of DOM manipulation, event-driven programming, browser APIs, application architecture, state persistence, and creating complete interactive applications using only core web technologies.
    `
  },
];
