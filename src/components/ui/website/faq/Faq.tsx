import { SSRFetch } from "@/components/common/SSRFetch";
import FaqContent from "./FaqContent";
import { ApiResponse, FAQ } from "@/types";

const Faq = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SSRFetch<ApiResponse<FAQ[]>> endpoint="/faq?platform=carRental">
                    {(response) => (
                        <FaqContent faqs={response.data} />
                    )}
                </SSRFetch>
            </div>
        </section>
    );
};

export default Faq;