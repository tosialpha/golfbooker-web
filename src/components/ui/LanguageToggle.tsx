import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface LanguageToggleProps {
  darkTheme?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ darkTheme = true }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fi' ? 'en' : 'fi');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-colors ${
        darkTheme
          ? 'border-brand-green-600 hover:bg-brand-green-50'
          : 'border-white/60 hover:bg-white/10'
      }`}
      aria-label="Toggle language"
    >
      <span className={`font-semibold ${darkTheme ? 'text-gray-900' : 'text-white'}`}>
        {language === 'fi' ? 'FI' : 'EN'}
      </span>
    </button>
  );
};
