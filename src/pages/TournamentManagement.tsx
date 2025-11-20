import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Smartphone, Monitor, Zap, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TournamentManagement: React.FC = () => {
  const { t, language } = useLanguage();
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
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-brand-green-900 pt-32 pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-600 bg-opacity-20 border border-brand-green-600 rounded-full">
                <Zap size={16} className="text-brand-green-700" />
                <span className="text-brand-green-900 text-sm font-medium">
                  {isEnglish ? 'Tournament Management Platform' : 'Kilpailunhallinta-alusta'}
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {t('tournaments.title')}
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl whitespace-pre-line">
              {t('tournaments.subtitle')}
            </p>

            <div>
              <button
                type="button"
                onClick={handleScrollToCTA}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green-600 text-white rounded-lg font-semibold hover:bg-brand-green-700 transition-colors cursor-pointer shadow-lg"
              >
                Aloita tästä
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </Container>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-green-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      </section>

      {/* Stats/Quick Facts Bar */}
      <section className="bg-white border-y border-gray-200">
        <Container>
          <div className="py-12 grid grid-cols-3 gap-8">
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
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {isEnglish ? 'Fast Setup' : 'Nopea käyttöönotto'}
              </div>
              <div className="text-sm text-gray-600">
                {isEnglish ? 'Launch in minutes' : 'Käynnistä minuuteissa'}
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
                  <Users className="text-brand-green-600" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {isEnglish ? 'Unlimited' : 'Rajaton'}
              </div>
              <div className="text-sm text-gray-600">
                {isEnglish ? 'Players & tournaments' : 'Pelaajat & kilpailut'}
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
                  <TrendingUp className="text-brand-green-600" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {isEnglish ? 'Real-time' : 'Reaaliaikainen'}
              </div>
              <div className="text-sm text-gray-600">
                {isEnglish ? 'Mobile app' : 'Mobiilisovellus'}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Platform Showcase - Mobile & Desktop */}
      <section className="py-24 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-end justify-center gap-8"
          >
            {/* Desktop mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-1 max-w-3xl"
            >
              <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl p-4 relative">
                <div className="bg-gray-100 rounded-xl w-full h-full flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <Monitor size={80} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium text-lg">
                      {isEnglish ? 'Desktop Dashboard' : 'Työpöytänäkymä'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-200 rounded-2xl blur-2xl opacity-40"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-green-200 rounded-2xl blur-2xl opacity-40"></div>
            </motion.div>

            {/* Mobile mockup - overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative -ml-32 mb-8 z-10"
            >
              <div className="aspect-[9/16] w-64 bg-gray-900 rounded-[3rem] shadow-2xl p-3 relative">
                <div className="bg-gray-100 rounded-[2.5rem] w-full h-full flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <Smartphone size={60} className="text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium text-sm">
                      {isEnglish ? 'Mobile App' : 'Mobiilisovellus'}
                    </p>
                  </div>
                </div>
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green-300 rounded-2xl blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-300 rounded-2xl blur-2xl opacity-50"></div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Additional Feature Sections */}

      {/* Live Scoring Section */}
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
                {isEnglish ? 'Live tracking' : 'Live seuranta'}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'Players enter scores directly through the mobile app. Leaderboards update instantly and stay current throughout the tournament.'
                  : 'Pelaajat syöttävät pisteet suoraan mobiilisovelluksella. Tuloslistat päivittyvät välittömästi ja pysyvät ajan tasalla koko kilpailun ajan.'
                }
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-brand-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Instant updates' : 'Välittömät päivitykset'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-brand-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Live leaderboards for spectators' : 'Reaaliaikaiset listat katsojille'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-brand-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Automatic validation' : 'Automaattinen validointi'}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-50 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <TrendingUp size={80} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium text-lg">
                    {isEnglish ? 'Live Scoring Screenshot' : 'Suoran pisteytyksen kuvakaappaus'}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {isEnglish ? 'Image placeholder' : 'Kuvan paikka'}
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-300 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green-200 rounded-2xl blur-2xl opacity-40"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Tournament Creation Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Users size={80} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium text-lg">
                    {isEnglish ? 'Tournament Setup Screenshot' : 'Kilpailun luomisen kuvakaappaus'}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {isEnglish ? 'Image placeholder' : 'Kuvan paikka'}
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-2xl blur-2xl opacity-40"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? 'Create tournaments effortlessly' : 'Luo kilpailuja vaivattomasti'}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'Set up any type of tournament in minutes. From small club events to major championships - configure formats, scoring, and rules with ease.'
                  : 'Järjestä kaikenkokoisia kilpailuja minuuteissa. Pienistä klubitapahtumista suuriin mestaruuksiin - määritä formaatit, pisteytys ja säännöt helposti.'
                }
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Support for all tournament formats' : 'Tuki kaikille kilpailumuodoille'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Unlimited participants' : 'Rajaton määrä osallistujia'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Quick templates for common formats' : 'Valmiit mallit yleisille formaateille'}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Registration & Payments Section */}
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
                {isEnglish ? 'Online registration & payments' : 'Ilmoittautuminen ja maksut verkossa'}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'Streamline registration with online sign-ups. Accept payments securely and manage participant lists automatically.'
                  : 'Tehosta ilmoittautumista verkkoilmoittautumisella. Vastaanota maksut turvallisesti ja hallitse osallistujalistoja automaattisesti.'
                }
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Easy online registration forms' : 'Helpot verkkoilmoittautumislomakkeet'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Secure payment processing' : 'Turvallinen maksujen käsittely'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Automatic confirmation emails' : 'Automaattiset vahvistussähköpostit'}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Monitor size={80} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium text-lg">
                    {isEnglish ? 'Registration Form Screenshot' : 'Ilmoittautumislomakkeen kuvakaappaus'}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {isEnglish ? 'Image placeholder' : 'Kuvan paikka'}
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-300 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-2xl blur-2xl opacity-40"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Custom Tournament Pages Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Monitor size={80} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium text-lg">
                    {isEnglish ? 'Tournament Page Screenshot' : 'Kilpailusivun kuvakaappaus'}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {isEnglish ? 'Image placeholder' : 'Kuvan paikka'}
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-300 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-200 rounded-2xl blur-2xl opacity-40"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? 'Branded tournament pages' : 'Räätälöidyt kilpailusivut'}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'Create custom tournament websites with your branding. Share information, showcase sponsors, and provide all tournament details in one place.'
                  : 'Luo räätälöityjä kilpailusivustoja omalla brändilläsi. Jaa tietoa, esittele sponsoreita ja tarjoa kaikki kilpailutiedot yhdessä paikassa.'
                }
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Custom branding and colors' : 'Räätälöity brändäys ja värit'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Sponsor showcases' : 'Sponsoreiden esittely'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Live results and leaderboards' : 'Suorat tulokset ja tuloslistat'}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Panel with Phone Mockup */}
      <section id="cta-section" className="relative bg-gradient-to-br from-gray-800 via-brand-green-800 to-brand-green-900 py-20 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {isEnglish ? 'Ready to get started?' : 'Valmis aloittamaan?'}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-4">
                {isEnglish
                  ? 'Discover how our tournament management system can transform your golf events. Get in touch and we\'ll tell you more!'
                  : 'Tutustu kilpailunhallintajärjestelmäämme ja katso, miten se voi helpottaa tapahtumienne järjestämistä. Ota yhteyttä niin kerromme lisää!'
                }
              </p>
              <p className="text-sm text-green-300 mb-8">
                {isEnglish
                  ? 'Fill out the form and we\'ll contact you shortly.'
                  : 'Täytä lomake, niin otamme sinuun yhteyttä pian.'}
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={isEnglish ? 'Full name*' : 'Nimi*'}
                  className="w-full px-6 py-4 rounded-full bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400"
                  required
                />

                <input
                  type="email"
                  placeholder={isEnglish ? 'Email*' : 'Sähköposti*'}
                  className="w-full px-6 py-4 rounded-full bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400"
                  required
                />

                <input
                  type="tel"
                  placeholder={isEnglish ? 'Phone' : 'Puhelin'}
                  className="w-full px-6 py-4 rounded-full bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400"
                />

                <textarea
                  placeholder={isEnglish ? 'Write your message...*' : 'Kirjoita viesti...*'}
                  rows={4}
                  className="w-full px-6 py-4 rounded-3xl bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400 resize-none"
                  required
                ></textarea>

                <div className="text-sm text-gray-300">
                  *{isEnglish ? 'required field' : 'pakollinen tieto'}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-green-600 focus:ring-brand-green-400"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-300">
                    {isEnglish ? (
                      <>I understand and agree that my personal data will be processed in accordance with the <Link to="/privacy" className="underline hover:text-white">privacy policy</Link>.*</>
                    ) : (
                      <>Ymmärrän ja suostun siihen, että henkilötietojani käsitellään <Link to="/privacy" className="underline hover:text-white">tietosuojakäytännön</Link> mukaisesti.*</>
                    )}
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-green-600 focus:ring-brand-green-400"
                  />
                  <label htmlFor="marketing" className="text-sm text-gray-300">
                    {isEnglish
                      ? 'I want to receive marketing communications and updates about new features.'
                      : 'Haluan vastaanottaa markkinointiviestejä ja tietoa uusista ominaisuuksista.'}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-white text-brand-green-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {isEnglish ? 'Send' : 'Lähetä'}
                </button>
              </form>
            </motion.div>

            {/* Right side - Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="aspect-[9/19.5] w-80 bg-black rounded-[3rem] shadow-2xl p-3 relative">
                <div className="bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
                  {/* Phone content - Tournament app mockup */}
                  <div className="relative h-full bg-gradient-to-b from-gray-900 to-gray-800 p-6 flex flex-col">
                    {/* Tournament image */}
                    <div className="w-full h-48 bg-gray-700 rounded-xl mb-4 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800"></div>
                    </div>

                    {/* Tournament title */}
                    <h3 className="text-white text-xl font-bold mb-1">Birdie Trophy Invitational</h3>
                    <p className="text-gray-400 text-sm mb-4">Reynolds Lake Oconee | 11.06.2024</p>

                    {/* Trophy icon */}
                    <div className="flex justify-center my-6">
                      <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 3h12v2H6V3zm1 4h10v1c0 2.21-1.79 4-4 4H11c-2.21 0-4-1.79-4-4V7zm5 14c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm-1-4v-2h2v2h-2z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Sign up button */}
                    <button className="w-full py-3 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-lg mb-4">
                      Sign up
                    </button>

                    {/* Navigation tabs */}
                    <div className="grid grid-cols-4 gap-2 text-xs text-gray-400 mt-auto">
                      <div className="text-center">Info</div>
                      <div className="text-center">Game</div>
                      <div className="text-center">Players</div>
                      <div className="text-center">Start List</div>
                    </div>
                  </div>
                </div>
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
              </div>

              {/* Decorative gradient orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green-400 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-300 rounded-full filter blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};
