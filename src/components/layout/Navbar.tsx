import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

          {/* Language Toggle (Desktop) */}
          <div className="hidden md:block">
            <LanguageToggle />
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
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100">
            <div className="flex flex-col px-6 py-4">
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
              <div className="flex justify-center py-4">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
