import type { Metadata, Viewport } from "next";
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
    "used cold heading machine for sale",
    "nut cold header for sale",
    "used nut former",
    "bolt heading machine",
    "used bolt heading machine",
    "screw cold former",
    "second hand cold former",
    "second hand fastener machinery",
    "multi-station nut former",
    "multi-station cold former",
    "fastener machinery exporter",
    "used Sijin machine",
    "Chunzu bolt former",
    "Yeswin nut former",
    "Jernyao cold header",
    "used nut machine 14B6S",
    "19B-6S cold header",
    "cold heading machine China",
    "buy used cold former",
    "FUSEN",
  ],
  authors: [{ name: "FUSEN", url: "https://fusenco.com" }],
  creator: "FUSEN",
  publisher: "FUSEN",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  referrer: "origin-when-cross-origin",
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
    alternateLocale: ["ru_RU", "ja_JP", "ko_KR", "es_ES", "pt_BR", "fr_FR", "ar_SA", "de_DE"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Used cold heading machines in FUSEN warehouse",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FUSEN | Used Nut Cold Heading & Bolt Heading Machines for Sale",
    description:
      "Tested used cold heading machines for nuts, bolts and screws. Worldwide export, installation and spare parts.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/fusen-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/fusen-logo.png" }],
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#8B1A1A",
  width: "device-width",
  initialScale: 1,
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
