import { FC } from "react";
import "./Expand.scss";
export declare type ExpandProps = {
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
};
/**
 * Component to show expandable content
 */
declare const Expand: FC<ExpandProps>;
export default Expand;
