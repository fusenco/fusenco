"use client";

import { useState, useMemo, type FormEvent } from "react";
import Link from "next/link";
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";
import WhatsAppFloat from "@/components/fusen/WhatsAppFloat";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  planTranslations,
  en as planEn,
  type PlanTranslation,
  type DeepPartial,
} from "@/lib/i18n/plan-translations";
import { CONTACT_INFO } from "@/lib/fusen/data";

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function mergeObject(
  base: Record<string, unknown>,
  patch: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(patch)) {
    const b = base[key];
    const p = patch[key];
    if (Array.isArray(p)) {
      result[key] = p;
    } else if (isPlainObject(p) && isPlainObject(b)) {
      result[key] = mergeObject(b, p);
    } else if (p !== undefined) {
      result[key] = p;
    }
  }
  return result;
}

function usePlanT(): PlanTranslation {
  const { lang } = useLanguage();
  return useMemo(() => {
    const patch = planTranslations[lang] as
      | DeepPartial<PlanTranslation>
      | undefined;
    if (!patch) return planEn;
    return mergeObject(
      planEn as unknown as Record<string, unknown>,
      patch as unknown as Record<string, unknown>
    ) as unknown as PlanTranslation;
  }, [lang]);
}

function SectionTitle({
  num,
  title,
}: {
  num: number;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red font-serif text-lg font-bold text-white">
        {num}
      </div>
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red";
const labelCls = "mb-2 block text-sm font-medium text-foreground";

export default function PlanPage() {
  const t = usePlanT();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const [selected, setSelected] = useState<Record<string, Set<string>>>({});

  const toggle = (group: string, value: string) => {
    setSelected((prev) => {
      const next = new Set(prev[group] ?? []);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return { ...prev, [group]: next };
    });
  };

  const isActive = (group: string, value: string) =>
    selected[group]?.has(value) ?? false;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const agree = new FormData(form).get("agree");

    if (!agree) {
      setAgreeError(true);
      return;
    }
    setAgreeError(false);
    setSubmitting(true);

    // Attach multi-select groups as readable fields.
    const data = new FormData(form);
    for (const [group, set] of Object.entries(selected)) {
      if (set.size) data.append(group, Array.from(set).join(", "));
    }

    try {
      const res = await fetch("https://formspree.io/f/xwvgoavg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        window.open(CONTACT_INFO.whatsappLink, "_blank", "noopener");
      }
    } catch {
      window.open(CONTACT_INFO.whatsappLink, "_blank", "noopener");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-cream px-6 pt-20">
          <div className="w-full max-w-xl rounded-2xl border border-border bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h1 className="mt-6 font-serif text-3xl text-foreground">
              {t.successTitle}
            </h1>
            <p className="mt-4 leading-relaxed text-muted">{t.successText}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
              >
                {t.whatsappCta}
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-brand-red hover:text-brand-red"
              >
                {t.backHome}
              </Link>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-muted underline-offset-4 hover:text-brand-red hover:underline"
            >
              {t.newInquiry}
            </button>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream pb-24 pt-32">
        <div className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-medium text-green-700">
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.badge}
            </span>
            <h1 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">
              {t.pageTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              {t.pageSubtitle}
            </p>
            <p className="mt-3 text-sm text-muted/70">{t.requiredNote}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-14 space-y-8">
            {/* 1. Your Information */}
            <section className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <SectionTitle num={1} title={t.sections.info} />
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="f-name">
                    {t.fields.name} *
                  </label>
                  <input
                    id="f-name"
                    name="name"
                    required
                    placeholder={t.placeholders.name}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-company">
                    {t.fields.company}
                  </label>
                  <input
                    id="f-company"
                    name="company"
                    placeholder={t.placeholders.company}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-country">
                    {t.fields.country} *
                  </label>
                  <input
                    id="f-country"
                    name="country"
                    required
                    placeholder={t.placeholders.country}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-email">
                    {t.fields.email} *
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.placeholders.email}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-whatsapp">
                    {t.fields.whatsapp}
                  </label>
                  <input
                    id="f-whatsapp"
                    name="whatsapp"
                    placeholder={t.placeholders.whatsapp}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-wechat">
                    {t.fields.wechat}
                  </label>
                  <input
                    id="f-wechat"
                    name="wechat"
                    placeholder={t.placeholders.wechat}
                    className={inputCls}
                  />
                </div>
              </div>
            </section>

            {/* 2. Machine Requirements */}
            <section className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <SectionTitle num={2} title={t.sections.machine} />

              <label className={labelCls}>{t.fields.machineType} *</label>
              <div className="mb-6 flex flex-wrap gap-2">
                {t.machineTypes.map((opt: string, i: number) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle("machine_types", opt)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive("machine_types", opt)
                        ? "border-brand-red bg-brand-red text-white"
                        : "border-border bg-white text-foreground hover:border-gold"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <label className={labelCls}>{t.fields.model}</label>
              <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {t.models.map((opt: string, i: number) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle("models", opt)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                      isActive("models", opt)
                        ? "border-brand-red bg-brand-red text-white"
                        : "border-border bg-white text-foreground hover:border-gold"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <input
                name="model_other"
                placeholder={t.placeholders.modelOther}
                className={`${inputCls} mb-6`}
              />

              <label className={labelCls}>{t.fields.station}</label>
              <div className="mb-6 flex flex-wrap gap-2">
                {t.stations.map((opt: string, i: number) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle("stations", opt)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive("stations", opt)
                        ? "border-brand-red bg-brand-red text-white"
                        : "border-border bg-white text-foreground hover:border-gold"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label className={labelCls} htmlFor="f-diameter">
                    {t.fields.diameter}
                  </label>
                  <input
                    id="f-diameter"
                    name="wire_diameter"
                    inputMode="decimal"
                    placeholder={t.placeholders.diameter}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-length">
                    {t.fields.length}
                  </label>
                  <input
                    id="f-length"
                    name="cutoff_length"
                    inputMode="decimal"
                    placeholder={t.placeholders.length}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-product">
                    {t.fields.product}
                  </label>
                  <input
                    id="f-product"
                    name="product"
                    placeholder={t.placeholders.product}
                    className={inputCls}
                  />
                </div>
              </div>
            </section>

            {/* 3. Purchase Preferences */}
            <section className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <SectionTitle num={3} title={t.sections.requirements} />

              <label className={labelCls}>{t.fields.brand}</label>
              <div className="mb-6 flex flex-wrap gap-2">
                {t.brandPrefs.map((opt: string, i: number) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle("brands", opt)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive("brands", opt)
                        ? "border-brand-red bg-brand-red text-white"
                        : "border-border bg-white text-foreground hover:border-gold"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="f-year">
                    {t.fields.year}
                  </label>
                  <select id="f-year" name="year" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option>2020+</option>
                    <option>2015 – 2020</option>
                    <option>2010 – 2015</option>
                    <option>No preference</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{t.fields.condition}</label>
                  <div className="flex flex-wrap gap-2">
                    {t.conditions.map((opt: string, i: number) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => toggle("condition", opt)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                          isActive("condition", opt)
                            ? "border-brand-red bg-brand-red text-white"
                            : "border-border bg-white text-foreground hover:border-gold"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-qty">
                    {t.fields.quantity}
                  </label>
                  <input
                    id="f-qty"
                    name="quantity"
                    type="number"
                    min="1"
                    placeholder={t.placeholders.quantity}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="f-budget">
                    {t.fields.budget}
                  </label>
                  <select id="f-budget" name="budget" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    {t.budgets.map((opt: string, i: number) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* 4. Additional Services */}
            <section className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <SectionTitle num={4} title={t.sections.services} />
              <div className="space-y-3">
                {t.services.map((opt: string, i: number) => (
                  <label
                    key={i}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-3 transition hover:border-gold hover:bg-cream/50"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={opt}
                      className="h-4 w-4 accent-brand-red"
                    />
                    <span className="text-sm text-foreground">{opt}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <label className={labelCls} htmlFor="f-power">
                  {t.fields.power}
                </label>
                <input
                  id="f-power"
                  name="power"
                  placeholder="e.g. 380V / 50Hz / 3-phase"
                  className={inputCls}
                />
              </div>
            </section>

            {/* 5. Other Information */}
            <section className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <SectionTitle num={5} title={t.sections.extra} />

              <label className={labelCls} htmlFor="f-target">
                {t.fields.targetDate}
              </label>
              <div className="mb-6 flex flex-wrap gap-2">
                {t.targetDates.map((opt: string, i: number) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle("target_date", opt)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive("target_date", opt)
                        ? "border-brand-red bg-brand-red text-white"
                        : "border-border bg-white text-foreground hover:border-gold"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <label className={labelCls} htmlFor="f-special">
                {t.fields.special}
              </label>
              <textarea
                id="f-special"
                name="special_requirements"
                rows={4}
                placeholder={t.placeholders.special}
                className={`${inputCls} mb-6 resize-none`}
              />

              <label className={labelCls}>{t.fields.source}</label>
              <div className="flex flex-wrap gap-2">
                {t.sources.map((opt: string, i: number) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle("source", opt)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive("source", opt)
                        ? "border-brand-red bg-brand-red text-white"
                        : "border-border bg-white text-foreground hover:border-gold"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </section>

            {/* Submit */}
            <section className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
              <label className="flex cursor-pointer items-start justify-center gap-3 text-start">
                <input
                  type="checkbox"
                  name="agree"
                  className="mt-1 h-4 w-4 shrink-0 accent-brand-red"
                  onChange={() => setAgreeError(false)}
                />
                <span className="text-sm leading-relaxed text-muted">
                  {t.fields.agree}
                </span>
              </label>
              {agreeError && (
                <p className="mt-3 text-sm text-red-600">{t.agreeRequired}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-red-light disabled:opacity-60"
              >
                {submitting ? (
                  t.submitting
                ) : (
                  <>
                    {t.submit}
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </>
                )}
              </button>
            </section>
          </form>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
