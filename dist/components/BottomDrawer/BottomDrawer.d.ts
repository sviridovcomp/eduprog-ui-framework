import React, { FC } from "react";
import "./BottomDrawer.scss";
export interface IBottomDrawerProps {
    /**
     * Is BottomDrawer visible
     */
    open: boolean;
    /**
     * onClose callback handler
     */
    onClose: () => void;
    /**
     * Animation duration in BottomDrawer
     */
    duration?: number;
    /**
     * Hide scrollbars
     */
    hideScrollbars?: boolean;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    className?: string;
    backdropClassname?: string;
    children?: React.ReactNode;
}
/**
 * This component creates a bottom curtain for mobile devices.
 */
declare const BottomDrawer: FC<IBottomDrawerProps>;
export default BottomDrawer;
