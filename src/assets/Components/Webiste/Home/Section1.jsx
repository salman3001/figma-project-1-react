import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <section className=" flex flex-col lg:flex-row  lg:h-[820px] w-full  bg-[#EAEFF3]  ">
      {/* left side */}
      <div className="flex  w-full grow text-start  items-start justify-center py-10  flex-col gap-2 respnsive-pading-1">
        <Typography variant="h72" className="leading-[80px]">
          Your professional dry clean & laundry service
        </Typography>
        <Typography variant="body28" classname="leading-10">
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
              className="h-14 w-48 md:h-[77px] md:w-[254px] "
              alt="Play Store"
            />
          </a>
          <a href="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/app-store-btn 2.png"
              }
              className="h-14 w-48 md:h-[77px] md:w-[254px] "
              alt="Apple Store"
            />
          </a>
        </div>
      </div>
      {/* right side */}
      <div className="min-h-[400px] sm:min-h-[450px] relative  min-w-[50%] xl:min-w-[860px] bg-[#02A5BF]">
        <div className="absolute flex flex-col p-7   h-auto  gap-6 left-[5%] sm:left-[10%] lg:[18%]   xl:left-[-15%] bottom-[19%] sm:bottom-[18%] xl:bottom-[10%] max-w-[700px] 2xl:max-w-[800px] z-20  border-[#03444F] rounded-2xl ">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/section1-art2.png"}
            className="h-50 sm:h-80 lg:h-auto"
            alt=""
            onClick={() => {
              navigate("/dashboard/ordernow/address");
            }}
          />
        </div>
        {/* leaves svg */}
        <div className="absolute right-0 bottom-[-15px] z-10">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/leaves.svg"}
            alt=""
            className=" h-56 md:h-auto"
          />
        </div>

        {/* stars */}
        <div className="absolute top-[100px] left-[-25px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/stars.svg"}
            alt=""
            className="h-56 lg:h-auto"
          />
        </div>
        {/* reviews */}
        <div className="absolute md:flex text-white gap-2 flex-wrap font-[700] bottom-6 sm:bottom-10 left-6 sm:left-16">
          <div className="flex">
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
