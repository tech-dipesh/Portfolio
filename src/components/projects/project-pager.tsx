import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectPagerProps {
  previous: Project;
  next: Project;
}

export function ProjectPager({ previous, next }: ProjectPagerProps) {
  return (
    <div className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
      <Link
        href={`/projects/${previous.slug}`}
        className="group flex flex-col gap-1 rounded-2xl border border-border bg-surface/60 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow"
      >
        <span className="flex items-center gap-1.5 text-xs text-ink-faint">
          <ArrowLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" />
          Previous
        </span>
        <span className="text-sm font-semibold text-ink">{previous.name}</span>
      </Link>
      <Link
        href={`/projects/${next.slug}`}
        className="group flex flex-col items-end gap-1 rounded-2xl border border-border bg-surface/60 p-5 text-right transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow"
      >
        <span className="flex items-center gap-1.5 text-xs text-ink-faint">
          Next
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="text-sm font-semibold text-ink">{next.name}</span>
      </Link>
    </div>
  );
}
