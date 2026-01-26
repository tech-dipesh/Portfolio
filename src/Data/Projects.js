import StateImage from "../assets/images/stateflow.png";
import AirBnb from "../assets/images/airbnb.png";
import MusicPlayer from "../assets/images/beat-bridge.png";

export default [
  {
    name: "State-Flow",
    intro:
      "A Jira-inspired task manager built with React to track projects, deadlines, and priorities—all in one clean, drag-and-drop board.",
    isTeamOrSolo: "Solo Project",
    githubLink: "https://github.com/tech-dipesh/StateFlow-Project-Managment",
    liveDemo: "https://state-flows.vercel.app/",
    Description:
      "This is a full-featured project management tool with a Kanban board, filtering, sorting, and persistent local storage. It supports drag-and-drop task management, labels, deadlines, dark mode, and real-time charts—all built from scratch using React and modern hooks.",
    image: StateImage,
    features: [
      "Drag-and-Drop Board – Move tasks between columns visually, with undo/redo support and persistent storage.",
      "Smart Task Management – Add labels, deadlines, priority levels, and pin important tasks—all fully editable inline.",
      "Interactive Dashboard – View progress with pie charts, export data to CSV/JSON, and use keyboard shortcuts for faster navigation.",
      "Fully Responsive & Themed – Works on mobile, includes dark/light mode, and archives old tasks for better organization.",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Context API",
      "React Router",
      "DnD Kit",
      "Chart.js",
      "React Select",
    ],
    Completed: "January 2026",
  },
  {
    name: "Home Finder",
    intro:
      "A full-stack Airbnb-style rental platform where users can list properties, browse locations, and leave reviews—all with secure authentication and cloud image upload.",
    isTeamOrSolo: "Solo Project",
    githubLink: "https://github.com/tech-dipesh/mega-project-listing/",
    liveDemo: "https://mega-project-listing.onrender.com/",
    Description:
      "This is my first backend-focused project using the MVC architecture. It handles user authentication, file uploads to Cloudinary, and live maps with geo-location—all while keeping data persistent with MongoDB Atlas.",
    image: StateImage,
    features: [
      "User Authentication & Authorization – Secure signup/login with Passport.js, session management, and user-specific permissions for editing/deleting listings.",
      "Cloud-Powered Media Handling – Upload property images directly to Cloudinary with Multer, with compression and preview features for better UX.",
      "Interactive Maps & Geo-Location – Integrated MapTiler for live location mapping, forward geocoding to convert addresses into coordinates, and interactive markers on listing pages.",
      "Full CRUD with Reviews & Filters – Create, update, and delete rental listings; add/remove reviews; toggle price displays; and filter properties—all with a responsive, Bootstrap-styled UI.",
    ],
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Cloudinary",
      "MapTiler",
      "Passport.js",
    ],
    Completed: "February 2025",
  },
  {
    name: "Beat Bridge",
    intro:
      "A fully-featured music player built entirely from scratch using vanilla JavaScript—no frameworks, no libraries, just pure DOM manipulation and custom logic.",
    isTeamOrSolo: "Solo Project",
    githubLink: "https://tech-dipesh.github.io/Beat-Bridge/#/",
    liveDemo: "https://state-flows.vercel.app/",
    Description:
      "This is a complete audio player with playlists, queue management, bookmarks, search, sleep timer, and keyboard shortcuts. All state persists across sessions via localStorage, providing a seamless user experience.",
    image: StateImage,
    features: [
      "- Smart Queue & Playlist System – Add songs to queue or select from playlists; tracks automatically play in sequence after the current song ends.",
      "- **Sleep Timer & Custom Controls** – Set predefined or custom timers to stop playback, with volume/speed sliders, bookmarks, and play count tracking.",
      " - **Persistent State & Shortcuts** – Remembers last song, position, volume, and bookmarks. Full keyboard control with over 10 shortcuts (play/pause, volume, speed, timer, etc.",
      "Pure Vanilla Implementation** – Built manually without AI or tutorials—uses modular JavaScript, dynamic UI updates, and efficient event handling for a smooth, framework‑free experience.",
    ],
    techStack: ["HTML", "CSS", "Vanilla JavaScript (ES6 Modules)"],
    Completed: "December 2024",
  },
];
