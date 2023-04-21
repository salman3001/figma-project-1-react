import { Avatar, Box } from "@mui/material";
import React from "react";

const ProfileAvatar = (prop) => {
  return (
    <Box
      sx={{
        width: 173,
        hieght: 173,
        border: 5,
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
          width: 170,
          hieght: 170,
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
