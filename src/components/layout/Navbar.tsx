"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "Contact Us", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-500",
        isScrolled
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

      {/* Navigation Links */}
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

      {/* CTA Placeholder */}
      <div className="flex items-center gap-4">
        <button className={cn(
          "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hidden md:block",
          isScrolled 
            ? "bg-white text-black hover:bg-gray-200" 
            : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black border border-white/20"
        )}>
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
