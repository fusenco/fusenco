"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isPlan = pathname === "/plan";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = [
    { href: "/#home", label: t.nav.home, id: "home" },
    { href: "/#products", label: t.nav.products, id: "products" },
    { href: "/#categories", label: t.nav.categories, id: "categories" },
    { href: "/#brands", label: t.nav.brands, id: "brands" },
    { href: "/#whyus", label: t.nav.whyUs, id: "whyus" },
    { href: "/plan", label: t.nav.inquiry },
    { href: "/#contact", label: t.nav.contact, id: "contact" },
  ];

  const handleNavClick = (href: string, id?: string) => {
    setMobileOpen(false);

    if (href === "/plan") {
      router.push("/plan");
      return;
    }

    if (isPlan) {
      router.push("/");
      window.setTimeout(() => {
        if (id) {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 180);
    } else if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-red shadow-md">
      {/* Cloud pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/cloud-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "120px auto",
          opacity: 0.35,
        }}
      />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("/#home", "home")}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm">
            <span className="font-serif text-xl font-bold text-white">F</span>
          </div>
          <div className="hidden sm:block text-start">
            <span className="font-serif text-xl font-bold text-white">
              FUSEN
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/80">
              Used Machinery
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((l, i: number) => (
            <button
              key={i}
              onClick={() => handleNavClick(l.href, l.id)}
              className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/25"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => handleNavClick("/plan")}
            className="hidden items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-red transition-all hover:bg-white/90 hover:shadow-lg sm:inline-flex"
          >
            {t.nav.cta}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-white lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="relative overflow-hidden border-t border-white/20 bg-brand-red shadow-lg lg:hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: "url('/cloud-pattern.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "120px auto",
            }}
          />
          <div className="relative space-y-1 px-4 py-4">
            {links.map((l, i: number) => (
              <button
                key={i}
                onClick={() => handleNavClick(l.href, l.id)}
                className="block w-full rounded-lg px-4 py-3 text-start text-sm font-medium text-white transition hover:bg-white/20"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/plan")}
              className="mt-2 block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-brand-red"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
