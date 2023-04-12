import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LaundraLogo from "./LaundraLogo";
import ProfileAvatar from "./ProfileAvatar";
import SideMenuOption from "./SideMenuOption";
import { AiOutlinePoweroff } from "react-icons/ai";

const MyDrawer = (prop) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: ["fixed", "fixed", "static"],
        width: [
          `${prop.open ? "100%" : "0px"}`,
          `${prop.open ? "100%" : "0px"}`,
          "295px",
        ],
        minHeight: "100vh",
        background: "rgba(0, 0, 0, 0.5);",

        overflow: "hidden",
        zIndex: 1,
      }}
      onClick={prop.drawerHandler}
    >
      <Paper
        sx={{
          width: [
            `${prop.open ? "295px" : "0px"}`,
            `${prop.open ? "295px" : "0px"}`,
            "295px",
          ],
          height: "100vh",
          minHeight: "100vh",
          backgroundColor: "secondary.main",
          zIndex: 2,
          color: "black",
          borderRadius: 0,
          transition: "width .2s ease-in-out ",
          paddingx: 3,
          paddingBottom: 3,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Stack
          gap={4}
          justifyContent="space-between"
          sx={{
            flexGrow: 1,
            height: "100%",
          }}
        >
          <Stack justifyContent="center" alignItems="center" gap={2}>
            <Box
              sx={{
                height: "84px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
                gap: 4,
              }}
            >
              <LaundraLogo />
              <Divider
                orientation="horizontal"
                flexItem
                light
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.06)",
                }}
              />
            </Box>
            <ProfileAvatar
              src={import.meta.env.VITE_BASE_URL + "/images/Avatar.png"}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.light",
                fontWeight: 600,
              }}
            >
              Jackson Howell{" "}
            </Typography>
          </Stack>
          <Stack
            gap={2}
            sx={{
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <SideMenuOption
              selected={true}
              title="My Orders"
              svg={
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8418 1.70679H17.0619V7.02499C17.0619 7.26419 16.9669 7.4936 16.7977 7.66274C16.6286 7.83188 16.3992 7.92691 16.16 7.92691H11.7437C11.5045 7.92691 11.2751 7.83188 11.106 7.66274C10.9368 7.4936 10.8418 7.26419 10.8418 7.02499V1.70679Z"
                    fill="#00A5BF"
                  />
                  <path
                    d="M23.2551 26.8373H4.15048C3.20044 26.8373 2.28932 26.4599 1.61754 25.7881C0.94576 25.1163 0.568359 24.2052 0.568359 23.2551V4.15048C0.568359 3.20044 0.94576 2.28932 1.61754 1.61754C2.28932 0.945761 3.20044 0.568359 4.15048 0.568359H23.2551C24.2052 0.568359 25.1163 0.945761 25.7881 1.61754C26.4599 2.28932 26.8373 3.20044 26.8373 4.15048V23.2551C26.8373 24.2052 26.4599 25.1163 25.7881 25.7881C25.1163 26.4599 24.2052 26.8373 23.2551 26.8373ZM4.15048 2.95644C3.8338 2.95644 3.53009 3.08224 3.30617 3.30617C3.08224 3.53009 2.95644 3.8338 2.95644 4.15048V23.2551C2.95644 23.5718 3.08224 23.8755 3.30617 24.0994C3.53009 24.3234 3.8338 24.4492 4.15048 24.4492H23.2551C23.5718 24.4492 23.8755 24.3234 24.0994 24.0994C24.3234 23.8755 24.4492 23.5718 24.4492 23.2551V4.15048C24.4492 3.8338 24.3234 3.53009 24.0994 3.30617C23.8755 3.08224 23.5718 2.95644 23.2551 2.95644H4.15048Z"
                    fill="#00A5BF"
                  />
                  <path
                    d="M8.92587 22.7553H6.53779C6.22111 22.7553 5.9174 22.6295 5.69348 22.4055C5.46955 22.1816 5.34375 21.8779 5.34375 21.5612C5.34375 21.2445 5.46955 20.9408 5.69348 20.7169C5.9174 20.493 6.22111 20.3672 6.53779 20.3672H8.92587C9.24255 20.3672 9.54626 20.493 9.77019 20.7169C9.99411 20.9408 10.1199 21.2445 10.1199 21.5612C10.1199 21.8779 9.99411 22.1816 9.77019 22.4055C9.54626 22.6295 9.24255 22.7553 8.92587 22.7553Z"
                    fill="#00A5BF"
                  />
                  <path
                    d="M21.8673 22.7553H19.4792C19.1625 22.7553 18.8588 22.6295 18.6349 22.4055C18.411 22.1816 18.2852 21.8779 18.2852 21.5612C18.2852 21.2445 18.411 20.9408 18.6349 20.7169C18.8588 20.493 19.1625 20.3672 19.4792 20.3672H21.8673C22.184 20.3672 22.4877 20.493 22.7116 20.7169C22.9355 20.9408 23.0613 21.2445 23.0613 21.5612C23.0613 21.8779 22.9355 22.1816 22.7116 22.4055C22.4877 22.6295 22.184 22.7553 21.8673 22.7553Z"
                    fill="#00A5BF"
                  />
                  <path
                    d="M21.8667 17.757H17.0905C16.7738 17.757 16.4701 17.6312 16.2462 17.4073C16.0223 17.1833 15.8965 16.8796 15.8965 16.5629C15.8965 16.2463 16.0223 15.9425 16.2462 15.7186C16.4701 15.4947 16.7738 15.3689 17.0905 15.3689H21.8667C22.1834 15.3689 22.4871 15.4947 22.711 15.7186C22.9349 15.9425 23.0607 16.2463 23.0607 16.5629C23.0607 16.8796 22.9349 17.1833 22.711 17.4073C22.4871 17.6312 22.1834 17.757 21.8667 17.757Z"
                    fill="#00A5BF"
                  />
                  <path
                    d="M21.8661 12.9809H14.7019C14.3852 12.9809 14.0815 12.8551 13.8575 12.6311C13.6336 12.4072 13.5078 12.1035 13.5078 11.7868C13.5078 11.4701 13.6336 11.1664 13.8575 10.9425C14.0815 10.7186 14.3852 10.5928 14.7019 10.5928H21.8661C22.1828 10.5928 22.4865 10.7186 22.7104 10.9425C22.9343 11.1664 23.0601 11.4701 23.0601 11.7868C23.0601 12.1035 22.9343 12.4072 22.7104 12.6311C22.4865 12.8551 22.1828 12.9809 21.8661 12.9809Z"
                    fill="#00A5BF"
                  />
                </svg>
              }
            />
            <SideMenuOption
              selected={false}
              title="Promotions"
              svg={
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_39_137)">
                    <path
                      d="M21.3125 21.3125V28.0938L15.5 25.1875L9.6875 28.0938V21.3125"
                      stroke="white"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.7281 2.90625H13.2719C11.2375 2.90625 9.3 3.97188 8.23438 5.8125L6.00625 9.6875C4.94063 11.5281 4.94063 13.6594 6.00625 15.5L8.23438 19.375C9.3 21.2156 11.2375 22.2812 13.2719 22.2812H17.7281C19.7625 22.2812 21.7 21.2156 22.7656 19.375L24.9937 15.5C26.0594 13.6594 26.0594 11.5281 24.9937 9.6875L22.7656 5.8125C21.7 3.97188 19.8594 2.90625 17.7281 2.90625Z"
                      stroke="white"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5625 15.5L17.4375 9.6875"
                      stroke="white"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5938 8.71875V11.625"
                      stroke="white"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.4062 13.5625V16.4688"
                      stroke="white"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_137">
                      <rect width="31" height="31" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
            <SideMenuOption
              selected={false}
              title="My Account"
              svg={
                <svg
                  width="21"
                  height="27"
                  viewBox="0 0 21 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3125 6.52513C16.3125 3.42513 13.7292 0.841797 10.5 0.841797C7.27083 0.841797 4.6875 3.42513 4.6875 6.52513C4.6875 9.62513 7.27083 12.2085 10.5 12.2085C13.7292 12.2085 16.3125 9.62513 16.3125 6.52513ZM7.27083 6.52513C7.27083 4.84596 8.69167 3.42513 10.5 3.42513C12.3083 3.42513 13.7292 4.84596 13.7292 6.52513C13.7292 8.2043 12.3083 9.62513 10.5 9.62513C8.69167 9.62513 7.27083 8.2043 7.27083 6.52513Z"
                    fill="white"
                  />
                  <path
                    d="M0.94105 19.0544L0.295217 21.5086C-0.0922829 22.6711 0.16605 23.9627 0.94105 24.9961C1.71605 25.9002 2.74938 26.4169 4.04105 26.4169H16.9577C18.1202 26.4169 19.2827 25.9002 19.9285 24.8669C20.7035 23.8336 20.9619 22.5419 20.5744 21.3794L19.9285 18.9252C19.1535 15.6961 16.3119 13.5002 13.0827 13.5002H7.91605C4.68688 13.5002 1.84522 15.6961 0.94105 19.0544ZM2.74938 22.1544L3.39522 19.7002C4.04105 17.5044 5.84938 16.0836 7.91605 16.0836H13.0827C15.1494 16.0836 16.9577 17.5044 17.6035 19.7002L18.2494 22.1544C18.3785 22.5419 18.2494 23.0586 17.991 23.4461C17.8619 23.5752 17.4744 23.8336 16.9577 23.8336H4.04105C3.52438 23.8336 3.26605 23.5752 3.13688 23.3169C2.74938 23.0586 2.62022 22.5419 2.74938 22.1544Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </Stack>
          <Stack
            sx={{
              "& hr": {
                borderColor: " rgba(255, 255, 255, 0.06)",
              },
            }}
          >
            <Divider />
            <Box
              component={"a"}
              sx={{
                mt: 2,
                color: "text.light",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                gap: 2,
                "&>h6": {
                  fontWeight: 800,
                },
              }}
            >
              <AiOutlinePoweroff
                size={40}
                style={{
                  background: theme.palette.primary.main,
                  padding: theme.spacing(1),
                  borderRadius: "100%",
                }}
              />
              <Typography variant="subtitle1">Logout</Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default MyDrawer;
