import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, MapPin, Calendar } from 'lucide-react';
import { PhoneMockup } from '../components/demo/PhoneMockup';
import { BookingDemo } from '../components/demo/BookingDemo';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Demo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-50 to-white pt-24 pb-16">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-green-600 hover:text-brand-green-700 font-medium mb-4">
            <ArrowLeft size={20} />
            {t('demo.backToHome')}
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t('demo.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            {t('demo.subtitle')}
          </p>
        </div>

        {/* Demo Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Phone Mockup - Full Size */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md">
              <PhoneMockup>
                <BookingDemo />
              </PhoneMockup>
            </div>
          </div>

          {/* Instructions Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('demo.howItWorks')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-brand-green-600 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('demo.step1Title')}</h4>
                    <p className="text-gray-600 text-sm">
                      {t('demo.step1Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-brand-green-600 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('demo.step2Title')}</h4>
                    <p className="text-gray-600 text-sm">
                      {t('demo.step2Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-brand-green-600 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('demo.step3Title')}</h4>
                    <p className="text-gray-600 text-sm">
                      {t('demo.step3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 sm:mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('demo.whyGolfBooker')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="text-brand-green-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('demo.easyToUse')}
                </h4>
                <p className="text-gray-600">
                  {t('demo.easyToUseDesc')}
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-brand-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-brand-green-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('demo.allCourses')}
                </h4>
                <p className="text-gray-600">
                  {t('demo.allCoursesDesc')}
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-brand-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-brand-green-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('demo.book247')}
                </h4>
                <p className="text-gray-600">
                  {t('demo.book247Desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Waitlist Section */}
        <div className="mt-12 sm:mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-brand-green-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-brand-green-100"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('demo.beFirstTitle')}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {t('demo.beFirstDesc')}
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t('demo.emailPlaceholder')}
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent"
                />
                <Button variant="primary" size="lg" className="whitespace-nowrap">
                  {t('demo.joinWaitlist')}
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                {t('demo.noSpam')}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
