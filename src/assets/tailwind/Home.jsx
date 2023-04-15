import Footer from "./footer/Footer";
import Main from "./main/main";
import NavBar from "./navbar/NavBar";

const Home = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <Main />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
