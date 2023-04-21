import { Stack, Typography } from "@mui/material";
import React from "react";

const TextArea = (prop) => {
  return (
    <Stack
      color="text.muted"
      sx={{
        "& textarea": {
          resize: "none",
          height: 150,
          fontSize: 18,
          borderRadius: 2,
          borderColor: prop.error ? "red" : "rgba(0, 0, 0, 0.2)",
          p: 1,
          fontFamily: "inter",
          border: 1,
          "&:focus": {
            outline: "none",
            border: 1,
            borderColor: "primary.main",
          },
          "&:hover": {
            borderColor: "black",
          },
        },
      }}
      spacing={1}
    >
      <Typography>{prop.label}</Typography>
      <textarea
        style={{
          borderColor: "gray",
        }}
        name={prop.name}
        id={prop.id}
        placeholder="Add any special instructions for driver "
        value={prop.value}
        onChange={prop.onChange}
      ></textarea>
      <Typography color="red">{prop.helperText}</Typography>
    </Stack>
  );
};

export default TextArea;
