"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CONTACT_INFO } from "@/lib/fusen/data";

// ──────────────────── Types ────────────────────
interface FormData {
  // Personal
  fullName: string;
  nationality: string;
  visitorCount: string;
  email: string;
  phone: string;
  wechat: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;

  // Trip
  entryDate: string;
  exitDate: string;
  duration: string;
  customDuration: string;
  cities: string[];
  customCity: string;

  // Preferences
  dietaryRestrictions: string[];
  dietaryOther: string;
  religiousBeliefs: string[];
  religiousOther: string;
  serviceNeeds: string[];
  serviceOther: string;
  specificInterests: string;

  // Trip type
  tripType: string;

  // Additional
  budgetRange: string;
  accommodation: string[];
  transportation: string[];
  specialNotes: string;
  hearAbout: string;
  medicalNeeds: string;
  agree: boolean;
}

const initialForm: FormData = {
  fullName: "", nationality: "", visitorCount: "1", email: "", phone: "", wechat: "",
  emergencyName: "", emergencyPhone: "", emergencyRelation: "",
  entryDate: "", exitDate: "", duration: "", customDuration: "", cities: [], customCity: "",
  dietaryRestrictions: [], dietaryOther: "", religiousBeliefs: [], religiousOther: "",
  serviceNeeds: [], serviceOther: "", specificInterests: "",
  tripType: "",
  budgetRange: "", accommodation: [], transportation: [], specialNotes: "", hearAbout: "", medicalNeeds: "",
  agree: false,
};

// ──────────────────── Option data ────────────────────
const DURATION_OPTIONS = [
  { value: "4h", label: "4 Hours" },
  { value: "8h", label: "8 Hours (Full Day)" },
  { value: "3d", label: "3 Days" },
  { value: "5d", label: "5 Days" },
  { value: "7d", label: "7 Days" },
  { value: "custom", label: "Custom Duration" },
];

const DIETARY_OPTIONS = [
  { value: "halal", label: "Halal" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "no-pork", label: "No Pork" },
  { value: "gluten-free", label: "Gluten-Free" },
  { value: "lactose-free", label: "Lactose-Free" },
  { value: "seafood-allergy", label: "Seafood Allergy" },
  { value: "nut-allergy", label: "Nut Allergy" },
  { value: "none", label: "No Restrictions" },
  { value: "other", label: "Other" },
];

const RELIGION_OPTIONS = [
  { value: "buddhism", label: "Buddhism" },
  { value: "islam", label: "Islam" },
  { value: "christianity", label: "Christianity" },
  { value: "hinduism", label: "Hinduism" },
  { value: "judaism", label: "Judaism" },
  { value: "no-preference", label: "No Preference" },
  { value: "other", label: "Other" },
];

const SERVICE_OPTIONS = [
  { value: "translation", label: "Translation / Interpretation" },
  { value: "tour-guide", label: "Tour Guide" },
  { value: "sightseeing", label: "Sightseeing & Attractions" },
  { value: "food", label: "Food & Culinary Tour" },
  { value: "culture", label: "Culture & History" },
  { value: "shopping", label: "Shopping Assistance" },
  { value: "business", label: "Business Visit / Meeting" },
  { value: "factory", label: "Factory Visit & Inspection" },
  { value: "exhibition", label: "Exhibition / Trade Fair" },
  { value: "photography", label: "Photography Tour" },
  { value: "other", label: "Other" },
];

const TRIP_TYPE_OPTIONS = [
  { value: "transit", label: "Transit Visa / Short Stay" },
  { value: "personal", label: "Personal / Solo Travel" },
  { value: "family", label: "Family Trip" },
  { value: "couple", label: "Couple / Honeymoon" },
  { value: "business", label: "Business Visit & Meetings" },
  { value: "factory", label: "Factory Inspection & Sourcing" },
  { value: "exhibition", label: "Exhibition & Trade Fair" },
  { value: "study", label: "Study / Cultural Exchange" },
  { value: "custom", label: "Custom / Other" },
];

