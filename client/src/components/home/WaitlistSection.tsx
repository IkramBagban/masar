import { useLocale } from "../../i18n";
import { WaitlistForm } from "../waitlist/WaitlistForm";

export function WaitlistSection() {
  const { t } = useLocale();
  const w = t.wait;

  return (
    <section
      id="waitlist"
      className="mx-auto max-w-[1280px] scroll-mt-15 border-t border-line px-5 py-14 sm:px-6 md:px-10 md:py-24"
    >
      <div className="max-w-[760px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-[#EAF4EE] text-pine text-[12.5px] font-semibold px-4 py-1.5 rounded-full border border-pine/20 mb-3 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{w.badge}</span>
        </span>
        <h2 className="serif mt-3 text-[clamp(2.25rem,11vw,2.5rem)] font-medium leading-[1.05] text-ink md:text-[56px]">
          <span>{w.titleA}</span>
          <br />
          <span className="text-slateteal">{w.titleB}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[50ch] text-[15px] leading-relaxed text-ink/60 sm:text-[16.5px] md:text-[18px]">
          {w.lede}
        </p>

        <WaitlistForm />
      </div>
    </section>
  );
}
