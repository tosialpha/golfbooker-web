import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Accordion, AccordionItem } from '../ui/Accordion';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Mitä ominaisuuksia GolfBooker sisältää?",
      answer: "GolfBooker tarjoaa kattavan varausjärjestelmän lähtöaikojen hallintaan, mobiilisovelluksen pelaajille, kilpailujen ja turnausten hallinnan sekä reaaliaikaiset raportit. Kaikki tarvittavat työkalut golfklubin sujuvaan toimintaan yhdessä järjestelmässä."
    },
    {
      question: "Kuinka kauan käyttöönotto kestää?",
      answer: "Tavallinen käyttöönotto kestää 1-2 viikkoa. Tämä sisältää järjestelmän konfiguroinnin, henkilökunnan koulutuksen ja integraatiot. Autamme joka vaiheessa ja varmistamme sujuvan siirtymän."
    },
    {
      question: "Onko mobiilisovellus saatavilla pelaajille?",
      answer: "Kyllä! GolfBooker sisältää modernin mobiilisovelluksen iOS:lle ja Androidille. Pelaajat voivat varata lähtöaikoja, maksaa varauksia ja nähdä turnaukset suoraan puhelimestaan."
    },
    {
      question: "Paljonko GolfBooker maksaa?",
      answer: "Hinnoittelu perustuu kentän kokoon ja käyttäjämäärään. Aloituspaketti alkaa 299€/kk sisältäen kaikki perusominaisuudet. Tarjoamme myös 30 päivän ilmaisen kokeilujakson ilman sitoutumista."
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Usein kysytyt kysymykset
          </h2>
          <p className="text-xl text-gray-600">
            Löydä vastaukset yleisimpiin kysymyksiin
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
