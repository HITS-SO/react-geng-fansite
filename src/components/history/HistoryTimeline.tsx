import type { HistorySeason } from "@/data/history";

import HistoryCard from "./HistoryCards";

interface Props {
    data: HistorySeason[];
}

const HistoryTimeline = ({ data }: Props) => {
    return (
        <section className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
            {data.map((season) => (
                <HistoryCard key={season.year} season={season} />
            ))}
        </section>
    );
};

export default HistoryTimeline;
