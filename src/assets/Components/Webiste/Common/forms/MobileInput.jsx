import { FormHelperText, TextField } from "@mui/material";

const MobileInput = (prop) => {
  return (
    <>
      <div className="flex">
        <select className="w-[30%] border-y rounded-l-lg border-l">
          <option value="+1" className="flex justify-center text-center">
            +1
          </option>
          <option value="+1" className="flex justify-center text-center">
            +2
          </option>
          <option value="+1" className="flex justify-center text-center">
            +3
          </option>
        </select>
        <TextField
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
