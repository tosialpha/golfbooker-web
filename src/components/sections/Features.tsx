import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { CalendarCheck, UsersThree, Trophy, MagnifyingGlass } from "@phosphor-icons/react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: CalendarCheck,
      title: "Venue Booking",
      description: "Book courts and facilities instantly with real-time availability and easy payment.",
    },
    {
      icon: UsersThree,
      title: "Social Groups",
      description: "Create or join groups to find players at your skill level for any sport.",
    },
    {
      icon: Trophy,
      title: "Events & Tournaments",
      description: "Participate in community events and competitive tournaments year-round.",
    },
    {
      icon: MagnifyingGlass,
      title: "People Matching",
      description: "Smart algorithm matches you with compatible people based on skill and location.",
    },
  ];

  return (
    <section id="features" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to connect through activity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="glass p-6 h-full hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon size={32} weight="light" className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
