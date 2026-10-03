import { useLocale } from "../../i18n";
import { MasarWay } from "./MasarWay";
import { OldWay } from "./OldWay";

export function Why() {
  const { t } = useLocale();
  const w = t.why;

  return (
    <section id="why" className="max-w-[1280px] mx-auto px-6 md:px-10 pt-20 pb-8">
      <div className="max-w-[760px] mx-auto text-center">
        <p className="text-[13px] font-semibold tracking-[.22em] text-slateteal">
          {w.eyebrow}
        </p>
        <h2 className="serif font-medium text-[40px] md:text-[60px] leading-[1.05] mt-4">
          <span>{w.titleA}</span>
          <br />
          <span className="text-slateteal">{w.titleB}</span>
        </h2>
        <p className="text-ink/55 text-[16.5px] md:text-[18px] leading-relaxed mt-5">
          <span>{w.ledeA}</span>
          <br />
          <span>{w.ledeB}</span>
        </p>
      </div>

      <div className="mt-10 grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-stretch max-w-[1180px] mx-auto">
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
