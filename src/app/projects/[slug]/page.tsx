import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, FileJson } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectVideo } from "@/components/projects/project-video";
import { ProjectPager } from "@/components/projects/project-pager";
import { projects } from "@/config/projects";
import { formatDescription } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${siteConfig.name}`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const previous = projects[(index - 1 + projects.length) % projects.length] ?? project;
  const next = projects[(index + 1) % projects.length] ?? project;
  const paragraphs = formatDescription(project.description);

  return (
    <div className="container max-w-3xl scroll-mt-28">
      <Link
        href="projects"
        className="inline-flex items-center gap-1.5 text-sm text-ink-faint transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All projects
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
        <span>{project.year}</span>
        <span className="h-1 w-1 rounded-full bg-ink-faint" />
        <span>{project.role}</span>
      </div>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{project.name}</h1>
      <p className="mt-2 text-lg text-ink-muted">{project.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="neutral">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
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

      <div className="mt-10">
        <ProjectVideo videoUrl={project.videoUrl} name={project.name} />
      </div>

      <div className="mt-10 space-y-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-faint">
          Key features
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-sm font-semibold text-ink">{feature.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{feature.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <ProjectPager previous={previous} next={next} />
    </div>
  );
}
