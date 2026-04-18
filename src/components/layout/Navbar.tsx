"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "Contact Us", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-500",
          isScrolled || isMenuOpen
            ? "bg-black/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/5"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-6"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105 active:scale-95">
          <div className={cn(
            "relative transition-all duration-500",
            isScrolled ? "w-10 h-10 md:w-12 md:h-12" : "w-12 h-12 md:w-14 md:h-14"
          )}>
            <Image
              src={logo}
              alt="Orienco Logo"
              fill
              priority
              sizes="(max-width: 768px) 48px, 56px"
              className="object-contain rounded-xl"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-all hover:text-white relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <button className={cn(
              "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer",
              isScrolled
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black border border-white/20"
            )}>
              Book Now
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white md:hidden transition-transform active:scale-90"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center p-8 md:hidden"
          >
            {/* Background pattern/glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[50%] bg-white/5 rounded-full blur-[100px]" />
              <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[50%] bg-white/5 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col items-center gap-8 w-full max-w-xs relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-semibold text-white/60 hover:text-white transition-colors block py-2 italic"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full pt-8"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                    Book Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
