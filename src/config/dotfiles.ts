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
      { label: "Editor", value: "Zed" },
      { label: "Secondary editor", value: "Neovim" },
      { label: "Workflow", value: "Vim-based key bindings" },
    ],
    note: "Migrated from Neovim to Zed after persistent LSP bugs, slow load times, and weak support for academic languages. Zed's speed and native Vim bindings fixed that. Still sharpening advanced Vim motions, with another productivity jump expected once the Linux migration lands.",
  },
  {
    label: "Terminal & Browser",
    entries: [
      { label: "Primary terminal", value: "Git Bash" },
      { label: "Secondary terminal", value: "Warp (occasionally)" },
      { label: "Primary browser", value: "Brave" },
      { label: "Secondary browser", value: "Firefox" },
    ],
    note: "About 90% of my time lives in Git Bash — it's where the editor runs and where the actual work happens. Browsers only come out for research and visual content, everything else stays in the terminal.",
  },
  {
    label: "Development Tools",
    entries: [
      { label: "Container platform", value: "Docker" },
      { label: "Database GUI", value: "TablePlus" },
      { label: "API client", value: "Bruno" },
      { label: "Media player", value: "VLC" },
    ],
    note: "Docker runs almost everything locally — Postgres, Redis, Ubuntu environments, and full project containers — for dev-to-deploy parity. TablePlus replaced pgAdmin for daily database work, and Bruno replaced Postman for a faster, local-first API workflow. VLC handles every format better than Windows' native player ever did.",
  },
];