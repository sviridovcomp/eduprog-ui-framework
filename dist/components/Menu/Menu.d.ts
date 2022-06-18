import React, { FC } from "react";
import "./Menu.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type MenuPropsType = defaultProps & {
    /**
     * Trigger element, on clicking on which a popup opens
     */
    toggle: React.ReactNode;
    /**
     * Direction of popup opening
     */
    direction: "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right";
    /**
     * Remove the popup direction arrow
     */
    clearly?: boolean;
    /**
     * Dropdown to the full size of the parent unit
     */
    fullwidth?: boolean;
    /**
     * When the dropdown closes
     */
    dismissible?: "always" | "toggle" | "outside";
    onOpen?: () => void;
    onClose?: () => void;
    transition?: "fade" | "slide";
    contentStyle?: React.CSSProperties;
    rootClassNames?: string;
};
/**
 * Component for creating a drop-down list
 */
declare const Menu: FC<MenuPropsType>;
export default Menu;
