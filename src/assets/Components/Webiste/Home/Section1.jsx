import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <section className=" flex flex-col md:flex-row min-h-[450px] md:min-h-[550px]  w-full   bg-[#EAEFF3]">
      {/* left side */}
      <div className="flex  w-full md:w-1/2 text-center lg:text-start  items-center px-5 md:px-16 lg:px-32 pb-10 md:pb-20 flex-col gap-2  pt-16">
        <Typography variant="h3" fontWeight={580}>
          Your professional dry clean & laundry service
        </Typography>
        <Typography variant="subtitle1">
          We collect, clean & return at the location of your choice on time.
        </Typography>
        <div className="mt-10">
          <Typography variant="subtitle1" fontWeight={600}>
            Download the app now
          </Typography>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/google-store-btn 2.jpg"
              }
              className="h-14 w-48"
              alt="Play Store"
            />
          </a>
          <a href="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/app-store-btn 2.png"
              }
              className="h-14 w-48"
              alt="Apple Store"
            />
          </a>
        </div>
      </div>
      {/* right side */}
      <div className="min-h-[450px] relative w-full md:w-1/2  bg-[#02A5BF]">
        {/* top */}
        <div className="absolute top-20 z-20 md:left-40 xs:left-[160px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/section1-art1.svg"}
            alt=""
            className="h-28"
          />
        </div>
        {/* bottom */}
        <div className="absolute flex flex-col px-5 py-7 h-60 gap-2 w-80 md:w-96 top-32 z-10 sm:left-[50px] md:left-[-50px] shadow-hero-1 border-2 border-[#03444F] rounded-2xl bg-white">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
            alt=""
            className="h-3 self-start"
          />

          <div className="w-full flex flex-col gap-2 h-28  p-4 bg-[#E9E9E9] rounded-lg">
            <div className="text-4xl flex  gap-2">
              <div className="">E10 7DA</div>
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

          <div className="absolute flex flex-col gap-1 p-1 w-72 h-16  bg-white top-56 shadow-hero-1 border-[#03444F] border-2 rounded-2xl">
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
        <div className="absolute  w-80 h-60 top-[135px] md:left-6 sm:left-[124px] border-2 border-[#03444F] rounded-2xl "></div>
        <div className="absolute right-0 bottom-[-15px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/leaves.svg"}
            alt=""
            className="h-64"
          />
        </div>

        {/* stars */}
        <div className="absolute top-[121px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/stars.svg"}
            alt=""
          />
        </div>
        {/* reviews */}
        <div className="hidden absolute md:flex text-white gap-2 flex-wrap font-[700] bottom-[10%] right-[10%]">
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
          <div className="">2000+ reviews - Trusted by 750,0000+ geniuses</div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
