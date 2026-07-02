import home1 from "../assets/images/home/home1.jpg";
import home2 from "../assets/images/home/home2.jpg";
import home3 from "../assets/images/home/home3.jpg";
import home4 from "../assets/images/home/home4.jpg";

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

// export const rulerHero: HeroData = {
//     images: [
//         {
//             src: ruler1,
//             alt: "Ruler at Worlds",
//         },
//         {
//             src: ruler2,
//             alt: "Ruler in Gen.G Uniform",
//         },
//         {
//             src: ruler3,
//             alt: "Ruler LCK Champion",
//         },
//         {
//             src: ruler4,
//             alt: "Ruler 10th Anniversary",
//         },
//     ],
//     title: "10 Years of Ruler",
//     subtitle: "The Legend Never Ends",
// };
