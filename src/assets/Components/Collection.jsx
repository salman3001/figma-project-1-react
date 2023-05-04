import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material/";
import { Stack } from "@mui/system";
import { MobileDatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveStep,
  setCollectionDate,
  setCollectionMessage,
  setCollectionTime,
  setDeliveryDate,
  setDeliveryMessage,
  setDeliveryTime,
  setFrequency,
} from "../../redux/orderNowSlice";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Collection = () => {
  const collectionState = useSelector(
    (state) => state.orderNow.stepperData.collection
  );
  const activeStep = useSelector((state) => state.orderNow.activeStep);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeStep === "address") {
      navigate("/dashboard/ordernow/address");
    }
  });

  const validDeliveryDate = () => {
    const tempdate = new Date();

    if (collectionState.collectionTime.date !== null) {
      return tempdate.setDate(
        collectionState.collectionTime.date.getDate() + 1
      );
    } else {
      return tempdate;
    }
  };

  const isButtonDisabled = () => {
    if (
      collectionState.collectionTime.date !== null &&
      collectionState.collectionTime.timeSlot !== "" &&
      collectionState.deliveryTime.date !== null &&
      collectionState.deliveryTime.timeSlot !== ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const isDatePickerDisabled = () => {
    if (collectionState.collectionTime.date === null) {
      return true;
    } else {
      return false;
    }
  };

  const IsMenuDisabled = (pastHour) => {
    if (collectionState.collectionTime.date !== null) {
      const todayDate = new Date();
      const thisMonth = todayDate.getMonth();
      const todayDay = todayDate.getDay();
      const todayHours = todayDate.getHours();

      const selectedDate = collectionState.collectionTime.date;
      const selectedDay = selectedDate.getDay();
      const selectedMonth = selectedDate.getMonth();

      if (todayDay === selectedDay && thisMonth === selectedMonth) {
        if (pastHour <= todayHours) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return false;
  };

  return (
    <Stack spacing={3} padding={[0, 2, 3]}>
      <Stack>
        <Typography variant="h45">Collection & delivery</Typography>
      </Stack>
      <Stack>
        <Typography variant="subtitle32">Pickup Time</Typography>
      </Stack>
      <Stack direction={["column", "row"]} gap={2} color="text.muted">
        <Stack flexGrow={1} spacing={1}>
          <label htmlFor="delieveryDay">Select Day</label>
          <div className="flex relative items-center w-full ">
            <FaRegCalendarCheck
              className="absolute left-2"
              color="#00A5BF"
              size={20}
            />
            <MobileDatePicker
              disablePast
              value={collectionState.collectionTime.date}
              onChange={(newValue, { validationError }) => {
                if (!validationError) {
                  dispatch(setCollectionTime(""));
                  dispatch(setCollectionDate(newValue));
                }
              }}
              sx={{
                width: "100%",
                "& .MuiInputBase-input": {
                  pl: 5,
                },
                "&.MuiPickersDay-root": {
                  fontSize: "5rem",
                },
              }}
            />
          </div>
        </Stack>
        <Stack flexGrow={1} spacing={1}>
          <label htmlFor="delieveryDay">Select Time</label>
          <div className="flex relative items-center">
            <BiTime className="absolute left-2" color="#00A5BF" size={20} />
            <Select
              disabled={
                collectionState.collectionTime.date === null ? true : false
              }
              value={collectionState.collectionTime.timeSlot}
              onChange={(e) => {
                dispatch(setCollectionTime(e.target.value));
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
              sx={{ pl: 4 }}
            >
              <MenuItem disabled={IsMenuDisabled(9)} value={"09:00-12:00"}>
                09:00-12:00
              </MenuItem>
              <MenuItem disabled={IsMenuDisabled(12)} value={"12:00-15:00"}>
                12:00-15:00
              </MenuItem>
              <MenuItem disabled={IsMenuDisabled(15)} value={"15:00-18:00"}>
                15:00-18:00
              </MenuItem>
              <MenuItem disabled={IsMenuDisabled(18)} value={"18:00-21:00"}>
                18:00-21:00
              </MenuItem>
              <MenuItem disabled={IsMenuDisabled(21)} value={"21:00-00:00"}>
                21:00-00:00
              </MenuItem>
            </Select>
          </div>
        </Stack>
      </Stack>
      <TextareaCollectionMessage />
      <Stack>
        <Typography variant="subtitle32">Delivery Time</Typography>
      </Stack>
      <Stack direction={["column", "row"]} gap={2} color="text.muted">
        <Stack flexGrow={1} spacing={1}>
          <label htmlFor="delieveryDay">Select Day</label>
          <div className="flex relative items-center w-full">
            <FaRegCalendarCheck
              className="absolute left-2"
              color="#00A5BF"
              size={20}
            />
            <MobileDatePicker
              disabled={isDatePickerDisabled()}
              minDate={validDeliveryDate()}
              value={collectionState.deliveryTime.date}
              onChange={(newValue, { validationError }) => {
                if (!validationError) {
                  dispatch(setDeliveryTime(""));
                  dispatch(setDeliveryDate(newValue));
                }
              }}
              sx={{
                width: "100%",
                "& .MuiInputBase-input": {
                  pl: 5,
                },
                "& .MuiPickersDay-root": { fontSize: "1.15rem" },
              }}
            />
          </div>
        </Stack>
        <Stack flexGrow={1} spacing={1}>
          <label htmlFor="delieveryDay">Select Time</label>
          <div className="flex relative items-center">
            <BiTime className="absolute left-2" color="#00A5BF" size={20} />
            <Select
              value={collectionState.deliveryTime.timeSlot}
              onChange={(e) => {
                dispatch(setDeliveryTime(e.target.value));
              }}
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
              sx={{ pl: 4 }}
            >
              <MenuItem value={"09:00-12:00"}>09:00-12:00</MenuItem>
              <MenuItem value={"12:00-15:00"}>12:00-15:00</MenuItem>
              <MenuItem value={"15:00-18:00"}>15:00-18:00</MenuItem>
              <MenuItem value={"18:00-21:00"}>18:00-21:00</MenuItem>
              <MenuItem value={"21:00-00:00"}>21:00-00:00</MenuItem>
            </Select>
          </div>
        </Stack>
      </Stack>
      <TextareaDeliveryMessage />
      <Stack
        flexGrow={1}
        spacing={1}
        color="text.muted"
        renderValue={(value) => {
          return (
            <Box sx={{ display: "flex", gap: 1 }}>
              <BsArrowLeft />
              {value}
            </Box>
          );
        }}
      >
        <label htmlFor="delieveryDay">Frequency</label>
        <Select
          value={collectionState.frequency}
          onChange={(e) => {
            dispatch(setFrequency(e.target.value));
          }}
          inputProps={{ "aria-label": "Without label" }}
          fullWidth
        >
          <MenuItem value={"Once"}>Once</MenuItem>
          <MenuItem value={"Weekly"}>Weekly</MenuItem>
        </Select>
      </Stack>
      <Stack direction={"row"} justifyContent="space-between">
        <Button
          variant="contained"
          sx={{ width: "15rem", height: "3.75rem", fontSize: "1.25rem" }}
          onClick={() => {
            navigate("/dashboard/ordernow/service");
          }}
          startIcon={<BsArrowLeft />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ width: "15rem", height: "3.75rem", fontSize: "1.25rem" }}
          onClick={() => {
            dispatch(setActiveStep("contact"));
            navigate("/dashboard/ordernow/contact");
          }}
          disabled={isButtonDisabled()}
          endIcon={<BsArrowRight />}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default Collection;

const TextareaCollectionMessage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setCollectionMessage(value));
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <Stack
      color="text.muted"
      sx={{
        "& textarea": {
          resize: "none",
          height: 100,
          borderRadius: 2,
          borderColor: "rgba(0, 0, 0, 0.2)",
          p: 1,
          fontFamily: "inter",
          border: 1,
          "&:focus": {
            outline: "none",
            border: 1,
            borderColor: "primary.main",
          },
          "&:hover": {
            borderColor: "black",
          },
        },
      }}
      spacing={1}
    >
      <Typography>Driver instructions</Typography>
      <textarea
        placeholder="Add any special instructions for driver "
        value={value}
        onChange={(e) => {
          dispatch(setValue(e.target.value));
        }}
      ></textarea>
    </Stack>
  );
};

const TextareaDeliveryMessage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setDeliveryMessage(value));
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <Stack
      color="text.muted"
      sx={{
        "& textarea": {
          resize: "none",
          height: 100,
          borderRadius: 2,
          borderColor: "rgba(0, 0, 0, 0.2)",
          p: 1,
          fontFamily: "inter",
          border: 1,
          "&:focus": {
            outline: "none",
            border: 1,
            borderColor: "primary.main",
          },
          "&:hover": {
            borderColor: "black",
          },
        },
      }}
      spacing={1}
    >
      <Typography>Driver instructions</Typography>
      <textarea
        style={{
          borderColor: "gray",
        }}
        placeholder="Add any special instructions for driver "
        value={value}
        onChange={(e) => {
          dispatch(setValue(e.target.value));
        }}
      ></textarea>
    </Stack>
  );
};
