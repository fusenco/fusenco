"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import {
  translations,
  en,
  LANGUAGES,
  RTL_LANGUAGES,
  type Translation,
  type LanguageCode,
  type LanguageOption,
  type DeepPartial,
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

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Map visitor country code to a supported site language. */
function mapCountryToLanguage(countryCode: string): LanguageCode | null {
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
    CN: "en", TW: "en", HK: "en",
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
  return map[countryCode] ?? null;
}

/** Deep-merge a partial language over the canonical English object. */
function mergeTranslation(
  base: Translation,
  patch: DeepPartial<Translation> | undefined
): Translation {
  if (!patch) return base;

  const result: Record<string, unknown> = {
    ...(base as unknown as Record<string, unknown>),
  };

  for (const key of Object.keys(patch)) {
    const b = (base as unknown as Record<string, unknown>)[key];
    const p = (patch as unknown as Record<string, unknown>)[key];

    if (Array.isArray(p)) {
      result[key] = p;
    } else if (isPlainObject(p) && isPlainObject(b)) {
      result[key] = mergeObject(b, p);
    } else if (p !== undefined) {
      result[key] = p;
    }
  }

  return result as unknown as Translation;
}

function mergeObject(
  base: Record<string, unknown>,
  patch: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base };

  for (const key of Object.keys(patch)) {
    const b = base[key];
    const p = patch[key];

    if (Array.isArray(p)) {
      result[key] = p;
    } else if (isPlainObject(p) && isPlainObject(b)) {
      result[key] = mergeObject(b, p);
    } else if (p !== undefined) {
      result[key] = p;
    }
  }

  return result;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("en");
  const [hydrated, setHydrated] = useState(false);

  // First visit: prefer an explicit user choice in localStorage,
  // otherwise geo-detect by IP, then fall back to browser language.
  useEffect(() => {
    let cancelled = false;

    const apply = (code: LanguageCode, persist: boolean) => {
      if (cancelled) return;
      setLangState(code);
      if (persist) {
        try {
          window.localStorage.setItem(STORAGE_KEY, code);
        } catch {
          /* storage unavailable */
        }
      }
    };

    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null)
        : null;

    if (stored && LANGUAGES.some((l) => l.code === stored)) {
      apply(stored, false);
      setHydrated(true);
      return;
    }

    const detect = async () => {
      let detected: LanguageCode | null = null;

      // ip-api.com (free http endpoint, 3s timeout)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const res = await fetch(
          "http://ip-api.com/json/?fields=countryCode",
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = (await res.json()) as { countryCode?: string };
          if (data.countryCode) {
            detected = mapCountryToLanguage(data.countryCode);
          }
        }
      } catch {
        /* try backup */
      }

      // Backup: ipapi.co
      if (!detected) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);
          const res = await fetch("https://ipapi.co/json/", {
            signal: controller.signal,
          });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = (await res.json()) as { country_code?: string };
            if (data.country_code) {
              detected = mapCountryToLanguage(data.country_code);
            }
          }
        } catch {
          /* fall through */
        }
      }

      if (detected) {
        apply(detected, true);
      } else {
        const nav =
          typeof navigator !== "undefined"
            ? navigator.language?.slice(0, 2).toLowerCase()
            : null;
        if (nav && LANGUAGES.some((l) => l.code === nav)) {
          apply(nav as LanguageCode, true);
        }
      }
      if (!cancelled) setHydrated(true);
    };

    detect();

    return () => {
      cancelled = true;
    };
  }, []);

  const setLang = useCallback((code: LanguageCode) => {
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const t = useMemo<Translation>(
    () => mergeTranslation(en, translations[lang]),
    [lang]
  );

  const isRTL = RTL_LANGUAGES.includes(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t,
    isRTL,
    languages: LANGUAGES,
  };

  // Provider always wraps children; visibility:hidden before hydration
  // avoids a flash while reading the persisted language.
  return (
    <LanguageContext.Provider value={value}>
      <div
        style={hydrated ? undefined : { visibility: "hidden" }}
        aria-hidden={hydrated ? undefined : true}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
