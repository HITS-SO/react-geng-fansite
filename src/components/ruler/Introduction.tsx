import Section from "@/components/common/Section";

import { rulerIntroduction } from "@/data/ruler";

const Introduction = () => {
    return (
        <Section>
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Image */}

                <div className="overflow-hidden rounded-2xl shadow-xl">
                    <img
                        src={rulerIntroduction.image}
                        alt={rulerIntroduction.title}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            hover:scale-105
                        "
                    />
                </div>

                {/* Content */}

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-geng-gold)]">
                        10th Anniversary
                    </p>

                    <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
                        {rulerIntroduction.title}
                    </h2>

                    <h3 className="mt-4 text-2xl font-semibold text-gray-500">
                        {rulerIntroduction.subtitle}
                    </h3>

                    <p className="mt-8 leading-8 text-gray-700">
                        {rulerIntroduction.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <div
                            className="
                                rounded-full
                                bg-[var(--color-geng-gold)]
                                px-5
                                py-2
                                font-semibold
                                text-white
                            "
                        >
                            World Champion
                        </div>

                        <div
                            className="
                                rounded-full
                                border
                                border-[var(--color-geng-gold)]
                                px-5
                                py-2
                                font-semibold
                                text-[var(--color-geng-gold)]
                            "
                        >
                            Gen.G Legend
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Introduction;