const CITY_OPTIONS = [
  "Beijing", "Shanghai", "Xi'an", "Chengdu", "Guangzhou",
  "Shenzhen", "Hangzhou", "Guilin", "Chongqing", "Kunming",
  "Suzhou", "Nanjing", "Lhasa (Tibet)", "Harbin", "Hong Kong",
  "custom",
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-500", label: "Under $500" },
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-2000", label: "$1,000 - $2,000" },
  { value: "2000-5000", label: "$2,000 - $5,000" },
  { value: "5000-plus", label: "$5,000+" },
  { value: "flexible", label: "Flexible / Not Sure" },
];

const ACCOMMODATION_OPTIONS = [
  { value: "budget", label: "Budget / Hostel" },
  { value: "mid-range", label: "Mid-Range Hotel (3-4 star)" },
  { value: "luxury", label: "Luxury Hotel (5 star)" },
  { value: "boutique", label: "Boutique / Themed Hotel" },
  { value: "no-need", label: "No accommodation needed" },
];

const TRANSPORTATION_OPTIONS = [
  { value: "public-transit", label: "Public Transit (Metro/Bus)" },
  { value: "private-car", label: "Private Car + Driver" },
  { value: "high-speed-rail", label: "High-Speed Rail" },
  { value: "domestic-flight", label: "Domestic Flight" },
  { value: "mixed", label: "Mixed (Flexible)" },
];

const HEAR_OPTIONS = [
  { value: "", label: "Select..." },
  { value: "google", label: "Google Search" },
  { value: "tripadvisor", label: "TripAdvisor" },
  { value: "instagram", label: "Instagram / Social Media" },
  { value: "youtube", label: "YouTube" },
  { value: "friend", label: "Friend / Word of Mouth" },
  { value: "travel-agent", label: "Travel Agent" },
  { value: "other", label: "Other" },
];

// ──────────────────── Reusable UI Components ────────────────────
function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white text-sm font-bold shrink-0">
        {number}
      </span>
      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/50 to-transparent" />
    </div>
  );
}

function InputField({
  label, name, value, onChange, required, placeholder, type = "text", className,
}: {
  label: string; name: string; value: string; onChange: (v: string) => void;
  required?: boolean; placeholder?: string; type?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-foreground/80 mb-1.5">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30"
      />
    </div>
  );
}

