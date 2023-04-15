import {
  Box,
  Button,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  addDryCleanItem,
  addIroningItem,
  addWashAndIronItem,
  addWashItem,
  decrementDryCleanItem,
  decrementIroningItem,
  decrementWashAndIronItem,
  decrementWashItem,
  incrementDryCleanItem,
  incrementIroningItem,
  incrementWashAndIronItem,
  incrementWashItem,
  removeDrycleanItem,
  removeIroningItem,
  removeWashAndIronItem,
  removeWashItem,
  setActiveStep,
  setService,
  setServiceType,
} from "../../redux/orderNowSlice";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Service = () => {
  const navigate = useNavigate();
  const selectedService = useSelector(
    (state) => state.orderNow.stepperData.services.serviceType
  );
  const dispatch = useDispatch();
  const serviceState = useSelector(
    (state) => state.orderNow.stepperData.services
  );
  const activeStep = useSelector((state) => state.orderNow.activeStep);

  useEffect(() => {
    if (activeStep === "address") {
      navigate("/ordernow/address");
    }
  });

  const isButtonDisabled = () => {
    if (
      serviceState.wash.items.length >= 1 ||
      serviceState.washAndIron.items.length >= 1 ||
      serviceState.ironing.items.length >= 1 ||
      serviceState.dryCleaning.items.length >= 1
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={600}>
        Services
      </Typography>
      <Stack
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        flexWrap={"wrap"}
        p={2}
      >
        <ServiceCard name="wash" label="wash" value="wash" />
        <ServiceCard
          name="washAndIron"
          label="Wash & Iron"
          value="washAndIron"
        />
        <ServiceCard name="ironing" label="Ironing" value="ironing" />
        <ServiceCard
          name="dryCleaning"
          label="Dry Cleaning"
          value="dryCleaning"
        />
      </Stack>
      <Stack>
        <Typography variant="h5" fontWeight={600}>
          {selectedService === "wash"
            ? "Wash"
            : selectedService === "washAndIron"
            ? "Wash & Iron"
            : selectedService === "ironing"
            ? "Ironing"
            : selectedService === "dryCleaning"
            ? "Dry Cleaning"
            : ""}
        </Typography>
        <Typography color={"text.muted"}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled
        </Typography>
      </Stack>
      <BasicTabs></BasicTabs>
      <Stack direction={"row"} justifyContent="space-between">
        <Button
          variant="contained"
          size="large"
          sx={{ minWidth: [150, 200], textTransform: "none" }}
          onClick={() => {
            dispatch(setActiveStep("/ordernow/collection"));
            navigate("/ordernow/address");
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
            dispatch(setActiveStep("collection"));
            navigate("/ordernow/collection");
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

export default Service;

const ServiceCard = (prop) => {
  const selectedService = useSelector(
    (state) => state.orderNow.stepperData.services.serviceType
  );
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        maxWidth: "100%",
      }}
    >
      <Box
        component="input"
        type="radio"
        name="serviceType"
        sx={{
          display: "none",
        }}
        id={prop.name}
        value={prop.value}
        onChange={() => {
          dispatch(setServiceType(prop.value));
        }}
      />
      <Box
        component={"label"}
        sx={{
          display: "flex",
          cursor: "pointer",
          flexDirection: "column",
          padding: [1, 2, 3, 4],
          borderRadius: 3,
          border: 1,
          borderColor:
            selectedService === prop.value ? "#24869B" : "rgba(0, 0, 0, 0.2)",
          justifyContent: "center",
          alignItems: "center",
          background: selectedService === prop.value ? "#00A5BF" : "white",
        }}
        htmlFor={prop.name}
      >
        <svg
          width="58"
          height="72"
          viewBox="0 0 58 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.255 49.3073C17.3651 49.364 17.4786 49.4183 17.5952 49.4696C18.4987 49.8671 19.6106 50.0917 20.8506 49.82C21.7837 49.6155 22.7309 49.1428 23.6752 48.3416C26.0498 51.3288 30.9361 51.7418 33.9241 48.1442C35.5189 49.2827 37.6525 49.0342 39.1799 48.6272C39.8274 48.4547 40.4359 48.2368 40.9596 48.023C39.5782 53.3906 34.7052 57.3545 28.905 57.3545C23.5763 57.3545 19.0318 54.0113 17.255 49.3073Z"
            fill="white"
            stroke={selectedService === prop.value ? "#03444F" : "#00A5BF"}
            stroke-width="2"
          />
          <path
            d="M1.75 70.1128V21.5723H56.2509V70.1128C56.2509 70.5605 55.8604 70.996 55.2821 70.996H2.71987C2.13933 70.996 1.75 70.5605 1.75 70.1128ZM11.9911 45.7126C11.9911 55.0636 19.5714 62.6426 28.9222 62.6426C38.272 62.6426 45.8522 55.0636 45.8522 45.7126C45.8522 36.3629 38.272 28.7826 28.9222 28.7826C19.5702 28.7826 11.9911 36.364 11.9911 45.7126Z"
            fill="white"
            stroke={selectedService === prop.value ? "#03444F" : "#00A5BF"}
            stroke-width="2"
          />
          <path
            d="M2.71987 1.00391H55.2821C55.7872 1.00391 56.2509 1.43531 56.2509 2.03791V15.9543H1.75V2.03791C1.75 1.43531 2.21254 1.00391 2.71987 1.00391ZM7.32238 8.47966C7.32238 10.5909 9.03433 12.3045 11.1472 12.3045L13.9721 8.47966H14.9721C14.9721 8.47942 14.9721 8.47917 14.9721 8.47893C14.9717 6.36522 13.2594 4.65478 11.1472 4.65478C9.03485 4.65478 7.32238 6.36561 7.32238 8.47966ZM19.6509 8.47966C19.6509 10.5912 21.3642 12.3045 23.4757 12.3045L26.3006 8.47966H27.3006C27.3006 8.47942 27.3006 8.47917 27.3006 8.47893C27.3002 6.36496 25.5865 4.65478 23.4757 4.65478C21.3647 4.65478 19.6509 6.36535 19.6509 8.47966Z"
            fill="white"
            stroke={selectedService === prop.value ? "#03444F" : "#00A5BF"}
            stroke-width="2"
          />
        </svg>

        <Typography minWidth={100} textAlign={"center"} className="font-bold">
          {prop.label}
        </Typography>
      </Box>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: [1, 2, 3] }}>{children}</Box>}
    </div>
  );
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const selectedService = useSelector(
    (state) => state.orderNow.stepperData.services.serviceType
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              fontSize: 16,
              fontWeight: 600,
            }}
            label="Price List"
          />
          <Tab
            label="Frequently asked questions"
            sx={{
              fontSize: 16,
              fontWeight: 600,
              color: "#787878",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {selectedService === "wash" && (
          <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
            <Item name="Shirts" serviceType="wash" price={12.99} />
            <Item name="Bottoms" serviceType="wash" price={12.99} />
            <Item name="Tops" serviceType="wash" price={12.99} />
            <Item name="Dresss" serviceType="wash" price={12.99} />
            <Item name="Jackets" serviceType="wash" price={12.99} />
            <Item name="Outwear" serviceType="wash" price={12.99} />
            <Item name="Bed Sheets" serviceType="wash" price={12.99} />
          </Stack>
        )}
        {selectedService === "washAndIron" && (
          <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
            <Item name="Shirts" serviceType="washAndIron" price={12.99} />
            <Item name="Bottoms" serviceType="washAndIron" price={12.99} />
            <Item name="Tops" serviceType="washAndIron" price={12.99} />
            <Item name="Dresss" serviceType="washAndIron" price={12.99} />
            <Item name="Jackets" serviceType="washAndIron" price={12.99} />
            <Item name="Outwear" serviceType="washAndIron" price={12.99} />
            <Item name="Bed Sheets" serviceType="washAndIron" price={12.99} />
          </Stack>
        )}

        {selectedService === "ironing" && (
          <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
            <Item name="Shirts" serviceType="ironing" price={12.99} />
            <Item name="Bottoms" serviceType="ironing" price={12.99} />
            <Item name="Tops" serviceType="ironing" price={12.99} />
            <Item name="Dresss" serviceType="ironing" price={12.99} />
            <Item name="Jackets" serviceType="ironing" price={12.99} />
            <Item name="Outwear" serviceType="ironing" price={12.99} />
            <Item name="Bed Sheets" serviceType="ironing" price={12.99} />
          </Stack>
        )}

        {selectedService === "dryCleaning" && (
          <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
            <Item name="Shirts" serviceType="dryCleaning" price={12.99} />
            <Item name="Bottoms" serviceType="dryCleaning" price={12.99} />
            <Item name="Tops" serviceType="dryCleaning" price={12.99} />
            <Item name="Dresss" serviceType="dryCleaning" price={12.99} />
            <Item name="Jackets" serviceType="dryCleaning" price={12.99} />
            <Item name="Outwear" serviceType="dryCleaning" price={12.99} />
            <Item name="Bed Sheets" serviceType="dryCleaning" price={12.99} />
          </Stack>
        )}
        <Box
          sx={{
            overflow: "scroll",
            paddingY: 2,
          }}
        >
          <PriceTable />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Faq />
        <Faq />
        <Faq />
      </TabPanel>
    </Box>
  );
}

