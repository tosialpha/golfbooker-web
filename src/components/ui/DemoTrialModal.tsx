import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface DemoTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoTrialModal: React.FC<DemoTrialModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false
  });

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({
      company: '',
      contactPerson: '',
      email: '',
      phone: '',
      message: '',
      acceptTerms: false
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 p-2 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Sulje"
            >
              <X size={24} />
            </button>

            {/* Form */}
            <div className="p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                {t('demoTrial.title')}
              </h2>
              <p className="text-sm text-gray-600 text-center mb-8">
                {t('demoTrial.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('demoTrial.company')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t('demoTrial.companyPlaceholder')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 focus:bg-white outline-none transition-all"
                  />
                </div>

                {/* Contact Person & Email in a row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('demoTrial.contactPerson')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder={t('demoTrial.contactPersonPlaceholder')}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('demoTrial.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('demoTrial.emailPlaceholder')}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('demoTrial.phone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('demoTrial.phonePlaceholder')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 focus:bg-white outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('demoTrial.message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('demoTrial.messagePlaceholder')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 focus:bg-white outline-none transition-all resize-none"
                  />
                </div>

                {/* Privacy & Terms Checkbox */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-brand-green-600 border-gray-300 rounded focus:ring-brand-green-500"
                    />
                    <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                      {t('demoTrial.acceptUpdates')}
                    </label>
                  </div>
                  <p className="text-xs text-gray-600 pl-6">
                    {t('demoTrial.bySubmitting')}{' '}
                    <a href="/privacy" className="text-brand-green-600 hover:underline">
                      {t('demoTrial.privacyPolicy')}
                    </a>
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {t('demoTrial.submit')}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
