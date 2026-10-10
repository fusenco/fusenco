// ============================================================
// FUSEN - Machine detail lookup helpers
// Used by /machines/[model] detail pages (server metadata + client render)
// ============================================================

import { ALL_STOCK, CATEGORY_IMAGE, type InventoryItem } from "./inventory";

export interface BrandCount {
  brand: string;
  qty: number;
  note?: string;
}

export interface MachineDetail {
  model: string;
  category: "nut" | "bolt" | "both";
  totalQty: number;
  brands: BrandCount[];
  entries: InventoryItem[];
  image: string;
  hasNote: boolean;
}

// URL-safe slug: keep alphanumerics, replace "/" with "-" (e.g. "24/4" -> "24-4"),
// lowercase for consistency.
export function toModelSlug(model: string): string {
  return model.replace("/", "-").trim().toLowerCase();
}

export function fromModelSlug(slug: string): string {
  // Best-effort reverse: uppercase is cosmetic; rebuild original by keeping slug
  // but mapping known "/" models back. Store original separately below via lookup.
  return slug;
}

// Resolve a slug to its true model using the known inventory (avoids case/format drift).
export function resolveModelFromSlug(slug: string): string | null {
  const wanted = slug.toLowerCase().replace("-", "/") ?? "";
  for (const it of ALL_STOCK) {
    if (toModelSlug(it.model) === slug.toLowerCase()) return it.model;
  }
  for (const it of ALL_STOCK) {
    if (it.model.toLowerCase() === wanted) return it.model;
  }
  return null;
}

export function getMachineDetail(model: string): MachineDetail | null {
  const entries = ALL_STOCK.filter((i) => i.model === model);
  if (entries.length === 0) return null;

  const cats = new Set(entries.map((e) => e.category));
  const category: "nut" | "bolt" | "both" =
    cats.size > 1 ? "both" : entries[0].category;

  const brandMap = new Map<string, { qty: number; note?: string }>();
  for (const e of entries) {
    const b = brandMap.get(e.brand) ?? { qty: 0 };
    b.qty += e.qty;
    if (e.note) b.note = b.note ? `${b.note} · ${e.note}` : e.note;
    brandMap.set(e.brand, b);
  }

  const brands: BrandCount[] = Array.from(brandMap.entries())
    .map(([brand, v]) => ({ brand, qty: v.qty, note: v.note }))
    .sort((a, b) => b.qty - a.qty);

  return {
    model,
    category,
    totalQty: entries.reduce((s, e) => s + e.qty, 0),
    brands,
    entries,
    image:
      cats.size > 1
        ? CATEGORY_IMAGE.bolt
        : CATEGORY_IMAGE[entries[0].category],
    hasNote: brands.some((b) => b.note),
  };
}

// Unique models across all stock, for generateStaticParams + sitemap
export function allModels(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const it of ALL_STOCK) {
    if (!seen.has(it.model)) {
      seen.add(it.model);
      out.push(it.model);
    }
  }
  return out.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );
}