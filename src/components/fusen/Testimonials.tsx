"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-red mb-4">{t.testimonials.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">{t.testimonials.subtitle}</p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-border bg-brand-cream/50 p-8 transition-all duration-300 hover:shadow-brand hover:border-brand-gold/30"
            >
              {/* Quote mark */}
              <div className="absolute top-4 end-6 font-serif text-6xl leading-none text-brand-gold/20">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-6 relative z-10">
                {item.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-semibold text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.author}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
