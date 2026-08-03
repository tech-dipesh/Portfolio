import { Quote } from "lucide-react";
import type { Principle } from "@/lib/types";

export function PrincipleEntry({ id, topic, description, references }: Principle) {
  const index = String(id).padStart(2, "0");

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow md:p-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-8 select-none font-mono text-8xl font-bold leading-none text-border/60 transition-colors duration-300 group-hover:text-accent/10"
      >
        {index}
      </span>

      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-soft">
          Principle {index}
        </p>
        <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {topic}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">{description}</p>

        <div className="mt-6 flex items-start gap-2 border-t border-border pt-4 text-sm italic text-ink-faint">
          <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          {references}
        </div>
      </div>
    </article>
  );
}