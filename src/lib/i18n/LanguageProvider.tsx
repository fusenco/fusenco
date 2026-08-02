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
    RU: "ru", BY: "ru", KZ: "kk", KG: "ky",
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
    DE: "de", AT: "de", LI: "de",
    IT: "it", MT: "it", SM: "it",
    NL: "nl",
    TH: "th",
    ID: "id",
    IR: "fa", AF: "fa", TJ: "tg",
    CN: "zh", TW: "zh", HK: "zh",
    IN: "hi",
    TR: "tr", CY: "tr",
    UZ: "uz",
    PL: "pl",
    FI: "fi",
    MY: "ms", BN: "ms", SG: "ms",
    SE: "sv",
    GR: "el",
    TM: "tk",
  };
  return map[countryCode] || "zh";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("zh");

  // Always detect via IP on first visit (don't use stale localStorage cache)
  useEffect(() => {
    const detectLanguage = async () => {
      let detected: LanguageCode | null = null;

      // Try ip-api.com (more reliable, no CORS issues for HTTP)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const res = await fetch("http://ip-api.com/json/?fields=countryCode", {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          if (data.countryCode) {
            detected = mapCountryToLanguage(data.countryCode);
          }
        }
      } catch {
        // ip-api failed, try ipapi.co as backup
      }

      // Fallback 1: ipapi.co
      if (!detected) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);
          const res = await fetch("https://ipapi.co/json/", {
            signal: controller.signal,
          });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = await res.json();
            if (data.country_code) {
              detected = mapCountryToLanguage(data.country_code);
            }
          }
        } catch {
          // ipapi.co also failed
        }
      }

      // Apply detected language or fallback to browser language
      if (detected) {
        setLangState(detected);
        localStorage.setItem(STORAGE_KEY, detected);
      } else if (typeof navigator !== "undefined") {
        const browserLang = navigator.language.split("-")[0];
        if (translations[browserLang as LanguageCode]) {
          setLangState(browserLang as LanguageCode);
          localStorage.setItem(STORAGE_KEY, browserLang as LanguageCode);
        } else {
          // Final fallback: Chinese (default)
          setLangState("zh");
        }
      }
    };

    detectLanguage();
  }, []);

  // Update document direction for RTL languages
  useEffect(() => {
    const isRTL = lang === "ar" || lang === "fa";
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
    isRTL: lang === "ar" || lang === "fa",
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
