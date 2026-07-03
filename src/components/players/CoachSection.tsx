import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import TeamMemberCard from "@/components/players/TeamMemberCard";

import { coaches } from "@/data/staff";

const CoachSection = () => {
    return (
        <Section>
            <SectionTitle
                title="Coaching Staff"
                subtitle="Gen.G의 승리를 이끄는 전략가들"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {coaches.map((coach) => (
                    <TeamMemberCard
                        key={coach.id}
                        image={coach.image}
                        nickname={coach.nickname}
                        name={coach.name}
                        position={coach.position}
                    />
                ))}
            </div>
        </Section>
    );
};

export default CoachSection;
