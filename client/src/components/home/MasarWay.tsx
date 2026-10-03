import { useLocale } from "../../i18n";

export function MasarWay() {
  const { t } = useLocale();
  const w = t.why;

  return (
    <div className="rounded-[24px] border border-pine/20 bg-[#EAF4EE] p-4 sm:p-6 md:rounded-[28px] md:p-9">
      <p className="flex items-center gap-2.5 text-[13px] font-bold tracking-[.18em] text-slateteal">
        <span className="w-7 h-7 rounded-full bg-pine text-white grid place-items-center text-[14px]">
          ✓
        </span>
        <span>{w.newLabel}</span>
      </p>
      <h3 className="serif text-[30px] md:text-[34px] leading-tight mt-4">
        {w.newTitle}
      </h3>
      <div className="relative mt-7 space-y-5">
        <div className="absolute start-[27px] top-6 bottom-6 w-px bg-pine/15"></div>
        <div className="relative flex gap-4 items-start">
          <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#DCE9E2] border-4 border-white shadow-sm grid place-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0B3B2E"
              strokeWidth="1.8"
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1L3 20l1.1-4.3A8.5 8.5 0 1 1 21 11.5z" />
              <path d="M8.5 11h7M8.5 14h4" />
            </svg>
          </span>
          <div className="flex-1 bg-white rounded-[24px] px-6 py-5 shadow-sm">
            <p className="font-bold text-[16.5px]">{w.new1t}</p>
            <p className="text-ink/55 text-[14.5px] mt-1">{w.new1d}</p>
          </div>
        </div>
        <div className="relative flex gap-4 items-start">
          <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#DCE9E2] border-4 border-white shadow-sm grid place-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0B3B2E"
              strokeWidth="1.8"
              strokeLinejoin="round"
            >
              <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
              <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
            </svg>
          </span>
          <div className="flex-1 bg-white rounded-[24px] px-6 py-5 shadow-sm">
            <p className="font-bold text-[16.5px]">{w.new2t}</p>
            <p className="text-ink/55 text-[14.5px] mt-1">{w.new2d}</p>
          </div>
        </div>
        <div className="relative flex gap-4 items-start">
          <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#DCE9E2] border-4 border-white shadow-sm grid place-items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0B3B2E"
              strokeWidth="1.8"
            >
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <path d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </span>
          <div className="flex-1 bg-white rounded-[24px] px-6 py-5 shadow-sm">
            <p className="font-bold text-[16.5px]">{w.new3t}</p>
            <p className="text-ink/55 text-[14.5px] mt-1">{w.new3d}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
