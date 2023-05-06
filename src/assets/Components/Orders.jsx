import {
  Button,
  Link,
  MenuItem,
  Modal,
  Select,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import { DatePicker } from "@mui/x-date-pickers";
import { BsCompass } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { demoOrderData } from "../DemoData/demoOrderData";
import TrackingModal from "./TrackingModal";

const Orders = () => {
  return (
    <Stack gap={2} pt={2} width={"100%"}>
      <Stack
        direction={["column", "row"]}
        gap={2}
        justifyContent={["space-between"]}
        alignItems={"start"}
      >
        <Typography variant="h45" fontWeight={600}>
          My Orders
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={["start", "space-between"]}
          width={["100%", "50%"]}
          gap={2}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="upcomming"
            size="small"
            sx={{
              height: 40,
              width: "50%",
            }}
          >
            <MenuItem value="upcomming">Upcomming</MenuItem>
            <MenuItem value="delivered">Delivered</MenuItem>
            <MenuItem value="confirmed">Confirmed</MenuItem>
          </Select>
          <DatePicker
            slotProps={{
              layout: {
                sx: {
                  "& .MuiPickersCalendarHeader-label": {
                    fontSize: "1.5rem",
                  },
                  "& .MuiTypography-root": {
                    fontSize: "1.5rem",
                  },
                  "& .MuiYearCalendar-root": {
                    fontSize: "1.5rem",
                  },
                },
              },
              day: {
                sx: {
                  fontSize: "1.5rem",
                },
              },
              toolbar: {
                sx: {
                  fontSize: "1.5rem",
                },
              },
              dialog: {
                sx: {
                  "& .MuiButtonBase-root": {
                    fontSize: "1.5rem",
                  },
                },
              },
              textField: {
                sx: {
                  "& .MuiInputBase-root": {
                    pl: 1,
                    height: 40,
                    width: ["41vw", "100%"],
                  },
                },
              },
            }}
          />
        </Stack>
      </Stack>
      <Stack spacing={3}>
        {demoOrderData.map((data) => (
          <OrderCard
            id={data.id}
            orderId={data.OrderId}
            collectionDate={data.collectionDate}
            collectionTime={data.collectionTime}
            deliveryDate={data.deliveryDate}
            deliveryTime={data.deliveryTime}
            status={data.status}
            address={data.address}
            total={data.total}
            items={data.items}
            trackingStatus={data.trackingStatus}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Orders;

const OrderCard = (prop) => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handelExpand = () => {
    setExpanded((state) => (state === true ? false : true));
  };

  const togelTrackingModal = () => {
    setModalOpen((state) => (state === true ? false : true));
  };

  return (
    <Stack
      border={1}
      sx={(theme) => ({
        border: 2,
        borderColor: "rgba(0, 165, 191, 0.2)",
        borderRadius: 4,
      })}
    >
      {/* Table */}
      <Stack
        direction={"row"}
        justifyContent="space-between"
        bgcolor="#F3F9FD"
        padding={2}
        flexWrap="wrap"
        sx={{
          borderRadius: 4,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Stack gap={0.5}>
          <Typography variant="body15" color="secondary.main" fontWeight={650}>
            Order Id
          </Typography>
          <Typography variant="body15" color="text.muted">
            {prop.orderId}
          </Typography>
        </Stack>
        <Stack gap={0.5}>
          <Typography variant="body15" color="secondary.main" fontWeight={650}>
            Collection
          </Typography>
          <Typography variant="body15" color="text.muted">
            {prop.collectionDate}
          </Typography>
          <Typography variant="body15" color="text.muted">
            {prop.collectionTime}
          </Typography>
        </Stack>
        <Stack gap={0.5}>
          <Typography variant="body15" color="secondary.main" fontWeight={650}>
            Delivery
          </Typography>
          <Typography variant="body15" color="text.muted">
            {prop.deliveryDate}
          </Typography>
          <Typography variant="body15" color="text.muted">
            {prop.deliveryTime}
          </Typography>
        </Stack>
        <Stack gap={0.5}>
          <Typography variant="body15" color="secondary.main" fontWeight={650}>
            OrderStatus
          </Typography>
          {prop.status === "processing" ? (
            <Stack>
              <Stack
                direction={"row"}
                gap={1}
                sx={{
                  cursor: "pointer",
                  "&>svg": {
                    color: "primary.main",
                  },
                }}
              >
                <Stack direction={"row"} gap={1} flexWrap="wrap">
                  <Typography variant="body15" color="text.muted">
                    Processing
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: 3,
                      fontSize: "0.75rem",
                      "&>svg": { color: "primary.main" },
                    }}
                    startIcon={<BsCompass size={".85rem"} />}
                    onClick={togelTrackingModal}
                  >
                    Track
                  </Button>
                  <TrackingModal
                    open={modalOpen}
                    handleClose={togelTrackingModal}
                    trackingStatus={prop.trackingStatus}
                  />
                </Stack>
              </Stack>
            </Stack>
          ) : prop.status === "delivered" ? (
            <Stack>
              <Stack direction={"row"} gap={1}>
                <Typography variant="body15" color="text.muted">
                  Delivered
                </Typography>

                <Stack
                  component={Link}
                  direction={"row"}
                  gap={1}
                  sx={{
                    cursor: "pointer",
                    "&>svg": {
                      color: "primary.main",
                    },
                  }}
                >
                  <AiOutlineDownload size={22} />
                  <Typography variant="body15" color="primary.main ">
                    Invoice
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ) : null}
        </Stack>
      </Stack>
      {/* total price and expand button */}
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        padding={2}
        gap={2}
        flexWrap={"wrap"}
      >
        <Stack color="primary.main" direction="row" gap={1} alignItems="center">
          <GoLocation />
          <Typography fontSize={12} color="secondary">
            {prop.address}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          width={["100%", "auto"]}
          gap={2}
          alignItems="center"
          justifyContent={["space-between", "start"]}
          alignSelf={"end"}
        >
          <Typography
            variant="subtitle15"
            fontWeight={650}
            color="secondary.main"
          >
            {" "}
            &#163; {prop.total}
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{
              width: 84,
              height: 24,
              fontSize: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0,
              gap: 1,
            }}
            onClick={handelExpand}
          >
            View More{" "}
            {expanded ? (
              <SlArrowDown className="rotate-180" />
            ) : (
              <SlArrowDown />
            )}
          </Button>
        </Stack>
      </Stack>
      {/* expandable area */}
      {expanded ? (
        <Stack>
          {/*table */}
          <Table>
            <thead>
              <tr>
                <th>Clothes</th>
                <th>Units</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {prop.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.units}</td>
                  <td> &#163; {item.amount}</td>
                </tr>
              ))}

              <tr>
                <td className="total-amount"></td>
                <td className="total-amount">Total Amount</td>
                <td className="total-amount"> &#163; {prop.total}</td>
              </tr>
            </tbody>
          </Table>
        </Stack>
      ) : null}
    </Stack>
  );
};

const Table = styled("table")(({ theme }) => ({
  borderTop: "1px solid rgba(0, 165, 191, 0.2)",
  "& th": {
    color: theme.palette.secondary.main,
  },
  "& td": {
    color: theme.palette.text.muted,
    textAlign: "center",
  },
  "& .total-amount": {
    backgroundColor: " #E4F4FF",
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
}));
