import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
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
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    privacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      subject: !formData.subject,
      privacy: !privacyAccepted
    };

    setErrors(newErrors);

    // If there are errors, don't submit
    if (newErrors.name || newErrors.email || newErrors.subject || newErrors.privacy) {
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

      const formattedDateTime = selectedDate
        ? selectedDate.toISOString().slice(0, 16).replace('T', ' ')
        : 'Ei määritelty';

      // Send via Resend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0] || formData.name,
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          message: `${emailSubject}\n\nToivottu ajankohta: ${formattedDateTime}\n\n${formData.message}`,
          source: 'Ota yhteyttä',
        }),
      });

      if (response.ok) {
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
        setPrivacyAccepted(false);

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-6">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
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
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-3 md:p-4">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                {t('contact.sendMessage')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
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
                  <div className="text-right text-sm text-gray-500 mt-0">
                    {formData.message.length}/500
                  </div>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="mt-0">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => {
                        setPrivacyAccepted(e.target.checked);
                        setErrors({ ...errors, privacy: false });
                      }}
                      className={`mt-1 w-5 h-5 rounded border-2 ${errors.privacy ? 'border-red-500' : 'border-gray-300'} text-brand-green-600 focus:ring-2 focus:ring-brand-green-600 focus:ring-offset-0 cursor-pointer`}
                    />
                    <span className={`text-sm ${errors.privacy ? 'text-red-600' : 'text-gray-700'} group-hover:text-gray-900`}>
                      {isEnglish ? (
                        <>
                          I have read the{' '}
                          <Link to="/privacy" className="text-brand-green-600 hover:text-brand-green-700 underline">
                            privacy policy
                          </Link>{' '}
                          and consent to the processing of my personal data <span className="text-gray-900">*</span>
                        </>
                      ) : (
                        <>
                          Olen lukenut{' '}
                          <Link to="/privacy" className="text-brand-green-600 hover:text-brand-green-700 underline">
                            tietosuojaselosteen
                          </Link>{' '}
                          ja hyväksyn henkilötietojeni käsittelyn <span className="text-gray-900">*</span>
                        </>
                      )}
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="text-red-500 text-xs mt-2 ml-8">
                      {isEnglish ? 'You must accept the privacy policy to continue' : 'Sinun on hyväksyttävä tietosuojaseloste jatkaaksesi'}
                    </p>
                  )}
                </div>

                {(errors.name || errors.email || errors.subject || errors.privacy) && (
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
              {/* Phone Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {t('contact.phoneTitle')}
                  </h3>
                </div>

                <div className="space-y-3 ml-13">
                  <div>
                    <p className="text-xs text-gray-600 mb-2">{t('contact.salesDescription')}</p>
                    <p className="text-xs font-medium text-gray-700 mb-1">Veeti Karppinen</p>
                    <a href="tel:+358407377397" className="text-sm text-brand-green-600 hover:text-brand-green-700 font-medium block break-all">
                      +358 40 737 7397
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 mb-2">{t('contact.technicalSupportDescription')}</p>
                    <p className="text-xs font-medium text-gray-700 mb-1">Alexandr Malmberg</p>
                    <a href="tel:+358440582663" className="text-sm text-brand-green-600 hover:text-brand-green-700 font-medium block break-all">
                      +358 44 058 2663
                    </a>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-2">{t('contact.businessHours')}</p>
                    <a
                      href="https://wa.me/358440582663"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full justify-center"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      {t('contact.whatsapp')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {t('contact.emailTitle')}
                  </h3>
                </div>

                <div className="space-y-3 ml-13">
                  <div>
                    <p className="text-xs text-gray-600 mb-2">{t('contact.salesDescription')}</p>
                    <a href="mailto:info@golfbooker.fi" className="text-sm text-brand-green-600 hover:text-brand-green-700 font-medium block break-all">
                      info@golfbooker.fi
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 mb-2">{t('contact.technicalSupportDescription')}</p>
                    <a href="mailto:support@golfbooker.fi" className="text-sm text-brand-green-600 hover:text-brand-green-700 font-medium block break-all">
                      support@golfbooker.fi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
