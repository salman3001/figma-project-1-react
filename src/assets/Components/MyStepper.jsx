import {
  Divider,
  Stack,
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
    <Stepper
      activeStep={active}
      orientation="vertical"
      sx={{
        color: "text.muted",
        border: 1,
        padding: 2,
        borderRadius: 2,
        borderColor: "rgba(0, 0, 0, 0.16) ",
      }}
    >
      <Step key={1} expanded>
        <StepLabel>
          <Typography fontWeight={650}>Address</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.address.address !== "" && (
            <Typography>{prop.step.address.address}</Typography>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
      <Step key={2} expanded>
        <StepLabel>
          <Typography fontWeight={650}>Services</Typography>
        </StepLabel>
        <StepContent>
          <Stack spacing={0.5}>
            {prop.step.services.wash.items.length > 0 && (
              <>
                <Typography color="primary.main" padding={0.2}>
                  Wash
                </Typography>
                {prop.step.services.wash.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography>
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography>&#163; {item.price * item.quantity}</Typography>
                  </Stack>
                ))}
              </>
            )}
            {prop.step.services.washAndIron.items.length > 0 && (
              <>
                <Typography color="primary.main" padding={0.2}>
                  Wash & Iron
                </Typography>
                {prop.step.services.washAndIron.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography>
                      {" "}
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography>&#163; {item.price * item.quantity}</Typography>
                  </Stack>
                ))}
              </>
            )}
            {prop.step.services.ironing.items.length > 0 && (
              <>
                <Typography color="primary.main" padding={0.2}>
                  Ironing
                </Typography>
                {prop.step.services.ironing.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography>
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography>&#163; {item.price * item.quantity}</Typography>
                  </Stack>
                ))}
              </>
            )}
            {prop.step.services.dryCleaning.items.length > 0 && (
              <>
                <Typography color="primary.main" padding={0.2}>
                  Dry Cleaning
                </Typography>
                {prop.step.services.dryCleaning.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography>
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography>&#163; {item.price * item.quantity}</Typography>
                  </Stack>
                ))}
              </>
            )}
            <Stack direction={"row"} justifyContent="space-between">
              <Typography color="primary.main" padding={0.2}>
                Total
              </Typography>
              <Typography color="primary.main">
                &#163;
                {(
                  prop.step.services.wash.items.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  ) +
                  prop.step.services.washAndIron.items.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  ) +
                  prop.step.services.ironing.items.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  ) +
                  prop.step.services.dryCleaning.items.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )
                ).toFixed(2)}
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
      <Step key={3} expanded>
        <StepLabel>
          <Typography fontWeight={650}>Collection Time</Typography>
        </StepLabel>
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
        <StepLabel>
          <Typography fontWeight={650}>Delivery time</Typography>
        </StepLabel>
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
        <StepLabel>
          <Typography fontWeight={650}>Frequency</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.collection.frquency !== "" && (
            <Typography>{prop.step.collection.frquency}</Typography>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
      <Step key={6} expanded>
        <StepLabel>
          <Typography fontWeight={650}>Contact</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.contact.name !== "" && (
            <>
              <Typography>{prop.step.contact.mobile}</Typography>
              <Typography>{prop.step.contact.email}</Typography>
            </>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
      <Step key={7} expanded>
        <StepLabel>
          <Typography fontWeight={650}>Payment</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.payment !== "" && (
            <Typography>{prop.step.payment}</Typography>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default MyStepper;
