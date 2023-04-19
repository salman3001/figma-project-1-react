import { Typography } from "@mui/material";

const OurServiceSection2reverse = () => {
  return (
    <div className="pb-24 md:pb-0 px-10 md:px-20 pt-20 mb-16 md:mb-32  flex-col gap-0 items-center justify-center  flex  relative text-white  bg-[#03444F] ">
      <div className="grid md:grid-cols-2 items-center w-full grow-1">
        <div className="flex flex-col gap-3">
          <Typography variant="h2" fontWeight={600}>
            Our Services
          </Typography>
          <Typography className="opacity-70 leading-7">
            From contactless pickups to expert cleaning and quick deliveries,
            Laundramoon takes all safety measures and industry best practices
            for your safety. Book our laundry and dry clean services for expert
            cleaning in your area. Moreover, we're expanding our services and
            will be reaching the major areas soon. From contactless{" "}
          </Typography>
        </div>

        <img
          src={import.meta.env.VITE_BASE_URL + "/images/stamp.png"}
          className="w-20 md:w-40 self-center place-self-end h-auto"
          alt=""
        />
      </div>
      <div className="relative bottom-[-200px] py-5 lg:p-20 mt-[-200px]">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default OurServiceSection2reverse;
