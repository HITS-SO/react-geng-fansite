import { Link } from "react-router-dom";

import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import AchievementCard from "@/components/history/achievementCard";

import { achievements } from "@/data/achievements";

const AchievementPreview = () => {
    return (
        <Section>
            <SectionTitle
                title="Moment of glory"
                subtitle="승리로 증명해온 Gen.G의 역사"
            />

            <div className="grid gap-6 md:grid-cols-3">
                {achievements.map((achievement) => (
                    <AchievementCard
                        key={achievement.id}
                        achievement={achievement}
                    />
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    to="/history"
                    className="
                        inline-block
                        rounded-lg
                        bg-black
                        px-6
                        py-3
                        text-white
                        transition-colors
                        hover:bg-orange-500
                    "
                >
                    Gen.G의 레거시
                </Link>
            </div>
        </Section>
    );
};

export default AchievementPreview;
