import { Button, Typography } from "@mui/material";
import React from "react";

const Section1art = () => {
  return (
    <div className="relative max-w-[629px] max-h-[435px]">
      <div className="absolute z-20 top-[-100px] right-0">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/section1-art1.svg"}
          alt=""
          className="w-full max-h-[146px] max-w-[445px] "
        />
      </div>
      {/* bottom */}
      <div className="absolute max-w-[629px] max-h-[435px] flex flex-col px-5 py-7 gap-2 z-10  shadow-hero-1 border-2 border-[#03444F] rounded-2xl bg-white">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
          alt=""
          className="h-5 self-start"
        />

        <div className="w-full flex flex-col gap-2 p-4 bg-[#E9E9E9] rounded-lg">
          <div className="text-4xl flex  gap-2">
            <Typography variant="h96">E10 7DA</Typography>
            <div className="">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/editicon.svg"}
                alt=""
              />
            </div>
          </div>
          <div className="pl-2 font-semibold">Enter Zipcode</div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            navigate("/dashboard/ordernow/address");
          }}
        >
          Place Order
        </Button>

        <div className="absolute bottom-[-20px] flex flex-col gap-1 p-2  bg-white shadow-hero-1 border-[#03444F] border-2 rounded-2xl">
          <div className=" text-black font-semibold">Quantity</div>
          <div>
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/slider.svg"}
              alt=""
              className=""
            />
          </div>
        </div>
        {/* leaves svg */}
      </div>
      {/* rectangel */}
      <div className="absolute    border-2 border-[#03444F] rounded-2xl "></div>
    </div>
  );
};

export default Section1art;
