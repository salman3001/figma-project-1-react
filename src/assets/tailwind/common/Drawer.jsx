import { ReactNode } from "react";
import Model from "./Model";

function Drawer(prop) {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content scrollbar-hide">
          {/* <!-- Page content here --> */}
          {prop.content}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="menu flex flex-col justify-between items-center p-4 w-80 bg-[#03444F] text-white">
            {/* <!-- Sidebar content here --> */}
            {/* logo*/}
            <div className="w-full flex flex-col py-2 items-center justify-center">
              <img
                src={
                  import.meta.env.VITE_BASE_URL +
                  "/images/launder-logo-white.svg"
                }
                alt=""
                className="h-5"
              />
              <div className="border-white border-b w-full py-3  opacity-30"></div>
            </div>
            <div className="flex grow w-full  flex-col  items-center gap-5 py-8 ">
              {/* avatar */}
              <div className="rounded-full ring-4 p-1 overflow-hidden ring-white ">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/Avatar.png"}
                  alt=""
                />
              </div>
              <p className="text-2xl font-bold">Jackson Howell </p>

              <ul className="w-48">
                <li className="">
                  <a
                    className={`flex  items-center ${
                      prop.active === "orders"
                        ? "font-bold [&>svg>path]:fill-[#00A5BF] [&>svg]:bg-white"
                        : " [&>svg>path]:fill-white [&>svg]:bg-gray-400"
                    } w-full  [&>svg]:rounded-lg [&>svg]:p-1`}
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8418 3.70679H19.0619V9.02499C19.0619 9.26419 18.9669 9.4936 18.7977 9.66274C18.6286 9.83188 18.3992 9.92691 18.16 9.92691H13.7437C13.5045 9.92691 13.2751 9.83188 13.106 9.66274C12.9368 9.4936 12.8418 9.26419 12.8418 9.02499V3.70679Z"
                        fill="#00A5BF"
                      />
                      <path
                        d="M25.2551 28.8373H6.15048C5.20044 28.8373 4.28932 28.4599 3.61754 27.7881C2.94576 27.1163 2.56836 26.2052 2.56836 25.2551V6.15048C2.56836 5.20044 2.94576 4.28932 3.61754 3.61754C4.28932 2.94576 5.20044 2.56836 6.15048 2.56836H25.2551C26.2052 2.56836 27.1163 2.94576 27.7881 3.61754C28.4599 4.28932 28.8373 5.20044 28.8373 6.15048V25.2551C28.8373 26.2052 28.4599 27.1163 27.7881 27.7881C27.1163 28.4599 26.2052 28.8373 25.2551 28.8373ZM6.15048 4.95644C5.8338 4.95644 5.53009 5.08224 5.30617 5.30617C5.08224 5.53009 4.95644 5.8338 4.95644 6.15048V25.2551C4.95644 25.5718 5.08224 25.8755 5.30617 26.0994C5.53009 26.3234 5.8338 26.4492 6.15048 26.4492H25.2551C25.5718 26.4492 25.8755 26.3234 26.0994 26.0994C26.3234 25.8755 26.4492 25.5718 26.4492 25.2551V6.15048C26.4492 5.8338 26.3234 5.53009 26.0994 5.30617C25.8755 5.08224 25.5718 4.95644 25.2551 4.95644H6.15048Z"
                        fill="#00A5BF"
                      />
                      <path
                        d="M10.9259 24.7553H8.53779C8.22111 24.7553 7.9174 24.6295 7.69348 24.4055C7.46955 24.1816 7.34375 23.8779 7.34375 23.5612C7.34375 23.2445 7.46955 22.9408 7.69348 22.7169C7.9174 22.493 8.22111 22.3672 8.53779 22.3672H10.9259C11.2426 22.3672 11.5463 22.493 11.7702 22.7169C11.9941 22.9408 12.1199 23.2445 12.1199 23.5612C12.1199 23.8779 11.9941 24.1816 11.7702 24.4055C11.5463 24.6295 11.2426 24.7553 10.9259 24.7553Z"
                        fill="#00A5BF"
                      />
                      <path
                        d="M23.8673 24.7553H21.4792C21.1625 24.7553 20.8588 24.6295 20.6349 24.4055C20.411 24.1816 20.2852 23.8779 20.2852 23.5612C20.2852 23.2445 20.411 22.9408 20.6349 22.7169C20.8588 22.493 21.1625 22.3672 21.4792 22.3672H23.8673C24.184 22.3672 24.4877 22.493 24.7116 22.7169C24.9355 22.9408 25.0613 23.2445 25.0613 23.5612C25.0613 23.8779 24.9355 24.1816 24.7116 24.4055C24.4877 24.6295 24.184 24.7553 23.8673 24.7553Z"
                        fill="#00A5BF"
                      />
                      <path
                        d="M23.8667 19.757H19.0905C18.7738 19.757 18.4701 19.6312 18.2462 19.4073C18.0223 19.1833 17.8965 18.8796 17.8965 18.5629C17.8965 18.2463 18.0223 17.9425 18.2462 17.7186C18.4701 17.4947 18.7738 17.3689 19.0905 17.3689H23.8667C24.1834 17.3689 24.4871 17.4947 24.711 17.7186C24.9349 17.9425 25.0607 18.2463 25.0607 18.5629C25.0607 18.8796 24.9349 19.1833 24.711 19.4073C24.4871 19.6312 24.1834 19.757 23.8667 19.757Z"
                        fill="# "
                      />
                      <path
                        d="M23.8661 14.9809H16.7019C16.3852 14.9809 16.0815 14.8551 15.8575 14.6311C15.6336 14.4072 15.5078 14.1035 15.5078 13.7868C15.5078 13.4701 15.6336 13.1664 15.8575 12.9425C16.0815 12.7186 16.3852 12.5928 16.7019 12.5928H23.8661C24.1828 12.5928 24.4865 12.7186 24.7104 12.9425C24.9343 13.1664 25.0601 13.4701 25.0601 13.7868C25.0601 14.1035 24.9343 14.4072 24.7104 14.6311C24.4865 14.8551 24.1828 14.9809 23.8661 14.9809Z"
                        fill="#00A5BF"
                      />
                    </svg>

                    <p>Orders</p>
                  </a>
                </li>
                <li className="">
                  <a
                    className={`flex  items-center ${
                      prop.active === "promo" && "font-bold  "
                    } w-full  `}
                  >
                    {prop.active === "promo" ? (
                      <img
                        src="/images/promo-blue.svg"
                        className="bg-white rounded-lg p-1"
                        alt=""
                      />
                    ) : (
                      <img
                        src="/images/promo.svg"
                        className="bg-gray-400 rounded-lg p-1"
                        alt=""
                      />
                    )}
                    <p>promotions</p>
                  </a>
                </li>
                <li className="">
                  <a
                    className={`flex  items-center ${
                      prop.active === "myAccount"
                        ? "font-bold [&>svg>path]:fill-[#00A5BF] [&>svg]:bg-white"
                        : "[&>svg]:bg-gray-400"
                    } w-full  [&>svg]:rounded-lg [&>svg]:p-1`}
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 21 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-gray-400 rounded-lg p-1"
                    >
                      <path
                        d="M16.3125 6.52513C16.3125 3.42513 13.7292 0.841797 10.5 0.841797C7.27083 0.841797 4.6875 3.42513 4.6875 6.52513C4.6875 9.62513 7.27083 12.2085 10.5 12.2085C13.7292 12.2085 16.3125 9.62513 16.3125 6.52513ZM7.27083 6.52513C7.27083 4.84596 8.69167 3.42513 10.5 3.42513C12.3083 3.42513 13.7292 4.84596 13.7292 6.52513C13.7292 8.2043 12.3083 9.62513 10.5 9.62513C8.69167 9.62513 7.27083 8.2043 7.27083 6.52513Z"
                        fill="white"
                      />
                      <path
                        d="M0.94105 19.0544L0.295217 21.5086C-0.0922829 22.6711 0.16605 23.9627 0.94105 24.9961C1.71605 25.9002 2.74938 26.4169 4.04105 26.4169H16.9577C18.1202 26.4169 19.2827 25.9002 19.9285 24.8669C20.7035 23.8336 20.9619 22.5419 20.5744 21.3794L19.9285 18.9252C19.1535 15.6961 16.3119 13.5002 13.0827 13.5002H7.91605C4.68688 13.5002 1.84522 15.6961 0.94105 19.0544ZM2.74938 22.1544L3.39522 19.7002C4.04105 17.5044 5.84938 16.0836 7.91605 16.0836H13.0827C15.1494 16.0836 16.9577 17.5044 17.6035 19.7002L18.2494 22.1544C18.3785 22.5419 18.2494 23.0586 17.991 23.4461C17.8619 23.5752 17.4744 23.8336 16.9577 23.8336H4.04105C3.52438 23.8336 3.26605 23.5752 3.13688 23.3169C2.74938 23.0586 2.62022 22.5419 2.74938 22.1544Z"
                        fill="white"
                      />
                    </svg>

                    <p>My Account</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col pb-4 w-full justify-center items-center">
              <div className="border-white border-t py-3 w-full opacity-30"></div>
              <a className="flex justify-center items-center max-w-min gap-4 cursor-pointer">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/logout.svg"}
                  className="p-2 bg-[#00A5BF] rounded-full"
                />
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
        <Model default={prop.modelstate} content={prop.modelContent} />
      </div>
    </>
  );
}

export default Drawer;
