import { Link } from "react-router";


export default function BlogCard({ blog }) {
  console.log('id', blog.id)
  return (
    <article className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs uppercase tracking-widest text-blue-400">
          {blog.featured ? "Featured" : "Article"}
        </span>
        <span className="text-slate-500 text-sm">•</span>
        <span className="text-slate-500 text-sm">{blog.date}</span>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 leading-tight mb-3 group-hover:text-blue-400 transition-colors">
        {blog.title}
      </h2>

      <p className="text-slate-400 leading-relaxed mb-6">
        {blog.excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-5">
        <span className="text-sm text-slate-500">
          {blog.readTime}
        </span>

        <Link className="flex items-center gap-2 text-blue-400 font-medium" to={blog.slug}>
          <span>Read Article</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
