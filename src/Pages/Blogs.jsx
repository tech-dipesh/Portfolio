import BlogCard from "../Components/BlogCard";
import blogs from "../data/blogs.json";

export default function Blogs() {
  const featured = blogs.find(blog => blog.featured);
  const articles = blogs.filter(blog => !blog.featured);

  return (
    <section className="min-h-screen py-10 md:py-20 px-4 bg-slate-900">
      
    </section>
  );
}
