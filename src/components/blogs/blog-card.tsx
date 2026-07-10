import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogFrontmatter } from "@/lib/types";

export function BlogCard({ post }: { post: BlogFrontmatter }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow"
    >
      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>

      <div className="mt-6 flex items-center justify-between text-xs text-ink-faint">
        <span>
          {post.date} · {post.readTime}
        </span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent-soft" />
      </div>
    </Link>
  );
}
