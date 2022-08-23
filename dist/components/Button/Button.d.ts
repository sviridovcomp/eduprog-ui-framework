import React, { FC } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type ButtonPropsType = defaultProps & {
    children?: React.ReactNode;
    /**
     * View mode
     */
    view?: "default" | "action" | "link" | "pseudo" | "clear" | "raised" | "accent";
    /**
     * Size
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * onClick event callback handler
     */
    onClick?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onPointerDown event callback handler
     */
    onPointerDown?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onPointerUp event callback handler
     */
    onPointerUp?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onPointerLeave event callback handler
     */
    onPointerLeave?: (event?: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * onBlur event callback handler
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
     * Left additional content
     */
    contentLeft?: React.ReactNode;
    /**
     * Right additional content
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
    /**
     * Button label styles
     */
    labelStyles?: React.CSSProperties;
    /**
     * Button label additional class
     */
    labelClassName?: string;
};
/**
 * Component to creating button.
 */
declare const Button: FC<ButtonPropsType>;
export default Button;
