import { Typography } from "@mui/material";
import React from "react";
import Accordian from "../Common/Accordian";

const Section8 = () => {
  return (
    <div className="py-10 sm:p-10  xl:px-40 flex flex-col gap-4 md:gap-16">
      <div className="flex flex-col p-2 justify-center gap-2 items-center">
        <Typography variant="h4" fontWeight={600}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5">
          Get a question? we're here to answer!
        </Typography>
      </div>
      <div className="md:pt-8 px-5 md:px-20">
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
  );
};

export default Section8;
