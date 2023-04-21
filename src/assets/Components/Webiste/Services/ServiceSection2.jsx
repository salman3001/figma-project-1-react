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
      <Typography varian="h5" fontWeight={500}>
        This Service is for Everyday Laundry
      </Typography>
      <Typography className="opacity-70">
        Items are washed and tumble dried. T-shirts, skirts, bra, handkerchiefs,
        jeans, knitwear, jumper etc.
      </Typography>
      <Typography varian="h5" fontWeight={500}>
        Our Work Process
      </Typography>
      <Typography className="opacity-70">
        Machines that use water as the main cleaning solution Clothes are
        washed, tumbled dried then folded This is suitable for daily items
        chlorine-free products and eco-friendly detergents are used
      </Typography>
      <div className="flex gap-4">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => {
            navigate("/dashboard/ordernow/address");
          }}
        >
          Book Now
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ color: "black", borderColor: "black" }}
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
