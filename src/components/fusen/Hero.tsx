"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { HERO_IMAGES } from "@/lib/fusen/data";

export function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center pt-20 pb-12">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/10 backdrop-blur-sm px-5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-sm font-medium text-brand-gold tracking-wide">{t.hero.badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
          {t.hero.titleTop}
          <br />
          <span className="text-gradient-gold">{t.hero.titleBottom}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#A52A2A] hover:shadow-xl hover:shadow-brand-red/30"
          >
            {t.hero.cta1}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 hover:border-white/60"
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: "50+", label: t.hero.stat1Label },
            { value: "10+", label: t.hero.stat2Label },
            { value: "2000+", label: t.hero.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? "w-8 bg-brand-gold" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
