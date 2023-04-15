const CheckSteper = (prop) => {
  return (
    <ol className="relative text-gray-500 border-l-0 border-[#00A5BF]">
      {prop.data.map((data, index, array) => (
        <li
          key={index}
          className={`pb-1 pl-6 border-l-2 ${
            data.completed
              ? "border-[#00A5BF] [&>span]:bg-[#00A5BF] [&>span]:ring-[#00A5BF]"
              : index < array.length - 1
              ? "border-gray-400 [&>span]:bg-gray-400 [&>span]:ring-gray-400"
              : "border-none [&>span]:bg-gray-400 [&>span]:ring-gray-400"
          }`}
        >
          <span className="absolute flex items-center justify-center w-5 h-5  rounded-full -left-2 ring-4 ">
            <svg
              aria-hidden="true"
              className="w-4 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          {data.child}
        </li>
      ))}
    </ol>
  );
};

export default CheckSteper;
