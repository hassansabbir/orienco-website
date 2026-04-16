"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

import michealMia from "@/assets/team/micheal_mia.png";
import thomasKeller from "@/assets/team/thomas_keller.png";
import salesDirector from "@/assets/team/sales_director.png";

const teamMembers = [
  {
    name: "Micheal Mia",
    role: "Founder & CEO",
    image: michealMia,
  },
  {
    name: "Thomas Keller",
    role: "Lead Service Advisor",
    image: thomasKeller,
  },
  {
    name: "Aria Chen",
    role: "Sales Director",
    image: salesDirector,
  },
];

const TeamSection = () => {
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
              Meet the Team Behind Orienco.
            </Typography>
            <Typography
              variant="p"
              className="text-muted-foreground text-lg leading-relaxed px-4"
            >
              Delivering trust, quality, and performance in every detail for a
              seamless, exceptional experience.
            </Typography>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-muted cursor-pointer"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Text Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <Typography
                  variant="h4"
                  className="italic font-bold text-2xl md:text-3xl tracking-tight leading-none"
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="p"
                  className="text-white/70 text-sm font-medium tracking-wide uppercase"
                >
                  {member.role}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
