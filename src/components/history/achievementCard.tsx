import type { Achievement } from "@/data/achievements";

interface AchievementCardProps {
    achievement: Achievement;
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
    return (
        <div
            className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            <p className="text-sm font-semibold text-orange-500">
                {achievement.year}
            </p>

            <h3 className="mt-2 text-xl font-bold">{achievement.title}</h3>

            <p className="mt-3 text-gray-500">{achievement.description}</p>
        </div>
    );
};

export default AchievementCard;
