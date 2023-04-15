import AboutSection1 from "../aboutus/AboutSection1";
import AboutSection2 from "../aboutus/AboutSection2";
import AboutSection3 from "../aboutus/AboutSection3";
import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import Section3 from "../main/Section3";
import Section4 from "../main/Section4";
import Section6 from "../main/Section6";
import NavBar from "../navbar/NavBar";

const Location = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <AboutSection1 />
        <AboutSection2 />
        <Section4 />
        <Section3 />
        <AboutSection3 />
        <Section6 />
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};

export default Location;
