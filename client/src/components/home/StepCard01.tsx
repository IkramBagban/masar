import { useHomeStrings } from "./copy";

export function StepCard01() {
  const { t } = useHomeStrings();

  return (
    <div className="flex flex-col">
      {/* <span className="inline-grid place-items-center w-12 h-12 rounded-full bg-[#EAF4EE] text-pine border border-line serif text-[17px] font-semibold">
        01
      </span> */}
      <div className="flex items-center gap-3">
        <span className="inline-grid place-items-center w-12 h-12 shrink-0 rounded-full bg-[#EAF4EE] text-pine border border-line serif text-[17px] font-semibold">
          1
        </span>
        <h3 className="step-title serif text-[24px] leading-tight">
          {t.how.card1tA} {t.how.card1tB}
        </h3>
      </div>
      <p className="text-ink/55 text-[15px] leading-relaxed mt-3">
        {t.how.card1d}
      </p>
      <div className="mt-4 flex-1 bg-white border border-line rounded-[24px] p-4 shadow-[0_20px_50px_-30px_rgba(21,33,31,.35)]">
        <div className="flex items-center justify-end px-1 py-1">
          <span className="flex bg-[#EFF3EE] rounded-full p-0.5 text-[12px] font-semibold">
            <span className="px-3 py-1 rounded-full bg-white shadow-sm">
              English
            </span>
            <span className="px-3 py-1 text-ink/45">العربية</span>
          </span>
        </div>
        <div className="mt-2 border border-line rounded-2xl p-4">
          <p className="text-[13px] text-ink/45">{t.how.card1q}</p>
          <p className="text-[14.5px] mt-2 leading-snug">{t.how.card1a}</p>
          <div className="mt-3 flex justify-end">
            <span className="dir-flip w-11 h-11 rounded-full bg-pine text-white grid place-items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
