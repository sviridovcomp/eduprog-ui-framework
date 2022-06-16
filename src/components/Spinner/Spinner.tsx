import React, { FC } from "react";
import { defaultProps } from "@utils/defaultProps";
import "./Spinner.scss";
import clsx from "clsx";

export type SpinnerPropsType = defaultProps & {
  color: "primary" | "secondary" | "accent" | string;
  mode?: "border" | "growing";

  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

/**
 *
 * @param param0
 * @returns
 */
const Spinner: FC<SpinnerPropsType> = ({
  className = "",
  /**
   * Spinner mode
   * 
   * Border — use the border spinners for a lightweight loading indicator.
   * Growing — if you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!


   */
  mode = "growing",

  /**
   *
   */
  color = "primary",
  size = "md",
}) => {
  const rootClasses = clsx(
    className,
    "Spinner",
    { [`Spinner-size_${size}`]: size },
    { [`Spinner-${mode}`]: mode },
    {
      [`Spinner-${mode}-${color}`]:
        mode &&
        (color == "primary" || color == "secondary" || color == "accent"),
    }
  );

  return (
    <div
      className={rootClasses}
      role="status"
      style={{
        color: color,
      }}
    >
      <span className="Spinner-label">Loading...</span>
    </div>
  );
};

export default Spinner;
