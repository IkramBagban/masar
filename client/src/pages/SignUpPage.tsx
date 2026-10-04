import { SignUp } from "@clerk/clerk-react";
import { AuthLayout, authAppearance } from "../components/auth/AuthLayout";
import { useLocale } from "../i18n";
import { RedirectIfSignedIn } from "./SignInPage";

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
    <AuthLayout mode="sign-up">
      <RedirectIfSignedIn />
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/account"
        appearance={authAppearance}
      />
    </AuthLayout>
  );
}
