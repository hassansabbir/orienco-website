import ContactHero from "@/components/ui/website/contact/ContactHero";
import ContactInfo from "@/components/ui/website/contact/ContactInfo";
import { SSRFetch } from "@/components/common/SSRFetch";
import { ApiResponse, ContactInfoData } from "@/types";

const page = () => {
    return (
        <div>
            <ContactHero />
            <SSRFetch<ApiResponse<ContactInfoData>> endpoint="/contact/info?platform=carRental">
                {(response) => <ContactInfo contactData={response.data} />}
            </SSRFetch>
        </div>
    );
};

export default page;