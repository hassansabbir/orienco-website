"use client";

import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import PremiumButton from "@/components/ui/PremiumButton";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images
import mercedesEmblem from "@/assets/whyChooseUs/mercedes-emblem-bw.png";
import carPlaceholder from "@/assets/whyChooseUs/car-placeholder-bw.png";

const WhyChooseUs = () => {
    return (
        <Section className="py-20 bg-black">
            <div className="container mx-auto">
                <Typography variant="h1" className="text-white mb-16 italic font-bold max-w-4xl leading-tight">
                    Why Choose Orienco Luxury Car Rental.
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Top Left: Mercedes Emblem Image */}
                    <motion.div
                        whileHover="hover"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:col-span-2 relative h-[400px] border border-white/20 rounded-lg overflow-hidden group"
                    >
                        <motion.div
                            variants={{
                                hover: { scale: 1.1 }
                            }}
                            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={mercedesEmblem}
                                alt="Mercedes Emblem"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 66vw"
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                    </motion.div>

                    {/* Top Right: Easy Reservation Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="md:col-span-1 bg-[#1a1a1a] p-10 border border-white/20 rounded-lg flex flex-col justify-between"
                    >
                        <div>
                            <Typography variant="h3" className="text-white italic mb-6 text-2xl">
                                Easy Reservation & Flexible Plans
                            </Typography>
                            <Typography variant="p" className="text-white/60 mb-8 leading-relaxed">
                                Contact us to check availability and reserve your preferred car with quick confirmation. Choose hourly, daily, or monthly rental options with simple and transparent pricing.
                            </Typography>
                        </div>
                        <PremiumButton variant="white" className="w-full">
                            See All Cars
                        </PremiumButton>
                    </motion.div>

                    {/* Bottom Left: Premium Fleet Selection Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="md:col-span-1 bg-[#1a1a1a] p-10 border border-white/20 rounded-lg flex flex-col justify-between"
                    >
                        <div>
                            <Typography variant="h3" className="text-white italic mb-6 text-2xl">
                                Premium Fleet Selection
                            </Typography>
                            <Typography variant="p" className="text-white/60 mb-8 leading-relaxed">
                                Drive from a wide range of luxury, sports, and economy cars, all professionally well-maintained to ensure maximum comfort, safety, reliability, and top-tier performance on every journey.
                            </Typography>
                        </div>
                        <PremiumButton variant="white" className="w-full">
                            See All Cars
                        </PremiumButton>
                    </motion.div>

                    {/* Bottom Right: Second Image Placeholder */}
                    <motion.div
                        whileHover="hover"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="md:col-span-2 relative h-[400px] border border-white/20 rounded-lg overflow-hidden group"
                    >
                        <motion.div
                            variants={{
                                hover: { scale: 1.1 }
                            }}
                            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={carPlaceholder}
                                alt="Luxury Car"
                                fill
                                sizes="(max-width: 768px) 100vw, 66vw"
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
