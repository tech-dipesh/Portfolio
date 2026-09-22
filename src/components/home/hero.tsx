import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodePlayground } from "@/components/home/code-playground";
import { ProfilePhoto } from "@/components/home/profile-photo";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="hero" className="container grid gap-16 pt-8 md:grid-cols-2 md:items-center md:pt-16">
      <div>
        <div className="flex items-center gap-4">
          <ProfilePhoto />
          <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
            <MapPin className="h-3 w-3" />
            {siteConfig.location} · Building Yeti Jobs
          </div>
        </div>

        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
          Dipendra Sharma
          <br />
          <span className="text-gradient">Backend-focused</span>
          <br />
          <span className="text-gradient">full-stack developer.</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
          I&apos;m Dipendra Sharma, a CS student at Chitkara University and a backend-focused full-stack developer.
          </p>  

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="accent" size="lg" asChild>
            <a href="projects">
              View projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <a
          href={siteConfig.leetcode}
          target="_blank"
          rel="noreferrer"
          className="group mt-12 inline-flex items-center gap-4 border-t border-border pt-6 transition-colors"
        >
          <span className="text-3xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-soft">
            325
          </span>
          <span className="text-sm text-ink-faint transition-colors group-hover:text-ink-muted">
            LeetCode problems solved
            <br />
            <span className="text-xs">— verify it yourself, link&apos;s real</span>
          </span>
        </a>
      </div>

      <div className="animate-float">
        <CodePlayground />
      </div>
    </section>
  );
}
