"use client";

import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        id: 1,
        name: "Marcus Weber",
        role: "Doctor",
        rating: 5.0,
        text: "Every trip with Orienco was seamless. Their wide selection of luxury cars and smooth booking process made my experience stress-free and enjoyable.",
        avatar: "https://i.pravatar.cc/150?u=marcus",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
        large: true,
    },
    {
        id: 2,
        name: "Marcus Weber",
        role: "Doctor",
        rating: 4.9,
        text: "Orienco exceeded my expectations with clear communication and top-quality vehicles. Everything was professional and hassle-free.",
        avatar: "https://i.pravatar.cc/150?u=marcus2",
    },
    {
        id: 3,
        name: "Marcus Weber",
        role: "Doctor",
        rating: 5.0,
        text: "Exceptional service and genuine care throughout the entire rental. The team made everything effortless from pickup to return.",
        avatar: "https://i.pravatar.cc/150?u=marcus3",
    },
    {
        id: 4,
        name: "Marcus Weber",
        role: "Doctor",
        rating: 5.0,
        text: "From booking to delivery, everything was flawless. Orienco shows true dedication to customer satisfaction and premium service.",
        avatar: "https://i.pravatar.cc/150?u=marcus4",
    },
    {
        id: 5,
        name: "Marcus Weber",
        role: "Doctor",
        rating: 4.8,
        text: "A refined experience from start to finish. Reliable service, clean luxury cars, and excellent support made it outstanding.",
        avatar: "https://i.pravatar.cc/150?u=marcus5",
    },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
    if (review.large) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden h-full border border-gray-100"
            >
                {review.image && (
                    <div className="relative w-full h-[300px] lg:min-h-[300px] lg:flex-1 shrink-0">
                        <div className="absolute inset-0">
                            <Image
                                src={review.image}
                                alt="Review highlight"
                                fill
                                priority={review.large}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover object-top"
                            />
                        </div>
                        {/* Smooth Gradient Fade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                    </div>
                )}
                
                <div className="p-8 pt-4 flex flex-col justify-end relative z-10 bg-white shrink-0">
                    {/* Rating Badge */}
                    <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-fit px-3 py-1.5 rounded-full mb-6">
                        <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                        <span className="text-sm font-semibold text-gray-900">{review.rating.toFixed(1)}</span>
                    </div>

                    <Typography variant="p" className="text-gray-600 italic text-[15px] leading-relaxed mb-8">
                        &quot;{review.text}&quot;
                    </Typography>

                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                            <Image
                                src={review.avatar}
                                alt={review.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <Typography variant="p" className="text-gray-900 font-semibold text-base leading-tight">
                                {review.name}
                            </Typography>
                            <Typography variant="p" className="text-gray-500 text-sm mt-0.5">
                                {review.role}
                            </Typography>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between h-full"
        >
            <div>
                {/* Rating Badge */}
                <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-fit px-3 py-1.5 rounded-full mb-6">
                    <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    <span className="text-sm font-semibold text-gray-900">{review.rating.toFixed(1)}</span>
                </div>

                <Typography variant="p" className="text-gray-600 italic text-[15px] leading-relaxed mb-8">
                    &quot;{review.text}&quot;
                </Typography>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                    />
                </div>
                <div>
                    <Typography variant="p" className="text-gray-900 font-semibold text-base leading-tight">
                        {review.name}
                    </Typography>
                    <Typography variant="p" className="text-gray-500 text-sm mt-0.5">
                        {review.role}
                    </Typography>
                </div>
            </div>
        </motion.div>
    );
};

const WhatOurCustomersSay = () => {
    const mainReview = reviews.find(r => r.large);
    const sideReviews = reviews.filter(r => !r.large);

    return (
        <Section className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <Typography variant="h1" className="text-black mb-4 italic font-bold text-4xl lg:text-5xl">
                        What Our Clients Say
                    </Typography>
                    <Typography variant="p" className="text-black/60 text-lg">
                        Real experience from customer who found their perfect car at Orienco.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Large Hero Review */}
                    <div className="lg:col-span-1">
                        {mainReview && <ReviewCard review={mainReview} />}
                    </div>

                    {/* Small Reviews Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sideReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhatOurCustomersSay;