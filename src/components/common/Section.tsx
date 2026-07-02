interface SectionProps {
    children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">{children}</section>
    );
};

export default Section;
