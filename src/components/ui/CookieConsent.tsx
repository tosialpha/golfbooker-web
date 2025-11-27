import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'golfbooker_cookie_consent';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const { language } = useLanguage();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
      setShowFloatingButton(false);
    } else {
      setShowBanner(false);
      setShowFloatingButton(true);
      const saved: CookiePreferences = JSON.parse(consent);
      setPreferences(saved);
      if (saved.analytics) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const GA_ID = 'G-3GEQGHSM72';

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID);
    };
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowCustomize(false);
    setShowFloatingButton(true);
    loadGoogleAnalytics();
  };

  // Commented out unused function
  // const handleRejectAll = () => {
  //   const onlyNecessary = {
  //     necessary: true,
  //     analytics: false,
  //     marketing: false
  //   };
  //   localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(onlyNecessary));
  //   setShowBanner(false);
  //   setShowCustomize(false);
  //   setShowFloatingButton(true);
  // };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setShowBanner(false);
    setShowCustomize(false);
    setShowFloatingButton(true);
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
  };

  const text = language === 'en'
    ? {
        title: 'We value your privacy',
        message: 'We use cookies to improve your experience and analyze site traffic. You can choose which cookies you want to accept.',
        necessary: 'Necessary',
        necessaryDesc: 'Required for the website to function properly.',
        analytics: 'Analytics',
        analyticsDesc: 'Help us understand how visitors interact with our website.',
        marketing: 'Marketing',
        marketingDesc: 'Used to deliver personalized advertisements.',
        customize: 'Settings',
        acceptAll: 'Accept',
        rejectAll: 'Reject all',
        savePreferences: 'Save preferences',
        cancel: 'Cancel'
      }
    : {
        title: 'Arvostamme yksityisyyttäsi',
        message: 'Käytämme evästeitä parantaaksemme käyttökokemustasi ja analysoidaksemme sivuston liikennettä. Voit valita, mitkä evästeet hyväksyt.',
        necessary: 'Välttämättömät',
        necessaryDesc: 'Nämä evästeet mahdollistavat keskeiset toiminnallisuudet, kuten turvallisuus, henkilöllisyyden vahvistaminen ja verkon hallinta. Näitä evästeitä ei voi ottaa pois käytöstä.',
        analytics: 'Analytiikka',
        analyticsDesc: 'Auttavat meitä ymmärtämään, miten vierailijat käyttävät sivustoamme, havaitsemaan virheitä ja tarjoamaan paremman kokonaisanalyysin.',
        marketing: 'Markkinointi',
        marketingDesc: 'Käytetään markkinoinnin tehokkuuden seurantaan sopivampien palvelujen tarjoamiseksi ja kiinnostuksenkohteitasi paremmin vastaavien mainosten toimittamiseksi.',
        customize: 'Asetukset',
        acceptAll: 'Hyväksy',
        rejectAll: 'Hylkää kaikki',
        savePreferences: 'Tallenna valinnat',
        cancel: 'Peruuta'
      };

  return (
    <>
      {/* Floating Cookie Button */}
      {showFloatingButton && !showBanner && (
        <button
          onClick={() => setShowBanner(true)}
          className="fixed bottom-4 left-4 bg-brand-green-600 text-white p-3 rounded-full shadow-lg hover:bg-brand-green-700 transition-all hover:scale-110 z-40"
          aria-label="Cookie settings"
        >
          <Cookie className="w-6 h-6" />
        </button>
      )}

      {/* Cookie Banner - Bottom Bar */}
      {showBanner && !showCustomize && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
          {/* Close Button - Top Right */}
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-2 right-2 md:top-3 md:right-3 text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-7xl mx-auto p-4 md:p-6 pr-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 pr-4">
                <h2 className="text-lg font-bold text-gray-900 mb-1">{text.title}</h2>
                <p className="text-sm text-gray-600">
                  {text.message}{' '}
                  <a href="/privacy" className="text-brand-green-600 hover:underline">
                    {language === 'en' ? 'Learn more' : 'Lue lisää'}
                  </a>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 shrink-0">
                <button
                  onClick={() => setShowCustomize(true)}
                  className="px-6 py-2.5 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  {text.customize}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 text-sm font-medium bg-brand-green-600 text-white rounded-lg hover:bg-brand-green-700 transition-colors whitespace-nowrap"
                >
                  {text.acceptAll}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customize Modal */}
      {showCustomize && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{text.title}</h2>
              <p className="text-sm text-gray-600">
                {text.message}{' '}
                <a href="/privacy" className="text-brand-green-600 hover:underline">
                  {language === 'en' ? 'Learn more' : 'Lue lisää'}
                </a>
              </p>
            </div>

            {/* Cookie Categories */}
            <div className="p-6 space-y-4">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{text.necessary}</h3>
                    <p className="text-sm text-gray-600 mt-1">{text.necessaryDesc}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-brand-green-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-50">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{text.analytics}</h3>
                    <p className="text-sm text-gray-600 mt-1">{text.analyticsDesc}</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics ? 'bg-brand-green-600 justify-end' : 'bg-gray-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{text.marketing}</h3>
                    <p className="text-sm text-gray-600 mt-1">{text.marketingDesc}</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing ? 'bg-brand-green-600 justify-end' : 'bg-gray-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowCustomize(false)}
                className="flex-1 px-4 py-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {text.cancel}
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-3 text-sm font-medium bg-brand-green-600 text-white rounded-lg hover:bg-brand-green-700 transition-colors"
              >
                {text.savePreferences}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
