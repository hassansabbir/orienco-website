"use client";

import Image from "next/image";
import contactHeroImg from "@/assets/contactBg.png";

const ContactHero = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden">
            {/* Hero Image */}
            <div className="absolute inset-0">
                <Image
                    src={contactHeroImg}
                    alt="Orienco Team"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Decorative Gradient Overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};

export default ContactHero;
