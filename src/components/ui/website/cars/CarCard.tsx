"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { cn, getFileUrl } from "@/lib/utils";
import { Car } from "@/types";

interface CarCardProps {
  car: Car;
  priority?: boolean;
}

const CarCard = ({ car, priority = false }: CarCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = useMemo(() => {
    const items: { type: "video" | "image"; url: string }[] = [];
    if (car.video) {
      items.push({ type: "video", url: getFileUrl(car.video) });
    }
    if (car.images && car.images.length > 0) {
      car.images.forEach((img) => {
        items.push({ type: "image", url: getFileUrl(img) });
      });
    }
    return items;
  }, [car.video, car.images]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-500">
      {/* Name */}
      <Typography
        variant="h4"
        className="italic font-bold text-center text-2xl mb-4 tracking-tight text-gray-900"
      >
        {car.name}
      </Typography>

      {/* Media Carousel */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gray-50 border border-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {currentSlide.type === "video" ? (
              <video
                src={currentSlide.url}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={currentSlide.url}
                alt={car.name}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                unoptimized
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                prevSlide();
              }}
              className="p-2 rounded-full bg-white/60 backdrop-blur-sm text-gray-900 shadow-sm hover:bg-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextSlide();
              }}
              className="p-2 rounded-full bg-white/60 backdrop-blur-sm text-gray-900 shadow-sm hover:bg-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-black/10 backdrop-blur-sm">
            {slides.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === currentIndex ? "bg-white w-4" : "bg-white/40"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <Typography
        variant="p"
        className="text-sm text-gray-500 text-center leading-relaxed mb-8 flex-grow line-clamp-3"
      >
        {car.description}
      </Typography>

      {/* Footer: Price & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="space-y-0.5">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">${car.perDay}</span>
          </div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            per day
          </span>
        </div>

        <Link href={`/cars/${car._id}`}>
          <button className="px-6 py-3 cursor-pointer rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-900 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 active:translate-y-0">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
