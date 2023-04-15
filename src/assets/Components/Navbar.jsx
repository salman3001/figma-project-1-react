import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";
import NotificationMenu from "./NotificationMenu";
import ProfileMenu from "./ProfileMenu";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = (prop) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <AppBar color="transparent" position="static">
      <Toolbar
        sx={{
          width: "100%",
          height: "84px",
          borderBottom: 2,
          borderColor: theme.palette.divider,
          display: "flex",
          justifyContent: "space-between ",
          paddingX: [2, 2, 4],
        }}
      >
        <Stack
          direction="row"
          gap={2}
          alignItems={"center"}
          sx={{ position: "relative" }}
        >
          <Box
            sx={{ display: ["block", "block", "none"], cursor: "pointer" }}
            onClick={prop.togelMenu}
          >
            <AiOutlineMenu size={30} />
          </Box>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              display: ["none", "none", "block"],
            }}
          >
            {location.pathname === "/dashboard//myorders"
              ? "Orders"
              : location.pathname === "/dashboard//promotions"
              ? "Promotions"
              : location.pathname === "/dashboard//myaccount"
              ? "My Account"
              : location.pathname === "/dashboard//ordernow" && "Order Now"}
          </Typography>
          <Box
            sx={{
              position: ["absolute", "absolute", "absolute", "static"],
              top: [80],
              left: [0],
              width: [280],
            }}
          >
            <Search />
          </Box>
        </Stack>
        <Stack direction="row" gap={2} alignItems={"center"}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/dashboard/ordernow/address");
            }}
          >
            Order Now
          </Button>
          <Stack direction="row" gap={2} alignItems={"center"}>
            <NotificationMenu />
            <Typography sx={{ display: ["none", "none", "block"] }}>
              Jackson Howell
            </Typography>
            <ProfileMenu />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
