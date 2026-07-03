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
        description: "Visit the official Gen.G website.",
        url: "https://geng.gg",
        icon: "🌐",
    },
    {
        id: 2,
        title: "YouTube",
        description: "Watch highlights and videos.",
        url: "https://www.youtube.com/@GenGesports",
        icon: "▶️",
    },
    {
        id: 3,
        title: "Instagram",
        description: "Follow Gen.G on Instagram.",
        url: "https://www.instagram.com/gengesports/",
        icon: "📸",
    },
    {
        id: 4,
        title: "X",
        description: "Latest updates from Gen.G.",
        url: "https://x.com/GenG",
        icon: "𝕏",
    },
];
