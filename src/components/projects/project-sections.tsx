import type { ProjectSection } from "@/lib/types";

export function ProjectSections({ sections }: { sections?: ProjectSection[] }) {
  if (!sections?.length) return null;

  return (
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-faint">
            {section.title}
          </h2>
          <ul className="mt-4 space-y-3 rounded-2xl border border-border bg-surface/60 p-5 md:p-6">
            {section.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
