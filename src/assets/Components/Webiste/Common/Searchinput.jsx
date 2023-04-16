import React from "react";
import FormInput from "./forms/FormInput";

const Searchinput = () => {
  return (
    <form className="md:grow relative">
      <FormInput name="search" placeholder="Search Order ID" type="text" />
      <button className="absolute right-2  top-1/3 h-6">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/magnifier.svg"}
          alt=""
          className=""
        />
      </button>
    </form>
  );
};

export default Searchinput;
