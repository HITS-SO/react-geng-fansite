import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import { coreValues } from "@/data/about";

export const CoreValues = () => {
    return (
        <Section>
            <SectionTitle title="Core Values" subtitle="What Drives Gen.G" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value) => (
                    <div
                        key={value.title}
                        className="
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            p-8
                            shadow-md
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:border-orange-500
                            hover:shadow-xl
                        "
                    >
                        <h3 className="text-2xl font-bold">{value.title}</h3>

                        <p className="mt-4 leading-7 text-gray-600">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
