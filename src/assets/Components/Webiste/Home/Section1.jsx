import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();
  const [zipCode, setZipCode] = useState("E10 7DA");

  return (
    <section className=" flex flex-col lg:flex-row h-auto  lg:h-[620px] w-full  bg-[#EAEFF3]  ">
      {/* left side */}
      <div className="flex  w-full grow text-start  items-start justify-center lg:pr-32 flex-col gap-2 respnsive-pading-1 respnsive-pading-2">
        <Typography variant="h72" className="leading-[5rem]" maxWidth={"45rem"}>
          Your professional dry clean & laundry service
        </Typography>
        <Typography variant="body28" classname="leading-10" maxWidth={470}>
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
              className="h-16 w-44 md:h-[58px] md:w-[175px]"
              alt="Apple Store"
            />
          </a>
        </div>
      </div>
      {/* right side */}
      <div className="min-h-[400px] sm:min-h-[450px] relative  min-w-[50%] xl:min-w-[40%] bg-[#02A5BF]">
        <div className="absolute flex flex-col left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-28 top-[50%] -translate-y-[50%]  lg:top-[60%] lg:-translate-y-[60%] w-[80%]  h-auto z-20  border-[#03444F] rounded-2xl ">
          <div className="relative max-w-[90%] sm:max-w-[400px] lg:max-w-[500px]">
            {/* top */}
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/section1-art1.svg"}
              className="absolute -top-24   sm:-top-28 translate-y-6 -right-10 lg:-right-40  w-[60%]   z-30"
              alt=""
            />
            <div className="relative bg-white z-20 rounded-2xl max-w-[500px] h-[22rem] sm:h-[25rem]  lg:h-[28rem]  p-8   border border-black">
              <div className="flex flex-col gap-4 h-[90%]">
                <img
                  src={
                    import.meta.env.VITE_BASE_URL +
                    "/images/section1-launder-logo.svg"
                  }
                  className="h-5 self-start grow-0"
                  alt=""
                />
                <div className="w-full bg-[#E9E9E9] rounded-2xl p-6 grow h-full">
                  <div className="flex w-full">
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => {
                        setZipCode(e.target.value);
                      }}
                      className="bg-[#E9E9E9] focus:border-red-500 text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold w-[80%]"
                    />
                    <img
                      src={
                        import.meta.env.VITE_BASE_URL + "/images/editicon.svg"
                      }
                      className=" self-start py-6 h-[4.5rem] "
                      alt=""
                    />
                  </div>
                  <Typography fontWeight={600} variant="subtitle24">
                    Enter Zipcode
                  </Typography>
                </div>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="secondary"
                  className="grow-0"
                  sx={{
                    height: "7rem",
                    fontSize: "1.25rem",
                  }}
                  onClick={() => {
                    navigate(`/dashboard/ordernow/address?zip=${zipCode}`);
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>
            <div className="absolute rounded-2xl top-3 -right-3 w-[80%] max-w-[400px] h-[22rem] sm:h-[25rem]  lg:h-[28rem]     border border-black">
              sds
            </div>

            {/* bottom */}
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/section1-art2.svg"}
              className="absolute translate-y-8 md:translate-y-12 bottom-0 left-3 w-[70%] z-30"
              alt=""
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
        <div className="absolute top-[40px] left-[-25px]">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/stars.svg"}
            alt=""
            className=" h-72"
          />
        </div>
        {/* reviews */}
        <div className="absolute flex-wrap md:flex text-white gap-4 font-[700] bottom-6 left-6 sm:left-16">
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
