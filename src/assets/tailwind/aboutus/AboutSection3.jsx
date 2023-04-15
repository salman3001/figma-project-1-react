import CheckSteper from "../common/CheckSteper";
const AboutSection3 = () => {
  const data = [
    { child: <p className="h-32"></p>, completed: true },
    {
      child: (
        <p className="px-4 text-lg opacity-80">
          We are based in Southall London since 1978, offering a range of
          services as well as collection and delivery for over 50 years. We are
          delighted to say every individual customer to corporate clients have
          been looked after with dedicated personal touch that they deserve.
          Over the years we have learned the art of building a relationship with
          our prime customers, obsessing over the quality of service and always
          delivering on promises. Our NHS and hospitality clients can be assured
          that Laundramoon will always go extra miles to deliver at most best
          service possible. We are proud at what we do. Our experienced customer
          service experts ensure your order is handled with care and
          professionalism and you face no difficulty during our service.
        </p>
      ),
      completed: true,
    },
    {
      child: (
        <div className="pb-24 text-lg px-4 opacity-80">
          <h1 className="font-bold"> OUR SERVICES MADE SIMPLE</h1>
          <p>
            We provide an affordable and convenient way of getting your dry
            cleaning, laundry, alterations and repair done with top quality
            service in London. Our instant pickup service at a time slot chosen
            by you provides your dry cleaning and laundry done on time.
          </p>
        </div>
      ),
      completed: true,
    },
    { child: <p></p>, completed: true },
  ];
  return (
    <div className="p-5 xs:10 md:p-20 pb-0 mb- flex flex-col gap-6 about-section3-gradient overflow-hidden h-[1350px] xs:h-[1200px] sm:h-[1100px] md:h-[1300px] lg:h-[1150px]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-semibold ">Our History</h1>
        <p className="opacity-80 text-center max-w-sm ">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
      </div>
      <div className="z-10">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/young-woman.png"}
          alt=""
        />
      </div>
      <div className="flex relative">
        <div className="absolute md:px-20 pb-0 top-[-100px]  ">
          <CheckSteper data={data} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
