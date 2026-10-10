import { MetadataRoute } from "next";
import { allModels, toModelSlug } from "@/lib/fusen/machines";

export const dynamic = "force-static";

const SITE_URL = "https://fusenco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/plan/", priority: 0.8, changeFrequency: "monthly" },
  ];

  // Individual machine detail pages for every in-stock model
  const machinePages = allModels().map((m) => ({
    path: `/machines/${toModelSlug(m)}/`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const combined = [...pages, ...machinePages];

  return combined.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
