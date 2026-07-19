"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { planTranslations, type PlanLang } from "@/lib/i18n/plan-translations";
import { CONTACT_INFO } from "@/lib/fusen/data";
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";

export default function PlanPage() {
  const { lang } = useLanguage();
  const t = planTranslations[(lang as PlanLang) || "en"];

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    nationality: "",
    visitorCount: "1",
    email: "",
    phone: "",
    wechat: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    entryDate: "",
    exitDate: "",
    duration: "4h",
    customDuration: "",
    cities: [] as string[],
    customCity: "",
    dietary: [] as string[],
    religion: "",
    services: [] as string[],
    specificInterests: "",
    tripType: "",
    budgetRange: "mid",
    accommodation: [] as string[],
    transportation: [] as string[],
    specialNotes: "",
    medicalNeeds: "",
    hearAbout: "",
    agree: false,
  });

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArray = (key: "cities" | "dietary" | "services" | "accommodation" | "transportation", value: string) => {
    setForm((prev) => {
      const arr = prev[key];
      return { ...prev, [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
    });
  };

  const localeMap: Record<string, string> = {
    en: "en-US",
    ru: "ru-RU",
    ja: "ja-JP",
    ko: "ko-KR",
    es: "es-ES",
    pt: "pt-PT",
    fr: "fr-FR",
    ar: "ar-SA",
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("Full Name", form.fullName);
      formData.append("Nationality", form.nationality);
      formData.append("Visitor Count", form.visitorCount);
      formData.append("Email", form.email);
      formData.append("Phone", form.phone);
      formData.append("WeChat", form.wechat);
      formData.append("Emergency Contact Name", form.emergencyName);
      formData.append("Emergency Contact Phone", form.emergencyPhone);
      formData.append("Emergency Contact Relation", form.emergencyRelation);
      formData.append("Entry Date", form.entryDate);
      formData.append("Exit Date", form.exitDate);
      formData.append("Service Duration", form.duration === "custom" ? form.customDuration : form.duration);
      formData.append("Cities", form.cities.join(", "));
      if (form.customCity) formData.append("Custom City", form.customCity);
      formData.append("Dietary Restrictions", form.dietary.join(", "));
      formData.append("Religion", form.religion);
      formData.append("Services", form.services.join(", "));
      formData.append("Specific Interests", form.specificInterests);
      formData.append("Trip Type", form.tripType);
      formData.append("Budget", form.budgetRange);
      formData.append("Accommodation", form.accommodation.join(", "));
      formData.append("Transportation", form.transportation.join(", "));
      formData.append("Special Notes", form.specialNotes);
      formData.append("Medical Needs", form.medicalNeeds);
      formData.append("How did you hear", form.hearAbout);

      const res = await fetch("https://formspree.io/f/xwvgoavg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`, "_blank");
      }
    } catch {
      window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`, "_blank");
    } finally {
      setSubmitting(false);
    }
  };

  const locale = localeMap[lang] || "en-US";

  // ─── Success Page ───
  if (success) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#F8F5F0] pt-28 pb-16 px-4 flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-50 border-4 border-green-100">
              <svg className="h-12 w-12 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-4xl text-[#1A1410] mb-4">{t.thankYou}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.successMessage}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[#1EBE5A] hover:shadow-lg"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                {t.chatWhatsApp}
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#8B1A1A] px-8 py-3.5 font-semibold text-[#8B1A1A] transition-all hover:bg-[#8B1A1A] hover:text-white"
              >
                {t.backToHome}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const DURATIONS = ["4h", "8h", "3d", "5d", "7d", "custom"];
  const CITY_KEYS = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Xi'an", "Hangzhou", "Chongqing", "Lhasa (Tibet)", "Guilin", "Hong Kong", "Kunming", "Suzhou", "Nanjing", "Harbin"];
  const BUDGET_VALUES = ["budget", "mid", "premium", "luxury"];
  const ACCOMMODATION_VALUES = ["hotel5", "hotel4", "boutique", "homestay", "apartment"];
  const TRANSPORTATION_VALUES = ["private", "train", "flight", "public"];
  const HEAR_VALUES = ["friend", "social", "search", "forum", "blog", "other"];

  // ─── Form Page ───
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8F5F0] pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-100 px-4 py-1.5 text-sm font-medium text-green-700 mb-4">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {t.incentiveBadge}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1410] mb-3">{t.pageTitle}</h1>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">{t.pageSubtitle}</p>
            <p className="text-xs text-muted-foreground/60 mt-2">* {t.requiredFields}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ═══════════ Section 1: Personal Information ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">1</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s1Title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.fullName} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="text" required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder={t.phFullName} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.nationality} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="text" required value={form.nationality} onChange={(e) => update("nationality", e.target.value)} placeholder={t.phNationality} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.visitorCount} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="number" min="1" required value={form.visitorCount} onChange={(e) => update("visitorCount", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.email} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder={t.phEmail} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.phone}</label>
                  <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder={t.phPhone} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.wechat}</label>
                  <input type="text" value={form.wechat} onChange={(e) => update("wechat", e.target.value)} placeholder={t.phWechat} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-foreground/80 mb-3">{t.emergencyContact}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input type="text" value={form.emergencyName} onChange={(e) => update("emergencyName", e.target.value)} placeholder={t.emergencyName} className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                  <input type="tel" value={form.emergencyPhone} onChange={(e) => update("emergencyPhone", e.target.value)} placeholder={t.emergencyPhone} className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                  <input type="text" value={form.emergencyRelation} onChange={(e) => update("emergencyRelation", e.target.value)} placeholder={t.phRelation} className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
              </div>
            </section>

            {/* ═══════════ Section 2: Trip Details ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">2</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s2Title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.entryDate} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="date" required value={form.entryDate} onChange={(e) => update("entryDate", e.target.value)} lang={locale} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.exitDate} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="date" required value={form.exitDate} onChange={(e) => update("exitDate", e.target.value)} lang={locale} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.serviceDuration} <span className="text-[#8B1A1A]">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {DURATIONS.map((d) => (
                    <button key={d} type="button" onClick={() => update("duration", d)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${form.duration === d ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {d === "custom" ? t.customDuration : t.durationOptions[DURATIONS.indexOf(d)]}
                    </button>
                  ))}
                </div>
                {form.duration === "custom" && (
                  <input type="text" value={form.customDuration} onChange={(e) => update("customDuration", e.target.value)} placeholder={t.phCustomDuration} className="mt-3 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                )}
                <p className="mt-2 text-xs text-muted-foreground/70">{t.overtimeNotice}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.cities}</label>
                <div className="flex flex-wrap gap-2">
                  {CITY_KEYS.map((key) => (
                    <button key={key} type="button" onClick={() => toggleArray("cities", key)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.cities.includes(key) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {t.cityNames[key]}
                    </button>
                  ))}
                </div>
                <input type="text" value={form.customCity} onChange={(e) => update("customCity", e.target.value)} placeholder={t.phCustomCity} className="mt-3 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
              </div>
            </section>

            {/* ═══════════ Section 3: Preferences ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">3</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s3Title}</h2>
              </div>

              {/* Dietary */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.dietary}</label>
                <div className="flex flex-wrap gap-2">
                  {t.dietaryOptions.map((opt: string, i: number) => (
                    <button key={i} type="button" onClick={() => toggleArray("dietary", String(i))} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.dietary.includes(String(i)) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Religion */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.religion}</label>
                <div className="flex flex-wrap gap-2">
                  {t.religionOptions.map((opt: string, i: number) => (
                    <button key={i} type="button" onClick={() => update("religion", opt)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.religion === opt ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.services}</label>
                <div className="flex flex-wrap gap-2">
                  {t.serviceOptions.map((opt: string, i: number) => (
                    <button key={i} type="button" onClick={() => toggleArray("services", String(i))} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.services.includes(String(i)) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific interests */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.specificInterests}</label>
                <textarea value={form.specificInterests} onChange={(e) => update("specificInterests", e.target.value)} rows={3} placeholder={t.phInterests} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none" />
              </div>
            </section>

            {/* ═══════════ Section 4: Trip Type ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">4</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s4Title}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.tripTypeOptions.map((opt: string, i: number) => (
                  <button key={i} type="button" onClick={() => update("tripType", opt)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${form.tripType === opt ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </section>

            {/* ═══════════ Section 5: Additional Info ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">5</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s5Title}</h2>
              </div>

              <div className="space-y-6">
                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.budget}</label>
                  <select value={form.budgetRange} onChange={(e) => update("budgetRange", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30">
                    {BUDGET_VALUES.map((v, i) => (
                      <option key={v} value={v}>{t.budgetOptions[i]}</option>
                    ))}
                  </select>
                </div>

                {/* Accommodation */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.accommodation}</label>
                  <div className="flex flex-wrap gap-2">
                    {ACCOMMODATION_VALUES.map((v, i) => (
                      <button key={v} type="button" onClick={() => toggleArray("accommodation", v)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.accommodation.includes(v) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                        {t.accommodationOptions[i]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.transportation}</label>
                  <div className="flex flex-wrap gap-2">
                    {TRANSPORTATION_VALUES.map((v, i) => (
                      <button key={v} type="button" onClick={() => toggleArray("transportation", v)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.transportation.includes(v) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                        {t.transportationOptions[i]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.specialNotes}</label>
                  <textarea value={form.specialNotes} onChange={(e) => update("specialNotes", e.target.value)} rows={3} placeholder={t.phSpecialNotes} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none" />
                </div>

                {/* Medical */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.medical}</label>
                  <textarea value={form.medicalNeeds} onChange={(e) => update("medicalNeeds", e.target.value)} rows={2} placeholder={t.phMedical} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none" />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.hearAbout}</label>
                  <select value={form.hearAbout} onChange={(e) => update("hearAbout", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30">
                    {HEAR_VALUES.map((v, i) => (
                      <option key={v} value={v}>{t.hearOptions[i]}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* ═══════════ Section 6: Submit ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              {/* Privacy Notice */}
              <div className="mb-6 flex items-start gap-3 rounded-lg bg-blue-50/50 border border-blue-100 p-4">
                <svg className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-blue-800">{t.privacyTitle}</p>
                  <p className="text-xs text-blue-600/80 mt-1">{t.privacyText}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <input type="checkbox" id="agree" checked={form.agree} onChange={(e) => update("agree", e.target.checked)} required className="mt-1 h-4 w-4 rounded border-border text-brand-red focus:ring-brand-gold" />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  {t.agreeText}{" "}
                  <a href="#" className="text-brand-red underline mx-1">{t.termsOfService}</a>{" "}
                  <a href="#" className="text-brand-red underline mx-1">{t.privacyPolicy}</a>.
                  <span className="text-brand-red"> *</span>
                </label>
              </div>

              <button type="submit" disabled={!form.agree || submitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#8B1A1A] px-10 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#A52A2A] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    {t.submit}
                  </>
                )}
              </button>
            </section>

            <div className="h-8" />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
