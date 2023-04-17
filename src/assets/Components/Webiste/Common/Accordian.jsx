import { Typography } from "@mui/material";

const Accordian = (prop) => {
  return (
    <details className="group ">
      <summary className="list-none before:content-[+] flex justify-between cursor-pointer font-bold ">
        <Typography variant="subtitle1" fontWeight={600}>
          {prop.title}
        </Typography>
        <span className="flex group-open:hidden justify-center h-4 w-4 items-center p-2 aspect-square  border rounded-full">
          <svg
            width="12"
            height="12"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="7"
              x2="17"
              y2="7"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="9"
              y1="14"
              x2="9"
              y2="1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <span className="hidden group-open:flex justify-center h-4 w-4 items-center p-2 aspect-square  border rounded-full">
          <svg
            width="12"
            height="12"
            viewBox="0 0 18 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="17"
              y2="1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </summary>
      <Typography>{prop.summery}</Typography>
    </details>
  );
};

export default Accordian;
