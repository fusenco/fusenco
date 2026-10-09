"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CONTACT_INFO } from "@/lib/fusen/data";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/xwvgoavg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
        window.open(CONTACT_INFO.whatsappLink, "_blank", "noopener");
      }
    } catch {
      setStatus("error");
      window.open(CONTACT_INFO.whatsappLink, "_blank", "noopener");
    }
  };

  return (
    <section id="contact" className="relative bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {t.contact.badge}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-lg text-white/70">{t.contact.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact channels */}
          <div className="flex flex-col gap-5">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/50 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-white/60">
                  {t.contact.whatsapp}
                </div>
                <div className="text-lg font-semibold text-white">
                  {CONTACT_INFO.whatsapp}
                </div>
              </div>
              <svg
                className="ms-auto h-5 w-5 text-white/40 transition group-hover:translate-x-1 group-hover:text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/50 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                <svg
                  className="h-7 w-7"
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
              </div>
              <div>
                <div className="text-sm text-white/60">{t.contact.email}</div>
                <div className="text-lg font-semibold text-white">
                  {CONTACT_INFO.email}
                </div>
              </div>
              <svg
                className="ms-auto h-5 w-5 text-white/40 transition group-hover:translate-x-1 group-hover:text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                {t.contact.chatBtn}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-dark"
              >
                {t.contact.emailBtn}
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-white/10 bg-white/5 p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="c-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  id="c-name"
                  name="name"
                  required
                  placeholder={t.contact.namePh}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="c-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  {t.contact.emailLabel}
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.emailPh}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="c-msg"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  {t.contact.msgLabel}
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  rows={5}
                  required
                  placeholder={t.contact.msgPh}
                  className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-red-light disabled:opacity-60"
              >
                {status === "sending" ? (
                  t.contact.sending
                ) : (
                  <>
                    {t.contact.submit}
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </>
                )}
              </button>

              {status === "done" && (
                <p className="text-center text-sm text-green-400">
                  Thank you! We will reply within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-yellow-400">
                  Submission failed. Opening WhatsApp...
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
