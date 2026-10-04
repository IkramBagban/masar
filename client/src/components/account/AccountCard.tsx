import { useClerk } from "@clerk/clerk-react";
import { ArrowRight, CalendarDays, LogOut, Mail, Sprout } from "lucide-react";
import { useNavigate } from "react-router";
import { useLocale } from "../../i18n";

type AccountCardProps = {
  email: string;
  signedUpAt: string;
};

function displayName(email: string): string {
  const local = email.split("@")[0] ?? "";
  const first = local.split(/[._-]+/).filter(Boolean)[0] ?? local;
  if (!first) return email;
  return first.charAt(0).toUpperCase() + first.slice(1);
}

export function AccountCard({ email, signedUpAt }: AccountCardProps) {
  const { locale, t } = useLocale();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
  }).format(new Date(signedUpAt));

  async function handleSignOut() {
    await signOut();
    navigate("/", { replace: true });
  }

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
      <section aria-labelledby="welcome-heading" className="min-w-0">
        <p className="text-start text-[13px] font-semibold tracking-[.28em] text-ink/50">
          {t.account.welcomeEyebrow}
        </p>
        <h1
          id="welcome-heading"
          className="serif mt-3 text-start text-[clamp(2.75rem,7vw,4.5rem)] leading-none text-ink"
        >
          {displayName(email)}.
        </h1>
        <p className="mt-5 max-w-[52ch] text-start text-[17px] leading-relaxed text-ink/60 sm:text-[19px]">
          {t.account.welcomeLede}
        </p>

        <div className="mt-8 flex items-center gap-5 rounded-[24px] bg-[#F4F8F5] p-5 sm:p-6">
          <div className="min-w-0 flex-1">
            <span className="grid size-12 place-items-center rounded-2xl bg-[#E4EFE7] text-pine">
              <Sprout className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-4 text-start text-[16px] font-semibold text-ink">
              {t.account.clearerTitle}
            </p>
            <p className="mt-1.5 text-start text-[14.5px] leading-relaxed text-ink/60">
              {t.account.clearerLede}
            </p>
          </div>
          <img
            src={
              locale === "ar"
                ? "/assets/clearer-ar.png"
                : "/assets/clearer-en.png"
            }
            alt=""
            aria-hidden="true"
            className="w-32 shrink-0 self-stretch rounded-2xl object-cover sm:w-44"
          />
        </div>
      </section>

      <section
        aria-labelledby="account-heading"
        className="min-w-0 rounded-[24px] border border-line bg-white p-6 sm:p-8"
      >
        <h2
          id="account-heading"
          className="serif text-start text-[28px] text-ink"
        >
          {t.account.title}
        </h2>
        <p className="mt-1.5 text-start text-[15px] text-ink/55">
          {t.account.cardSub}
        </p>

        <div className="mt-6 border-t border-line">
          <div className="flex items-center gap-4 border-b border-line py-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#EAF4EE] text-pine">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-start text-[14px] text-ink/55">
                {t.account.emailLabel}
              </span>
              <span
                dir="ltr"
                className="email-value ltr-isolate block text-start text-[16px] font-medium text-ink"
              >
                {email}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4 border-b border-line py-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#EAF4EE] text-pine">
              <CalendarDays className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-start text-[14px] text-ink/55">
                {t.account.signedUpLabel}
              </span>
              <span className="block text-start text-[16px] font-medium text-ink">
                {formatted}
              </span>
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => void handleSignOut()}
          className="dir-flip-group mt-6 flex w-full items-center gap-3 rounded-2xl bg-[#F5F7F6] px-5 py-4 text-start text-[15px] font-medium text-ink transition hover:bg-[#EAF0ED]"
        >
          <LogOut className="size-5 shrink-0" aria-hidden="true" />
          <span className="flex-1">{t.account.signOut}</span>
          <ArrowRight
            className="dir-flip size-4 shrink-0"
            aria-hidden="true"
          />
        </button>
      </section>
    </div>
  );
}
