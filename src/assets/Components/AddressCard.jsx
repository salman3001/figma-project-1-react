import { FiHome } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../redux/orderNowSlice";

const AddressCard = (prop) => {
  const location = useLocation();
  const addressState = useSelector(
    (state) => state.orderNow.stepperData.address
  );
  const dispatch = useDispatch();
  const handelSelected = () => {
    dispatch(setAddress({ addressId: prop.id, address: prop.address }));
  };
  return (
    <Stack
      direction={["column", "row"]}
      justifyContent={"space-between"}
      width="full"
      bgcolor="#E4F4FF"
      padding={2}
      borderRadius={2}
      alignItems={"center"}
      spacing={2}
      key={prop.id}
    >
      <Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <FiHome />
          </Avatar>
          <Stack>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              fontWeight={600}
            >
              Address
            </Typography>
            <Typography>{prop.address}</Typography>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          sx={{ borderRadius: 4 }}
          size="small"
          startIcon={<BiEdit />}
        >
          Edit
        </Button>
        {location.pathname === "/ordernow/address" && (
          <Button
            variant="contained"
            sx={{
              borderRadius: 4,
              bgcolor:
                prop.id === addressState.addressId ? "white" : "primary.main",
              border: prop.id === addressState.addressId ? 1 : 0,
              borderColor:
                prop.id === addressState.addressId ? "primary.main" : "none",
              color:
                prop.id === addressState.addressId ? "primary.main" : "white",
            }}
            size="small"
            startIcon={<BiEdit />}
            onClick={handelSelected}
          >
            Select
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default AddressCard;
