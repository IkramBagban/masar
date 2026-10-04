import { CheckIcon } from "../icons";
import { useHomeStrings } from "./copy";

export function StepCard02() {
  const { t } = useHomeStrings();
  const opts = [t.how.opt1, t.how.opt2, t.how.opt3, t.how.opt4];

  return (
    <div className="flex flex-col">
      {/* <span className="inline-grid place-items-center w-12 h-12 rounded-full bg-[#EAF4EE] text-pine border border-line serif text-[17px] font-semibold">
        02
      </span> */}
      <div className="flex items-center gap-3">
        <span className="inline-grid place-items-center w-12 h-12 shrink-0 rounded-full bg-[#EAF4EE] text-pine border border-line serif text-[17px] font-semibold">
          2
        </span>
        <h3 className="step-title serif text-[24px] leading-tight">
          {t.how.card2tA} {t.how.card2tB}
        </h3>
      </div>
      <p className="text-ink/55 text-[15px] leading-relaxed mt-3">
        {t.how.card2d}
      </p>
      <div className="mt-4 flex-1 bg-white border border-line rounded-[24px] p-4 shadow-[0_20px_50px_-30px_rgba(21,33,31,.35)]">
        <div className="flex gap-2.5 items-start">
          <p className="bg-bone/70 rounded-2xl rounded-tl-md px-4 py-3 text-[14px] font-medium">
            {t.how.card2q}
          </p>
        </div>
        <div className="mt-3 space-y-2 text-[14px] font-medium">
          {opts.map((opt, i) =>
            i === 0 ? (
              <div
                key={i}
                className="flex items-center justify-between bg-[#EAF3EC] border border-pine/25 rounded-xl px-4 py-2.5"
              >
                <span>{opt}</span>
                <span className="w-6 h-6 rounded-full bg-pine text-white grid place-items-center">
                  <CheckIcon size={13} />
                </span>
              </div>
            ) : (
              <div
                key={i}
                className="border border-line rounded-xl px-4 py-2.5 text-ink/70"
              >
                {opt}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
