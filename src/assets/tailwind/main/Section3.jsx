const Section3 = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row justify-center md:justify-start items-center p-5 md:p-20  section3gradient">
      <div className="relative md:w-1/2  flex  justify-center items-center">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/section3art.png"}
          className="h-auto w-full"
          alt=""
        />
      </div>
      <div className="md:w-1/2 p-10 flex flex-col gap-4 justify-center ">
        <h1 className="text-4xl font-bold text-[#545252]">
          Ease to Made Laundry
        </h1>
        <p>Pick-up & Delivery At Your Door Step</p>
        <div className="pt-4 flex flex-col gap-4">
          <Icontexts
            src={import.meta.env.VITE_BASE_URL + "/images/moneyhand.svg"}
            title="Quality Service"
            description="Our experts inspect the clothes received then proceed for laundry or drycleaning service. We assure to maintain the quality without degrading the texture."
          />
          <Icontexts
            src={import.meta.env.VITE_BASE_URL + "/images/moneyhand.svg"}
            title="Cost-Effective"
            description="Laundramoon provides the laundry services at an affordable costas compared to the market. Please check our price list."
          />
          <Icontexts
            src={import.meta.env.VITE_BASE_URL + "/images/deliverytruck.svg"}
            title="Free Collection and Delivery"
            description="Laundramoon team will collect and deliver your cloth items quickly within your chosen time slot with minimum order £20."
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;

const Icontexts = (prop) => (
  <div className="flex gap-4">
    <div className="">
      <img src={prop.src} width={80} alt="" />
    </div>
    <div className="">
      <h3 className="font-bold ">{prop.title}</h3>
      <p className="text-[#545252] pt-2">{prop.description}</p>
    </div>
  </div>
);
