import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-white via-gray-50/50 to-gray-100/80 py-16">
        {/* Subtle top border with gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-green-600 to-brand-green-500 bg-clip-text text-transparent mb-3">GolfBooker</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {t('footer.slogan')}
              </p>
              <p className="text-gray-600 text-sm flex items-center gap-1">
                {t('footer.domestic')} <span className="text-lg">🇫🇮</span>
              </p>
              {/* Social Media Links */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.instagram.com/golfbooker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand-green-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/golfbooker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand-green-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* TUOTE Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 tracking-tight">{t('footer.product')}</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-brand-green-600 transition-all duration-200 hover:translate-x-1 inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/tournaments" className="hover:text-brand-green-600 transition-all duration-200 hover:translate-x-1 inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {t('nav.tournaments')}
                  </Link>
                </li>
                <li>
                  <Link to="/simulators" className="hover:text-brand-green-600 transition-all duration-200 hover:translate-x-1 inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {t('nav.simulators')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* YRITYS Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 tracking-tight">{t('footer.company')}</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link to="/our-story" className="hover:text-brand-green-600 transition-all duration-200 hover:translate-x-1 inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {t('nav.story')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-brand-green-600 transition-all duration-200 hover:translate-x-1 inline-block">
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* LATAA SOVELLUS Column */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-4 tracking-tight">{t('footer.downloadApp')}</h4>
              <div className="space-y-3">
                <div className="relative">
                  <div className="bg-black text-white px-4 py-2.5 rounded-xl border-2 border-white/20 flex items-center gap-2.5 opacity-60 hover:opacity-70 transition-opacity">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="flex-1">
                      <div className="text-[11px] sm:text-xs font-light">Lataa</div>
                      <div className="text-sm sm:text-base font-semibold -mt-0.5">App Storesta</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-gray-900/90 text-white text-xs px-3 py-1 rounded-full">
                      {t('footer.comingSoon')}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-black text-white px-4 py-2.5 rounded-xl border-2 border-white/20 flex items-center gap-2.5 opacity-60 hover:opacity-70 transition-opacity">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#00D6FF', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#0066FF', stopOpacity: 1}} />
                        </linearGradient>
                        <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#FFE000', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#00D663', stopOpacity: 1}} />
                        </linearGradient>
                        <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#FF3A44', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#FF0000', stopOpacity: 1}} />
                        </linearGradient>
                        <linearGradient id="gradYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#FFE000', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#FFBD00', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <path fill="url(#gradBlue)" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/>
                      <path fill="url(#gradGreen)" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/>
                      <path fill="url(#gradYellow)" d="M16.81,8.88L6.05,2.66L14.54,11.15L16.81,8.88Z"/>
                      <path fill="url(#gradRed)" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/>
                    </svg>
                    <div className="flex-1">
                      <div className="text-[11px] sm:text-xs font-light">LATAA SE</div>
                      <div className="text-sm sm:text-base font-semibold -mt-0.5">Google Playsta</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-gray-900/90 text-white text-xs px-3 py-1 rounded-full">
                      {t('footer.comingSoon')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-10 mt-8 border-t border-gray-200/60">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Link to="/terms" className="hover:text-brand-green-600 transition-all duration-200 hover:translate-y-[-1px]">
                  {t('footer.terms')}
                </Link>
                <span className="text-gray-400">•</span>
                <Link to="/privacy" className="hover:text-brand-green-600 transition-all duration-200 hover:translate-y-[-1px]">
                  {t('footer.privacy')}
                </Link>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              © {currentYear} GolfBooker. {t('footer.rights')}.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
