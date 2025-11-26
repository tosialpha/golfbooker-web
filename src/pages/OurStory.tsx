import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../contexts/LanguageContext';
import { Quote } from 'lucide-react';

export const OurStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
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
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
                {t('story.intro.paragraph1')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('story.intro.paragraph2')}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
                {t('story.pivot.title')}
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                {t('story.pivot.paragraph1')}
              </p>

              {/* Quote Block */}
              <div className="relative my-8 sm:my-12 pl-6 sm:pl-8 border-l-4 border-brand-green-600">
                <Quote className="absolute -left-2 top-0 text-brand-green-600" size={24} />
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 italic">
                  "The systems work… until they don't."
                </p>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('story.pivot.paragraph2')}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* The Solution */}
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
                {t('story.solution.title')}
              </h2>

              <p className="text-xl sm:text-2xl md:text-3xl text-brand-green-700 font-semibold leading-relaxed">
                {t('story.solution.paragraph1')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('story.solution.paragraph2')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                {t('story.solution.paragraph3')}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Today & Mission */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brand-green-600 to-brand-green-800 relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">
                {t('story.present.title')}
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
                {t('story.present.paragraph1')}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
                {t('story.present.paragraph2')}
              </p>

              {/* Mission Statement */}
              <div className="mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-white/20">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
                  {t('story.mission.title')}
                </p>

                <p className="text-lg sm:text-xl md:text-2xl text-white/90 italic">
                  {t('story.mission.closing')}
                </p>
              </div>
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
                  {t('story.keyPoints.realCollaboration.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t('story.keyPoints.realCollaboration.description')}
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
