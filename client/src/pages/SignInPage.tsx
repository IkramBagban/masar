import { SignIn, useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import { AuthLayout, authAppearance } from "../components/auth/AuthLayout";
import { useLocale } from "../i18n";

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

export function RedirectIfSignedIn() {
  const { isLoaded, isSignedIn } = useAuth();
  if (isLoaded && isSignedIn) {
    return <Navigate to="/account" replace />;
  }
  return null;
}

export function SignInPage() {
  const { t } = useLocale();

  if (!clerkEnabled) {
    return (
      <div className="frame py-24">
        <p className="max-w-md text-start text-ink">{t.account.authMissing}</p>
      </div>
    );
  }

  return (
    <AuthLayout mode="sign-in">
      <RedirectIfSignedIn />
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/account"
        appearance={authAppearance}
      />
    </AuthLayout>
  );
}
