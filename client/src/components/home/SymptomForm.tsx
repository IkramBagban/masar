import { useEffect, useRef, useState, type FormEvent } from "react";
import { useHomeStrings } from "./copy";

export function SymptomForm() {
  const { t } = useHomeStrings();
  const [value, setValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    },
    [],
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    const btn = btnRef.current;
    if (btn) {
      btn.classList.remove("nudging");
      void btn.offsetWidth;
      btn.classList.add("nudging");
    }
    if (form) {
      form.classList.remove("flash");
      void form.offsetWidth;
      form.classList.add("flash");
    }
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      btn?.classList.remove("nudging");
      form?.classList.remove("flash");
    }, 500);
  }

  const chips = [t.hero.chip1, t.hero.chip2, t.hero.chip3, t.hero.chip4];
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="mt-7 rounded-[24px] border border-white/70 bg-white/70 p-2 shadow-[0_16px_40px_-24px_rgba(21,33,31,.22)] backdrop-blur-md sm:mt-8 sm:rounded-[28px] sm:p-3">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-[18px] border border-black/5 bg-white py-2 pl-2 pr-2 transition-shadow focus-within:border-pine/30 focus-within:shadow-[0_0_0_4px_rgba(14,122,95,.12)] sm:gap-3 sm:rounded-[20px] sm:pl-3"
      >
        <span className="w-11 h-11 rounded-full bg-bone grid place-items-center shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10v4" />
          </svg>
        </span>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setPicked(null);
          }}
          placeholder={t.hero.inputPh}
          aria-label={t.hero.inputPh}
          className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-ink/40 sm:text-[18px]"
        />
        <button
          ref={btnRef}
          type="submit"
          className="dir-flip grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pine text-[20px] text-white transition hover:opacity-90 active:scale-95 sm:h-12 sm:w-12"
        >
          →
        </button>
      </form>
      <div className="mt-2.5 flex flex-wrap gap-1.5 px-1 pb-1 sm:gap-2">
        {chips.map((chip, i) => {
          const active = picked === i;
          return (
            <button
              key={chip}
              type="button"
              onClick={() => {
                setValue(chip);
                setPicked(i);
              }}
              aria-pressed={active}
              className={`rounded-full border px-3 py-2 text-[13px] font-medium transition hover:border-pine/40 sm:px-4 sm:text-[15px] ${
                active
                  ? "border-[#DCE9E2] bg-[#DCE9E2] font-semibold text-ink"
                  : "border-black/5 bg-white"
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>
    </div>
  );
}
