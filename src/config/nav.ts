import type { NavLink } from "@/lib/types";

export const homeSections: NavLink[] = [
  { label: "Home", href: "#hero", icon: "home" },
  { label: "Projects", href: "#projects", icon: "layers" },
  { label: "Experience", href: "#experience", icon: "git-branch" },
  { label: "Skills", href: "#skills", icon: "wrench" },
  { label: "Contact", href: "#contact", icon: "mail" },
];

export const siteRoutes: NavLink[] = [
  { label: "LeetCode", href: "/leetcode", icon: "code" },
  { label: "Blog", href: "/blogs", icon: "notebook" },
];

export const footerRoutes: NavLink[] = [
  { label: "Certifications", href: "/certifications", icon: "award" },
  { label: "Uses", href: "/uses", icon: "terminal-square" },
];
