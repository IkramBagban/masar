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
    <span className="flex items-center gap-2 sm:gap-2.5">
      <img
        src="/assets/logo.png"
        width={nav ? 34 : 30}
        height={nav ? 26 : 23}
        alt=""
        aria-hidden="true"
        className={nav ? "h-[23px] w-[30px] object-contain sm:h-[26px] sm:w-[34px]" : "object-contain"}
      />
      <span
        className={`serif font-semibold tracking-tight ${
          nav
            ? "hidden text-[22px] min-[400px]:inline sm:text-[26px]"
            : "text-[22px] text-ink"
        } ${isAr ? "font-arabic" : ""}`}
      >
        {isAr ? "مسار" : "Masār"}
      </span>
    </span>
  );
}
