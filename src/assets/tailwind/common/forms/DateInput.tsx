import React from "react";

const DateInput = () => {
  return (
    <div className="relative">
      <label htmlFor="orderDate" className="absolute top-[25%] left-3">
        Date
      </label>
      <input
        type="date"
        name="orderDate"
        className="border  p-2 pl-16 rounded-lg"
        placeholder="2 Feb 2023 - 12 Feb 2023"
      />
    </div>
  );
};

export default DateInput;
