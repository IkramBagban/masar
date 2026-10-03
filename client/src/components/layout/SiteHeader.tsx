import { Link } from "react-router";
import { useLocale } from "../../i18n";
import { Wordmark } from "../brand/Wordmark";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="w-full max-w-[1280px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2.5">
        <Wordmark size="nav" />
      </Link>
      <nav className="hidden lg:flex items-center gap-9 text-[15px] font-medium text-ink/80">
        <a href="#how" className="hover:text-ink">
          {t.nav.how}
        </a>
        <a href="#why" className="hover:text-ink">
          {t.nav.why}
        </a>
        <a href="#faq" className="hover:text-ink">
          {t.nav.faq}
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <LanguageToggle />
        <a
          href="#waitlist"
          className="hidden sm:inline-flex items-center gap-2 bg-pill text-white text-[15px] font-semibold pl-6 pr-5 py-3 rounded-full hover:opacity-90"
        >
          <span>{t.nav.cta}</span>
          <span className="dir-flip" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
