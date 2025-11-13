import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, Users, Sparkle } from "@phosphor-icons/react";

const Index = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send email to backend/Google Forms/Mailchimp
    console.log("Waitlist signup:", email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative min-h-screen bg-background" id="preview">
      {/* Animated Fluid Background with Glassmorphism */}
      <div className="absolute inset-0 min-h-full z-0 overflow-hidden pointer-events-none">
        {/* Overlay at top for text readability - adapts to theme */}
        <div className="absolute top-0 left-0 right-0 h-[500px] z-10 bg-gradient-to-b from-background/95 via-background/70 to-background/30" />

        {/* Large Primary Blob - Top Right (pushed down) */}
        <div
          className="gradient-blob-1 absolute top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15), rgba(72, 202, 228, 0.12), rgba(144, 224, 239, 0.1))',
            filter: 'blur(60px)',
          }}
        />

        {/* Large Secondary Blob - Left Center */}
        <div
          className="gradient-blob-2 absolute top-1/3 -left-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.15), rgba(64, 224, 208, 0.12), rgba(127, 255, 212, 0.1))',
            filter: 'blur(65px)',
          }}
        />

        {/* Extra Large Bottom Blob */}
        <div
          className="gradient-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.15), rgba(72, 209, 204, 0.12), rgba(175, 238, 238, 0.1))',
            filter: 'blur(70px)',
          }}
        />

        {/* Medium Accent Blob - Upper Left (reduced) */}
        <div
          className="gradient-blob-drift absolute top-64 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.12), rgba(135, 206, 250, 0.1), rgba(176, 224, 230, 0.08))',
            filter: 'blur(55px)',
            animationDelay: '5s',
          }}
        />

        {/* Medium Teal Blob - Right Center */}
        <div
          className="gradient-blob-1 absolute top-1/2 right-1/4 w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 139, 139, 0.12), rgba(72, 209, 204, 0.1), rgba(175, 238, 238, 0.08))',
            filter: 'blur(58px)',
            animationDelay: '10s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div
          className="gradient-blob-drift absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(64, 224, 208, 0.12), rgba(127, 255, 212, 0.1), rgba(175, 238, 238, 0.08))',
            filter: 'blur(52px)',
            animationDelay: '15s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />

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
                {isEnglish ? 'Be First to Experience Funect' : 'Ole ensimmäisten joukossa kokemassa Funect'}
              </h2>

              <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                {isEnglish
                  ? 'Join the waitlist! We don\'t send spam.'
                  : 'Liity jonotuslistalle! Emme lähetä roskapostia.'}
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Card className="p-6 text-center glass">
                  <Users size={32} weight="light" className="text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg mb-1">
                    {isEnglish ? '500+' : '500+'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? 'On the waitlist' : 'Jonotuslistalla'}
                  </p>
                </Card>

                <Card className="p-6 text-center glass">
                  <Rocket size={32} weight="light" className="text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg mb-1">
                    {isEnglish ? 'Early 2026' : 'Alkuvuosi 2026'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? 'Launch date' : 'Lanseerauspäivä'}
                  </p>
                </Card>

                <Card className="p-6 text-center glass">
                  <Sparkle size={32} weight="light" className="text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg mb-1">
                    {isEnglish ? 'Free' : 'Ilmainen'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? 'For users, always' : 'Käyttäjille, aina'}
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
