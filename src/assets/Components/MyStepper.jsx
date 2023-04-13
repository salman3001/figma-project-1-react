import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const MyStepper = (prop) => {
  return (
    <Stepper activeStep={prop.activeStep} orientation="vertical">
      <Step key={1} expanded>
        <StepLabel>Address</StepLabel>
        <StepContent>
          {prop.step.address.address !== "" && (
            <Typography>{prop.step.address.address}</Typography>
          )}
        </StepContent>
      </Step>
      <Step key={2} expanded>
        <StepLabel>Services</StepLabel>
        <StepContent>
          {prop.step.services.wash.items.length > 0 && (
            <>
              <Typography>Wash</Typography>
              {prop.step.services.wash.items.map((item) => (
                <Stack>
                  <Typography>{item.name}</Typography>
                  <Typography>&#163; {item.price}</Typography>
                </Stack>
              ))}
            </>
          )}
          {prop.step.services.washAndIron.items.length > 0 && (
            <>
              <Typography>Wash & Iron</Typography>
              {prop.step.services.washAndIron.items.map((item) => (
                <Stack>
                  <Typography>{item.name}</Typography>
                  <Typography>&#163; {item.price}</Typography>
                </Stack>
              ))}
            </>
          )}
          {prop.step.services.ironing.items.length > 0 && (
            <>
              <Typography>Ironing</Typography>
              {prop.step.services.ironing.items.map((item) => (
                <Stack>
                  <Typography>{item.name}</Typography>
                  <Typography>&#163; {item.price}</Typography>
                </Stack>
              ))}
            </>
          )}
          {prop.step.services.dryCleaning.items.length > 0 && (
            <>
              <Typography>Dry Cleaning</Typography>
              {prop.step.services.dryCleaning.items.map((item) => (
                <Stack>
                  <Typography>{item.name}</Typography>
                  <Typography>&#163; {item.price}</Typography>
                </Stack>
              ))}
            </>
          )}
        </StepContent>
      </Step>
      <Step key={3} expanded>
        <StepLabel>Collection Time</StepLabel>
        <StepContent>
          {prop.step.collection.collectionTime.time !== "" && (
            <>
              <Typography>
                {prop.step.collection.collectionTime.time}
              </Typography>
              <Typography>
                {prop.step.collection.collectionTime.message}
              </Typography>
              <Typography>
                {prop.step.collection.collectionTime.notes}
              </Typography>
            </>
          )}
        </StepContent>
      </Step>
      <Step key={4} expanded>
        <StepLabel>Delivery Time</StepLabel>
        <StepContent>
          {prop.step.collection.deliveryTime.time !== "" && (
            <>
              <Typography>{prop.step.collection.deliveryTime.time}</Typography>
              <Typography>
                {prop.step.collection.deliveryTime.message}
              </Typography>
              <Typography>{prop.step.collection.deliveryTime.notes}</Typography>
            </>
          )}
        </StepContent>
      </Step>
      <Step key={5} expanded>
        <StepLabel>Frequency</StepLabel>
        <StepContent>
          {prop.step.collection.frquency !== "" && (
            <Typography>{prop.step.collection.frquency}</Typography>
          )}
        </StepContent>
      </Step>
      <Step key={6} expanded>
        <StepLabel>Contact</StepLabel>
        <StepContent>
          {prop.step.contact.name !== "" && (
            <>
              <Typography>{prop.step.contact.mobile}</Typography>
              <Typography>{prop.step.contact.email}</Typography>
            </>
          )}
        </StepContent>
      </Step>
      <Step key={7} expanded>
        <StepLabel>Payment</StepLabel>
        <StepContent>
          {prop.step.payment !== "" && (
            <Typography>{prop.step.payment}</Typography>
          )}
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default MyStepper;
