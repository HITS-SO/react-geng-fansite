interface AchievementCardProps {
    title: string;
    value: string;
}

const AchievementCard = ({ title, value }: AchievementCardProps) => {
    return (
        <div
            className="
                rounded-2xl
                bg-white
                p-8
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
            "
        >
            <h3 className="text-5xl font-extrabold text-[var(--color-geng-gold)]">
                {value}
            </h3>

            <p className="mt-5 text-lg font-semibold text-gray-700">{title}</p>
        </div>
    );
};

export default AchievementCard;
