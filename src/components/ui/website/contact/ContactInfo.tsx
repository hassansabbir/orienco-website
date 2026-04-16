"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Our Showroom",
    lines: [
      "123 Luxury Avenue",
      "Beverly Hills, CA 90210",
      "United States",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 (555) 124-7856"],
    badge: "AVAILABLE 24/7",
  },
  {
    icon: Mail,
    title: "Email Inquiry",
    lines: ["concierge@orienco.com", "support@orienco.com"],
  },
  {
    icon: Clock,
    title: "Showroom Hours",
    lines: [
      "Mon - Fri: 8:00 AM - 8:00 PM",
      "Sat: 9:00 AM - 6:00 PM",
      "Sun: Closed (Concierge 24/7)",
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "Twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "#",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Header */}
            <div className="space-y-4">
              <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase">
                Reach Out
              </span>
              <Typography
                variant="h2"
                className="italic font-bold text-4xl md:text-5xl text-foreground leading-[1.1] tracking-tight"
              >
                Contact Information
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground leading-relaxed text-base max-w-lg"
              >
                Whether you&apos;re looking to book a specific model, arrange an
                airport delivery, or simply ask a question about our fleet,
                we&apos;re here to provide an immediate response.
              </Typography>
            </div>

            {/* Contact Items */}
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-gray-500 transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div>
                    <Typography
                      variant="p"
                      className="font-semibold italic text-foreground text-base mb-1"
                    >
                      {item.title}
                    </Typography>
                    {item.lines.map((line) => (
                      <Typography
                        key={line}
                        variant="p"
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {line}
                      </Typography>
                    ))}
                    {item.badge && (
                      <span className="inline-block mt-1 text-[10px] font-bold tracking-[0.15em] text-yellow-600 uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Typography
                variant="h4"
                className="italic font-bold text-lg text-foreground mb-4"
              >
                Follow Our Journey
              </Typography>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:border-black hover:bg-black transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <iframe
                title="Orienco Rental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977799432085!2d-118.40054182359857!3d34.07362941617584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
