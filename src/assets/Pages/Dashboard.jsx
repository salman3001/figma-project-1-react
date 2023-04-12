import { Box, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import MyDrawer from "../Components/MyDrawer";
import MyOrders from "../Components/MyOrders";
import Navbar from "../Components/Navbar";
import NotificationMenu from "../Components/NotificationMenu";

const Dashboard = () => {
  const [drawerState, setDrawerState] = useState(false);
  const togelState = () => {
    setDrawerState((state) => (state === true ? false : true));
  };

  return (
    <Container maxWidth="xxl" fluid sx={{ padding: "0px" }}>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <MyDrawer open={drawerState} drawerHandler={togelState} />
        <Box
          sx={{
            flexGrow: 1,
            transition: "width .2s  ease-in-out",
            minHeight: "100vh",
            height: "100%",
          }}
        >
          <Navbar togelMenu={togelState} />
          <Stack padding={2}>
            <Grid
              container
              sx={{
                px: [2, 2, 4],
                py: [9, 9, 9, 2],
              }}
            >
              <Grid xs={12} lg={8}>
                <Stack>
                  <MyOrders />
                </Stack>
              </Grid>
              <Grid xs={12} lg={4}>
                <Stack>2</Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
