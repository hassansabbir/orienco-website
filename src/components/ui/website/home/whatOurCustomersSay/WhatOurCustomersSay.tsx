import Section from "@/components/ui/Section";
import { SSRFetch } from "@/components/common/SSRFetch";
import WhatOurCustomersSayContent from "./WhatOurCustomersSayContent";
import { ApiResponse, Review } from "@/types";

const WhatOurCustomersSay = () => {
  return (
    <Section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <SSRFetch<ApiResponse<Review[]>> endpoint="/review?platform=carRental">
        {(response) => <WhatOurCustomersSayContent reviews={response?.data} />}
      </SSRFetch>
    </Section>
  );
};

export default WhatOurCustomersSay;
