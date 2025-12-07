import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbulb, Users } from 'lucide-react';
import { SEO } from '../components/SEO';

export const OurStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        titleFi="Meistä - GolfBookerin tarina | Suomalainen golfteknologia"
        titleEn="Our Story - About GolfBooker | Finnish Golf Technology"
        descriptionFi="GolfBooker on kahden Aalto-yliopiston opiskelijan perustama suomalainen yritys. Rakennamme modernia teknologiaa golfklubeille järkevällä hinnoittelulla."
        descriptionEn="GolfBooker is a Finnish company founded by two Aalto University students. We build modern technology for golf clubs with fair pricing."
        path="/our-story"
        keywordsFi="GolfBooker yritys, suomalainen golfteknologia, golfklubin ohjelmisto Suomi, Funect Oy"
        keywordsEn="GolfBooker company, Finnish golf technology, golf club software Finland, Funect Oy"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[60vh] min-h-[500px] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/golf-hero-video.mov" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                style={{
                  textShadow: '0 10px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
                }}>
              {t('story.title')}
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white/90"
               style={{
                 textShadow: '0 4px 20px rgba(0,0,0,0.4)'
               }}>
              {t('story.subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* The Beginning */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
                {t('story.background.title')}
              </h2>

              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
                {t('story.background.paragraph1')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('story.background.paragraph2')}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* The Pivot - With Quote */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-green-100 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-brand-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  {t('story.pivot.title')}
                </h2>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                {t('story.pivot.paragraph1')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('story.pivot.paragraph2')}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8 sm:mb-12">
                <div className="p-3 bg-brand-green-100 rounded-xl">
                  <Users className="w-8 h-8 text-brand-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  {t('story.team.title')}
                </h2>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 sm:mb-16 max-w-4xl">
                {t('story.team.intro')}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Alexandr */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-green-500 to-brand-green-700 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                      A
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Alexandr Malmberg</h3>
                      <p className="text-brand-green-600 font-medium">{t('story.team.alexandr.role')}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {t('story.team.alexandr.bio')}
                  </p>
                </motion.div>

                {/* Veeti */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-green-500 to-brand-green-700 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                      V
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Veeti Karppinen</h3>
                      <p className="text-brand-green-600 font-medium">{t('story.team.veeti.role')}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {t('story.team.veeti.bio')}
                  </p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mt-10 sm:mt-16 font-medium text-center max-w-4xl mx-auto"
              >
                {t('story.team.together')}
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                {t('story.offer.title')}
              </h2>

              <p className="text-xl sm:text-2xl md:text-3xl text-brand-green-700 font-semibold leading-relaxed">
                {t('story.offer.paragraph1')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('story.offer.paragraph2')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('story.offer.paragraph3')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                {t('story.offer.paragraph4')}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brand-green-600 to-brand-green-800 relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6 sm:space-y-8"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('story.mission.title')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 italic">
                {t('story.mission.closing')}
              </p>
            </motion.div>
          </div>
        </Container>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-900 rounded-full filter blur-3xl opacity-20"></div>
      </section>

      {/* Key Points Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t('story.keyPoints.modernTech.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t('story.keyPoints.modernTech.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t('story.keyPoints.fairPricing.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t('story.keyPoints.fairPricing.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t('story.keyPoints.allInOne.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t('story.keyPoints.allInOne.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t('story.keyPoints.smallTeam.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t('story.keyPoints.smallTeam.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};
