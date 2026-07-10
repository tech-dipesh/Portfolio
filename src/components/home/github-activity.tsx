import { Github } from "lucide-react";
import { PinnedRepos } from "@/components/home/pinned-repos";
import { ContributionHeatmap } from "@/components/home/contribution-heatmap";
import { siteConfig } from "@/config/site";

export function GithubActivity() {
  return (
    <section className="container mt-32 scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Open source</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Building in public.</h2>
        </div>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <Github className="h-4 w-4" />
          @tech-dipesh
        </a>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        <PinnedRepos />
        <ContributionHeatmap />
      </div>
    </section>
  );
}
