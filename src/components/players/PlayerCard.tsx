import type { Player } from "@/data/players";

interface PlayerCardProps {
    player: Player;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
    return (
        <div
            className="
                group
                overflow-hidden
                rounded-xl
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
            "
        >
            <img
                src={player.image}
                alt={player.nickname}
                className="
                    h-80
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                "
            />

            <div className="p-5">
                <p className="text-sm font-semibold text-orange-500">
                    {player.role}
                </p>

                <h3 className="mt-1 text-2xl font-bold">{player.nickname}</h3>

                <p className="text-gray-500">{player.name}</p>
            </div>
        </div>
    );
};

export default PlayerCard;
