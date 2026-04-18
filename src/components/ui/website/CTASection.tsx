"use client";

import Typography from "@/components/ui/Typography";
import PremiumButton from "@/components/ui/PremiumButton";
import { Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ctaBg from "@/assets/ctsBg.jpg";
import Link from "next/link";

const CTASection = () => {
    return (
        <section className="relative w-full h-[600px] lg:h-[1000px] flex items-center justify-center overflow-hidden">
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    // NOTE: Replace this src with your actual background image asset
                    src={ctaBg}
                    alt="Contact Background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                />

                {/* Subtle dark overlay to ensure the white text remains readable regardless of the background image */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto flex flex-col items-center text-center -translate-y-12 lg:-translate-y-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <Typography variant="h1" className="text-white mb-8 italic font-bold text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
                        Let&apos;s Get in Touch
                    </Typography>

                    <Link href={"/contact"}><PremiumButton
                        variant="white"
                        className="mx-auto px-8 py-4 shadow-[0_0_40px_rgba(255,255,255,0.2)] ring-1 ring-white/10 text-lg cursor-pointer"
                        icon={<Phone className="w-5 h-5" />}
                    >
                        Book A Call
                    </PremiumButton></Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
