"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const FEATURE_SVGS = [
  <svg key="0" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="1" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  <svg key="2" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>,
  <svg key="3" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-brand-cream relative overflow-hidden">
      {/* Decorative pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/pattern-bg.jpg')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-red mb-4">{t.whyUs.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">{t.whyUs.subtitle}</p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.whyUs.features.map((feature, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-xl bg-card border border-border p-7 transition-all duration-300 hover:shadow-brand hover:border-brand-gold/30"
            >
              {/* Icon */}
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                  {FEATURE_SVGS[i]}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
