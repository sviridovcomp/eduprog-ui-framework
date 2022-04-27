import React, { FC } from "react";
import "./Checkbox.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type CheckboxPropsType = defaultProps & {
    /**
     * контент слева или справа чекбокса
     */
    children?: React.ReactNode;
    /**
     * Положение `children`
     */
    position?: "left" | "right";
    /**
     * Цвет чекбокса
     */
    type: "base" | "primary" | "secondary" | "accent";
    /**
     * Checkbox располагается во всю ширину родителя
     */
    fullwidth?: boolean;
    /**
     * Отключен ли checkbox
     */
    disabled?: boolean;
    /**
     * Checkbox установлен
     */
    checked?: boolean;
    /**
     * Коллбэк вызывается при изменении значения чекбокса
     */
    onChange?: () => void;
    autoFocus?: boolean;
    style?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
};
/**
 * Компонент чекбокса.
 */
declare const Checkbox: FC<CheckboxPropsType>;
export default Checkbox;
