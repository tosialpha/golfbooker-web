import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { useLanguage } from '../../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 lg:pb-24 bg-gray-50 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6">
              {t('hero.title')}
            </h1>

            {/* Subtitle/Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Buttons - Horizontal centered */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => navigate('/contact')}
              >
                {t('hero.requestDemo')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={scrollToFeatures}
              >
                {t('hero.viewFeatures')}
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Image - Full size centered below text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-6xl px-4 mt-8"
          >
            <div className="relative flex justify-center items-center">
              <img
                src="/dashboard-hero.png"
                alt="GolfBooker Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
