import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

const OfferCard = () => {
  return (
    <Box
      sx={(theme) => ({
        boxShadow: theme.shadows[1],
        borderRadius: 3,
      })}
    >
      <Box
        sx={(theme) => ({
          height: "80%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2,
          padding: 2,
          borderRadius: 3,
          background:
            "linear-gradient(121.16deg, #FCFCFC 18.31%, #EAEFF3 73.06%, #D0E3F1 96.73%)",
        })}
      >
        <Stack maxWidth={"260px"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            sx={{
              "& img": {
                maxHeight: 40,
              },
            }}
          >
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/hot-promo-icon.png"}
              alt=""
            />
            <Typography color="secondary.main" variant="h6" fontWeight={650}>
              Welcome offer
            </Typography>
          </Stack>
          <Typography variant="subtitle1" color="secondary.main">
            Get{" "}
            <Typography
              variant="subtitle1"
              color="secondary.main"
              fontWeight={650}
              display={"inline"}
            >
              15%{" "}
            </Typography>{" "}
            of on your next order
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            "& img": {
              maxWidth: 100,
              height: "auto",
            },
          }}
        >
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/promo-card-art.png"}
            alt=""
            className="max-w-[100px] h-auto"
          />
        </Stack>
      </Box>
      <Typography color="primary.main" padding={2}>
        <Link href="#">Claim the offer</Link>
      </Typography>
    </Box>
  );
};

export default OfferCard;
