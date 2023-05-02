import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceSection2 = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-y-16 gap-x-8 respnsive-pading-1 respnsive-pading-2">
      <Typography maxWidth={"35rem"} variant="h64" lineHeight={"5.5rem"}>
        Your professional dry clean & Laundry SERVICE
      </Typography>
      <Card />
      <Typography maxWidth={"35rem"} variant="h96" lineHeight={"5.5rem"}>
        Laundry Service
      </Typography>
      <Card />
      <Typography maxWidth={"30rem"} variant="h96" lineHeight={"5.5rem"}>
        Dry Cleaning
      </Typography>
      <Card />
      <Typography maxWidth={"35rem"} variant="h96" lineHeight={"5.5rem"}>
        Home & Bedding
      </Typography>
      <Card />
      <Typography maxWidth={"35rem"} variant="h96" lineHeight={"5.5rem"}>
        Alterations & Repairs
      </Typography>
      <Card />
      <Typography maxWidth={"35rem"} variant="h96" lineHeight={"5.5rem"}>
        Ironing
      </Typography>
      <Card />
    </div>
  );
};

export default ServiceSection2;

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 lg:col-span-2">
      <Typography variant="subtitle36" color={"#1F1F1F"}>
        This Service is for Everyday Laundry
      </Typography>
      <Typography variant="body32" color={"#1F1F1F"}>
        Items are washed and tumble dried. T-shirts, skirts, bra, handkerchiefs,
        jeans, knitwear, jumper etc.
      </Typography>
      <Typography variant="subtitle36" color={"#1F1F1F"}>
        Our Work Process
      </Typography>
      <Typography variant="body32" color={"#1F1F1F"}>
        Machines that use water as the main cleaning solution Clothes are
        washed, tumbled dried then folded This is suitable for daily items
        chlorine-free products and eco-friendly detergents are used
      </Typography>
      <div className="flex gap-8">
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/dashboard/ordernow/address");
          }}
          sx={{
            fontSize: "1.5rem",
            height: "4rem",
            width: "13rem",
            backgroundColor: "#022A30",
          }}
        >
          Book Now
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "black",
            borderColor: "black",
            fontSize: "1.5rem",
            height: "4rem",
            width: "13rem",
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
