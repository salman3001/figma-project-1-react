const Section7 = () => {
  return (
    <div className="relative section7-gradient md:my-24 flex justify-center md:justify-start items-center md:items-start gap-5 md:gap-0 flex-col md:flex-row p-10">
      {/* left */}
      <div className="w-1/2 h-96 flex items-center justify-center">
        <div className="absolute ">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/section7art.png "}
            className="max-h-96 md:max-h-[600px]"
            alt=""
          />
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-4 justify-center md:justify-start items-center md:items-start md:w-1/2">
        <h1 className="text-4xl font-bold">
          App For LaundraMoon With Laundry Services
        </h1>
        <p className="text-[#777777] max-w-[500px]">
          Using the App, you can check the current service rate for Laundry at
          any time and keep yourself updated.
        </p>
        <div className="flex flex-col gap-4">
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
          <p className="font-bold text-[#00A5BF]">Download the App on</p>
          <div className="flex gap-4">
            <a href="">
              <img
                src={
                  import.meta.env.VITE_BASE_URL +
                  "/images/google-store-btn 2.jpg"
                }
                className="h-16"
                alt=""
              />
            </a>
            <a href="">
              <img
                src={
                  import.meta.env.VITE_BASE_URL + "/images/app-store-btn 2.png"
                }
                className="h-16"
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
  <div className="flex justify-center items-center">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section7check.svg"}
      alt=""
    />
    <p className="font-semibold"> Site Inductions</p>
  </div>
);
