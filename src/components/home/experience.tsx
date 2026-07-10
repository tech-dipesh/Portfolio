"use client";

import {useState, useEffect} from 'react'
import { experience } from "@/config/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  const [activeId, setActiveId] = useState(experience[0]?.id ?? "");
  const active = experience.find((entry) => entry.id === activeId) ?? experience[0];

  if (!active) return null;

  const maxMetric = Math.max(...active.metrics.map((metric) => metric.value), 1);

  return (
    <section id="experience" className="container mt-32 scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Journey</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Where the time went.</h2>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr]">
        <ol className="relative space-y-8 pl-8">
          <div className="absolute bottom-0 left-[7px] top-1 w-px bg-gradient-to-b from-border-strong via-border to-transparent" />
          {experience.map((entry) => (
            <li key={entry.id} className="relative">
              <button
                onClick={() => setActiveId(entry.id)}
                className="group flex w-full flex-col gap-1 text-left"
              >
                <span
                  className={cn(
                    "absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300",
                    entry.id === activeId
                      ? "border-accent bg-accent shadow-glow"
                      : "border-border-strong bg-surface group-hover:border-accent/60",
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    entry.id === activeId ? "text-ink" : "text-ink-muted group-hover:text-ink",
                  )}
                >
                  {entry.role} · {entry.org}
                </span>
                <span className="text-xs text-ink-faint">{entry.period}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-border bg-surface/60 p-6">
          <p className="font-mono text-xs text-ink-faint">{active.location}</p>
          <h3 className="mt-1 text-lg font-semibold">{active.org}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{active.summary}</p>

          <div className="mt-6 space-y-4">
            {active.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-muted">{metric.label}</span>
                  <span className="font-mono text-ink">
                    {metric.value}
                    {metric.unit}
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-raised">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
                    style={{ width: `${Math.min((metric.value / maxMetric) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
