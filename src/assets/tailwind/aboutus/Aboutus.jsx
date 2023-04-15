import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import Section3 from "../main/Section3";
import Section6 from "../main/Section6";
import NavBar from "../navbar/NavBar";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";

const Aboutus = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <AboutSection1 />
        <AboutSection2 />
        <Section3 />
        <AboutSection3 />
        <Section6 />
        <Section10 />
      </main>

      <Footer />
    </div>
  );
};

export default Aboutus;
