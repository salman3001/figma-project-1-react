import React, { useEffect } from "react";
import WebsiteNavbar from "./WebsiteNavbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@mui/material";

const WebLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });
  return (
    <div className="flex bg-white  min-h-screen mx-auto flex-col justify-between">
      <header>
        <WebsiteNavbar />
      </header>
      <Box
        component="main"
        className="grow"
        sx={{ mt: ["60px", "70px", "80px"] }}
      >
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default WebLayout;
