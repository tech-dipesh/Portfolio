import { useParams } from "react-router";
import blogs from "../data/blogs.json";

export default function Blog() {
  const { slug, id } = useParams();

  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-900">
        <h1 className="text-slate-100 text-2xl font-bold">
          Article Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-10 md:py-20 px-4 bg-slate-900">
      <article className="max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-lg bg-slate-800 border border-slate-700 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-3 text-slate-400">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10">
          <div className="prose prose-invert max-w-none">
            {blog.content}
          </div>
        </div>
      </article>
    </section>
  );
}
