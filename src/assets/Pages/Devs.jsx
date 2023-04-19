import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Devs = () => {
  const navigate = useNavigate();
  return (
    <div className="fex flex-col justify-center items-center mx-auto gap-8 min-h-screen max-w-2xl p-10">
      <h1 className="text-2xl">
        Welcome to Dev page. here are the links of all the posible pages of
        website! Please explore...
      </h1>
      <div
        spacing={2}
        className="flex flex-col items-center justify-center w-full"
      >
        <Button
          onClick={() => {
            navigate("/dashboard/myorders");
          }}
        >
          My Orders
        </Button>
        <Button
          onClick={() => {
            navigate("/dashboard/promotions");
          }}
        >
          promotions
        </Button>
        <Button
          onClick={() => {
            navigate("/dashboard/myaccount");
          }}
        >
          My Account
        </Button>
        <Button
          onClick={() => {
            navigate("/dashboard/ordernow/address");
          }}
        >
          Order Now
        </Button>
        <Button
          onClick={() => {
            navigate("/home");
          }}
        >
          home
        </Button>
        <Button
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Blogs
        </Button>
        <Button
          onClick={() => {
            navigate("/blogs/blogid");
          }}
        >
          Blog detail
        </Button>
        <Button
          onClick={() => {
            navigate("/contactus");
          }}
        >
          Contact Us
        </Button>
        <Button
          onClick={() => {
            navigate("/faqs");
          }}
        >
          Faqs
        </Button>
        <Button
          onClick={() => {
            navigate("/aboutus");
          }}
        >
          About us
        </Button>
        <Button
          onClick={() => {
            navigate("/services");
          }}
        >
          Services
        </Button>
        <Button
          onClick={() => {
            navigate("/ourservices");
          }}
        >
          Our Services
        </Button>
        <Button
          onClick={() => {
            navigate("/Location");
          }}
        >
          Location
        </Button>
        <Button
          onClick={() => {
            navigate("/privacy");
          }}
        >
          Privacy
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            navigate("/signup");
          }}
        >
          SignUp
        </Button>
        <Button
          onClick={() => {
            navigate("/checkyouremail");
          }}
        >
          Check your Email
        </Button>
        <Button
          onClick={() => {
            navigate("/successfullyvarified");
          }}
        >
          Successfully varified
        </Button>
      </div>
    </div>
  );
};

export default Devs;
