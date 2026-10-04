import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ar } from "./ar";
import { en, type Dictionary } from "./en";

export type Locale = "en" | "ar";

const STORAGE_KEY = "masar-locale";
const LEGACY_STORAGE_KEY = "wasit-lang";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function readLocale(): Locale {
  try {
    const stored =
      localStorage.getItem(STORAGE_KEY) ??
      localStorage.getItem(LEGACY_STORAGE_KEY);
    if (stored === "ar" || stored === "en") return stored;
  } catch {
    /* storage unavailable */
  }
  return "ar";
}

export function applyLocale(locale: Locale): void {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  // TODO(design-port): set localized document title once i18n copy lands.
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState((prev) => {
      if (prev === next) return prev;
      const reduce =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* storage unavailable */
        }
        return next;
      }
      // Directional cascade like designs/wasit js/i18n.js:
      // fade out toward the new reading direction, swap, fade back in.
      try {
        document.body.classList.remove("lang-to-ar", "lang-to-en");
        document.body.classList.add(
          "lang-switch",
          next === "ar" ? "lang-to-ar" : "lang-to-en",
        );
      } catch {
        /* dom unavailable */
      }
      window.setTimeout(() => {
        setLocaleState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* storage unavailable */
        }
        // Preload the other hero bg so the next switch is instant.
        try {
          const pre = new Image();
          pre.src =
            next === "ar"
              ? "/assets/hero-bg.png"
              : "/assets/hero-bg-ar.png";
        } catch {
          /* ignore */
        }
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            document.body.classList.remove(
              "lang-switch",
              "lang-to-ar",
              "lang-to-en",
            ),
          ),
        );
      }, 200);
      return prev;
    });
  }, []);

  useLayoutEffect(() => {
    applyLocale(locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: locale === "ar" ? ar : en,
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return value;
}
