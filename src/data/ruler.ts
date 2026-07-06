import rulerMain from "@/assets/images/ruler/ruler10th.png";
import gallery1 from "@/assets/images/ruler/rulerGeng1.jpg";
import gallery2 from "@/assets/images/ruler/rulerGeng2.jpg";
import gallery3 from "@/assets/images/ruler/rulerGeng3.jpg";
import gallery4 from "@/assets/images/ruler/rulerGeng4.jpg";
import gallery5 from "@/assets/images/ruler/rulerGeng5.jpg";
import gallery6 from "@/assets/images/ruler/rulerGeng6.jpg";
import gallery7 from "@/assets/images/ruler/rulerJdg.jpg";
import gallery8 from "@/assets/images/ruler/rulerJdg2.jpg";
import gallery9 from "@/assets/images/ruler/rulerSamsung.jpg";

export const rulerIntroduction = {
    title: "10년의 수려함",
    subtitle: "A Decade of Greatness",
    description:
        "Since making his professional debut in 2016, Ruler has established himself as one of the greatest AD Carries in League of Legends history. Through consistency, dedication, and world-class performances, he has become a true icon of Gen.G and the global esports scene.",

    image: rulerMain,
};

export interface CareerEvent {
    year: string;
    title: string;
    description: string;
}

export const careerTimeline: CareerEvent[] = [
    {
        year: "2016",
        title: "Professional Debut",
        description:
            "Joined Samsung Galaxy and reached the World Championship Final in his rookie season.",
    },

    {
        year: "2017",
        title: "World Champion",
        description:
            "Won the League of Legends World Championship and became Finals MVP.",
    },

    {
        year: "2018",
        title: "Gen.G Begins",
        description:
            "Samsung Galaxy rebranded as Gen.G Esports. Ruler remained the franchise player.",
    },

    {
        year: "2022",
        title: "LCK Champion",
        description:
            "Captured the LCK Summer Championship after years of perseverance.",
    },

    {
        year: "2023",
        title: "LPL Journey",
        description:
            "Joined JD Gaming and won multiple domestic titles while reaching international finals.",
    },

    {
        year: "2025",
        title: "Return to Gen.G",
        description:
            "Returned to Gen.G to begin a new chapter with Kiin, Canyon and Chovy.",
    },
];

export interface Achievement {
    title: string;
    value: string;
}

export const achievements: Achievement[] = [
    {
        title: "World Championships",
        value: "1",
    },
    {
        title: "LCK Titles",
        value: "2+",
    },
    {
        title: "LPL Titles",
        value: "3",
    },
    {
        title: "International Finals",
        value: "Multiple",
    },
    {
        title: "Professional Career",
        value: "10 Years",
    },
    {
        title: "World Finals MVP",
        value: "2017",
    },
];

export interface GalleryImage {
    id: number;
    image: string;
    alt: string;
}

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        image: gallery1,
        alt: "Ruler World Champion",
    },
    {
        id: 2,
        image: gallery2,
        alt: "Ruler Gen.G",
    },
    {
        id: 3,
        image: gallery3,
        alt: "Ruler JDG",
    },
    {
        id: 4,
        image: gallery4,
        alt: "Ruler 2025",
    },
    {
        id: 5,
        image: gallery5,
        alt: "Ruler 2025",
    },
    {
        id: 6,
        image: gallery6,
        alt: "Ruler 2025",
    },
    {
        id: 7,
        image: gallery7,
        alt: "Ruler 2025",
    },
    {
        id: 8,
        image: gallery8,
        alt: "Ruler 2025",
    },
];
export const legacy = {
    quote: "Legends are remembered, but true champions continue writing history.",

    message:
        "Thank you, Ruler, for ten incredible years of passion, dedication, and unforgettable moments. Your legacy will continue to inspire future generations.",
};
