
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import PremiumButton from "@/components/ui/PremiumButton";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import blackCardBgCarImage from "@/assets/blackCardBgCarImage.png";

const mainCardData = {
  title: "Orienco luxury Car Rental",
  description:
    "Orienco luxury Car Rental delivers refined driving experiences with a premium fleet and exceptional service, offering tailored solutions for business, leisure, and special occasions.",
  image: "/images/bmw-m4.png", // Assuming an image path
  buttonText: "See All Cars",
  link: "#",
};

const smallCardsData = [
  {
    value: "120+",
    label: "Vehicles Available",
    description:
      "A diverse fleet of well-maintained cars ready for every journey from daily drives to luxury experiences.",
  },
  {
    value: "35+",
    label: "Premium Car Models",
    description:
      "Choose from top-tier brands and the latest models, ensuring comfort, performance, and style.",
  },
  {
    value: "99%",
    label: "Customer Satisfaction",
    description:
      "Trusted by our clients for reliable service, smooth booking, and exceptional driving experiences.",
  },
  {
    value: "8+",
    label: "Years of Experience",
    description:
      "Delivering quality car rental services with industry expertise and a strong commitment to excellence.",
  },
];

const Features = () => {
  return (
    <Section className="py-16 bg-slate-100">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Card */}
        <div className="relative bg-black rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
          {/* White flash highlight in top-left */}
          <div className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-4xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),rgba(255,255,255,0.1),transparent)] opacity-80" />
          {/* Low-visibility car image at the bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-15">
            <Image
              src={blackCardBgCarImage}
              alt="Luxury car"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-bottom-right"
              priority={false}
            />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h3" className="text-white">
                {mainCardData.title}
              </Typography>
              <ArrowUpRight className="text-white w-6 h-6" />
            </div>
            <Typography variant="p" className="text-white/80 mb-8">
              {mainCardData.description}
            </Typography>
          </div>
          <div className="relative z-10 mt-8">
            <PremiumButton variant="white" className="w-full">
              {mainCardData.buttonText}
            </PremiumButton>
          </div>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 lg:col-span-2 lg:grid-cols-2 gap-8">
          {smallCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Typography variant="h3" className="text-black mb-2">
                  {card.value}
                </Typography>
                <Typography variant="p" className="text-black/60 text-sm mb-4">
                  {card.label}
                </Typography>
                <Typography variant="p" className="text-black/80 text-base">
                  {card.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
