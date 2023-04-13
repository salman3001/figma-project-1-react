import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const MyStepper = (prop) => {
  const location = useLocation();

  const active =
    location.pathname === "/ordernow/address"
      ? 0
      : location.pathname === "/ordernow/service"
      ? 1
      : location.pathname === "/ordernow/collection"
      ? 2
      : location.pathname === "/ordernow/contact"
      ? 6
      : location.pathname === "/ordernow/payment"
      ? 7
      : null;
  return (
    <Stepper activeStep={active} orientation="vertical">
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
