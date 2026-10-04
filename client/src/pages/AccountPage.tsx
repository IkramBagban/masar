import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { AccountCard } from "../components/account/AccountCard";
import { useLocale } from "../i18n";
import { fetchAccount } from "../lib/api";

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

export function AccountPage() {
  if (!clerkEnabled) {
    return <ClerkMissing />;
  }
  return <AccountGate />;
}

function ClerkMissing() {
  const { t } = useLocale();
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-6 md:px-10">
      <p className="max-w-md text-start text-ink">{t.account.authMissing}</p>
    </div>
  );
}

function AccountGate() {
  const { isLoaded, isSignedIn } = useAuth();
  const { t } = useLocale();

  if (!isLoaded) {
    return (
      <p
        className="mx-auto w-full max-w-[1280px] px-5 py-24 text-start text-ink sm:px-6 md:px-10"
        role="status"
      >
        {t.account.loading}
      </p>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <AccountData />;
}

function AccountData() {
  const { getToken } = useAuth();
  const { t } = useLocale();

  const account = useQuery({
    queryKey: ["account"],
    queryFn: async () => {
      const token = await getToken();
      if (!token) {
        throw new Error(t.account.error);
      }
      return fetchAccount(token);
    },
  });

  if (account.isPending) {
    return (
      <p
        className="mx-auto w-full max-w-[1280px] px-5 py-24 text-start text-ink sm:px-6 md:px-10"
        role="status"
      >
        {t.account.loading}
      </p>
    );
  }

  if (account.isError) {
    return (
      <p
        className="mx-auto w-full max-w-[1280px] px-5 py-24 text-start text-slate sm:px-6 md:px-10"
        role="alert"
      >
        {account.error.message}
      </p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-6 md:px-10 md:py-14">
      <AccountCard
        email={account.data.email}
        signedUpAt={account.data.signedUpAt}
      />
    </div>
  );
}
