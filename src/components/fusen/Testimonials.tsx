"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t.testimonials.badge}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map(
            (
              item: { quote: string; name: string; role: string },
              i: number
            ) => (
              <figure
                key={i}
                className="flex flex-col rounded-xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                <svg
                  className="h-8 w-8 text-gold/60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-serif text-lg text-brand-red">
                    {item.name}
                  </div>
                  <div className="text-sm text-muted">{item.role}</div>
                </figcaption>
              </figure>
            )
          )}
        </div>
      </div>
    </section>
  );
}
