import type { MetadataRoute } from "next";
import { projects } from "@/config/projects";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, priority: 1 },
    { url: `${siteConfig.url}/about`, priority: 0.9 },
    { url: `${siteConfig.url}/blogs`, priority: 0.7 },
    { url: `${siteConfig.url}/certifications`, priority: 0.6 },
    { url: `${siteConfig.url}/uses`, priority: 0.5 },
    { url: `${siteConfig.url}/principles`, priority: 0.5 },
    { url: `${siteConfig.url}/leetcode`, priority: 0.4 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blogs/${post.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
