import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Introduction } from "@/components/about/Introduce";
import { Vision } from "@/components/about/Vision";
import { CoreValues } from "@/components/about/CoreValues";
import ScrollToTop from "@/components/common/ScrollToTop";

const About = () => {
    return (
        <main>
            <ScrollToTop />
            <Header />

            <Vision />

            <Introduction />

            <CoreValues />

            <Footer />
        </main>
    );
};

export default About;
