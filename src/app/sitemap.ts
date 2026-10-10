import { MetadataRoute } from "next";
import { allModels, toModelSlug } from "@/lib/fusen/machines";
import { BLOG_POSTS } from "@/lib/fusen/blog";

export const dynamic = "force-static";

const SITE_URL = "https://fusenco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/plan/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/", priority: 0.8, changeFrequency: "weekly" },
  ];

  // Individual machine detail pages for every in-stock model
  const machinePages = allModels().map((m) => ({
    path: `/machines/${toModelSlug(m)}/`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  // Blog article / video pages
  const blogPages = BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}/`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const combined = [...pages, ...machinePages, ...blogPages];

  return combined.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
