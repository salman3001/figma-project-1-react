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
import { BiArrowBack, BiHotel } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import Label from "./Webiste/Common/forms/Label";

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
        className="scrollbar-hide "
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 700,
          minHeight: 400,
          maxHeight: [500, 500, 700],
          width: "100%",
          bgcolor: "background.paper",
          border: "1px solid #000",
          boxShadow: 24,
          p: 6,
          borderRadius: 2,
          overflowY: ["scroll", "scroll"],
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
          <RxCross1 size={30} color="gray" />
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
    <Stack textAlign={"center"} spacing={3} justifyContent="center" padding={4}>
      <Typography variant="subtitle32">Add Address</Typography>
      <Typography
        variant="body22"
        paddingX={3}
        color="text.muted"
        textAlign={"center"}
      >
        Please fill in your details below and we will get in touch with you
        shortly.
      </Typography>
      <form className="w-full">
        <div className="flex flex-col gap-2">
          <label className="self-start text-start text-[#111212] opacity-70">
            Search for address or building
          </label>
          <TextField
            fullWidth
            id="location"
            name="location"
            placeholder="21 Lombard St, London EC3V 9AH, UK"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
        </div>
      </form>
      <Button size="small" sx={{ alignSelf: "start", display: "flex", gap: 1 }}>
        <GoLocation />
        Postcode search
      </Button>
      <Button
        variant="contained"
        endIcon={<BsArrowRight size={30} />}
        sx={{ height: [60, 60, 84], fontSize: 24 }}
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
    <Stack textAlign={"center"} spacing={1} alignItems={"center"}>
      <Typography variant="subtitle32" fontWeight={600}>
        Add Address
      </Typography>
      <Typography variant="body22" maxWidth={487} color="text.muted">
        Please fill in your details below and we will get in touch with you
        shortly.
      </Typography>
      <Stack component="form" spacing={4} alignItems={"center"}>
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
              gap: 1,
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
            <AiOutlineHome />
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
              gap: 1,
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
            <TfiBag />
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
              gap: 1,
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
            <BiHotel />
            Hotel
          </Box>
        </Stack>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <div className="flex flex-col gap-2">
              <label className="self-start text-start text-[#111212] opacity-70">
                Enter Landmark
              </label>
              <TextField
                fullWidth
                id="landmark"
                name="landmark"
                label="Enter LandMark"
                value={formik.values.landmark}
                onChange={formik.handleChange}
                error={
                  formik.touched.landmark && Boolean(formik.errors.landmark)
                }
                helperText={formik.touched.landmark && formik.errors.landmark}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="flex flex-col gap-2">
              <label className="self-start text-start text-[#111212] opacity-70">
                Enter street
              </label>
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
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="flex flex-col gap-2">
              <label className="self-start text-start text-[#111212] opacity-70">
                Enter city
              </label>
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
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="flex flex-col gap-2">
              <label className="self-start text-start text-[#111212] opacity-70">
                Enter state
              </label>
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
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="flex flex-col gap-2">
              <label className="self-start text-start text-[#111212] opacity-70">
                Enter country
              </label>
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
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="flex flex-col gap-2">
              <label className="self-start text-start text-[#111212] opacity-70">
                Enter zip
              </label>
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
            </div>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: [60, 60, 84], fontSize: 24 }}
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
      <Typography variant="subtitle32">Oops!</Typography>
      <Typography variant="subtitle32" textAlign="center">
        We don't serve at your location!
      </Typography>
      <Typography
        variant="body22"
        maxWidth={412}
        color="text.muted"
        textAlign="center"
      >
        Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
      </Typography>
      <Button
        fullWidth
        variant="contained"
        sx={{
          fontSize: 24,
          height: [60, 60, 84],
        }}
        endIcon={<BsArrowRight size={30} />}
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
