import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
  formLabelClasses,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import AvatarEditable from "./AvatarEditable";
import { useFormik } from "formik";
import { RxCross1 } from "react-icons/rx";
import * as Yup from "yup";
import { BsArrowRight } from "react-icons/bs";

const MyProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handelModalTogel = useCallback(() => {
    setModalOpen((state) => (state === true ? false : true));
  }, []);
  const formik = useFormik({
    initialValues: {
      image: null,
      name: "jackson",
      surname: "Howell",
      email: "Jackson@gmail.com",
      mobile: "235435676",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "minimum two charectors required"),
      surname: Yup.string()
        .required("Required")
        .min(2, "minimum two charectors required"),
      email: Yup.string().email("Not a valid email").required("Required"),
      mobile: Yup.string()
        .required("Required")
        .min(2, "minimum two charectors required"),
    }),
    onSubmit: (values) => {
      if (formik.values.image === "" || formik.values.image == null) {
        alert(
          `user have entered data - name - ${values.name}, surname - ${values.surname}, email- ${values.email}, mobile- ${values.mobile}`
        );
        formik.resetForm();
      } else if (
        ["image/jpg", "image/png"].includes(formik.values.image.type)
      ) {
        alert(
          `user have entered data - name - ${values.name}, surname - ${values.surname}, email- ${values.email}, mobile- ${values.mobile} imageFilename - ${values.image.name}`
        );
        formik.resetForm();
      } else {
        alert("Please upload only png or jpg image ");
      }
    },
  });

  return (
    <Stack
      margin={[1, 2, 3, 4]}
      padding={[1, 2, 3, 4]}
      spacing={4}
      bgcolor="white"
      borderRadius={2}
    >
      <Stack direction={["column", "column", "column", "row"]} spacing={4}>
        <Box
          sx={{
            minWidth: "200px",
          }}
        >
          <AvatarEditable
            src={import.meta.env.VITE_BASE_URL + "/images/Avatar.png"}
            setFieldValue={formik.setFieldValue}
          />
          <Typography
            color={
              ["image/jpg", "image/png"].includes(formik.values.image?.type)
                ? "info.main"
                : "error.main"
            }
            padding={1}
          >
            {formik.values.image?.type === undefined
              ? ""
              : [("image/jpg", "image/png")].includes(formik.values.image?.type)
              ? `${formik.values.image?.name}`
              : "Only Jpg, Png allowed"}
          </Typography>
        </Box>
        <form>
          <Grid container spacing={4} sx={{ paddingTop: [2, 2, 2, 8] }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="surname"
                name="surname"
                label="Surname"
                value={formik.values.surname}
                onChange={formik.handleChange}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                id="mobile"
                name="mobile"
                label="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                value={"********"}
                disabled
              />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  size="small"
                  sx={{ textTransform: "none" }}
                  onClick={handelModalTogel}
                >
                  Change Password
                </Button>
                <ChangePasswordModal
                  open={modalOpen}
                  handleClose={handelModalTogel}
                />
              </Box>
            </Grid>
          </Grid>
        </form>
      </Stack>
      <Button
        variant="contained"
        sx={{ alignSelf: "end" }}
        size="large"
        onClick={formik.handleSubmit}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default MyProfile;

const ChangePasswordModal = (prop) => {
  const [passwordChanged, setPasswordChange] = useState(false);

  return (
    <Modal
      open={prop.open}
      onClose={() => {
        prop.handleClose();
        setPasswordChange(false);
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
        {passwordChanged === false ? (
          <ChangePassworForm setPasswordChange={setPasswordChange} />
        ) : (
          <PasswordChangedSuccess
            handleClose={() => {
              prop.handleClose();
              setPasswordChange(false);
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            cursor: "pointer",
          }}
          onClick={() => {
            prop.handleClose();
            setPasswordChange(false);
          }}
        >
          <RxCross1 />
        </div>
      </Box>
    </Modal>
  );
};

const ChangePassworForm = (prop) => {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.mixed().required("Required"),
      newPassword: Yup.mixed().required("Required"),
      confirmPassword: Yup.mixed().required("Required"),
    }),
    onSubmit: (values) => {
      alert(
        `user entered data --- old password- ${values.oldPassword}, new passoword- ${values.newPassword}, confirmpassword- ${values.confirmPassword}. call apis here`
      );
      prop.setPasswordChange(true);
    },
  });
  return (
    <Stack spacing={3} textAlign={"center"}>
      <Typography variant="h5">Change Password?</Typography>
      <Typography>
        Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
      </Typography>
      <TextField
        fullWidth
        id="oldPassword"
        name="oldPassword"
        label="Old Password"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
        error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
        helperText={formik.touched.oldPassword && formik.errors.oldPassword}
      />
      <TextField
        fullWidth
        id="newPassword"
        name="newPassword"
        label="New Password"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
      />
      <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
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
      <Button
        variant="contained"
        size="large"
        endIcon={<BsArrowRight />}
        onClick={formik.handleSubmit}
      >
        Submit
      </Button>
    </Stack>
  );
};

const PasswordChangedSuccess = (prop) => {
  return (
    <Stack textAlign={"center"} alignItems={"center"} spacing={3}>
      <svg
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74 0C59.3642 0 45.0571 4.34002 32.8878 12.4712C20.7186 20.6025 11.2338 32.1597 5.63295 45.6814C0.0320632 59.2032 -1.43338 74.0821 1.42192 88.4367C4.27723 102.791 11.325 115.977 21.6741 126.326C32.0232 136.675 45.2088 143.723 59.5634 146.578C73.9179 149.433 88.7969 147.968 102.319 142.367C115.84 136.766 127.398 127.281 135.529 115.112C143.66 102.943 148 88.6358 148 74C147.979 54.3805 140.176 35.5706 126.302 21.6975C112.429 7.82444 93.6195 0.02122 74 0ZM74 135.667C61.8035 135.667 49.8809 132.05 39.7399 125.274C29.5988 118.498 21.6949 108.867 17.0275 97.5988C12.3601 86.3307 11.1389 73.9316 13.5183 61.9694C15.8977 50.0073 21.7709 39.0193 30.3951 30.3951C39.0194 21.7708 50.0073 15.8977 61.9695 13.5182C73.9316 11.1388 86.3307 12.36 97.5988 17.0274C108.867 21.6948 118.498 29.5988 125.274 39.7398C132.05 49.8809 135.667 61.8035 135.667 74C135.649 90.3495 129.146 106.024 117.585 117.585C106.024 129.146 90.3495 135.649 74 135.667Z"
          fill="#00A5BF"
        />
        <path
          d="M100.474 51.1402L61.6667 89.9471L47.5265 75.8069C46.3635 74.6836 44.8058 74.062 43.1889 74.0761C41.572 74.0901 40.0253 74.7387 38.882 75.882C37.7386 77.0254 37.0901 78.5721 37.076 80.1889C37.062 81.8058 37.6836 83.3635 38.8069 84.5266L57.3069 103.027C58.4633 104.183 60.0315 104.832 61.6667 104.832C63.3019 104.832 64.8701 104.183 66.0265 103.027L109.193 59.8599C110.317 58.6969 110.938 57.1391 110.924 55.5223C110.91 53.9054 110.261 52.3587 109.118 51.2154C107.975 50.072 106.428 49.4235 104.811 49.4094C103.194 49.3954 101.637 50.0169 100.474 51.1402Z"
          fill="#00A5BF"
        />
      </svg>
      <Typography variant="h5" fontWeight={600}>
        Succefully Changed
      </Typography>
      <Typography maxWidth={300}>
        Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
      </Typography>
      <Button
        variant="contained"
        size="large"
        endIcon={<BsArrowRight />}
        onClick={prop.handleClose}
      >
        Done
      </Button>
    </Stack>
  );
};
