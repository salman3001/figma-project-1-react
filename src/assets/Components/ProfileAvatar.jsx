import { Avatar, Box } from "@mui/material";
import React from "react";

const ProfileAvatar = (prop) => {
  return (
    <Box
      sx={{
        width: "12rem",
        hieght: "12rem",
        border: 4,
        borderRadius: "100%",
        borderColor: "white",
        placeSelf: "center",
        padding: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "11.8rem",
          hieght: "11.8rem",
          borderRadius: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&>img": {
            width: "100%",
            height: "auto",
          },
        }}
      >
        <img src={prop.src} alt="" />
      </Box>
    </Box>
  );
};

export default ProfileAvatar;
