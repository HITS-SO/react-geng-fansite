import { Link } from "react-router-dom";

interface TeamMemberCardProps {
    image: string;
    nickname: string;
    name: string;
    position: string;
    link?: string;
}

const TeamMemberCard = ({
    image,
    nickname,
    name,
    position,
    link,
}: TeamMemberCardProps) => {
    const card = (
        <>
            <img
                src={image}
                alt={nickname}
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
                    {position}
                </p>

                <h3 className="mt-1 text-2xl font-bold">{nickname}</h3>

                <p className="text-gray-500">{name}</p>
            </div>
        </>
    );

    const className = `
        group
        overflow-hidden
        rounded-xl
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
    `;

    return link ? (
        <Link to={link} className={className}>
            {card}
        </Link>
    ) : (
        <div className={className}>{card}</div>
    );
};

export default TeamMemberCard;
