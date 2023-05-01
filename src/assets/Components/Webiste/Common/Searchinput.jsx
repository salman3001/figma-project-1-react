import React from "react";
import FormInput from "./forms/FormInput";

const Searchinput = () => {
  return (
    <form className="md:grow relative">
      <input
        name="search"
        placeholder="Search Order ID"
        type="text"
        className="md:w-[400px] w-96 h-[40px] md:h-[48px] rounded-lg border border-black opacity-40 text-xl p-2 pl-4"
      />
      <button className="absolute right-6 top-1/2 -translate-y-1/2 ">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/magnifier.svg"}
          alt=""
          className="h-8"
        />
      </button>
    </form>
  );
};

export default Searchinput;
