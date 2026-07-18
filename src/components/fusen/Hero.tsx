"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-mountain.jpg"
          alt="China mountain landscape"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
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
            { value: "20+", label: t.hero.stat1Label },
            { value: "8", label: t.hero.stat2Label },
            { value: "5000+", label: t.hero.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
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
