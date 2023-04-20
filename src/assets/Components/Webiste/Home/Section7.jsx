import { Typography } from "@mui/material";

const Section7 = () => {
  return (
    <div className="relative section7-gradient lg:my-24 flex justify-center lg:justify-start items-center lg:items-start gap-5 lg:gap-0 flex-col lg:flex-row respnsive-pading-1 respnsive-pading-2">
      {/* left */}
      <div className="w-1/2 lg:h-96 flex items-center justify-center">
        <div className="xl:absolute xl:bottom-[-20px] xl:scale-125">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/section7art.png "}
            className="max-h-[500px] lg:max-h-[740px]"
            alt=""
          />
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-3 justify-center lg:justify-start items-center lg:items-start lg:w-1/2">
        <Typography
          variant="h45"
          maxWidth={650}
          className="text-center lg:text-start"
        >
          App For LaundraMoon With Laundry Services
        </Typography>
        <Typography
          variant="body28"
          color={"text.muted"}
          maxWidth={650}
          className="text-center lg:text-start"
        >
          Using the App, you can check the current service rate for Laundry at
          any time and keep yourself updated.
        </Typography>
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex gap-10">
            <SiteInduction />
            <SiteInduction />
          </div>
          <div className="flex gap-10">
            <SiteInduction />
            <SiteInduction />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="body28" color="primary">
            Download the App on
          </Typography>
          <div className="flex gap-4">
            <a href="">
              <img
                src={
                  import.meta.env.VITE_BASE_URL +
                  "/images/google-store-btn 2.jpg"
                }
                className="h-16 md:h-[77px]"
                alt=""
              />
            </a>
            <a href="">
              <img
                src={
                  import.meta.env.VITE_BASE_URL + "/images/app-store-btn 2.png"
                }
                className="h-16 md:h-[77px]"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;

const SiteInduction = () => (
  <div className="flex justify-center gap-2 items-center">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section7check.svg"}
      alt=""
    />
    <Typography variant="subtitle28"> Site Inductions</Typography>
  </div>
);
