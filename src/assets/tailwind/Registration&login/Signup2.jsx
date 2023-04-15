import React from "react";
import FormInput from "../common/forms/FormInput";
import Label from "../common/forms/Label";
import MobileInput from "../common/forms/MobileInput";

const Signup2 = () => {
  return (
    <main className="grid container mx-auto lg:grid-cols-2 min-h-screen max-w-screen  ">
      <div className="bg-[#00A5BF] relative flex text-white flex-col justify-between  items-center">
        <h1 className="w-full p-6 border-b border-white border-opacity-20">
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
            }
            className="h-4 "
            alt=""
          />
        </h1>
        <div className="flex pt-8 flex-col items-center">
          <h1 className="text-4xl">Welcome back!</h1>
          <p className="opacity-80">See the latest system update on our blog</p>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Signupart.png"}
          alt=""
          className="self-start"
        />
      </div>
      <div className="bg-white ">
        <h1 className="w-full p-5 border-b text-end border-gray-300 border-opacity-20">
          <p>
            I already have an accound?
            <a className="text-[#00A5BF]" href="/login">
              Login
            </a>
          </p>
        </h1>
        <div className="flex flex-col  ">
          <div className="flex flex-col gap-16 justify-center items-center py-16 px-10 md:px-20 w-full  ">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Sign up to Laundramoon</h1>
              <p className="opacity-70 max-w-sm">
                Please fill in your details below and we will get in touch with
                you shortly.
              </p>
            </div>
            <div className="w-full flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label titile="Enter Landmark" for="landmark" />
                  <FormInput
                    name="landmark"
                    placeholder="Type here..."
                    type="text"
                  />
                </div>
                <div>
                  <Label titile="Enter Street" for="street" />
                  <FormInput
                    name="street"
                    placeholder="Type here..."
                    type="text"
                  />
                </div>
                <div>
                  <Label titile="Enter city" for="city" />
                  <FormInput
                    name="city"
                    placeholder="Type here..."
                    type="text"
                  />
                </div>
                <div>
                  <Label titile="Enter State" for="state" />
                  <FormInput
                    name="state"
                    placeholder="Type here..."
                    type="text"
                  />
                </div>
                <div>
                  <Label titile="Enter country" for="country" />
                  <FormInput
                    name="country"
                    placeholder="Type here..."
                    type="text"
                  />
                </div>
                <div>
                  <Label titile="Zipcode" for="zipcode" />
                  <FormInput
                    name="zipcode"
                    placeholder="Type here..."
                    type="number"
                  />
                </div>
              </div>
            </div>
            <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl">
              <span>Submit</span>{" "}
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                className="h-4"
                alt=""
              />
            </button>
            <div className="flex w-full">
              <label htmlFor="" className=" flex gap-2 label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info text-white"
                />
                <span>
                  By signing up, I agree to the Privacy Policy and Terms of
                  Service.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup2;
