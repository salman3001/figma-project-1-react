import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import NotificationMenu from "./NotificationMenu";
import { useRef, useState } from "react";

const Navbar = (prop) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "84px",
        borderBottom: 2,
        borderColor: theme.palette.divider,
        display: "flex",
        justifyContent: "space-between ",
        paddingX: [2, 2, 4, 8],
      }}
    >
      <Stack direction="row" gap={2} alignItems={"center"}>
        <Box
          sx={{ display: ["block", "block", "none"], cursor: "pointer" }}
          onClick={prop.togelMenu}
        >
          <AiOutlineMenu size={30} />
        </Box>
        <Typography variant="h6">Orders</Typography>
        <Box>
          <Search />
        </Box>
      </Stack>
      <Stack direction="row" gap={2} alignItems={"center"}>
        <Button variant="contained">Order Now</Button>
        <Stack direction="row" gap={2} alignItems={"center"}>
          <NotificationMenu />
          <Typography sx={{ display: ["none", "none", "none", "block "] }}>
            Jackson Howell
          </Typography>
          <IconButton sx={{ border: 1, borderColor: "rgba(0, 0, 0, 0.2)" }}>
            <AiOutlineUser
              style={{
                color: theme.palette.primary.main,
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
