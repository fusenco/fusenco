"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  translations,
  type Translation,
  type LanguageCode,
  type LanguageOption,
  LANGUAGES,
} from "./translations";

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: Translation;
  isRTL: boolean;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "fusen-lang";

function mapCountryToLanguage(countryCode: string): LanguageCode {
  const map: Record<string, LanguageCode> = {
    RU: "ru", BY: "ru", KZ: "ru", KG: "ru",
    JP: "ja",
    KR: "ko",
    ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es",
    VE: "es", EC: "es", GT: "es", CU: "es", BO: "es", DO: "es",
    HN: "es", PY: "es", SV: "es", NI: "es", CR: "es", PA: "es", UY: "es",
    BR: "pt", PT: "pt", AO: "pt", MZ: "pt",
    FR: "fr", BE: "fr", CH: "fr", LU: "fr", MC: "fr",
    SA: "ar", AE: "ar", EG: "ar", KW: "ar", QA: "ar", BH: "ar",
    OM: "ar", JO: "ar", LB: "ar", SY: "ar", IQ: "ar", YE: "ar",
    LY: "ar", TN: "ar", DZ: "ar", MA: "ar", MR: "ar",
  };
  return map[countryCode] || "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("en");

  // Load saved language or detect via IP on first visit
  useEffect(() => {
    const saved = typeof window !== "undefined"
      ? (localStorage.getItem(STORAGE_KEY) as LanguageCode | null)
      : null;

    if (saved && translations[saved]) {
      setLangState(saved);
      return;
    }

    // Try IP-based detection
    const detectLanguage = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (res.ok) {
          const data = await res.json();
          if (data.country_code) {
            const detected = mapCountryToLanguage(data.country_code);
            setLangState(detected);
            return;
          }
        }
      } catch {
        // IP detection failed, fall through to browser language
      }

      // Fallback: browser language
      if (typeof navigator !== "undefined") {
        const browserLang = navigator.language.split("-")[0];
        if (translations[browserLang as LanguageCode]) {
          setLangState(browserLang as LanguageCode);
        }
      }
    };

    detectLanguage();
  }, []);

  // Update document direction for RTL languages
  useEffect(() => {
    const isRTL = lang === "ar";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((newLang: LanguageCode) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  }, []);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
    isRTL: lang === "ar",
    languages: LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
