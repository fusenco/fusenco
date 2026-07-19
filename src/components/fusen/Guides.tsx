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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES.map((guide, i) => (
            <div
              key={i}
              className="group flex items-center gap-5 rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-brand-hover hover:border-brand-gold/50 hover:-translate-y-1"
            >
              {/* Avatar with photo */}
              <div className="relative shrink-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden ring-2 ring-brand-gold/20 transition-all group-hover:ring-brand-gold/50">
                  <img
                    src={guide.avatar}
                    alt={guide.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-1 -right-1 rounded-full bg-brand-gold px-2 py-0.5 text-xs font-bold text-brand-dark shadow-md">
                  {guide.experience}y
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-bold text-foreground truncate">{guide.name}</h3>

                {/* Language badge - prominent */}
                <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-brand-red/8 px-3 py-0.5">
                  <span className="text-xs font-bold text-brand-red">{guide.languageCode}</span>
                  <span className="text-xs font-medium text-brand-red">{guide.language}</span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground truncate">
                  {guide.city} · {guide.specialty}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {guide.experience} {t.guides.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
