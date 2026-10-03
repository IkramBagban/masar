import { useHomeStrings } from "./copy";

export function HeroCopy() {
  const { t } = useHomeStrings();

  return (
    <>
      <p className="text-[11px] font-medium tracking-[.18em] text-ink/60 sm:text-[14px] sm:tracking-[.22em]">
        {t.hero.eyebrow}
      </p>
      <h1 className="serif mt-4 text-[clamp(2.65rem,14vw,3.375rem)] font-medium leading-[.98] tracking-[-0.02em] sm:mt-5 md:text-[80px] md:leading-[.95]">
        <span>{t.hero.titleA}</span>
        <br />
        {t.hero.titleB ? <span>{t.hero.titleB}</span> : null}
        <span className="text-slateteal">{t.hero.titleC}</span>
      </h1>
      <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.55] text-ink/75 sm:text-[18px] md:text-[20px] md:leading-[1.6]">
        {t.hero.lede}
      </p>
    </>
  );
}
