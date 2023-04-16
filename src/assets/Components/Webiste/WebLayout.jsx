import React, { useEffect } from "react";
import WebsiteNavbar from "./WebsiteNavbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

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
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebLayout;
