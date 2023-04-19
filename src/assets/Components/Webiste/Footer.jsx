import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-2 md:grid-cols-3 h-a xl:grid-cols-5 gap-8">
        <div className="max-w-[300px] col-span-2 sm:col-span-1">
          <Stack spacing={2} alignItems="start">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
              className="h-6 slef-start wrap"
              alt=""
            />
            <Typography
              variant="body22"
              color="text.muted"
              maxWidth={"200px"}
              text
            >
              Bringing the premium laundry & dry cleaning services straight to
              your door 84 South Road Southall UB1 1RD United Kingdom. Phone :
              020 8574 6433 Email : info@laundramoon.com
            </Typography>
          </Stack>
        </div>
        <List>
          <Typography variant="subtitle18" mb={1}>
            Popular Services
          </Typography>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Laundry Service
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Dry Cleaning
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Ironing
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Home and Beding
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Alterration & Repair
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Wedding Dresses
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Shoe Repair
            </Typography>
          </a>
        </List>
        <List>
          <Typography variant="subtitle18" mb={1}>
            Quick Links
          </Typography>
          <a href="">
            <Typography variant="body22" color="text.muted">
              About Us
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Contact Us
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Faq
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Pricing
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Business
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Data protection & Policy
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Cookies & Privacy Policy
            </Typography>
          </a>
        </List>
        <List>
          <Typography variant="subtitle18" mb={1}>
            Selected Locations
          </Typography>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              Dry Cleaning near me
            </Typography>
          </a>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              Laundry near me
            </Typography>
          </a>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              South email
            </Typography>
          </a>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              Emailing
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              White city
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Bentford
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Greenford
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Richmind
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Heyes
            </Typography>
          </a>
        </List>
        <List>
          <Typography variant="subtitle18">Selected Locations</Typography>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              Dry Cleaning near me
            </Typography>
          </a>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              Laundry near me
            </Typography>
          </a>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              South email
            </Typography>
          </a>
          <a href="">
            {" "}
            <Typography variant="body22" color="text.muted">
              Emailing
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              White city
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Bentford
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Greenford
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Richmind
            </Typography>
          </a>
          <a href="">
            <Typography variant="body22" color="text.muted">
              Heyes
            </Typography>
          </a>
        </List>
      </footer>
      <div className="flex justify-between w-full flex-wrap gap-2 col-span-2 md:col-span-3 lg:col-span-5 border-t-2 pt-4 ">
        <Typography variant="body22" color="text.muted">
          copyright &#169; 2023 <span className="underline">Laundramoon </span>{" "}
          All rights reserved.
        </Typography>
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
    </>
  );
};

export default Footer;

const List = (prop) => (
  <Stack color="text.muted" spacing={0.2} className="grow">
    {prop.children}
  </Stack>
);
