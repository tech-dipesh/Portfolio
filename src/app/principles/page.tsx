import type { Metadata } from "next";
import { Principles } from "@/components/principles/principles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Principles — ${siteConfig.name}`,
  description: "Short, hard-earned lessons from building real systems.",
};

export default function PrinciplesPage() {
  return (
    <div className="container scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Field notes</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Principles I build by.
        </h1>
        <p className="mt-3 text-ink-muted">
          Not a blog. Just the short, hard-earned lessons that actually changed how I write
          software — added one at a time, as I earn them.
        </p>
      </div>

      <div className="mt-10">
        <Principles />
      </div>
    </div>
  );
}