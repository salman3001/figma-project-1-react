import React from "react";
import SearchInput from "./SearchInput";

const DashboardNav = (prop) => {
  return (
    <div className="flex relative justify-between px-4 items-center w-full h-20 shadow-lg">
      <div className="flex items-center gap-4">
        <label htmlFor="my-drawer" className=" drawer-button lg:hidden">
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/hamburger-menu-icon.svg"
            }
            className="h-6"
            alt=""
          />
        </label>
        <div className="flex xl:w-96 items-center gap-4 ">
          <p className="text-2xl font-bold hidden md:block w-52">
            {prop.title}
          </p>
          <SearchInput />
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <button className="btn-2  bg-[#00A5BF] border-none ">Order Now</button>
        {/* drop down notification*/}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/notification-btn.svg"
              }
              alt=""
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 gap-2 rounded-box w-64"
          >
            <li>
              <NotifyCard />
            </li>
            <li>
              <NotifyCard />
            </li>

            <a className="self-end text-[#00A5BF] cursor-pointer">View All</a>
          </ul>
        </div>
        {/* username */}
        <p className="hidden md:inline">Jackson Howell </p>
        {/* dropdown user*/}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/account-icon.svg"}
              alt=""
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/orders.svg"}
                  alt=""
                />
                <span>My Orders</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_39_137)">
                    <path
                      d="M21.3125 21.3125V28.0938L15.5 25.1875L9.6875 28.0938V21.3125"
                      stroke="#00A5BF"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.7281 2.90625H13.2719C11.2375 2.90625 9.3 3.97188 8.23438 5.8125L6.00625 9.6875C4.94063 11.5281 4.94063 13.6594 6.00625 15.5L8.23438 19.375C9.3 21.2156 11.2375 22.2812 13.2719 22.2812H17.7281C19.7625 22.2812 21.7 21.2156 22.7656 19.375L24.9937 15.5C26.0594 13.6594 26.0594 11.5281 24.9937 9.6875L22.7656 5.8125C21.7 3.97188 19.8594 2.90625 17.7281 2.90625Z"
                      stroke="#00A5BF"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5625 15.5L17.4375 9.6875"
                      stroke="#00A5BF"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5938 8.71875V11.625"
                      stroke="#00A5BF"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.4062 13.5625V16.4688"
                      stroke="#00A5BF"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_137">
                      <rect width="31" height="31" fill="#00A5BF" />
                    </clipPath>
                  </defs>
                </svg>

                <span>Promotions</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  width="21"
                  height="27"
                  viewBox="0 0 21 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3125 6.52513C16.3125 3.42513 13.7292 0.841797 10.5 0.841797C7.27083 0.841797 4.6875 3.42513 4.6875 6.52513C4.6875 9.62513 7.27083 12.2085 10.5 12.2085C13.7292 12.2085 16.3125 9.62513 16.3125 6.52513ZM7.27083 6.52513C7.27083 4.84596 8.69167 3.42513 10.5 3.42513C12.3083 3.42513 13.7292 4.84596 13.7292 6.52513C13.7292 8.2043 12.3083 9.62513 10.5 9.62513C8.69167 9.62513 7.27083 8.2043 7.27083 6.52513Z"
                    fill="#00A5BF"
                  />
                  <path
                    d="M0.94105 19.0544L0.295217 21.5086C-0.0922829 22.6711 0.16605 23.9627 0.94105 24.9961C1.71605 25.9002 2.74938 26.4169 4.04105 26.4169H16.9577C18.1202 26.4169 19.2827 25.9002 19.9285 24.8669C20.7035 23.8336 20.9619 22.5419 20.5744 21.3794L19.9285 18.9252C19.1535 15.6961 16.3119 13.5002 13.0827 13.5002H7.91605C4.68688 13.5002 1.84522 15.6961 0.94105 19.0544ZM2.74938 22.1544L3.39522 19.7002C4.04105 17.5044 5.84938 16.0836 7.91605 16.0836H13.0827C15.1494 16.0836 16.9577 17.5044 17.6035 19.7002L18.2494 22.1544C18.3785 22.5419 18.2494 23.0586 17.991 23.4461C17.8619 23.5752 17.4744 23.8336 16.9577 23.8336H4.04105C3.52438 23.8336 3.26605 23.5752 3.13688 23.3169C2.74938 23.0586 2.62022 22.5419 2.74938 22.1544Z"
                    fill="#00A5BF"
                  />
                </svg>
                <span>My Account</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5013 10.4168C13.6471 10.4168 14.5846 9.47933 14.5846 8.3335V4.16683C14.5846 3.021 13.6471 2.0835 12.5013 2.0835C11.3555 2.0835 10.418 3.021 10.418 4.16683V8.3335C10.418 9.47933 11.3555 10.4168 12.5013 10.4168Z"
                    fill="#00A5BF"
                  />
                  <path
                    d="M19.8965 5.10417C19.584 4.79167 19.2715 4.6875 18.7507 4.6875C17.9173 4.6875 17.1882 5.41667 17.1882 6.25C17.1882 6.66667 17.3965 7.08333 17.6048 7.39583C18.959 8.75 19.6882 10.5208 19.6882 12.5C19.6882 16.5625 16.459 19.7917 12.3965 19.7917C8.33398 19.7917 5.10482 16.5625 5.10482 12.5C5.10482 10.5208 5.93815 8.64583 7.29232 7.39583C7.60482 7.08333 7.81315 6.66667 7.81315 6.25C7.81315 5.41667 7.08398 4.6875 6.25065 4.6875C5.83398 4.6875 5.41732 4.89583 5.10482 5.10417C3.22982 6.97917 2.08398 9.58333 2.08398 12.5C2.08398 18.2292 6.77148 22.9167 12.5007 22.9167C18.2298 22.9167 22.9173 18.2292 22.9173 12.5C22.9173 9.58333 21.7715 6.97917 19.8965 5.10417Z"
                    fill="#00A5BF"
                  />
                </svg>

                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;

const NotifyCard = () => {
  return (
    <div className="bg-[#F3F9FD] flex flex-col items-start leading-3">
      <p className="font-bold">My Orders</p>
      <p className="text-[#00A5BF]">Delivered</p>
      <p className="opacity-40 text-xs">2 Feb 2023 - 20:24</p>
    </div>
  );
};
