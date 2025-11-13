import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">{t('mission.title')}</h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            {t('mission.text')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
