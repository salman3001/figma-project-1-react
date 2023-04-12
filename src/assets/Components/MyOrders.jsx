import {
  Button,
  Dialog,
  DialogContent,
  Link,
  MenuItem,
  Select,
  Slide,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import { DatePicker } from "@mui/x-date-pickers";
import { BsCompass } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { forwardRef, useState } from "react";
import { GoLocation } from "react-icons/go";
import { demoOrderData } from "../DemoData/demoOrderData";

const MyOrders = () => {
  return (
    <Stack gap={2}>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography variant="h4" fontWeight={600}>
          My Orders
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            size="small"
          >
            <MenuItem value={10}>Upcomming</MenuItem>
            <MenuItem value={20}>Delivered</MenuItem>
            <MenuItem value={30}>Confirmed</MenuItem>
          </Select>
          <DatePicker
            sx={{
              maxWidth: 200,
              padding: 0,
            }}
            size="small"
          />
        </Stack>
      </Stack>
      <Stack gap={2}>
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
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default MyOrders;

const OrderCard = (prop) => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handelExpand = () => {
    setExpanded((state) => (state === true ? false : true));
  };

  const togelTrackingModal = () => {
    setModalOpen((state) => (state === true ? false : true));
  };
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Stack
      border={1}
      sx={{
        borderColor: "rgba(0, 165, 191, 0.2)",
        borderRadius: 4,
      }}
    >
      {/* Table */}
      <Stack
        direction={"row"}
        justifyContent="space-between"
        bgcolor="#F3F9FD"
        padding={2}
        flexWrap="wrap"
      >
        <Stack gap={0.5}>
          <Typography color="secondary.main" fontWeight={650}>
            Order Id
          </Typography>
          <Typography color="text.muted">{prop.orderId}</Typography>
        </Stack>
        <Stack gap={0.5}>
          <Typography color="secondary.main" fontWeight={650}>
            Collection
          </Typography>
          <Typography color="text.muted">{prop.collectionDate}</Typography>
          <Typography color="text.muted">{prop.collectionTime}</Typography>
        </Stack>
        <Stack gap={0.5}>
          <Typography color="secondary.main" fontWeight={650}>
            Delivery
          </Typography>
          <Typography color="text.muted">{prop.deliveryDate}</Typography>
          <Typography color="text.muted">{prop.deliveryTime}</Typography>
        </Stack>
        <Stack gap={0.5}>
          <Typography color="secondary.main" fontWeight={650}>
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
                  <Typography color="text.muted">Processing</Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      px: 1,
                      borderRadius: 3,
                      fontSize: 8,
                      "&>svg": { color: "primary.main" },
                    }}
                    startIcon={<BsCompass size={12} />}
                    onClick={togelTrackingModal}
                  >
                    Track
                  </Button>
                  <TrackingModal
                    open={modalOpen}
                    transition={Transition}
                    handleClose={togelTrackingModal}
                  />
                </Stack>
              </Stack>
            </Stack>
          ) : prop.status === "delivered" ? (
            <Stack>
              <Stack direction={"row"} gap={1}>
                <Typography color="text.muted">Delivered</Typography>

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
                  <Typography color="primary.main ">Invoice</Typography>
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
      >
        <Stack
          color="primary.main"
          direction="row"
          maxWidth={400}
          gap={1}
          alignItems="center"
        >
          <GoLocation />
          <Typography>{prop.address}</Typography>
        </Stack>
        <Stack direction={"row"} gap={2} alignItems="center">
          <Typography
            variant="subtitle1"
            fontWeight={650}
            color="secondary.main"
          >
            {" "}
            &#163; {prop.total}
          </Typography>
          <Button
            size="small"
            variant="contained"
            endIcon={<SlArrowDown />}
            onClick={handelExpand}
          >
            View More
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

const TrackingModal = (prop) => (
  <Dialog
    open={prop.open}
    TransitionComponent={prop.transition}
    keepMounted
    onClose={prop.handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent>kjekj</DialogContent>
  </Dialog>
);
