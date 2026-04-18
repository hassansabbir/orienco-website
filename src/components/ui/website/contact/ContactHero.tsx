"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import contactHeroImg from "@/assets/contactBg.png";

const ContactHero = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden">
            {/* Hero Image */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0"
            >
                <Image
                    src={contactHeroImg}
                    alt="Orienco Team"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            {/* Hero Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-white text-5xl md:text-7xl lg:text-8xl font-bold italic tracking-tighter"
                >
                    Contact Us.
                </motion.h1>
            </div>

            {/* Decorative Gradient Overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
        </section>
    );
};

export default ContactHero;
