import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Section3 = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center  respnsive-pading-1 section3gradient respnsive-pading-2 ">
      <div className="lg:w-1/2  flex  justify-center items-center">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/section3art.png"}
          className="h-auto w-full max-w-[750px]"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 max-w-[750px] md:pl-2  flex flex-col justify-center ">
        <Typography variant="h68">Easy to made laundry</Typography>
        <Typography variant="body22">
          Pick-up & Delivery At Your Door Step
        </Typography>
        <div className="flex flex-col gap-12 pt-12">
          <Icontexts
            src={import.meta.env.VITE_BASE_URL + "/images/globe-hand.svg"}
            title="Quality Service"
            description="Our experts inspect the clothes received then proceed for laundry or drycleaning service. We assure to maintain the quality without degrading the texture."
          />
          <Icontexts
            src={import.meta.env.VITE_BASE_URL + "/images/moneyhand.svg"}
            title="Cost-Effective"
            description="Laundramoon provides the laundry services at an affordable costas compared to the market. Please check our price list."
          />
          <Icontexts
            src={import.meta.env.VITE_BASE_URL + "/images/deliverytruck.svg"}
            title="Free Collection and Delivery"
            description="Laundramoon team will collect and deliver your cloth items quickly within your chosen time slot with minimum order £20."
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;

const Icontexts = (prop) => (
  <div className="flex gap-4 w-full">
    <div className="flex justify-center items-start  h-auto">
      <img src={prop.src} className="w-12 md:w-16 h-auto" alt="" />
    </div>
    <div className="w-full">
      <Typography variant="subtitle28">{prop.title}</Typography>
      <Typography variant="body22" color="text.muted">
        {prop.description}
      </Typography>
    </div>
  </div>
);
