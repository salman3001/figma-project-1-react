import { Typography } from "@mui/material";

const Label = (prop) => {
  return (
    <Typography
      variant="body18"
      color="text.muted"
      component="label"
      htmlFor={prop.for}
    >
      {prop.titile}
    </Typography>
  );
};

export default Label;
