import React from "react";
import OfferCard from "../Components/OfferCard";
import { Grid, Typography } from "@mui/material";

const Promotions = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        py: [9, 9, 9, 9, 2],
        paddingX: [2, 2, 2, 2, 4, 8],
        placeItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h45">Promotions</Typography>
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
