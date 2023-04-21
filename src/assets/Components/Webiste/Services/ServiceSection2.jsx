import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceSection2 = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-y-16 gap-x-8 respnsive-pading-1 respnsive-pading-2">
      <Typography variant="h64" maxWidth={594}>
        Your professional dry clean & Laundry SERVICE
      </Typography>
      <Card />
      <Typography variant="h96">Laundry Service</Typography>
      <Card />
      <Typography variant="h96">Dry Cleaning</Typography>
      <Card />
      <Typography variant="h96">Home & Bedding</Typography>
      <Card />
      <Typography variant="h96">Alterations & Repairs</Typography>
      <Card />
      <Typography variant="h96">Ironing</Typography>
      <Card />
    </div>
  );
};

export default ServiceSection2;

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
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
      <div className="flex gap-4">
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/dashboard/ordernow/address");
          }}
          sx={{
            fontSize: [18, 22],
            height: [45, 59],
            width: [140, 164],
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
            fontSize: [18, 22],
            height: [45, 59],
            width: [140, 164],
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
