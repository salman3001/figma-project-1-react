import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import MyAddresses from "../Components/MyAddresses";
import MyProfile from "../Components/MyProfile";

const MyAccount = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      paddingTop={[9, 9, 9, 4]}
      spacing={4}
      sx={{
        py: [9, 9, 9, 9, 2],
        paddingX: [2, 2, 2, 2, 4, 8],
      }}
    >
      <Typography variant="h45">My Account</Typography>
      {/* tabs */}
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="white"
            aria-label="basic tabs example"
            sx={{
              "&.MuiTab-root": {
                borderColor: "2px solid rgba(0, 165, 191, 0.2)",
                borderBottom: 0,
                fontSize: "1.25rem",
              },
              "& .MuiTab-root.Mui-selected": {
                bgcolor: "primary.main",
                color: "white",
              },
              "& .MuiTabs-flexContainer": {
                gap: 3,
              },
              "& .MuiButtonBase-root": {
                border: 1,
                borderRadius: "10px 10px 0px 0px",
                borderColor: "rgba(161, 242, 255, 0.4)",
                fontSize: 17,
                minWidth: "12rem",
                textTransform: "none",
                borderBottom: "none",
              },
            }}
          >
            <Tab label="Address" />
            <Tab label="Profile" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MyAddresses />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyProfile />
        </TabPanel>
      </Box>
    </Stack>
  );
};

export default MyAccount;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ borderRadius: 40 }}
    >
      {value === index && (
        <Box
          bgcolor="#F3F9FD"
          minHeight={300}
          sx={{
            border: 0.1,
            borderColor: "rgba(161, 242, 255, 0.4)",
            borderRadius: 3,
            borderTopLeftRadius: 0,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
