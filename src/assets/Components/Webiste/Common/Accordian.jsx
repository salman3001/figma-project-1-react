import { Typography } from "@mui/material";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Accordian = (prop) => {
  return (
    <details className="group ">
      <summary className="list-none before:content-[+] flex justify-between cursor-pointer font-bold ">
        <Typography variant="subtitle28">{prop.title}</Typography>
        <span className="flex group-open:hidden ">
          <CiCirclePlus
            size={35}
            style={{
              fontWeight: 10,
            }}
          />
        </span>
        <span className="hidden group-open:flex ">
          <CiCircleMinus size={35} />
        </span>
      </summary>
      <Typography variant="body24" color="text.muted" paddingTop={1}>
        {prop.summery}
      </Typography>
    </details>
  );
};

export default Accordian;
