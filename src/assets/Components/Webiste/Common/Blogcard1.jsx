import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Blogcard1 = (prop) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[350px] sm:min-h-[750px] w-full flex flex-col gap-4">
      <div
        className="min-h-[350px] sm:min-h-[550px] w-full rounded-3xl"
        style={{
          backgroundImage: `url(${prop.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col gap-4">
        <Typography variant="subtitle28" fontWeight={700} component="div">
          {prop.title}
        </Typography>

        <Typography variant="body24" color="text.muted" minWidth={0}>
          {prop.description}
        </Typography>
        <div className="flex gap-4">
          <Button
            sx={{
              borderRadius: 6,
              border: 1,
              borderColor: "secondary.main",
              color: "secondary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 150,
            }}
          >
            UXUI
          </Button>
          <Button
            sx={{
              borderRadius: 6,
              border: 1,
              borderColor: "secondary.main",
              color: "secondary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 150,
            }}
          >
            UXUI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blogcard1;
