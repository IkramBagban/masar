import type { ReactNode } from "react";
import { CalendarDays, Clock, FileText } from "lucide-react";
import { useLocale } from "../../i18n";

type AuthLayoutProps = {
  mode: "sign-in" | "sign-up";
  children: ReactNode;
};

const clerkAppearance = {
  variables: {
    colorPrimary: "#0b3b2e",
    colorText: "#15211f",
    colorBackground: "#ffffff",
    borderRadius: "18px",
    fontFamily: "Outfit, Segoe UI, sans-serif",
  },
  elements: {
    cardBox: "shadow-none border border-line rounded-[26px]",
    card: "shadow-none",
    footer: "bg-[#FAFCFA]",
  },
} as const;

export const authAppearance = clerkAppearance;

export function AuthLayout({ mode, children }: AuthLayoutProps) {
  const { t } = useLocale();
  const a = t.auth;
  const title = mode === "sign-in" ? a.signInTitle : a.signUpTitle;
  const lede = mode === "sign-in" ? a.signInLede : a.signUpLede;
  const points = [
    { icon: FileText, t: a.p1t, d: a.p1d },
    { icon: Clock, t: a.p2t, d: a.p2d },
    { icon: CalendarDays, t: a.p3t, d: a.p3d },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-[1280px] items-start gap-10 px-5 pb-16 pt-10 sm:px-6 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-[1.05fr_minmax(0,27rem)] lg:gap-12">
        <section className="min-w-0 pt-2 md:pt-6">
          <p className="text-start text-[13px] font-semibold tracking-[.28em] text-ink/50">
            {a.eyebrow}
          </p>
          <h1 className="serif mt-4 max-w-[16ch] text-start text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] text-ink">
            {title}
          </h1>
          <p className="mt-5 max-w-[46ch] text-start text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
            {lede}
          </p>
          <ul className="mt-10 space-y-6">
            {points.map((point) => (
              <li key={point.t} className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#EAF4EE] text-pine">
                  <point.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 pt-0.5">
                  <span className="block text-start text-[15.5px] font-semibold text-ink">
                    {point.t}
                  </span>
                  <span className="mt-0.5 block text-start text-[14.5px] text-ink/60">
                    {point.d}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <div className="auth-card min-w-0 justify-self-stretch lg:justify-self-end">
          {children}
        </div>
      </div>
    </div>
  );
}
