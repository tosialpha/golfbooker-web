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
      const yOffset = -80; // Offset for navbar
      const y = featuresSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 pb-32 lg:pt-32 lg:pb-48 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/golf-hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/10"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex items-center justify-center">
          {/* Centered Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
              style={{
                textShadow: '0 10px 40px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)'
              }}
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle/Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
              style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  boxShadow: '0 20px 40px rgba(22, 163, 74, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => navigate('/contact')}
              >
                {t('hero.requestDemo')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/95 hover:bg-white backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)'
                }}
                onClick={scrollToFeatures}
              >
                {t('hero.viewFeatures')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
