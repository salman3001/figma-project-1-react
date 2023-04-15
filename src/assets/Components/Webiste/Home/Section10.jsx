const Section10 = () => {
  return (
    <div className=" flex  gap-4  p-5 md:p-10 lg:p-20 pb-0  w-full text-white">
      <div className="bg-[#03444F] flex-col md:flex-row items-center md:items-start flex gap-2 rounded-2xl p-10 md:p-20 md:pb-0">
        <div className="md:w-[30%] flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-[55px]">
            Your Safety Is Our Prime Concern
          </h1>
          <div className="flex">
            <button className="btn-3"> Place Order</button>
          </div>
        </div>
        <div className="md:w-[70%] flex flex-col gap-10 justify-between lg:gap-20  md:pr-10">
          <p className="opacity-80">
            From contactless pickups to expert cleaning and quick deliveries,
            Laundramoon takes all safety measures and industry best practices
            for your safety. Book our laundry and dry clean services for expert
            cleaning in your area. Moreover, we're expanding our services and
            will be reaching the major areas soon.
          </p>
          <div className="flex gap-8">
            <div>
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
                className="max-w-full h-auto"
                alt=""
              />
            </div>
            <div>
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png "}
                className="max-w-full hidden md:block h-auto"
                alt=""
              />
            </div>
            <div>
              <img
                className="max-w-full hidden md:block h-auto"
                src={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Section10;
