import { Star, ArrowUpRight } from "lucide-react";
import { getPinnedRepos } from "@/lib/github";

export async function PinnedRepos() {
  const repos = await getPinnedRepos();

  if (repos.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-surface/60 p-6 text-sm text-ink-faint">
        Pinned repositories are unavailable right now. Check back shortly.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col rounded-2xl border border-border bg-surface/60 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">{repo.name}</span>
            <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent-soft" />
          </div>
          {repo.description ? (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{repo.description}</p>
          ) : null}
          <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint">
            {repo.language ? (
              <span className="flex items-center gap-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: repo.languageColor }}
                />
                {repo.language}
              </span>
            ) : null}
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {repo.stars}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
