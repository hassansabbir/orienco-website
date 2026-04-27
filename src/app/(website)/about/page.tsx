import AboutHero from "@/components/ui/website/about/AboutHero";
import HeritageSection from "@/components/ui/website/about/HeritageSection";
import MissionValues from "@/components/ui/website/about/MissionValues";
import TeamSection from "@/components/ui/website/about/TeamSection";
import CTASection from "@/components/ui/website/CTASection";
import { SSRFetch } from "@/components/common/SSRFetch";
import { ApiResponse, TeamMember } from "@/types";

const page = () => {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <HeritageSection />
            <MissionValues />
            <SSRFetch<ApiResponse<TeamMember[]>> endpoint="/member">
                {(response) => <TeamSection members={response.data} />}
            </SSRFetch>
            <CTASection />
        </main>
    );
};

export default page;