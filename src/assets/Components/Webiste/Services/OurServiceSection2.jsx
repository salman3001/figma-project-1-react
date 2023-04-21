import { Typography } from "@mui/material";
import React from "react";

const OurServiceSection2 = () => {
  return (
    <div className="flex justify-center relative text-white  bg-[#03444F] respnsive-pading-1 respnsive-pading-2 mt-32">
      <div className="absolute w-[90%]  top-[-100px] flex justify-center">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
        />
      </div>
      <div className=" pt-[22%]  sm:pt-[25%] md:pt-[30%] lg:pt-[40%] max-w-[1405px] md:p-10 gap-6 justify-items-center [&>p]:opacity-80">
        <div className="relative">
          <Typography
            variant="body28"
            color="rgba(235, 235, 235, 0.88)"
            maxWidth={1405}
          >
            At Laundramoon, we provide the best care for your garments since
            1978. The process of dry cleaning and laundry is done in best class
            setups. And everything is handled by Laundramoon team from the time
            we pick up your clothes until delivered back to you. We do not use
            any harsh or harmful chemicals as well as laundry service is done
            with hygienic detergents, high temperature and antiseptic wash where
            require
          </Typography>
          <Typography
            variant="body28"
            color="rgba(235, 235, 235, 0.88)"
            textAlign={"center"}
            py={6}
          >
            Laundarmoon
          </Typography>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/quote.svg"}
            className=" h-8 sm:h-16 md:h-32 absolute top-[-30px] left-[-30px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection2;
