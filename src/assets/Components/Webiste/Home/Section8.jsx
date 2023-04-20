import { Typography } from "@mui/material";
import React from "react";
import Accordian from "../Common/Accordian";

const Section8 = () => {
  return (
    <div className=" flex flex-col gap-4 md:gap-16 respnsive-pading-1 respnsive-pading-2">
      <div className="flex flex-col p-2 justify-center gap-2 items-center">
        <Typography variant="h45">Frequently Asked Questions</Typography>
        <Typography variant="body28" color="text.muted">
          Get a question? we're here to answer!
        </Typography>
      </div>
      <div className="md:pt-8  xl:px-20 2xl:px-32">
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
