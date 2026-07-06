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
    subtitle: "A Decade of Splendor",
    description:
        "2016년 프로 데뷔 이후, 룰러는 리그 오브 레전드 역사상 최고의 원거리 딜러(AD Carry) 중 한 명으로 자리매김했습니다. 꾸준한 경기력과 끊임없는 노력, 그리고 세계 최고 수준의 퍼포먼스를 바탕으로 Gen.G를 대표하는 상징적인 선수이자 글로벌 e스포츠를 대표하는 아이콘으로 성장했습니다.",

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
        title: "프로게이머 데뷔",
        description:
            "삼성 갤럭시 구단에 합류하여 팀을 월즈 챔피언십 결승으로 이끌었습니다.",
    },

    {
        year: "2017",
        title: "월드 챔피언 우승",
        description: "2017 월드 챔피언십을 우승하고 파이널MVP가 되었습니다.",
    },

    {
        year: "2018",
        title: "젠지의 시작",
        description:
            "Samsung Galaxy가 Gen.G Esports로 새롭게 출범했으며, 룰러는 팀을 상징하는 프랜차이즈 스타로서 새로운 시대를 함께 열었습니다.",
    },

    {
        year: "2022",
        title: "LCK 챔피언",
        description: "오랜 기다림과 노력 끝에 LCK 서머 정상에 올랐습니다.",
    },

    {
        year: "2023",
        title: "LPL로의 이적",
        description:
            "JD Gaming에 합류해 다수의 LPL 대회 우승을 차지하고 국제 대회 결승에 진출했습니다.",
    },

    {
        year: "2025",
        title: "젠지로의 귀환",
        description:
            "Gen.G로 복귀해 기인, 캐니언, 쵸비와 함께 새로운 챕터를 써 내려가기 시작했습니다.",
    },
];

export interface Achievement {
    title: string;
    value: string;
}

export const achievements: Achievement[] = [
    {
        title: "월드 챔피언 우승 FMVP",
        value: "1",
    },
    {
        title: "LCK LPL 리그 우승",
        value: "5",
    },
    {
        title: "MSI 우승",
        value: "2",
    },
    {
        title: "LCK 통산 최다 펜타킬",
        value: "8",
    },
    {
        title: "All Pro First 선정",
        value: "4",
    },
    {
        title: "대한민국 국가대표",
        value: "2",
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
    quote: "완벽함을 추구하기 위해서는 희생과 인내가 필요하다. 하지만 이 고난을 거친 자만이 역사에 이름을 올리게 된다",

    message:
        "룰러, 지난 10년간 보여준 열정과 헌신, 그리고 우리에게 선물해 준 수많은 감동의 순간들에 진심으로 감사합니다. 당신이 남긴 위대한 발자취는 앞으로도 수많은 팬들과 미래의 선수들에게 영감을 전하며 영원히 기억될 것입니다.",
};
