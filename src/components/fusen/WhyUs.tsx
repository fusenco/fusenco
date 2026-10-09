"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ICONS = [
  <path
    key="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
  />,
  <path
    key="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
  />,
  <path
    key="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
  />,
  <path
    key="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />,
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="whyus" className="relative bg-dark py-24 text-white md:py-32">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/machines/fasteners-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {t.whyUs.badge}
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            {t.whyUs.title}
          </h2>
          <p className="mt-5 text-lg text-white/70">{t.whyUs.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyUs.items.map(
            (item: { title: string; desc: string }, i: number) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    {ICONS[i]}
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.desc}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
