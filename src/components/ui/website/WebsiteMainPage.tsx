import Banner from "./home/banner/Banner";
import FeaturedVehicles from "./home/featuredVehicles/FeaturedVehicles";
import Features from "./home/features/Features";
import WhyChooseUs from "./home/whyChooseUs/WhyChooseUs";
import WhatOurCustomersSay from "./home/whatOurCustomersSay/WhatOurCustomersSay";
import CTASection from "./CTASection";

const WebsiteMainPage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Features />
      <FeaturedVehicles />
      <WhyChooseUs />
      <WhatOurCustomersSay />
      <CTASection />
    </div>
  );
};



export default WebsiteMainPage;

