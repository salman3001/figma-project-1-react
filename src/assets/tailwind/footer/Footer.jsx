import { ReactNode } from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8 md:gap-16  px-10 md:px-20 py-5">
      <List>
        <div className="flex flex-col gap-4">
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
            className="h-5 relative left-[-20px]"
            alt=""
          />
          <p className="text-[#504F4] opacity-60">
            Bringing the premium laundry & dry cleaning services straight to
            your door 84 South Road Southall UB1 1RD United Kingdom. Phone : 020
            8574 6433 Email : info@laundramoon.com
          </p>
        </div>
      </List>
      <List>
        <p className="font-bold">Popular Services</p>
        <a href="" className="text-[#504F4] opacity-60">
          Laundry Service
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Dry Cleaning
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          ironing
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Home and Bedding
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Alteration & Repair
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Wedding Dresses
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Shoe Repair
        </a>
      </List>
      <List>
        <p className="font-bold">Quick Links</p>
        <a href="" className="text-[#504F4] opacity-60">
          About Us
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Contact Us
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          FAQs
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Pricing
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Business
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Data Protection Policy
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Cookies & Privacy Policy
        </a>
      </List>
      <List>
        <p className="font-bold">Selected Locations</p>
        <a href="" className="text-[#504F4] opacity-60">
          Dry Cleaners Near Me
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Laundry Near Me
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Southhail
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Ealing
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          White City
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Brentford
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Greenford
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Rickmond
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Hayes
        </a>
      </List>
      <List>
        <p className="font-bold">Selected Locations</p>
        <a href="" className="text-[#504F4] opacity-60">
          Dry Cleaners Near Me
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Laundry Near Me
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Southhail
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Ealing
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          White City
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Brentford
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Greenford
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Rickmond
        </a>
        <a href="" className="text-[#504F4] opacity-60">
          Hayes
        </a>
      </List>
      <div className="flex justify-between w-full col-span-2 md:col-span-3 lg:col-span-5 text-[#504F4] ">
        <div>copyright © 2023 Laundramoon All rights reserved.</div>
        <div className="flex gap-2 pr-10">
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

const List = (prop) => <div className="flex flex-col">{prop.children}</div>;
