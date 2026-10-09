"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useRouter } from "next/navigation";

export function Hero() {
  const { t } = useLanguage();
  const router = useRouter();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/machines/hero-workshop.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-gold-light backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {t.hero.badge}
        </span>

        <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {t.hero.accent}
          <br />
          <span className="text-gold">{t.hero.title}</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => router.push("/plan")}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-red-light hover:shadow-lg hover:shadow-brand-red/30"
          >
            {t.hero.cta1}
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("products")}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/15"
          >
            {t.hero.cta2}
          </button>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
          {t.hero.stats.map((s: { value: string; label: string }, i: number) => (
            <div key={i}>
              <div className="font-serif text-4xl text-gold md:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition hover:text-white"
        aria-label="Scroll down"
      >
        <svg
          className="h-8 w-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </section>
  );
}
