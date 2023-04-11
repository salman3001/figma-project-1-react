import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import {
  IoIosNotificationsOutline,
  IoMdLogOut,
  IoMdPersonAdd,
} from "react-icons/io";

const NotificationMenu = (prop) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <IoIosNotificationsOutline
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
          "&>li": {
            width: "210px",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Notificationcard />
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default NotificationMenu;

const Notificationcard = () => {
  return <Box></Box>;
};
