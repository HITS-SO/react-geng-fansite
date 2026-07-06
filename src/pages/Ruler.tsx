import { useEffect, useRef } from "react";

import HeroSection from "@/components/common/HeroSection";
import Introduction from "@/components/ruler/Introduction";
import CareerTimeline from "@/components/ruler/CareerTimeline";
import AchievementSection from "@/components/ruler/AchievementSection";
import Gallery from "@/components/ruler/Gallery";
import Legacy from "@/components/ruler/Legacy";

import { rulerHero } from "@/data/hero";

import bgm from "@/assets/music/legend.mp3";
import { Header } from "@/components/common/Header";

export const Ruler = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const handleFirstClick = () => {
            audioRef.current?.play();

            window.removeEventListener("click", handleFirstClick);
        };

        window.addEventListener("click", handleFirstClick);

        return () => {
            window.removeEventListener("click", handleFirstClick);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} src={bgm} loop />
            <Header />

            <HeroSection hero={rulerHero} />

            <Introduction />

            <CareerTimeline />

            <AchievementSection />

            <Gallery />

            <Legacy />
        </>
    );
};
