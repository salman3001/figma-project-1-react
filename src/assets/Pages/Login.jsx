import React, { useState } from "react";
import Label from "../Components/Webiste/Common/forms/Label";
import OrDivider from "../Components/Webiste/Common/OrDivider";
import {
  Box,
  Button,
  FormHelperText,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import OTPInput from "react-otp-input";

const Login = () => {
  const [changePasswordStep, setChangePasswordStep] = useState("stepEmail");
  const navigate = useNavigate();
  const [modalOpen, SetModalOpen] = useState(false);
  const togelModal = () => {
    SetModalOpen((state) => (state === false ? true : false));
    setChangePasswordStep("stepEmail");
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
    <main className="grid 2 mx-auto xl:grid-cols-2 min-h-screen max-w-screen">
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
          className="w-full p-6 md:px-16 border-b border-white border-opacity-20"
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
          <Typography variant="h45" color={"white"}>
            Welcome back!
          </Typography>
          <Typography
            variant="body22"
            color="rgba(255, 255, 255, 0.73)"
            className="px-5 text-center"
          >
            See the latest system update on our blog
          </Typography>
        </div>
        <div>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/loginart.png"}
            alt=""
            className="self-start xl:scale-110 xl:translate-x-[-50px] xl:translate-y-[-40px]
            "
          />
        </div>
      </Box>
      <div className="bg-white relative">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute brightness-50 top-0 left-0 z-0"
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
          alt=""
          className="absolute brightness-50 bottom-0 right-0 rotate-180 z-0"
        />
        <h1 className="w-full p-4 md:px-16 border-b text-end border-gray-300 border-opacity-20">
          <Typography variant="body18">
            Don't have an account?{" "}
            <Button
              sx={{ textTransform: "none", fontSize: 18 }}
              size="large"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
          </Typography>
        </h1>
        <div className="flex flex-col relative z-10">
          <div className="flex flex-col gap-8 lg:gap-16 justify-center items-center py-5 lg:py-16 px-5 md:px-20 w-full  ">
            <div className="text-center flex flex-col gap-2">
              <Typography variant="subtitle36" fontWeight={700}>
                Log in to Laundramoon
              </Typography>
              <Typography variant="body22" color="rgba(0, 0, 0, 0.62)">
                Log in to continue
              </Typography>
            </div>
            <form
              id="login-form"
              className="md:max-w-[648px] w-full flex flex-col gap-4"
            >
              <div className="flex flex-col gap-4">
                <Label
                  htmlFor="email"
                  titile="Email Address"
                  className="text-[17px]"
                />
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
                <Label
                  titile="Password"
                  for="password"
                  className="text-[17px]"
                />
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
                sx={{
                  textTransform: "none",
                  alignSelf: "end",
                  fontSize: 16,
                  color: "rgba(17, 18, 18, 0.88)",
                }}
                onClick={togelModal}
              >
                Forgot Password?
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: 24,
                  height: [60, 60, 84],
                }}
                variant="contained"
                size="large"
                endIcon={<BsArrowRight size={30} />}
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
        <ChangePasswordModal
          modalOpen={modalOpen}
          togelModal={togelModal}
          content={
            changePasswordStep === "stepEmail" ? (
              <FormForgetPassword
                setChangePasswordStep={setChangePasswordStep}
              />
            ) : changePasswordStep === "stepOTP" ? (
              <EnterOtpForm setChangePasswordStep={setChangePasswordStep} />
            ) : changePasswordStep === "stepOops" ? (
              <OopsForm setChangePasswordStep={setChangePasswordStep} />
            ) : changePasswordStep === "stepChangePassword" ? (
              <ChangePasswordForm
                setChangePasswordStep={setChangePasswordStep}
              />
            ) : (
              changePasswordStep === "stepSuccess" && (
                <SuccessForm togelModal={togelModal} />
              )
            )
          }
        />
      </div>
    </main>
  );
};

export default Login;

const ChangePasswordModal = (prop) => {
  return (
    <Modal open={prop.modalOpen} onClose={prop.togelModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 912,
          minHeight: 618,
          maxHeight: 600,
          width: "100%",
          bgcolor: "background.paper",
          border: "1px solid #000",
          boxShadow: 24,
          p: [2, 3, 4, 6],
          borderRadius: 2,
          overflowY: ["scroll", "unset"],
          display: "flex",
          justifyContent: "center",
        }}
      >
        {prop.content}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            cursor: "pointer",
          }}
          onClick={prop.togelModal}
        >
          <RxCross1 size={35} />
        </div>
      </Box>
    </Modal>
  );
};

