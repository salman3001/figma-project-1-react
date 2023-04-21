import { Typography } from "@mui/material";
import CheckSvg from "../Common/CheckSvg";

const AboutSection2 = () => {
  return (
    <div className="flex justify-center relative text-white bg-[#03444F] respnsive-pading-1 respnsive-pading-2 mt-32 ">
      <div className="absolute w-[90%]  top-[-100px] flex justify-center">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-[20%] sm:pt-[25%] md:pt-[35%] gap-6 justify-items-center [&>p]:opacity-80">
        <Typography
          variant="h64"
          color="white"
          maxWidth={1015}
          textAlign={"center"}
          className="md:col-span-2"
        >
          Your one stop dry cleaning solution in London
        </Typography>

        <Typography
          variant="body28"
          color="rgba(235, 235, 235, 0.88)"
          maxWidth={783}
        >
          "Snowhite Dry Cleaners" is trading as "Laundramoon".Our motto is to
          clean and iron to perfection. At Laundramoon we believe in customer
          satisfaction and we go extra miles for each and every client. Our
          purpose is to build a foundation trust where every service utilised by
          you can be a long-lasting relationship between us. We introduce the
          premium dry clean, laundry, home/bedding, alterations and repair
          services straight to your door. We pick up your dirty clothes from
          your doorstep and delivery fresh, stain free, clean and ironed to
          perfection clothes back to you at your chosen location within 24 hours
          or your selected convenient time slot.
        </Typography>
        <div>
          <Typography
            variant="body28"
            color="rgba(235, 235, 235, 0.88)"
            maxWidth={783}
          >
            At Laundramoon, we provide the best care for your garments since
            1978. The process of dry cleaning and laundry is done in best class
            setups. And everything is handled by Laundramoon team from the time
            we pick up your clothes until delivered back to you. We do not use
            any harsh or harmful chemicals as well as laundry service is done
            with hygienic detergents, high temperature and antiseptic wash where
            require
          </Typography>
          <div className="grid md:grid-cols-2 gap-2 py-4">
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <Typography
                variant="subtitle28"
                color="rgba(235, 235, 235, 0.88)"
              >
                Site Inductions
              </Typography>
            </div>
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <Typography
                variant="subtitle28"
                color="rgba(235, 235, 235, 0.88)"
              >
                Site Inductions
              </Typography>
            </div>
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <Typography
                variant="subtitle28"
                color="rgba(235, 235, 235, 0.88)"
              >
                Site Inductions
              </Typography>
            </div>
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <Typography
                variant="subtitle28"
                color="rgba(235, 235, 235, 0.88)"
              >
                Site Inductions
              </Typography>
            </div>
          </div>
        </div>
        <button className="md:col-span-2 rounded-lg text-[#00A5BF] w-[255px] h-[59px] bg-white py-2 px-6 text-[22px]">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default AboutSection2;
