import { ArrowUpRight, Github, FileJson } from "lucide-react";
import { CardInteractive } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectPreview } from "@/components/home/project-preview";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const spanClasses: Record<Project["span"], string> = {
  one: "md:col-span-1",
  two: "md:col-span-2",
  three: "md:col-span-3",
};

export function ProjectCard({ project }: { project: Project }) {
  const isWide = project.span !== "one";

  return (
    <CardInteractive className={cn("flex flex-col overflow-hidden", spanClasses[project.span])}>
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="flex items-center gap-2 text-xs text-ink-faint">
          <span>{project.year}</span>
          <span className="h-1 w-1 rounded-full bg-ink-faint" />
          <span>{project.role}</span>
        </div>
      </div>

      <div className={cn("relative w-full overflow-hidden", isWide ? "aspect-[16/8]" : "aspect-[4/3]")}>
        <ProjectPreview src={project.screenshot} alt={`${project.name} interface preview`} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-sm text-ink-muted">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-ink-muted">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group/link flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent-soft"
          >
            Live demo
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:rotate-45" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-ink-faint transition-colors hover:text-ink"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
          {project.apiDocsUrl ? (
            <a
              href={project.apiDocsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-ink-faint transition-colors hover:text-ink"
            >
              <FileJson className="h-3.5 w-3.5" />
              API docs
            </a>
          ) : null}
        </div>
      </div>
    </CardInteractive>
  );
}
