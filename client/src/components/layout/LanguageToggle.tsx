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
      className="flex items-center bg-[#EAF4EE] border border-line rounded-full p-1 text-[14px] font-semibold"
    >
      <span
        className={`px-5 py-2 rounded-full transition ${
          isEn ? "bg-white shadow-sm text-ink" : "text-ink/50"
        }`}
      >
        English
      </span>
      <span
        className={`px-5 py-2 rounded-full transition ${
          isEn ? "text-ink/50" : "bg-white shadow-sm text-ink"
        }`}
      >
        العربية
      </span>
    </button>
  );
}
