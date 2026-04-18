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


// "use client";

// import { ArrowUpRight } from "lucide-react";
// import { ReactNode } from "react";
// import Link from "next/link";

// interface PremiumButtonProps {
//   children: ReactNode;
//   href?: string;
//   onClick?: () => void;
//   icon?: ReactNode;
//   className?: string;
// }

// export default function PremiumButton({
//   children,
//   href,
//   onClick,
//   icon = <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
//   className = "",
// }: PremiumButtonProps) {
//   const buttonContent = (
//     <span className="relative z-10 flex items-center gap-3 md:gap-4 text-white font-medium text-xl md:text-2xl tracking-tight">
//       {children}
//       {icon}
//     </span>
//   );

//   const baseClasses = `
//     group relative inline-flex items-center justify-center
//     px-8 py-5 md:px-12 md:py-7
//     rounded-[2rem] md:rounded-[2.5rem]
//     bg-gradient-to-b from-neutral-700 via-neutral-900 to-black
//     shadow-[0_10px_30px_rgba(0,0,0,0.5),0_4px_10px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5)]
//     hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_6px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.5)]
//     transition-all duration-300 ease-out
//     hover:-translate-y-0.5 active:translate-y-0
//     overflow-hidden
//     ${className}
//   `;

//   const glossOverlay = (
//     <>
//       {/* Top highlight gloss */}
//       <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-[2rem] md:rounded-t-[2.5rem] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

//       {/* Subtle inner border */}
//       <span className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] ring-1 ring-inset ring-white/5 pointer-events-none" />

//       {/* Hover shine effect */}
//       <span className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//         <span className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
//       </span>
//     </>
//   );

//   if (href) {
//     return (
//       <Link href={href} className={baseClasses}>
//         {glossOverlay}
//         {buttonContent}
//       </Link>
//     );
//   }

//   return (
//     <button onClick={onClick} className={baseClasses}>
//       {glossOverlay}
//       {buttonContent}
//     </button>
//   );
// }