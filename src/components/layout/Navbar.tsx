import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageToggle } from '../ui/LanguageToggle';
import { useLanguage } from '../../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Pages with light backgrounds that need dark text even at the top
  const lightBackgroundPages = ['/contact'];
  const isLightBackground = lightBackgroundPages.includes(location.pathname);

  // Show dark theme when scrolled OR on light background pages
  const useDarkTheme = isScrolled || isLightBackground;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useDarkTheme
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group transition-all duration-300 ease-in-out transform hover:scale-105" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={`text-2xl font-semibold tracking-tight transition-colors duration-500 ${
              useDarkTheme
                ? 'text-gray-900 group-hover:text-brand-green-600'
                : 'text-white group-hover:text-white/80'
            }`}>
              Golf<span className="font-bold">Booker</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors font-medium ${
                useDarkTheme
                  ? 'text-gray-700 hover:text-brand-green-600'
                  : 'text-white hover:text-white/80'
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/tournaments"
              className={`transition-colors font-medium ${
                useDarkTheme
                  ? 'text-gray-700 hover:text-brand-green-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.tournaments')}
            </Link>
            <Link
              to="/simulators"
              className={`transition-colors font-medium ${
                useDarkTheme
                  ? 'text-gray-700 hover:text-brand-green-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.simulators')}
            </Link>
            <Link
              to="/our-story"
              className={`transition-colors font-medium ${
                useDarkTheme
                  ? 'text-gray-700 hover:text-brand-green-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.story')}
            </Link>
            <Link
              to="/contact"
              className={`transition-colors font-medium ${
                useDarkTheme
                  ? 'text-gray-700 hover:text-brand-green-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Sign In + Language Toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.golfbooker.fi"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                useDarkTheme
                  ? 'bg-brand-green-600 text-white hover:bg-brand-green-700'
                  : 'bg-white text-gray-900 hover:bg-white/90'
              }`}
            >
              {t('nav.signIn')}
            </a>
            <LanguageToggle darkTheme={useDarkTheme} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              useDarkTheme
                ? 'text-gray-700 hover:text-brand-green-600'
                : 'text-white hover:text-white/80'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col px-4 sm:px-6 py-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-brand-green-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/tournaments"
                className="text-gray-900 hover:text-brand-green-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.tournaments')}
              </Link>
              <Link
                to="/simulators"
                className="text-gray-900 hover:text-brand-green-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.simulators')}
              </Link>
              <Link
                to="/our-story"
                className="text-gray-900 hover:text-brand-green-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.story')}
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-brand-green-600 transition-colors font-medium text-lg py-3 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <a
                href="https://app.golfbooker.fi"
                className="bg-brand-green-600 text-white text-center font-medium text-lg py-3 rounded-lg mt-4 hover:bg-brand-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.signIn')}
              </a>
              <div className="flex justify-center py-4">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
