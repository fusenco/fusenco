"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useLanguage();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();

      // Handle /plan page navigation
      if (href === "/plan") {
        router.push("/plan");
        return;
      }

      // Handle hash links (/#services, /#home, etc.)
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        const currentPath = window.location.pathname;

        if (path === currentPath || (path === "/" && currentPath === "/")) {
          // Same page - smooth scroll to hash
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        } else {
          // Navigate to page, then scroll to hash after mount
          router.push(path);
          const check = setInterval(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              clearInterval(check);
            }
          }, 50);
          setTimeout(() => clearInterval(check), 3000);
        }
        return;
      }

      // Fallback for any other links
      router.push(href);
    },
    [router]
  );

  const navLinks = [
    { href: "/#home", label: t.nav.home },
    { href: "/#services", label: t.nav.services },
    { href: "/#destinations", label: t.nav.destinations },
    { href: "/#guides", label: t.nav.guides },
    { href: "/plan", label: t.nav.plan },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md shadow-brand"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red">
            <span className="font-serif text-xl font-bold text-white">F</span>
          </div>
          <div className="hidden sm:block">
            <span className={`font-serif text-xl font-bold ${scrolled ? "text-brand-red" : "text-white"}`}>
              FUSEN
            </span>
            <span className={`block text-[10px] tracking-widest uppercase ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              China Local Guide
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className={scrolled ? "" : "[&_*]:text-white"}>
            <LanguageSwitcher />
          </div>
          <button
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="hidden sm:inline-flex items-center rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#A52A2A] hover:shadow-lg"
          >
            {t.nav.cta}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setMobileOpen(false);
                }}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-accent/10 hover:text-brand-red"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={(e) => {
                handleNavClick(e, "/#contact");
                setMobileOpen(false);
              }}
              className="block w-full rounded-lg bg-brand-red px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
