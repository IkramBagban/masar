import { useState } from "react";
import { useLocale } from "../../i18n";
import { PlusIcon } from "../icons";

export function Faq() {
  const { t } = useLocale();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: f.q1, a: f.a1 },
    { q: f.q2, a: f.a2 },
    { q: f.q3, a: f.a3 },
    { q: f.q4, a: f.a4 },
    { q: f.q5, a: f.a5 },
  ];

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="mx-auto max-w-[1280px] scroll-mt-24 border-t border-line px-5 py-14 sm:px-6 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-[1180px] items-start gap-8 md:gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-[13px] font-semibold tracking-[.22em] text-slateteal">
            {f.eyebrow}
          </p>
          <h2 className="serif mt-4 text-[clamp(2.25rem,11vw,2.375rem)] font-medium leading-[1.08] text-ink md:text-[52px]">
            <span>{f.titleA}</span>
            <br />
            <span className="text-slateteal">{f.titleB}</span>
          </h2>
          <p className="text-ink/60 text-[16.5px] leading-relaxed mt-4 max-w-[42ch]">
            {f.lede}
          </p>

          <div className="mt-8 p-5 bg-[#EAF4EE] border border-pine/20 rounded-[22px]">
            <div className="flex items-center gap-2.5 text-[13.5px] font-bold text-pine">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{f.emergT}</span>
            </div>
            <p className="text-ink/70 text-[13.5px] mt-2 leading-relaxed">
              {f.emergD}
            </p>
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <details
                key={item.q}
                className="py-5 group"
                open={open}
                onToggle={(e) => {
                  // Keep single-open behaviour in sync with state.
                  if (e.currentTarget.open && !open) setOpenIndex(i);
                  if (!e.currentTarget.open && open) setOpenIndex(null);
                }}
              >
                <summary
                  className="flex justify-between items-center font-medium text-[17px] text-ink cursor-pointer gap-4"
                  onClick={(e) => {
                    // Controlled toggle: prevent native double-toggle race,
                    // drive open state ourselves for single-open.
                    e.preventDefault();
                    toggle(i);
                  }}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`plus-icon w-8 h-8 rounded-full grid place-items-center shrink-0 transition-transform duration-200 ${
                      open
                        ? "bg-pine text-white rotate-45"
                        : "bg-[#EAF4EE] text-pine"
                    }`}
                  >
                    <PlusIcon size={16} />
                  </span>
                </summary>
                <p className="text-ink/60 text-[15px] mt-3 leading-relaxed">
                  {item.a}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
