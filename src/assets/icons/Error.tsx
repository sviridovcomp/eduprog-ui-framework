import React, { FC } from "react";
import { IconProps } from "@icons/IconProps";

const Error: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#ef3124",
}) => {
  return (
    <div className="ui-icon" style={{ width: width, height: height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        color={color}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
      </svg>
    </div>
  );
};

export default Error;