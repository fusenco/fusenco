import { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://fusenco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/plan/", priority: 0.8, changeFrequency: "monthly" },
  ];

  // On-page anchor sections on the homepage help search engines understand
  // the content blocks. They are listed for reference only.
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
