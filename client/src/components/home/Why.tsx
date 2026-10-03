import { useLocale } from "../../i18n";
import { MasarWay } from "./MasarWay";
import { OldWay } from "./OldWay";

export function Why() {
  const { t } = useLocale();
  const w = t.why;

  return (
    <section id="why" className="mx-auto max-w-[1280px] px-5 pb-8 pt-14 sm:px-6 md:px-10 md:pt-20">
      <div className="max-w-[760px] mx-auto text-center">
        <p className="text-[13px] font-semibold tracking-[.22em] text-slateteal">
          {w.eyebrow}
        </p>
        <h2 className="serif mt-4 text-[clamp(2.25rem,11vw,2.5rem)] font-medium leading-[1.05] md:text-[60px]">
          <span>{w.titleA}</span>
          <br />
          <span className="text-slateteal">{w.titleB}</span>
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/55 sm:text-[16.5px] md:text-[18px]">
          <span>{w.ledeA}</span>
          <br />
          <span>{w.ledeB}</span>
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1180px] items-stretch gap-4 sm:mt-10 lg:grid-cols-[1fr_auto_1fr]">
        <OldWay />
        <div className="grid place-items-center">
          <span
            aria-hidden="true"
            className="why-arrow w-14 h-14 rounded-full bg-pine text-white grid place-items-center text-[22px] shadow-lg rotate-90 lg:rotate-0"
          >
            →
          </span>
        </div>
        <MasarWay />
      </div>
    </section>
  );
}
