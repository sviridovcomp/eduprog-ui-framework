import React, { FC } from "react";
import clsx from "clsx";
import "./Progress.scss";

export interface IProgressProps {
  value: number;
  color?: "primary" | "secondary" | "accent";
  striped?: boolean;
  animated?: boolean;
}

const Progress: FC<IProgressProps> = ({
  value,
  color = "primary",
  striped = false,
  animated = false,
}) => {
  const rootClasses = clsx(
    "progress-bar",
    {
      [`progress-color_${color}`]: color,
    },
    { "progress-bar-striped": striped },
    { "progress-bar-animated": animated }
  );

  return (
    <div className="progress">
      <div className={rootClasses} style={{ width: `${value}%` }} />
    </div>
  );
};

export default Progress;
