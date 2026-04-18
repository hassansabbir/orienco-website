"use client";

import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { CarSpecs } from "@/constants/cars";
import { motion } from "framer-motion";

interface TechnicalSpecsProps {
  specs: CarSpecs;
}

const TechnicalSpecs = ({ specs }: TechnicalSpecsProps) => {
  const specItems = [
    { label: "Engine", value: specs.engine },
    { label: "Horsepower", value: specs.horsepower },
    { label: "Acceleration", value: specs.acceleration },
    { label: "Top Speed", value: specs.topSpeed },
    { label: "Transmission", value: specs.transmission },
    { label: "Drivetrain", value: specs.drivetrain },
    { label: "Seating Capacity", value: specs.seatingCapacity },
    { label: "Fuel Type", value: specs.fuelType },
  ];

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
              Technical Specifications
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
                  staggerChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {specItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-[#F8F8F8] p-8 rounded-2xl space-y-2 transition-all hover:bg-gray-100 hover:shadow-sm"
              >
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  {item.label}
                </span>
                <p className="text-gray-900 text-xl font-bold">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TechnicalSpecs;
