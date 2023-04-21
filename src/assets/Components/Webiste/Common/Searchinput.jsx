import React from "react";
import FormInput from "./forms/FormInput";

const Searchinput = () => {
  return (
    <form className="md:grow relative">
      <input
        name="search"
        placeholder="Search Order ID"
        type="text"
        className="md:w-[500px] h-[52px] md:h-[72px] rounded-lg border border-black opacity-40 text-xl p-2"
      />
      <button className="absolute right-3 top-3 md:top-1/3 ">
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
