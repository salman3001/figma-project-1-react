import React from "react";

const PromoCard = () => {
  return (
    <div className="rounded-lg border">
      <div className="promo-card-gradient h-[80%] flex flex-wrap justify-between gap-2 p-8 rounded-lg">
        <div className="flex flex-col gap-2  max-w-[200px]">
          <div className="flex items-center gap-4  ">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/hot-promo-icon.png"}
              alt=""
              className="max-h-12"
            />
            <p className="text-2xl font-[550] uppercase text-[#022A30]">
              Welcome offer
            </p>
          </div>
          <p className="text-xl text-[#03444F]">
            Get <span className="font-bold">15%</span> of on your next order
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/promo-card-art.png"}
            alt=""
            className="max-w-[100px] h-auto"
          />
        </div>
      </div>
      <div className="p-4 font-semibold text-lg  text-[#00A5BF] cursor-pointer">
        <a>Claim the offer</a>
      </div>
    </div>
  );
};

export default PromoCard;
