import { ReactNode } from "react";

const Model = (prop) => {
  return (
    <>
      <input
        type="checkbox"
        className="peer hidden h-0 w-0"
        id="modal-check"
        name="modal-check"
        defaultChecked={prop.default === "checked" ? false : true}
      />
      <div className="backdrop-brightness-50 p-5 md:p-10 flex  justify-center items-center fixed   h-screen w-full peer-checked:hidden visible z-50">
        <div className="grow max-w-2xl relative rounded-md max-h-[80%] bg-white flex flex-col m-auto p-12 gap-6 overflow-scroll scrollbar-hide">
          <label
            htmlFor="modal-check"
            className="absolute top-4 font-[10] cursor-pointer opacity-60 text-4xl right-6"
          >
            x
          </label>
          {prop.content}
        </div>
      </div>
    </>
  );
};

export default Model;
