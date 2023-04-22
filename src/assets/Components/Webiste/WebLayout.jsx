import React, { useEffect } from "react";
import WebsiteNavbar from "./WebsiteNavbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { FiSettings } from "react-icons/fi";

const WebLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });
  return (
    <div className="flex bg-white min-h-screen  flex-col justify-between">
      <header>
        <WebsiteNavbar />
      </header>
      <Box
        component="main"
        className="grow"
        sx={{ mt: ["70px", "70px", "60px", "20px", "20px", "20px", "80px"] }}
      >
        <Outlet />
      </Box>
      <div className="respnsive-pading-1 pt-8">
        <Footer />
      </div>
    </div>
  );
};

export default WebLayout;
