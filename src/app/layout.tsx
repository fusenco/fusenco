import type { Metadata } from "next";
import { Inspector } from "react-dev-inspector";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import WhatsAppFloat from "@/components/fusen/WhatsAppFloat";

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
  title: "FUSEN | Used Nut Cold Heading Machines & Bolt Heading Machines",
  description:
    "FUSEN supplies tested, refurbished used nut cold headers, bolt heading machines and screw cold formers from Sijin, Asahi Okuma, Sakamura and more. Worldwide export, installation and spare parts support.",
  keywords: [
    "used cold heading machine",
    "nut cold header",
    "bolt heading machine",
    "screw cold former",
    "used Sijin machine",
    "Asahi Okuma",
    "fastener machinery",
    "second hand cold former",
    "FUSEN",
  ],
  authors: [{ name: "FUSEN" }],
  openGraph: {
    title: "FUSEN | Used Nut Cold Heading Machines & Bolt Heading Machines",
    description:
      "Tested, ready-to-run used cold heading machines for nuts, bolts and screws. Worldwide export with installation and spare parts support.",
    siteName: "FUSEN",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <LanguageProvider>
          {isDev && <Inspector />}
          {children}
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
