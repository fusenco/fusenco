"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";
import WhatsAppFloat from "@/components/fusen/WhatsAppFloat";
import {
  pickLang,
  pickLangArray,
  isArticlePost,
  getPostBySlug,
  type BlogPost,
} from "@/lib/fusen/blog";

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostClient({ post }: { post: BlogPost }) {
  const { lang } = useLanguage();
  const title = pickLang(post.title, lang);
  const excerpt = pickLang(post.excerpt, lang);
  const isVideo = post.type === "video";

  const goList = () => window.location.assign("/blog");
  const goInquiry = () => window.location.assign("/plan");

  useEffect(() => {
    if (!isVideo) return;
    // Video post -> VideoObject JSON-LD, rendered client-side per current language
    const slug = post.slug;
    const fresh = getPostBySlug(slug);
    if (!fresh?.video) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-video-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: fresh.title.en,
      description: fresh.excerpt.en,
      thumbnailUrl: `https://fusenco.com${fresh.video.poster}`,
      uploadDate: fresh.date,
      contentUrl: `https://fusenco.com${fresh.video.src}`,
      embedUrl: `https://fusenco.com${fresh.video.src}`,
      duration: "PT41S",
      publisher: { "@type": "Organization", name: "FUSEN" },
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById("blog-video-jsonld")?.remove();
    };
  }, [post.slug, isVideo]);

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Header */}
        <section className="bg-dark pt-28 pb-14 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <button
              onClick={goList}
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              FUSEN News & Blog
            </button>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-3xl font-bold leading-snug text-white sm:text-4xl">
              {title}
            </h1>
            <div className="mt-5 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span className="text-gold">•</span>
              <span className="uppercase tracking-wide">
                {isVideo ? "Video" : "Article"}
              </span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          {isVideo && post.video ? (
            <>
              <div className="overflow-hidden rounded-2xl border border-border bg-dark shadow-lg">
                <video
                  className="aspect-video w-full object-cover"
                  controls
                  autoPlay={false}
                  preload="metadata"
                  playsInline
                  poster={post.video.poster}
                >
                  <source src={post.video.src} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>
              <p className="mt-4 text-sm italic text-muted-foreground">
                {pickLang(post.video.caption, lang)}
              </p>
            </>
          ) : isArticlePost(post) ? (
            <article className="space-y-5 text-lg leading-relaxed text-dark">
              <p className="text-xl text-muted-foreground">{excerpt}</p>
              {pickLangArray(post.body, lang).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </article>
          ) : (
            <p>{excerpt}</p>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-dark">
              Looking for this kind of machine?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Tell us the model and spec — we reply within 24 hours with real
              stock and a power-on test run.
            </p>
            <button
              onClick={goInquiry}
              className="mt-6 rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-red/90"
            >
              Inquire Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}