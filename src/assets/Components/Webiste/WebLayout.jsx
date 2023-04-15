import React from "react";
import WebsiteNavbar from "./WebsiteNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const WebLayout = () => {
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
