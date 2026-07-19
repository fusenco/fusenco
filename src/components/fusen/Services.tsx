"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SERVICE_BACKGROUNDS } from "@/lib/fusen/data";

const SERVICE_SVGS = [
  // Translation
  <svg key="0" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
  </svg>,
  // Explore
  <svg key="1" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>,
  // Business
  <svg key="2" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>,
  // Flight
  <svg key="3" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>,
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-red mb-4">{t.services.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">{t.services.subtitle}</p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-brand-hover hover:border-brand-gold/50 hover:-translate-y-1"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={SERVICE_BACKGROUNDS[i]}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 transition-opacity group-hover:from-black/90" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 min-h-[280px] flex flex-col">
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm text-white transition-colors group-hover:bg-brand-red group-hover:text-white">
                  {SERVICE_SVGS[i]}
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{service.desc}</p>

                {/* Number badge */}
                <span className="absolute top-6 end-6 font-serif text-3xl font-bold text-white/20 group-hover:text-brand-gold/60 transition-colors">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
