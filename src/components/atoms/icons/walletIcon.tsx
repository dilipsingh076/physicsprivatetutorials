import * as React from "react";

const WalletIcon = ({...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <path
      d="M20.3333 9.5V7.2C20.3333 6.0799 20.3333 5.51984 20.1153 5.09202C19.9235 4.7157 19.6176 4.40974 19.2412 4.21799C18.8134 4 18.2533 4 17.1333 4H5.53325C4.41315 4 3.85309 4 3.42527 4.21799C3.04895 4.40973 2.74299 4.71569 2.55124 5.09202C2.33325 5.51984 2.33325 6.0799 2.33325 7.2V16.8C2.33325 17.9201 2.33325 18.4802 2.55124 18.908C2.74299 19.2843 3.04895 19.5903 3.42527 19.782C3.85309 20 4.41315 20 5.53325 20L17.1333 20C18.2534 20 18.8134 20 19.2412 19.782C19.6176 19.5903 19.9235 19.2843 20.1153 18.908C20.3333 18.4802 20.3333 17.9201 20.3333 16.8V14.5M15.3333 12C15.3333 11.5353 15.3333 11.303 15.3717 11.1098C15.5295 10.3164 16.1497 9.69624 16.9431 9.53843C17.1363 9.5 17.3686 9.5 17.8333 9.5H19.8333C20.2979 9.5 20.5302 9.5 20.7234 9.53843C21.5168 9.69624 22.137 10.3164 22.2948 11.1098C22.3333 11.303 22.3333 11.5353 22.3333 12C22.3333 12.4647 22.3333 12.697 22.2948 12.8902C22.137 13.6836 21.5168 14.3038 20.7234 14.4616C20.5302 14.5 20.2979 14.5 19.8333 14.5H17.8333C17.3686 14.5 17.1363 14.5 16.9431 14.4616C16.1497 14.3038 15.5295 13.6836 15.3717 12.8902C15.3333 12.697 15.3333 12.4647 15.3333 12Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WalletIcon;
