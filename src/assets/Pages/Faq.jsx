import { Typography } from "@mui/material";
import Accordian from "../Components/Webiste/Common/Accordian";
import Section10 from "../Components/Webiste/Home/Section10";

const Faq = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 text-xl py-4 md:py-10 p-10 md:p-20 ">
        <div className="flex flex-col gap-4">
          <Typography variant="h3" fontWeight={600}>
            Frequently asked questions
          </Typography>
          <ul className="text-2xl md:text-3xl flex flex-col gap-7 opacity-80">
            <li className="flex gap-6 items-center font-bold">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="h6"> General Information</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="h6"> Our Services</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="h6">Coolection & delivery</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="h6">Pricing and payment</Typography>
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              <Typography variant="h6">
                {" "}
                Rescheduling, Cancellations, & Complaints
              </Typography>
            </li>
          </ul>
        </div>
        <div className="flex  flex-col p-5 justify-center">
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
