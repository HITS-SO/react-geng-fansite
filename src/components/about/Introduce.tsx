import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import { introduction } from "@/data/about";

export const Introduction = () => {
    return (
        <Section>
            <SectionTitle
                title={introduction.title}
                subtitle="Building the Future of Esports"
            />

            <div className="mx-auto max-w-4xl">
                <p className="text-center text-lg leading-9 text-gray-700">
                    {introduction.description}
                </p>
            </div>
        </Section>
    );
};
