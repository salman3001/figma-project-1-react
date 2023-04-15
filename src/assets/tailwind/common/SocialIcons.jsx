const SocialIcons = (prop) => {
  return (
    <div className={`flex gap-2 ${prop.align}`}>
      {/* fb */}
      <a href="">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_155_529)">
            <rect width="38" height="38" fill="none" />
            <path
              d="M33.25 0H4.75C2.12665 0 0 2.12665 0 4.75V33.25C0 35.8734 2.12665 38 4.75 38H33.25C35.8734 38 38 35.8734 38 33.25V4.75C38 2.12665 35.8734 0 33.25 0Z"
              fill={prop.color1}
            />
            <path
              d="M21.2997 33.8437V20.3016H25.8451L26.5257 15.0245H21.2998V11.6553C21.2998 10.1273 21.7244 9.0859 23.9149 9.0859L26.7096 9.08507V4.36465C26.2265 4.2998 24.5679 4.15625 22.6374 4.15625C18.6082 4.15625 15.8501 6.61629 15.8501 11.1327V15.0245H11.293V20.3016H15.85V33.8438L21.2997 33.8437Z"
              fill={prop.color2}
            />
          </g>
          <defs>
            <clipPath id="clip0_155_529">
              <rect width="38" height="38" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      {/* twitter */}
      <a href="">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_155_533)">
            <rect width="38" height="38" fill="#00A5BF" />
            <path
              d="M33.25 38H4.75C2.128 38 0 35.872 0 33.25V4.75C0 2.128 2.128 0 4.75 0H33.25C35.872 0 38 2.128 38 4.75V33.25C38 35.872 35.872 38 33.25 38Z"
              fill={prop.color1}
            />
            <path
              d="M14.5903 28.6517C23.5488 28.6517 28.4508 21.2227 28.4508 14.7912C28.4508 14.5822 28.4508 14.3732 28.4413 14.1642C29.3913 13.4802 30.2178 12.6157 30.8733 11.6372C29.9993 12.0267 29.0588 12.2832 28.0708 12.4067C29.0778 11.8082 29.8473 10.8487 30.2178 9.70866C29.2773 10.2692 28.2323 10.6682 27.1208 10.8867C26.2278 9.93666 24.9643 9.34766 23.5678 9.34766C20.8793 9.34766 18.6943 11.5327 18.6943 14.2212C18.6943 14.6012 18.7418 14.9717 18.8178 15.3327C14.7708 15.1332 11.1798 13.1857 8.77631 10.2407C8.35831 10.9627 8.12081 11.7987 8.12081 12.6917C8.12081 14.3827 8.98531 15.8742 10.2868 16.7482C9.48881 16.7197 8.73831 16.5012 8.08281 16.1402V16.2067C8.08281 18.5627 9.76431 20.5387 11.9873 20.9852C11.5788 21.0992 11.1513 21.1562 10.7048 21.1562C10.3913 21.1562 10.0873 21.1277 9.79281 21.0707C10.4103 23.0087 12.2153 24.4147 14.3433 24.4527C12.6713 25.7637 10.5718 26.5427 8.29181 26.5427C7.90231 26.5427 7.51281 26.5237 7.13281 26.4762C9.27981 27.8442 11.8448 28.6517 14.5903 28.6517Z"
              fill={prop.color2}
            />
          </g>
          <defs>
            <clipPath id="clip0_155_533">
              <rect width="38" height="38" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      {/* insta */}
      <a href="">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_155_537)">
            <rect width="38" height="38" fill={prop.color2} />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.3573 0C35.9197 0 38 2.08035 38 4.64268V33.3573C38 35.9197 35.9197 38 33.3573 38H4.64268C2.08035 38 0 35.9197 0 33.3573V4.64268C0 2.08035 2.08028 0 4.64268 0L33.3573 0ZM19 6.01172C15.4726 6.01172 15.0303 6.02664 13.645 6.08987C12.2625 6.15296 11.3184 6.3725 10.4922 6.69364C9.63805 7.02555 8.91375 7.46967 8.19167 8.19167C7.4696 8.91375 7.02547 9.63812 6.69357 10.4922C6.3725 11.3184 6.15296 12.2625 6.0898 13.645C6.02664 15.0303 6.01172 15.4726 6.01172 19C6.01172 22.5274 6.02664 22.9697 6.0898 24.355C6.15296 25.7375 6.3725 26.6816 6.69357 27.5078C7.02547 28.3619 7.4696 29.0863 8.19167 29.8083C8.91375 30.5304 9.63805 30.9745 10.4922 31.3064C11.3184 31.6275 12.2625 31.847 13.645 31.9101C15.0303 31.9734 15.4726 31.9883 19 31.9883C22.5274 31.9883 22.9697 31.9734 24.355 31.9101C25.7375 31.847 26.6816 31.6275 27.5078 31.3064C28.3619 30.9745 29.0863 30.5304 29.8083 29.8083C30.5304 29.0863 30.9745 28.3619 31.3064 27.5078C31.6275 26.6816 31.847 25.7375 31.9101 24.355C31.9734 22.9697 31.9883 22.5274 31.9883 19C31.9883 15.4726 31.9734 15.0303 31.9101 13.645C31.847 12.2625 31.6275 11.3184 31.3064 10.4922C30.9745 9.63812 30.5304 8.91375 29.8083 8.19167C29.0863 7.46967 28.3619 7.02555 27.5078 6.69364C26.6816 6.3725 25.7375 6.15296 24.355 6.08987C22.9697 6.02664 22.5274 6.01172 19 6.01172ZM19 8.35198C22.468 8.35198 22.8788 8.3652 24.2484 8.42769C25.5147 8.4855 26.2024 8.6971 26.6601 8.87486C27.2664 9.1105 27.699 9.39201 28.1535 9.84645C28.6081 10.301 28.8895 10.7337 29.1251 11.3399C29.303 11.7976 29.5146 12.4853 29.5723 13.7516C29.6348 15.1212 29.6481 15.532 29.6481 19C29.6481 22.468 29.6348 22.8788 29.5723 24.2484C29.5146 25.5147 29.303 26.2024 29.1251 26.6601C28.8895 27.2664 28.6081 27.699 28.1535 28.1535C27.699 28.6081 27.2664 28.8895 26.6601 29.1251C26.2024 29.303 25.5147 29.5146 24.2484 29.5723C22.879 29.6348 22.4682 29.6481 19 29.6481C15.5318 29.6481 15.121 29.6348 13.7516 29.5723C12.4853 29.5146 11.7976 29.303 11.3399 29.1251C10.7336 28.8895 10.301 28.6081 9.84645 28.1535C9.39194 27.699 9.11043 27.2664 8.87486 26.6601C8.69703 26.2024 8.48543 25.5147 8.42761 24.2484C8.36512 22.8788 8.35191 22.468 8.35191 19C8.35191 15.532 8.36512 15.1212 8.42761 13.7516C8.48543 12.4853 8.69703 11.7976 8.87486 11.3399C9.11043 10.7337 9.39194 10.301 9.84645 9.84645C10.301 9.39201 10.7336 9.1105 11.3399 8.87486C11.7976 8.6971 12.4853 8.4855 13.7516 8.42769C15.1212 8.3652 15.532 8.35198 19 8.35198ZM19 12.3303C15.3164 12.3303 12.3303 15.3164 12.3303 19C12.3303 22.6835 15.3164 25.6697 19 25.6697C22.6835 25.6697 25.6697 22.6835 25.6697 19C25.6697 15.3164 22.6835 12.3303 19 12.3303ZM19 23.3294C16.6089 23.3294 14.6706 21.3911 14.6706 19C14.6706 16.6089 16.6089 14.6706 19 14.6706C21.3911 14.6706 23.3294 16.6089 23.3294 19C23.3294 21.3911 21.3911 23.3294 19 23.3294ZM27.4918 12.0669C27.4918 12.9276 26.7939 13.6254 25.9331 13.6254C25.0724 13.6254 24.3746 12.9276 24.3746 12.0669C24.3746 11.2061 25.0724 10.5083 25.9331 10.5083C26.7939 10.5083 27.4918 11.2061 27.4918 12.0669Z"
              fill={prop.color1}
            />
          </g>
          <defs>
            <clipPath id="clip0_155_537">
              <rect width="38" height="38" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      {/* linked in */}
      <a href="">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_155_539)">
            <rect width="38" height="38" fill="#00A5BF" />
            <path
              d="M38 35.625C38 36.936 36.936 38 35.625 38H2.375C1.064 38 0 36.936 0 35.625V2.375C0 1.064 1.064 0 2.375 0H35.625C36.936 0 38 1.064 38 2.375V35.625Z"
              fill={prop.color1}
            />
            <path
              d="M13.0625 13.0625H8.3125V29.6875H13.0625V13.0625Z"
              fill={prop.color2}
            />
            <path
              d="M24.3426 13.0625C21.0283 13.0625 20.4583 14.2714 20.1875 15.4375V13.0625H15.4375V29.6875H20.1875V20.1875C20.1875 18.6473 21.0223 17.8125 22.5625 17.8125C24.0659 17.8125 24.9375 18.6295 24.9375 20.1875V29.6875H29.6875V21.375C29.6875 16.625 29.0688 13.0625 24.3426 13.0625Z"
              fill={prop.color2}
            />
            <path
              d="M10.6875 11.875C11.9992 11.875 13.0625 10.8117 13.0625 9.5C13.0625 8.18832 11.9992 7.125 10.6875 7.125C9.37582 7.125 8.3125 8.18832 8.3125 9.5C8.3125 10.8117 9.37582 11.875 10.6875 11.875Z"
              fill={prop.color2}
            />
          </g>
          <defs>
            <clipPath id="clip0_155_539">
              <rect width="38" height="38" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      {/* pintrest */}
      <a href="">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_155_546)">
            <rect width="38" height="38" fill="#00A5BF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.22222 38H33.7778C36.1096 38 38 36.1096 38 33.7778V4.22222C38 1.89035 36.1096 0 33.7778 0H4.22222C1.89035 0 0 1.89035 0 4.22222V33.7778C0 36.1096 1.89035 38 4.22222 38Z"
              fill={prop.color1}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.7117 24.6431C19.1437 24.6431 17.6687 23.7929 17.1633 22.8288C17.1633 22.8288 16.3196 26.1811 16.1418 26.8284C15.5138 29.1152 13.6635 31.4036 13.5195 31.59C13.4199 31.7211 13.1984 31.6799 13.1754 31.5084C13.1351 31.2164 12.6634 28.331 13.2182 25.9774C13.4964 24.7956 15.0866 18.0483 15.0866 18.0483C15.0866 18.0483 14.6224 17.1189 14.6224 15.7458C14.6224 13.5893 15.8702 11.9796 17.4242 11.9796C18.7445 11.9796 19.3832 12.9733 19.3832 14.1641C19.3832 15.4951 18.5371 17.4834 18.1 19.3281C17.737 20.8719 18.8745 22.1303 20.3923 22.1303C23.1439 22.1303 24.9976 18.5893 24.9976 14.3934C24.9976 11.2052 22.855 8.81786 18.9544 8.81786C14.55 8.81786 11.8033 12.1091 11.8033 15.7871C11.8033 17.0537 12.177 17.9493 12.7622 18.6404C13.0314 18.9587 13.0684 19.0865 12.9713 19.451C12.9005 19.719 12.7416 20.3639 12.675 20.6196C12.5778 20.9882 12.2799 21.1201 11.9473 20.9832C9.92004 20.1545 8.97266 17.9271 8.97266 15.4242C8.97266 11.291 12.4535 6.33398 19.3536 6.33398C24.8988 6.33398 28.5484 10.3534 28.5484 14.6696C28.5484 20.3788 25.3811 24.6431 20.7117 24.6431Z"
              fill={prop.color2}
            />
          </g>
          <defs>
            <clipPath id="clip0_155_546">
              <rect width="38" height="38" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
