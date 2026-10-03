import { useHomeStrings } from "./copy";

export function TrustRow() {
  const { t } = useHomeStrings();

  return (
    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-[14px] leading-tight sm:mt-8 sm:gap-x-10 sm:text-[16px]">
      <span className="flex items-center gap-3">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1L3 20l1.1-4.3A8.5 8.5 0 1 1 21 11.5z" />
          <circle cx="8.5" cy="11.5" r="1" fill="currentColor" />
          <circle cx="12" cy="11.5" r="1" fill="currentColor" />
          <circle cx="15.5" cy="11.5" r="1" fill="currentColor" />
        </svg>
        <span className="font-medium">
          <span className="block">{t.hero.trust1a}</span>
          <span className="block">{t.hero.trust1b}</span>
        </span>
      </span>
      <span className="flex items-center gap-3">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect x="4" y="10" width="16" height="10" rx="2.5" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="15" r="1.2" fill="currentColor" />
        </svg>
        <span className="font-medium">
          <span className="block">{t.hero.trust2a}</span>
          <span className="block">{t.hero.trust2b}</span>
        </span>
      </span>
      <span className="flex items-center gap-3">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <span className="font-medium">
          <span className="block">{t.hero.trust3a}</span>
          <span className="block text-ink/60">{t.hero.trust3b}</span>
        </span>
      </span>
    </div>
  );
}
