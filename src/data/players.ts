import kiin from "@/assets/images/players/kiin.png";
import canyon from "@/assets/images/players/canyon.png";
import chovy from "@/assets/images/players/chovy.png";
import ruler from "@/assets/images/players/ruler.png";
import duro from "@/assets/images/players/duro.png";

export interface Player {
    id: number;
    nickname: string;
    name: string;
    role: "TOP" | "JGL" | "MID" | "ADC" | "SUP";
    image: string;
    description: string;
}

export const players: Player[] = [
    {
        id: 1,
        nickname: "Kiin",
        name: "김기인",
        role: "TOP",
        image: kiin,
        description: "LCK를 대표하는 탑 라이너",
    },
    {
        id: 2,
        nickname: "Canyon",
        name: "김건부",
        role: "JGL",
        image: canyon,
        description: "세계 최고의 정글러 중 한 명",
    },
    {
        id: 3,
        nickname: "Chovy",
        name: "정지훈",
        role: "MID",
        image: chovy,
        description: "압도적인 라인전과 피지컬",
    },
    {
        id: 4,
        nickname: "Ruler",
        name: "박재혁",
        role: "ADC",
        image: ruler,
        description: "Gen.G의 레전드 원거리 딜러",
    },
    {
        id: 5,
        nickname: "Duro",
        name: "주민규",
        role: "SUP",
        image: duro,
        description: "팀을 든든하게 받쳐주는 서포터",
    },
];
