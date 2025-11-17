import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { ShieldCheckIcon } from '../ui/GolfIcon';
import { ArrowRight, Headphones, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: <ShieldCheckIcon className="text-brand-blue-600" size={32} />,
      title: "Saumaton migraatio NexGolfista",
      description: "Autamme datan siirrossa ja konfiguroinnissa. Ei käyttökatkoja.",
    },
    {
      icon: <Headphones className="text-brand-blue-600" size={32} />,
      title: "24/7 Tuki suomeksi",
      description: "Oma asiakastukitiimi vastaa alle 2 tunnissa. Puhelin, chat, email.",
    },
    {
      icon: <Clock className="text-brand-blue-600" size={32} />,
      title: "Ilmainen kokeilu 30 päivää",
      description: "Ei sitoutumista. Testaa kaikki ominaisuudet ilmaiseksi.",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-blue-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Siirtyminen on helppoa
          </h2>
          <p className="text-xl text-gray-600">
            Autamme joka vaiheessa varmistaaksemme sujuvan käyttöönoton
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <Card key={index} className="p-8 text-center" hover={false}>
              <div className="w-16 h-16 bg-brand-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            Ota yhteyttä
            <ArrowRight size={20} />
          </Button>
        </div>
      </Container>
    </section>
  );
};
