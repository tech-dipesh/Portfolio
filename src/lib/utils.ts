import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractYouTubeId(url: string): string | null {
  const pattern = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=|shorts\/))([\w-]{11})/;
  const match = url.match(pattern);
  return match?.[1] ?? null;
}

export function formatDescription(raw: string): string[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\n/g, " ").trim())
    .filter(Boolean);
}
