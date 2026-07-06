import { vision } from "@/data/about";

export const Vision = () => {
    return (
        <section className="bg-black py-24 text-white">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-geng-gold)]">
                    Our Vision
                </p>

                <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
                    {vision.title}
                </h2>

                <h3 className="mt-2 text-2xl font-bold text-[var(--color-geng-gold)] md:text-4xl">
                    {vision.subtitle}
                </h3>

                <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-300">
                    {vision.description}
                </p>
            </div>
        </section>
    );
};
