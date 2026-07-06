import { useEffect, useState } from "react";
import type { HeroData } from "@/types/Hero";

interface HeroSectionProps {
    hero: HeroData;
}

const HeroSection = ({ hero }: HeroSectionProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % hero.images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [hero.images.length]);

    return (
        <section
            className="
            relative
            overflow-hidden

            h-[55vh]
            min-h-[450px]
            max-h-[850px]
        "
        >
            {/* Hero Image */}
            <img
                src={hero.images[currentImage].src}
                alt={hero.images[currentImage].alt}
                style={{
                    objectPosition:
                        hero.images[currentImage].position ?? "center",
                }}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
            />
            {/* Text */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[var(--color-geng-gold)]">
                <h1 className="text-5xl font-bold md:text-6xl">{hero.title}</h1>

                <p className="mt-5 max-w-3xl text-lg  md:text-xl">
                    {hero.subtitle}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
