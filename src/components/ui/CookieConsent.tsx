import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cookie } from 'lucide-react';

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
    const GA_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowFloatingButton(true);
    loadGoogleAnalytics();
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setShowBanner(false);
    setShowFloatingButton(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setShowBanner(false);
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
        customize: 'Customize',
        showDetails: 'Show details',
        hideDetails: 'Hide details',
        acceptAll: 'Accept all',
        rejectAll: 'Reject all',
        savePreferences: 'Save preferences'
      }
    : {
        title: 'Arvostamme yksityisyyttäsi',
        message: 'Käytämme evästeitä parantaaksemme käyttökokemustasi ja analysoidaksemme sivuston liikennettä. Voit valita, mitkä evästeet hyväksyt.',
        necessary: 'Välttämättömät',
        necessaryDesc: 'Vaaditaan verkkosivuston asianmukaista toimintaa varten.',
        analytics: 'Analytiikka',
        analyticsDesc: 'Auttavat meitä ymmärtämään, miten kävijät käyttävät verkkosivustoamme.',
        marketing: 'Markkinointi',
        marketingDesc: 'Käytetään personoidun mainonnan toimittamiseen.',
        customize: 'Mukauta',
        showDetails: 'Näytä tiedot',
        hideDetails: 'Piilota tiedot',
        acceptAll: 'Hyväksy kaikki',
        rejectAll: 'Hylkää kaikki',
        savePreferences: 'Tallenna valinnat'
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

      {/* Cookie Banner Modal */}
      {showBanner && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="bg-white w-full md:max-w-2xl md:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{text.title}</h2>
              <p className="text-sm text-gray-600">
                {text.message}{' '}
                <a href="/privacy" className="text-brand-green-600 hover:underline">
                  {language === 'en' ? 'Learn more' : 'Lue lisää'}
                </a>
              </p>
            </div>
          </div>
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
            onClick={handleRejectAll}
            className="flex-1 px-4 py-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {text.rejectAll}
          </button>
          <button
            onClick={handleSavePreferences}
            className="flex-1 px-4 py-3 text-sm font-medium border border-brand-green-600 text-brand-green-600 rounded-lg hover:bg-brand-green-50 transition-colors"
          >
            {text.savePreferences}
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-3 text-sm font-medium bg-brand-green-600 text-white rounded-lg hover:bg-brand-green-700 transition-colors"
          >
            {text.acceptAll}
          </button>
        </div>
          </div>
        </div>
      )}
    </>
  );
}
