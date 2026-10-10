import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  getPostBySlug,
  isArticlePost,
} from "@/lib/fusen/blog";
import { BlogPostClient } from "@/components/fusen/BlogPostClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.title.en ?? "FUSEN";
  const excerpt = post.excerpt.en ?? "";

  return {
    title,
    description: excerpt,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title,
      description: excerpt,
      url: `https://fusenco.com/blog/${slug}/`,
      type: isArticlePost(post) ? "article" : "video.other",
      images: [post.thumbnail ?? post.video?.poster ?? "/machines/hero-workshop.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // ---- Server-rendered BlogPosting JSON-LD (article only, deterministic) ----
  const schema = isArticlePost(post)
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title.en,
        description: post.excerpt.en,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: "FUSEN" },
        publisher: { "@type": "Organization", name: "FUSEN" },
      }
    : null;

  return (
    <>
      <BlogPostClient post={post} />
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
    </>
  );
}