import { Avatar, Badge, Box, Button, Icon, IconButton } from "@mui/material";
import React from "react";
import { FiEdit2 } from "react-icons/fi";

const AvatarEditable = (prop) => {
  return (
    <Box sx={{ position: "relative", width: "max-content" }}>
      <Avatar
        src={prop.src}
        sx={{
          width: 120,
          height: 120,
          border: 2,
          borderColor: "primary.main",
        }}
      />
      <Box
        component="label"
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          right: 0,
          bgcolor: "primary.main",
          borderRadius: 6,
          border: 2,
          borderColor: "white",
          height: 40,
          width: 40,
          cursor: "pointer",
          p: 1,
          "&:hover": { bgcolor: "primary.main" },
        }}
        size="small"
        htmlFor="image"
      >
        <FiEdit2 color="white" />
        <input
          type="file"
          id="image"
          name="image"
          style={{
            display: "none",
          }}
          onChange={(event) => {
            prop.setFieldValue("image", event.currentTarget.files[0]);
          }}
        />
      </Box>
    </Box>
  );
};

export default AvatarEditable;
