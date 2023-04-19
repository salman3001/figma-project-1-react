import { Typography } from "@mui/material";
import React from "react";

const OurServiceSection2 = () => {
  return (
    <div className="p-10  flex justify-center relative text-white md:p-20 bg-[#03444F] mt-32">
      <div className="absolute w-[90%]  top-[-100px] flex justify-center">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
        />
      </div>
      <div className=" pt-[20%] sm:pt-[25%] md:pt-[35%] md:p-10 gap-6 justify-items-center [&>p]:opacity-80">
        <div className="relative">
          <Typography variant="h6" color="text.muted">
            At Laundramoon, we provide the best care for your garments since
            1978. The process of dry cleaning and laundry is done in best class
            setups. And everything is handled by Laundramoon team from the time
            we pick up your clothes until delivered back to you. We do not use
            any harsh or harmful chemicals as well as laundry service is done
            with hygienic detergents, high temperature and antiseptic wash where
            require
          </Typography>
          <Typography
            varianr="h6"
            fontWeight={600}
            className="uppercase"
            color="text.muted"
            textAlign={"center"}
            py={2}
          >
            Laundarmoon
          </Typography>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/quote.svg"}
            className=" h-8 sm:h-16 md:h-32 absolute top-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection2;
