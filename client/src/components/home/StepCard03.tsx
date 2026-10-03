import { useHomeStrings } from "./copy";

export function StepCard03() {
  const { t } = useHomeStrings();

  return (
    <div className="flex flex-col">
      <span className="inline-grid place-items-center w-12 h-12 rounded-full bg-[#EAF4EE] text-pine border border-line serif text-[17px] font-semibold">
        03
      </span>
      <div className="mt-3 flex-1 bg-white border border-line rounded-[24px] p-4 shadow-[0_20px_50px_-30px_rgba(21,33,31,.35)]">
        <div className="flex items-center gap-3 bg-[#FEF7EC] rounded-2xl px-4 py-3.5">
          <span className="w-9 h-9 rounded-full bg-[#FDE8CA] grid place-items-center shrink-0">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D97706]"></span>
          </span>
          <span>
            <span className="block text-[12px] text-ink/50">
              {t.how.urgLabel}
            </span>
            <span className="block font-semibold text-[15px]">
              {t.how.urgValue}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3 px-2 py-3.5">
          <span className="w-9 h-9 rounded-full bg-bone grid place-items-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M4 8h4v10H4zM16 8h4v10h-4zM8 10h8a4 4 0 0 1 0 8h-1" />
            </svg>
          </span>
          <span>
            <span className="block text-[12px] text-ink/50">
              {t.how.specLabel}
            </span>
            <span className="block font-semibold text-[15px]">
              {t.how.specValue}
            </span>
          </span>
        </div>
        <div className="flex items-start gap-3 px-2 pb-1">
          <span className="w-9 h-9 rounded-full bg-bone grid place-items-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M6 3h12v18H6z" />
              <path d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </span>
          <span>
            <span className="block text-[12px] text-ink/50">
              {t.how.tellLabel}
            </span>
            <span className="block text-[13.5px] text-ink/60 leading-snug mt-0.5">
              {t.how.tellValue}
            </span>
          </span>
        </div>
      </div>
      <h3 className="step-title serif text-[30px] leading-tight mt-6 md:min-h-[74px]">
        {t.how.card3tA} {t.how.card3tB}
      </h3>
      <p className="text-ink/55 text-[15px] leading-relaxed mt-2 md:min-h-[72px]">
        {t.how.card3d}
      </p>
    </div>
  );
}
