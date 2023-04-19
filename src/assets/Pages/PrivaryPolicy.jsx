import React from "react";
import Section10 from "../Components/Webiste/Home/Section10";
import { Typography } from "@mui/material";

const PrivaryPolicy = () => {
  return (
    <>
      <div className="px-10 py-5 md:px-20 flex flex-col gap-8 ">
        <Typography variant="h3" fontWeight={600}>
          Privacy and cookies policy
        </Typography>
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
    <Typography variant="h6" fontWeight={600}>
      What's there in the service
    </Typography>
    <Typography variant="subtitle1">
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
