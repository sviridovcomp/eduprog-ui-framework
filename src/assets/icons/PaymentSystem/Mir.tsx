import { IconProps } from "@icons/IconProps";
import React, { FC } from "react";

const Mir: FC<IconProps> = ({ width = "2rem", height = "2rem" }) => {
  return (
    <div className="ui-icon" style={{ display: "flex", alignItems: "center" }}>
      <svg
        width="36"
        height="11"
        viewBox="0 0 36 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.71956 1.19315C6.00259 1.19143 6.84372 1.11427 7.20001 2.33901C7.44001 3.16401 7.82231 4.5154 8.34693 6.39317H8.56058C9.12318 4.41349 9.50965 3.0621 9.72001 2.33901C10.08 1.10151 10.98 1.19318 11.34 1.19318L14.1175 1.19318V9.99316H11.2866V4.80718H11.0968L9.51869 9.99316H7.38881L5.81073 4.80334H5.6209V9.99316H2.79001V1.19318L5.71956 1.19315ZM18.1826 1.19318V6.38302H18.4084L20.328 2.11545C20.7006 1.26619 21.4948 1.19318 21.4948 1.19318H24.2343V9.99318H21.3443V4.80334H21.1184L19.2365 9.07091C18.8639 9.91632 18.032 9.99318 18.032 9.99318H15.2926V1.19318H18.1826ZM34.2235 5.375C33.8203 6.53852 32.5544 7.3718 31.1527 7.3718H28.122V9.99318H25.3738V5.375H34.2235Z"
          fill="#0F754E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.2853 1.19318H25.2296C25.3738 3.15235 27.0303 4.82954 28.7451 4.82954H34.4144C34.7416 3.20123 33.6153 1.19318 31.2853 1.19318Z"
          fill="url(#paint0_linear_2_13)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_13"
            x1="34.47"
            y1="3.4806"
            x2="25.2296"
            y2="3.4806"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F5CD7" />
            <stop offset="1" stopColor="#02AEFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Mir;
