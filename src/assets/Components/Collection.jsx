import { MenuItem, Select, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import React from "react";

const Collection = () => {
  return (
    <Stack>
      <Stack>
        <Typography variant="h4" fontWeight={600}>
          Collection & delivery
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="h5" fontWeight={600}>
          Pickup Time
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Stack flexGrow={1}>
          <label htmlFor="delieveryDay">Select Day</label>
          <DatePicker disablePast />
        </Stack>
        <Stack flexGrow={1}>
          <label htmlFor="delieveryDay">Select Time</label>
          <Select
            // value={0}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            fullWidth
          >
            <MenuItem disabled={date.Now().get} value={10}>
              09:00-12:00
            </MenuItem>
            <MenuItem value={20}>12:00-15:00</MenuItem>
            <MenuItem value={30}>15:00-18:00</MenuItem>
            <MenuItem value={30}>18:00-21:00</MenuItem>
            <MenuItem value={30}>21:00-00:00</MenuItem>
          </Select>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Collection;
