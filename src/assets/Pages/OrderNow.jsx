import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MyStepper from "../Components/MyStepper";
import { useSelector } from "react-redux";

const OrderNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderNowState = useSelector((state) => state.orderNow);
  useEffect(() => {
    navigate("/ordernow/address");
  }, []);
  return (
    <Stack>
      <Typography
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
      <ProgressBar selected={location.pathname} />
      <Grid container>
        <Grid xs={12} lg={8} padding={2}>
          <Outlet />
        </Grid>
        <Grid xs={12} lg={4} padding={2}>
          <MyStepper step={orderNowState.stepperData} />
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
        "& .tab": {
          p: 2,
          minWidth: [50, 50, 100],
          textAlign: "center",
        },
      }}
    >
      <Box
        bgcolor={
          prop.selected === "/ordernow/address" ? "primary.main" : "white"
        }
        className="tab"
      >
        Address
      </Box>
      <Box
        bgcolor={
          prop.selected === "/ordernow/service" ? "primary.main" : "white"
        }
        className="tab"
      >
        Service
      </Box>
      <Box
        bgcolor={
          prop.selected === "/ordernow/collection" ? "primary.main" : "white"
        }
        className="tab"
      >
        Collection
      </Box>
      <Box
        bgcolor={
          prop.selected === "/ordernow/contact" ? "primary.main" : "white"
        }
        className="tab"
      >
        Contact
      </Box>
      <Box
        bgcolor={
          prop.selected === "/ordernow/payment" ? "primary.main" : "white"
        }
        className="tab"
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
        selected === "/ordernow/address"
          ? 20
          : selected === "/ordernow/service"
          ? 40
          : selected === "/ordernow/collection"
          ? 60
          : selected === "/ordernow/contact"
          ? 80
          : selected === "/ordernow/payment" && 95
      }
    />
  );
};
