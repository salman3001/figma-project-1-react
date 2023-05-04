import { Typography } from "@mui/material";
import CheckSteper from "../Common/CheckSteper";
import { BsCircleFill } from "react-icons/bs";

const OurServiceSection4 = () => {
  const data = [
    {
      child: <Typography className="h-16 md:h-24 lg:h-32 pl-4"></Typography>,
      completed: true,
    },
    {
      child: (
        <div className="pb-8 text-lg pl-4">
          <Typography variant="h45" className="leading-[3.5rem] pb-4">
            Get Ready For Our Laundry Service!
          </Typography>

          <Typography
            variant="body32"
            className="opacity-80"
            lineHeight={["30px", "35px", "47px"]}
          >
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
        <div className="pb-8   flex flex-col gap-4 pl-4">
          <Typography variant="subtitle32">
            What's there in the service -
          </Typography>
          <Typography variant="body32">
            This is a simple service wash service, but laundered-with-love and
            care - ideal for casual clothing.
          </Typography>
          <ul className="font-bold grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-black [&>li>span]:opacity-60 [&>li>span]:font-normal">
            <div className="flex gap-5 ">
              <div className="flex justify-center pt-2 ">
                <BsCircleFill color="#00A5BF" size={30} />
              </div>
              <Typography variant="subtitle32">
                Clothes{" "}
                <span className="font-normal">
                  (those suitable for cool wash)
                </span>
              </Typography>
            </div>
            <div className="flex gap-5 ">
              <div className="flex justify-center pt-2 ">
                <BsCircleFill color="#00A5BF" size={30} />
              </div>
              <Typography variant="subtitle32">
                Towels, bedding and kitchen linen not included
              </Typography>
            </div>
            <div className="flex gap-5 ">
              <div className="flex justify-center pt-2 ">
                <BsCircleFill color="#00A5BF" size={30} />
              </div>
              <Typography variant="subtitle32">Charged by the bag</Typography>
            </div>
            <div className="flex gap-5 ">
              <div className="flex justify-center pt-2 ">
                <BsCircleFill color="#00A5BF" size={30} />
              </div>
              <Typography variant="subtitle32">
                Lights and darks separated
              </Typography>
            </div>
            <div className="flex gap-5 ">
              <div className="flex justify-center pt-2 ">
                <BsCircleFill color="#00A5BF" size={30} />
              </div>
              <Typography variant="subtitle32">Washed at 30℃</Typography>
            </div>
            <div className="flex gap-5 ">
              <div className="flex justify-center pt-2 ">
                <BsCircleFill color="#00A5BF" size={30} />
              </div>
              <Typography variant="subtitle32">
                Tumble dried on medium heat
              </Typography>
            </div>
            <div className="flex gap-5 ">
              <div className="flex justify-center pt-2 ">
                <BsCircleFill color="#00A5BF" size={30} />
              </div>
              <Typography variant="subtitle32">
                Folded <span className="font-normal">(not ironed)</span>
              </Typography>
            </div>
          </ul>
        </div>
      ),
      completed: true,
    },
    { child: <Typography></Typography>, completed: true },
  ];
  return (
    <div className="respnsive-pading-1 respnsive-pading-2  pb-0 flex flex-col items-center about-section3-gradient overflow-hidden ">
      <div className="flex flex-col gap-2 items-center">
        <Typography variant="h45">Our History</Typography>
        <Typography
          variant="body28"
          color="text.muted"
          maxWidth={750}
          textAlign={"center"}
        >
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
          className="relative top-14"
        />
      </div>
      <div className="flex  self-start w-full">
        <div className=" pl-2 md:pl-5 xl:pl-20 pb-0 ">
          <CheckSteper data={data} />
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection4;
// "/images/man-holding-dirty-cloth.png"
