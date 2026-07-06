import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import TimelineCard from "./TimeLineCard";

import { careerTimeline } from "@/data/ruler";

const CareerTimeline = () => {
    return (
        <Section>
            <SectionTitle
                title="Career Timeline"
                subtitle="A Journey Through Ten Remarkable Years"
            />

            <div className="mx-auto mt-16 max-w-4xl">
                {careerTimeline.map((event) => (
                    <TimelineCard key={event.year} event={event} />
                ))}
            </div>
        </Section>
    );
};

export default CareerTimeline;
