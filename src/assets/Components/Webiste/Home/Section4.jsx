import { Typography } from "@mui/material";

const Section4 = () => {
  return (
    <div className=" flex flex-col gap-8  md:gap-16 text-center p-10 md:p-24">
      {/* text */}
      <div className="flex flex-col justify-center items-center gap-4 ">
        <Typography variant="h4" fontWeight={550}>
          Our Work Process
        </Typography>
        <Typography>
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </Typography>
      </div>
      {/* svg */}
      <div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/section4arts.png"}
          className="w-full h-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section4;
