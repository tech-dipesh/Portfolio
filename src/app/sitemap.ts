import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dipsharma.me",
      priority: 1,
    },
    {
      url: "https://www.dipsharma.me/about",
      priority: 0.9,
    },
    {
      url: "https://www.dipsharma.me/projects",
      priority: 0.9,
    },
    {
      url: "https://www.dipsharma.me/skills",
      priority: 0.8,
    },
  ];
}