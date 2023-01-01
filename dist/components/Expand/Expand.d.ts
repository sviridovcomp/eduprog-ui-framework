import React, { FC } from "react";
import "./Expand.scss";
export type ExpandProps = {
    /**
     * Make the expand open
     */
    open?: boolean;
    /**
     * Transition when opening
     */
    transition?: "fade" | "slide";
    /**
     * Transition duration
     */
    duration?: number;
    children?: React.ReactNode;
};
/**
 * Component to show expandable content
 */
declare const Expand: FC<ExpandProps>;
export default Expand;
