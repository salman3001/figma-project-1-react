import { Box, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import Orders from "../Components/Orders";
import OfferCard from "../Components/OfferCard";

const MyOrders = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: [2, 2, 4],
        py: [9, 9, 9, 2],
      }}
    >
      <Grid item xs={12} lg={8}>
        <Stack>
          <Orders />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack paddingLeft={[0, 0, 0, 4]} spacing={2}>
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MyOrders;
