import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeframe: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email subject
    const subjectMap: { [key: string]: string } = {
      demo: t('contact.subjectDemo'),
      pricing: t('contact.subjectPricing'),
      technical: t('contact.subjectTechnical'),
      other: t('contact.subjectOther')
    };

    const emailSubject = subjectMap[formData.subject] || formData.subject;

    // Create email body
    const emailBody = `
Nimi: ${formData.name}
Sähköposti: ${formData.email}
${formData.phone ? `Puhelin: ${formData.phone}` : ''}
${formData.timeframe ? `Toivottu ajanjakso: ${formData.timeframe}` : ''}

Aihe: ${emailSubject}

Viesti:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@golfbooker.fi?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Optional: Reset form after submission
    // setFormData({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   timeframe: '',
    //   subject: '',
    //   message: ''
    // });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-50 to-white pt-24 pb-16">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-green-600 hover:text-brand-green-700 font-medium mb-4">
            <ArrowLeft size={20} />
            {t('contact.backToHome')}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 text-center">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.sendMessage')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.phone')} <span className="text-gray-400">({t('contact.optional')})</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.phonePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.timeframe')} <span className="text-gray-400">({t('contact.optional')})</span>
                  </label>
                  <input
                    type="text"
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    placeholder={t('contact.timeframePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent"
                  >
                    <option value="">{t('contact.selectSubject')}</option>
                    <option value="demo">{t('contact.subjectDemo')}</option>
                    <option value="pricing">{t('contact.subjectPricing')}</option>
                    <option value="technical">{t('contact.subjectTechnical')}</option>
                    <option value="other">{t('contact.subjectOther')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent resize-none"
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {t('contact.send')}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              {/* Phone Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('contact.phoneTitle')}
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{t('contact.sales')}</p>
                    <a href="tel:+358407377397" className="text-lg text-brand-green-600 hover:text-brand-green-700 font-medium">
                      +358 40 7377397
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{t('contact.technicalSupport')}</p>
                    <a href="tel:+358440582663" className="text-lg text-brand-green-600 hover:text-brand-green-700 font-medium">
                      +358 44 0582663
                    </a>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-gray-600 mb-3">{t('contact.businessHours')}</p>
                    <a
                      href="https://wa.me/358440582663"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <MessageCircle size={20} />
                      {t('contact.whatsapp')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('contact.emailTitle')}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{t('contact.sales')}</p>
                    <a href="mailto:info@golfbooker.fi" className="text-lg text-brand-green-600 hover:text-brand-green-700 font-medium">
                      info@golfbooker.fi
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{t('contact.technicalSupport')}</p>
                    <a href="mailto:support@golfbooker.fi" className="text-lg text-brand-green-600 hover:text-brand-green-700 font-medium">
                      support@golfbooker.fi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
