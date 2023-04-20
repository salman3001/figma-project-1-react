import { Typography } from "@mui/material";

const Section4 = () => {
  return (
    <div className=" flex flex-col gap-8   text-center respnsive-pading-2 respnsive-pading-1">
      {/* text */}
      <div className="flex flex-col justify-center items-center gap-4 ">
        <Typography variant="h45">Our Work Process</Typography>
        <Typography variant="body28" color="text.muted" maxWidth={750}>
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
