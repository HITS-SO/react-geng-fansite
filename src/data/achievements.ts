export interface Achievement {
    id: number;
    year: string;
    title: string;
    description: string;
}

export const achievements: Achievement[] = [
    {
        id: 1,
        year: "2014 / 2017",
        title: "리그오브 레전드 월드 챔피언십 우승",
        description:
            "삼성 갤럭시 White와 삼성 갤럭시가 만들어낸 월드 챔피언십 우승 기록으로, 현재 Gen.G로 이어지는 빛나는 유산입니다.",
    },
    {
        id: 2,
        year: "2024 / 2025",
        title: "Mid-Season Invitational 우승",
        description:
            "국제 무대에서 최고의 경기력을 바탕으로 MSI 정상에 오르며, 글로벌 최강 팀으로서의 위상을 증명했습니다.",
    },
    {
        id: 3,
        year: "2022 / 2023 / 2024 / 2025",
        title: "LCK 우승",
        description:
            "선수 개개인의 압도적인 기량을 기반으로 정규 시즌과 플레이오프 전 구간에서 안정적이면서도 지배적인 경기력을 보여주었습니다.",
    },
    {
        id: 4,
        year: "2026",
        title: "LOL Champions Korea CUP 우승",
        description:
            "뛰어난 교전 능력과 상황 판단을 바탕으로 경기 흐름을 통제하며 새로운 포맷에서도 경쟁력을 입증했습니다.",
    },
];
