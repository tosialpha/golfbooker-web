import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { useLanguage } from '../../contexts/LanguageContext';
import { Smartphone, Trophy, Calendar } from 'lucide-react';

export const ForPlayers: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isEnglish ? 'For Players' : 'Pelaajille'}
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {isEnglish
                ? 'Simple and intuitive mobile app for golfers. Book tee times, join tournaments, and track your scores.'
                : 'Yksinkertainen ja intuitiivinen mobiilisovellus golfarille. Varaa tiiaikoja, osallistu kilpailuihin ja seuraa tuloksia.'
              }
            </p>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="text-brand-green-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {isEnglish ? 'Easy Booking' : 'Helppo varaaminen'}
                  </div>
                  <div className="text-gray-600">
                    {isEnglish
                      ? 'Book tee times quickly and manage your reservations'
                      : 'Varaa tiiaikoja nopeasti ja hallitse varauksiasi'}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Trophy className="text-brand-green-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {isEnglish ? 'Tournament Registration' : 'Kilpailuihin ilmoittautuminen'}
                  </div>
                  <div className="text-gray-600">
                    {isEnglish
                      ? 'Register for tournaments and track results in real-time'
                      : 'Ilmoittaudu kilpailuihin ja seuraa tuloksia reaaliajassa'}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="text-brand-green-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {isEnglish ? 'Mobile Scoring' : 'Mobiilimerkkaus'}
                  </div>
                  <div className="text-gray-600">
                    {isEnglish
                      ? 'Enter scores on the course and see live leaderboards'
                      : 'Merkitse tulokset kentällä ja katso livetulostauluja'}
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative flex justify-center"
          >
            <div className="w-80 bg-gray-900 rounded-[3rem] shadow-2xl p-2 relative">
              <div className="rounded-[2.5rem] overflow-hidden">
                <img
                  src="/player-app-mockup.png"
                  alt={isEnglish ? "Player mobile app" : "Pelaajan mobiilisovellus"}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green-300 rounded-2xl blur-2xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-2xl blur-2xl opacity-40"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
