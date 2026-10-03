import { Link } from "react-router";
import { useLocale } from "../../i18n";
import { Wordmark } from "../brand/Wordmark";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-line bg-[#FAFCFA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-line">
          <Link to="/" className="flex items-center gap-2.5">
            <Wordmark size="footer" />
          </Link>
          <div className="flex flex-wrap gap-8 text-[14.5px] font-medium text-ink/70">
            <a href="#how" className="hover:text-ink transition">
              {t.footer.how}
            </a>
            <a href="#why" className="hover:text-ink">
              {t.footer.why}
            </a>
            <a href="#faq" className="hover:text-ink">
              {t.footer.faq}
            </a>
            <a href="#waitlist" className="hover:text-ink transition">
              {t.footer.waitlist}
            </a>
            <Link to="/account" className="hover:text-ink transition">
              {t.footer.account}
            </Link>
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
