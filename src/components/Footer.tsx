import { Link } from "react-router-dom";
import { InstagramLogo, TiktokLogo, LinkedinLogo } from "@phosphor-icons/react";
import appStoreBadge from "../assets/app-store-badge-new.png";
import googlePlayBadge from "../assets/google-play-badge-new.webp";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

          {/* Brand & Social Media */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Golfbooker
              </h3>
              <p className="text-black dark:text-white text-sm leading-relaxed max-w-md">
                {t('footer.tagline')}
              </p>
              <p className="text-muted-foreground text-sm mt-3 font-medium">
                {isEnglish ? "Finnish company" : "Kotimainen yritys"} 🇫🇮
              </p>
            </div>

            {/* Social Media - Hidden */}
            <div className="hidden">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                {isEnglish ? "Follow Us" : "Seuraa meitä"}
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogo size={20} weight="regular" className="text-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <TiktokLogo size={20} weight="regular" className="text-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={20} weight="regular" className="text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Product Column */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">{t('footer.product')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {isEnglish ? "For Venues" : "Yrityksille"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">{t('footer.company')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Download App */}
          <div className="lg:col-span-3">
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                {isEnglish ? "Download App" : "Lataa sovellus"}
              </h4>
              <div className="flex flex-col gap-3 relative">
                <div className="relative opacity-50 cursor-not-allowed">
                  <img
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    className="h-12 w-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-background/90 px-2 py-1 rounded text-xs font-semibold">
                      {isEnglish ? "Coming soon" : "Tulossa pian"}
                    </span>
                  </div>
                </div>
                <div className="relative opacity-50 cursor-not-allowed">
                  <img
                    src={googlePlayBadge}
                    alt="Get it on Google Play"
                    className="h-12 w-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-background/90 px-2 py-1 rounded text-xs font-semibold">
                      {isEnglish ? "Coming soon" : "Tulossa pian"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-3">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">© {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
