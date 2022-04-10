import React, { FC } from "react";
import "./Expand.scss";
export declare type CollapsePropsType = {
    children: React.ReactNode;
    open?: boolean;
    transition?: "fade" | "slide";
};
declare const Expand: FC<CollapsePropsType>;
export default Expand;
