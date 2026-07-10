import type { Metadata } from "next";
import { BlogCard } from "@/components/blogs/blog-card";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
  description: "Notes on backend systems, performance, and things I learned the hard way.",
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <div className="container scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Writing</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Notes from the build.</h1>
        <p className="mt-3 text-ink-muted">
          Short write-ups on the specific problems I ran into while building Yeti Jobs and StateFlow, and
          how I actually solved them.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center text-ink-faint">
          Nothing published yet. Check back soon.
        </div>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
