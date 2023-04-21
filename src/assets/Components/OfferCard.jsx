import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import RouterLink from "./RouterLink";

const OfferCard = () => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: 3,
        minHeight: 182,
        borderWidth: 2,
        borderColor: "1px solid rgba(0, 0, 0, 0.13)",
        boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.06)",
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
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          background:
            "linear-gradient(121.16deg, #FCFCFC 18.31%, #EAEFF3 73.06%, #D0E3F1 96.73%)",
        })}
      >
        <Stack maxWidth={"260px"} spacing={2}>
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
            <Typography
              color="secondary.main"
              variant="subtitle24"
              fontWeight={650}
              maxWidth={125}
            >
              Welcome offer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle20"
            color="secondary.main"
            maxWidth={170}
          >
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
      <Typography color="primary.main" fontWeight={600} padding={2}>
        <RouterLink size={16} to="/dashboard/promotions">
          Claim the offer
        </RouterLink>
      </Typography>
    </Box>
  );
};

export default OfferCard;
