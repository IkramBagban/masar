import { useHomeStrings } from "./copy";

function MasarAvatar({ size = 22 }: { size?: number }) {
  return (
    <img
      src="/assets/logo.png"
      width={size}
      height={Math.round(size / 1.29)}
      alt=""
      aria-hidden="true"
      className="object-contain"
    />
  );
}

function UserAvatar() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function ChatCard() {
  const { t } = useHomeStrings();

  return (
    <div
      className="stage chat-card bg-white/95 backdrop-blur-xl rounded-[26px] shadow-[0_28px_60px_-28px_rgba(21,33,31,.35)] border border-white/70 overflow-hidden"
      style={{ animationDelay: ".15s" }}
    >
      <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5">
        <span className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-white border border-black/5 shadow-sm grid place-items-center shrink-0">
            <MasarAvatar size={24} />
          </span>
          <span>
            <span className="flex items-center gap-1.5 font-semibold text-[14.5px] leading-none">
              Masār AI <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="block text-[12px] text-ink/50 mt-1">
              {t.chat.guide}
            </span>
          </span>
        </span>
      </div>
      <div className="px-3.5 pb-3.5 pt-1 space-y-2">
        {/* 1 user */}
        <div className="flex gap-2 justify-end items-start">
          <div className="bg-[#EEF5F0] rounded-[16px] rounded-tr-[6px] px-3.5 py-2.5 text-[13.5px] leading-snug max-w-[90%]">
            <span>{t.chat.u1}</span>
            <div className="text-right text-[10.5px] text-ink/40 mt-1">
              10:24 AM
            </div>
          </div>
          <span className="w-7 h-7 rounded-full bg-white border border-black/5 shadow-sm grid place-items-center shrink-0">
            <UserAvatar />
          </span>
        </div>
        {/* 2 assistant plain, no options */}
        <div className="flex gap-2 items-start">
          <span className="w-7 h-7 rounded-full bg-white border border-black/5 shadow-sm grid place-items-center shrink-0">
            <MasarAvatar />
          </span>
          <div className="bg-white border border-black/5 shadow-sm rounded-[16px] rounded-tl-[6px] px-3.5 py-2.5 text-[13.5px] leading-snug max-w-[92%]">
            <span>{t.chat.a1a}</span>
            <div className="mt-2">
              <span>{t.chat.a1b}</span>
            </div>
            <div className="text-right text-[10.5px] text-ink/40 mt-1">
              10:24 AM
            </div>
          </div>
        </div>
        {/* user */}
        <div className="flex gap-2 justify-end items-start">
          <div className="bg-[#EEF5F0] rounded-[16px] rounded-tr-[6px] px-3.5 py-2.5 text-[13.5px] leading-snug max-w-[90%]">
            <span>{t.chat.u2}</span>
            <div className="text-right text-[10.5px] text-ink/40 mt-1">
              10:25 AM
            </div>
          </div>
          <span className="w-7 h-7 rounded-full bg-white border border-black/5 shadow-sm grid place-items-center shrink-0">
            <UserAvatar />
          </span>
        </div>
        {/* 3 assistant with single-select chips */}
        <div className="flex gap-2 items-start">
          <span className="w-7 h-7 rounded-full bg-white border border-black/5 shadow-sm grid place-items-center shrink-0">
            <MasarAvatar />
          </span>
          <div className="bg-white border border-black/5 shadow-sm rounded-[16px] rounded-tl-[6px] px-3.5 py-2.5 text-[13.5px] leading-snug max-w-[92%]">
            <span>{t.chat.a2}</span>
            <div className="text-right text-[10.5px] text-ink/40 mt-1.5">
              10:25 AM
            </div>
          </div>
        </div>
        {/* user */}
        <div className="flex gap-2 justify-end items-start">
          <div className="bg-[#EEF5F0] rounded-[16px] rounded-tr-[6px] px-3.5 py-2.5 text-[13.5px] leading-snug max-w-[90%]">
            <span>{t.chat.u3}</span>
            <div className="text-right text-[10.5px] text-ink/40 mt-1">
              10:26 AM
            </div>
          </div>
        </div>
        {/* 4 assistant multi-select */}
        <div className="flex gap-2 items-start">
          <span className="w-7 h-7 rounded-full bg-white border border-black/5 shadow-sm grid place-items-center shrink-0">
            <MasarAvatar />
          </span>
          <div className="bg-white border border-black/5 shadow-sm rounded-[16px] rounded-tl-[6px] px-3.5 py-2.5 text-[13.5px] leading-snug max-w-[92%]">
            <span>{t.chat.a3}</span>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              <span className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-[12.5px]">
                {t.chat.opt1}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#DCE9E2] border border-[#DCE9E2] text-[12.5px] font-medium">
                {t.chat.opt2}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#DCE9E2] border border-[#DCE9E2] text-[12.5px] font-medium">
                {t.chat.opt3}
              </span>
            </div>
            <div className="text-right text-[10.5px] text-ink/40 mt-1.5">
              10:26 AM
            </div>
          </div>
        </div>
      </div>
      {/* input + send */}
      <div className="px-3.5 pb-3.5">
        <div className="bg-white border border-black/5 shadow-sm rounded-full flex items-center gap-2 pl-4 pr-1.5 py-1.5">
          <input
            disabled
            placeholder={t.chat.inputPh}
            className="flex-1 bg-transparent text-[13.5px] outline-none placeholder:text-ink/35 min-w-0"
          />
          <button
            type="button"
            aria-label="Send"
            className="w-9 h-9 rounded-full bg-pine text-white grid place-items-center shrink-0 hover:opacity-90 active:scale-95 transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
