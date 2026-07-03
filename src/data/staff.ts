import ryu from "@/assets/images/staff/ryu.png";
import lyn from "@/assets/images/staff/lyn.png";
import nova from "@/assets/images/staff/nova.png";

export interface Coach {
    id: number;
    slug: string;
    nickname: string;
    name: string;
    position: "Head Coach" | "Coach";
    image: string;
    description: string;
}

export const coaches: Coach[] = [
    {
        id: 1,
        slug: "ryu",
        nickname: "Ryu",
        name: "류상욱",
        position: "Head Coach",
        image: ryu,
        description: "Gen.G League of Legends 팀의 헤드 코치.",
    },
    {
        id: 2,
        slug: "lyn",
        nickname: "Lyn",
        name: "임혜성",
        position: "Coach",
        image: lyn,
        description: "선수들의 전략과 경기력을 지원하는 코치.",
    },
    {
        id: 3,
        slug: "nova",
        nickname: "Nova",
        name: "박찬호",
        position: "Coach",
        image: nova,
        description: "밴픽과 운영 전략을 담당하는 코치.",
    },
];
