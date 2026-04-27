"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { FAQ } from "@/types";

interface FaqContentProps {
  faqs: FAQ[];
}

const FaqItem = ({ 
    item, 
    index, 
    isOpen, 
    toggle 
}: { 
    item: FAQ; 
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

const FaqContent = ({ faqs }: FaqContentProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faqs.length) return null;

    return (
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
                    {faqs.map((item, index) => (
                        <FaqItem
                            key={item._id}
                            item={item}
                            index={index}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FaqContent;
