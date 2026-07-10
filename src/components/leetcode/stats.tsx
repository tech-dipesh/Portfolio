"use client";

import {useEffect , useState} from "react";
import { Trophy, Flame, Award, Target } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { leetcodeSnapshot, leetcodeLanguages } from "@/config/leetcode";

const difficultyMeta = [
  { key: "easy" as const, label: "Easy", color: "bg-emerald-500" },
  { key: "medium" as const, label: "Medium", color: "bg-amber-500" },
  { key: "hard" as const, label: "Hard", color: "bg-rose-500" },
];

export function LeetcodeStats() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid gap-5 md:grid-cols-3">
        <Skeleton className="h-48 md:col-span-2" />
        <Skeleton className="h-48" />
        <Skeleton className="h-32 md:col-span-3" />
      </div>
    );
  }

  const snapshot = leetcodeSnapshot;

  return (
    <div className="space-y-5">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface/60 p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-ink-muted">Problems solved</h3>
            <span className="text-xs text-ink-faint">as of {snapshot.asOf}</span>
          </div>
          <p className="mt-2 text-4xl font-semibold tracking-tight">
            {snapshot.totalSolved}
            <span className="text-lg text-ink-faint"> / {snapshot.totalProblems}</span>
          </p>

          <div className="mt-6 space-y-3">
            {difficultyMeta.map((meta) => {
              const data = snapshot[meta.key];
              const percent = (data.solved / data.total) * 100;
              return (
                <div key={meta.key}>
                  <div className="flex items-center justify-between text-xs text-ink-muted">
                    <span>{meta.label}</span>
                    <span className="font-mono">
                      {data.solved} / {data.total}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-raised">
                    <div
                      className={`h-full rounded-full ${meta.color} transition-all duration-700 ease-out`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface/60 p-6">
          <h3 className="text-sm font-medium text-ink-muted">Contest rating</h3>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-accent-soft">
            {snapshot.contestRating}
          </p>
          <p className="mt-1 text-xs text-ink-faint">
            top {snapshot.topPercent}% · rank {snapshot.globalRank.toLocaleString()}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-accent" />
              <div>
                <p className="text-sm font-medium">{snapshot.badges}</p>
                <p className="text-xs text-ink-faint">badges</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-accent" />
              <div>
                <p className="text-sm font-medium">{snapshot.maxStreak}</p>
                <p className="text-xs text-ink-faint">max streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface/60 p-6">
          <div className="flex items-center gap-2 text-sm font-medium text-ink-muted">
            <Target className="h-4 w-4 text-accent" />
            Active days
          </div>
          <p className="mt-2 text-2xl font-semibold">{snapshot.activeDays}</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface/60 p-6 md:col-span-2">
          <div className="flex items-center gap-2 text-sm font-medium text-ink-muted">
            <Trophy className="h-4 w-4 text-accent" />
            Solved by language
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {leetcodeLanguages.map((lang) => (
              <span
                key={lang.name}
                className="rounded-full border border-border bg-raised px-3 py-1.5 text-xs text-ink-muted"
              >
                {lang.name} · {lang.solved}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
