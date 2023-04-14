import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MyDrawer from "./MyDrawer";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const [drawerState, setDrawerState] = useState(false);
  const togelState = () => {
    setDrawerState((state) => (state === true ? false : true));
  };
  return (
    <Container maxWidth="full" fluid sx={{ padding: "0px" }}>
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
            maxHeight: "100vh",
            overflow: "scroll",
            width: "calc(100vw - 295px)",
          }}
        >
          <Navbar togelMenu={togelState} />
          <Stack padding={0}>
            <Outlet />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardLayout;
