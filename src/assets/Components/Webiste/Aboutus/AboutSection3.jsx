import { Typography } from "@mui/material";
import CheckSteper from "../Common/CheckSteper";

const AboutSection3 = () => {
  const data = [
    { child: <Typography className="h-32"></Typography>, completed: true },
    {
      child: (
        <Typography variant="h6" className="px-4 text-lg opacity-80">
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
        <div className="pb-24 text-lg px-4 opacity-80">
          <Typography variant="h6" fontWeight={550}>
            OUR SERVICES MADE SIMPLE
          </Typography>
          <Typography variant="h6">
            We provide an affordable and convenient way of getting your dry
            cleaning, laundry, alterations and repair done with top quality
            service in London. Our instant pickup service at a time slot chosen
            by you provides your dry cleaning and laundry done on time.
          </Typography>
        </div>
      ),
      completed: true,
    },
    { child: <Typography></Typography>, completed: true },
  ];
  return (
    <div className="p-5 xs:10 md:p-20 pb-0 mb- flex flex-col items-center gap-6 about-section3-gradient overflow-hidden ">
      <div className="flex flex-col gap-4 items-center">
        <Typography variant="h3" fontWeight={550}>
          Our History
        </Typography>
        <Typography variant="h6" className="opacity-80 text-center max-w-sm ">
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
        <div className=" px-10 md:px-20 pb-0 ">
          <CheckSteper data={data} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
