import { gengHistory } from "@/data/gengHistory";
import { samsungHistory } from "@/data/samsungHistory";

export interface HistorySeason {
    year: number;
    title: string;
    achievements: string[];
    roster: {
        top: string;
        jungle: string;
        mid: string;
        adc: string;
        support: string;
    };
}

export const historyData = {
    geng: gengHistory,
    samsung: samsungHistory,
};

export const historyTabs = [
    {
        id: "geng",
        label: "Gen.G",
    },
    {
        id: "samsung",
        label: "Samsung Galaxy",
    },
] as const;

export type HistoryType = keyof typeof historyData;
