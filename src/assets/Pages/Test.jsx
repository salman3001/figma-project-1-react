import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Section1art from "../Components/Section1art";
import { ContryDropDown } from "../Components/Webiste/Common/forms/MobileInput";

const Test = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <ContryDropDown />
      <Section1art />

      <Typography variant="h128">h128</Typography>
      <Typography variant="h96">h96</Typography>
      <Typography variant="h68">h68</Typography>
      <Typography variant="h64">h64</Typography>
      <Typography variant="h55">h55</Typography>
      <Typography variant="h45">h45</Typography>
      <Typography variant="subtitle36">subtitle36</Typography>
      <Typography variant="body36">body36</Typography>
      <Typography variant="subtitle32">subtitle32</Typography>
      <Typography variant="body32">body32</Typography>
      <Typography variant="subtitle28">subtitle28</Typography>
      <Typography variant="body28">body28</Typography>
      <Typography variant="subtitle24">subtitle24</Typography>
      <Typography variant="body24">body24</Typography>
      <Typography variant="subtitle22">subtitle22</Typography>
      <Typography variant="body22">body22</Typography>
      <Typography variant="subtitle18">subtitle18</Typography>
      <Typography variant="body18">body18</Typography>
      <Typography variant="subtitle15">subtitle15</Typography>
      <Typography variant="body15">body15</Typography>
      <TextField />
      <Button variant="contained" size="large" endIcon={<BsArrowRight />}>
        Next
      </Button>
    </div>
  );
};

export default Test;
