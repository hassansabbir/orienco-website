"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CarCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  images: StaticImageData[];
}

const CarCard = ({ id, name, description, price, images }: CarCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-500">
      {/* Name */}
      <Typography
        variant="h4"
        className="italic font-bold text-center text-2xl mb-4 tracking-tight text-gray-900"
      >
        {name}
      </Typography>

      {/* Image Carousel */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gray-50 border border-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white/60 backdrop-blur-sm text-gray-900 shadow-sm hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white/60 backdrop-blur-sm text-gray-900 shadow-sm hover:bg-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-black/10 backdrop-blur-sm">
          {images.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === currentImageIndex ? "bg-white w-4" : "bg-white/40"
              )}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <Typography
        variant="p"
        className="text-sm text-gray-500 text-center leading-relaxed mb-8 flex-grow line-clamp-3"
      >
        {description}
      </Typography>

      {/* Footer: Price & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="space-y-0.5">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
          </div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            per day
          </span>
        </div>

        <Link href={`/cars/${id}`}>
          <button className="px-6 py-3 cursor-pointer rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-900 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 active:translate-y-0">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
