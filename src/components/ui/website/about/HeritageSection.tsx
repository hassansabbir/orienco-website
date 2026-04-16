"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heritageImg from "@/assets/about/heritage.png";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

const HeritageSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
              <Image
                src={heritageImg}
                alt="Heritage Cars"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)] scale-100 group-hover:scale-110 will-change-transform transform-gpu"
              />
            </div>
            {/* Subtle floating shadow/glow behind image */}
            <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-[3rem]" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase">
                Heritage
              </span>
              <Typography
                variant="h2"
                className="italic font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight"
              >
                A Legacy of Automotive Excellence
              </Typography>
            </div>

            <div className="space-y-6">
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-lg">
                It started with a simple vision: to make the world&apos;s most extraordinary
                vehicles accessible to those who appreciate true automotive
                craftsmanship. In 2012, our founders opened a boutique showroom in
                Los Angeles with just five exotic cars.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-lg">
                We quickly realized that our clients weren&apos;t just renting a
                car—they were renting an experience. From the scent of
                hand-stitched leather to the roar of a V12 engine, every detail
                mattered. This realization transformed our business from a simple
                rental agency into a full-service concierge experience.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-lg">
                Today, Orienco boasts a curated fleet of over 120 pristine
                vehicles, serving elite clientele worldwide. We remain dedicated
                to our original promise: delivering uncompromised luxury,
                performance, and white-glove service with every reservation.
              </Typography>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeritageSection;
