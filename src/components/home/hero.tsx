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
          I&apos;m Dipendra Sharma, a Bachelor of Computer Applications (BCA) student at Chitkara University and a backend-focused full-stack developer.
          </p>  

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="accent" size="lg" asChild>
            <a href="#projects">
              View projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-6">
          <div>
            <dt className="text-2xl font-semibold tracking-tight">50+</dt>
            <dd className="text-xs text-ink-faint">REST APIs shipped</dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold tracking-tight">325</dt>
            <dd className="text-xs text-ink-faint">LeetCode problems</dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold tracking-tight">0.9ms</dt>
            <dd className="text-xs text-ink-faint">search latency</dd>
          </div>
        </dl>
      </div>

      <div className="animate-float">
        <CodePlayground />
      </div>
    </section>
  );
}
