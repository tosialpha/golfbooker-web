import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Suspense, lazy, useState } from "react";
import appStoreBadge from "../assets/app-store-badge-new.png";
import googlePlayBadge from "../assets/google-play-badge-new.webp";
import {
  CalendarBlank,
  Clock,
  MapPin,
  Users,
  Star,
  DeviceMobile,
  CheckCircle,
  Sparkle
} from "@phosphor-icons/react";

// Lazy load Spline component
const LazySpline = lazy(() => import("@splinetool/react-spline"));

const ForPlayers = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send email to backend
    console.log("Waitlist signup:", email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const features = [
    {
      icon: CalendarBlank,
      title: isEnglish ? 'Easy Booking' : 'Helppo varaus',
      description: isEnglish
        ? 'Book tee times in seconds from your phone'
        : 'Varaa lähtöajat puhelimestasi',
    },
    {
      icon: Clock,
      title: isEnglish ? 'Real-Time Availability' : 'Reaaliaikainen saatavuus',
      description: isEnglish
        ? 'See available times instantly, book immediately'
        : 'Näe vapaat ajat välittömästi, varaa heti',
    },
    {
      icon: MapPin,
      title: isEnglish ? 'Find Courses' : 'Löydä kenttiä',
      description: isEnglish
        ? 'Discover golf courses near you'
        : 'Löydä golfkenttiä läheltäsi',
    },
    {
      icon: Users,
      title: isEnglish ? 'Play with Friends' : 'Pelaa kavereiden kanssa',
      description: isEnglish
        ? 'Invite friends and book together'
        : 'Kutsu kavereita ja varaa yhdessä',
    },
    {
      icon: Star,
      title: isEnglish ? 'Save Favorites' : 'Tallenna suosikit',
      description: isEnglish
        ? 'Keep track of your favorite courses'
        : 'Pidä kirjaa suosikkikentistäsi',
    },
    {
      icon: DeviceMobile,
      title: isEnglish ? 'Mobile First' : 'Mobiiliystävällinen',
      description: isEnglish
        ? 'Designed for your phone, works everywhere'
        : 'Suunniteltu puhelimelle, toimii kaikkialla',
    },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      {/* Animated Fluid Background */}
      <div className="absolute inset-0 min-h-full z-0 overflow-hidden pointer-events-none">
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

        <div
          className="gradient-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.15), rgba(72, 209, 204, 0.12), rgba(175, 238, 238, 0.1))',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Player Hero Section */}
        <section className="min-h-[90vh] flex items-center justify-center px-4 bg-background pt-20 pb-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative">
                  <div className="w-full h-[600px] md:h-[720px] lg:h-[780px] relative isolate">
                    <div className="absolute inset-0 [&_canvas]:!bg-transparent [&>div]:!bg-transparent pointer-events-none">
                      <Suspense fallback={<div className="w-full h-full" />}>
                        <LazySpline
                          scene="/dynamic_i_phone_mockup.spline"
                          style={{ width: '100%', height: '100%', background: 'transparent', pointerEvents: 'none' }}
                        />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 text-center lg:text-left"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-gradient pb-2 leading-[1.8] whitespace-pre-line">
                  {t('hero.subtitle')}
                </h1>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {isEnglish ? "DOWNLOAD APP" : "LATAA SOVELLUS"}
                  </h2>
                  <div className="flex flex-col gap-3 max-w-[280px]">
                    <div className="relative cursor-not-allowed">
                      <img
                        src={appStoreBadge}
                        alt="Download on the App Store"
                        className="h-14 w-auto opacity-60"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <span className="bg-white/95 text-gray-600 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm">
                          {isEnglish ? "Coming soon" : "Tulossa pian"}
                        </span>
                      </div>
                    </div>
                    <div className="relative cursor-not-allowed">
                      <img
                        src={googlePlayBadge}
                        alt="Get it on Google Play"
                        className="h-14 w-auto opacity-60"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <span className="bg-white/95 text-gray-600 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm">
                          {isEnglish ? "Coming soon" : "Tulossa pian"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                {isEnglish ? 'Everything You Need' : 'Kaikki mitä tarvitset'}
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                {isEnglish
                  ? 'Simple, fast, and built for golfers'
                  : 'Yksinkertainen, nopea ja rakennettu golfaajille'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-border bg-card shadow-md p-8 hover:shadow-xl transition-all hover:scale-105 h-full">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <feature.icon size={32} weight="light" className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                {isEnglish ? 'How It Works' : 'Miten se toimii'}
              </h2>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {isEnglish ? 'Download the App' : 'Lataa sovellus'}
                  </h3>
                  <p className="text-foreground/80 text-lg">
                    {isEnglish
                      ? 'Get Golfbooker from App Store or Google Play'
                      : 'Hanki Golfbooker App Storesta tai Google Playsta'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {isEnglish ? 'Find Your Course' : 'Löydä kenttäsi'}
                  </h3>
                  <p className="text-foreground/80 text-lg">
                    {isEnglish
                      ? 'Browse courses near you and check availability'
                      : 'Selaa lähelläsi olevia kenttiä ja tarkista saatavuus'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {isEnglish ? 'Book & Play' : 'Varaa & Pelaa'}
                  </h3>
                  <p className="text-foreground/80 text-lg">
                    {isEnglish
                      ? 'Reserve your tee time in seconds and hit the course'
                      : 'Varaa lähtöaikasi ja lähde kentälle'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 md:py-32 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                {isEnglish ? 'Be First to Book' : 'Ole ensimmäisten joukossa'}
              </h2>

              <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                {isEnglish
                  ? 'Join the waitlist and get early access when we launch. No spam, just updates.'
                  : 'Liity jonotuslistalle ja saat varhaisen pääsyn lanseerauksen yhteydessä. Ei roskapostia, vain päivityksiä.'}
              </p>

              {!submitted ? (
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                  <Input
                    type="email"
                    placeholder={isEnglish ? "your@email.com" : "sähköpostisi@email.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-14 text-lg px-6"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 px-8 text-lg font-semibold neumorphic glow-hover"
                  >
                    {isEnglish ? 'Join Waitlist' : 'Liity listalle'}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center justify-center gap-3 p-6 bg-primary/10 border border-primary/30 rounded-2xl max-w-md mx-auto mb-8"
                >
                  <CheckCircle size={32} weight="fill" className="text-primary" />
                  <p className="text-lg font-semibold">
                    {isEnglish ? "You're on the list! Check your email." : "Olet listalla! Tarkista sähköpostisi."}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ForPlayers;
