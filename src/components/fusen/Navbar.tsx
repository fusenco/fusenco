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
    // On /plan page, navbar is always solid (no dark hero behind it)
    const isPlanPage = window.location.pathname === "/plan";
    if (isPlanPage) {
      setScrolled(true);
      return;
    }
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#C8102E] shadow-md relative">
      {/* 祥云图腾背景 - 使用上传的图片 */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/cloud-pattern.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px auto',
          opacity: 0.35
        }}
      />
      
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="font-serif text-xl font-bold text-white">F</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-xl font-bold text-white">
              FUSEN
            </span>
            <span className="block text-[10px] tracking-widest uppercase text-white/80">
              China Local Guide
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 rounded-full text-sm font-medium text-white bg-white/15 hover:bg-white/25 transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div>
            <LanguageSwitcher />
          </div>
          <button
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="hidden sm:inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C8102E] transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {t.nav.cta}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
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
        <div className="lg:hidden bg-[#C8102E] border-t border-white/20 shadow-lg relative overflow-hidden">
          {/* 祥云图腾背景 */}
          <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M10 20 Q 15 15, 20 20 T 30 20 Q 35 25, 40 20 Q 45 15, 50 20 T 60 20 Q 65 25, 70 20' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
          
          <div className="relative px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setMobileOpen(false);
                }}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-white hover:bg-white/20"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={(e) => {
                handleNavClick(e, "/#contact");
                setMobileOpen(false);
              }}
              className="block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-[#C8102E]"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
