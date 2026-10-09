"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CONTACT_INFO, MACHINE_CATEGORIES } from "@/lib/fusen/data";
import { useRouter } from "next/navigation";

export function Footer() {
  const { t } = useLanguage();
  const router = useRouter();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red font-serif text-xl font-bold text-white">
                F
              </div>
              <div>
                <div className="font-serif text-2xl font-semibold">FUSEN</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                  Used Machinery Supplier
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {t.footer.desc}
            </p>
          </div>

          {/* Machine categories */}
          <div>
            <h3 className="font-serif text-lg text-gold">
              {t.footer.productsTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {MACHINE_CATEGORIES.map((c, i: number) => (
                <li key={i}>
                  <button
                    onClick={() => router.push("/plan")}
                    className="text-sm text-white/60 transition hover:text-gold"
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg text-gold">
              {t.footer.companyTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { id: "home", label: t.nav.home },
                { id: "products", label: t.nav.products },
                { id: "whyus", label: t.nav.whyUs },
                { id: "contact", label: t.nav.contact },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => {
                      router.push("/");
                      setTimeout(
                        () =>
                          document
                            .getElementById(l.id)
                            ?.scrollIntoView({ behavior: "smooth" }),
                        120
                      );
                    }}
                    className="text-sm text-white/60 transition hover:text-gold"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-gold">
              {t.nav.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>
            © {year} {CONTACT_INFO.companyName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
