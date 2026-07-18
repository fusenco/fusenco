import type { Metadata } from "next";
import { Inspector } from "react-dev-inspector";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

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
  title: "FUSEN | Premium Local Guide Service in China",
  description:
    "Professional local guides for independent travelers in China. Multi-language support (EN, RU, JA, KO, ES, PT, FR, AR), private tours, business matching, and factory visits across China's top destinations.",
  keywords: [
    "China local guide",
    "China private tour",
    "Beijing guide",
    "Shanghai guide",
    "business trip China",
    "factory visit China",
    "multi-language guide China",
    "FUSEN",
  ],
  authors: [{ name: "FUSEN" }],
  openGraph: {
    title: "FUSEN | Premium Local Guide Service in China",
    description:
      "Discover the real China with professional local guides. Multi-language support, private tours, business assistance.",
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
        </LanguageProvider>
      </body>
    </html>
  );
}
