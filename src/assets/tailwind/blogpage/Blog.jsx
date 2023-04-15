import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import NavBar from "../navbar/NavBar";
import BlogSection1 from "./BlogSection1";
import BlogSection2 from "./BlogSection2";
import BlogSection3 from "./BlogSection3";

const Blog = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <BlogSection1 />
        <BlogSection2 />
        <BlogSection3 />
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
