import { useHomeStrings } from "./copy";

export function HeroCopy() {
  const { t } = useHomeStrings();

  return (
    <>
      <p className="text-[14px] font-medium tracking-[.22em] text-ink/60">
        {t.hero.eyebrow}
      </p>
      <h1 className="serif font-medium text-[54px] md:text-[80px] leading-[.95] tracking-[-0.02em] mt-5">
        <span>{t.hero.titleA}</span>
        <br />
        {t.hero.titleB ? <span>{t.hero.titleB}</span> : null}
        <span className="text-slateteal">{t.hero.titleC}</span>
      </h1>
      <p className="mt-5 text-[18px] md:text-[20px] leading-[1.6] text-ink/75 max-w-[48ch]">
        {t.hero.lede}
      </p>
    </>
  );
}
