import {
  Box,
  Button,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddAddressModal = (prop) => {
  const [formStep, setFormStep] = useState(0);
  const [locationValid, setLocationValid] = useState(false);
  return (
    <Modal
      open={prop.open}
      onClose={() => {
        setLocationValid(false);
        setFormStep(0);
        prop.handleClose();
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 700,
          minHeight: 400,
          maxHeight: 600,
          width: "100%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 6,
          borderRadius: 2,
          overflowY: ["scroll", "unset"],
        }}
      >
        {formStep === 0 ? (
          <SearchLoactionForm
            setLocationValid={setLocationValid}
            setFormStep={setFormStep}
          />
        ) : formStep === 1 && locationValid ? (
          <AddressForm />
        ) : (
          "opps not valid"
        )}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            cursor: "pointer",
          }}
          onClick={() => {
            setLocationValid(false);
            setFormStep(0);
            prop.handleClose();
          }}
        >
          <RxCross1 />
        </div>
      </Box>
    </Modal>
  );
};

export default AddAddressModal;

const SearchLoactionForm = (prop) => {
  const formik = useFormik({
    initialValues: {
      location: "",
    },
    validationSchema: Yup.object({
      location: Yup.string()
        .min(2, "Enter At least 02 charectors to search")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const conscent = confirm(
        `user have entered location "${values.location}", call your server api here.\n Do you want to aprove request or reject?`
      );
      if (conscent) {
        prop.setLocationValid(true);
        prop.setFormStep(1);
      } else {
        prop.setLocationValid(false);
        prop.setFormStep(1);
      }
    },
  });

  return (
    <Stack textAlign={"center"} spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Add Address
      </Typography>
      <Typography maxWidth={"xs"} color="text.muted">
        Please fill in your details below and we will get in touch with you
        shortly.
      </Typography>
      <form>
        <TextField
          fullWidth
          id="location"
          name="location"
          label="Search for address or building"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
        />
      </form>
      <Button
        startIcon={<GoLocation />}
        size="small"
        sx={{ alignSelf: "start" }}
      >
        Postcode search
      </Button>
      <Button
        size="large"
        variant="contained"
        endIcon={<BsArrowRight />}
        onClick={formik.handleSubmit}
        disabled={formik.isSubmitting}
      >
        Next
      </Button>
    </Stack>
  );
};

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      addressType: "",
      landmark: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
    validationSchema: Yup.object({
      addressType: Yup.string().min(2).required("required"),
      landmark: Yup.string().min(2).required("required"),
      city: Yup.string().min(2).required("required"),
      street: Yup.string().min(2).required("required"),
      state: Yup.string().min(2).required("required"),
      country: Yup.string().min(2).required("required"),
      zip: Yup.number().min(2).required("required"),
    }),
  });
  return (
    <Stack textAlign={"center"} spacing={2} alignItems={"center"}>
      <Typography variant="h5" fontWeight={600}>
        Add Address
      </Typography>
      <Typography maxWidth={300} color="text.muted">
        Please fill in your details below and we will get in touch with you
        shortly.
      </Typography>
      <Stack component="form" spacing={2} alignItems={"center"}>
        <Stack direction="row" justifyContent="space-evenly" width="100%">
          <input
            type="radio"
            name="addressType"
            id="home-radio"
            value="home"
            onChange={formik.handleChange}
            style={{
              display: "none",
            }}
            checked
          />
          <Box
            component="label"
            htmlFor="home-radio"
            sx={{
              p: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: 1,
              borderRadius: 2,
              minWidth: [80, 100],
              background:
                formik.values.addressType === "home" ? "#E5FCFF" : "none",
              color:
                formik.values.addressType === "home" ? "#00A5BF" : "text.muted",
              borderColor:
                formik.values.addressType === "home" ? "#00A5BF" : "text.muted",
            }}
          >
            Home
          </Box>
          <input
            type="radio"
            name="addressType"
            id="office-radio"
            value="office"
            onChange={formik.handleChange}
            style={{
              display: "none",
            }}
          />
          <Box
            component="label"
            htmlFor="office-radio"
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: 1,
              borderRadius: 2,
              minWidth: [80, 100],
              background:
                formik.values.addressType === "office" ? "#E5FCFF" : "none",
              color:
                formik.values.addressType === "office"
                  ? "#00A5BF"
                  : "text.muted",
              borderColor:
                formik.values.addressType === "office"
                  ? "#00A5BF"
                  : "text.muted",
            }}
          >
            Office
          </Box>
          <input
            type="radio"
            name="addressType"
            id="hotel-radio"
            value="hotel"
            onChange={formik.handleChange}
            style={{
              display: "none",
            }}
          />
          <Box
            component="label"
            htmlFor="hotel-radio"
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: 1,
              borderRadius: 2,
              minWidth: [80, 100],
              background:
                formik.values.addressType === "hotel" ? "#E5FCFF" : "none",
              color:
                formik.values.addressType === "hotel"
                  ? "#00A5BF"
                  : "text.muted",
              borderColor:
                formik.values.addressType === "hotel"
                  ? "#00A5BF"
                  : "text.muted",
            }}
          >
            Hotel
          </Box>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              id="landmark"
              name="landmark"
              label="Enter LandMark"
              value={formik.values.landmark}
              onChange={formik.handleChange}
              error={formik.touched.landmark && Boolean(formik.errors.landmark)}
              helperText={formik.touched.landmark && formik.errors.landmark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              id="street"
              name="street"
              label="Enter Street"
              value={formik.values.street}
              onChange={formik.handleChange}
              error={formik.touched.street && Boolean(formik.errors.street)}
              helperText={formik.touched.street && formik.errors.street}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="Enter city"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              id="state"
              name="state"
              label="Enter state"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              id="country"
              name="country"
              label="Enter country"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              id="zip"
              name="zip"
              label="Enter zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={formik.touched.zip && formik.errors.zip}
            />
          </Grid>
        </Grid>
        <Button variant="contained" size="large" fullWidth>
          Add Address
        </Button>
      </Stack>
    </Stack>
  );
};
