import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { NepalFlag } from "@/components/about/nepal-flag";
import { Button } from "@/components/ui/button";
import { interests, nepalStory } from "@/config/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description:
    "Dipendra Sharma is a backend-focused full-stack developer from Baglung, Nepal, building scalable systems with Node.js, PostgreSQL, and Docker. Currently pursuing software engineering internships.",
  keywords: siteConfig.keywords,
};

export default function AboutPage() {
  return (
    <div className="container scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">
          The person behind the code
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">About me.</h1>
        <p className="mt-3 text-ink-muted">
          The longer version — what I do, where I&apos;m from, and what I do when I&apos;m not
          staring at a terminal.
        </p>
      </div>

      <div className="mt-10 max-w-2xl space-y-5">
        <p className="text-base leading-relaxed text-ink-muted">
          I&apos;m {siteConfig.name}, a backend-focused full-stack developer and Computer Science
          student at Chitkara University. I write backend systems the way most people write
          frontend — obsessively, until the details are right. Give me a schema and I&apos;ll find
          the index it&apos;s missing. Give me an endpoint and I&apos;ll ask what happens at ten
          thousand requests, not ten.
        </p>
        <p className="text-base leading-relaxed text-ink-muted">
          Most of what I know, I learned by building things all the way to production instead of
          stopping at a tutorial&apos;s finish line — Yeti Jobs, a job portal with a real database
          schema and real auth, is the clearest proof of that. Outside of shipping code, I spend a
          lot of time on LeetCode, not to collect a solved-count, but because every hard problem
          teaches me to see the shape of a solution before I write a line of it.
        </p>
        <p className="text-base leading-relaxed text-ink-muted">
          I&apos;m currently {siteConfig.availability.toLowerCase()} — if you&apos;re hiring for a
          backend or full-stack role and want someone who cares about the parts of engineering that
          don&apos;t show up in a demo, that&apos;s exactly what I&apos;m looking for.
        </p>
      </div>

      <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-surface/60">
        <div className="grid gap-8 p-8 md:grid-cols-[auto_1fr] md:items-start md:p-10">
          <NepalFlag className="h-16 w-14 shrink-0 drop-shadow-lg md:h-20 md:w-16" />
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent-soft">
              Where I&apos;m from
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
              {nepalStory.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {nepalStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Off the clock</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
          What I&apos;m into outside of shipping code.
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest.label}
              className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-soft">
                <Icon name={interest.icon} className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{interest.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{interest.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 mb-20 overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface to-base p-10 text-center md:p-14">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">
          {siteConfig.availability}
        </p>
        <h2 className="mx-auto mt-3 max-w-md text-2xl font-semibold tracking-tight md:text-3xl">
          If this sounds like someone you want on your team, let&apos;s talk.
        </h2>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button variant="accent" size="lg" asChild>
            <Link href="/#contact">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="projects">See the projects</Link>
          </Button>
        </div>
        <p className="mt-8 flex items-center justify-center gap-1.5 font-mono text-xs text-ink-faint">
          <Terminal className="h-3 w-3" />
          curious? curl {siteConfig.url.replace("https://", "")}/api/status
        </p>
      </div>
    </div>
  );
}
