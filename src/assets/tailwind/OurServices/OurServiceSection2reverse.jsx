const OurServiceSection2reverse = () => {
  return (
    <div className="p-10 lg:p-20 lg:h-[700px] flex-col gap-0 items-center  flex  relative text-white md:px-20 bg-[#03444F] lg:mb-[400px]">
      <div className="grid md:grid-cols-2  w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-7xl font-semibold max-w-xs">
            Our Services
          </h1>
          <p className="opacity-70 leading-7">
            From contactless pickups to expert cleaning and quick deliveries,
            Laundramoon takes all safety measures and industry best practices
            for your safety. Book our laundry and dry clean services for expert
            cleaning in your area. Moreover, we're expanding our services and
            will be reaching the major areas soon. From contactless{" "}
          </p>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/stamp.png"}
          className="w-40 self-center place-self-end h-auto"
          alt=""
        />
      </div>
      <div className="lg:absolute lg:bottom-[-400px] py-5 lg:p-20 ">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default OurServiceSection2reverse;
