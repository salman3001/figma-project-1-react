import React from "react";

const SelectInput = (prop) => {
  return (
    <select
      className="border p-2 rounded-lg"
      name={prop.name}
      id=""
      defaultValue={prop.default}
    >
      {prop.options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectInput;
