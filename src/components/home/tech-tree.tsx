"use client";

import { ChevronRight, Folder, FolderOpen } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { skillGroups } from "@/config/skills";
import { cn } from "@/lib/utils";
import { useState } from "react";

function slugify(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function TechTree() {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(skillGroups.map((group) => group.label)),
  );

  const toggle = (label: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <section id="stack" className="container mt-32 scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">The stack</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Same tools, no fluff.
        </h2>
        <p className="mt-3 text-ink-muted">
          Pulled straight from the same config file the Skills section above reads from — click a
          folder to collapse it.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-surface/60 p-6 font-mono text-sm md:p-8">
        <p className="text-ink-faint">
          <span className="text-accent-soft">dipendra</span>@stack:
          <span className="text-accent-soft">~</span>$ tree ./skills
        </p>

        <div className="mt-4 border-l border-border pl-4">
          <p className="text-ink">dipendra-sharma/</p>
          <div className="mt-1 space-y-1 border-l border-border pl-4">
            {skillGroups.map((group, groupIndex) => {
              const isOpen = expanded.has(group.label);
              const isLastGroup = groupIndex === skillGroups.length - 1;

              return (
                <div key={group.label}>
                  <button
                    onClick={() => toggle(group.label)}
                    className="group flex w-full items-center gap-1.5 rounded-md py-1 text-left text-ink-muted transition-colors hover:text-ink"
                    aria-expanded={isOpen}
                  >
                    <ChevronRight
                      className={cn(
                        "h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-200",
                        isOpen && "rotate-90",
                      )}
                    />
                    {isOpen ? (
                      <FolderOpen className="h-3.5 w-3.5 shrink-0 text-accent" />
                    ) : (
                      <Folder className="h-3.5 w-3.5 shrink-0 text-accent" />
                    )}
                    <span>{slugify(group.label)}/</span>
                    <span className="ml-1 text-xs text-ink-faint">({group.items.length})</span>
                  </button>

                  {isOpen ? (
                    <div
                      className={cn(
                        "ml-[7px] space-y-0.5 border-l border-border pb-1 pl-5",
                        isLastGroup && "border-transparent",
                      )}
                    >
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-2 rounded-md py-0.5 text-ink-muted transition-colors hover:text-ink"
                        >
                          <Icon name={item.icon} className="h-3.5 w-3.5 shrink-0 text-ink-faint" />
                          {slugify(item.name)}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
