import { useLocale } from "../../i18n";

// WHY as editorial rows in two columns: fears left, steps right.
// Compact by design — the whole section fits a laptop viewport.
export function Why() {
  const { t } = useLocale();
  const w = t.why;
  const fears = [
    [w.old1q, w.old1a],
    [w.old2q, w.old2a],
    [w.old3q, w.old3a],
    [w.old4q, w.old4a],
  ];
  const steps = [
    [w.new1t, w.new1d],
    [w.new2t, w.new2d],
    [w.new3t, w.new3d],
  ];

  return (
    <section id="why" className="scroll-mt-24 px-3 py-4 sm:px-5 md:py-8">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[720px]">
            <p className="text-[12px] font-semibold tracking-[.22em] text-slateteal">
              {w.eyebrow}
            </p>
            <h2 className="serif mt-3 text-[30px] font-medium leading-[1.05] text-ink md:text-[40px]">
              <span>{w.titleA} </span>
              <span className="text-slateteal">{w.titleB}</span>
            </h2>
            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink/55 md:text-[16px]">
              {w.ledeA} {w.ledeB}
            </p>
          </div>

          <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-[12px] font-bold tracking-[.2em] text-ink/40">
                <span
                  aria-hidden="true"
                  className="grid h-6 w-6 place-items-center rounded-full bg-red-100 text-[12px] font-bold text-red-600"
                >
                  ✕
                </span>
                <span>{w.oldLabel}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </p>
              <h3 className="serif mt-3 text-[22px] font-medium leading-tight text-ink/80 md:text-[24px]">
                {w.oldTitle}
              </h3>

              <ol className="mt-2 divide-y divide-line border-b border-line">
                {fears.map(([question, snippet], index) => (
                  <li
                    key={question}
                    className="grid items-baseline gap-1 py-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="serif text-[14px] font-semibold tracking-[.1em] text-ink/30"
                    >
                      0{index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="serif text-[18px] font-medium leading-snug text-ink/75 md:text-[19px]">
                        {question}
                      </p>
                      <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink/45">
                        {snippet}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="min-w-0 lg:border-s lg:border-line lg:ps-12">
              <p className="flex items-center gap-3 text-[12px] font-bold tracking-[.2em] text-slateteal">
                <span
                  aria-hidden="true"
                  className="grid h-6 w-6 place-items-center rounded-full bg-pine text-[12px] text-white"
                >
                  ✓
                </span>
                <span>{w.newLabel}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-pine/20" />
              </p>
              <h3 className="serif mt-3 text-[22px] font-medium leading-tight text-ink md:text-[24px]">
                {w.newTitle}
              </h3>

              <ol className="mt-2 divide-y divide-line border-b border-line">
                {steps.map(([title, detail], index) => (
                  <li
                    key={title}
                    className="grid items-baseline gap-1 py-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="serif text-[14px] font-semibold tracking-[.1em] text-slateteal"
                    >
                      0{index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[16px] font-bold leading-snug text-ink">
                        {title}
                      </p>
                      <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink/55">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
