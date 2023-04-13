import { FiHome } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AddressCard = (prop) => {
  const [selected, setSeleted] = useState(false);
  const location = useLocation();

  const handelSelected = () => {
    setSeleted((state) => (state === true ? false : true));
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
              bgcolor: selected ? "white" : "primary.main",
              border: selected ? 1 : 0,
              borderColor: selected ? "primary.main" : "none",
              color: selected ? "primary.main" : "white",
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
