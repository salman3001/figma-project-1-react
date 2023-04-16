import React, { useState } from "react";
import Label from "../Components/Webiste/Common/forms/Label";
import OrDivider from "../Components/Webiste/Common/OrDivider";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [modalOpen, SetModalOpen] = useState(false);
  const togelModal = () => {
    SetModalOpen((state) => (state === false ? true : false));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter an valid email")
        .required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(
        `user entered email - ${values.email},password - ${values.password}`
      );
      formik.resetForm();
    },
  });
  return (
    <main className="grid 2 mx-auto lg:grid-cols-2 min-h-screen max-w-screen">
      <Box
        className="relative flex text-white flex-col justify-between  items-center"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          bgcolor: "primary.main",
        }}
      >
        <h1
          className="w-full p-6 border-b border-white border-opacity-20"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
            }
            className="h-6 "
            alt=""
          />
        </h1>
        <div className="flex pt-8 flex-col items-center">
          <Typography variant="h4">Welcome back!</Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
            See the latest system update on our blog
          </Typography>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/loginart.png"}
          alt=""
          className="self-start"
        />
      </Box>
      <div className="bg-white relative">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute"
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute bottom-0 right-0 rotate-180"
        />
        <h1 className="w-full p-4 border-b text-end border-gray-300 border-opacity-20">
          <Typography variant="subtitle1">
            Don't have an account?{" "}
            <Button
              sx={{ textTransform: "none" }}
              size="large"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
          </Typography>
        </h1>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-16 justify-center items-center py-16 px-10 md:px-20 w-full  ">
            <div className="text-center flex flex-col gap-2">
              <Typography variant="h4" fontWeight={600}>
                Log in to Laundramoon
              </Typography>
              <Typography variant="h6" color="text.muted">
                Log in to continue
              </Typography>
            </div>
            <form
              id="login-form"
              className="md:max-w-[648px] w-full flex flex-col gap-4"
            >
              <div className="flex flex-col gap-4">
                <label htmlFor="email">Email Address</label>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="Jackson@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label titile="Password" for="password" />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*********"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>
              <Button
                sx={{ textTransform: "none", alignSelf: "end" }}
                onClick={togelModal}
              >
                Forgot Password?
              </Button>
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                size="large"
                endIcon={<BsArrowRight />}
                onClick={formik.handleSubmit}
              >
                Login
              </Button>
            </form>
            <OrDivider />
            <div className="flex gap-4">
              <button>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/google-btn.png"}
                  alt=""
                />
              </button>
              <button>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/fb-btn.png"}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={togelModal}>
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
          <div className="text-red-500 animate-pulse duration-75 flex justify-center items-center h-32 text-xl">
            Feature under Maintenace....
          </div>
        </Box>
      </Modal>
    </main>
  );
};

export default Login;
