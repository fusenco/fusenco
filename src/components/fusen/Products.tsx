"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  NUT_STOCK,
  BOLT_STOCK,
  NUT_TOTAL,
  BOLT_TOTAL,
  TOTAL_MODELS,
  CATEGORY_IMAGE,
  NEW_BOLT_MACHINES,
  NEW_MACHINE_SERIES,
  type InventoryItem,
  type NewMachineSpec,
} from "@/lib/fusen/inventory";

interface GroupedRow {
  model: string;
  entries: InventoryItem[];
  totalQty: number;
}

function groupByModel(items: InventoryItem[]): GroupedRow[] {
  const map = new Map<string, GroupedRow>();
  for (const it of items) {
    const key = it.model;
    if (!map.has(key)) {
      map.set(key, { model: key, entries: [], totalQty: 0 });
    }
    const row = map.get(key)!;
    row.entries.push(it);
    row.totalQty += it.qty;
  }
  return Array.from(map.values()).sort(
    (a, b) =>
      b.totalQty - a.totalQty ||
      a.model.localeCompare(b.model, undefined, { numeric: true })
  );
}

function CategoryPanel({
  title,
  image,
  subtitle,
  items,
  qtyLabel,
  onInquire,
}: {
  title: string;
  image: string;
  subtitle: string;
  items: InventoryItem[];
  qtyLabel: string;
  onInquire: () => void;
}) {
  const rows = groupByModel(items);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const { t } = useLanguage();
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="relative h-64 w-full overflow-hidden md:h-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-5 left-6 right-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
            {totalQty} {qtyLabel}
          </span>
          <h3 className="mt-2 font-serif text-2xl text-white md:text-3xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        </div>
      </div>

      <ul className="divide-y divide-border">
        {rows.slice(0, 16).map((row) => (
          <li
            key={row.model}
            className="flex flex-col gap-2 px-6 py-4 transition hover:bg-cream/60 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="w-20 shrink-0 font-serif text-lg font-semibold text-foreground">
                {row.model}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {row.entries.slice(0, 6).map((e) => (
                  <span
                    key={e.id}
                    className="rounded-full border border-border bg-white px-2.5 py-0.5 text-xs text-muted"
                  >
                    {e.brand}
                    <b className="ml-1 font-semibold text-brand-red">
                      ×{e.qty}
                    </b>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              {row.entries.some((e) => e.note) && (
                <span className="max-w-[220px] truncate text-xs italic text-muted">
                  {row.entries
                    .filter((e) => e.note)
                    .map((e) => e.note)
                    .join(" · ")}
                </span>
              )}
              <span className="shrink-0 rounded-full bg-dark px-3 py-1 text-xs font-semibold text-white">
                {row.totalQty} {qtyLabel}
              </span>
            </div>
          </li>
        ))}
        {rows.length > 16 && (
          <li className="px-6 py-3 text-center text-sm text-muted">
            + {rows.length - 16} more models ·{" "}
            <button
              onClick={onInquire}
              className="font-semibold text-brand-red hover:underline"
            >
              {t.products.inquire}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

function NewMachineTable({ series }: { series: string }) {
  const { t } = useLanguage();
  const nm = t.products.newMachines;
  const items: NewMachineSpec[] = NEW_MACHINE_SERIES[series as "PT" | "GS" | "HM"] ?? [];
  const isHM = series === "HM";
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h3 className="font-serif text-xl text-foreground">
          {series === "PT"
            ? nm.seriesPT
            : series === "GS"
              ? nm.seriesGS
              : nm.seriesHM}
        </h3>
        <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
          {nm.label}
        </span>
      </div>
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-cream/50 text-xs uppercase tracking-wide text-muted">
            <th className="px-5 py-3 font-semibold">{nm.model}</th>
            <th className="px-3 py-3 font-semibold">{nm.maxDia}</th>
            <th className="px-3 py-3 font-semibold">{nm.maxLength}</th>
            <th className="px-3 py-3 font-semibold">{nm.output}</th>
            <th className="px-3 py-3 font-semibold">{nm.motor}</th>
            <th className="px-3 py-3 font-semibold">{nm.weight}</th>
            {!isHM && (
              <th className="px-3 py-3 font-semibold">{nm.tableSize}</th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {items.map((m) => (
            <tr key={m.id} className="transition hover:bg-cream/50">
              <td className="px-5 py-3 font-serif text-base font-semibold text-brand-red">
                {m.model}
              </td>
              <td className="px-3 py-3">{m.maxDia}</td>
              <td className="px-3 py-3">{m.maxLength}</td>
              <td className="px-3 py-3">{m.output}</td>
              <td className="px-3 py-3">{m.motor}</td>
              <td className="px-3 py-3">{m.weight}</td>
              {!isHM && <td className="px-3 py-3">{m.tableSize}</td>}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border-t border-border bg-cream/30 px-6 py-4">
        <button className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-light">
          {nm.inquire}
        </button>
      </div>
    </div>
  );
}

function NewMachinesPanel() {
  const { t } = useLanguage();
  const nm = t.products.newMachines;
  return (
    <div className="mt-14">
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/machines/hero-workshop.jpg"
          alt={nm.title}
          className="h-64 w-full object-cover md:h-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {nm.label}
          </span>
          <h3 className="mt-3 max-w-xl font-serif text-3xl text-white md:text-4xl">
            {nm.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">
            {nm.subtitle}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="lg:col-span-2 grid gap-6 xl:grid-cols-2">
          <div className="xl:col-span-1">
            <NewMachineTable series="PT" />
          </div>
          <div className="xl:col-span-1">
            <NewMachineTable series="GS" />
          </div>
          <div className="xl:col-span-2">
            <NewMachineTable series="HM" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const { t } = useLanguage();
  const goInquiry = () => window.location.assign("/plan");

  return (
    <section id="products" className="bg-cream py-24 md:py-32">
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
            onClick={goInquiry}
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

        {/* Stats: brand-new + used */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
            <div className="font-serif text-4xl text-brand-red">
              {NEW_BOLT_MACHINES.length}
            </div>
            <div className="mt-1 text-sm text-muted">
              {t.products.sections.new}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-dark p-5 text-center text-white shadow-sm">
            <div className="font-serif text-4xl text-gold">{NUT_TOTAL}</div>
            <div className="mt-1 text-sm text-white/70">
              {t.products.sections.usedNut}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
            <div className="font-serif text-4xl text-brand-red">
              {BOLT_TOTAL}
            </div>
            <div className="mt-1 text-sm text-muted">
              {t.products.sections.usedBolt}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-dark p-5 text-center text-white shadow-sm">
            <div className="font-serif text-4xl text-gold">
              {TOTAL_MODELS}
            </div>
            <div className="mt-1 text-sm text-white/70">
              {t.products.modelsLabel}
            </div>
          </div>
        </div>

        {/* Section 1 — Brand-new machines */}
        <div className="mt-16">
          <h3 className="flex items-center gap-3 font-serif text-3xl text-foreground">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red font-serif text-xl text-white">
              1
            </span>
            {t.products.sections.new}
          </h3>
          <NewMachinesPanel />
        </div>

        {/* Section 2 — Used nut machines */}
        <div className="mt-16">
          <h3 className="flex items-center gap-3 font-serif text-3xl text-foreground">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red font-serif text-xl text-white">
              2
            </span>
            {t.products.sections.usedNut}
          </h3>
          <div className="mt-6">
            <CategoryPanel
              title={t.products.nutCat}
              subtitle={t.products.badge}
              image={CATEGORY_IMAGE.nut}
              items={NUT_STOCK}
              qtyLabel={t.products.qty}
              onInquire={goInquiry}
            />
          </div>
        </div>

        {/* Section 3 — Used bolt machines */}
        <div className="mt-16">
          <h3 className="flex items-center gap-3 font-serif text-3xl text-foreground">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red font-serif text-xl text-white">
              3
            </span>
            {t.products.sections.usedBolt}
          </h3>
          <div className="mt-6">
            <CategoryPanel
              title={t.products.boltCat}
              subtitle={t.products.badge}
              image={CATEGORY_IMAGE.bolt}
              items={BOLT_STOCK}
              qtyLabel={t.products.qty}
              onInquire={goInquiry}
            />
          </div>
        </div>
      </div>
    </section>
  );
}