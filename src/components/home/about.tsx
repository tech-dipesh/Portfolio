import { whoAmI, coreSkillTags } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export function About() {
  const paragraphs = whoAmI.split("\n\n");

  return (
    <section className="container mt-32 scroll-mt-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Who I am</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            More builder than talker.
          </h2>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {coreSkillTags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
