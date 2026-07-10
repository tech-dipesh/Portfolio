import type { Metadata } from "next";
import { LeetcodeStats } from "@/components/leetcode/stats";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `LeetCode — ${siteConfig.name}`,
  description: "Problem-solving track record across LeetCode, C++, and SQL.",
};

export default function LeetcodePage() {
  return (
    <div className="container scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Problem solving</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">LeetCode track record.</h1>
        <p className="mt-3 text-ink-muted">
          A snapshot of where my problem-solving stands today. Numbers are updated by hand, not pulled
          live, so they carry a timestamp instead of pretending to be real time.
        </p>
      </div>

      <div className="mt-10">
        <LeetcodeStats />
      </div>
    </div>
  );
}
