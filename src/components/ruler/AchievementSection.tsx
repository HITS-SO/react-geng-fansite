import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import AchievementCard from "./AchievementCard";

import { achievements } from "@/data/ruler";

const AchievementSection = () => {
    return (
        <Section>
            <SectionTitle
                title="10년의 성취"
                subtitle="Celebrating a Decade of Excellence"
            />

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement) => (
                    <AchievementCard
                        key={achievement.title}
                        title={achievement.title}
                        value={achievement.value}
                    />
                ))}
            </div>
        </Section>
    );
};

export default AchievementSection;
