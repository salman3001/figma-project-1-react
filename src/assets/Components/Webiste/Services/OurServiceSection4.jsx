import { Typography } from "@mui/material";
import CheckSteper from "../Common/CheckSteper";

const OurServiceSection4 = () => {
  const data = [
    { child: <Typography className="h-32"></Typography>, completed: true },
    {
      child: (
        <div className="pb-8 text-lg">
          <Typography variant="h4" fontWeight={600} className="h-28">
            Get Ready For Our Laundry Service!
          </Typography>

          <Typography className="opacity-80">
            We offer distinct laundry services to all our clients as per the
            requirement. The service includes wash, tumble dry and fold service.
            All items will be machine washed, tumble dried on medium heat and
            folded (not ironed) and will be returned to you. The laundry service
            is one of our most popular services and is widely booked by
            customers.
          </Typography>
        </div>
      ),
      completed: true,
    },
    {
      child: (
        <div className="pb-8 text-lg font-bold  flex flex-col gap-1">
          <Typography variant="h5" fontWeight={600}>
            What's there in the service -
          </Typography>
          <Typography>
            This is a simple service wash service, but laundered-with-love and
            care - ideal for casual clothing.
          </Typography>
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
    { child: <Typography></Typography>, completed: true },
  ];
  return (
    <div className="p-5 xs:10 md:p-20 pb-0 mb- flex flex-col items-center gap-6 about-section3-gradient overflow-hidden ">
      <div className="flex flex-col gap-2 items-center">
        <Typography variant="h3" fontWeight={550}>
          Our History
        </Typography>
        <Typography variant="h6" className="opacity-80 text-center max-w-sm ">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </Typography>
      </div>
      <div className="z-10 w-full flex justify-center">
        <img
          src={
            import.meta.env.VITE_BASE_URL +
            "/images/man-holding-dirty-cloth.png"
          }
          alt=""
          className="relative top-16"
        />
      </div>
      <div className="flex  self-start w-full">
        <div className=" px-5 md:px-10 xl:px-20 pb-0 ">
          <CheckSteper data={data} />
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection4;
// "/images/man-holding-dirty-cloth.png"
