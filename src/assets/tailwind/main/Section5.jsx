export const Section5 = () => {
  return (
    <div className=" flex flex-col gap-4 justify-center md:justify-start p-5 md:p-20 md:pb-10  w-full text-white">
      <div className="bg-[#03444F] flex flex-col gap-2 rounded-2xl p-10 md:p-20">
        <div className=" text-4xl font-bold">Ease to Made Laundry</div>
        <div>
          <div className="md:w-1/2 text-[#EBEBEB] opacity-90">
            Mentioned below are our ever-growing list of services. All orders
            come with free delivery
          </div>
          <div className="flex gap-2 items-center justify-end hover:underline">
            <a href="">View More</a>
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
              alt=""
              className="h-3"
            />
          </div>
        </div>
        <div className="flex gap-4 ">
          <CardWhite title="Wash" />
          <Cardblue title="Wash & Iron" />
          <CardWhite title="Ironing" />
          <Cardblue title="Dry Cleaning" />
        </div>
      </div>
    </div>
  );
};

const CardWhite = (prop: { title: string }) => (
  <div className="flex flex-col gap-1">
    <img src="/images/section5art1.svg" alt="" />
    <p className="font-bold">{prop.title}</p>
  </div>
);

const Cardblue = (prop) => (
  <div className="flex flex-col gap-1">
    <img src="/images/section5art2.svg" alt="" />
    <p className="font-bold">{prop.title}</p>
  </div>
);
