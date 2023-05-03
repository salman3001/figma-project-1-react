import { FiHome } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { Avatar, Button, Stack, Typography } from "@mui/material";
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
      justifyContent={["start", "space-between"]}
      width="full"
      bgcolor="#E4F4FF"
      padding={2}
      borderRadius={2}
      alignItems={"center"}
      gap={2}
      key={prop.id}
    >
      <Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Avatar sx={{ bgcolor: "primary.main", p: 0.5 }}>
            <FiHome size={"1.5rem"} />
          </Avatar>
          <Stack>
            <Typography
              variant="subtitle24"
              color="secondary.main"
              fontWeight={600}
            >
              Address
            </Typography>
            <Typography variant="body22">{prop.address}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"end"}
        alignItems={"end"}
      >
        <Button
          variant="contained"
          sx={{ borderRadius: 4, fontSize: "1.15rem", display: "flex", gap: 1 }}
          size="small"
        >
          <BiEdit size={"1.25rem"} /> Edit
        </Button>
        {location.pathname === "/dashboard/ordernow/address" && (
          <Button
            variant="contained"
            sx={{
              borderRadius: 4,
              gap: 1,
              fontSize: "1.15rem",
              bgcolor:
                prop.id === addressState.addressId ? "white" : "primary.main",
              border: prop.id === addressState.addressId ? 1 : 0,
              borderColor:
                prop.id === addressState.addressId ? "primary.main" : "none",
              color:
                prop.id === addressState.addressId ? "primary.main" : "white",
              "&:hover": {
                bgcolor:
                  prop.id === addressState.addressId ? "white" : "primary.main",
              },
            }}
            size="small"
            onClick={handelSelected}
          >
            <BiEdit size={"1.25rem"} /> Select
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default AddressCard;
