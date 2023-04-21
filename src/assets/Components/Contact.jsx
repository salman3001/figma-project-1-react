import { Box, Button, Modal, TextField, Typography } from "@mui/material";
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
import { RxCross1 } from "react-icons/rx";

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
    <Stack spacing={3} padding={[0, 1, 2]}>
      <Typography variant="h45">Contact</Typography>
      <div className="flex gap-8 w-full ">
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
          <label htmlFor="formType-1" className="text-xl font-semibold">
            Individual{" "}
          </label>
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
          <label htmlFor="formType-2" className="text-xl font-semibold">
            Company{" "}
          </label>
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
      name: "Jackson",
      surname: "Howell",
      email: "Jacksone@gmail.com",
      mobile: "0543873763",
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

  useEffect(() => {
    formik.validateForm();
  }, []);

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
            disabled
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
            disabled
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
            disabled
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
            disabled
            name="mobile"
            placeholder="Enter mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
          <IndividualModalform />
        </div>
      </div>
      <div className="flex w-full justify-between">
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
          sx={{ minWidth: [170, 200], textTransform: "none" }}
          onClick={() => {
            dispatch(setActiveStep("payment"));
            formik.handleSubmit();
            navigate("/dashboard/ordernow/payment");
          }}
          disabled={IsButtonDisabled()}
          endIcon={<BsArrowRight />}
        >
          Make Payment
        </Button>
      </div>
    </form>
  );
};

const CompanyForm = () => {
  const contactState = useSelector(
    (state) => state.orderNow.stepperData.contact
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "Jackson",
      surname: "Howell",
      email: "Jacksone@gmail.com",
      mobile: "0543873763",
      company: "Apple",
      tax: "867276shs",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Required"),
      mobile: Yup.string()
        .min(6, "Mobile number seems incorrect")
        .required("Required"),
      company: Yup.string().required("Required"),
      tax: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(
        setContact({
          addressType: "individual",
          name: values.name,
          surname: values.surname,
          email: values.email,
          mobile: values.mobile,
          company: values.company,
          tax: values.tax,
        })
      );
    },
  });

  const IsButtonDisabled = () => {
    if (
      !formik.errors.name &&
      !formik.errors.surname &&
      !formik.errors.email &&
      !formik.errors.mobile &&
      !formik.errors.company &&
      !formik.errors.tax
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <form id="signup-form" className="w-full flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" titile="Enter name" />
          <TextField
            disabled
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
            disabled
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
            disabled
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
            disabled={true}
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
          <Label htmlFor="company" titile="Enter company name" />
          <TextField
            fullWidth
            id="company"
            name="company"
            type="text"
            placeholder="Apple"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="tax" titile="Enter Tax Number " />
          <TextField
            fullWidth
            id="tax"
            name="tax"
            type="text"
            placeholder="46GDH46GGH"
            value={formik.values.tax}
            onChange={formik.handleChange}
            error={formik.touched.tax && Boolean(formik.errors.tax)}
            helperText={formik.touched.tax && formik.errors.tax}
          />
          <CompanyModalform />
        </div>
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
    </form>
  );
};

const IndividualModalform = (prop) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const togelModal = () => {
    setOpen((state) => (state === false ? true : false));
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      mobile: "",
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
      dispatch(setActiveStep("/ordernow/payment"));
      navigate("/dashboard/ordernow/payment");
    },
  });

  return (
    <>
      <Button
        sx={{ alignSelf: "end", textTransform: "none" }}
        onClick={togelModal}
      >
        Book for others
      </Button>
      <Modal open={open} onClose={togelModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 700,
            minHeight: 400,
            maxHeight: 900,
            width: "100%",
            bgcolor: "background.paper",
            border: "1px solid #000",
            boxShadow: 24,
            p: 6,
            borderRadius: 2,
            overflowY: ["scroll", "scroll"],
          }}
        >
          <Stack alignItems={"center"} gap={4} paddingBottom={2}>
            <Typography variant="subtitle32" fontWeight={600}>
              Add Address
            </Typography>
            <Typography
              variant="body22"
              maxWidth={485}
              textAlign={"center"}
              color="text.muted"
            >
              Please fill in your details below and we will get in touch with
              you shortly.
            </Typography>
          </Stack>
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
          </div>
          <div className="flex w-full justify-center">
            <Button
              variant="contained"
              fullwidth
              size="large"
              sx={{
                width: "100%",
                textTransform: "none",
                mt: 4,
                height: [60, 60, 84],
                fontSize: 24,
              }}
              onClick={() => {
                formik.handleSubmit();
              }}
              endIcon={<BsArrowRight size={35} />}
            >
              Sumbit
            </Button>
          </div>
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              cursor: "pointer",
            }}
            onClick={togelModal}
          >
            <RxCross1 />
          </div>
        </Box>
      </Modal>
    </>
  );
};

const CompanyModalform = (prop) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const togelModal = () => {
    setOpen((state) => (state === false ? true : false));
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      mobile: "",
      company: "",
      tax: "",
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
          addressType: "company",
          name: values.name,
          surname: values.surname,
          email: values.email,
          mobile: values.mobile,
          company: values.company,
          tax: values.tax,
        })
      );
      dispatch(setActiveStep("/ordernow/payment"));
      navigate("/dashboard/ordernow/payment");
    },
  });

  return (
    <>
      <Button
        sx={{ alignSelf: "end", textTransform: "none" }}
        onClick={togelModal}
      >
        Book for others
      </Button>
      <Modal open={open} onClose={togelModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 700,
            minHeight: 400,
            maxHeight: 800,
            width: "100%",
            bgcolor: "background.paper",
            border: "1px solid #000",
            boxShadow: 24,
            p: 6,
            borderRadius: 2,
            overflowY: ["scroll", "scroll"],
          }}
        >
          <Stack alignItems={"center"} gap={4} paddingBottom={2}>
            <Typography variant="subtitle32" fontWeight={600}>
              Add Address
            </Typography>
            <Typography
              variant="body22"
              maxWidth={485}
              textAlign={"center"}
              color="text.muted"
            >
              Please fill in your details below and we will get in touch with
              you shortly.
            </Typography>
          </Stack>
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
              <Label htmlFor="company" titile="Enter company name" />
              <TextField
                fullWidth
                id="company"
                name="company"
                type="text"
                placeholder="Apple"
                value={formik.values.company}
                onChange={formik.handleChange}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="tax" titile="Enter Tax Number " />
              <TextField
                fullWidth
                id="tax"
                name="tax"
                type="text"
                placeholder="46GDH46GGH"
                value={formik.values.tax}
                onChange={formik.handleChange}
                error={formik.touched.tax && Boolean(formik.errors.tax)}
                helperText={formik.touched.tax && formik.errors.tax}
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <Button
              variant="contained"
              fullwidth
              size="large"
              sx={{
                width: "100%",
                textTransform: "none",
                mt: 4,
                height: [60, 60, 84],
                fontSize: 24,
              }}
              onClick={() => {
                formik.handleSubmit();
              }}
              endIcon={<BsArrowRight size={35} />}
            >
              Sumbit
            </Button>
          </div>
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              cursor: "pointer",
            }}
            onClick={togelModal}
          >
            <RxCross1 />
          </div>
        </Box>
      </Modal>
    </>
  );
};
