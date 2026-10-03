import { useLocale } from "../../i18n";
import { WaitlistForm } from "../waitlist/WaitlistForm";

export function WaitlistSection() {
  const { t } = useLocale();
  const w = t.wait;

  return (
    <section
      id="waitlist"
      className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-line"
    >
      <div className="max-w-[760px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-[#EAF4EE] text-pine text-[12.5px] font-semibold px-4 py-1.5 rounded-full border border-pine/20 mb-3 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{w.badge}</span>
        </span>
        <h2 className="serif font-medium text-[40px] md:text-[56px] leading-[1.05] mt-3 text-ink">
          <span>{w.titleA}</span>
          <br />
          <span className="text-slateteal">{w.titleB}</span>
        </h2>
        <p className="text-ink/60 text-[16.5px] md:text-[18px] leading-relaxed mt-4 max-w-[50ch] mx-auto">
          {w.lede}
        </p>

        <WaitlistForm />
      </div>
    </section>
  );
}
