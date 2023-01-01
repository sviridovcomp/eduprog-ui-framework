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
    verticalAlign?: "top" | "center" | "bottom";
    /**
     * Root Styles of dialog
     */
    rootStyle?: React.CSSProperties;
    /**
     * Root ClassName of dialog
     */
    rootClassName?: string;
    bodyStyle?: React.CSSProperties;
    /**
     * Body ClassName of dialog
     */
    bodyClassName?: string;
    hasCloser?: boolean;
    children?: React.ReactNode;
};
/**
 * Component to creating dialog windows
 */
declare const Dialog: FC<DialogPropsType>;
export default Dialog;
