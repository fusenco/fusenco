"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Categories() {
  const { t } = useLanguage();

  return (
    <section id="categories" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t.categories.badge}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            {t.categories.title}
          </h2>
          <p className="mt-5 text-lg text-muted">{t.categories.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.categories.items.map((label: string, i: number) => (
            <button
              key={i}
              onClick={() => window.location.assign("/plan")}
              className="group flex items-center justify-between rounded-xl border border-border bg-white px-6 py-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
            >
              <span className="font-serif text-lg text-foreground transition group-hover:text-brand-red">
                {label}
              </span>
              <svg
                className="h-5 w-5 text-border transition group-hover:translate-x-0.5 group-hover:text-brand-red"
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
          ))}
        </div>
      </div>
    </section>
  );
}
