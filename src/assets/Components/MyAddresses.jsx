import { Button, Stack, TextField, Typography } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { demoAddressesData } from "../DemoData/demoAddressesData";
import AddressCard from "./AddressCard";
import AddAddressModal from "./AddAddressModal";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep } from "../../redux/orderNowSlice";

const MyAddresses = () => {
  const addressState = useSelector(
    (state) => state.orderNow.stepperData.address
  );
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleModalTogel = () => {
    setModalOpen((state) => (state === true ? false : true));
  };
  return (
    <Stack spacing={2} p={[1, 1, 3]}>
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
      <Stack
        direction={"row"}
        justifyContent={["end", "space-between"]}
        flexWrap="wrap-reverse"
        gap={2}
        pt={2}
      >
        <Button
          sx={{ width: "15rem", height: "3.75rem", fontSize: "1.25rem" }}
          variant="contained"
          startIcon={<AiOutlinePlus size={"1.5rem"} />}
          onClick={handleModalTogel}
        >
          Add Address
        </Button>
        {location.pathname === "/dashboard/ordernow/address" && (
          <Button
            sx={{ width: "15rem", height: "3.75rem", fontSize: "1.25rem" }}
            variant="contained"
            endIcon={<BsArrowRight size={"1.5rem"} />}
            onClick={() => {
              dispatch(setActiveStep("service"));
              navigate("/dashboard/ordernow/service");
            }}
            disabled={addressState.addressId === "" ? true : false}
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
