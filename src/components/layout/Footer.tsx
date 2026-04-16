"use client";

import Link from "next/link";
import Image from "next/image";
import { footerSections, socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { Globe, Play, Share2, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const iconMap = {
  twitter: BsTwitter || Globe,
  instagram: BsInstagram || Share2,
  facebook: FaFacebookF || Users,
  youtube: BsYoutube || Play,
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-0 relative overflow-hidden mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center p-0 overflow-hidden">
                <Image
                  src={logo}
                  alt={siteConfig.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </Link>
            <Typography variant="p" className="max-w-xs text-muted-foreground leading-relaxed text-sm">
              At Orienco, we are committed to keeping your journeys smooth and
              worry-free. From luxury and economy cars to flexible rental
              solutions, we provide high-quality vehicles and reliable service
              that ensure comfort, safety, and confidence on every drive.
            </Typography>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <Typography variant="h6" className="font-semibold text-lg text-foreground">
                {section.title}
              </Typography>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={
                        section.title === "Business Hours" || section.title === "Contact Info"
                          ? "text-muted-foreground pointer-events-none text-sm"
                          : "text-muted-foreground hover:text-foreground transition-colors text-sm"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <Typography variant="p" className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Orienco Luxury Car Rental. All rights reserved.
          </Typography>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap] || BsTwitter;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full border border-border text-foreground hover:bg-black hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Background Decorative Text */}
      <div className="absolute inset-x-0 bottom-0 select-none pointer-events-none flex justify-center z-0 overflow-hidden h-64 items-end">
        <h2 className="text-[12vw] font-black tracking-[-0.03em] whitespace-nowrap text-black/[0.06] uppercase leading-none translate-y-[25%] pointer-events-none">
          ORIENCO CAR RENTAL
        </h2>
      </div>

      {/* Background Gradient for Decorative Text */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none z-[1]" />
    </footer>
  );
}
