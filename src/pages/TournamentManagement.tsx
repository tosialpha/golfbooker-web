import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import { GolfFlagIcon, BarChartIcon } from '../components/ui/GolfIcon';
import { Settings } from 'lucide-react';

export const TournamentManagement: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <GolfFlagIcon className="text-white" size={32} />,
      title: t('tournaments.management.title'),
      description: t('tournaments.management.description'),
    },
    {
      icon: <BarChartIcon className="text-white" size={32} />,
      title: t('tournaments.reporting.title'),
      description: t('tournaments.reporting.description'),
    },
    {
      icon: <Settings className="text-white" size={32} />,
      title: t('tournaments.integrations.title'),
      description: t('tournaments.integrations.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('tournaments.title')}
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
              {t('tournaments.subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-green-600 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
