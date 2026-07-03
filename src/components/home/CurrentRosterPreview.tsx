import { Link } from "react-router-dom";

import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import PlayerCard from "@/components/players/PlayerCard";

import { players } from "@/data/players";

const CurrentRosterPreview = () => {
    return (
        <Section>
            <SectionTitle
                title="Current Roster"
                subtitle="Meet the 2025 Gen.G League of Legends Team"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    to="/players"
                    className="
                        rounded-lg
                        bg-black
                        px-6
                        py-3
                        text-white
                        transition-colors
                        hover:bg-orange-500
                    "
                >
                    View All Players
                </Link>
            </div>
        </Section>
    );
};

export default CurrentRosterPreview;
