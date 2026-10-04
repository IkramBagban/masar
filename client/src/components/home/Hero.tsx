import { Link } from "react-router";
import { useAuth } from "@clerk/clerk-react";
import { useHomeStrings } from "./copy";
import { ChatCard } from "./ChatCard";
import { HeroCopy } from "./HeroCopy";
// import { SymptomForm } from "./SymptomForm";
import { TrustRow } from "./TrustRow";

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

function HeroActions() {
  const { t } = useHomeStrings();
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded || isSignedIn) return null;
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <Link
        to="/#waitlist"
        className="inline-flex items-center gap-2 rounded-full bg-pill py-3 pl-6 pr-5 text-[15px] font-semibold text-white hover:opacity-90"
      >
        <span>{t.nav.cta}</span>
        <span className="dir-flip" aria-hidden="true">
          →
        </span>
      </Link>
      <Link
        to="/sign-in"
        className="inline-flex items-center rounded-full border border-line bg-white/70 px-6 py-3 text-[15px] font-semibold text-ink transition hover:bg-white"
      >
        {t.nav.signIn}
      </Link>
    </div>
  );
}

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
          {/* <SymptomForm /> */}
          {clerkEnabled && <HeroActions />}
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
