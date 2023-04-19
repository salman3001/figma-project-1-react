import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceSection2 = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-y-16 gap-x-8 p-10 md:p-20">
      <Typography variant="h3" fontWeight={600}>
        YOUR PROFESSIONAL DRY CLEAN & LAUNDRY SERVICE
      </Typography>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Laundry Service</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Dry Cleaning</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Home & Bedding</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Alterations & Repairs</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Ironing</h1>
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
