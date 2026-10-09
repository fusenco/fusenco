"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { MACHINE_BRANDS } from "@/lib/fusen/data";

export function Brands() {
  const { t } = useLanguage();

  return (
    <section id="brands" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t.brands.badge}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            {t.brands.title}
          </h2>
          <p className="mt-5 text-lg text-muted">{t.brands.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {MACHINE_BRANDS.map((b, i: number) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-cream/60 px-6 py-8 text-center transition-all duration-300 hover:border-gold hover:bg-white hover:shadow-md"
            >
              <span className="font-serif text-xl font-semibold text-foreground">
                {b.name}
              </span>
              <span className="mt-2 text-xs uppercase tracking-widest text-gold">
                {t.brands.originLabel}: {b.origin}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
