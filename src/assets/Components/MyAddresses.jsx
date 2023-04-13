import { Button, Stack, TextField, Typography } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { demoAddressesData } from "../DemoData/demoAddressesData";
import AddressCard from "./AddressCard";
import AddAddressModal from "./AddAddressModal";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const MyAddresses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const handleModalTogel = () => {
    setModalOpen((state) => (state === true ? false : true));
  };
  return (
    <Stack spacing={2} padding={3}>
      {demoAddressesData.length < 1 ? (
        <Typography>
          You Dont have any addresses!. Please your addresse.
        </Typography>
      ) : (
        demoAddressesData.map((data) => (
          <>
            <AddressCard address={data.address} id={data.id} />
          </>
        ))
      )}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button
          sx={{
            minWidth: 170,
          }}
          variant="contained"
          startIcon={<AiOutlinePlus />}
          onClick={handleModalTogel}
        >
          Add Address
        </Button>
        {location.pathname === "/ordernow/address" && (
          <Button
            sx={{
              minWidth: 170,
            }}
            variant="contained"
            endIcon={<BsArrowRight />}
            onClick={handleModalTogel}
            disabled
          >
            Next
          </Button>
        )}
      </Stack>
      <AddAddressModal open={modalOpen} handleClose={handleModalTogel} />
    </Stack>
  );
};

export default MyAddresses;
