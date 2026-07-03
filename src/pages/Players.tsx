import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import HeroSection from "@/components/common/HeroSection";

import CoachSection from "@/components/players/CoachSection";
import PlayerSection from "@/components/players/PlayerSection";

import { playerHero } from "@/data/hero";

export const Players = () => {
    return (
        <main>
            <Header />
            <HeroSection hero={playerHero} />

            <CoachSection />

            <PlayerSection />
            <Footer />
        </main>
    );
};
