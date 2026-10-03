import { SignUp } from "@clerk/clerk-react";
import { useLocale } from "../i18n";

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

export function SignUpPage() {
  const { t } = useLocale();

  if (!clerkEnabled) {
    return (
      <div className="frame py-24">
        <p className="max-w-md text-start text-ink">{t.account.authMissing}</p>
      </div>
    );
  }

  return (
    <div className="frame clerk-slot">
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/account"
      />
    </div>
  );
}
