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
    <Card
      sx={{}}
      onClick={() => {
        navigate("/blog/blogid");
      }}
      elevation={0}
    >
      <CardMedia
        sx={{ minHeight: 500, borderRadius: 4 }}
        image={prop.img}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" fontWeight={600} component="div">
          {prop.title}
        </Typography>
        <Typography variant="body2" color="text.muted">
          {prop.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            borderRadius: 6,
            border: 1,
            borderColor: "secondary.main",
            color: "secondary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 100,
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
            minWidth: 100,
          }}
        >
          UXUI
        </Button>
      </CardActions>
    </Card>
  );
};

export default Blogcard1;
