import React, { FC } from "react";
import Button from "@components/Button";
import "./CarouselButton.scss";
import clsx from "clsx";
import { ButtonPropsType } from "@components/Button/Button";

export interface ICarouselButtonProps extends ButtonPropsType {
  direction?: "left" | "right";
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const CarouselButton: FC<ICarouselButtonProps> = ({
  direction = "left",
  style,
  className = "",
  onClick,
  ...rest
}) => {
  const directionRouting = new Map([
    ["left", 0],
    ["right", 180],
  ]);

  return (
    <Button
      rounded
      style={{
        ...style,
      }}
      className={clsx("CarouselButton", { [`${className}`]: className })}
      onClick={onClick}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
        style={{
          transform: `rotate(${directionRouting.get(direction)}deg)`,
        }}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
      </svg>
    </Button>
  );
};

export default CarouselButton;
