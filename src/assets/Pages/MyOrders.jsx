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
      spacing={4}
      sx={{
        py: [9, 9, 9, 9, 2],
        paddingX: [2, 2, 2, 2, 4, 8],
      }}
    >
      <Grid item xs={12} lg={8}>
        <Stack>
          <Orders />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack spacing={3} pt={3}>
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography variant="subtitle20" fontWeight={600}>
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
