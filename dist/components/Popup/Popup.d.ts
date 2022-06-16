import React, { FC } from "react";
import "../Menu/Menu.scss";
export declare type PopupProps = {
    open?: boolean;
    /**
     * Direction
     */
    direction: "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right";
    /**
     * Remove the arrow pointing in the direction of the popup
     */
    clearly?: boolean;
    /**
     * Popup to the full size of the parent block
     */
    fullwidth?: boolean;
    /**
     * onClose callback handler
     */
    onClose?: () => void;
    /**
     * Content styles
     */
    contentStyle?: React.CSSProperties;
    /**
     * Content className
     */
    contentClassName?: string;
    /**
     * Wrapper styles
     */
    wrapperStyle?: React.CSSProperties;
    /**
     * Wrapper className
     */
    wrapperClassName?: string;
    /**
     * Root styles
     */
    rootStyle?: React.CSSProperties;
    /**
     * Root className
     */
    rootClassName?: string;
};
/**
 * A Popup can be used to display some content on top of another.
 */
declare const Popup: FC<PopupProps>;
export default Popup;
