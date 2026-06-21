import BlogCard from "../Components/BlogCard";
import blogs from "../data/blogs.json";

export default function Blogs() {
  const featured = blogs.find(blog => blog.featured);
  const articles = blogs.filter(blog => !blog.featured);

  return (
    <section className="min-h-screen py-10 md:py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
            Engineering Notes
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            My thoughs on backend systems, dbs, performance, observability and the software engineering
          </p>
        </div>

        {featured && (
          <div className="mb-16">
            <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">
              Featured
            </p>
            <BlogCard blog={featured} />
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-100">
            Latest Articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map(blog => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
