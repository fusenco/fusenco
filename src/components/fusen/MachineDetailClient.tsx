"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";
import WhatsAppFloat from "@/components/fusen/WhatsAppFloat";
import type { MachineDetail } from "@/lib/fusen/machines";

const CATEGORY_LABEL: Record<string, { nut: string; bolt: string; both: string }> = {
  en: { nut: "Nut Cold Header", bolt: "Bolt Heading Machine", both: "Cold Heading Machine" },
  ru: { nut: "Гайковысадочный автомат", bolt: "Болтовысадочный автомат", both: "Холодновысадочный автомат" },
  ja: { nut: "ナット圧造成形機", bolt: "ボルト圧造成形機", both: "冷間圧造成形機" },
  ko: { nut: "너트 냉간 헤딩기", bolt: "볼트 헤딩기", both: "냉간 헤딩기" },
  es: { nut: "Recalcadora de tuercas", bolt: "Recalcadora de pernos", both: "Recalcadora en frío" },
  pt: { nut: "Recalcadora de porcas", bolt: "Recalcadora de parafusos", both: "Recalcadora a frio" },
  fr: { nut: "Recalqueuse d'écrous", bolt: "Recalqueuse de boulons", both: "Recalqueuse à froid" },
  ar: { nut: "ماكينة تشكيل الصواميل", bolt: "ماكينة تشكيل المسامير", both: "ماكينة تشكيل على البارد" },
  de: { nut: "Mutter-Kaltstauchmaschine", bolt: "Schrauben-Kaltstauchmaschine", both: "Kaltstauchmaschine" },
};

export function MachineDetailClient({ detail }: { detail: MachineDetail }) {
  const { t, lang } = useLanguage();
  const goInquiry = () => window.location.assign("/plan");
  const goBack = () => window.location.assign("/#products");

  const label =
    CATEGORY_LABEL[lang]?.[detail.category] ?? CATEGORY_LABEL.en[detail.category];

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: `Used ${detail.model} ${CATEGORY_LABEL.en[detail.category]}`,
      brand: { "@type": "Brand", name: "FUSEN" },
      description: `In-stock used ${detail.model} with ${detail.totalQty} unit(s) available from ${detail.brands
        .map((b) => b.brand)
        .join(", ")}. Inspected and power-on tested before export.`,
      offers: {
        "@type": "AggregateOffer",
        availability: "https://schema.org/InStock",
        offerCount: detail.totalQty,
        seller: { "@type": "Organization", name: "FUSEN" },
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [detail]);

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        {/* Breadcrumb-ish header */}
        <button onClick={goBack} className="text-sm font-medium text-brand-red hover:underline">
          ← {t.products?.all ?? "All machines"}
        </button>

        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          <div className="relative h-56 w-full overflow-hidden md:h-72">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={detail.image}
              alt={`${detail.model} ${CATEGORY_LABEL.en[detail.category]} used for sale, ${detail.totalQty} units in stock`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {detail.totalQty} {t.products?.unitsLabel ?? "Units"}
              </span>
              <h1 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                {detail.model}{" "}
                <span className="font-sans text-base font-medium text-white/80 md:text-lg">
                  {label}
                </span>
              </h1>
              <p className="mt-1 text-sm text-white/70">
                {t.products?.subtitle}
              </p>
            </div>
          </div>

          {/* Brands & qty */}
          <div className="p-6 md:p-8">
            <h2 className="font-serif text-xl text-foreground">
              {detail.brands.length > 1
                ? (t.products?.modelsLabel ?? "Available")
                : (t.products?.modelsLabel ?? "Available")}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {detail.brands.map((b) => (
                <li
                  key={b.brand}
                  className="flex items-center justify-between rounded-xl border border-border bg-cream/50 px-4 py-3"
                >
                  <div>
                    <div className="font-semibold text-foreground">{b.brand}</div>
                    {b.note && (
                      <div className="mt-0.5 text-xs italic text-muted-foreground">{b.note}</div>
                    )}
                  </div>
                  <span className="rounded-full bg-dark px-3 py-1 text-xs font-semibold text-white">
                    {b.qty} {t.products?.qty ?? "qty"}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 rounded-2xl bg-dark p-6 text-center">
              <h3 className="font-serif text-2xl text-white">
                {t.products?.inquire ?? "Request a Quotation"}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {t.contact?.subtitle}
              </p>
              <button
                onClick={goInquiry}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-light"
              >
                {t.products?.inquire ?? "Inquire Now"}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}