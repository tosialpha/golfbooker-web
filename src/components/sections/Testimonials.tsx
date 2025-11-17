import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "GolfBooker vähensi varauskäsittelyaikaa 70%. Pelaajat rakastavat helppoa mobiilivarausta ja automatisointi on vapauttanut henkilökuntamme keskittymään asiakaspalveluun.",
      author: "Matti Virtanen",
      role: "Toimitusjohtaja",
      club: "Helsinki Golf Club",
      rating: 5,
    },
    {
      quote: "Siirtyminen NexGolfista oli sujuvampaa kuin odotimme. Tuki oli erinomaista joka vaiheessa ja integraatio toimi moitteettomasti. Suosittelen lämpimästi.",
      author: "Laura Koskinen",
      role: "Klubipäällikkö",
      club: "Espoo Golf",
      rating: 5,
    },
    {
      quote: "Automatisointi on pelannut meille aivan uuden maalin. Varausjärjestelmä toimii luotettavasti ympäri vuorokauden ja raportointi antaa meille täydellisen kuvan kentän käytöstä.",
      author: "Jukka Nieminen",
      role: "Operatiivinen johtaja",
      club: "Vantaa Golf",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-brand-green-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mitä asiakkaamme sanovat
          </h2>
          <p className="text-xl text-gray-600">
            Yli 50 golfkenttää luottaa GolfBookeriin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green-400 to-brand-green-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-brand-green-600 font-medium">{testimonial.club}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
