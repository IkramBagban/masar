import { useHomeStrings } from "./copy";
import { StepCard01 } from "./StepCard01";
import { StepCard02 } from "./StepCard02";
import { StepCard03 } from "./StepCard03";

export function How() {
  const { t } = useHomeStrings();

  return (
    <section id="how">
      <div className="zoom-95 relative mx-auto max-w-[1280px] scroll-mt-24 px-5 pb-12 pt-12 text-center sm:px-8 md:px-12 md:pb-14 md:pt-14">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[12.5px] font-semibold tracking-[.22em] text-muted">
            {t.how.eyebrow}
          </p>
          <h2 className="serif mt-4 text-[clamp(2rem,10vw,2.125rem)] leading-[1.15] md:text-[44px]">
            <span>{t.how.titleA}</span>
            <br />
            {t.how.titleB ? <span>{t.how.titleB}</span> : null}
            <span className="text-slateteal">{t.how.titleC}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] text-[15px] text-ink/55 sm:text-[16.5px]">
            {t.how.lede}
          </p>

          <div className="mt-8 grid items-stretch gap-8 text-start md:mt-10 md:grid-cols-3 md:gap-8">
            <StepCard01 />
            <StepCard02 />
            <StepCard03 />
          </div>
        </div>
      </div>
    </section>
  );
}
