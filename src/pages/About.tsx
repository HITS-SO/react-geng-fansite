import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Introduction } from "@/components/about/Introduce";
import { Vision } from "@/components/about/Vision";
import { CoreValues } from "@/components/about/CoreValues";

const About = () => {
    return (
        <main>
            <Header />

            <Introduction />

            <Vision />

            <CoreValues />

            <Footer />
        </main>
    );
};

export default About;
