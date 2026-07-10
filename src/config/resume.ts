import type { ResumeVariant } from "@/lib/types";

export const resumeVariants: ResumeVariant[] = [
  {
    id: "main",
    label: "Main Resume",
    description: "Full-stack overview, best for general applications",
    file: "/resume.pdf",
  },
  {
    id: "frontend",
    label: "Frontend Resume",
    description: "React, TypeScript, and UI-focused work",
    file: "/frontend.pdf",
  },
  {
    id: "backend",
    label: "Backend Resume",
    description: "APIs, databases, and system design",
    file: "/backend.pdf",
  },
  {
    id: "devops",
    label: "DevOps Resume",
    description: "Docker, CI/CD, and infrastructure work",
    file: "/devops.pdf",
  },
  {
  id: "dsa",
  label: "DSA Resume",
  description: "Problem-solving and algorithms focus for big-tech DSA interviews",
  file: "/dsa.pdf",
}];
