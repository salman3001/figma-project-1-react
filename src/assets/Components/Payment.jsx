import {
  Button,
  Checkbox,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsArrowLeft, BsPostcard } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

const Payment = () => {
  const activeStep = useSelector((state) => state.orderNow.activeStep);
  const navigate = useNavigate();
  useEffect(() => {
    if (activeStep === "address") {
      navigate("/dashboard/ordernow/address");
    }
  });
  return (
    <Stack spacing={4}>
      <Typography variant="h45">Payment Options</Typography>
      <PaymentForm />
      <Button
        variant="contained"
        size="large"
        sx={{ width: "15rem", height: "3.75rem", fontSize: "1.25rem" }}
        startIcon={<BsArrowLeft size={"1.5rem"} />}
        onClick={() => {
          navigate("/dashboard/ordernow/contact");
        }}
      >
        Back
      </Button>
    </Stack>
  );
};

export default Payment;

const PaymentForm = () => {
  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
    validationSchema: {
      cardName: Yup.string().required("Required"),
      cardNumber: Yup.string()
        .min(16, "Card number is not valid")
        .max(16, "Card number is not valid")
        .required("Required"),
      expiry: Yup.string()
        .max(5, "Not a valid expiration date. Example: MM/YY")
        .matches(
          /([0-9]{2})\/([0-9]{2})/,
          "Not a valid expiration date. Example: MM/YY"
        )
        .required("Expiration date is required"),
      cvv: Yup.string().min("Not valid CVV").required("Required"),
    },
    onSubmit: (values) => {},
  });

  return (
    <Stack
      spacing={2}
      sx={{
        "& .MuiTextField-root": {
          borderColor: "red",
          backgroundColor: "#F3F9FD",
        },
      }}
    >
      <TextField
        size="large"
        fullWidth
        id="cardName"
        name="cardName"
        type="text"
        placeholder="Name on the card"
        value={formik.values.cardName}
        onChange={formik.handleChange}
        error={formik.touched.cardName && Boolean(formik.errors.cardName)}
        helperText={formik.touched.cardName && formik.errors.cardName}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AiOutlineUser color="#00A5BF" size={25} />
            </InputAdornment>
          ),
        }}
      />
      <Stack>
        <TextField
          size="large"
          fullWidth
          id="cardNumber"
          name="cardNumber"
          type="number"
          placeholder="Card Number"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
          helperText={formik.touched.cardNumber && formik.errors.cardNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <div>
                  <BsPostcard color="#00A5BF" size={25} />
                </div>
              </InputAdornment>
            ),
          }}
        />
        <Stack direction="row">
          <TextField
            size="large"
            fullWidth
            id="expiry"
            name="expiry"
            type="text"
            placeholder="MM/YY"
            value={formik.values.expiry}
            onChange={formik.handleChange}
            error={formik.touched.expiry && Boolean(formik.errors.expiry)}
            helperText={formik.touched.expiry && formik.errors.expiry}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SlCalender color="#00A5BF" size={25} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            size="large"
            fullWidth
            id="cvv"
            name="cvv"
            type="number"
            max="999"
            placeholder="CVC/CVV"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            error={formik.touched.cvv && Boolean(formik.errors.cvv)}
            helperText={formik.touched.cvv && formik.errors.cvv}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BsPostcard color="#00A5BF" size={25} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems={"center"}>
        <Checkbox id="tc" />
        <Typography
          variant="body18"
          component={"label"}
          htmlFor="tc"
          sx={{ cursor: "pointer" }}
          color="text.muted"
        >
          T&C nunc arcu massa fringilla semper accumsan. Rutrum nunc, justo eu
          in quis pretium at risus facilisis.{" "}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" alignItems="center" spacing={1}>
        <AiOutlineLock color="#00A5BF" size={25} />
        <Typography variant="body18">Secure payment options with:</Typography>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Stripe.png"}
          alt=""
          className="w-24"
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/SSL.png"}
          alt=""
          className="w-24"
        />
      </Stack>
    </Stack>
  );
};
