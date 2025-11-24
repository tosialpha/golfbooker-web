import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { useLanguage } from '../../contexts/LanguageContext';

export const TournamentsPreview: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const isEnglish = language === 'en';

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('tournaments.title')}
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {t('tournaments.subtitle')}
            </p>

            {/* Quick Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-brand-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-brand-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEnglish ? 'Create Tournaments' : 'Luo kilpailuja'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isEnglish ? 'Set up any tournament format in minutes with intuitive tools' : 'Perusta minkä tahansa muotoinen kilpailu minuuteissa intuitiivisilla työkaluilla'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-brand-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-brand-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEnglish ? 'Live Results' : 'Reaaliaikaiset tulokset'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isEnglish ? 'Players enter scores on mobile and leaderboards update instantly' : 'Pelaajat syöttävät tulokset mobiilissa ja listat päivittyvät välittömästi'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-brand-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-brand-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isEnglish ? 'Complete Management' : 'Kokonaisvaltainen hallinta'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isEnglish ? 'Manage registrations, players, scoring, and results all in one place' : 'Hallitse ilmoittautumisia, pelaajia, pisteytystä ja tuloksia yhdessä paikassa'}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate('/tournaments')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green-600 text-white rounded-lg font-semibold hover:bg-brand-green-700 transition-all duration-300 hover:gap-3 group"
            >
              {t('home.readMore')}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
