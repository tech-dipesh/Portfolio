import type { Metadata } from "next";
import { Cpu, Terminal, Globe } from "lucide-react";
import { dotfileGroups } from "@/config/dotfiles";
import { siteConfig } from "@/config/site";

const groupIcons = [Cpu, Terminal, Globe];

export const metadata: Metadata = {
  title: `Uses — ${siteConfig.name}`,
  description: "The hardware, editor, and terminal setup behind everything I build.",
};

export default function UsesPage() {
  return (
    <div className="container scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Workspace</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">What I build with.</h1>
        <p className="mt-3 text-ink-muted">
          The exact hardware and tools behind every project on this site, kept current as the setup
          changes.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {dotfileGroups.map((group, index) => {
          const GroupIcon = groupIcons[index % groupIcons.length] ?? Cpu;
          return (
            <div key={group.label} className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-ink-muted">
                <GroupIcon className="h-4 w-4 text-accent" />
                {group.label}
              </div>
              <dl className="mt-4 space-y-3">
                {group.entries.map((entry) => (
                  <div key={entry.label} className="flex items-center justify-between gap-3 text-sm">
                    <dt className="text-ink-faint">{entry.label}</dt>
                    <dd className="text-right font-mono text-ink">{entry.value}</dd>
                  </div>
                ))}
              </dl>
              {group.note ? (
                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-ink-faint">
                  {group.note}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
