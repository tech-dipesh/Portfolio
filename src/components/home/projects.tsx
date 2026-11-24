import { ProjectCard } from "@/components/home/project-card";
import { FlagshipProject } from "@/components/home/flagship-project";
import { projects } from "@/config/projects";

export function Projects() {
  const flagship = projects.find((project) => project.flagship);
  const others = projects.filter((project) => project !== flagship);

  return (
    <section id="projects" className="container mt-32 scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Selected work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Projects built end to end.
        </h2>
        <p className="mt-3 text-ink-muted">
          Every project below started from an empty repository. Architecture, database schema, and
          deployment are all mine.
        </p>
      </div>

      {flagship ? (
        <div className="mt-10">
          <FlagshipProject project={flagship} />
        </div>
      ) : null}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {others.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
