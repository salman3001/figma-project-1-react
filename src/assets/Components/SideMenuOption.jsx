import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const SideMenuOption = (prop) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      justifyContent={"start"}
      alignItems="center"
      gap={2}
      sx={{
        minWidth: 150,
        "&:hover": {
          cursor: "pointer",
        },
        "&>h6": {
          color: "text.light",
          fontWeight: 600,
          opacity: prop.selected ? 1 : 0.7,
        },
      }}
      onClick={() => {
        navigate(prop.navigateto);
      }}
    >
      <Box
        sx={{
          p: 0.5,
          borderRadius: 2,
          height: "40px",
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: prop.selected ? "white" : "gray",
        }}
      >
        {prop.Icon}
      </Box>
      <Typography variant="body22" color={"white"}>
        {prop.title}
      </Typography>
    </Stack>
  );
};

export default SideMenuOption;
