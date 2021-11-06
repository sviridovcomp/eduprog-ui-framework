import React, { FC } from "react";
import "./Button.scss";
export declare type ButtonPropsType = {
  color?: "primary" | "secondary" | "accent" | "success" | "danger" | null;
  type?: "default" | "action" | "link" | "pseudo" | "clear" | "raised";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const Button: FC<ButtonPropsType>;
export default Button;
