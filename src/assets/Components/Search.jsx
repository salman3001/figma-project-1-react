import { Box, TextField, Typography } from "@mui/material";
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
          right: 6,
          top: 6,
          cursor: "pointer",
        }}
        size={25}
        color="#B5B5B5"
      />
      <TextField
        fullWidth
        id="search"
        name="search"
        size="small"
        placeholder="Search order id"
      />
    </Box>
  );
};

export default Search;
