"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import CarCard from "./CarCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Car } from "@/types";

interface CarsPageProps {
  cars: Car[];
}

// const categories = ["ALL", "SPORTS", "LUXURY", "SUV"];

const CARS_PER_PAGE = 6;

const CarsPage = ({ cars = [] }: CarsPageProps) => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCars = useMemo(() => {
    // Note: Filtering logic can be updated once categories are available in API
    if (activeCategory === "ALL") return cars;
    return cars;
  }, [activeCategory, cars]);

  const totalPages = Math.ceil(filteredCars.length / CARS_PER_PAGE);
  const currentCars = filteredCars.slice(
    (currentPage - 1) * CARS_PER_PAGE,
    currentPage * CARS_PER_PAGE,
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <Container>
        {/* Category Filters */}
        {/* <div className="flex justify-center items-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-8 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-300 min-w-[100px]",
                activeCategory === category
                  ? "bg-black text-white border-black shadow-lg shadow-black/10"
                  : "bg-white text-gray-500 border-gray-100 hover:border-gray-200 hover:bg-gray-50"
              )}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Cars Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {currentCars.map((car, index) => (
              <CarCard key={car._id} car={car} priority={index < 2} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-full hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={cn(
                  "w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300",
                  currentPage === i + 1
                    ? "bg-black text-white shadow-lg shadow-black/10"
                    : "bg-white text-gray-400 hover:text-gray-900 border border-gray-100 hover:border-gray-200",
                )}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-full hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CarsPage;
