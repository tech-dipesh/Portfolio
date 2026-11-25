import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function GET() {
  const posts = getAllPosts();
  const items = posts.map((post) => {
    const url = `${siteConfig.url}/blogs/${post.slug}`;
    const published = new Date(post.date);
    const pubDate = Number.isNaN(published.getTime()) ? "" : `<pubDate>${published.toUTCString()}</pubDate>`;
    const categories = post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("");
    return `<item><title>${escapeXml(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid>${pubDate}<description>${escapeXml(post.excerpt)}</description>${categories}</item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${escapeXml(siteConfig.name)} — Notes from the build</title><link>${siteConfig.url}/blogs</link><description>Short write-ups on backend systems, tooling and the problems I hit while building.</description><language>en</language><atom:link href="${siteConfig.url}/rss" rel="self" type="application/rss+xml"/>${items.join("")}</channel></rss>`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
