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
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:min-h-[340px] w-full ">
      <div
        className="sm:w-[50%] h-48 sm:h-auto rounded-3xl"
        style={{
          backgroundImage: `url(${prop.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className=" sm:w-[50%] flex flex-col gap-4">
        <Typography variant="subtitle28" lineHeight="36px" fontWeight={700}>
          {prop.title}
        </Typography>

        <Typography variant="body24 " color="text.muted">
          {prop.description}
        </Typography>
        <div className="flex gap-4 flex-wrap">
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
        </div>
      </div>
    </div>
    // <Card
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     cursor: "pointer",
    //   }}
    //   onClick={() => {
    //     navigate("/blogs/blogid");
    //   }}
    //   elevation={0}
    // >
    //   <CardMedia
    //     sx={{ width: 358, borderRadius: 4 }}
    //     image={prop.img}
    //     title="green iguana"
    //   />
    //   <Box display="flex" flexDirection="column" maxWidth={300} maxHeight={400}>
    //     <CardContent>
    //       <Typography variant="subtitle28" lineHeight="36px">
    //         {prop.title}
    //       </Typography>
    //       <Typography variant="body24 " color="text.muted">
    //         {prop.description}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button
    //         sx={{
    //           borderRadius: 6,
    //           border: 1,
    //           borderColor: "secondary.main",
    //           color: "secondary.main",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           minWidth: 100,
    //         }}
    //       >
    //         UXUI
    //       </Button>
    //       <Button
    //         sx={{
    //           borderRadius: 6,
    //           border: 1,
    //           borderColor: "secondary.main",
    //           color: "secondary.main",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           minWidth: 100,
    //         }}
    //       >
    //         UXUI
    //       </Button>
    //     </CardActions>
    //   </Box>
    // </Card>
  );
};

export default Blogcard2;
