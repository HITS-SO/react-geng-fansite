import React from "react";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import HeroSection from "../components/common/HeroSection";
import { homeHero } from "../data/hero";
import CurrentRosterPreview from "../components/home/CurrentRosterPreview";
import FeaturedPlayer from "@/components/home/FeaturedPlayer";
import AchievementPreview from "@/components/home/AchievementPreview";
import QuickLinkSection from "@/components/home/QuickLinkSection";
import ScrollToTop from "@/components/common/ScrollToTop";

export const Home = () => {
    return (
        <main>
            <ScrollToTop />
            <Header />
            <HeroSection hero={homeHero} />
            <CurrentRosterPreview />
            <FeaturedPlayer />
            <AchievementPreview />
            <QuickLinkSection />
            <Footer />
        </main>
    );
};