function CheckboxGroup({
  label, options, selected, onChange, otherValue, onOtherChange,
}: {
  label: string; options: { value: string; label: string }[];
  selected: string[]; onChange: (v: string[]) => void;
  otherValue?: string; onOtherChange?: (v: string) => void;
}) {
  const toggle = (value: string) => {
    if (value === "none") {
      onChange(["none"]);
      return;
    }
    const filtered = selected.filter((v) => v !== "none");
    if (filtered.includes(value)) {
      onChange(filtered.filter((v) => v !== value));
    } else {
      onChange([...filtered, value]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-foreground/80 mb-2.5">{label}</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.value);
          const isNone = opt.value === "none";
          const disabled = isNone && selected.length > 0 && !selected.includes("none");
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              disabled={disabled}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs sm:text-sm transition-all ${
                isSelected
                  ? "border-brand-gold bg-brand-gold/10 text-brand-red font-medium"
                  : "border-border bg-white text-foreground/70 hover:border-brand-gold/40"
              } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                isSelected ? "border-brand-gold bg-brand-gold" : "border-border bg-white"
              }`}>
                {isSelected && (
                  <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
              {opt.label}
            </button>
          );
        })}
      </div>
      {selected.includes("other") && onOtherChange && (
        <input
          type="text"
          value={otherValue || ""}
          onChange={(e) => onOtherChange(e.target.value)}
          placeholder="Please specify..."
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm outline-none focus:border-brand-gold"
        />
      )}
    </div>
  );
}

function RadioGroup({
  label, options, value, onChange, name,
}: {
  label: string; options: { value: string; label: string }[];
  value: string; onChange: (v: string) => void; name: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground/80 mb-2.5">{label} <span className="text-brand-red">*</span></label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-lg border px-3 py-2.5 text-xs sm:text-sm text-center transition-all ${
              value === opt.value
                ? "border-brand-gold bg-brand-red text-white font-medium shadow-md"
                : "border-border bg-white text-foreground/70 hover:border-brand-gold/40"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ──────────────────── Main Component ────────────────────
export default function PlanPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof FormData, value: unknown) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleCityToggle = (city: string) => {
    if (city === "custom") {
      if (form.cities.includes("custom")) {
        update("cities", form.cities.filter((c) => c !== "custom"));
      } else {
        update("cities", [...form.cities, "custom"]);
      }
      return;
    }
    if (form.cities.includes(city)) {
      update("cities", form.cities.filter((c) => c !== city));
    } else {
      update("cities", [...form.cities, city]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = new FormData();
    payload.append("form-type", "itinerary-plan");
    payload.append("fullName", form.fullName);
    payload.append("nationality", form.nationality);
    payload.append("visitorCount", form.visitorCount);
    payload.append("email", form.email);
    payload.append("phone", form.phone);
    payload.append("wechat", form.wechat);
    payload.append("emergencyName", form.emergencyName);
    payload.append("emergencyPhone", form.emergencyPhone);
    payload.append("emergencyRelation", form.emergencyRelation);
    payload.append("entryDate", form.entryDate);
    payload.append("exitDate", form.exitDate);
    payload.append("duration", form.duration);
    payload.append("customDuration", form.customDuration);
    payload.append("cities", form.cities.filter((c) => c !== "custom").join(", ") + (form.cities.includes("custom") && form.customCity ? `, Custom: ${form.customCity}` : ""));
    payload.append("dietaryRestrictions", form.dietaryRestrictions.join(", "));
    payload.append("dietaryOther", form.dietaryOther);
    payload.append("religiousBeliefs", form.religiousBeliefs.join(", "));
    payload.append("religiousOther", form.religiousOther);
    payload.append("serviceNeeds", form.serviceNeeds.join(", "));
    payload.append("serviceOther", form.serviceOther);
    payload.append("specificInterests", form.specificInterests);
    payload.append("tripType", form.tripType);
    payload.append("budgetRange", form.budgetRange);
    payload.append("accommodation", form.accommodation.join(", "));
    payload.append("transportation", form.transportation.join(", "));
    payload.append("specialNotes", form.specialNotes);
    payload.append("hearAbout", form.hearAbout);
    payload.append("medicalNeeds", form.medicalNeeds);

    try {
      const res = await fetch("https://formspree.io/f/xwvgoavg", {
        method: "POST",
        body: payload,
      });
      if (res.ok) {
        setSubmitted(true);
        setForm(initialForm);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Submission failed. Please try again or contact us via WhatsApp.");
      }
    } catch {
      window.open(`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
        "FUSEN Itinerary Plan - Form submission failed. Please help me plan my trip."
      )}`, "_blank");
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-brand-cream to-white">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <div className="rounded-2xl bg-white border border-border shadow-lg p-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10">
                <svg className="h-10 w-10 text-[#25D366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your itinerary request has been received successfully. Our team will review your requirements and get back to you within <strong>24 hours</strong> via email or WhatsApp with a personalized travel plan and cost estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-gold/40 px-6 py-3 text-sm font-semibold text-brand-red hover:bg-brand-gold/10"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-brand-cream to-white">
        {/* Page Header */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-brand-gold/5 to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center pt-8 pb-6">
            <div className="divider-gold w-20 mx-auto mb-4" />
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Fill in to get a detailed quote — 填写内容，获取详细报价
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-3">
              Custom Itinerary Planner
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Tell us about your trip and we'll create a <strong>personalized itinerary</strong> with detailed cost estimates. 
              Our team will respond within 24 hours.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="text-brand-red">*</span> Required fields
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl px-4 space-y-10">
          {/* ═══════════ Section 1: Personal Information ═══════════ */}
          <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
            <SectionTitle number="1" title="Personal Information" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Full Name" name="fullName" value={form.fullName} onChange={(v) => update("fullName", v)} required placeholder="e.g. John Smith" />
              <InputField label="Nationality" name="nationality" value={form.nationality} onChange={(v) => update("nationality", v)} required placeholder="e.g. USA, UK, France..." />
              <InputField label="Number of Visitors" name="visitorCount" type="number" value={form.visitorCount} onChange={(v) => update("visitorCount", v)} required />
              <InputField label="Email Address" name="email" type="email" value={form.email} onChange={(v) => update("email", v)} required placeholder="john@example.com" />
              <InputField label="WhatsApp / Phone" name="phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} required placeholder="+86 131 1671 6778" />
              <InputField label="WeChat ID (Optional)" name="wechat" value={form.wechat} onChange={(v) => update("wechat", v)} placeholder="wechat123" />
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground/80 mb-2.5">Emergency Contact</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InputField label="Full Name" name="emergencyName" value={form.emergencyName} onChange={(v) => update("emergencyName", v)} required />
                <InputField label="Phone Number" name="emergencyPhone" type="tel" value={form.emergencyPhone} onChange={(v) => update("emergencyPhone", v)} required />
                <InputField label="Relationship" name="emergencyRelation" value={form.emergencyRelation} onChange={(v) => update("emergencyRelation", v)} placeholder="e.g. Spouse, Parent" />
              </div>
            </div>
          </section>

          {/* ═══════════ Section 2: Trip Details ═══════════ */}
          <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
            <SectionTitle number="2" title="Trip Details" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Entry Date (Arrival in China)" name="entryDate" type="date" value={form.entryDate} onChange={(v) => update("entryDate", v)} required />
              <InputField label="Exit Date (Departure)" name="exitDate" type="date" value={form.exitDate} onChange={(v) => update("exitDate", v)} required />
            </div>

            <div className="mt-6">
              <RadioGroup
                label="Service Duration"
                name="duration"
                value={form.duration}
                onChange={(v) => update("duration", v)}
                options={DURATION_OPTIONS}
              />
              {form.duration === "custom" && (
                <div className="mt-3">
                  <InputField label="Custom Duration" name="customDuration" value={form.customDuration} onChange={(v) => update("customDuration", v)} required placeholder="e.g. 10 days, 2 weeks..." />
                </div>
              )}
              {form.duration && form.duration !== "custom" && form.duration !== "" && (
                <p className="mt-2 text-xs text-muted-foreground">
                  ⏰ Overtime: Additional hours beyond the selected duration will be charged at $25/hour (or equivalent).
                </p>
              )}
            </div>

            {/* Cities */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-foreground/80 mb-2.5">
                Cities You Want to Visit <span className="text-brand-red">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {CITY_OPTIONS.map((city) => {
                  const isSelected = form.cities.includes(city);
                  const isCustom = city === "custom";
                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => handleCityToggle(city)}
                      className={`rounded-lg border px-3 py-2 text-xs sm:text-sm text-center transition-all ${
                        isSelected
                          ? "border-brand-gold bg-brand-red text-white font-medium shadow-sm"
                          : "border-border bg-white text-foreground/70 hover:border-brand-gold/40"
                      }`}
                    >
                      {isCustom ? "✏️ Other City" : city}
                    </button>
                  );
                })}
              </div>
              {form.cities.includes("custom") && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={form.customCity}
                    onChange={(e) => update("customCity", e.target.value)}
                    placeholder="Enter your city / region..."
                    className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30"
                  />
                </div>
              )}
            </div>
          </section>

          {/* ═══════════ Section 3: Preferences & Requirements ═══════════ */}
          <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
            <SectionTitle number="3" title="Preferences & Requirements" />

            <div className="space-y-6">
              <CheckboxGroup
                label="Dietary Restrictions"
                options={DIETARY_OPTIONS}
                selected={form.dietaryRestrictions}
                onChange={(v) => update("dietaryRestrictions", v)}
                otherValue={form.dietaryOther}
                onOtherChange={(v) => update("dietaryOther", v)}
              />

              <CheckboxGroup
                label="Religious Beliefs (for cultural sensitivity)"
                options={RELIGION_OPTIONS}
                selected={form.religiousBeliefs}
                onChange={(v) => update("religiousBeliefs", v)}
                otherValue={form.religiousOther}
                onOtherChange={(v) => update("religiousOther", v)}
              />

              <CheckboxGroup
                label="Services Needed"
                options={SERVICE_OPTIONS}
                selected={form.serviceNeeds}
                onChange={(v) => update("serviceNeeds", v)}
                otherValue={form.serviceOther}
                onOtherChange={(v) => update("serviceOther", v)}
              />

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">Specific Interests / Goals</label>
                <textarea
                  value={form.specificInterests}
                  onChange={(e) => update("specificInterests", e.target.value)}
                  rows={3}
                  placeholder="Tell us what you're most excited about — e.g. Great Wall hiking, street food tour, tech company visits, photography spots..."
                  className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none"
                />
              </div>
            </div>
          </section>

          {/* ═══════════ Section 4: Trip Type ═══════════ */}
          <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
            <SectionTitle number="4" title="Trip Type" />
            <RadioGroup
              label="What best describes your trip?"
              name="tripType"
              value={form.tripType}
              onChange={(v) => update("tripType", v)}
              options={TRIP_TYPE_OPTIONS}
            />
          </section>

          {/* ═══════════ Section 5: Additional Information ═══════════ */}
          <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
            <SectionTitle number="5" title="Additional Information" />

            <div className="space-y-6">
              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">Estimated Budget (per person)</label>
                <select
                  value={form.budgetRange}
                  onChange={(e) => update("budgetRange", e.target.value)}
                  className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Accommodation */}
              <CheckboxGroup
                label="Accommodation Preference"
                options={ACCOMMODATION_OPTIONS}
                selected={form.accommodation}
                onChange={(v) => update("accommodation", v)}
              />

              {/* Transportation */}
              <CheckboxGroup
                label="Transportation Preference"
                options={TRANSPORTATION_OPTIONS}
                selected={form.transportation}
                onChange={(v) => update("transportation", v)}
              />

              {/* Special Notes */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">Special Notes / Requests</label>
                <textarea
                  value={form.specialNotes}
                  onChange={(e) => update("specialNotes", e.target.value)}
                  rows={3}
                  placeholder="Any special requirements, mobility concerns, must-see places, or anything else we should know..."
                  className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none"
                />
              </div>

              {/* Medical */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">Medical Conditions / Special Needs</label>
                <textarea
                  value={form.medicalNeeds}
                  onChange={(e) => update("medicalNeeds", e.target.value)}
                  rows={2}
                  placeholder="Any medical conditions, allergies, mobility issues, or special assistance needed..."
                  className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none"
                />
              </div>

              {/* How did you hear */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">How did you hear about FUSEN?</label>
                <select
                  value={form.hearAbout}
                  onChange={(e) => update("hearAbout", e.target.value)}
                  className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30"
                >
                  {HEAR_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                <p className="text-sm font-medium text-blue-800">Your Privacy Matters 🔒</p>
                <p className="text-xs text-blue-600/80 mt-1">
                  All information you provide is <strong>strictly confidential</strong> and will only be used to create your personalized itinerary. 
                  We never share your data with third parties. Your personal details are protected under GDPR and international privacy standards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="agree"
                checked={form.agree}
                onChange={(e) => update("agree", e.target.checked)}
                required
                className="mt-1 h-4 w-4 rounded border-border text-brand-red focus:ring-brand-gold"
              />
              <label htmlFor="agree" className="text-sm text-muted-foreground">
                I confirm that the information provided is accurate and I agree to FUSEN's 
                <a href="#" className="text-brand-red underline mx-1">Terms of Service</a> and 
                <a href="#" className="text-brand-red underline mx-1">Privacy Policy</a>.
                I understand that FUSEN will contact me within 24 hours with a personalized itinerary.
                <span className="text-brand-red"> *</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!form.agree || submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-10 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#A52A2A] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Submit Itinerary Request
                </>
              )}
            </button>
          </section>

          {/* Spacer for footer */}
          <div className="h-8" />
        </form>
      </main>
      <Footer />
    </>
  );
}