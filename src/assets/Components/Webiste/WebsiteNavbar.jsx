import { AppBar, Button, Drawer, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WebsiteNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const togelDrawer = () => {
    setOpen((state) => (state === true ? false : true));
  };
  return (
    <AppBar
      color="default"
      position="fixed"
      elevation={7}
      sx={{
        overflow: "hidden",
        mb: 1,
        justifyContent: "center",
        height: [60, 70, 80],
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 50 }}>
        {/* logo */}
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
          className="h-4 sm:h-5 md:h-6 lg:h-7 cursor-pointer"
          onClick={() => {
            navigate("/home");
          }}
        />

        {/* links */}
        <div className="hidden lg:flex items-center text-xl gap-6 justify-between">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            <Typography variant="h6">Pricing</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/services");
            }}
          >
            <Typography variant="h6">Services</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            <Typography variant="h6">Business</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/blogs");
            }}
          >
            <Typography variant="h6">Blog</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/faqs");
            }}
          >
            <Typography variant="h6">Faqs</Typography>
          </a>
          <div
            className="border-2 rounded-full animate-pulse duration-0 p-1 cursor-pointer z-50 top-24 text-xl"
            onClick={() => {
              navigate("/devs");
            }}
          >
            <FiSettings />
          </div>
        </div>
        {/* temp for devs */}

        {/* actions */}
        <div className="hidden lg:flex gap-2 md:gap-6">
          <Button
            variant="outlined"
            color="inherit"
            className="w-32"
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              navigate("/dashboard/ordernow/address");
            }}
          >
            Book Now
          </Button>
        </div>
        <div className="block lg:hidden " onClick={togelDrawer}>
          <label htmlFor="hameburger" className="cursor-pointer">
            <BiMenu size={25} />
          </label>
        </div>
        <Drawer
          anchor="right"
          open={open}
          sx={{
            display: ["block", "block", "bock", "none"],
            ".MuiDrawer-paper": {
              width: ["80%", "60%"],
            },
          }}
          onClose={togelDrawer}
        >
          <Toolbar
            sx={{
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              height: "100%",
              paddingY: 7,
              gap: 4,
              position: "relative",
            }}
          >
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
              alt=""
              className="absolute brightness-50 top-0 left-0"
            />
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
              alt=""
              className="absolute brightness-50 bottom-0 right-0 rotate-180"
            />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
              }}
            >
              <Typography variant="h6">Pricing</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
              }}
            >
              <Typography variant="h6">Services</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
              }}
            >
              <Typography variant="h6">Business</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/blogs");
              }}
            >
              <Typography variant="h6">Blogs</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/faqs");
              }}
            >
              <Typography variant="h6">Faqs</Typography>
            </a>
            <div
              className="border-2 rounded-full animate-pulse duration-0 p-1 cursor-pointer z-50 top-24 text-xl"
              onClick={() => {
                navigate("/devs");
              }}
            >
              <FiSettings />
            </div>
            <div className="flex gap-2 md:gap-6 ">
              <Button
                variant="outlined"
                color="inherit"
                className="w-32"
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  navigate("/dashboard/ordernow/address");
                }}
              >
                Book Now
              </Button>
            </div>
          </Toolbar>
        </Drawer>
        {/*  */}
      </Toolbar>
    </AppBar>
  );
};

export default WebsiteNavbar;
