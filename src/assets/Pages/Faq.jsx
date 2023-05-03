import { Typography } from "@mui/material";
import { useState } from "react";
import Accordian from "../Components/Webiste/Common/Accordian";
import Section10 from "../Components/Webiste/Home/Section10";

const data1 = [
  {
    title: "Our General Information",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Do you offer repair and alteration service too?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Where do you operate?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
];

const data2 = [
  {
    title: "Our Services",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Where do you operate?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Do you offer repair and alteration service too?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
];

const data3 = [
  {
    title: "Our Collection & delivery",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Where do you operate?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Do you offer repair and alteration service too?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
];

const data4 = [
  {
    title: "Our pricing and payment",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Do you offer repair and alteration service too?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Where do you operate?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
];

const data5 = [
  {
    title: "Our Rescheduling, Cancellations, & Complaints",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Where do you operate?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "How can I contact you?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
  {
    title: "Do you offer repair and alteration service too?",
    summery:
      "Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z",
  },
];

const Faq = () => {
  const [category, setCaegory] = useState(1);
  return (
    <>
      <div className="respnsive-pading-1 respnsive-pading-2 ">
        <div className="flex flex-col gap-12 w-full">
          <Typography
            variant="h96"
            maxWidth={"42rem"}
            className="leading-[6rem]"
            fontWeight={653}
          >
            Frequently asked questions
          </Typography>
          <div className="flex flex-col md:flex-row w-full gap-6 justify-between">
            <ul className="text-2xl md:text-3xl flex flex-col gap-7 pt-4 opacity-80 md:w-1/2">
              <li className="flex gap-6 items-center font-bold">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                  className="h-4"
                  alt=""
                />
                <Typography
                  variant={category === 1 ? "subtitle32" : "body32"}
                  className="cursor-pointer"
                  onClick={() => {
                    setCaegory(1);
                  }}
                >
                  {" "}
                  General Information
                </Typography>
              </li>
              <li className="flex gap-6 items-center">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                  className="h-4"
                  alt=""
                />
                <Typography
                  variant={category === 2 ? "subtitle32" : "body32"}
                  className="cursor-pointer"
                  onClick={() => {
                    setCaegory(2);
                  }}
                >
                  {" "}
                  Our Services
                </Typography>
              </li>
              <li className="flex gap-6 items-center">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                  className="h-4"
                  alt=""
                />
                <Typography
                  variant={category === 3 ? "subtitle32" : "body32"}
                  className="cursor-pointer"
                  onClick={() => {
                    setCaegory(3);
                  }}
                >
                  Coolection & delivery
                </Typography>
              </li>
              <li className="flex gap-6 items-center">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                  className="h-4"
                  alt=""
                />
                <Typography
                  variant={category === 4 ? "subtitle32" : "body32"}
                  className="cursor-pointer"
                  onClick={() => {
                    setCaegory(4);
                  }}
                >
                  Pricing and payment
                </Typography>
              </li>
              <li className="flex gap-6 items-center">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                  className="h-4"
                  alt=""
                />
                <Typography
                  variant={category === 5 ? "subtitle32" : "body32"}
                  className="cursor-pointer"
                  onClick={() => {
                    setCaegory(5);
                  }}
                >
                  {" "}
                  Rescheduling, Cancellations, & Complaints
                </Typography>
              </li>
            </ul>
            <div className="flex  flex-col pt-8 lg:pt-0 lg:px-5 justify-center md:w-1/2">
              {category === 1 &&
                data1.map((item) => (
                  <>
                    <Accordian title={item.title} summery={item.summery} />
                    <div className="divider"></div>
                  </>
                ))}
              {category === 2 &&
                data2.map((item) => (
                  <>
                    <Accordian title={item.title} summery={item.summery} />
                    <div className="divider"></div>
                  </>
                ))}
              {category === 3 &&
                data3.map((item) => (
                  <>
                    <Accordian title={item.title} summery={item.summery} />
                    <div className="divider"></div>
                  </>
                ))}
              {category === 4 &&
                data4.map((item) => (
                  <>
                    <Accordian title={item.title} summery={item.summery} />
                    <div className="divider"></div>
                  </>
                ))}
              {category === 5 &&
                data5.map((item) => (
                  <>
                    <Accordian title={item.title} summery={item.summery} />
                    <div className="divider"></div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Section10 />
    </>
  );
};

export default Faq;
