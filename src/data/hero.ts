import home1 from "../assets/images/home/home1.jpg";
import home2 from "../assets/images/home/home2.jpg";
import home3 from "../assets/images/home/home3.jpg";
import home4 from "../assets/images/home/home4.jpg";
import ruler1 from "@/assets/images/ruler/rulerGeng1.jpg";
import ruler2 from "@/assets/images/ruler/rulerGeng2.jpg";
import playerBanner from "@/assets/images/players/playerBanner.jpg";

export interface HeroImage {
    src: string;
    alt: string;
    position?: string;
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
            position: "center top",
        },
        {
            src: home2,
            alt: "Gen.G Champion",
            position: "center 20%",
        },
        {
            src: home3,
            alt: "Gen.G Players",
            position: "center top",
        },
        {
            src: home4,
            alt: "Gen.G Arena",
            position: "center top",
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
            position: "center 50%",
        },
    ],
    title: "",
    subtitle: "",
};

export const rulerHero: HeroData = {
    images: [
        {
            src: ruler1,
            alt: "Ruler lifting the World Championship trophy",
            position: "center 40%",
        },
        {
            src: ruler2,
            alt: "Ruler during the 2017 World Championship",
            position: "center 20%",
        },
    ],
    title: "10 YEARS OF RULER",
    subtitle: "Celebrating a Decade of Greatness",
};
