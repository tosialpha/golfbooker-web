import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturedIn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const publications = [
    "TechCrunch",
    "Forbes",
    "Sports Business",
    "The Verge",
    "Wired",
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground uppercase tracking-wide mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {publications.map((pub, index) => (
              <motion.div
                key={pub}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-2xl font-semibold text-foreground/40 hover:text-foreground transition-colors"
              >
                {pub}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
