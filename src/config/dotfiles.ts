import type { DotfileGroup } from "@/lib/types";

export const dotfileGroups: DotfileGroup[] = [
  {
    label: "Hardware",
    entries: [
      { label: "Model", value: "Acer ALG AL15G-52" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB" },
      { label: "OS", value: "Windows 11" },
    ],
    note: "Planning to migrate to native Linux — Pop!_OS or another distro is next on the list.",
  },
  {
    label: "Editor",
    entries: [
      { label: "Editor", value: "Neovim" },
      { label: "Workflow", value: "Terminal-only, no GUI IDE" },
    ],
    note: "Still building muscle memory on the harder motions, but most day-to-day commands are second nature now. Productivity jumps again once the Linux migration is done.",
  },
  {
    label: "Terminal & Browser",
    entries: [
      { label: "Primary terminal", value: "Git Bash" },
      { label: "Secondary terminal", value: "Warp (occasionally)" },
      { label: "Primary browser", value: "Brave" },
      { label: "Secondary browser", value: "Firefox" },
    ],
    note: "About 90% of my time lives in Git Bash — it's where Neovim runs and where the actual work happens. Browsers only come out for research and visual content, everything else stays in the terminal.",
  },
];
