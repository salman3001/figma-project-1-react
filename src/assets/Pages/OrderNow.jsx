import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MyStepper from "../Components/MyStepper";
import { useSelector } from "react-redux";
import OfferCard from "../Components/OfferCard";
import MakePaymentCard from "../Components/MakePaymentCard";

const OrderNow = () => {
  const location = useLocation();
  const orderNowState = useSelector((state) => state.orderNow);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard/ordernow") {
      navigate("/dashboard/ordernow/address");
    }
  });

  return (
    <Stack>
      <Typography
        variant="body16"
        marginTop={[9, 9, 9, 0]}
        width={"100%"}
        bgcolor={"secondary.main"}
        color={"text.light"}
        padding={2}
      >
        There is high demand in your area, so please place your order within 30
        minutes.
      </Typography>
      <Tabs selected={location.pathname} />
      <ProgressBar
        selected={location.pathname}
        activeStep={location.pathname}
      />
      <Grid
        container
        sx={{
          py: 2,
          paddingX: [2, 2, 4],
        }}
      >
        <Grid item xs={12} lg={8} gap={2}>
          <Outlet />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack paddingY={[2, 3]} paddingX={[0, 2]} spacing={4}>
            {location.pathname === "/dashboard/ordernow/payment" && (
              <MakePaymentCard />
            )}
            <MyStepper step={orderNowState.stepperData} />
            <OfferCard />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default OrderNow;

const Tabs = (prop) => {
  return (
    <Stack
      direction={"row"}
      paddingX={[0, 1, 4]}
      flexWrap={"wrap"}
      sx={{
        "& .xtab": {
          p: 2,
          minWidth: [50, 50, 100],
          textAlign: "center",
        },
      }}
    >
      <Box
        bgcolor={
          prop.selected === "/dashboard/ordernow/address"
            ? "primary.main"
            : "white"
        }
        color={
          prop.selected === "/dashboard/ordernow/address" ? "white" : "black"
        }
        className="xtab"
      >
        Address
      </Box>
      <Box
        bgcolor={
          prop.selected === "/dashboard/ordernow/service"
            ? "primary.main"
            : "white"
        }
        color={
          prop.selected === "/dashboard/ordernow/service" ? "white" : "black"
        }
        className="xtab"
      >
        Service
      </Box>
      <Box
        bgcolor={
          prop.selected === "/dashboard/ordernow/collection"
            ? "primary.main"
            : "white"
        }
        color={
          prop.selected === "/dashboard/ordernow/collection" ? "white" : "black"
        }
        className="xtab"
      >
        Collection
      </Box>
      <Box
        bgcolor={
          prop.selected === "/dashboard/ordernow/contact"
            ? "primary.main"
            : "white"
        }
        className="xtab"
      >
        Contact
      </Box>
      <Box
        bgcolor={
          prop.selected === "/dashboard/ordernow/payment"
            ? "primary.main"
            : "white"
        }
        className="xtab"
      >
        Payment
      </Box>
    </Stack>
  );
};

const ProgressBar = ({ selected }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={
        selected === "/dashboard/ordernow/address"
          ? 20
          : selected === "/dashboard/ordernow/service"
          ? 40
          : selected === "/dashboard/ordernow/collection"
          ? 60
          : selected === "/dashboard/ordernow/contact"
          ? 80
          : selected === "/dashboard/ordernow/payment" && 95
      }
    />
  );
};
