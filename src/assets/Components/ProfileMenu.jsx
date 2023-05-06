import { useTheme } from "@emotion/react";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TfiMedallAlt } from "react-icons/tfi";
import { CgLogOff } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //fetch data here
  const demoData = [
    { odername: "My Order", status: "delivered", date: Date.now() },
    { odername: "My Order", status: "delivered", date: Date.now() },
    { odername: "My Order", status: "delivered", date: Date.now() },
  ];

  return (
    <div>
      <IconButton
        sx={{ border: 1, borderColor: "rgba(0, 0, 0, 0.2)" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AiOutlineUser
          style={{
            color: theme.palette.primary.main,
          }}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          top: ["2rem", "10px"],

          "&>.MuiMenuItem-root": {
            width: "210px",
          },
          "& .MuiPaper-root": {
            minWidth: ["90vw", "auto"],
          },
        }}
      >
        <MenuItem>
          <ListItemIcon
            sx={{
              "&>svg": {
                color: "text.blue",
              },
            }}
          >
            <HiOutlineClipboardDocumentList size={25} />
          </ListItemIcon>
          <Typography
            variant="body24"
            color="text.secondary"
            onClick={() => {
              navigate("/dashboard/myorders");
            }}
          >
            My Orders
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon
            sx={{
              "&>svg": {
                color: "text.blue",
              },
            }}
          >
            <TfiMedallAlt size={25} />
          </ListItemIcon>
          <Typography
            variant="body24"
            color="text.secondary"
            onClick={() => {
              navigate("/dashboard/promotions");
            }}
          >
            Promotions
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon
            sx={{
              "&>svg": {
                color: "text.blue",
              },
            }}
          >
            <AiOutlineUser size={25} />
          </ListItemIcon>
          <Typography
            variant="body24"
            color="text.secondary"
            onClick={() => {
              navigate("/dashboard/myaccount");
            }}
          >
            My Account
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon
            sx={{
              "&>svg": {
                color: "text.blue",
              },
            }}
          >
            <CgLogOff size={25} />
          </ListItemIcon>
          <Typography variant="body24" color="text.secondary">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
