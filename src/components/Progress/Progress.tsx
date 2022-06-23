import React, { FC } from "react";
import clsx from "clsx";
import "./Progress.scss";

export type colorVariants = "primary" | "secondary" | "accent";

export interface IProgressProps {
  value: number;
  color: colorVariants | string;
  /**
   *
   */
  striped?: boolean;
  /**
   * Animated -- progress bar animation, only works in conjunction with the striped property.
   */
  animated?: boolean;
}

/**
 * Component that indicates the progress of an operation.
 */
const Progress: FC<IProgressProps> = ({
  value,
  color,
  striped = false,
  animated = false,
}) => {
  const rootClasses = clsx(
    "progress-bar",
    {
      [`progress-color_${color}`]:
        color == "primary" || color == "secondary" || color == "accent",
    },
    { "progress-bar-striped": striped },
    { "progress-bar-animated": animated }
  );

  return (
    <div className="progress">
      <div
        className={rootClasses}
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  );
};

export default Progress;
