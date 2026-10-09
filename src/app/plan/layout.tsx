import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Machine Sourcing Inquiry | Request Used Nut & Bolt Cold Heading Machines",
  description:
    "Tell FUSEN the machine type, model (11B–24B / 62S–254SL), stations, brand preference and services you need. Get a fast quotation with real stock, power-on test video and worldwide export support.",
  alternates: {
    canonical: "/plan/",
  },
  openGraph: {
    title: "Machine Sourcing Inquiry | FUSEN",
    description:
      "Submit your requirements for used nut or bolt cold heading machines and get a fast quotation with real stock and export support.",
    url: "https://fusenco.com/plan/",
    images: ["/machines/hero-workshop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
