"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function VideoShowcase() {
  const { t } = useLanguage();

  return (
    <section
      id="video"
      className="bg-cream py-20 md:py-28"
      aria-labelledby="video-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-brand-red">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          {t.videoShowcase.badge}
        </span>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <h2
              id="video-heading"
              className="font-serif text-3xl leading-tight text-dark md:text-4xl"
            >
              {t.videoShowcase.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.videoShowcase.body}
            </p>
            <ul className="mt-6 space-y-3">
              {t.videoShowcase.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-dark shadow-lg">
              <video
                className="aspect-video w-full object-cover"
                controls
                preload="metadata"
                playsInline
                poster="/machines/cover-nut.jpg"
              >
                <source src="/videos/product-tuning-h264.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
            <p className="mt-4 text-sm italic text-muted-foreground">
              {t.videoShowcase.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}