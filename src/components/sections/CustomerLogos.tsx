import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

export const CustomerLogos: React.FC = () => {
  const customers = [
    { name: "Helsinki Golf Club", shortName: "HGC" },
    { name: "Espoo Golf", shortName: "EG" },
    { name: "Vantaa Golf", shortName: "VG" },
    { name: "Nurmijärvi Golf", shortName: "NG" },
    { name: "Keimola Golf", shortName: "KG" },
    { name: "Tali Golf", shortName: "TG" },
  ];

  return (
    <section id="customers" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-full h-32 bg-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center p-8">
                <div className="text-4xl font-bold text-gray-400">
                  {customer.shortName}
                </div>
                <div className="text-sm text-gray-600 text-center mt-2">
                  {customer.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
