"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typography from "@/components/ui/Typography";
import { AboutUs } from "@/types";
import { cn } from "@/lib/utils";

interface HeritageSectionContentProps {
  heritageItems: AboutUs[];
}

const HeritageSectionContent = ({ heritageItems }: HeritageSectionContentProps) => {
  // Helper to get image URL
  const getImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ? 
      new URL(process.env.NEXT_PUBLIC_API_URL).origin : 
      "http://10.10.7.94:5004";
    return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  };

  if (!heritageItems.length) return null;

  return (
    <div className="space-y-32">
      {heritageItems.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={item._id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={cn("relative", !isEven && "lg:order-2")}
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                <Image
                  src={getImageUrl(item.image)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)] scale-100 group-hover:scale-110 will-change-transform transform-gpu"
                  unoptimized
                />
              </div>
              <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-[3rem]" />
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className={cn("space-y-8", !isEven && "lg:order-1")}
            >
              <div className="space-y-4">
                <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase">
                  Heritage
                </span>
                <Typography
                  variant="h2"
                  className="italic font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight"
                >
                  {item.title}
                </Typography>
              </div>

              <div className="space-y-6">
                <Typography variant="p" className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
                  {item.bodyText}
                </Typography>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default HeritageSectionContent;