const Item = (prop) => {
  const services = useSelector((state) => state.orderNow.stepperData.services);
  const dispatach = useDispatch();

  const isSelected = () => {
    if (prop.serviceType === "wash") {
      const itemExist = services.wash.items.filter(
        (item) => item.name === prop.name
      );
      if (itemExist.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (prop.serviceType === "washAndIron") {
      const itemExist = services.washAndIron.items.filter(
        (item) => item.name === prop.name
      );
      if (itemExist.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (prop.serviceType === "ironing") {
      const itemExist = services.ironing.items.filter(
        (item) => item.name === prop.name
      );
      if (itemExist.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (prop.serviceType === "dryCleaning") {
      const itemExist = services.dryCleaning.items.filter(
        (item) => item.name === prop.name
      );
      if (itemExist.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const handleSelected = () => {
    if (prop.serviceType === "wash") {
      if (isSelected()) {
        dispatach(removeWashItem({ name: prop.name }));
      } else {
        dispatach(
          addWashItem({
            name: prop.name,
            quantity: 1,
            price: prop.price,
            serviceType: "wash",
          })
        );
      }
    }
    if (prop.serviceType === "washAndIron") {
      if (isSelected()) {
        dispatach(removeWashAndIronItem({ name: prop.name }));
      } else {
        dispatach(
          addWashAndIronItem({
            name: prop.name,
            quantity: 1,
            price: prop.price,
            serviceType: "washAndIron",
          })
        );
      }
    }
    if (prop.serviceType === "ironing") {
      if (isSelected()) {
        dispatach(removeIroningItem({ name: prop.name }));
      } else {
        dispatach(
          addIroningItem({
            name: prop.name,
            quantity: 1,
            price: prop.price,
            serviceType: "ironing",
          })
        );
      }
    }
    if (prop.serviceType === "dryCleaning") {
      if (isSelected()) {
        dispatach(removeDrycleanItem({ name: prop.name }));
      } else {
        dispatach(
          addDryCleanItem({
            name: prop.name,
            quantity: 1,
            price: prop.price,
            serviceType: "dryCleaning",
          })
        );
      }
    }
  };

  return (
    <Button
      sx={{
        border: 1,
        borderRadius: 10,
        p: 0,
        width: 90,
        textTransform: "none",
        background: !isSelected() ? "white" : "#E5FCFF",
        borderColor: !isSelected() && "#C8C8C8",
        color: !isSelected() && "text.muted",
      }}
      size="small"
      onClick={handleSelected}
    >
      {prop.name}
    </Button>
  );
};

const PriceTable = () => {
  const serviceState = useSelector(
    (state) => state.orderNow.stepperData.services
  );

  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        "& table": {
          width: "100%",
          whiteSpace: "nowrap",
        },
        "& th": {
          p: 1,
        },
        "& .name,.serviceType": {
          textAlign: "start",
        },
        "& td": {
          textAlign: "center",
          p: 1,
          color: "#747474",
          whiteSpace: "nowrap",
        },
        "& .total-price": {
          fontWeight: 600,
          color: "secondary.main",
          display: "flex",
          justifyContent: "end",
          gap: 6,
          px: 2,
        },
        "& .qty": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        },
      }}
    >
      <table>
        <thead>
          <tr>
            <th className="name">Product</th>
            <th className="serviceType">Service Type</th>
            <th className="price">Pricing</th>
            <th className="qty">Quantity</th>
            <th className="estimated">Estimated</th>
          </tr>
        </thead>
        <tbody>
          {serviceState.wash.items.map((item) => (
            <tr>
              <td className="name">{item.name}</td>
              <td className="serviceType">
                {item.serviceType === "wash"
                  ? "Wash"
                  : item.serviceType === "washAndIron"
                  ? "Wash & Iron"
                  : item.serviceType === "ironing"
                  ? "Ironing"
                  : item.serviceType === "dryCleaning" && "Dry Clean"}
              </td>
              <td className="price">&#163; {item.price}</td>
              <td className="qty">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(decrementWashItem({ name: item.name }));
                  }}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  variant="contained"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(incrementWashItem({ name: item.name }));
                  }}
                >
                  +
                </Button>
              </td>
              <td className="estimated">&#163; {item.quantity * item.price}</td>
            </tr>
          ))}
          {serviceState.washAndIron.items.map((item) => (
            <tr>
              <td className="name">{item.name}</td>
              <td className="serviceType">
                {item.serviceType === "wash"
                  ? "Wash"
                  : item.serviceType === "washAndIron"
                  ? "Wash & Iron"
                  : item.serviceType === "ironing"
                  ? "Ironing"
                  : item.serviceType === "dryCleaning" && "Dry Clean"}
              </td>
              <td className="price">&#163; {item.price}</td>
              <td className="qty">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(decrementWashAndIronItem({ name: item.name }));
                  }}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  variant="contained"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(incrementWashAndIronItem({ name: item.name }));
                  }}
                >
                  +
                </Button>
              </td>
              <td className="estimated">&#163; {item.quantity * item.price}</td>
            </tr>
          ))}
          {serviceState.ironing.items.map((item) => (
            <tr>
              <td className="name">{item.name}</td>
              <td className="serviceType">
                {item.serviceType === "wash"
                  ? "Wash"
                  : item.serviceType === "washAndIron"
                  ? "Wash & Iron"
                  : item.serviceType === "ironing"
                  ? "Ironing"
                  : item.serviceType === "dryCleaning" && "Dry Clean"}
              </td>
              <td className="price">&#163; {item.price}</td>
              <td className="qty">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(decrementIroningItem({ name: item.name }));
                  }}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  variant="contained"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(incrementIroningItem({ name: item.name }));
                  }}
                >
                  +
                </Button>
              </td>
              <td> &#163; {item.quantity * item.price}</td>
            </tr>
          ))}
          {serviceState.dryCleaning.items.map((item) => (
            <tr>
              <td className="name">{item.name}</td>
              <td className="serviceType">
                {item.serviceType === "wash"
                  ? "Wash"
                  : item.serviceType === "washAndIron"
                  ? "Wash & Iron"
                  : item.serviceType === "ironing"
                  ? "Ironing"
                  : item.serviceType === "dryCleaning" && "Dry Clean"}
              </td>
              <td className="price">&#163; {item.price}</td>
              <td className="qty">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(decrementDryCleanItem({ name: item.name }));
                  }}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  variant="contained"
                  sx={{
                    p: 0,
                    height: 17,
                    width: 17,
                    minWidth: 17,
                    borderRadius: "2px",
                  }}
                  onClick={() => {
                    dispatch(incrementDryCleanItem({ name: item.name }));
                  }}
                >
                  +
                </Button>
              </td>
              <td className="estimated">&#163; {item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <div className="total-price">total Amount</div>
        <div className="total-price">
          {(
            serviceState.wash.items.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ) +
            serviceState.washAndIron.items.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ) +
            serviceState.ironing.items.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ) +
            serviceState.dryCleaning.items.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            )
          ).toFixed(2)}
        </div>
      </div>
    </Box>
  );
};

const Faq = () => {
  return (
    <>
      <Stack direction={"row"} alignItems="center" gap={2} padding={2}>
        <AiOutlineCheckCircle color="#00A5BF" size={25} />
        <Stack>
          <Typography variant="subtitle1" fontWeight={600}>
            Service Overview
          </Typography>
          <Typography color="text.muted">
            Lorem Ipsum has been the industry's standard{" "}
          </Typography>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};
