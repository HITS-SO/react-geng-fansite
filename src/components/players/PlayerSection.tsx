import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import TeamMemberCard from "@/components/players/TeamMemberCard";

import { players } from "@/data/players";

const CoachSection = () => {
    return (
        <Section>
            <SectionTitle
                title="Players"
                subtitle="LCK를 이끌어가는 최고의 선수들"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {players.map((player) => (
                    <TeamMemberCard
                        key={player.id}
                        link={`/players/${player.slug}`}
                        image={player.image}
                        nickname={player.nickname}
                        name={player.name}
                        position={player.role}
                    />
                ))}
            </div>
        </Section>
    );
};

export default CoachSection;
