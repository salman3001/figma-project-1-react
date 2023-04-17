import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Label from "./Webiste/Common/forms/Label";
import MobileInput from "./Webiste/Common/forms/MobileInput";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setActiveStep, setContact } from "../../redux/orderNowSlice";

const Contact = () => {
  const activeStep = useSelector((state) => state.orderNow.activeStep);
  const [formType, SetFormType] = useState("individual");
  const navigate = useNavigate();

  useEffect(() => {
    if (activeStep === "address") {
      navigate("/dashboard/ordernow/address");
    }
  });

  return (
    <Stack>
      <Typography variant="h4" fontWeight={550}>
        Contact
      </Typography>
      <div className="flex gap-8 w-full">
        <div className="flex justify-center items-center gap-4 font-bold">
          <input
            type="radio"
            name="formType"
            className="radio radio-accent "
            id="formType-1"
            value={"individual"}
            checked={formType === "individual"}
            onChange={(e) => {
              SetFormType(e.target.value);
            }}
          />
          <label htmlFor="formType-1">Individual </label>
        </div>
        <div className="flex justify-center items-center gap-4 font-bold">
          <input
            type="radio"
            name="formType"
            id="formType-2"
            className="radio radio-accent"
            value="company"
            checked={formType === "company"}
            onChange={(e) => {
              SetFormType(e.target.value);
            }}
          />
          <label htmlFor="formType-2">Company </label>
        </div>
      </div>
      {formType === "individual" ? <InvidualForm /> : <CompanyForm />}
    </Stack>
  );
};

export default Contact;

const InvidualForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactState = useSelector(
    (state) => state.orderNow.stepperData.contact
  );
  const formik = useFormik({
    initialValues: {
      name: contactState.name,
      surname: contactState.surname,
      email: contactState.email,
      mobile: contactState.mobile,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Required"),
      mobile: Yup.string()
        .min(6, "Mobile number seems incorrect")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(
        setContact({
          addressType: "individual",
          name: values.name,
          surname: values.surname,
          email: values.email,
          mobile: values.mobile,
          company: "",
          tax: "",
        })
      );
    },
  });
  const IsButtonDisabled = () => {
    if (
      !formik.errors.name &&
      !formik.errors.surname &&
      !formik.errors.email &&
      !formik.errors.mobile
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form id="signup-form" className="w-full flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" titile="Enter name" />
          <TextField
            fullWidth
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="surname" titile="Enter surname" />
          <TextField
            fullWidth
            id="surname"
            name="surname"
            type="text"
            placeholder="Enter surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" titile="Enter email" />
          <TextField
            fullWidth
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="mobile" titile="Enter mobile" />
          <MobileInput
            id="mobile"
            name="mobile"
            placeholder="Enter mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </div>
        <Stack direction={"row"} justifyContent="space-between">
          <Button
            variant="contained"
            size="large"
            sx={{ minWidth: [150, 200], textTransform: "none" }}
            onClick={() => {
              navigate("/dashboard/ordernow/collection");
            }}
            startIcon={<BsArrowLeft />}
          >
            Back
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ minWidth: [150, 200], textTransform: "none" }}
            onClick={() => {
              dispatch(setActiveStep("payment"));
              formik.handleSubmit();
              navigate("/dashboard/ordernow/payment");
            }}
            disabled={IsButtonDisabled()}
            endIcon={<BsArrowRight />}
          >
            Next
          </Button>
        </Stack>
      </div>
    </form>
  );
};

const CompanyForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      mobile: "",
      companyName: "",
      taxNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Required"),
      mobile: Yup.string()
        .min(6, "Mobile number seems incorrect")
        .required("Required"),
      companyName: Yup.string().required("Required"),
      taxNumber: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {},
  });

  const IsButtonDisabled = () => {
    if (
      !formik.errors.name &&
      !formik.errors.surname &&
      !formik.errors.email &&
      !formik.errors.mobile &&
      !formik.errors.companyName &&
      !formik.errors.taxNumber
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form id="signup-form" className="w-full flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" titile="Enter name" />
          <TextField
            fullWidth
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="surname" titile="Enter surname" />
          <TextField
            fullWidth
            id="surname"
            name="surname"
            type="text"
            placeholder="Enter surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" titile="Enter email" />
          <TextField
            fullWidth
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="mobile" titile="Enter mobile" />
          <MobileInput
            id="mobile"
            name="mobile"
            placeholder="Enter mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="companyName" titile="Enter company name" />
          <TextField
            fullWidth
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Apple"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            helperText={formik.touched.companyName && formik.errors.companyName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="taxNumber" titile="Enter Tax Number " />
          <TextField
            fullWidth
            id="taxNumber"
            name="taxNumber"
            type="text"
            placeholder="46GDH46GGH"
            value={formik.values.taxNumber}
            onChange={formik.handleChange}
            error={formik.touched.taxNumber && Boolean(formik.errors.taxNumber)}
            helperText={formik.touched.taxNumber && formik.errors.taxNumber}
          />
        </div>
        <Stack direction={"row"} justifyContent="space-between">
          <Button
            variant="contained"
            size="large"
            sx={{ minWidth: [150, 200], textTransform: "none" }}
            onClick={() => {
              navigate("/dashboard/ordernow/collection");
            }}
            startIcon={<BsArrowLeft />}
          >
            Back
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ minWidth: [150, 200], textTransform: "none" }}
            onClick={() => {
              dispatch(setActiveStep("payment"));
              navigate("/dashboard/ordernow/payment");
            }}
            disabled={IsButtonDisabled()}
            endIcon={<BsArrowRight />}
          >
            Next
          </Button>
        </Stack>
      </div>
    </form>
  );
};

// !formik.errors.name &&
//   !formik.errors.surname &&
//   !formik.errors.email &&
//   !formik.errors.mobile;
