"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DESTINATION_IMAGES } from "@/lib/fusen/data";

export function Destinations() {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{t.destinations.title}</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">{t.destinations.subtitle}</p>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.destinations.cities.map((city, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <img
                src={DESTINATION_IMAGES[city.name] ?? DESTINATION_IMAGES["Beijing"]}
                alt={city.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-xl font-bold text-white mb-1">{city.name}</h3>
                <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{city.desc}</p>
                <div className="mt-3 flex items-center gap-1.5 text-brand-gold opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-wider">{t.destinations.explore}</span>
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-brand-gold/0 transition-colors group-hover:border-brand-gold/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
