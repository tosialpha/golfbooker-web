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
    <section className="relative overflow-hidden h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-800 via-green-700 to-green-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: 'center' }}
        >
          <source src="/golf-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <Container className="relative z-20">
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
              className="text-2xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight px-4"
              style={{
                textShadow: '0 10px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle/Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto font-light px-4"
              style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
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
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
                onClick={scrollToFeatures}
              >
                {t('hero.viewFeatures')}
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => navigate('/contact')}
              >
                {t('hero.requestDemo')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2 cursor-pointer"
          onClick={scrollToFeatures}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
