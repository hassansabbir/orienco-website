import { use } from "react";
import { notFound } from "next/navigation";
import { mockCars } from "@/constants/cars";
import CarDetails from "@/components/ui/website/cars/CarDetails";
import TechnicalSpecs from "@/components/ui/website/cars/TechnicalSpecs";
import SimilarCars from "@/components/ui/website/cars/SimilarCars";

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
      
      {/* Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-100 w-full" />
      </div>

      <TechnicalSpecs specs={car.specs} />

      {/* Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-100 w-full" />
      </div>

      <SimilarCars currentCarId={car.id} category={car.category} />
    </main>
  );
};

export default CarPage;