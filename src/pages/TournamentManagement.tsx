import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Monitor, TrendingUp } from 'lucide-react';
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
      {/* Hero Section with Background */}
      <section className="relative overflow-visible bg-white pb-64">
        {/* Green background - extends to bottom of mockups */}
        <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-br from-brand-green-400 via-emerald-400 to-teal-400">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-0 w-[32rem] h-[32rem] bg-emerald-300/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-300/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full flex items-start justify-start pt-32" style={{ paddingLeft: '6rem', minHeight: '60vh' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.6)' }}>
              {t('tournaments.title')}
            </h1>

            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl whitespace-pre-line" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.6)' }}>
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
        </div>
      </section>

      {/* Platform Showcase - Mobile & Desktop */}
      <section className="-mt-[20rem] pt-0 pb-0 bg-transparent relative z-10">
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
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-1 max-w-3xl cursor-pointer"
            >
              <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl p-4 relative transition-shadow hover:shadow-3xl">
                <div className="bg-gray-100 rounded-xl w-full h-full overflow-hidden">
                  <img
                    src="/tournament-desktop.png"
                    alt={isEnglish ? 'Desktop tournament dashboard' : 'Kilpailun työpöytänäkymä'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Mobile mockup - overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative -ml-32 mb-8 z-10 cursor-pointer"
            >
              <div className="aspect-[9/16] w-64 bg-black rounded-[3rem] shadow-2xl p-3 relative transition-shadow hover:shadow-3xl">
                <div className="bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
                  <img
                    src="/tournament-mobile-app.png"
                    alt={isEnglish ? 'Tournament mobile app' : 'Kilpailun mobiilisovellus'}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

        </Container>
      </section>

      {/* Description Section - White Background */}
      <section className="bg-white py-16 relative z-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              {isEnglish
                ? 'GolfBooker\'s tournament module handles the entire tournament process smoothly. You can create tournaments quickly, choose from multiple game formats and set registration settings. Players can register and pay the entry fee in the app and at the same time you can collect necessary additional information such as time preferences, group selections or special needs. Form playing pairs easily and publish tee sheets with one click. Automated communication handles confirmations and reminders to players. During the round, players enter scores on mobile and leaderboards update in real-time.'
                : 'GolfBookerin kilpailumoduuli hoitaa koko kilpailuprosessin sujuvasti. Voit luoda kilpailuja nopeasti, valita useista pelimuodoista ja määrittää ilmoittautumisasetukset. Pelaajat voivat ilmoittautua ja maksaa osallistumismaksun sovelluksessa ja samalla voit kerätä tarvitsemasi lisätiedot kuten aikatoiveet, ryhmävalinnat tai erityistarpeet. Muodosta peliparit helposti ja julkaise lähtölistat yhdellä klikkauksella. Automatisoitu viestintä hoitaa vahvistukset ja muistutukset pelaajille. Kierroksen aikana pelaajat kirjaavat pisteet mobiililla ja tuloslistat päivittyvät reaaliajassa.'}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Additional Feature Sections */}

      {/* Tournament Creation Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? 'Flexible tools for tournaments' : 'Joustavat työkalut kilpailuihin'}
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Manage your course tournaments from start to finish. Create events, accept registrations, and track results in real-time on a single platform.'
                  : 'Hallitse kenttäsi kilpailuja alusta loppuun. Luo tapahtumia, vastaanota ilmoittautumisia ja seuraa tuloksia reaaliajassa yhdellä alustalla.'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-105 cursor-pointer">
                <img
                  src="/tournament-formats.png"
                  alt={isEnglish ? 'Tournament format selection' : 'Turnausmuodon valinta'}
                  className="w-full h-full object-cover"
                />
              </div>
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
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
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
          </div>
        </Container>
      </section>

      {/* Live Scoring Section */}
      <section className="py-24 bg-gray-50">
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
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
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
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Custom Tournament Pages Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
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
      <section id="cta-section" className="relative bg-white py-20 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {isEnglish ? 'Ready to get started?' : 'Valmis aloittamaan?'}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                {isEnglish
                  ? 'Discover how our tournament management system can transform your golf events. Get in touch and we\'ll tell you more!'
                  : 'Tutustu kilpailunhallintajärjestelmäämme ja katso, miten se voi helpottaa tapahtumienne järjestämistä. Ota yhteyttä niin kerromme lisää!'
                }
              </p>
              <p className="text-sm text-gray-500 mb-8">
                {isEnglish
                  ? 'Fill out the form and we\'ll contact you shortly.'
                  : 'Täytä lomake, niin otamme sinuun yhteyttä pian.'}
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={isEnglish ? 'Full name*' : 'Nimi*'}
                  className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400"
                  required
                />

                <input
                  type="email"
                  placeholder={isEnglish ? 'Email*' : 'Sähköposti*'}
                  className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400"
                  required
                />

                <input
                  type="tel"
                  placeholder={isEnglish ? 'Phone' : 'Puhelin'}
                  className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400"
                />

                <textarea
                  placeholder={isEnglish ? 'Write your message...*' : 'Kirjoita viesti...*'}
                  rows={4}
                  className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green-400 resize-none"
                  required
                ></textarea>

                <div className="text-sm text-gray-500">
                  *{isEnglish ? 'required field' : 'pakollinen tieto'}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-green-600 focus:ring-brand-green-400"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    {isEnglish ? (
                      <>I understand and agree that my personal data will be processed in accordance with the <Link to="/privacy" className="underline hover:text-brand-green-600">privacy policy</Link>.*</>
                    ) : (
                      <>Ymmärrän ja suostun siihen, että henkilötietojani käsitellään <Link to="/privacy" className="underline hover:text-brand-green-600">tietosuojakäytännön</Link> mukaisesti.*</>
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-brand-green-600 text-white font-bold rounded-full hover:bg-brand-green-700 transition-colors shadow-lg"
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
                  {/* Phone content - Tournament app screenshot */}
                  <img
                    src="/tournament-mobile-app.png"
                    alt={isEnglish ? 'Tournament mobile app' : 'Kilpailumobiilisovellus'}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};
