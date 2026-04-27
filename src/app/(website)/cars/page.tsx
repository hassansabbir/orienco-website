import CarsHero from "@/components/ui/website/cars/CarsHero";
import CarsPage from "@/components/ui/website/cars/CarsPage";
import { SSRFetch } from "@/components/common/SSRFetch";
import { ApiResponse, Car } from "@/types";

const page = () => {
    return (
        <main>
            <CarsHero />
            <SSRFetch<ApiResponse<Car[]>> endpoint="/car">
                {(response) => <CarsPage cars={response.data} />}
            </SSRFetch>
        </main>
    );
};

export default page;