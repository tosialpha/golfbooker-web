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
    <section className="pt-32 pb-20 lg:pb-24 bg-gray-50 relative overflow-hidden min-h-screen lg:min-h-0">
      <Container className="h-full">
        {/* Mobile: Stacked layout, Desktop: Side by side */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 h-full lg:min-h-[600px]">
          {/* Left: Text Content - Takes less space */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 lg:w-5/12 text-center lg:text-left mb-12 lg:mb-0 flex flex-col justify-center"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6">
              {t('hero.title')}
            </h1>

            {/* Subtitle/Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
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

          {/* Right: Dashboard Image - Takes more space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-grow lg:w-7/12"
          >
            <div className="relative">
              <img
                src="/dashboard-hero.png"
                alt="GolfBooker Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl max-w-none lg:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
