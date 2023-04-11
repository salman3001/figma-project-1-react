import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import MyDrawer from "../Components/MyDrawer";
import Navbar from "../Components/Navbar";
import NotificationMenu from "../Components/NotificationMenu";

const Dashboard = () => {
  const [drawerState, setDrawerState] = useState(true);
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
          <NotificationMenu />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
