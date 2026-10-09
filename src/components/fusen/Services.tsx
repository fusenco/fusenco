"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ICONS = [
  // Inspection
  <path
    key="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />,
  // Shipping
  <path
    key="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
  />,
  // Installation
  <path
    key="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.265a2.718 2.718 0 01-4.43-1.114l-.666-2.08a.955.955 0 01.244-1.007l4.853-4.853a3.75 3.75 0 014.212-.842m1.482-5.823l2.707 2.707m-3.75-1.057l1.057-3.75m3.133 5.343l3.75-1.057m-4.807 3.133l2.707-2.707"
  />,
  // Parts
  <path
    key="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.265a2.718 2.718 0 01-4.43-1.114l-.666-2.08a.955.955 0 01.244-1.007l4.853-4.853a3.75 3.75 0 014.212-.842M16.5 7.5l2.25-2.25m-3.75 3.75l-1.5-1.5m5.25-2.25l1.5-1.5M4.5 19.5l1.5-1.5m0 0L3 15m3 3l3-3m-3 3v3m0-3H3"
  />,
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t.services.badge}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-5 text-lg text-muted">{t.services.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map(
            (
              item: { title: string; desc: string },
              i: number
            ) => (
              <div
                key={i}
                className="group rounded-xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
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
                <h3 className="mt-6 font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
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
