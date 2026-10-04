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

function AccountSkeleton() {
  const { t } = useLocale();
  return (
    <div
      className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-6 md:px-10 md:py-14"
      role="status"
      aria-label={t.account.loading}
    >
      <div className="grid animate-pulse items-start gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
        <section className="min-w-0">
          <div className="h-3 w-40 rounded-full bg-ink/10" />
          <div className="mt-4 h-14 w-3/4 rounded-2xl bg-ink/10" />
          <div className="mt-5 space-y-2.5">
            <div className="h-4 w-full rounded-full bg-ink/10" />
            <div className="h-4 w-5/6 rounded-full bg-ink/10" />
          </div>
          <div className="mt-8 h-44 rounded-[24px] bg-ink/10" />
        </section>
        <section className="min-w-0 rounded-[24px] border border-line bg-white p-6 sm:p-8">
          <div className="h-7 w-48 rounded-full bg-ink/10" />
          <div className="mt-2 h-4 w-64 rounded-full bg-ink/10" />
          <div className="mt-6 space-y-4 border-t border-line pt-6">
            <div className="flex items-center gap-4">
              <div className="size-12 shrink-0 rounded-2xl bg-ink/10" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-24 rounded-full bg-ink/10" />
                <div className="h-4 w-48 rounded-full bg-ink/10" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12 shrink-0 rounded-2xl bg-ink/10" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-24 rounded-full bg-ink/10" />
                <div className="h-4 w-36 rounded-full bg-ink/10" />
              </div>
            </div>
          </div>
          <div className="mt-6 h-14 w-full rounded-2xl bg-ink/10" />
        </section>
      </div>
    </div>
  );
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

  if (!isLoaded) {
    return <AccountSkeleton />;
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
    return <AccountSkeleton />;
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
