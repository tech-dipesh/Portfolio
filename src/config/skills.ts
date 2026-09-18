import type { SkillGroup, Achievement } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", icon: "Braces" },
      { name: "TypeScript", icon: "FileCode2" },
      { name: "Java", icon: "Coffee" },
      { name: "C", icon: "Cpu" },
      { name: "C++", icon: "CircuitBoard" },
      { name: "SQL", icon: "Database" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "Atom" },
      { name: "Nextjs", icon: "Split" },
      { name: "Context API", icon: "GitMerge" },
      { name: "Redux", icon: "Boxes" },
      { name: "Node.js", icon: "Server" },
      { name: "Express", icon: "Route" },
      { name: "PostgreSQL", icon: "DatabaseZap" },
      { name: "MongoDB", icon: "Leaf" },
      { name: "Prisma", icon: "Triangle" },
      { name: "Tailwind CSS", icon: "Wind" },
      { name: "Axios", icon: "ArrowLeftRight" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Docker", icon: "Container" },
      { name: "Redis", icon: "HardDrive" },
      { name: "Linux", icon: "Terminal" },
      { name: "Neovim", icon: "TextCursor" },
      { name: "Git", icon: "GitBranch" },
      { name: "Vercel", icon: "Rocket" },
      { name: "Render", icon: "Cloud" },
      { name: "Vite", icon: "Zap" },
      { name: "AWS", icon: "CloudCog" },
      { name: "Apache Bench", icon: "Gauge" },
    ],
  },
];

export const futureSkills = [
  "CI/CD (GitHub Actions)",
  "Computer Foundation (Revision)",
  "WebSockets (Socket.io)",
  "Foundation of Type (Revision)",
];

export const achievements: Achievement[] = [
  {
    name: "Selected for Round 2, Polaris Fellowship 2026 — a national fellowship for ambitious builders",
    proof: "https://drive.google.com/file/d/1gZ5_8c87zdHnkCKg-MZ_jf4-LaXV8Set/view?usp=sharing",
  },
  {
    name: "CodeaThon 7.0 Winner — 1st place, university-level, cash prize",
    proof: "https://drive.google.com/file/d/19h1wVZB8a6Fis89e7LebEkdeuG_-vOYF/view?usp=sharing",
  },
  {
    name: "BiblioPhile Award Winner — Chitkara University Library",
    proof: "https://drive.google.com/file/d/14BLCLvQWZnQmDc75lo4Wm9TcbCPk7DZo/view?usp=sharing",
  },
  {
    name: "CEED Member — Entrepreneurship Program, Chitkara University",
    proof: "https://www.linkedin.com/company/chitkaraenterpriselab",
  },
  {
    name: "Selected Contributor — GirlScript Summer of Code 2026",
    proof: "https://gssoc.girlscript.tech/",
  },
  {
    name: "Solved 250+ DSA problems on LeetCode",
    proof: "https://leetcode.com/tech-dipesh/",
  },
  {
    name: "400+ GitHub commits across 20+ repositories",
    proof: "https://github.com/tech-dipesh",
  },
  {
    name: "AWS Educate — Introduction to Cloud 101 (EC2, S3, IAM)",
    proof: "https://www.credly.com/badges/e3439fc7-4a2c-439c-bc19-c4e855421844",
  },
];
