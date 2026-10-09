"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CONTACT_INFO } from "@/lib/fusen/data";

export function Navbar() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isPlan = pathname === "/plan";
  const solid = scrolled || isPlan;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        if (id)
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 180);
    } else if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-white shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("/#home", "home")}
          className="flex items-center gap-3"
        >
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-lg font-serif text-xl font-bold transition-colors ${
              solid
                ? "bg-brand-red text-white"
                : "bg-brand-red text-white"
            }`}
          >
            F
          </div>
          <div className="text-start">
            <div
              className={`font-serif text-2xl font-semibold leading-none transition-colors ${
                solid ? "text-foreground" : "text-white"
              }`}
>>>>>>> 8f09ef2 (feat: 全站转型为二手冷镦机销售外贸站)
            >
              FUSEN
            </div>
            <div
              className={`mt-1 text-[10px] uppercase tracking-[0.22em] transition-colors ${
                solid ? "text-gold" : "text-gold-light"
              }`}
            >
              Used Machinery
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l, i: number) => (
            <button
              key={i}
              onClick={() => handleNavClick(l.href, l.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                solid
                  ? "bg-brand-red/10 text-foreground hover:bg-brand-red hover:text-white"
                  : "bg-white/10 text-white/90 backdrop-blur-sm hover:bg-white/25 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
<<<<<<< HEAD
          <div>
            <LanguageSwitcher />
          </div>
          <button
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="hidden sm:inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C8102E] transition-all hover:bg-white/90 hover:shadow-lg"
=======
          <LanguageSwitcher />
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-light hover:shadow-lg hover:shadow-brand-red/30 md:inline-flex"
>>>>>>> 8f09ef2 (feat: 全站转型为二手冷镦机销售外贸站)
          >
            {t.nav.cta}
          </a>
          {/* Mobile toggle */}
          <button
<<<<<<< HEAD
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
=======
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
              solid ? "text-foreground" : "text-white"
            }`}
            aria-label="Menu"
            aria-expanded={mobileOpen}
>>>>>>> 8f09ef2 (feat: 全站转型为二手冷镦机销售外贸站)
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
<<<<<<< HEAD
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
=======
        <div className="border-t border-border bg-white lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {links.map((l, i: number) => (
              <button
                key={i}
                onClick={() => handleNavClick(l.href, l.id)}
                className="block w-full rounded-lg px-4 py-3 text-start text-sm font-medium text-foreground transition hover:bg-brand-red/10 hover:text-brand-red"
>>>>>>> 8f09ef2 (feat: 全站转型为二手冷镦机销售外贸站)
              >
                {l.label}
              </button>
            ))}
<<<<<<< HEAD
            <button
              onClick={(e) => {
                handleNavClick(e, "/#contact");
                setMobileOpen(false);
              }}
              className="block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-[#C8102E]"
=======
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-full bg-brand-red px-4 py-3 text-center text-sm font-semibold text-white"
>>>>>>> 8f09ef2 (feat: 全站转型为二手冷镦机销售外贸站)
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
