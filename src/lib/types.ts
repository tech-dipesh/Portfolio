export interface ProjectFeature {
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  year: string;
  githubUrl: string;
  liveUrl: string;
  apiDocsUrl?: string;
  screenshot: string;
  span: "one" | "two" | "three";
  techStack: string[];
  features: ProjectFeature[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  label: string;
  items: SkillItem[];
}

export interface ExperienceMetric {
  label: string;
  value: number;
  unit: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  metrics: ExperienceMetric[];
}

export interface ResumeVariant {
  id: string;
  label: string;
  description: string;
  file: string;
}

export interface BlogFrontmatter {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  date: string;
  featured: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
}

export interface LeetcodeSnapshot {
  asOf: string;
  totalSolved: number;
  totalProblems: number;
  easy: { solved: number; total: number };
  medium: { solved: number; total: number };
  hard: { solved: number; total: number };
  contestRating: number;
  globalRank: number;
  totalUsers: number;
  topPercent: number;
  badges: number;
  maxStreak: number;
  activeDays: number;
}

export interface Achievement {
  name: string;
  proof?: string;
}

export interface Certification {
  title: string;
  url: string;
}

export interface DotfileEntry {
  label: string;
  value: string;
}

export interface DotfileGroup {
  label: string;
  entries: DotfileEntry[];
  note?: string;
}

export interface CalEventType {
  title: string;
  slug: string;
  lengthMinutes: number;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface CommandAction<T = void> {
  id: string;
  label: string;
  group: string;
  icon: string;
  shortcut?: string;
  run: () => T;
}
export interface Principle {
  id: number;
  topic: string;
  description: string;
  references: string;
}