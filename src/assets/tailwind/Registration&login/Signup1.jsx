import React from "react";
import FormInput from "../common/forms/FormInput";
import Label from "../common/forms/Label";
import MobileInput from "../common/forms/MobileInput";

const Signup1 = () => {
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
              <div className="flex gap-8">
                <div className="flex justify-center items-center gap-4 font-bold">
                  <input
                    type="radio"
                    name="radio-4"
                    className="radio radio-accent"
                    id="individual-radio"
                    disabled
                  />
                  <label htmlFor="individual-radio">Individual </label>
                </div>
                <div className="flex justify-center items-center gap-4 font-bold">
                  <input
                    type="radio"
                    name="radio-4"
                    id="company-radio"
                    checked
                    className="radio radio-accent"
                  />
                  <label htmlFor="company-radio">Company </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label titile="Name" for="name" />
                  <FormInput name="name" placeholder="Williums" type="text" />
                </div>
                <div>
                  <Label titile="Surname" for="text" />
                  <FormInput name="name" placeholder="khan" type="text" />
                </div>
                <div>
                  <Label titile="Bussiness Email" for="email" />
                  <FormInput
                    name="email"
                    placeholder="jack@gmail.com"
                    type="email"
                  />
                </div>
                <div>
                  <Label titile="Mobile No" for="mobile" />
                  <MobileInput placeholder="2382810277" name="mobile" />
                </div>
                <div>
                  <Label titile="Company name" for="companyName" />
                  <FormInput
                    name="companyName"
                    placeholder="Al Marai"
                    type="text"
                  />
                </div>
                <div>
                  <Label titile="Tax Number" for="taxNumber" />
                  <FormInput
                    name="taxNumber"
                    placeholder="YIHG675G"
                    type="text"
                  />
                </div>
                <div>
                  <Label titile="Password" for="password" />
                  <FormInput
                    name="password"
                    placeholder="***"
                    type="password"
                  />
                </div>
                <div>
                  <Label titile="Confirm Password" for="confirmPassword" />
                  <FormInput
                    name="confirmPassword"
                    placeholder="******"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl">
              <span>Next</span>{" "}
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

export default Signup1;
