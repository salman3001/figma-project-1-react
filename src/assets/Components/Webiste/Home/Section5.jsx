import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Section5 = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-4 justify-center md:justify-start p-5 md:p-20 md:pb-10  w-full text-white">
      <div className="bg-[#03444F] flex flex-col gap-4 rounded-2xl p-10 md:p-20">
        <Typography variant="h4" fontWeight={550}>
          Ease to Made Laundry
        </Typography>
        <div className="flex flex-col gap-4">
          <Typography color="rgba(235, 235, 235, 0.88)">
            Mentioned below are our ever-growing list of services. All orders
            come with free delivery
          </Typography>
          <div className="flex gap-4 items-center justify-end hover:underline">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
              }}
            >
              View More
            </a>
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
              alt=""
              className="h-3"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap md:flex-nowrap">
          <CardWhite title="Wash" />
          <Cardblue title="Wash & Iron" />
          <CardWhite title="Ironing" />
          <Cardblue title="Dry Cleaning" />
        </div>
      </div>
    </div>
  );
};

const CardWhite = (prop) => (
  <div className="flex flex-col gap-1 w-36 md:w-auto">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art1.svg"}
      alt=""
    />
    <Typography fontWeight={550}>{prop.title}</Typography>
  </div>
);

const Cardblue = (prop) => (
  <div className="flex flex-col gap-1 w-36 md:w-auto">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art2.svg"}
      alt=""
    />
    <Typography fontWeight={550}>{prop.title} </Typography>
  </div>
);

export default Section5;
