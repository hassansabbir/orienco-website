import Banner from "./home/banner/Banner";
import FeaturedVehicles from "./home/featuredVehicles/FeaturedVehicles";
import Features from "./home/features/Features";
import WhyChooseUs from "./home/whyChooseUs/WhyChooseUs";
import WhatOurCustomersSay from "./home/whatOurCustomersSay/WhatOurCustomersSay";
import CTASection from "./CTASection";
import Faq from "./faq/Faq";
import { SSRFetch } from "@/components/common/SSRFetch";
import { ApiResponse, Car } from "@/types";

const WebsiteMainPage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Features />
      <SSRFetch<ApiResponse<Car[]>> endpoint="/car">
        {(response) => <FeaturedVehicles cars={response.data} />}
      </SSRFetch>
      <WhyChooseUs />
      <WhatOurCustomersSay />
      <Faq />
      <CTASection />
    </div>
  );
};

export default WebsiteMainPage;
