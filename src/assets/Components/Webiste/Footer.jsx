import { Divider, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8 md:gap-16  px-10 md:px-20 py-5">
      <List>
        <div className="flex flex-col gap-4">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
            className="h-6 relative left-[-8%]"
            alt=""
          />
          <Typography>
            Bringing the premium laundry & dry cleaning services straight to
            your door 84 South Road Southall UB1 1RD United Kingdom. Phone : 020
            8574 6433 Email : info@laundramoon.com
          </Typography>
        </div>
      </List>
      <List>
        <Typography variant="subtitle1" color="black" fontWeight={600} mb={1}>
          Popular Services
        </Typography>
        <a href="">
          <Typography>Laundry Service</Typography>
        </a>
        <a href="">
          <Typography>Dry Cleaning</Typography>
        </a>
        <a href="">
          <Typography>Ironing</Typography>
        </a>
        <a href="">
          <Typography>Home and Beding</Typography>
        </a>
        <a href="">
          <Typography>Alterration & Repair</Typography>
        </a>
        <a href="">
          <Typography>Wedding Dresses</Typography>
        </a>
        <a href="">
          <Typography>Shoe Repair</Typography>
        </a>
      </List>
      <List>
        <Typography variant="subtitle1" color="black" fontWeight={600} mb={1}>
          Quick Links
        </Typography>
        <a href="">
          <Typography>About Us</Typography>
        </a>
        <a href="">
          <Typography>Contact Us</Typography>
        </a>
        <a href="">
          <Typography>Faq</Typography>
        </a>
        <a href="">
          <Typography>Pricing</Typography>
        </a>
        <a href="">
          <Typography>Business</Typography>
        </a>
        <a href="">
          <Typography>Data protection & Policy</Typography>
        </a>
        <a href="">
          <Typography>Cookies & Privacy Policy</Typography>
        </a>
      </List>
      <List>
        <Typography variant="subtitle1" color="black" fontWeight={600} mb={1}>
          Selected Locations
        </Typography>
        <a href="">
          {" "}
          <Typography>Dry Cleaning near me</Typography>
        </a>
        <a href="">
          {" "}
          <Typography>Laundry near me</Typography>
        </a>
        <a href="">
          {" "}
          <Typography>South email</Typography>
        </a>
        <a href="">
          {" "}
          <Typography>Emailing</Typography>
        </a>
        <a href="">
          <Typography>White city</Typography>
        </a>
        <a href="">
          <Typography>Bentford</Typography>
        </a>
        <a href="">
          <Typography>Greenford</Typography>
        </a>
        <a href="">
          <Typography>Richmind</Typography>
        </a>
        <a href="">
          <Typography>Heyes</Typography>
        </a>
      </List>
      <List>
        <Typography
          Typography
          variant="subtitle1"
          color="black"
          fontWeight={600}
          mb={1}
        >
          Selected Locations
        </Typography>
        <a href="">
          {" "}
          <Typography>Dry Cleaning near me</Typography>
        </a>
        <a href="">
          {" "}
          <Typography>Laundry near me</Typography>
        </a>
        <a href="">
          {" "}
          <Typography>South email</Typography>
        </a>
        <a href="">
          {" "}
          <Typography>Emailing</Typography>
        </a>
        <a href="">
          <Typography>White city</Typography>
        </a>
        <a href="">
          <Typography>Bentford</Typography>
        </a>
        <a href="">
          <Typography>Greenford</Typography>
        </a>
        <a href="">
          <Typography>Richmind</Typography>
        </a>
        <a href="">
          <Typography>Heyes</Typography>
        </a>
      </List>

      <div className="flex justify-between w-full flex-wrap gap-2 col-span-2 md:col-span-3 lg:col-span-5 border-t-2 pt-4 ">
        <div>copyright © 2023 Laundramoon All rights reserved.</div>
        <div className="flex gap-3 pr-10">
          <a href="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/fb-icon.svg"}
              alt=""
            />
          </a>
          <a href="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/twitter-icon.svg"}
              alt=""
            />
          </a>
          <a href="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/insta-icon.svg"}
              alt=""
            />
          </a>
          <a href="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/linkedin-icon.svg"}
              alt=""
            />
          </a>
          <a href="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/pintrest-icon.svg"}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const List = (prop) => (
  <Stack color="text.muted" spacing={0.2}>
    {prop.children}
  </Stack>
);
