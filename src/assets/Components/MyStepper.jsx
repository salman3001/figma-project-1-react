import {
  Divider,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { useLocation } from "react-router-dom";

const MyStepper = (prop) => {
  const location = useLocation();

  const active =
    location.pathname === "/dashboard/ordernow/address"
      ? 0
      : location.pathname === "/dashboard/ordernow/service"
      ? 1
      : location.pathname === "/dashboard/ordernow/collection"
      ? 2
      : location.pathname === "/dashboard/ordernow/contact"
      ? 5
      : location.pathname === "/dashboard/ordernow/payment"
      ? 6
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
        "& .MuiStepIcon-text": { fontSize: "1.5rem" },
      }}
    >
      <Step key={1} expanded>
        <StepLabel>
          <Typography variant="subtitle24">Address</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.address.address !== "" && (
            <Typography variant="body18" color="text.muted">
              {prop.step.address.address}
            </Typography>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
      <Step key={2} expanded>
        <StepLabel>
          <Typography variant="subtitle24">Services</Typography>
        </StepLabel>
        <StepContent>
          <Stack spacing={0.5}>
            {prop.step.services.wash.items.length > 0 && (
              <>
                <Typography variant="body22" color="primary.main" padding={0.2}>
                  Wash
                </Typography>
                {prop.step.services.wash.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="body22">
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography variant="body22">
                      &#163; {item.price * item.quantity}
                    </Typography>
                  </Stack>
                ))}
              </>
            )}
            {prop.step.services.washAndIron.items.length > 0 && (
              <>
                <Typography variant="body22" color="primary.main" padding={0.2}>
                  Wash & Iron
                </Typography>
                {prop.step.services.washAndIron.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="body22">
                      {" "}
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography variant="body22">
                      &#163; {item.price * item.quantity}
                    </Typography>
                  </Stack>
                ))}
              </>
            )}
            {prop.step.services.ironing.items.length > 0 && (
              <>
                <Typography variant="body22" color="primary.main" padding={0.2}>
                  Ironing
                </Typography>
                {prop.step.services.ironing.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="body22">
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography variant="body22">
                      &#163; {item.price * item.quantity}
                    </Typography>
                  </Stack>
                ))}
              </>
            )}
            {prop.step.services.dryCleaning.items.length > 0 && (
              <>
                <Typography variant="body22" color="primary.main" padding={0.2}>
                  Dry Cleaning
                </Typography>
                {prop.step.services.dryCleaning.items.map((item) => (
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="body22">
                      {item.name} X {item.quantity}
                    </Typography>
                    <Typography variant="body22">
                      &#163; {item.price * item.quantity}
                    </Typography>
                  </Stack>
                ))}
              </>
            )}
            <Stack direction={"row"} justifyContent="space-between">
              <Typography variant="body22" color="primary.main" padding={0.2}>
                Total
              </Typography>
              <Typography variant="body22" color="primary.main">
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
          <Typography variant="subtitle24">Collection Time</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.collection.collectionTime.date !== null && (
            <>
              <Typography variant="body22">
                {format(prop.step.collection.collectionTime.date, "dd/MM/yy")}
              </Typography>
              <Typography variant="body22">
                {prop.step.collection.collectionTime.timeSlot}
              </Typography>
              <Typography variant="body22">
                {prop.step.collection.collectionTime.message}
              </Typography>
              <Typography color="secondary.main" variant="subtitle22">
                Notes
              </Typography>
              <Typography variant="subtitle22" color="secondary.main">
                {prop.step.collection.collectionTime.notes}
              </Typography>
            </>
          )}
        </StepContent>
      </Step>
      <Step key={4} expanded>
        <StepLabel>
          <Typography variant="subtitle24">Delivery time</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.collection.deliveryTime.date !== null && (
            <>
              <Typography variant="body22">
                {format(prop.step.collection.deliveryTime.date, "dd/MM/yy")}
              </Typography>
              <Typography variant="body22">
                {prop.step.collection.deliveryTime.timeSlot}
              </Typography>
              <Typography variant="body22">
                {prop.step.collection.deliveryTime.message}
              </Typography>
              <Typography color="secondary.main" variant="subtitle22">
                Notes
              </Typography>
              <Typography variant="subtitle22" color="secondary.main">
                {prop.step.collection.collectionTime.notes}
              </Typography>
            </>
          )}
        </StepContent>
      </Step>
      <Step key={5} expanded>
        <StepLabel>
          <Typography variant="subtitle24">Frequency</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.collection.frequency !== "" && (
            <Typography variant="body22">
              {prop.step.collection.frequency}
            </Typography>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
      <Step key={6} expanded>
        <StepLabel>
          <Typography variant="subtitle24">Contact</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.contact.name !== "" && (
            <>
              <Typography variant="body22">
                {prop.step.contact.mobile}
              </Typography>
              <Typography variant="body22">
                {prop.step.contact.email}
              </Typography>
            </>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
      <Step key={7} expanded>
        <StepLabel>
          <Typography variant="subtitle24">Payment</Typography>
        </StepLabel>
        <StepContent>
          {prop.step.payment !== "" && (
            <Typography variant="body22">{prop.step.payment}</Typography>
          )}
          <Divider sx={{ pt: 2 }} />
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default MyStepper;
