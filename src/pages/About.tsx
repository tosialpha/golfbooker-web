import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const About = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <div className="relative min-h-screen bg-background">
      {/* Animated Fluid Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[500px] z-10 bg-gradient-to-b from-background/95 via-background/70 to-background/30" />

        <div
          className="gradient-blob-1 absolute top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15), rgba(72, 202, 228, 0.12), rgba(144, 224, 239, 0.1))',
            filter: 'blur(60px)',
          }}
        />

        <div
          className="gradient-blob-2 absolute top-1/3 -left-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.15), rgba(64, 224, 208, 0.12), rgba(127, 255, 212, 0.1))',
            filter: 'blur(65px)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {isEnglish ? 'About Us' : 'Tietoa meistä'}
              </h1>
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                <p>
                  {isEnglish
                    ? 'We are building the complete booking and customer management platform designed specifically for golf courses in Finland.'
                    : 'Rakennamme täyden palvelun varaus- ja asiakashallintajärjestelmän, joka on suunniteltu golfkenttien tarpeisiin.'}
                </p>
                <p>
                  {isEnglish
                    ? 'Our modern tools help golf courses streamline tee time bookings, automate daily operations, and enhance the player experience while growing their business.'
                    : 'Nykyaikaiset työkalumme auttavat golfkenttiä automatisoimaan päivittäistä toimintaa ja parantamaan pelaajien kokemusta.'}
                </p>
                <p className="text-base md:text-lg font-medium text-primary">
                  🇫🇮 {isEnglish ? 'Made in Finland' : 'Rakennettu Suomessa'}
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="mailto:info@golfbooker.fi">
                    {isEnglish ? 'Get in Touch' : 'Ota yhteyttä'}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 px-8 py-6 text-lg transition-all"
                >
                  <Link to="/">
                    {isEnglish ? 'Learn More' : 'Lue lisää'}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;
