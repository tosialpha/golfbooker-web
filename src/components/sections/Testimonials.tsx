import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Star } from "@phosphor-icons/react";
import { useLanguage } from "../../contexts/LanguageContext";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Veeti Karppinen",
      sport: "Padel",
      quote: t('testimonials.1.quote'),
      outcome: t('testimonials.1.outcome'),
    },
    {
      name: "Yassin Daoussi",
      sport: t('testimonials.2.sport'),
      quote: t('testimonials.2.quote'),
      outcome: t('testimonials.2.outcome'),
    },
    {
      name: "Alexandr Malmberg",
      sport: "Tennis",
      quote: t('testimonials.3.quote'),
      outcome: t('testimonials.3.outcome'),
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" ref={ref} className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Auto-scrolling testimonials */}
          <div className="testimonial-scroll flex gap-6 w-max">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[350px] flex-shrink-0"
              >
                <Card className="glass p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} weight="fill" className="text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.sport}</p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm font-medium text-secondary">
                        ✓ {testimonial.outcome}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
