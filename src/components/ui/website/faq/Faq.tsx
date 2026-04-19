
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const faqData = [
    {
        question: "What is orienco car rental?",
        answer: "Orienco is a premium car rental platform that connects car owners with travelers looking for high-quality, reliable vehicles for their journeys."
    },
    {
        question: "Is orienco car rental suitable for solo travelers?",
        answer: "Yes, we offer a wide range of vehicles, from compact cars to luxury sedans, perfect for solo travelers seeking comfort and style."
    },
    {
        question: "Can both customers and car owners use the platform?",
        answer: "Absolutely! Car owners can list their vehicles to earn extra income, while customers can browse and book their perfect ride."
    },
    {
        question: "Is orienco car rental free to use?",
        answer: "Browsing and listing are free. We charge a transparent service fee only when a booking is successfully completed."
    },
    {
        question: "How does orienco car rental ensure quality and safety?",
        answer: "We verify all users and vehicles on our platform. Every car undergoes a quality check, and we provide 24/7 support for peace of mind."
    },
    {
        question: "Can I manage everything in one place?",
        answer: "Absolutely. From searching and booking cars to payments, communication, and trip management—everything is handled in one simple dashboard."
    }
];

const FaqItem = ({ 
    item, 
    index, 
    isOpen, 
    toggle 
}: { 
    item: typeof faqData[0]; 
    index: number; 
    isOpen: boolean; 
    toggle: () => void; 
}) => {
    return (
        <div className="border-b border-gray-200 py-6 last:border-0">
            <button
                onClick={toggle}
                className="w-full flex items-start justify-between text-left group transition-all duration-300"
            >
                <div className="flex items-start gap-6 md:gap-12">
                    <span className="text-lg md:text-xl font-medium text-gray-900 italic opacity-80 pt-1">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <Typography 
                        variant="h4" 
                        className={cn(
                            "text-lg md:text-xl font-semibold transition-colors duration-300",
                            isOpen ? "text-primary" : "text-gray-900"
                        )}
                    >
                        {item.question}
                    </Typography>
                </div>
                <div className={cn(
                    "flex-shrink-0 ml-4 mt-1 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-black border-black text-white" : "group-hover:border-gray-900"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pl-[4.5rem] md:pl-[6.5rem] pr-12 pt-4">
                            <Typography variant="p" className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {item.answer}
                            </Typography>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(5); // Default open the last one as per image

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left side: Title */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <Typography 
                                variant="h2" 
                                className="text-5xl md:text-6xl font-light text-gray-500 leading-tight"
                            >
                                Frequently Asked
                            </Typography>
                            <Typography 
                                variant="h1" 
                                className="text-6xl md:text-7xl font-bold text-black mt-2"
                            >
                                Question
                            </Typography>
                        </motion.div>
                    </div>

                    {/* Right side: Accordion */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="border-t border-gray-200"
                        >
                            {faqData.map((item, index) => (
                                <FaqItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    isOpen={openIndex === index}
                                    toggle={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;