import { notFound } from "next/navigation";
import CarDetails from "@/components/ui/website/cars/CarDetails";
import TechnicalSpecs from "@/components/ui/website/cars/TechnicalSpecs";
import SimilarCars from "@/components/ui/website/cars/SimilarCars";
import { SSRFetch } from "@/components/common/SSRFetch";
import { ApiResponse, Car } from "@/types";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { getFileUrl } from "@/lib/utils";
import api from "@/lib/api";

interface CarPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CarPageProps): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const response = await api.get<ApiResponse<Car>>(`/car/${id}`);
    const car = response.data;

    return constructMetadata({
      title: `${car.name} | Orienco Luxury Car Rental`,
      description: car.description,
      image: getFileUrl(car.images[0])
    });
  } catch (error) {
    return constructMetadata({ title: "Car Not Found" });
  }
}

const CarPage = async ({ params }: CarPageProps) => {
  const { id } = await params;

  return (
    <main>
      <SSRFetch<ApiResponse<Car>> endpoint={`/car/${id}`}>
        {(response) => {
          const car = response.data;
          if (!car) return notFound();

          return (
            <>
              <CarDetails car={car} />
              
              {/* Separator */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-gray-100 w-full" />
              </div>

              <TechnicalSpecs car={car} />

              {/* Separator */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-gray-100 w-full" />
              </div>

              <SSRFetch<ApiResponse<Car[]>> endpoint="/car">
                {(allCarsResponse) => (
                  <SimilarCars 
                    currentCarId={car._id} 
                    category={car.brand} 
                    allCars={allCarsResponse.data} 
                  />
                )}
              </SSRFetch>
            </>
          );
        }}
      </SSRFetch>
    </main>
  );
};

export default CarPage;