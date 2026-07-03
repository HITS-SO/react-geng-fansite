export interface QuickLink {
    id: number;
    title: string;
    description: string;
    url: string;
    icon: string;
}

export const quickLinks: QuickLink[] = [
    {
        id: 1,
        title: "Official Website",
        description:
            "Gen.G의 공식 홈페이지에서 팀과 브랜드에 대한 다양한 정보를 확인해 보세요.",
        url: "https://geng.gg",
        icon: "🌐",
    },
    {
        id: 2,
        title: "YouTube",
        description:
            "경기 하이라이트와 비하인드 콘텐츠, 다양한 영상을 만나보세요.",
        url: "https://www.youtube.com/@GenGesports",
        icon: "▶️",
    },
    {
        id: 3,
        title: "Instagram",
        description: "선수들의 일상과 팀의 다양한 순간을 사진으로 만나보세요.",
        url: "https://www.instagram.com/gengesports/",
        icon: "📸",
    },
    {
        id: 4,
        title: "X",
        description: "경기 일정과 최신 소식을 가장 빠르게 확인하세요.",
        url: "https://x.com/GenG",
        icon: "𝕏",
    },
];
