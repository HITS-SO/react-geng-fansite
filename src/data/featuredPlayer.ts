import ruler from "@/assets/images/ruler/ruler10th.png";

export interface FeaturedPlayer {
    nickname: string;
    role: string;
    image: string;
    description: string;
    buttonText: string;
    link: string;
}

export const featuredPlayer: FeaturedPlayer = {
    nickname: "Ruler",
    role: "ADC",
    image: ruler,

    description:
        "10주년을 맞이한 최고의 원딜 룰러 선수의 성취와 헌신을 기념합니다.",

    buttonText: "10주년 축하 페이지로 이동",

    link: "/ruler",
};
