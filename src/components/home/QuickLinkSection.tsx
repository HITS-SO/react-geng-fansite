import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import QuickLinkCard from "./QuickLinkCard";

import { quickLinks } from "@/data/quickLinks";

const QuickLinkSection = () => {
    return (
        <Section>
            <SectionTitle
                title="Quick Links"
                subtitle="Connect with Gen.G across all platforms"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {quickLinks.map((link) => (
                    <QuickLinkCard key={link.id} link={link} />
                ))}
            </div>
        </Section>
    );
};

export default QuickLinkSection;
