import React, { FC } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type ButtonPropsType = defaultProps & {
    /**
     * Button view
     */
    view?: "default" | "action" | "link" | "pseudo" | "clear" | "raised" | "accent";
    /**
     * Button size
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * onClick event handler
     */
    onClick?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onPointerDown event handler
     */
    onPointerDown?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onPointerUp event handler
     */
    onPointerUp?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onPointerLeave event handler
     */
    onPointerLeave?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onBlur event handler
     */
    onBlur?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
    /**
     * Button name in the DOM
     */
    name?: string;
    /**
     * Controls the width of the button. When 'available' it stretches the button by the width of the parent
     */
    width?: "auto" | "available";
    /**
     * The list of arbitrary items in the left slot.
     */
    contentLeft?: React.ReactNode;
    /**
     * The list of arbitrary items in the right slot.
     */
    contentRight?: React.ReactNode;
    /**
     * Button type
     */
    type?: "button" | "reset" | "submit";
    /**
     * Button label alignment by width
     */
    labelJustifyContent?: "center" | "space-around";
    /**
     * Button label alignment by height
     */
    labelAlignItems?: "center";
    /**
     * Inactive button state: state when the button is displayed but not available for user actions
     */
    disabled?: boolean;
    /**
     * Rounded button
     */
    rounded?: boolean;
    /**
     * Styling to visually highlight progress
     */
    progress?: boolean;
};
declare const Button: FC<ButtonPropsType>;
export default Button;
