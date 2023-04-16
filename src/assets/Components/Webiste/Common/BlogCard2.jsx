import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Blogcard2 = (prop) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      onClick={() => {
        navigate("/blog/blogid");
      }}
      elevation={0}
    >
      <CardMedia
        sx={{ minHeight: 300, minWidth: 300, borderRadius: 4 }}
        image={prop.img}
        title="green iguana"
      />
      <Box display="flex" flexDirection="column" maxWidth={300}>
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
      </Box>
    </Card>
  );
};

export default Blogcard2;
