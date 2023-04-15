import AboutSection1 from "../aboutus/AboutSection1";
import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import Section4 from "../main/Section4";
import Section6 from "../main/Section6";
import NavBar from "../navbar/NavBar";

import OurServiceSection2reverse from "./OurServiceSection2reverse";

import OurServiceSection6 from "./OurServiceSection6";
import ServiceSection2 from "./ServiceSection2";

const OurServices = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <OurServiceSection2reverse />
        <ServiceSection2 />
        <OurServiceSection6 />
        <Section6 />
        <Section10 />
      </main>

      <Footer />
    </div>
  );
};

export default OurServices;
