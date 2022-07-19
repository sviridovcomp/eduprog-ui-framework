import React, { FC } from "react";
import "./Dialog.scss";
export declare type DialogPropsType = {
    /**
     * Headline
     */
    label?: string;
    /**
     * Size
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "fluid" | "page";
    /**
     * Makes the dialog visible
     */
    open?: boolean;
    /**
     * Event triggered by closing the dialog
     */
    onClose?: () => void;
    /**
     * Vertical alignment
     */
    verticalAlign?: "top" | "center";
    /**
     * Root Styles of dialog
     */
    rootStyle?: React.CSSProperties;
    /**
     * Root ClassName
     */
    rootClassName?: string;
    hasCloser?: boolean;
};
/**
 * Component to creating dialog windows
 */
declare const Dialog: FC<DialogPropsType>;
export default Dialog;
