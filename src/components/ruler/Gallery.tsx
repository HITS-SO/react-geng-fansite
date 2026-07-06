import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import GalleryCard from "./GalleryCard";

import { galleryImages } from "@/data/ruler";

const Gallery = () => {
    return (
        <Section>
            <SectionTitle
                title="영광의 순간들"
                subtitle="Memorable Moments Throughout His Career"
            />

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {galleryImages.map((image) => (
                    <GalleryCard
                        key={image.id}
                        image={image.image}
                        alt={image.alt}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Gallery;
