const SuccessfullyVarified = () => {
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
      <div className="bg-white px-32">
        <h1 className="w-full p-5 border-b text-end border-gray-300 border-opacity-20">
          <p>
            I already have an accound?{" "}
            <a className="text-[#00A5BF]" href="/login">
              Login
            </a>
          </p>
        </h1>
        <div className="flex flex-col justify-center items-center text-center gap-16 h-[90%]">
          <div className="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/success-icon.svg"}
              alt=""
            />
          </div>
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">Successfully Varified</h1>
            <p>
              To confirm your email address, tap the linkin the email we sent to
              ioaefhiahe@gmail.com
            </p>
          </div>
          <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl">
            <span>Login</span>{" "}
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
              className="h-4"
              alt=""
            />
          </button>
          <div className="grid grid-cols-2 p-2 border max-w-xs justify-content-center text-start rounded-lg">
            <div className="">
              <h3>Need Help</h3>
              <a href="" className="text-xs text-[#00A5BF]">
                Contact our support
              </a>
            </div>
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/check-circle-icon.png"
              }
              className="place-self-end self-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SuccessfullyVarified;
