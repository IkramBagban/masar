import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useLocale } from "../../i18n";
import { Wordmark } from "../brand/Wordmark";
import { LanguageToggle } from "./LanguageToggle";

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

function initialsFor(
  firstName: string | null | undefined,
  lastName: string | null | undefined,
  email: string,
): string {
  const a = firstName?.trim().charAt(0) ?? "";
  const b = lastName?.trim().charAt(0) ?? "";
  if (a || b) return `${a}${b}`.toUpperCase();
  const local = email.split("@")[0] ?? "";
  const clean = local.replace(/[^a-zA-Z]/g, "");
  return (clean.slice(0, 2) || "M").toUpperCase();
}

function HeaderAuth() {
  const { isLoaded, isSignedIn } = useAuth();
  const { t } = useLocale();
  if (!isLoaded || !isSignedIn) return null;
  return <UserChip signOutLabel={t.account.signOut} />;
}

function UserChip({ signOutLabel }: { signOutLabel: string }) {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const email =
    user?.primaryEmailAddress?.emailAddress ??
    user?.emailAddresses[0]?.emailAddress ??
    "";
  const initials = initialsFor(user?.firstName, user?.lastName, email);

  async function handleSignOut() {
    setOpen(false);
    await signOut();
    navigate("/", { replace: true });
  }

  return (
    <div className="relative shrink-0">
      {open && (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setOpen(false)}
        />
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        dir="ltr"
        className="flex cursor-pointer items-center gap-2.5 rounded-full py-1 pe-1 ps-1"
      >
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-[#E6E6E6] text-[14px] font-semibold text-ink"
        >
          {initials}
        </span>
        {email && (
          <span
            dir="ltr"
            className="ltr-isolate hidden max-w-[220px] truncate text-[14.5px] font-medium text-ink/80 xl:block"
          >
            {email}
          </span>
        )}
        <ChevronDown
          aria-hidden="true"
          className={`size-4 shrink-0 text-ink/60 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute end-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(21,33,31,.35)]"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => void handleSignOut()}
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2.5 text-start text-[14px] font-medium text-ink hover:bg-bone"
          >
            <LogOut className="size-4 shrink-0" aria-hidden="true" />
            {signOutLabel}
          </button>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useLocale();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-bone/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-2 px-5 sm:gap-4 sm:px-6 md:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <Wordmark size="nav" />
        </Link>
        <nav className="hidden items-center gap-9 text-[15px] font-medium text-ink/80 lg:flex">
          {isHome && (
            <>
              <Link to="/#how" className="hover:text-ink">
                {t.nav.how}
              </Link>
              <Link to="/#why" className="hover:text-ink">
                {t.nav.why}
              </Link>
              <Link to="/#faq" className="hover:text-ink">
                {t.nav.faq}
              </Link>
            </>
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />
          {clerkEnabled && <HeaderAuth />}
          {isHome && (
            <Link
              to="/#waitlist"
              className="hidden items-center gap-2 rounded-full bg-pill py-3 pl-6 pr-5 text-[15px] font-semibold text-white hover:opacity-90 sm:inline-flex"
            >
              <span>{t.nav.cta}</span>
              <span className="dir-flip" aria-hidden="true">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
      {isHome && (
        <nav
          aria-label="Page sections"
          className="mx-auto flex max-w-[1280px] gap-5 overflow-x-auto border-t border-line/70 px-5 py-2 text-[13px] font-medium text-ink/70 sm:gap-7 sm:px-6 md:px-10 lg:hidden"
        >
          <Link to="/#how" className="shrink-0 hover:text-ink">
            {t.nav.how}
          </Link>
          <Link to="/#why" className="shrink-0 hover:text-ink">
            {t.nav.why}
          </Link>
          <Link to="/#faq" className="shrink-0 hover:text-ink">
            {t.nav.faq}
          </Link>
          <Link to="/#waitlist" className="shrink-0 text-pine hover:text-ink">
            {t.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}
