import React, { FC } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type ButtonPropsType = defaultProps & {
    /**
     * Тип кнопки
     */
    view?: "default" | "action" | "link" | "pseudo" | "clear" | "raised" | "accent";
    /**
     * Размер кнопки
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * Обработчик клика по кнопке
     */
    onClick?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    onPointerDown?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    onPointerUp?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    onPointerLeave?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    onBlur?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
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
    /**
     * Тип поведения кнопки в форме
     */
    type?: "button" | "reset" | "submit";
    /**
     * Выравнивание лейбла кнопки по ширине
     */
    labelJustifyContent?: "center" | "space-around";
    /**
     * Выравнивание лейбла кнопки по высоте
     */
    labelAlignItems?: "center";
    /**
     * Выключена ли кнопка
     */
    disabled?: boolean;
    /**
     * Круглая кнопка
     */
    rounded?: boolean;
    /**
     * Прогресс
     */
    progress?: boolean;
};
/**
 * Компонент создающий кнопки
 */
declare const Button: FC<ButtonPropsType>;
export default Button;
