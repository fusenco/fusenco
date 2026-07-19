"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DESTINATION_IMAGES } from "@/lib/fusen/data";

export function Destinations() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const cities = t.destinations.cities;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % cities.length);
  }, [cities.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + cities.length) % cities.length);
  }, [cities.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{t.destinations.title}</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">{t.destinations.subtitle}</p>
        </div>

        {/* Main carousel */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Slides */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            {cities.map((city, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <img
                  src={DESTINATION_IMAGES[city.name] ?? DESTINATION_IMAGES["Beijing"]}
                  alt={city.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-gold/20 backdrop-blur-sm px-4 py-1.5 border border-brand-gold/30">
                    <svg className="h-4 w-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-sm font-medium text-brand-gold">{t.destinations.explore}</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">{city.name}</h3>
                  <p className="text-base sm:text-lg text-white/80 max-w-xl">{city.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:border-brand-gold/50"
            aria-label="Previous"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:border-brand-gold/50"
            aria-label="Next"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {cities.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-brand-gold" : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-6 grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
          {cities.map((city, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative overflow-hidden rounded-lg aspect-square transition-all ${
                i === current ? "ring-2 ring-brand-gold" : "opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={DESTINATION_IMAGES[city.name] ?? DESTINATION_IMAGES["Beijing"]}
                alt={city.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
