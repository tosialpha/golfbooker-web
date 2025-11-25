import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fi' ? 'en' : 'fi');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-brand-green-600 hover:bg-brand-green-50 transition-colors"
      aria-label="Toggle language"
    >
      <span className="font-semibold text-gray-900">
        {language === 'fi' ? 'FI' : 'EN'}
      </span>
    </button>
  );
};
