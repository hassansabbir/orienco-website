"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  variant?: "black" | "white" | "blue";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant = "black", icon, children, ...props }, ref) => {
    
    // Custom shadows to replicate the deep 3D tactile look
    const themeStyles = {
      black: {
        bg: "bg-[#141414]",
        text: "text-white",
        outerShadow: "shadow-[0_14px_28px_-14px_rgba(0,0,0,0.55),0_8px_12px_-8px_rgba(0,0,0,0.45)]",
        innerTop: "shadow-[inset_0_2px_1px_rgba(255,255,255,0.1)]",
        innerBottom: "shadow-[inset_0_-10px_18px_rgba(0,0,0,0.65)]",
        border: "border-white/5",
        iconColor: "text-white"
      },
      white: {
        bg: "bg-[#F0F0F2]",
        text: "text-black",
        outerShadow: "shadow-[0_12px_24px_-16px_rgba(0,0,0,0.12)]",
        innerTop: "shadow-[inset_0_2px_4px_rgba(255,255,255,1)]",
        innerBottom: "shadow-[inset_0_-8px_14px_rgba(0,0,0,0.04)]",
        border: "border-white",
        iconColor: "text-black/80"
      },
      blue: {
        bg: "bg-[#0047FF]",
        text: "text-white",
        outerShadow: "shadow-[0_14px_28px_-14px_rgba(37,99,235,0.28),0_8px_12px_-8px_rgba(0,0,0,0.25)]",
        innerTop: "shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]",
        innerBottom: "shadow-[inset_0_-10px_18px_rgba(0,0,0,0.32)]",
        border: "border-white/10",
        iconColor: "text-white"
      }
    };

    const style = themeStyles[variant];

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98, y: 0 }}
        className={cn(
          "group relative flex items-center justify-center gap-3 px-8 py-4 rounded-[20px] font-medium transition-all duration-500",
          "border",
          style.bg,
          style.text,
          style.outerShadow,
          style.border,
          className
        )}
        {...props}
      >
        {/* Layered Inner Shadows for the 3D rounded effect */}
        <div className={cn("absolute inset-0 rounded-[20px] pointer-events-none transition-all duration-500", style.innerTop)} />
        <div className={cn("absolute inset-0 rounded-[20px] pointer-events-none transition-all duration-500", style.innerBottom)} />
        
        {/* Subtle light gradient from top to simulate curved surface */}
        <div className="absolute inset-0  rounded-[20px] bg-linear-to-b from-white/4 to-transparent pointer-events-none" />


        <span className="relative z-10 text-xl tracking-wide font-normal">{children}</span>
        
        {icon && (
          <span className={cn("relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1", style.iconColor)}>
            {icon}
          </span>
        )}
      </motion.button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";

export default PremiumButton;
