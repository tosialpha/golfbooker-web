import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { MapPin, Users, Trophy } from "@phosphor-icons/react";
import image1 from "../../assets/how-it-works-1.jpg";
import image2 from "../../assets/how-it-works-2.jpg";
import image3 from "../../assets/how-it-works-3.jpg";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MapPin,
      title: "Find a Venue",
      description: "Browse and discover activity venues near you with real-time availability.",
      image: image1,
    },
    {
      icon: Users,
      title: "Join or Create a Group",
      description: "Connect with people at your level and organize sessions easily.",
      image: image2,
    },
    {
      icon: Trophy,
      title: "Get Active and Connect",
      description: "Meet new people, stay active, and build lasting friendships.",
      image: image3,
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-20 px-4 bg-muted scroll-mt-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Getting started is simple
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="glass overflow-hidden h-full">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon size={24} weight="light" className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
