import { useLocale } from "../../i18n";

// Exact pill from the design: one toggle button with two locale labels.
// Active state derives from the locale context — nothing hardcoded.
export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const isEn = locale === "en";

  return (
    <button
      type="button"
      onClick={() => setLocale(isEn ? "ar" : "en")}
      aria-label={isEn ? "Switch to Arabic" : "Switch to English"}
      className="flex shrink-0 items-center rounded-full border border-line bg-[#EAF4EE] p-1 text-[13px] font-semibold sm:text-[14px]"
    >
      <span
        className={`rounded-full px-3 py-2 transition sm:px-5 ${
          isEn ? "bg-white shadow-sm text-ink" : "text-ink/50"
        }`}
      >
        English
      </span>
      <span
        className={`rounded-full px-3 py-2 transition sm:px-5 ${
          isEn ? "text-ink/50" : "bg-white shadow-sm text-ink"
        }`}
      >
        العربية
      </span>
    </button>
  );
}
