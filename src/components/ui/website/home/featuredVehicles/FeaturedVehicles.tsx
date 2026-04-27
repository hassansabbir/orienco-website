"use client";

import PremiumButton from "@/components/ui/PremiumButton";
import Typography from "@/components/ui/Typography";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Car } from "@/types";
import { getFileUrl } from "@/lib/utils";

interface FeaturedVehiclesProps {
  cars: Car[];
}

const VehicleCard = ({ car }: { car: Car }) => {
  return (
    <motion.div
      whileHover="hover"
      className="group relative overflow-hidden rounded-3xl bg-black aspect-[3/3] cursor-pointer"
    >
      <motion.div
        variants={{
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={getFileUrl(car.images[0])}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          unoptimized
        />
      </motion.div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />

      {/* Studio Light Effect (Top Right) */}
      <div className="absolute top-4 right-8 w-12 h-2 bg-white/40 blur-md rotate-[-30deg]" />

      <div className="absolute bottom-0 left-0 p-8 w-full">
        <Typography
          variant="h3"
          className="text-white text-2xl mb-1 font-semibold"
        >
          {car.name}
        </Typography>
        <Typography variant="p" className="text-white/70 text-sm">
          Starting from ${car.perHour}/hour
        </Typography>
      </div>
    </motion.div>
  );
};

const FeaturedVehicles = ({ cars = [] }: FeaturedVehiclesProps) => {
  // Show only the first 6 cars
  const displayCars = cars.slice(0, 6);

  return (
    <Section className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16"
      >
        <Typography
          variant="h1"
          className="text-black mb-4 font-italic italic text-5xl lg:text-6xl"
        >
          Featured Vehicles
        </Typography>
        <Typography
          variant="p"
          className="text-black/60 text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Experience premium car rental service with vehicles built for comfort,
          style, and reliability.
        </Typography>
        <Link href={"/cars"}>
          <PremiumButton
            variant="black"
            icon={<ArrowUpRight className="w-5 h-5" />}
            className="shadow-2xl hover:shadow-[#00000040] cursor-pointer"
          >
            View All
          </PremiumButton>
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {displayCars.map((car, index) => (
          <motion.div
            key={car._id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Link href={`/cars/${car._id}`}>
              <VehicleCard car={car} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default FeaturedVehicles;
