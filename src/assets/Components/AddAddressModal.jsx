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
import { BiArrowBack } from "react-icons/bi";

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
          border: "1px solid #000",
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
          <AddressForm
            closeModal={prop.handleClose}
            setLocationValid={setLocationValid}
            setFormStep={setFormStep}
          />
        ) : (
          <ErrorModal setFormStep={setFormStep} />
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

const AddressForm = (prop) => {
  const formik = useFormik({
    initialValues: {
      addressType: "home",
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
      zip: Yup.number("numbers only").min(2).required("required"),
    }),
    onSubmit: (value) => {
      alert(`
      user have entred data "addressType ${value.addressType}, landmark ${value.landmark}, street ${value.street}, city: ${value.city}, state: ${value.state}, country: ${value.country}, zip:${value.zip}" \n Perform api call here!
      `);
      prop.setLocationValid(false);
      prop.setFormStep(0);
      prop.closeModal();
    },
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
            value={"home"}
            onChange={formik.handleChange}
            style={{
              display: "none",
            }}
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
              cursor: "pointer",
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
              cursor: "pointer",

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
              cursor: "pointer",
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
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={formik.handleSubmit}
        >
          Add Address
        </Button>
      </Stack>
    </Stack>
  );
};

const ErrorModal = (prop) => {
  return (
    <Stack spacing={2} alignItems={"center"}>
      <svg
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_78_934)">
          <path
            d="M129.13 68.3576C126.293 42.6426 105.882 22.2309 80.1666 19.3942V6.69092H67.8333V19.3942C60.865 20.1651 54.3283 22.2617 48.3775 25.3759L57.6275 34.6259C62.6841 32.5601 68.2033 31.3884 74 31.3884C97.8341 31.3884 117.167 50.7209 117.167 74.5551C117.167 80.3517 115.995 85.8709 113.929 90.9276L123.179 100.178C126.293 94.2267 128.359 87.6901 129.13 80.7217H141.833V68.3884H129.13V68.3576ZM18.5 26.8867L31.0491 39.4359C24.4508 47.5142 20.0416 57.4426 18.8391 68.3576H6.16663V80.6909H18.87C21.7066 106.406 42.1183 126.818 67.8333 129.654V142.358H80.1666V129.654C91.0816 128.452 101.01 124.043 109.088 117.444L121.668 130.024L129.5 122.193L26.3625 19.0243L18.5 26.8867ZM100.301 108.688C93.0241 114.299 83.8975 117.691 74 117.691C50.1658 117.691 30.8333 98.3584 30.8333 74.5242C30.8333 64.5959 34.225 55.5001 39.8366 48.2234L100.301 108.688Z"
            fill="#00A5BF"
          />
        </g>
        <defs>
          <clipPath id="clip0_78_934">
            <rect width="148" height="148" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <Typography variant="h5" fontWeight={650}>
        Oops!
      </Typography>
      <Typography variant="h5" fontWeight={650}>
        We don't serve at your location!
      </Typography>
      <Typography color="text.muted">
        Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
      </Typography>
      <Button
        variant="contained"
        endIcon={<BiArrowBack />}
        size="large"
        onClick={() => {
          prop.setFormStep(0);
        }}
      >
        Go Back
      </Button>
    </Stack>
  );
};
