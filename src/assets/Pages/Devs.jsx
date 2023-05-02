import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Devs = () => {
  const navigate = useNavigate();
  return (
    <div className="fex flex-col justify-center items-center mx-auto gap-8 min-h-screen max-w-2xl p-10">
      <h1 className="text-2xl p-6">
        Welcome to Dev page. here are the links of all the posible pages of
        website! Please explore...
      </h1>
      <div
        spacing={2}
        className="flex flex-col items-center justify-center w-full"
      >
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/dashboard/myorders");
          }}
        >
          My Orders
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/dashboard/promotions");
          }}
        >
          promotions
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/dashboard/myaccount");
          }}
        >
          My Account
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/dashboard/ordernow/address");
          }}
        >
          Order Now
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/home");
          }}
        >
          home
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Blogs
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/blogs/blogid");
          }}
        >
          Blog detail
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/contactus");
          }}
        >
          Contact Us
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/faqs");
          }}
        >
          Faqs
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/aboutus");
          }}
        >
          About us
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/services");
          }}
        >
          Services
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/ourservices");
          }}
        >
          Our Services
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/Location");
          }}
        >
          Location
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/privacy");
          }}
        >
          Privacy
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          SignUp
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
          onClick={() => {
            navigate("/checkyouremail");
          }}
        >
          Check your Email
        </Button>
        <Button
          sx={{
            fontSize: 20,
          }}
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
