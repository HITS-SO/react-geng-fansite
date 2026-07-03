export interface Achievement {
    id: number;
    year: string;
    title: string;
    description: string;
}

export const achievements: Achievement[] = [
    {
        id: 1,
        year: "2025",
        title: "LCK Champion",
        description: "Won the LCK Championship.",
    },
    {
        id: 2,
        year: "2024",
        title: "MSI Runner-up",
        description: "Reached the MSI Grand Final.",
    },
    {
        id: 3,
        year: "2024",
        title: "LCK Spring Champion",
        description: "Dominated the Spring Split.",
    },
];
