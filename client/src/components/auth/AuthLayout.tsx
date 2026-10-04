import type { ReactNode } from "react";
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
    { t: a.p1t, d: a.p1d },
    { t: a.p2t, d: a.p2d },
    { t: a.p3t, d: a.p3d },
  ];

  return (
    <div className="frame py-10 md:py-16">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-12">
        <section className="min-w-0 rounded-[28px] border border-line bg-[#FAFCFA] p-6 sm:p-8 md:p-10">
          <p className="text-[12.5px] font-semibold tracking-[.22em] text-muted">
            {a.eyebrow}
          </p>
          <h1 className="serif mt-3 text-start text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-ink">
            {title}
          </h1>
          <p className="mt-3 max-w-[52ch] text-start text-[15px] leading-relaxed text-ink/60">
            {lede}
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li
                key={point.t}
                className="flex items-start gap-3 rounded-2xl border border-line bg-white px-4 py-3.5"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-2 shrink-0 rounded-full bg-pine"
                />
                <span className="min-w-0">
                  <span className="block text-start text-[14.5px] font-semibold text-ink">
                    {point.t}
                  </span>
                  <span className="block text-start text-[13.5px] text-ink/60">
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
