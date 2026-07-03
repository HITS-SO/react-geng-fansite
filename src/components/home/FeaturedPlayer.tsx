import { Link } from "react-router-dom";

import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import { featuredPlayer } from "@/data/featuredPlayer";

const FeaturedPlayer = () => {
    return (
        <Section>
            <SectionTitle
                title="Legend Of Gen.G"
                subtitle="Gen.G의 역사를 함께 써 내려간 레전드"
            />

            <div
                className="
                    grid
                    gap-10
                    items-center
                    lg:grid-cols-2
                "
            >
                {/* Image */}

                <div>
                    <img
                        src={featuredPlayer.image}
                        alt={featuredPlayer.nickname}
                        className="
                            w-full
                            rounded-2xl
                            object-cover
                            shadow-lg
                        "
                    />
                </div>

                {/* Content */}

                <div>
                    <p className="text-sm font-semibold text-orange-500">
                        {featuredPlayer.role}
                    </p>

                    <h3 className="mt-2 text-5xl font-bold">
                        {featuredPlayer.nickname}
                    </h3>

                    <p className="mt-6 leading-8 text-gray-600">
                        {featuredPlayer.description}
                    </p>

                    <Link
                        to={featuredPlayer.link}
                        className="
                            mt-10
                            inline-flex
                            items-center
                            rounded-lg
                            bg-black
                            px-6
                            py-3
                        text-white
                            transition-colors
                         hover:bg-orange-500
                        "
                    >
                        {featuredPlayer.buttonText}
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default FeaturedPlayer;
