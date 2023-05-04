import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckYourEmail = () => {
  const navigate = useNavigate();

  return (
    <main className="grid 2 mx-auto lg:grid-cols-2 min-h-screen max-w-screen">
      <Box
        className="relative flex text-white flex-col justify-between  items-center"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          bgcolor: "primary.main",
          maxHeight: "100vh",
        }}
      >
        <h1
          className="w-full p-6 md:px-16 border-b border-white border-opacity-20"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
            }
            className="h-6"
            alt=""
          />
        </h1>
        <div className="flex pt-8 flex-col items-center">
          <Typography variant="h45" color={"white"}>
            Welcome back!
          </Typography>
          <Typography
            variant="body22"
            color="rgba(255, 255, 255, 0.73)"
            className="px-5 text-center"
          >
            See the latest system update on our blog
          </Typography>
        </div>
        <div>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/Signupart.png"}
            alt=""
            className="self-start"
          />
        </div>
      </Box>
      <div className="bg-white relative min-h-screen ">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute brightness-[.8] top-0 left-0 h-72"
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute brightness-[.8] bottom-0 right-0 rotate-180 z-0 h-72"
        />
        <h1 className="w-full p-2 md:px-16 border-b text-end border-gray-300 border-opacity-20">
          <Typography variant="body18">
            I already have an account?{" "}
            <Button
              sx={{ textTransform: "none", fontSize: 18 }}
              size="large"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </Typography>
        </h1>
        <div className="flex flex-col p-2 justify-center items-center text-center gap-10 h-[90%] relative z-10">
          <div className="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/email-circle-icon.png"
              }
              alt=""
            />
          </div>
          <div className="max-w-[35rem]">
            <Typography variant="subtitle36">Check Your Email</Typography>
            <Typography variant="body22" color="text.muted">
              To confirm your email address, tap the linkin the email we sent to
              ioaefhiahe@gmail.com
            </Typography>
          </div>
          <div className="grid grid-cols-2 p-2 border w-80 place-items-center text-start rounded-lg mb-8">
            <div className="">
              <h3>Need Help</h3>
              <a href="" className="text-xs text-[#00A5BF]">
                Contact our support
              </a>
            </div>
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/check-circle-icon.png"
              }
              className="place-self-end self-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckYourEmail;
