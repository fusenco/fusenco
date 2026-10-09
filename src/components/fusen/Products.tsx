"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { MACHINE_PRODUCTS } from "@/lib/fusen/data";
import { useRouter } from "next/navigation";

export function Products() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              {t.products.badge}
            </span>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
              {t.products.title}
            </h2>
            <p className="mt-5 text-lg text-muted">{t.products.subtitle}</p>
          </div>
          <button
            onClick={() => router.push("/plan")}
            className="hidden shrink-0 items-center gap-2 rounded-full border border-brand-red px-6 py-3 text-sm font-semibold text-brand-red transition hover:bg-brand-red hover:text-white md:inline-flex"
          >
            {t.products.all}
            <svg
              className="h-4 w-4"
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
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MACHINE_PRODUCTS.map((m) => (
            <article
              key={m.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={`${m.model} ${m.station}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {m.year}
                </span>
                {m.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-brand-red px-3 py-1 text-xs font-medium text-white">
                    Hot
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-lg leading-snug text-foreground">
                    {m.model}
                  </h3>
                  <span className="shrink-0 text-xs text-gold">
                    {m.brand}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {m.station}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {m.spec}
                </p>
                <button
                  onClick={() => router.push("/plan")}
                  className="mt-5 w-full rounded-full border border-border py-2.5 text-sm font-semibold text-foreground transition group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white"
                >
                  {t.products.inquire}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
