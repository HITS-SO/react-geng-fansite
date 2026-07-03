import { Link, useParams } from "react-router-dom";

import HeroSection from "@/components/common/HeroSection";
import Section from "@/components/common/Section";

import { players } from "@/data/players";
import { playerHero } from "@/data/hero";

export const PlayerDetail = () => {
    const { slug } = useParams();

    const player = players.find((player) => player.slug === slug);

    if (!player) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Player Not Found</h1>

                    <Link
                        to="/players"
                        className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-orange-500"
                    >
                        Back to Players
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeroSection hero={playerHero} />

            <Section>
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Player Image */}

                    <div>
                        <img
                            src={player.image}
                            alt={player.nickname}
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Player Info */}

                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-semibold text-orange-500">
                            {player.role}
                        </p>

                        <h1 className="mt-2 text-5xl font-bold">
                            {player.nickname}
                        </h1>

                        <p className="mt-2 text-xl text-gray-500">
                            {player.name}
                        </p>

                        <p className="mt-8 leading-8 text-gray-700">
                            {player.description}
                        </p>

                        <Link
                            to="/players"
                            className="
                                mt-10
                                inline-block
                                w-fit
                                rounded-lg
                                bg-black
                                px-6
                                py-3
                                text-white
                                transition-colors
                                hover:bg-orange-500
                            "
                        >
                            ← Back to Players
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
};
