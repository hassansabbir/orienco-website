"use client";

import { motion } from "framer-motion";
import { Diamond, Handshake, Shield, Clock, Globe, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

const values = [
  {
    icon: Diamond,
    title: "Uncompromising Quality",
    description:
      "Every vehicle in our fleet is meticulously maintained, detailed, and inspected before each delivery to ensure flawless condition.",
  },
  {
    icon: Handshake,
    title: "White-Glove Service",
    description:
      "From airport deliveries to 24/7 concierge support, we anticipate your needs and handle the details so you can focus on the drive.",
  },
  {
    icon: Shield,
    title: "Absolute Discretion",
    description:
      "We value the privacy of our high-profile clients, offering completely confidential booking and delivery processes.",
  },
  {
    icon: Clock,
    title: "Effortless Convenience",
    description:
      "Time is the ultimate luxury. We've streamlined our reservation and return processes to be as quick and seamless as possible.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "Whether you're driving in Los Angeles, Miami, or Dubai, expect the exact same level of Orienco excellence and attention to detail.",
  },
  {
    icon: MapPin,
    title: "Curated Experiences",
    description:
      "We don't just hand over the keys. We provide curated driving routes and recommendations tailored to the specific vehicle you've chosen.",
  },
];

const MissionValues = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              className="italic font-bold text-4xl md:text-5xl lg:text-7xl text-foreground mb-8"
            >
              Our Mission and the Values That Drive Us
            </Typography>
            <Typography
              variant="p"
              className="text-muted-foreground text-lg leading-relaxed px-4"
            >
              Our mission is to provide an effortless, high-end rental experience
              that matches the prestige of the vehicles we offer. These core
              values guide every interaction.
            </Typography>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-muted/30 border border-transparent hover:border-border transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <Typography
                    variant="h6"
                    className="italic font-bold text-xl text-foreground"
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-muted-foreground leading-relaxed text-sm"
                  >
                    {value.description}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MissionValues;
