import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-green-800 to-brand-green-900 relative overflow-hidden">
      {/* Golf Ball Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/4">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Valmis modernisoimaan kenttäsi?
          </h2>
          <p className="text-xl text-brand-green-100 mb-10 max-w-2xl mx-auto">
            Liity 50+ golfkerhon joukkoon. Aloita ilmainen 30 päivän kokeilu tänään.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-brand-green-800 hover:bg-gray-100"
            >
              Varaa demo
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg">
              Ota yhteyttä
            </Button>
          </div>

          {/* Additional info */}
          <p className="mt-8 text-brand-green-200 text-sm">
            Ei luottokorttia tarvita • Peruuta milloin tahansa • Tuki suomeksi
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
