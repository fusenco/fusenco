import type { Metadata } from "next";
import { Inspector } from "react-dev-inspector";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import WhatsAppFloat from "@/components/fusen/WhatsAppFloat";
import { JsonLd } from "@/components/fusen/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fusenco.com"),
  title: {
    default:
      "FUSEN | Used Nut Cold Heading Machines & Bolt Heading Machines for Sale",
    template: "%s | FUSEN Used Machinery",
  },
  description:
    "FUSEN supplies tested, ready-to-run used nut cold headers (11B–24B), bolt heading machines and screw cold formers from Sijin, Chunzu, Yeswin, Jernyao and more. Worldwide export, power-on inspection, installation and spare-parts support.",
  keywords: [
    "used cold heading machine",
    "nut cold header for sale",
    "bolt heading machine",
    "screw cold former",
    "used Sijin machine",
    "Chunzu bolt former",
    "Yeswin nut former",
    "used nut machine 14B6S",
    "second hand cold former",
    "fastener machinery exporter",
    "multi-station nut former",
    "FUSEN",
  ],
  authors: [{ name: "FUSEN" }],
  creator: "FUSEN",
  publisher: "FUSEN",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "FUSEN | Used Nut Cold Heading Machines & Bolt Heading Machines for Sale",
    description:
      "Tested, ready-to-run used cold heading machines for nuts, bolts and screws. Worldwide export with power-on inspection, installation and spare-parts support.",
    url: "https://fusenco.com",
    siteName: "FUSEN",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/machines/hero-workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Used cold heading machines in FUSEN warehouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FUSEN | Used Nut Cold Heading & Bolt Heading Machines for Sale",
    description:
      "Tested used cold heading machines for nuts, bolts and screws. Worldwide export, installation and spare parts.",
    images: ["/machines/hero-workshop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === "DEV";

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans">
        <JsonLd />
        <LanguageProvider>
          {isDev && <Inspector />}
          {children}
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
