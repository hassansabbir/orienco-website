"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import bannerBg from "@/assets/bannerBg.png";
import PremiumButton from "@/components/ui/PremiumButton";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative flex min-h-screen w-full items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerBg}
          alt="Luxury Car Banner"
          fill
          sizes=""
          priority
          className="object-cover"
        />
        {/* Subtle Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-8xl font-semibold italic text-white mb-6 tracking-tight"
        // style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
        >
          Luxury Car for Rental
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm md:text-lg text-white/90 max-w-2xl mb-6 leading-relaxed font-light font-semibold"
        >
          Drive elegance and power choose from our premium collection of luxury vehicles, designed for unmatched comfort and performance.
        </motion.p>

        <Link href={"/cars"} className="w-fit">
          <PremiumButton
            variant="black"
            icon={<MoveUpRight className="h-5 w-5" />}
            className="cursor-pointer"
          >
            See All Cars
          </PremiumButton></Link>
      </div>
    </section>
  );
};

export default Banner;
