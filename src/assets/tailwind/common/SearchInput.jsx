import React from "react";
import FormInput from "./forms/FormInput";

const SearchInput = () => {
  return (
    <form className="md:grow absolute top-[90px] xl:top-0 left-5 sm:left-8 md:left-10 xl:left-0  w-[90%] xl:relative">
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

export default SearchInput;
