import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Section10 = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex  gap-4 respnsive-pading-1 respnsive-pading-2 w-full text-white min-h-[512px]">
      <div className="bg-[#03444F] flex-col md:flex-row items-center md:items-start flex gap-4 rounded-2xl p-4 md:p-8 xl:p-20 md:pb-0">
        <div className="md:w-[30%] flex flex-col gap-10">
          <Typography variant="h45" color="white">
            Your Safety Is Our Prime Concern
          </Typography>
          <div className="flex">
            <Button
              onClick={() => {
                navigate("/dashboard/ordernow/address");
              }}
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                fontSize: 22,
                width: 255,
                height: 59,
              }}
            >
              {" "}
              Place Order
            </Button>
          </div>
        </div>
        <div className="md:w-[70%] flex flex-col gap-10 justify-between lg:gap-20  md:pr-10">
          <Typography variant="body22" color="white" sx={{ opacity: "40%" }}>
            From contactless pickups to expert cleaning and quick deliveries,
            Laundramoon takes all safety measures and industry best practices
            for your safety. Book our laundry and dry clean services for expert
            cleaning in your area. Moreover, we're expanding our services and
            will be reaching the major areas soon.
          </Typography>
          <div className="flex gap-8">
            <div>
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
                className="max-w-full h-auto"
                alt=""
              />
            </div>
            <div>
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png "}
                className="max-w-full hidden md:block h-auto"
                alt=""
              />
            </div>
            <div>
              <img
                className="max-w-full hidden md:block h-auto"
                src={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Section10;
