import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";

const ForVenues = () => {
  const { language, t } = useLanguage();
  const isEnglish = language === 'en';
  const [expandedBoxes, setExpandedBoxes] = useState<number[]>([]);

  useEffect(() => {
    document.title = isEnglish
      ? "Golfbooker - Booking System for Golf Courses in Finland"
      : "Golfbooker - Varausjärjestelmä Golfkentille Suomessa";
  }, [isEnglish]);

  const toggleBox = (index: number) => {
    if (expandedBoxes.includes(index)) {
      setExpandedBoxes(expandedBoxes.filter(i => i !== index));
    } else {
      setExpandedBoxes([...expandedBoxes, index]);
    }
  };

  const pricingFeatures = isEnglish ? [
    "Complete tee time booking system",
    "Real-time availability management",
    "Customer database & CRM",
    "Revenue analytics & reporting",
    "Mobile app for your customers",
    "Website integration",
    "Email & SMS confirmations",
    "Data migration from old system",
    "Staff training & onboarding",
    "Finnish-language support",
    "Regular software updates",
    "Dedicated account manager",
  ] : [
    "Täydellinen lähtöaikavarausjärjestelmä",
    "Reaaliaikainen saatavuudenhallinta",
    "Asiakastietokanta & CRM",
    "Liikevaihtoanalytiikka & raportointi",
    "Mobiilisovellus asiakkaillesi",
    "Verkkosivuintegraatio",
    "Sähköposti- ja SMS-vahvistukset",
    "Tietojen siirto vanhasta järjestelmästä",
    "Henkilöstön koulutus",
    "Suomenkielinen tuki",
    "Säännölliset ohjelmistopäivitykset",
    "Oma asiakasvastaava",
  ];

  const faqItems = [
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="pt-40 pb-32 px-4 relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                {isEnglish
                  ? "Modern Booking System for Golf Courses"
                  : "Moderni varausjärjestelmä golfkentille"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {isEnglish
                  ? "Professional booking management software designed specifically for Finnish golf courses. Modern, affordable, and easy to use."
                  : "Nykyaikainen ratkaisu golfkenttien varausten hallintaan. Ei monimutkaisia järjestelmiä tai kohtuuttomia hintoja."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/demo">
                  <Button size="lg" className="text-lg px-8 py-6">
                    {isEnglish ? "Request Demo" : "Pyydä demo"}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    {isEnglish ? "Contact Sales" : "Ota yhteyttä"}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
                <img
                  src="/for-venues-calendar.png"
                  alt={isEnglish ? "Golfbooker Booking System" : "Golfbooker varausjärjestelmä"}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All-in-One Platform Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-bold mb-4 md:mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
              {isEnglish ? "Everything you need on one platform" : "Kaikki mitä tarvitset yhdellä alustalla"}
            </h2>
            <p className="max-w-3xl mx-auto mb-8 md:mb-12" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>
              {isEnglish
                ? "Simplify your operations and grow more efficiently with Golfbooker. Get a platform that combines bookings, customers, marketing, payments, and automation – all in one view."
                : "Yksinkertaista arkeasi ja säästä aikaa. Saat käyttöösi alustan, joka yhdistää varaukset, asiakkaat, markkinoinnin, maksut ja automaation yhdessä näkymässä."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: isEnglish ? "Tee Time Management" : "Lähtöjen seuranta",
                description: isEnglish
                  ? "Complete booking system with real-time availability, online reservations, and automated confirmations for all tee times."
                  : "Varausjärjestelmä reaaliaikaisella seurannalla."
              },
              {
                title: isEnglish ? "Customer Management (CRM)" : "Asiakashallinta (CRM)",
                description: isEnglish
                  ? "Track customer data and communication in one place. Keep memberships up to date and target messages to the right customers at the right time."
                  : "Seuraa asiakastietoja ja viestintää yhdessä paikassa. Pidä jäsenyydet ajan tasalla ja kohdenna viestit oikeille asiakkaille oikeaan aikaan."
              },
              {
                title: isEnglish ? "Payments & Billing" : "Maksut ja laskutus",
                description: isEnglish
                  ? "Integrated payment processing, automated invoicing, and financial reporting to streamline your revenue management."
                  : "Integroitu maksujen käsittely, automaattinen laskutus ja talousraportointi helpottamaan liikevaihdon hallintaa."
              },
              {
                title: isEnglish ? "Marketing & Automation" : "Markkinointi ja automaatio",
                description: isEnglish
                  ? "Set up campaigns, reminders, and offers to run automatically. Save time and keep customers engaged."
                  : "Aseta kampanjat, muistutukset ja tarjoukset pyörimään automaattisesti. Säästä aikaa ja pidä asiakkaat aktiivisina."
              },
              {
                title: isEnglish ? "Dynamic Pricing" : "Dynaaminen hinnoittelu",
                description: isEnglish
                  ? "Set custom pricing for peak times to maximize revenue. Offer discounts during quieter times to optimize utilization."
                  : "Aseta mukautetut hinnat ruuhka-ajoille maksimoidaksesi liikevaihto. Tarjoa alennuksia hiljaisempina aikoina optimoidaksesi käyttöastetta."
              },
              {
                title: isEnglish ? "Finnish Support" : "Suomenkielinen tuki",
                description: isEnglish
                  ? "Dedicated Finnish-language support team and personal account manager who understands the golf industry."
                  : "Oma suomenkielinen tukitiimi ja asiakasvastaava, joka ymmärtää golfalan."
              },
              {
                title: isEnglish ? "Reporting & Analytics" : "Raportointi ja analytiikka",
                description: isEnglish
                  ? "Comprehensive analytics dashboard with revenue tracking, booking trends, customer insights, and performance metrics."
                  : "Kattava analytiikkanäkymä liikevaihdon seurannalla, varaustrendeillä, asiakastiedoilla ja suorituskykymittareilla."
              },
              {
                title: isEnglish ? "Integrations & API" : "Integraatiot ja API",
                description: isEnglish
                  ? "Connect with your existing systems including website, payment providers, and golf management tools via our API."
                  : "Yhdistä olemassa oleviin järjestelmiisi kuten verkkosivuihin, maksupalveluntarjoajiin ja golfin hallintajärjestelmiin API:n kautta."
              },
              {
                title: isEnglish ? "Mobile App for Players" : "Mobiilisovellus pelaajille",
                description: isEnglish
                  ? "Your customers can find your course and book tee times directly from our mobile app, increasing your visibility and bookings."
                  : "Asiakkaasi voivat löytää kenttäsi ja varata lähtöaikoja suoraan mobiilisovelluksestamme, lisäten näkyvyyttäsi ja varauksiasi."
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="p-6 border-2 border-border bg-background hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => toggleBox(index)}
                >
                  <div className="flex items-start gap-4">
                    <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <AnimatePresence>
                        {expandedBoxes.includes(index) && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {benefit.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <ChevronDown
                      size={20}
                      className="flex-shrink-0 mt-1 text-foreground/60 transition-transform duration-200 ease-in-out"
                      style={{
                        transform: expandedBoxes.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="neumorphic glow-hover text-lg px-8 py-6">
              <Link to="/contact">
                {isEnglish ? "Get in Touch" : "Ota yhteyttä"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('faq.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('faq.subtitle')}</p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isEnglish
                  ? "Ready to Modernize Your Golf Course?"
                  : "Valmis modernisoimaan golfkenttäsi?"}
              </h2>
              <p className="text-xl text-foreground/80 mb-8">
                {isEnglish
                  ? "Join Finnish golf courses switching to affordable, modern booking software."
                  : "Liity suomalaisiin golfkenttiin, jotka vaihtavat edulliseen, moderniin varausohjelmistoon."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo">
                  <Button size="lg" className="text-lg px-8 py-6">
                    {isEnglish ? "Request Demo" : "Pyydä demo"}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    {isEnglish ? "Get Custom Quote" : "Pyydä tarjous"}
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForVenues;
