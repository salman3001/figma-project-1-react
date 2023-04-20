import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Section5 = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-4 justify-center md:justify-start respnsive-pading-1  w-full text-white">
      <div className="bg-[#03444F] flex flex-col gap-4 rounded-2xl p-10 md:p-20">
        <Typography variant="h68" color="white">
          Ease to Made Laundry
        </Typography>
        <div className="flex flex-col gap-4">
          <Typography
            variant="body28"
            color="rgba(235, 235, 235, 0.88)"
            maxWidth={700}
          >
            Mentioned below are our ever-growing list of services. All orders
            come with free delivery
          </Typography>
          <div className="flex gap-4 items-center justify-end hover:underline">
            <Typography
              component={Button}
              variant="body32"
              color="rgba(235, 235, 235, 0.88)"
              onClick={(e) => {
                navigate("/services");
              }}
            >
              View More
              <BsArrowRight />
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
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
  <div className="flex flex-col gap-1 w-28 md:w-36 lg:w-auto">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art1.svg"}
      alt=""
    />
    <Typography variant="subtitle32" color="white" whiteSpace={"nowrap"}>
      {prop.title}
    </Typography>
  </div>
);

const Cardblue = (prop) => (
  <div className="flex flex-col gap-1 w-28 md:w-36 lg:w-auto">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art2.svg"}
      alt=""
    />
    <Typography variant="subtitle32" color="white" whiteSpace={"nowrap"}>
      {prop.title}
    </Typography>
  </div>
);

export default Section5;
