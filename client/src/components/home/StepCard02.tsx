import { CheckIcon } from "../icons";
import { useHomeStrings } from "./copy";

export function StepCard02() {
  const { t } = useHomeStrings();
  const opts = [t.how.opt1, t.how.opt2, t.how.opt3, t.how.opt4];

  return (
    <div className="flex flex-col">
      <span className="inline-grid place-items-center w-12 h-12 rounded-full bg-[#EAF4EE] text-pine border border-line serif text-[17px] font-semibold">
        02
      </span>
      <div className="mt-3 flex-1 bg-white border border-line rounded-[24px] p-4 shadow-[0_20px_50px_-30px_rgba(21,33,31,.35)]">
        <div className="flex gap-2.5 items-start">
          <svg
            width="24"
            height="19"
            viewBox="0 0 34 26"
            className="shrink-0 mt-1"
          >
            <path
              d="M2 24C2 12 8 4 17 4S32 12 32 24"
              stroke="#0E7A5F"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path d="M10 24C10 15 13 9 17 9s7 6 7 15" fill="#15211F" />
          </svg>
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
      <h3 className="step-title serif text-[30px] leading-tight mt-6 md:min-h-[74px]">
        {t.how.card2tA} {t.how.card2tB}
      </h3>
      <p className="text-ink/55 text-[15px] leading-relaxed mt-2 md:min-h-[72px]">
        {t.how.card2d}
      </p>
    </div>
  );
}
