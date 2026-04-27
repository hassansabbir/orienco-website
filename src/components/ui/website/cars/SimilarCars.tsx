"use client";

import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { Car } from "@/types";
import CarCard from "./CarCard";
import { motion } from "framer-motion";

interface SimilarCarsProps {
  currentCarId: string;
  category: string;
  allCars: Car[];
}

const SimilarCars = ({ currentCarId, category, allCars = [] }: SimilarCarsProps) => {
  // Find similar cars based on brand (category), excluding the current one
  const similarCars = allCars
    .filter((car) => car.brand === category && car._id !== currentCarId)
    .slice(0, 3);

  // If no similar cars in same category, show any other cars
  if (similarCars.length === 0) {
    similarCars.push(
      ...allCars.filter((car) => car._id !== currentCarId).slice(0, 3)
    );
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Similar Cars
            </Typography>
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
            {similarCars.map((car) => (
              <motion.div
                key={car._id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SimilarCars;
