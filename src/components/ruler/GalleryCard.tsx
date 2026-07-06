import { useState } from "react";

interface GalleryCardProps {
    image: string;
    alt: string;
}

const GalleryCard = ({ image, alt }: GalleryCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* 카드 */}
            <div
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    shadow-lg
                    cursor-pointer
                "
                onClick={() => setIsOpen(true)}
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
                    <span className="rounded-full border border-white px-6 py-2 text-lg font-semibold text-white">
                        View
                    </span>
                </div>
            </div>

            {/* 모달 */}
            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/80
                    "
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={image}
                        alt={alt}
                        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                    />
                </div>
            )}
        </>
    );
};

export default GalleryCard;
