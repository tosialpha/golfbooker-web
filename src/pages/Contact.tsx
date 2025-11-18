import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      subject: !formData.subject
    };

    setErrors(newErrors);

    // If there are errors, don't submit
    if (newErrors.name || newErrors.email || newErrors.subject) {
      setSubmitStatus('idle');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email subject
      const subjectMap: { [key: string]: string } = {
        general: t('contact.subjectGeneral'),
        demo: t('contact.subjectDemo'),
        pricing: t('contact.subjectPricing'),
        technical: t('contact.subjectTechnical'),
        other: t('contact.subjectOther')
      };

      const emailSubject = subjectMap[formData.subject] || formData.subject;

      // Prepare form data for Web3Forms
      const web3FormData = new FormData();
      web3FormData.append('access_key', '2836fb7b-e299-46ac-bceb-bfdf2fac41bd');
      web3FormData.append('name', formData.name);
      web3FormData.append('email', formData.email);
      web3FormData.append('phone', formData.phone || 'Not provided');

      const formattedDateTime = selectedDate
        ? selectedDate.toISOString().slice(0, 16).replace('T', ' ')
        : 'Not specified';
      web3FormData.append('preferred_datetime', formattedDateTime);

      web3FormData.append('subject', emailSubject);
      web3FormData.append('message', formData.message);
      web3FormData.append('from_name', 'GolfBooker Contact Form');

      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSelectedDate(null);

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-50 to-white pt-24 pb-6">
      <Container>
        {/* Header */}
        <div className="mb-3">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-green-600 hover:text-brand-green-700 font-medium mb-2 text-sm">
            <ArrowLeft size={18} />
            {t('contact.backToHome')}
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-center">
            {t('contact.title')}
          </h1>
          <p className="text-sm md:text-base text-gray-600 text-center">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-3 md:p-4">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                {t('contact.sendMessage')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Phone - Side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      {t('contact.name')} <span className="text-gray-900">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        handleChange(e);
                        setErrors({ ...errors, name: false });
                      }}
                      placeholder={t('contact.namePlaceholder')}
                      className={`w-full px-4 py-3 text-sm rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {isEnglish ? 'Please fill in your name' : 'Täytä nimesi'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.phone')} <span className="text-gray-400 text-sm">({t('contact.optional')})</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.phonePlaceholder')}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email - Full width */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.email')} <span className="text-gray-900">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      handleChange(e);
                      setErrors({ ...errors, email: false });
                    }}
                    placeholder={t('contact.emailPlaceholder')}
                    className={`w-full px-4 py-3 text-sm rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {isEnglish ? 'Please fill in your email address' : 'Täytä sähköpostiosoitteesi'}
                    </p>
                  )}
                </div>

                {/* Date & Time and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isEnglish ? "Preferred Date & Time" : "Toivottu ajankohta"} <span className="text-gray-400 text-sm">({t('contact.optional')})</span>
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: Date | null) => setSelectedDate(date)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={5}
                      dateFormat="dd.MM.yyyy HH:mm"
                      placeholderText={isEnglish ? "Select date and time" : "Valitse päivä ja aika"}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all"
                      calendarClassName="shadow-xl"
                      timeCaption={isEnglish ? "Time" : "Aika"}
                      minDate={new Date()}
                      showPopperArrow={false}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                      {t('contact.subject')} <span className="text-gray-900">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        handleChange(e);
                        setErrors({ ...errors, subject: false });
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-lg border ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all appearance-none bg-white cursor-pointer`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '12px'
                      }}
                    >
                      <option value="">{t('contact.selectSubject')}</option>
                      <option value="general">{t('contact.subjectGeneral')}</option>
                      <option value="demo">{t('contact.subjectDemo')}</option>
                      <option value="pricing">{t('contact.subjectPricing')}</option>
                      <option value="technical">{t('contact.subjectTechnical')}</option>
                      <option value="other">{t('contact.subjectOther')}</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {isEnglish ? 'Please select a subject' : 'Valitse aihe'}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message - Full width */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent resize-none transition-all"
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {(errors.name || errors.email || errors.subject) && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {isEnglish
                      ? "Please fill in all required fields before submitting."
                      : "Täytä kaikki pakolliset kentät ennen lähettämistä."}
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {isEnglish
                      ? "Thank you! We'll get back to you soon."
                      : "Kiitos! Palaamme asiaan pian."}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {isEnglish
                      ? "Something went wrong. Please try again."
                      : "Jokin meni pieleen. Yritä uudelleen."}
                  </div>
                )}

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (isEnglish ? 'Sending...' : 'Lähetetään...') : t('contact.send')}
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
