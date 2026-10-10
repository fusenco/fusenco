import type { Metadata } from "next";
import {
  allModels,
  getMachineDetail,
  resolveModelFromSlug,
  toModelSlug,
  type MachineDetail,
} from "@/lib/fusen/machines";
import { MachineDetailClient } from "@/components/fusen/MachineDetailClient";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const CATEGORY_NAMES: Record<NonNullable<MachineDetail["category"]>, string> = {
  nut: "nut cold heading machine",
  bolt: "bolt heading machine",
  both: "cold heading machine",
};

function buildHref(model: string, trailing = true) {
  const slug = toModelSlug(model);
  return trailing ? `/machines/${slug}/` : `/machines/${slug}`;
}

export async function generateStaticParams() {
  return allModels().map((m) => ({ model: toModelSlug(m) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}): Promise<Metadata> {
  const { model: slug } = await params;
  const model = resolveModelFromSlug(slug);
  if (!model) return {};
  const d = getMachineDetail(model);
  if (!d) return {};

  const cat = CATEGORY_NAMES[d.category];
  const brands = d.brands.map((b) => b.brand).join(", ");
  const title = `Used ${model} ${cat} in Stock — ${d.totalQty} Units`;
  const description = `In-stock used ${model} ${cat} at FUSEN: ${d.totalQty} unit(s) from ${brands}. Inspected, power-on tested and exported worldwide with installation and spare parts support. Get a quotation today.`;
  const url = buildHref(model);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url: `https://fusenco.com${url}`,
      siteName: "FUSEN",
      type: "website",
      images: [{ url: d.image, width: 1200, height: 630, alt: `Used ${model} cold heading machine in stock` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [d.image] },
    robots: { index: true, follow: true },
  };
}

export default async function MachineDetailPage({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model: slug } = await params;
  const model = resolveModelFromSlug(slug);
  if (!model) notFound();
  const d = getMachineDetail(model);
  if (!d) notFound();
  return <MachineDetailClient detail={d} />;
}