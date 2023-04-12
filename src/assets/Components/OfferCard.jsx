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
        className="promo-card-gradient h-[80%] flex flex-wrap justify-between gap-2 p-8 rounded-lg"
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
        <Stack
          className="flex flex-col gap-2  max-w-[200px]"
          maxWidth={"260px"}
        >
          <Stack
            className="flex items-center gap-4"
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
              className="max-h-12"
            />
            <Typography
              className="text-2xl font-[550] uppercase text-[#022A30]"
              color="secondary.main"
              variant="h6"
              fontWeight={650}
            >
              Welcome offer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            className="text-xl text-[#03444F]"
            color="secondary.main"
          >
            Get{" "}
            <Typography
              variant="subtitle1"
              color="secondary.main"
              fontWeight={650}
              className="font-bold"
              display={"inline"}
            >
              15%{" "}
            </Typography>{" "}
            of on your next order
          </Typography>
        </Stack>
        <Stack
          className="flex justify-center items-center"
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
      <Typography
        color="primary.main"
        padding={2}
        className="p-4 font-semibold text-lg  text-[#00A5BF] cursor-pointer"
      >
        <Link href="#">Claim the offer</Link>
      </Typography>
    </Box>
  );
};

export default OfferCard;
