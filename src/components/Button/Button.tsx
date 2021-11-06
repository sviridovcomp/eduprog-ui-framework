import React, { FC, useState } from "react";
import "./Button.scss";

export type ButtonPropsType = {
  color?: "primary" | "secondary" | "accent" | "success" | "danger";
  type?: "default" | "action" | "link" | "pseudo" | "clear" | "raised";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonPropsType> = ({
  children,
  color= "primary",
  type = "default",
  size = "md",
  onClick,
}) => {
  const [active, setActive] = useState(false);

  const rootClasses = [
    "Button",
    `Button-color_${color}`,
    `Button-type_${type}`,
    `Button-size_${size}`,
    active && "Button-clicking",
  ];

  const clicking = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(true);

    setTimeout(() => {
      setActive(false);
    }, 400);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div>
      <button
        className={rootClasses.join(" ")}
        onClick={(event) => clicking(event)}
      >
        <span className="Button-label">{children}</span>
      </button>
    </div>
  );
};

export default Button;
