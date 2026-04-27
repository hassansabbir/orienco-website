"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { Car } from "@/types";
import { cn, getFileUrl } from "@/lib/utils";
import PremiumButton from "../../PremiumButton";

interface CarDetailsProps {
  car: Car;
}

const CarDetails = ({ car }: CarDetailsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  if (slides.length === 0) return null;

  const currentSlide = slides[selectedIndex];

  return (
    <section className="pt-20 pb-20 bg-white min-h-screen">
      <Container>
        {/* Back Link */}
        <div className="mt-10">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-all hover:-translate-x-1"
          >
            <ArrowLeft size={20} />
            <span className="italic">Back to Cars</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center items-start">
          {/* Left Column - Gallery */}
          <div className="space-y-6">
            {/* Main Media */}
            <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-xl shadow-black/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
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
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      unoptimized
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* In-image indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-black/10 backdrop-blur-sm">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      i === selectedIndex ? "bg-white w-4" : "bg-white/40"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 bg-gray-100",
                    selectedIndex === index
                      ? "border-black shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  {slide.type === "video" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-8 h-8 text-black/40 relative z-10" />
                      <video
                        src={slide.url}
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                    </div>
                  ) : (
                    <Image
                      src={slide.url}
                      alt={`${car.name} view ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 150px"
                      className="object-cover"
                      unoptimized
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-7">
            {/* Title & Price */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-bold tracking-wider uppercase">
                {car.brand}
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
                    ${car.perDay}
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
            <Link href="/contact">
              <PremiumButton
                variant="black"
                icon={<ArrowUpRight className="w-5 h-5" />}
                className="w-fit px-6 py-3 cursor-pointer"
              >
                Book a Call
              </PremiumButton>
            </Link>

            {/* Features Section */}
            <div className="pt-8 border-t border-gray-100 space-y-6 mt-5">
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
