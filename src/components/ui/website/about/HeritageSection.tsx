import React from "react";
import Container from "@/components/ui/Container";
import { SSRFetch } from "@/components/common/SSRFetch";
import HeritageSectionContent from "./HeritageSectionContent";
import { ApiResponse, AboutUs } from "@/types";

const HeritageSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <Container>
        <SSRFetch<ApiResponse<AboutUs[]>> endpoint="/about-us?platform=carRental">
          {(response) => (
            <HeritageSectionContent heritageItems={response.data} />
          )}
        </SSRFetch>
      </Container>
    </section>
  );
};

export default HeritageSection;
