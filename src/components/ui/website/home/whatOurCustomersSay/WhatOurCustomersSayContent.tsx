"use client";

import Typography from "@/components/ui/Typography";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Review } from "@/types";

interface WhatOurCustomersSayContentProps {
  reviews: Review[];
}

const ReviewCard = ({
  review,
  large = false,
}: {
  review: Review;
  large?: boolean;
}) => {
  // Helper to get image URL
  const getImageUrl = (path: string) => {
    if (!path) return "https://i.pravatar.cc/150";
    if (path.startsWith("http")) return path;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
      ? new URL(process.env.NEXT_PUBLIC_API_URL).origin
      : "http://10.10.7.94:5004";
    return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  };

  if (large) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden h-full border border-gray-100"
      >
        <div className="relative w-full h-[300px] lg:min-h-[300px] lg:flex-1 shrink-0 bg-slate-100">
          <div className="absolute inset-0">
            <Image
              src={getImageUrl(review.image)}
              alt="Review highlight"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top"
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="p-8 pt-4 flex flex-col justify-end relative z-10 bg-white shrink-0">
          <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-fit px-3 py-1.5 rounded-full mb-6">
            <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
            <span className="text-sm font-semibold text-gray-900">
              {review.rating.toFixed(1)}
            </span>
          </div>

          <Typography
            variant="p"
            className="text-gray-600 italic text-[15px] leading-relaxed mb-8"
          >
            &quot;{review.review}&quot;
          </Typography>

          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
              <Image
                src={getImageUrl(review.image)}
                alt={review.name}
                fill
                sizes="48px"
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <Typography
                variant="p"
                className="text-gray-900 font-semibold text-base leading-tight"
              >
                {review.name}
              </Typography>
              <Typography variant="p" className="text-gray-500 text-sm mt-0.5">
                {review.designation}
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
        <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-fit px-3 py-1.5 rounded-full mb-6">
          <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
          <span className="text-sm font-semibold text-gray-900">
            {review.rating.toFixed(1)}
          </span>
        </div>

        <Typography
          variant="p"
          className="text-gray-600 italic text-[15px] leading-relaxed mb-8"
        >
          &quot;{review.review}&quot;
        </Typography>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          <Image
            src={getImageUrl(review.image)}
            alt={review.name}
            fill
            sizes="48px"
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <Typography
            variant="p"
            className="text-gray-900 font-semibold text-base leading-tight"
          >
            {review.name}
          </Typography>
          <Typography variant="p" className="text-gray-500 text-sm mt-0.5">
            {review.designation}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

const WhatOurCustomersSayContent = ({
  reviews,
}: WhatOurCustomersSayContentProps) => {
  if (!reviews.length) return null;

  // Make the first review the "large" one
  const mainReview = reviews[0];
  const sideReviews = reviews?.slice(1);

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Typography
          variant="h1"
          className="text-black mb-4 italic font-bold text-4xl lg:text-5xl"
        >
          What Our Clients Say
        </Typography>
        <Typography variant="p" className="text-black/60 text-lg">
          Real experience from customer who found their perfect car at Orienco.
        </Typography>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Hero Review */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1"
        >
          <ReviewCard review={mainReview} large />
        </motion.div>

        {/* Small Reviews Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sideReviews.map((review, index) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurCustomersSayContent;
