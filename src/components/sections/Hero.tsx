import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { MapPin, Users, Trophy } from "@phosphor-icons/react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Suspense, lazy } from "react";
import appStoreBadge from "../../assets/app-store-badge-new.png";
import googlePlayBadge from "../../assets/google-play-badge-new.webp";

// Lazy load Spline component
const LazySpline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';

  const steps = [
    {
      icon: MapPin,
      title: t('hero.step1.title'),
      description: t('hero.step1.desc'),
    },
    {
      icon: Users,
      title: t('hero.step2.title'),
      description: t('hero.step2.desc'),
    },
    {
      icon: Trophy,
      title: t('hero.step3.title'),
      description: t('hero.step3.desc'),
    },
  ];

  return (
    <>
      {/* Main Hero Section */}
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

      {/* Category Cards Section - Clearly Below Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="border-2 border-border bg-card shadow-md p-8 lg:p-10 hover:shadow-xl transition-all hover:scale-105 h-full">
                  <div className="flex flex-col items-center text-center gap-5">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon size={32} weight="light" className="text-primary lg:w-10 lg:h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 text-foreground">{step.title}</h3>
                      <p className="text-base lg:text-lg xl:text-xl text-foreground/80 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
