import { useHomeStrings } from "./copy";
import { StepCard01 } from "./StepCard01";
import { StepCard02 } from "./StepCard02";
import { StepCard03 } from "./StepCard03";

export function How() {
  const { t } = useHomeStrings();

  return (
    <section id="how">
      <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 text-center pt-16 pb-16">
        <p className="text-[12.5px] font-semibold tracking-[.22em] text-muted">
          {t.how.eyebrow}
        </p>
        <h2 className="serif text-[34px] md:text-[52px] leading-[1.15] mt-4">
          <span>{t.how.titleA}</span>
          <br />
          {t.how.titleB ? <span>{t.how.titleB}</span> : null}
          <span className="text-slateteal">{t.how.titleC}</span>
        </h2>
        <p className="text-ink/55 text-[16.5px] mt-4 max-w-[62ch] mx-auto">
          {t.how.lede}
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left items-stretch">
          <StepCard01 />
          <StepCard02 />
          <StepCard03 />
        </div>
      </div>
    </section>
  );
}
