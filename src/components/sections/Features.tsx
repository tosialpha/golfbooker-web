import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Accordion, AccordionItem } from '../ui/Accordion';
import { CalendarIcon, CreditCardIcon, BarChartIcon } from '../ui/GolfIcon';
import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  // Define features directly with translations
  const bookingsItems = [
    t('features.bookings.items.0'),
    t('features.bookings.items.1'),
    t('features.bookings.items.2'),
  ].filter(item => !item.includes('features.bookings.items'));

  const paymentsItems = [
    t('features.payments.items.0'),
    t('features.payments.items.1'),
    t('features.payments.items.2'),
    t('features.payments.items.3'),
  ].filter(item => !item.includes('features.payments.items'));

  const analyticsItems = [
    t('features.analytics.items.0'),
    t('features.analytics.items.1'),
    t('features.analytics.items.2'),
    t('features.analytics.items.3'),
  ].filter(item => !item.includes('features.analytics.items'));

  const features = [
    {
      icon: <CalendarIcon className="text-brand-green-600" size={28} />,
      title: t('features.bookings.title'),
      subtitle: t('features.bookings.subtitle'),
      items: bookingsItems,
    },
    {
      icon: <CreditCardIcon className="text-brand-green-600" size={28} />,
      title: t('features.payments.title'),
      subtitle: t('features.payments.subtitle'),
      items: paymentsItems,
    },
    {
      icon: <BarChartIcon className="text-brand-green-600" size={28} />,
      title: t('features.analytics.title'),
      subtitle: t('features.analytics.subtitle'),
      items: analyticsItems,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <Accordion className="max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <AccordionItem
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              icon={feature.icon}
              defaultOpen={index === 0}
            >
              <div className="grid gap-4 mt-4">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-brand-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-brand-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};
