import React, { FC } from "react";
import "./CarouselButton.scss";
import { ButtonPropsType } from "@components/Button/Button";
export interface ICarouselButtonProps extends ButtonPropsType {
    direction?: "left" | "right";
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const CarouselButton: FC<ICarouselButtonProps>;
export default CarouselButton;
