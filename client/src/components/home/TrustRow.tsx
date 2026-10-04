import { Languages, LockKeyhole, ShieldCheck } from "lucide-react";
import { useHomeStrings } from "./copy";

export function TrustRow() {
  const { t } = useHomeStrings();

  return (
    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-[14px] leading-tight sm:mt-8 sm:gap-x-10 sm:text-[16px]">
      <span className="flex items-center gap-3">
        <Languages size={26} strokeWidth={1.8} aria-hidden="true" />
        <span className="font-medium">
          <span className="block">{t.hero.trust1a}</span>
          <span className="block">{t.hero.trust1b}</span>
        </span>
      </span>
      <span className="flex items-center gap-3">
        <LockKeyhole size={26} strokeWidth={1.8} aria-hidden="true" />
        <span className="font-medium">
          <span className="block">{t.hero.trust2a}</span>
          <span className="block">{t.hero.trust2b}</span>
        </span>
      </span>
      <span className="flex items-center gap-3">
        <ShieldCheck size={26} strokeWidth={1.8} aria-hidden="true" />
        <span className="font-medium">
          <span className="block">{t.hero.trust3a}</span>
          <span className="block text-ink/60">{t.hero.trust3b}</span>
        </span>
      </span>
    </div>
  );
}
