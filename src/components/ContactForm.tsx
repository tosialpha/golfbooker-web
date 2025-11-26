import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  source: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm: React.FC<ContactFormProps> = ({ source }) => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        privacy: false,
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(isEnglish ? 'Failed to send message. Please try again.' : 'Viestin lähetys epäonnistui. Yritä uudelleen.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-brand-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {isEnglish ? 'Message sent!' : 'Viesti lähetetty!'}
        </h3>
        <p className="text-gray-600">
          {isEnglish
            ? "Thank you for your message. We'll get back to you within 24 hours."
            : 'Kiitos viestistäsi. Vastaamme sinulle 24 tunnin sisällä.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {isEnglish ? 'Send us a message' : 'Lähetä viesti'}
      </h3>
      <p className="text-gray-500 mb-6">
        {isEnglish ? "We'll get back to you within 24 hours." : 'Vastaamme 24 tunnin sisällä.'}
      </p>

      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={isEnglish ? 'First name*' : 'Etunimi*'}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
            required
            disabled={status === 'submitting'}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={isEnglish ? 'Last name*' : 'Sukunimi*'}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={isEnglish ? 'Email*' : 'Sähköposti*'}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
          required
          disabled={status === 'submitting'}
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={isEnglish ? 'Phone' : 'Puhelin'}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
          disabled={status === 'submitting'}
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={isEnglish ? 'Your message...' : 'Viestisi...'}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent resize-none"
          required
          disabled={status === 'submitting'}
        ></textarea>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={`privacy-${source}`}
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-green-600 focus:ring-brand-green-500"
            required
            disabled={status === 'submitting'}
          />
          <label htmlFor={`privacy-${source}`} className="text-sm text-gray-600">
            {isEnglish ? (
              <>
                I agree to the{' '}
                <Link to="/privacy" className="text-brand-green-600 hover:underline">
                  privacy policy
                </Link>
                *
              </>
            ) : (
              <>
                Hyväksyn{' '}
                <Link to="/privacy" className="text-brand-green-600 hover:underline">
                  tietosuojakäytännön
                </Link>
                *
              </>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-4 bg-brand-green-600 text-white font-semibold rounded-lg hover:bg-brand-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {isEnglish ? 'Sending...' : 'Lähetetään...'}
            </>
          ) : (
            isEnglish ? 'Send message' : 'Lähetä viesti'
          )}
        </button>
      </form>
    </div>
  );
};
