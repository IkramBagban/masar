import { Link, useLocation } from "react-router";
import { useLocale } from "../../i18n";
import { Wordmark } from "../brand/Wordmark";
import { LanguageToggle } from "./LanguageToggle";

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
