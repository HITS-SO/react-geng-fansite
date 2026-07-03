import { Link } from "react-router-dom";

import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import TeamMemberCard from "@/components/players/TeamMemberCard";

import { players } from "@/data/players";

const CurrentRosterPreview = () => {
    return (
        <Section>
            <SectionTitle
                title="2026 Season Roaster"
                subtitle="Gen.G를 대표하는 League of Legends 로스터"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {players.map((player) => (
                    <TeamMemberCard
                        key={player.id}
                        image={player.image}
                        nickname={player.nickname}
                        name={player.name}
                        position={player.role}
                        link={`/players/${player.slug}`}
                    />
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
                    상세 로스터 보러가기
                </Link>
            </div>
        </Section>
    );
};

export default CurrentRosterPreview;
