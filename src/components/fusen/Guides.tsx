"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { GUIDES } from "@/lib/fusen/data";

export function Guides() {
  const { t } = useLanguage();

  return (
    <section id="guides" className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-red mb-4">{t.guides.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">{t.guides.subtitle}</p>
        </div>

        {/* Guides grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUIDES.map((guide, i) => (
            <div
              key={i}
              className="group rounded-xl bg-card border border-border p-6 text-center transition-all duration-300 hover:shadow-brand-hover hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="mx-auto mb-4 relative h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red to-brand-gold opacity-20" />
                <div className="absolute inset-1 rounded-full bg-brand-dark flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-brand-gold">
                    {guide.name.charAt(0)}
                  </span>
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-1 -right-1 rounded-full bg-brand-gold px-2 py-0.5 text-xs font-bold text-brand-dark">
                  {guide.experience}+
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-foreground">{guide.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{guide.city} · {guide.specialty}</p>

              {/* Languages */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {guide.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full bg-brand-red/8 px-2.5 py-0.5 text-xs font-medium text-brand-red"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                {guide.experience} {t.guides.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
