"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const [jsonLd, setJsonLd] = useState<string>("");

  // Build FAQPage structured data from the current language so search
  // engines can show rich results for the displayed content.
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.desc,
        },
      })),
    };
    setJsonLd(JSON.stringify(data));
  }, [t.faq.items]);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t.faq.badge}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            {t.faq.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.faq.subtitle}</p>
        </div>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-cream/40">
          {t.faq.items.map((item, i: number) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-cream"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-red text-brand-red transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
