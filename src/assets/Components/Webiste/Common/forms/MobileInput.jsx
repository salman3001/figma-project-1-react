import { FormHelperText, TextField, Typography } from "@mui/material";

const MobileInput = (prop) => {
  return (
    <>
      <div className="flex">
        <div className="w-[30%] flex border-y rounded-l-lg border-l bg-[#E7E6E6]">
          <div className="flex w-full h-auto justify-center flex-wrap items-center gap-2 ">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/flag.png"}
              alt=""
              className="w-6  h-auto"
            />
            <Typography variant="body2">+1</Typography>
          </div>
        </div>
        <TextField
          disabled={prop.disabled}
          fullWidth
          type="number"
          error={prop.error}
          name={prop.name}
          id={prop.name}
          value={prop.value}
          onChange={prop.onChange}
        />
      </div>
      <FormHelperText error={prop.error}>{prop.helperText}</FormHelperText>
    </>
  );
};

export default MobileInput;
