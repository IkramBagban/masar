import { Link } from "react-router";
import { useAuth } from "@clerk/clerk-react";
import { useLocale } from "../../i18n";
import { Wordmark } from "../brand/Wordmark";

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

function AccountLink() {
  const { t } = useLocale();
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return null;
  return isSignedIn ? (
    <Link to="/account" className="hover:text-ink transition">
      {t.footer.account}
    </Link>
  ) : (
    <Link to="/sign-in" className="hover:text-ink transition">
      {t.nav.signIn}
    </Link>
  );
}

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-line bg-[#FAFCFA]">
      <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-6 md:px-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-line">
          <Link to="/" className="flex items-center gap-2.5">
            <Wordmark size="footer" />
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14.5px] font-medium text-ink/70 sm:gap-x-8">
            <Link to="/#how" className="hover:text-ink transition">
              {t.footer.how}
            </Link>
            <Link to="/#why" className="hover:text-ink">
              {t.footer.why}
            </Link>
            <Link to="/#faq" className="hover:text-ink">
              {t.footer.faq}
            </Link>
            <Link to="/#waitlist" className="hover:text-ink transition">
              {t.footer.waitlist}
            </Link>
            {clerkEnabled ? (
              <AccountLink />
            ) : (
              <Link to="/account" className="hover:text-ink transition">
                {t.footer.account}
              </Link>
            )}
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[13px] text-ink/50">
          <div>
            © 2026 Masār. <span>{t.footer.legal}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-ink transition">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-ink transition">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
