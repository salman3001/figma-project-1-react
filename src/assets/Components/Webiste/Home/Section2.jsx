import { Typography } from "@mui/material";

const Section2 = () => {
  return (
    <div className="respnsive-pading-2 py-24 md:py-[120px] flex flex-col gap-12 respnsive-pading-1 ">
      <Typography variant="h45" textAlign={"center"}>
        Over software businesses growing
      </Typography>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
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
