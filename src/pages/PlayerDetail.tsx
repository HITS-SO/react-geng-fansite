import { Link, useParams } from "react-router-dom";

import Section from "@/components/common/Section";
import { players } from "@/data/players";

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
                        className="
                            mt-6
                            inline-block
                            rounded-lg
                            bg-[var(--color-black)]
                            px-6
                            py-3
                            text-[var(--color-white)]
                            transition-colors
                            hover:bg-[var(--color-geng-gold)]
                        "
                    >
                        Back to Players
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <Section>
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-10 text-4xl font-bold">Player Profile</h1>

                <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
                    {/* =========================
                        Player Image
                    ========================== */}

                    <div>
                        <img
                            src={player.image2}
                            alt={player.nickname}
                            className="
                                w-full
                                rounded-2xl
                                object-cover
                                shadow-lg
                                transition-transform
                                duration-300
                                hover:scale-[1.02]
                            "
                        />
                    </div>

                    {/* =========================
                        Player Information
                    ========================== */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-gray-200
                            p-8
                        "
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-geng-gold)]">
                            {player.role}
                        </p>

                        <h2 className="mt-3 text-5xl font-bold">
                            {player.nickname}
                        </h2>

                        <p className="mt-2 text-xl text-gray-500">
                            {player.name}
                        </p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            <div>
                                <p className="text-sm text-gray-500">Team</p>

                                <p className="mt-1 font-semibold">
                                    {player.team}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Nationality
                                </p>

                                <p className="mt-1 font-semibold">
                                    {player.nationality}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Position
                                </p>

                                <p className="mt-1 font-semibold">
                                    {player.role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =========================
                        Career
                    ========================== */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-gray-200
                            p-8
                        "
                    >
                        <h3 className="text-2xl font-bold">Career</h3>

                        <div className="mt-6 space-y-3">
                            <p> LCK Champion</p>
                            <p> MSI</p>
                            <p> Gen.G Esports</p>
                        </div>
                    </div>

                    {/* =========================
                        Biography
                    ========================== */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-gray-200
                            p-8
                        "
                    >
                        <h3 className="text-2xl font-bold">Biography</h3>

                        <p className="mt-6 leading-8 text-gray-700">
                            {player.description}
                        </p>

                        <Link
                            to="/players"
                            className="
                                mt-10
                                inline-block
                                rounded-lg
                                bg-[var(--color-black)]
                                px-6
                                py-3
                                text-[var(--color-white)]
                                transition-colors
                                hover:bg-[var(--color-geng-gold)]
                            "
                        >
                            ← Back to Players
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};
