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

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-6 md:pt-10 pb-8 grid lg:grid-cols-[1.05fr_.95fr] gap-8 items-center">
        {/* LEFT */}
        <div className="max-w-[600px]">
          <HeroCopy />
          <SymptomForm />
          <TrustRow />
        </div>

        {/* RIGHT : compact chat card */}
        <div className="relative w-full max-w-[460px] justify-self-center lg:justify-self-end">
          <ChatCard />
        </div>
      </div>
    </section>
  );
}
