import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import NavBar from "../navbar/NavBar";

const Privacy = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <div className="px-10 py-5 md:px-20 flex flex-col gap-8 ">
          <h1 className="text-4xl md:text-7xl font-semibold max-w-xl">
            PRIVACY AND COOKIES POLICY
          </h1>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

const Card = () => (
  <div className="flex flex-col gap-2">
    <h1 className="text-xl font-bold">What's there in the service</h1>
    <p className="opacity-70 text-lg">
      This is a simple service wash service, but laundered-with-love and care -
      ideal for casual clothing. We offer distinct laundry services to all our
      clients as per the requirement. The service includes wash, tumble dry and
      fold service. All items will be machine washed, tumble dried on medium
      heat and folded (not ironed) and will be returned to you. The laundry
      service is one of our most popular services and is widely booked by
      customers.
    </p>
  </div>
);
