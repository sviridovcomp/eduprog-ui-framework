import { defaultProps } from "@utils/defaultProps";
import React, { FC } from "react";
import "./Checkbox.scss";
export declare type CheckboxPropsType = defaultProps & {
    /**
     * Content to the right or left of the Checkbox
     */
    children?: React.ReactNode;
    /**
     * layout of `children`
     */
    position?: "left" | "right";
    /**
     * View mode
     */
    view?: "default" | "primary" | "secondary" | "accent";
    /**
     * Controls the width of the checkbox. When 'available' it stretches the checkbox by the width of the parent
     */
    width?: "auto" | "available";
    /**
     * Inactive checkbox state: state when the checkbox is displayed but not available for user actions
     */
    disabled?: boolean;
    /**
     * Switch state: on or off
     */
    checked?: boolean;
    /**
     * Callback is called when the value of the checkbox changes
     */
    onChange?: () => void;
    /**
     * Automatic focus on checkbox
     */
    autoFocus?: boolean;
    style?: React.CSSProperties;
    checkboxFakeClassName?: string;
    checkboxFakeStyle?: React.CSSProperties;
    checkboxLabelClassName?: string;
    checkboxLabelStyle?: React.CSSProperties;
};
declare const Checkbox: FC<CheckboxPropsType>;
export default Checkbox;
