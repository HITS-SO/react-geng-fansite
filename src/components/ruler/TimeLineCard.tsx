import type { CareerEvent } from "@/data/ruler";

interface TimelineCardProps {
    event: CareerEvent;
}

const TimelineCard = ({ event }: TimelineCardProps) => {
    return (
        <div className="relative flex gap-8">
            {/* Timeline */}

            <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-[var(--color-geng-gold)]" />

                <div className="mt-2 h-full w-1 bg-orange-200" />
            </div>

            {/* Content */}

            <div className="pb-12">
                <p className="text-lg font-bold text-[var(--color-geng-gold)]">
                    {event.year}
                </p>

                <h3 className="mt-2 text-2xl font-bold">{event.title}</h3>

                <p className="mt-4 leading-8 text-gray-600">
                    {event.description}
                </p>
            </div>
        </div>
    );
};

export default TimelineCard;
