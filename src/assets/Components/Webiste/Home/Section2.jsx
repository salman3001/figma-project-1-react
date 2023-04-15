import { Typography } from "@mui/material";

const Section2 = () => {
  return (
    <div className="py-24 flex flex-col gap-12">
      <Typography variant="h4" textAlign={"center"} fontWeight={500}>
        Over software businesses growing
      </Typography>

      <div className="flex flex-wrap justify-center items-center gap-12 p-6">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/openzepline.png"}
          alt=""
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/samsung.svg"}
          alt=""
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/monday.svg"}
          alt=""
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/segment.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Section2;
