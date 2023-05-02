import { Typography } from "@mui/material";

const OurServiceSection2reverse = () => {
  return (
    <div className="respnsive-pading-1 respnsive-pading-2 mb-16 md:mb-56  flex-col gap-0 items-center flex h-[70rem] md:h-auto relative text-white  bg-[#03444F] ">
      <div className="grid md:grid-cols-2 gap-6 items-center w-full grow-1">
        <div className="flex flex-col gap-4 ">
          <Typography
            variant="h128"
            className="leading-[8rem]  max-w-[15rem]"
            color="white"
          >
            Our Services
          </Typography>
          <Typography
            variant="body22"
            color="rgba(254, 254, 254, 0.89)"
            className="opacity-70 leading-7 max-w-[53rem]"
          >
            From contactless pickups to expert cleaning and quick deliveries,
            Laundramoon takes all safety measures and industry best practices
            for your safety. Book our laundry and dry clean services for expert
            cleaning in your area. Moreover, we're expanding our services and
            will be reaching the major areas soon. From contactless{" "}
          </Typography>
        </div>

        <img
          src={import.meta.env.VITE_BASE_URL + "/images/stamp.png"}
          className=" w-40 md:w-40 self-center place-self-end h-auto"
          alt=""
        />
      </div>
      <div className="relative bottom-[-200px] pt-16 lg:pt-20 mt-[-200px]">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default OurServiceSection2reverse;
