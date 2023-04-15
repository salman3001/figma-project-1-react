import CheckSteper from "../common/CheckSteper";

const OurServiceSection4 = () => {
  const data = [
    { child: <p className="h-32"></p>, completed: true },
    {
      child: (
        <div className="px-4 text-lg">
          <h1 className="text-4xl text-black pb-2 font-semibold">
            Get Ready For Our Laundry Service!
          </h1>

          <p className="opacity-80">
            We offer distinct laundry services to all our clients as per the
            requirement. The service includes wash, tumble dry and fold service.
            All items will be machine washed, tumble dried on medium heat and
            folded (not ironed) and will be returned to you. The laundry service
            is one of our most popular services and is widely booked by
            customers.
          </p>
        </div>
      ),
      completed: true,
    },
    {
      child: (
        <div className="pb-24 text-lg font-bold px-4 flex flex-col gap-1">
          <h1 className="text-black text-xl font-bold">
            What's there in the service -
          </h1>
          <p>
            This is a simple service wash service, but laundered-with-love and
            care - ideal for casual clothing.
          </p>
          <ul className="font-bold grid md:grid-cols-2 gap-2 text-black [&>li>span]:opacity-60 [&>li>span]:font-normal">
            <li>
              <span className="text-[142px] pr-2 font-bold text-[#00A5BF]">
                .
              </span>
              Clothes <span>(those suitable for cool wash)</span>
            </li>
            <li>
              <span className="text-[142px] pr-2 font-bold text-[#00A5BF]">
                .
              </span>
              Towels, bedding and kitchen linen not included
            </li>
            <li>
              <span className="text-[142px] pr-2 font-bold text-[#00A5BF]">
                .
              </span>
              Lights and darks separated
            </li>
            <li>
              <span className="text-[142px] pr-2 font-bold text-[#00A5BF]">
                .
              </span>
              Washed at 30℃
            </li>
            <li>
              <span className="text-[142px] pr-2 font-bold text-[#00A5BF]">
                .
              </span>
              Folded <span>(not Ironed)</span>
            </li>
          </ul>
        </div>
      ),
      completed: true,
    },
    { child: <p></p>, completed: true },
  ];
  return (
    <div className="p-5 xs:10 md:p-20 pb-0 mb- flex flex-col gap-6 about-section3-gradient overflow-hidden h-[1350px] xs:h-[1200px] sm:h-[1100px] md:h-[1300px] lg:h-[1150px]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-semibold ">Our History</h1>
        <p className="opacity-80 text-center max-w-sm ">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
      </div>
      <div className="z-10">
        <img
          src={
            import.meta.env.VITE_BASE_URL +
            "/images/man-holding-dirty-cloth.png"
          }
          alt=""
        />
      </div>
      <div className="flex relative">
        <div className="absolute md:px-20 pb-0 top-[-100px]  ">
          <CheckSteper data={data} />
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection4;
