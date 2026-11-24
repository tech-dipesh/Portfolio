import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectPreview } from "@/components/home/project-preview";
import type { Project } from "@/lib/types";

export function FlagshipProject({ project }: { project: Project }) {
  const host = new URL(project.liveUrl).host;
  const highlights = project.features.slice(0, 4);

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-surface/60 shadow-glow">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border lg:aspect-auto lg:min-h-[440px] lg:border-b-0 lg:border-r">
          <ProjectPreview src={project.screenshot} alt={`${project.name} interface preview`} />
          <Badge variant="accent" className="absolute left-4 top-4 backdrop-blur-md">
            <Star className="h-3 w-3" />
            Flagship project
          </Badge>
        </div>

        <div className="flex flex-col gap-5 p-6 md:p-8">
          {project.status ? (
            <p className="flex items-center gap-2 text-xs text-ink-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {project.status}
            </p>
          ) : null}

          <div>
            <h3 className="text-3xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-1.5 text-base text-ink-muted">{project.tagline}</p>
          </div>

          <p className="text-sm leading-relaxed text-ink-muted">{project.summary}</p>

          <ul className="space-y-2">
            {highlights.map((feature) => (
              <li key={feature.title} className="flex gap-2.5 text-sm text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>
                  <span className="font-medium text-ink">{feature.title}.</span> {feature.detail}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="neutral">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            <Button variant="accent" size="md" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener">
                Open {host}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="md" asChild>
              <Link href={`/projects/${project.slug}`}>
                Read the case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-ink-faint transition-colors hover:text-ink"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
