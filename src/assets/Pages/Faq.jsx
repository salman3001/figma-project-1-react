import { Typography } from "@mui/material";
import Accordian from "../Components/Webiste/Common/Accordian";
import Section10 from "../Components/Webiste/Home/Section10";

const Faq = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 text-xl respnsive-pading-1 respnsive-pading-2">
        <div className="flex flex-col gap-4 max-w-[788px] ">
          <Typography
            variant="h96"
            className="leading-[60px] md:leading-[70px] lg:leading-[80px] xl:leading-[106px]"
            fontWeight={653}
          >
            Frequently asked questions
          </Typography>
          <ul className="text-2xl md:text-3xl flex flex-col gap-7 pt-4 opacity-80">
            <li className="flex gap-6 items-center font-bold">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="subtitle32"> General Information</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="body32"> Our Services</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="body32">Coolection & delivery</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="body32">Pricing and payment</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="body32">
                {" "}
                Rescheduling, Cancellations, & Complaints
              </Typography>
            </li>
          </ul>
        </div>
        <div className="flex  flex-col pt-8 lg:pt-0 lg:px -5 justify-center">
          <Accordian
            title="Where do you operate?"
            summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
          />
          <div className="divider"></div>
          <Accordian
            title="Do you offer repair and alteration service too?"
            summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
          />
          <div className="divider"></div>
          <Accordian
            title="How can I contact you?"
            summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
          />
          <div className="divider"></div>
          <Accordian
            title="How can I contact you?"
            summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
          />
          <div className="divider"></div>
          <Accordian
            title="How can I contact you?"
            summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
          />
          <div className="divider"></div>
        </div>
      </div>
      <Section10 />
    </>
  );
};

export default Faq;
