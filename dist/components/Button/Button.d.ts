import React, { FC } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type ButtonPropsType = defaultProps & {
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
    /**
     *  Имя кнопки в DOM
     */
    name?: string;
    /**
     * Управление шириной кнопки. При значении 'available' растягивает кнопку на ширину родителя
     */
    width?: "default" | "available";
    /**
     * Список произвольных элементов в левом слоте.
     */
    contentLeft?: React.ReactNode;
    /**
     * Список произвольных элементов в правом слоте.
     */
    contentRight?: React.ReactNode;
};
/**
 * Компонент создающий кнопки
 */
declare const Button: FC<ButtonPropsType>;
export default Button;
