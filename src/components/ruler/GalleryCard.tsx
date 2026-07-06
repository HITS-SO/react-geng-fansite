interface GalleryCardProps {
    image: string;
    alt: string;
}

const GalleryCard = ({ image, alt }: GalleryCardProps) => {
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                shadow-lg
            "
        >
            <img
                src={image}
                alt={alt}
                className="
                    h-72
                    w-full
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:brightness-50
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                "
            >
                <span
                    className="
                        rounded-full
                        border
                        border-white
                        px-6
                        py-2
                        text-lg
                        font-semibold
                        text-white
                    "
                >
                    View
                </span>
            </div>
        </div>
    );
};

export default GalleryCard;
