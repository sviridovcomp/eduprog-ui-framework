import React, { FC } from "react";
import "./Button.scss";
export declare type ButtonPropsType = {
    /**
     * Цвет кнопки
     */
    color?: "primary" | "secondary" | "accent" | "success" | "danger";
    /**
     * Тип кнопки
     */
    type?: "default" | "action" | "link" | "pseudo" | "clear" | "raised";
    /**
     * Размер кнопки
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * Обработчик клика по кнопке
     */
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};
/**
 * Компонент создающий кнопки
 */
declare const Button: FC<ButtonPropsType>;
export default Button;
