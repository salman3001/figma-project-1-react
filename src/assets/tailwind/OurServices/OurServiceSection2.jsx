import React from "react";

const OurServiceSection2 = () => {
  return (
    <div className="p-10 flex-col items-center  flex justify-center relative text-white md:p-20 bg-[#03444F] mt-20 md:mt-40 lg:mt-64">
      <div className="absolute w-[90%] top-[-70px] md:top-[-100px] lg:top-[-150px] xl:top-[-300px] 3xl:top-[400px] flex justify-center max-w-[1500px]">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
        />
      </div>
      <div className="relative opacity-80 pt-[100px] xs-pt-[100px] sm:pt-[200px]  lg:pt-[200px] xl:pt-[250px] max-w-4xl gap-6 justify-items-center [&>p]:opacity-80 text-center flex flex-col ">
        <p>
          At Laundramoon, we provide the best care for your garments since 1978.
          The process of dry cleaning and laundry is done in best class setups.
          And everything is handled by Laundramoon team from the time we pick up
          your clothes until delivered back to you. We do not use any harsh or
          harmful chemicals as well as laundry service is done with hygienic
          detergents, high temperature and antiseptic wash where require
        </p>
        <p className="uppercase">Laundarmoon</p>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/quote.svg"}
          className="h-8 sm:h-16 md:h-32 absolute "
          alt=""
        />
      </div>
    </div>
  );
};

export default OurServiceSection2;
