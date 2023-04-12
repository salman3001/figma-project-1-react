import { Box, TextField } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = (prop) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <CiSearch
        style={{
          position: "absolute",
          right: 4,
          top: 6,
          cursor: "pointer",
        }}
        size={25}
      />
      <TextField
        id="search"
        name="search"
        label="search"
        size="small"
        sx={{}}
      />
    </Box>
  );
};

export default Search;
