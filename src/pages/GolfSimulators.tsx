import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Zap, Calendar, Users, Layers, Mail, Phone, User } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const GolfSimulators: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const handleScrollToCTA = () => {
    const element = document.getElementById('cta-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/simulator-hero-bg.png"
            alt=""
            className="w-full h-full object-cover blur-sm"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)'
                }}>
              {isEnglish ? 'Golf Simulators' : 'Golfsimulaattorit'}
            </h1>

            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl whitespace-pre-line"
               style={{
                 textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)'
               }}>
              {isEnglish
                ? 'Modern system for managing simulator operations - tailored to your needs'
                : 'Moderni järjestelmä simulaattoritoiminnan hallintaan - räätälöity juuri sinun tarpeisiisi'
              }
            </p>

            <div>
              <button
                type="button"
                onClick={handleScrollToCTA}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isEnglish ? 'Get started' : 'Aloita tästä'}
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Key Features Bar */}
      <section className="bg-white border-y border-gray-200">
        <Container>
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-brand-green-100 rounded-xl flex items-center justify-center">
                  <Zap className="text-brand-green-600" size={24} />
                </div>
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {isEnglish ? 'Tailored for Simulators' : 'Räätälöity simulaattoreille'}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Only the features you need - no unnecessary complexity'
                  : 'Vain ne ominaisuudet mitä tarvitset - ei turhaa monimutkaisuutta'
                }
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-brand-green-100 rounded-xl flex items-center justify-center">
                  <Calendar className="text-brand-green-600" size={24} />
                </div>
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {isEnglish ? 'Easy Booking Management' : 'Helppo varausten hallinta'}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Simple booking system for managing simulator time slots'
                  : 'Yksinkertainen varausjärjestelmä simulaattoriaikojen hallintaan'
                }
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-brand-green-100 rounded-xl flex items-center justify-center">
                  <Users className="text-brand-green-600" size={24} />
                </div>
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {isEnglish ? 'Customer Management' : 'Asiakashallinta'}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Track customers and their sessions in one place'
                  : 'Seuraa asiakkaita ja heidän käyntejään yhdessä paikassa'
                }
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Tailored for Simulators Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? 'Designed for Simulators' : 'Suunniteltu simulaattoreille'}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'GolfBooker offers simulator operators the same quality system as for golf courses, but without unnecessary features. You get access to only the tools that are actually needed for simulator operations.'
                  : 'GolfBooker tarjoaa simulaattoritoimijoille saman laadukkaan järjestelmän kuin golfkentille, mutta ilman turhia ominaisuuksia. Saat käyttöösi vain ne työkalut, joita simulaattoritoiminnassa oikeasti tarvitaan.'
                }
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-green-300 hover:shadow-md transition-all">
                  <div className="w-1.5 h-full bg-brand-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">
                    {isEnglish ? 'Clear and simple user interface' : 'Selkeä ja yksinkertainen käyttöliittymä'}
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-green-300 hover:shadow-md transition-all">
                  <div className="w-1.5 h-full bg-brand-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">
                    {isEnglish ? 'No unnecessary course management features' : 'Ei turhia kenttätoimintojen ominaisuuksia'}
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-green-300 hover:shadow-md transition-all">
                  <div className="w-1.5 h-full bg-brand-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">
                    {isEnglish ? 'Quick setup and easy to learn' : 'Nopea käyttöönotto ja helppo oppia'}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/simulator-dashboard-mockup.png"
                  alt={isEnglish ? 'Simulator dashboard interface' : 'Simulaattorin hallintapaneeli'}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Smart Pricing Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/smart-pricing-mockup.png"
                  alt={isEnglish ? 'AI pricing recommendations interface' : 'Tekoälyn hinnoittelusuositukset'}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? 'Smart Pricing' : 'Älykäs hinnoittelu'}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'Maximize your revenue with AI-powered pricing suggestions. Our system analyzes demand, time of day, and historical data to recommend optimal pricing - you stay in control.'
                  : 'Maksimoi tulosi tekoälypohjaisilla hinnoitteluehdotuksilla. Järjestelmämme analysoi kysyntää, vuorokaudenaikaa ja historiallista dataa suositellakseen optimaalisia hintoja - sinä päätät.'
                }
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-green-300 hover:shadow-md transition-all">
                  <div className="w-1.5 h-full bg-brand-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">
                    {isEnglish ? 'AI-driven pricing recommendations' : 'Tekoälypohjaiset hinnoittelusuositukset'}
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-green-300 hover:shadow-md transition-all">
                  <div className="w-1.5 h-full bg-brand-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">
                    {isEnglish ? 'You approve all pricing changes' : 'Sinä hyväksyt kaikki hintamuutokset'}
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-green-300 hover:shadow-md transition-all">
                  <div className="w-1.5 h-full bg-brand-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">
                    {isEnglish ? 'Increased revenue and occupancy rates' : 'Kasvanut liikevaihto ja käyttöaste'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Unified Platform Section - HIGHLIGHTED */}
      <section className="py-24 bg-gradient-to-br from-brand-green-900 via-brand-green-800 to-brand-green-700 text-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Layers size={18} />
                <span className="text-sm font-medium">
                  {isEnglish ? 'For clubs with course & simulator' : 'Klubeille joilla on kenttä ja simulaattori'}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {isEnglish ? 'One System - Course and Simulator' : 'Yksi järjestelmä - kenttä ja simulaattori'}
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {isEnglish
                  ? 'If your club has both a golf course and simulator, GolfBooker provides a unified system for managing both.'
                  : 'Jos klubillasi on sekä golfkenttä että simulaattori, GolfBooker tarjoaa yhtenäisen järjestelmän molempien hallintaan.'
                }
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-1.5 h-full bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">
                    {isEnglish ? 'Manage course and simulator bookings from the same system' : 'Hallitse kenttä- ja simulaattorivaraukset'}
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-1.5 h-full bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">
                    {isEnglish ? 'Reporting and analytics in the same system' : 'Raportointi ja analytiikka samassa järjestelmässä'}
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-1.5 h-full bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">
                    {isEnglish ? 'Seamless experience for your customers' : 'Saumaton kokemus asiakkaillesi'}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative lg:col-span-3 lg:ml-12"
            >
              <div className="rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <img
                  src="/unified-system-mockup.png"
                  alt={isEnglish ? 'Unified system showing Golf Club and Golf Simulator' : 'Yhtenäinen järjestelmä Golf Club ja Golf Simulaattori'}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Panel with Contact Form */}
      <section id="cta-section" className="relative bg-gray-50 py-24 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? 'Ready to get started?' : 'Valmis aloittamaan?'}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'Get in touch and we\'ll tell you more about how GolfBooker can help your simulator business.'
                  : 'Ota yhteyttä ja kerromme lisää miten GolfBooker voi auttaa simulaattoritoimintaasi.'
                }
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-brand-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{isEnglish ? 'Contact person' : 'Yhteyshenkilö'}</p>
                    <p className="text-gray-900 font-medium">Veeti Karppinen</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{isEnglish ? 'Phone' : 'Puhelin'}</p>
                    <p className="text-gray-900 font-medium">+358 40 737 7397</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-brand-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{isEnglish ? 'Email' : 'Sähköposti'}</p>
                    <p className="text-gray-900 font-medium">info@golfbooker.fi</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
<ContactForm source="Golfsimulaattorit" />
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};
