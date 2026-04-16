"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { mockCars } from "@/constants/cars";
import CarDetails from "@/components/ui/website/cars/CarDetails";

interface CarPageProps {
  params: Promise<{ id: string }>;
}

const CarPage = ({ params }: CarPageProps) => {
  const { id } = use(params);
  
  const car = mockCars.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  return (
    <main>
      <CarDetails car={car} />
    </main>
  );
};

export default CarPage;