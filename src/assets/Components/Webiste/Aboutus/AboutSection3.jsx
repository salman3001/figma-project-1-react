import { Typography } from "@mui/material";
import CheckSteper from "../Common/CheckSteper";

const AboutSection3 = () => {
  const data = [
    {
      child: <Typography className="h-20 md:h-28 xl:h32"></Typography>,
      completed: true,
    },
    {
      child: (
        <Typography variant="body32" color="#1F1F1F" className="pl-4 pr-2 pb-8">
          We are based in Southall London since 1978, offering a range of
          services as well as collection and delivery for over 50 years. We are
          delighted to say every individual customer to corporate clients have
          been looked after with dedicated personal touch that they deserve.
          Over the years we have learned the art of building a relationship with
          our prime customers, obsessing over the quality of service and always
          delivering on promises. Our NHS and hospitality clients can be assured
          that Laundramoon will always go extra miles to deliver at most best
          service possible. We are proud at what we do. Our experienced customer
          service experts ensure your order is handled with care and
          professionalism and you face no difficulty during our service.
        </Typography>
      ),
      completed: true,
    },
    {
      child: (
        <div className="pl-4 pr-2 pb-8">
          <Typography variant="subtitle32" color="#1F1F1F">
            OUR SERVICES MADE SIMPLE
          </Typography>
          <Typography variant="body32" color="#1F1F1F ">
            We provide an affordable and convenient way of getting your dry
            cleaning, laundry, alterations and repair done with top quality
            service in London. Our instant pickup service at a time slot chosen
            by you provides your dry cleaning and laundry done on time.
          </Typography>
        </div>
      ),
      completed: true,
    },
    {
      child: <Typography className="h-20 "></Typography>,
      completed: true,
    },
  ];
  return (
    <div className="respnsive-pading-1 respnsive-pading-2 pb-0 flex flex-col items-center about-section3-gradient overflow-hidden ">
      <div className="flex flex-col gap-4 items-center">
        <Typography variant="h45">Our History</Typography>
        <Typography
          variant="body28"
          className="text-center max-w-[46rem] opacity-90"
        >
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </Typography>
      </div>
      <div className="z-10">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/young-woman.png"}
          alt=""
          className="relative top-16"
        />
      </div>
      <div className="flex  self-start w-full">
        <div className="pl-3 md:pl-5 xl:pl-20">
          <CheckSteper data={data} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
