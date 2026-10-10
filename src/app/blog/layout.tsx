import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "News, Articles & Videos | Used Cold Heading Machine Insights by FUSEN",
  description:
    "Expert knowledge for buying used nut and bolt cold heading machines: inspection guides, shop-floor videos and total cost of ownership insight from a trusted China exporter.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "News, Articles & Videos | FUSEN",
    description:
      "Inspection guides, machine walkthrough videos and buying tips for used cold heading machinery — from the FUSEN workshop.",
    url: "https://fusenco.com/blog/",
    images: ["/machines/hero-workshop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}