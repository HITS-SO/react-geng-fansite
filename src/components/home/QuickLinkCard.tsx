import type { QuickLink } from "@/data/quickLinks";

interface QuickLinkCardProps {
    link: QuickLink;
}

const QuickLinkCard = ({ link }: QuickLinkCardProps) => {
    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                group
                rounded-xl
                border
                border-gray-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[var(--color-geng-gold)]
                hover:shadow-lg
            "
        >
            <div className="text-4xl">{link.icon}</div>

            <h3 className="mt-4 text-xl font-bold">{link.title}</h3>

            <p className="mt-2 text-gray-500">{link.description}</p>

            <p
                className="
                    mt-5
                    font-semibold
                    text-[var(--color-geng-gold)]
                    transition-transform
                    group-hover:translate-x-2
                "
            >
                Visit →
            </p>
        </a>
    );
};

export default QuickLinkCard;
