"use client";

import Link from "next/link";
import { footerSections, socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { Mail, ArrowRight, Globe, Link as LinkIcon, Share2, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";

const iconMap = {
  twitter: Globe,
  linkedin: LinkIcon,
  github: Code2,
  instagram: Share2,
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {siteConfig.name[0]}
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <Typography variant="p" className="max-w-xs">
              {siteConfig.description}
            </Typography>
            <div className="space-y-4">
              <Typography variant="h6">Subscribe to our newsletter</Typography>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
                <Button size="sm" variant="primary">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <Typography variant="h6" className="font-bold text-sm uppercase tracking-wider">
                {section.title}
              </Typography>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="p" className="text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Typography>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap] || Mail;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}