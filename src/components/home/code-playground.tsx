"use client";

import {useEffect,  useState} from "react";
import { CheckCircle2, Loader2, Circle } from "lucide-react";

interface PipelineStep {
  label: string;
  detail: string;
}

const pipeline: PipelineStep[] = [
  { label: "postgres migration", detail: "applying composite index on jobs.search_title" },
  { label: "docker build", detail: "multi-stage build, alpine base, 520MB image" },
  { label: "test suite", detail: "28 integration tests, jest + supertest" },
  { label: "load test", detail: "67 req/s sustained, 0 failures at 100 concurrent" },
  { label: "deploy", detail: "render + vercel, cold start eliminated" },
];

type StepStatus = "done" | "active" | "pending";

export function CodePlayground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (pipeline.length + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const statusFor = (index: number): StepStatus => {
    if (index < activeIndex) return "done";
    if (index === activeIndex) return "active";
    return "pending";
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-lifted backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="ml-2 font-mono text-xs text-ink-faint">yeti-jobs · deploy pipeline</span>
      </div>
      <div className="space-y-4 p-5 font-mono text-sm">
        {pipeline.map((step, index) => {
          const status = statusFor(index);
          return (
            <div
              key={step.label}
              className={
                "flex items-start gap-3 transition-opacity duration-500 " +
                (status === "pending" ? "opacity-40" : "opacity-100")
              }
            >
              {status === "done" ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              ) : status === "active" ? (
                <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-accent" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
              )}
              <div>
                <p className="text-ink">{step.label}</p>
                <p className="text-xs text-ink-faint">{step.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-border bg-raised/60 px-5 py-3 font-mono text-xs text-ink-faint">
        search latency <span className="text-accent-soft">7ms → 4.9ms</span>
      </div>
    </div>
  );
}
