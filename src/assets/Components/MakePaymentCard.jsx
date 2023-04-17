import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { BsArrowRight, BsInfoLg } from "react-icons/bs";

const MakePaymentCard = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        p: 2,
        border: 1,
        borderColor: "rgba(0, 0, 0, 0.16)",
        borderRadius: 2,
      }}
    >
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography variant="subtitle1" fontWeight={600} color="secondary">
          Pay Now
        </Typography>
        <Typography variant="subtitle1" fontWeight={600} color="secondary">
          {" "}
          &#163; 75
        </Typography>
      </Stack>
      <Stack color="text.muted">
        <table>
          <tr>
            <td className="flex items-center gap-1 ">
              <Typography>Minimum Order</Typography>
              <div className="p-0.5 rounded-full bg-[#03444F] hover:cursor-pointer">
                <BsInfoLg color="white" size={15} />
              </div>
            </td>
            <td className="text-end">&#163; 12.99</td>
          </tr>
          <tr>
            <td className="flex items-center gap-1 ">
              <Typography>Service fee</Typography>
              <div className="p-0.5 rounded-full bg-[#03444F] hover:cursor-pointer">
                <BsInfoLg color="white" size={15} />
              </div>
            </td>
            <td className="text-end">&#163; 12.99</td>
          </tr>
          <tr>
            <td className="flex items-center gap-1 ">
              <Typography>collection & delivery</Typography>
              <div className="p-0.5 rounded-full bg-[#03444F] hover:cursor-pointer">
                <BsInfoLg color="white" size={15} />
              </div>
            </td>
            <td className="text-end">&#163; 12.99</td>
          </tr>
        </table>
      </Stack>
      <Stack>
        <Button sx={{ alignSelf: "end" }}>Apply Coupon</Button>
        <TextField />
        <Button disabled sx={{ alignSelf: "start" }}>
          Apply Coupon
        </Button>
      </Stack>
      <Button
        variant="contained"
        size="large"
        sx={{
          textTransform: "none",
          fontSize: 20,
        }}
        endIcon={<BsArrowRight />}
        onClick={() => {
          alert(
            "All data has been recorded, Need payment Api and server api for further development."
          );
        }}
      >
        Make Payment
      </Button>
    </Stack>
  );
};

export default MakePaymentCard;
