import React, { FC } from "react";
import "./Skeleton.scss";
import clsx from "clsx";

export interface ISkeletonProps {
  variant?: "text" | "circular" | "rectangular";
  animation?: "wave" | "pulse";
  width?: number;
  height?: number;
  borderRadius?: number | "auto";
}

const Skeleton: FC<ISkeletonProps> = ({
  variant = "text",
  animation = "pulse",
  borderRadius = "auto",
  width,
  height,
  children,
}) => {
  const rootClasses = clsx(
    "Skeleton",
    { [`Skeleton-variant_${variant}`]: variant },
    { [`Skeleton-animation_${animation}`]: animation }
  );

  return (
    <span
      style={{
        width: width,
        height: height,
        borderRadius: `${borderRadius}rem`,
      }}
      className={rootClasses}
    >
      {children}
    </span>
  );
};

export default Skeleton;
