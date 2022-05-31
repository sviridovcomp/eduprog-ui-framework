import React, { FC } from "react";
import { defaultProps } from "@utils/defaultProps";
import "./Spinner.scss";
import clsx from "clsx";

export type SpinnerPropsType = defaultProps & {
  color: "primary" | "secondary" | "accent";
  mode: "border" | "growing";
};

const Spinner: FC<SpinnerPropsType> = ({ className = "", mode, color }) => {
  const rootClasses = clsx(
    "Spinner",
    { [`Spinner-${mode}`]: mode },
    { [`Spinner-${mode}-${color}`]: mode && color },
    className
  );

  return (
    <div className={rootClasses}>
      <span className="Spinner-label">Loading...</span>
    </div>
  );
};

export default Spinner;
