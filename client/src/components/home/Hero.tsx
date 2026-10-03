import { useHomeStrings } from "./copy";
import { ChatCard } from "./ChatCard";
import { HeroCopy } from "./HeroCopy";
import { SymptomForm } from "./SymptomForm";
import { TrustRow } from "./TrustRow";

export function Hero() {
  const { locale } = useHomeStrings();

  return (
    <section className="relative overflow-hidden">
      {/* bg image full-bleed */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          <img
            src={
              locale === "ar"
                ? "/assets/hero-bg-ar.png"
                : "/assets/hero-bg.png"
            }
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-blend"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bone to-transparent"></div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-start gap-10 px-5 pb-10 pt-6 sm:px-6 md:px-10 md:pb-12 md:pt-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-8">
        {/* LEFT */}
        <div className="w-full min-w-0 max-w-[600px]">
          <HeroCopy />
          <SymptomForm />
          <TrustRow />
        </div>

        {/* RIGHT : compact chat card */}
        <div className="relative w-full min-w-0 max-w-[460px] justify-self-center lg:justify-self-end">
          <ChatCard />
        </div>
      </div>
    </section>
  );
}
