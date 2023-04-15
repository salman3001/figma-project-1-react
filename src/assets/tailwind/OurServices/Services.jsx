import AboutSection1 from "../aboutus/AboutSection1";
import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import Section4 from "../main/Section4";
import Section6 from "../main/Section6";
import NavBar from "../navbar/NavBar";
import OurServiceSection2 from "./OurServiceSection2";
import OurServiceSection4 from "./OurServiceSection4";
import { OurServiceSection5 } from "./OurServiceSection5";
import OurServiceSection6 from "./OurServiceSection6";

const Services = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <AboutSection1 />
        <OurServiceSection2 />
        <Section4 />
        <OurServiceSection4 />
        <OurServiceSection5 />
        <Section6 />
        <OurServiceSection6 />
        <Section10 />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
