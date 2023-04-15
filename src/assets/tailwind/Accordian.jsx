const Accordian = (prop) => {
  return (
    <details className="group ">
      <summary className="list-none before:content-[+] flex justify-between cursor-pointer font-bold text-lg">
        <span>{prop.title}</span>
        <span className="flex group-open:hidden justify-center items-center p-2 aspect-square  border rounded-full">
          <svg
            width="18"
            height="15"
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
        <span className="hidden group-open:flex justify-center items-center p-2 aspect-square  border rounded-full">
          <svg
            width="18"
            height="2"
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
      <p className="opacity-60">{prop.summery}</p>
    </details>
  );
};

export default Accordian;
