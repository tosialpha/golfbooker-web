import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { useLanguage } from '../../contexts/LanguageContext';

export const ForVenues: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isEnglish ? 'For Venues' : 'Golfkentille'}
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {isEnglish
                ? 'Everything you need to manage your golf course efficiently. From bookings to analytics - all in one system.'
                : 'Kaikki mitä tarvitset golfkenttäsi tehokkaaseen hallintaan. Varauksista analytiikkaan - kaikki samassa järjestelmässä.'
              }
            </p>
          </motion.div>

          {/* Desktop mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <motion.img
              src="/venue-dashboard-mockup.png"
              alt={isEnglish ? "Venue management dashboard" : "Kentän hallintanäkymä"}
              className="w-full rounded-2xl shadow-2xl"
              whileHover={{
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            />

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green-300 rounded-2xl blur-2xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-2xl blur-2xl opacity-40"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
