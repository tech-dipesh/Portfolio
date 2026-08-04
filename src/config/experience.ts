import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "gssoc",
    role: "Contributor",
    org: "GirlScript Summer of Code",
    period: "May 2026 — Present",
    location: "Remote",
    summary:
      "Contributing to open-source repositories in JavaScript and TypeScript, working through real pull request review cycles alongside mentors.",
    metrics: [
      { label: "Contributions merged", value: 5, unit: "+" },
      { label: "Repositories touched", value: 3, unit: "" },
    ],
  },
  {
    id: "yeti-jobs",
    role: "Backend & Full-Stack Engineer",
    org: "Yeti Jobs (personal project)",
    period: "Jan 2025 — Present",
    location: "Chandigarh, India",
    summary:
      "Designed and shipped a production-grade job portal solo — architecture, database indexing, authentication, and deployment pipeline all built from scratch.",
    metrics: [
      { label: "Search latency reduced", value: 87, unit: "%" },
      { label: "Docker image size cut", value: 74, unit: "%" },
      { label: "Load test throughput", value: 67, unit: "req/s" },
    ],
  },
  {
    id: "stateflow",
    role: "Frontend Engineer",
    org: "StateFlow (personal project)",
    period: "Oct 2025 — Dec 2025",
    location: "Chandigarh, India",
    summary:
      "Built a Jira-style project management tool with a hand-rolled undo/redo engine and drag-and-drop boards, all persisted client-side.",
    metrics: [
      { label: "Undo/redo operations, no lag", value: 50, unit: "+" },
      { label: "Views fully responsive", value: 5, unit: "" },
    ],
  },
  {
    id: "chitkara",
    role: "B.C.A, Computer Science",
    org: "Chitkara University",
    period: "2024 — Present",
    location: "Chandigarh, India",
    summary:
      "Coursework and independent study across data structures, algorithms, and systems, alongside 250+ solved problems on LeetCode.",
    metrics: [
      { label: "Current grade", value: 9.57, unit: "/10" },
      { label: "LeetCode problems solved", value: 250, unit: "+" },
    ],
  },
];
