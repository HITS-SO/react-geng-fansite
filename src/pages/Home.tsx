import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import HeroSection from "../components/common/HeroSection";
import { homeHero } from "../data/hero";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";

export const Home = () => {
    return (
        <main>
            <Header />
            <HeroSection hero={homeHero} />
            <Section>
                
            </Section>

            <Footer />
        </main>
    );
};
