import { useClerk } from "@clerk/clerk-react";
import { LogOut, UserRound } from "lucide-react";
import { useNavigate } from "react-router";
import { useLocale } from "../../i18n";

type AccountCardProps = {
  email: string;
  signedUpAt: string;
};

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
    <section
      aria-labelledby="account-heading"
      className="max-w-xl rounded-3xl border border-line bg-white p-8"
    >
      <div className="flex items-center gap-2">
        <UserRound className="size-5 text-slate" aria-hidden="true" />
        <h1
          id="account-heading"
          className="font-display text-start text-2xl text-ink"
        >
          {t.account.title}
        </h1>
      </div>
      <dl className="mt-6 space-y-4">
        <div>
          <dt className="text-start text-sm text-ink">
            {t.account.emailLabel}
          </dt>
          <dd
            dir="ltr"
            className="email-value ltr-isolate mt-1 text-start text-ink"
          >
            {email}
          </dd>
        </div>
        <div>
          <dt className="text-start text-sm text-ink">
            {t.account.signedUpLabel}
          </dt>
          <dd className="mt-1 text-start text-ink">{formatted}</dd>
        </div>
      </dl>
      <button
        type="button"
        onClick={() => void handleSignOut()}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-bone px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-pine/40"
      >
        <LogOut className="size-4" aria-hidden="true" />
        {t.account.signOut}
      </button>
    </section>
  );
}
