import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <section className=" flex flex-col md:flex-row h-[820px] w-full   bg-[#EAEFF3]  ">
      {/* left side */}
      <div className="flex  w-full md:w-1/2 text-start  items-start justify-center py-10  flex-col gap-2 respnsive-pading-1">
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
      <div className="min-h-[450px] relative w-full md:w-1/2  bg-[#02A5BF]">
        <div className="absolute flex flex-col p-7   h-60 md:h-[435px] gap-6 w-80 md:w-[629px] top-56 z-20 sm:left-[50px] md:left-[-50px] shadow-hero-1 border-2 border-[#03444F] rounded-2xl bg-white">
          {/* top box */}
          <div className="absolute top-[-70px] right-[-200px] z-20 ">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/section1-art1.svg"}
              alt=""
              className="h-28 md:h-[146px] md:w-[445px]"
            />
          </div>
          {/* cebter box */}
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
            alt=""
            className="h-3 md:h-[21px] md self-start z-20"
          />

          <div className="w-full flex flex-col justify-center  gap-6 h-28 md:h-[204px] md:w-[569px]  p-6 bg-[#E9E9E9] rounded-lg z-20">
            <div className="text-4xl flex z-20  gap-2">
              <Typography variant="h96">E10 7DA</Typography>
              <div className="">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/editicon.svg"}
                  alt=""
                />
              </div>
            </div>
            <Typography variant="subtitle18">Enter Zipcode</Typography>
          </div>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className="z-20"
            sx={{ fontSize: 22, height: 72 }}
            style={{
              backgroundColor: "#022A30",
            }}
            onClick={() => {
              navigate("/dashboard/ordernow/address");
            }}
          >
            Place Order
          </Button>
          {/* bottom box */}
          <div className="absolute flex flex-col justify-center p-2 w-72 md:w-[445px] h-16 md:h-[81px]  bg-white top-[400px] shadow-hero-1 border-[#03444F] border-2 rounded-xl z-20">
            <div className=" text-black font-semibold">Quantity</div>
            <div>
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/slider.svg"}
                alt=""
                className=""
              />
            </div>
            {/* rectangel */}
          </div>
          <div className="absolute  w-80 md:w-[602px]  h-60 md:h-[435px] right-[-20px] top-[20px] [124px] border-b-2 border-r-2 border-[#03444F] rounded-2xl z-[0]"></div>
        </div>
        {/* leaves svg */}
        <div className="absolute right-0 bottom-[-15px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/leaves.svg"}
            alt=""
            className=""
          />
        </div>

        {/* stars */}
        <div className="absolute top-[100px] left-[-25px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/stars.svg"}
            alt=""
          />
        </div>
        {/* reviews */}
        <div className="hidden absolute md:flex text-white gap-2 flex-wrap font-[700] bottom-10 left-16">
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
