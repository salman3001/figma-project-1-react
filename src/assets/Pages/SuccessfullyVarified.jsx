import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SuccessfullyVarified = () => {
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
        }}
      >
        <h1
          className="w-full p-6 border-b border-white border-opacity-20"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
            }
            className="h-6 "
            alt=""
          />
        </h1>
        <div className="flex pt-8 flex-col items-center">
          <Typography variant="h4">Welcome back!</Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
            See the latest system update on our blog
          </Typography>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Signupart.png"}
          alt=""
          className="self-start"
        />
      </Box>
      <div className="bg-white relative">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute"
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute bottom-0 right-0 rotate-180"
        />
        <h1 className="w-full p-4 border-b text-end border-gray-300 border-opacity-20">
          <Typography variant="subtitle1">
            Don't have an account?{" "}
            <Button
              sx={{ textTransform: "none" }}
              size="large"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
          </Typography>
        </h1>
        <div className="flex flex-col justify-center items-center text-center gap-8 h-[90%]">
          <div className="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/success-icon.svg"}
              alt=""
            />
          </div>
          <div className="max-w-md flex flex-col gap-4">
            <Typography variant="h4" fontWeight={600}>
              Successfully Varified
            </Typography>
            <Typography variant="subtitle1" color="text.muted ">
              To confirm your email address, tap the linkin the email we sent to
              ioaefhiahe@gmail.com
            </Typography>
            <Button
              fullWidth
              sx={{ textTransform: "none" }}
              variant="contained"
              size="large"
              endIcon={<BsArrowRight />}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </div>
          <div className="grid grid-cols-2 p-2 border max-w-xs justify-content-center text-start rounded-lg">
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

export default SuccessfullyVarified;
