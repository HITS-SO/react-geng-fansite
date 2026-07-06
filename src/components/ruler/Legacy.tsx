import { legacy } from "@/data/ruler";

const Legacy = () => {
    return (
        <section className="bg-black py-32 text-white">
            <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
                <p className="text-lg italic leading-9 text-gray-300">
                    "{legacy.quote}"
                </p>

                <h2 className="mt-10 text-5xl font-extrabold text-[var(--color-geng-gold)]">
                    Thank You,
                    <br />
                    Ruler
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
                    {legacy.message}
                </p>

                <div className="mt-16 h-px w-32 bg-[var(--color-geng-gold)]" />

                <p className="mt-8 text-sm uppercase tracking-[0.4em] text-gray-500">
                    Gen.G Esports Fan Project
                </p>
            </div>
        </section>
    );
};

export default Legacy;
