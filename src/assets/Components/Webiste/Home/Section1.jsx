import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <section className=" flex flex-col lg:flex-row h-auto  lg:h-[620px] w-full  bg-[#EAEFF3]  ">
      {/* left side */}
      <div className="flex  w-full grow text-start  items-start justify-center lg:pr-24 flex-col gap-2 respnsive-pading-1 respnsive-pading-2">
        <Typography variant="h72" className="md:leading-[80px]" maxWidth={670}>
          Your professional dry clean & laundry service
        </Typography>
        <Typography variant="body28" classname="leading-10" maxWidth={670}>
          We collect, clean & return at the location of your choice on time.
        </Typography>
        <div className="mt-10">
          <Typography variant="subtitle28" fontWeight={600}>
            Download the app now
          </Typography>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/google-store-btn 2.jpg"
              }
              className="h-16 w-44 md:h-[58px] md:w-[175px] "
              alt="Play Store"
            />
          </a>
          <a href="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/app-store-btn 2.png"
              }
              className="h-16 w-44 md:h-[58px] md:w-[175px] "
              alt="Apple Store"
            />
          </a>
        </div>
      </div>
      {/* right side */}
      <div className="min-h-[400px] sm:min-h-[450px] relative  min-w-[50%] xl:min-w-[40%] bg-[#02A5BF]">
        <div className="w-full h-full relative flex justify-center items-center">
          <div className="absolute flex flex-col p-7 lg:left-[-20%] top-0   lg:top-auto h-auto  gap-6 z-20  border-[#03444F] rounded-2xl ">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/section1-art2.png"}
              className="max-h-[280px] md:max-h-[330px]  lg:max-h-[390px] z-30"
              alt=""
              onClick={() => {
                navigate("/dashboard/ordernow/address");
              }}
            />
          </div>
        </div>
        {/* leaves svg */}
        <div className="absolute right-0 bottom-[-15px] z-10">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/leaves.svg"}
            alt=""
            className=" h-72 sm:h-96 "
          />
        </div>

        {/* stars */}
        <div className="absolute top-[100px] left-[-25px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/stars.svg"}
            alt=""
            className=" h-72 sm:h-96 "
          />
        </div>
        {/* reviews */}
        <div className="absolute flex-wrap md:flex text-white gap-4 font-[700] bottom-6 sm:bottom-10 left-6 sm:left-16">
          <div className="flex h-7">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/star.svg"}
              alt=""
            />
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/star.svg"}
              alt=""
            />
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/star.svg"}
              alt=""
            />
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/star.svg"}
              alt=""
            />
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/star.svg"}
              alt=""
            />
          </div>
          <Typography variant="body22" color="white">
            2000+ reviews - Trusted by 750,0000+ geniuses
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Section1;
