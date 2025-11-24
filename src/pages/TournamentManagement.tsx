import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
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
      <section className="relative overflow-hidden pt-32 pb-24 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/tournament-hero-bg.jpg"
            alt="Golf tournament"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-brand-green-900/40"></div>
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
                  textShadow: '0 10px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
                }}>
              {t('tournaments.title')}
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl whitespace-pre-line"
               style={{
                 textShadow: '0 4px 12px rgba(0,0,0,0.3)'
               }}>
              {t('tournaments.subtitle')}
            </p>

            <div>
              <button
                type="button"
                onClick={handleScrollToCTA}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green-600 text-white rounded-lg font-semibold hover:bg-brand-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isEnglish ? 'Start here' : 'Aloita tästä'}
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Key Features Bar */}
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
              <div className="text-xl font-bold text-gray-900 mb-2">
                {isEnglish ? 'Create Tournaments' : 'Luo kilpailuja'}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {isEnglish ? 'Set up any tournament format in minutes with intuitive tools' : 'Perusta minkä tahansa muotoinen kilpailu minuuteissa intuitiivisilla työkaluilla'}
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
              <div className="text-xl font-bold text-gray-900 mb-2">
                {isEnglish ? 'Live Results' : 'Reaaliaikaiset tulokset'}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {isEnglish ? 'Players enter scores on mobile and leaderboards update instantly' : 'Pelaajat syöttävät tulokset mobiilissa ja listat päivittyvät välittömästi'}
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
              <div className="text-xl font-bold text-gray-900 mb-2">
                {isEnglish ? 'Complete Management' : 'Kokonaisvaltainen hallinta'}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {isEnglish ? 'Manage registrations, players, scoring, and results all in one place' : 'Hallitse ilmoittautumisia, pelaajia, pisteytystä ja tuloksia yhdessä paikassa'}
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
              className="relative flex-1 max-w-4xl"
            >
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-3 relative">
                <div className="bg-gray-100 rounded-xl w-full overflow-hidden">
                  <img
                    src="/desktop-mockup-1.png"
                    alt="Desktop dashboard"
                    className="w-full object-contain"
                  />
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
              <div className="aspect-[9/18] w-72 bg-gray-900 rounded-[3rem] shadow-2xl p-2 relative">
                <div className="bg-gray-100 rounded-[2.5rem] w-full h-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/tournament-phone-mockup-1.png"
                    alt="Tournament mobile app"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
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
                  ? 'Leaderboards update instantly and stay current throughout the tournament.'
                  : 'Tuloslistat päivittyvät välittömästi ja pysyvät ajan tasalla koko kilpailun ajan.'
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
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <motion.img
                src="/live-tracking-desktop.png"
                alt="Live tracking desktop dashboard"
                className="w-full rounded-2xl shadow-2xl"
                whileHover={{
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              />

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
              whileHover={{ scale: 1.02 }}
              className="order-2 lg:order-1 relative"
            >
              <motion.img
                src="/tournament-creation-mockup.png"
                alt="Tournament creation dashboard"
                className="w-full rounded-2xl shadow-2xl"
                whileHover={{
                  rotateX: -2,
                  rotateY: -2,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              />

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

      {/* Mobile Score Entry Section */}
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
                {isEnglish ? 'Players mark scores conveniently on mobile' : 'Pelaajat merkkaavat tulokset kätevästi mobiilissa'}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? 'Players enter their scores directly through the mobile app. Quick, easy, and always up-to-date - no paper scorecards needed.'
                  : 'Pelaajat syöttävät tuloksensa suoraan mobiilisovelluksen kautta. Nopeaa, helppoa ja aina ajan tasalla - ei tarvetta paperisille tuloskorteille.'
                }
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Intuitive score entry' : 'Intuitiivinen tulosten syöttö'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Works offline - syncs when connected' : 'Toimii offline-tilassa - synkronoituu yhdistettäessä'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    {isEnglish ? 'Automatic score validation' : 'Automaattinen tulosten validointi'}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex justify-center"
            >
              <div className="aspect-[9/18] w-72 bg-gray-900 rounded-[3rem] shadow-2xl p-2 relative">
                <div className="bg-gray-100 rounded-[2.5rem] w-full h-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/mobile-score-entry.png"
                    alt="Mobile score entry"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-300 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-2xl blur-2xl opacity-40"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Custom Tournament Pages Section - Hidden for now */}
      {/* <section className="py-24 bg-gray-50">
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
      </section> */}

      {/* CTA Panel with Phone Mockup */}
      <section id="cta-section" className="relative bg-gradient-to-br from-gray-800 via-brand-green-800 to-brand-green-900 py-20 overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                {isEnglish ? 'Ready to get started?' : 'Valmis aloittamaan?'}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-4 text-center">
                {isEnglish
                  ? 'Discover how our tournament management system can transform your golf events. Get in touch and we\'ll tell you more!'
                  : 'Tutustu kilpailunhallintajärjestelmäämme ja katso, miten se voi helpottaa tapahtumienne järjestämistä. Ota yhteyttä niin kerromme lisää!'
                }
              </p>
              <p className="text-sm text-green-300 mb-8 text-center">
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

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-white text-brand-green-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    {isEnglish ? 'Send' : 'Lähetä'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};
