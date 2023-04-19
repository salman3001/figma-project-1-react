import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Label from "../Components/Webiste/Common/forms/Label";
import MobileInput from "../Components/Webiste/Common/forms/MobileInput";
import TextArea from "../Components/Webiste/Common/forms/TextArea";
import SocialLinks from "../Components/Webiste/Common/SocialLinks";
import * as Yup from "yup";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      companyName: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Enter at least 2 charectors")
        .required("required"),
      surname: Yup.string()
        .min(2, "Enter at least 2 charectors")
        .required("required"),
      companyName: Yup.string()
        .min(2, "Enter at least 2 charectors")
        .required("required"),
      email: Yup.string()
        .email(2, "Please enter a valid email")
        .required("required"),
      mobile: Yup.string()
        .min(2, "Enter at least 2 charectors")
        .required("required"),
      subject: Yup.string()
        .min(2, "Enter at least 2 charectors")
        .required("required"),
      message: Yup.string()
        .min(2, "Enter at least 2 charectors")
        .required("required"),
    }),
    onSubmit: (values) => {
      alert(`
        name: ${values.name},surname: ${values.surname},mobile: ${values.mobile},email: ${values.email},subject: ${values.subject},message: ${values.message},
        
    `);
      formik.resetForm();
    },
  });
  return (
    <div className="flex flex-col gap-6 lg:flex-row w-full p-5 lg:p-20">
      {/* left */}
      <div className="lg:w-1/2 flex px-5 lg:px-10 flex-col gap-4">
        <Typography variant="h3" fontWeight={550}>
          Talk to our product analytics expert
        </Typography>
        <Typography variant="h5">Our Location</Typography>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/location.png"}
          alt=""
        />
        <div className="grid lg:grid-cols-2 gap-4 place-items-start pt-2  [&>p]:opacity-70 [&>div>img]:h-12">
          <div className="flex gap-2 items-center">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/location 1.svg"}
              alt=""
            />
            <Typography variant="subtitle1">
              Nash Conversions Ltd, Unit 5, Shaftesbury Road, LONDON, E10 7DA
            </Typography>
          </div>
          <div className="flex gap-2">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/mail 1.svg"}
              alt=""
            />
            <Typography variant="subtitle1">
              londramoon@email.com <br /> londramoon@email.com
            </Typography>
          </div>
          <div className="flex gap-2">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/phone 1.svg"}
              alt=""
            />
            <Typography variant="subtitle1"></Typography>
            +1 73657029000 <Typography />
          </div>
          <div className="flex h-10 ">
            <SocialLinks color1="#00A5BF" color2="white" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="lg:w-1/2 shadow-xl p-4 md:p-10 flex flex-col gap-4 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label titile="Name" for="name" />
            <TextField
              fullWidth
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label titile="Surname" for="Surname" />
            <TextField
              fullWidth
              id="surname"
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label titile="Company Name" for="companyname" />
            <TextField
              fullWidth
              id="companyName"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              error={
                formik.touched.companyName && Boolean(formik.errors.companyName)
              }
              helperText={
                formik.touched.companyName && formik.errors.companyName
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label titile="Business Email" for="email" />
            <TextField
              fullWidth
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label titile="Business Number" for="mobileNumber" />
            <MobileInput
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label titile="Subject" for="subject" />
            <TextField
              name="subject"
              placeholder="Type here.."
              value={formik.values.subject}
              onChange={formik.handleChange}
              type="text"
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label titile="Message" for="message" />
            <TextArea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              placeholder="Message"
            />
          </div>
          <button
            className="bg-[#022A30] flex justify-center items-center p-4 gap-2 mt-2 rounded-md text-white [&>img]:h-3"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Contact Us
            <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
