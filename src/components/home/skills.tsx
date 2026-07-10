"use client";

import {useState, useEffect} from 'react'
import { Sparkles, Trophy } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Skeleton } from "@/components/ui/skeleton";
import { skillGroups, futureSkills, achievements } from "@/config/skills";

export function Skills() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="container mt-32 scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Toolbox</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">What I reach for.</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-2xl border border-border bg-surface/60 p-5">
            <h3 className="text-sm font-medium text-ink-muted">{group.label}</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {loading
                ? Array.from({ length: group.items.length }).map((_, index) => (
                    <Skeleton key={index} className="h-10 w-full" />
                  ))
                : group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-xl border border-border bg-raised/50 px-3 py-2.5 text-sm text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
                    >
                      <Icon name={item.icon} className="h-4 w-4 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface/60 p-6">
          <div className="flex items-center gap-2 text-sm font-medium text-ink-muted">
            <Sparkles className="h-4 w-4 text-accent" />
            Currently learning
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {futureSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs text-accent-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface/60 p-6">
          <div className="flex items-center gap-2 text-sm font-medium text-ink-muted">
            <Trophy className="h-4 w-4 text-accent" />
            Achievements
          </div>
          <ul className="mt-4 space-y-2.5">
            {achievements.slice(0, 5).map((achievement) => (
              <li key={achievement.name} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {achievement.proof ? (
                  <a
                    href={achievement.proof}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-ink"
                  >
                    {achievement.name}
                  </a>
                ) : (
                  <span>{achievement.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
