import React from "react";

interface IselectInput {
  name: string;
  options: string[];
  default: string;
}

const SelectInput = (prop: IselectInput) => {
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
