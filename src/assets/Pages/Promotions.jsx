import React from "react";
import OfferCard from "../Components/OfferCard";
import { Grid } from "@mui/material";

const Promotions = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: [2, 2, 4],
        py: [9, 9, 9, 2],
      }}
    >
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>{" "}
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <OfferCard />
      </Grid>
    </Grid>
  );
};

export default Promotions;
