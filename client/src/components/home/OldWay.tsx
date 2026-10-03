import { useLocale } from "../../i18n";

export function OldWay() {
  const { t } = useLocale();
  const w = t.why;

  return (
    <div className="bg-[#F7FAF8] border border-line rounded-[28px] p-6 md:p-9">
      <p className="flex items-center gap-2.5 text-[13px] font-bold tracking-[.18em] text-ink/60">
        <span className="w-7 h-7 rounded-full bg-red-100 text-red-600 grid place-items-center text-[15px] font-bold">
          ✕
        </span>
        <span>{w.oldLabel}</span>
      </p>
      <h3 className="serif text-[30px] md:text-[34px] leading-tight mt-4">
        {w.oldTitle}
      </h3>
      <div className="relative mt-7 space-y-5">
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-line"></div>
        <div className="relative flex gap-4 items-start">
          <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#F1F4F3] border-4 border-white shadow-sm grid place-items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5C6E6B"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </span>
          <div className="flex-1 bg-white rounded-[20px] rounded-tl-[8px] px-5 py-4 shadow-sm">
            <p className="font-medium text-[15.5px]">{w.old1q}</p>
            <p className="text-ink/50 text-[14px] mt-1">{w.old1a}</p>
          </div>
        </div>
        <div className="relative flex gap-4 items-start">
          <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#F1F4F3] border-4 border-white shadow-sm grid place-items-center text-[24px] text-[#5C6E6B] font-medium">
            ?
          </span>
          <div className="flex-1 bg-white rounded-[20px] rounded-tl-[8px] px-5 py-4 shadow-sm">
            <p className="font-medium text-[15.5px]">{w.old2q}</p>
            <p className="text-ink/50 text-[14px] mt-1">{w.old2a}</p>
          </div>
        </div>
        <div className="relative flex gap-4 items-start">
          <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#F1F4F3] border-4 border-white shadow-sm grid place-items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5C6E6B"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </span>
          <div className="flex-1 bg-white rounded-[20px] rounded-tl-[8px] px-5 py-4 shadow-sm">
            <p className="font-medium text-[15.5px]">{w.old3q}</p>
            <p className="text-ink/50 text-[14px] mt-1">{w.old3a}</p>
          </div>
        </div>
        <div className="relative flex gap-4 items-start">
          <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#F1F4F3] border-4 border-white shadow-sm grid place-items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5C6E6B"
              strokeWidth="1.8"
            >
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <path d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </span>
          <div className="flex-1 bg-white rounded-[20px] rounded-tl-[8px] px-5 py-4 shadow-sm">
            <p className="font-medium text-[15.5px]">{w.old4q}</p>
            <p className="text-ink/50 text-[14px] mt-1">{w.old4a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
