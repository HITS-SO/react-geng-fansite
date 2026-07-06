import type { HistorySeason } from "@/data/history";

interface Props {
    season: HistorySeason;
}

const HistoryCard = ({ season }: Props) => {
    return (
        <div className="rounded-xl bg-white p-8 shadow-lg">
            <h2 className="text-4xl font-bold">{season.year}</h2>

            <p className="mt-2 text-xl text-[var(--color-geng-gold)]">
                {season.title}
            </p>

            <div className="mt-8">
                <h3 className="font-bold">Achievements</h3>

                <ul className="mt-3 space-y-2">
                    {season.achievements.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <h3 className="font-bold">Roster</h3>

                <div className="mt-4 grid grid-cols-2 gap-y-2">
                    <p>TOP</p>
                    <p>{season.roster.top}</p>

                    <p>JGL</p>
                    <p>{season.roster.jungle}</p>

                    <p>MID</p>
                    <p>{season.roster.mid}</p>

                    <p>ADC</p>
                    <p>{season.roster.adc}</p>

                    <p>SUP</p>
                    <p>{season.roster.support}</p>
                </div>
            </div>
        </div>
    );
};

export default HistoryCard;
