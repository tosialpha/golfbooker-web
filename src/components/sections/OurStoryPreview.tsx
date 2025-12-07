import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { useLanguage } from '../../contexts/LanguageContext';

export const OurStoryPreview: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t('story.title')}
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('story.background.paragraph1')}
              </p>
            </div>

            <button
              onClick={() => navigate('/our-story')}
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
