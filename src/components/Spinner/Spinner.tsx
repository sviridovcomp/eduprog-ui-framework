import React, { FC } from "react";
import { defaultProps } from "@utils/defaultProps";
import "./Spinner.scss";
import classList from "@utils/classList/classList";

export type SpinnerPropsType = defaultProps & {
  color:
    | "primary"
    | "secondary"
    | "accent";
  mode:
    | "border"
    | "growing";
};

const Spinner: FC<SpinnerPropsType> = ({ className, mode, color }) => {
  const rootClasses = [
    "Spinner",
    `Spinner-${mode}`,
    `Spinner-${mode}-${color}`,
    className ? className : "",
  ];

  return (
    <div className={classList(rootClasses)}>
      <span className="Spinner-label">Loading...</span>
    </div>
  );
};

export default Spinner;
