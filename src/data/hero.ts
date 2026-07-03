import home1 from "../assets/images/home/home1.jpg";
import home2 from "../assets/images/home/home2.jpg";
import home3 from "../assets/images/home/home3.jpg";
import home4 from "../assets/images/home/home4.jpg";
import playerBanner from "@/assets/images/players/playerBanner.jpg";

export interface HeroImage {
    src: string;
    alt: string;
}

export interface HeroData {
    images: HeroImage[];
    title: string;
    subtitle: string;
}

export const homeHero = {
    images: [
        {
            src: home1,
            alt: "Gen.G Team",
        },
        {
            src: home2,
            alt: "Gen.G Champion",
        },
        {
            src: home3,
            alt: "Gen.G Players",
        },
        {
            src: home4,
            alt: "Gen.G Arena",
        },
    ],

    title: "CHANGE THE GAME, CHANGE THE WORLD",

    subtitle: "GEN.G ESPORTS LOL TEAM",
};

export const playerHero: HeroData = {
    images: [
        {
            src: playerBanner,
            alt: "Gen.G Players",
        },
    ],
    title: "",
    subtitle: "",
};
