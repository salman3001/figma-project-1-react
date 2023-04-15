const OrderCard = (prop) => {
  return (
    <div className="rounded-lg border ">
      <div className="promo-card-gradient ] grid grid-cols-4  gap-2 p-8 rounded-lg">
        <div className="col-span-4 md:col-span-2 xl:col-span-1 flex flex-col gap-1">
          <p className="font-bold text-[#03444F] opacity-90">Order Id</p>
          <p className="text-[#747474]">57905600HP0</p>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 flex flex-col gap-1">
          <p className="font-bold text-[#03444F] opacity-90">Collection</p>
          <p className="text-[#747474]">2 Feb 2023</p>
          <p className="text-[#747474]">12:00 PM - 14:00 PM</p>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 flex flex-col gap-1">
          <p className="font-bold text-[#03444F] opacity-90">Delivery</p>
          <p className="text-[#747474]">2 Feb 2023</p>
          <p className="text-[#747474]">12:00 PM - 14:00 PM</p>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 flex flex-col gap-1">
          <p className="font-bold text-[#03444F] opacity-90">Order status</p>

          {prop.status === "Processing" ? (
            <p className="text-[#747474]">
              Processing
              <label
                className="btn btn-sm bg-[#00A5BF] hover:bg-[#00A5BF] border-none normal-case rounded-full mx-4 "
                htmlFor="modal-check"
              >
                Track
              </label>
            </p>
          ) : (
            <p className="text-[#747474]">
              Delivered
              <button className="btn btn-sm  bg-transparent hover:bg-transparent border-none normal-case rounded-full mx-4 text-[#00A5BF] text-lg">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.575 10.65C2.03063 10.65 2.4 11.0194 2.4 11.475V14.775C2.4 14.9938 2.48692 15.2036 2.64164 15.3584C2.79635 15.5131 3.0062 15.6 3.225 15.6H14.775C14.9938 15.6 15.2036 15.5131 15.3584 15.3584C15.5131 15.2036 15.6 14.9938 15.6 14.775V11.475C15.6 11.0194 15.9694 10.65 16.425 10.65C16.8806 10.65 17.25 11.0194 17.25 11.475V14.775C17.25 15.4314 16.9892 16.0609 16.5251 16.5251C16.0609 16.9892 15.4314 17.25 14.775 17.25H3.225C2.56859 17.25 1.93906 16.9892 1.47491 16.5251C1.01076 16.0609 0.75 15.4314 0.75 14.775V11.475C0.75 11.0194 1.11937 10.65 1.575 10.65Z"
                    fill="#00A5BF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.29164 6.76664C4.61382 6.44445 5.13618 6.44445 5.45836 6.76664L9 10.3083L12.5416 6.76664C12.8638 6.44445 13.3862 6.44445 13.7084 6.76664C14.0305 7.08882 14.0305 7.61118 13.7084 7.93336L9.58336 12.0584C9.26118 12.3805 8.73882 12.3805 8.41664 12.0584L4.29164 7.93336C3.96945 7.61118 3.96945 7.08882 4.29164 6.76664Z"
                    fill="#00A5BF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 0.75C9.45564 0.75 9.825 1.11937 9.825 1.575V11.475C9.825 11.9306 9.45564 12.3 9 12.3C8.54436 12.3 8.175 11.9306 8.175 11.475V1.575C8.175 1.11937 8.54436 0.75 9 0.75Z"
                    fill="#00A5BF"
                  />
                </svg>
                Invoice
              </button>
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 px-8 py-2 gap-4">
        <div className="col-span-3 md:col-span-2 flex gap-2 ">
          <img
            src={import.meta.env.VITE_BASE_URL + "images/location 1.svg"}
            className="h-6"
            alt=""
          />
          <p className="text-[#03444F] text-xs">
            Nash Conversions Ltd, Unit 5, Shaftesbury Road, LONDON, E10 7DA
          </p>
        </div>
        <div className="col-span-3 md:col-span-1 place-self-end">
          <label
            className="btn btn-sm bg-[#00A5BF] hover:bg-[#00A5BF] border-none normal-case rounded-lg mx-4 gap-2"
            htmlFor={`oder-card-${prop.index}`}
          >
            View More
            <span className="rotate-90">&gt;</span>
          </label>
        </div>
      </div>
      <div className=" text-sx">
        <input
          type="checkbox"
          name={`oder-card-${prop.index}`}
          className="peer hidden"
          id={`oder-card-${prop.index}`}
          defaultChecked={prop.expanded === true ? false : true}
        />
        <div className="w-full h-full p-4 peer-checked:hidden border-t">
          <div className="flex justify-between text-[#03444F] font-bold opacity-90 ">
            <p>Collection</p>
            <p>Unit</p>
            <p>Amount</p>
          </div>
          <div className="flex justify-between text-[#03444F]  opacity-90 ">
            <p>T Shirt</p>
            <p>2</p>
            <p>12.99</p>
          </div>
          <div className="flex justify-between text-[#03444F] opacity-90 ">
            <p>T Shirt</p>
            <p>2</p>
            <p>12.99</p>
          </div>
          <div className="flex justify-between text-[#03444F]  opacity-90 ">
            <p>T Shirt</p>
            <p>2</p>
            <p>12.99</p>
          </div>
          <div className="flex justify-end py-1 mt-1 promo-card-gradient w-full h-full font-bold text-[#03444F] opacity-90">
            <p>Total Amount : &#xa3; 39.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
