import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const SideMenuOption = (prop) => {
  return (
    <Stack
      direction="row"
      justifyContent={"between"}
      alignItems="center"
      gap={2}
      sx={{
        minWidth: 150,
        "&:hover": {
          cursor: "pointer",
        },
        "&>h6": {
          color: "text.light",
          fontWeight: 800,
          opacity: prop.selected ? 1 : 0.7,
        },
        "&>.sideMenu-svg": {
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: prop.selected ? "white" : "secondary.light",
          display: "flex",
          padding: 0.5,
          borderRadius: 2,
        },
        "&>.sideMenu-svg>svg>path": {
          fill: prop.selected ? "#00A5BF" : "white",
          stroke: prop.selected ? "primary.main" : "white",
        },
        "&>.sideMenu-svg>svg": {
          fill: prop.selected ? "#00A5BF" : "white",
          stroke: prop.selected ? "none" : "white",
        },
      }}
    >
      <div className="sideMenu-svg">{prop.svg}</div>
      <Typography variant="subtitle1">{prop.title}</Typography>
    </Stack>
  );
};

export default SideMenuOption;
