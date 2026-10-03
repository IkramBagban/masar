import { useLocale } from "../../i18n";

// Shared Masār wordmark: arch mark + locale brand ("Masār" in EN, "مسار" in AR).
// size="nav" matches the header (34x26, text 26px);
// size="footer" matches the footer (30x23, text 22px).
type WordmarkProps = {
  size?: "nav" | "footer";
};

export function Wordmark({ size = "nav" }: WordmarkProps) {
  const nav = size === "nav";
  const { locale } = useLocale();
  const isAr = locale === "ar";
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width={nav ? 34 : 30}
        height={nav ? 26 : 23}
        viewBox="0 0 34 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 24C2 12 8 4 17 4S32 12 32 24"
          stroke="#0E7A5F"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path d="M10 24C10 15 13 9 17 9s7 6 7 15" fill="#15211F" />
      </svg>
      <span
        className={`serif font-semibold tracking-tight ${
          nav ? "text-[26px]" : "text-[22px] text-ink"
        } ${isAr ? "font-arabic" : ""}`}
      >
        {isAr ? "مسار" : "Masār"}
      </span>
    </span>
  );
}
