"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { Car } from "@/constants/cars";
import { cn } from "@/lib/utils";

interface CarDetailsProps {
  car: Car;
}

const CarDetails = ({ car }: CarDetailsProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <section className="py-20 bg-white min-h-screen">
      <Container>
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/cars"
            className="inline-flex cursor-pointer items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="italic">Back to Cars</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-xl shadow-black/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={car.images[selectedImageIndex]}
                    alt={car.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* In-image indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-black/10 backdrop-blur-sm">
                {car.images.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      i === selectedImageIndex ? "bg-white w-4" : "bg-white/40"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300",
                    selectedImageIndex === index
                      ? "border-black shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${car.name} view ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 150px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-10">
            {/* Title & Price */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-bold tracking-wider uppercase">
                {car.category}
              </div>
              <div className="space-y-3">
                <Typography
                  variant="h1"
                  className="italic font-bold text-5xl md:text-6xl text-gray-900 tracking-tight leading-[1.1]"
                >
                  {car.name}
                </Typography>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${car.price}
                  </span>
                  <span className="text-gray-400 font-medium">/ per day</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <Typography
              variant="p"
              className="text-gray-500 text-lg leading-relaxed max-w-xl"
            >
              {car.description}
            </Typography>

            {/* CTA Button */}
            <button className="flex items-center gap-4 px-10 py-5 rounded-2xl bg-[#1A1A1A] text-white font-semibold hover:bg-black shadow-2xl shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span className="text-xl">Book A Call</span>
              <ArrowUpRight size={24} />
            </button>

            {/* Features Section */}
            <div className="pt-10 border-t border-gray-100 space-y-8">
              <Typography variant="h3" className="font-bold text-2xl text-gray-900">
                Features
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                {car.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 font-medium transition-colors group-hover:text-gray-900">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CarDetails;
