import React from "react";
import Section10 from "../Components/Webiste/Home/Section10";
import { Typography } from "@mui/material";

const PrivaryPolicy = () => {
  return (
    <>
      <div className="respnsive-pading-1 respnsive-pading-2 lg:pt-24  flex flex-col gap-12 ">
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <Typography
            variant="h96"
            className="max-w-[500px]"
            fontWeight={600}
            lineHeight={["5.5rem"]}
          >
            Privacy and cookies policy
          </Typography>
          <div>
            <Typography variant="subtitle32">Updated Date</Typography>
            <Typography variant="subtitle32" color="#A3A3A3">
              12.2.2023
            </Typography>
          </div>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Section10 />
    </>
  );
};

export default PrivaryPolicy;

const Card = () => (
  <div className="flex flex-col gap-2">
    <Typography variant="subtitle36" color={"#1F1F1F"}>
      What's there in the service
    </Typography>
    <Typography variant="body28" color={"#1F1F1F"}>
      This is a simple service wash service, but laundered-with-love and care -
      ideal for casual clothing. We offer distinct laundry services to all our
      clients as per the requirement. The service includes wash, tumble dry and
      fold service. All items will be machine washed, tumble dried on medium
      heat and folded (not ironed) and will be returned to you. The laundry
      service is one of our most popular services and is widely booked by
      customers.
    </Typography>
  </div>
);
