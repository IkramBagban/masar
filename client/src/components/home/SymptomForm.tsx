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

  return (
    <div className="mt-8 bg-white/70 backdrop-blur-md rounded-[28px] p-3 shadow-[0_20px_60px_-24px_rgba(21,33,31,.25)] border border-white/70">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white rounded-[20px] border border-black/5 shadow-sm flex items-center gap-3 pl-3 pr-2 py-2"
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
          >
            <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10v4" />
          </svg>
        </span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t.hero.inputPh}
          className="flex-1 bg-transparent text-[18px] outline-none placeholder:text-ink/40 min-w-0"
        />
        <button
          ref={btnRef}
          type="submit"
          className="dir-flip w-12 h-12 shrink-0 rounded-full bg-pine text-white grid place-items-center text-[20px] hover:opacity-90 active:scale-95 transition"
        >
          →
        </button>
      </form>
      <div className="flex flex-wrap gap-2 mt-2.5 px-1 pb-1">
        {chips.map((chip, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setValue(chip)}
            className="px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-[15px] font-medium hover:border-pine/40 transition"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
