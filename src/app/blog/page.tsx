"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";
import WhatsAppFloat from "@/components/fusen/WhatsAppFloat";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  BLOG_CONTENT,
  BLOG_POSTS,
  pickLang,
  type BlogPost,
  type PostType,
} from "@/lib/fusen/blog";

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function PostCard({ post, lang }: { post: BlogPost; lang: string }) {
  const isVideo = post.type === "video";
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        post.featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {isVideo ? (
        <div className="relative overflow-hidden bg-dark">
          <video
            className="aspect-video w-full object-cover"
            controls
            preload="metadata"
            playsInline
            poster={post.video?.poster}
          >
            <source src={post.video?.src} type="video/mp4" />
          </video>
          <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
            Video
          </span>
        </div>
      ) : (
        <div className="relative aspect-[16/9] overflow-hidden bg-cream">
          {post.thumbnail ? (
            <img
              src={post.thumbnail}
              alt={pickLang(post.title, lang as never)}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-red/10 to-gold/20">
              <span className="font-serif text-2xl text-brand-red">
                FUSEN
              </span>
            </div>
          )}
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-dark">
            Article
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground">
          <span>{formatDate(post.date)}</span>
          <span className="text-gold">•</span>
          <span>{isVideo ? "Video" : "Article"}</span>
        </div>
        <h3 className="font-serif text-2xl font-semibold leading-snug text-dark transition-colors duration-300 group-hover:text-brand-red">
          {pickLang(post.title, lang as never)}
        </h3>
        <p className="text-muted-foreground">
          {pickLang(post.excerpt, lang as never)}
        </p>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<PostType | "all">("all");

  const localized = useMemo(
    () => ({
      badge: pickLang(BLOG_CONTENT.badge, lang),
      title: pickLang(BLOG_CONTENT.title, lang),
      subtitle: pickLang(BLOG_CONTENT.subtitle, lang),
      readMore: pickLang(BLOG_CONTENT.readMore, lang),
      all: pickLang(BLOG_CONTENT.categories.all, lang),
      article: pickLang(BLOG_CONTENT.categories.article, lang),
      video: pickLang(BLOG_CONTENT.categories.video, lang),
    }),
    [lang]
  );

  const posts = useMemo(() => {
    const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
    return filter === "all" ? sorted : sorted.filter((p) => p.type === filter);
  }, [filter]);

  const filters: { key: "all" | PostType; label: string }[] = [
    { key: "all", label: localized.all },
    { key: "article", label: localized.article },
    { key: "video", label: localized.video },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Header */}
        <section className="bg-dark pt-28 pb-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-brand-red/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-gold">
              {localized.badge}
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold text-white sm:text-5xl">
              {localized.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
              {localized.subtitle}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  filter === f.key
                    ? "border-brand-red bg-brand-red text-white"
                    : "border-border bg-white text-muted-foreground hover:border-gold"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* Post grid */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} lang={lang} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}