const FormForgetPassword = (prop) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Pleae enter a valid email")
        .required("required"),
    }),
    onSubmit: (values) => {
      alert(`An OTP sent to youe Email -${values.email}, Click ok to continue`);
      prop.setChangePasswordStep("stepOTP");
    },
  });
  return (
    <Stack
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={1}
      spacing={3}
      maxWidth={640}
    >
      <Typography variant="subtitle32" fontWeight={600}>
        Forget password?
      </Typography>
      <Typography color="text.muted" variant="body22" maxWidth={509}>
        Enter your registered login id below to get your unique link to reset
        the password.
      </Typography>
      <Stack textAlign={"start"} spacing={1} width="100%">
        <Typography color="text.muted">Enter Email</Typography>
        <TextField
          fullWidth
          size="large"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <FormHelperText>
          {formik.touched.email && formik.errors.email}
        </FormHelperText>
      </Stack>
      <Button
        sx={{
          textTransform: "none",
          height: ["50px", "50px", "84px"],
          fontSize: [18, 18, 24],
        }}
        variant="contained"
        size="large"
        fullWidth
        endIcon={<BsArrowRight size={30} />}
        onClick={formik.handleSubmit}
      >
        Submit
      </Button>
    </Stack>
  );
};

const EnterOtpForm = (prop) => {
  const [otp, setOtp] = useState("");

  return (
    <Stack
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={1}
      spacing={4}
    >
      <Typography variant="subtitle32">Enter OTP?</Typography>
      <Typography variant="body22" color="text.muted" maxWidth={280}>
        We send you an OTP to varify
      </Typography>
      <Stack
        direction="row"
        textAlign={"start"}
        justifyContent={"center"}
        spacing={1}
        width="100%"
      >
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="number"
          renderSeparator={<span>&nbsp; &nbsp; &nbsp; </span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                borderWidth: 2,
                textAlign: "center",
                borderRadius: 10,
                borderColor: "rgba(0, 0, 0, 0.2)",
              }}
              className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24"
            />
          )}
        />
      </Stack>
      <Button
        sx={{
          textTransform: "none",
          height: ["50px", "50px", "84px"],
          fontSize: [18, 18, 24],
        }}
        variant="contained"
        size="large"
        fullWidth
        endIcon={<BsArrowRight size={35} />}
        onClick={() => {
          const conscent = confirm(
            `User entered OTP ${otp} Click ok to accept or click cancle to reject otp`
          );
          if (conscent) {
            prop.setChangePasswordStep("stepChangePassword");
          } else {
            prop.setChangePasswordStep("stepOops");
          }
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};

const OopsForm = (prop) => {
  return (
    <Stack
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={1}
      spacing={4}
      width={["auto", "auto", 650]}
    >
      <img
        src={import.meta.env.VITE_BASE_URL + "/images/failed-cross-icon.png"}
        alt=""
      />
      <Typography variant="subtitle32" fontWeight={600}>
        Oops?
      </Typography>
      <Typography variant="body22" color="text.muted" maxWidth={400}>
        Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
      </Typography>

      <Button
        sx={{
          textTransform: "none",
          height: ["50px", "50px", "84px"],
          fontSize: [18, 18, 24],
        }}
        variant="contained"
        size="large"
        fullWidth
        endIcon={<BsArrowRight size={30} />}
      >
        Login
      </Button>
    </Stack>
  );
};

const SuccessForm = (prop) => {
  return (
    <Stack
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={1}
      spacing={4}
      width={["auto", "auto", 650]}
    >
      <img
        src={import.meta.env.VITE_BASE_URL + "/images/success-check-icon.png"}
        alt=""
      />
      <Typography variant="subtitle32">Successfully Changed</Typography>
      <Typography variant="body22" color="text.muted" maxWidth={400}>
        Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
      </Typography>

      <Button
        fullWidth
        sx={{
          textTransform: "none",
          height: ["50px", "50px", "84px"],
          fontSize: [18, 18, 24],
        }}
        variant="contained"
        size="large"
        endIcon={<BsArrowRight size={30} />}
        onClick={prop.togelModal}
      >
        Login
      </Button>
    </Stack>
  );
};
const ChangePasswordForm = (prop) => {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.mixed().required("Required"),
      confirmPassword: Yup.mixed().required("Required"),
    }),
    onSubmit: (values) => {
      alert(
        `user entered data --- new passoword- ${values.newPassword}, confirmpassword- ${values.confirmPassword}. call apis here`
      );
      prop.setChangePasswordStep("stepSuccess");
    },
  });
  return (
    <Stack
      spacing={3}
      textAlign={"center"}
      justifyContent="center"
      alignItems={"center"}
      maxWidth={640}
    >
      <Typography variant="subtitle32">Change Password?</Typography>
      <Typography variant="body22" color="rgba(0, 0, 0, 0.62)" maxWidth={485}>
        Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
      </Typography>
      <Stack textAlign={"start"} width="100%" spacing={3}>
        <Typography>New Password</Typography>
        <TextField
          fullWidth
          id="newPassword"
          name="newPassword"
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <Typography>Confirm Password</Typography>
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
      </Stack>
      <Button
        variant="contained"
        fullWidth
        size="large"
        endIcon={<BsArrowRight size={30} />}
        onClick={formik.handleSubmit}
        sx={{
          height: ["50px", "50px", "84px"],
          fontSize: [18, 18, 24],
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};
