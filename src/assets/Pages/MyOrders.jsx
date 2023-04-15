import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Orders from "../Components/Orders";
import OfferCard from "../Components/OfferCard";
import RouterLink from "../Components/RouterLink";
import { useNavigate } from "react-router-dom";

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
        <Stack padding={2}>
          <Orders />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack paddingLeft={[0, 0, 0, 4]} spacing={2}>
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography variant="h6" fontWeight={600}>
              Promotions
            </Typography>
            <RouterLink to="/dashboard/promotions">See All</RouterLink>
          </Stack>
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MyOrders;
