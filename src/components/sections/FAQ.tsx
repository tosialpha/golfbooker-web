import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Accordion, AccordionItem } from '../ui/Accordion';
import { useLanguage } from '../../contexts/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.questions.implementation.question'),
      answer: t('faq.questions.implementation.answer')
    },
    {
      question: t('faq.questions.support.question'),
      answer: t('faq.questions.support.answer')
    },
    {
      question: t('faq.questions.pricing.question'),
      answer: t('faq.questions.pricing.answer')
    },
    {
      question: t('faq.questions.handicap.question'),
      answer: t('faq.questions.handicap.answer')
    },
    {
      question: t('faq.questions.tournamentModule.question'),
      answer: t('faq.questions.tournamentModule.answer')
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.question}
              >
                <p className="text-gray-700 leading-relaxed mt-2">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
