import FormInput from "../common/forms/FormInput";
import Label from "../common/forms/Label";
import OrDivider from "../common/OrDivider";

const Forgotpssword = () => {
  return (
    <main className="grid relative container mx-auto lg:grid-cols-2 min-h-screen  ">
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
          src={import.meta.env.VITE_BASE_URL + "/images/loginart.png"}
          alt=""
          className="self-start"
        />
      </div>
      <div className="bg-white ">
        <h1 className="w-full p-5 border-b text-end border-gray-300 border-opacity-20">
          <p>
            Don't have an account?{" "}
            <a className="text-[#00A5BF]" href="/signup">
              Signup
            </a>
          </p>
        </h1>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-16 justify-center items-center py-16 px-10 md:px-20 w-full  ">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Log in to Laundramoon</h1>
              <p className="opacity-70 text-xl">Log in to continue</p>
            </div>
            <div className="w-full">
              <div>
                <Label titile="Email Address" for="email" />
                <FormInput
                  name="email"
                  placeholder="Jackson@infomail.com"
                  type="text"
                />
              </div>
              <div>
                <Label titile="Password" for="password" />
                <FormInput
                  name="email"
                  placeholder="*********"
                  type="password"
                />
              </div>
              <a href="/forgotpassword">Forgot Password?</a>
            </div>
            <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl">
              <span>Login</span>{" "}
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                className="h-4"
                alt=""
              />
            </button>
            <OrDivider />
            <div className="flex gap-4">
              <button>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/google-btn.png"}
                  alt=""
                />
              </button>
              <button>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/fb-btn.png"}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* model */}
      <input
        type="checkbox"
        className="peer hidden h-0 w-0"
        id="modal-check"
        name="modal-check"
      />
      <div className="backdrop-brightness-50 p-10 flex  justify-center items-center fixed container  h-screen w-full peer-checked:hidden visible ">
        <div className="grow max-w-2xl relative rounded-md h-1/2 bg-white flex flex-col items-center justify-center p-16 gap-6">
          <label
            htmlFor="modal-check"
            className="absolute top-4 font-[10] cursor-pointer opacity-60 text-4xl right-6"
          >
            x
          </label>
          <h2 className="text-xl font-bold">Forgot Password?</h2>
          <p className="opacity-70 max-w-md text-center">
            Enter your registered login id below to get your unique link to
            reset the password.
          </p>
          <form className="flex flex-col gap-4  w-96">
            <Label titile="Email Address" for="email" />
            <FormInput name="email" placeholder="jack@ymail.com" type="email" />
            <button
              className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl"
              type="submit"
            >
              <span>Submit</span>{" "}
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                className="h-4"
                alt=""
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Forgotpssword;
