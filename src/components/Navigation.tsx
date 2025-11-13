import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List, X, Sun, Moon } from "@phosphor-icons/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash navigation when coming from another page or refreshing
    if (location.hash) {
      const id = location.hash.replace('#', '');

      // Wait longer for all components to mount when navigating between pages
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 64;
          const targetPosition = element.offsetTop - navHeight;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else if ((location.pathname === "/" || location.pathname === "/for-users") && !location.hash) {
      // If navigating to home pages without hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleHashNavigation = (hash: string) => {
    if (location.pathname !== "/for-users") {
      navigate(`/for-users#${hash}`);
    } else {
      scrollToSection(hash);
    }
  };

  const navLinks = [
    {
      label: t('nav.forGolfCourses'),
      to: "/for-golf-courses",
      isActive: location.pathname === "/for-golf-courses"
    },
    {
      label: t('nav.forPlayers'),
      to: "/for-players",
      isActive: location.pathname === "/for-players"
    },
    {
      label: t('nav.contact'),
      to: "/contact",
      isActive: location.pathname === "/contact"
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-background/90 shadow-lg dark:bg-background/95 dark:border-b dark:border-border/50" : "bg-transparent"
        }`}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-semibold text-gradient italic" style={{ letterSpacing: '0.02em' }}>
              GolfBooker
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) =>
                "id" in link ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ) : "hash" in link ? (
                  <button
                    key={link.hash}
                    onClick={() => handleHashNavigation(link.hash)}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to!}
                    className={`hover:text-primary transition-colors ${
                      link.isActive ? 'text-primary font-semibold' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {/* Try Demo Button */}
              <Link to="/demo">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold transition-all shadow-md hover:shadow-lg">
                  {language === 'en' ? 'Try Demo' : 'Kokeile demoa'}
                </button>
              </Link>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={20} weight="fill" className="text-foreground" />
                ) : (
                  <Sun size={20} weight="fill" className="text-foreground" />
                )}
              </button>

              {/* Language Toggle Button */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'fi' : 'en')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="Change language"
              >
                <span className="text-xl">{language === 'en' ? '🇬🇧' : '🇫🇮'}</span>
                <span className="font-semibold text-foreground">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-opacity ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <List size={28} weight="light" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[150] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-background shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            <button
              className="self-end mb-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} weight="light" />
            </button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) =>
                "id" in link ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-xl text-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : "hash" in link ? (
                  <button
                    key={link.hash}
                    onClick={() => {
                      handleHashNavigation(link.hash);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xl text-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to!}
                    className={`text-xl hover:text-primary transition-colors ${
                      link.isActive ? 'text-primary font-semibold' : 'text-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Try Demo Button - Mobile */}
              <Link
                to="/demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4"
              >
                <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold transition-all shadow-md hover:shadow-lg">
                  <span className="text-xl">
                    {language === 'en' ? 'Try Demo' : 'Kokeile demoa'}
                  </span>
                </button>
              </Link>

              {/* Theme Toggle Button - Mobile */}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={24} weight="fill" className="text-foreground" />
                    <span className="text-xl font-semibold text-foreground">
                      {language === 'en' ? 'Dark Mode' : 'Tumma tila'}
                    </span>
                  </>
                ) : (
                  <>
                    <Sun size={24} weight="fill" className="text-foreground" />
                    <span className="text-xl font-semibold text-foreground">
                      {language === 'en' ? 'Light Mode' : 'Vaalea tila'}
                    </span>
                  </>
                )}
              </button>

              {/* Language Toggle Button - Mobile */}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'fi' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <span className="text-2xl">{language === 'en' ? '🇬🇧' : '🇫🇮'}</span>
                <span className="text-xl font-semibold text-foreground">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
