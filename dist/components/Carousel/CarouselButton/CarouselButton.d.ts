import React, { FC } from "react";
import "./CarouselButton.scss";
import { defaultProps } from "@utils/defaultProps";
export interface ICarouselButtonProps extends defaultProps {
    direction?: "left" | "right";
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const CarouselButton: FC<ICarouselButtonProps>;
export default CarouselButton;
