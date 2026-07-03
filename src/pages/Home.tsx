import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import HeroSection from "../components/common/HeroSection";
import { homeHero } from "../data/hero";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import CurrentRosterPreview from "../components/home/CurrentRosterPreview";
import FeaturedPlayer from "@/components/home/FeaturedPlayer";

export const Home = () => {
    return (
        <main>
            <Header />
            <HeroSection hero={homeHero} />
            <CurrentRosterPreview />
            <FeaturedPlayer />
            <Footer />
        </main>
    );
};
