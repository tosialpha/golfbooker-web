import React from 'react';
import { motion } from 'framer-motion';
import { Target, Clock, HeadphonesIcon, Handshake } from 'lucide-react';
import { Container } from '../ui/Container';
import { useLanguage } from '../../contexts/LanguageContext';

export const InfoGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-green-100 rounded-xl">
                  <Target className="w-6 h-6 text-brand-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {t('story.pricing.title')}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                {t('story.pricing.paragraph1')}
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t('story.pricing.paragraph2')}
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-green-100 rounded-xl">
                  <Clock className="w-6 h-6 text-brand-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {t('story.timeline.title')}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t('story.timeline.paragraph1')}
              </p>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-green-100 rounded-xl">
                  <HeadphonesIcon className="w-6 h-6 text-brand-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {t('story.support.title')}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t('story.support.paragraph1')}
              </p>
            </motion.div>

            {/* Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-green-100 rounded-xl">
                  <Handshake className="w-6 h-6 text-brand-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {t('story.partnerships.title')}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t('story.partnerships.paragraph1')}
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
