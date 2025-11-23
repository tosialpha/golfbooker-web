import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      title: isEnglish ? 'Booking' : 'Ajanvaraus',
      description: isEnglish
        ? 'Book, modify and cancel tee times effortlessly. Guest bookings and additional services like golf carts or club rentals.'
        : 'Varaa, muokkaa ja peru tiiaikoja vaivattomasti. Vierasvaraukset ja lisäpalvelut kuten golfautot tai mailavuokraus.'
    },
    {
      title: isEnglish ? 'Tournament Management' : 'Kilpailumoduuli',
      description: isEnglish
        ? 'Create and manage your golf course tournaments in the same system. Real-time results tracking, scoring and leaderboards. Available also as a standalone module.'
        : 'Luo ja hallitse golfkenttäsi kilpailut samassa järjestelmässä. Reaaliaikainen tulosten seuranta, merkkaaminen ja tulostaulut. Saatavilla myös erillisenä moduulina.'
    },
    {
      title: isEnglish ? 'Payments and Invoicing' : 'Maksut ja laskutus',
      description: isEnglish
        ? 'Send membership fees and share fees as bulk invoices. Integrated online payments supporting all common payment methods.'
        : 'Lähetä jäsenmaksut ja osakevastikkeet massalaskuna. Integroidut verkkomaksut tukevat kaikkia yleisimpiä maksutapoja.'
    },
    {
      title: isEnglish ? 'Registers' : 'Rekisterit',
      description: isEnglish
        ? 'Manage members, customers and shareholders in one system. Player profiles and handicaps always up to date.'
        : 'Hallitse jäseniä, asiakkaita ja osakkaita samassa järjestelmässä. Pelaajaprofiilit ja tasoitukset aina ajan tasalla.'
    },
    {
      title: isEnglish ? 'Analytics' : 'Analytiikka',
      description: isEnglish
        ? 'Track bookings and utilization rates in real-time. Visualized analytics views support decision-making.'
        : 'Seuraa varauksia ja käyttöastetta reaaliajassa. Visualisoidut analytiikkanäkymät auttavat päätöksenteossa.'
    },
    {
      title: isEnglish ? 'Mobile App' : 'Mobiilisovellus',
      description: isEnglish
        ? 'Bookings, tournament registration and results - simple and user-friendly.'
        : 'Ajanvaraukset, kilpailuihin ilmoittautuminen ja tulokset - simppeli ja käyttäjäystävällinen.'
    },
    {
      title: isEnglish ? 'Integrations' : 'Integraatiot',
      description: isEnglish
        ? 'Connection to Finnish Golf Union and eBirdie handicap system. Automatic handicap updates and tournament result syncing.'
        : 'Yhteys Suomen Golfliittoon ja eBirdie-tasoitusjärjestelmään. Automaattiset tasoituspäivitykset ja kilpailutuloksien synkronointi.'
    },
    {
      title: isEnglish ? 'Communication' : 'Viestintä',
      description: isEnglish
        ? 'Create newsletters easily from the same system. Send reminders for bookings and tournaments on mobile.'
        : 'Luo uutiskirjeet kätevästi samasta järjestelmästä. Lähetä muistutuksia varauksista ja kilpailuista mobiilissa.'
    },
    {
      title: isEnglish ? 'AI Tools' : 'Tekoälytyökalut',
      description: isEnglish
        ? 'Data-driven recommendations for pricing and utilization optimization.'
        : 'Dataan perustuvat suositukset hinnoittelun ja käyttöasteen optimointiin.'
    }
  ];

  const toggleBox = (index: number) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      const row = Math.floor(index / 3);
      setOpenRow(openRow === row ? null : row);
    }
  };

  const isBoxOpen = (index: number) => {
    if (isMobile) {
      return openIndex === index;
    }
    const row = Math.floor(index / 3);
    return openRow === row;
  };

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-100/60 via-brand-green-50/30 to-brand-green-100/50"></div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* 9 Collapsible Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-brand-green-300 transition-all duration-300 hover:-translate-y-1"
            >
              <button
                onClick={() => toggleBox(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left bg-gradient-to-br from-white to-gray-50/50 hover:from-brand-green-50/50 hover:to-white transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-brand-green-600 transition-transform duration-300 flex-shrink-0 ml-2 ${
                    isBoxOpen(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isBoxOpen(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-4 bg-white">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
